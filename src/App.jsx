
import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Publications from "./components/sections/Publications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Experience from "./components/sections/Experience";
import WeeklyScheduler from "./sections/WeeklyScheduler/WeeklyScheduler";
import Barname from "./pages/Barname";
import Admin from "./pages/admin/Admin";


function App() {

  /*
  =========================================================
  ROUTING
  =========================================================

  /          → سایت شخصی
  /admin     → پنل مدیریت
  /barname   → برنامه روزانه

  فعلاً بدون React Router
  =========================================================
  */

  // مسیر فعلی را می‌خوانیم و اسلش انتهایی را حذف می‌کنیم.
  const currentPath = window.location.pathname.replace(/\/+$/, "");

  // تشخیص مسیرها
  const isAdmin = currentPath === "/admin";
  const isBarname = currentPath === "/barname";
  // اگر مسیر /admin باشد، فقط پنل مدیریت نمایش داده می‌شود.
  if (isAdmin) {
    return <Admin />;
  }

  // اگر مسیر /barname باشد، فقط داشبورد برنامه روزانه نمایش داده می‌شود.
  if (isBarname) {
    return <Barname />;
  }


  /*
  =========================================================
  MAIN WEBSITE
  =========================================================

  در سایر مسیرها، سایت اصلی نمایش داده می‌شود.
  =========================================================
  */

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Publications />
        <Experience />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;
