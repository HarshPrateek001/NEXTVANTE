"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Zap, Shield, Globe } from "lucide-react"

export function AuthentiqHighlight() {
  return (
    <section id="authentiq" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] overflow-hidden relative border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700" />

        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-20 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold mb-6 tracking-[0.2em] text-sm uppercase"
            >
              <Sparkles className="w-4 h-4" />
              Flagship Innovation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
            >
              Authentiq.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Our flagship AI-powered plagiarism and content processing platform. Built for students, institutions, and
              publishers who demand high-integrity digital content.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Shield, label: "Plagiarism Detection" },
                { icon: Zap, label: "API-Ready Ready" },
                { icon: Globe, label: "Global Standards" },
                { icon: CheckCircle2, label: "Human-like Processing" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-white/80">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg bg-white text-background hover:bg-white/90 group shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_30px_60px_rgba(255,255,255,0.15)] transition-all"
            >
              Explore Authentiq
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </Button>
          </div>

          <div className="relative">
            <motion.div
              initial={{ rotateY: 20, rotateX: 10, scale: 0.9, opacity: 0 }}
              whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              viewport={{ once: true }}
              className="glass rounded-3xl border border-white/10 p-4 aspect-[4/3] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
            >
              {/* Product UI Simulation */}
              <div className="w-full h-full bg-background/80 rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">authentiq-v2.0</div>
                </div>
                <div className="p-8 flex-1 space-y-6">
                  <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-white/5 rounded-full" />
                    <div className="h-3 w-full bg-white/5 rounded-full" />
                    <div className="h-3 w-3/4 bg-white/5 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 rounded-xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center gap-2">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-[10px] uppercase text-white/30">Accuracy</div>
                    </div>
                    <div className="h-24 rounded-xl bg-accent/5 border border-accent/10 flex flex-col items-center justify-center gap-2">
                      <div className="text-2xl font-bold text-accent">0.4s</div>
                      <div className="text-[10px] uppercase text-white/30">Latency</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[60px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
