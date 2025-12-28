import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "NEXTVANTE | Digitizing Your Business, The Smart Way",
  description:
    "High-end software solutions for modern businesses. Custom web apps, automation, and AI-powered products.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
