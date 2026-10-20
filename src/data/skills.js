
/*
|--------------------------------------------------------------------------
| Skills Data
|--------------------------------------------------------------------------
| تمام اطلاعات مربوط به مهارت‌ها در این فایل قرار دارد.
|
| مزیت:
| Component مربوط به Skills فقط مسئول نمایش است.
|
| بعداً می‌توانیم همین ساختار را از API دریافت کنیم.
|--------------------------------------------------------------------------
*/

export const skillsData = {
  eyebrow: "SKILLS / 02",

  title: "مهارت‌ها و فناوری‌ها",

  description:
    "فناوری‌هایی که با آن‌ها سیستم‌های نرم‌افزاری و هوشمند می‌سازم و در مسیر پژوهش و توسعه از آن‌ها استفاده می‌کنم.",

  categories: [
    {
      id: "ai",
      title: "هوش مصنوعی و یادگیری ماشین",

      description:
        "مدل‌سازی، یادگیری ماشین و توسعه راهکارهای هوشمند.",

      technologies: [
        "Python",
        "Machine Learning",
        "XGBoost",
        "Scikit-learn",
        "Computer Vision",
        "Deep Learning",
      ],
    },

    {
      id: "software",
      title: "مهندسی نرم‌افزار",

      description:
        "طراحی و توسعه نرم‌افزارهای قابل توسعه و قابل نگهداری.",

      technologies: [
        "React",
        "C++",
        "ASP.NET Core",
        "REST API",
        "Git",
        "Clean Architecture",
      ],
    },

    {
      id: "data",
      title: "داده و سیستم‌ها",

      description:
        "کار با داده، پایگاه داده و ساخت سیستم‌های داده‌محور.",

      technologies: [
        "SQL",
        "SQL Server",
        "Data Analysis",
        "ETL",
        "Data Engineering",
        "Data Visualization",
      ],
    },

    {
      id: "research",
      title: "پژوهش و ابزارها",

      description:
        "ابزارها و روش‌هایی که برای آزمایش، تحلیل و تحقیق استفاده می‌کنم.",

      technologies: [
        "Jupyter",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "GitHub",
        "Research",
      ],
    },
  ],

  exploring: [
    "Deep Learning",
    "Computer Vision",
    "Data Engineering",
    "Intelligent Systems",
  ],
};

