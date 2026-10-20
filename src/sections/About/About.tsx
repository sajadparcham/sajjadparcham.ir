import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  Brain,
  Code2,
  Database,
  FlaskConical,
} from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "هوش مصنوعی",
    description:
      "بررسی سیستم‌های هوشمند، یادگیری ماشین و کاربردهای عملی هوش مصنوعی.",
  },
  {
    icon: Code2,
    title: "مهندسی نرم‌افزار",
    description:
      "طراحی و توسعه نرم‌افزارهای قابل نگهداری با معماری تمیز و اصول مهندسی.",
  },
  {
    icon: Database,
    title: "داده و سیستم‌ها",
    description:
      "کار با پردازش داده، تحلیل اطلاعات و طراحی سیستم‌های مقیاس‌پذیر.",
  },
  {
    icon: FlaskConical,
    title: "پژوهش",
    description:
      "تبدیل پرسش‌های فنی به آزمایش، نتایج قابل اندازه‌گیری و ایده‌های جدید.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] py-32 sm:py-40 lg:py-48"
    >
      {/* Ambient Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-400/[0.035] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.02] blur-[120px]"
      />

      {/* Container */}

<div className="relative mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-12">
        {/* ───────────────── HEADER ───────────────── */}

        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
        >

          {/* Section Label */}

          <div className="flex items-center justify-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.18em] text-emerald-400">
              ۰۱
            </span>

            <span className="h-px w-10 bg-emerald-400/30" />

            <span className="text-[11px] font-medium tracking-[0.16em] text-zinc-600">
              درباره من
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-12 max-w-6xl text-4xl font-semibold leading-[1.5] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
           سجاد پرچم
          </h2>

          {/* Intro */}

        <p className="mt-8 max-w-2xl text-center text-base leading-9 text-zinc-500 sm:text-lg sm:leading-10">
            هوشمند، ساخت آن‌ها در عمل و دنبال‌کردن ایده‌هایی است که
            می‌توانند به راه‌حل‌های واقعی تبدیل شوند.
          </p>
        </motion.div>

        {/* ───────────────── MAIN CONTENT ───────────────── */}

        <div
            
            className="mx-auto mt-66 grid max-w-6xl gap-20 lg:-translate-x-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"
        >          {/* STORY */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:-translate-x-16"
            >
            <div className="relative mx-auto max-w-lg pe-7 sm:pe-8">

              {/* Vertical Accent */}

              <div className="absolute end-0 top-1 h-full w-px bg-gradient-to-b from-emerald-400/50 via-emerald-400/15 to-transparent" />

              <p className="text-lg leading-10 text-zinc-300 sm:text-xl sm:leading-[2.2]">
                به نقطه تلاقی{" "}
                <span className="text-emerald-400">
                  هوش مصنوعی
                </span>
                ، مهندسی نرم‌افزار و داده علاقه‌مندم.
              </p>

              <p className="mt-8 text-sm leading-8 text-zinc-500 sm:text-[15px] sm:leading-9">
                رویکرد من ساده است؛ ابتدا مسئله را عمیقاً درک می‌کنم،
                سپس یک راه‌حل قابل اجرا می‌سازم و در نهایت به دنبال
                راه‌هایی برای بهتر و دقیق‌تر کردن آن می‌گردم.
              </p>

              <p className="mt-3 text-sm leading-8 text-zinc-400 sm:text-[15px] sm:leading-12">
                بیشترین علاقه‌ام به مسائلی است که یادگیری ماشین،
                معماری نرم‌افزار، ریاضیات و پردازش داده‌های بزرگ
                را در کنار یکدیگر قرار می‌دهند.
              </p>

              {/* CTA */}

              <a
                href="#projects"
                className="group mt-11 inline-flex items-center gap-3 border-b border-white/[0.1] pb-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-400"
              >
                مشاهده پروژه‌های من

                <ArrowUpLeft
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1"
                />
              </a>

            </div>
          </motion.div>

          {/* FOCUS AREAS */}

            <div className="grid max-w-2xl gap-x-14 gap-y-16 sm:grid-cols-2 lg:-translate-x-16">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group"
                >

                  {/* Top */}

                  <div className="flex items-center justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.015] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/25 group-hover:bg-emerald-400/[0.04] group-hover:text-emerald-400">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                      />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.15em] text-zinc-700">
                      ۰{index + 1}
                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-base font-medium tracking-[-0.01em] text-zinc-200">
                    {area.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 max-w-sm text-sm leading-8 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-500">
                    {area.description}
                  </p>

                  {/* Accent */}

                  <div className="mt-7 h-px w-10 bg-white/[0.08] transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-400/50" />

                </motion.article>
              );
            })}

          </div>
        </div>

        {/* ───────────────── PHILOSOPHY ───────────────── */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 border-t border-white/[0.07] pt-10"
        >

          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">

            <div>
              <span className="text-[10px] font-medium tracking-[0.16em] text-zinc-700">
                طرز فکر من
              </span>
            </div>

            <div>
              <p className="max-w-2xl text-xl leading-[2] tracking-[-0.01em] text-zinc-400 sm:text-2xl sm:leading-[2.1]">
                عمیق بفهم.
                <span className="text-zinc-700">
                  {" "}با دقت بساز.
                </span>
                <br />
                صادقانه اندازه‌گیری کن.
                <span className="text-zinc-700">
                  {" "}همیشه بهترش کن.
                </span>
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}