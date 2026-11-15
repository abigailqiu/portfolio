export type ProjectLink = { label: string; href: string }

export type MediaRef =
  | { kind: 'image'; src: string; alt?: string; position?: string }
  | { kind: 'video'; src: string; poster?: string }
  | { kind: 'stl'; src: string; color?: string; background?: string }

export type Caption = { text: string; tone?: 'light' | 'dark' }

/** A framed photo that sits inside the page body */
export type Framed = {
  media: MediaRef
  caption?: Caption
  tilt?: number
  height?: number
  aspect?: string
  fit?: 'cover' | 'contain'
  shadow?: boolean
}

export type ProjectSection = {
  heading?: string
  body?: string
  /** Lines rendered as separate rows (used for the "recent favorites" list) */
  lines?: string[]
  media?: Framed
}

export type Fact = { label: string; value?: string; links?: ProjectLink[] }

export type SideItem =
  | ({ type: 'media' } & Framed)
  | { type: 'note'; title: string; body?: string; bullets?: { lead: string; text: string }[] }

export type Project = {
  slug: string
  title: string
  tag: string
  year: string
  /** Placeholder / backdrop colour */
  swatch: string
  tagBg: string
  tilt: number
  /** Card preview */
  cover: MediaRef
  summary: string
  /** Big media at the top of the project page (defaults to cover) */
  hero?: MediaRef
  heroHeight?: number
  /** handwritten line under the hero, bottom-right */
  heroNote?: string
  /** caption set inside the hero frame, bottom-left */
  heroCaption?: Caption
  facts?: Fact[]
  sections: ProjectSection[]
  side?: SideItem[]
}

