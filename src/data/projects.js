
/*
|--------------------------------------------------------------------------
| Projects Data
|--------------------------------------------------------------------------
| اطلاعات پروژه‌ها
|
| featured:
| مشخص می‌کند پروژه در بخش Featured نمایش داده شود یا نه.
|
| result:
| نتیجه یا دستاورد پروژه.
|
| status:
| وضعیت پروژه.
|--------------------------------------------------------------------------
*/

export const projectsData = {
  eyebrow: "PROJECTS / 03",

  title: "پروژه‌های منتخب",

  description:
    "بخشی از پروژه‌هایی که در مسیر هوش مصنوعی، مهندسی نرم‌افزار و پژوهش روی آن‌ها کار کرده‌ام.",

  projects: [
    {
      id: 1,

      title: "Spacecraft Thruster Prediction",

      titleFa: "پیش‌بینی عملکرد پیشران فضاپیما",

      description:
        "توسعه یک مدل یادگیری ماشین برای پیش‌بینی عملکرد پیشران فضاپیما و بررسی ارتباط میان پارامترهای مختلف سیستم.",

      category: "AI Research",

      year: "2025",

      status: "Completed",

      featured: true,

      technologies: [
        "Python",
        "XGBoost",
        "Machine Learning",
        "Data Analysis",
      ],

      result:
        "XGBoost Regression Model",

      github:
        "https://github.com/sajadparcham/spacecraft-thruster-prediction",

      demo: null,
    },

    {
      id: 2,

      title: "Predictive Maintenance EV",

      titleFa: "پیش‌بینی خرابی خودروهای الکتریکی",

      description:
        "تحلیل داده‌های سنسوری خودروهای الکتریکی برای بررسی وضعیت سیستم و پیش‌بینی شرایط احتمالی خرابی.",

      category: "Machine Learning",

      year: "2025",

      status: "Completed",

      featured: true,

      technologies: [
        "Python",
        "XGBoost",
        "Pandas",
        "Machine Learning",
      ],

      result:
        "Predictive Maintenance Model",

      github:
        "https://github.com/sajadparcham/predictive-maintenance-EV",

      demo: null,
    },

    {
      id: 3,

      title: "Client-Side Persian OCR",

      titleFa: "استخراج متن فارسی از تصاویر",

      description:
        "طراحی یک افزونه مرورگر برای استخراج متن از تصاویر با تمرکز بر اجرای OCR در سمت کاربر.",

      category: "Computer Vision",

      year: "2025",

      status: "In Development",

      featured: true,

      technologies: [
        "PaddleOCR",
        "Computer Vision",
        "JavaScript",
        "Chrome Extension",
      ],

      result:
        "Client-Side OCR Pipeline",

      github: null,

      demo: null,
    },
  ],
};

