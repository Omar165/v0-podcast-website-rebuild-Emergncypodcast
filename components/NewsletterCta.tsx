"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export function NewsletterCta() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value) {
      setIsValid(validateEmail(value))
    } else {
      setIsValid(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setIsValid(false)
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(22,78,99,0.1),transparent_50%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <Mail className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
            <h2 className="text-hero font-sans font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stay in the Loop
            </h2>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              Get notified when new episodes drop and receive exclusive content from the Emergency Exit team.
            </p>
          </div>

          {isSubmitted ? (
            <div className="glass-card border border-green-500/20 p-8 max-w-md mx-auto animate-in slide-in-from-bottom-4 duration-500">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Welcome aboard!</h3>
              <p className="text-green-600/80">Thanks for subscribing! Check your email for confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="glass-card border border-white/20 p-8 space-y-6">
                <div className="relative">
                  <div className={`relative transition-all duration-300 ${isFocused ? "scale-105" : ""}`}>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your email address"
                      required
                      className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                        isFocused
                          ? "border-primary/50 shadow-lg shadow-primary/20"
                          : isValid
                            ? "border-white/20 hover:border-white/30"
                            : "border-red-500/50 shadow-lg shadow-red-500/20"
                      }`}
                    />

                    {email && (
                      <div
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                          isValid ? "text-green-500 scale-100" : "text-red-500 scale-110"
                        }`}
                      >
                        {isValid ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {email && !isValid && (
                    <p className="text-red-500 text-sm mt-2 animate-in slide-in-from-top-2 duration-300">
                      Please enter a valid email address
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email || !isValid}
                  className="btn-premium w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        Subscribe Now
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