export const projects: Project[] = [
  {
    slug: 'terracotta-tpms',
    title: 'Terracotta TPMS Structures',
    tag: 'research',
    year: '2024 – 25',
    swatch: '#E8C4A8',
    tagBg: '#F2B705',
    tilt: -1.5,
    cover: { kind: 'stl', src: '/work/tpms/tpms.stl', color: '#C8744A', background: '#F3E3D3' },
    hero: { kind: 'stl', src: '/work/tpms/tpms.stl', color: '#C8744A', background: '#F3E3D3' },
    heroHeight: 616,
    heroNote: 'drag to spin · scroll to rotate',
    summary:
      'Atmospheric water harvesting with desiccant-coated clay. I 3D-printed terracotta disks, dip-coated them in silica gel, and tested how fast they pull moisture from the air.',
    facts: [
      { label: 'role', value: 'SCENE Intern @ Arizona State University' },
      { label: 'time', value: 'April 2024-April 2026' },
      {
        label: 'links',
        links: [
          { label: 'related lab publication 2025 ↗', href: 'https://doi.org/10.3390/environments12040110' },
          { label: 'poster (pdf) ↗', href: '/work/tpms/sjwp-poster.pdf' },
        ],
      },
    ],
    sections: [
      {
        heading: 'overview',
        body: 'Our atmosphere holds about six times more water than every lake and river combined. Most ways of getting at it either need high humidity (fog nets) or a lot of energy (refrigeration). Desiccants well in drier conditions, so the question was whether a cheap, natural, high-surface-area material could carry a desiccant coating and capture water. Clay is porous, handles heat, and was already being used for water and food jars centuries ago.',
      },
      {
        heading: 'making the disks',
        body: 'A Schwarz Diamond TPMS has about 30% more surface area per unit cell than a honeycomb, with channels that connect in every direction so air can actually move through. I printed 52 mm disks with 2 mm walls on a ceramic 3D printer, first in air-dry clay, then in earthenware (terracotta). Afterwards, I did the dip coating with silica gel desiccant before the disks were tested for water uptake.',
      },
      {
        heading: 'poster',
        media: {
          media: { kind: 'image', src: '/work/tpms/sjwp-poster.jpg', alt: 'SJWP research poster' },
          aspect: '4 / 3',
          fit: 'contain',
          shadow: false,
        },
      },
    ],
    side: [
      {
        type: 'media',
        media: { kind: 'video', src: '/work/tpms/printing.mp4', poster: '/work/tpms/printing-poster.jpg' },
        height: 545,
        fit: 'cover',
      },
      {
        type: 'note',
        title: 'fun fact!',
        body: 'There are already industrial cement and concrete printers building houses; the above image is from an extended project in designing evaporative coolers for local neighborhoods.',
      },
    ],
  },
  {
    slug: 'pinhole-camera',
    title: 'Pinhole Camera',
    tag: 'personal',
    year: '2026',
    swatch: '#CFD8E3',
    tagBg: '#CFE0FF',
    tilt: 1,
    cover: { kind: 'image', src: '/work/film/bpl-reading-room.jpg', alt: 'Pinhole photograph of the Boston Public Library reading room', position: 'center 40%' },
    hero: { kind: 'image', src: '/work/film/bpl-reading-room-hero.jpg', alt: 'Pinhole photograph of the Boston Public Library reading room' },
    heroNote: 'Boston Public Library',
    summary: 'A pinhole camera I 3D-printed and shot on in senior year of high school',
    facts: [
      { label: 'parts', value: 'plastic camera body, soda can, red school folder' },
      { label: 'time', value: 'June-Oct 2025' },
    ],
    sections: [
      {
        heading: 'camera',
        body: 'I printed the body from an online model with ABS plastic and poked a pinhole through a flattened piece of a sprite can with a sewing needle. The aperture is roughly f/135. A circular cutout from an old red physics folder was used for the film viewer and backing, and a sliding shutter covers the hole between shots. Each frame is a 6×9 negative on 120 Kodak color film.',
        media: {
          media: { kind: 'image', src: '/work/film/camera.jpg', alt: '3D-printed pinhole camera', position: 'center 60%' },
          height: 419,
        },
      },
      {
        heading: 'the photos',
        body: "There's a little light leakage in the camera, which caused some streaking in the photos, but was luckily able to get some decent shots!",
      },
    ],
    side: [
      {
        type: 'media',
        media: { kind: 'image', src: '/work/film/mit-crop.jpg', alt: 'My high school' },
        caption: { text: 'My Highschool', tone: 'dark' },
        height: 380,
        tilt: -1.5,
      },
      {
        type: 'media',
        media: { kind: 'image', src: '/work/film/bpl-courtyard-crop.jpg', alt: 'BPL courtyard' },
        caption: { text: 'BPL Courtyard', tone: 'dark' },
        height: 380,
        tilt: 1,
      },
    ],
  },
  {
    slug: 'spotify-listening',
    title: 'What Does My Spotify Listening Look Like?',
    tag: 'personal',
    year: '2026',
    swatch: '#1E1B16',
    tagBg: '#DFF1D8',
    tilt: -0.8,
    cover: { kind: 'video', src: '/work/spotify/cloud.mp4', poster: '/work/spotify/cloud-poster.jpg' },
    hero: { kind: 'video', src: '/work/spotify/cloud.mp4', poster: '/work/spotify/cloud-poster.jpg' },
    heroHeight: 602,
    summary:
      'I pulled my 2026 Spotify streaming history of ~24,000 plays across ~5,400 songs. I trained a word2vec model on my listening sessions, so songs I play in the same sessions end up near each other.',
    facts: [
      { label: 'tools', value: 'Python, TouchDesigner' },
      { label: 'time', value: 'ongoing' },
      { label: 'links', links: [{ label: 'github', href: 'https://github.com/abigailqiu/spot_visual' }] },
    ],
    sections: [
      {
        heading: 'what you’re looking at',
        body: 'Position comes from a 32-dimensional vector for each song, squished down to 3D with UMAP. Close spheres are songs I tend to play together, size is play count, and color is clusters done by HDBSCAN.',
      },
      {
        heading: 'touchdesigner wireframe',
        media: {
          media: { kind: 'image', src: '/work/spotify/touchdesigner-network.png', alt: 'TouchDesigner network', position: '50% 61%' },
          height: 420,
          shadow: false,
        },
      },
    ],
    side: [
      {
        type: 'note',
        title: 'about some clusters:',
        bullets: [
          { lead: 'Orange (the biggest, 353 songs):', text: 'alternative and indie-pop with almost monday, Ariana Grande, Empire of the Sun, The Neighbourhood and The 1975' },
          { lead: 'Hot pink and purple:', text: 'house and dance music, with John Summit, Calvin Harris, Barry Can’t Swim and Ninajirachi' },
          { lead: 'Bright green:', text: 'from my driving playlist with The Weeknd, Tame Impala, Tate McRae and Don Toliver' },
          { lead: 'Yellow:', text: 'mostly pop with Harry Styles, Charli xcx, Noah Kahan and Bruno Mars' },
          { lead: 'Lime green:', text: 'a small Chinese music cluster' },
          { lead: 'Dark blue:', text: 'songs from my late-night playlist with Lana Del Rey, Beach House and Billie Eilish' },
        ],
      },
    ],
  },
  {
    slug: 'for-fun',
    title: 'For Fun!',
    tag: 'personal',
    year: '',
    swatch: '#EFE3C2',
    tagBg: '#F6EBC9',
    tilt: -1,
    cover: { kind: 'image', src: '/work/off-hours/gardner-museum.jpg', alt: 'The courtyard of the Isabella Stewart Gardner Museum', position: 'center 30%' },
    hero: { kind: 'image', src: '/work/off-hours/me.jpg', alt: 'Abigail and friends in Halloween costumes', position: 'center 40%' },
    heroCaption: { text: "Halloween 2026 (I'm on the very right)", tone: 'light' },
    summary:
      'I love eating good food and playing pickleball or tennis; in my free time, I like to try new things and really want to learn how to DJ!',
    sections: [
      {
        heading: 'recent favorite...',
        lines: ['Book: Taiwan Travelogue', 'Movie: You Can See Everything', 'Song: Back to the Start — BUNT.', "Podcast: Don't Be Ugly"],
      },
      {
        media: {
          media: { kind: 'image', src: '/work/off-hours/sunset.jpg', alt: 'Sunset in Jeju' },
          caption: { text: 'sunset in Jeju, Korea', tone: 'light' },
          height: 370,
          tilt: -1.5,
        },
      },
    ],
    side: [
      {
        type: 'media',
        media: { kind: 'image', src: '/work/off-hours/gardner-museum.jpg', alt: 'Gardner Museum' },
        caption: { text: 'ISG Museum', tone: 'light' },
        height: 320,
        tilt: -1.5,
      },
      {
        type: 'media',
        media: { kind: 'image', src: '/work/off-hours/brunch.jpg', alt: 'Brunch' },
        caption: { text: 'Brunch at Tatte', tone: 'dark' },
        height: 300,
        tilt: 1,
      },
    ],
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)

export const neighbours = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: undefined, next: undefined }
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  return { prev, next }
}
