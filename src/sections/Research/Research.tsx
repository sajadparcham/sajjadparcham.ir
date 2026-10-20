import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  FlaskConical,
  Network,
  Rocket,
} from "lucide-react";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Intelligent Systems",
    description:
      "Exploring how AI systems can reason, adapt, and make better decisions in complex environments.",
  },
  {
    icon: Network,
    title: "AI Systems & Agents",
    description:
      "Studying model routing, agent coordination, tool usage, and reliable AI system architectures.",
  },
  {
    icon: FlaskConical,
    title: "Machine Learning",
    description:
      "Experimenting with predictive models, evaluation strategies, and practical machine learning systems.",
  },
  {
    icon: Rocket,
    title: "Aerospace AI",
    description:
      "Exploring applications of machine learning in spacecraft systems, prediction, and engineering.",
  },
];

const researchQuestions = [
  "How can AI systems choose the right model for each task?",
  "How can multiple AI agents coordinate reliably?",
  "How can machine learning systems become more efficient and interpretable?",
  "How can AI be applied to complex aerospace engineering problems?",
];

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#050505] py-32 sm:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-emerald-400">
            04 / RESEARCH
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Exploring questions
            <br />
            <span className="text-zinc-500">
              worth building around.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500">
            I’m interested in research problems where artificial
            intelligence meets real-world systems, data, and
            engineering.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-400/[0.02]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/20 group-hover:text-emerald-400">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="mt-7 text-base font-medium text-zinc-200">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {area.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}

        </div>

        {/* Research Questions */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
              RESEARCH QUESTIONS
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What I'm
              <br />
              <span className="text-zinc-500">
                curious about.
              </span>
            </h3>
          </motion.div>

          {/* Right */}
          <div className="border-t border-white/[0.07]">

            {researchQuestions.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex gap-6 border-b border-white/[0.07] py-7"
              >

                <span className="font-mono text-[10px] text-emerald-400/60">
                  0{index + 1}
                </span>

                <p className="max-w-xl text-base leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                  {question}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.02]"
        >

          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-400/[0.06] blur-[100px]" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">
                  CURRENT FOCUS
                </span>

              </div>

              <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Intelligent systems,
                <br />
                <span className="text-zinc-500">
                  model routing & AI agents.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600">
                Exploring how AI systems can dynamically select models,
                coordinate agents, and balance capability, latency,
                cost, and reliability.
              </p>

            </div>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 px-5 py-3 text-sm text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
            >
              Let's discuss

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </motion.div>

        {/* Future Directions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
            FUTURE DIRECTIONS
          </p>

          <p className="max-w-xl text-sm leading-7 text-zinc-600 sm:text-right">
            Multimodal AI · Agentic Systems · Big Data ·
            Aerospace Intelligence
          </p>

        </motion.div>

      </div>
    </section>
  );
}