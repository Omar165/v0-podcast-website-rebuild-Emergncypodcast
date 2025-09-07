import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { credits } from "@/lib/credits"
import { ExternalLink } from "lucide-react"

export default function CreditsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-8 text-center">Credits</h1>

            <p className="text-lg text-muted-foreground mb-12 text-center">
              Meet the talented team behind Emergency Exit Podcast.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {credits.map((credit, index) => (
                <div key={index} className="card p-6">
                  <h3 className="font-semibold text-lg text-brand mb-2">{credit.role}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-medium">{credit.name}</span>
                    {credit.link && (
                      <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-accent hover:text-brand-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {credit.notes && <p className="text-sm text-muted-foreground">{credit.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
