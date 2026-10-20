import { useState } from "react";
import {
  LayoutDashboard,
  Mail,
  FolderKanban,
  FlaskConical,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

import Dashboard from "./Dashboard";
import Messages from "./Messages";

/*
|--------------------------------------------------------------------------
| ADMIN NAVIGATION
|--------------------------------------------------------------------------
|
| برای اضافه کردن یک صفحه جدید به Sidebar،
| کافی است یک Object جدید به این Array اضافه کنید.
|
|--------------------------------------------------------------------------
*/

const navigation = [
  {
    id: "dashboard",
    title: "داشبورد",
    icon: LayoutDashboard,
  },

  {
    id: "messages",
    title: "پیام‌ها",
    icon: Mail,
    badge: 3,
  },

  {
    id: "projects",
    title: "پروژه‌ها",
    icon: FolderKanban,
  },

  {
    id: "research",
    title: "پژوهش‌ها",
    icon: FlaskConical,
  },

  {
    id: "settings",
    title: "تنظیمات",
    icon: Settings,
  },
];

export default function Admin() {
  /*
  |--------------------------------------------------------------------------
  | ACTIVE PAGE
  |--------------------------------------------------------------------------
  */

  const [activePage, setActivePage] = useState("dashboard");

  /*
  |--------------------------------------------------------------------------
  | MOBILE SIDEBAR
  |--------------------------------------------------------------------------
  */

  const [sidebarOpen, setSidebarOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | PAGE TITLE
  |--------------------------------------------------------------------------
  */

  const activeNavigation = navigation.find(
    (item) => item.id === activePage
  );

  /*
  |--------------------------------------------------------------------------
  | PAGE RENDERER
  |--------------------------------------------------------------------------
  */

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "messages":
        return <Messages />;

      case "projects":
        return (
          <PlaceholderPage title="مدیریت پروژه‌ها" />
        );

      case "research":
        return (
          <PlaceholderPage title="مدیریت پژوهش‌ها" />
        );

      case "settings":
        return (
          <PlaceholderPage title="تنظیمات پنل" />
        );

      default:
        return <Dashboard />;
    }
  };

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION CLICK
  |--------------------------------------------------------------------------
  */

  const handleNavigation = (id) => {
    setActivePage(id);
    setSidebarOpen(false);
  };

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-[#050505]
        text-white
      "
    >
      {/*
      ======================================================================
      MOBILE OVERLAY
      ======================================================================
      */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/*
      ======================================================================
      SIDEBAR
      ======================================================================
      */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-l
          border-white/10
          bg-[#080808]
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/*
        --------------------------------------------------------------------
        SIDEBAR HEADER
        --------------------------------------------------------------------
        */}

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
              PORTFOLIO
            </p>

            <h2 className="mt-1 text-lg font-bold text-white">
              پنل مدیریت
            </h2>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-zinc-600
              hover:bg-white/5
              hover:text-white
              lg:hidden
            "
          >
            <X size={18} />
          </button>
        </div>

        {/*
        --------------------------------------------------------------------
        NAVIGATION
        --------------------------------------------------------------------
        */}

        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "text-zinc-500 hover:bg-white/[0.03] hover:text-white"
                  }
                `}
              >
                <Icon size={18} strokeWidth={1.7} />

                <span className="flex-1 text-right">
                  {item.title}
                </span>

                {item.badge && (
                  <span
                    className="
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-400
                      px-1.5
                      text-[10px]
                      font-bold
                      text-black
                    "
                  >
                    {item.badge}
                  </span>
                )}

                {isActive && (
                  <ChevronLeft
                    size={15}
                    className="text-emerald-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/*
        --------------------------------------------------------------------
        SIDEBAR FOOTER
        --------------------------------------------------------------------
        */}

        <div className="border-t border-white/10 p-4">
          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              text-zinc-600
              transition-colors
              hover:bg-red-400/5
              hover:text-red-400
            "
          >
            <LogOut size={18} />

            <span>خروج</span>
          </button>
        </div>
      </aside>

      {/*
      ======================================================================
      MAIN CONTENT
      ======================================================================
      */}

      <main className="lg:mr-72">
        {/*
        --------------------------------------------------------------------
        TOPBAR
        --------------------------------------------------------------------
        */}

        <header
          className="
            sticky
            top-0
            z-30
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/10
            bg-[#050505]/90
            px-5
            backdrop-blur-xl
            sm:px-8
          "
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                text-zinc-500
                hover:text-white
                lg:hidden
              "
            >
              <Menu size={18} />
            </button>

            <div>
              <p className="text-xs text-zinc-600">
                مدیریت سایت
              </p>

              <p className="mt-1 text-sm font-medium text-zinc-300">
                {activeNavigation?.title}
              </p>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              px-3
              py-2
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="hidden text-xs text-zinc-500 sm:block">
              سیستم فعال
            </span>
          </div>
        </header>

        {/*
        --------------------------------------------------------------------
        CONTENT
        --------------------------------------------------------------------
        */}

        <div className="mx-auto max-w-[1500px] p-5 sm:p-8 lg:p-10">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| PLACEHOLDER PAGE
|--------------------------------------------------------------------------
|
| فعلاً برای بخش‌هایی که هنوز نساخته‌ایم استفاده می‌شود.
|
|--------------------------------------------------------------------------
*/

function PlaceholderPage({ title }) {
  return (
    <div
      className="
        flex
        min-h-[500px]
        items-center
        justify-center
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
      "
    >
      <div className="text-center">
        <p className="text-xs tracking-[0.18em] text-emerald-400">
          COMING NEXT
        </p>

        <h1 className="mt-4 text-2xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-3 text-sm text-zinc-600">
          این بخش در مرحله بعد ساخته خواهد شد.
        </p>
      </div>
    </div>
  );
}