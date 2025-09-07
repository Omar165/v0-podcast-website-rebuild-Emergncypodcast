import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you subscribe to our newsletter, contact
                us, or interact with our website.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, send you updates about
                new episodes, and respond to your inquiries.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
