"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Fuse from "fuse.js"
import { ParticleBackground } from "./ParticleBackground"
import { episodes, type Episode } from "@/lib/episodes"

interface EpisodesStripeProps {
  onSearch: (results: Episode[]) => void
}

export function EpisodesStripe({ onSearch }: EpisodesStripeProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const fuse = new Fuse(episodes, {
    keys: ["title", "summary", "guestNames", "tags"],
    threshold: 0.35,
  })

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery).map((result) => result.item)
      onSearch(results)
    } else {
      onSearch(episodes)
    }
  }, [searchQuery, onSearch])

  return (
    <div className="relative py-20 overflow-hidden">
      <ParticleBackground density={60} speed={0.6} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 animate-gradient-shift"></div>

      {/* Morphing background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 animate-morphing-blob blur-2xl"></div>
      <div
        className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 animate-morphing-blob blur-3xl"
        style={{ animationDelay: "8s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero font-sans font-black mb-12 text-white animate-text-shimmer">EPISODES</h1>

          <div className="relative max-w-lg mx-auto">
            <div className="glass-morphism rounded-2xl p-2">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search episodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
