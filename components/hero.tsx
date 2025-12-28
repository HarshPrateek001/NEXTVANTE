"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"
import { MissionEngine } from "@/components/mission-engine"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MissionEngine />

        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/20 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            The future of business is digital
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-balance"
        >
          Digitizing Your Business, <br />
          <span className="text-gradient">The Smart Way.</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          We build high-end software solutions that transform offline operations into powerful digital ecosystems.
          Premium, reliable, and human-crafted for serious businesses across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 group relative overflow-hidden shadow-[0_0_40px_rgba(124,107,255,0.3)] hover:shadow-[0_0_60px_rgba(124,107,255,0.4)] transition-all"
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full px-12 h-16 text-lg font-bold glass border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            View Our Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating UI Elements / Visual Story */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "circOut" }}
        viewport={{ once: true }}
        className="mt-24 relative w-full max-w-6xl mx-auto px-4 perspective-1000"
      >
        <motion.div
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl aspect-[16/9] md:aspect-[21/9] overflow-hidden relative group border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:opacity-70 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

          {/* Dashboard Placeholder */}
          <div className="p-8 grid grid-cols-12 gap-6 h-full opacity-60">
            <div className="col-span-3 space-y-4">
              <div className="h-4 w-32 bg-white/10 rounded-full" />
              <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10" />
              <div className="h-4 w-24 bg-white/10 rounded-full" />
              <div className="h-20 w-full bg-white/5 rounded-xl border border-white/10" />
            </div>
            <div className="col-span-9 space-y-6">
              <div className="h-64 w-full bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
                <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
                <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
