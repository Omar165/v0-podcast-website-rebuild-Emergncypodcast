import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Emergency Exit's website for
                personal, non-commercial transitory viewing only.
              </p>

              <h2>Disclaimer</h2>
              <p>
                The materials on Emergency Exit's website are provided on an 'as is' basis. Emergency Exit makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us through our contact page.</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
