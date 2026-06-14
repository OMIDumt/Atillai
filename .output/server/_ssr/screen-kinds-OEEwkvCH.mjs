import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { ay as LayoutGrid, az as GalleryHorizontalEnd, a2 as Tag, aA as ChevronRight, aB as ChevronLeft, a3 as ArrowLeft, ag as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
function MockScreen({ title, subtitle, icon: Icon, color, variant = "dashboard" }) {
  if (variant === "phone") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[2rem] border-[6px] border-black/70 bg-black shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${color} opacity-90` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col items-center justify-center px-4 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-black leading-tight", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] opacity-80", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-6 rounded-full bg-white/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-3 rounded-full bg-white/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-3 rounded-full bg-white/40" })
        ] })
      ] })
    ] });
  }
  if (variant === "card") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 shadow-xl`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col justify-between text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-black leading-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs opacity-80", children: subtitle })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${color} opacity-25` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto rounded bg-white/10 px-3 py-0.5 text-[10px] text-white/60", children: "atil.ai/app" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-[calc(100%-2rem)] grid-cols-[60px_1fr] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 border-l border-white/10 bg-black/40 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-6 rounded bg-white/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-6 rounded bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-6 rounded bg-white/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-70", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 rounded bg-gradient-to-br ${color} opacity-80` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 rounded bg-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 rounded bg-white/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex h-12 items-end gap-1", children: [35, 60, 45, 80, 55, 90, 70, 50].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: `${h}%` }, className: `flex-1 rounded-t bg-gradient-to-t ${color} opacity-80` }, i)) })
      ] })
    ] })
  ] });
}
function DomainScreen({ kind, color, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Frame, { color, title, subtitle, kind, children: render(kind) });
}
function render(kind) {
  switch (kind) {
    case "mammography":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Mammography, {});
    case "mri-brain":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MRIBrain, {});
    case "retina":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Retina, {});
    case "ecg":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ECG, {});
    case "vitals":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Vitals, {});
    case "skin-scan":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SkinScan, {});
    case "dental-xray":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DentalXRay, {});
    case "pill":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PillID, {});
    case "pediatric-bot":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PediatricBot, {});
    case "mental-mood":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MentalMood, {});
    case "defect-grid":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DefectGrid, {});
    case "vibration":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Vibration, {});
    case "ppe-cctv":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PPECctv, {});
    case "weld-xray":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(WeldXRay, {});
    case "fraud-graph":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FraudGraph, {});
    case "recommender":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Recommender, {});
    case "city-traffic":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CityTraffic, {});
    case "bayes-chart":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BayesChart, {});
    case "llm-train":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LLMTrain, {});
    case "chat-rtl":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatRTL, {});
    case "legal-doc":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LegalDoc, {});
    case "pose-tracking":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PoseTracking, {});
    case "tutor-quiz":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TutorQuiz, {});
    case "crm-pipeline":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CRMPipeline, {});
    case "map-tour":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(MapTour, {});
    case "plate-anpr":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PlateANPR, {});
    case "leaf-disease":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LeafDisease, {});
    case "stt-waveform":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(STTWave, {});
  }
}
function Frame({
  color,
  title,
  subtitle,
  kind,
  children
}) {
  const isPhone = kind === "skin-scan" || kind === "pediatric-bot" || kind === "mental-mood" || kind === "chat-rtl" || kind === "pose-tracking" || kind === "map-tour";
  if (isPhone) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-[2.2rem] border-[7px] border-black/80 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${color} opacity-30` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.18),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-12 bg-[conic-gradient(from_0deg,rgba(251,191,36,0.18),rgba(168,85,247,0.14),rgba(14,165,233,0.18),rgba(251,191,36,0.18))] opacity-40 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col p-3 pt-7 text-white", children: [
        title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-black leading-tight", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300 ring-1 ring-emerald-400/40", children: "LIVE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10", children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]" })
        ] }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[9px] opacity-70", children: subtitle })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d12] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${color} opacity-[0.22]` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(251,191,36,0.10),transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-16 bg-[conic-gradient(from_120deg,rgba(251,191,36,0.10),rgba(99,102,241,0.10),rgba(14,165,233,0.10),rgba(251,191,36,0.10))] opacity-50 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-1.5 border-b border-white/10 bg-black/50 px-3 py-2 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[10px] text-white/70 ring-1 ring-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }),
        "atil.ai · ",
        kind
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-amber-400/40 bg-amber-400/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-amber-300", children: "Pro" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[calc(100%-2rem)] p-3 text-white", children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-black tracking-wide", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300 ring-1 ring-emerald-400/40", children: "LIVE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold text-white/40", children: "v4.2" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[calc(100%-1.25rem)] overflow-hidden rounded-xl bg-black/50 ring-1 ring-white/10", children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(0deg,#fff_0px,#fff_1px,transparent_1px,transparent_3px)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" })
      ] })
    ] })
  ] });
}
function Mammography() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "breast", cx: "50%", cy: "55%", r: "55%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f4e1d4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#8a5b48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1a0f0c" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "lesion", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ff5d8f", stopOpacity: "0.9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#ffae00", stopOpacity: "0.45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ffae00", stopOpacity: "0" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#08060a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "200", cy: "120", rx: "140", ry: "95", fill: "url(#breast)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "245", cy: "100", rx: "40", ry: "28", fill: "url(#lesion)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "218", y: "80", width: "56", height: "42", fill: "none", stroke: "#ff3d71", strokeWidth: "1.5", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "222", y: "76", fill: "#ff3d71", fontSize: "9", fontWeight: "700", children: "malignant · 0.94" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "86", height: "56", rx: "6", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffcb5b", fontSize: "9", fontWeight: "800", children: "BI-RADS 4C" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#ddd", fontSize: "8", children: "ViT-L · GradCAM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "44", fill: "#9be29b", fontSize: "8", children: "AUC 0.97" })
    ] })
  ] });
}
function MRIBrain() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#04060a" }),
    [40, 165, 290].map((cx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: `b${i}`, cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#cfd6e0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "80%", stopColor: "#3a4654" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0c1018" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: cx + 50, cy: "110", rx: "55", ry: "70", fill: `url(#b${i})` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: `M${cx + 25} 90 Q${cx + 50} 60 ${cx + 75} 90 Q${cx + 70} 130 ${cx + 50} 150 Q${cx + 30} 130 ${cx + 25} 90Z`,
          fill: "none",
          stroke: "#5e6f86",
          strokeWidth: "0.8"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: cx + 60, cy: "100", rx: "14", ry: "10", fill: "#ff4d6d", opacity: "0.55" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: cx + 60, cy: "100", rx: "8", ry: "6", fill: "#ffd166", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx + 8, y: "190", fill: "#bcd3f5", fontSize: "9", fontWeight: "700", children: ["Axial", "Sagittal", "Coronal"][i] })
    ] }, cx)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "96", height: "44", rx: "6", fill: "rgba(0,0,0,0.6)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "nnU-Net 3D" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "Dice 0.91 · BraTS" })
    ] })
  ] });
}
function Retina() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "ret", cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffb74a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#a83a1a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1a0703" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#04030a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "180", cy: "110", r: "100", fill: "url(#ret)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "#5b0e0e", strokeWidth: "1.2", fill: "none", opacity: "0.85", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q150 60 100 50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q220 60 270 50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q140 160 100 180" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q230 160 280 180" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q165 90 130 95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M180 110 Q200 130 240 130" })
    ] }),
    [[150, 80, 4], [210, 130, 3], [155, 140, 3.5], [200, 75, 2.5], [170, 60, 2]].map(([x, y, r], i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r, fill: "#ffe66d", stroke: "#fff", strokeWidth: "0.6" }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(290,30)", children: ["No", "Mild", "Mod", "Severe", "PDR"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 30})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "10", fill: "#ddd", fontSize: "9", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "2", width: "60", height: "10", rx: "2", fill: "rgba(255,255,255,0.12)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: "40",
          y: "2",
          width: [10, 18, 52, 40, 22][i],
          height: "10",
          rx: "2",
          fill: i === 2 ? "#ff5d8f" : "#7ee8fa"
        }
      )
    ] }, t)) })
  ] });
}
function ECG() {
  const pts = [];
  for (let i = 0; i < 400; i++) {
    const x = i;
    const t = i % 80;
    let y = 110;
    if (t === 18) y = 100;
    else if (t === 20) y = 60;
    else if (t === 22) y = 140;
    else if (t === 24) y = 110;
    else if (t === 35) y = 100;
    else if (t === 38) y = 95;
    else if (t === 41) y = 110;
    else y = 110 + Math.sin(i / 4) * 1.5;
    pts.push(`${x},${y}`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#02100a" }),
    Array.from({ length: 22 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: i * 20, y1: "0", x2: i * 20, y2: "220", stroke: "#0e3a26", strokeWidth: "0.5" }, "v" + i)),
    Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: i * 20, x2: "400", y2: i * 20, stroke: "#0e3a26", strokeWidth: "0.5" }, "h" + i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: pts.join(" "), fill: "none", stroke: "#39ff88", strokeWidth: "1.8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "120", height: "48", rx: "6", fill: "rgba(0,0,0,0.6)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#39ff88", fontSize: "10", fontWeight: "800", children: "HR 78 bpm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#ddd", fontSize: "9", children: "Lead II · 25 mm/s" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "42", fill: "#ffd166", fontSize: "9", children: "SVT detected · 1D-CNN" })
    ] })
  ] });
}
function Vitals() {
  const bars = [55, 62, 48, 80, 71, 90, 66, 78, 84, 60, 73, 88];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    [
      { x: 8, y: 8, t: "HR", v: "78", u: "bpm", c: "#ff5d8f" },
      { x: 100, y: 8, t: "SpO₂", v: "97%", u: "", c: "#7ee8fa" },
      { x: 192, y: 8, t: "BP", v: "118/76", u: "", c: "#ffd166" },
      { x: 296, y: 8, t: "Temp", v: "36.7°", u: "", c: "#a78bfa" }
    ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${m.x},${m.y})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "92", height: "56", rx: "8", fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#aaa", fontSize: "9", children: m.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "38", fill: m.c, fontSize: "18", fontWeight: "800", children: m.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "60", y: "38", fill: "#888", fontSize: "9", children: m.u })
    ] }, m.t)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,76)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "384", height: "136", rx: "10", fill: "rgba(255,255,255,0.03)", stroke: "rgba(255,255,255,0.08)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polyline",
        {
          points: bars.map((b, i) => `${20 + i * 30},${120 - b}`).join(" "),
          fill: "none",
          stroke: "#7ee8fa",
          strokeWidth: "2"
        }
      ),
      bars.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 20 + i * 30, cy: 120 - b, r: "2.5", fill: "#fff" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "12", y: "14", fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "24h trend" })
    ] })
  ] });
}
function SkinScan() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "skin", cx: "50%", cy: "50%", r: "60%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f4cbac" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#7a4a36" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#0c0710" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "40", width: "160", height: "200", rx: "14", fill: "url(#skin)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "110", cy: "135", rx: "22", ry: "16", fill: "#3a1a10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "106", cy: "130", rx: "10", ry: "7", fill: "#1a0808" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "82", y: "113", width: "56", height: "46", fill: "none", stroke: "#ff3d71", strokeWidth: "1.5", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(20,250)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "160", height: "56", rx: "10", fill: "rgba(255,255,255,0.06)", stroke: "rgba(255,255,255,0.12)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "18", fill: "#ff3d71", fontSize: "10", fontWeight: "800", children: "Melanoma · 0.88" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "34", fill: "#ddd", fontSize: "9", children: "Asymmetry · Border ✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "48", fill: "#9be29b", fontSize: "9", children: "Consult dermatologist" })
    ] })
  ] });
}
function DentalXRay() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#0a0a0c" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 130 Q200 30 360 130 L360 175 Q200 110 40 175 Z", fill: "#1c2230", stroke: "#3a4660" }),
    Array.from({ length: 14 }).map((_, i) => {
      const x = 60 + i * 22;
      const y = 130 - Math.sin(i / 13 * Math.PI) * 60;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: "16", height: "32", rx: "3", fill: "#e8e8ee", stroke: "#5b6479" }, i);
    }),
    [2, 6, 11].map((i) => {
      const x = 60 + i * 22 + 8;
      const y = 130 - Math.sin(i / 13 * Math.PI) * 60 + 14;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "6", fill: "none", stroke: "#ff3d71", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 8, y: y - 6, fill: "#ff3d71", fontSize: "8", fontWeight: "700", children: "caries" })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "120", height: "44", rx: "6", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "Panoramic · YOLOv8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "3 findings · mAP 0.89" })
    ] })
  ] });
}
function PillID() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#08070d" }),
    [
      { x: 60, y: 70, c: "#ff5d8f", w: 70, h: 28 },
      { x: 70, y: 130, c: "#7ee8fa", w: 56, h: 26 }
    ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: p.x, y: p.y, width: p.w, height: p.h, rx: p.h / 2, fill: p.c }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: p.x + p.w / 2, y1: p.y, x2: p.x + p.w / 2, y2: p.y + p.h, stroke: "rgba(0,0,0,0.4)" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "50", width: "120", height: "130", fill: "none", stroke: "#ffd166", strokeWidth: "1.5", strokeDasharray: "4 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(180,18)", children: [
      { n: "Amoxicillin 500mg", s: 0.97 },
      { n: "Ibuprofen 400mg", s: 0.84 },
      { n: "Cetirizine 10mg", s: 0.61 }
    ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 56})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "48", rx: "8", fill: "rgba(255,255,255,0.05)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "18", fill: "#fff", fontSize: "11", fontWeight: "700", children: m.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "26", width: "180", height: "6", rx: "3", fill: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "26", width: 180 * m.s, height: "6", rx: "3", fill: i === 0 ? "#9be29b" : "#7ee8fa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "170", y: "42", fill: "#9be29b", fontSize: "9", children: [
        Math.round(m.s * 100),
        "%"
      ] })
    ] }, m.n)) })
  ] });
}
function PediatricBot() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#0b0814" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(10,16)", children: [
      { who: "👩‍👧", t: "تب ۳۸ و سرفه از دیشب", me: false, c: "#7ee8fa" },
      { who: "🤖", t: "آیا گلودرد یا کهیر دیده شده؟", me: true, c: "#a78bfa" },
      { who: "👩‍👧", t: "گلودرد دارد. ۴ ساله است.", me: false, c: "#7ee8fa" },
      { who: "🤖", t: "احتمال عفونت گلو • مراجعه ۲۴h", me: true, c: "#a78bfa" }
    ].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 56})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: b.me ? 24 : 0,
          y: "0",
          width: "156",
          height: "44",
          rx: "10",
          fill: b.me ? "rgba(167,139,250,0.18)" : "rgba(126,232,250,0.14)",
          stroke: `${b.c}55`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: b.me ? 36 : 12, y: "18", fill: "#fff", fontSize: "9", fontWeight: "700", children: b.who }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: b.me ? 36 : 12, y: "34", fill: "#e5e5ef", fontSize: "9", children: b.t })
    ] }, i)) })
  ] });
}
function MentalMood() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "aur", cx: "50%", cy: "50%", r: "60%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#a78bfa", stopOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1a103a", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#0a081a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "120", r: "80", fill: "url(#aur)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "120", r: "58", fill: "none", stroke: "#a78bfa", strokeWidth: "1.5", strokeDasharray: "4 4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "100", y: "118", textAnchor: "middle", fill: "#fff", fontSize: "18", fontWeight: "900", children: "7.2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "100", y: "138", textAnchor: "middle", fill: "#bdb6f6", fontSize: "9", children: "Mood Score · 7d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(20,230)", children: [5, 6, 4, 7, 8, 6, 7].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: i * 24 + 8, cy: 50 - v * 5, r: "5", fill: ["#ff6b6b", "#ffae00", "#ffae00", "#9be29b", "#7ee8fa", "#a78bfa", "#9be29b"][i] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: i * 24 + 2, y: "68", fill: "#888", fontSize: "8", children: ["S", "M", "T", "W", "T", "F", "S"][i] })
    ] }, i)) })
  ] });
}
function DefectGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "steel", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "20", height: "20", fill: "#28323c" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 10 L20 10", stroke: "#1c2530", strokeWidth: "0.6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 0 L10 20", stroke: "#1c2530", strokeWidth: "0.6" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "url(#steel)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 60 L380 80", stroke: "#7a8693", strokeWidth: "0.8", opacity: "0.6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 160 L370 150", stroke: "#7a8693", strokeWidth: "0.6", opacity: "0.5" }),
    [
      { x: 80, y: 50, w: 60, h: 30, lbl: "scratch · 0.92" },
      { x: 220, y: 110, w: 50, h: 40, lbl: "pitted · 0.87" },
      { x: 310, y: 60, w: 40, h: 30, lbl: "patches · 0.74" }
    ].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: d.x, y: d.y, width: d.w, height: d.h, fill: "none", stroke: "#ff3d71", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: d.x, y: d.y - 14, width: "100", height: "12", fill: "#ff3d71" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: d.x + 4, y: d.y - 4, fill: "#fff", fontSize: "8", fontWeight: "700", children: d.lbl })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "110", height: "40", rx: "6", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "YOLOv8 · QC line" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "mAP 0.89 · 38ms" })
    ] })
  ] });
}
function Vibration() {
  const bars = Array.from({ length: 60 }).map((_, i) => 20 + Math.abs(Math.sin(i / 3)) * 70 + (i === 28 ? 80 : 0) + (i === 42 ? 50 : 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#050b14" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(20,30)", children: [
      bars.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: i * 6,
          y: 160 - h,
          width: "4",
          height: h,
          fill: i === 28 ? "#ff3d71" : i === 42 ? "#ffd166" : "#7ee8fa",
          opacity: "0.9"
        },
        i
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "160", x2: "360", y2: "160", stroke: "#244" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "0", y: "178", fill: "#7ee8fa", fontSize: "8", children: "FFT · vibration spectrum (Hz)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "160", y: "20", fill: "#ff3d71", fontSize: "9", fontWeight: "800", children: "⚠ bearing fault peak" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "140", height: "18", rx: "4", fill: "rgba(0,0,0,0.5)", stroke: "rgba(255,255,255,0.12)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "13", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "RUL: 142h · Confidence 0.91" })
    ] })
  ] });
}
function PPECctv() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "floor", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "#1a2230" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#0a0e16" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "url(#floor)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 70 L400 70", stroke: "#3a4658", strokeWidth: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 70 L60 0 M120 70 L180 0 M240 70 L300 0 M360 70 L400 10", stroke: "#3a4658", strokeWidth: "1" }),
    [{ x: 70, ok: true }, { x: 180, ok: false }, { x: 290, ok: true }].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${w.x},120)`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "0", cy: "-30", rx: "10", ry: "12", fill: "#f1c19a" }),
      w.ok && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-12 -32 Q0 -50 12 -32 Z", fill: "#ffd166" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-12", y: "-18", width: "24", height: "36", rx: "3", fill: "#ff8c42" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-8", y1: "20", x2: "-8", y2: "40", stroke: "#1a1a1a", strokeWidth: "3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "20", x2: "8", y2: "40", stroke: "#1a1a1a", strokeWidth: "3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: "-22",
          y: "-58",
          width: "44",
          height: "100",
          fill: "none",
          stroke: w.ok ? "#9be29b" : "#ff3d71",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "-22", y: "-62", fill: w.ok ? "#9be29b" : "#ff3d71", fontSize: "8", fontWeight: "800", children: w.ok ? "PPE ✓ 0.96" : "NO HELMET · 0.92" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "130", height: "18", rx: "4", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "13", fill: "#ff3d71", fontSize: "9", fontWeight: "800", children: "⚠ 1 violation · Camera #07" })
    ] })
  ] });
}
function WeldXRay() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "weld", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "#3a3a3a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0.5", stopColor: "#bcbcbc" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#3a3a3a" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#0a0a0a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "90", width: "400", height: "50", fill: "url(#weld)" }),
    Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: 10 + i * 14, cy: "115", rx: "7", ry: "20", fill: "#888", opacity: "0.4" }, i)),
    [{ x: 110, t: "porosity" }, { x: 230, t: "crack" }, { x: 320, t: "slag" }].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: d.x, cy: "115", r: "14", fill: "none", stroke: "#ff3d71", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: d.x - 22, y: "90", fill: "#ff3d71", fontSize: "9", fontWeight: "700", children: d.t })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "120", height: "40", rx: "6", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "RT-Weld · U-Net" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "IoU 0.83 · ISO 5817" })
    ] })
  ] });
}
function FraudGraph() {
  const nodes = [
    { x: 200, y: 110, r: 18, c: "#ff3d71" },
    { x: 90, y: 60, r: 10, c: "#7ee8fa" },
    { x: 90, y: 160, r: 10, c: "#7ee8fa" },
    { x: 310, y: 60, r: 10, c: "#7ee8fa" },
    { x: 310, y: 160, r: 10, c: "#7ee8fa" },
    { x: 40, y: 110, r: 8, c: "#a78bfa" },
    { x: 360, y: 110, r: 8, c: "#a78bfa" },
    { x: 150, y: 30, r: 7, c: "#ffd166" },
    { x: 250, y: 30, r: 7, c: "#ffd166" },
    { x: 150, y: 190, r: 7, c: "#ffd166" },
    { x: 250, y: 190, r: 7, c: "#ffd166" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#05070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "#445", strokeWidth: "0.8", children: [
      nodes.slice(1).map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: 200, y1: 110, x2: n.x, y2: n.y }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "90", y1: "60", x2: "40", y2: "110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "90", y1: "160", x2: "40", y2: "110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "310", y1: "60", x2: "360", y2: "110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "310", y1: "160", x2: "360", y2: "110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "90", y1: "60", x2: "150", y2: "30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "310", y1: "60", x2: "250", y2: "30" })
    ] }),
    nodes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: n.x, cy: n.y, r: n.r + 4, fill: n.c, opacity: "0.15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: n.x, cy: n.y, r: n.r, fill: n.c })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "200", y: "115", textAnchor: "middle", fill: "#fff", fontSize: "9", fontWeight: "800", children: "FRAUD" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "160", height: "40", rx: "6", fill: "rgba(0,0,0,0.6)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ff3d71", fontSize: "9", fontWeight: "800", children: "Ring detected · 11 accts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "GraphSAGE · AUC 0.99" })
    ] })
  ] });
}
function Recommender() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(14,14)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "20", fill: "#a78bfa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "20", y: "24", textAnchor: "middle", fill: "#fff", fontSize: "13", fontWeight: "800", children: "U" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "18", fill: "#fff", fontSize: "11", fontWeight: "700", children: "For you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "32", fill: "#888", fontSize: "9", children: "CF · Two-Tower · 1.3M items" })
    ] }),
    [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${20 + i * 92},80)`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "80", height: "120", rx: "10", fill: "rgba(255,255,255,0.05)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "8", y: "8", width: "64", height: "60", rx: "6", fill: ["#ff5d8f", "#7ee8fa", "#ffd166", "#9be29b"][i], opacity: "0.85" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "8", y: "76", width: "50", height: "8", rx: "2", fill: "rgba(255,255,255,0.3)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "8", y: "88", width: "34", height: "6", rx: "2", fill: "rgba(255,255,255,0.2)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "8", y: "110", fill: "#9be29b", fontSize: "9", fontWeight: "800", children: [
        "★ ",
        (0.95 - i * 0.07).toFixed(2)
      ] })
    ] }, i))
  ] });
}
function CityTraffic() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "240", height: "200", rx: "10", fill: "#0e1422", stroke: "rgba(255,255,255,0.08)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M20 40 L220 40 M20 100 L220 100 M20 160 L220 160 M60 20 L60 180 M140 20 L140 180 M200 20 L200 180",
          stroke: "#243044",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "40", r: "10", fill: "#ff3d71", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "140", cy: "100", r: "14", fill: "#ffd166", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "160", r: "8", fill: "#9be29b", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "194", fill: "#7ee8fa", fontSize: "9", children: "Tabriz · live traffic" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(260,16)", children: [
      { t: "Avg speed", v: "34 km/h", c: "#ffd166" },
      { t: "Congestion", v: "62%", c: "#ff3d71" },
      { t: "AQI", v: "78", c: "#9be29b" }
    ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 56})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "130", height: "48", rx: "8", fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "18", fill: "#aaa", fontSize: "9", children: m.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "38", fill: m.c, fontSize: "16", fontWeight: "800", children: m.v })
    ] }, m.t)) })
  ] });
}
function BayesChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(20,20)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "170", x2: "360", y2: "170", stroke: "#445" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0", x2: "0", y2: "170", stroke: "#445" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 170 Q90 30 180 30 Q270 30 360 170", fill: "rgba(126,232,250,0.18)", stroke: "#7ee8fa", strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 170 Q90 80 180 80 Q270 80 360 170", fill: "none", stroke: "#a78bfa", strokeWidth: "1.5", strokeDasharray: "4 3" }),
      Array.from({ length: 60 }).map((_, i) => {
        const x = 10 + i * 6 + Math.sin(i) * 2;
        const y = 165 - Math.abs(Math.sin((i - 28) / 8)) * 70;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "1.6", fill: "#ffd166" }, i);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "2", y: "14", fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "Posterior" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "2", y: "26", fill: "#a78bfa", fontSize: "9", children: "Prior" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "240", y: "14", fill: "#ffd166", fontSize: "9", children: "MCMC samples · 5k" })
    ] })
  ] });
}
function LLMTrain() {
  const t = Array.from({ length: 80 });
  const train = t.map((_, i) => 3.6 * Math.exp(-i / 22) + 0.6 + Math.sin(i / 3) * 0.05);
  const val = t.map((_, i) => 3.6 * Math.exp(-i / 25) + 0.8 + Math.sin(i / 4) * 0.07);
  const sx = (i) => 20 + i * 4.4;
  const sy = (v) => 180 - (4 - v) * 36;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "180", x2: "380", y2: "180", stroke: "#445" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "20", x2: "20", y2: "180", stroke: "#445" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { fill: "none", stroke: "#7ee8fa", strokeWidth: "2", points: train.map((v, i) => `${sx(i)},${sy(v)}`).join(" ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { fill: "none", stroke: "#ff5d8f", strokeWidth: "2", strokeDasharray: "4 3", points: val.map((v, i) => `${sx(i)},${sy(v)}`).join(" ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(28,28)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "train_loss" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { y: "14", fill: "#ff5d8f", fontSize: "9", fontWeight: "800", children: "val_loss" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { y: "34", fill: "#9be29b", fontSize: "9", children: "epoch 80 · BLEU 38.2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(260,18)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "120", height: "44", rx: "6", fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "LoRA · 7B Persian" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#aaa", fontSize: "9", children: "A100 · 4×24GB" })
    ] })
  ] });
}
function ChatRTL() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#0b0814" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(10,16)", children: [
      { me: false, t: "گزارش فروش فصل آخر را خلاصه کن" },
      { me: true, t: "رشد ۱۸٪، حاشیه سود ۲۴٪، ۳ منطقه افت داشتند." },
      { me: false, t: "نمودار بده" },
      { me: true, t: "📈 آماده شد. روند ۹۰ روزه + پیش‌بینی ۳۰ روز." }
    ].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 60})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: b.me ? 20 : 0,
          y: "0",
          width: "160",
          height: "48",
          rx: "12",
          fill: b.me ? "rgba(255,205,91,0.15)" : "rgba(126,232,250,0.12)",
          stroke: b.me ? "rgba(255,205,91,0.4)" : "rgba(126,232,250,0.35)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: b.me ? 32 : 12, y: "20", fill: b.me ? "#ffd166" : "#7ee8fa", fontSize: "8", fontWeight: "800", children: b.me ? "AtilGPT" : "شما" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: b.me ? 32 : 12, y: "36", fill: "#e5e5ef", fontSize: "9", direction: "rtl", children: b.t })
    ] }, i)) })
  ] });
}
function LegalDoc() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(14,14)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "190", rx: "6", fill: "#f3eee4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "14", width: "170", height: "8", fill: "#0a0a0a" }),
      Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: 32 + i * 11, width: i % 4 === 3 ? 120 : 170, height: "4", fill: "#777" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "65", width: "170", height: "11", fill: "#ffe66d", opacity: "0.6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "120", width: "120", height: "11", fill: "#ff8c42", opacity: "0.55" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(228,18)", children: [
      { t: "بند ۷ — ریسک جریمه", c: "#ff3d71" },
      { t: "بند ۱۲ — ابهام تعهد", c: "#ffd166" },
      { t: "ماده ۲۱ — مطابق قانون", c: "#9be29b" },
      { t: "پیشنهاد اصلاح متن", c: "#7ee8fa" }
    ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${i * 44})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "160", height: "36", rx: "6", fill: "rgba(255,255,255,0.05)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "18", r: "5", fill: m.c }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "24", y: "22", fill: "#fff", fontSize: "9", fontWeight: "700", direction: "rtl", children: m.t })
    ] }, i)) })
  ] });
}
function PoseTracking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "#7ee8fa", strokeWidth: "2", fill: "#7ee8fa", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "70", r: "14", fill: "#7ee8fa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "84", x2: "100", y2: "160" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "100", x2: "60", y2: "140" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "100", x2: "140", y2: "140" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "60", y1: "140", x2: "50", y2: "190" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "140", y1: "140", x2: "150", y2: "190" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "160", x2: "80", y2: "230" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "160", x2: "120", y2: "230" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "230", x2: "70", y2: "290" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "120", y1: "230", x2: "130", y2: "290" }),
      [[60, 140], [140, 140], [50, 190], [150, 190], [80, 230], [120, 230], [100, 160], [70, 290], [130, 290]].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "3" }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "130", height: "18", rx: "4", fill: "rgba(0,0,0,0.5)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "6", y: "13", fill: "#9be29b", fontSize: "9", fontWeight: "800", children: "Squat · form 92%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(8,300)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "#ffd166", fontSize: "9", fontWeight: "700", children: "۱۲/۱۵ تکرار" }) })
  ] });
}
function TutorQuiz() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(20,20)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "#7ee8fa", fontSize: "10", fontWeight: "800", children: "سؤال ۳ از ۱۰ · ریاضی" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { y: "22", fill: "#fff", fontSize: "13", fontWeight: "700", direction: "rtl", children: "حد lim x→0 (sin x / x) برابر است با:" }),
      ["۰", "۱", "∞", "تعریف نشده"].map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0,${44 + i * 32})`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            width: "360",
            height: "26",
            rx: "6",
            fill: i === 1 ? "rgba(155,226,155,0.18)" : "rgba(255,255,255,0.04)",
            stroke: i === 1 ? "#9be29b" : "rgba(255,255,255,0.1)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "14", y: "18", fill: i === 1 ? "#9be29b" : "#ddd", fontSize: "11", fontWeight: "700", children: o }),
        i === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "320", y: "18", fill: "#9be29b", fontSize: "10", fontWeight: "800", children: "✓" })
      ] }, o))
    ] })
  ] });
}
function CRMPipeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    ["Lead", "Qualify", "Proposal", "Won"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${10 + i * 96},10)`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "86", height: "200", rx: "8", fill: "rgba(255,255,255,0.03)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: ["#7ee8fa", "#ffd166", "#a78bfa", "#9be29b"][i], fontSize: "9", fontWeight: "800", children: s }),
      Array.from({ length: 3 - i % 2 }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(6,${28 + j * 50})`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "74", height: "42", rx: "6", fill: "rgba(255,255,255,0.06)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "6", width: "40", height: "6", rx: "2", fill: "rgba(255,255,255,0.3)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "18", width: "60", height: "4", rx: "2", fill: "rgba(255,255,255,0.15)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "6", y: "36", fill: "#9be29b", fontSize: "9", fontWeight: "700", children: [
          "$",
          (4 + j) * 12,
          "k"
        ] })
      ] }, j))
    ] }, s))
  ] });
}
function MapTour() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 320", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "320", fill: "#0e1422" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "#243044", strokeWidth: "1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 80 L200 80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 160 L200 160" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 240 L200 240" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 0 L50 320" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M120 0 L120 320" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 200 Q80 220 200 180", fill: "none", stroke: "#3a6fb0", strokeWidth: "6", opacity: "0.7" }),
    [{ x: 70, y: 60, c: "#ff3d71", t: "بازار" }, { x: 130, y: 140, c: "#ffd166", t: "کلیسا" }, { x: 60, y: 230, c: "#7ee8fa", t: "موزه" }, { x: 150, y: 260, c: "#9be29b", t: "کاخ" }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: "14", fill: p.c, opacity: "0.25" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: "6", fill: p.c, stroke: "#fff", strokeWidth: "1.5" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(10,10)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "22", rx: "6", fill: "rgba(0,0,0,0.6)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "15", fill: "#fff", fontSize: "9", fontWeight: "800", children: "تور یک‌روزه تبریز" })
    ] })
  ] });
}
function PlateANPR() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#04050a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(60,60)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "40", width: "220", height: "60", rx: "12", fill: "#1d2630" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30 40 Q60 0 110 0 L180 0 Q220 0 240 40 Z", fill: "#1d2630" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "60", y: "14", width: "50", height: "22", rx: "3", fill: "#7ee8fa", opacity: "0.4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "130", y: "14", width: "50", height: "22", rx: "3", fill: "#7ee8fa", opacity: "0.4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "110", r: "20", fill: "#0a0a0a", stroke: "#444" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "110", r: "20", fill: "#0a0a0a", stroke: "#444" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "80", y: "75", width: "90", height: "22", rx: "2", fill: "#f4f4f4", stroke: "#888" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "86", y: "91", fill: "#0a0a0a", fontSize: "13", fontWeight: "800", children: "۲۲ ج ۵۴۸ - ۳۳" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "120", y: "125", width: "120", height: "32", fill: "none", stroke: "#9be29b", strokeWidth: "1.5", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "120", y: "120", fill: "#9be29b", fontSize: "9", fontWeight: "800", children: "PLATE · 0.97" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "170", height: "18", rx: "4", fill: "rgba(0,0,0,0.55)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "6", y: "13", fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "ANPR · YOLO+CRNN · 38ms" })
    ] })
  ] });
}
function LeafDisease() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "leaf", cx: "50%", cy: "50%", r: "60%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#7bc96f" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "80%", stopColor: "#1f4d1f" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06120a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M200 30 Q60 110 200 200 Q340 110 200 30 Z", fill: "url(#leaf)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M200 30 L200 200 M200 60 L130 100 M200 60 L270 100 M200 100 L120 140 M200 100 L280 140 M200 140 L140 175 M200 140 L260 175",
        stroke: "#0d2d0d",
        strokeWidth: "1.2",
        fill: "none"
      }
    ),
    [{ x: 160, y: 100, r: 9 }, { x: 230, y: 130, r: 11 }, { x: 190, y: 160, r: 7 }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: s.x, cy: s.y, r: s.r + 3, fill: "#5a2a0a", opacity: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: s.x, cy: s.y, r: s.r, fill: "#a64a1a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: s.x - 2, cy: s.y - 2, r: s.r / 2.5, fill: "#3a1208" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,8)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "160", height: "40", rx: "6", fill: "rgba(0,0,0,0.55)", stroke: "rgba(255,255,255,0.15)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "16", fill: "#ffd166", fontSize: "9", fontWeight: "800", children: "Tomato · Early Blight" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "30", fill: "#9be29b", fontSize: "8", children: "Confidence 0.94 · spray today" })
    ] })
  ] });
}
function STTWave() {
  const bars = Array.from({ length: 90 }).map((_, i) => {
    const env = Math.sin(i / 89 * Math.PI);
    const noise = 0.3 + Math.abs(Math.sin(i * 1.7)) * 0.7;
    return 6 + env * noise * 60;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "absolute inset-0 h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "220", fill: "#06070d" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,18)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "#7ee8fa", fontSize: "9", fontWeight: "800", children: "گفتار فارسی · ۱۲ ثانیه" }),
      bars.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "rect",
        {
          x: i * 4,
          y: 70 - h / 2,
          width: "2.5",
          height: h,
          fill: i > 60 ? "#ff5d8f" : "#7ee8fa",
          opacity: "0.9"
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(8,140)", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "384", height: "60", rx: "8", fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.1)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "22", fill: "#ddd", fontSize: "10", fontWeight: "700", direction: "rtl", children: "«گزارش فروش هفتگی را برایم بفرست و" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "40", fill: "#ddd", fontSize: "10", fontWeight: "700", direction: "rtl", children: "نمودار رشد ۳ ماه گذشته را اضافه کن.»" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "54", fill: "#9be29b", fontSize: "8", children: "WER 5.8% · Whisper-fa" })
    ] })
  ] });
}
function CoverPhoto({ src, color, title, subtitle, alt }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -inset-20 bg-gradient-to-br ${color} opacity-30 blur-3xl` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-16 bg-[conic-gradient(from_120deg,rgba(251,191,36,0.18),rgba(99,102,241,0.18),rgba(14,165,233,0.18),rgba(251,191,36,0.18))] opacity-50 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-1.5 border-b border-white/10 bg-black/60 px-3 py-2 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-[10px] text-white/70 ring-1 ring-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }),
        "atil.ai · cover"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-amber-400/40 bg-amber-400/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-amber-300", children: "4K" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-[calc(100%-2rem)] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt: alt ?? title ?? "cover",
          loading: "lazy",
          decoding: "async",
          className: "absolute inset-0 h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.7)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(0deg,#fff_0px,#fff_1px,transparent_1px,transparent_3px)]" }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 top-3 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300 ring-1 ring-emerald-400/40", children: "LIVE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-bold text-white/70 ring-1 ring-white/15", children: "AI · v4.2" })
      ] }),
      (title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 bottom-3 text-white", children: [
        title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10px] opacity-80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]", children: subtitle })
      ] })
    ] })
  ] });
}
function ScreenCarousel({ screens, icon, color, autoplayMs = 4200 }) {
  const [i, setI] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  const [mode, setMode] = reactExports.useState("showcase");
  const [sliderApi, setSliderApi] = reactExports.useState(null);
  const [sliderIdx, setSliderIdx] = reactExports.useState(0);
  const n = screens.length;
  reactExports.useEffect(() => {
    if (paused || n <= 1 || mode !== "showcase") return;
    const t = setInterval(() => setI((x) => (x + 1) % n), autoplayMs);
    return () => clearInterval(t);
  }, [paused, n, autoplayMs, mode]);
  reactExports.useEffect(() => {
    if (!sliderApi) return;
    const onSel = () => setSliderIdx(sliderApi.selectedScrollSnap());
    onSel();
    sliderApi.on("select", onSel);
    sliderApi.on("reInit", onSel);
    return () => {
      sliderApi.off("select", onSel);
    };
  }, [sliderApi]);
  const go = (d) => setI((x) => (x + d + n) % n);
  const current = screens[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setMode("showcase"),
              className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition ${mode === "showcase" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5" }),
                " نمایشی"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setMode("slider"),
              className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition ${mode === "slider" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryHorizontalEnd, { className: "h-3.5 w-3.5" }),
                " اسلایدر"
              ]
            }
          )
        ] }) }),
        mode === "slider" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-4 backdrop-blur md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { loop: true, direction: "rtl" }, setApi: setSliderApi, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: screens.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "md:basis-4/5 lg:basis-3/4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-black/30", children: [
              s.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: s.coverImage,
                  alt: s.coverAlt ?? s.title,
                  loading: "lazy",
                  className: "h-[300px] w-full object-cover md:h-[460px]"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-[300px] w-full items-center justify-center bg-gradient-to-br ${color} md:h-[460px]`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black text-white/90", children: s.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 md:p-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[10px] font-bold text-primary backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
                  " ",
                  s.tag ?? `اسلاید ${idx + 1} از ${n}`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-black text-white md:text-2xl", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-sm leading-7 text-white/80", children: s.subtitle })
              ] })
            ] }) }, `slide-${idx}`)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "left-2 right-auto md:left-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "right-2 left-auto md:right-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center gap-1.5", children: screens.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": `اسلاید ${idx + 1}`,
              onClick: () => sliderApi?.scrollTo(idx),
              className: `h-2 rounded-full transition-all ${idx === sliderIdx ? "w-8 bg-gradient-to-r from-primary to-amber-500" : "w-2 bg-white/20 hover:bg-white/40"}`
            },
            idx
          )) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${color} opacity-20 blur-3xl` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-center gap-8 md:grid-cols-[1fr_1.2fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto flex min-h-[280px] w-full max-w-md items-center justify-center md:min-h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.92, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.96, y: -10 },
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  className: "w-full",
                  children: current.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CoverPhoto,
                    {
                      src: current.coverImage,
                      color,
                      title: current.title,
                      subtitle: current.subtitle,
                      alt: current.coverAlt
                    }
                  ) : current.kind ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DomainScreen,
                    {
                      kind: current.kind,
                      color,
                      title: current.title,
                      subtitle: current.subtitle
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MockScreen,
                    {
                      title: current.title,
                      subtitle: current.subtitle,
                      icon,
                      color,
                      variant: current.variant
                    }
                  )
                },
                i
              ) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -20 },
                  transition: { duration: 0.4 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
                      " ",
                      current.tag ?? `اسکرین ${i + 1} از ${n}`
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-black leading-tight md:text-3xl", children: current.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-8 text-muted-foreground", children: current.subtitle }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => go(-1),
                          "aria-label": "قبلی",
                          className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 backdrop-blur transition hover:bg-primary/15 hover:text-primary",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => go(1),
                          "aria-label": "بعدی",
                          className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 backdrop-blur transition hover:bg-primary/15 hover:text-primary",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: screens.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          "aria-label": `اسکرین ${idx + 1}`,
                          onClick: () => setI(idx),
                          className: `h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-primary to-amber-500" : "w-2 bg-white/20 hover:bg-white/40"}`
                        },
                        idx
                      )) })
                    ] })
                  ]
                },
                `cap-${i}`
              ) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", children: screens.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setI(idx),
              className: `group relative overflow-hidden rounded-xl border text-right backdrop-blur transition ${idx === i ? "border-primary/60 bg-primary/10" : "border-border bg-card/40 hover:border-primary/30"}`,
              children: [
                s.coverImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 w-full overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.coverImage, alt: s.coverAlt ?? s.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-105" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-primary", children: s.tag ?? `#${idx + 1}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 line-clamp-1 text-xs font-semibold", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-1 text-[10px] text-muted-foreground", children: s.subtitle })
                ] })
              ]
            },
            s.title + idx
          )) })
        ] })
      ]
    }
  );
}
const arxiv = (q) => `https://arxiv.org/search/?searchtype=all&start=0&query=${encodeURIComponent(q)}`;
const semScholar = (q) => `https://www.semanticscholar.org/search?year%5B0%5D=2024&year%5B1%5D=2025&q=${encodeURIComponent(q)}`;
const pickVenue = (source, query) => {
  const med = /Lancet|JAMA|NEJM|BMJ|Radiology|Medical|Tourism|Hospitality|Banking|Finance|McKinsey|FATF|OECD|NIST|Harvard|AERA|EDUCAUSE|Khan|Stanford|Construction|Agriculture|Remote Sensing|Precision|Annals|Pinterest|Shopify|LangChain|Anthropic|OpenAI|Hugging|Google|Meta|NVIDIA|Industry|Mech|Automation|RecSys|INFORMS/i;
  return med.test(source) ? semScholar(query) : arxiv(query);
};
const a = (title, source, year, query, tag) => ({
  title,
  source,
  year,
  tag,
  href: pickVenue(source, query)
});
const COMMON = {
  articles: [
    a("روند هوش مصنوعی در ۲۰۲۵ — مدل‌های چندوجهی", "Nature Machine Intelligence", "2025", "multimodal foundation models 2025", "Trends"),
    a("AutoML و کاهش هزینه توسعه مدل", "arXiv", "2025", "AutoML cost reduction 2025", "AutoML"),
    a("MLOps در پروژه‌های تولیدی", "Google Cloud Blog", "2025", "MLOps production best practices 2025", "MLOps"),
    a("Foundation Models برای صنعت", "MIT Technology Review", "2025", "foundation models industry applications 2025", "Foundation"),
    a("Responsible AI و چارچوب‌های ارزیابی", "ACM FAccT", "2025", "responsible AI evaluation framework 2025", "Ethics")
  ],
  outputs: [
    { metric: "Accuracy", value: "94.1%", note: "روی دیتاست تست مستقل" },
    { metric: "Inference", value: "38ms", note: "هر نمونه روی GPU T4" },
    { metric: "Throughput", value: "1.2k/s", note: "در حالت Batch" },
    { metric: "Uptime", value: "99.95%", note: "میانگین ۹۰ روزه" }
  ]
};
const MEDICAL = {
  articles: [
    a("Vision Transformers برای تصویربرداری پزشکی", "Lancet Digital Health", "2025", "vision transformer medical imaging 2025", "Medical AI"),
    a("nnU-Net در سگمنتیشن تومور — مرور جامع", "Medical Image Analysis", "2025", "nnU-Net tumor segmentation review 2025", "Segmentation"),
    a("غربالگری رتینوپاتی دیابتی با AI", "JAMA Ophthalmology", "2025", "diabetic retinopathy deep learning screening 2025", "Screening"),
    a("FDA-Approved AI Devices در رادیولوژی", "Radiology AI (RSNA)", "2025", "FDA approved AI radiology 2025", "Regulatory"),
    a("LLM در گزارش‌نویسی بالینی و دستیار پزشک", "NEJM AI", "2025", "large language model clinical reporting 2025", "Clinical LLM")
  ],
  outputs: [
    { metric: "Sensitivity", value: "96.3%", note: "تشخیص ضایعه مشکوک" },
    { metric: "Specificity", value: "92.8%", note: "کاهش False Positive" },
    { metric: "Dice Score", value: "0.91", note: "سگمنتیشن ناحیه بیماری" },
    { metric: "Time to Result", value: "< 4s", note: "از آپلود تا گزارش" }
  ]
};
const INDUSTRIAL = {
  articles: [
    a("Computer Vision در کنترل کیفیت — YOLOv9/v10", "IEEE Industrial Informatics", "2025", "YOLOv10 industrial quality inspection 2025", "QC Vision"),
    a("نگهداری پیش‌بینانه با LSTM و Transformer", "Mech. Systems and Signal Processing", "2025", "predictive maintenance transformer vibration 2025", "Predictive"),
    a("Digital Twin برای خطوط تولید فولاد", "Industry 4.0 Magazine", "2025", "digital twin steel manufacturing 2025", "Digital Twin"),
    a("Edge AI روی Jetson برای کارخانه هوشمند", "NVIDIA Tech Blog", "2025", "edge AI Jetson smart factory 2025", "Edge"),
    a("Safety Monitoring با CV — تشخیص PPE", "Automation in Construction", "2025", "PPE detection deep learning construction 2025", "Safety")
  ],
  outputs: [
    { metric: "Defect Recall", value: "98.4%", note: "روی خط تولید واقعی" },
    { metric: "False Alarm", value: "0.7%", note: "نسبت به Baseline ۴.۱٪" },
    { metric: "Downtime Reduction", value: "−32%", note: "پس از استقرار سامانه" },
    { metric: "FPS", value: "45 FPS", note: "روی Jetson Orin Nano" }
  ]
};
const FINANCE = {
  articles: [
    a("تشخیص تقلب Real-time با Graph Neural Networks", "ACM TKDD", "2025", "graph neural network fraud detection real-time 2025", "Fraud"),
    a("Credit Scoring مبتنی بر XGBoost و SHAP", "Journal of Banking & Finance", "2025", "XGBoost SHAP credit scoring 2025", "Credit"),
    a("Open Banking و فرصت‌های هوش مصنوعی", "McKinsey Insights", "2025", "open banking artificial intelligence 2025", "Strategy"),
    a("Time-Series Foundation Models برای پیش‌بینی بازار", "arXiv (q-fin)", "2025", "time series foundation model financial forecasting 2025", "Forecasting"),
    a("ضدپولشویی با Anomaly Detection", "FATF Reports", "2025", "anti money laundering anomaly detection 2025", "AML")
  ],
  outputs: [
    { metric: "Fraud Recall", value: "97.6%", note: "زیر ۵۰ms تأخیر" },
    { metric: "AUC", value: "0.987", note: "روی تراکنش‌های واقعی" },
    { metric: "Loss Saved", value: "$1.4M/yr", note: "تخمین برای بانک متوسط" },
    { metric: "Latency P99", value: "48ms", note: "Scoring بلادرنگ" }
  ]
};
const COMMERCE = {
  articles: [
    a("سیستم‌های توصیه‌گر هیبریدی در E-Commerce", "RecSys 2025", "2025", "hybrid recommender system e-commerce 2025", "RecSys"),
    a("LLM-based Search برای تجارت الکترونیک", "Shopify Engineering", "2025", "LLM semantic search e-commerce 2025", "Search"),
    a("Personalization و CLV با Deep Learning", "Harvard Business Review", "2025", "customer lifetime value deep learning 2025", "Marketing"),
    a("Vision Search و کاوش بصری محصول", "Pinterest Engineering", "2025", "visual search product retrieval 2025", "Visual"),
    a("Dynamic Pricing با Reinforcement Learning", "INFORMS Marketing Science", "2025", "dynamic pricing reinforcement learning 2025", "Pricing")
  ],
  outputs: [
    { metric: "CTR", value: "+38%", note: "نسبت به توصیه‌گر قبلی" },
    { metric: "Conversion", value: "+22%", note: "روی صفحه محصول" },
    { metric: "Latency", value: "< 80ms", note: "پاسخ Real-time" },
    { metric: "AOV", value: "+14%", note: "میانگین ارزش سبد" }
  ]
};
const ACADEMIC = {
  articles: [
    a("روش‌های Bayesian در علوم اجتماعی محاسباتی", "JMLR", "2025", "Bayesian methods computational social science 2025", "Bayesian"),
    a("Causal Inference و یادگیری ماشین", "PNAS", "2025", "causal inference machine learning 2025", "Causal"),
    a("Reproducibility در پژوهش‌های ML", "NeurIPS 2025", "2025", "reproducibility machine learning research 2025", "Reproducibility"),
    a("Meta-Analysis با ابزارهای R و Python", "BMJ Open", "2025", "meta analysis R python 2025", "Meta-Analysis"),
    a("نوشتن مقاله Q1 — راهنمای عملی", "Elsevier Researcher Academy", "2025", "writing Q1 journal article guide 2025", "Publication")
  ],
  outputs: [
    { metric: "Replication Rate", value: "100%", note: "کد + داده + مستندات" },
    { metric: "Peer Review", value: "Q1 Journals", note: "ISI/Scopus indexed" },
    { metric: "Mean R²", value: "0.93", note: "روی مدل اصلی پایان‌نامه" },
    { metric: "Citations", value: "+45%", note: "پس از Open Data" }
  ]
};
const GOVERNMENT = {
  articles: [
    a("Smart City و حسگرهای IoT برای ترافیک", "IEEE Smart Cities", "2025", "smart city IoT traffic sensors 2025", "Smart City"),
    a("حکمرانی داده در دستگاه‌های دولتی", "OECD Digital Government", "2025", "data governance public sector 2025", "Governance"),
    a("AI در خدمات شهروندی و چت‌بات دولتی", "GovTech Magazine", "2025", "government chatbot citizen services 2025", "GovTech"),
    a("ارزیابی ریسک AI در بخش عمومی", "NIST AI RMF", "2025", "NIST AI risk management framework 2025", "Risk")
  ],
  outputs: [
    { metric: "Coverage", value: "۱۲۰+ تقاطع", note: "پایش بلادرنگ" },
    { metric: "Response Time", value: "< 2s", note: "هشدار رویداد" },
    { metric: "Storage", value: "۲۸ TB/ماه", note: "ذخیره فشرده" },
    { metric: "Citizen NPS", value: "+27", note: "پس از استقرار" }
  ]
};
const VISION = {
  articles: [
    a("YOLOv10 و معماری‌های بدون NMS", "arXiv (CV)", "2025", "YOLOv10 NMS-free object detection 2025", "Detection"),
    a("Segment Anything 2 — کاربردهای صنعتی", "Meta AI Research", "2025", "Segment Anything 2 industrial 2025", "SAM2"),
    a("Open-Vocabulary Detection با CLIP", "CVPR 2025", "2025", "open vocabulary detection CLIP 2025", "OVD"),
    a("Vision-Language Models در رباتیک", "Google DeepMind", "2025", "vision language model robotics 2025", "VLM"),
    a("تشخیص PPE/کلاه ایمنی در سایت‌های صنعتی", "Automation in Construction", "2025", "helmet PPE detection construction site 2025", "Safety")
  ],
  outputs: [
    { metric: "mAP@50", value: "0.92", note: "روی دیتاست داخلی" },
    { metric: "FPS", value: "60 FPS", note: "RTX 4060" },
    { metric: "Tiny Object Recall", value: "88%", note: "اشیاء < 32px" },
    { metric: "Model Size", value: "11 MB", note: "پس از Quantization" }
  ]
};
const LEGAL = {
  articles: [
    a("LLM در تحلیل قراردادها و Due Diligence", "Stanford CodeX", "2025", "large language model contract analysis 2025", "LegalTech"),
    a("RAG برای جستجوی پرونده‌های قضایی", "ACL 2025 Legal NLP", "2025", "retrieval augmented generation legal case search 2025", "RAG"),
    a("ارزیابی ریسک LLM در مشاوره حقوقی", "Harvard Law Review", "2025", "LLM legal advice risk evaluation 2025", "Risk"),
    a("اتوماسیون تنظیم لوایح با NLP", "Journal of Legal Analysis", "2025", "NLP legal document drafting automation 2025", "Drafting")
  ],
  outputs: [
    { metric: "Clause Recall", value: "95.1%", note: "تشخیص بندهای حساس" },
    { metric: "Drafting Time", value: "−61%", note: "نسبت به دستی" },
    { metric: "Citation Accuracy", value: "97%", note: "ارجاع‌دهی RAG" }
  ]
};
const VOICE = {
  articles: [
    a("Whisper-Large v3 — STT چندزبانه", "OpenAI Research", "2025", "Whisper large v3 multilingual speech recognition 2025", "ASR"),
    a("Voice Cloning اخلاقی و واترمارک صوتی", "Interspeech 2025", "2025", "ethical voice cloning audio watermark 2025", "TTS"),
    a("Speaker Diarization با pyannote", "arXiv (eess.AS)", "2025", "pyannote speaker diarization 2025", "Diarization"),
    a("Real-time Voice Agents با LLM", "Hugging Face Blog", "2025", "real-time voice agent LLM 2025", "Voice Agents")
  ],
  outputs: [
    { metric: "WER فارسی", value: "8.4%", note: "روی نمونه واقعی" },
    { metric: "Latency", value: "320ms", note: "Streaming STT" },
    { metric: "MOS (TTS)", value: "4.3/5", note: "ارزیابی شنونده" }
  ]
};
const AGRI = {
  articles: [
    a("تشخیص بیماری گیاه با CNN روی موبایل", "Computers and Electronics in Agriculture", "2025", "plant disease detection CNN mobile 2025", "Plant Disease"),
    a("تصاویر ماهواره‌ای و پیش‌بینی عملکرد محصول", "Remote Sensing of Environment", "2025", "satellite imagery crop yield prediction 2025", "RemoteSensing"),
    a("کشاورزی دقیق با پهپاد و Multispectral", "Precision Agriculture (Springer)", "2025", "precision agriculture UAV multispectral 2025", "PrecisionAg"),
    a("IoT آبیاری هوشمند و کاهش مصرف آب", "Agricultural Water Management", "2025", "smart irrigation IoT water saving 2025", "Irrigation")
  ],
  outputs: [
    { metric: "Disease F1", value: "0.94", note: "روی ۲۸ بیماری شایع" },
    { metric: "Yield MAPE", value: "6.8%", note: "پیش‌بینی فصلی" },
    { metric: "Water Saved", value: "−34%", note: "آبیاری هوشمند" }
  ]
};
const EDU = {
  articles: [
    a("Tutor مبتنی بر LLM — اثربخشی یادگیری", "Khan Academy Research", "2025", "LLM intelligent tutor learning effectiveness 2025", "AI Tutor"),
    a("Adaptive Learning با Bayesian Knowledge Tracing", "EDM 2025", "2025", "bayesian knowledge tracing adaptive learning 2025", "Adaptive"),
    a("ارزیابی خودکار انشا با Transformer", "AERA Open", "2025", "automatic essay scoring transformer 2025", "Assessment"),
    a("GenAI در طراحی محتوای آموزشی", "EDUCAUSE Review", "2025", "generative AI educational content design 2025", "Content")
  ],
  outputs: [
    { metric: "Engagement", value: "+47%", note: "وقت‌گذاری دانش‌آموز" },
    { metric: "Score Lift", value: "+18%", note: "آزمون پایان دوره" },
    { metric: "Drop-off", value: "−29%", note: "نسبت به ویدئوی ثابت" }
  ]
};
const ASSISTANT = {
  articles: [
    a("RAG پیشرفته با Re-ranking و Hybrid Search", "LangChain Blog", "2025", "advanced RAG reranking hybrid search 2025", "RAG"),
    a("Agentic Workflows با Tool Use", "Anthropic Research", "2025", "agentic LLM tool use workflows 2025", "Agents"),
    a("Long-Context LLMs — مقایسه عملی", "arXiv (cs.CL)", "2025", "long context LLM benchmark comparison 2025", "LongContext"),
    a("Eval چت‌بات‌ها با LLM-as-Judge", "OpenAI Evals", "2025", "LLM as judge chatbot evaluation 2025", "Eval")
  ],
  outputs: [
    { metric: "Answer Quality", value: "4.6/5", note: "ارزیابی کاربر" },
    { metric: "Hallucination", value: "1.8%", note: "پس از RAG" },
    { metric: "Resolution", value: "78%", note: "بدون اپراتور انسانی" }
  ]
};
const TOURISM = {
  articles: [
    a("توصیه سفر شخصی‌سازی‌شده با Graph + LLM", "Tourism Management", "2025", "personalized travel recommendation graph LLM 2025", "Recommender"),
    a("تحلیل احساسات نظرات گردشگران", "Annals of Tourism Research", "2025", "tourist review sentiment analysis 2025", "Sentiment"),
    a("پیش‌بینی تقاضای هتل با Time-Series", "Int. J. of Hospitality Management", "2025", "hotel demand forecasting time series 2025", "Demand")
  ],
  outputs: [
    { metric: "CTR پیشنهاد", value: "+33%", note: "روی کارت تور" },
    { metric: "Conversion", value: "+19%", note: "رزرو نهایی" },
    { metric: "Occupancy", value: "+12%", note: "بهینه‌سازی قیمت" }
  ]
};
const BY_CATEGORY = {
  "پزشکی": MEDICAL,
  "سلامت": MEDICAL,
  "صنعتی": INDUSTRIAL,
  "مالی و بانکی": FINANCE,
  "مالی": FINANCE,
  "تجاری": COMMERCE,
  "فروشگاهی": COMMERCE,
  "کسب‌وکار": COMMERCE,
  "دانشگاهی": ACADEMIC,
  "دولتی": GOVERNMENT,
  "بینایی ماشین": VISION,
  "حقوقی": LEGAL,
  "صوت": VOICE,
  "کشاورزی": AGRI,
  "آموزشی": EDU,
  "دستیار AI": ASSISTANT,
  "گردشگری": TOURISM
};
function getCategoryContent(cat) {
  return BY_CATEGORY[cat] ?? COMMON;
}
const MAP = {
  // ===== PROJECTS =====
  "breast-cancer-vit": ["mammography", "mammography", "vitals"],
  "brain-tumor-segmentation": ["mri-brain", "mri-brain", "vitals"],
  "diabetic-retinopathy": ["retina", "retina", "vitals"],
  "ecg-arrhythmia": ["ecg", "ecg", "vitals", "ecg"],
  "icu-survival-xgboost": ["vitals", "bayes-chart", "vitals"],
  "steel-defect-yolov8": ["defect-grid", "defect-grid", "vibration"],
  "turbine-predictive-maintenance": ["vibration", "vibration", "bayes-chart"],
  "safety-helmet-detection": ["ppe-cctv", "ppe-cctv", "defect-grid"],
  "weld-defect-detection": ["weld-xray", "weld-xray", "defect-grid"],
  "bank-fraud-realtime": ["fraud-graph", "fraud-graph", "bayes-chart"],
  "recommendation-engine": ["recommender", "recommender", "bayes-chart"],
  "smart-city-tabriz": ["city-traffic", "map-tour", "city-traffic"],
  "persian-llm-finetune": ["llm-train", "chat-rtl", "llm-train"],
  "phd-bayesian-finance": ["bayes-chart", "bayes-chart", "vibration"],
  "oil-pipeline-leak-detection": ["map-tour", "vibration", "defect-grid"],
  "power-grid-load-forecast": ["bayes-chart", "vibration", "bayes-chart"],
  "logistics-route-optimization": ["map-tour", "city-traffic", "map-tour"],
  "aviation-anomaly-detection": ["vibration", "bayes-chart", "defect-grid"],
  // ===== APPS =====
  "skin-diagnosis": ["skin-scan", "skin-scan", "vitals"],
  "dental-ai": ["dental-xray", "dental-xray", "vitals"],
  "ophthalmology-app": ["retina", "retina", "vitals"],
  "legal-assistant": ["legal-doc", "chat-rtl", "legal-doc"],
  "pediatric-symptom-checker": ["pediatric-bot", "chat-rtl", "vitals"],
  "pill-identifier": ["pill", "pill", "vitals"],
  "mental-health-companion": ["mental-mood", "chat-rtl", "mental-mood"],
  "fitness-coach-ai": ["pose-tracking", "pose-tracking", "vitals"],
  "persian-llm-assistant": ["chat-rtl", "chat-rtl", "llm-train"],
  "ecommerce-recommender": ["recommender", "recommender", "bayes-chart"],
  "plate-recognition": ["plate-anpr", "plate-anpr", "defect-grid"],
  "persian-stt": ["stt-waveform", "stt-waveform", "chat-rtl"],
  "ai-tutor": ["tutor-quiz", "tutor-quiz", "bayes-chart"],
  "smart-crm": ["crm-pipeline", "crm-pipeline", "bayes-chart"],
  "tourism-guide": ["map-tour", "map-tour", "chat-rtl"],
  "agriculture-ai": ["leaf-disease", "leaf-disease", "map-tour"]
};
function getScreenKinds(slug, count) {
  const base = MAP[slug];
  if (base) return base.slice(0, count);
  const fall = ["vitals", "bayes-chart", "chat-rtl"];
  return fall.slice(0, count);
}
export {
  MockScreen as M,
  ScreenCarousel as S,
  getScreenKinds as a,
  getCategoryContent as g
};
