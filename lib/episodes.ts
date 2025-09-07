export interface Episode {
  number: number
  slug: string
  title: string
  date: string
  datePretty: string
  duration: string
  guestNames: string[]
  image: string
  summary: string
  audioUrl: string
  tags: string[]
  body: string[]
}

export const episodes: Episode[] = [
  {
    number: 10,
    slug: "secret-life-children-literature-part-1",
    title: "The Secret Life of Children's Literature Part 1",
    date: "2024-12-15T00:00:00Z",
    datePretty: "December 15, 2024",
    duration: "45 mins",
    guestNames: ["Onaissa Abbasi", "Noor XYZ", "Moosa XYZ"],
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=800&h=400&fit=crop",
    summary: "Welcome to a world where fantasy meets philosophy, where childhood tales conceal startling truths.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    tags: ["Literature", "Philosophy", "Childhood", "Fantasy"],
    body: [
      "Welcome to a world where fantasy meets philosophy, where childhood tales conceal startling truths. In this episode, join Onaissa Abbasi, Noor, and Moosa as they dive through the tunnel into stories and reveal The Chronicles of Narnia, not with the wonder of eleven year olds, but through the sharpened lens of adulthood from Christian allegory to the undertones, they explore how C.S. Lewis's world isn't just magical, but deeply metaphysical.",
      "Along the way, the trio discusses Tolkien's fairy tales, Harry Potter, Percy Jackson, and Roald Dahl's spice like Chronicles of Narnia. This episode unpacks how Percy childhood tales reflect our collective imagination. This is Part 1 of a two part exploration of children's literature and its many veiled layers. So whether you grew up with these stories or are discovering them anew, buckle up for fresh perspectives on the tales that raised us.",
    ],
  },
  {
    number: 9,
    slug: "digital-minimalism-modern-world",
    title: "Digital Minimalism in the Modern World",
    date: "2024-12-01T00:00:00Z",
    datePretty: "December 1, 2024",
    duration: "38 mins",
    guestNames: ["Sarah Chen", "Marcus Rodriguez"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    summary: "Exploring how to maintain focus and intentionality in our hyperconnected digital age.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    tags: ["Technology", "Minimalism", "Productivity", "Wellness"],
    body: [
      "In an age where our attention is constantly fragmented by notifications, social media, and digital distractions, how do we reclaim our focus and live more intentionally?",
      "Join Sarah Chen and Marcus Rodriguez as they explore the principles of digital minimalism and share practical strategies for creating boundaries with technology while still leveraging its benefits for creativity and connection.",
    ],
  },
  {
    number: 8,
    slug: "art-of-slow-living",
    title: "The Art of Slow Living",
    date: "2024-11-15T00:00:00Z",
    datePretty: "November 15, 2024",
    duration: "42 mins",
    guestNames: ["Elena Vasquez", "James Thompson"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    summary: "Discovering the beauty of slowing down and finding meaning in everyday moments.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    tags: ["Lifestyle", "Mindfulness", "Philosophy", "Wellness"],
    body: [
      "In our fast-paced world, the concept of slow living offers a refreshing alternative to the constant rush and pressure to optimize every moment.",
      "Elena and James discuss how embracing a slower pace can lead to deeper connections, greater creativity, and a more fulfilling life experience.",
    ],
  },
  {
    number: 7,
    slug: "future-of-work-remote-culture",
    title: "The Future of Work and Remote Culture",
    date: "2024-11-01T00:00:00Z",
    datePretty: "November 1, 2024",
    duration: "51 mins",
    guestNames: ["David Kim", "Rachel Foster", "Alex Morgan"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    summary:
      "Examining how remote work is reshaping our understanding of productivity, collaboration, and work-life balance.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    tags: ["Work", "Remote", "Culture", "Future", "Productivity"],
    body: [
      "The pandemic fundamentally changed how we think about work, but what does the future hold for remote and hybrid work cultures?",
      "Our panel of experts discusses the challenges and opportunities of distributed teams, the importance of intentional culture-building, and how organizations can thrive in this new landscape.",
    ],
  },
  {
    number: 6,
    slug: "creativity-constraints-innovation",
    title: "Creativity Through Constraints and Innovation",
    date: "2024-10-15T00:00:00Z",
    datePretty: "October 15, 2024",
    duration: "36 mins",
    guestNames: ["Maya Patel", "Robert Chen"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
    summary:
      "How limitations and boundaries can actually enhance creative thinking and lead to breakthrough innovations.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    tags: ["Creativity", "Innovation", "Design", "Psychology"],
    body: [
      "Contrary to popular belief, unlimited freedom doesn't always lead to the best creative outcomes. Sometimes, constraints are exactly what we need to spark innovation.",
      "Maya and Robert explore how artificial limitations, deadlines, and creative constraints can push us to think differently and produce our most original work.",
    ],
  },
  {
    number: 5,
    slug: "philosophy-everyday-decisions",
    title: "Philosophy in Everyday Decisions",
    date: "2024-10-01T00:00:00Z",
    datePretty: "October 1, 2024",
    duration: "44 mins",
    guestNames: ["Dr. Amanda Wilson", "Carlos Mendez"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    summary: "Applying philosophical frameworks to navigate the complex moral and ethical choices we face daily.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    tags: ["Philosophy", "Ethics", "Decision Making", "Morality"],
    body: [
      "From choosing what to eat for breakfast to making major life decisions, philosophy offers valuable frameworks for thinking through our choices.",
      "Dr. Wilson and Carlos discuss how ancient wisdom and modern philosophical thought can guide us through the complex ethical landscape of contemporary life.",
    ],
  },
]

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug)
}

export function getFeaturedEpisodes(count = 3): Episode[] {
  return episodes.slice(0, count)
}

export function getLatestEpisode(): Episode {
  return episodes[0]
}
