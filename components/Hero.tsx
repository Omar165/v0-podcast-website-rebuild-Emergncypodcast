import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(22,78,99,0.1),transparent_50%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-display font-sans font-black mb-8 leading-none">
            <span className="block text-foreground/90 mb-4">The</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                Emergency Exit
              </span>
              {/* Enhanced orange shelf/underline with glassmorphism */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-primary/80 via-secondary to-primary/80 rounded-2xl transform -skew-x-6 shadow-2xl backdrop-blur-sm"></div>
              <div className="absolute -bottom-2 left-2 right-2 h-2 bg-gradient-to-r from-white/40 to-white/20 rounded-xl transform -skew-x-6"></div>
            </span>
          </h1>

          <div className="text-section font-serif font-light text-muted-foreground mb-16 tracking-[0.3em] relative">
            <span className="relative z-10">P O D C A S T</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link href="/episodes" className="btn-premium text-xl px-12 py-6 font-bold tracking-wide animate-glow">
              LISTEN NOW
            </Link>
            <Link
              href="/episodes"
              className="btn-glass text-xl px-12 py-6 font-semibold tracking-wide"
              aria-label="Browse all podcast episodes"
            >
              Browse Episodes
            </Link>
          </div>

          <div className="glass-card max-w-4xl mx-auto p-8 lg:p-12">
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed font-serif">
              Welcome to the emergency exit, a light hearted but sharp minded podcast that throws open the magic
              casement on imaginative thought. Listen to us weave our way through novels, stories, films, and ideas that
              have shaped our understanding of the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
