
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  GraduationCap,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

// --------------------------------------------------
// تنظیمات اصلی برنامه
// روزها از شنبه = 0 تا جمعه = 6 هستند.
// --------------------------------------------------

const DAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

const STORAGE_KEY = "barname-completed-v2";

const pad = (number) => String(number).padStart(2, "0");

function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

function getPersianDayIndex(date) {
  // JavaScript: Sunday=0, Saturday=6
  // برنامه ما: Saturday=0, Friday=6
  return (date.getDay() + 1) % 7;
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function getWeekStart(date) {
  return addDays(date, -getPersianDayIndex(date));
}

function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat("fa-IR", options).format(date);
}

// --------------------------------------------------
// برنامه هفتگی
// زمان جودو در روزهای دانشگاه، به دلیل نامشخص بودن
// سانس دقیق باشگاه، به صورت بازه پیشنهادی درج شده است.
// --------------------------------------------------

function getSchedule(day) {
  const tasks = [];

  const add = (id, time, title, description, category, duration) => {
    tasks.push({
      id,
      time,
      title,
      description,
      category,
      duration,
    });
  };

  // شنبه، یکشنبه و سه‌شنبه: دانشگاه
  if ([0, 1, 3].includes(day)) {
    add(
      "university",
      "۰۷:۳۰ – ۱۷:۰۰",
      "دانشگاه",
      "حضور در کلاس‌ها، انجام کارهای دانشگاه و ثبت نکات مهم",
      "university",
      "۹ ساعت و ۳۰ دقیقه"
    );

    add(
      "exam",
      "۱۸:۳۰ – ۲۰:۰۰",
      "آمادگی کنکور ارشد",
      "مطالعه متمرکز، حل تست و مرور مباحث",
      "study",
      "۹۰ دقیقه"
    );
  }

  // شنبه و سه‌شنبه: جودو
  if ([0, 3].includes(day)) {
    add(
      "judo",
      "طبق سانس باشگاه",
      "تمرین جودو",
      "تمرین فنی، آمادگی بدنی و ثبت نکات تمرین",
      "sport",
      "طبق برنامه باشگاه"
    );

    add(
      "ai-review",
      "شب",
      "مرور کوتاه AI و RAG",
      "مرور یادداشت‌ها یا یک کار کوچک برای حفظ پیوستگی پژوهش",
      "research",
      "۲۰ تا ۳۰ دقیقه"
    );
  }

  // یکشنبه: پژوهش شبانه
  if (day === 1) {
    add(
      "rag-research",
      "۲۰:۱۵ – ۲۱:۳۰",
      "پژوهش LLM / RAG",
      "مطالعه تخصصی، پیاده‌سازی یا ثبت نتایج آزمایش Atlas",
      "research",
      "۷۵ دقیقه"
    );
  }

  // دوشنبه: تمرین قدرتی و مطالعه
  if (day === 2) {
    add(
      "strength",
      "زمان باشگاه",
      "تمرین قدرتی",
      "تمرین مقاومتی طبق برنامه باشگاه",
      "sport",
      "طبق برنامه تمرینی"
    );

    add(
      "exam",
      "۹۰ دقیقه",
      "مطالعه کنکور ارشد",
      "ساختن یک بلوک مطالعه متمرکز و حل تمرین",
      "study",
      "۹۰ دقیقه"
    );

    add(
      "rag-research",
      "شب",
      "کار روی Atlas",
      "یک وظیفه کوچک و مشخص در LLM، RAG یا Router",
      "research",
      "۴۵ تا ۶۰ دقیقه"
    );
  }

  // چهارشنبه: مطالعه و پژوهش
  if (day === 4) {
    add(
      "exam",
      "صبح یا عصر",
      "مطالعه عمیق کنکور",
      "مرور درس ضعیف‌تر، حل مسئله و ثبت اشکالات",
      "study",
      "۹۰ تا ۱۲۰ دقیقه"
    );

    add(
      "rag-research",
      "بلوک اصلی روز",
      "پیاده‌سازی و آزمایش RAG",
      "کار عمیق روی Atlas؛ در پایان یک خروجی قابل مشاهده ثبت کن",
      "research",
      "۹۰ تا ۱۲۰ دقیقه"
    );

    add(
      "english",
      "بلوک کوتاه",
      "زبان انگلیسی تخصصی",
      "مطالعه متن فنی و یادگیری واژگان مرتبط با AI",
      "study",
      "۲۰ تا ۳۰ دقیقه"
    );
  }

  // پنج‌شنبه: تمرین قدرتی و پروژه
  if (day === 5) {
    add(
      "strength",
      "زمان باشگاه",
      "تمرین قدرتی",
      "تمرین مقاومتی و ثبت عملکرد",
      "sport",
      "طبق برنامه تمرینی"
    );

    add(
      "atlas",
      "بلوک پروژه",
      "توسعه Atlas",
      "پیاده‌سازی، تست، رفع خطا یا مستندسازی پروژه",
      "research",
      "۶۰ تا ۹۰ دقیقه"
    );

    add(
      "exam",
      "بلوک مطالعه",
      "مرور کنکور ارشد",
      "مرور نکات و حل چند تست از مباحث هفته",
      "study",
      "۶۰ دقیقه"
    );
  }

  // جمعه: مرور و ریکاوری
  if (day === 6) {
    add(
      "weekly-review",
      "بلوک اول روز",
      "مرور هفتگی",
      "بررسی پیشرفت کنکور، دانشگاه، پژوهش و تمرین‌ها",
      "review",
      "۳۰ دقیقه"
    );

    add(
      "weekly-planning",
      "پس از مرور",
      "برنامه‌ریزی هفته بعد",
      "انتخاب سه هدف اصلی و تعیین وظایف قابل انجام",
      "review",
      "۲۰ دقیقه"
    );

    add(
      "recovery",
      "در طول روز",
      "ریکاوری و استراحت",
      "استراحت کافی، پیاده‌روی سبک و آماده شدن برای هفته جدید",
      "recovery",
      "بدون فشار"
    );
  }

  // خواب، هدف ثابت تمام روزها
  add(
    "sleep",
    "۲۲:۴۵",
    "زمان خواب",
    "پایان کارها، کنار گذاشتن صفحه‌نمایش و آماده شدن برای خواب",
    "recovery",
    "خواب شبانه"
  );

  return tasks;
}

