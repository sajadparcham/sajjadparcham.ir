import {
  FolderKanban,
  FlaskConical,
  Mail,
  Eye,
  ArrowUpLeft,
  Activity,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| DASHBOARD STATS
|--------------------------------------------------------------------------
|
| این قسمت اطلاعات آماری Dashboard را نگهداری می‌کند.
|
| بعداً این اطلاعات مستقیماً از Backend دریافت می‌شوند.
|
| فعلاً برای ساخت ظاهر Admin از داده‌های آزمایشی استفاده می‌کنیم.
|
|--------------------------------------------------------------------------
*/

const stats = [
  {
    title: "پروژه‌ها",
    value: "06",
    description: "پروژه فعال",
    icon: FolderKanban,
  },

  {
    title: "پژوهش‌ها",
    value: "04",
    description: "پروژه پژوهشی",
    icon: FlaskConical,
  },

  {
    title: "پیام‌ها",
    value: "12",
    description: "پیام دریافت شده",
    icon: Mail,
  },

  {
    title: "بازدید",
    value: "843",
    description: "بازدید این ماه",
    icon: Eye,
  },
];

/*
|--------------------------------------------------------------------------
| RECENT ACTIVITY
|--------------------------------------------------------------------------
|
| فعالیت‌های اخیر سایت.
|
| بعداً این اطلاعات از Backend خوانده می‌شوند.
|
|--------------------------------------------------------------------------
*/

const activities = [
  {
    title: "پروژه Atlas بروزرسانی شد",
    type: "PROJECT",
    time: "امروز، 18:42",
  },

  {
    title: "یک پیام جدید دریافت شد",
    type: "MESSAGE",
    time: "امروز، 16:20",
  },

  {
    title: "پروژه Spacecraft بروزرسانی شد",
    type: "PROJECT",
    time: "دیروز، 21:15",
  },

  {
    title: "بخش Research بروزرسانی شد",
    type: "RESEARCH",
    time: "دیروز، 14:30",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/*
      ======================================================================
      PAGE HEADER
      ======================================================================
      */}

      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
          DASHBOARD
        </p>

        <h1 className="mt-3 text-3xl font-bold text-white">
          خوش آمدی، سجاد
        </h1>

        <p className="mt-2 text-sm leading-7 text-zinc-500">
          اینجا می‌توانی وضعیت کلی وب‌سایت شخصی خودت را مدیریت کنی.
        </p>
      </div>

      {/*
      ======================================================================
      STAT CARDS
      ======================================================================

      grid-cols-4
      چهار کارت را در صفحه Desktop کنار هم قرار می‌دهد.

      md:grid-cols-2
      در صفحه‌های متوسط، دو کارت در هر ردیف.

      sm:grid-cols-1
      در صفحه‌های کوچک، کارت‌ها زیر هم قرار می‌گیرند.
      ======================================================================
      */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
                transition-all
                duration-300
                hover:border-emerald-400/20
                hover:bg-emerald-400/[0.02]
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    text-emerald-400
                  "
                >
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <Activity
                  size={16}
                  className="text-zinc-700"
                />
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                {stat.title}
              </p>

              <div className="mt-2 flex items-end justify-between">
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>

                <span className="text-xs text-zinc-600">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/*
      ======================================================================
      LOWER SECTION
      ======================================================================
      */}

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        {/*
        ====================================================================
        RECENT ACTIVITY
        ====================================================================
        */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.15em] text-zinc-600">
                RECENT ACTIVITY
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                فعالیت‌های اخیر
              </h2>
            </div>

            <button
              className="
                flex
                items-center
                gap-1
                text-xs
                text-zinc-500
                transition-colors
                hover:text-emerald-400
              "
            >
              مشاهده همه
              <ArrowUpLeft size={14} />
            </button>
          </div>

          <div className="mt-6 divide-y divide-white/5">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-center gap-4 py-4"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-zinc-300">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    {activity.type}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-zinc-700">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/*
        ====================================================================
        QUICK INFO
        ====================================================================
        */}

        <div
          className="
            rounded-2xl
            border
            border-emerald-400/15
            bg-emerald-400/[0.025]
            p-6
          "
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-black">
            <Activity size={18} />
          </div>

          <h2 className="mt-6 text-xl font-bold text-white">
            وضعیت سیستم
          </h2>

          <p className="mt-3 text-sm leading-8 text-zinc-500">
            پنل مدیریت در حال حاضر در حالت توسعه قرار دارد و داده‌ها
            به صورت آزمایشی نمایش داده می‌شوند.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm text-emerald-300">
              سیستم فعال است
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}