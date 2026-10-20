import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  FileText,
  ExternalLink,
  BookOpen,
} from "lucide-react";

/*
  ============================================================
  اطلاعات مقالات
  ============================================================

  وقتی مقاله واقعی داشتی، فقط اطلاعات همین بخش را تغییر بده.

  status می‌تواند مثلاً یکی از این موارد باشد:

  "در حال پژوهش"
  "در حال نگارش"
  "ارسال شده"
  "منتشر شده"

  برای مقاله‌ای که هنوز وجود ندارد، چیزی به عنوان
  Published یا DOI قرار نده.
*/

const publications = [
  {
    year: "۲۰۲۶",
    type: "پروژه پژوهشی",
    title: "پیش‌بینی عملکرد پیشران فضاپیما با استفاده از یادگیری ماشین",
    description:
      "مطالعه و توسعه یک رویکرد مبتنی بر یادگیری ماشین برای پیش‌بینی رفتار پیشران و بررسی الگوهای غیرعادی در داده‌های تله‌متری.",
    status: "در حال توسعه",
    tags: [
      "Machine Learning",
      "Time Series",
      "Anomaly Detection",
    ],
    links: {
      paper: "#",
      github: "https://github.com/KingGester/spacecraft-thruster-prediction",
    },
  },

  {
    year: "۲۰۲۶",
    type: "بستر پژوهشی",
    title: "Atlas؛ بستر آزمایش سیستم‌های LLM و RAG",
    description:
      "طراحی یک بستر ماژولار برای مطالعه مدل‌های زبانی بزرگ، RAG، بازیابی اطلاعات و مسیریابی هوشمند پرس‌وجوها.",
    status: "در حال پژوهش",
    tags: [
      "LLM",
      "RAG",
      "Router",
      "Information Retrieval",
    ],
    links: {
      paper: "#",
      github: "https://github.com/KingGester",
    },
  },
];

/*
  ============================================================
  وضعیت‌های پژوهشی
  ============================================================
*/

const statusStyles = {
  "در حال پژوهش":
    "border-emerald-400/20 bg-emerald-400/5 text-emerald-400",

  "در حال توسعه":
    "border-amber-400/20 bg-amber-400/5 text-amber-400",

  "در حال نگارش":
    "border-blue-400/20 bg-blue-400/5 text-blue-400",

  "ارسال شده":
    "border-purple-400/20 bg-purple-400/5 text-purple-400",

  "منتشر شده":
    "border-green-400/20 bg-green-400/5 text-green-400",
};

function Publications() {
  return (
    <section
      id="publications"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          پس‌زمینه
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-emerald-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            Header
            =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}

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
              انتشارات
            </p>

            {/* Title */}

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
              ایده‌ها را به
              <br />
              <span className="text-zinc-500">
                دانش قابل ارائه تبدیل می‌کنیم.
              </span>
            </h2>
          </motion.div>

          {/* توضیحات */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              max-w-xl
              text-base
              leading-8
              text-zinc-500
              lg:pb-1
            "
          >
            این بخش شامل مقالات، پروژه‌های پژوهشی و دست‌نوشته‌هایی است
            که در مسیر یادگیری و پژوهش در حوزه هوش مصنوعی شکل می‌گیرند.
          </motion.p>
        </div>

        {/* ===================================================
            خط جداکننده
            =================================================== */}

        <div className="my-16 h-px bg-zinc-800" />

        {/* ===================================================
            لیست مقالات
            =================================================== */}

        <div className="space-y-6">

          {publications.map((publication, index) => (
            <motion.article
              key={publication.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-7
                transition
                duration-300
                hover:border-zinc-700
                sm:p-9
                lg:p-10
              "
            >

              {/* =============================================
                  شماره
                  ============================================= */}

              <div
                className="
                  absolute
                  left-8
                  top-8
                  font-mono
                  text-xs
                  text-zinc-700
                "
              >
                {publication.year}
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_auto]">

                <div>

                  {/* نوع مقاله */}

                  <div className="flex flex-wrap items-center gap-3">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-mono
                        text-xs
                        text-emerald-400
                      "
                    >
                      <FileText size={14} />

                      {publication.type}
                    </span>

                    {/* وضعیت */}

                    <span
                      className={`
                        rounded-full
                        border
                        px-3
                        py-1
                        text-xs
                        ${
                          statusStyles[publication.status] ||
                          "border-zinc-800 bg-zinc-900 text-zinc-400"
                        }
                      `}
                    >
                      {publication.status}
                    </span>
                  </div>

                  {/* عنوان */}

                  <h3
                    className="
                      mt-5
                      max-w-3xl
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
                    {publication.title}
                  </h3>

                  {/* توضیحات */}

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
                    {publication.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {publication.tags.map((tag) => (
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

                  {/* =========================================
                      لینک‌ها
                      ========================================= */}

                  <div className="mt-8 flex flex-wrap gap-5">

                    {/* Paper */}

                    <a
                      href={publication.links.paper}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:text-emerald-400
                      "
                    >
                      مشاهده مقاله

                      <ArrowUpLeft size={16} />
                    </a>

                    {/* GitHub */}

                    <a
                      href={publication.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-500
                        transition
                        hover:text-white
                      "
                    >
                      مشاهده پروژه

                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                {/* =============================================
                    آیکون سمت راست
                    ============================================= */}

                <div
                  className="
                    hidden
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    text-zinc-600
                    transition
                    duration-300
                    group-hover:border-emerald-400/30
                    group-hover:text-emerald-400
                    lg:flex
                  "
                >
                  <BookOpen size={24} />
                </div>
              </div>

              {/* نور تزئینی */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-48
                  w-48
                  rounded-full
                  bg-emerald-400/0
                  blur-3xl
                  transition
                  duration-500
                  group-hover:bg-emerald-400/5
                "
              />
            </motion.article>
          ))}
        </div>

        {/* ===================================================
            بخش پایانی
            =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-16
            flex
            items-center
            gap-4
            border-t
            border-zinc-800
            pt-8
          "
        >
          <span className="h-px w-10 bg-emerald-400" />

          <p className="text-sm leading-7 text-zinc-600">
            این بخش با پیشرفت پروژه‌های پژوهشی و انتشار مقالات جدید
            به‌روزرسانی خواهد شد.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Publications;