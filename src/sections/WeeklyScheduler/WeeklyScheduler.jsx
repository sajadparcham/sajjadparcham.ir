import React, { useState } from 'react';
import { 
  Calendar, Dumbbell, BookOpen, Brain, Moon, 
  Coffee, ShieldAlert, Sparkles, ChevronRight, CheckCircle2 
} from 'lucide-react';

const scheduleData = [
  {
    id: 'sat',
    name: 'شنبه',
    subtitle: 'روز جودو و شوک تمرینی',
    type: 'university',
    tag: 'دانشگاه + جودو',
    events: [
      { time: '۰۶:۳۰ - ۰۷:۱۵', title: 'بیداری و موبیلیتی', desc: 'یوگای کوتاه صبحگاهی و آماده‌سازی مفاصل', category: 'fitness' },
      { time: '۰۷:۳۰ - ۱۷:۰۰', title: 'کلاس‌های دانشگاه', desc: 'حضور در دانشگاه + لغات زبان در مسیر رفت‌وآمد', category: 'university' },
      { time: '۱۷:۱۵ - ۱۸:۳۰', title: 'بازگشت و سوخت‌گیری', desc: 'اسنک کربوهیدرات (موز + خرما + قهوه) و ریلکسیشن ذهن', category: 'rest' },
      { time: '۱۸:۳۰ - ۲۰:۰۰', title: 'کلاس جودو (جلسه ۱)', desc: 'تکنیک، زیرگیری، مبارزه سرپا/خاک (کالری‌سوزی انفجاری)', category: 'sport' },
      { time: '۲۰:۱۵ - ۲۱:۰۰', title: 'دوش و شام مقوی', desc: 'پروتئین باکیفیت (تخم‌مرغ/مرغ + سبزیجات)', category: 'nutrition' },
      { time: '۲۱:۰۰ - ۲۲:۳۰', title: 'بلوک کنکور: سیستم‌عامل / مدار', desc: 'تست آموزشی متمرکز با دوپامین بالای پس از ورزش', category: 'study' },
      { time: '۲۲:۳۰ - ۲۲:۵۰', title: 'مرور پروژه RAG', desc: 'مرور کد و ثبت لاگ‌های پیشرفت پژوهش', category: 'research' },
      { time: '۲۳:۰۰', title: 'خاموشی مطلق', desc: 'خواب عمیق جهت ریکاوری سیستم عصبی (CNS)', category: 'sleep' },
    ]
  },
  {
    id: 'sun',
    name: 'یک‌شنبه',
    subtitle: 'قدرت عملکردی و کالیستنیکس اتاق سفید',
    type: 'university',
    tag: 'دانشگاه + کالیستنیکس',
    events: [
      { time: '۰۶:۳۰ - ۱۷:۰۰', title: 'روال روزانه دانشگاه', desc: 'کلاس‌ها و یادداشت‌برداری فشرده', category: 'university' },
      { time: '۱۷:۰۰ - ۱۸:۰۰', title: 'تخلیه بار روانی', desc: 'استراحت و قطع ارتباط موقت با استرس‌های ذهنی', category: 'rest' },
      { 
        time: '۱۸:۰۰ - ۱۹:۰۰', 
        title: 'کالیستنیکس آیانوکوجی', 
        desc: '۴ ست بارفیکس مچ‌برعکس Hollow Body | ۴ ست شنا بندانگشتی + دیپ | ۳ ست L-Sit | تمرین گریپ حوله', 
        category: 'sport' 
      },
      { time: '۱۹:۱۵ - ۲۰:۴۵', title: 'بلوک کنکور: ساختمان داده و الگوریتم', desc: 'تست تحلیلی و ثبت اشتباهات', category: 'study' },
      { time: '۲۰:۴۵ - ۲۱:۳۰', title: 'شام غنی از پروتئین', desc: 'تغذیه مناسب ریکاوری فیبرهای عضلانی', category: 'nutrition' },
      { time: '۲۱:۳۰ - ۲۲:۴۵', title: 'پژوهش AI و پایپ‌لاین RAG', desc: 'توسعه معماری چت‌بات و وکتور دیتابیس', category: 'research' },
      { time: '۲۳:۰۰', title: 'خاموشی مطلق', desc: 'شارژ مغز برای فردا', category: 'sleep' },
    ]
  },
  {
    id: 'mon',
    name: 'دوشنبه',
    subtitle: 'روز اوج راندمان تحلیلی و تاتامی جودو',
    type: 'free',
    tag: 'روز آزاد + جودو',
    events: [
      { time: '۰۷:۳۰ - ۰۸:۳۰', title: 'بیداری، موبیلیتی و صبحانه', desc: 'آماده‌سازی با حوصله بدون اضطراب ترافیک', category: 'rest' },
      { time: '۰۸:۴۵ - ۱۱:۰۰', title: 'بلوک ۱ کنکور', desc: 'مطالعه عمیق درس مفهومی اصلی', category: 'study' },
      { time: '۱۱:۰۰ - ۱۱:۴۵', title: 'استراحت و ریست مغز', desc: 'تنفس عمیق و فاصله از مانیتور', category: 'rest' },
      { time: '۱۱:۴۵ - ۱۳:۱۵', title: 'بلوک ۲ کنکور', desc: 'درس موازی و حل تست‌های مسئله‌محور', category: 'study' },
      { time: '۱۳:۱۵ - ۱۵:۰۰', title: 'ناهار و استراحت نیمروزی', desc: 'تجدید قوا', category: 'nutrition' },
      { time: '۱۵:۰۰ - ۱۷:۳۰', title: 'بلوک پژوهش و نگارش مقاله RAG', desc: 'تمرکز عمیق روی کارهای پژوهشی قبل از خستگی بدنی', category: 'research' },
      { time: '۱۸:۰۰ - ۱۹:۳۰', title: 'کلاس جودو (جلسه ۲)', desc: 'رندوری، پرتاب‌ها و تکنیک‌های اوکمی', category: 'sport' },
      { time: '۲۰:۰۰ - ۲۱:۳۰', title: 'شام و بلوک ۳ کنکور', desc: 'تست‌زنی سبک و لایتنر فلش‌کارت‌ها', category: 'study' },
      { time: '۲۳:۰۰', title: 'خواب سر ساعت', desc: 'بدون صفحه‌نمایش', category: 'sleep' },
    ]
  },
  {
    id: 'tue',
    name: 'سه‌شنبه',
    subtitle: 'ریکاوری فعال و موبیلیتی عمیق',
    type: 'university',
    tag: 'دانشگاه + بالانس',
    events: [
      { time: '۰۶:۳۰ - ۱۷:۰۰', title: 'برنامه دانشگاه', desc: 'کلاس‌های روتین روزمره', category: 'university' },
      { time: '۱۷:۰۰ - ۱۸:۱۵', title: 'پاور نپ (Power Nap)', desc: 'چرت کوتاه ۲۰ دقیقه‌ای و ریکاور انرژی', category: 'rest' },
      { time: '۱۸:۳۰ - ۲۰:۰۰', title: 'بلوک کنکور: آمار و گسسته', desc: 'تثبیت فرمول‌ها و تحلیل تست', category: 'study' },
      { time: '۲۰:۰۰ - ۲۰:۴۵', title: 'یوگا و موبیلیتی عمیق', desc: 'کشش لگن، همسترینگ و شانه‌ها برای جلوگیری از آسیب دیدگی جودو', category: 'sport' },
      { time: '۲۰:۴۵ - ۲۱:۳۰', title: 'شام سبک و زودهنگام', desc: 'پرهیز از غذای سنگین برای خواب باکیفیت', category: 'nutrition' },
      { time: '۲۱:۳۰ - ۲۲:۴۵', title: 'توسعه پایپ‌لاین RAG', desc: 'کدنویسی، پرامپت اینجینیرینگ یا پردازش دیتاست', category: 'research' },
      { time: '۲۳:۰۰', title: 'خاموشی', desc: 'خواب کامل', category: 'sleep' },
    ]
  },
  {
    id: 'wed',
    name: 'چهارشنبه',
    subtitle: 'تخلیه کامل فیزیکی قبل از آخر هفته',
    type: 'weekend-transition',
    tag: 'کنکور + جودو فشرده',
    events: [
      { time: 'صبح تا عصر', title: 'بلوک‌های متمرکز کنکور', desc: 'مطالعه طبق روال برنامه‌ریزی (مدار منطقی / گسسته)', category: 'study' },
      { time: '۱۸:۰۰ - ۱۹:۳۰', title: 'کلاس جودو (جلسه ۳)', desc: 'تخلیه کامل توان بدنی و مبارزات جدی هفتگی', category: 'sport' },
      { time: '۲۰:۳۰ - ۲۲:۳۰', title: 'شب‌پژوهی RAG', desc: 'کدنویسی آرام، بازبینی لاگ‌ها و بدون تنش فکری', category: 'research' },
      { time: '۲۳:۰۰', title: 'خاموشی', desc: 'استراحت عضلانی عمیق', category: 'sleep' },
    ]
  },
  {
    id: 'thu',
    name: 'پنج‌شنبه',
    subtitle: 'قدرت انفجاری پایین‌تنه و زنجیره خلفی',
    type: 'free',
    tag: 'روز آزاد + پاور لگ',
    events: [
      { time: '۰۷:۳۰ - ۱۳:۱۵', title: 'بلوک‌های ۱ و ۲ کنکور', desc: 'مطالعه مفهومی عمیق و حل مسائل پیچیده', category: 'study' },
      { time: '۱۳:۱۵ - ۱۵:۳۰', title: 'ناهار و استراحت', desc: 'تغذیه کامل و فاصله از مباحث درسی', category: 'nutrition' },
      { time: '۱۵:۳۰ - ۱۷:۳۰', title: 'دیپ ورک روی RAG', desc: 'تمرکز بی‌وقفه روی باگ‌زدایی و معماری مدل', category: 'research' },
      { 
        time: '۱۷:۴۵ - ۱۸:۴۵', 
        title: 'تمرین زنجیره خلفی و پا', 
        desc: 'پیستول اسکوات / جامپ اسکوات + پل باسن تک‌پا (Glute Bridge) + تمرین ایزومتریک گردن برای جودو', 
        category: 'sport' 
      },
      { time: '۱۹:۱۵ - ۲۰:۴۵', title: 'بلوک ۳ کنکور', desc: 'تست‌زنی زنجیره‌ای و زمان‌دار', category: 'study' },
      { time: '۲۱:۰۰ به بعد', title: 'پاداش هفتگی و ریلکسیشن', desc: 'آزاد کردن فکر، فیلم یا موزیک آرام‌بخش', category: 'rest' },
    ]
  },
  {
    id: 'fri',
    name: 'جمعه',
    subtitle: 'ریکاوری سیستم عصبی مرکزی (CNS Reboot)',
    type: 'recovery',
    tag: 'تثبیت و استراحت مطلق',
    events: [
      { time: 'صبح (۲ الی ۲.۵ ساعت)', title: 'جعبه لایتنر و تحلیل خطاها', desc: 'بررسی تست‌های علامت‌دار کل هفته بدون فشار جدید', category: 'study' },
      { time: 'بعدازظهر تا شب', title: 'استراحت مطلق فیزیولوژیک', desc: 'سونا / دوش آب سرد، کشش فاشیا، ماساژ پا. هیچ ورزش سنگینی مجاز نیست!', category: 'recovery' },
      { time: 'شب', title: 'تنظیم مایندست هفته جدید', desc: 'آماده‌سازی سیستم عصبی برای مبارزه مجدد در دوشنبه', category: 'sleep' },
    ]
  }
];

