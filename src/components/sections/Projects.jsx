import {
  ArrowUpLeft,
  ExternalLink,
  Brain,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| GITHUB ICON
|--------------------------------------------------------------------------
|
| برای GitHub از SVG مستقیم استفاده می‌کنیم.
|
| مزیت:
| - وابسته به lucide-react نیست.
| - اگر Github در نسخه lucide-react موجود نباشد، خطا نمی‌گیریم.
| - ظاهر آیکون GitHub دقیق‌تر است.
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
        0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032
        .892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338
        -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688
        -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564
        9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.296
        2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.701
        1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943
        .359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
        0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017
        C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  );
}




/*
|--------------------------------------------------------------------------
| PROJECT DATA
|--------------------------------------------------------------------------
|
| تمام اطلاعات پروژه‌ها اینجا قرار دارد.
|
| مزیت این روش:
|
| اگر فردا پروژه جدیدی ساختی، لازم نیست JSX اصلی کارت‌ها را تغییر بدهی.
|
| فقط یک Object جدید به این Array اضافه می‌کنی.
|
|--------------------------------------------------------------------------
|
| ساختار هر پروژه:
|
| title       → نام پروژه
| category    → دسته‌بندی
| description → توضیح پروژه
| tags        → تکنولوژی‌ها و مفاهیم
| status      → وضعیت پروژه
| github      → لینک GitHub
| icon        → آیکون
|
|--------------------------------------------------------------------------
*/

const projects = [
  {
    featured: true,

    title: "Atlas",

    category: "LLM · RAG · ROUTER",

    description:
      "یک بستر پژوهشی و مهندسی برای ساخت و آزمایش سیستم‌های هوشمند مبتنی بر LLM، با تمرکز بر RAG، Retrieval، Router و مدیریت جریان پردازش درخواست‌ها.",

    extendedDescription:
      "Atlas با هدف تبدیل شدن به یک پروژه چندمرحله‌ای طراحی شده است؛ از یک Core ساده برای تعامل با LLM شروع می‌شود و در نسخه‌های بعدی به Document Intelligence، Retrieval، Query Routing و ارزیابی سیستم‌های هوشمند توسعه پیدا می‌کند.",

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

    GithubIcon : "https://github.com/sajadparcham",

    demo: "#",
  },


  {
    featured: false,

    title: "پیش‌بینی عملکرد پیشران فضاپیما",

    category: "MACHINE LEARNING · AEROSPACE",

    description:
      "پروژه‌ای پژوهشی برای تحلیل داده‌های آزمایش پیشران فضاپیما و بررسی امکان پیش‌بینی رفتار سیستم با استفاده از روش‌های کلاسیک Machine Learning.",

    extendedDescription:
      "این پروژه روی داده‌های زمانی مربوط به عملکرد پیشران تمرکز دارد و شامل مهندسی ویژگی، پیش‌بینی Thrust، تحلیل خطا و بررسی Anomaly Detection است.",

    tags: [
      "Machine Learning",
      "Time Series",
      "Feature Engineering",
      "Anomaly Detection",
      "Aerospace",
    ],

    status: "پروژه پژوهشی",

    icon: Rocket,

    github: "https://github.com/sajadparcham/spacecraft-thruster-prediction",

    demo: "#",
  },
];


/*
|--------------------------------------------------------------------------
| STATUS STYLES
|--------------------------------------------------------------------------
|
| برای هر وضعیت یک ظاهر جداگانه داریم.
|
| اگر بعداً وضعیت جدیدی اضافه کردی، اینجا Style آن را مشخص کن.
|
|--------------------------------------------------------------------------
*/

const statusStyles = {
  "در حال توسعه":
    "border-emerald-400/20 bg-emerald-400/5 text-emerald-400",

  "پروژه پژوهشی":
    "border-zinc-700 bg-zinc-900/50 text-zinc-400",
};


