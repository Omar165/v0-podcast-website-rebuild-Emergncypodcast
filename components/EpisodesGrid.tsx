"use client"
import { memo, useMemo } from "react"
import type { Episode } from "@/lib/episodes"
import { EpisodeCard } from "./EpisodeCard"

interface EpisodesGridProps {
  episodes: Episode[]
  featured?: boolean
}

const EpisodesGrid = memo<EpisodesGridProps>(function EpisodesGrid({ episodes, featured = false }) {
  const gridClasses = useMemo(() => {
    return `grid gap-6 ${featured ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`
  }, [featured])

  if (episodes.length === 0) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-muted-foreground text-lg">No episodes found.</p>
        <p className="text-muted-foreground/70 text-sm mt-2">Try adjusting your search criteria.</p>
      </div>
    )
  }

  return (
    <section
      className={gridClasses}
      role="feed"
      aria-label={`${episodes.length} podcast episodes`}
      data-testid="episodes-grid"
    >
      {episodes.map((episode, index) => (
        <EpisodeCard
          key={episode.slug}
          episode={episode}
          featured={featured && index === 0}
          priority={index < 3} // Added priority loading for first 3 episodes
        />
      ))}
    </section>
  )
})

export { EpisodesGrid }
