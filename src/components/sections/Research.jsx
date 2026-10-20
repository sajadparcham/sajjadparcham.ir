import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  Brain,
  Database,
  FlaskConical,
  Rocket,
  Search,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| RESEARCH AREAS
|--------------------------------------------------------------------------
|
| این بخش حوزه‌هایی را مشخص می‌کند که روی آن‌ها تمرکز پژوهشی داریم.
|
| نکته:
| اینجا بهتر است فقط مهارت‌هایی را قرار بدهیم که واقعاً بخشی از
| مسیر تخصصی ما هستند.
|
| ساختار هر مورد:
|
| title       → عنوان حوزه
| description → توضیح کوتاه
| icon        → آیکون
| tags        → تکنولوژی‌ها / مفاهیم مرتبط
|
|--------------------------------------------------------------------------
*/

const researchAreas = [
  {
    title: "مدل‌های زبانی بزرگ",
    description:
      "مطالعه و ساخت سیستم‌های مبتنی بر LLM با تمرکز بر تعامل، استنتاج و استفاده از مدل‌های زبانی در نرم‌افزارهای هوشمند.",
    icon: Brain,
    tags: ["LLM", "Inference", "Prompt Engineering"],
  },

  {
    title: "RAG و بازیابی اطلاعات",
    description:
      "بررسی روش‌های اتصال مدل‌های زبانی به منابع خارجی برای افزایش دقت، قابلیت استناد و دسترسی به دانش اختصاصی.",
    icon: Database,
    tags: ["RAG", "Embeddings", "Vector DB", "Retrieval"],
  },

  {
    title: "مسیریابی هوشمند",
    description:
      "طراحی Routerهایی که بتوانند نوع درخواست را تشخیص دهند و آن را به مناسب‌ترین مسیر پردازشی هدایت کنند.",
    icon: Search,
    tags: ["Router", "Classification", "Query Routing"],
  },

  {
    title: "هوش مصنوعی در هوافضا",
    description:
      "استفاده از روش‌های Machine Learning برای تحلیل داده‌های سیستم‌های فضایی، پیش‌بینی رفتار و شناسایی ناهنجاری.",
    icon: Rocket,
    tags: ["Machine Learning", "Time Series", "Anomaly Detection"],
  },
];

/*
|--------------------------------------------------------------------------
| CURRENT RESEARCH PROJECTS
|--------------------------------------------------------------------------
|
| پروژه‌هایی که در حال حاضر بخشی از مسیر پژوهشی هستند.
|
| بسیار مهم:
|
| اینجا از عبارت‌هایی مثل Published Paper استفاده نمی‌کنیم،
| مگر اینکه واقعاً مقاله منتشر شده باشد.
|
| Atlas → Research Platform
| Spacecraft → Research Project
|
|--------------------------------------------------------------------------
*/

const researchProjects = [
  {
    title: "Atlas",
    category: "LLM · RAG · ROUTER",

    description:
      "یک بستر پژوهشی برای مطالعه و آزمایش سیستم‌های مبتنی بر LLM، بازیابی اطلاعات و مسیریابی هوشمند پرس‌وجو.",

    researchQuestion:
      "چگونه می‌توان یک سیستم هوشمند ساخت که بتواند نوع درخواست کاربر را تشخیص دهد و مناسب‌ترین مسیر پردازشی را انتخاب کند؟",

    pipeline: [
      "LLM",
      "Document Processing",
      "Embeddings",
      "Retrieval",
      "RAG",
      "Router",
    ],

    tags: [
      "LLM",
      "RAG",
      "Router",
      "Retrieval",
      "Embeddings",
      "AI Systems",
    ],

    status: "در حال توسعه",

    icon: Brain,

    link: "https://github.com/KingGester",
  },

  {
    title: "پیش‌بینی عملکرد پیشران فضاپیما",
    category: "MACHINE LEARNING · AEROSPACE",

    description:
      "یک پروژه پژوهشی برای بررسی داده‌های آزمون پیشران فضاپیما و استفاده از روش‌های Machine Learning برای پیش‌بینی رفتار و بررسی ناهنجاری‌ها.",

    researchQuestion:
      "آیا می‌توان از داده‌های تاریخی عملکرد پیشران برای پیش‌بینی رفتار آینده و شناسایی الگوهای غیرعادی استفاده کرد؟",

    pipeline: [
      "Data Processing",
      "Feature Engineering",
      "Machine Learning",
      "Time Series",
      "Anomaly Detection",
    ],

    tags: [
      "Machine Learning",
      "Time Series",
      "Feature Engineering",
      "Anomaly Detection",
      "Aerospace",
    ],

    status: "پروژه پژوهشی",

    icon: Rocket,

    link: "https://github.com/KingGester/spacecraft-thruster-prediction",
  },
];

