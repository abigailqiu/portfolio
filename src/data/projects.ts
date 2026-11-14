export type ProjectLink = { label: string; href: string }

export type MediaRef =
  | { kind: 'image'; src: string; alt?: string; position?: string }
  | { kind: 'video'; src: string; poster?: string }
  | { kind: 'stl'; src: string; color?: string; background?: string }

export type ProjectSection = {
  heading: string
  body: string
  media?: MediaRef
  mediaNote?: string
}

export type Project = {
  slug: string
  title: string
  tag: string
  year: string
  /** Card blurb, ≤ 140 chars */
  blurb: string
  /** Placeholder / backdrop colour */
  swatch: string
  tagBg: string
  tilt: number
  /** Card preview. Omit to show a labelled placeholder */
  cover?: MediaRef
  imageNote: string
  /** Project page intro, 2–3 sentences */
  summary: string
  /** Big media at the top of the project page (defaults to cover) */
  hero?: MediaRef
  heroNote?: string
  facts: {
    role: string
    tools: string[]
    time: string
    links: ProjectLink[]
  }
  sections: ProjectSection[]
  marginNote?: string
  gallery?: { media?: MediaRef; swatch: string; note: string }[]
}

export const projects: Project[] = [
  {
    slug: 'terracotta-tpms',
    title: 'Terracotta TPMS Structures',
    tag: 'research',
    year: '2024 – 25',
    blurb: 'Pulling drinking water out of the air with 3D-printed clay and silica gel.',
    swatch: '#E8C4A8',
    tagBg: '#F2B705',
    tilt: -1.5,
    imageNote: 'spinning TPMS disk',
    cover: { kind: 'stl', src: '/work/tpms/tpms.stl', color: '#C8744A', background: '#F3E3D3' },
    hero: { kind: 'stl', src: '/work/tpms/tpms.stl', color: '#C8744A', background: '#F3E3D3' },
    heroNote: 'drag to spin · scroll to rotate',
    summary:
      'Atmospheric water harvesting with desiccant-coated clay. I 3D-printed terracotta disks in a triply periodic minimal surface (TPMS) pattern, dip-coated them in silica gel, and tested how fast they pull moisture from humid air and release it again. The work became a Stockholm Junior Water Prize paper.',
    facts: {
      role: 'researcher · SCENE intern, ASU',
      tools: ['TRONXY Moore 2 clay printer', 'earthenware terracotta', 'silica gel', 'CAD / STL', 'humidity rig'],
      time: '[~8 months]',
      links: [{ label: 'poster (pdf) ↗', href: '/work/tpms/sjwp-poster.pdf' }],
    },
    sections: [
      {
        heading: 'the idea',
        body: 'Our atmosphere holds about six times more water than every lake and river combined. Most ways of getting at it either need high humidity (fog nets) or a lot of energy (refrigeration). Desiccants work in dry air too — so the question was whether a cheap, natural, high-surface-area material could carry a desiccant coating and still breathe. Clay turned out to be a very good answer: it is porous, handles heat, and was already being used for water (botijos!) long before anyone said “atmospheric water harvesting.”',
        media: { kind: 'image', src: '/work/tpms/fired-disks.jpg', alt: 'Three fired terracotta TPMS disks' },
      },
      {
        heading: 'making the disks',
        body: 'A Schwarz Diamond TPMS has about 30% more surface area per unit cell than a honeycomb, with channels that connect in every direction so air can actually move through. I printed 52 mm disks with 2 mm walls on a ceramic 3D printer, first in air-dry clay to tune speed and flow, then in cone-06 earthenware for the real tests. Then came the coating experiments: suspension concentration, dip vs. spin vs. spray, how many layers before the channels clog or the coat cracks.',
        media: { kind: 'video', src: '/work/tpms/printing.mp4', poster: '/work/tpms/printing-poster.jpg' },
      },
      {
        heading: 'what the data said',
        body: 'Coated clay took up about 3× more water than uncoated clay and matched the adsorption capacity of coated plastic structures — while cycling more than 50% faster. The sweet spot was 0.4 g/mL silica gel suspension, two dip-coated layers. It held up across repeated adsorption/desorption cycles at 70 °C, which is the part that matters if you ever want to build a real device out of it.',
        media: { kind: 'image', src: '/work/tpms/sjwp-poster.jpg', alt: 'SJWP research poster' },
      },
      {
        heading: "what I'd do next",
        body: 'Build the actual prototype: a stack of disks, a small fan, a condenser. And look at coating uniformity under a microscope instead of trusting my eyes and a scale.',
      },
    ],
    marginNote:
      'Clay printing scales. There are already industrial cement and concrete printers building houses — the same idea could print a water harvester the size of a wall.',
    gallery: [
      { media: { kind: 'image', src: '/work/tpms/printing.jpg', alt: 'Clay printer extruding a TPMS disk' }, swatch: '#D7E6D0', note: 'printing' },
      { media: { kind: 'image', src: '/work/tpms/tpms-print.jpg', alt: 'A 3D-printed TPMS test block held in a hand' }, swatch: '#CFD8E3', note: 'TPMS test block' },
    ],
  },
  {
    slug: 'shooting-on-film',
    title: 'Shooting on Film',
    tag: 'pinhole photography',
    year: '2026',
    blurb: 'A camera with no lens, a few seconds of patience, and Boston rendered in soft focus.',
    swatch: '#CFD8E3',
    tagBg: '#CFE0FF',
    tilt: 1,
    imageNote: 'pinhole shot',
    cover: { kind: 'image', src: '/work/film/bpl-reading-room.jpg', alt: 'Pinhole photograph of the Boston Public Library reading room', position: 'center 40%' },
    hero: { kind: 'image', src: '/work/film/bpl-reading-room.jpg', alt: 'Pinhole photograph of the Boston Public Library reading room', position: 'center 45%' },
    summary:
      '[Two or three sentences: what the camera is — 3D-printed? a tin? — what film or paper you shoot on, and why you like the slowness of it.]',
    facts: {
      role: 'photographer · camera builder',
      tools: ['[pinhole camera — 3D-printed?]', '[film / paper stock]', '[scanner]'],
      time: 'ongoing',
      links: [],
    },
    sections: [
      {
        heading: 'the camera',
        body: '[How you made or got the camera. Pinhole size, focal length, exposure times you ended up with. The STL can go here as a spinning model once you drop it in — same viewer as the TPMS page.]',
        mediaNote: 'camera STL / photo of the camera',
      },
      {
        heading: 'the pictures',
        body: '[What you’ve shot so far and what surprised you. The long exposures turn people into ghosts and make the BPL reading room look like it is underwater.]',
        media: { kind: 'image', src: '/work/film/bpl-courtyard.jpg', alt: 'Pinhole photograph of the Boston Public Library courtyard' },
      },
    ],
    marginNote: '[A margin note — the exposure time of your favorite shot, or the one that didn’t come out.]',
    gallery: [
      { media: { kind: 'image', src: '/work/film/mit.jpg', alt: 'Pinhole photograph of a building at MIT' }, swatch: '#E8C4A8', note: 'MIT' },
      { media: { kind: 'image', src: '/work/film/bpl-courtyard.jpg', alt: 'Pinhole photograph of the BPL courtyard' }, swatch: '#EFE3C2', note: 'BPL courtyard' },
    ],
  },
  {
    slug: 'spotify-listening',
    title: 'What does my Spotify listening look like?',
    tag: 'data viz',
    year: '2026',
    blurb: 'A year of listening history as a 3D point cloud you can fly through, built in TouchDesigner.',
    swatch: '#1E1B16',
    tagBg: '#DFF1D8',
    tilt: -0.8,
    imageNote: 'point cloud',
    cover: { kind: 'video', src: '/work/spotify/cloud.mp4', poster: '/work/spotify/cloud-poster.jpg' },
    hero: { kind: 'video', src: '/work/spotify/cloud.mp4', poster: '/work/spotify/cloud-poster.jpg' },
    summary:
      '[Two or three sentences: what data you pulled (streaming history? audio features?), what each sphere and color means, and what you noticed about yourself.]',
    facts: {
      role: 'designer · builder',
      tools: ['TouchDesigner', 'Spotify data export', '[python]'],
      time: '[a weekend]',
      links: [],
    },
    sections: [
      {
        heading: 'what you’re looking at',
        body: '[Explain the mapping: axes, sphere size, color = genre / mood / time of day? The clusters are the interesting part — name a couple.]',
      },
      {
        heading: 'how it’s wired',
        body: '[A sentence or two on the TouchDesigner network: data in, instancing, the camera move. This is the screenshot below.]',
        media: { kind: 'image', src: '/work/spotify/touchdesigner-network.png', alt: 'TouchDesigner node network for the visualization' },
      },
    ],
    marginNote: '[Your most-played thing, or the cluster that embarrassed you.]',
    gallery: [
      { media: { kind: 'image', src: '/work/spotify/cloud-poster.jpg', alt: 'Still from the point-cloud visualization' }, swatch: '#DAD4EC', note: 'still' },
    ],
  },
  {
    slug: 'off-hours',
    title: 'Off hours',
    tag: 'hobbies',
    year: 'always',
    blurb: 'Brunch, museums, hwachae, long walks, and one very good cardboard boat.',
    swatch: '#EFE3C2',
    tagBg: '#F6EBC9',
    tilt: -1,
    imageNote: 'collage',
    cover: { kind: 'image', src: '/work/off-hours/gardner-museum.jpg', alt: 'The courtyard of the Isabella Stewart Gardner Museum', position: 'center 30%' },
    hero: { kind: 'image', src: '/work/off-hours/walks.jpg', alt: 'Autumn trees on a walk', position: 'center 60%' },
    summary:
      '[Two or three sentences about what you do when you’re not working — and the reading log, if you want it here.]',
    facts: {
      role: 'me',
      tools: ['a film camera', 'a library card', 'friends'],
      time: 'always',
      links: [],
    },
    sections: [
      {
        heading: 'lately',
        body: '[A few lines: the Gardner Museum, a cardboard boat that needed building, hwachae night, the brunch spot you keep going back to.]',
        media: { kind: 'image', src: '/work/off-hours/boat.jpg', alt: 'A cardboard pirate ship decorated with string lights' },
      },
      {
        heading: 'reading log',
        body: '[Currently: Yesteryear. Then a short list of what came before and one line on each.]',
      },
    ],
    gallery: [
      { media: { kind: 'image', src: '/work/off-hours/brunch.jpg', alt: 'Brunch sandwiches and drinks' }, swatch: '#E8C4A8', note: 'brunch' },
      { media: { kind: 'image', src: '/work/off-hours/hwachae.jpg', alt: 'Making hwachae with friends' }, swatch: '#D7E6D0', note: 'hwachae' },
      { media: { kind: 'image', src: '/work/off-hours/sunset.jpg', alt: 'Sunset over a rocky shoreline' }, swatch: '#F3D9D3', note: 'sunset' },
    ],
  },
  {
    slug: 'around-the-world',
    title: 'Around the World',
    tag: 'teaching',
    year: '2019 →',
    blurb: '[One line about the competition — placeholder until you decide whether it stays.]',
    swatch: '#F3D9D3',
    tagBg: '#FFD6CC',
    tilt: 1.3,
    imageNote: 'no photos yet',
    summary: '[Summary.]',
    facts: { role: 'coach · former competitor', tools: ['[curriculum]', 'whiteboard'], time: 'ongoing', links: [] },
    sections: [
      { heading: 'what it is', body: '[Body.]' },
      { heading: 'what happened', body: '[Body.]' },
    ],
    gallery: [
      { swatch: '#F6EBC9', note: 'photo' },
      { swatch: '#F3D9D3', note: 'photo' },
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
