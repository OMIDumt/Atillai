import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as Route$4, b as APPS, B as BackButton, g as getLuxuryGalleryImage } from "./router-On6b4iSk.mjs";
import { A as AutoCover } from "./auto-cover-CCi1w6Jo.mjs";
import { t as telegramBuyLink } from "./telegram-B1WC_9Ai.mjs";
import { g as getDomain, a as filterAppSlugs, D as DOMAINS } from "./domains-CZH1dRsl.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { v as Smartphone, a3 as ArrowLeft, J as Sparkles, d as Bot, ar as Layers, ad as Rocket, as as Package, Z as Zap, B as Brain, ac as Cpu, t as CodeXml, x as Cloud, r as Database, at as Boxes, au as Shield, X, V as Send, al as CircleCheck } from "../_libs/lucide-react.mjs";
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
const FEATURES = [{
  icon: Sparkles,
  title: "طراحی UI/UX لوکس",
  desc: "رابط کاربری مدرن، انیمیشن حرفه‌ای و تجربه کاربری بی‌نقص."
}, {
  icon: Bot,
  title: "هسته هوش مصنوعی",
  desc: "ادغام مدل‌های Vision، NLP و LLM به صورت On-Device یا Cloud."
}, {
  icon: Smartphone,
  title: "Native و Cross-Platform",
  desc: "اپ Native اندروید/iOS و کراس‌پلتفرم Flutter و React Native."
}, {
  icon: Layers,
  title: "بک‌اند مقیاس‌پذیر",
  desc: "API حرفه‌ای، Database ابری و Realtime Sync."
}, {
  icon: Rocket,
  title: "انتشار در استورها",
  desc: "ثبت و انتشار در Google Play و App Store."
}, {
  icon: Package,
  title: "پشتیبانی پس از تحویل",
  desc: "آپدیت، رفع باگ و توسعه فیچر برای ۶ ماه رایگان."
}];
const TECH_GROUPS = [{
  icon: Brain,
  label: "AI / ML Frameworks",
  color: "from-fuchsia-500 to-purple-600",
  items: ["PyTorch", "TensorFlow", "JAX", "Keras", "Hugging Face", "LangChain", "LlamaIndex", "OpenAI SDK"]
}, {
  icon: Cpu,
  label: "On-Device & Edge AI",
  color: "from-amber-500 to-orange-600",
  items: ["TensorFlow Lite", "Core ML", "ONNX Runtime", "MediaPipe", "MLC LLM", "WebGPU", "NPU/Neural Engine", "CUDA / TensorRT"]
}, {
  icon: Smartphone,
  label: "Mobile & Cross-Platform",
  color: "from-sky-500 to-cyan-600",
  items: ["Swift / SwiftUI", "Kotlin / Jetpack Compose", "Flutter", "React Native", "Expo", "Capacitor"]
}, {
  icon: CodeXml,
  label: "Frontend & Web",
  color: "from-emerald-500 to-teal-600",
  items: ["Next.js", "React", "TypeScript", "TanStack Start", "Tailwind CSS", "Framer Motion", "Three.js"]
}, {
  icon: Cloud,
  label: "Backend & APIs",
  color: "from-indigo-500 to-blue-600",
  items: ["Node.js", "FastAPI", "Go", "Rust", "GraphQL", "gRPC", "WebSockets", "tRPC"]
}, {
  icon: Database,
  label: "Data & Vector DBs",
  color: "from-rose-500 to-pink-600",
  items: ["PostgreSQL", "Supabase", "Firebase", "Redis", "MongoDB", "pgvector", "Pinecone", "Qdrant", "ClickHouse"]
}, {
  icon: Boxes,
  label: "Cloud & DevOps",
  color: "from-violet-500 to-indigo-600",
  items: ["AWS", "GCP", "Azure", "Cloudflare", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
}, {
  icon: Shield,
  label: "Security & Observability",
  color: "from-slate-400 to-slate-600",
  items: ["OAuth 2.0", "JWT", "RLS", "Sentry", "OpenTelemetry", "Grafana", "Datadog"]
}];
function AppsPage() {
  const {
    domain
  } = Route$4.useSearch();
  const activeDomain = getDomain(domain);
  const allow = filterAppSlugs(domain);
  const list = allow ? APPS.filter((a) => allow.has(a.slug)) : APPS;
  const appDomains = DOMAINS.filter((d) => d.apps.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-secondary/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, className: "relative mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-10 w-10" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 block text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "App Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-4xl font-black md:text-6xl", children: [
          "ساخت ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "اپلیکیشن‌های" }),
          " هوشمند"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg leading-9 text-muted-foreground", children: [
          "از ایده تا انتشار در استورها — اپلیکیشن‌های پزشکی، حقوقی، آموزشی و تجاری با هسته هوش مصنوعی، طراحی Premium و کیفیت Enterprise. روی هر اپ کلیک کنید تا",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold font-bold", children: " جزئیات، تصاویر و امکان خرید" }),
          " را ببینید."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
          "ثبت سفارش اپلیکیشن ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 transition group-hover:-translate-x-1" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.07
      }, whileHover: {
        y: -6
      }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: f.desc })
      ] }, f.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "relative mt-20 overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-8 backdrop-blur-xl md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.3em] text-primary", children: "Enterprise Tech Stack" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-3xl font-black md:text-5xl", children: [
            "زیرساخت ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "حرفه‌ای" }),
            " ما"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base", children: "منتخبی از بهترین فریم‌ورک‌ها، ابزارها و پلتفرم‌های روز دنیا — از مدل‌های هوش مصنوعی و Edge AI تا زیرساخت ابری، Vector Database و امنیت سازمانی. هر پروژه با مدرن‌ترین Stack صنعتی ساخته می‌شود." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-12 grid gap-5 md:grid-cols-2", children: TECH_GROUPS.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.06
        }, whileHover: {
          y: -4
        }, className: "group relative overflow-hidden rounded-2xl border border-border bg-background/40 p-6 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${g.color} opacity-0 blur-3xl transition group-hover:opacity-40` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-lg ring-1 ring-white/15`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-foreground/90", children: g.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-5 flex flex-wrap gap-2", children: g.items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-foreground/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary", children: t }, t)) })
        ] }, g.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-background/30 p-6 backdrop-blur md:grid-cols-4", children: [{
          k: "+50",
          v: "تکنولوژی فعال"
        }, {
          k: "+500",
          v: "پروژه تحویل‌شده"
        }, {
          k: "99.9٪",
          v: "SLA پایداری"
        }, {
          k: "24/7",
          v: "پشتیبانی فنی"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-gradient-gold md:text-3xl", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.v })
        ] }, s.v)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "پرتفولیو اپلیکیشن" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-black md:text-5xl", children: [
            "نمونه ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "اپ‌های" }),
            " ما"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "منتخبی از اپلیکیشن‌های هوشمند پزشکی، حقوقی، آموزشی و تجاری." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apps", search: {
            domain: void 0
          }, className: `rounded-full border px-4 py-1.5 text-xs font-bold transition ${!activeDomain ? "border-primary/60 bg-primary/15 text-primary" : "border-border bg-white/5 text-muted-foreground hover:bg-white/10"}`, children: "همه اپ‌ها" }),
          appDomains.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apps", search: {
            domain: d.slug
          }, className: `rounded-full border px-4 py-1.5 text-xs font-bold transition ${activeDomain?.slug === d.slug ? "border-primary/60 bg-primary/15 text-primary" : "border-border bg-white/5 text-muted-foreground hover:bg-white/10"}`, children: d.label }, d.slug))
        ] }),
        activeDomain && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: "حوزه فعال:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: activeDomain.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "(",
            list.length,
            " اپلیکیشن)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apps", search: {
            domain: void 0
          }, className: "ms-auto inline-flex items-center gap-1 rounded-lg border border-border bg-white/5 px-2 py-1 text-xs text-muted-foreground hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
            " پاک کردن"
          ] })
        ] }),
        list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 rounded-3xl border border-border bg-card/40 p-12 text-center text-muted-foreground", children: "هنوز اپلیکیشنی برای این حوزه ثبت نشده. به‌زودی اضافه می‌شود." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: list.map((a, i) => {
          const Icon = a.icon;
          const buy = telegramBuyLink(`خرید اپلیکیشن ${a.title}`);
          const cover = getLuxuryGalleryImage(a.slug, a.cat, "app");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
            opacity: 0,
            y: 40
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.05
          }, whileHover: {
            y: -8
          }, className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apps/$slug", params: {
              slug: a.slug
            }, "aria-label": `مشاهده جزئیات ${a.title}`, className: "absolute inset-0 z-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoCover, { Icon, color: a.color, title: a.title, tag: a.cat, height: "h-48", image: cover }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-1 flex-col p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${a.color} opacity-0 blur-3xl transition group-hover:opacity-40` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-white shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none relative z-10 mt-5 inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: a.cat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pointer-events-none relative z-10 mt-3 text-lg font-bold", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pointer-events-none relative z-10 mt-2 text-sm leading-7 text-muted-foreground line-clamp-3", children: a.short }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none relative z-10 mt-4 flex flex-wrap gap-2", children: a.tech.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground", children: t }, t)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 mt-auto pt-5 flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apps/$slug", params: {
                  slug: a.slug
                }, className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary/20", children: [
                  "اطلاعات بیشتر ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buy, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-amber-600 px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:scale-[1.03]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  " خرید"
                ] })
              ] })
            ] })
          ] }, a.slug);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mt-20 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 to-amber-600/10 p-10 text-center backdrop-blur md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-12 w-12 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl font-black md:text-4xl", children: "ایده اپ خود را با ما در میان بگذارید" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "جلسه مشاوره رایگان ۳۰ دقیقه‌ای با کارشناسان ATiLLAi." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
          "شروع پروژه ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AppsPage as component
};
