
import { ArrowUpLeft } from "lucide-react";


/*
|--------------------------------------------------------------------------
| FOOTER
|--------------------------------------------------------------------------
|
| این بخش آخرین قسمت سایت است.
|
| برای تغییر اطلاعات:
|
| 1. نام
| 2. عنوان شغلی
| 3. لینک‌های شبکه‌های اجتماعی
| 4. متن Copyright
|
| را از قسمت‌های مشخص‌شده تغییر بده.
|--------------------------------------------------------------------------
*/


const navigationLinks = [
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
    label: "تجربه",
    href: "#experience",
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


const socialLinks = [
  {
    label: "GitHub",

    /*
    |--------------------------------------------------------------
    | لینک GitHub خودت را اینجا قرار بده.
    |--------------------------------------------------------------
    */

    href: "https://github.com/KingGester",
  },

  {
    label: "LinkedIn",

    /*
    |--------------------------------------------------------------
    | لینک LinkedIn خودت را اینجا قرار بده.
    |--------------------------------------------------------------
    */

    href: "#",
  },

  {
    label: "Email",

    /*
    |--------------------------------------------------------------
    | ایمیل خودت را اینجا قرار بده.
    |--------------------------------------------------------------
    */

    href: "mailto:hello@example.com",
  },
];


function Footer() {
  /*
  |--------------------------------------------------------------------------
  | سال فعلی
  |--------------------------------------------------------------------------
  |
  | با استفاده از JavaScript سال به صورت خودکار تغییر می‌کند.
  |
  | بنابراین لازم نیست هر سال Footer را دستی تغییر بدهی.
  |
  */

  const currentYear = new Date().getFullYear();


  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#030303]
      "
    >

      {/* ================================================================
          MAIN FOOTER
      ================================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
        "
      >

        {/* ================================================================
            TOP AREA
        ================================================================= */}

        <div
          className="
            grid
            gap-16
            lg:grid-cols-[1.5fr_1fr_1fr]
            lg:gap-20
          "
        >

          {/* ==============================================================
              BRAND
          =============================================================== */}

          <div>

            {/* Logo / Name */}

            <a
              href="#top"
              className="
                inline-flex
                items-center
                gap-3
                text-xl
                font-bold
                tracking-tight
                text-white
              "
            >

              {/* Iranian-inspired mark */}

              <span
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    absolute
                    h-6
                    w-6
                    rotate-45
                    border
                    border-emerald-400/40
                  "
                />

                <span
                  className="
                    absolute
                    h-3
                    w-3
                    rotate-45
                    border
                    border-emerald-400
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                  "
                />

              </span>


              <span>
                سجاد پرچم
              </span>

            </a>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-8
                text-zinc-600
              "
            >
              مهندس هوش مصنوعی و پژوهشگر؛
              علاقه‌مند به ساخت سیستم‌های هوشمند،
              مهندسی نرم‌افزار و پژوهش در حوزه داده و AI.
            </p>


            {/* Tagline */}

            <p
              className="
                mt-6
                font-mono
                text-[10px]
                tracking-[0.15em]
                text-zinc-800
              "
            >
              BUILD · LEARN · RESEARCH
            </p>

          </div>


          {/* ==============================================================
              NAVIGATION
          =============================================================== */}

          <div>

            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-emerald-400
              "
            >
              NAVIGATION
            </p>


            <nav
              className="
                mt-6
                flex
                flex-col
                items-start
                gap-3
              "
            >

              {navigationLinks.map((link) => (

                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-zinc-600
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >

                  <span>
                    {link.label}
                  </span>


                  <ArrowUpLeft
                    size={13}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-emerald-400
                      group-hover:opacity-100
                    "
                  />

                </a>

              ))}

            </nav>

          </div>


          {/* ==============================================================
              SOCIAL
          =============================================================== */}

          <div>

            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-emerald-400
              "
            >
              CONNECT
            </p>


            <div
              className="
                mt-6
                flex
                flex-col
                items-start
                gap-3
              "
            >

              {socialLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}

                  target={
                    link.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }

                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }

                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-zinc-600
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-zinc-800
                      transition-colors
                      duration-300
                      group-hover:bg-emerald-400
                    "
                  />

                  {link.label}

                </a>

              ))}

            </div>

          </div>

        </div>


        {/* ================================================================
            LARGE GEOMETRIC MARK
        ================================================================= */}

        <div
          className="
            pointer-events-none
            relative
            mt-20
            flex
            justify-center
            sm:mt-24
          "
        >

          <div
            className="
              absolute
              h-40
              w-40
              rotate-45
              border
              border-emerald-400/[0.05]
              sm:h-52
              sm:w-52
            "
          />

          <div
            className="
              absolute
              h-28
              w-28
              rotate-45
              border
              border-emerald-400/[0.07]
              sm:h-36
              sm:w-36
            "
          />

          <div
            className="
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              sm:h-20
              sm:w-20
            "
          >

            <div
              className="
                h-8
                w-8
                rotate-45
                border
                border-emerald-400/30
              "
            />

            <div
              className="
                absolute
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_20px_rgba(52,211,153,0.35)]
              "
            />

          </div>

        </div>


        {/* ================================================================
            BOTTOM
        ================================================================= */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-6
            sm:mt-24
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Copyright */}

          <p
            className="
              font-mono
              text-[10px]
              tracking-[0.12em]
              text-zinc-800
            "
          >
            © {currentYear} SAJAD PARCHAM
          </p>


          {/* Built With */}

          <p
            className="
              font-mono
              text-[10px]
              tracking-[0.12em]
              text-zinc-800
            "
          >
            BUILT WITH REACT · FRAMER MOTION
          </p>

        </div>

      </div>


      {/* ================================================================
          DECORATIVE GRID
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-40
          w-40
          opacity-30
        "
      >

        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
            bg-[size:24px_24px]
          "
        />

      </div>

    </footer>
  );
}


export default Footer;

