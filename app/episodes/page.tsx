"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/SiteHeader"
import { EpisodesStripe } from "@/components/EpisodesStripe"
import { EpisodesGrid } from "@/components/EpisodesGrid"
import { SiteFooter } from "@/components/SiteFooter"
import { episodes, type Episode } from "@/lib/episodes"

export default function EpisodesPage() {
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(episodes)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <EpisodesStripe onSearch={setFilteredEpisodes} />

        <section className="py-16">
          <div className="container">
            <EpisodesGrid episodes={filteredEpisodes} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
