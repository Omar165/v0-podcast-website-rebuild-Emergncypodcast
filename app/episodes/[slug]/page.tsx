import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/SiteHeader"
import { EpisodeDetailHeader } from "@/components/EpisodeDetailHeader"
import { PlayerBlock } from "@/components/PlayerBlock"
import { SiteFooter } from "@/components/SiteFooter"
import { getEpisodeBySlug } from "@/lib/episodes"

interface EpisodePageProps {
  params: Promise<{ slug: string }>
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = await params
  const episode = getEpisodeBySlug(slug)

  if (!episode) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <EpisodeDetailHeader episode={episode} />

        <div className="container py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Episode Body */}
              <div className="prose prose-lg max-w-none">
                {episode.body.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Player */}
              <PlayerBlock episode={episode} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Episode Details</h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Episode Number</div>
                    <div className="text-2xl font-bold text-brand">{episode.number}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Tags</div>
                    <div className="flex flex-wrap gap-2">
                      {episode.tags.map((tag) => (
                        <span key={tag} className="badge bg-brand text-brand-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Hosts</div>
                    <div className="space-y-1">
                      {episode.guestNames.map((name) => (
                        <div key={name} className="text-sm">
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
