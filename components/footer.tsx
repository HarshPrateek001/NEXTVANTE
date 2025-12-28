"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg rotate-45" />
              <span className="text-3xl font-bold tracking-tighter">NEXTVANTE</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-8">
              Digitizing your business, the smart way. We build the high-end infrastructure for the next generation of
              digital commerce and communication in India.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white/50 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-[0.2em] text-primary">Solutions</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#authentiq" className="hover:text-foreground transition-colors">
                  AI Products
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-foreground transition-colors">
                  Secure Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-[0.2em] text-primary">Company</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-sm text-muted-foreground gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2025 NEXTVANTE Software Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Status
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-mono uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              All Systems Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
