import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  BriefcaseBusiness,
  FlaskConical,
  GraduationCap,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| EXPERIENCE DATA
|--------------------------------------------------------------------------
|
| برای اضافه کردن یک تجربه جدید، فقط یک Object جدید
| به این Array اضافه کن.
|
| مثال:
|
| {
|   year: "2027",
|   type: "RESEARCH",
|   title: "عنوان تجربه",
|   organization: "نام مجموعه",
|   description: "توضیحات تجربه",
|   tags: ["AI", "Research"],
| }
|
|--------------------------------------------------------------------------
*/

const experiences = [
  {
    year: "۲۰۲۶",
    type: "پژوهش و توسعه",
    title: "پژوهشگر و توسعه‌دهنده سیستم‌های هوش مصنوعی",
    organization: "پروژه‌های شخصی و پژوهشی",
    description:
      "تمرکز بر طراحی و توسعه سیستم‌های مبتنی بر هوش مصنوعی، با تمرکز ویژه بر LLM، RAG، بازیابی اطلاعات، مسیریابی پرس‌وجو و ساخت بسترهای قابل آزمایش.",
    tags: ["LLM", "RAG", "AI Systems"],
    icon: FlaskConical,
  },

  {
    year: "۲۰۲۶",
    type: "پروژه پژوهشی",
    title: "پیش‌بینی عملکرد پیشران فضاپیما",
    organization: "پروژه پژوهشی مستقل",
    description:
      "توسعه یک پروژه یادگیری ماشین برای تحلیل داده‌های تله‌متری، پیش‌بینی رفتار پیشران و بررسی الگوهای غیرعادی در سامانه‌های هوافضایی.",
    tags: [
      "Machine Learning",
      "Time Series",
      "Aerospace AI",
    ],
    icon: RocketIcon,
  },

  {
    year: "۲۰۲۵ – ۲۰۲۶",
    type: "توسعه نرم‌افزار",
    title: "توسعه‌دهنده نرم‌افزار و پروژه‌های شخصی",
    organization: "پروژه‌های مستقل",
    description:
      "طراحی و پیاده‌سازی پروژه‌های نرم‌افزاری با تمرکز بر Python، Backend، ابزارهای هوشمند و توسعه سیستم‌های کاربردی.",
    tags: ["Python", "Backend", "Software Engineering"],
    icon: BriefcaseBusiness,
  },

  {
    year: "۲۰۲۴ – اکنون",
    type: "تحصیلات",
    title: "کارشناسی ناپیوسته مهندسی کامپیوتر",
    organization: "دانشگاه ملی مهارت",
    description:
      "ادامه مسیر تحصیلی در حوزه مهندسی کامپیوتر با تمرکز بر تقویت پایه‌های مهندسی نرم‌افزار، هوش مصنوعی و آماده‌سازی برای مسیر پژوهشی.",
    tags: [
      "Computer Engineering",
      "Artificial Intelligence",
      "Research",
    ],
    icon: GraduationCap,
  },
];

/*
|--------------------------------------------------------------------------
| آیکون ساده برای پروژه هوافضا
|--------------------------------------------------------------------------
|
| چون ممکن است نسخه lucide-react شما آیکون Rocket را نداشته باشد،
| یک آیکون ساده SVG داخلی استفاده می‌کنیم تا مشکل Import نداشته باشیم.
|
*/

