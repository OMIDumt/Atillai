import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { J as Sparkles } from "../_libs/lucide-react.mjs";
function AutoCover({
  Icon,
  color,
  title,
  tag,
  className = "",
  height = "h-44",
  variant = "card",
  image
}) {
  const isHero = variant === "hero";
  const [imgFailed, setImgFailed] = reactExports.useState(false);
  const showImage = !!image && !imgFailed;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${height} w-full overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.18_0.04_265),oklch(0.08_0.02_265))]" }),
    showImage && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: image,
          alt: title ?? "AI cover",
          loading: "lazy",
          decoding: "async",
          onError: () => setImgFailed(true),
          className: "absolute inset-0 h-full w-full object-cover object-center opacity-95 transition duration-700 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,transparent,rgba(0,0,0,0.45)_70%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -inset-20 bg-gradient-to-br ${color} ${showImage ? "opacity-20" : "opacity-40"} blur-3xl` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -inset-16 bg-[conic-gradient(from_120deg,rgba(251,191,36,0.22),rgba(99,102,241,0.18),rgba(14,165,233,0.18),rgba(251,191,36,0.22))] ${showImage ? "opacity-30" : "opacity-60"} blur-3xl` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:18px_18px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-300/25"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: -360 },
        transition: { duration: 28, repeat: Infinity, ease: "linear" },
        className: "absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
      }
    ),
    [
      { x: 14, y: 22 },
      { x: 84, y: 18 },
      { x: 22, y: 78 },
      { x: 78, y: 80 },
      { x: 50, y: 12 },
      { x: 8, y: 50 },
      { x: 92, y: 56 }
    ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "absolute h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_8px_2px_rgba(251,191,36,0.55)]",
        style: { left: `${s.x}%`, top: `${s.y}%` },
        animate: { opacity: [0.15, 1, 0.15], scale: [0.6, 1.3, 0.6] },
        transition: { duration: 2.4 + i * 0.2, repeat: Infinity, delay: i * 0.25 }
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 flex items-center justify-center ${showImage ? "opacity-0" : "opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -inset-8 rounded-full bg-gradient-to-br ${color} opacity-50 blur-2xl` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex ${isHero ? "h-28 w-28" : "h-20 w-20"} items-center justify-center rounded-3xl bg-gradient-to-br ${color} text-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/20`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: isHero ? "h-14 w-14" : "h-10 w-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                className: "pointer-events-none absolute inset-0 rounded-3xl",
                animate: { opacity: [0, 0.5, 0] },
                transition: { duration: 3, repeat: Infinity },
                style: { background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-background shadow-glow ring-2 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ) }),
    tag && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 top-3 flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300 ring-1 ring-emerald-400/40", children: "LIVE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-bold text-white/80 ring-1 ring-white/15", children: tag })
    ] }),
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-3 bottom-3 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] line-clamp-2", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card via-card/30 to-transparent" })
  ] });
}
export {
  AutoCover as A
};
