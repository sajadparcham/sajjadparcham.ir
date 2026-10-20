import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Server,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "AI / MACHINE LEARNING",
    description: "Building and experimenting with intelligent systems.",
    icon: BrainCircuit,
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
      "Deep Learning",
      "Model Evaluation",
    ],
  },
  {
    number: "02",
    title: "DATA ENGINEERING",
    description: "Working with data pipelines and scalable systems.",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "SQL",
      "Kafka",
      "Flink",
      "Data Processing",
    ],
  },
  {
    number: "03",
    title: "BACKEND",
    description: "Designing APIs and reliable backend systems.",
    icon: Server,
    skills: [
      "C++",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework",
      "SQL Server",
      "System Design",
    ],
  },
  {
    number: "04",
    title: "FRONTEND",
    description: "Building modern and responsive interfaces.",
    icon: PanelsTopLeft,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    number: "05",
    title: "TOOLS & WORKFLOW",
    description: "Tools I use to build, test, and ship software.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Docker",
      "Clean Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section
      dir="ltr"
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-32 sm:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-emerald-500/[0.035] blur-[130px]" />

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
            02 / SKILLS
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tools for
              <br />
              <span className="text-zinc-500">
                building ideas.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-zinc-600">
              A growing collection of technologies and concepts
              I use across artificial intelligence, data, software,
              and research.
            </p>

          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative bg-[#050505] p-7 transition-colors duration-500 hover:bg-[#080c0a] sm:p-9"
              >

                {/* Number */}
                <div className="flex items-start justify-between">

                  <span className="font-mono text-[11px] tracking-widest text-zinc-700">
                    {group.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/20 group-hover:text-emerald-400">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-10 text-sm font-semibold tracking-wide text-zinc-200">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
                  {group.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.015] px-3 py-1.5 font-mono text-[10px] text-zinc-500 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-400/60 transition-all duration-500 group-hover:w-full" />

              </motion.article>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center"
        >

          <p className="max-w-xl text-sm leading-7 text-zinc-600">
            I don't believe in mastering a technology by memorizing its
            API. I prefer understanding the systems behind the tools
            and knowing when to use them.
          </p>

          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
            ALWAYS LEARNING
          </span>

        </motion.div>

      </div>
    </section>
  );
}