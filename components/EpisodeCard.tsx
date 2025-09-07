"use client"

import type React from "react"
import { memo, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Episode } from "@/lib/episodes"

interface EpisodeCardProps {
  episode: Episode
  featured?: boolean
  priority?: boolean
}

const EpisodeCard = memo<EpisodeCardProps>(function EpisodeCard({ episode, featured = false, priority = false }) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = useCallback(() => {
    setImageError(true)
    setIsLoading(false)
  }, [])

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      const link = e.currentTarget.querySelector("a") as HTMLAnchorElement
      if (link) link.click()
    }
  }, [])

  return (
    <article
      className={`
        glass-card overflow-hidden transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl 
        focus-within:-translate-y-2 group relative
        ${featured ? "lg:col-span-2" : ""}
      `}
      role="article"
      aria-labelledby={`episode-${episode.slug}-title`}
      data-testid={`episode-card-${episode.slug}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Link
        href={`/episodes/${episode.slug}`}
        className="block focus-visible:outline-none"
        aria-describedby={`episode-${episode.slug}-summary`}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {!imageError ? (
            <Image
              src={episode.image || "/placeholder.svg"}
              alt={`Cover image for ${episode.title}`}
              fill
              className={`
                object-cover transition-all duration-700 group-hover:scale-110
                ${isLoading ? "opacity-0" : "opacity-100"}
              `}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Image unavailable</span>
            </div>
          )}

          {/* Loading skeleton */}
          {isLoading && !imageError && <div className="absolute inset-0 bg-muted animate-pulse" />}

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Episode Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="glass-card p-4 border border-white/20">
              <div className="text-white/90 text-sm font-semibold mb-2 tracking-wide">Episode {episode.number}</div>
              <h3
                id={`episode-${episode.slug}-title`}
                className={`
                  text-white font-bold leading-tight
                  ${featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}
                `}
              >
                {episode.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-10">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <time dateTime={episode.date} className="font-semibold tracking-wide">
              {episode.datePretty}
            </time>
            <span
              className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
              aria-label={`Duration: ${episode.duration}`}
            >
              {episode.duration}
            </span>
          </div>

          {/* Summary */}
          <p
            id={`episode-${episode.slug}-summary`}
            className="text-foreground/80 mb-6 line-clamp-3 text-lg leading-relaxed font-serif"
          >
            {episode.summary}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">
              <span className="sr-only">Hosted by: </span>
              {episode.guestNames.join(" • ")}
            </div>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Episode tags">
              {episode.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="inline-flex items-center rounded-full bg-secondary/10 border border-secondary/20 px-3 py-1 text-xs font-semibold text-secondary transition-all duration-300 hover:bg-secondary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Indicator */}
        <div
          className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
          aria-hidden="true"
        />
      </Link>
    </article>
  )
})

export { EpisodeCard }
