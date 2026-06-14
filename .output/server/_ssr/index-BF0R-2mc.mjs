import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, A as ATILLAI_ORBIT_LOGO } from "./router-On6b4iSk.mjs";
import "../_libs/seroval.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { a3 as ArrowLeft, a as ShieldCheck, ao as Trophy, J as Sparkles, ap as Users, B as Brain, d as Bot, q as ChartColumn, r as Database, s as ChartLine, t as CodeXml, u as FileText, v as Smartphone, w as Globe, x as Cloud, y as Presentation, z as BookOpen, ae as Workflow, Z as Zap, m as GraduationCap, aq as Building2, F as Factory, a9 as Network, a8 as Atom, ac as Cpu } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-6YljCchu.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const fadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.7,
    ease: "easeOut"
  }
};
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Domains, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Audiences, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      y
    }, className: "pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      y
    }, className: "pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        opacity
      }, className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          t("hero.badge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "mt-6 font-ai-display whitespace-nowrap text-[15px] font-bold leading-[1.6] tracking-[0.01em] md:text-[18px] lg:text-[22px]", style: {
          textShadow: "0 0 24px oklch(0.82 0.14 85 / 0.3)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent", children: t("hero.l1") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.6
        }, className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-[1.03]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "ثبت سفارش پروژه" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "relative z-10 h-5 w-5 transition group-hover:-translate-x-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition group-hover:translate-x-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-white/10", children: "مشاهده خدمات" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.9
        }, className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground", children: ["تحویل تضمینی", "پشتیبانی نامحدود", "محرمانگی کامل", "گزارش‌های تخصصی"].map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2 })
        ] }, t2)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVisual, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.4
    }, className: "absolute inset-x-0 bottom-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-6 rounded-full border-2 border-border p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-2 w-2 rounded-full bg-primary", animate: {
      y: [0, 14, 0]
    }, transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut"
    } }) }) })
  ] });
}
function HeroVisual() {
  const icons = [Brain, ChartColumn, Network, Atom, Cpu, Database];
  const orbits = icons.map((Icon, i) => {
    const angle = i / icons.length * 2 * Math.PI;
    const radius = 42;
    const x = Number((50 + radius * Math.cos(angle)).toFixed(2));
    const y = Number((50 + radius * Math.sin(angle)).toFixed(2));
    return {
      Icon,
      x,
      y
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    scale: 0.92
  }, animate: {
    opacity: 1,
    scale: 1
  }, transition: {
    duration: 1,
    delay: 0.4,
    ease: [0.22, 1, 0.36, 1]
  }, className: "relative mx-auto aspect-square w-full max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-full", style: {
      background: "radial-gradient(circle at 50% 50%, oklch(0.82 0.14 85 / 0.18), transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-10 rounded-full opacity-60 blur-3xl", style: {
      background: "conic-gradient(from 0deg, oklch(0.82 0.14 85 / 0.25), oklch(0.55 0.18 270 / 0.20), oklch(0.65 0.18 200 / 0.22), oklch(0.82 0.14 85 / 0.25))"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      rotate: 360
    }, transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }, className: "absolute inset-0 rounded-full border border-dashed border-primary/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      rotate: -360
    }, transition: {
      duration: 45,
      repeat: Infinity,
      ease: "linear"
    }, className: "absolute inset-10 rounded-full border border-secondary/25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      rotate: 360
    }, transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }, className: "absolute inset-20 rounded-full border border-accent/20" }),
    [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30", initial: {
      width: 120,
      height: 120,
      opacity: 0.6
    }, animate: {
      width: 360,
      height: 360,
      opacity: 0
    }, transition: {
      duration: 3.6,
      repeat: Infinity,
      delay: i * 1.2,
      ease: "easeOut"
    } }, i)),
    [{
      x: 18,
      y: 22,
      d: 0.2
    }, {
      x: 82,
      y: 18,
      d: 0.6
    }, {
      x: 12,
      y: 76,
      d: 1.1
    }, {
      x: 86,
      y: 78,
      d: 1.5
    }, {
      x: 50,
      y: 8,
      d: 0.4
    }, {
      x: 50,
      y: 92,
      d: 1.7
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute h-1 w-1 rounded-full bg-primary/80 shadow-[0_0_8px_2px_oklch(0.82_0.14_85/0.7)]", style: {
      left: `${s.x}%`,
      top: `${s.y}%`
    }, animate: {
      opacity: [0.2, 1, 0.2],
      scale: [0.6, 1.2, 0.6]
    }, transition: {
      duration: 2.4,
      repeat: Infinity,
      delay: s.d
    } }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
      scale: [1, 1.04, 1]
    }, transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -m-12 rounded-full bg-gradient-to-br from-primary/50 via-amber-500/30 to-secondary/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        rotate: 360
      }, transition: {
        duration: 18,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -inset-3 rounded-full opacity-90 blur-[2px]", style: {
        background: "conic-gradient(from 0deg, oklch(0.95 0.12 90), transparent 20%, oklch(0.65 0.18 200) 50%, transparent 70%, oklch(0.95 0.12 90))",
        maskImage: "radial-gradient(circle, transparent 56%, black 58%, black 62%, transparent 64%)",
        WebkitMaskImage: "radial-gradient(circle, transparent 56%, black 58%, black 62%, transparent 64%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        rotate: -360
      }, transition: {
        duration: 28,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -inset-6 rounded-full border border-dashed border-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[oklch(0.18_0.03_265)] to-[oklch(0.08_0.02_265)] ring-2 ring-primary/50 shadow-[0_0_60px_-10px_oklch(0.82_0.14_85/0.7),inset_0_0_30px_rgba(0,0,0,0.6)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ATILLAI_ORBIT_LOGO, alt: "ATiLLAi", width: 160, height: 160, className: "h-full w-full rounded-full object-cover object-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(251,191,36,0.35)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "pointer-events-none absolute inset-0", initial: {
          x: "-120%"
        }, animate: {
          x: "140%"
        }, transition: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.2
        }, style: {
          background: "linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.45) 50%, transparent 62%)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-background shadow-glow ring-2 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) })
    ] }) }),
    orbits.map(({
      Icon,
      x,
      y
    }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      scale: 0
    }, animate: {
      opacity: 1,
      scale: 1,
      y: [0, -6, 0]
    }, transition: {
      opacity: {
        delay: 0.8 + i * 0.1,
        duration: 0.5
      },
      scale: {
        delay: 0.8 + i * 0.1,
        duration: 0.5
      },
      y: {
        duration: 3 + i * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    }, className: "absolute -translate-x-1/2 -translate-y-1/2", style: {
      left: `${x}%`,
      top: `${y}%`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative flex h-14 w-14 items-center justify-center rounded-2xl text-primary shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "relative h-6 w-6" })
    ] }) }, i))
  ] });
}
function Stats() {
  const stats = [{
    value: "+۱٬۰۰۰",
    label: "پروژه موفق",
    icon: Trophy
  }, {
    value: "+۱۰",
    label: "سال تجربه تخصصی",
    icon: Sparkles
  }, {
    value: "+۲٬۰۰۰",
    label: "دانشجو و پژوهشگر",
    icon: Users
  }, {
    value: "۹۹٪",
    label: "رضایت کارفرما",
    icon: ShieldCheck
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: i * 0.1
  }, className: "group relative bg-card/40 p-8 text-center transition hover:bg-card/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mx-auto mb-3 h-7 w-7 text-primary opacity-80 transition group-hover:scale-110" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black text-gradient-gold md:text-4xl", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
  ] }, s.label)) }) }) });
}
const SERVICES = [{
  slug: "deep-learning",
  icon: Brain,
  title: "یادگیری عمیق",
  desc: "طراحی، آموزش و استقرار شبکه‌های عصبی پیشرفته شامل CNN، RNN، Transformer و LLM.",
  color: "from-purple-500 to-indigo-500"
}, {
  slug: "machine-learning",
  icon: Bot,
  title: "یادگیری ماشین",
  desc: "پیاده‌سازی الگوریتم‌های کلاسیک و مدرن یادگیری ماشین برای حل مسائل واقعی.",
  color: "from-cyan-500 to-blue-500"
}, {
  slug: "statistical-analysis",
  icon: ChartColumn,
  title: "تحلیل آماری",
  desc: "تحلیل‌های آماری توصیفی و استنباطی، مدل‌سازی، رگرسیون و آزمون فرض حرفه‌ای.",
  color: "from-amber-500 to-orange-500"
}, {
  slug: "data-science",
  icon: Database,
  title: "علم داده",
  desc: "پاکسازی، تحلیل، بصری‌سازی و استخراج بینش از داده‌های بزرگ و پیچیده.",
  color: "from-emerald-500 to-teal-500"
}, {
  slug: "time-series",
  icon: ChartLine,
  title: "پیش‌بینی سری زمانی",
  desc: "مدل‌سازی ARIMA، LSTM و Prophet برای پیش‌بینی فروش، قیمت و تقاضا.",
  color: "from-pink-500 to-rose-500"
}, {
  slug: "thesis-implementation",
  icon: CodeXml,
  title: "پیاده‌سازی پایان‌نامه",
  desc: "اجرای کامل پایان‌نامه‌های کارشناسی، ارشد و دکتری با مستندسازی علمی.",
  color: "from-fuchsia-500 to-purple-500"
}, {
  slug: "scientific-writing",
  icon: FileText,
  title: "مقاله‌نویسی علمی (ISI/Q1)",
  desc: "نگارش، ترجمه و سابمیت مقالات ISI، Scopus و Q1 در ژورنال‌های معتبر دنیا.",
  color: "from-rose-500 to-red-500"
}, {
  slug: "ai-apps",
  icon: Smartphone,
  title: "طراحی و ساخت اپلیکیشن AI",
  desc: "ساخت اپلیکیشن موبایل و وب با هسته هوش مصنوعی برای کسب‌وکار و استارتاپ‌ها.",
  color: "from-sky-500 to-cyan-500"
}, {
  slug: "smart-website",
  icon: Globe,
  title: "طراحی وبسایت هوشمند",
  desc: "طراحی وبسایت‌های مدرن همراه با چت‌بات، توصیه‌گر و موتور جستجوی هوشمند.",
  color: "from-indigo-500 to-blue-500"
}, {
  slug: "mlops",
  icon: Cloud,
  title: "MLOps و استقرار ابری",
  desc: "Dockerize کردن مدل‌ها، CI/CD، Monitoring و استقرار روی AWS، GCP و Azure.",
  color: "from-teal-500 to-emerald-500"
}, {
  slug: "training",
  icon: Presentation,
  title: "تدریس و کارگاه تخصصی",
  desc: "برگزاری دوره‌های خصوصی و سازمانی AI، ML، DL و Python برای تیم‌های فنی.",
  color: "from-amber-500 to-yellow-500"
}, {
  slug: "proposal-defense",
  icon: BookOpen,
  title: "مشاوره پروپوزال و دفاع",
  desc: "انتخاب موضوع، نگارش پروپوزال، آماده‌سازی اسلاید و کوچینگ جلسه دفاع.",
  color: "from-violet-500 to-fuchsia-500"
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "خدمات تخصصی" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-black md:text-5xl", children: [
        "راهکارهای ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "هوشمند" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "از مشاوره اولیه تا اجرای کامل و استقرار نهایی، در کنار شما هستیم." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.6,
      delay: i * 0.08
    }, whileHover: {
      y: -6
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-0 blur-3xl transition group-hover:opacity-40` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
        slug: s.slug
      }, "aria-label": `مشاهده جزئیات خدمت ${s.title}`, className: "mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 hover:scale-[1.02]", children: [
        "جزئیات ",
        s.title,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" })
      ] })
    ] }, s.title)) })
  ] }) });
}
function Domains() {
  const items = [{
    domain: "computer-vision",
    label: "بینایی کامپیوتر",
    to: "/projects",
    color: "from-cyan-500 to-blue-500"
  }, {
    domain: "nlp",
    label: "پردازش زبان طبیعی",
    to: "/apps",
    color: "from-fuchsia-500 to-purple-500"
  }, {
    domain: "llm",
    label: "مدل‌های زبانی بزرگ (LLM)",
    to: "/apps",
    color: "from-amber-500 to-orange-500"
  }, {
    domain: "image-classification",
    label: "تشخیص و طبقه‌بندی تصویر",
    to: "/projects",
    color: "from-emerald-500 to-teal-500"
  }, {
    domain: "recommender",
    label: "سیستم‌های توصیه‌گر",
    to: "/projects",
    color: "from-pink-500 to-rose-500"
  }, {
    domain: "sentiment",
    label: "تحلیل احساسات",
    to: "/apps",
    color: "from-rose-500 to-red-500"
  }, {
    domain: "rl",
    label: "Reinforcement Learning",
    to: "/projects",
    color: "from-indigo-500 to-blue-500"
  }, {
    domain: "gen-ai",
    label: "Generative AI",
    to: "/apps",
    color: "from-violet-500 to-fuchsia-500"
  }, {
    domain: "anomaly",
    label: "Anomaly Detection",
    to: "/projects",
    color: "from-orange-500 to-red-500"
  }, {
    domain: "cv-industrial",
    label: "Computer Vision صنعتی",
    to: "/projects",
    color: "from-sky-500 to-cyan-500"
  }, {
    domain: "medical",
    label: "Medical AI",
    to: "/projects",
    color: "from-rose-500 to-pink-500"
  }, {
    domain: "financial",
    label: "Financial ML",
    to: "/projects",
    color: "from-emerald-500 to-green-500"
  }, {
    domain: "mlops",
    label: "MLOps و استقرار مدل",
    to: "/projects",
    color: "from-teal-500 to-cyan-500"
  }, {
    domain: "automl",
    label: "AutoML",
    to: "/projects",
    color: "from-yellow-500 to-amber-500"
  }, {
    domain: "edge-ai",
    label: "Edge AI",
    to: "/apps",
    color: "from-blue-500 to-indigo-500"
  }, {
    domain: "speech",
    label: "Speech & STT",
    to: "/apps",
    color: "from-purple-500 to-pink-500"
  }, {
    domain: "time-series",
    label: "Time Series",
    to: "/projects",
    color: "from-amber-500 to-yellow-500"
  }, {
    domain: "fraud",
    label: "Fraud Detection",
    to: "/projects",
    color: "from-red-500 to-rose-500"
  }, {
    domain: "data-analytics",
    label: "تحلیل داده و BI",
    to: "/projects",
    color: "from-emerald-500 to-cyan-500"
  }, {
    domain: "forecasting",
    label: "پیش‌بینی و Forecasting",
    to: "/projects",
    color: "from-amber-500 to-yellow-500"
  }, {
    domain: "chatbot",
    label: "چت‌بات و دستیار",
    to: "/apps",
    color: "from-fuchsia-500 to-pink-500"
  }, {
    domain: "agriculture",
    label: "هوش مصنوعی کشاورزی",
    to: "/apps",
    color: "from-green-500 to-emerald-500"
  }, {
    domain: "iot-smart-city",
    label: "IoT و شهر هوشمند",
    to: "/projects",
    color: "from-sky-500 to-indigo-500"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "حوزه‌های تخصصی" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-black md:text-5xl", children: [
        "تخصص ما در ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "مرز دانش" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-muted-foreground", children: "روی هر حوزه کلیک کنید تا پروژه‌ها و اپلیکیشن‌های مرتبط با آن را مستقیماً ببینید." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:scale-[1.03]", children: [
          "همه پروژه‌ها ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apps", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10", children: "همه اپلیکیشن‌ها" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-6 rounded-3xl bg-[conic-gradient(from_120deg,rgba(251,191,36,0.10),rgba(99,102,241,0.10),rgba(14,165,233,0.10),rgba(251,191,36,0.10))] blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card/40 p-5 backdrop-blur md:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 14
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.025
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: it.to, search: {
        domain: it.domain
      }, className: "group relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${it.color} text-white shadow-lg`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br ${it.color} opacity-0 blur-xl transition group-hover:opacity-60` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex-1 text-[13px] font-bold leading-5 text-foreground/90 transition group-hover:text-primary", children: it.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" })
      ] }) }, it.label)) })
    ] })
  ] }) }) });
}
function Process() {
  const steps = [{
    icon: Sparkles,
    title: "مشاوره و تحلیل",
    desc: "بررسی دقیق نیاز شما و طراحی نقشه راه پروژه."
  }, {
    icon: Workflow,
    title: "طراحی راهکار",
    desc: "انتخاب بهترین الگوریتم و معماری متناسب با مسئله."
  }, {
    icon: CodeXml,
    title: "پیاده‌سازی",
    desc: "توسعه و آموزش مدل با کیفیت کد حرفه‌ای."
  }, {
    icon: Zap,
    title: "تحویل و پشتیبانی",
    desc: "تحویل کامل با مستندات و پشتیبانی پس از تحویل."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "فرایند همکاری" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-black md:text-5xl", children: [
        "مسیر ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "حرفه‌ای" }),
        " اجرای پروژه"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 grid gap-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" }),
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.12
      }, className: "relative text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-bold text-primary border border-primary/50", children: i + 1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title))
    ] })
  ] }) });
}
function Audiences() {
  const items = [{
    icon: GraduationCap,
    title: "دانشجویان",
    desc: "پایان‌نامه، پروپوزال، پروژه‌های درسی، مقالات ISI و کنفرانس.",
    tag: "دانشگاهی"
  }, {
    icon: Building2,
    title: "شرکت‌های خصوصی",
    desc: "اتوماسیون هوشمند، چت‌بات، پیش‌بینی فروش، تحلیل مشتری.",
    tag: "کسب‌وکار"
  }, {
    icon: Factory,
    title: "صنعت و دولت",
    desc: "پروژه‌های مقیاس بزرگ، کنترل کیفیت، نگهداری پیش‌بینانه، زیرساخت AI.",
    tag: "سازمانی"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "برای چه کسانی" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-black md:text-5xl", children: [
        "خدمات ما برای ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "همه" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-6 top-6 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: it.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-bold", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 leading-7 text-muted-foreground", children: it.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary", children: [
        "شروع همکاری ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 transition group-hover:-translate-x-1" })
      ] })
    ] }, it.title)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-card via-card/80 to-card p-12 md:p-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background-image:radial-gradient(circle_at_center,oklch(0.82_0.14_85/0.08),transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mx-auto h-10 w-10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-3xl font-black md:text-5xl", children: [
        "آماده‌اید پروژه‌تان را ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "شروع کنید؟" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "همین حالا با تیم تخصصی ATiLLAi تماس بگیرید و مشاوره رایگان دریافت کنید." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
          "ثبت سفارش رایگان ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-7 py-4 text-base font-semibold backdrop-blur hover:bg-white/10", children: "نمونه پروژه‌ها" })
      ] })
    ] })
  ] }) }) });
}
export {
  Home as component
};
