import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BackButton } from "./router-On6b4iSk.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SECTIONS = [{
  domain: "پزشکی و سلامت",
  ideas: [{
    title: "تشخیص تومور مغزی با U-Net",
    desc: "سگمنتیشن MRI با شبکه U-Net و مجموعه‌داده BraTS."
  }, {
    title: "طبقه‌بندی سرطان سینه با Vision Transformer",
    desc: "آموزش ViT روی تصاویر هیستوپاتولوژی."
  }, {
    title: "تشخیص رتینوپاتی دیابتی",
    desc: "مدل CNN روی تصاویر فوندوس چشم."
  }, {
    title: "آریتمی قلبی از سیگنال ECG",
    desc: "شبکه LSTM/CNN-1D برای داده‌های MIT-BIH."
  }, {
    title: "پیش‌بینی بقای ICU با XGBoost",
    desc: "مدل‌سازی روی MIMIC-III."
  }]
}, {
  domain: "مالی و بانکی",
  ideas: [{
    title: "تشخیص تقلب بانکی Real-time",
    desc: "مدل‌های Gradient Boosting + Kafka stream."
  }, {
    title: "پیش‌بینی قیمت سهام با Transformer",
    desc: "ترکیب مدل‌های زمانی و خبر."
  }, {
    title: "ارزیابی اعتبار وام (Credit Scoring)",
    desc: "مدل قابل تفسیر با SHAP."
  }]
}, {
  domain: "حقوقی و متن",
  ideas: [{
    title: "دستیار حقوقی مبتنی بر LLM فارسی",
    desc: "RAG روی مجموعه قوانین."
  }, {
    title: "خلاصه‌سازی آراء قضایی",
    desc: "Fine-tune مدل T5/MT5."
  }, {
    title: "طبقه‌بندی نوع دعوی",
    desc: "Text classification با ParsBERT."
  }]
}, {
  domain: "بینایی صنعتی",
  ideas: [{
    title: "تشخیص نقص جوش با YOLOv8",
    desc: "Real-time defect detection روی خط تولید."
  }, {
    title: "شناسایی ورق فولاد معیوب",
    desc: "Segmentation با Mask R-CNN."
  }, {
    title: "تشخیص کلاه ایمنی کارگران",
    desc: "مدل YOLO برای ایمنی محیط کار."
  }, {
    title: "پلاک‌خوان فارسی",
    desc: "OCR ترکیبی YOLO + CRNN."
  }]
}, {
  domain: "NLP و LLM فارسی",
  ideas: [{
    title: "Fine-tune مدل زبانی فارسی",
    desc: "آموزش LoRA روی LLaMA/Qwen."
  }, {
    title: "تبدیل گفتار فارسی به متن (STT)",
    desc: "Fine-tune Whisper روی داده‌های فارسی."
  }, {
    title: "چت‌بات سلامت روان فارسی",
    desc: "RAG + safety guardrails."
  }]
}, {
  domain: "صنعت، انرژی و شهر هوشمند",
  ideas: [{
    title: "نگه‌داری پیش‌بینانه توربین",
    desc: "مدل Anomaly Detection روی داده سنسور."
  }, {
    title: "تشخیص نشتی خط لوله نفت",
    desc: "تحلیل صوتی و ارتعاش با CNN."
  }, {
    title: "پیش‌بینی بار شبکه برق",
    desc: "مدل LSTM چندمتغیره."
  }, {
    title: "بهینه‌سازی مسیر لجستیک",
    desc: "Reinforcement Learning + OR-Tools."
  }, {
    title: "تحلیل شهر هوشمند تبریز",
    desc: "Time-series ترافیک و آلودگی هوا."
  }]
}];
function BlogPost() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "relative pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "راهنمای جامع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl font-black md:text-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "۳۰+ ایده پروژه یادگیری ماشین" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 text-2xl md:text-3xl", children: "برای دانشجویان و پژوهشگران" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground leading-8", children: "اگر دنبال ایده‌ای حرفه‌ای، پورتفولیومحور و قابل‌اجرا برای پایان‌نامه، مقاله یا رزومه هستید، این فهرست را با دقت انتخاب کرده‌ایم. هر ایده در یکی از حوزه‌های فعال تیم ATiLLAi قابل مشاوره و اجرا است." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: SECTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-2xl font-bold text-gradient-gold", children: s.domain }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: s.ideas.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "glass rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: i.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-7", children: i.desc })
      ] }, i.title)) })
    ] }, s.domain)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "به اجرای حرفه‌ای پروژه‌تان نیاز دارید؟" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "تیم ATiLLAi در تمام مراحل مشاوره، کدنویسی، نوشتن پایان‌نامه و دیپلوی همراه شماست." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-6 py-3 font-bold text-primary-foreground shadow-glow", "aria-label": "رفتن به صفحه ثبت سفارش پروژه", children: "ثبت سفارش پروژه" })
    ] })
  ] }) });
}
export {
  BlogPost as component
};
