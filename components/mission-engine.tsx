"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function MissionEngine() {
  const { scrollY } = useScroll()
  
  // Scroll-based transforms for shrinking and fading on scroll
  const scale = useTransform(scrollY, [0, 500], [1, 0.4])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const blur = useTransform(scrollY, [0, 300], [0, 10])

  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
    >
      {/* Central Core - Small dot with "0" symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-16 h-16 rounded-full bg-[#7C6BFF]/20 backdrop-blur-sm border border-[#7C6BFF]/30 flex items-center justify-center"
        >
          <span className="text-[#7C6BFF] font-mono text-2xl font-bold opacity-60">0</span>
        </motion.div>
      </div>

      {/* Outer Ring 1 - Clockwise rotation - Muted Violet */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-[600px] h-[600px]">
          {/* Ring with gradient and glow */}
          <svg
            viewBox="0 0 600 600"
            className="w-full h-full"
            style={{
              filter: "blur(0.5px) drop-shadow(0 0 20px rgba(124, 107, 255, 0.3))",
            }}
          >
            <defs>
              <linearGradient id="ring1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C6BFF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#7C6BFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7C6BFF" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <circle
              cx="300"
              cy="300"
              r="280"
              fill="none"
              stroke="url(#ring1Gradient)"
              strokeWidth="1.5"
              strokeDasharray="30 15"
              opacity="0.8"
            />
          </svg>
          
          {/* Accent dots on the ring */}
          <motion.div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7C6BFF] shadow-[0_0_15px_rgba(124,107,255,0.8)]"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Outer Ring 2 - Anticlockwise rotation - Soft Lavender/Gray */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-[500px] h-[500px]">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            style={{
              filter: "blur(0.5px) drop-shadow(0 0 15px rgba(200, 195, 220, 0.2))",
            }}
          >
            <defs>
              <linearGradient id="ring2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8C3DC" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#A099C8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C8C3DC" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <circle
              cx="250"
              cy="250"
              r="235"
              fill="none"
              stroke="url(#ring2Gradient)"
              strokeWidth="1.2"
              strokeDasharray="25 20"
              opacity="0.7"
            />
          </svg>

          {/* Accent dots on the ring */}
          <motion.div
            className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8C3DC] shadow-[0_0_10px_rgba(200,195,220,0.6)]"
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>

      {/* Ambient Glow Background - Soft and elegant */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C6BFF]/20 rounded-full blur-[100px] -z-10"
      />
    </motion.div>
  )
}