const CATEGORY = {
  university: {
    label: "دانشگاه",
    icon: GraduationCap,
    color: "text-sky-300",
    line: "border-sky-400/30",
    bg: "bg-sky-400/10",
  },
  study: {
    label: "کنکور و مطالعه",
    icon: BookOpen,
    color: "text-amber-300",
    line: "border-amber-400/30",
    bg: "bg-amber-400/10",
  },
  research: {
    label: "پژوهش AI",
    icon: BrainCircuit,
    color: "text-emerald-300",
    line: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
  },
  sport: {
    label: "ورزش",
    icon: Dumbbell,
    color: "text-violet-300",
    line: "border-violet-400/30",
    bg: "bg-violet-400/10",
  },
  review: {
    label: "برنامه‌ریزی",
    icon: Target,
    color: "text-cyan-300",
    line: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
  },
  recovery: {
    label: "ریکاوری",
    icon: Sparkles,
    color: "text-pink-300",
    line: "border-pink-400/30",
    bg: "bg-pink-400/10",
  },
};

// --------------------------------------------------
// کامپوننت اصلی صفحه برنامه
// --------------------------------------------------

export default function Barname() {
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const [completedByDate, setCompletedByDate] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const today = new Date();
  const todayKey = dateKey(today);
  const selectedKey = dateKey(selectedDate);
  const selectedDay = getPersianDayIndex(selectedDate);

  const schedule = useMemo(() => getSchedule(selectedDay), [selectedDay]);

  const completedIds = completedByDate[selectedKey] || [];
  const completedCount = schedule.filter((task) =>
    completedIds.includes(task.id)
  ).length;

  const progress =
    schedule.length > 0
      ? Math.round((completedCount / schedule.length) * 100)
      : 0;

  const weekStart = getWeekStart(selectedDate);

  const weekDays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) => {
        const date = addDays(weekStart, index);

        return {
          date,
          key: dateKey(date),
          day: getPersianDayIndex(date),
        };
      }),
    [selectedKey]
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedByDate));
    } catch {
      // اگر ذخیره‌سازی مرورگر در دسترس نباشد، صفحه همچنان کار می‌کند.
    }
  }, [completedByDate]);

  function toggleTask(taskId) {
    setCompletedByDate((previous) => {
      const current = previous[selectedKey] || [];

      const next = current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId];

      return {
        ...previous,
        [selectedKey]: next,
      };
    });
  }

  function selectToday() {
    setSelectedDate(new Date());
  }

  function selectTomorrow() {
    setSelectedDate(addDays(new Date(), 1));
  }

  function changeDate(amount) {
    setSelectedDate((previous) => addDays(previous, amount));
  }

  function resetSelectedDay() {
    setCompletedByDate((previous) => ({
      ...previous,
      [selectedKey]: [],
    }));
  }

  const isToday = selectedKey === todayKey;
  const isTomorrow = selectedKey === dateKey(addDays(today, 1));

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#050505] px-4 py-6 text-white sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <header className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-emerald-300">
              <CalendarDays size={17} />
              <span>مدیریت شخصی زمان</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              برنامه من<span className="text-emerald-400">.</span>
            </h1>

            <p className="mt-2 text-sm leading-7 text-zinc-400">
              قدم‌های کوچک، خروجی واقعی؛ از کنکور ارشد تا پژوهش هوش مصنوعی.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={selectToday}
              className={`rounded-xl border px-4 py-2.5 text-sm transition ${
                isToday
                  ? "border-emerald-400 bg-emerald-400 text-black"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10"
              }`}
            >
              امروز
            </button>

            <button
              onClick={selectTomorrow}
              className={`rounded-xl border px-4 py-2.5 text-sm transition ${
                isTomorrow
                  ? "border-emerald-400 bg-emerald-400 text-black"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10"
              }`}
            >
              فردا
            </button>
          </div>
        </header>

        {/* Date and navigation */}
        <section className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-zinc-500">
              {isToday ? "برنامه امروز" : isTomorrow ? "برنامه فردا" : "روز انتخاب‌شده"}
            </p>

            <h2 className="mt-1 text-xl font-bold">
              {DAYS[selectedDay]}،{" "}
              {formatDate(selectedDate, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changeDate(-1)}
              aria-label="روز قبل"
              className="rounded-xl border border-white/10 p-3 text-zinc-300 hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>

            <button
              onClick={selectToday}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-300 hover:bg-white/10"
            >
              رفتن به امروز
            </button>

            <button
              onClick={() => changeDate(1)}
              aria-label="روز بعد"
              className="rounded-xl border border-white/10 p-3 text-zinc-300 hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </section>

        {/* Main dashboard */}
        <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          {/* Progress card */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-950/60 to-[#0b0b0b] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-emerald-200/80">
                  عملکرد روزانه
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  {progress}٪
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                  {completedCount} مورد از {schedule.length} مورد انجام شده
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-300">
                <Trophy size={28} />
              </div>
            </div>

            <div
              className="relative mt-7 h-2 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="درصد پیشرفت روزانه"
            >
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="relative mt-4 text-xs leading-6 text-zinc-400">
              هدف این نیست که هر روز بی‌نقص باشی؛ هدف این است که کارهای مهمت
              را پیوسته جلو ببری.
            </p>
          </div>

          {/* Priority cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0b0b] p-5">
              <div className="rounded-xl bg-amber-400/10 p-3 text-amber-300">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-400">اولویت تحصیلی</p>
                <h3 className="mt-1 font-bold">کنکور ارشد و دانشگاه</h3>
                <p className="mt-1 text-xs text-zinc-500">
                  پایه علمی و معدل قوی
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0b0b] p-5">
              <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                <BrainCircuit size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-400">اولویت پژوهشی</p>
                <h3 className="mt-1 font-bold">Atlas · LLM · RAG</h3>
                <p className="mt-1 text-xs text-zinc-500">
                  پروژه، آزمایش و مستندسازی
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly calendar */}
        <section className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-bold">نمای هفتگی</h2>
              <p className="mt-1 text-xs text-zinc-500">
                برای دیدن برنامه هر روز، روی آن بزن.
              </p>
            </div>

            <div className="flex gap-1">
              <button
                onClick={() => changeDate(-7)}
                aria-label="هفته قبل"
                className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:bg-white/10"
              >
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => changeDate(7)}
                aria-label="هفته بعد"
                className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:bg-white/10"
              >
                <ArrowLeft size={17} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map(({ date, key, day }) => {
              const selected = key === selectedKey;
              const currentDay = key === todayKey;
              const dayTasks = getSchedule(day);
              const dayCompleted = completedByDate[key] || [];
              const dayProgress = dayTasks.length
                ? Math.round(
                    (dayTasks.filter((task) =>
                      dayCompleted.includes(task.id)
                    ).length /
                      dayTasks.length) *
                      100
                  )
                : 0;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedDate(date)}
                  className={`min-w-0 rounded-xl border p-2 text-center transition sm:p-3 ${
                    selected
                      ? "border-emerald-400 bg-emerald-400/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`block truncate text-[10px] sm:text-xs ${
                      selected ? "text-emerald-300" : "text-zinc-500"
                    }`}
                  >
                    {DAYS[day]}
                  </span>

                  <span
                    className={`mx-auto my-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
                      selected
                        ? "bg-emerald-400 text-black"
                        : currentDay
                        ? "border border-emerald-400/40 text-emerald-300"
                        : "text-zinc-200"
                    }`}
                  >
                    {formatDate(date, { day: "numeric" })}
                  </span>

                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${dayProgress}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected day's task list */}
        <section className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">وظایف روز</h2>
              <p className="mt-1 text-sm text-zinc-500">
                هر کار را پس از انجام علامت بزن؛ وضعیت به‌صورت خودکار ذخیره می‌شود.
              </p>
            </div>

            <button
              onClick={resetSelectedDay}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs text-zinc-400 transition hover:border-red-400/30 hover:text-red-300"
            >
              <RotateCcw size={14} />
              پاک کردن تیک‌های این روز
            </button>
          </div>

          <div className="space-y-3">
            {schedule.map((task) => {
              const done = completedIds.includes(task.id);
              const style = CATEGORY[task.category];
              const Icon = style.icon;

              return (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-right transition sm:items-center sm:gap-4 ${
                    done
                      ? "border-emerald-400/20 bg-emerald-400/[0.04]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition sm:mt-0 ${
                      done
                        ? "border-emerald-400 bg-emerald-400 text-black"
                        : "border-zinc-600 text-transparent"
                    }`}
                  >
                    {done && <Check size={15} />}
                  </span>

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
                  >
                    <Icon size={21} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-bold ${
                          done ? "text-zinc-500 line-through" : "text-zinc-100"
                        }`}
                      >
                        {task.title}
                      </span>

                      <span
                        className={`rounded-full border px-2 py-1 text-[10px] ${style.line} ${style.color}`}
                      >
                        {style.label}
                      </span>
                    </span>

                    <span className="mt-1 block text-xs leading-6 text-zinc-500">
                      {task.description}
                    </span>

                    <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock3 size={12} />
                        {task.time}
                      </span>
                      <span>{task.duration}</span>
                    </span>
                  </span>

                  {done && (
                    <CheckCircle2
                      size={18}
                      className="hidden shrink-0 text-emerald-400 sm:block"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {completedCount === schedule.length && schedule.length > 0 && (
            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-center">
              <p className="font-bold text-emerald-300">
                آفرین! برنامه این روز را کامل کردی.
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                حالا استراحت کن و برای روز بعد انرژی نگه دار.
              </p>
            </div>
          )}
        </section>

        {/* Principles */}
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <BookOpen className="mb-3 text-amber-300" size={20} />
            <h3 className="text-sm font-bold">ثبات در مطالعه</h3>
            <p className="mt-2 text-xs leading-6 text-zinc-500">
              کنکور را با مطالعه مستمر، حل تمرین و مرور جلو ببر.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <BrainCircuit className="mb-3 text-emerald-300" size={20} />
            <h3 className="text-sm font-bold">خروجی پژوهشی</h3>
            <p className="mt-2 text-xs leading-6 text-zinc-500">
              هر جلسه Atlas باید به کد، آزمایش، یادداشت یا مستندات منتهی شود.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <Sparkles className="mb-3 text-violet-300" size={20} />
            <h3 className="text-sm font-bold">خواب و ریکاوری</h3>
            <p className="mt-2 text-xs leading-6 text-zinc-500">
              ساعت ۲۲:۴۵ را برای خواب حفظ کن؛ استراحت هم بخشی از برنامه است.
            </p>
          </div>
        </section>

        <footer className="pb-4 pt-2 text-center text-xs text-zinc-600">
          برنامه شخصی · ذخیره وضعیت در همین مرورگر · نسخه ۲
        </footer>
      </div>
    </div>
  );
}
