"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, RefreshCw, EyeOff, Zap } from "lucide-react"

const securityFeatures = [
  {
    icon: Server,
    title: "Secure Hosting",
    desc: "Enterprise-grade infrastructure with multi-region redundancy and DDoS protection.",
  },
  {
    icon: Lock,
    title: "Encrypted Data",
    desc: "End-to-end AES-256 encryption for all sensitive business and customer information.",
  },
  {
    icon: Shield,
    title: "API Security",
    desc: "Robust authentication layers and rate limiting to prevent unauthorized access.",
  },
  {
    icon: RefreshCw,
    title: "Regular Backups",
    desc: "Automated daily backups with instant recovery points to ensure zero data loss.",
  },
  {
    icon: EyeOff,
    title: "Privacy-First",
    desc: "Strict adherence to data privacy regulations and non-disclosure protocols.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized server-side rendering and CDN edge caching for lightning-fast speeds.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-32 px-6 md:px-12 bg-white/[0.01] relative overflow-hidden">
      {/* Decorative scanner line */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent font-mono text-sm tracking-[0.2em] uppercase mb-6">[ Infrastructure / 04 ]</div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">Secure by Design.</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We don't just build software; we build fortresses. Our "Security-First" philosophy ensures that every line
              of code and every server configuration is optimized for maximum protection and performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Visual Fortress/Server Concept */}
            <div className="glass rounded-[3rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden group border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Simulated Server Rack Nodes */}
                <div className="w-full space-y-4 max-w-xs">
                  {[1, 2, 3, 4].map((n) => (
                    <motion.div
                      key={n}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: n * 0.5 }}
                      className="h-12 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-between px-6"
                    >
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <div className="w-20 h-2 bg-white/10 rounded-full" />
                      </div>
                      <div className="text-[10px] font-mono text-white/20">NODE-0{n}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <div className="text-5xl font-bold tracking-tighter mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    99.99%
                  </div>
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Uptime Reliability</div>
                </div>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full scale-150 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