/*
|--------------------------------------------------------------------------
| FUTURE RESEARCH DIRECTIONS
|--------------------------------------------------------------------------
|
| این بخش نشان می‌دهد مسیر پژوهشی آینده چیست.
|
| هدف:
|
| بازدیدکننده نباید فقط پروژه‌های فعلی را ببیند؛
| باید بفهمد این پروژه‌ها به چه مسیر بزرگ‌تری وصل می‌شوند.
|
|--------------------------------------------------------------------------
*/

const futureDirections = [
  {
    number: "01",
    title: "سیستم‌های مبتنی بر LLM",
    description:
      "مطالعه معماری سیستم‌هایی که از LLM به‌عنوان بخش مرکزی یک نرم‌افزار هوشمند استفاده می‌کنند.",
  },

  {
    number: "02",
    title: "سیستم‌های Retrieval",
    description:
      "بررسی روش‌های مختلف بازیابی اطلاعات، Embedding، Vector Search و ترکیب آن‌ها با مدل‌های زبانی.",
  },

  {
    number: "03",
    title: "سیستم‌های هوشمند چندمسیره",
    description:
      "طراحی Router و معماری‌هایی که بتوانند بر اساس نوع درخواست، مسیر مناسب پردازش را انتخاب کنند.",
  },

  {
    number: "04",
    title: "هوش مصنوعی در هوافضا",
    description:
      "ادامه مطالعه روی داده‌های سیستم‌های فضایی، پیش‌بینی، تشخیص ناهنجاری و کاربرد Machine Learning.",
  },
];

