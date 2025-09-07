"use client"

import { useState } from "react"
import { Download, Share2, Play, Pause } from "lucide-react"
import { SiAmazonmusic, SiYoutube, SiSpotify, SiApplepodcasts, SiGoogleplay } from "react-icons/si"
import type { Episode } from "@/lib/episodes"

interface PlayerBlockProps {
  episode: Episode
}

export function PlayerBlock({ episode }: PlayerBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [downloadClicked, setDownloadClicked] = useState(false)
  const [shareClicked, setShareClicked] = useState(false)

  const platforms = [
    { name: "Amazon Music", icon: SiAmazonmusic, href: "#", color: "hover:text-orange-400" },
    { name: "YouTube", icon: SiYoutube, href: "#", color: "hover:text-red-500" },
    { name: "Spotify", icon: SiSpotify, href: "#", color: "hover:text-green-500" },
    { name: "Apple Podcasts", icon: SiApplepodcasts, href: "#", color: "hover:text-purple-500" },
    { name: "Google Podcasts", icon: SiGoogleplay, href: "#", color: "hover:text-blue-500" },
  ]

  const handleDownload = () => {
    setDownloadClicked(true)
    setTimeout(() => setDownloadClicked(false), 600)
  }

  const handleShare = () => {
    setShareClicked(true)
    setTimeout(() => setShareClicked(false), 600)
  }

  return (
    <div className="glass-card border border-white/20 p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-sans">The Emergency Exit</h3>

          <div className="glass-card border border-white/10 p-8 mb-8 relative overflow-hidden">
            {/* Animated background for player */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center h-24 mb-6 relative">
                <div className="flex items-end space-x-1 h-full">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm transition-all duration-300 ${
                        isPlaying
                          ? "bg-gradient-to-t from-primary to-secondary animate-pulse"
                          : "bg-muted-foreground/40"
                      }`}
                      style={{
                        width: "3px",
                        height: `${Math.random() * 70 + 20}%`,
                        animationDelay: `${i * 0.05}s`,
                        transform: isPlaying ? `scaleY(${1 + Math.sin(Date.now() * 0.01 + i) * 0.3})` : "scaleY(1)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-sm">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white ml-0.5" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>

              <audio controls className="w-full h-12 rounded-xl">
                <source src={episode.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleDownload}
              className={`btn-glass gap-3 group relative overflow-hidden ${
                downloadClicked ? "scale-95" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500`}
              ></div>
              <Download
                className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                  downloadClicked ? "animate-bounce" : "group-hover:scale-110"
                }`}
              />
              <span className="relative z-10 font-semibold">Download Transcript</span>
            </button>

            <button
              onClick={handleShare}
              className={`btn-glass gap-3 group relative overflow-hidden ${
                shareClicked ? "scale-95" : ""
              } transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <Share2
                className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                  shareClicked ? "animate-spin" : "group-hover:scale-110"
                }`}
              />
              <span className="relative z-10 font-semibold">Share Episode</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card border border-white/10 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <platform.icon
                      className={`w-10 h-10 mb-3 transition-all duration-300 group-hover:scale-125 ${platform.color} text-muted-foreground`}
                    />
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {platform.name}
                    </span>
                  </div>

                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
