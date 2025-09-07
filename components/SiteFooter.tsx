"use client"
import { memo } from "react"
import Link from "next/link"
import { Logo } from "./Logo"

const SiteFooter = memo(function SiteFooter() {
  const navigationLinks = [
    { href: "/about", label: "About" },
    { href: "/episodes", label: "Episodes" },
    { href: "/contact", label: "Contact" },
    { href: "/credits", label: "Credits" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ]

  return (
    <footer
      className="glass-card border-t border-white/10 mt-auto"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="site-footer"
    >
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <section className="lg:col-span-2" aria-labelledby="footer-brand">
            <Link
              href="/"
              className="flex items-center space-x-3 mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-lg"
              aria-label="Emergency Exit Podcast homepage"
            >
              <Logo className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Emergency Exit
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed font-serif">
              A light hearted but sharp minded podcast that throws open the magic casement on imaginative thought.
            </p>
          </section>

          {/* Navigation Links */}
          <nav aria-labelledby="footer-navigation">
            <h3 id="footer-navigation" className="font-bold text-lg mb-6 text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-labelledby="footer-legal">
            <h3 id="footer-legal" className="font-bold text-lg mb-6 text-foreground">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="rule my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Emergency Exit Podcast. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with{" "}
            <span className="text-red-500" aria-label="love">
              ♥
            </span>{" "}
            for curious minds
          </p>
        </div>
      </div>
    </footer>
  )
})

export { SiteFooter }
