import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Spacecraft Thruster Prediction",
    category: "Machine Learning · Regression",
    description:
      "A machine learning experiment focused on predicting spacecraft thruster behavior from engineering data using XGBoost regression.",
    technologies: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Pandas",
    ],
    result: "R² 0.40 · MAE 0.17",
    github: "https://github.com/",
    featured: true,
  },
  {
    number: "02",
    title: "EV Predictive Maintenance",
    category: "Machine Learning · Predictive Maintenance",
    description:
      "A predictive maintenance experiment that analyzes electric vehicle telemetry and estimates potential system behavior from sensor data.",
    technologies: [
      "Python",
      "XGBoost",
      "Random Forest",
      "Pandas",
    ],
    result: "Predictive Analytics",
    github: "https://github.com/",
    featured: false,
  },
  {
    number: "03",
    title: "Client-side OCR Extension",
    category: "AI · Computer Vision",
    description:
      "A browser extension concept for extracting text directly from images using OCR while keeping the processing on the client side.",
    technologies: [
      "React",
      "TypeScript",
      "PaddleOCR",
      "Chrome Extension",
    ],
    result: "Client-side AI",
    github: "https://github.com/",
    featured: false,
  },
  {
    number: "04",
    title: "Real-time Data Platform",
    category: "Data Engineering",
    description:
      "An experimental architecture for processing streaming data using distributed technologies and presenting real-time analytics.",
    technologies: [
      "Kafka",
      "Flink",
      "Cassandra",
      "Grafana",
    ],
    result: "Real-time Analytics",
    github: "https://github.com/",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-32 sm:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-emerald-400">
            03 / PROJECTS
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Things I've
              <br />
              <span className="text-zinc-500">
                built & explored.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-zinc-600">
              Selected projects, experiments, and systems built while
              exploring artificial intelligence, software engineering,
              and data.
            </p>

          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-4">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.01] transition-all duration-500 hover:border-emerald-400/20 hover:bg-emerald-400/[0.015]"
            >

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/[0.05] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[80px_1fr_220px]">

                {/* Number */}
                <div>
                  <span className="font-mono text-xs text-zinc-700">
                    {project.number}
                  </span>
                </div>

                {/* Main */}
                <div>

                  <p className="font-mono text-[10px] tracking-[0.18em] text-emerald-400/70">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] px-3 py-1.5 font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Result + Link */}
                <div className="flex flex-col justify-between gap-8 lg:items-end">

                  <div className="lg:text-right">
                    <p className="font-mono text-[9px] tracking-[0.18em] text-zinc-700">
                      RESULT
                    </p>

                    <p className="mt-2 text-sm text-zinc-300">
                      {project.result}
                    </p>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex w-fit items-center gap-2 text-sm text-zinc-500 transition hover:text-emerald-400"
                  >
                    Github 

                    <span>GitHub</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </a>

                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-400 transition-all duration-700 group-hover:w-full" />

            </motion.article>
          ))}

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm text-zinc-600 transition hover:text-emerald-400"
          >
            View more on GitHub

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}