"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const PROCESS_STEPS = [
  {
    id: "01",
    label: "ALIGNMENT",
    title: "Discuss",
    equation: "∫(Vision + Strategy) dt",
    desc: "Deep-dive consultations to align our technical roadmap with your business DNA.",
  },
  {
    id: "02",
    label: "ARCHITECT",
    title: "Design",
    equation: "∑(UX * Logic) → Blueprint",
    desc: "Human-centric blueprints meeting mathematical precision in interface logic.",
  },
  {
    id: "03",
    label: "EXECUTE",
    title: "Build",
    equation: "d/dx (Code) = Performance",
    desc: "Transforming logic into low-latency, high-performance digital infrastructure.",
  },
  {
    id: "04",
    label: "VALIDATE",
    title: "Test",
    equation: "lim (Bugs → 0) ∀ EdgeCase",
    desc: "Rigorous security audits and performance stress tests to ensure total reliability.",
  },
  {
    id: "05",
    label: "EVOLVE",
    title: "Deliver",
    equation: "Growth = ∏(Feedback * Iteration)",
    desc: "Deployment and continuous system evolution to stay ahead of market entropy.",
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} id="process" className="py-40 px-6 md:px-12 relative overflow-hidden bg-[#0B0B0F]">
      {/* Background Math Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #7C6BFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            [ Operational Logic ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-bold tracking-tighter"
          >
            Our <span className="text-gradient">Function.</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.id} step={step} index={i} total={PROCESS_STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index, total }: { step: (typeof PROCESS_STEPS)[0]; index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group grid md:grid-cols-[1fr_2px_1fr] gap-12 md:gap-24 items-center"
    >
      {/* Left: Content */}
      <div className={index % 2 === 0 ? "order-1" : "md:order-3"}>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-primary font-mono text-xl opacity-50">{step.id}</span>
          <span className="text-white/40 font-mono text-sm tracking-widest">{step.label}</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-primary transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
      </div>

      {/* Middle: Vertical Math Line */}
      <div className="hidden md:flex flex-col items-center order-2">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent relative">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(124,107,255,0.8)]"
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: index * 0.5 }}
          />
        </div>
      </div>

      {/* Right: Math Visualization */}
      <div className={index % 2 === 0 ? "md:order-3" : "order-1"}>
        <div className="relative aspect-video rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden group-hover:border-primary/30 transition-all duration-700 flex flex-col items-center justify-center p-12">
          {/* Kinetic Math Background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-primary/20 rounded-full"
            />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative z-10 text-center"
          >
            <div className="text-primary font-mono text-2xl md:text-3xl mb-4 tracking-tight bg-black/40 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/5">
              {step.equation}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>

          {/* Animated Coordinates */}
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/20 uppercase tracking-tighter">
            x: {Math.random().toFixed(4)} | y: {Math.random().toFixed(4)} | status: calculating...
          </div>
        </div>
      </div>
    </motion.div>
  )
}
