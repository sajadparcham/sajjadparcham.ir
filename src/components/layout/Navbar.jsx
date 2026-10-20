
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


/*
|--------------------------------------------------------------------------
| NAVIGATION LINKS
|--------------------------------------------------------------------------
|
| برای اضافه کردن یک لینک جدید:
|
| {
|   label: "نام بخش",
|   href: "#section-id",
| }
|
| اضافه کن.
|
| مثال:
|
| {
|   label: "وبلاگ",
|   href: "#blog",
| }
|
|--------------------------------------------------------------------------
*/

const navigationLinks = [
  {
    label: "خانه",
    href: "#top",
  },

  {
    label: "درباره من",
    href: "#about",
  },

  {
    label: "مهارت‌ها",
    href: "#skills",
  },

  {
    label: "پروژه‌ها",
    href: "#projects",
  },

  {
    label: "پژوهش",
    href: "#research",
  },

  {
    label: "مقالات",
    href: "#publications",
  },

  {
    label: "ارتباط",
    href: "#contact",
  },
];


function Navbar() {
  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("#top");

  const [isScrolled, setIsScrolled] = useState(false);


  /*
  |--------------------------------------------------------------------------
  | SCROLL DETECTION
  |--------------------------------------------------------------------------
  |
  | وقتی کاربر کمی صفحه را پایین می‌برد،
  | Navbar کمی شیشه‌ای‌تر و جمع‌وجورتر می‌شود.
  |
  */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /*
  |--------------------------------------------------------------------------
  | ACTIVE SECTION
  |--------------------------------------------------------------------------
  |
  | تشخیص اینکه کاربر در حال حاضر در کدام بخش سایت قرار دارد.
  |
  */

  useEffect(() => {
    const sectionIds = [
      "top",
      "about",
      "skills",
      "projects",
      "research",
      "experience",
      "publications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "top";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /*
  |--------------------------------------------------------------------------
  | CLICK HANDLER
  |--------------------------------------------------------------------------
  |
  | وقتی روی لینک Navbar کلیک می‌شود:
  |
  | 1. منوی موبایل بسته شود
  | 2. Active Link تغییر کند
  |
  */

  const handleLinkClick = (href) => {
    setActiveSection(href);

    setIsOpen(false);
  };


  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-500
      "
    >

      <nav
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          transition-all
          duration-500
          sm:px-8
          lg:px-12

          ${
            isScrolled
              ? `
                mt-3
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#050505]/80
                py-3
                shadow-2xl
                backdrop-blur-xl
              `
              : `
                py-6
              `
          }
        `}
      >

        {/* ================================================================
            BRAND
        ================================================================= */}

        <a
          href="#top"
          onClick={() => handleLinkClick("#top")}
          className="
            group
            relative
            flex
            items-center
            gap-3
          "
        >

          {/* ============================================================
              LOGO
              ------------------------------------------------------------
              یک المان هندسی مینیمال الهام‌گرفته از هندسه ایرانی.
          ============================================================ */}

          <span
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
            "
          >

            {/* Outer Shape */}

            <span
              className="
                absolute
                h-7
                w-7
                rotate-45
                border
                border-emerald-400/40
                transition-all
                duration-500
                group-hover:rotate-[135deg]
                group-hover:border-emerald-400
              "
            />


            {/* Inner Shape */}

            <span
              className="
                absolute
                h-3
                w-3
                rotate-45
                bg-emerald-400
                shadow-[0_0_20px_rgba(52,211,153,0.35)]
              "
            />

          </span>


          {/* Name */}

          <div>

            <p
              className="
                text-lg
                text-[16px]
                font-bold
                tracking-tight
                text-white
              "
            >
              سجاد پرچم
            </p>


            <p
              className="
                mt-0.5
                font-mono
                text-[14px]
                tracking-[0.16em]
                text-zinc-700
              "
              dir="ltr"
            >
              AI ENGINEER
            </p>

          </div>

        </a>


        {/* ================================================================
            DESKTOP NAVIGATION
        ================================================================= */}

        <div
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
        >

          {navigationLinks.map((link) => {

            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}

                href={link.href}

                onClick={() => handleLinkClick(link.href)}

                className="
                  relative
                  text-[16px]
                  rounded-xl
                  px-3
                  py-2
                  text-xs
                  transition-colors
                  duration-300
                "
              >

                {/* Link Text */}

                <span
                  className={`
                    relative
                    z-10

                    ${
                      isActive
                        ? "text-emerald-400"
                        : "text-zinc-500 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </span>


                {/* Active Background */}

                {isActive && (

                  <motion.span
                    layoutId="active-navbar"

                    className="
                      absolute
                      inset-0
                      rounded-xl
                      border
                      border-emerald-400/10
                      bg-emerald-400/[0.06]
                    "

                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />

                )}

              </a>
            );
          })}

        </div>


        {/* ================================================================
            CONTACT BUTTON
        ================================================================= */}

        <a
          href="#contact"

          onClick={() => handleLinkClick("#contact")}

          className="
            hidden
            rounded-full
            border
            border-emerald-400/20
            px-5
            py-2.5
            text-xs
            text-emerald-400
            transition-all
            duration-300
            hover:bg-emerald-400
            hover:text-black
            xl:inline-flex
          "
        >
          همکاری کنیم
        </a>


        {/* ================================================================
            MOBILE MENU BUTTON
        ================================================================= */}

        <button
          type="button"

          onClick={() => setIsOpen(!isOpen)}

          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.08]
            text-zinc-400
            transition-all
            duration-300
            hover:border-emerald-400/30
            hover:text-emerald-400
            lg:hidden
          "

          aria-label="باز کردن منو"
        >

          {isOpen ? (

            <X size={20} />

          ) : (

            <Menu size={20} />

          )}

        </button>

      </nav>


      {/* ================================================================
          MOBILE MENU
      ================================================================= */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -15,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
              mx-6
              mt-3
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#080808]/95
              p-3
              shadow-2xl
              backdrop-blur-xl
              sm:mx-8
            "
          >

            {navigationLinks.map((link, index) => {

              const isActive = activeSection === link.href;

              return (
                <motion.a
                  key={link.href}

                  href={link.href}

                  onClick={() => handleLinkClick(link.href)}

                  initial={{
                    opacity: 0,
                    x: 20,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * 0.04,
                  }}

                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-emerald-400/[0.08]
                          text-emerald-400
                        `
                        : `
                          text-zinc-500
                          hover:bg-white/[0.04]
                          hover:text-white
                        `
                    }
                  `}
                >

                  <span>
                    {link.label}
                  </span>


                  <span
                    className="
                      font-mono
                      text-[10px]
                      text-zinc-800
                    "
                  >
                    0{index + 1}
                  </span>

                </motion.a>
              );
            })}


            {/* Mobile Contact Button */}

            <a
              href="#contact"

              onClick={() => handleLinkClick("#contact")}

              className="
                mt-3
                flex
                items-center
                justify-center
                rounded-xl
                bg-emerald-400
                px-4
                py-3.5
                text-sm
                font-semibold
                text-black
              "
            >
              شروع همکاری
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}


export default Navbar;

