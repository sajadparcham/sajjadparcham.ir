import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { saveMessage } from "../../utils/messages";
/*
|--------------------------------------------------------------------------
| CONTACT SUBJECTS
|--------------------------------------------------------------------------
|
| گزینه‌هایی که کاربر می‌تواند برای موضوع پیام انتخاب کند.
|
| بعداً همین مقدار می‌تواند از Backend یا Admin Panel مدیریت شود.
|
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| GITHUB ICON
|--------------------------------------------------------------------------
|
| به‌جای وابستگی به lucide-react از SVG داخلی استفاده می‌کنیم.
|
| این کار باعث می‌شود اگر نسخه lucide-react آیکون Github را نداشت،
| پروژه با خطای import متوقف نشود.
|
|--------------------------------------------------------------------------
*/

function GithubIcon({ size = 19 }) {
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
| LINKEDIN ICON
|--------------------------------------------------------------------------
|
| این هم SVG داخلی LinkedIn است.
| بنابراین دیگر به export شدن Linkedin از lucide-react وابسته نیستیم.
|
|--------------------------------------------------------------------------
*/

function LinkedinIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const subjects = [
  "همکاری",
  "پروژه نرم‌افزاری",
  "پژوهش",
  "پیشنهاد شغلی",
  "پرسش",
  "سایر",
];

/*
|--------------------------------------------------------------------------
| CONTACT LINKS
|--------------------------------------------------------------------------
|
| اطلاعات ارتباطی اصلی سایت.
|
| نکته:
| فعلاً ایمیل و LinkedIn نمونه هستند.
| وقتی اطلاعات واقعی را داشتی فقط مقدار href را تغییر بده.
|
|--------------------------------------------------------------------------
*/

const contactLinks = [
  {
    title: "ایمیل",
    value: "ssparcham@gmail.com",
    href: "mailto:ssparcham@gmail.com",
    icon: Mail,
    
  },

  {
    title: "GitHub",
    value: "github.com/sajadparcham",
    href: "https://github.com/sajadparcham",
    icon: GithubIcon,
  },

  {
    title: "LinkedIn",
    value: "پروفایل LinkedIn",
    href: "#",
    icon: LinkedinIcon,
  },
];

/*
|--------------------------------------------------------------------------
| INITIAL FORM STATE
|--------------------------------------------------------------------------
|
| تمام فیلدهای فرم در یک Object نگهداری می‌شوند.
|
| name
| نام کاربر
|
| email
| ایمیل کاربر
|
| subject
| موضوع پیام
|
| message
| متن پیام
|
|--------------------------------------------------------------------------
*/

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  /*
  |--------------------------------------------------------------------------
  | FORM STATE
  |--------------------------------------------------------------------------
  |
  | form
  | اطلاعات فعلی فرم.
  |
  | setForm
  | برای تغییر اطلاعات فرم.
  |
  |--------------------------------------------------------------------------
  */

  const [form, setForm] = useState(initialForm);

  /*
  |--------------------------------------------------------------------------
  | SUBMIT STATE
  |--------------------------------------------------------------------------
  |
  | وضعیت ارسال فرم:
  |
  | idle    → هنوز ارسال نشده
  | loading → در حال ارسال
  | success → ارسال موفق
  | error   → خطا
  |
  |--------------------------------------------------------------------------
  */

  const [submitStatus, setSubmitStatus] = useState("idle");

  /*
  |--------------------------------------------------------------------------
  | HANDLE INPUT
  |--------------------------------------------------------------------------
  |
  | این تابع برای تمام inputها و textarea استفاده می‌شود.
  |
  | name:
  | مشخص می‌کند کدام فیلد باید تغییر کند.
  |
  | value:
  | مقدار جدید فیلد.
  |
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    /*
    ------------------------------------------------------------------------
    اگر کاربر بعد از یک خطا دوباره شروع به نوشتن کند،
    پیام خطا را مخفی می‌کنیم.
    ------------------------------------------------------------------------
    */

    if (submitStatus === "error") {
      setSubmitStatus("idle");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT
  |--------------------------------------------------------------------------
  |
  | فعلاً Backend نداریم.
  |
  | بنابراین این تابع فقط رفتار Frontend را شبیه‌سازی می‌کند.
  |
  | بعداً همین قسمت را به:
  |
  | POST /api/contact
  |
  | متصل می‌کنیم.
  |
  |--------------------------------------------------------------------------
  */

  const handleSubmit = (event) => {
  event.preventDefault();

  /*
  =================================================================
  جلوگیری از ارسال معمولی فرم
  =================================================================

  اگر این خط نباشد، مرورگر فرم را ارسال کرده و صفحه را Reload می‌کند.

  ما می‌خواهیم خود React فرم را مدیریت کند.
  =================================================================
  */
  event.preventDefault();

  /*
  =================================================================
  دریافت اطلاعات فرم
  =================================================================

  FormData تمام input ها و textarea هایی که name دارند
  را از فرم دریافت می‌کند.

  فرم فعلی ما:

  name
  email
  subject
  message
  =================================================================
  */
  const formData = new FormData(event.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  /*
  =================================================================
  بررسی اطلاعات
  =================================================================
  */

  if (!name || !email || !subject || !message) {
    setSubmitStatus("error");
    return;
  }

  /*
  =================================================================
  وضعیت ارسال
  =================================================================
  */

  setSubmitStatus("loading");

  /*
  =================================================================
  ذخیره پیام
  =================================================================

  فعلاً پیام در localStorage ذخیره می‌شود.

  مسیر:

  Contact
      ↓
  handleSubmit
      ↓
  saveMessage()
      ↓
  localStorage
      ↓
  Admin
      ↓
  Messages
  =================================================================
  */

  try {
    saveMessage({
      name,
      email,
      subject,
      message,
    });

    /*
    ---------------------------------------------------------------
    پاک کردن فرم
    ---------------------------------------------------------------
    */

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    /*
    ---------------------------------------------------------------
    نمایش پیام موفقیت
    ---------------------------------------------------------------
    */

    setSubmitStatus("success");

  } catch (error) {
    console.error("خطا در ذخیره پیام:", error);

    setSubmitStatus("error");
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/*
      ======================================================================
      BACKGROUND GLOW
      ======================================================================

      این نورها صرفاً برای عمق دادن به طراحی هستند.

      pointer-events-none
      یعنی نورها مانع کلیک کاربر نمی‌شوند.

      blur-3xl
      باعث می‌شود نور کاملاً نرم و پخش باشد.
      ======================================================================
      */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-emerald-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-emerald-400/5
          blur-3xl
        "
      />

      {/*
      ======================================================================
      MAIN CONTAINER
      ======================================================================

      max-w-7xl
      عرض اصلی محتوا را محدود می‌کند.

      mx-auto
      محتوا را وسط صفحه قرار می‌دهد.

      px-5
      فاصله از لبه‌های صفحه.
      ======================================================================
      */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/*
        ====================================================================
        HEADER
        ====================================================================
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
          SECTION LABEL
          ------------------------------------------------------------------
          */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />

            <span className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
              CONTACT
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            بیایید چیزی
            <span className="text-emerald-400"> بسازیم.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-9 text-zinc-400 sm:text-lg">
            اگر درباره یک پروژه، همکاری، پژوهش یا حتی یک ایده برای ساختن
            چیزی جدید صحبت کنیم، خوشحال می‌شوم پیام شما را دریافت کنم.
          </p>
        </motion.div>

        {/*
        ====================================================================
        CONTACT CONTENT
        ====================================================================

        دو بخش اصلی داریم:

        سمت اول:
        فرم تماس

        سمت دوم:
        اطلاعات ارتباطی
        ====================================================================
        */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          {/*
          ==================================================================
          CONTACT FORM
          ==================================================================
          */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.025]
              p-6
              sm:p-8
            "
          >
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-emerald-400">
                SEND A MESSAGE
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                یک پیام برای من بفرستید
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/*
              ----------------------------------------------------------------
              NAME + EMAIL
              ----------------------------------------------------------------

              grid-cols-2
              دو فیلد را کنار هم قرار می‌دهد.
              ----------------------------------------------------------------
              */}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-zinc-400"
                  >
                    نام و نام خانوادگی
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="مثلاً سجاد پرچم"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      focus:border-emerald-400/40
                      focus:bg-emerald-400/[0.02]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-zinc-400"
                  >
                    ایمیل
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    dir="ltr"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      focus:border-emerald-400/40
                      focus:bg-emerald-400/[0.02]
                    "
                  />
                </div>
              </div>

              {/*
              ----------------------------------------------------------------
              SUBJECT
              ----------------------------------------------------------------
              */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  موضوع
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#080808]
                    px-4
                    py-3.5
                    text-sm
                    text-zinc-300
                    outline-none
                    transition-all
                    focus:border-emerald-400/40
                  "
                >
                  <option value="" disabled>
                    موضوع پیام را انتخاب کنید
                  </option>

                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/*
              ----------------------------------------------------------------
              MESSAGE
              ----------------------------------------------------------------
              */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  پیام
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="پیام خود را اینجا بنویسید..."
                  required
                  rows={7}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-3.5
                    text-sm
                    leading-8
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    focus:border-emerald-400/40
                    focus:bg-emerald-400/[0.02]
                  "
                />
              </div>

              {/*
              =================================================================
              SUBMIT STATUS
              =================================================================

              success
              پیام موفقیت.

              error
              پیام خطا.

              loading
              در حال ارسال.
              =================================================================
              */}

              {submitStatus === "success" && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-emerald-400/20
                    bg-emerald-400/5
                    px-4
                    py-3
                    text-sm
                    text-emerald-300
                  "
                >
                  <CheckCircle2 size={18} />

                  <span>
                    پیام شما با موفقیت ثبت شد.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-red-400/20
                    bg-red-400/5
                    px-4
                    py-3
                    text-sm
                    text-red-300
                  "
                >
                  <AlertCircle size={18} />

                  <span>
                    لطفاً تمام فیلدهای فرم را کامل کنید.
                  </span>
                </div>
              )}

              {submitStatus === "loading" && (
                <div className="text-sm text-zinc-500">
                  در حال ارسال پیام...
                </div>
              )}

              {/*
              =================================================================
              SUBMIT BUTTON
              =================================================================

              mt-2
              فاصله کوچک بالای دکمه.

              inline-flex
              باعث می‌شود محتوا داخل دکمه مرتب کنار هم قرار بگیرد.
              =================================================================
              */}

              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-emerald-400
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-emerald-300
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <Send size={16} />

                <span>
                  {submitStatus === "loading"
                    ? "در حال ارسال..."
                    : "ارسال پیام"}
                </span>

                <ArrowUpLeft size={16} />
              </button>
            </form>
          </motion.div>

          {/*
          ==================================================================
          CONTACT INFORMATION
          ==================================================================
          */}

          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/*
            ----------------------------------------------------------------
            INTRO CARD
            ----------------------------------------------------------------
            */}

            <div
              className="
                rounded-3xl
                border
                border-emerald-400/15
                bg-emerald-400/[0.025]
                p-7
              "
            >
              <Mail
                size={24}
                strokeWidth={1.5}
                className="text-emerald-400"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                راه‌های ارتباطی
              </h3>

              <p className="mt-3 text-sm leading-8 text-zinc-500">
                برای همکاری، پروژه‌های نرم‌افزاری، پژوهش یا گفتگو درباره
                ایده‌های جدید می‌توانید از یکی از مسیرهای زیر با من
                ارتباط برقرار کنید.
              </p>
            </div>

            {/*
            ----------------------------------------------------------------
            CONTACT LINKS
            ----------------------------------------------------------------
            */}

            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    transition-all
                    duration-300
                    hover:border-emerald-400/25
                    hover:bg-emerald-400/[0.025]
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      text-zinc-400
                      transition-colors
                      group-hover:border-emerald-400/20
                      group-hover:text-emerald-400
                    "
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-zinc-600">
                      {item.title}
                    </p>

                    <p className="mt-1 truncate text-sm text-zinc-300">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpLeft
                    size={16}
                    className="
                      text-zinc-700
                      transition-all
                      duration-300
                      group-hover:-translate-x-1
                      group-hover:text-emerald-400
                    "
                  />
                </a>
              );
            })}

            {/*
            ----------------------------------------------------------------
            AVAILABILITY CARD
            ----------------------------------------------------------------
            */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-zinc-300">
                  آماده گفتگو درباره پروژه‌های جدید
                </span>
              </div>

              <p className="mt-3 text-xs leading-7 text-zinc-600">
                پیام‌های مرتبط با پروژه، پژوهش و همکاری بررسی خواهند شد.
              </p>
            </div>
          </motion.aside>
        </div>

        {/*
        ====================================================================
        BOTTOM STATEMENT
        ====================================================================

        mt-20
        فاصله زیاد از محتوای اصلی.

        این بخش باعث می‌شود Contact ناگهان تمام نشود.
        ====================================================================
        */}

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm leading-8 text-zinc-600">
            ایده خوب ممکن است از یک پیام ساده شروع شود.
          </p>
        </div>
      </div>
    </section>
  );
}