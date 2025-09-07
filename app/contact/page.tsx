"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [fieldValidation, setFieldValidation] = useState({
    name: true,
    email: true,
    message: true,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case "name":
        return value.trim().length >= 2
      case "message":
        return value.trim().length >= 10
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    }

    setFieldValidation(validation)

    if (!Object.values(validation).every(Boolean)) {
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (value) {
      setFieldValidation((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }))
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-hero font-sans font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl mx-auto">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you.
              </p>
            </div>

            {status === "success" && (
              <div className="glass-card border border-green-500/20 p-6 mb-8 animate-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 animate-bounce" />
                  <div>
                    <h3 className="font-bold text-green-600 mb-1">Message sent successfully!</h3>
                    <p className="text-green-600/80">Thanks for your message! We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="glass-card border border-red-500/20 p-6 mb-8 animate-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-4">
                  <AlertCircle className="w-8 h-8 text-red-500 animate-pulse" />
                  <div>
                    <h3 className="font-bold text-red-600 mb-1">Something went wrong</h3>
                    <p className="text-red-600/80">Please try again later or contact us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className={`glass-card border border-white/20 p-10 space-y-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <User className="w-4 h-4" />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                      focusedField === "name"
                        ? "border-primary/50 shadow-lg shadow-primary/20 scale-105"
                        : fieldValidation.name
                          ? "border-white/20 hover:border-white/30"
                          : "border-red-500/50 shadow-lg shadow-red-500/20"
                    }`}
                    placeholder="Your full name"
                  />
                  {formData.name && (
                    <div
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                        fieldValidation.name ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {formData.name && !fieldValidation.name && (
                  <p className="text-red-500 text-sm animate-in slide-in-from-top-2 duration-300">
                    Name must be at least 2 characters long
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                      focusedField === "email"
                        ? "border-primary/50 shadow-lg shadow-primary/20 scale-105"
                        : fieldValidation.email
                          ? "border-white/20 hover:border-white/30"
                          : "border-red-500/50 shadow-lg shadow-red-500/20"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formData.email && (
                    <div
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                        fieldValidation.email ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {formData.email && !fieldValidation.email && (
                  <p className="text-red-500 text-sm animate-in slide-in-from-top-2 duration-300">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MessageSquare className="w-4 h-4" />
                  Message
                  <span className="text-xs text-muted-foreground ml-auto">{formData.message.length}/500</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    maxLength={500}
                    className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none ${
                      focusedField === "message"
                        ? "border-primary/50 shadow-lg shadow-primary/20 scale-105"
                        : fieldValidation.message
                          ? "border-white/20 hover:border-white/30"
                          : "border-red-500/50 shadow-lg shadow-red-500/20"
                    }`}
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                {formData.message && !fieldValidation.message && (
                  <p className="text-red-500 text-sm animate-in slide-in-from-top-2 duration-300">
                    Message must be at least 10 characters long
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading" || !Object.values(fieldValidation).every(Boolean)}
                className="btn-premium w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
