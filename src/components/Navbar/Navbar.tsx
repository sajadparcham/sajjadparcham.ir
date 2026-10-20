import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6">
        <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-black/60 px-5 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2"
          >
            <span className="text-lg font-semibold tracking-tight text-white">
              Sajad
            </span>

            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] transition group-hover:scale-125" />

            <span className="text-lg font-semibold tracking-tight text-white">
              Parcham
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <a
            href="#contact"
            className="hidden rounded-full border border-emerald-400/30 px-4 py-2 text-sm font-medium text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400 hover:text-black md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col p-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-xl bg-emerald-400 px-4 py-3 text-center text-sm font-medium text-black"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}