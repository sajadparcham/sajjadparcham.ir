
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  MapPin,
} from "lucide-react";

const interests = [
  "Machine Learning",
  "LLM & RAG",
  "Software Development",
  "Data Science",
];

export default function Hero() {
  return (
    <section
      id="home"
      dir="ltr"
      className="relative isolate min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[15%] -z-10 h-72 w-72 rounded-full bg-emerald-500/[0.09] blur-[120px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] right-[5%] -z-10 h-64 w-64 rounded-full bg-emerald-400/[0.05] blur-[110px]"
      />

      {/* Main content */}
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

          {/* Left: Introduction */}
          <div className="relative z-10 max-w-2xl">

            {/* Availability label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300 sm:text-xs">
                AI & Software Development
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-4 text-sm font-medium tracking-[0.2em] text-emerald-400">
                HELLO, I'M
              </p>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[84px]">
                Sajad
                <br />
                <span className="text-zinc-500">Parcham</span>
                <span className="text-emerald-400">.</span>
              </h1>
            </motion.div>

            {/* Short introduction */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9"
            >
              I’m interested in machine learning and intelligent
              software systems. I build projects to explore AI,
              work with data, and turn ideas into practical
              applications.
            </motion.p>

            {/* Areas of interest */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition-colors duration-200 hover:border-emerald-400/30 hover:text-emerald-300 sm:text-sm"
                >
                  {interest}
                </span>
              ))}
            </motion.div>

            {/* Primary actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#06110c] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(52,211,153,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                Explore my projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/[0.12] px-5 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Footer details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-6"
            >
              <a
                href="https://github.com/KingGester"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-emerald-400"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <span className="h-4 w-px bg-white/10" />

              <span className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={15} />
                Tabriz, Iran
              </span>
            </motion.div>
          </div>

          {/* Right: Abstract AI-inspired visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-[460px] lg:block"
          >
            <div className="relative aspect-square">

              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.07] blur-[70px]"
              />

              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[7%] rounded-full border border-white/[0.07]"
              >
                <span className="absolute left-[19%] top-[12%] h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
              </motion.div>

              {/* Middle orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[19%] rounded-full border border-dashed border-emerald-400/20"
              >
                <span className="absolute right-[10%] top-[25%] h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </motion.div>

              {/* Inner orbit */}
              <div className="absolute inset-[31%] rounded-full border border-emerald-400/[0.15]" />

              {/* Center element */}
              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-400/25 bg-[#080d0b]/90 shadow-[0_0_70px_rgba(52,211,153,0.09)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.035]">
                  <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.8)]" />
                </div>
              </div>

              {/* Connection points */}
              <span className="absolute left-[20%] top-[43%] h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span className="absolute right-[21%] top-[62%] h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="absolute bottom-[20%] left-[42%] h-1.5 w-1.5 rounded-full bg-emerald-300/70" />

              {/* Floating focus card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-[15%] rounded-xl border border-white/10 bg-[#0a0a0a]/90 p-4 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                  CURRENT INTEREST
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-200">
                  Machine Learning
                </p>
                <div className="mt-3 h-1 w-28 overflow-hidden rounded-full bg-white/[0.07]">
                  <div className="h-full w-2/3 rounded-full bg-emerald-400/70" />
                </div>
              </motion.div>

              {/* Floating project card */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[13%] left-0 rounded-xl border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                  LEARNING BY BUILDING
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06]">
                    <span className="text-sm font-semibold text-emerald-400">
                      AI
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      Practical Projects
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Learn · Build · Improve
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small decorative marker */}
              <div className="absolute bottom-[7%] right-[13%] flex items-center gap-2">
                <span className="h-px w-7 bg-emerald-400/40" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
                  01 / EXPLORE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-emerald-400 sm:flex"
      >
        <span className="text-[9px] tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}
