"use client"

import type React from "react"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState, useCallback, useRef } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null) // null = loading state
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setIsReducedMotion(mediaQuery.matches)

      const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } catch (error) {
      console.warn("Could not detect motion preferences:", error)
    }
  }, [])

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

      if (shouldBeDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      setIsDark(shouldBeDark)
    } catch (error) {
      console.warn("Could not initialize theme:", error)
      setIsDark(false) // Fallback to light mode
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (isDark === null) return // Prevent toggle during loading

    const newIsDark = !isDark
    setIsDark(newIsDark)

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Debounce DOM updates
    timeoutRef.current = setTimeout(() => {
      try {
        if (newIsDark) {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme", "dark")
        } else {
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme", "light")
        }
      } catch (error) {
        console.warn("Could not save theme preference:", error)
      }
    }, 100)
  }, [isDark])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleTheme()
      }
    },
    [toggleTheme],
  )

  // Loading state
  if (isDark === null) {
    return (
      <div
        className="p-2 rounded-xl animate-pulse bg-muted/50"
        aria-label="Loading theme toggle"
        data-testid="theme-toggle-loading"
      >
        <div className="w-4 h-4" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`
        p-3 rounded-xl transition-all duration-300 ease-out
        hover:bg-white/10 hover:scale-110 focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2
        ${isReducedMotion ? "transition-none" : ""}
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      data-testid="theme-toggle"
      type="button"
    >
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-colors duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 transition-colors duration-300" />
      )}
    </button>
  )
}
