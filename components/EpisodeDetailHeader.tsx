"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ParticleBackground } from "./ParticleBackground"
import type { Episode } from "@/lib/episodes"

interface EpisodeDetailHeaderProps {
  episode: Episode
}

export function EpisodeDetailHeader({ episode }: EpisodeDetailHeaderProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-80 md:h-96 lg:h-[32rem] overflow-hidden">
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        >
          <Image src={episode.image || "/placeholder.svg"} alt={episode.title} fill className="object-cover" priority />
        </div>

        <ParticleBackground density={40} speed={0.3} className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

        {/* Animated overlay elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 animate-morphing-blob blur-2xl"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 animate-morphing-blob blur-3xl"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <div className="container relative -mt-32 z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-morphism rounded-2xl p-8 md:p-12 animate-pulse-glow">
              <h1 className="text-hero font-sans font-black text-white mb-6 animate-text-shimmer">{episode.title}</h1>
              <div className="text-xl text-white/80 font-serif">{episode.guestNames.join(" ~ ")}</div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-morphism rounded-2xl p-8 space-y-6">
              {[
                { label: "Episode", value: episode.number },
                { label: "Date", value: episode.datePretty },
                { label: "Duration", value: episode.duration },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="animate-in slide-in-from-right-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm font-semibold text-white/60 mb-2 tracking-wide">{item.label}</div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                </div>
              ))}

              <div className="animate-in slide-in-from-right-4 duration-500" style={{ animationDelay: "300ms" }}>
                <div className="text-sm font-semibold text-white/60 mb-3 tracking-wide">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {episode.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="glass-morphism px-4 py-2 text-sm font-semibold text-white rounded-full animate-in fade-in duration-300"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
