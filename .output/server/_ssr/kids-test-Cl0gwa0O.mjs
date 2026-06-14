import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TELEGRAM_URL } from "./telegram-B1WC_9Ai.mjs";
import { W as Wrench, ah as Compass, ai as Heart, aj as Calculator, ak as Palette, J as Sparkles, al as CircleCheck, B as Brain, ad as Rocket, z as BookOpen, am as Music, an as ArrowDown, V as Send, M as MessageCircle, R as Phone } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CONTACT_PHONE_INTL = "989105557133";
const CONTACT_PHONE_DISPLAY = "0910 555 7133";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_INTL}`;
const RUBIKA_URL = `https://rubika.ir/DrMahdiPourabdollah`;
const BALE_URL = `https://ble.ir/DrMahdiPourabdollah`;
const QUESTIONS = [{
  q: "۱. در اوقات فراغت، کدام فعالیت بیشترین انرژی و تمرکز را در فرزندتان ایجاد می‌کند؟",
  options: [{
    label: "نقاشی، نوشتن داستان، طراحی یا ساخت ویدیو",
    key: "creator"
  }, {
    label: "حل پازل، بازی فکری، چالش ریاضی یا برنامه‌نویسی",
    key: "analyst"
  }, {
    label: "بازی گروهی، گفت‌وگو و کمک به دیگران",
    key: "helper"
  }, {
    label: "بازی بیرون از خانه، کاوش طبیعت یا تماشای مستند",
    key: "explorer"
  }, {
    label: "ساخت با لگو، باز/بسته کردن وسایل، رباتیک",
    key: "builder"
  }]
}, {
  q: "۲. در مدرسه، در کدام درس عمیق‌تر و خودانگیخته‌تر فعالیت می‌کند؟",
  options: [{
    label: "هنر، ادبیات، انشا و موسیقی",
    key: "creator"
  }, {
    label: "ریاضی، فیزیک، علوم کامپیوتر",
    key: "analyst"
  }, {
    label: "اجتماعی، روان‌شناسی، زبان و ارتباطات",
    key: "helper"
  }, {
    label: "جغرافیا، زیست‌شناسی، علوم زمین",
    key: "explorer"
  }, {
    label: "کار و فناوری، کارگاه، آزمایشگاه عملی",
    key: "builder"
  }]
}, {
  q: "۳. هنگام مواجهه با یک مسئله جدید، اولین واکنش او چیست؟",
  options: [{
    label: "یک راه‌حل غیرمعمول و خلاقانه پیشنهاد می‌کند",
    key: "creator"
  }, {
    label: "مسئله را به اجزای کوچک‌تر تقسیم و تحلیل می‌کند",
    key: "analyst"
  }, {
    label: "از دیگران نظر می‌خواهد و کار تیمی را ترجیح می‌دهد",
    key: "helper"
  }, {
    label: "آزمون و خطا می‌کند و راه‌های تازه را امتحان می‌کند",
    key: "explorer"
  }, {
    label: "با ابزار، نمونه‌سازی یا دست‌سازه دنبال راه‌حل است",
    key: "builder"
  }]
}, {
  q: "۴. کدام نوع محتوا، بازی یا اپلیکیشن برایش جذاب‌تر است؟",
  options: [{
    label: "اپ‌های طراحی، انیمیشن، تولید موسیقی یا داستان",
    key: "creator"
  }, {
    label: "بازی استراتژیک، شطرنج، پلتفرم‌های کدنویسی",
    key: "analyst"
  }, {
    label: "بازی‌های چندنفره، شبکه اجتماعی، پادکست انگیزشی",
    key: "helper"
  }, {
    label: "بازی‌های ماجراجویی، مستند طبیعت، نقشه و سفر",
    key: "explorer"
  }, {
    label: "بازی‌های مهندسی، Minecraft، شبیه‌ساز و رباتیک",
    key: "builder"
  }]
}, {
  q: "۵. در یک پروژه گروهی، معمولاً چه نقشی به‌طور طبیعی می‌گیرد؟",
  options: [{
    label: "ایده‌پرداز اصلی و طراح ظاهر/سبک پروژه",
    key: "creator"
  }, {
    label: "تحلیل‌گر، برنامه‌ریز و کنترل‌کننده کیفیت",
    key: "analyst"
  }, {
    label: "هماهنگ‌کننده اعضا و میانجی اختلاف‌ها",
    key: "helper"
  }, {
    label: "پیشنهاد دهنده مسیرهای تازه و آزمایش‌گر",
    key: "explorer"
  }, {
    label: "اجراکننده عملی و سازنده خروجی فیزیکی",
    key: "builder"
  }]
}, {
  q: "۶. هنگام احساس استرس یا شکست، چگونه آرام می‌شود؟",
  options: [{
    label: "با هنر، موسیقی یا نوشتن احساسات",
    key: "creator"
  }, {
    label: "با تحلیل علت و برنامه‌ریزی برای دفعه بعد",
    key: "analyst"
  }, {
    label: "با صحبت با والدین یا دوستان نزدیک",
    key: "helper"
  }, {
    label: "با ورزش، طبیعت یا تغییر محیط",
    key: "explorer"
  }, {
    label: "با ساختن چیزی یا تمرکز روی کار دستی",
    key: "builder"
  }]
}, {
  q: "۷. کدام جمله توصیف بهتری از سبک یادگیری اوست؟",
  options: [{
    label: "از طریق تصویر، رنگ و داستان بهتر یاد می‌گیرد",
    key: "creator"
  }, {
    label: "از طریق فرمول، الگو و استدلال منطقی بهتر یاد می‌گیرد",
    key: "analyst"
  }, {
    label: "از طریق گفت‌وگو، تدریس به دیگران و کار جمعی بهتر یاد می‌گیرد",
    key: "helper"
  }, {
    label: "از طریق تجربه میدانی، سفر و مشاهده بهتر یاد می‌گیرد",
    key: "explorer"
  }, {
    label: "از طریق پروژه عملی، ساختن و انجام دادن بهتر یاد می‌گیرد",
    key: "builder"
  }]
}, {
  q: "۸. در آینده، کدام دستاورد بیشترین رضایت را به او خواهد داد؟",
  options: [{
    label: "خلق یک اثر هنری، فیلم یا برند ماندگار",
    key: "creator"
  }, {
    label: "حل یک مسئله علمی/فناورانه بزرگ",
    key: "analyst"
  }, {
    label: "بهبود زندگی مردم و خدمت اجتماعی",
    key: "helper"
  }, {
    label: "سفر، کاوش و کشف جهان",
    key: "explorer"
  }, {
    label: "اختراع یا ساخت محصول و کسب‌وکار فیزیکی",
    key: "builder"
  }]
}, {
  q: "۹. در برخورد با ریسک و تصمیم‌های مبهم چگونه است؟",
  options: [{
    label: "بر اساس حس و الهام تصمیم می‌گیرد",
    key: "creator"
  }, {
    label: "با داده، احتمالات و سناریوسازی تصمیم می‌گیرد",
    key: "analyst"
  }, {
    label: "تأثیر تصمیم روی دیگران را اولویت قرار می‌دهد",
    key: "helper"
  }, {
    label: "ریسک‌پذیر است و فرصت‌های جدید را دنبال می‌کند",
    key: "explorer"
  }, {
    label: "محتاط است و ترجیح می‌دهد ابتدا نمونه بسازد",
    key: "builder"
  }]
}, {
  q: "۱۰. ویژگی شخصیتی غالب در زندگی روزمره‌اش کدام است؟",
  options: [{
    label: "تخیل‌گرا، حساس، زیبایی‌دوست",
    key: "creator"
  }, {
    label: "منظم، دقیق، کنجکاو علمی",
    key: "analyst"
  }, {
    label: "همدل، مسئولیت‌پذیر، اجتماعی",
    key: "helper"
  }, {
    label: "مستقل، ماجراجو، انعطاف‌پذیر",
    key: "explorer"
  }, {
    label: "عمل‌گرا، صبور، فنی و دست‌به‌ابزار",
    key: "builder"
  }]
}];
const PROFILES = {
  creator: {
    title: "آفرینشگر خلاق",
    icon: Palette,
    color: "from-pink-500 to-amber-500",
    summary: "ذهنی هنری و تخیلی قوی؛ از خلق چیزهای تازه لذت می‌برد و دنیا را با رنگ و داستان می‌بیند. (تیپ Artistic در RIASEC / هوش بصری-فضایی و موسیقایی گاردنر).",
    careers: ["طراح UI/UX", "انیماتور و گرافیست", "نویسنده و فیلم‌نامه‌نویس", "موسیقی‌دان و آهنگ‌ساز", "تولیدکننده محتوای دیجیتال"],
    courses: ["AI برای هنرمندان", "طراحی گرافیک با ابزارهای هوشمند", "تولید موسیقی با هوش مصنوعی"]
  },
  analyst: {
    title: "تحلیل‌گر منطقی",
    icon: Calculator,
    color: "from-cyan-500 to-blue-600",
    summary: "ذهنی منظم و دقیق؛ عاشق اعداد، الگوها و کشف چرایی پشت پدیده‌ها. (تیپ Investigative در RIASEC / هوش منطقی-ریاضی گاردنر).",
    careers: ["دانشمند داده", "مهندس یادگیری ماشین", "پژوهشگر ریاضی و فیزیک", "تحلیل‌گر مالی", "متخصص امنیت سایبری"],
    courses: ["پایتون از صفر برای نوجوان", "یادگیری ماشین مقدماتی", "آمادگی المپیاد کامپیوتر"]
  },
  helper: {
    title: "همراه و دلسوز",
    icon: Heart,
    color: "from-rose-500 to-purple-500",
    summary: "هوش هیجانی بالا؛ در کار تیمی می‌درخشد و دوست دارد به دیگران کمک کند. (تیپ Social در RIASEC / هوش میان‌فردی گاردنر).",
    careers: ["پزشک و روان‌شناس", "معلم و مربی", "متخصص منابع انسانی", "مدیر محصول", "پرستار و درمانگر"],
    courses: ["مهارت‌های ارتباطی برای نوجوان", "هوش هیجانی و رهبری", "آشنایی با هوش مصنوعی در سلامت"]
  },
  explorer: {
    title: "کاوشگر ماجراجو",
    icon: Compass,
    color: "from-emerald-500 to-teal-500",
    summary: "کنجکاو و ریسک‌پذیر؛ عاشق تجربه‌های جدید، طبیعت و کشف ناشناخته‌ها. (تیپ Enterprising/Investigative در RIASEC / هوش طبیعت‌گرا گاردنر).",
    careers: ["زمین‌شناس و اقیانوس‌شناس", "خبرنگار و مستندساز", "کارآفرین استارتاپی", "پژوهشگر میدانی", "متخصص گردشگری هوشمند"],
    courses: ["داده‌های جغرافیایی و GIS", "ساخت اپ سفر با AI", "تحلیل داده محیط زیست"]
  },
  builder: {
    title: "سازنده مهندس",
    icon: Wrench,
    color: "from-amber-500 to-orange-600",
    summary: "دست‌ساز و مهندس‌ذهن؛ از ساختن، تعمیر کردن و حل مسائل عملی لذت می‌برد. (تیپ Realistic در RIASEC / هوش جنبشی-بدنی گاردنر).",
    careers: ["مهندس رباتیک", "مهندس مکاترونیک", "توسعه‌دهنده سخت‌افزار", "مهندس صنایع", "متخصص اینترنت اشیا (IoT)"],
    courses: ["رباتیک با Arduino", "مقدمه‌ای بر IoT و سنسورها", "پروژه‌محور با میکروپایتون"]
  }
};
function KidsTestPage() {
  const [age, setAge] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [answers, setAnswers] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const allAnswered = QUESTIONS.every((_, i) => answers[i]);
  const result = reactExports.useMemo(() => {
    const counts = {
      creator: 0,
      analyst: 0,
      helper: 0,
      explorer: 0,
      builder: 0
    };
    for (const i in answers) {
      const k = answers[Number(i)];
      if (k) counts[k]++;
    }
    let best = "creator";
    let max = -1;
    Object.keys(counts).forEach((k) => {
      if (counts[k] > max) {
        max = counts[k];
        best = k;
      }
    });
    return {
      best,
      counts
    };
  }, [answers]);
  const profile = PROFILES[result.best];
  const ProfileIcon = profile.icon;
  const ctxLabel = `${name || "فرزندم"}${age ? ` (${age} ساله)` : ""} — تیپ: ${profile.title}`;
  const msg = encodeURIComponent(`سلام، برای تحلیل کامل نتایج تست شخصیت و استعداد شغلی فرزندم در ATiLLAi.com تماس می‌گیرم.
${ctxLabel}`);
  const choose = (qi, key) => {
    setAnswers((a) => ({
      ...a,
      [qi]: key
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-pink-500/15 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-40 left-1/4 h-72 w-72 rounded-full bg-amber-400/15 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " ATiLLAi · ویژه والدین"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mx-auto mt-5 whitespace-nowrap font-black leading-tight tracking-tight", style: {
          fontSize: "clamp(1rem, 3.6vw, 2.25rem)"
        }, children: [
          "تست شخصیت و کشف ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "استعداد شغلی" }),
          " کودکان"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8", children: "تست استاندارد ۱۰ سؤالی مبتنی بر مدل RIASEC هالند و هوش‌های چندگانه گاردنر. با پاسخ به سؤال‌ها، نمونه‌گزارش تیپ شخصیتی و مسیرهای شغلی پیشنهادی فرزندتان را همین‌جا ببینید و برای تحلیل کامل با هوش مصنوعی ATiLLAi از طریق اپلیکیشن‌های پیام‌رسان با ما در ارتباط باشید." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mt-10 grid gap-4 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur md:grid-cols-2 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground", children: "نام فرزند" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value.slice(0, 60)), placeholder: "مثلاً: آرینا", className: "mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground", children: "سن فرزند (۶ تا ۱۸ سال)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: age, onChange: (e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 2)), inputMode: "numeric", placeholder: "مثلاً: ۹", className: "mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary/60" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: QUESTIONS.map((q, qi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        delay: qi * 0.04
      }, className: "rounded-3xl border border-border bg-card/40 p-5 backdrop-blur md:p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary", children: qi + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold leading-7 md:text-lg", children: q.q })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2 md:grid-cols-2", children: q.options.map((o) => {
          const selected = answers[qi] === o.key;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => choose(qi, o.key), className: `group flex items-center gap-3 rounded-2xl border px-4 py-3 text-start text-sm transition ${selected ? "border-primary/60 bg-primary/15 text-foreground shadow-glow" : "border-border bg-background/40 text-foreground/85 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.06]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-primary bg-primary text-primary-foreground" : "border-border"}`, children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.label })
          ] }, o.label);
        }) })
      ] }, qi)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: !allAnswered, onClick: () => {
          setSubmitted(true);
          setTimeout(() => document.getElementById("result")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          }), 50);
        }, className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5" }),
          " مشاهده نتیجه نمونه"
        ] }),
        !allAnswered && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "برای دیدن نتیجه، لطفاً به همه ۱۰ سؤال پاسخ دهید." })
      ] }),
      submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { id: "result", initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "mt-14 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-amber-600/10 p-7 backdrop-blur md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${profile.color} text-white shadow-glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileIcon, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-primary", children: "نتیجه نمونه" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-1 text-2xl font-black md:text-3xl", children: [
              "تیپ شخصیتی: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: profile.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-foreground/85 md:text-base", children: profile.summary })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background/40 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
              " مسیرهای شغلی پیشنهادی"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: profile.careers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
            ] }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background/40 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
              " دوره‌های پیشنهادی ATiLLAi"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: profile.courses.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary opacity-70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
            ] }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-amber-300/30 bg-amber-400/[0.06] p-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-7 text-foreground/90", children: [
            "این فقط ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-amber-200", children: "نمونه‌ای کوتاه" }),
            " از تحلیل است. برای دریافت گزارش کامل (پروفایل چندبُعدی، نقشه‌راه یادگیری ۱۲ ماهه، تحلیل نقاط قوت/ضعف و توصیه‌های ویژه والدین) و مشاوره مستقیم با تیم ATiLLAi، از طریق اپلیکیشن‌های پیام‌رسان زیر با ما در ارتباط باشید:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-1 text-[11px] text-amber-200/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "برای ارتباط مستقیم کلیک کنید" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${TELEGRAM_URL}?text=${msg}`, target: "_blank", rel: "noopener noreferrer", "aria-label": "Telegram", title: "تلگرام", className: "group flex h-12 items-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-500/10 px-4 text-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-500/20 hover:shadow-[0_0_22px_-4px_rgba(56,189,248,0.7)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "تلگرام" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${WHATSAPP_URL}?text=${msg}`, target: "_blank", rel: "noopener noreferrer", "aria-label": "WhatsApp", title: "واتساپ", className: "group flex h-12 items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 text-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:shadow-[0_0_22px_-4px_rgba(16,185,129,0.7)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "واتساپ" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: RUBIKA_URL, target: "_blank", rel: "noopener noreferrer", "aria-label": "Rubika", title: "روبیکا", className: "group flex h-12 items-center gap-2 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 text-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-500/20 hover:shadow-[0_0_22px_-4px_rgba(244,63,94,0.7)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "روبیکا" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: BALE_URL, target: "_blank", rel: "noopener noreferrer", "aria-label": "Bale", title: "بله", className: "group flex h-12 items-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 text-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-500/20 hover:shadow-[0_0_22px_-4px_rgba(139,92,246,0.7)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "بله" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:+${CONTACT_PHONE_INTL}`, "aria-label": "Phone", title: "تماس مستقیم", className: "group flex h-12 items-center gap-2 rounded-2xl border border-amber-300/40 bg-amber-400/10 px-4 text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-400/20 hover:shadow-[0_0_22px_-4px_rgba(251,191,36,0.7)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", dir: "ltr", children: CONTACT_PHONE_DISPLAY })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  KidsTestPage as component
};
