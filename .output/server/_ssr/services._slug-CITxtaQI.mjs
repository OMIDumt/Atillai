import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as Route$3, d as getServiceBySlug, S as SERVICE_DETAILS, e as getServiceExtras, B as BackButton } from "./router-On6b4iSk.mjs";
import { t as telegramBuyLink } from "./telegram-B1WC_9Ai.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a3 as ArrowLeft, J as Sparkles, al as CircleCheck, ad as Rocket, ar as Layers, ae as Workflow, as as Package, T as TrendingUp, av as Newspaper, aw as CircleQuestionMark, V as Send } from "../_libs/lucide-react.mjs";
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
function ServiceDetailPage() {
  const {
    slug
  } = Route$3.useLoaderData();
  const service = getServiceBySlug(slug);
  const Icon = service.icon;
  const others = SERVICE_DETAILS.filter((s) => s.slug !== service.slug).slice(0, 4);
  const extras = getServiceExtras(service.slug);
  const orderLink = telegramBuyLink(`سفارش خدمت ${service.title}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-3xl` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-10 backdrop-blur md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${service.color} opacity-30 blur-3xl` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-white shadow-glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-10 w-10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 block text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "خدمت تخصصی" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl font-black md:text-6xl", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl text-gradient-gold font-bold", children: service.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-3xl text-lg leading-9 text-muted-foreground", children: service.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
              "دریافت مشاوره رایگان",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 transition group-hover:-translate-x-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: "مشاهده نمونه پروژه‌ها" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Sparkles, title: "ویژگی‌های کلیدی", eyebrow: "آنچه ارائه می‌دهیم", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: service.features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, className: "flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-7", children: f })
      ] }, f)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Rocket, title: "کاربردهای واقعی", eyebrow: "چه چیزی می‌سازیم", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: service.useCases.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, whileHover: {
        y: -6
      }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition group-hover:opacity-40` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative text-lg font-bold", children: u.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-7 text-muted-foreground", children: u.desc })
      ] }, u.title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Layers, title: "تکنولوژی‌های ما", eyebrow: "ابزارها", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: service.technologies.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
        opacity: 0,
        scale: 0.8
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.04
      }, className: "glass rounded-full px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-primary/10 hover:text-primary", children: t }, t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Workflow, title: "فرایند اجرا", eyebrow: "چطور پیش می‌رویم", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: service.process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-black text-gradient-gold opacity-30", children: [
          "۰",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-bold", children: p.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: p.desc })
      ] }, p.step)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Package, title: "تحویل نهایی", eyebrow: "چه دریافت می‌کنید", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: service.deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
        d
      ] }, d)) }) }),
      extras && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: TrendingUp, title: "ترندهای روز این حوزه", eyebrow: "۱۴۰۴", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: extras.trends.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: "flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-5 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-7", children: t })
        ] }, t)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Newspaper, title: "مقالات و منابع اخیر", eyebrow: "به‌روز در این زمینه", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: extras.articles.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.08
        }, whileHover: {
          y: -6
        }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition group-hover:opacity-40` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-bold text-primary", children: a.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-4 text-base font-bold leading-7", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm leading-7 text-muted-foreground", children: a.summary })
        ] }, a.title)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: CircleQuestionMark, title: "پرسش‌های پرتکرار", eyebrow: "FAQ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: extras.faq.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-5 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: f.a })
        ] }, f.q)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { icon: Sparkles, title: "سایر خدمات مرتبط", eyebrow: "بیشتر کاوش کنید", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: others.map((o) => {
        const OIcon = o.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
          slug: o.slug
        }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${o.color} text-white`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-sm font-bold", children: o.title })
        ] }, o.slug);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mt-20 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 to-amber-600/10 p-10 text-center backdrop-blur md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black md:text-4xl", children: "آماده شروع پروژه هستید؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "سفارش مستقیم در تلگرام — بدون درگاه پرداخت." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: orderLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
            " سفارش و قرارداد در تلگرام"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: [
            "تماس با کارشناسان ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function SectionBlock({
  icon: Icon,
  eyebrow,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.6
  }, className: "mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-primary", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black md:text-3xl", children: title })
      ] })
    ] }),
    children
  ] });
}
export {
  ServiceDetailPage as component
};
