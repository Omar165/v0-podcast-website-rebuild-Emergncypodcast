"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Menu, X, Instagram, Facebook, Youtube } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import Fuse from "fuse.js"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import { episodes, type Episode } from "@/lib/episodes"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Episode[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fuse = new Fuse(episodes, {
    keys: ["title", "summary", "guestNames", "tags"],
    threshold: 0.35,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery).map((result) => result.item)
      setSearchResults(results.slice(0, 5))
      setIsSearchOpen(true)
    } else {
      setSearchResults([])
      setIsSearchOpen(false)
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/episodes", label: "Episodes" },
    { href: "/contact", label: "Contact" },
    { href: "/credits", label: "Credits" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass-card border-white/10 shadow-2xl"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Logo className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-secondary group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-sans font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            emergency exit
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-6 py-3 text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 rounded-xl hover:bg-white/5 group"
            >
              {item.label}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          {/* Premium Search */}
          <div ref={searchRef} className="relative hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="glass-card h-12 w-80 rounded-2xl border border-white/20 bg-white/5 px-12 py-3 text-sm backdrop-blur-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all duration-300"
                role="combobox"
                aria-expanded={isSearchOpen}
                aria-haspopup="listbox"
              />
            </div>

            {isSearchOpen && searchResults.length > 0 && (
              <div
                className="absolute top-full mt-2 w-full glass-card border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
                role="listbox"
              >
                {searchResults.map((episode) => (
                  <Link
                    key={episode.slug}
                    href={`/episodes/${episode.slug}`}
                    className="block px-6 py-4 hover:bg-white/10 border-b border-white/10 last:border-b-0 transition-all duration-200"
                    role="option"
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery("")
                    }}
                  >
                    <div className="font-semibold text-sm text-foreground">{episode.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Episode {episode.number} • {episode.datePretty}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10 backdrop-blur-md">
          <div className="container py-8 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-card h-12 w-full rounded-2xl border border-white/20 bg-white/5 px-12 py-3 text-sm backdrop-blur-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-4 px-4 text-lg font-semibold hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-6 pt-6 border-t border-white/10">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-4 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
