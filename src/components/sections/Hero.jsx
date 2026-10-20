
import { motion } from "framer-motion";
import {
  ArrowUpLeft,
  ChevronDown,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| HERO SECTION
|--------------------------------------------------------------------------
| این بخش اولین چیزی است که کاربر در سایت می‌بیند.
|
| ساختار کلی:
|
| Badge
|   ↓
| Name
|   ↓
| Description
|   ↓
| Buttons
|   ↓
| Technologies
|
| سمت چپ/کنار صفحه:
| Persian Inspired Visual
|
|--------------------------------------------------------------------------
*/


function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >

      {/* ================================================================
          Background Glow
          ----------------------------------------------------------------
          یک نور سبز بسیار ظریف در پس‌زمینه ایجاد می‌کند.
          
          اگر خواستی Glow را جابه‌جا کنی:
          
          top-0       → بالای صفحه
          top-20      → کمی پایین‌تر
          -top-20     → بالاتر از صفحه
          
          right-0     → سمت راست
          left-0      → سمت چپ
          
          مثال:
          top-20 right-10
          یعنی 20 واحد از بالا و 10 واحد از راست.
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          right-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-500/10
          blur-[120px]
        "
      />


      {/* ================================================================
          Main Container
          ----------------------------------------------------------------
          max-w-7xl:
          حداکثر عرض محتوا را مشخص می‌کند.

          mx-auto:
          محتوا را وسط صفحه قرار می‌دهد.

          px-6:
          فاصله محتوا از چپ و راست صفحه.

          اگر خواستی فاصله کناری بیشتر شود:

          px-8
          px-10
          px-12

          اگر خواستی در موبایل و دسکتاپ متفاوت باشد:

          px-6 sm:px-8 lg:px-12

          ---------------------------------------------------------------

          py-24:
          فاصله بالا و پایین محتوا.

          اگر محتوا زیادی پایین است:
          py-16

          اگر فضای بیشتری می‌خواهی:
          py-32
      ================================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-24
          sm:px-8
          lg:px-12
        "
      >

        {/* ==============================================================
            Hero Content
        =============================================================== */}

        <div className="relative z-10 w-full">

          {/* --------------------------------------------------------------
              Small Badge
          -------------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >

            {/* Green Indicator */}

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_15px_rgba(52,211,153,0.7)]
              "
            />

            <span
              className="
              mt-1
                text-xs
                font-medium
                tracking-[0.2em]
                text-emerald-400
                sm:text-sm
              "
            >
              AI · RESEARCH · SOFTWARE
            </span>

          </motion.div>


          {/* --------------------------------------------------------------
              Main Heading
          -------------------------------------------------------------- */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              
              max-w-4xl
              text-5xl
              font-bold
              leading-[1.2]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-8xl
            "
          >
            سجاد

            <span
              className="
                mr-3
                text-emerald-400
                green-text-glow
              "
            >
              پرچم
            </span>
          </motion.h1>


          {/* --------------------------------------------------------------
              Subtitle
          -------------------------------------------------------------- */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              
              mt-88
              text-xl
              font-medium
              text-zinc-300
              sm:text-2xl
              lg:text-3xl
            "
          >
            مهندس هوش مصنوعی و پژوهشگر
          </motion.h2>


          {/* --------------------------------------------------------------
              Description
          -------------------------------------------------------------- */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}

            /*
            ================================================================
            آموزش فاصله دادن متن
            ================================================================

            mt-8
            یعنی Margin Top

            mt-4   → فاصله کم از بالا
            mt-6   → کمی بیشتر
            mt-8   → متوسط
            mt-10  → زیاد
            mt-12  → خیلی زیاد

            ---------------------------------------------------------------

            فاصله از چپ و راست:

            ml-4   → Margin Left
            mr-4   → Margin Right

            اما در سایت RTL بهتر است برای فاصله افقی
            معمولاً از mx / px استفاده کنیم.

            px-6
            یعنی Padding چپ و راست.

            ---------------------------------------------------------------

            max-w-2xl
            یعنی حداکثر عرض متن.

            اگر متن زیادی عریض است:

            max-w-xl

            اگر متن باریک است:

            max-w-3xl

            ---------------------------------------------------------------

            leading-8
            فاصله بین خطوط متن است.

            leading-6
            leading-7
            leading-8
            leading-9
            leading-10

            هرچه عدد بیشتر باشد خطوط از هم دورتر می‌شوند.
            ================================================================
            */

            className="
              mt-8
              max-w-2xl
              text-base
              leading-10
              text-zinc-400
              sm:text-lg
              sm:leading-9
            "
          >
            ساخت سیستم‌های هوشمند در تقاطع هوش مصنوعی،
            داده و مهندسی نرم‌افزار؛ با تمرکز بر حل مسائل
            واقعی و توسعه فناوری‌های آینده.
          </motion.p>


          {/* ==============================================================
              Buttons
          ============================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            {/* Primary Button */}

            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-emerald-400
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-emerald-300
                hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]
              "
            >
              مشاهده پروژه‌ها

              <ArrowUpLeft
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>


            {/* Secondary Button */}

            <a
              href="#about"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-sm
                font-medium
                text-zinc-300
                transition-all
                duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-400/5
                hover:text-emerald-400
              "
            >
              درباره من
            </a>

          </motion.div>


          {/* ==============================================================
              Technology Tags
          ============================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-16
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-4
              text-xs
              font-medium
              tracking-[0.15em]
              text-zinc-600
              sm:text-sm
            "
          >

            <span>ARTIFICIAL INTELLIGENCE</span>

            <span className="text-emerald-400/50">
              ◆
            </span>

            <span>DATA ENGINEERING</span>

            <span className="text-emerald-400/50">
              ◆
            </span>

            <span>SOFTWARE ENGINEERING</span>
            <span className="text-emerald-400/50">
              ◆
            </span>
          </motion.div>

        </div>


        
{/* ================================================================
    Persian × AI Geometric Visual
    ----------------------------------------------------------------
    این المان فقط تزئینی نیست؛ قرار است هویت بصری سایت را بسازد.

    ایده:
    ترکیب هندسه ایرانی + سیستم‌های تکنولوژیک

    نکته:
    کل المان نمی‌چرخد.
    فقط بعضی لایه‌های داخلی حرکت بسیار آهسته دارند.

    اگر سرعت Animation را خواستی تغییر بدهی:

    duration-[20s]
    یعنی 20 ثانیه برای یک چرخش کامل.

    duration-[40s]
    یعنی حرکت بسیار آرام‌تر.

    اگر خواستی کاملاً ثابت باشد:
    animate-[spin_0s_linear_infinite]
================================================================ */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1.2,
    delay: 0.4,
  }}
  className="
    pointer-events-none
    absolute
    left-[-140px]
    top-1/2
    hidden
    h-[520px]
    w-[520px]
    -translate-y-1/2
    lg:block
  "