const categoryStyles = {
  sport: { bg: 'bg-rose-950/40', border: 'border-rose-500/30', text: 'text-rose-400', badge: 'bg-rose-500/20 text-rose-300', icon: Dumbbell },
  study: { bg: 'bg-blue-950/40', border: 'border-blue-500/30', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300', icon: BookOpen },
  research: { bg: 'bg-purple-950/40', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300', icon: Brain },
  university: { bg: 'bg-amber-950/40', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300', icon: Calendar },
  nutrition: { bg: 'bg-emerald-950/40', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300', icon: Coffee },
  rest: { bg: 'bg-cyan-950/40', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300', icon: Sparkles },
  recovery: { bg: 'bg-teal-950/40', border: 'border-teal-500/30', text: 'text-teal-400', badge: 'bg-teal-500/20 text-teal-300', icon: ShieldAlert },
  sleep: { bg: 'bg-slate-900/60', border: 'border-slate-700/40', text: 'text-indigo-400', badge: 'bg-indigo-500/20 text-indigo-300', icon: Moon },
  fitness: { bg: 'bg-orange-950/40', border: 'border-orange-500/30', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300', icon: Dumbbell },
};

export default function WeeklyScheduler() {
  const [selectedDay, setSelectedDay] = useState(scheduleData[0].id);
  const currentPlan = scheduleData.find(d => d.id === selectedDay);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans antialiased selection:bg-rose-500 selection:text-white" dir="rtl">
      {/* هدر بالایی داشبورد */}
      <header className="max-w-6xl mx-auto mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> داشبورد انضباط شخصی ارباب
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-3">
            پروتکل هفتگی: جودو، کالیستنیکس و RAG
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            برنامه تلفیقی دانشگاه، آزمون ارشد و ریکاوری فشرده سیستم عصبی (CNS)
          </p>
        </div>

        {/* دکمه خلاصه راندمان */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-xs">
          <div className="text-center px-2">
            <span className="block text-slate-500">جودو / هفته</span>
            <span className="font-bold text-rose-400 text-sm">۳ جلسه</span>
          </div>
          <div className="w-px h-6 bg-slate-800" />
          <div className="text-center px-2">
            <span className="block text-slate-500">دیپ ورک RAG</span>
            <span className="font-bold text-purple-400 text-sm">هر روز</span>
          </div>
          <div className="w-px h-6 bg-slate-800" />
          <div className="text-center px-2">
            <span className="block text-slate-500">ساعت خواب</span>
            <span className="font-bold text-emerald-400 text-sm">۲۳:۰۰ فیکس</span>
          </div>
        </div>
      </header>

      {/* ناوبری روزها (Tabs) */}
      <nav className="max-w-6xl mx-auto mb-8 flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {scheduleData.map((day) => {
          const isActive = day.id === selectedDay;
          return (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl border text-right transition-all duration-200 flex flex-col justify-between min-w-[130px] ${
                isActive 
                  ? 'bg-rose-500/15 border-rose-500 text-white shadow-lg shadow-rose-950/50' 
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`text-base font-bold ${isActive ? 'text-rose-400' : ''}`}>
                  {day.name}
                </span>
                {isActive && <CheckCircle2 className="w-4 h-4 text-rose-400" />}
              </div>
              <span className="text-[11px] opacity-75 truncate max-w-[110px]">
                {day.tag}
              </span>
            </button>
          );
        })}
      </nav>

      {/* بدنه محتوا: تایم‌لاین روز انتخاب‌شده */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ستون کارت روز و آمار خلاصه */}
        <section className="lg:col-span-1 space-y-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sticky top-6 backdrop-blur">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 inline-block mb-3">
              {currentPlan.tag}
            </span>
            <h2 className="text-2xl font-bold text-white mb-2">{currentPlan.name}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{currentPlan.subtitle}</p>

            <div className="space-y-3 border-t border-slate-800 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">راهنمای برچسب‌ها</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-rose-400"><Dumbbell className="w-3.5 h-3.5" /> ورزش / جودو</span>
                <span className="flex items-center gap-1.5 text-blue-400"><BookOpen className="w-3.5 h-3.5" /> کنکور ارشد</span>
                <span className="flex items-center gap-1.5 text-purple-400"><Brain className="w-3.5 h-3.5" /> RAG و پژوهش</span>
                <span className="flex items-center gap-1.5 text-teal-400"><ShieldAlert className="w-3.5 h-3.5" /> ریکاوری CNS</span>
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>ارباب، این روتین شوخی‌بردار نیست! اگه خواب ۲۳:۰۰ رو جا بندازی، رندوریِ جودو سیستم عصبیت رو له می‌کنه!</span>
            </div>
          </div>
        </section>

        {/* ستون رویدادهای تایم‌لاین */}
        <section className="lg:col-span-2">
          <div className="relative border-r-2 border-slate-800/80 pr-6 mr-3 space-y-6">
            {currentPlan.events.map((event, idx) => {
              const style = categoryStyles[event.category] || categoryStyles.rest;
              const Icon = style.icon;

              return (
                <div key={idx} className="relative group">
                  {/* دایره نقطه عطف در خط زمان */}
                  <div className={`absolute -right-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-950 transition-transform group-hover:scale-125 ${style.text.replace('text-', 'bg-')}`} />

                  {/* کارت محتوا */}
                  <div className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 group-hover:translate-x-[-4px] ${style.bg} ${style.border}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${style.text}`} />
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${style.badge}`}>
                          {event.time}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h4 className="text-base font-bold text-slate-100 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {event.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
