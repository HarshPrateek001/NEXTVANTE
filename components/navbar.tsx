"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 15, 18, 0.3)", "rgba(15, 15, 18, 0.8)"]
  )
  const borderOpacity = useTransform(scrollY, [0, 100], [0.05, 0.1])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          borderBottomColor: `rgba(255, 255, 255, ${borderOpacity})`,
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl border-b"
      >
        {/* <CHANGE> Enhanced logo with glass effect */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg rotate-45 shadow-lg shadow-primary/20" />
          <span className="text-xl md:text-2xl font-bold tracking-tighter">NEXTVANTE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {["Services", "Process", "Authentiq", "Security"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* <CHANGE> Enhanced CTA button with glass effect */}
        <div className="flex items-center gap-4">
          <Button className="hidden sm:inline-flex rounded-full border-primary/20 hover:bg-primary/10 bg-primary/5 glass border text-foreground hover:text-white hover:border-primary/40 transition-all">
            Let's Talk
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* <CHANGE> Mobile menu with glass morphism */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl p-6 border-white/20 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {["Services", "Process", "Authentiq", "Security"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <Button className="w-full rounded-full mt-4 bg-primary hover:bg-primary/90">Let's Talk</Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
