import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Emergency Exit Podcast",
    template: "%s | Emergency Exit Podcast",
  },
  description:
    "A light hearted but sharp minded podcast that throws open the magic casement on imaginative thought. Listen to us weave our way through novels, stories, films, and ideas that have shaped our understanding of the world.",
  keywords: ["podcast", "literature", "philosophy", "culture", "books", "films", "ideas", "emergency exit"],
  authors: [{ name: "Emergency Exit Podcast Team" }],
  creator: "Emergency Exit Podcast",
  publisher: "Emergency Exit Podcast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://emergencyexit.podcast"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emergencyexit.podcast",
    siteName: "Emergency Exit Podcast",
    title: "Emergency Exit Podcast",
    description: "A light hearted but sharp minded podcast that throws open the magic casement on imaginative thought.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emergency Exit Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Exit Podcast",
    description: "A light hearted but sharp minded podcast that throws open the magic casement on imaginative thought.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#164e63" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="font-serif antialiased min-h-screen flex flex-col">
        <div id="skip-link" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
          <a href="#main-content" className="btn-premium">
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
