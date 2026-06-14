import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as Route$2, h as getProjectBySlug, P as PROJECTS, g as getLuxuryGalleryImage, B as BackButton } from "./router-On6b4iSk.mjs";
import { g as getCategoryContent, a as getScreenKinds, S as ScreenCarousel } from "./screen-kinds-OEEwkvCH.mjs";
import { A as AutoCover } from "./auto-cover-CCi1w6Jo.mjs";
import { t as telegramBuyLink, T as TELEGRAM_URL } from "./telegram-B1WC_9Ai.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { V as Send, J as Sparkles, q as ChartColumn, a5 as Target, T as TrendingUp, al as CircleCheck, ar as Layers, z as BookOpen, ax as ExternalLink, a3 as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
function ProjectDetailPage() {
  const {
    slug
  } = Route$2.useLoaderData();
  const p = getProjectBySlug(slug);
  const Icon = p.icon;
  const others = PROJECTS.filter((x) => x.slug !== p.slug && x.cat === p.cat).slice(0, 3);
  const cc = getCategoryContent(p.cat);
  const kinds = getScreenKinds(p.slug, p.screens.length);
  const luxuryImage = getLuxuryGalleryImage(p.slug, p.cat, "project");
  const baseScreens = p.screens.map((s, i) => ({
    ...s,
    tag: `Screen ${i + 1}`,
    kind: kinds[i]
  }));
  const carouselScreens = baseScreens.map((s) => ({
    ...s,
    coverImage: luxuryImage
  }));
  const buyLink = telegramBuyLink(`کد کامل پروژه ${p.title}`);
  const consultLink = telegramBuyLink(`مشاوره درباره پروژه ${p.title}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-3xl` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-black leading-tight md:text-5xl", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-9 text-muted-foreground", children: p.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buyLink, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
                " خرید کد کامل پروژه"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: consultLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: "مشاوره و قرارداد" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "دکمه‌ها به تلگرام شما متصل می‌شوند — بدون درگاه پرداخت، توافق مستقیم و امن." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${p.color} text-white shadow-glow md:h-32 md:w-32`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-12 w-12 md:h-16 md:w-16" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl border border-border shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoCover, { Icon, color: p.color, title: p.title, tag: "Signature · 4K", height: "h-72 md:h-96", variant: "hero", image: luxuryImage }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Sparkles, eyebrow: "گالری محیط پروژه", title: "پیش‌نمایش زنده محصول", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenCarousel, { screens: carouselScreens, icon: Icon, color: p.color }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: ChartColumn, eyebrow: "نمونه خروجی", title: "معیارهای کلیدی پروژه", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cc.outputs.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-primary", children: o.metric }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-black text-gradient-gold", children: o.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs leading-6 text-muted-foreground", children: o.note })
      ] }, o.metric)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Target, eyebrow: "مسئله و راه‌حل", title: "چه چالشی را حل کردیم", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-7 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.25em] text-rose-400", children: "مسئله" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-8 text-foreground", children: p.problem })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-primary/5 p-7 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.25em] text-primary", children: "راه‌حل" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-8 text-foreground", children: p.solution })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: TrendingUp, eyebrow: "دستاوردها", title: "نتایج واقعی پروژه", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: p.results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: `relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.color} p-6 text-white shadow-xl`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-bold leading-7", children: r })
      ] }, r)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Sparkles, eyebrow: "قابلیت‌ها", title: "آنچه پروژه ارائه می‌دهد", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-7", children: f })
      ] }, f)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Layers, eyebrow: "تکنولوژی‌ها", title: "Stack استفاده‌شده", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary/10 hover:text-primary", children: t }, t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: BookOpen, eyebrow: "Latest Articles", title: `آخرین مقالات در حوزه ${p.cat}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: cc.articles.slice(0, 5).map((art, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: art.href, target: "_blank", rel: "noopener noreferrer", initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.06
      }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary", children: art.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-muted-foreground", children: art.year })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-base font-bold leading-7 transition group-hover:text-primary", children: art.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: art.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" })
        ] })
      ] }, art.title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mt-16 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 to-amber-600/10 p-10 text-center backdrop-blur md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black md:text-4xl", children: "به این پروژه نیاز دارید؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "کد کامل، مستندات و پشتیبانی پیاده‌سازی، مستقیم در تلگرام." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buyLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
            " خرید کد + قرارداد"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TELEGRAM_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: "ارتباط مستقیم با مدیر فنی" })
        ] })
      ] }),
      others.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Sparkles, eyebrow: "پروژه‌های مشابه", title: `بیشتر در حوزه ${p.cat}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: others.map((o) => {
        const OIcon = o.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
          slug: o.slug
        }, className: "group rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${o.color} text-white`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-sm font-bold leading-7", children: o.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-xs text-primary", children: [
            "مشاهده ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" })
          ] })
        ] }, o.slug);
      }) }) })
    ] })
  ] });
}
function Section({
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
  }, className: "mt-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
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
  ProjectDetailPage as component
};
