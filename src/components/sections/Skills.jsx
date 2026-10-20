import { motion } from "framer-motion";
import {
  Brain,
  Database,
  GitBranch,
  Code2,
  Server,
  BarChart3,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| CORE FOCUS DATA
|--------------------------------------------------------------------------
|
| این بخش مهارت‌های اصلی و تخصصی تو را مشخص می‌کند.
|
| نکته مهم:
| ما عمداً درصد مهارت قرار نداده‌ایم.
|
| چرا؟
| چون مثلاً گفتن:
|
| Python = 90%
| AI = 85%
|
| از نظر حرفه‌ای معیار دقیقی ندارد و ممکن است بعدها
| در رزومه یا اپلای قابل دفاع نباشد.
|
| به جای درصد، تمرکز تخصصی را نشان می‌دهیم.
|
|--------------------------------------------------------------------------
*/

const coreSkills = [
  {
    icon: Brain,
    title: "Large Language Models",
    description:
      "مطالعه و توسعه سیستم‌های مبتنی بر LLM با تمرکز بر نحوه استفاده از مدل‌های زبانی در نرم‌افزارهای هوشمند.",
    status: "تمرکز اصلی",
    tags: ["LLM", "Prompt Engineering", "Inference"],
  },

  {
    icon: Database,
    title: "RAG & Retrieval",
    description:
      "طراحی سیستم‌های بازیابی اطلاعات برای اتصال مدل‌های زبانی به داده‌ها و اسناد خارجی.",
    status: "تمرکز اصلی",
    tags: ["RAG", "Embeddings", "Vector DB", "Retrieval"],
  },

  {
    icon: GitBranch,
    title: "Intelligent Routing",
    description:
      "طراحی Router برای تشخیص نوع درخواست و انتخاب مسیر مناسب برای پردازش آن.",
    status: "در حال توسعه",
    tags: ["Router", "Classification", "Query Routing"],
  },

  {
    icon: BarChart3,
    title: "Machine Learning",
    description:
      "پیاده‌سازی و ارزیابی مدل‌های یادگیری ماشین برای مسائل پیش‌بینی، تحلیل داده و تشخیص ناهنجاری.",
    status: "پژوهش و توسعه",
    tags: ["Machine Learning", "Time Series", "Anomaly Detection"],
  },
];


/*
|--------------------------------------------------------------------------
| TECHNICAL STACK
|--------------------------------------------------------------------------
|
| این قسمت تکنولوژی‌هایی را نمایش می‌دهد که در مسیر توسعه نرم‌افزار
| و پژوهش با آن‌ها کار می‌کنی.
|
| اگر تکنولوژی جدیدی یاد گرفتی:
|
| 1. یک مورد جدید به آرایه اضافه کن.
| 2. name را تغییر بده.
| 3. category را مشخص کن.
|
|--------------------------------------------------------------------------
*/

const technicalStack = [
  {
    icon: Code2,
    category: "Programming",
    skills: ["Python", "JavaScript", "React"],
  },

  {
    icon: Server,
    category: "Backend & Systems",
    skills: ["REST API", "FastAPI", "Django", "SQLite"],
  },

  {
    icon: Database,
    category: "Data & Retrieval",
    skills: ["SQL", "Embeddings", "Vector Database", "Data Processing"],
  },

  {
    icon: GitBranch,
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Docker", "Linux"],
  },
];


/*
|--------------------------------------------------------------------------
| LEARNING PATH
|--------------------------------------------------------------------------
|
| این مسیر عمداً با مسیر تخصصی‌ای که برای خودت انتخاب کرده‌ای هماهنگ است.
|
| هدف این نیست که سایت بگوید:
|
| "من همه چیز را بلدم."
|
| بلکه نشان می‌دهد:
|
| "مسیر تخصصی من چیست و در چه جهتی در حال عمیق‌تر شدن هستم؟"
|
|--------------------------------------------------------------------------
*/

const learningPath = [
  {
    number: "01",
    title: "LLM",
    description: "درک مدل‌های زبانی و نحوه استفاده از آن‌ها در سیستم‌های هوشمند.",
  },

  {
    number: "02",
    title: "RAG",
    description:
      "اتصال LLM به دانش و اسناد خارجی با استفاده از Retrieval.",
  },

  {
    number: "03",
    title: "Router",
    description:
      "تشخیص نوع درخواست و انتخاب مسیر مناسب برای پردازش آن.",
  },

  {
    number: "04",
    title: "AI Systems",
    description:
      "ترکیب مدل‌ها، Retrieval، ابزارها و منطق تصمیم‌گیری در یک سیستم واقعی.",
  },

  {
    number: "05",
    title: "Research",
    description:
      "تبدیل سیستم‌های ساخته‌شده به بستر آزمایش، ارزیابی و پژوهش.",
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-zinc-900 bg-[#050505] py-24 sm:py-32"
    >
      {/*
      |--------------------------------------------------------------------------
      | BACKGROUND GLOW
      |--------------------------------------------------------------------------
      |
      | این قسمت یک نور بسیار ظریف در پس‌زمینه ایجاد می‌کند.
      |
      | blur-3xl
      | یعنی نور کاملاً نرم و محو شود.
      |
      | opacity-10
      | یعنی شدت نور بسیار کم باشد.
      |
      | pointer-events-none
      | یعنی این عنصر روی کلیک کاربر تأثیری نداشته باشد.
      |
      |--------------------------------------------------------------------------
      */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-emerald-400/10
          blur-3xl
        "
      />

      {/*
      |--------------------------------------------------------------------------
      | MAIN CONTAINER
      |--------------------------------------------------------------------------
      |
      | max-w-7xl
      | عرض محتوای اصلی را محدود می‌کند تا صفحه بیش از حد کشیده نشود.
      |
      | mx-auto
      | محتوا را وسط صفحه قرار می‌دهد.
      |
      | px-5
      | از دو طرف صفحه فاصله ایجاد می‌کند.
      |
      | اگر بعداً خواستی فاصله افقی را بیشتر کنی:
      |
      | px-5 → فاصله معمولی
      | px-8 → فاصله بیشتر
      | px-10 → فاصله زیاد
      |
      |--------------------------------------------------------------------------
      */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/*
        |--------------------------------------------------------------------------
        | SECTION HEADER
        |--------------------------------------------------------------------------
        |
        | mb-16
        | یعنی فاصله پایین Header از بخش بعدی.
        |
        | اگر Cards خیلی به Header نزدیک بودند:
        |
        | mb-16 → فعلی
        | mb-20 → بیشتر
        | mb-24 → خیلی بیشتر
        |
        |--------------------------------------------------------------------------
        */}

        <div className="mb-16 max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-400" />

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
              تخصص و مهارت‌ها
            </span>
          </div>

          {/*
          |--------------------------------------------------------------------------
          | MAIN TITLE
          |--------------------------------------------------------------------------
          |
          | text-4xl
          | اندازه عنوان در حالت معمولی.
          |
          | sm:text-5xl
          | در صفحه بزرگ‌تر عنوان بزرگ‌تر می‌شود.
          |
          | leading-tight
          | فاصله خطوط عنوان را کمتر می‌کند.
          |
          |--------------------------------------------------------------------------
          */}

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            تمرکز بر ساخت
            <br />

            <span className="text-emerald-400">
              سیستم‌های هوشمند.
            </span>
          </h2>

          {/*
          |--------------------------------------------------------------------------
          | DESCRIPTION
          |--------------------------------------------------------------------------
          |
          | mt-6
          | فاصله متن از عنوان.
          |
          | leading-9
          | برای متن فارسی فاصله خطوط مناسب‌تری ایجاد می‌کند.
          |
          |--------------------------------------------------------------------------
          */}

          <p className="mt-6 max-w-2xl text-base leading-9 text-zinc-400 sm:text-lg">
            مسیر یادگیری من بر ترکیب هوش مصنوعی، مهندسی نرم‌افزار و
            پژوهش متمرکز است؛ با تمرکز ویژه بر LLM، RAG، Router و
            طراحی سیستم‌های هوشمند.
          </p>
        </div>


        {/*
        |--------------------------------------------------------------------------
        | CORE SKILLS
        |--------------------------------------------------------------------------
        |
        | این قسمت مهم‌ترین بخش Skills است.
        |
        | grid
        | یعنی کارت‌ها به صورت شبکه‌ای قرار می‌گیرند.
        |
        | md:grid-cols-2
        | از صفحه متوسط به بالا، دو ستون ایجاد می‌شود.
        |
        | gap-5
        | فاصله بین کارت‌ها.
        |
        |--------------------------------------------------------------------------
        */}

        <div className="grid gap-5 md:grid-cols-2">

          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
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
                  bg-[#0A0A0A]
                  p-6
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  sm:p-8
                "
              >

                {/*
                |--------------------------------------------------------------------------
                | ICON
                |--------------------------------------------------------------------------
                |
                | h-11 w-11
                | اندازه جعبه آیکون.
                |
                | p-2.5
                | فاصله داخلی آیکون.
                |
                |--------------------------------------------------------------------------
                */}

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
                      text-emerald-400
                      transition-colors
                      duration-300
                      group-hover:border-emerald-400/30
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>


                  {/*
                  |--------------------------------------------------------------------------
                  | STATUS
                  |--------------------------------------------------------------------------
                  |
                  | این Label نشان می‌دهد این حوزه چه جایگاهی در مسیر
                  | فعلی تو دارد.
                  |
                  |--------------------------------------------------------------------------
                  */}

                  <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
                    {skill.status}
                  </span>
                </div>


                {/*
                |--------------------------------------------------------------------------
                | CARD TITLE
                |--------------------------------------------------------------------------
                |
                | mt-6
                | فاصله عنوان از آیکون.
                |
                |--------------------------------------------------------------------------
                */}

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {skill.title}
                </h3>


                <p className="mt-4 text-sm leading-8 text-zinc-400">
                  {skill.description}
                </p>


                {/*
                |--------------------------------------------------------------------------
                | TAGS
                |--------------------------------------------------------------------------
                |
                | flex-wrap
                | اگر تعداد Tagها زیاد شود، به خط بعد می‌روند.
                |
                | gap-2
                | فاصله بین Tagها.
                |
                |--------------------------------------------------------------------------
                */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-lg
                        border
                        border-zinc-800
                        bg-zinc-950
                        px-3
                        py-1.5
                        font-mono
                        text-[11px]
                        text-zinc-500
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


        {/*
        |--------------------------------------------------------------------------
        | TECHNICAL STACK HEADER
        |--------------------------------------------------------------------------
        |
        | mt-24
        | فاصله زیاد بین Core Skills و Technical Stack.
        |
        | اگر خواستی این دو قسمت به هم نزدیک‌تر شوند:
        |
        | mt-24 → mt-16
        |
        |--------------------------------------------------------------------------
        */}

        <div className="mt-24">

          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              Technical Stack
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              ابزارهایی برای ساخت و آزمایش
            </h3>
          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {technicalStack.map((stack, index) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-[#080808]
                    p-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <h4 className="text-base font-medium text-white">
                      {stack.category}
                    </h4>

                  </div>


                  <div className="mt-5 flex flex-wrap gap-2">

                    {stack.skills.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-lg
                          bg-zinc-900
                          px-3
                          py-2
                          font-mono
                          text-xs
                          text-zinc-400
                        "
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/*
        |--------------------------------------------------------------------------
        | SPECIALIZATION PATH
        |--------------------------------------------------------------------------
        |
        | این قسمت برای برند شخصی تو خیلی مهم است.
        |
        | به جای اینکه فقط بگوییم:
        |
        | "من Python و React و Docker بلدم"
        |
        | مسیر تخصصی را نشان می‌دهیم.
        |
        | این برای یک پروفایل Research-oriented مفهوم بیشتری دارد.
        |
        |--------------------------------------------------------------------------
        */}

        <div className="mt-24">

          <div className="mb-10">

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              مسیر تخصصی
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              از مدل تا سیستم پژوهشی
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-500">
              مسیر تخصصی من از مطالعه مدل‌های زبانی شروع می‌شود و به
              طراحی سیستم‌های هوشمند، ارزیابی و پژوهش می‌رسد.
            </p>

          </div>


          {/*
          |--------------------------------------------------------------------------
          | LEARNING PATH
          |--------------------------------------------------------------------------
          |
          | divide-y
          | بین آیتم‌ها خط ایجاد می‌کند.
          |
          | divide-zinc-900
          | رنگ این خطوط را مشخص می‌کند.
          |
          |--------------------------------------------------------------------------
          */}

          <div className="divide-y divide-zinc-900 border-y border-zinc-900">

            {learningPath.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  group
                  grid
                  gap-5
                  py-7
                  md:grid-cols-[80px_180px_1fr]
                  md:items-center
                "
              >

                {/*
                |--------------------------------------------------------------------------
                | STEP NUMBER
                |--------------------------------------------------------------------------
                |
                | font-mono
                | برای اعداد و Labelهای تکنیکال مناسب‌تر است.
                |
                |--------------------------------------------------------------------------
                */}

                <span className="font-mono text-xs text-zinc-700">
                  / {item.number}
                </span>


                <h4 className="text-lg font-semibold text-zinc-200 transition-colors duration-300 group-hover:text-emerald-400">
                  {item.title}
                </h4>


                <p className="text-sm leading-8 text-zinc-500">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>


        {/*
        |--------------------------------------------------------------------------
        | FINAL STATEMENT
        |--------------------------------------------------------------------------
        |
        | این قسمت یک جمع‌بندی کوتاه برای بخش Skills است.
        |
        | mt-20
        | فاصله از مسیر تخصصی.
        |
        |--------------------------------------------------------------------------
        */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            max-w-3xl
            border-r
            border-emerald-400/40
            pr-6
          "
        >

          <p className="text-base leading-9 text-zinc-400 sm:text-lg">
            هدف من فقط یادگیری ابزارها نیست؛ می‌خواهم از ترکیب
            Machine Learning، LLM، Retrieval و مهندسی نرم‌افزار،
            سیستم‌هایی بسازم که بتوان آن‌ها را آزمایش، ارزیابی و
            در نهایت به پروژه‌های پژوهشی تبدیل کرد.
          </p>

        </motion.div>

      </div>
    </section>
  );
}