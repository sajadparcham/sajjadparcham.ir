import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    label: "GH",
  },
  {
    name: "LinkedIn",
    href: "#",
    label: "in",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-32 sm:py-40"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/[0.045] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 font-mono text-xs tracking-[0.25em] text-emerald-400">
            05 / CONTACT
          </p>

          <h2 className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Have an interesting
            <br />
            <span className="text-zinc-500">
              problem?
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500">
            I'm always interested in interesting ideas, research
            problems, AI projects, and opportunities to build
            something meaningful.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-t border-white/[0.07]">

              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="group flex items-center justify-between border-b border-white/[0.07] py-7"
              >
                <div className="flex items-center gap-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/20 group-hover:text-emerald-400">
                    <Mail size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-mono text-[9px] tracking-[0.18em] text-zinc-700">
                      EMAIL
                    </p>

                    <p className="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-white">
                      hello@example.com
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                />
              </a>

              {/* Socials */}
              {socialLinks.map((social) => {
                

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-white/[0.07] py-7"
                  >
                    <div className="flex items-center gap-5">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] text-zinc-600 transition-all duration-300 group-hover:border-emerald-400/20 group-hover:text-emerald-400">
                        <span className="font-mono text-sm font-semibold">
                            {social.label}
                        </span>
                      </div>

                      <div>
                        <p className="font-mono text-[9px] tracking-[0.18em] text-zinc-700">
                          SOCIAL
                        </p>

                        <p className="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-white">
                          {social.name}
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                    />
                  </a>
                );
              })}

            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-600">
                OPEN TO INTERESTING OPPORTUNITIES
              </span>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-white/[0.07] bg-white/[0.01] p-7 sm:p-10"
          >

            <div className="grid gap-8 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] tracking-[0.18em] text-zinc-600"
                >
                  NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/[0.1] bg-transparent pb-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-emerald-400/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] tracking-[0.18em] text-zinc-600"
                >
                  EMAIL
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full border-b border-white/[0.1] bg-transparent pb-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-emerald-400/50"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="mt-10">
              <label
                htmlFor="subject"
                className="font-mono text-[10px] tracking-[0.18em] text-zinc-600"
              >
                SUBJECT
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to talk about?"
                className="mt-3 w-full border-b border-white/[0.1] bg-transparent pb-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-emerald-400/50"
              />
            </div>

            {/* Message */}
            <div className="mt-10">
              <label
                htmlFor="message"
                className="font-mono text-[10px] tracking-[0.18em] text-zinc-600"
              >
                MESSAGE
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your idea..."
                className="mt-3 w-full resize-none border-b border-white/[0.1] bg-transparent pb-4 text-sm leading-7 text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-emerald-400/50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.15)]"
            >
              Send message

              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </motion.form>

        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 border-t border-white/[0.07] pt-10"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
            LET'S BUILD SOMETHING
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ideas are better
              <br />
              <span className="text-zinc-600">
                when they're built.
              </span>
            </h3>

            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-emerald-400"
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}