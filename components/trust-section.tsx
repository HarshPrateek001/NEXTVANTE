"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Shield, Clock } from "lucide-react"

const trustPoints = [
  {
    icon: Award,
    title: "Expert Team",
    desc: "Industry veterans with 10+ years of experience building enterprise-grade solutions.",
  },
  {
    icon: Shield,
    title: "Proven Security",
    desc: "Military-grade encryption and compliance with international data protection standards.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    desc: "99% on-time project delivery with transparent timelines and constant communication.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    desc: "Rigorous testing protocols ensuring zero-defect, production-ready code.",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-6">
              [ Trust & Credibility ]
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">Why businesses trust NEXTVANTE.</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We've built our reputation on reliability, transparency, and delivering results that exceed expectations.
              Your success is our commitment.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <point.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{point.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Trust Badge Container */}
            <div className="glass rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden group border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Trust Score Circles */}
                <div className="relative w-40 h-40 mb-8">
                  {/* Outer circle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border-2 border-transparent border-t-primary border-r-primary rounded-full opacity-30"
                  />
                  {/* Middle circle */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-4 border-2 border-transparent border-b-accent border-l-accent rounded-full opacity-20"
                  />
                  {/* Inner content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mt-2">Trust Score</div>
                  </div>
                </div>

                {/* Trust Metrics */}
                <div className="space-y-6 w-full max-w-xs">
                  {[
                    { label: "Projects Delivered", value: "500+" },
                    { label: "Happy Clients", value: "200+" },
                    { label: "Years Experience", value: "10+" },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow orb background */}
              <div className="absolute -bottom-1/2 -right-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
