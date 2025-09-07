import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-8">About Emergency Exit</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Welcome to the emergency exit, a light hearted but sharp minded podcast that throws open the magic
                casement on imaginative thought.
              </p>

              <p className="mb-6">
                Our podcast explores the intersection of literature, philosophy, and culture through engaging
                conversations that challenge conventional thinking. We believe that the best ideas often emerge from
                unexpected places, and we're here to help you discover them.
              </p>

              <p className="mb-6">
                Each episode features thoughtful discussions about books, films, ideas, and the stories that shape our
                understanding of the world. Whether we're diving deep into classic literature or exploring contemporary
                cultural phenomena, our goal is to provide fresh perspectives that inspire curiosity and critical
                thinking.
              </p>

              <p>
                Join us as we weave our way through novels, stories, films, and ideas, always looking for that emergency
                exit that leads to new understanding and insight.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
