import { SiteHeader } from "@/components/SiteHeader"
import { Hero } from "@/components/Hero"
import { EpisodesGrid } from "@/components/EpisodesGrid"
import { NewsletterCta } from "@/components/NewsletterCta"
import { SiteFooter } from "@/components/SiteFooter"
import { ScrollReveal } from "@/components/ScrollReveal"
import { ParticleBackground } from "@/components/ParticleBackground"
import { getLatestEpisode, getFeaturedEpisodes } from "@/lib/episodes"
import { EpisodeCard } from "@/components/EpisodeCard"
import { SiAmazonmusic, SiYoutube, SiSpotify, SiApplepodcasts, SiGoogleplay } from "react-icons/si"
import { FaHeartCirclePlus } from "react-icons/fa6"

export default function HomePage() {
  const latestEpisode = getLatestEpisode()
  const featuredEpisodes = getFeaturedEpisodes(3)

  const platforms = [
    { name: "Amazon Music", icon: SiAmazonmusic, href: "#", color: "hover:text-orange-400" },
    { name: "YouTube", icon: SiYoutube, href: "#", color: "hover:text-red-500" },
    { name: "Spotify", icon: SiSpotify, href: "#", color: "hover:text-green-500" },
    { name: "iHeartRadio", icon: FaHeartCirclePlus, href: "#", color: "hover:text-pink-500" },
    { name: "Apple Podcasts", icon: SiApplepodcasts, href: "#", color: "hover:text-purple-500" },
    { name: "Google Podcasts", icon: SiGoogleplay, href: "#", color: "hover:text-blue-500" },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <Hero />

        <section className="relative py-24 overflow-hidden">
          <ParticleBackground density={30} speed={0.3} />
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background/80 to-muted/30"></div>

          <div className="container relative z-10">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-section font-sans font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-shimmer">
                  Latest Episode
                </h2>
                <p className="text-xl text-muted-foreground font-serif">Catch up on our most recent conversation</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="max-w-5xl mx-auto">
                <div className="perspective-container">
                  <div className="rotate-3d">
                    <EpisodeCard episode={latestEpisode} featured />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 animate-morphing-blob blur-3xl"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 animate-morphing-blob blur-3xl"
            style={{ animationDelay: "10s" }}
          ></div>

          <div className="container relative z-10">
            <ScrollReveal direction="up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-section font-sans font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Listen Everywhere
                </h2>
                <p className="text-xl text-muted-foreground font-serif">Find us on your favorite podcast platform</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <ScrollReveal
                  key={platform.name}
                  direction="up"
                  delay={200 + index * 100}
                  className={`stagger-animation stagger-${index + 1}`}
                >
                  <a href={platform.href} className="group magnetic-hover liquid-button">
                    <div className="glass-morphism p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10 flex flex-col items-center">
                        <platform.icon
                          className={`w-12 h-12 mb-4 transition-all duration-500 group-hover:scale-125 ${platform.color} text-muted-foreground animate-parallax-float`}
                        />
                        <span className="text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {platform.name}
                        </span>
                      </div>

                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-gradient-shift"></div>
          <ParticleBackground density={40} speed={0.4} className="opacity-50" />

          <div className="container relative z-10">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-section font-sans font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-shimmer">
                  Featured Episodes
                </h2>
                <p className="text-xl text-muted-foreground font-serif">
                  Explore some of our most popular conversations
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="perspective-container">
                <EpisodesGrid episodes={featuredEpisodes} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <NewsletterCta />
      </main>

      <SiteFooter />
    </div>
  )
}