function RocketIcon({ size = 20, strokeWidth = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2" />
      <path d="M9 15l-3-3 3.5-6.5C11 3 14 2 17 2c0 3-.5 6-3 7.5L7.5 13" />
      <path d="M9 15l3 3 6.5-3.5C20 13 21 10 21 7c-3 0-6 .5-7.5 3" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </svg>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-24
        sm:py-32
      "
    >
      {/* ==================================================================
          Background Glow

          این قسمت فقط نور تزئینی پس‌زمینه است.

          bg-emerald-500/5
          → شدت کم نور سبز

          bg-emerald-500/10
          → نور متوسط

          bg-emerald-500/20
          → نور قوی‌تر

          blur-3xl
          → پخش کردن نور

          اگر نور زیادی است:
          opacity را کمتر کن.

          اگر نور ضعیف است:
          opacity را بیشتر کن.
      ================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-40
          h-96
          w-96
          rounded-full
          bg-emerald-500/5
          blur-3xl
        "
      />

      {/* ==================================================================
          Container

          max-w-7xl
          → حداکثر عرض محتوای اصلی

          max-w-6xl
          → محتوا باریک‌تر

          max-w-7xl
          → حالت استاندارد

          max-w-[1400px]
          → محتوا عریض‌تر

          px-5
          → فاصله چپ و راست در موبایل

          sm:px-8
          → فاصله بیشتر در صفحه‌های بزرگ‌تر

          lg:px-10
          → فاصله بیشتر در دسکتاپ

          اگر محتوا به لبه نزدیک بود:
          px-6 / px-8 / px-10 / px-12

          اگر محتوا بیش از حد وسط بود:
          max-w-[1400px]
      ================================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ==================================================================
            HEADER
        ================================================================== */}

        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* ==================================================================
                Label

                mb-4
                → فاصله پایین Label

                mb-4 = فاصله کم
                mb-6 = بیشتر
                mb-8 = زیاد

                text-xs
                → اندازه کوچک

                sm:text-sm
                → در صفحه بزرگ‌تر کمی بزرگ‌تر
            ================================================================== */}

            <p
              className="
                mb-4
                font-mono
                text-xs
                tracking-[0.2em]
                text-emerald-400
                sm:text-sm
              "
            >
              تجربه و مسیر
            </p>

            {/* ==================================================================
                Main Heading

                text-4xl
                → اندازه عنوان در موبایل

                sm:text-5xl
                → اندازه بزرگ‌تر

                lg:text-6xl
                → عنوان بزرگ دسکتاپ

                leading-tight
                → فاصله خطوط کمتر و مناسب عنوان

                tracking-tight
                → فاصله حروف کمی کمتر
            ================================================================== */}

            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              مسیر من تا اینجا.
              <br />

              <span className="text-zinc-500">
                و مسیری که در ادامه می‌سازم.
              </span>
            </h2>

            {/* ==================================================================
                Description

                mt-6
                → فاصله از عنوان

                max-w-2xl
                → حداکثر عرض متن

                اگر متن زیادی عریض بود:
                max-w-xl

                اگر متن زیادی باریک بود:
                max-w-3xl

                leading-8
                → فاصله بین خطوط
            ================================================================== */}

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-zinc-400
                sm:text-lg
                sm:leading-9
              "
            >
              مسیر حرفه‌ای من ترکیبی از تحصیل، توسعه نرم‌افزار،
              پروژه‌های هوش مصنوعی و حرکت تدریجی به سمت پژوهش و
              ساخت سیستم‌های هوشمند است.
            </p>
          </motion.div>
        </div>

        {/* ==================================================================
            Timeline

            mt-20
            → فاصله بین Header و Timeline

            mt-16
            → فاصله کمتر

            mt-20
            → فاصله متوسط

            mt-24
            → فاصله زیاد
        ================================================================== */}

        <div className="mt-20">

          {/* ==================================================================
              Experience Items
          ================================================================== */}

          <div className="relative">

            {/* ==================================================================
                Timeline Line

                این خط عمودی مسیر زمانی را نمایش می‌دهد.

                absolute
                → خارج کردن خط از جریان عادی

                right-4
                → فاصله خط از سمت راست

                اگر خط را جابه‌جا خواستی:
                right-2
                right-6
                right-8

                h-full
                → ارتفاع خط به اندازه Timeline
            ================================================================== */}

            <div
              className="
                absolute
                right-4
                top-0
                hidden
                h-full
                w-px
                bg-zinc-800
                md:block
              "
            />

            <div className="space-y-10">

              {experiences.map((experience, index) => {
                const Icon = experience.icon;

                return (
                  <motion.article
                    key={`${experience.title}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="
                      relative
                      md:pr-16
                    "
                  >

                    {/* ==================================================================
                        Timeline Dot

                        این دایره روی خط زمانی قرار می‌گیرد.
                    ================================================================== */}

                    <div
                      className="
                        absolute
                        right-0
                        top-8
                        hidden
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-700
                        bg-[#050505]
                        text-emerald-400
                        md:flex
                      "
                    >
                      <Icon size={16} />
                    </div>

                    {/* ==================================================================
                        Experience Card

                        p-6
                        → Padding داخلی کارت

                        p-6 = معمولی
                        p-8 = بیشتر
                        p-10 = زیاد

                        rounded-2xl
                        → گردی گوشه‌ها

                        اگر گردی بیشتر خواستی:
                        rounded-3xl

                        اگر کمتر خواستی:
                        rounded-xl
                    ================================================================== */}

                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        p-6
                        transition
                        duration-300
                        hover:border-zinc-700
                        sm:p-8
                      "
                    >

                      {/* ==============================================================
                          Header Card
                      ============================================================== */}

                      <div
                        className="
                          flex
                          flex-col
                          gap-4
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                        "
                      >

                        <div>

                          {/* ============================================================
                              Year

                              font-mono
                              → فونت مناسب برای سال و اطلاعات تکنیکی

                              text-xs
                              → اندازه کوچک

                              tracking
                              → فاصله حروف
                          ============================================================ */}

                          <span
                            className="
                              font-mono
                              text-xs
                              tracking-[0.15em]
                              text-emerald-400
                            "
                          >
                            {experience.year}
                          </span>

                          {/* ============================================================
                              Type
                          ============================================================ */}

                          <p
                            className="
                              mt-2
                              text-xs
                              text-zinc-600
                            "
                          >
                            {experience.type}
                          </p>
                        </div>

                        {/* ==============================================================
                            Icon

                            hidden sm:flex
                            → در موبایل مخفی و از sm به بعد نمایش داده می‌شود.
                        ============================================================== */}

                        <div
                          className="
                            hidden
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-900
                            text-zinc-500
                            transition
                            duration-300
                            group-hover:border-emerald-400/30
                            group-hover:text-emerald-400
                            sm:flex
                          "
                        >
                          <Icon size={19} />
                        </div>
                      </div>

                      {/* ==============================================================
                          Title

                          mt-5
                          → فاصله عنوان از بخش بالایی

                          text-2xl
                          → عنوان

                          sm:text-3xl
                          → عنوان بزرگ‌تر در صفحه بزرگ
                      ============================================================== */}

                      <h3
                        className="
                          mt-5
                          text-2xl
                          font-bold
                          leading-tight
                          text-white
                          transition
                          duration-300
                          group-hover:text-emerald-400
                          sm:text-3xl
                        "
                      >
                        {experience.title}
                      </h3>

                      {/* ==============================================================
                          Organization

                          mt-2
                          → فاصله کم از عنوان
                      ============================================================== */}

                      <p
                        className="
                          mt-2
                          text-sm
                          font-medium
                          text-zinc-400
                        "
                      >
                        {experience.organization}
                      </p>

                      {/* ==============================================================
                          Description
                      ============================================================== */}

                      <p
                        className="
                          mt-5
                          max-w-3xl
                          text-sm
                          leading-8
                          text-zinc-500
                          sm:text-base
                        "
                      >
                        {experience.description}
                      </p>

                      {/* ==============================================================
                          Tags

                          mt-6
                          → فاصله Tags از توضیحات

                          flex-wrap
                          → اگر جا کم باشد Tags به خط بعد می‌روند

                          gap-2
                          → فاصله بین Tags

                          gap-3
                          → فاصله بیشتر
                      ============================================================== */}

                      <div
                        className="
                          mt-6
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-zinc-800
                              bg-zinc-900
                              px-3
                              py-1.5
                              text-xs
                              text-zinc-500
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ==============================================================
                          Decorative Glow

                          pointer-events-none
                          → روی کلیک و تعامل اثر نمی‌گذارد

                          absolute
                          → برای قرارگیری آزاد

                          opacity:
                          bg-emerald-400/5
                          → نور خیلی کم

                          /10
                          → نور بیشتر
                      ============================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-20
                          -left-20
                          h-40
                          w-40
                          rounded-full
                          bg-emerald-400/0
                          blur-3xl
                          transition
                          duration-500
                          group-hover:bg-emerald-400/5
                        "
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================================
            پایان بخش Experience

            این قسمت یک پیام کوتاه برای نشان دادن جهت آینده است.
        ================================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            border-t
            border-zinc-800
            pt-8
          "
        >

          {/* ==================================================================
              آموزش فاصله دادن متن

              mt-8
              یعنی Margin Top

              mt-4   → فاصله کم از بالا
              mt-6   → کمی بیشتر
              mt-8   → متوسط
              mt-10  → زیاد
              mt-12  → خیلی زیاد

              ---------------------------------------------------------------

              فاصله از چپ و راست:

              ml-4   → Margin Left
              mr-4   → Margin Right

              اما در سایت RTL بهتر است برای فاصله افقی
              معمولاً از mx / px استفاده کنیم.

              px-6
              یعنی Padding چپ و راست.

              ---------------------------------------------------------------

              max-w-2xl
              یعنی حداکثر عرض متن.

              اگر متن زیادی عریض است:

              max-w-xl

              اگر متن باریک است:

              max-w-3xl

              ---------------------------------------------------------------

              leading-8
              فاصله بین خطوط متن است.

              leading-6
              leading-7
              leading-8
              leading-9
              leading-10

              هرچه عدد بیشتر باشد خطوط از هم دورتر می‌شوند.
          ================================================================== */}

          <div className="flex items-start gap-4">

            <span className="mt-2 h-px w-10 shrink-0 bg-emerald-400" />

            <p
              className="
                max-w-2xl
                text-sm
                leading-7
                text-zinc-600
              "
            >
              مسیر حرفه‌ای من همچنان در حال شکل‌گیری است؛
              هدف اصلی، حرکت از توسعه نرم‌افزار به سمت ساخت
              سیستم‌های هوشمند و پژوهش در حوزه هوش مصنوعی است.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;