/*
|--------------------------------------------------------------------------
| GITHUB ICON
|--------------------------------------------------------------------------
|
| به‌جای استفاده از Github در lucide-react، از SVG داخلی استفاده می‌کنیم.
|
| مزیت:
|
| اگر نسخه lucide-react آیکون Github را نداشت،
| دیگر پروژه به خاطر آن خطا نمی‌دهد.
|
|--------------------------------------------------------------------------
*/

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.14c.97 0 1.95.13 2.87.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/*
      ----------------------------------------------------------------------
      BACKGROUND GLOW

      این نور پس‌زمینه فقط برای ایجاد عمق بصری است.

      blur-3xl
      یعنی نور خیلی نرم و پخش‌شده.

      opacity-10
      یعنی شدت نور کم است.

      pointer-events-none
      یعنی این عنصر هیچ‌وقت جلوی کلیک کاربر را نمی‌گیرد.
      ----------------------------------------------------------------------
      */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          bottom-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-emerald-400/5
          blur-3xl
        "
      />

      {/*
      ----------------------------------------------------------------------
      MAIN CONTAINER

      max-w-7xl
      عرض محتوا را محدود می‌کند تا روی مانیتورهای بزرگ بیش از حد کشیده نشود.

      mx-auto
      محتوا را در مرکز صفحه قرار می‌دهد.

      px-5
      فاصله افقی از لبه صفحه.

      sm:px-8 / lg:px-10
      در اندازه‌های بزرگ‌تر فاصله را افزایش می‌دهند.
      ----------------------------------------------------------------------
      */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/*
        --------------------------------------------------------------------
        SECTION HEADER
        --------------------------------------------------------------------
        */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/*
          ------------------------------------------------------------------
          LABEL

          text-xs
          متن کوچک.

          tracking-[0.2em]
          فاصله بین حروف.

          نکته:
          این مقدار را فقط برای Label انگلیسی/لاتین مناسب می‌دانیم.
          برای متن فارسی معمولاً tracking زیاد استفاده نمی‌کنیم.
          ------------------------------------------------------------------
          */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />

            <span className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
              RESEARCH
            </span>
          </div>

          {/*
          ------------------------------------------------------------------
          TITLE

          text-4xl
          اندازه اصلی عنوان.

          leading-tight
          فاصله خطوط عنوان را کمتر می‌کند.

          sm:text-5xl
          در صفحه بزرگ‌تر عنوان کمی بزرگ‌تر می‌شود.
          ------------------------------------------------------------------
          */}

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            پژوهش را از
            <span className="text-emerald-400"> ساختن </span>
            شروع می‌کنم.
          </h2>

          {/*
          ------------------------------------------------------------------
          DESCRIPTION

          mt-6
          یعنی فاصله از عنوان بالایی.

          max-w-2xl
          باعث می‌شود متن بیش از حد عریض نشود.

          leading-9
          برای خوانایی متن فارسی بسیار مهم است.
          ------------------------------------------------------------------
          */}

          <p className="mt-6 max-w-2xl text-base leading-9 text-zinc-400 sm:text-lg">
            تمرکز من روی ساخت سیستم‌های هوشمندی است که در کنار کاربرد عملی،
            امکان آزمایش، ارزیابی و تبدیل ایده‌ها به مسیرهای پژوهشی و
            علمی را فراهم کنند.
          </p>
        </motion.div>

        {/*
        ====================================================================
        RESEARCH AREAS
        ====================================================================
        */}

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-zinc-500">
                حوزه‌های تمرکز
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                چهار محور اصلی پژوهش
              </h3>
            </div>
          </div>

          {/*
          grid
          کارت‌ها را در یک شبکه قرار می‌دهد.

          gap-4
          فاصله بین کارت‌ها.

          lg:grid-cols-4
          در صفحه بزرگ چهار کارت کنار هم قرار می‌گیرند.
          */}

          <div className="grid gap-4 lg:grid-cols-4">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    transition-all
                    duration-300
                    hover:border-emerald-400/30
                    hover:bg-emerald-400/[0.03]
                  "
                >
                  {/*
                  ----------------------------------------------------------
                  ICON BOX

                  w-11 / h-11
                  اندازه جعبه آیکون.

                  rounded-xl
                  گوشه‌های نرم.

                  group-hover
                  وقتی موس روی کل کارت برود،
                  رنگ آیکون هم تغییر می‌کند.
                  ----------------------------------------------------------
                  */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/5
                      text-emerald-400
                      transition-colors
                      duration-300
                      group-hover:bg-emerald-400/10
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-white">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-8 text-zinc-500">
                    {area.description}
                  </p>

                  {/*
                  ----------------------------------------------------------
                  TAGS

                  flex-wrap
                  اگر تعداد Tagها زیاد شد،
                  آن‌ها را به خط بعد می‌برد.

                  gap-2
                  فاصله بین Tagها.
                  ----------------------------------------------------------
                  */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-2.5
                          py-1
                          text-[11px]
                          text-zinc-400
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/*
        ====================================================================
        CURRENT RESEARCH
        ====================================================================
        */}

        <div className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-medium text-zinc-500">
              پروژه‌های فعلی
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              آزمایشگاه فعلی من
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-500">
              پروژه‌هایی که در حال حاضر به‌عنوان بستر عملی برای یادگیری،
              آزمایش و توسعه مسیر پژوهشی استفاده می‌شوند.
            </p>
          </div>

          <div className="space-y-6">
            {researchProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    transition-all
                    duration-300
                    hover:border-emerald-400/25
                  "
                >
                  <div className="grid gap-8 p-7 lg:grid-cols-[1fr_0.85fr] lg:p-10">
                    {/*
                    --------------------------------------------------------
                    LEFT SIDE
                    --------------------------------------------------------
                    */}

                    <div>
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-4">
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-2xl
                              border
                              border-emerald-400/20
                              bg-emerald-400/5
                              text-emerald-400
                            "
                          >
                            <Icon size={22} strokeWidth={1.7} />
                          </div>

                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.16em] text-emerald-400">
                              {project.category}
                            </p>

                            <h4 className="mt-2 text-2xl font-bold text-white">
                              {project.title}
                            </h4>
                          </div>
                        </div>

                        {/*
                        ------------------------------------------------------
                        STATUS

                        این Badge وضعیت فعلی پروژه را نشان می‌دهد.
                        ------------------------------------------------------
                        */}

                        <span
                          className="
                            shrink-0
                            rounded-full
                            border
                            border-emerald-400/20
                            bg-emerald-400/5
                            px-3
                            py-1.5
                            text-[11px]
                            text-emerald-300
                          "
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-7 text-sm leading-9 text-zinc-400">
                        {project.description}
                      </p>

                      {/*
                      --------------------------------------------------------
                      RESEARCH QUESTION
                      --------------------------------------------------------

                      این قسمت خیلی مهم است.

                      Portfolio حرفه‌ای نباید فقط بگوید:
                      "من این پروژه را ساختم."

                      بهتر است مشخص کند:
                      "این پروژه چه مسئله‌ای را بررسی می‌کند؟"
                      --------------------------------------------------------
                      */}

                      <div
                        className="
                          mt-7
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/20
                          p-5
                        "
                      >
                        <div className="flex items-center gap-2">
                          <FlaskConical
                            size={16}
                            className="text-emerald-400"
                          />

                          <span className="text-xs font-semibold text-zinc-300">
                            پرسش پژوهشی
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-8 text-zinc-500">
                          {project.researchQuestion}
                        </p>
                      </div>

                      {/*
                      --------------------------------------------------------
                      TAGS
                      --------------------------------------------------------
                      */}

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-white/10
                              px-3
                              py-1.5
                              text-xs
                              text-zinc-400
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/*
                      --------------------------------------------------------
                      GITHUB LINK
                      --------------------------------------------------------
                      */}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          mt-8
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-zinc-300
                          transition-colors
                          hover:text-emerald-400
                        "
                      >
                        <GithubIcon size={17} />

                        <span>مشاهده در GitHub</span>

                        <ArrowUpLeft size={16} />
                      </a>
                    </div>

                    {/*
                    --------------------------------------------------------
                    RIGHT SIDE
                    --------------------------------------------------------

                    این قسمت Pipeline پژوهش را نشان می‌دهد.
                    این باعث می‌شود پروژه فقط یک Card معمولی نباشد.
                    --------------------------------------------------------
                    */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        p-6
                      "
                    >
                      {/*
                      ------------------------------------------------------
                      DECORATIVE GRID

                      این خطوط فقط برای ظاهر آزمایشگاهی/تکنولوژیک هستند.
                      ------------------------------------------------------
                      */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          opacity-30
                          [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
                          [background-size:32px_32px]
                        "
                      />

                      <div className="relative">
                        <p className="text-xs font-semibold tracking-[0.14em] text-zinc-500">
                          RESEARCH PIPELINE
                        </p>

                        <div className="mt-7 space-y-3">
                          {project.pipeline.map((step, stepIndex) => (
                            <div
                              key={step}
                              className="flex items-center gap-3"
                            >
                              <div
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-emerald-400/20
                                  bg-emerald-400/5
                                  text-xs
                                  font-semibold
                                  text-emerald-400
                                "
                              >
                                {String(stepIndex + 1).padStart(2, "0")}
                              </div>

                              <div
                                className="
                                  flex-1
                                  rounded-xl
                                  border
                                  border-white/10
                                  bg-white/[0.025]
                                  px-4
                                  py-3
                                  text-sm
                                  text-zinc-300
                                "
                              >
                                {step}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/*
                        ------------------------------------------------------
                        PROJECT PHILOSOPHY
                        ------------------------------------------------------
                        */}

                        <div className="mt-8 border-t border-white/10 pt-6">
                          <p className="text-xs leading-7 text-zinc-600">
                            هدف این پروژه فقط ساخت یک محصول نیست؛
                            بلکه ایجاد بستری برای آزمایش، ارزیابی و
                            توسعه ایده‌های پژوهشی است.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/*
        ====================================================================
        FUTURE DIRECTIONS
        ====================================================================
        */}

        <div className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-medium text-zinc-500">
              مسیر آینده
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              مسیر پژوهشی در حال توسعه
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-500">
              پروژه‌های فعلی نقطه پایان نیستند؛ هرکدام بخشی از یک مسیر
              گسترده‌تر برای مطالعه سیستم‌های هوشمند هستند.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {futureDirections.map((direction, index) => (
              <motion.div
                key={direction.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  bg-[#080808]
                  p-6
                  transition-colors
                  duration-300
                  hover:bg-[#0b0b0b]
                "
              >
                <span className="font-mono text-xs text-emerald-400">
                  {direction.number}
                </span>

                <h4 className="mt-8 text-lg font-bold text-white">
                  {direction.title}
                </h4>

                <p className="mt-3 text-sm leading-8 text-zinc-500">
                  {direction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/*
        ====================================================================
        RESEARCH STATEMENT
        ====================================================================
        */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mt-28
            overflow-hidden
            rounded-3xl
            border
            border-emerald-400/15
            bg-emerald-400/[0.025]
            p-8
            sm:p-10
          "
        >
          {/*
          --------------------------------------------------------------
          DECORATIVE SHAPE
          --------------------------------------------------------------
          */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rotate-45
              border
              border-emerald-400/10
            "
          />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-400">
              RESEARCH STATEMENT
            </p>

            <blockquote className="mt-6 text-xl font-medium leading-10 text-zinc-200 sm:text-2xl">
              «علاقه‌مندم سیستم‌های هوشمندی بسازم که نه‌تنها در عمل کاربردی
              باشند، بلکه بستری برای آزمایش، ارزیابی و تبدیل ایده‌ها به
              پژوهش قابل توسعه نیز فراهم کنند.»
            </blockquote>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-400/50" />

              <span className="text-sm text-zinc-500">
                سجاد پرچم
              </span>
            </div>
          </div>
        </motion.div>

        {/*
        ====================================================================
        BOTTOM NOTE
        ====================================================================

        mt-12
        فاصله بین Research Statement و متن پایانی.

        text-center
        متن در مرکز قرار می‌گیرد.

        leading-8
        خوانایی بهتر فارسی.
        ====================================================================
        */}

        <p className="mt-12 text-center text-sm leading-8 text-zinc-600">
          این بخش با پیشرفت پروژه‌ها، نتایج آزمایش‌ها و شکل‌گیری
          پژوهش‌های جدید به‌روزرسانی خواهد شد.
        </p>
      </div>
    </section>
  );
}