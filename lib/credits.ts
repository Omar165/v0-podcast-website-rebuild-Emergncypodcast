export interface Credit {
  role: string
  name: string
  link?: string
  notes?: string
}

export const credits: Credit[] = [
  {
    role: "Host & Producer",
    name: "Onaissa Abbasi",
    link: "https://twitter.com/onaissa",
    notes: "Lead host and creative director",
  },
  {
    role: "Co-Host",
    name: "Noor XYZ",
    notes: "Philosophy and literature expert",
  },
  {
    role: "Co-Host",
    name: "Moosa XYZ",
    notes: "Cultural commentary and analysis",
  },
  {
    role: "Audio Engineer",
    name: "Alex Thompson",
    link: "https://alexaudio.com",
    notes: "Sound design and post-production",
  },
  {
    role: "Graphic Designer",
    name: "Maya Chen",
    link: "https://mayavisual.com",
    notes: "Brand identity and episode artwork",
  },
  {
    role: "Web Developer",
    name: "Jordan Smith",
    link: "https://jordandev.io",
    notes: "Website development and maintenance",
  },
  {
    role: "Social Media Manager",
    name: "Sam Rodriguez",
    notes: "Community engagement and content strategy",
  },
  {
    role: "Research Assistant",
    name: "Taylor Kim",
    notes: "Episode research and fact-checking",
  },
]
