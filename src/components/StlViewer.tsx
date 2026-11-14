import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import styles from './StlViewer.module.css'

type Props = {
  src: string
  /** terracotta by default */
  color?: string
  /** background colour behind the model */
  background?: string
  /** idle spin speed (radians per second) */
  spin?: number
  /** how much page scroll rotates the model (radians per px) */
  scrollFactor?: number
  /** allow click-drag to rotate (project page); off for cards */
  interactive?: boolean
  className?: string
}

/**
 * Lightweight STL viewer: idle spin + rotation driven by page scroll,
 * optional drag. Pauses when offscreen. Respects reduced motion (no idle spin).
 */
export function StlViewer({
  src,
  color = '#C8744A',
  background = 'transparent',
  spin = 0.25,
  scrollFactor = 0.0025,
  interactive = false,
  className,
}: Props) {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mount.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    if (background !== 'transparent') scene.background = new THREE.Color(background)

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 1000)
    const key = new THREE.DirectionalLight(0xffffff, 2.2)
    key.position.set(3, 4, 5)
    const fill = new THREE.DirectionalLight(0xffe8d6, 0.9)
    fill.position.set(-4, -2, 3)
    const rim = new THREE.DirectionalLight(0xcfd8ff, 0.8)
    rim.position.set(0, 3, -5)
    scene.add(key, fill, rim, new THREE.AmbientLight(0xffffff, 0.55))

    const group = new THREE.Group()
    scene.add(group)
    let mesh: THREE.Mesh | null = null

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.78,
      metalness: 0.02,
      flatShading: false,
    })

    new STLLoader().load(src, (geometry) => {
      geometry.computeVertexNormals()
      geometry.center()
      geometry.computeBoundingSphere()
      const r = geometry.boundingSphere?.radius ?? 1
      mesh = new THREE.Mesh(geometry, material)
      // STL files are usually Z-up; tilt so we look slightly down onto the disk
      mesh.rotation.x = -Math.PI / 2
      group.add(mesh)
      camera.position.set(0, r * 0.9, r * 3.1)
      camera.lookAt(0, 0, 0)
      group.rotation.x = 0.35
    })

    // sizing
    const resize = () => {
      const w = el.clientWidth || 1
      const h = el.clientHeight || 1
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    // visibility
    let visible = true
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(el)

    // scroll + drag state
    let scrollRot = 0
    let targetScrollRot = 0
    const onScroll = () => {
      targetScrollRot = window.scrollY * scrollFactor
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    let dragging = false
    let lastX = 0
    let lastY = 0
    let dragX = 0
    let dragY = 0
    const down = (e: PointerEvent) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      el.setPointerCapture(e.pointerId)
    }
    const move = (e: PointerEvent) => {
      if (!dragging) return
      dragY += (e.clientX - lastX) * 0.01
      dragX += (e.clientY - lastY) * 0.01
      lastX = e.clientX
      lastY = e.clientY
    }
    const up = () => {
      dragging = false
    }
    if (interactive) {
      el.addEventListener('pointerdown', down)
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerup', up)
      el.addEventListener('pointercancel', up)
      el.style.cursor = 'grab'
    }

    let raf = 0
    let last = performance.now()
    let idle = 0
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!visible) return
      if (!reduced) idle += spin * dt
      scrollRot += (targetScrollRot - scrollRot) * 0.08
      group.rotation.y = idle + scrollRot + dragY
      group.rotation.x = 0.35 + dragX
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      io.disconnect()
      if (interactive) {
        el.removeEventListener('pointerdown', down)
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerup', up)
        el.removeEventListener('pointercancel', up)
      }
      mesh?.geometry.dispose()
      material.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [src, color, background, spin, scrollFactor, interactive])

  return <div ref={mount} className={`${styles.viewer} ${className ?? ''}`} aria-label="3D model" role="img" />
}