>

  {/* ==============================================================
      OUTER FRAME
      ----------------------------------------------------------------
      این بخش ثابت است.

      اگر خواستی بزرگ‌تر شود:
      h-[600px] w-[600px]

      اگر خواستی کوچک‌تر شود:
      h-[400px] w-[400px]
  ============================================================== */}

  <div
    className="
      absolute
      inset-0
      rounded-full
      border
      border-emerald-400/[0.08]
    "
  />


  {/* ==============================================================
      SECONDARY RING
      ----------------------------------------------------------------
      این حلقه خیلی آرام می‌چرخد.

      نکته:
      animate-spin
      باعث چرخش می‌شود.

      duration-[35s]
      سرعت چرخش را بسیار پایین می‌آورد.
  ============================================================== */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-8
      rounded-full
      border
      border-dashed
      border-emerald-400/[0.12]
    "
  />


  {/* ==============================================================
      PERSIAN GEOMETRIC DIAMOND
      ----------------------------------------------------------------
      لوزی وسط از هندسه معماری ایرانی الهام گرفته شده.

      این قسمت ثابت است.
  ============================================================== */}

  <div
    className="
      absolute
      inset-20
      rotate-45
      border
      border-emerald-400/[0.12]
    "
  />

  <div
    className="
      absolute
      inset-28
      rotate-45
      border
      border-emerald-400/[0.08]
    "
  />


  {/* ==============================================================
      INNER ROTATING ELEMENT
      ----------------------------------------------------------------
      این لوزی با سرعت خیلی کم حرکت می‌کند.

      چون داخل یک عنصر ثابت قرار دارد،
      حس حرکت پیچیده‌تر و ظریف‌تر می‌شود.
  ============================================================== */}

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 50,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-32
      rotate-45
      border
      border-emerald-400/20
    "
  />


  {/* ==============================================================
      ORBIT LINE
      ----------------------------------------------------------------
      یک خط کوچک روی مدار ایجاد می‌کند.

      این قسمت باعث می‌شود المان کمی حس
      "AI / orbital system" داشته باشد.
  ============================================================== */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-14
      rounded-full
    "
  >

    <div
      className="
        absolute
        left-1/2
        top-[-3px]
        h-1.5
        w-1.5
        -translate-x-1/2
        rounded-full
        bg-emerald-400
        shadow-[0_0_18px_rgba(52,211,153,0.8)]
      "
    />

  </motion.div>


  {/* ==============================================================
      CENTER GLOW
      ----------------------------------------------------------------
      نقطه مرکزی ثابت است اما Glow آن Pulse می‌کند.

      هدف:
      ایجاد حس "processing".

      animate:
      scale + opacity
  ============================================================== */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.6, 1, 0.6],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-1/2
      h-16
      w-16
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-emerald-400/10
      blur-xl
    "
  />


  {/* ==============================================================
      CENTER SYMBOL
      ----------------------------------------------------------------
      نماد مرکزی.

      این قسمت را بعداً می‌توانیم با یک
      Symbol اختصاصی برای برند شخصی تو جایگزین کنیم.
  ============================================================== */}

  <motion.div
    animate={{
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-1/2
      flex
      h-16
      w-16
      -translate-x-1/2
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      border
      border-emerald-400/30
      bg-black/80
      backdrop-blur-sm
    "
  >

    <span
      className="
        h-2.5
        w-2.5
        rounded-full
        bg-emerald-400
        shadow-[0_0_20px_rgba(52,211,153,0.9)]
      "
    />

  </motion.div>


  {/* ==============================================================
      SUBTLE RADIAL GLOW
      ----------------------------------------------------------------
      این Glow باعث می‌شود المان با Background یکی شود.
  ============================================================== */}

  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-72
      w-72
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-emerald-400/[0.025]
      blur-3xl
    "
  />

</motion.div>



      </div>


      {/* ================================================================
          Scroll Indicator
      ================================================================= */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-zinc-600
          transition-colors
          hover:text-emerald-400
          sm:flex
        "
      >

        <span className="text-[10px] tracking-[0.3em]">
          SCROLL
        </span>

        <ChevronDown
          size={18}
          className="animate-bounce"
        />

      </motion.a>

    </section>
  );
}

export default Hero;

