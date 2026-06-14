import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as Route, j as getAppBySlug, b as APPS, k as getGalleryOverride, l as getGalleryMultiOverride, m as getGalleryAltOverride, g as getLuxuryGalleryImage, B as BackButton } from "./router-On6b4iSk.mjs";
import { g as getCategoryContent, a as getScreenKinds, M as MockScreen, S as ScreenCarousel } from "./screen-kinds-OEEwkvCH.mjs";
import { A as AutoCover } from "./auto-cover-CCi1w6Jo.mjs";
import { t as telegramBuyLink, T as TELEGRAM_URL } from "./telegram-B1WC_9Ai.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { aC as Star, V as Send, v as Smartphone, q as ChartColumn, J as Sparkles, al as CircleCheck, ar as Layers, z as BookOpen, ax as ExternalLink, a3 as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function AppDetailPage() {
  const {
    slug
  } = Route.useLoaderData();
  const a = getAppBySlug(slug);
  const Icon = a.icon;
  const others = APPS.filter((x) => x.slug !== a.slug && x.cat === a.cat).slice(0, 3);
  const cc = getCategoryContent(a.cat);
  const galleryOverride = getGalleryOverride(a.slug);
  const galleryMulti = getGalleryMultiOverride(a.slug);
  const galleryAlts = getGalleryAltOverride(a.slug);
  const luxuryImage = galleryOverride ?? getLuxuryGalleryImage(a.slug, a.cat, "app");
  const screensSource = galleryMulti ? a.screens.concat(a.screens).concat(a.screens).slice(0, galleryMulti.length) : galleryOverride ? a.screens.slice(0, 1) : a.screens;
  const kinds = getScreenKinds(a.slug, screensSource.length);
  const baseScreens = screensSource.map((s, i) => ({
    ...s,
    tag: `Screen ${i + 1}`,
    kind: kinds[i]
  }));
  const carouselScreens = baseScreens.map((s, idx) => ({
    ...s,
    coverImage: galleryMulti ? galleryMulti[idx] : luxuryImage,
    coverAlt: galleryAlts?.[idx] ?? `${a.title} — ${s.title}`
  }));
  const buyLink = telegramBuyLink(`خرید اپلیکیشن ${a.title}`);
  const customLink = telegramBuyLink(`سفارش اپ سفارشی شبیه ${a.title}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${a.color} opacity-20 blur-3xl` }),
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
      }, className: "relative grid gap-10 overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:grid-cols-[1.2fr_1fr] md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${a.color} opacity-30 blur-3xl` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: a.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-black leading-tight md:text-5xl", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-9 text-muted-foreground", children: a.longDesc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-amber-400", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mr-2", children: "رتبه‌بندی توسعه‌دهنده ۴.۹/۵" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buyLink, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
              " خرید اپلیکیشن"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: customLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: "سفارش نسخه اختصاصی" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "خرید و قرارداد مستقیم در تلگرام — بدون درگاه پرداخت." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MockScreen, { title: a.title, subtitle: a.short, icon: Icon, color: a.color, variant: "phone" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl border border-border shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoCover, { Icon, color: a.color, title: a.title, tag: "Signature · 4K", height: "h-72 md:h-96", variant: "hero", image: luxuryImage }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Smartphone, eyebrow: "محیط اپلیکیشن", title: "گالری زنده اپ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenCarousel, { screens: carouselScreens, icon: Icon, color: a.color }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: ChartColumn, eyebrow: "نمونه خروجی", title: "عملکرد واقعی اپ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cc.outputs.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${a.color} opacity-20 blur-2xl` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-primary", children: o.metric }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-black text-gradient-gold", children: o.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs leading-6 text-muted-foreground", children: o.note })
      ] }, o.metric)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Sparkles, eyebrow: "ویژگی‌ها", title: "قابلیت‌های کلیدی اپ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: a.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-7", children: f })
      ] }, f)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Layers, eyebrow: "تکنولوژی", title: "Stack اپلیکیشن", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: a.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary/10 hover:text-primary", children: t }, t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: BookOpen, eyebrow: "Latest Articles", title: `آخرین مقالات در حوزه ${a.cat}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: cc.articles.slice(0, 5).map((art, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: art.href, target: "_blank", rel: "noopener noreferrer", initial: {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black md:text-4xl", children: "این اپ را می‌خواهید؟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "نسخه آماده یا سفارشی شده برند خودتان، مستقیم در تلگرام." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: buyLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
            " خرید + قرارداد"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TELEGRAM_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/10", children: "ارتباط مستقیم" })
        ] })
      ] }),
      others.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Smartphone, eyebrow: "اپ‌های مشابه", title: `بیشتر در ${a.cat}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: others.map((o) => {
        const OIcon = o.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/apps/$slug", params: {
          slug: o.slug
        }, className: "group rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${o.color} text-white`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-sm font-bold leading-7", children: o.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground line-clamp-2", children: o.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-xs text-primary", children: [
            "ادامه مطلب ",
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
  AppDetailPage as component
};
