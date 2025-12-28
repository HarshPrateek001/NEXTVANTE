"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Globe, Code2, Zap, Cpu, ShieldCheck, ArrowRight } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    title: "Digital Transformation",
    desc: "Bespoke business websites and company profiles optimized for conversion and offline-to-digital growth.",
    icon: Globe,
    color: "from-violet-500/20 to-fuchsia-500/20",
    glow: "shadow-violet-500/20",
    features: ["Business Identity", "Strategic UX", "Growth Optimization"],
    tag: "Scale",
  },
  {
    title: "Custom Software",
    desc: "Robust web applications, admin panels, and CRM systems built for scale and operational efficiency.",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    glow: "shadow-blue-500/20",
    features: ["Scale Architecture", "Intelligent CRM", "Custom ERP"],
    tag: "Build",
  },
  {
    title: "Automation",
    desc: "Eliminate manual tasks with WhatsApp, Email, and advanced workflow optimization for your business.",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/20",
    glow: "shadow-amber-500/20",
    features: ["Hyper-Automation", "AI Workflows", "Instant Sync"],
    tag: "Optimize",
  },
  {
    title: "AI & Products",
    desc: "Cutting-edge AI tools for content processing, plagiarism detection, and SaaS development.",
    icon: Cpu,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "shadow-emerald-500/20",
    features: ["Neural Networks", "NLP Processing", "SaaS Engine"],
    tag: "Innovate",
  },
  {
    title: "Maintenance",
    desc: "Dedicated support and continuous optimization to ensure your digital assets remain secure and fast.",
    icon: ShieldCheck,
    color: "from-rose-500/20 to-red-500/20",
    glow: "shadow-rose-500/20",
    features: ["24/7 Vigilance", "Active Security", "Zero Downtime"],
    tag: "Secure",
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section id="services" ref={containerRef} className="py-40 px-6 relative overflow-hidden bg-[#0B0B0F]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-primary font-mono text-xs tracking-[0.3em] uppercase mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Architectures of Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]"
            >
              Mastery in <br />
              <span className="text-white/20 italic">Digital Evolution.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-sm leading-relaxed mb-4"
          >
            We don&apos;t just build software; we engineer competitive advantages that redefine your market position.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className="group"
            >
              <div className="relative h-full glass rounded-[3rem] p-10 border-white/5 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/[0.03]">
                {/* Animated Inner Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-16">
                    <div
                      className={`p-5 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-all duration-700`}
                    >
                      <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 group-hover:text-primary transition-colors duration-500">
                      /{service.tag}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-12 group-hover:text-white/70 transition-colors duration-500">
                    {service.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5">
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white/30 group-hover:text-white/60 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:scale-125" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all duration-500">
                      Explore Solution <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
