"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { Services } from "@/components/services"
import { AuthentiqHighlight } from "@/components/authentiq-highlight"
import { SecuritySection } from "@/components/security-section"
import { ProcessSection } from "@/components/process-section" // import new process section
import { Footer } from "@/components/footer"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <ProcessSection /> {/* Use the new animated mathematical process section */}
      <SecuritySection />
      <AuthentiqHighlight />
      <section className="py-60 px-6 text-center relative overflow-hidden">
        {/* Background glow and shimmer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/15 blur-[150px] -z-10 rounded-full" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass p-16 md:p-32 rounded-[4rem] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Inner metallic shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-12"
          >
            [ The Next Step ]
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-tight">
            Ready to <span className="text-gradient">evolve?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Let's build something reliable, scalable, and human-crafted for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <button className="group w-full sm:w-auto px-16 py-7 bg-primary rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(var(--primary),0.3)] hover:shadow-[0_30px_70px_rgba(var(--primary),0.4)] overflow-hidden relative">
              <span className="relative z-10">Connect With Us</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </button>
            <button className="w-full sm:w-auto px-16 py-7 glass rounded-full text-xl font-bold hover:bg-white/10 transition-all border-white/10 hover:border-white/30 hover:shadow-xl flex items-center justify-center gap-3 group">
              WhatsApp Support
              <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-ping" />
            </button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
