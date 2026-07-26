// Static poem data — the source of truth for the collection.
// These are fixed art pieces, so they live in code (no runtime DB fetch),
// which keeps the landing and poetry pages identical in dev and production.

export type Poem = {
  id: string
  title: string
  imageUrl: string
  alt: string
  width: number
  height: number
  /** Featured poems appear on the landing page, in this order. */
  featured?: number
}

export const poems: Poem[] = [
  {
    id: 'dovefeather',
    title: 'DoveFeather Vision',
    imageUrl: '/Assets/DoveFeatherVision_001.png',
    alt: 'DoveFeather Vision — a poem by Ian V Crispi',
    width: 1000,
    height: 1000,
    featured: 0,
  },
  {
    id: 'rainbow-tears',
    title: 'Rainbow Tears',
    imageUrl: '/Assets/RainbowTears_Final.png',
    alt: 'Rainbow Tears — a poem by Ian V Crispi',
    width: 1000,
    height: 1000,
    featured: 1,
  },
  {
    id: 'psyberdelic',
    title: 'PsyberDelic',
    imageUrl: '/Assets/PsyberDelic_Final.png',
    alt: 'PsyberDelic — a poem by Ian V Crispi',
    width: 875,
    height: 1200,
    featured: 2,
  },
  {
    id: 'trust',
    title: 'Trust',
    imageUrl: '/Assets/Trust-Iridescent.png',
    alt: 'Trust — a poem by Ian V Crispi',
    width: 474,
    height: 915,
  },
  {
    id: 'your-song',
    title: 'Your Song',
    imageUrl: '/Assets/YourSong_Final.png',
    alt: 'Your Song — a poem by Ian V Crispi',
    width: 559,
    height: 1127,
  },
  {
    id: 'luscious-death',
    title: 'Luscious Death',
    imageUrl: '/Assets/LusciousDeath_Final.png',
    alt: 'Luscious Death — a poem by Ian V Crispi',
    width: 1000,
    height: 1000,
  },
  {
    id: 'mad-kiss',
    title: 'Mad Kiss',
    imageUrl: '/Assets/MadKiss_Final.png',
    alt: 'Mad Kiss — a poem by Ian V Crispi',
    width: 1000,
    height: 1000,
  },
]

/** Poems featured on the landing page, in featured order. */
export const featuredPoems: Poem[] = poems
  .filter((p) => p.featured !== undefined)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0))
