
import { motion } from "framer-motion";
import { ArrowUpLeft, Brain, Code2, Database, FlaskConical } from "lucide-react";

import { aboutData } from "../../data/about";


/*
|--------------------------------------------------------------------------
| Icon Mapping
|--------------------------------------------------------------------------
| اینجا مشخص می‌کنیم هر Focus Area چه آیکونی داشته باشد.
|
| اگر بعداً خواستی آیکون را تغییر بدهی، همین قسمت را تغییر بده.
|--------------------------------------------------------------------------
*/

const focusIcons = {
  "01": Brain,
  "02": Code2,
  "03": Database,
  "04": FlaskConical,
};


function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-24
        sm:py-32
        lg:py-40
      "
    >

      {/* ================================================================
          Container
          ----------------------------------------------------------------
          mx-auto
          → وسط قرار دادن Container

          max-w-7xl
          → محدود کردن عرض کلی سایت

          px-6
          → فاصله از چپ و راست

          اگر محتوا به کناره‌ها زیادی نزدیک بود:

          px-8
          px-10
          px-12

          اگر زیادی از کناره‌ها فاصله داشت:

          px-4
          ================================================================ */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-12
        "
      >

        {/* ================================================================
            Section Header
        ================================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Section Number */}

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  h-px
                  w-8
                  bg-emerald-400
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.2em]
                  text-emerald-400
                "
              >
                {aboutData.eyebrow}
              </span>

            </div>


            {/* Title */}

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {aboutData.title}
            </h2>


            {/* Persian Heritage Mark */}

            <div
              className="
                relative
                mt-10
                hidden
                h-40
                w-40
                items-center
                justify-center
                lg:flex
              "
            >

              {/* Outer Circle */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-emerald-400/10
                "
              />

              {/* Diamond */}

              <div
                className="
                  absolute
                  inset-6
                  rotate-45
                  border
                  border-emerald-400/15
                "
              />

              {/* Inner Diamond */}

              <div
                className="
                  absolute
                  inset-12
                  rotate-45
                  border
                  border-emerald-400/20
                "
              />

              {/* Center */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/30
                  bg-emerald-400/5
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_15px_rgba(52,211,153,0.8)]
                  "
                />
              </div>

            </div>

          </motion.div>


          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* Main Description */}

            <p
              className="
                max-w-3xl
                text-lg
                leading-9
                text-zinc-300
                sm:text-xl
                sm:leading-10
              "
            >
              {aboutData.description}
            </p>


            {/* Secondary Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-zinc-500
              "
            >
              {aboutData.secondaryDescription}
            </p>


            {/* ============================================================
                Focus Areas
            ============================================================= */}

            <div
              className="
                mt-12
                grid
                gap-3
                sm:grid-cols-2
              "
            >

              {aboutData.focusAreas.map((area, index) => {

                const Icon = focusIcons[area.number];

                return (
                  <motion.div
                    key={area.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:border-emerald-400/20
                      hover:bg-emerald-400/[0.03]
                    "
                  >

                    {/* Top Row */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-xs
                          font-mono
                          text-zinc-600
                        "
                      >
                        {area.number}
                      </span>

                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="
                          text-zinc-600
                          transition-colors
                          duration-300
                          group-hover:text-emerald-400
                        "
                      />

                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-6
                        text-base
                        font-semibold
                        text-zinc-200
                      "
                    >
                      {area.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-7
                        text-zinc-500
                      "
                    >
                      {area.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>


            {/* More Button */}

            <a
              href="#projects"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-emerald-400
              "
            >
              مشاهده مسیر کاری من

              <ArrowUpLeft
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;

