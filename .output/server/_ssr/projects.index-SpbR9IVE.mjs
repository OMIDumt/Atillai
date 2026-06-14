import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$5, P as PROJECTS, B as BackButton, g as getLuxuryGalleryImage } from "./router-On6b4iSk.mjs";
import { A as AutoCover } from "./auto-cover-CCi1w6Jo.mjs";
import { t as telegramBuyLink } from "./telegram-B1WC_9Ai.mjs";
import { g as getDomain, f as filterProjectSlugs, D as DOMAINS } from "./domains-CZH1dRsl.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { X, F as Factory, m as GraduationCap, H as HeartPulse, L as Landmark, c as ShoppingCart, b as Banknote, a3 as ArrowLeft, V as Send } from "../_libs/lucide-react.mjs";
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
const CATS = [{
  icon: Factory,
  name: "صنعتی",
  count: 120,
  color: "from-orange-500 to-red-500"
}, {
  icon: GraduationCap,
  name: "دانشگاهی",
  count: 230,
  color: "from-purple-500 to-indigo-500"
}, {
  icon: HeartPulse,
  name: "پزشکی",
  count: 64,
  color: "from-pink-500 to-rose-500"
}, {
  icon: Landmark,
  name: "دولتی",
  count: 41,
  color: "from-amber-500 to-yellow-500"
}, {
  icon: ShoppingCart,
  name: "تجاری",
  count: 85,
  color: "from-emerald-500 to-teal-500"
}, {
  icon: Banknote,
  name: "مالی و بانکی",
  count: 38,
  color: "from-cyan-500 to-blue-500"
}];
function ProjectsPage() {
  const {
    domain
  } = Route$5.useSearch();
  const activeDomain = getDomain(domain);
  const allow = filterProjectSlugs(domain);
  const list = allow ? PROJECTS.filter((p) => allow.has(p.slug)) : PROJECTS;
  const projectDomains = DOMAINS.filter((d) => d.projects.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.7
    }, className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "پرتفولیو" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl font-black md:text-6xl", children: [
        "نمونه ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "پروژه‌های" }),
        " ما"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "بیش از ۱٬۰۰۰ پروژه موفق در حوزه‌های مختلف. روی هر پروژه کلیک کنید تا جزئیات، تصاویر محیط و امکان خرید کد کامل را ببینید." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", search: {
        domain: void 0
      }, className: `rounded-full border px-4 py-1.5 text-xs font-bold transition ${!activeDomain ? "border-primary/60 bg-primary/15 text-primary" : "border-border bg-white/5 text-muted-foreground hover:bg-white/10"}`, children: "همه پروژه‌ها" }),
      projectDomains.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", search: {
        domain: d.slug
      }, className: `rounded-full border px-4 py-1.5 text-xs font-bold transition ${activeDomain?.slug === d.slug ? "border-primary/60 bg-primary/15 text-primary" : "border-border bg-white/5 text-muted-foreground hover:bg-white/10"}`, children: d.label }, d.slug))
    ] }),
    activeDomain && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mt-6 mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: "حوزه فعال:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: activeDomain.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "(",
        list.length,
        " پروژه)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", search: {
        domain: void 0
      }, className: "ms-auto inline-flex items-center gap-1 rounded-lg border border-border bg-white/5 px-2 py-1 text-xs text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
        " پاک کردن"
      ] })
    ] }),
    !activeDomain && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6", children: CATS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.06
    }, whileHover: {
      y: -4
    }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 text-center backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-2xl font-black text-gradient-gold", children: [
        "+",
        c.count
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.name })
    ] }, c.name)) }),
    list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded-3xl border border-border bg-card/40 p-12 text-center text-muted-foreground", children: "هنوز پروژه‌ای برای این حوزه ثبت نشده. به‌زودی اضافه می‌شود." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: list.map((p, i) => {
      const Icon = p.icon;
      const buy = telegramBuyLink(`خرید کد کامل پروژه ${p.title}`);
      const cover = getLuxuryGalleryImage(p.slug, p.cat, "project");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.04
      }, whileHover: {
        y: -6
      }, className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
          slug: p.slug
        }, "aria-label": `مشاهده جزئیات ${p.title}`, className: "absolute inset-0 z-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoCover, { Icon, color: p.color, title: p.title, tag: p.cat, height: "h-48", image: cover }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-0 blur-3xl transition group-hover:opacity-50` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none relative z-10 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pointer-events-none relative z-10 mt-4 text-lg font-bold leading-7", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pointer-events-none relative z-10 mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground", children: p.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none relative z-10 mt-4 flex flex-wrap gap-2", children: p.tech.slice(0, 4).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 mt-auto pt-5 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
              slug: p.slug
            }, className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary/20", children: [
              "اطلاعات بیشتر ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buy, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-amber-600 px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:scale-[1.03]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
              " خرید کد"
            ] })
          ] })
        ] })
      ] }, p.slug);
    }) })
  ] }) });
}
export {
  ProjectsPage as component
};