export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-900
        bg-[#050505]
        py-24
        sm:py-32
      "
    >

      {/*
      |--------------------------------------------------------------------------
      | BACKGROUND DECORATION
      |--------------------------------------------------------------------------
      |
      | این نور سبز فقط برای ایجاد عمق بصری استفاده می‌شود.
      |
      | opacity پایین باعث می‌شود ظاهر سایت همچنان مینیمال باقی بماند.
      |
      |--------------------------------------------------------------------------
      */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-40
          h-96
          w-96
          rounded-full
          bg-emerald-400/[0.04]
          blur-3xl
        "
      />


      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/*
        |--------------------------------------------------------------------------
        | SECTION HEADER
        |--------------------------------------------------------------------------
        |
        | mb-16
        | فاصله Header از پروژه‌ها.
        |
        |--------------------------------------------------------------------------
        */}

        <div className="mb-16 max-w-3xl">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-10 bg-emerald-400" />

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
              پروژه‌ها
            </span>

          </div>


          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">

             ایده‌ها را به 

            <br />

            <span className="text-emerald-400">
               سیستم‌های واقعی  تبدیل می‌کنم.
            </span>

              

          </h2>


          <p className="mt-6 max-w-2xl text-base leading-9 text-zinc-400 sm:text-lg">
            پروژه‌های من ترکیبی از مهندسی نرم‌افزار، هوش مصنوعی و
            پژوهش هستند؛ با تمرکز بر ساخت سیستم‌هایی که بتوان آن‌ها
            را توسعه، آزمایش و ارزیابی کرد.
          </p>

        </div>


        {/*
        |--------------------------------------------------------------------------
        | FEATURED PROJECT
        |--------------------------------------------------------------------------
        |
        | پروژه Featured در این قسمت قرار می‌گیرد.
        |
        | Atlas مهم‌ترین پروژه فعلی تو است؛ بنابراین فضای بیشتری
        | نسبت به پروژه‌های دیگر دریافت می‌کند.
        |
        |--------------------------------------------------------------------------
        */}

        {projects
          .filter((project) => project.featured)
          .map((project) => {

            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-[#090909]
                  p-6
                  sm:p-10
                  lg:p-12
                "
              >

                {/*
                |--------------------------------------------------------------------------
                | FEATURED GLOW
                |--------------------------------------------------------------------------
                |
                | این نور هنگام Hover کمی بیشتر دیده می‌شود.
                |
                |--------------------------------------------------------------------------
                */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-80
                    w-80
                    rounded-full
                    bg-emerald-400/[0.05]
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:bg-emerald-400/[0.08]
                  "
                />


                <div className="relative">

                  {/*
                  |--------------------------------------------------------------------------
                  | PROJECT TOP ROW
                  |--------------------------------------------------------------------------
                  */}

                  <div className="flex flex-wrap items-start justify-between gap-5">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        text-emerald-400
                      "
                    >
                      <Icon size={25} strokeWidth={1.5} />
                    </div>


                    <span
                      className={`
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-xs
                        ${statusStyles[project.status]}
                      `}
                    >
                      {project.status}
                    </span>

                  </div>


                  {/*
                  |--------------------------------------------------------------------------
                  | PROJECT CATEGORY
                  |--------------------------------------------------------------------------
                  |
                  | font-mono
                  | برای اصطلاحات فنی مناسب است.
                  |
                  | tracking
                  | فاصله بین حروف انگلیسی را بیشتر می‌کند.
                  |
                  |--------------------------------------------------------------------------
                  */}

                  <div className="mt-8 font-mono text-xs tracking-[0.16em] text-zinc-600">
                    {project.category}
                  </div>


                  <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    {project.title}
                  </h3>


                  <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>


                  {/*
                  |--------------------------------------------------------------------------
                  | EXTENDED DESCRIPTION
                  |--------------------------------------------------------------------------
                  |
                  | این متن کمی عمیق‌تر توضیح می‌دهد پروژه دقیقاً چیست.
                  |
                  | این قسمت برای بازدیدکننده پژوهشی مهم است.
                  |
                  |--------------------------------------------------------------------------
                  */}

                  <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-500">
                    {project.extendedDescription}
                  </p>


                  {/*
                  |--------------------------------------------------------------------------
                  | PROJECT TAGS
                  |--------------------------------------------------------------------------
                  */}

                  <div className="mt-8 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          rounded-lg
                          border
                          border-zinc-800
                          bg-zinc-950
                          px-3
                          py-2
                          font-mono
                          text-xs
                          text-zinc-500
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/*
                  |--------------------------------------------------------------------------
                  | PROJECT LINKS
                  |--------------------------------------------------------------------------
                  |
                  | flex-wrap
                  | باعث می‌شود اگر عرض کم شد، دکمه‌ها به خط بعد بروند.
                  |
                  |--------------------------------------------------------------------------
                  */}

                  <div className="mt-10 flex flex-wrap gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-emerald-400
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-black
                        transition-transform
                        duration-300
                        hover:-translate-y-0.5
                      "
                    >
                      مشاهده در GitHub

                      <ArrowUpLeft size={17} />

                    </a>


                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-zinc-800
                          px-5
                          py-3
                          text-sm
                          text-zinc-300
                          transition-colors
                          duration-300
                          hover:border-zinc-600
                          hover:text-white
                        "
                      >
                        مشاهده پروژه

                        <ExternalLink size={16} />

                      </a>
                    )}

                  </div>


                  {/*
                  |--------------------------------------------------------------------------
                  | ATLAS VERSION PATH
                  |--------------------------------------------------------------------------
                  |
                  | این قسمت مخصوص Atlas است.
                  |
                  | به جای اینکه فقط بگوییم:
                  |
                  | "Atlas یک پروژه LLM است"
                  |
                  | مسیر توسعه پروژه را نشان می‌دهیم.
                  |
                  |--------------------------------------------------------------------------
                  */}

                  <div className="mt-12 border-t border-zinc-900 pt-10">

                    <div className="mb-6">

                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-700">
                        مسیر توسعه Atlas
                      </span>

                    </div>


                    <div className="grid gap-4 md:grid-cols-3">

                      {[
                        {
                          version: "v0.1",
                          title: "Core System",
                          description:
                            "تعامل پایه کاربر، Backend و LLM.",
                        },

                        {
                          version: "v0.2",
                          title: "Document Intelligence",
                          description:
                            "Chunking، Embedding، Vector DB و Retrieval.",
                        },

                        {
                          version: "v0.3",
                          title: "Query Router",
                          description:
                            "تشخیص نوع درخواست و انتخاب مسیر پردازش.",
                        },
                      ].map((item) => (

                        <div
                          key={item.version}
                          className="
                            rounded-xl
                            border
                            border-zinc-900
                            bg-zinc-950/50
                            p-5
                          "
                        >

                          <span className="font-mono text-xs text-emerald-400">
                            {item.version}
                          </span>

                          <h4 className="mt-3 text-sm font-semibold text-zinc-200">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-xs leading-7 text-zinc-600">
                            {item.description}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}


        {/*
        |--------------------------------------------------------------------------
        | OTHER PROJECTS
        |--------------------------------------------------------------------------
        |
        | mt-6
        | فاصله بین پروژه Featured و پروژه‌های بعدی.
        |
        |--------------------------------------------------------------------------
        */}

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {projects
            .filter((project) => !project.featured)
            .map((project, index) => {

              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-[#090909]
                    p-6
                    transition-all
                    duration-300
                    hover:border-zinc-700
                    sm:p-8
                  "
                >

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        text-zinc-400
                        transition-colors
                        duration-300
                        group-hover:text-emerald-400
                      "
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>


                    <span
                      className={`
                        rounded-full
                        border
                        px-3
                        py-1
                        text-[11px]
                        ${statusStyles[project.status]}
                      `}
                    >
                      {project.status}
                    </span>

                  </div>


                  <div className="mt-7 font-mono text-[10px] tracking-[0.15em] text-zinc-600">
                    {project.category}
                  </div>


                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {project.title}
                  </h3>


                  <p className="mt-4 text-sm leading-8 text-zinc-500">
                    {project.description}
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          rounded-lg
                          bg-zinc-950
                          px-2.5
                          py-1.5
                          font-mono
                          text-[10px]
                          text-zinc-600
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  <div className="mt-8 border-t border-zinc-900 pt-5">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-400
                        transition-colors
                        duration-300
                        hover:text-emerald-400
                      "
                    >
                      مشاهده کد در GitHub

                      <GithubIcon size={15} />

                    </a>

                  </div>

                </motion.article>
              );
            })}

        </div>


        {/*
        |--------------------------------------------------------------------------
        | FUTURE PROJECT PLACEHOLDER
        |--------------------------------------------------------------------------
        |
        | این بخش عمداً کوچک نگه داشته شده.
        |
        | بعداً که پروژه‌های جدیدی مثل:
        |
        | - AI Agent
        | - RAG Evaluation
        | - Notary AI
        | - Voice Assistant
        |
        | ساخته شدند، می‌توانیم آن‌ها را به projects Array اضافه کنیم.
        |
        |--------------------------------------------------------------------------
        */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            border-t
            border-zinc-900
            pt-8
          "
        >

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-zinc-600">
              پروژه‌های بیشتری در مسیر توسعه و پژوهش قرار دارند.
            </p>

            <a
              href="https://github.com/sajadparcham"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-zinc-400
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              مشاهده GitHub

              <ArrowUpLeft size={16} />

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}