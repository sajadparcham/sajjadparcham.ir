
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Dumbbell,
  GraduationCap,
  Moon,
  Sun,
  Target,
  BookOpen,
  Brain,
  Coffee,
  Footprints,
  RotateCcw,
  FlaskConical,
} from "lucide-react";

// --------------------------------------------------
// Barname — Personal Daily Planner
// React + Tailwind CSS + Lucide React
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

// JavaScript: Sunday = 0 ... Saturday = 6
function getPersianDayIndex(date) {
  return (date.getDay() + 1) % 7;
}

function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

function shiftDate(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function task(
  id,
  time,
  title,
  description,
  category,
  icon,
  duration = ""
) {
  return {
    id,
    time,
    title,
    description,
    category,
    icon,
    duration,
  };
}

// --------------------------------------------------
// برنامه روزهای دانشگاه
// شنبه، یکشنبه و سه‌شنبه
// --------------------------------------------------

function universitySchedule(day) {
  const studyTopic = {
    0: "ساختمان داده و الگوریتم",
    2: "آمار و ریاضیات گسسته",
    5: "سیستم‌عامل و مدار منطقی",
  }[day] || "مرور دروس کنکور";

  const workout =
    day === 5
      ? task(
          "judo",
          "۲۰:۰۰",
          "تمرین جودو",
          "تمرین باشگاه در صورت هماهنگی ساعت کلاس",
          "sport",
          "judo",
          "طبق ساعت باشگاه"
        )
      : null;

  const tasks = [
    task(
      "morning",
      "۰۶:۳۰",
      "بیداری و روتین ذهنی",
      "آب، یوگای سبک و آماده‌شدن برای روز",
      "life",
      "sun",
      "۴۵ دقیقه"
    ),
    task(
      "university",
      "۰۷:۳۰",
      "دانشگاه و رفت‌وآمد",
      "کلاس‌ها و مرور لغات زبان در زمان‌های مرده",
      "university",
      "university",
      "تا ۱۷:۰۰"
    ),
    task(
      "recovery",
      "۱۷:۰۰",
      "استراحت و ریکاوری",
      "غذا، استراحت و فاصله گرفتن از صفحه‌نمایش",
      "life",
      "coffee",
      "۹۰ دقیقه"
    ),
    task(
      "exam",
      "۱۸:۳۰",
      "مطالعه کنکور ارشد",
      studyTopic,
      "study",
      "study",
      "۹۰ دقیقه"
    ),
    ...(workout ? [workout] : []),
    task(
      "dinner",
      workout ? "بعد از تمرین" : "۲۰:۱۵",
      "شام و برنامه فردا",
      "شام، آماده‌سازی وسایل و مرور کارهای فردا",
      "life",
      "coffee",
      "۶۰ دقیقه"
    ),
    task(
      "research",
      workout ? "پس از ریکاوری" : "۲۱:۱۵",
      "پروژه Atlas و پژوهش AI",
      "توسعه RAG، کدنویسی یا مطالعه مقاله",
      "research",
      "code",
      workout ? "۳۰ دقیقه سبک، در صورت توان" : "۷۵ دقیقه"
    ),
    task(
      "sleep",
      "۲۲:۴۵",
      "آماده‌سازی خواب",
      "کاهش نور صفحه و استراحت",
      "life",
      "moon",
      "هدف خواب شبانه"
    ),
  ];

  // اگر ساعت واقعی جودو با برنامه مطالعه تداخل دارد،
  // ترتیب فعالیت‌ها را از تنظیمات روزانه تغییر بده.
  return tasks;
}

// --------------------------------------------------
// برنامه روزهای آزاد
// دوشنبه و پنج‌شنبه
// --------------------------------------------------

function freeDaySchedule(day) {
  const strengthDay = day === 2;
  const workoutTitle = strengthDay
    ? "تمرین قدرتی A — کل بدن"
    : "تمرین قدرتی B — قدرت کاربردی";

  return [
    task(
      "morning",
      "۰۷:۳۰",
      "بیداری، تحرک و صبحانه",
      "یوگای سبک و آماده‌شدن برای مطالعه",
      "life",
      "sun",
      "۶۰ دقیقه"
    ),
    task(
      "study1",
      "۰۸:۴۵",
      "بلوک اول کنکور",
      "یادگیری مفهومی درس اصلی",
      "study",
      "study",
      "۱۳۵ دقیقه"
    ),
    task(
      "break",
      "۱۱:۰۰",
      "استراحت و میان‌وعده",
      "کمی راه رفتن و تجدید انرژی",
      "life",
      "coffee",
      "۴۵ دقیقه"
    ),
    task(
      "study2",
      "۱۱:۴۵",
      "بلوک دوم کنکور",
      "درس موازی و حل مسئله",
      "study",
      "study",
      "۹۰ دقیقه"
    ),
    task(
      "lunch",
      "۱۳:۱۵",
      "ناهار و استراحت",
      "وعده کامل و ریکاوری",
      "life",
      "coffee",
      "۱۰۵ دقیقه"
    ),
    task(
      "strength",
      "۱۵:۰۰",
      workoutTitle,
      "تمرین کنترل‌شده؛ با توجه به خستگی جودو",
      "sport",
      "judo",
      "۴۵ تا ۶۰ دقیقه"
    ),
    task(
      "research",
      "۱۶:۳۰",
      "پروژه Atlas / RAG",
      "پیاده‌سازی، آزمایش یا مطالعه مقاله",
      "research",
      "code",
      "۱۲۰ دقیقه"
    ),
    task(
      "review",
      "۱۹:۳۰",
      "تست‌زنی و مرور",
      "تست‌های زنجیره‌ای و تحلیل اشتباهات",
      "study",
      "study",
      "۹۰ دقیقه"
    ),
    task(
      "sleep",
      "۲۲:۴۵",
      "آماده‌سازی خواب",
      "آرام‌سازی ذهن و آماده‌شدن برای فردا",
      "life",
      "moon",
      "خواب کافی"
    ),
  ];
}

// --------------------------------------------------
// برنامه چهارشنبه و جمعه
// --------------------------------------------------

function recoverySchedule(day) {
  if (day === 3) {
    return [
      task(
        "morning",
        "۰۷:۳۰",
        "شروع آرام روز",
        "صبحانه و تحرک سبک",
        "life",
        "sun",
        "۳۰ تا ۶۰ دقیقه"
      ),
      task(
        "study",
        "عصر",
        "مطالعه کنکور",
        "مدار منطقی یا ریاضیات گسسته",
        "study",
        "study",
        "۲ ساعت"
      ),
      task(
        "research",
        "شب",
        "پروژه RAG",
        "ادامه کارهای هفته",
        "research",
        "code",
        "۶۰ تا ۹۰ دقیقه"
      ),
      task(
        "walk",
        "در صورت نیاز",
        "پیاده‌روی و تحرک",
        "فعالیت سبک برای بازیابی",
        "sport",
        "walk",
        "۲۰ تا ۳۰ دقیقه"
      ),
    ];
  }

  return [
    task(
      "review",
      "صبح",
      "مرور هفتگی کنکور",
      "جعبه لایتنر، خلاصه‌ها و تحلیل اشتباهات",
      "study",
      "study",
      "۲ تا ۲.۵ ساعت"
    ),
    task(
      "recovery",
      "بعدازظهر",
      "ریکاوری کامل",
      "استراحت، غذای مناسب و زمان آزاد",
      "life",
      "coffee",
      "آزاد"
    ),
    task(
      "mobility",
      "عصر",
      "یوگا و تحرک سبک",
      "بدون تمرین شدید و بدون فشار اضافه",
      "sport",
      "walk",
      "۱۵ تا ۳۰ دقیقه"
    ),
    task(
      "prepare",
      "شب",
      "آماده‌سازی هفته آینده",
      "مرور تقویم و تعیین سه اولویت مهم",
      "life",
      "target",
      "۱۵ دقیقه"
    ),
  ];
}

// --------------------------------------------------
// انتخاب برنامه براساس روز هفته
// --------------------------------------------------

function getSchedule(day) {
  if ([0, 5].includes(day)) return universitySchedule(day);
  if ([1, 4].includes(day)) return freeDaySchedule(day);
  return recoverySchedule(day);
}

const CATEGORY = {
  study: {
    label: "کنکور",
    color: "text-sky-300",
    dot: "bg-sky-400",
  },
  research: {
    label: "پژوهش و AI",
    color: "text-violet-300",
    dot: "bg-violet-400",
  },
  sport: {
    label: "ورزش",
    color: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  life: {
    label: "زندگی و ریکاوری",
    color: "text-amber-300",
    dot: "bg-amber-400",
  },
  university: {
    label: "دانشگاه",
    color: "text-cyan-300",
    dot: "bg-cyan-400",
  },
};

const ICONS = {
  sun: Sun,
  study: GraduationCap,
  university: BookOpen,
  coffee: Coffee,
  code: Code2,
  judo: Dumbbell,
  moon: Moon,
  walk: Footprints,
  target: Target,
};

function readCompleted(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

export default function Barname() {
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [completedByDate, setCompletedByDate] = useState({});
  const [showAll, setShowAll] = useState(false);

  const selectedKey = dateKey(selectedDate);
  const dayIndex = getPersianDayIndex(selectedDate);

  const schedule = useMemo(
    () => getSchedule(dayIndex),
    [dayIndex]
  );

  useEffect(() => {
    setCompletedByDate((previous) => {
      if (previous[selectedKey]) return previous;

      return {
        ...previous,
        [selectedKey]: readCompleted(`barname-${selectedKey}`),
      };
    });
  }, [selectedKey]);

  const completed = completedByDate[selectedKey] || [];
  const doneCount = schedule.filter((item) =>
    completed.includes(item.id)
  ).length;
  const progress = schedule.length
    ? Math.round((doneCount / schedule.length) * 100)
    : 0;

  function toggleTask(id) {
    setCompletedByDate((previous) => {
      const current = previous[selectedKey] || [];
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      localStorage.setItem(
        `barname-${selectedKey}`,
        JSON.stringify(next)
      );

      return { ...previous, [selectedKey]: next };
    });
  }

  function changeDate(amount) {
    setSelectedDate((current) => shiftDate(current, amount));
  }

  function goToday() {
    setSelectedDate(new Date());
  }

  function resetDay() {
    localStorage.removeItem(`barname-${selectedKey}`);
    setCompletedByDate((previous) => ({
      ...previous,
      [selectedKey]: [],
    }));
  }

  const today = dateKey(new Date());
  const isToday = selectedKey === today;
  const title = isToday
    ? "برنامه امروز"
    : selectedKey === dateKey(shiftDate(new Date(), 1))
      ? "برنامه فردا"
      : "برنامه روز انتخاب‌شده";

  const week = useMemo(() => {
    const now = new Date();
    const start = shiftDate(now, -getPersianDayIndex(now));

    return DAYS.map((day, index) => {
      const date = shiftDate(start, index);
      return {
        day,
        date,
        key: dateKey(date),
        index,
      };
    });
  }, [selectedKey]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#050505] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <a
              href="/"
              aria-label="بازگشت به سایت شخصی"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition hover:bg-emerald-400/20"
            >
              <ArrowRight size={21} />
            </a>
            <div>
              <div className="text-xl font-black tracking-tight">
                barname<span className="text-emerald-400">.</span>
              </div>
              <p className="text-xs text-zinc-500">
                PERSONAL COMMAND CENTER
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
            <CalendarDays size={16} className="text-emerald-400" />
            {formatDate(selectedDate)}
          </div>
        </header>

        {/* Welcome */}
        <section className="relative mb-6 overflow-hidden rounded-3xl border border-emerald-400/15 bg-gradient-to-bl from-emerald-950/60 via-[#0b100e] to-[#090909] p-6 sm:p-8">
          <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                مسیر رشد شخصی
              </span>

              <h1 className="mb-3 text-3xl font-black leading-tight sm:text-4xl">
                روزت رو هدفمند بساز.
              </h1>

              <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                تعادل بین کنکور ارشد، پژوهش هوش مصنوعی،
                جودو، قدرت بدنی و زندگی روزمره.
                قدم‌های کوچک، استمرار بزرگ.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={goToday}
                  className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-emerald-300"
                >
                  برو به امروز
                </button>
                <button
                  onClick={() => changeDate(1)}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08]"
                >
                  دیدن فردا
                </button>
              </div>
            </div>

            {/* Progress card */}
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-zinc-400">
                  پیشرفت این روز
                </span>
                <Target className="text-emerald-400" size={19} />
              </div>

              <div className="mb-2 flex items-end gap-2">
                <span className="text-4xl font-black tabular-nums">
                  {progress}%
                </span>
                <span className="pb-1 text-xs text-zinc-500">
                  {doneCount} از {schedule.length} فعالیت
                </span>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-4 text-xs leading-6 text-zinc-500">
                لازم نیست هر روز کامل باشه؛ مهم اینه که
                مسیرت رو ادامه بدی.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly overview */}
        <section className="mb-6 rounded-3xl border border-white/10 bg-[#0b0b0b] p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-bold">نمای هفتگی</h2>
              <p className="mt-1 text-xs text-zinc-500">
                برای دیدن برنامه هر روز، روی آن بزن.
              </p>
            </div>
            <CalendarDays size={19} className="text-emerald-400" />
          </div>

          <div className="grid grid-cols-7 gap-2">
            {week.map((item) => {
              const active = item.key === selectedKey;
              const isCurrent = item.key === today;

              return (
                <button
                  key={item.key}
                  onClick={() => setSelectedDate(item.date)}
                  className={`min-w-0 rounded-xl border px-1 py-3 transition sm:px-3 ${
                    active
                      ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300"
                      : "border-white/5 bg-white/[0.02] text-zinc-400 hover:border-white/15 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="block text-[10px] sm:text-xs">
                    {item.day}
                  </span>
                  <span className="mt-2 block text-base font-bold sm:text-lg">
                    {new Intl.DateTimeFormat("fa-IR", {
                      day: "numeric",
                    }).format(item.date)}
                  </span>
                  {isCurrent && (
                    <span className="mx-auto mt-2 block h-1 w-1 rounded-full bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Schedule heading and date navigation */}
        <section className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black">{title}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              {DAYS[dayIndex]} · {formatDate(selectedDate)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changeDate(-1)}
              aria-label="روز قبل"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08]"
            >
              <ChevronRight size={19} />
            </button>
            <button
              onClick={() => changeDate(1)}
              aria-label="روز بعد"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08]"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              onClick={resetDay}
              title="پاک‌کردن تیک‌های این روز"
              aria-label="بازنشانی فعالیت‌ها"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </section>

        {/* Main content */}
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_300px]">
          <section className="space-y-3">
            {schedule.map((item, index) => {
              const Icon = ICONS[item.icon] || Clock3;
              const done = completed.includes(item.id);
              const category = CATEGORY[item.category];

              return (
                <article
                  key={item.id}
                  className={`group flex gap-3 rounded-2xl border p-4 transition sm:gap-4 sm:p-5 ${
                    done
                      ? "border-emerald-400/15 bg-emerald-400/[0.035]"
                      : "border-white/[0.08] bg-[#0b0b0b] hover:border-white/15"
                  }`}
                >
                  <div className="flex w-16 shrink-0 flex-col items-center gap-2 pt-1 sm:w-20">
                    <span className="text-xs font-bold text-zinc-300 sm:text-sm">
                      {item.time}
                    </span>
                    <div className="h-full min-h-5 w-px bg-white/10" />
                  </div>

                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      done
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-white/[0.05] text-zinc-400"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-bold sm:text-base ${
                          done ? "text-zinc-500 line-through" : "text-zinc-100"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className={`text-[10px] ${category?.color || "text-zinc-400"}`}>
                        {category?.label}
                      </span>
                    </div>

                    <p className="text-xs leading-6 text-zinc-500 sm:text-sm">
                      {item.description}
                    </p>

                    {item.duration && (
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-zinc-600">
                        <Clock3 size={12} />
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleTask(item.id)}
                    aria-label={done ? "علامت‌گذاری به‌عنوان انجام‌نشده" : "علامت‌گذاری به‌عنوان انجام‌شده"}
                    aria-pressed={done}
                    className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition ${
                      done
                        ? "border-emerald-400 bg-emerald-400 text-black"
                        : "border-white/15 text-transparent hover:border-emerald-400/60"
                    }`}
                  >
                    {done && <Check size={16} strokeWidth={3} />}
                  </button>
                </article>
              );
            })}

            <p className="px-2 pt-2 text-xs leading-6 text-zinc-600">
              ساعت‌های درج‌شده برای بعضی فعالیت‌ها تقریبی‌اند.
              زمان واقعی دانشگاه و باشگاه را با برنامه خودت هماهنگ کن.
            </p>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                <Target size={18} className="text-emerald-400" />
                اهداف اصلی
              </h3>

              {[
                ["کنکور ارشد", "تداوم مطالعه", GraduationCap],
                ["Atlas / RAG", "پیشرفت پروژه", FlaskConical],
                ["جودو و قدرت", "تمرین اصولی", Dumbbell],
              ].map(([name, detail, Icon]) => (
                <div
                  key={name}
                  className="mb-4 flex items-center gap-3 last:mb-0"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] text-emerald-300">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="mt-1 text-xs text-zinc-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Brain size={18} className="text-emerald-400" />
                یادآوری روزانه
              </h3>
              <p className="text-sm leading-7 text-zinc-400">
                پیشرفت واقعی از تکرار کارهای مهم به دست می‌آید.
                اگر برنامه سنگین شد، حجم کار را کم کن؛
                استمرار را حذف نکن.
              </p>
            </div>

            <button
              onClick={() => setShowAll((value) => !value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.07]"
            >
              {showAll ? "بستن راهنمای برنامه" : "راهنمای استفاده"}
            </button>

            {showAll && (
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 text-xs leading-7 text-zinc-400">
                <p>۱. روز موردنظرت را از نمای هفتگی انتخاب کن.</p>
                <p>۲. برای ثبت انجام هر کار، مربع کنار آن را بزن.</p>
                <p>۳. پیشرفت هر روز در همان مرورگر ذخیره می‌شود.</p>
                <p>۴. از فلش‌ها برای رفتن به روز قبل و بعد استفاده کن.</p>
              </div>
            )}
          </aside>
        </div>

        <footer className="mt-10 border-t border-white/10 py-5 text-center text-xs text-zinc-600">
          barname. · Build discipline. Track progress. Keep growing.
        </footer>
      </div>
    </main>
  );
}
