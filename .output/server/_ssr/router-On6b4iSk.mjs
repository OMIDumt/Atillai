import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound, m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-6YljCchu.mjs";
import { H as HeartPulse, B as Brain, E as Eye, A as Activity, S as Stethoscope, F as Factory, G as Gauge, a as ShieldCheck, W as Wrench, b as Banknote, c as ShoppingCart, L as Landmark, d as Bot, T as TrendingUp, D as Droplets, Z as Zap, e as Truck, P as Plane, f as Smile, g as Scale, h as Baby, i as Pill, j as Dumbbell, M as MessageCircle, k as ShoppingBag, C as Camera, l as Mic, m as GraduationCap, n as Briefcase, o as MapPin, p as Leaf, q as ChartColumn, r as Database, s as ChartLine, t as CodeXml, u as FileText, v as Smartphone, w as Globe, x as Cloud, y as Presentation, z as BookOpen, I as House, J as Sparkles, K as FolderKanban, N as ToyBrick, U as User, O as Mail, X, Q as Menu, R as Phone, V as Send, Y as Trash2, _ as Check, $ as Copy, a0 as MessageSquare, a1 as LoaderCircle, a2 as Tag, a3 as ArrowLeft, a4 as Award, a5 as Target, a6 as Code, a7 as ChevronDown, a8 as Atom, a9 as Network, aa as PenTool, ab as Languages, ac as Cpu, ad as Rocket, ae as Workflow, af as Search, ag as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function useServerFn(serverFn) {
  const router2 = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router2.stores.location.get();
        return router2.navigate(router2.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router2, serverFn]);
}
const appCss = "/assets/styles-5Nm7gEgT.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const COVER_IMAGES$1 = {
  "agriculture-ai": "/__l5e/assets-v1/ab031e85-c38a-4457-9534-12add931dfa7/agriculture-ai.png",
  "ai-tutor": "/__l5e/assets-v1/b453cd7e-d808-48d2-a60d-dcd633b53bc4/ai-tutor.png",
  "aviation-anomaly-detection": "/__l5e/assets-v1/d62be7f7-abd0-4bab-b420-df64dc5c4052/aviation-anomaly-detection.png",
  "bank-fraud-realtime": "/__l5e/assets-v1/a6e69d49-28de-418d-ae0e-4645cc1b1414/bank-fraud-realtime.png",
  "brain-tumor-segmentation": "/__l5e/assets-v1/0f081f49-dcc9-49c3-b010-67322c42fafd/brain-tumor-segmentation.png",
  "breast-cancer-vit": "/__l5e/assets-v1/94128313-e4b2-41b7-aa6b-c5d3f3c9bbf1/breast-cancer-vit.png",
  "dental-ai": "/__l5e/assets-v1/15dfabe2-4e47-44c0-8cdc-73eeb0f51086/dental-ai.png",
  "diabetic-retinopathy": "/__l5e/assets-v1/689b050d-6a40-460f-8c3e-55da59140cee/diabetic-retinopathy.png",
  "ecg-arrhythmia": "/__l5e/assets-v1/914462f7-27f5-4859-9031-3f9e0dc15de7/ecg-arrhythmia.png",
  "ecommerce-recommender": "/__l5e/assets-v1/8c45abd6-c8e2-4079-906a-92d6028ebdcc/ecommerce-recommender.png",
  "fitness-coach-ai": "/__l5e/assets-v1/f6984b55-4d6c-49be-b1d6-2f78b2d52c52/fitness-coach-ai.png",
  "icu-survival-xgboost": "/__l5e/assets-v1/685f4991-df69-4b46-946a-4453a5d51de2/icu-survival-xgboost.png",
  "legal-assistant": "/__l5e/assets-v1/2cef4b69-69f7-4c5d-8f6e-6ebac760e7b2/legal-assistant.png",
  "logistics-route-optimization": "/__l5e/assets-v1/31a3b248-3646-4d90-8818-64e6f1cf101b/logistics-route-optimization.png",
  "mental-health-companion": "/__l5e/assets-v1/7ccac6d0-20f7-4fb3-a584-5c9d4c86b725/mental-health-companion.png",
  "oil-pipeline-leak-detection": "/__l5e/assets-v1/f65a25ed-868d-42cf-8812-7605974770a5/oil-pipeline-leak-detection.png",
  "ophthalmology-app": "/__l5e/assets-v1/5b6e095e-f632-4710-91ab-19f490f52775/ophthalmology-app.png",
  "pediatric-symptom-checker": "/__l5e/assets-v1/0efd82df-81ad-4a99-a62f-f9491994dc86/pediatric-symptom-checker.png",
  "persian-llm-assistant": "/__l5e/assets-v1/86673e39-a929-45d8-ac35-af7b90391b12/persian-llm-assistant.png",
  "persian-llm-finetune": "/__l5e/assets-v1/ae9acce6-f95c-45ce-898f-75a3843e8d2b/persian-llm-finetune.png",
  "persian-stt": "/__l5e/assets-v1/d3a11c42-9710-4ae7-a313-70cb6504e074/persian-stt.png",
  "phd-bayesian-finance": "/__l5e/assets-v1/708c7db0-bccb-4415-ba4c-4967d221bc6b/phd-bayesian-finance.png",
  "pill-identifier": "/__l5e/assets-v1/9e1dd618-7e89-4b89-9382-d8cfbb3488e5/pill-identifier.png",
  "plate-recognition": "/__l5e/assets-v1/5dc1de54-34c2-4a57-b237-1d6114632096/plate-recognition.png",
  "power-grid-load-forecast": "/__l5e/assets-v1/6ece6a42-23f4-4301-badd-8a87674f659d/power-grid-load-forecast.png",
  "recommendation-engine": "/__l5e/assets-v1/522ebf30-c149-425e-93f8-baa705be353d/recommendation-engine.png",
  "safety-helmet-detection": "/__l5e/assets-v1/4659382d-2353-4886-a73f-541028f94ea7/safety-helmet-detection.png",
  "skin-diagnosis": "/__l5e/assets-v1/b2462567-5505-443d-97b8-4bcd45b534b1/skin-diagnosis-cover.png",
  "smart-city-tabriz": "/__l5e/assets-v1/b847b05d-87a7-4904-b773-41ccc8e9596c/smart-city-tabriz.png",
  "smart-crm": "/__l5e/assets-v1/21be1888-0b52-4d36-8bf5-79c4b94b9504/smart-crm.png",
  "steel-defect-yolov8": "/__l5e/assets-v1/8115cb95-2501-42c6-96b9-8b97432dc7c8/steel-defect-yolov8.png",
  "tourism-guide": "/__l5e/assets-v1/1e3f04f4-4725-489c-9d6f-1f92ad86a8c6/tourism-guide.png",
  "turbine-predictive-maintenance": "/__l5e/assets-v1/c0851962-58ed-4bf4-b6e8-22b74adda918/turbine-predictive-maintenance.png",
  "weld-defect-detection": "/__l5e/assets-v1/13d4b1f8-39c6-47a5-af4b-285895b9137e/weld-defect-detection.png"
};
function getCover(slug) {
  return COVER_IMAGES$1[slug];
}
const url$m = "/__l5e/assets-v1/7930727f-9eba-4c40-9780-69d11d235151/skin-diagnosis-screens-1.png";
const skinDx1 = {
  url: url$m
};
const url$l = "/__l5e/assets-v1/35907797-a26f-47e5-a084-07c944f85f10/skin-diagnosis-screens-2.png";
const skinDx2 = {
  url: url$l
};
const url$k = "/__l5e/assets-v1/9335b730-5ff7-4276-9a07-5bb07b3bdb1d/skin-diagnosis-screens-3.png";
const skinDx3 = {
  url: url$k
};
const url$j = "/__l5e/assets-v1/564b718b-2252-4d81-ab63-35078ea2ae90/dental-ai-screens.png";
const dentalAiHero = {
  url: url$j
};
const url$i = "/__l5e/assets-v1/ae9e21a6-1196-4a8c-baa4-2b198b5b0ff9/dental-ai-cover.png";
const dentalAiCover = {
  url: url$i
};
const url$h = "/__l5e/assets-v1/a5356ce7-4f1a-4319-899f-cbf05ca6d29e/mammo-ai-screen-0.png";
const mammoAi0 = {
  url: url$h
};
const url$g = "/__l5e/assets-v1/049dcf5c-9412-4943-8ad5-6d3b89a1aed6/mammo-ai-screen-1.png";
const mammoAi1 = {
  url: url$g
};
const url$f = "/__l5e/assets-v1/4aacf7cd-8c5d-43f1-9fb0-df5d9075c18a/mammo-ai-screen-2.png";
const mammoAi2 = {
  url: url$f
};
const url$e = "/__l5e/assets-v1/b3849c7c-bb71-46d9-a3a4-99f2983608d5/mammo-ai-screen-3.png";
const mammoAi3 = {
  url: url$e
};
const url$d = "/__l5e/assets-v1/cc9c2a64-ac40-4147-bb31-52565ba6e941/ophthalmology-hero.png";
const ophHero = {
  url: url$d
};
const url$c = "/__l5e/assets-v1/56be5fad-9cab-4906-b43a-3df6a71c6886/ophthalmology-fundus.png";
const ophFundus = {
  url: url$c
};
const url$b = "/__l5e/assets-v1/2bbab1dd-8d76-4cdf-b1dc-920d5defb714/ophthalmology-report.png";
const ophReport = {
  url: url$b
};
const url$a = "/__l5e/assets-v1/e69f6935-74b4-47a4-97b4-fb2ae424c316/ophthalmology-archive.png";
const ophArchive = {
  url: url$a
};
const url$9 = "/__l5e/assets-v1/e261ef49-7820-4a91-92dc-4a9a97a61499/ophthalmology-livedemo.png";
const ophLiveDemo = {
  url: url$9
};
const url$8 = "/__l5e/assets-v1/b4447a1e-4a10-48df-8ff0-ee50ee6fb0be/ophthalmology-doctor.png";
const ophDoctor = {
  url: url$8
};
const url$7 = "/__l5e/assets-v1/1e74f2e0-cbbc-4284-b06f-f351508609cb/ophthalmology-accuracy.png";
const ophAccuracy = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/079f660d-b62f-40bb-9a1f-a30574a09227/ophthalmology-security.png";
const ophSecurity = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/c2e4d59a-d5c9-4fce-8c19-6799373fb54a/ecg-monitor.png";
const ecgMonitor = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/923867d9-bd3f-4ce1-8e7e-1642c4c07dd9/ecg-detection.png";
const ecgDetection = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/7daf81d9-d75e-426a-a126-ae42a95ee939/ecg-patient.png";
const ecgPatient = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/c23fbc0a-7a33-46a7-87ce-64f932df0c87/ecg-report.png";
const ecgReport = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/39923a5b-43ad-4948-b8a7-ab5a7dd85b12/atillai-logo.png";
const atillaiLogoAsset = {
  url: url$1
};
const url = "/__l5e/assets-v1/f6c63b9b-cd29-4f72-916c-5b0e2053cd29/nilix-bot.png";
const nilixBotAsset = {
  url
};
const COVER_IMAGES = {
  medicalImaging: "/__l5e/assets-v1/aecb88ab-1f5c-4d43-9b80-d5819d59fe09/cov-medical-imaging.jpg",
  cardioSignal: "/__l5e/assets-v1/44026098-5f26-4244-b913-d9bb71492d99/cov-cardio-signal.jpg",
  medicalMobile: "/__l5e/assets-v1/52bf0872-5784-422e-8528-b27f8c59c2e5/cov-medical-mobile.jpg",
  industrialDefect: "/__l5e/assets-v1/f6068d90-c70b-4968-aa97-e0629bb84e17/cov-industrial-defect.jpg",
  predictiveMaintenance: "/__l5e/assets-v1/0bebc5e4-00d2-4682-977b-6b952de08061/cov-predictive-maintenance.jpg",
  smartCity: "/__l5e/assets-v1/56dc39da-7186-4bc3-803a-1e7bef85d316/cov-smart-city.jpg",
  fintechFraud: "/__l5e/assets-v1/b174465b-481b-4d3e-98db-5a58dc613e56/cov-fintech-fraud.jpg",
  quantFinance: "/__l5e/assets-v1/40956ce4-9ef7-4dac-aa5c-4fbc18b916d9/cov-quant-finance.jpg",
  recommender: "/__l5e/assets-v1/87a908fc-494d-4a59-8aab-8a2e8ac2807f/cov-recommender.jpg",
  llmKnowledge: "/__l5e/assets-v1/842d621a-b834-4ec8-a4a3-7581ae9d3f98/cov-llm-knowledge.jpg",
  speechStt: "/__l5e/assets-v1/50f60c73-631b-4a17-810b-2508fa5ab93f/cov-speech-stt.jpg",
  agriculture: "/__l5e/assets-v1/fb84f676-f1e0-44e5-879c-15df3139be56/cov-agriculture.jpg"
};
const PROJECT_COVERS = {
  // Medical imaging
  "breast-cancer-vit": COVER_IMAGES.medicalImaging,
  "brain-tumor-segmentation": COVER_IMAGES.medicalImaging,
  "diabetic-retinopathy": COVER_IMAGES.medicalImaging,
  // Cardio / clinical signals
  "ecg-arrhythmia": COVER_IMAGES.cardioSignal,
  "icu-survival-xgboost": COVER_IMAGES.cardioSignal,
  // Industrial defect / CV
  "steel-defect-yolov8": COVER_IMAGES.industrialDefect,
  "safety-helmet-detection": COVER_IMAGES.industrialDefect,
  "weld-defect-detection": COVER_IMAGES.industrialDefect,
  // Predictive maintenance / asset health
  "turbine-predictive-maintenance": COVER_IMAGES.predictiveMaintenance,
  "aviation-anomaly-detection": COVER_IMAGES.predictiveMaintenance,
  "oil-pipeline-leak-detection": COVER_IMAGES.predictiveMaintenance,
  "power-grid-load-forecast": COVER_IMAGES.predictiveMaintenance,
  // Smart city / logistics
  "smart-city-tabriz": COVER_IMAGES.smartCity,
  "logistics-route-optimization": COVER_IMAGES.smartCity,
  // Fintech
  "bank-fraud-realtime": COVER_IMAGES.fintechFraud,
  "phd-bayesian-finance": COVER_IMAGES.quantFinance,
  // Recommender
  "recommendation-engine": COVER_IMAGES.recommender,
  // LLM
  "persian-llm-finetune": COVER_IMAGES.llmKnowledge
};
const APP_COVERS = {
  // Mobile medical
  "skin-diagnosis": COVER_IMAGES.medicalMobile,
  "dental-ai": COVER_IMAGES.medicalMobile,
  "ophthalmology-app": COVER_IMAGES.medicalMobile,
  "pediatric-symptom-checker": COVER_IMAGES.medicalMobile,
  "pill-identifier": COVER_IMAGES.medicalMobile,
  // Mental / wellness
  "mental-health-companion": COVER_IMAGES.cardioSignal,
  "fitness-coach-ai": COVER_IMAGES.cardioSignal,
  // LLM / assistants
  "persian-llm-assistant": COVER_IMAGES.llmKnowledge,
  "legal-assistant": COVER_IMAGES.llmKnowledge,
  "ai-tutor": COVER_IMAGES.llmKnowledge,
  "tourism-guide": COVER_IMAGES.llmKnowledge,
  // Speech
  "persian-stt": COVER_IMAGES.speechStt,
  // Commerce
  "ecommerce-recommender": COVER_IMAGES.recommender,
  "smart-crm": COVER_IMAGES.fintechFraud,
  // Vision (city)
  "plate-recognition": COVER_IMAGES.smartCity,
  // Agri
  "agriculture-ai": COVER_IMAGES.agriculture
};
const GALLERY_OVERRIDES = {
  "skin-diagnosis": skinDx1.url,
  "dental-ai": dentalAiCover.url,
  "mammo-ai": mammoAi0.url,
  "ophthalmology-app": ophHero.url,
  "ecg-arrhythmia": ecgMonitor.url
};
const GALLERY_MULTI_OVERRIDES = {
  "skin-diagnosis": [skinDx1.url, skinDx2.url, skinDx3.url],
  "dental-ai": [dentalAiCover.url, dentalAiHero.url, dentalAiCover.url],
  "mammo-ai": [mammoAi0.url, mammoAi1.url, mammoAi2.url, mammoAi3.url],
  "ophthalmology-app": [
    ophHero.url,
    ophFundus.url,
    ophReport.url,
    ophArchive.url,
    ophLiveDemo.url,
    ophDoctor.url,
    ophAccuracy.url,
    ophSecurity.url
  ],
  "ecg-arrhythmia": [ecgMonitor.url, ecgDetection.url, ecgPatient.url, ecgReport.url]
};
const GALLERY_ALT_OVERRIDES = {
  "skin-diagnosis": [
    "اپلیکیشن DermAI — صفحه آپلود تصویر ضایعه پوستی و تشخیص هوش مصنوعی ملانوما",
    "اپلیکیشن DermAI — نمایش نتیجه تحلیل تصویر پوست با درصد اطمینان مدل یادگیری عمیق",
    "اپلیکیشن DermAI — داشبورد پیگیری بیماری پوستی، تاریخچه اسکن‌ها و توصیه پزشکی"
  ],
  "dental-ai": [
    "اپلیکیشن DentAI — صفحه اصلی هوش مصنوعی تشخیص پوسیدگی و سلامت دندان از روی رادیوگرافی",
    "اپلیکیشن DentAI — تحلیل تصویر دندانپزشکی توسط مدل بینایی ماشین و گزارش درمان",
    "اپلیکیشن DentAI — داشبورد بیمار، نوبت‌دهی هوشمند و توصیه‌های دندانپزشکی مبتنی بر AI"
  ],
  "mammo-ai": [
    "اپلیکیشن Mammo AI — صفحه اصلی دستیار هوشمند ماموگرافی، تحلیل خودکار تصاویر و ارزیابی ریسک سرطان پستان",
    "اپلیکیشن Mammo AI — داشبورد تحلیل تصویر ماموگرافی با هایلایت ناحیه مشکوک و دسته‌بندی BI-RADS 4A",
    "اپلیکیشن Mammo AI — گزارش جامع و ساختاریافته تجویز ماموگرافی با خروجی PDF برای پزشک و بیمار",
    "اپلیکیشن Mammo AI — مقایسه هوشمند تصاویر ماموگرافی فعلی و قبلی بیمار جهت پایش روند تغییرات"
  ],
  "ophthalmology-app": [
    "اپ چشم‌پزشکی هوشمند آتیلای — صفحه هیرو با تصویر فوندوس و تحلیل هوش مصنوعی شبکیه",
    "اپ چشم‌پزشکی آتیلای — اسکن فوندوس و تشخیص رتینوپاتی دیابتی متوسط با احتمال ۸۷ درصد",
    "اپ چشم‌پزشکی آتیلای — گزارش هوشمند AI شامل امتیاز ریسک ۷۲ و احتمال بیماری‌های شبکیه",
    "اپ چشم‌پزشکی آتیلای — آرشیو بیماران، جستجو و مشاهده پرونده کامل بیمار",
    "اپ چشم‌پزشکی آتیلای — دموی زنده عملکرد مدل هوش مصنوعی روی تصاویر فوندوس",
    "اپ چشم‌پزشکی آتیلای — بررسی توسط پزشک متخصص و مزایای استفاده در کلینیک",
    "اپ چشم‌پزشکی آتیلای — دقت مدل هوش مصنوعی ۹۵.۴ درصد بر اساس داده‌های بالینی",
    "اپ چشم‌پزشکی آتیلای — امنیت و ذخیره‌سازی ابری با رمزنگاری در سطح سازمانی"
  ],
  "ecg-arrhythmia": [
    "پروژه تشخیص آریتمی قلبی با 1D-CNN — داشبورد ECG Monitor، نمایش بلادرنگ سیگنال Lead II و ضربان قلب",
    "پروژه تشخیص آریتمی قلبی — هایلایت لحظه‌ای PVC روی سیگنال ECG و توزیع احتمال ۱۲ کلاس آریتمی",
    "پروژه تشخیص آریتمی قلبی — اپ موبایل بیمار با هشدار آریتمی، گزارش روزانه و میانگین ضربان قلب",
    "پروژه تشخیص آریتمی قلبی — نمونه خروجی گزارش پایش ECG قابل دانلود همراه با جدول رویدادها و نمودار"
  ]
};
function getGalleryOverride(slug) {
  return GALLERY_OVERRIDES[slug];
}
function getGalleryMultiOverride(slug) {
  return GALLERY_MULTI_OVERRIDES[slug];
}
function getGalleryAltOverride(slug) {
  return GALLERY_ALT_OVERRIDES[slug];
}
function getLuxuryGalleryImage(slug, category, type = "project") {
  const unique = getCover(slug);
  if (unique) return unique;
  const direct = type === "project" ? PROJECT_COVERS[slug] : APP_COVERS[slug];
  if (direct) return direct;
  if (category.includes("پزشکی") || category.includes("سلامت")) {
    return type === "app" ? COVER_IMAGES.medicalMobile : COVER_IMAGES.medicalImaging;
  }
  if (category.includes("صنعتی")) return COVER_IMAGES.industrialDefect;
  if (category.includes("مالی") || category.includes("بانکی") || category.includes("کسب‌وکار")) return COVER_IMAGES.fintechFraud;
  if (category.includes("تجاری") || category.includes("فروشگاهی")) return COVER_IMAGES.recommender;
  if (category.includes("دولتی")) return COVER_IMAGES.smartCity;
  if (category.includes("گردشگری")) return COVER_IMAGES.llmKnowledge;
  if (category.includes("کشاورزی")) return COVER_IMAGES.agriculture;
  if (category.includes("صوت")) return COVER_IMAGES.speechStt;
  if (category.includes("دستیار") || category.includes("حقوقی") || category.includes("آموزشی") || category.includes("دانشگاهی")) return COVER_IMAGES.llmKnowledge;
  if (category.includes("بینایی")) return COVER_IMAGES.industrialDefect;
  return type === "app" ? COVER_IMAGES.medicalMobile : COVER_IMAGES.industrialDefect;
}
const ATILLAI_ORBIT_LOGO = atillaiLogoAsset.url;
const NILIX_BOT_LOGO = nilixBotAsset.url;
function AtilLogo({ size = 40, showText = true, className = "" }) {
  const ring = Math.round(size * 1.35);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2.5 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        whileHover: { scale: 1.06 },
        transition: { type: "spring", stiffness: 200, damping: 14 },
        className: "relative flex items-center justify-center",
        style: { width: ring, height: ring },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.svg,
            {
              "aria-hidden": true,
              width: ring,
              height: ring,
              viewBox: "0 0 100 100",
              className: "absolute inset-0",
              animate: { rotate: 360 },
              transition: { duration: 18, repeat: Infinity, ease: "linear" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "atil-ring", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.92 0.14 95)", stopOpacity: "0.9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "oklch(0.75 0.18 200)", stopOpacity: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.62 0.18 50)", stopOpacity: "0.9" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "46", fill: "none", stroke: "url(#atil-ring)", strokeWidth: "0.8", strokeDasharray: "2 3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", fill: "none", stroke: "oklch(0.85 0.16 85 / 0.35)", strokeWidth: "0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "4", r: "2.2", fill: "oklch(0.95 0.12 90)", style: { filter: "drop-shadow(0 0 4px oklch(0.85 0.18 85))" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "96", r: "1.6", fill: "oklch(0.75 0.18 200)", style: { filter: "drop-shadow(0 0 3px oklch(0.75 0.18 200))" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "50", r: "1.3", fill: "oklch(0.92 0.14 95)", opacity: "0.8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "96", cy: "50", r: "1.3", fill: "oklch(0.92 0.14 95)", opacity: "0.8" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              "aria-hidden": true,
              className: "absolute inset-1 rounded-full border border-amber-300/15",
              animate: { rotate: -360 },
              transition: { duration: 28, repeat: Infinity, ease: "linear" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-full ring-1 ring-amber-200/40", style: { width: size, height: size }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full blur-xl opacity-70", style: { background: "var(--grad-gold)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: ATILLAI_ORBIT_LOGO,
                alt: "ATiLLAi",
                width: size,
                height: size,
                className: "relative h-full w-full rounded-full object-cover object-center"
              }
            )
          ] })
        ]
      }
    ),
    showText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "leading-none text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-baseline text-[26px] tracking-tight",
          style: { fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, serif', fontWeight: 700 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent", children: "T" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent", style: { textTransform: "lowercase", fontSize: "0.78em" }, children: "i" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent", children: "LL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", style: { textTransform: "lowercase", fontSize: "0.78em" }, children: "i" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mt-1.5 text-[9.5px] font-light uppercase tracking-[0.4em] text-muted-foreground",
          style: { fontFamily: '"Montserrat", "Inter", sans-serif' },
          children: "Intelligent Solutions"
        }
      )
    ] })
  ] });
}
const DICTS = {
  fa: {
    "nav.home": "خانه",
    "nav.services": "خدمات",
    "nav.apps": "اپلیکیشن‌ها",
    "nav.projects": "پروژه‌ها",
    "nav.kids": "تست کودکان",
    "nav.about": "درباره ما",
    "nav.contact": "تماس",
    "cta.order": "ثبت سفارش پروژه",
    "hero.badge": "مرجع تخصصی مشاوره، آموزش و اجرای پروژه‌های هوش مصنوعی، یادگیری ماشین و علم داده",
    "hero.l1": "هوش مصنوعی؛ نقطه آغاز تحول کسب‌وکار شما",
    "hero.l2": "",
    "hero.l3": "",
    "lang.label": "زبان"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.apps": "Apps",
    "nav.projects": "Projects",
    "nav.kids": "Kids Test",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.order": "Start Your Project",
    "hero.badge": "Expert Consulting & Delivery for AI, Machine Learning and Data Science Projects",
    "hero.l1": "Artificial Intelligence — the Starting Point of Your Business Transformation",
    "hero.l2": "",
    "hero.l3": "",
    "lang.label": "Language"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.apps": "التطبيقات",
    "nav.projects": "المشاريع",
    "nav.kids": "اختبار الأطفال",
    "nav.about": "من نحن",
    "nav.contact": "تواصل",
    "cta.order": "ابدأ مشروعك",
    "hero.badge": "استوديو الذكاء الاصطناعي للمؤسسات",
    "hero.l1": "الذكاء الاصطناعي؛ نقطة انطلاق تحوّل أعمالك",
    "hero.l2": "",
    "hero.l3": "",
    "lang.label": "اللغة"
  },
  tr: {
    "nav.home": "Anasayfa",
    "nav.services": "Hizmetler",
    "nav.apps": "Uygulamalar",
    "nav.projects": "Projeler",
    "nav.kids": "Çocuk Testi",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",
    "cta.order": "Projeyi Başlat",
    "hero.badge": "Kurumsal Yapay Zekâ Stüdyosu",
    "hero.l1": "Yapay zekâ; işletmenizin dönüşümünün başlangıç noktası",
    "hero.l2": "",
    "hero.l3": "",
    "lang.label": "Dil"
  }
};
const DIRS = { fa: "rtl", en: "ltr", ar: "rtl", tr: "ltr" };
const I18nCtx = reactExports.createContext({ lang: "fa", setLang: () => {
}, t: (k) => k, dir: "rtl" });
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("fa");
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem("ATiLLAi.lang");
      if (saved && DICTS[saved]) setLangState(saved);
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = DIRS[lang];
    }
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem("ATiLLAi.lang", l);
    } catch {
    }
  };
  const t = (k) => DICTS[lang][k] ?? DICTS.fa[k] ?? k;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nCtx.Provider, { value: { lang, setLang, t, dir: DIRS[lang] }, children });
}
const useI18n = () => reactExports.useContext(I18nCtx);
const LANG_LABEL = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  tr: "Türkçe"
};
const SERVICE_DETAILS = [
  {
    slug: "deep-learning",
    title: "یادگیری عمیق",
    tagline: "شبکه‌های عصبی پیشرفته برای حل پیچیده‌ترین مسائل",
    desc: "از طراحی معماری اختصاصی شبکه عصبی تا آموزش، Fine-tune و استقرار مدل‌های Transformer، CNN، RNN و LLM در محیط Production.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    features: [
      "طراحی معماری اختصاصی شبکه عصبی متناسب با داده شما",
      "آموزش روی GPU و TPU با تکنیک‌های Mixed Precision",
      "Transfer Learning و Fine-Tune مدل‌های Pretrained",
      "بهینه‌سازی، Pruning و Quantization مدل برای Edge",
      "تفسیرپذیری مدل با Grad-CAM، SHAP و LIME"
    ],
    technologies: ["PyTorch", "TensorFlow", "Keras", "JAX", "Hugging Face", "ONNX", "CUDA", "TensorRT"],
    useCases: [
      { title: "تشخیص پزشکی", desc: "تشخیص بیماری از تصاویر MRI، CT و فوندوس با دقت بالای ۹۵٪." },
      { title: "بینایی صنعتی", desc: "کنترل کیفیت Real-time خط تولید با YOLO و Vision Transformer." },
      { title: "پردازش زبان", desc: "ساخت چت‌بات‌های اختصاصی فارسی و خلاصه‌سازی هوشمند متون." }
    ],
    process: [
      { step: "تحلیل داده", desc: "بررسی کیفیت، حجم و ساختار داده ورودی" },
      { step: "طراحی معماری", desc: "انتخاب بهترین معماری متناسب با مسئله" },
      { step: "آموزش و Tuning", desc: "آموزش روی GPU و تنظیم Hyperparameter" },
      { step: "ارزیابی و استقرار", desc: "تست، بهینه‌سازی و Deploy نهایی" }
    ],
    deliverables: ["مدل آموزش‌دیده", "کد کامل قابل اجرا", "مستندات فنی", "گزارش ارزیابی", "پشتیبانی پس از تحویل"]
  },
  {
    slug: "machine-learning",
    title: "یادگیری ماشین",
    tagline: "از داده‌های خام تا تصمیم‌های هوشمند",
    desc: "پیاده‌سازی الگوریتم‌های کلاسیک و مدرن ML برای دسته‌بندی، رگرسیون، خوشه‌بندی و یادگیری تقویتی.",
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    features: [
      "پیاده‌سازی Supervised، Unsupervised و Reinforcement Learning",
      "Feature Engineering حرفه‌ای و انتخاب ویژگی",
      "Ensemble Models و Boosting (XGBoost، LightGBM، CatBoost)",
      "AutoML و Hyperparameter Tuning خودکار",
      "تفسیر مدل و گزارش‌گیری مدیریتی"
    ],
    technologies: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Optuna", "MLflow", "Pandas", "NumPy"],
    useCases: [
      { title: "پیش‌بینی فروش", desc: "پیش‌بینی دقیق تقاضا و موجودی انبار برای فروشگاه‌ها." },
      { title: "تشخیص تقلب", desc: "شناسایی تراکنش‌های مشکوک بانکی Real-time." },
      { title: "Customer Segmentation", desc: "بخش‌بندی هوشمند مشتریان برای کمپین‌های هدفمند." }
    ],
    process: [
      { step: "EDA", desc: "تحلیل اکتشافی داده‌ها و کشف الگوها" },
      { step: "Feature Engineering", desc: "ساخت و انتخاب ویژگی‌های مؤثر" },
      { step: "Model Selection", desc: "مقایسه و انتخاب بهترین الگوریتم" },
      { step: "Deploy و Monitor", desc: "استقرار و نظارت بر کارایی مدل" }
    ],
    deliverables: ["مدل ML", "گزارش EDA کامل", "Pipeline قابل تکرار", "API پیش‌بینی", "داشبورد تحلیلی"]
  },
  {
    slug: "statistical-analysis",
    title: "تحلیل آماری",
    tagline: "تصمیم‌گیری دقیق بر پایه شواهد علمی",
    desc: "تحلیل‌های آماری توصیفی و استنباطی، مدل‌سازی چندمتغیره، آزمون فرض و آمار بیزی برای پایان‌نامه و پژوهش.",
    icon: ChartColumn,
    color: "from-amber-500 to-orange-500",
    features: [
      "آزمون فرض پارامتریک و ناپارامتریک",
      "رگرسیون خطی، لجستیک، چندجمله‌ای و هرمی (HLM)",
      "ANOVA، MANOVA، ANCOVA و طرح‌های آزمایش",
      "تحلیل عاملی، مسیر و معادلات ساختاری (SEM)",
      "آمار بیزی، MCMC و Bayesian Networks"
    ],
    technologies: ["SPSS", "R", "STATA", "AMOS", "SmartPLS", "JASP", "PyMC", "Stan"],
    useCases: [
      { title: "پایان‌نامه ارشد و دکتری", desc: "تحلیل آماری کامل با نگارش فصل ۴ و گزارش APA." },
      { title: "پژوهش پزشکی و رفتاری", desc: "متاآنالیز، Survival Analysis و آزمون‌های بالینی." },
      { title: "پژوهش بازار", desc: "تحلیل پرسشنامه، اعتبار، روایی و SEM." }
    ],
    process: [
      { step: "طراحی پژوهش", desc: "تعیین فرضیه‌ها و انتخاب آزمون مناسب" },
      { step: "آماده‌سازی داده", desc: "پاکسازی، بازکدگذاری و بررسی پیش‌فرض‌ها" },
      { step: "تحلیل", desc: "اجرای آزمون‌ها و مدل‌سازی آماری" },
      { step: "گزارش", desc: "نگارش حرفه‌ای فصل ۴ پایان‌نامه" }
    ],
    deliverables: ["فایل خروجی SPSS/R", "گزارش تحلیل کامل", "جداول استاندارد APA", "تفسیر فارسی نتایج", "آماده‌سازی برای دفاع"]
  },
  {
    slug: "data-science",
    title: "علم داده و Big Data",
    tagline: "از داده‌های پیچیده تا بینش‌های کسب‌وکاری",
    desc: "پایپ‌لاین کامل ETL، پاکسازی، تحلیل، بصری‌سازی و طراحی Data Warehouse برای سازمان‌های داده‌محور.",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    features: [
      "طراحی Pipeline داده Real-time و Batch",
      "ETL/ELT با Airflow، dbt و Spark",
      "Data Lake و Data Warehouse Architecture",
      "بصری‌سازی پیشرفته با Power BI و Tableau",
      "Big Data Processing با Hadoop و Spark"
    ],
    technologies: ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "Power BI", "Tableau", "Kafka"],
    useCases: [
      { title: "داشبورد مدیریتی", desc: "BI Real-time برای مانیتورینگ KPI سازمان." },
      { title: "Data Warehouse بانکی", desc: "طراحی DWH برای میلیاردها تراکنش." },
      { title: "تحلیل لاگ", desc: "پردازش لاگ‌های سرور و کشف رفتار کاربران." }
    ],
    process: [
      { step: "Discovery", desc: "بررسی منابع داده و نیازمندی‌ها" },
      { step: "Architecture", desc: "طراحی معماری داده مقیاس‌پذیر" },
      { step: "Implementation", desc: "پیاده‌سازی ETL و انبار داده" },
      { step: "Visualization", desc: "ساخت داشبورد و گزارش‌های تعاملی" }
    ],
    deliverables: ["معماری داده", "Pipeline‌های ETL", "Data Warehouse", "داشبورد BI", "مستندات کامل"]
  },
  {
    slug: "time-series",
    title: "پیش‌بینی سری زمانی",
    tagline: "آینده کسب‌وکار شما را امروز ببینید",
    desc: "مدل‌سازی پیش‌بینی فروش، قیمت، تقاضا و رفتار بازار با ARIMA، Prophet، LSTM و Transformer سری زمانی.",
    icon: ChartLine,
    color: "from-pink-500 to-rose-500",
    features: [
      "مدل‌های آماری ARIMA، SARIMA، VAR و GARCH",
      "Deep Learning با LSTM، GRU و Temporal Fusion Transformer",
      "Anomaly Detection در سری زمانی",
      "Multi-step و Multi-variate Forecasting",
      "پیش‌بینی با عدم قطعیت (Probabilistic Forecasting)"
    ],
    technologies: ["Prophet", "statsmodels", "Darts", "GluonTS", "Kats", "PyTorch Forecasting"],
    useCases: [
      { title: "پیش‌بینی فروش", desc: "پیش‌بینی روزانه/هفتگی فروش و موجودی." },
      { title: "بازارهای مالی", desc: "مدل‌سازی قیمت سهام، طلا و رمزارز." },
      { title: "مصرف انرژی", desc: "پیش‌بینی بار شبکه برق و گاز." }
    ],
    process: [
      { step: "تحلیل سری", desc: "بررسی فصلی بودن، روند و ایستایی" },
      { step: "Modeling", desc: "آموزش مدل‌های آماری و عمیق" },
      { step: "Backtesting", desc: "ارزیابی روی داده‌های گذشته" },
      { step: "Forecast", desc: "پیش‌بینی نهایی با بازه اطمینان" }
    ],
    deliverables: ["مدل پیش‌بینی", "گزارش دقت", "نمودارهای تعاملی", "API پیش‌بینی", "داشبورد مانیتورینگ"]
  },
  {
    slug: "thesis-implementation",
    title: "پیاده‌سازی پایان‌نامه",
    tagline: "از ایده تا دفاع موفق",
    desc: "اجرای کامل پایان‌نامه کارشناسی، ارشد و دکتری همراه با کدنویسی، اجرا، تحلیل، گزارش و آماده‌سازی دفاع.",
    icon: CodeXml,
    color: "from-fuchsia-500 to-purple-500",
    features: [
      "پیاده‌سازی کامل الگوریتم‌های مقاله بیس",
      "بهبود و توسعه روش پیشنهادی",
      "مقایسه با State-of-the-Art",
      "نگارش فصل ۴ پایان‌نامه",
      "آماده‌سازی اسلاید و کوچینگ دفاع"
    ],
    technologies: ["Python", "MATLAB", "R", "Java", "C++", "LaTeX"],
    useCases: [
      { title: "پایان‌نامه AI/ML", desc: "پیاده‌سازی کامل با مجموعه داده استاندارد." },
      { title: "پایان‌نامه مهندسی", desc: "شبیه‌سازی و تحلیل عددی پیشرفته." },
      { title: "پایان‌نامه پزشکی", desc: "تحلیل داده بالینی و مدل‌سازی." }
    ],
    process: [
      { step: "مطالعه مقاله", desc: "بررسی دقیق مقاله بیس" },
      { step: "Implementation", desc: "کدنویسی و اجرا" },
      { step: "Comparison", desc: "مقایسه با روش‌های موجود" },
      { step: "Documentation", desc: "نگارش فصل ۴ و دفاع" }
    ],
    deliverables: ["کد کامل اجرایی", "فصل ۴ پایان‌نامه", "نتایج و نمودارها", "اسلاید دفاع", "کوچینگ دفاعیه"]
  },
  {
    slug: "scientific-writing",
    title: "مقاله‌نویسی علمی ISI/Q1",
    tagline: "از پژوهش شما تا انتشار جهانی",
    desc: "نگارش، ترجمه تخصصی، ادیت نیتیو و سابمیت مقاله در ژورنال‌های ISI، Scopus، Q1 و کنفرانس‌های معتبر دنیا.",
    icon: FileText,
    color: "from-rose-500 to-red-500",
    features: [
      "نگارش مقاله از صفر بر اساس داده شما",
      "ترجمه تخصصی فارسی به انگلیسی",
      "ادیت نیتیو توسط متخصصان زبان",
      "انتخاب ژورنال مناسب و سابمیت",
      "پاسخ به ریوایزر و بازنویسی"
    ],
    technologies: ["LaTeX", "Overleaf", "EndNote", "Grammarly", "Mendeley"],
    useCases: [
      { title: "مقاله Q1 و Q2", desc: "نگارش حرفه‌ای برای ژورنال‌های IEEE، Elsevier، Springer." },
      { title: "Review Paper", desc: "مرور سیستماتیک و متاآنالیز." },
      { title: "Conference Paper", desc: "مقاله برای کنفرانس‌های NeurIPS، CVPR، ICML." }
    ],
    process: [
      { step: "Outline", desc: "طراحی ساختار مقاله" },
      { step: "Writing", desc: "نگارش بخش به بخش" },
      { step: "Editing", desc: "ادیت نیتیو و بازخوانی" },
      { step: "Submission", desc: "سابمیت و پیگیری" }
    ],
    deliverables: ["فایل مقاله نهایی", "Cover Letter", "Response to Reviewers", "گواهی ادیت نیتیو"]
  },
  {
    slug: "ai-apps",
    title: "طراحی و ساخت اپلیکیشن AI",
    tagline: "ایده هوشمند خود را به محصول تبدیل کنید",
    desc: "طراحی و توسعه اپلیکیشن موبایل اندروید، iOS و کراس‌پلتفرم با هسته هوش مصنوعی برای استارتاپ‌ها و کسب‌وکارها.",
    icon: Smartphone,
    color: "from-sky-500 to-cyan-500",
    features: [
      "اپلیکیشن Native Android و iOS",
      "کراس‌پلتفرم با Flutter و React Native",
      "ادغام مدل‌های AI روی دیوایس (TensorFlow Lite، Core ML)",
      "ادغام API های LLM و Generative AI",
      "طراحی UI/UX مدرن و حرفه‌ای"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "TensorFlow Lite", "Core ML", "Firebase"],
    useCases: [
      { title: "اپ پزشکی هوشمند", desc: "تشخیص بیماری از تصویر روی موبایل." },
      { title: "دستیار صوتی فارسی", desc: "STT/TTS فارسی با LLM." },
      { title: "اپ تجاری AI", desc: "توصیه‌گر محصول و چت‌بات فروش." }
    ],
    process: [
      { step: "Discovery", desc: "تحلیل نیاز و User Story" },
      { step: "UI/UX Design", desc: "طراحی پروتوتایپ تعاملی" },
      { step: "Development", desc: "توسعه فرانت و بک‌اند" },
      { step: "Launch", desc: "انتشار در استورها" }
    ],
    deliverables: ["اپ کامل اندروید/iOS", "بک‌اند و API", "Source Code", "انتشار در Store", "پشتیبانی ۶ ماهه"]
  },
  {
    slug: "smart-website",
    title: "طراحی وبسایت هوشمند",
    tagline: "وبسایتی که فکر می‌کند",
    desc: "طراحی وبسایت مدرن، Responsive و سریع همراه با چت‌بات هوشمند، سیستم توصیه‌گر و موتور جستجوی AI.",
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
    features: [
      "طراحی Modern و Premium UI/UX",
      "Performance و SEO حرفه‌ای",
      "ادغام چت‌بات LLM فارسی",
      "سیستم توصیه‌گر محصول و محتوا",
      "داشبورد ادمین و آنالیتیکس"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    useCases: [
      { title: "فروشگاه آنلاین AI", desc: "توصیه‌گر هوشمند و جستجوی سمنتیک." },
      { title: "وبسایت سازمانی", desc: "پنل مدیریت و چت پشتیبانی AI." },
      { title: "پلتفرم محتوایی", desc: "خلاصه‌سازی و دسته‌بندی خودکار محتوا." }
    ],
    process: [
      { step: "طراحی", desc: "UI/UX و پروتوتایپ Figma" },
      { step: "Development", desc: "توسعه فرانت و بک" },
      { step: "AI Integration", desc: "ادغام قابلیت‌های هوشمند" },
      { step: "Launch", desc: "Deploy روی CDN جهانی" }
    ],
    deliverables: ["وبسایت کامل Responsive", "پنل مدیریت", "چت‌بات", "SEO Setup", "هاست و دامنه"]
  },
  {
    slug: "mlops",
    title: "MLOps و استقرار ابری",
    tagline: "از مدل آزمایشی تا Production مقیاس‌پذیر",
    desc: "Dockerize، Kubernetes، CI/CD، Monitoring و استقرار مدل‌های ML روی AWS، GCP و Azure با کیفیت Enterprise.",
    icon: Cloud,
    color: "from-teal-500 to-emerald-500",
    features: [
      "Containerization با Docker و Kubernetes",
      "CI/CD Pipeline برای مدل‌های ML",
      "Model Monitoring و Drift Detection",
      "A/B Testing و Canary Deployment",
      "Auto-scaling و Load Balancing"
    ],
    technologies: ["Docker", "Kubernetes", "MLflow", "Kubeflow", "AWS SageMaker", "GCP Vertex AI", "Azure ML"],
    useCases: [
      { title: "API پیش‌بینی مقیاس‌پذیر", desc: "Serving میلیون درخواست در روز." },
      { title: "Batch Inference", desc: "پردازش حجم بالا روی Spark Cluster." },
      { title: "Edge Deployment", desc: "استقرار مدل روی Jetson و موبایل." }
    ],
    process: [
      { step: "Audit", desc: "بررسی مدل و زیرساخت موجود" },
      { step: "Containerize", desc: "Docker و K8s" },
      { step: "CI/CD", desc: "اتوماسیون آموزش و دیپلوی" },
      { step: "Monitor", desc: "نظارت بر کارایی مدل" }
    ],
    deliverables: ["Container Image", "K8s Manifests", "CI/CD Pipeline", "Dashboard مانیتورینگ", "مستندات DevOps"]
  },
  {
    slug: "training",
    title: "تدریس و کارگاه تخصصی",
    tagline: "دانش روزآمد، با تجربه واقعی",
    desc: "دوره‌های خصوصی، گروهی و سازمانی Python، یادگیری ماشین، عمیق، LLM و علم داده با پروژه عملی واقعی.",
    icon: Presentation,
    color: "from-amber-500 to-yellow-500",
    features: [
      "دوره خصوصی One-on-One",
      "کارگاه سازمانی برای تیم‌های فنی",
      "محتوا و پروژه اختصاصی متناسب با سطح",
      "ضبط جلسات و پشتیبانی نامحدود",
      "گواهی پایان دوره معتبر"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "Jupyter"],
    useCases: [
      { title: "آموزش سازمانی", desc: "Upskilling تیم Data و IT شرکت‌ها." },
      { title: "دوره دانشجویی", desc: "آماده‌سازی برای پایان‌نامه و کار." },
      { title: "کارگاه LLM", desc: "Fine-tune و RAG عملی." }
    ],
    process: [
      { step: "نیازسنجی", desc: "بررسی سطح و هدف یادگیرنده" },
      { step: "طراحی سرفصل", desc: "محتوای اختصاصی و پروژه‌محور" },
      { step: "تدریس", desc: "جلسات تعاملی آنلاین/حضوری" },
      { step: "پروژه پایانی", desc: "اجرای پروژه واقعی" }
    ],
    deliverables: ["محتوای آموزشی", "ضبط جلسات", "کدها و نوت‌بوک‌ها", "پروژه پایانی", "گواهی"]
  },
  {
    slug: "proposal-defense",
    title: "مشاوره پروپوزال و دفاع",
    tagline: "موضوع نو، دفاع قوی",
    desc: "انتخاب موضوع نوآور و به‌روز، نگارش پروپوزال حرفه‌ای، طراحی اسلاید دفاع و کوچینگ تخصصی جلسه دفاعیه.",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
    features: [
      "پیشنهاد ۵ موضوع نوآور و قابل دفاع",
      "مرور ادبیات و State-of-the-Art",
      "نگارش کامل پروپوزال ارشد و دکتری",
      "طراحی اسلاید حرفه‌ای دفاع",
      "کوچینگ و تمرین جلسه دفاعیه"
    ],
    technologies: ["LaTeX", "PowerPoint", "Beamer", "Mendeley"],
    useCases: [
      { title: "پروپوزال دکتری", desc: "موضوع نوآور با گپ پژوهشی روشن." },
      { title: "پروپوزال ارشد", desc: "موضوع به‌روز و قابل اجرا در زمان محدود." },
      { title: "آماده‌سازی دفاع", desc: "تمرین Q&A و کوچینگ کامل." }
    ],
    process: [
      { step: "ایده‌پردازی", desc: "بررسی علاقه و رشته" },
      { step: "Literature Review", desc: "مرور مقالات روز" },
      { step: "نگارش پروپوزال", desc: "تدوین حرفه‌ای" },
      { step: "دفاع", desc: "اسلاید و کوچینگ" }
    ],
    deliverables: ["پروپوزال کامل", "مرور ادبیات", "اسلاید دفاع", "تمرین جلسه دفاع"]
  },
  {
    slug: "kids-courses",
    title: "دوره‌های آموزشی کودکان و نوجوانان",
    tagline: "آموزش هوش مصنوعی، برنامه‌نویسی و تفکر داده‌محور برای تمامی سنین",
    desc: "دوره‌های پلکانی برای کودکان، نوجوانان، دانش‌آموزان و دانشجویان — از آشنایی بازی‌محور با هوش مصنوعی تا پایتون، رباتیک، علم داده و آمادگی المپیاد و کنکور رشته‌های فنی.",
    icon: GraduationCap,
    color: "from-pink-500 to-amber-500",
    features: [
      "گروه سنی ۶ تا ۹ سال: آشنایی بازی‌محور با هوش مصنوعی و تفکر منطقی",
      "گروه سنی ۱۰ تا ۱۴ سال: اسکرَچ، پایتون مقدماتی و رباتیک سرگرم‌کننده",
      "گروه سنی ۱۵ تا ۱۸ سال: پایتون پیشرفته، یادگیری ماشین و آمادگی المپیاد",
      "دانشجویان: علم داده، Deep Learning و پروژه‌محور صنعتی",
      "کلاس‌های آنلاین و حضوری در تبریز با گواهی پایان دوره",
      "آزمون استعدادسنجی رایگان قبل از ثبت‌نام"
    ],
    technologies: ["Scratch", "Python", "MicroPython", "Arduino", "TensorFlow Lite", "Teachable Machine", "Colab"],
    useCases: [
      { title: "کودک ۶–۹ سال", desc: "بازی‌های هوشمند، آشنایی با کامپیوتر و خلاقیت دیجیتال." },
      { title: "نوجوان ۱۰–۱۴ سال", desc: "ساخت بازی و ربات با Scratch، Arduino و پایتون." },
      { title: "دبیرستانی ۱۵–۱۸ سال", desc: "مدل‌سازی داده، شبکه‌های عصبی و آمادگی المپیاد." },
      { title: "دانشجو و بزرگسال", desc: "علم داده، Deep Learning و پورتفولیوی کاری." }
    ],
    process: [
      { step: "استعدادسنجی", desc: "آزمون کوتاه برای انتخاب مسیر مناسب" },
      { step: "ثبت‌نام و گروه‌بندی", desc: "گروه‌های هم‌سن و هم‌سطح" },
      { step: "آموزش پروژه‌محور", desc: "هر جلسه یک خروجی قابل ارائه" },
      { step: "گواهی و مشاوره ادامه مسیر", desc: "گواهی پایان دوره و راهنمایی شغلی" }
    ],
    deliverables: ["گواهی پایان دوره", "پروژه عملی نهایی", "ویدیوی جلسات", "پشتیبانی در گروه خصوصی", "تخفیف دوره بعدی"]
  }
];
const getServiceBySlug = (slug) => SERVICE_DETAILS.find((s) => s.slug === slug);
const APPS = [
  {
    slug: "skin-diagnosis",
    title: "اپ تشخیص بیماری پوست",
    cat: "پزشکی",
    short: "تشخیص آنی ضایعات پوستی با Vision Transformer روی دیوایس.",
    longDesc: "اپلیکیشن موبایلی برای تشخیص اولیه ۱۲ بیماری شایع پوستی (ملانوما، اگزما، آکنه و...) با دقت بالای ۹۲٪ که کاملاً روی دستگاه اجرا می‌شود و نیازی به ارسال تصویر به سرور ندارد. مناسب برای پزشکان عمومی و کاربر نهایی.",
    features: ["تشخیص On-Device بدون اینترنت", "حفظ حریم خصوصی کامل", "گزارش PDF برای ارجاع به متخصص", "تاریخچه تصاویر بیمار", "چندزبانه (فارسی/انگلیسی/ترکی)"],
    tech: ["Flutter", "TFLite", "EfficientNet", "SQLite", "Python", "Docker", "NumPy", "Git"],
    icon: HeartPulse,
    color: "from-pink-500 to-rose-500",
    screens: [
      { title: "اسکن ضایعه", subtitle: "دوربین + راهنمای زاویه", variant: "phone" },
      { title: "نتیجه تشخیص", subtitle: "احتمال + توضیحات", variant: "phone" },
      { title: "تاریخچه بیمار", subtitle: "روند تغییرات", variant: "phone" }
    ]
  },
  {
    slug: "dental-ai",
    title: "اپ دندانپزشکی هوشمند",
    cat: "پزشکی",
    short: "تشخیص پوسیدگی، عفونت و مشکلات لثه از تصاویر دندان و رادیوگرافی پانورامیک.",
    longDesc: "دستیار هوشمند دندانپزشک با قابلیت تحلیل خودکار رادیوگرافی پانورامیک و پری‌اپیکال، شناسایی پوسیدگی، آبسه، ایمپلنت و طراحی پلن درمان. مناسب کلینیک‌های دندانپزشکی و آموزش دانشجویان.",
    features: ["تشخیص پوسیدگی روی X-Ray", "شناسایی ایمپلنت و ترمیم", "طراحی پلن درمان خودکار", "گزارش بصری برای بیمار", "اتصال به نرم‌افزار کلینیک"],
    tech: ["Flutter", "PyTorch", "U-Net", "FastAPI", "PostgreSQL", "Python", "Docker", "NumPy", "Git"],
    icon: Smile,
    color: "from-cyan-500 to-teal-500",
    screens: [
      { title: "X-Ray Analyzer", subtitle: "تحلیل پانورامیک", variant: "phone" },
      { title: "پلن درمان", subtitle: "اولویت‌بندی هوشمند", variant: "phone" },
      { title: "گزارش بیمار", subtitle: "نمای ساده و گرافیکی", variant: "phone" }
    ]
  },
  {
    slug: "mammo-ai",
    title: "اپ دستیار هوشمند ماموگرافی",
    cat: "پزشکی",
    short: "تحلیل خودکار تصاویر ماموگرافی با هوش مصنوعی، ارزیابی ریسک و گزارش BI-RADS.",
    longDesc: "Mammo AI دستیار هوشمند رادیولوژیست برای تحلیل تصاویر ماموگرافی است. شناسایی ناهنجاری‌ها و ضایعات مشکوک، دسته‌بندی بر اساس BI-RADS، مقایسه با تصاویر قبلی بیمار و تولید گزارش ساختاریافته با خروجی PDF.",
    features: ["تشخیص خودکار توده و ناحیه مشکوک", "دسته‌بندی BI-RADS با دقت بالا", "مقایسه هوشمند با تصاویر قبلی بیمار", "گزارش ساختاریافته PDF برای ارجاع", "حفاظت کامل داده‌های بیمار"],
    tech: ["PyTorch", "Vision Transformer", "FastAPI", "DICOM", "Next.js", "PostgreSQL", "Docker", "Python"],
    icon: HeartPulse,
    color: "from-fuchsia-500 to-purple-600",
    screens: [
      { title: "صفحه اصلی Mammo AI", subtitle: "دستیار هوشمند ماموگرافی", variant: "phone" },
      { title: "تحلیل ماموگرافی", subtitle: "هایلایت ناحیه مشکوک + BI-RADS", variant: "dashboard" },
      { title: "گزارش ساختاریافته", subtitle: "خروجی PDF برای پزشک و بیمار", variant: "card" },
      { title: "مقایسه در طول زمان", subtitle: "تصویر فعلی و قبلی", variant: "dashboard" }
    ]
  },
  {
    slug: "ophthalmology-app",
    title: "اپ چشم‌پزشکی هوشمند",
    cat: "پزشکی",
    short: "غربالگری رتینوپاتی، گلوکوم و کاتاراکت با تصاویر فوندوس و OCT.",
    longDesc: "اپلیکیشن تخصصی برای چشم‌پزشکان و اپتومتریست‌ها که با اتصال به دوربین فوندوس موبایل، بیماری‌های رایج شبکیه را غربالگری می‌کند. مناسب کمپین‌های غربالگری دیابتی و کلینیک‌های دور.",
    features: ["تشخیص ۵ سطح رتینوپاتی", "غربالگری گلوکوم از Cup-to-Disc Ratio", "کنترل کیفیت تصویر فوندوس", "ادغام با Volk و Optomed", "گزارش ارجاع فوری"],
    tech: ["React Native", "TFLite", "EfficientNet", "DICOM", "Python", "Docker", "NumPy", "Git"],
    icon: Eye,
    color: "from-amber-500 to-orange-500",
    screens: [
      { title: "هیرو اپ چشم‌پزشکی", subtitle: "تشخیص سریع و دقیق با هوش مصنوعی", variant: "dashboard" },
      { title: "اسکن فوندوس", subtitle: "تشخیص رتینوپاتی دیابتی با احتمال ۸۷٪", variant: "dashboard" },
      { title: "گزارش هوشمند AI", subtitle: "Risk Score و احتمال بیماری", variant: "dashboard" },
      { title: "آرشیو بیماران", subtitle: "جستجو و پیگیری ویزیت‌ها", variant: "dashboard" },
      { title: "Live Demo", subtitle: "مشاهده عملکرد زنده مدل آتیلای", variant: "dashboard" },
      { title: "بررسی توسط پزشک", subtitle: "مزایای اپ در محیط کلینیک", variant: "dashboard" },
      { title: "دقت مدل ۹۵.۴٪", subtitle: "تأیید‌شده توسط داده‌های بالینی", variant: "dashboard" },
      { title: "امنیت و ذخیره‌سازی ابری", subtitle: "رمزنگاری در سطح سازمانی", variant: "dashboard" }
    ]
  },
  {
    slug: "legal-assistant",
    title: "اپ دستیار حقوقی هوشمند",
    cat: "حقوقی",
    short: "پاسخگو به سؤالات حقوقی، تنظیم قرارداد و آنالیز پرونده با LLM فارسی.",
    longDesc: "دستیار حقوقی مبتنی بر LLM Fine-tune شده روی قوانین ایران، آرای دیوان عالی و قرارداد‌های استاندارد. مناسب وکلا، دانشجویان حقوق و کاربر عمومی برای دریافت مشاوره اولیه و پیش‌نویس قرارداد.",
    features: ["پاسخ به سؤالات حقوقی فارسی", "تولید پیش‌نویس قرارداد", "خلاصه‌سازی پرونده", "جستجو در مجموعه قوانین", "تخمین زمان و هزینه دادرسی"],
    tech: ["React Native", "LLaMA 3", "RAG", "Pinecone", "FastAPI", "Python", "Docker", "NumPy", "Git"],
    icon: Scale,
    color: "from-violet-500 to-purple-500",
    screens: [
      { title: "چت حقوقی", subtitle: "پرسش و پاسخ آنی", variant: "phone" },
      { title: "تولید قرارداد", subtitle: "بر اساس فرم ساده", variant: "phone" },
      { title: "جستجوی قانون", subtitle: "مرتبط با مسئله شما", variant: "phone" }
    ]
  },
  {
    slug: "pediatric-symptom-checker",
    title: "اپ تشخیص علائم کودکان",
    cat: "پزشکی",
    short: "راهنمای والدین برای ارزیابی سریع علائم تب، جوش و رفتارهای نگران‌کننده کودک.",
    longDesc: "اپ AI ویژه والدین که با چند سؤال ساده درباره علائم کودک، اولویت اقدام (مراجعه فوری، عمومی، استراحت در منزل) را پیشنهاد می‌دهد. مبتنی بر گایدلاین‌های AAP و WHO با لوکالایز فارسی.",
    features: ["ارزیابی هوشمند علائم", "هشدار اورژانس", "تقویم واکسیناسیون", "رشد و قد/وزن", "کتابخانه آموزشی والدین"],
    tech: ["Flutter", "Decision Tree + LLM", "Firebase", "Python", "Docker", "NumPy", "Git"],
    icon: Baby,
    color: "from-rose-500 to-pink-400",
    screens: [
      { title: "ارزیابی علائم", subtitle: "سؤال‌های هوشمند", variant: "phone" },
      { title: "توصیه اقدام", subtitle: "اورژانس یا منزل", variant: "phone" },
      { title: "تقویم واکسن", subtitle: "یادآور خودکار", variant: "phone" }
    ]
  },
  {
    slug: "pill-identifier",
    title: "اپ تشخیص دارو از تصویر",
    cat: "پزشکی",
    short: "شناسایی قرص و دارو از روی شکل، رنگ و حک با دوربین موبایل.",
    longDesc: "اپ کمک به بیماران سالمند و داروسازان برای شناسایی سریع داروها از روی ظاهر آن‌ها، همراه با تداخل دارویی، عوارض و دوز مصرف. متصل به دیتابیس IFDA و FDA.",
    features: ["تشخیص دارو از عکس", "تداخل دارویی هوشمند", "یادآور مصرف", "آرشیو نسخه‌ها", "حالت سالمندی (فونت بزرگ)"],
    tech: ["Flutter", "CLIP", "OCR", "SQLite", "Python", "Docker", "NumPy", "Git"],
    icon: Pill,
    color: "from-emerald-500 to-green-500",
    screens: [
      { title: "اسکن قرص", subtitle: "دوربین + تشخیص", variant: "phone" },
      { title: "اطلاعات دارو", subtitle: "تداخل + دوز", variant: "phone" },
      { title: "یادآور مصرف", subtitle: "تقویم روزانه", variant: "phone" }
    ]
  },
  {
    slug: "mental-health-companion",
    title: "اپ همراه سلامت روان",
    cat: "پزشکی",
    short: "ژورنال احساسات + چت‌بات روان‌شناسی CBT با LLM فارسی.",
    longDesc: "اپلیکیشن سلامت روان با چت‌بات مبتنی بر CBT، ردیابی خلق و خو، تمرین‌های مدیتیشن و گزارش هفتگی به روان‌شناس. مناسب کاربر عمومی و کلینیک‌های روان‌درمانی.",
    features: ["چت‌بات CBT فارسی", "ژورنال خلق روزانه", "تمرینات Mindfulness", "گزارش به روان‌شناس", "هشدار بحران"],
    tech: ["Flutter", "GPT-4", "LangChain", "Firebase", "Python", "Docker", "NumPy", "Git"],
    icon: Brain,
    color: "from-indigo-500 to-violet-500",
    screens: [
      { title: "چت همدلانه", subtitle: "گفتگو با AI", variant: "phone" },
      { title: "Mood Tracker", subtitle: "نمودار هفتگی", variant: "phone" },
      { title: "تمرین تنفس", subtitle: "Mindfulness Guide", variant: "phone" }
    ]
  },
  {
    slug: "fitness-coach-ai",
    title: "اپ مربی بدنسازی AI",
    cat: "سلامت",
    short: "تشخیص فرم تمرین از دوربین و تصحیح بلادرنگ حرکات.",
    longDesc: "مربی هوشمند بدنسازی که با MediaPipe و Pose Estimation فرم تمرین کاربر را تحلیل می‌کند، اشتباهات را علامت می‌زند و برنامه تمرینی شخصی‌سازی شده ارائه می‌دهد.",
    features: ["تشخیص فرم Real-time", "شمارش تکرار خودکار", "برنامه شخصی‌سازی", "ردیابی پیشرفت", "Voice Coaching فارسی"],
    tech: ["Flutter", "MediaPipe", "TFLite", "Firebase", "Python", "Docker", "NumPy", "Git"],
    icon: Dumbbell,
    color: "from-orange-500 to-red-500",
    screens: [
      { title: "Form Analyzer", subtitle: "دوربین + اسکلت", variant: "phone" },
      { title: "برنامه روز", subtitle: "تمرین + ست", variant: "phone" },
      { title: "پیشرفت", subtitle: "آمار + رتبه", variant: "phone" }
    ]
  },
  {
    slug: "persian-llm-assistant",
    title: "دستیار هوشمند فارسی با LLM",
    cat: "دستیار AI",
    short: "چت‌بات سازمانی فارسی مبتنی بر LLaMA با RAG روی اسناد داخلی.",
    longDesc: "دستیار سازمانی که با اتصال به اسناد، ویکی و دیتابیس شرکت، به سؤالات کارمندان پاسخ می‌دهد. مناسب پشتیبانی داخلی، آموزش پرسنل و KB سازمانی.",
    features: ["RAG روی اسناد PDF/Word", "Voice Input فارسی", "ادغام Slack/Teams", "آنالیتیکس مکالمات", "نقش‌بندی کاربران"],
    tech: ["React Native", "LLaMA 3", "LangChain", "Pinecone", "FastAPI", "Python", "Docker", "NumPy", "Git"],
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-500",
    screens: [
      { title: "چت تخصصی", subtitle: "پاسخ از اسناد شما", variant: "phone" },
      { title: "آپلود سند", subtitle: "RAG خودکار", variant: "phone" },
      { title: "Analytics", subtitle: "آمار استفاده", variant: "dashboard" }
    ]
  },
  {
    slug: "ecommerce-recommender",
    title: "اپ فروشگاهی با توصیه‌گر AI",
    cat: "فروشگاهی",
    short: "موتور پیشنهاد محصول + جستجوی سمنتیک + تشخیص محصول از تصویر.",
    longDesc: "پلتفرم اپ فروشگاهی کامل با موتور توصیه‌گر شخصی‌سازی شده، جستجوی هوشمند با CLIP و تشخیص محصول از تصویر دوربین. آماده برای استارتاپ‌های e-commerce.",
    features: ["توصیه شخصی‌سازی", "Visual Search با عکس", "Voice Search فارسی", "Push Notification هوشمند", "پنل ادمین کامل"],
    tech: ["Flutter", "TFLite", "CLIP", "Firebase", "Stripe", "Python", "Docker", "NumPy", "Git"],
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-500",
    screens: [
      { title: "Home شخصی", subtitle: "برای شما", variant: "phone" },
      { title: "Visual Search", subtitle: "جستجو با عکس", variant: "phone" },
      { title: "سبد خرید", subtitle: "Checkout سریع", variant: "phone" }
    ]
  },
  {
    slug: "plate-recognition",
    title: "اپ شمارش پلاک خودرو",
    cat: "بینایی ماشین",
    short: "ANPR بلادرنگ فارسی برای پارکینگ‌های هوشمند روی موبایل.",
    longDesc: "اپ تشخیص و OCR پلاک خودروی ایرانی روی موبایل، با سرعت بالا و دقت ۹۸٪. مناسب پارکینگ‌ها، شرکت‌های لجستیک و پلیس راهور.",
    features: ["تشخیص پلاک فارسی", "ذخیره خودکار ورود/خروج", "گزارش روزانه", "حالت Batch روی فیلم", "اکسپورت Excel"],
    tech: ["Kotlin", "YOLOv8", "PaddleOCR", "Room", "Python", "Docker", "NumPy", "Git"],
    icon: Camera,
    color: "from-purple-500 to-indigo-500",
    screens: [
      { title: "اسکن پلاک", subtitle: "دوربین زنده", variant: "phone" },
      { title: "آرشیو خودروها", subtitle: "ورود/خروج", variant: "phone" },
      { title: "گزارش", subtitle: "اکسپورت اکسل", variant: "phone" }
    ]
  },
  {
    slug: "persian-stt",
    title: "اپ تبدیل گفتار به متن فارسی",
    cat: "صوت",
    short: "STT آفلاین فارسی با Whisper Fine-tune و تشخیص گوینده.",
    longDesc: "اپ حرفه‌ای پیاده‌سازی صوت، تبدیل جلسات و مصاحبه‌ها به متن دقیق فارسی با Speaker Diarization و خروجی Word/SRT. مناسب خبرنگاران، وکلا و دانشجویان.",
    features: ["پیاده‌سازی آفلاین", "تشخیص گوینده", "خروجی Word/SRT/PDF", "خلاصه‌سازی خودکار با LLM", "ترجمه به انگلیسی"],
    tech: ["Flutter", "Whisper", "ONNX", "Pyannote", "Python", "Docker", "NumPy", "Git"],
    icon: Mic,
    color: "from-emerald-500 to-teal-500",
    screens: [
      { title: "ضبط جلسه", subtitle: "Real-time Transcript", variant: "phone" },
      { title: "ویرایش متن", subtitle: "Speaker Tagged", variant: "phone" },
      { title: "خروجی", subtitle: "Word/SRT/PDF", variant: "phone" }
    ]
  },
  {
    slug: "ai-tutor",
    title: "پلتفرم AI Tutor",
    cat: "آموزشی",
    short: "معلم خصوصی هوشمند گام به گام برای دانش‌آموزان.",
    longDesc: "اپلیکیشن آموزش شخصی‌سازی با LLM که سؤالات ریاضی، فیزیک و شیمی دانش‌آموز را گام به گام حل می‌کند. شامل سیستم تمرین تطبیقی و گزارش به والدین.",
    features: ["حل گام به گام مسئله", "تمرین تطبیقی هوشمند", "گزارش به والدین", "OCR از روی برگه", "محتوای ویدیویی"],
    tech: ["React Native", "GPT-4", "LangChain", "Manim", "Python", "Docker", "NumPy", "Git"],
    icon: GraduationCap,
    color: "from-fuchsia-500 to-purple-500",
    screens: [
      { title: "حل مسئله", subtitle: "گام به گام", variant: "phone" },
      { title: "OCR مسئله", subtitle: "اسکن از کتاب", variant: "phone" },
      { title: "گزارش رشد", subtitle: "تحلیل نقاط ضعف", variant: "phone" }
    ]
  },
  {
    slug: "smart-crm",
    title: "اپ CRM هوشمند",
    cat: "کسب‌وکار",
    short: "CRM موبایلی با پیش‌بینی نرخ تبدیل و توصیه اقدام بعدی.",
    longDesc: "مدیریت مشتری همراه با AI: امتیازدهی Lead، پیش‌بینی نرخ تبدیل، توصیه اقدام بعدی و خلاصه‌سازی خودکار مکالمات تلفنی. مناسب تیم‌های فروش B2B.",
    features: ["Lead Scoring هوشمند", "Next Best Action", "Call Summary خودکار", "Pipeline Forecast", "Integration با CRM موجود"],
    tech: ["Flutter", "XGBoost", "FastAPI", "PostgreSQL", "Python", "Docker", "NumPy", "Git"],
    icon: Briefcase,
    color: "from-sky-500 to-blue-500",
    screens: [
      { title: "Pipeline View", subtitle: "Kanban + امتیاز", variant: "phone" },
      { title: "پروفایل Lead", subtitle: "+ توصیه اقدام", variant: "phone" },
      { title: "Forecast", subtitle: "پیش‌بینی فروش", variant: "phone" }
    ]
  },
  {
    slug: "tourism-guide",
    title: "اپ راهنمای گردشگری AI",
    cat: "گردشگری",
    short: "راهنمای صوتی مکان‌های تاریخی با LLM، GPS و واقعیت افزوده.",
    longDesc: "همراه گردشگری هوشمند که با تشخیص موقعیت GPS، اطلاعات تاریخی مکان را به صورت صوتی روایت می‌کند، با AR اشیا را معرفی می‌کند و تور شخصی‌سازی پیشنهاد می‌دهد.",
    features: ["راوی صوتی فارسی/انگلیسی", "AR Information Overlay", "تور شخصی‌سازی", "نقشه آفلاین", "بوکینگ بلیط"],
    tech: ["Flutter", "ARKit/ARCore", "LLM", "Mapbox", "Python", "Docker", "NumPy", "Git"],
    icon: MapPin,
    color: "from-teal-500 to-emerald-500",
    screens: [
      { title: "AR Camera", subtitle: "اطلاعات روی بنا", variant: "phone" },
      { title: "Audio Guide", subtitle: "روایت تاریخی", variant: "phone" },
      { title: "نقشه مسیر", subtitle: "Tour شخصی", variant: "phone" }
    ]
  },
  {
    slug: "agriculture-ai",
    title: "اپ کشاورزی هوشمند",
    cat: "کشاورزی",
    short: "تشخیص بیماری گیاه از عکس برگ و توصیه سم و کود.",
    longDesc: "اپ کمک به کشاورزان برای تشخیص ۳۰ بیماری شایع گیاهی از روی عکس برگ، پیشنهاد سم و کود مناسب، پیش‌بینی هوا و یادآور آبیاری. کاملاً فارسی و آفلاین.",
    features: ["تشخیص بیماری از عکس", "توصیه سم و کود", "پیش‌بینی هوای محل", "یادآور آبیاری", "تقویم کاشت"],
    tech: ["Flutter", "TFLite", "EfficientNet", "OpenWeather", "Python", "Docker", "NumPy", "Git"],
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    screens: [
      { title: "اسکن برگ", subtitle: "تشخیص بیماری", variant: "phone" },
      { title: "توصیه درمان", subtitle: "سم + کود", variant: "phone" },
      { title: "تقویم کشاورز", subtitle: "یادآور هوشمند", variant: "phone" }
    ]
  }
];
const getAppBySlug = (slug) => APPS.find((a) => a.slug === slug);
const PROJECTS = [
  {
    slug: "breast-cancer-vit",
    title: "تشخیص زودهنگام سرطان پستان از ماموگرافی با Vision Transformer",
    cat: "پزشکی",
    summary: "سیستم AI با دقت ۹۶٪ برای کمک به رادیولوژیست‌ها در تشخیص توده‌های مشکوک از تصاویر ماموگرافی.",
    problem: "تأخیر در تشخیص سرطان پستان و خطای انسانی در تفسیر ماموگرافی، نرخ مرگ‌ومیر را افزایش می‌دهد.",
    solution: "مدل Vision Transformer Fine-tune شده روی دیتاست CBIS-DDSM و INbreast با تکنیک Grad-CAM برای تفسیرپذیری ناحیه‌های مشکوک.",
    results: ["دقت ۹۶.۳٪ روی تست‌ست", "حساسیت ۹۴٪", "کاهش ۴۰٪ زمان تشخیص رادیولوژیست", "ROC-AUC = 0.97"],
    features: ["پشتیبانی فرمت DICOM", "تفسیرپذیری با Grad-CAM", "API REST + Web UI", "گزارش PDF خودکار"],
    tech: ["PyTorch", "ViT", "DICOM", "Grad-CAM", "FastAPI", "React", "Python", "Docker", "NumPy", "Git"],
    icon: HeartPulse,
    color: "from-pink-500 to-rose-500",
    screens: [
      { title: "Dashboard تشخیص", subtitle: "نمای اصلی پزشک", variant: "dashboard" },
      { title: "Heatmap توده", subtitle: "Grad-CAM روی ضایعه", variant: "card" },
      { title: "گزارش بیمار", subtitle: "خروجی PDF نهایی", variant: "card" }
    ]
  },
  {
    slug: "brain-tumor-segmentation",
    title: "سگمنتیشن تومور مغزی روی MRI با nnU-Net",
    cat: "پزشکی",
    summary: "مدل State-of-the-Art برای جداسازی دقیق تومورهای مغزی از تصاویر MRI سه‌بعدی.",
    problem: "تعیین مرز دقیق تومور مغزی برای جراحی و رادیوتراپی نیاز به ساعت‌ها کار دستی توسط متخصص دارد.",
    solution: "پیاده‌سازی nnU-Net 3D روی دیتاست BraTS 2024 با Multi-Modal MRI (T1، T1c، T2، FLAIR).",
    results: ["Dice Score = 0.91", "کاهش زمان از ۴ ساعت به ۲ دقیقه", "تأیید بالینی توسط ۳ متخصص"],
    features: ["پردازش 3D Volume", "Multi-Modal Input", "خروجی NIfTI", "اتصال به PACS"],
    tech: ["nnU-Net", "MONAI", "PyTorch", "NIfTI", "ITK-SNAP", "Python", "Docker", "NumPy", "Git"],
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    screens: [
      { title: "MRI Viewer 3D", subtitle: "مرور Axial/Sagittal/Coronal", variant: "dashboard" },
      { title: "Tumor Mask", subtitle: "سگمنتیشن خودکار", variant: "card" },
      { title: "گزارش حجم", subtitle: "Volumetric Analysis", variant: "card" }
    ]
  },
  {
    slug: "diabetic-retinopathy",
    title: "تشخیص رتینوپاتی دیابتی از تصاویر فوندوس",
    cat: "پزشکی",
    summary: "غربالگری خودکار رتینوپاتی دیابتی در ۵ سطح، روی موبایل و وب.",
    problem: "رتینوپاتی دیابتی اصلی‌ترین علت نابینایی بزرگسالان است و غربالگری به موقع نیاز به چشم‌پزشک متخصص دارد.",
    solution: "EfficientNet-B5 با Transfer Learning روی APTOS-2019 و EyePACS، با کالیبراسیون احتمالی.",
    results: ["دقت ۹۲٪", "Quadratic Kappa = 0.89", "Inference روی موبایل < ۱ ثانیه"],
    features: ["استقرار روی موبایل با TFLite", "Quality Check خودکار تصویر", "گزارش گرافیکی", "اتصال به HIS"],
    tech: ["EfficientNet", "TensorFlow", "TFLite", "Flutter", "Python", "Docker", "NumPy", "Git"],
    icon: Eye,
    color: "from-amber-500 to-orange-500",
    screens: [
      { title: "اپ موبایل پزشک", subtitle: "اسکن سریع فوندوس", variant: "phone" },
      { title: "نتیجه طبقه‌بندی", subtitle: "۵ سطح شدت", variant: "card" },
      { title: "Heatmap چشم", subtitle: "ناحیه آسیب‌دیده", variant: "card" }
    ]
  },
  {
    slug: "ecg-arrhythmia",
    title: "تشخیص آریتمی قلبی از سیگنال ECG با 1D-CNN",
    cat: "پزشکی",
    summary: "تشخیص بلادرنگ ۱۲ نوع آریتمی قلبی از سیگنال‌های ECG هولتر و دستگاه‌های پوشیدنی.",
    problem: "تحلیل دستی نوار قلب ۲۴ ساعته زمان‌بر و مستعد خطاست.",
    solution: "شبکه 1D-CNN با Attention روی دیتاست MIT-BIH و PhysioNet با Wavelet Preprocessing.",
    results: ["دقت ۹۸٪", "F1 = 0.96", "Latency = 12ms"],
    features: ["پردازش Real-time", "هشدار فوری به پزشک", "اتصال به وسایل پوشیدنی", "گزارش روزانه"],
    tech: ["1D-CNN", "PyTorch", "Wavelet", "MQTT", "Python", "Docker", "NumPy", "Git"],
    icon: Activity,
    color: "from-rose-500 to-red-500",
    screens: [
      { title: "ECG Monitor", subtitle: "نمایش بلادرنگ — تشخیص آریتمی", variant: "dashboard" },
      { title: "تشخیص آریتمی", subtitle: "هایلایت لحظه‌ای PVC", variant: "dashboard" },
      { title: "اپ بیمار", subtitle: "هشدار و گزارش روزانه", variant: "phone" },
      { title: "نمونه خروجی", subtitle: "گزارش پایش ECG قابل دانلود", variant: "dashboard" }
    ]
  },
  {
    slug: "icu-survival-xgboost",
    title: "پیش‌بینی بقای بیماران ICU با MIMIC-IV",
    cat: "پزشکی",
    summary: "مدل پیش‌بینی ۲۴ و ۴۸ ساعته احتمال بقای بیماران بخش مراقبت‌های ویژه.",
    problem: "تخصیص بهینه منابع ICU و اولویت‌بندی بیماران نیازمند پیش‌بینی دقیق وضعیت بالینی است.",
    solution: "XGBoost با Feature Engineering روی ۲۰۰ متغیر بالینی، با تفسیر SHAP.",
    results: ["AUC = 0.91", "Calibration عالی", "کاهش ۲۲٪ مرگ‌ومیر در آزمون پایلوت"],
    features: ["داشبورد Real-time", "تفسیر SHAP", "اتصال به HIS بیمارستان", "هشدار خودکار"],
    tech: ["XGBoost", "SHAP", "Python", "PostgreSQL", "Grafana", "Docker", "NumPy", "Git"],
    icon: Stethoscope,
    color: "from-cyan-500 to-blue-500",
    screens: [
      { title: "ICU Dashboard", subtitle: "وضعیت همه بیماران", variant: "dashboard" },
      { title: "تفسیر SHAP", subtitle: "علل ریسک هر بیمار", variant: "card" },
      { title: "گزارش روزانه", subtitle: "خلاصه مدیریتی", variant: "card" }
    ]
  },
  {
    slug: "steel-defect-yolov8",
    title: "تشخیص لحظه‌ای نقص خط تولید فولاد با YOLOv8",
    cat: "صنعتی",
    summary: "سیستم بینایی ماشین برای کنترل کیفیت بلادرنگ خط تولید ورق فولاد.",
    problem: "نقص‌های سطحی فولاد (ترک، خراش، حفره) باعث ضایعات سنگین و خواب خط می‌شود.",
    solution: "YOLOv8-Large روی Jetson AGX با ۴ دوربین صنعتی، خروجی به PLC برای جداسازی خودکار.",
    results: ["دقت ۹۷٪", "سرعت ۶۰ FPS", "کاهش ۳۵٪ ضایعات", "ROI طی ۴ ماه"],
    features: ["پردازش Edge", "اتصال PLC", "داشبورد مدیریتی", "آرشیو تصاویر"],
    tech: ["YOLOv8", "TensorRT", "Jetson AGX", "OpenCV", "Modbus", "Python", "Docker", "NumPy", "Git"],
    icon: Factory,
    color: "from-orange-500 to-red-500",
    screens: [
      { title: "Live Camera Feed", subtitle: "۴ دوربین خط تولید", variant: "dashboard" },
      { title: "Detection Overlay", subtitle: "نقص هایلایت شده", variant: "card" },
      { title: "KPI مدیریتی", subtitle: "نرخ نقص روزانه", variant: "card" }
    ]
  },
  {
    slug: "turbine-predictive-maintenance",
    title: "نگهداری پیش‌بینانه توربین‌های گازی با LSTM",
    cat: "صنعتی",
    summary: "پیش‌بینی خرابی توربین‌های گازی ۷ تا ۱۴ روز قبل از وقوع.",
    problem: "خواب اضطراری توربین گازی روزانه میلیون‌ها دلار ضرر می‌زند.",
    solution: "LSTM چندمتغیره روی داده‌های ارتعاش، دما و فشار با Anomaly Detection.",
    results: ["دقت پیش‌بینی ۸۹٪", "کاهش ۶۰٪ توقفات ناخواسته", "صرفه‌جویی $۲M سالانه"],
    features: ["مانیتورینگ ۲۴/۷", "هشدار SMS/Email", "گزارش RUL", "ادغام SCADA"],
    tech: ["LSTM", "PyTorch", "Kafka", "InfluxDB", "Grafana", "Python", "Docker", "NumPy", "Git"],
    icon: Gauge,
    color: "from-amber-500 to-yellow-500",
    screens: [
      { title: "Health Score", subtitle: "وضعیت هر توربین", variant: "dashboard" },
      { title: "Anomaly Detection", subtitle: "ناهنجاری ارتعاش", variant: "card" },
      { title: "RUL Forecast", subtitle: "زمان باقی‌مانده عمر", variant: "card" }
    ]
  },
  {
    slug: "safety-helmet-detection",
    title: "ایمنی هوشمند کارخانه: تشخیص نبود تجهیزات ایمنی",
    cat: "صنعتی",
    summary: "مانیتورینگ خودکار استفاده پرسنل از کلاه، جلیقه و عینک ایمنی در کارخانه.",
    problem: "حوادث ناشی از عدم رعایت ایمنی، هزینه انسانی و قانونی سنگینی دارد.",
    solution: "YOLO-NAS روی دوربین‌های موجود، با اخطار صوتی و ثبت در سیستم HSE.",
    results: ["دقت ۹۵٪", "کاهش ۸۰٪ تخلفات ایمنی", "بازگشت سرمایه طی ۳ ماه"],
    features: ["پردازش RTSP", "اخطار صوتی لحظه‌ای", "گزارش HSE", "تشخیص چهره پرسنل"],
    tech: ["YOLO-NAS", "RTSP", "Jetson Nano", "Node-RED", "Python", "Docker", "NumPy", "Git"],
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    screens: [
      { title: "Live Monitoring", subtitle: "همه دوربین‌ها", variant: "dashboard" },
      { title: "تخلف ثبت‌شده", subtitle: "اسنپ‌شات + زمان", variant: "card" },
      { title: "گزارش HSE", subtitle: "آمار ماهانه", variant: "card" }
    ]
  },
  {
    slug: "weld-defect-detection",
    title: "تشخیص جوش‌های معیوب لوله‌سازی با Mask R-CNN",
    cat: "صنعتی",
    summary: "تشخیص خودکار عیوب جوش از تصاویر رادیوگرافی صنعتی.",
    problem: "بازرسی تصاویر X-Ray جوش زمان‌بر و وابسته به تجربه بازرس است.",
    solution: "Mask R-CNN روی دیتاست GDXray با ۵ نوع نقص (Crack، Porosity، Slag، LOF، LOP).",
    results: ["دقت ۹۳٪", "کاهش ۷۰٪ زمان بازرسی", "تأیید استاندارد API 1104"],
    features: ["پردازش تصاویر DICONDE", "گزارش استاندارد", "آرشیو ابری", "Audit Trail"],
    tech: ["Mask R-CNN", "Detectron2", "X-Ray Imaging", "Python", "Docker", "NumPy", "Git"],
    icon: Wrench,
    color: "from-slate-500 to-zinc-600",
    screens: [
      { title: "X-Ray Viewer", subtitle: "تصویر رادیوگرافی", variant: "dashboard" },
      { title: "نقاشی نقص‌ها", subtitle: "Mask خودکار", variant: "card" },
      { title: "Report Builder", subtitle: "گزارش API 1104", variant: "card" }
    ]
  },
  {
    slug: "bank-fraud-realtime",
    title: "تشخیص تقلب تراکنش‌های بانکی Real-time",
    cat: "مالی",
    summary: "سیستم AI برای تشخیص آنی تراکنش‌های مشکوک کارت‌خوان و درگاه پرداخت.",
    problem: "تقلب کارت بانکی سالانه میلیاردها تومان ضرر به بانک‌ها وارد می‌کند.",
    solution: "XGBoost + Isolation Forest روی Kafka Stream با Latency کمتر از ۵۰ms.",
    results: ["Precision = 0.94", "Recall = 0.88", "False Positive < 0.1%", "صرفه‌جویی $۵M"],
    features: ["پردازش Streaming", "هشدار آنی", "Whitelist هوشمند", "داشبورد ضدتقلب"],
    tech: ["XGBoost", "Kafka", "Flink", "Redis", "Spring Boot", "Python", "Docker", "NumPy", "Git"],
    icon: Banknote,
    color: "from-cyan-500 to-blue-500",
    screens: [
      { title: "Fraud Console", subtitle: "تراکنش‌های مشکوک", variant: "dashboard" },
      { title: "Transaction Detail", subtitle: "تحلیل تک‌تراکنش", variant: "card" },
      { title: "آمار روزانه", subtitle: "KPI مدیریت ریسک", variant: "card" }
    ]
  },
  {
    slug: "recommendation-engine",
    title: "موتور توصیه‌گر اختصاصی فروشگاه آنلاین",
    cat: "تجاری",
    summary: "افزایش ۳۸٪ نرخ تبدیل با موتور توصیه‌گر شخصی‌سازی شده مبتنی بر Deep Learning.",
    problem: "نرخ تبدیل پایین و سبد خرید کوچک به دلیل عدم پیشنهاد محصولات مرتبط.",
    solution: "Two-Tower Neural Network + Collaborative Filtering با Real-time Personalization.",
    results: ["+۳۸٪ نرخ تبدیل", "+۲۴٪ AOV", "+۵۲٪ زمان حضور در سایت"],
    features: ["پیشنهاد لحظه‌ای", "A/B Testing داخلی", "Cold Start حل‌شده", "API استاندارد"],
    tech: ["TensorFlow", "FAISS", "Redis", "FastAPI", "ClickHouse", "Python", "Docker", "NumPy", "Git"],
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-500",
    screens: [
      { title: "Recommendation Panel", subtitle: "روی صفحه محصول", variant: "dashboard" },
      { title: "A/B Test Dashboard", subtitle: "مقایسه نسخه‌ها", variant: "card" },
      { title: "Analytics Tab", subtitle: "تأثیر روی فروش", variant: "card" }
    ]
  },
  {
    slug: "smart-city-tabriz",
    title: "سیستم نظارت تصویری شهر هوشمند تبریز",
    cat: "دولتی",
    summary: "تحلیل بلادرنگ ترافیک، پلاک‌خوانی و تشخیص حوادث در سطح شهر.",
    problem: "مدیریت ترافیک شهری بدون داده دقیق بلادرنگ ممکن نیست.",
    solution: "شبکه ۳۰۰ دوربین + Edge AI + پلتفرم مرکزی با YOLO + DeepSort.",
    results: ["کاهش ۱۸٪ ترافیک", "افزایش ۴۲٪ نرخ کشف تخلف", "زمان واکنش حوادث −۳۵٪"],
    features: ["پلاک‌خوانی فارسی", "تشخیص تصادف", "شمارش خودرو", "نقشه گرمایی ترافیک"],
    tech: ["YOLOv8", "DeepSort", "PaddleOCR", "TensorRT", "Kafka", "Python", "Docker", "NumPy", "Git"],
    icon: Landmark,
    color: "from-amber-500 to-yellow-500",
    screens: [
      { title: "City Control Room", subtitle: "نقشه + دوربین‌ها", variant: "dashboard" },
      { title: "ANPR Live", subtitle: "پلاک‌خوانی بلادرنگ", variant: "card" },
      { title: "Incident Alert", subtitle: "تشخیص خودکار تصادف", variant: "card" }
    ]
  },
  {
    slug: "persian-llm-finetune",
    title: "Fine-tune مدل LLM فارسی برای تولید محتوا",
    cat: "تجاری",
    summary: "Fine-tune مدل LLaMA 3 فارسی برای تولید مقاله، خلاصه و پاسخگویی تخصصی.",
    problem: "مدل‌های عمومی در فارسی کیفیت پایین دارند و درک حوزه تخصصی ندارند.",
    solution: "LoRA + QLoRA روی ۲M متن فارسی + RLHF برای هم‌ترازی.",
    results: ["BLEU = 42", "ROUGE-L = 0.58", "ارزیابی انسانی ۸.۷/۱۰"],
    features: ["تولید مقاله", "خلاصه‌سازی هوشمند", "پاسخگویی تخصصی", "API ابری"],
    tech: ["LLaMA 3", "LoRA", "PEFT", "TRL", "vLLM", "Python", "Docker", "NumPy", "Git"],
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
    screens: [
      { title: "Playground", subtitle: "تست مدل آنلاین", variant: "dashboard" },
      { title: "Article Generator", subtitle: "تولید مقاله بلند", variant: "card" },
      { title: "API Docs", subtitle: "مستندات یکپارچه‌سازی", variant: "card" }
    ]
  },
  {
    slug: "phd-bayesian-finance",
    title: "پایان‌نامه دکتری: مدل‌سازی Bayesian سری‌های زمانی مالی",
    cat: "دانشگاهی",
    summary: "پیاده‌سازی مدل Stochastic Volatility بیزی برای پیش‌بینی نوسانات بازار سرمایه.",
    problem: "مدل‌های GARCH کلاسیک عدم قطعیت را به‌خوبی کمی‌سازی نمی‌کنند.",
    solution: "Hamiltonian Monte Carlo با PyMC و Stan روی داده‌های ۱۰ ساله شاخص کل بورس.",
    results: ["انتشار در ژورنال Q1", "بهبود ۲۳٪ نسبت به GARCH", "پذیرفته شده ICML Workshop"],
    features: ["MCMC Diagnostics", "Posterior Predictive Check", "بازنمایی عدم قطعیت", "Replication Package"],
    tech: ["PyMC", "Stan", "R", "ArviZ", "LaTeX", "Python", "Docker", "NumPy", "Git"],
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    screens: [
      { title: "Posterior Plot", subtitle: "توزیع پسین پارامترها", variant: "dashboard" },
      { title: "Forecast Bands", subtitle: "پیش‌بینی با عدم قطعیت", variant: "card" },
      { title: "نگارش پایان‌نامه", subtitle: "فصل ۴ آماده", variant: "card" }
    ]
  },
  {
    slug: "oil-pipeline-leak-detection",
    title: "تشخیص نشت خطوط لوله نفت و گاز با Acoustic AI",
    cat: "صنعتی",
    summary: "سیستم AI مبتنی بر سنسورهای آکوستیک و فیبر نوری برای تشخیص نشت در کمتر از ۳۰ ثانیه.",
    problem: "نشت‌های کوچک خطوط لوله نفت/گاز ساعت‌ها بدون تشخیص می‌مانند و خسارت زیست‌محیطی و مالی سنگین می‌سازند.",
    solution: "تلفیق DAS (Distributed Acoustic Sensing) با 1D-CNN + Transformer روی فریم‌های زمان-فرکانس و طبقه‌بندی شدت نشت.",
    results: ["زمان تشخیص < ۳۰s", "دقت ۹۶٪", "کاهش ۷۰٪ هشدارهای کاذب", "پایلوت ۱۲۰ کیلومتر خط"],
    features: ["پردازش DAS Real-time", "نقشه GIS نشت‌ها", "هشدار SCADA/SMS", "تخمین حجم نشت"],
    tech: ["Python", "PyTorch", "Transformer", "DAS Fiber", "Kafka", "PostGIS", "Docker", "Git"],
    icon: Droplets,
    color: "from-blue-500 to-cyan-500",
    screens: [
      { title: "نقشه GIS خط لوله", subtitle: "موقعیت سنسورها", variant: "dashboard" },
      { title: "Spectrogram نشت", subtitle: "تحلیل آکوستیک", variant: "card" },
      { title: "هشدار اپراتور", subtitle: "اقدام پیشنهادی", variant: "card" }
    ]
  },
  {
    slug: "power-grid-load-forecast",
    title: "پیش‌بینی بار شبکه برق با Temporal Fusion Transformer",
    cat: "صنعتی",
    summary: "پیش‌بینی دقیق بار مصرفی شبکه برق در افق ۲۴ ساعته با خطای کمتر از ۲٪.",
    problem: "خطای پیش‌بینی بار باعث Curtailment تجدیدپذیرها، هزینه peaker، یا قطعی برق می‌شود.",
    solution: "TFT با Covariates هواشناسی، تقویم تعطیلات و قیمت بازار برق روی داده‌های SCADA پنج ساله.",
    results: ["MAPE = 1.8٪", "صرفه‌جویی $۳.۲M سالانه", "کاهش ۲۴٪ Reserve Margin"],
    features: ["پیش‌بینی Probabilistic", "ادغام با EMS", "What-if Scenario", "Dashboard مدیریت"],
    tech: ["Python", "PyTorch Forecasting", "TFT", "Airflow", "TimescaleDB", "NumPy", "Docker", "Git"],
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    screens: [
      { title: "Load Forecast 24h", subtitle: "با Confidence Interval", variant: "dashboard" },
      { title: "What-if Panel", subtitle: "سناریوهای آب‌وهوا", variant: "card" },
      { title: "Cost Saving KPI", subtitle: "گزارش مدیریتی", variant: "card" }
    ]
  },
  {
    slug: "logistics-route-optimization",
    title: "بهینه‌سازی مسیر ناوگان لجستیک با Reinforcement Learning",
    cat: "صنعتی",
    summary: "کاهش ۲۸٪ هزینه سوخت و زمان تحویل با مسیریابی پویا مبتنی بر RL.",
    problem: "مسیریابی ثابت با تغییرات ترافیک، تقاضای لحظه‌ای و پنجره زمانی مشتری سازگار نیست.",
    solution: "Deep RL (PPO) با شبیه‌سازی ترافیک شهری + داده ماهواره‌ای، Online Re-planning هر ۵ دقیقه.",
    results: ["کاهش ۲۸٪ هزینه سوخت", "تحویل به‌موقع ۹۶٪", "−۲۲٪ کیلومتر روزانه"],
    features: ["Dynamic Re-routing", "تخصیص خودرو/راننده", "ادغام TMS", "اپ راننده"],
    tech: ["Python", "Ray RLlib", "PPO", "OR-Tools", "Mapbox", "FastAPI", "Docker", "Git"],
    icon: Truck,
    color: "from-emerald-500 to-green-600",
    screens: [
      { title: "Fleet Map", subtitle: "موقعیت زنده ناوگان", variant: "dashboard" },
      { title: "Route Optimizer", subtitle: "مقایسه قبل/بعد", variant: "card" },
      { title: "Driver App", subtitle: "Turn-by-turn", variant: "phone" }
    ]
  },
  {
    slug: "aviation-anomaly-detection",
    title: "تشخیص ناهنجاری موتور هواپیما با Autoencoder",
    cat: "صنعتی",
    summary: "پایش بلادرنگ ۵۰۰+ پارامتر موتور هواپیما و تشخیص ناهنجاری قبل از وقوع خرابی.",
    problem: "خرابی موتور در پرواز فاجعه‌بار و توقف اضطراری هواپیما برای ایرلاین میلیون‌ها دلار هزینه دارد.",
    solution: "Variational Autoencoder + Isolation Forest روی داده‌های QAR، با Severity Scoring و طبقه‌بندی نوع خرابی.",
    results: ["تشخیص ۸۹٪ خرابی‌ها قبل از Fault", "کاهش ۴۲٪ AOG", "صرفه‌جویی $۸M ناوگان"],
    features: ["پایش QAR Real-time", "Severity Score", "ادغام MRO", "گزارش مهندسی"],
    tech: ["Python", "TensorFlow", "VAE", "Spark", "Cassandra", "Pandas", "Docker", "Git"],
    icon: Plane,
    color: "from-sky-500 to-indigo-500",
    screens: [
      { title: "Engine Health", subtitle: "همه ناوگان", variant: "dashboard" },
      { title: "Anomaly Detail", subtitle: "ریشه‌یابی", variant: "card" },
      { title: "MRO Workorder", subtitle: "صدور خودکار", variant: "card" }
    ]
  }
];
const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
const serviceChildren = SERVICE_DETAILS.slice(0, 8).map((s) => ({
  to: "/services/$slug",
  params: { slug: s.slug },
  label: s.title,
  sub: s.tagline,
  Icon: s.icon
}));
const appChildren = APPS.slice(0, 8).map((a) => ({
  to: "/apps/$slug",
  params: { slug: a.slug },
  label: a.title,
  sub: a.cat,
  Icon: a.icon
}));
const projectChildren = PROJECTS.slice(0, 8).map((p) => ({
  to: "/projects/$slug",
  params: { slug: p.slug },
  label: p.title,
  sub: p.cat,
  Icon: p.icon
}));
const kidsChildren = [
  { to: "/kids-test", label: "تست شخصیت کودک", sub: "۶ تا ۱۲ سال", Icon: Baby },
  { to: "/kids-test", label: "تست استعداد نوجوان", sub: "۱۳ تا ۱۸ سال", Icon: GraduationCap },
  { to: "/kids-test", label: "راهنمای شغلی", sub: "مسیر آینده فرزند", Icon: Briefcase },
  { to: "/kids-test", label: "نمونه گزارش", sub: "نمونهٔ نتیجه تست", Icon: FileText }
];
const NAV = [
  { to: "/", key: "nav.home", Icon: House },
  { to: "/services", key: "nav.services", Icon: Sparkles, children: serviceChildren },
  { to: "/apps", key: "nav.apps", Icon: Smartphone, children: appChildren },
  { to: "/projects", key: "nav.projects", Icon: FolderKanban, children: projectChildren },
  { to: "/kids-test", key: "nav.kids", Icon: ToyBrick, children: kidsChildren },
  { to: "/about", key: "nav.about", Icon: User },
  { to: "/contact", key: "nav.contact", Icon: Mail }
];
function LangPicker() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((s) => !s),
        "aria-label": t("lang.label"),
        className: "inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/90 backdrop-blur transition hover:border-primary/40 hover:bg-primary/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: LANG_LABEL[lang] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-60" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        className: "glass absolute end-0 mt-2 min-w-[10rem] overflow-hidden rounded-xl p-1",
        children: Object.keys(LANG_LABEL).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setLang(l);
              setOpen(false);
            },
            className: `block w-full rounded-lg px-3 py-2 text-start text-sm transition ${lang === l ? "bg-primary/15 text-primary" : "text-foreground/85 hover:bg-white/5"}`,
            children: LANG_LABEL[l]
          },
          l
        ))
      }
    )
  ] });
}
function NavLinkWithDropdown({ item, t }) {
  const [open, setOpen] = reactExports.useState(false);
  const closeTimer = reactExports.useRef(null);
  const onEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const wrapRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        wrapRef.current?.querySelector("a[data-nav-trigger]")?.focus();
      }
    };
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);
  const onBlurCapture = (e) => {
    if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: wrapRef,
      className: "relative",
      onMouseEnter: onEnter,
      onMouseLeave: onLeave,
      onFocus: () => item.children && setOpen(true),
      onBlur: onBlurCapture,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            "data-nav-trigger": true,
            "aria-haspopup": item.children ? "menu" : void 0,
            "aria-expanded": item.children ? open : void 0,
            onKeyDown: (e) => {
              if (!item.children) return;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
                setTimeout(() => {
                  wrapRef.current?.querySelector("[data-submenu-item]")?.focus();
                }, 50);
              }
            },
            className: "group relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2 py-2 text-sm text-muted-foreground outline-none transition hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            activeProps: { className: "text-foreground" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg border border-amber-300/15 bg-gradient-to-br from-amber-400/10 to-white/[0.02] text-amber-200/90 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-300/60 group-hover:text-amber-200 group-hover:shadow-[0_0_18px_-4px_rgba(251,191,36,0.6)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-[8deg]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative whitespace-nowrap", children: [
                t(item.key),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-1 start-0 h-px w-0 bg-gradient-to-r from-amber-300 to-transparent transition-all duration-500 group-hover:w-full" })
              ] }),
              item.children && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3 w-3 opacity-60 transition-transform duration-300 ${open ? "rotate-180 text-amber-300" : ""}` })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: item.children && open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 8, scale: 0.94, clipPath: "inset(0 50% 0 50% round 16px)" },
            animate: { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0% 0 0% round 16px)" },
            exit: { opacity: 0, y: 6, scale: 0.96, clipPath: "inset(0 40% 0 40% round 16px)" },
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            role: "menu",
            className: "absolute left-1/2 top-full z-50 w-[28rem] max-w-[92vw] -translate-x-1/2 pt-3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-amber-300/40 bg-zinc-950/98 p-2 shadow-[0_24px_70px_-10px_rgba(0,0,0,0.85)] ring-1 ring-amber-300/30 backdrop-blur-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  "aria-hidden": true,
                  initial: { x: "-120%" },
                  animate: { x: "120%" },
                  transition: { duration: 1.1, ease: "easeOut" },
                  className: "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-amber-200/15 to-transparent blur-xl"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  "aria-hidden": true,
                  initial: { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5 },
                  className: "pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-amber-300/50 bg-zinc-950/98" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-1", children: item.children.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: -4 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.2, delay: 0.02 * i },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: c.to,
                      params: c.params,
                      "data-submenu-item": true,
                      role: "menuitem",
                      onClick: () => setOpen(false),
                      className: "group/sub flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-start outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-amber-400/20 hover:to-transparent focus-visible:bg-amber-400/20 focus-visible:ring-2 focus-visible:ring-amber-300/70",
                      children: [
                        c.Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-amber-300/40 bg-amber-400/15 text-amber-100 transition-all duration-300 group-hover/sub:scale-110 group-hover/sub:border-amber-300/70 group-hover/sub:shadow-[0_0_14px_-4px_rgba(251,191,36,0.7)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: "h-3.5 w-3.5" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-xs font-semibold text-white transition-colors group-hover/sub:text-amber-200", children: c.label }),
                          c.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-[10px] text-zinc-400", children: c.sub })
                        ] })
                      ]
                    }
                  )
                },
                c.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: item.to,
                  onClick: () => setOpen(false),
                  role: "menuitem",
                  className: "mt-1 block rounded-xl border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-center text-xs font-semibold text-amber-100 outline-none transition hover:bg-amber-400/25 hover:text-white focus-visible:ring-2 focus-visible:ring-amber-300/70",
                  children: [
                    t(item.key),
                    " →"
                  ]
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function MobileNavItem({ item, t, onNavigate }) {
  const [open, setOpen] = reactExports.useState(false);
  const hasChildren = !!item.children;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.to,
          onClick: onNavigate,
          className: "flex flex-1 items-center gap-2.5 rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
          activeProps: { className: "text-foreground bg-white/5" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-400/10 text-amber-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: "h-3.5 w-3.5" }) }),
            t(item.key)
          ]
        }
      ),
      hasChildren && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((s) => !s),
          "aria-label": "toggle",
          className: "rounded-lg p-2 text-muted-foreground hover:text-foreground",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition ${open ? "rotate-180" : ""}` })
        }
      )
    ] }),
    hasChildren && open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-10 mt-1 space-y-0.5 border-s border-amber-300/15 ps-2", children: item.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: c.to,
        params: c.params,
        onClick: onNavigate,
        className: "block truncate rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-white/5 hover:text-amber-200",
        children: c.label
      },
      c.label
    )) })
  ] });
}
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [hidden, setHidden] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { t } = useI18n();
  const lastY = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (open) {
        setHidden(false);
      } else if (y > 140 && y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4 || y < 60) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -24, opacity: 0 },
      animate: { y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 },
      transition: { duration: 0.45, ease: "easeOut" },
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between gap-3 rounded-2xl border border-amber-300/20 bg-zinc-950/85 px-4 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150 transition-all ${scrolled ? "bg-zinc-950/95 shadow-soft" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "ATiLLAi", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AtilLogo, { size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-0.5 flex-nowrap", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinkWithDropdown, { item: n, t }, n.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LangPicker, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-luxury text-sm whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-luxury-sheen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: t("cta.order") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden rounded-lg p-2 text-foreground", onClick: () => setOpen((s) => !s), "aria-label": "menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "glass mt-2 max-h-[80vh] overflow-y-auto rounded-2xl p-3 lg:hidden",
            children: [
              NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavItem, { item: n, t, onNavigate: () => setOpen(false) }, n.to)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LangPicker, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "btn-luxury mt-3 w-full text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-luxury-sheen" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: t("cta.order") })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 right-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_22px)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 pt-20 pb-32 md:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-14 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AtilLogo, { size: 48 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-md font-couture text-[14px] leading-[2.1] text-foreground/85", children: [
            "مرجع تخصصی مشاوره و اجرای پروژه‌های",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 text-gradient-gold font-bold", children: "هوش مصنوعی، یادگیری ماشین و آمار" }),
            "برای دانشجویان، شرکت‌های خصوصی و سازمان‌های صنعتی و دولتی."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] px-4 py-2.5 text-sm font-semibold text-foreground/90 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-luxe tracking-wide", children: "تبریز · خیابان ولیعصر" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-ai-display text-[11px] font-bold uppercase tracking-[0.35em] text-gradient-gold", children: "دسترسی سریع" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 font-luxe text-[14px] text-foreground/75", children: [
            { to: "/services", label: "خدمات تخصصی" },
            { to: "/projects", label: "نمونه پروژه‌ها" },
            { to: "/apps", label: "اپلیکیشن‌های AI" },
            { to: "/about", label: "درباره ما" },
            { to: "/contact", label: "ثبت سفارش" }
          ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: l.to,
              className: "group inline-flex items-center gap-2 transition hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary/50 transition group-hover:scale-150 group-hover:bg-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:tracking-wider", children: l.label })
              ]
            }
          ) }, l.to)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-ai-display text-[11px] font-bold uppercase tracking-[0.35em] text-gradient-gold", children: "ارتباط با ما" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 font-luxe text-[14px] text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/[0.08] text-primary transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "mailto:Atilla.DatascienceGroup.1401@gmail.com",
                  dir: "ltr",
                  title: "Atilla.DatascienceGroup.1401@gmail.com",
                  style: { fontFamily: '"Inter", "Manrope", ui-sans-serif, system-ui, sans-serif', letterSpacing: "0", whiteSpace: "nowrap", fontSize: "clamp(9.5px, 0.92vw, 11.5px)" },
                  className: "group/mail relative inline-block min-w-0 flex-1 font-medium leading-snug text-white transition-colors duration-300 hover:text-amber-200",
                  children: [
                    "Atilla.DatascienceGroup.1401@gmail.com",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 -bottom-0.5 h-px scale-x-0 origin-left bg-gradient-to-r from-amber-300/0 via-amber-300/80 to-amber-300/0 transition-transform duration-500 group-hover/mail:scale-x-100" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+989105557133", dir: "ltr", style: { fontFamily: '"Inter", "Manrope", sans-serif', letterSpacing: "0.08em" }, className: "text-[13.5px] font-semibold transition hover:text-primary", children: "+98 910 555 7133" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+989901377895", dir: "ltr", style: { fontFamily: '"Inter", "Manrope", sans-serif', letterSpacing: "0.08em" }, className: "text-[13.5px] font-semibold transition hover:text-primary", children: "+98 990 137 7895" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://t.me/MahdiPourabdollah_Ai", target: "_blank", rel: "noopener noreferrer", style: { fontFamily: '"Inter", "Manrope", sans-serif', letterSpacing: "0.02em" }, className: "text-[13.5px] font-medium transition hover:text-primary", children: "@MahdiPourabdollah_Ai" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:flex-wrap md:gap-3 md:text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontFamily: '"Inter", "Manrope", sans-serif' }, className: "text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-foreground/65 sm:text-[11.5px] sm:tracking-[0.22em] md:text-[12px] md:tracking-[0.24em]", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: '"Cormorant Garamond", Georgia, serif' }, className: "text-gradient-gold font-bold text-[13px] normal-case tracking-normal sm:text-[14px]", children: "ATiLLAi.ir" }),
          " — تمامی حقوق محفوظ است"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }, className: "text-[12.5px] italic leading-relaxed tracking-wide text-foreground/85 sm:text-[13.5px] md:text-[14px]", children: [
          "Designed by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold font-bold not-italic", children: "Dr. Mahdi Pourabdollah" })
        ] })
      ] })
    ] })
  ] });
}
var createSsrRpc = (functionId) => {
  const url2 = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url: url2,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const chatConsult = createServerFn({
  method: "POST"
}).inputValidator((data) => {
  if (!data || !Array.isArray(data.messages)) throw new Error("invalid input");
  const ALLOWED_ROLES = /* @__PURE__ */ new Set(["user", "assistant"]);
  const messages = data.messages.slice(-20).filter((m) => m && ALLOWED_ROLES.has(m.role)).map((m) => ({
    role: m.role,
    content: String(m.content || "").slice(0, 4e3)
  }));
  return {
    messages
  };
}).handler(createSsrRpc("5d03932537243d107b0e7c53e8305b7fe661ae80a427942cdc5dda664865ba53"));
const STORAGE_PREFIX = "ATiLLAi:chat:v2:";
const TELEGRAM_URL = "https://t.me/MahdiPourabdollah_Ai";
const PHONE_URL = "tel:+989105557133";
const QUICK_REPLIES = {
  fa: [
    { label: "💰 قیمت پروژه", prompt: "هزینه یک پروژه را چطور تخمین می‌زنید؟" },
    { label: "📞 صحبت با کارشناس", prompt: "می‌خواهم با یک کارشناس انسانی صحبت کنم." },
    { label: "🎓 پروژه پایان‌نامه", prompt: "برای پایان‌نامه چه خدماتی ارائه می‌دهید؟" },
    { label: "💬 چت‌بات سازمانی", prompt: "می‌خواهم یک چت‌بات سازمانی با LLM فارسی بسازم." }
  ],
  en: [
    { label: "💰 Pricing", prompt: "How do you estimate the price of a project?" },
    { label: "📞 Talk to a human", prompt: "I want to talk to a human expert." },
    { label: "🎓 Thesis project", prompt: "What services do you offer for thesis projects?" },
    { label: "💬 Enterprise chatbot", prompt: "I want to build an enterprise chatbot with a Persian LLM." }
  ],
  ar: [
    { label: "💰 السعر", prompt: "كيف تقدّرون سعر المشروع؟" },
    { label: "📞 خبير بشري", prompt: "أرغب بالتحدث مع خبير بشري." },
    { label: "🎓 مشروع تخرج", prompt: "ما هي خدماتكم لمشاريع التخرج؟" },
    { label: "💬 شات بوت مؤسسي", prompt: "أرغب ببناء شات بوت مؤسسي مع LLM يدعم العربية والفارسية." }
  ],
  tr: [
    { label: "💰 Fiyatlandırma", prompt: "Bir projenin fiyatını nasıl tahmin ediyorsunuz?" },
    { label: "📞 Uzmanla görüş", prompt: "Bir uzmanla görüşmek istiyorum." },
    { label: "🎓 Tez projesi", prompt: "Tez projeleri için hangi hizmetleri sunuyorsunuz?" },
    { label: "💬 Kurumsal chatbot", prompt: "Farsça LLM ile kurumsal bir chatbot kurmak istiyorum." }
  ]
};
const TEASER = {
  fa: "سلام! کمکی از من ساخته است؟ ✨",
  en: "Hi! Need help with an AI project? ✨",
  ar: "مرحبًا! هل أساعدك في مشروع ذكاء اصطناعي؟ ✨",
  tr: "Merhaba! YZ projenizde yardımcı olabilir miyim? ✨"
};
function cleanMarkdown(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/(^|[^*])\*(?!\s)([^*\n]+?)\*(?!\*)/g, "$1$2").replace(/(^|[^_])_(?!\s)([^_\n]+?)_(?!_)/g, "$1$2").replace(/`([^`\n]+)`/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/^\s*[-*]\s+/gm, "• ");
}
function renderRich(text) {
  const cleaned = cleanMarkdown(text);
  const tokens = cleaned.split(/(https?:\/\/\S+|\s\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*|@[A-Za-z0-9_]{3,}|\+?\d[\d\s()-]{7,}\d)/g);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (/^https?:\/\//.test(tok)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: tok, target: "_blank", rel: "noopener noreferrer", className: "text-amber-300 underline-offset-2 hover:underline break-all", children: tok }, i);
    }
    if (/^\s\/[a-zA-Z0-9_-]/.test(tok)) {
      const path = tok.trim();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: path, className: "text-amber-300 underline-offset-2 hover:underline", children: path })
      ] }, i);
    }
    if (/^@[A-Za-z0-9_]{3,}$/.test(tok)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://t.me/${tok.slice(1)}`, target: "_blank", rel: "noopener noreferrer", className: "text-amber-300 underline-offset-2 hover:underline", children: tok }, i);
    }
    if (/^\+?\d[\d\s()-]{7,}\d$/.test(tok)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${tok.replace(/[^\d+]/g, "")}`, className: "text-amber-300 underline-offset-2 hover:underline", children: tok }, i);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tok }, i);
  });
}
const LANGS = {
  fa: {
    label: "فارسی",
    dir: "rtl",
    title: "Nilix — دستیار هوشمند ATiLLAi",
    status: "آنلاین · پاسخ < ۳۰ ثانیه",
    welcome: "سلام 👋 من Nilix هستم، دستیار هوشمند چندزبانه ATiLLAi.\nبرای شروع یکی از موضوعات زیر را انتخاب کنید یا سوال خودتان را بنویسید 👇",
    placeholder: "سوال خود را بنویسید…",
    thinking: "در حال نوشتن…",
    errorMsg: "خطایی رخ داد. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.",
    poweredBy: "ATiLLAi Assistant · Multilingual",
    pickTopic: "موضوع گفت‌وگو را انتخاب کنید",
    categories: [
      { key: "family", label: "مشاوره و خانواده", icon: "👨‍👩‍👧" },
      { key: "academic", label: "پایان‌نامه و مقاله", icon: "🎓" },
      { key: "business", label: "کسب‌وکار و فناوری", icon: "🏭" },
      { key: "support", label: "پشتیبانی و قیمت", icon: "💬" }
    ],
    topics: [
      { icon: "🧒", label: "مشاوره کودکان (شخصیت و استعداد)", prompt: "سلام؛ برای فرزندم می‌خواهم در زمینهٔ شناخت شخصیت، استعدادیابی شغلی و مسیر رشد مهارت‌های هوش مصنوعی مشاورهٔ تخصصی بگیرم. لطفاً تست کودکان ATiLLAi، مراحل جلسات، خروجی گزارش حرفه‌ای و هزینهٔ کامل را توضیح دهید.", cat: "family" },
      { icon: "👨‍👩‍👧", label: "تربیت دیجیتال و خانواده", prompt: "به‌عنوان والدین می‌خواهم در مورد تربیت دیجیتال، مدیریت زمان استفاده از فناوری و ورود اصولی فرزندم به دنیای AI مشاورهٔ تخصصی بگیرم. چه برنامه و بسته‌ای پیشنهاد می‌کنید؟", cat: "family" },
      { icon: "🎓", label: "پایان‌نامه ارشد / دکترا", prompt: "می‌خواهم برای پروژه پایان‌نامه ارشد/دکترا در حوزه هوش مصنوعی مشاوره بگیرم. لطفاً متدولوژی، مراحل اجرا، تضمین کیفیت، زمان‌بندی و قیمت‌گذاری شفاف را بفرمایید.", cat: "academic" },
      { icon: "🏭", label: "پروژه صنعتی / سازمانی", prompt: "برای شرکت‌مان به یک راهکار AI صنعتی (Computer Vision، Predictive Maintenance، Anomaly Detection یا Forecasting) نیاز داریم. نمونه‌کارها، معماری پیشنهادی و فرایند تحویل را توضیح دهید.", cat: "business" },
      { icon: "📱", label: "ساخت اپلیکیشن AI", prompt: "می‌خواهم یک اپلیکیشن موبایل/وب با هستهٔ هوش مصنوعی (چت‌بات، توصیه‌گر، تحلیل تصویر یا صدا) بسازم. گزینه‌های فنی، استک پیشنهادی و برآورد هزینه چیست؟", cat: "business" },
      { icon: "💬", label: "چت‌بات سازمانی / LLM فارسی", prompt: "به یک چت‌بات سازمانی حرفه‌ای مبتنی بر LLM فارسی با RAG، اتصال به دیتابیس داخلی و پنل مدیریت نیاز داریم. هزینه، زمان تحویل و SLA پشتیبانی را بفرمایید.", cat: "business" },
      { icon: "📄", label: "مقاله ISI / Q1", prompt: "برای نگارش، ادیت و سابمیت مقاله ISI / Q1 در حوزه AI به کمک نیاز دارم. مراحل، تضمین کیفیت و شانس پذیرش را توضیح دهید.", cat: "academic" },
      { icon: "💰", label: "هزینه و زمان تحویل", prompt: "هزینه و زمان تحویل تقریبی پروژه‌های ATiLLAi چقدر است؟ لطفاً پکیج‌های دانشجویی، صنعتی و سازمانی را با هم مقایسه کنید.", cat: "support" },
      { icon: "📞", label: "ارتباط با کارشناس", prompt: "می‌خواهم با یک کارشناس انسانی ATiLLAi صحبت کنم. لطفاً راه‌های ارتباطی مستقیم (تلگرام، واتساپ، تلفن، ایمیل) و ساعات پاسخگویی را بفرمایید.", cat: "support" }
    ]
  },
  en: {
    label: "English",
    dir: "ltr",
    title: "Nilix — ATiLLAi Smart Assistant",
    status: "Online · replies in < 30s",
    welcome: "Hi 👋 I'm Nilix, ATiLLAi's multilingual AI assistant.\nPick a topic below or just type your question 👇",
    placeholder: "Type your question…",
    thinking: "Typing…",
    errorMsg: "Something went wrong. Please try again or contact us directly.",
    poweredBy: "ATiLLAi Assistant · Multilingual",
    pickTopic: "Pick a topic to start",
    categories: [
      { key: "family", label: "Kids & Family", icon: "👨‍👩‍👧" },
      { key: "academic", label: "Thesis & Papers", icon: "🎓" },
      { key: "business", label: "Business & Tech", icon: "🏭" },
      { key: "support", label: "Support & Pricing", icon: "💬" }
    ],
    topics: [
      { icon: "🧒", label: "Kids consulting (personality & talent)", prompt: "Hi, I'd like professional consulting for my child on personality discovery, career-talent assessment, and an AI-skills growth path. Please explain the ATiLLAi Kids test, session flow, the professional report, and full pricing.", cat: "family" },
      { icon: "👨‍👩‍👧", label: "Family & digital parenting", prompt: "As a parent I want expert guidance on digital parenting, screen-time management, and introducing my child to AI in a healthy, structured way. Which package do you recommend?", cat: "family" },
      { icon: "🎓", label: "Thesis / PhD project", prompt: "I need consulting for my MSc/PhD AI project. Please walk me through methodology, milestones, quality assurance, timeline and transparent pricing.", cat: "academic" },
      { icon: "🏭", label: "Industrial / Enterprise AI", prompt: "Our company needs an industrial AI solution (Computer Vision, Predictive Maintenance, Anomaly Detection or Forecasting). Please share case studies, proposed architecture and delivery process.", cat: "business" },
      { icon: "📱", label: "Build an AI app", prompt: "I want to build a mobile/web app with an AI core (chatbot, recommender, image or speech analysis). What are the technical options, recommended stack and estimated cost?", cat: "business" },
      { icon: "💬", label: "Enterprise chatbot / Persian LLM", prompt: "We need an enterprise chatbot with a Persian-capable LLM, RAG, internal DB integration and an admin panel. Please share cost, timeline and support SLA.", cat: "business" },
      { icon: "📄", label: "ISI / Q1 paper", prompt: "I need help writing, editing and submitting an ISI / Q1 paper in AI. Please describe the steps, quality assurance and acceptance support.", cat: "academic" },
      { icon: "💰", label: "Pricing & timeline", prompt: "What is the typical price and delivery time for ATiLLAi projects? Please compare student, industrial and enterprise packages.", cat: "support" },
      { icon: "📞", label: "Talk to a human expert", prompt: "I'd like to talk to a human ATiLLAi expert. Please share direct contact options (Telegram, WhatsApp, phone, email) and working hours.", cat: "support" }
    ]
  },
  ar: {
    label: "العربية",
    dir: "rtl",
    title: "Nilix — مساعد ATiLLAi الذكي",
    status: "متصل · الرد خلال ٣٠ ثانية",
    welcome: "مرحبًا 👋 أنا Nilix، المساعد الذكي متعدد اللغات في ATiLLAi.\nاختر موضوعًا أو اكتب سؤالك مباشرة 👇",
    placeholder: "اكتب سؤالك…",
    thinking: "جارٍ الكتابة…",
    errorMsg: "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا.",
    poweredBy: "ATiLLAi Assistant · متعدد اللغات",
    pickTopic: "اختر موضوع المحادثة",
    categories: [
      { key: "family", label: "الأطفال والأسرة", icon: "👨‍👩‍👧" },
      { key: "academic", label: "الأطروحات والأبحاث", icon: "🎓" },
      { key: "business", label: "الأعمال والتقنية", icon: "🏭" },
      { key: "support", label: "الدعم والأسعار", icon: "💬" }
    ],
    topics: [
      { icon: "🧒", label: "استشارة الأطفال (الشخصية والمواهب)", prompt: "أرغب باستشارة احترافية لطفلي حول اكتشاف الشخصية، تقييم الميول المهنية ومسار تطوير مهارات الذكاء الاصطناعي. يرجى شرح اختبار ATiLLAi للأطفال، خطوات الجلسات، التقرير الاحترافي والتكلفة الكاملة.", cat: "family" },
      { icon: "👨‍👩‍👧", label: "التربية الرقمية والأسرة", prompt: "كأبٍ/أمّ أرغب باستشارة متخصصة حول التربية الرقمية، إدارة وقت الشاشات وإدخال طفلي إلى عالم الذكاء الاصطناعي بشكل صحي ومنظم. ما الباقة المقترحة؟", cat: "family" },
      { icon: "🎓", label: "مشروع ماجستير / دكتوراه", prompt: "أحتاج استشارة لمشروع الماجستير/الدكتوراه في الذكاء الاصطناعي. اشرحوا لي المنهجية، المراحل، ضمان الجودة، الجدول الزمني والتسعير الشفاف.", cat: "academic" },
      { icon: "🏭", label: "مشروع صناعي / مؤسسي", prompt: "نحتاج حلًا صناعيًا بالذكاء الاصطناعي (رؤية حاسوبية، صيانة تنبؤية، كشف الشذوذ أو التنبؤ). شاركوا أعمالكم السابقة، البنية المقترحة وعملية التسليم.", cat: "business" },
      { icon: "📱", label: "بناء تطبيق ذكي", prompt: "أرغب ببناء تطبيق موبايل/ويب بنواة ذكاء اصطناعي (شات بوت، نظام توصية، تحليل صور أو صوت). ما الخيارات التقنية والتقدير المبدئي للتكلفة؟", cat: "business" },
      { icon: "💬", label: "شات بوت مؤسسي / LLM", prompt: "نحتاج شات بوت مؤسسي مع نموذج LLM يدعم العربية والفارسية مع RAG وربط بقاعدة البيانات الداخلية ولوحة إدارة. التكلفة، الزمن واتفاقية الدعم؟", cat: "business" },
      { icon: "📄", label: "نشر بحث ISI / Q1", prompt: "أحتاج مساعدة في كتابة وتحرير وإرسال بحث ISI / Q1 في مجال الذكاء الاصطناعي. اشرحوا الخطوات وضمان الجودة.", cat: "academic" },
      { icon: "💰", label: "التكلفة وزمن التسليم", prompt: "ما هي التكلفة التقريبية وزمن التسليم لمشاريع ATiLLAi؟ قارنوا بين الباقات الطلابية والصناعية والمؤسسية.", cat: "support" },
      { icon: "📞", label: "التحدث مع خبير", prompt: "أرغب بالتحدث مع خبير بشري من ATiLLAi. شاركوا وسائل التواصل المباشر (تلغرام، واتساب، هاتف، بريد) وساعات العمل.", cat: "support" }
    ]
  },
  tr: {
    label: "Türkçe",
    dir: "ltr",
    title: "Nilix — ATiLLAi Akıllı Asistan",
    status: "Çevrimiçi · < 30 sn yanıt",
    welcome: "Merhaba 👋 Ben Nilix, ATiLLAi'nin çok dilli yapay zekâ asistanıyım.\nBir konu seçin ya da sorunuzu yazın 👇",
    placeholder: "Sorunuzu yazın…",
    thinking: "Yazıyor…",
    errorMsg: "Bir hata oluştu. Lütfen tekrar deneyin veya bize ulaşın.",
    poweredBy: "ATiLLAi Assistant · Çok Dilli",
    pickTopic: "Bir konu seçin",
    categories: [
      { key: "family", label: "Çocuk & Aile", icon: "👨‍👩‍👧" },
      { key: "academic", label: "Tez & Makale", icon: "🎓" },
      { key: "business", label: "İş & Teknoloji", icon: "🏭" },
      { key: "support", label: "Destek & Fiyat", icon: "💬" }
    ],
    topics: [
      { icon: "🧒", label: "Çocuk danışmanlığı (kişilik & yetenek)", prompt: "Çocuğum için kişilik keşfi, kariyer-yetenek değerlendirmesi ve yapay zekâ becerileri gelişim yolu konusunda profesyonel danışmanlık almak istiyorum. ATiLLAi Çocuk testini, seans akışını, profesyonel raporu ve tam fiyatı açıklar mısınız?", cat: "family" },
      { icon: "👨‍👩‍👧", label: "Aile & dijital ebeveynlik", prompt: "Ebeveyn olarak dijital ebeveynlik, ekran süresi yönetimi ve çocuğumun yapay zekâ dünyasına sağlıklı bir şekilde girişi konusunda uzman danışmanlık istiyorum. Hangi paketi önerirsiniz?", cat: "family" },
      { icon: "🎓", label: "Tez / Doktora projesi", prompt: "Yüksek lisans/doktora yapay zekâ projem için danışmanlık almak istiyorum. Metodoloji, aşamalar, kalite güvencesi, zaman çizelgesi ve şeffaf fiyatlandırmayı paylaşır mısınız?", cat: "academic" },
      { icon: "🏭", label: "Endüstriyel / Kurumsal AI", prompt: "Şirketimiz için endüstriyel bir yapay zekâ çözümüne (Computer Vision, Predictive Maintenance, Anomaly Detection veya Forecasting) ihtiyacımız var. Referanslarınızı, mimariyi ve teslim sürecini paylaşın.", cat: "business" },
      { icon: "📱", label: "AI uygulama geliştirme", prompt: "Yapay zekâ çekirdekli bir mobil/web uygulama (sohbet botu, öneri sistemi, görüntü/ses analizi) yapmak istiyorum. Teknik seçenekler, önerilen yığın ve tahmini maliyet nedir?", cat: "business" },
      { icon: "💬", label: "Kurumsal chatbot / Farsça LLM", prompt: "Farsça destekli LLM, RAG, iç veritabanı entegrasyonu ve yönetim paneli olan kurumsal bir chatbot istiyoruz. Maliyet, süre ve destek SLA'sını paylaşın.", cat: "business" },
      { icon: "📄", label: "ISI / Q1 makale", prompt: "Yapay zekâ alanında ISI / Q1 makale yazımı, düzenleme ve sunumu için yardıma ihtiyacım var. Adımları ve kalite güvencesini açıklayın.", cat: "academic" },
      { icon: "💰", label: "Fiyat & teslim süresi", prompt: "ATiLLAi projelerinin tipik fiyatı ve teslim süresi nedir? Öğrenci, endüstriyel ve kurumsal paketleri karşılaştırın.", cat: "support" },
      { icon: "📞", label: "Uzmanla görüşme", prompt: "Bir ATiLLAi uzmanıyla görüşmek istiyorum. Doğrudan iletişim seçeneklerini (Telegram, WhatsApp, telefon, e-posta) ve çalışma saatlerini paylaşın.", cat: "support" }
    ]
  }
};
function ChatWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [lang, setLang] = reactExports.useState("fa");
  const [langMenu, setLangMenu] = reactExports.useState(false);
  const pack = LANGS[lang];
  const welcome = reactExports.useMemo(() => ({ role: "assistant", content: pack.welcome }), [pack.welcome]);
  const [messages, setMessages] = reactExports.useState([welcome]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [copiedIdx, setCopiedIdx] = reactExports.useState(null);
  const [showTeaser, setShowTeaser] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const send = useServerFn(chatConsult);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedLang = window.localStorage.getItem(`${STORAGE_PREFIX}lang`);
      if (savedLang && ["fa", "en", "ar", "tr"].includes(savedLang)) setLang(savedLang);
      const raw = window.localStorage.getItem(`${STORAGE_PREFIX}msgs:${savedLang ?? "fa"}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed);
      }
    } catch {
    }
    const t = window.setTimeout(() => setShowTeaser(true), 6e3);
    return () => window.clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(`${STORAGE_PREFIX}lang`, lang);
    try {
      const raw = window.localStorage.getItem(`${STORAGE_PREFIX}msgs:${lang}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      }
    } catch {
    }
    setMessages([welcome]);
  }, [lang]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(`${STORAGE_PREFIX}msgs:${lang}`, JSON.stringify(messages.slice(-40)));
    } catch {
    }
  }, [messages, lang]);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);
  reactExports.useEffect(() => {
    if (open) setShowTeaser(false);
  }, [open]);
  async function dispatch(text) {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await send({
        data: {
          messages: [
            { role: "user", content: `[LANG=${lang}] Please reply in the user's language (${pack.label}). Keep the same friendly, professional tone.` },
            ...messages,
            userMsg
          ]
        }
      });
      setMessages((m) => [...m, { role: "assistant", content: res.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: pack.errorMsg }]);
    } finally {
      setLoading(false);
    }
  }
  function handleSend(e) {
    e?.preventDefault();
    dispatch(input);
  }
  function clearConversation() {
    setMessages([welcome]);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(`${STORAGE_PREFIX}msgs:${lang}`);
    }
  }
  async function copyMessage(idx, content) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIdx(idx);
      window.setTimeout(() => setCopiedIdx((c) => c === idx ? null : c), 1500);
    } catch {
    }
  }
  const lastIsAssistant = messages.length > 1 && messages[messages.length - 1].role === "assistant";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !open && showTeaser && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { opacity: 0, y: 10, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.9 },
        onClick: () => setOpen(true),
        dir: pack.dir,
        className: "fixed bottom-24 left-6 z-[59] max-w-[16rem] rounded-2xl border border-amber-300/30 bg-[#0a0c14]/95 px-3.5 py-2.5 text-start text-xs font-semibold text-white shadow-2xl backdrop-blur-xl hover:border-amber-300/60",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block leading-snug", children: TEASER[lang] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 start-6 h-3 w-3 rotate-45 border-b border-e border-amber-300/30 bg-[#0a0c14]" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 0.6, type: "spring" },
        onClick: () => setOpen((s) => !s),
        "aria-label": "Chat with ATiLLAi assistant",
        className: "fixed bottom-6 left-6 z-[60] group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,rgba(99,102,241,0.6),rgba(168,85,247,0.5),rgba(14,165,233,0.6),rgba(99,102,241,0.6))] opacity-60 blur-xl transition group-hover:opacity-90 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-white shadow-glow ring-2 ring-white/20", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: NILIX_BOT_LOGO, alt: "Nilix", className: "h-full w-full object-cover" }) }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-1 -right-1 flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-primary" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        dir: pack.dir,
        className: "fixed bottom-24 left-6 z-[60] w-[calc(100vw-3rem)] max-w-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[28px] p-[1.5px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              "aria-hidden": true,
              className: "absolute inset-0 rounded-[28px] opacity-90",
              style: {
                background: "conic-gradient(from 0deg, oklch(0.92 0.14 90), oklch(0.55 0.18 270), oklch(0.65 0.18 200), oklch(0.92 0.14 90))"
              },
              animate: { rotate: 360 },
              transition: { duration: 12, repeat: Infinity, ease: "linear" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-[36rem] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0c14]/95 backdrop-blur-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-20 bg-[conic-gradient(from_120deg,rgba(251,191,36,0.18),rgba(168,85,247,0.14),rgba(14,165,233,0.18),rgba(251,191,36,0.18))] blur-3xl opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:24px_24px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 border-b border-white/10 bg-gradient-to-br from-primary/25 via-amber-600/10 to-transparent px-4 py-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-amber-600 opacity-60 blur-md" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 shadow-glow ring-2 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: NILIX_BOT_LOGO, alt: "Nilix", className: "h-full w-full object-cover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0a0c14] shadow-[0_0_10px_rgba(52,211,153,0.7)]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                (() => {
                  const parts = pack.title.split(/\s[—–-]\s/);
                  const first = parts[0];
                  const rest = parts.slice(1).join(" — ");
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-ai-display leading-[1.15] tracking-[0.02em] drop-shadow-[0_1px_6px_rgba(251,191,36,0.25)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold text-amber-200/90", children: first }),
                    rest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-light text-white/75", children: rest })
                  ] });
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1.5 text-[10px] text-emerald-300/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                  pack.status
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: clearConversation,
                  "aria-label": "Clear conversation",
                  title: "Clear",
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-rose-300/50 hover:text-rose-300",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setLangMenu((s) => !s),
                    "aria-label": "Change language",
                    className: "flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/10 px-2.5 py-1.5 text-[11px] font-bold text-amber-200 transition hover:bg-amber-400/20 hover:border-amber-300/60",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
                      pack.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: langMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -6, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: -6, scale: 0.95 },
                    className: "absolute end-0 top-10 z-10 w-40 overflow-hidden rounded-2xl border border-amber-300/20 bg-[#0e1119]/95 shadow-2xl backdrop-blur-xl",
                    children: Object.keys(LANGS).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => {
                          setLang(k);
                          setLangMenu(false);
                        },
                        className: `flex w-full items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition hover:bg-amber-400/10 ${k === lang ? "text-amber-300" : "text-white/80"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: LANGS[k].label }),
                          k === lang && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "✓" })
                        ]
                      },
                      k
                    ))
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "relative flex-1 space-y-3 overflow-y-auto px-4 py-4", children: [
              messages.map((m, i) => {
                const isUser = m.role === "user";
                const isLastAssistant = !isUser && i === messages.length - 1 && !loading;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    className: `flex flex-col gap-1 ${isUser ? pack.dir === "rtl" ? "items-start" : "items-end" : pack.dir === "rtl" ? "items-end" : "items-start"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `group relative max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-7 shadow-lg ${isUser ? "bg-gradient-to-br from-primary to-amber-600 text-primary-foreground shadow-[0_8px_24px_-8px_rgba(251,191,36,0.5)] ring-1 ring-amber-300/30" : "bg-gradient-to-br from-white/[0.08] to-white/[0.03] text-white ring-1 ring-white/10 backdrop-blur"}`,
                          children: [
                            isUser ? m.content : renderRich(m.content),
                            !isUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => copyMessage(i, m.content),
                                "aria-label": "Copy",
                                className: "absolute -top-2 end-2 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0a0c14] text-white/70 transition hover:text-amber-300 group-hover:flex",
                                children: copiedIdx === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" })
                              }
                            )
                          ]
                        }
                      ),
                      isLastAssistant && messages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TELEGRAM_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 rounded-full border border-sky-300/30 bg-sky-400/10 px-2.5 py-1 text-[11px] font-bold text-sky-200 transition hover:bg-sky-400/20", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3" }),
                          " Telegram"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_URL, className: "inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-200 transition hover:bg-emerald-400/20", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                          " 09105557133"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-bold text-amber-200 transition hover:bg-amber-400/20", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
                          " /contact"
                        ] })
                      ] })
                    ]
                  },
                  i
                );
              }),
              loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${pack.dir === "rtl" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] px-3.5 py-2.5 text-sm text-amber-200/90 ring-1 ring-amber-300/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin text-amber-300" }),
                " ",
                pack.thinking
              ] }) }),
              messages.length === 1 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-ai-display text-[10px] font-bold uppercase tracking-[0.28em] text-gradient-gold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-amber-300" }),
                  " ",
                  pack.pickTopic
                ] }),
                pack.categories.map((cat) => {
                  const items = pack.topics.filter((t) => t.cat === cat.key);
                  if (!items.length) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-200/80", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: cat.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-gradient-to-r from-amber-300/40 to-transparent" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: items.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.button,
                      {
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.03 * idx },
                        onClick: () => dispatch(t.prompt),
                        className: "group relative overflow-hidden rounded-xl border border-amber-300/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-2.5 text-start text-xs text-white/90 transition hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-amber-400/[0.1] hover:shadow-[0_8px_20px_-8px_rgba(251,191,36,0.4)]",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]", children: t.icon }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold leading-tight tracking-wide", children: t.label })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition duration-700 group-hover:translate-x-full" })
                        ]
                      },
                      t.label
                    )) })
                  ] }, cat.key);
                })
              ] }),
              lastIsAssistant && !loading && messages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: QUICK_REPLIES[lang].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => dispatch(q.prompt),
                  className: "rounded-full border border-amber-300/20 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-amber-100/90 transition hover:border-amber-300/60 hover:bg-amber-400/10 hover:text-amber-100",
                  children: q.label
                },
                q.label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSend, className: "relative flex items-center gap-2 border-t border-white/10 bg-black/40 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  placeholder: pack.placeholder,
                  className: "flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none ring-amber-400/40 placeholder:text-white/40 transition focus:ring-2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: loading || !input.trim(),
                  "aria-label": "Send",
                  className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground shadow-glow transition hover:scale-105 disabled:opacity-50",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-white/5 bg-black/60 px-3 py-2 text-center font-ai-display text-[9px] font-bold uppercase tracking-[0.32em] text-amber-200/50", children: pack.poweredBy })
          ] })
        ] })
      }
    ) })
  ] });
}
const STORAGE_KEY = "ATiLLAi.promo.dismissed.v1";
function PromoBanner() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);
  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -40, opacity: 0 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 bottom-0 z-[55] overflow-hidden border-t border-amber-300/30 bg-gradient-to-r from-amber-500/15 via-amber-300/10 to-amber-500/15 backdrop-blur-xl",
      role: "region",
      "aria-label": "پیشنهاد ویژه",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            "aria-hidden": true,
            initial: { x: "-100%" },
            animate: { x: "100%" },
            transition: { duration: 3.5, ease: "linear", repeat: Infinity },
            className: "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent blur-md"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-[12.5px] sm:text-[13.5px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-amber-300/40 bg-amber-400/15 text-amber-200 sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-foreground/95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "me-1 inline h-3.5 w-3.5 text-amber-300" }),
            "پیشنهاد ویژه: تا",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-gradient-gold", children: "٣٠٪ تخفیف" }),
            " ",
            "روی اپلیکیشن‌ها و پروژه‌های منتخب — با کد",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 inline-block rounded-md border border-amber-300/40 bg-amber-400/15 px-2 py-0.5 font-mono text-[12px] font-bold tracking-wider text-amber-200", children: "ATiLLAi30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/apps", className: "ms-2 font-bold text-amber-200 underline-offset-4 hover:underline", children: "مشاهده اپ‌ها" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 text-foreground/40", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "font-bold text-amber-200 underline-offset-4 hover:underline", children: "پروژه‌ها" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: dismiss,
              "aria-label": "بستن",
              className: "absolute end-3 rounded-md p-1 text-foreground/60 transition hover:bg-white/10 hover:text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] })
      ]
    }
  ) });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -400, y: -400 });
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setVisible(true);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed -z-10 h-[480px] w-[480px] rounded-full opacity-60 mix-blend-screen",
      animate: { x: pos.x - 240, y: pos.y - 240 },
      transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.6 },
      style: {
        background: "radial-gradient(closest-side, oklch(0.85 0.16 85 / 0.18), transparent 70%)"
      }
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient-gold", children: "۴۰۴" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "صفحه پیدا نشد" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "صفحه‌ای که دنبالش هستید وجود ندارد یا منتقل شده است." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: "بازگشت به خانه" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "صفحه بارگذاری نشد" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "یک خطا رخ داد. می‌توانید دوباره تلاش کنید." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "تلاش مجدد" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-input px-4 py-2 text-sm", children: "خانه" })
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ATiLLAi | استودیو هوش مصنوعی و علم داده" },
      { name: "description", content: "ATiLLAi — مرجع تخصصی مشاوره و اجرای پروژه‌های دانشجویی، صنعتی و دانشگاهی در زمینه آمار، هوش مصنوعی، یادگیری ماشین و یادگیری عمیق." },
      { name: "author", content: "ATiLLAi" },
      { property: "og:site_name", content: "ATiLLAi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "ATiLLAi | استودیو هوش مصنوعی و علم داده" },
      { name: "twitter:title", content: "ATiLLAi | استودیو هوش مصنوعی و علم داده" },
      { property: "og:description", content: "ATiLLAi — مرجع تخصصی مشاوره و اجرای پروژه‌های دانشجویی، صنعتی و دانشگاهی در زمینه آمار، هوش مصنوعی، یادگیری ماشین و یادگیری عمیق." },
      { name: "twitter:description", content: "ATiLLAi — مرجع تخصصی مشاوره و اجرای پروژه‌های دانشجویی، صنعتی و دانشگاهی در زمینه آمار، هوش مصنوعی، یادگیری ماشین و یادگیری عمیق." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VWpt2vj2zteIFyKQbOqleuiKoc03/social-images/social-1780917278939-ChatGPT_Image_Jun_7,_2026,_03_02_33_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VWpt2vj2zteIFyKQbOqleuiKoc03/social-images/social-1780917278939-ChatGPT_Image_Jun_7,_2026,_03_02_33_PM.webp" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;600;700&family=Orbitron:wght@500;700;800;900&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&family=Montserrat:wght@300;400;500&display=swap" }
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ATiLLAi",
        url: "https://atil-ai-hub.lovable.app",
        description: "ATiLLAi — استودیو تخصصی مشاوره و اجرای پروژه‌های هوش مصنوعی، یادگیری ماشین و آمار."
      })
    }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "fa", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-aurora opacity-80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 [background-image:radial-gradient(oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PromoBanner, {})
  ] }) }) });
}
const BASE_URL = "https://atil-ai-hub.lovable.app";
const Route$e = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/projects", changefreq: "weekly", priority: "0.9" },
          { path: "/apps", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/blog/machine-learning-project-ideas", changefreq: "monthly", priority: "0.7" }
        ];
        try {
          for (const p of PROJECTS) entries.push({ path: `/projects/${p.slug}`, changefreq: "monthly", priority: "0.7" });
        } catch {
        }
        try {
          for (const a of APPS) entries.push({ path: `/apps/${a.slug}`, changefreq: "monthly", priority: "0.7" });
        } catch {
        }
        try {
          for (const s of SERVICE_DETAILS) entries.push({ path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.7" });
        } catch {
        }
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$a = () => import("./services-CtZtiw1B.mjs");
const Route$d = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./projects-IJ6xWIfp.mjs");
const Route$c = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const SITE_URL = "https://atil-ai-hub.lovable.app";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/VWpt2vj2zteIFyKQbOqleuiKoc03/social-images/social-1780917278939-ChatGPT_Image_Jun_7,_2026,_03_02_33_PM.webp";
function abs(path) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path)
    }))
  };
}
function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}
function howToJsonLd(opts) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text
    }))
  };
}
const $$splitComponentImporter$8 = () => import("./kids-test-Cl0gwa0O.mjs");
const Route$b = createFileRoute("/kids-test")({
  head: () => ({
    meta: [{
      title: "تست شخصیت و کشف استعداد شغلی کودکان و نوجوانان | ATiLLAi"
    }, {
      name: "description",
      content: "تست استاندارد ۱۰ سؤالی شخصیت‌شناسی و کشف استعداد شغلی کودکان و نوجوانان مبتنی بر هوش مصنوعی ATiLLAi و مدل‌های RIASEC و هوش‌های چندگانه گاردنر."
    }, {
      property: "og:title",
      content: "تست شخصیت و شغل کودکان | ATiLLAi"
    }, {
      property: "og:description",
      content: "کشف استعداد، شخصیت و مسیر شغلی فرزند شما با هوش مصنوعی ATiLLAi."
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL}/kids-test`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
function BackButton({ className = "" }) {
  const router2 = useRouter();
  const onClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router2.history.back();
    } else {
      router2.navigate({ to: "/" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: `inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10 hover:border-primary/40 ${className}`,
      "aria-label": "بازگشت",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
        "بازگشت"
      ]
    }
  );
}
const CONTACT_URL = `${SITE_URL}/contact`;
const Route$a = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ATiLLAi | مشاوره رایگان پروژه‌های هوش مصنوعی" },
      { name: "description", content: "برای ثبت سفارش پروژه هوش مصنوعی، یادگیری ماشین، آمار یا اپلیکیشن AI با ATiLLAi در تماس باشید. مشاوره رایگان از طریق تلگرام، تلفن و ایمیل." },
      { name: "keywords", content: "تماس ATiLLAi, مشاوره هوش مصنوعی, ثبت سفارش پروژه, تلگرام ATiLLAi, تبریز" },
      { property: "og:title", content: "تماس با ATiLLAi" },
      { property: "og:description", content: "ثبت سفارش پروژه و دریافت مشاوره رایگان از تیم ATiLLAi." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CONTACT_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "تماس با ATiLLAi" },
      { name: "twitter:description", content: "ثبت سفارش پروژه و دریافت مشاوره رایگان." },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE }
    ],
    links: [{ rel: "canonical", href: CONTACT_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "تماس با ATiLLAi",
          url: CONTACT_URL,
          mainEntity: {
            "@type": "Organization",
            name: "ATiLLAi",
            url: SITE_URL,
            email: "Atilla.DatascienceGroup.1401@gmail.com",
            telephone: "+98-910-555-7133",
            address: { "@type": "PostalAddress", streetAddress: "Valiasr", addressLocality: "Tabriz", addressCountry: "IR" },
            contactPoint: [{
              "@type": "ContactPoint",
              telephone: "+98-910-555-7133",
              contactType: "customer support",
              availableLanguage: ["Persian", "English", "Arabic", "Turkish"]
            }]
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "خانه", path: "/" },
            { name: "تماس با ما", path: "/contact" }
          ])
        )
      }
    ]
  }),
  component: ContactPage
});
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "mx-auto max-w-3xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "در ارتباط باشید" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl font-black md:text-6xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "ثبت سفارش" }),
            " پروژه"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "فرم زیر را تکمیل کنید؛ کارشناسان ما در کوتاه‌ترین زمان با شما تماس می‌گیرند." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "space-y-4 lg:col-span-1",
          children: [
            { icon: Mail, title: "ایمیل اصلی", value: "Atilla.DatascienceGroup.1401@gmail.com", href: "mailto:Atilla.DatascienceGroup.1401@gmail.com", ltr: true },
            { icon: Mail, title: "ایمیل مدیریت", value: "dr.m.pourabdollah.ai@gmail.com", href: "mailto:dr.m.pourabdollah.ai@gmail.com", ltr: true },
            { icon: Mail, title: "ایمیل پشتیبانی", value: "mahdi.poorabdollah@gmail.com", href: "mailto:mahdi.poorabdollah@gmail.com", ltr: true },
            { icon: Phone, title: "تلفن همراه ۱", value: "+98 910 555 7133", href: "tel:+989105557133", ltr: true },
            { icon: Phone, title: "تلفن همراه ۲", value: "+98 990 137 7895", href: "tel:+989901377895", ltr: true },
            { icon: Send, title: "تلگرام", value: "@MahdiPourabdollah_Ai", href: "https://t.me/MahdiPourabdollah_Ai" },
            { icon: MessageCircle, title: "واتساپ", value: "+98 910 555 7133", href: "https://wa.me/989105557133", ltr: true },
            { icon: MapPin, title: "آدرس", value: "تبریز، خیابان ولیعصر" }
          ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href ?? "#", target: c.href?.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "glass flex items-center gap-4 rounded-2xl p-4 transition hover:scale-[1.02]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm truncate", dir: c.ltr ? "ltr" : void 0, children: c.value })
            ] })
          ] }, c.title))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          className: "glass relative rounded-3xl p-8 lg:col-span-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "نام و نام خانوادگی", name: "name", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ایمیل", name: "email", type: "email", required: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "شماره تماس", name: "phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "نوع پروژه", name: "type", options: [
                "دانشجویی / پایان‌نامه",
                "صنعتی",
                "شرکت خصوصی",
                "دولتی / سازمانی",
                "مشاوره"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { className: "mt-5", label: "حوزه تخصصی", name: "domain", options: [
              "یادگیری ماشین",
              "یادگیری عمیق",
              "بینایی کامپیوتر",
              "پردازش زبان طبیعی",
              "تحلیل آماری",
              "علم داده",
              "سایر"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-description", className: "mb-2 block text-sm font-semibold", children: "شرح پروژه" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "contact-description",
                  name: "description",
                  rows: 5,
                  required: true,
                  placeholder: "درباره پروژه‌تان توضیح دهید...",
                  className: "w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none ring-primary/40 transition focus:ring-2"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-6 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-[1.01]",
                children: [
                  sent ? "✓ درخواست شما ثبت شد" : "ارسال درخواست",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
function Field({ label, name, type = "text", required }) {
  const id = `contact-${name}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "mb-2 block text-sm font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        type,
        name,
        required,
        className: "w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none ring-primary/40 transition focus:ring-2"
      }
    )
  ] });
}
function SelectField({ label, name, options, className = "" }) {
  const id = `contact-${name}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "mb-2 block text-sm font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        id,
        name,
        className: "w-full rounded-2xl border border-input bg-background/80 px-4 py-3 text-sm outline-none ring-primary/40 transition focus:ring-2",
        children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
      }
    )
  ] });
}
const $$splitComponentImporter$7 = () => import("./apps-BaQPFXRb.mjs");
const Route$9 = createFileRoute("/apps")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const ABOUT_URL = `${SITE_URL}/about`;
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ATiLLAi | تیم تخصصی هوش مصنوعی و علم داده" },
      { name: "description", content: "ATiLLAi مرجع تخصصی هوش مصنوعی و علم داده با بیش از ۱۰ سال تجربه در پروژه‌های دانشگاهی، صنعتی و دولتی؛ تیم دکتری‌ها و متخصصان AI/ML." },
      { name: "keywords", content: "درباره ATiLLAi, تیم هوش مصنوعی, متخصص یادگیری ماشین, دکتر مهدی پورعبدالله, تبریز" },
      { property: "og:title", content: "درباره ATiLLAi | تیم تخصصی هوش مصنوعی" },
      { property: "og:description", content: "تیم متخصص ATiLLAi با تجربه‌ای جهانی در AI، ML و آمار." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABOUT_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "درباره ATiLLAi" },
      { name: "twitter:description", content: "تیم متخصص ATiLLAi با تجربه‌ای جهانی در AI، ML و آمار." },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE }
    ],
    links: [{ rel: "canonical", href: ABOUT_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "درباره ATiLLAi",
          url: ABOUT_URL,
          about: { "@type": "Organization", name: "ATiLLAi", url: SITE_URL }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "خانه", path: "/" },
            { name: "درباره ما", path: "/about" }
          ])
        )
      }
    ]
  }),
  component: AboutPage
});
const values = [
  { icon: Award, title: "تخصص و کیفیت", desc: "تیمی از دکتری‌ها و متخصصان برتر هوش مصنوعی و آمار." },
  { icon: Target, title: "تعهد به نتیجه", desc: "هدف ما حل واقعی مسئله شما و رسیدن به خروجی حرفه‌ای است." },
  { icon: BookOpen, title: "روزآمدی علمی", desc: "همیشه با جدیدترین مقالات و تکنولوژی‌های جهان همگام هستیم." },
  { icon: Code, title: "کد تمیز و مستند", desc: "تمامی پروژه‌ها با کد استاندارد، تست‌پذیر و مستندسازی کامل." }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "درباره ATiLLAi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl font-black md:text-6xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "مرجعی" }),
            " برای آینده هوشمند"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg leading-9 text-muted-foreground", children: "ATiLLAi یک مرکز تخصصی در زمینه آمار، هوش مصنوعی، یادگیری ماشین و یادگیری عمیق است که با تکیه بر تیمی از متخصصان حرفه‌ای، خدمات مشاوره و اجرای پروژه را برای دانشجویان، شرکت‌های خصوصی و سازمان‌های صنعتی و دولتی ارائه می‌دهد." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.2 },
        className: "glass mt-16 rounded-3xl p-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black md:text-3xl", children: "ماموریت ما" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-9 text-muted-foreground", children: "ما باور داریم هوش مصنوعی نباید یک تکنولوژی پیچیده و دور از دسترس باشد. ماموریت ATiLLAi این است که با مشاوره دقیق، پیاده‌سازی حرفه‌ای و پشتیبانی پایدار، دسترسی به دانش روز هوش مصنوعی را برای همه — از یک دانشجوی کارشناسی گرفته تا بزرگ‌ترین سازمان‌ها — هموار سازد." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition hover:border-primary/40 hover:shadow-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 leading-7 text-muted-foreground", children: v.desc })
        ]
      },
      v.title
    )) })
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./index-BF0R-2mc.mjs");
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "ATiLLAi | پروژه‌های هوش مصنوعی، یادگیری ماشین و آمار"
    }, {
      name: "description",
      content: "مشاوره و اجرای حرفه‌ای پروژه‌های دانشجویی، صنعتی و دانشگاهی در زمینه هوش مصنوعی، یادگیری ماشین، یادگیری عمیق، NLP فارسی و آمار با تیم دکتری ATiLLAi."
    }, {
      name: "keywords",
      content: "ATiLLAi, هوش مصنوعی, یادگیری ماشین, یادگیری عمیق, آمار, پایان‌نامه, مقاله ISI, چت‌بات فارسی, NLP فارسی, MLOps"
    }, {
      property: "og:title",
      content: "ATiLLAi | مرجع پروژه‌های هوش مصنوعی و آمار"
    }, {
      property: "og:description",
      content: "مشاوره و اجرای پروژه‌های AI/ML/DL و آمار با کیفیت لوکس و حرفه‌ای."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://atil-ai-hub.lovable.app/"
    }, {
      property: "og:image",
      content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VWpt2vj2zteIFyKQbOqleuiKoc03/social-images/social-1780917278939-ChatGPT_Image_Jun_7,_2026,_03_02_33_PM.webp"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "ATiLLAi | مرجع پروژه‌های هوش مصنوعی و آمار"
    }, {
      name: "twitter:description",
      content: "مشاوره و اجرای پروژه‌های AI/ML/DL و آمار با کیفیت لوکس و حرفه‌ای."
    }, {
      name: "twitter:image",
      content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VWpt2vj2zteIFyKQbOqleuiKoc03/social-images/social-1780917278939-ChatGPT_Image_Jun_7,_2026,_03_02_33_PM.webp"
    }],
    links: [{
      rel: "canonical",
      href: "https://atil-ai-hub.lovable.app/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "ATiLLAi",
        url: "https://atil-ai-hub.lovable.app",
        description: "استودیو تخصصی مشاوره و اجرای پروژه‌های هوش مصنوعی، یادگیری ماشین و آمار.",
        areaServed: "IR",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tabriz",
          streetAddress: "Valiasr",
          addressCountry: "IR"
        },
        telephone: "+98-910-555-7133",
        email: "Atilla.DatascienceGroup.1401@gmail.com"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ATiLLAi",
        url: "https://atil-ai-hub.lovable.app",
        inLanguage: "fa-IR",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://atil-ai-hub.lovable.app/projects?q={query}",
          "query-input": "required name=query"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const SERVICES_URL = `${SITE_URL}/services`;
const Route$6 = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "خدمات هوش مصنوعی، یادگیری ماشین و آمار | ATiLLAi" },
      { name: "description", content: "خدمات تخصصی ATiLLAi شامل یادگیری ماشین، یادگیری عمیق، تحلیل آماری، علم داده، NLP فارسی، Computer Vision، MLOps، مقاله‌نویسی ISI و ساخت اپلیکیشن AI." },
      { name: "keywords", content: "خدمات هوش مصنوعی, یادگیری ماشین, یادگیری عمیق, NLP فارسی, مقاله ISI, MLOps, ATiLLAi" },
      { property: "og:title", content: "خدمات تخصصی ATiLLAi" },
      { property: "og:description", content: "خدمات تخصصی ATiLLAi در حوزه AI، ML، DL، آمار و MLOps." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SERVICES_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "خدمات تخصصی ATiLLAi" },
      { name: "twitter:description", content: "خدمات تخصصی ATiLLAi در حوزه AI، ML، DL، آمار و MLOps." },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE }
    ],
    links: [{ rel: "canonical", href: SERVICES_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "خدمات ATiLLAi",
          url: SERVICES_URL,
          itemListElement: [
            "Deep Learning",
            "Machine Learning",
            "Statistical Analysis",
            "Data Science",
            "Time Series Forecasting",
            "Computer Vision",
            "NLP & LLM",
            "ISI Paper Writing",
            "MLOps & Cloud Deployment",
            "AI Mobile App Development"
          ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name }))
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "خانه", path: "/" },
            { name: "خدمات", path: "/services" }
          ])
        )
      }
    ]
  }),
  component: ServicesPage
});
const SERVICES = [
  { icon: Brain, title: "یادگیری عمیق (Deep Learning)", desc: "طراحی و آموزش شبکه‌های عصبی مدرن: CNN، RNN، LSTM، Transformer، GAN، Diffusion و LLM." },
  { icon: Bot, title: "یادگیری ماشین (Machine Learning)", desc: "پیاده‌سازی الگوریتم‌های نظارت‌شده، بدون نظارت، تقویتی، Ensemble و Boosting." },
  { icon: ChartColumn, title: "تحلیل آماری پیشرفته", desc: "آزمون فرض، رگرسیون، آنالیز واریانس، مدل‌سازی چندمتغیره، Bayesian Statistics." },
  { icon: Database, title: "علم داده و Big Data", desc: "پاکسازی، تحلیل و بصری‌سازی داده‌های کلان، طراحی Pipeline داده، Feature Engineering." },
  { icon: ChartLine, title: "پیش‌بینی سری زمانی", desc: "مدل‌سازی ARIMA، SARIMA، Prophet، LSTM برای پیش‌بینی فروش، قیمت، تقاضا و بازار." },
  { icon: Atom, title: "بینایی کامپیوتر", desc: "تشخیص شیء، Segmentation، تحلیل تصویر پزشکی، OCR و سیستم‌های نظارتی هوشمند." },
  { icon: Network, title: "پردازش زبان طبیعی (NLP)", desc: "چت‌بات، خلاصه‌سازی، ترجمه ماشینی، تحلیل احساسات و ساخت LLM اختصاصی فارسی." },
  { icon: CodeXml, title: "پیاده‌سازی پایان‌نامه", desc: "اجرای کامل پایان‌نامه‌های کارشناسی، ارشد و دکتری به همراه مستندسازی و دفاعیه." },
  { icon: FileText, title: "مقاله‌نویسی ISI و Q1", desc: "نگارش، ادیت، ترجمه تخصصی و سابمیت مقالات در ژورنال‌های ISI، Scopus، IEEE و Springer." },
  { icon: PenTool, title: "نگارش پروپوزال و پروپوزال دکتری", desc: "تدوین حرفه‌ای پروپوزال ارشد و دکتری با موضوعات نو و مرور ادبیات کامل." },
  { icon: Languages, title: "ترجمه تخصصی متون فنی", desc: "ترجمه دقیق مقالات، کتاب و مستندات فنی AI، ML و آمار با حفظ اصطلاحات تخصصی." },
  { icon: Smartphone, title: "ساخت اپلیکیشن موبایل AI", desc: "طراحی و توسعه اپ اندروید، iOS و کراس‌پلتفرم با هسته هوش مصنوعی." },
  { icon: Globe, title: "طراحی وبسایت و داشبورد هوشمند", desc: "وبسایت‌های مدرن، پنل‌های تحلیلی Real-time و داشبوردهای BI با Power BI و Tableau." },
  { icon: Cloud, title: "MLOps و استقرار ابری", desc: "Dockerize، Kubernetes، CI/CD، Monitoring و استقرار مدل روی AWS، GCP و Azure." },
  { icon: Cpu, title: "Edge AI و IoT", desc: "اجرای مدل‌های هوش مصنوعی روی Raspberry Pi، Jetson Nano و میکروکنترلرها." },
  { icon: Rocket, title: "Generative AI و LLM Fine-tuning", desc: "ساخت Agent‌های هوشمند، RAG، Fine-tune مدل‌های LLaMA، Mistral و GPT." },
  { icon: Workflow, title: "اتوماسیون و RPA هوشمند", desc: "طراحی Agent‌ها و ربات‌های اتوماسیون فرایندهای کسب‌وکار با n8n و LangChain." },
  { icon: Presentation, title: "تدریس و کارگاه سازمانی", desc: "دوره‌های خصوصی، گروهی و سازمانی Python، ML، DL، LLM و علم داده." },
  { icon: BookOpen, title: "مشاوره موضوع و دفاع پایان‌نامه", desc: "انتخاب موضوع نوآور، طراحی اسلاید دفاع و کوچینگ جلسه دفاعیه." },
  { icon: Search, title: "Systematic Review و Meta-Analysis", desc: "مرور سیستماتیک مقالات، متاآنالیز و Bibliometric Analysis در حوزه‌های پزشکی و مهندسی." },
  { icon: ShieldCheck, title: "مشاوره و ممیزی پروژه‌های AI", desc: "ارزیابی، انتخاب تکنولوژی، طراحی نقشه راه و ممیزی فنی مدل‌های موجود سازمان." }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "mx-auto max-w-3xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-primary", children: "خدمات کامل" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl font-black md:text-6xl", children: [
            "تمام آنچه برای ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "پروژه" }),
            " نیاز دارید"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "از مشاوره اولیه تا تحویل نهایی و پشتیبانی، خدمات تخصصی ATiLLAi در کنار شماست." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        whileHover: { y: -6 },
        className: "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition hover:border-primary/40 hover:shadow-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: s.desc })
        ]
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/contact",
        className: "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-amber-600 px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-105",
        children: [
          "دریافت مشاوره رایگان ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" })
        ]
      }
    ) })
  ] }) });
}
const $$splitComponentImporter$5 = () => import("./projects.index-SpbR9IVE.mjs");
const PROJECTS_URL = `${SITE_URL}/projects`;
const Route$5 = createFileRoute("/projects/")({
  validateSearch: (s) => ({
    domain: typeof s.domain === "string" ? s.domain : void 0
  }),
  head: () => ({
    meta: [{
      title: "نمونه پروژه‌های هوش مصنوعی ATiLLAi | صنعتی، پزشکی و دانشگاهی"
    }, {
      name: "description",
      content: "نمونه پروژه‌های ATiLLAi در حوزه‌های صنعتی، دانشگاهی، پزشکی، مالی و دولتی همراه با امکان خرید کد کامل و مستندات."
    }, {
      name: "keywords",
      content: "نمونه پروژه هوش مصنوعی, پروژه یادگیری ماشین آماده, پروژه deep learning, ATiLLAi"
    }, {
      property: "og:title",
      content: "نمونه پروژه‌های ATiLLAi"
    }, {
      property: "og:description",
      content: "نمونه پروژه‌های موفق ATiLLAi در حوزه‌های صنعتی، پزشکی و دانشگاهی."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: PROJECTS_URL
    }, {
      property: "og:image",
      content: DEFAULT_OG_IMAGE
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "نمونه پروژه‌های ATiLLAi"
    }, {
      name: "twitter:description",
      content: "نمونه پروژه‌های موفق ATiLLAi."
    }, {
      name: "twitter:image",
      content: DEFAULT_OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: PROJECTS_URL
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "خانه",
        path: "/"
      }, {
        name: "پروژه‌ها",
        path: "/projects"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./apps.index-B9t7Gmk0.mjs");
const APPS_URL = `${SITE_URL}/apps`;
const Route$4 = createFileRoute("/apps/")({
  validateSearch: (s) => ({
    domain: typeof s.domain === "string" ? s.domain : void 0
  }),
  head: () => ({
    meta: [{
      title: "ساخت اپلیکیشن هوش مصنوعی (AI App) | ATiLLAi"
    }, {
      name: "description",
      content: "ساخت اپلیکیشن موبایل هوشمند با LLM، Computer Vision و توصیه‌گر — پزشکی، حقوقی، آموزشی، تجاری و گردشگری با امکان خرید آنی نسخه آماده."
    }, {
      name: "keywords",
      content: "ساخت اپلیکیشن AI, اپ هوشمند, LLM فارسی, اپ پزشکی, ATiLLAi"
    }, {
      property: "og:title",
      content: "ساخت اپلیکیشن AI | ATiLLAi"
    }, {
      property: "og:description",
      content: "اپلیکیشن‌های موبایل هوشمند با AI، ML و LLM."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: APPS_URL
    }, {
      property: "og:image",
      content: DEFAULT_OG_IMAGE
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "ساخت اپلیکیشن AI | ATiLLAi"
    }, {
      name: "twitter:description",
      content: "اپلیکیشن‌های موبایل هوشمند با AI، ML و LLM."
    }, {
      name: "twitter:image",
      content: DEFAULT_OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: APPS_URL
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "خانه",
        path: "/"
      }, {
        name: "اپلیکیشن‌ها",
        path: "/apps"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const SERVICE_ARTICLES = {
  "deep-learning": {
    trends: [
      "ظهور Vision Mamba به‌جای ViT با هزینه محاسباتی ۵ برابر کمتر",
      "Diffusion Transformers جایگزین UNet در مدل‌های تولید تصویر",
      "Test-time Training و Self-Improving Models روی Edge Devices",
      "Mixture-of-Experts (MoE) استاندارد جدید مدل‌های ۱۰۰B+"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Vision", title: "مقایسه عملی ViT، Swin و Mamba روی دیتاست پزشکی فارسی", summary: "بنچ‌مارک سه معماری روی ۵۰ هزار تصویر MRI با تمرکز بر دقت و سرعت Inference روی GPU خانگی." },
      { date: "فروردین ۱۴۰۴", tag: "LLM", title: "Fine-tune مدل LLaMA 3.2 با QLoRA روی یک کارت RTX 4090", summary: "آموزش گام‌به‌گام Fine-tune مدل ۷۰B با تکنیک‌های Quantization و LoRA با حداقل سخت‌افزار." },
      { date: "اسفند ۱۴۰۳", tag: "Optimization", title: "Knowledge Distillation برای استقرار مدل عمیق روی موبایل", summary: "کوچک‌سازی مدل از ۲۰۰M به ۱۰M پارامتر بدون از دست دادن دقت قابل توجه." }
    ],
    faq: [
      { q: "حداقل سخت‌افزار برای پروژه Deep Learning چقدر است؟", a: "برای مدل‌های متوسط RTX 3060 با ۱۲GB VRAM کافی است. برای LLM و مدل‌های بزرگ سرور A100 یا H100 پیشنهاد می‌شود — که در صورت نیاز ما زیرساخت تأمین می‌کنیم." },
      { q: "آیا تفسیرپذیری مدل تضمین می‌شود؟", a: "بله، تمام مدل‌های ما با Grad-CAM، SHAP یا LIME تفسیر می‌شوند و گزارش بصری ارائه می‌شود." }
    ]
  },
  "machine-learning": {
    trends: [
      "AutoML و H2O جایگزین Pipeline دستی در ۷۰٪ پروژه‌های صنعتی",
      "Causal ML برای فهم علت معلولی بجای صرف همبستگی",
      "Feature Store متمرکز با Feast استاندارد جدید سازمانی",
      "Explainable Boosting Machines (EBM) جایگزین Black-box"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "AutoML", title: "مقایسه عملی Optuna، Ray Tune و AutoGluon", summary: "بنچ‌مارک سه ابزار AutoML روی ۱۰ دیتاست واقعی صنعتی." },
      { date: "فروردین ۱۴۰۴", tag: "MLOps", title: "Feature Store: راهکار حرفه‌ای مدیریت Feature در سازمان", summary: "معماری و پیاده‌سازی Feature Store با Feast و Redis برای تیم‌های Data Science." },
      { date: "اسفند ۱۴۰۳", tag: "Causal", title: "چرا باید از Causal Inference در پروژه ML استفاده کنیم", summary: "تفاوت Correlation و Causation و معرفی DoWhy و EconML." }
    ],
    faq: [
      { q: "آیا روی داده‌های کوچک هم می‌توان مدل ML خوب ساخت؟", a: "بله، با تکنیک‌های Few-shot Learning، Data Augmentation و Transfer Learning حتی با چند صد نمونه نتیجه قابل قبول می‌گیریم." },
      { q: "تفاوت AutoML با مدل دستی چیست؟", a: "AutoML سرعت بالا و Baseline قوی می‌دهد، اما برای دقت نهایی بهینه نیاز به تخصص دستی است که ما ترکیب هر دو را ارائه می‌دهیم." }
    ]
  },
  "statistical-analysis": {
    trends: [
      "آمار بیزی با Stan و PyMC جایگزین Frequentist در پزشکی",
      "Bayesian Networks در علوم اجتماعی و رفتاری",
      "Multilevel Models (HLM) استاندارد طلایی پایان‌نامه‌های جدید",
      "Power Analysis اجباری قبل از شروع پژوهش"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "SEM", title: "PLS-SEM یا CB-SEM؟ راهنمای انتخاب در پایان‌نامه", summary: "تفاوت روش‌های مدل‌سازی معادلات ساختاری و مثال عملی با SmartPLS." },
      { date: "فروردین ۱۴۰۴", tag: "Bayesian", title: "آمار بیزی برای پایان‌نامه ارشد در ۳ ساعت", summary: "آموزش سریع PyMC با مثال‌های واقعی پایان‌نامه." },
      { date: "اسفند ۱۴۰۳", tag: "Meta-Analysis", title: "روش‌شناسی متاآنالیز سیستماتیک با PRISMA 2024", summary: "گایدلاین به‌روز PRISMA و ابزار CMA برای متاآنالیز پزشکی." }
    ],
    faq: [
      { q: "چه آزمونی برای فرضیه من مناسب است؟", a: "بستگی به نوع متغیر، توزیع و طرح پژوهش دارد. در جلسه مشاوره رایگان ابتدا متغیرها را بررسی و آزمون مناسب پیشنهاد می‌دهیم." },
      { q: "آیا گزارش به سبک APA تحویل می‌شود؟", a: "بله، فصل ۴ کامل با جداول APA-7 و تفسیر فارسی + خروجی نرم‌افزار تحویل می‌شود." }
    ]
  },
  "data-science": {
    trends: [
      "Lakehouse با Iceberg و Delta جایگزین Data Warehouse سنتی",
      "dbt + Airflow استاندارد جدید Pipeline سازمانی",
      "Streaming-first Architecture با Kafka و Flink",
      "Self-service BI با Apache Superset جایگزین Tableau گران‌قیمت"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Architecture", title: "Lakehouse با Apache Iceberg: آینده انبار داده", summary: "چرا Iceberg در حال جایگزینی Snowflake در شرکت‌های بزرگ است." },
      { date: "فروردین ۱۴۰۴", tag: "dbt", title: "dbt برای تیم‌های Data Engineering فارسی‌زبان", summary: "راه‌اندازی dbt-core، تست و مستندسازی Pipeline داده." },
      { date: "اسفند ۱۴۰۳", tag: "BI", title: "ساخت داشبورد مدیریتی Real-time با Superset و Kafka", summary: "از منبع داده تا داشبورد در یک سشن کارگاهی." }
    ],
    faq: [
      { q: "حجم داده ما کم است، آیا نیاز به Big Data داریم؟", a: "خیر — تا سطح ۱۰۰GB با PostgreSQL و Pandas راحت می‌توان کار کرد. ما بر اساس حجم واقعی شما معماری بهینه پیشنهاد می‌دهیم." },
      { q: "آیا مهاجرت از Excel به Data Warehouse انجام می‌دهید؟", a: "بله، یکی از خدمات پرتقاضای ما طراحی DWH و مهاجرت از Excel/Access برای کسب‌وکارهای متوسط است." }
    ]
  },
  "time-series": {
    trends: [
      "TimesFM و Chronos مدل‌های Foundation برای سری زمانی",
      "Temporal Fusion Transformer استاندارد جدید پیش‌بینی",
      "Probabilistic Forecasting با Quantile Loss",
      "Hierarchical Reconciliation برای پیش‌بینی چند سطحی"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Foundation Models", title: "TimesFM گوگل: انقلاب Zero-shot در پیش‌بینی سری زمانی", summary: "بدون آموزش روی داده خود، با دقت قابل قبول پیش‌بینی کنید." },
      { date: "فروردین ۱۴۰۴", tag: "Finance", title: "پیش‌بینی قیمت طلا با Prophet و رویدادهای ژئوپلیتیک", summary: "ترکیب مدل آماری با Feature خبری برای دقت بالاتر." },
      { date: "اسفند ۱۴۰۳", tag: "Energy", title: "پیش‌بینی مصرف برق با LSTM چندمتغیره", summary: "پروژه واقعی شرکت توزیع برق آذربایجان شرقی." }
    ],
    faq: [
      { q: "افق پیش‌بینی شما تا چند روز است؟", a: "بستگی به سری دارد. برای فروش روزانه تا ۹۰ روز و برای مالی روزانه ۵-۲۰ روز با اطمینان بالا." },
      { q: "آیا عدم قطعیت پیش‌بینی محاسبه می‌شود؟", a: "بله، با Quantile Regression یا Bayesian Forecasting بازه اطمینان P10، P50، P90 ارائه می‌شود." }
    ]
  },
  "thesis-implementation": {
    trends: [
      "تأکید کمیته‌ها روی Reproducibility و Open Source",
      "استفاده از Streamlit برای دموی پایان‌نامه",
      "اجبار Comparison با ۳ روش State-of-the-Art اخیر",
      "Code Availability شرط ضروری در ژورنال Q1"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Reproducibility", title: "چگونه پایان‌نامه‌ای Reproducible بنویسیم", summary: "از Git و Docker تا انتشار در Zenodo برای DOI رسمی." },
      { date: "فروردین ۱۴۰۴", tag: "Demo", title: "ساخت دموی تعاملی پایان‌نامه با Streamlit در ۱ ساعت", summary: "افزایش کیفیت دفاع با دموی Live از مدل." },
      { date: "اسفند ۱۴۰۳", tag: "Defense", title: "۱۰ سؤال پرتکرار جلسه دفاع و پاسخ حرفه‌ای", summary: "آماده‌سازی روانی و فنی برای جلسه دفاع." }
    ],
    faq: [
      { q: "زمان اجرای پایان‌نامه چقدر است؟", a: "ارشد معمولاً ۲-۳ ماه، دکتری ۴-۸ ماه — بسته به پیچیدگی موضوع." },
      { q: "آیا تضمین کیفیت می‌دهید؟", a: "بله، تا قبولی نهایی پایان‌نامه پشتیبانی می‌کنیم و در صورت نیاز اصلاحات رایگان انجام می‌شود." }
    ]
  },
  "scientific-writing": {
    trends: [
      "افزایش ۳ برابری زمان ریویو در ژورنال‌های Q1",
      "Open Access اجباری در بسیاری گرنت‌های اروپایی",
      "AI Detector حساسیت بالا — نگارش انسانی ضروری",
      "Preregistration و Registered Reports رشد سریع"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Journal Selection", title: "چطور ژورنال مناسب برای مقاله انتخاب کنیم؟", summary: "ابزار JournalFinder، JCR و معیارهای انتخاب IF و Scope." },
      { date: "فروردین ۱۴۰۴", tag: "Editing", title: "اشتباهات گرامری پرتکرار نویسندگان غیرانگلیسی‌زبان", summary: "۲۰ اشتباه که باعث Reject فوری می‌شود." },
      { date: "اسفند ۱۴۰۳", tag: "Response", title: "نوشتن Response to Reviewer حرفه‌ای", summary: "تکنیک‌های دیپلماتیک پاسخ به Reviewer سختگیر." }
    ],
    faq: [
      { q: "زمان پذیرش مقاله Q1 چقدر است؟", a: "معمولاً ۶ تا ۱۲ ماه از سابمیت تا Accept در ژورنال‌های معتبر." },
      { q: "آیا گواهی ادیت نیتیو می‌دهید؟", a: "بله، گواهی رسمی ادیت نیتیو با امضای ویراستار ارائه می‌شود." }
    ]
  },
  "ai-apps": {
    trends: [
      "On-device LLM با Phi-3 و Gemma 2B روی موبایل",
      "Flutter 3.22 با Impeller جایگزین Skia",
      "React Native New Architecture استاندارد جدید",
      "WebAssembly برای اجرای مدل AI در PWA"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "On-Device", title: "اجرای LLM فارسی روی موبایل با MLC-LLM", summary: "بدون اینترنت، با حفظ حریم خصوصی کامل." },
      { date: "فروردین ۱۴۰۴", tag: "Flutter", title: "ادغام TensorFlow Lite در Flutter به ساده‌ترین روش", summary: "از آموزش تا استقرار در Google Play." },
      { date: "اسفند ۱۴۰۳", tag: "UX", title: "اصول طراحی UX برای اپ‌های AI", summary: "چگونه عدم قطعیت مدل را به کاربر نشان دهیم." }
    ],
    faq: [
      { q: "هزینه ساخت اپ AI چقدر است؟", a: "بسته به پیچیدگی از ۵۰ تا ۵۰۰ میلیون تومان. در جلسه مشاوره رایگان برآورد دقیق ارائه می‌دهیم." },
      { q: "زمان تحویل اپ چقدر است؟", a: "MVP در ۴-۶ هفته، نسخه کامل در ۳-۶ ماه." }
    ]
  },
  "smart-website": {
    trends: [
      "Next.js 15 با React Server Components",
      "ادغام چت‌بات LLM در ۸۰٪ وبسایت‌های جدید",
      "Edge Computing با Cloudflare Workers و Vercel Edge",
      "Astro و Qwik جایگزین SPA سنگین"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "SEO", title: "SEO تخصصی برای وبسایت‌های فارسی‌زبان در ۱۴۰۴", summary: "تکنیک‌های جدید Google AI Overview و Schema." },
      { date: "فروردین ۱۴۰۴", tag: "AI Chat", title: "افزودن چت‌بات RAG به وبسایت در ۱ روز", summary: "با LangChain و Pinecone." },
      { date: "اسفند ۱۴۰۳", tag: "Performance", title: "بهینه‌سازی Core Web Vitals تا نمره ۹۹", summary: "از Image Optimization تا CDN." }
    ],
    faq: [
      { q: "آیا وبسایت Responsive و RTL تحویل می‌شود؟", a: "بله، تمام وبسایت‌های ما کاملاً RTL و سازگار با موبایل و تبلت هستند." },
      { q: "هاست و دامنه شامل پکیج است؟", a: "بله، ۱ سال هاست ابری و دامنه .ir/.com رایگان." }
    ]
  },
  "mlops": {
    trends: [
      "Kubernetes-native ML با KubeFlow 1.9",
      "Vector Database استاندارد جدید برای RAG",
      "FinOps for ML: کنترل هزینه GPU در ابر",
      "Continuous Training (CT) جایگزین Periodic Retraining"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Serving", title: "vLLM یا TGI؟ مقایسه عملی برای استقرار LLM", summary: "بنچ‌مارک throughput و latency در workload واقعی." },
      { date: "فروردین ۱۴۰۴", tag: "Monitoring", title: "Model Drift Detection با Evidently AI", summary: "تشخیص افت کیفیت مدل قبل از فاجعه." },
      { date: "اسفند ۱۴۰۳", tag: "Cost", title: "کاهش ۶۰٪ هزینه GPU با Spot Instance و Batch Inference", summary: "استراتژی‌های FinOps برای تیم ML." }
    ],
    faq: [
      { q: "روی چه ابرهایی کار می‌کنید؟", a: "AWS، GCP، Azure و سرورهای On-Prem ایرانی (آروان، ابرآسیا، توربو)." },
      { q: "SLA چقدر تضمین می‌کنید؟", a: "۹۹.۹٪ آپتایم با Auto-scaling و Multi-zone Deployment." }
    ]
  },
  "training": {
    trends: [
      "تقاضای کارگاه LLM و RAG در شرکت‌ها افزایش ۴۰۰٪",
      "آموزش ترکیبی آنلاین + پروژه عملی استاندارد جدید",
      "Microlearning و دوره‌های ۲-۴ ساعته جای دوره‌های طولانی",
      "گواهی Skill-based بجای Certificate سنتی"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "LLM", title: "دوره عملی Fine-tune LLM در ۸ ساعت", summary: "از Zero تا استقرار مدل اختصاصی شرکت." },
      { date: "فروردین ۱۴۰۴", tag: "Python", title: "Python برای Data Science: مسیر ۳ ماهه", summary: "نقشه راه آموزشی استاندارد بازار کار." },
      { date: "اسفند ۱۴۰۳", tag: "Career", title: "چطور رزومه ML Engineer قوی بنویسیم", summary: "نکات کاربردی برای ورود به بازار کار." }
    ],
    faq: [
      { q: "دوره حضوری برگزار می‌کنید؟", a: "بله، در تبریز حضوری و در سایر شهرها آنلاین Live." },
      { q: "آیا گواهی معتبر است؟", a: "گواهی ATiLLAi با QR Code قابل اعتبارسنجی آنلاین صادر می‌شود." }
    ]
  },
  "proposal-defense": {
    trends: [
      "تأکید روی Novelty و گپ پژوهشی واضح",
      "افزایش پروپوزال‌های Interdisciplinary",
      "ضرورت Citation از منابع ۲ سال اخیر",
      "Visual Abstract جزو الزامات جدید"
    ],
    articles: [
      { date: "اردیبهشت ۱۴۰۴", tag: "Topics", title: "۲۰ موضوع داغ پایان‌نامه AI در ۱۴۰۴", summary: "موضوعاتی با گپ پژوهشی و امکان دفاع موفق." },
      { date: "فروردین ۱۴۰۴", tag: "Writing", title: "ساختار استاندارد پروپوزال دکتری", summary: "از Statement of Problem تا Timeline." },
      { date: "اسفند ۱۴۰۳", tag: "Defense", title: "زبان بدن و فن بیان در جلسه دفاع", summary: "تکنیک‌های اعتمادبه‌نفس در ۲۰ دقیقه دفاع." }
    ],
    faq: [
      { q: "چطور موضوع نوآور پیدا کنیم؟", a: "از Literature Review اخیر، شناسایی Limitation مقالات و ترکیب با حوزه‌های مجاور." },
      { q: "آیا کمک به اخذ گرنت می‌کنید؟", a: "بله، نگارش پروپوزال گرنت داخلی و بین‌المللی نیز جزو خدمات ماست." }
    ]
  }
};
const getServiceExtras = (slug) => SERVICE_ARTICLES[slug];
const $$splitComponentImporter$3 = () => import("./services._slug-CITxtaQI.mjs");
const $$splitErrorComponentImporter$2 = () => import("./services._slug-zlgglx5H.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./services._slug-RJqTZvdP.mjs");
const Route$3 = createFileRoute("/services/$slug")({
  loader: ({
    params
  }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return {
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    const service = loaderData ? getServiceBySlug(loaderData.slug) : null;
    if (!service) return {
      meta: [{
        title: "خدمت | ATiLLAi"
      }]
    };
    const url2 = `${SITE_URL}/services/${service.slug}`;
    const extras = getServiceExtras(service.slug);
    const faqs = extras?.faq ?? [];
    return {
      meta: [{
        title: `${service.title} | ATiLLAi`
      }, {
        name: "description",
        content: service.desc
      }, {
        name: "keywords",
        content: `${service.title}, ATiLLAi, هوش مصنوعی, یادگیری ماشین, مشاوره پروژه`
      }, {
        property: "og:title",
        content: `${service.title} | ATiLLAi`
      }, {
        property: "og:description",
        content: service.tagline ?? service.desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: url2
      }, {
        property: "og:image",
        content: DEFAULT_OG_IMAGE
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: `${service.title} | ATiLLAi`
      }, {
        name: "twitter:description",
        content: service.tagline ?? service.desc
      }, {
        name: "twitter:image",
        content: DEFAULT_OG_IMAGE
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.desc,
          url: url2,
          image: DEFAULT_OG_IMAGE,
          provider: {
            "@type": "Organization",
            name: "ATiLLAi",
            url: SITE_URL
          },
          areaServed: "IR",
          serviceType: service.title
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{
          name: "خانه",
          path: "/"
        }, {
          name: "خدمات",
          path: "/services"
        }, {
          name: service.title,
          path: `/services/${service.slug}`
        }]))
      }, ...faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs))
      }] : []]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./projects._slug-DGdQ-F79.mjs");
const $$splitErrorComponentImporter$1 = () => import("./projects._slug-hTNwCq-5.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./projects._slug-CM7-B4bP.mjs");
const Route$2 = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return {
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    const project = loaderData ? getProjectBySlug(loaderData.slug) : null;
    if (!project) return {
      meta: [{
        title: "پروژه | ATiLLAi"
      }]
    };
    const url2 = `${SITE_URL}/projects/${project.slug}`;
    const image = DEFAULT_OG_IMAGE;
    return {
      meta: [{
        title: `${project.title.slice(0, 50)} | ATiLLAi`
      }, {
        name: "description",
        content: project.summary
      }, {
        property: "og:title",
        content: `${project.title} | ATiLLAi`
      }, {
        property: "og:description",
        content: project.summary
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: url2
      }, {
        property: "og:image",
        content: image
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: project.title
      }, {
        name: "twitter:description",
        content: project.summary
      }, {
        name: "twitter:image",
        content: image
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: url2,
          image,
          author: {
            "@type": "Organization",
            name: "ATiLLAi",
            url: SITE_URL
          },
          inLanguage: "fa-IR"
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{
          name: "خانه",
          path: "/"
        }, {
          name: "پروژه‌ها",
          path: "/projects"
        }, {
          name: project.title,
          path: `/projects/${project.slug}`
        }]))
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./blog.machine-learning-project-ideas-DNZdmZ1q.mjs");
const CANONICAL = "https://atil-ai-hub.lovable.app/blog/machine-learning-project-ideas";
const BLOG_FAQ = [{
  q: "بهترین ایده پروژه یادگیری ماشین برای پایان‌نامه چیست؟",
  a: "ایده‌ای که سه ویژگی داشته باشد: دیتاست در دسترس، یک بازخورد قابل اندازه‌گیری (Metric) و یک کاربرد واقعی. ایده‌های پزشکی مانند تشخیص رتینوپاتی دیابتی و NLP فارسی مانند خلاصه‌سازی متن ایده‌های قوی هستند."
}, {
  q: "چه دیتاست‌هایی برای شروع مناسب‌اند؟",
  a: "Kaggle، Hugging Face Datasets، UCI ML Repository، PhysioNet برای داده پزشکی و OpenStreetMap برای داده‌های جغرافیایی."
}, {
  q: "حداقل سخت‌افزار لازم چیست؟",
  a: "برای اکثر پروژه‌های تصویری متوسط، یک GPU با ۸–۱۲ گیگ VRAM (مثل RTX 3060) کافی است. برای LLM و مدل‌های بزرگ می‌توانید از Colab Pro، Kaggle Kernels یا سرورهای A100 اجاره‌ای استفاده کنید."
}, {
  q: "چطور پروژه‌ام را به Production برسانم؟",
  a: "از FastAPI یا BentoML برای سرویس مدل، Docker برای کانتینرسازی، و Cloud Run / Render / Railway برای استقرار سریع استفاده کنید. تیم ATiLLAi خدمات MLOps کامل ارائه می‌دهد."
}];
const BLOG_HOWTO = [{
  name: "انتخاب موضوع",
  text: "موضوعی انتخاب کنید که داده، متریک و کاربرد واقعی داشته باشد."
}, {
  name: "تهیه دیتاست",
  text: "از Kaggle / Hugging Face Datasets دیتاست مناسب را دانلود و پاک‌سازی کنید."
}, {
  name: "Baseline ساده",
  text: "ابتدا یک مدل ساده (Logistic Regression / Random Forest) به‌عنوان baseline اجرا کنید."
}, {
  name: "مدل پیشرفته",
  text: "سپس به مدل عمیق (CNN / Transformer / LSTM) ارتقا دهید و با baseline مقایسه کنید."
}, {
  name: "ارزیابی و تفسیر",
  text: "متریک مناسب (F1، AUC، RMSE …) را گزارش کنید و با Grad-CAM/SHAP تفسیر دهید."
}, {
  name: "استقرار و ارائه",
  text: "مدل را با FastAPI سرو کنید و در یک داشبورد Streamlit/Gradio نمایش دهید."
}];
const Route$1 = createFileRoute("/blog/machine-learning-project-ideas")({
  head: () => ({
    meta: [{
      title: "۳۰+ ایده پروژه یادگیری ماشین | ATiLLAi"
    }, {
      name: "description",
      content: "فهرست ایده‌های حرفه‌ای پروژه یادگیری ماشین و دیپ‌لرنینگ در حوزه پزشکی، مالی، حقوقی، صنعتی و NLP فارسی — مناسب پایان‌نامه و پورتفولیو."
    }, {
      name: "keywords",
      content: "ایده پروژه یادگیری ماشین, پایان‌نامه هوش مصنوعی, پروژه دیپ لرنینگ, ML project ideas, ATiLLAi"
    }, {
      property: "og:title",
      content: "ایده‌های پروژه یادگیری ماشین | ATiLLAi"
    }, {
      property: "og:description",
      content: "ایده‌های پورتفولیومحور ML/DL برای دانشجویان سال آخر و پژوهشگران."
    }, {
      property: "og:url",
      content: CANONICAL
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:image",
      content: DEFAULT_OG_IMAGE
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "ایده‌های پروژه یادگیری ماشین | ATiLLAi"
    }, {
      name: "twitter:description",
      content: "ایده‌های پورتفولیومحور ML/DL برای دانشجویان سال آخر و پژوهشگران."
    }, {
      name: "twitter:image",
      content: DEFAULT_OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: CANONICAL
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "۳۰+ ایده پروژه یادگیری ماشین برای دانشجویان و پژوهشگران",
        description: "ایده‌های پورتفولیومحور ML/DL برای دانشجویان سال آخر و پژوهشگران.",
        image: DEFAULT_OG_IMAGE,
        author: {
          "@type": "Organization",
          name: "ATiLLAi"
        },
        publisher: {
          "@type": "Organization",
          name: "ATiLLAi",
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_OG_IMAGE
          }
        },
        mainEntityOfPage: CANONICAL,
        inLanguage: "fa-IR"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd(BLOG_FAQ))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(howToJsonLd({
        name: "چطور یک پروژه یادگیری ماشین حرفه‌ای انجام دهیم؟",
        description: "گام‌های انتخاب موضوع تا استقرار یک پروژه ML برای پایان‌نامه یا پورتفولیو.",
        totalTime: "P30D",
        steps: BLOG_HOWTO
      }))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "خانه",
        path: "/"
      }, {
        name: "وبلاگ",
        path: "/blog/machine-learning-project-ideas"
      }, {
        name: "ایده‌های پروژه ML",
        path: "/blog/machine-learning-project-ideas"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./apps._slug-deNF0dSq.mjs");
const $$splitErrorComponentImporter = () => import("./apps._slug-hTNwCq-5.mjs");
const $$splitNotFoundComponentImporter = () => import("./apps._slug-B2-bcKhc.mjs");
const Route = createFileRoute("/apps/$slug")({
  loader: ({
    params
  }) => {
    const app = getAppBySlug(params.slug);
    if (!app) throw notFound();
    return {
      slug: params.slug
    };
  },
  head: ({
    loaderData
  }) => {
    const app = loaderData ? getAppBySlug(loaderData.slug) : null;
    if (!app) return {
      meta: [{
        title: "اپلیکیشن | ATiLLAi"
      }]
    };
    const url2 = `${SITE_URL}/apps/${app.slug}`;
    const image = DEFAULT_OG_IMAGE;
    return {
      meta: [{
        title: `${app.title.slice(0, 50)} | ATiLLAi`
      }, {
        name: "description",
        content: app.short
      }, {
        property: "og:title",
        content: `${app.title} | ATiLLAi`
      }, {
        property: "og:description",
        content: app.short
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: url2
      }, {
        property: "og:image",
        content: image
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: app.title
      }, {
        name: "twitter:description",
        content: app.short
      }, {
        name: "twitter:image",
        content: image
      }],
      links: [{
        rel: "canonical",
        href: url2
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: app.title,
          description: app.short,
          url: url2,
          image,
          applicationCategory: "MobileApplication",
          operatingSystem: "Android, iOS",
          offers: {
            "@type": "Offer",
            priceCurrency: "IRR",
            price: "0",
            availability: "https://schema.org/InStock",
            url: url2
          },
          publisher: {
            "@type": "Organization",
            name: "ATiLLAi",
            url: SITE_URL
          }
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{
          name: "خانه",
          path: "/"
        }, {
          name: "اپلیکیشن‌ها",
          path: "/apps"
        }, {
          name: app.title,
          path: `/apps/${app.slug}`
        }]))
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$e.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$f
});
const ServicesRoute = Route$d.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$f
});
const ProjectsRoute = Route$c.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$f
});
const KidsTestRoute = Route$b.update({
  id: "/kids-test",
  path: "/kids-test",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$a.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const AppsRoute = Route$9.update({
  id: "/apps",
  path: "/apps",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ServicesIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ProjectsIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjectsRoute
});
const AppsIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppsRoute
});
const ServicesSlugRoute = Route$3.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ServicesRoute
});
const ProjectsSlugRoute = Route$2.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjectsRoute
});
const BlogMachineLearningProjectIdeasRoute = Route$1.update({
  id: "/blog/machine-learning-project-ideas",
  path: "/blog/machine-learning-project-ideas",
  getParentRoute: () => Route$f
});
const AppsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => AppsRoute
});
const AppsRouteChildren = {
  AppsSlugRoute,
  AppsIndexRoute
};
const AppsRouteWithChildren = AppsRoute._addFileChildren(AppsRouteChildren);
const ProjectsRouteChildren = {
  ProjectsSlugRoute,
  ProjectsIndexRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const ServicesRouteChildren = {
  ServicesSlugRoute,
  ServicesIndexRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AppsRoute: AppsRouteWithChildren,
  ContactRoute,
  KidsTestRoute,
  ProjectsRoute: ProjectsRouteWithChildren,
  ServicesRoute: ServicesRouteWithChildren,
  SitemapDotxmlRoute,
  BlogMachineLearningProjectIdeasRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ATILLAI_ORBIT_LOGO as A,
  BackButton as B,
  PROJECTS as P,
  Route$5 as R,
  SERVICE_DETAILS as S,
  Route$4 as a,
  APPS as b,
  Route$3 as c,
  getServiceBySlug as d,
  getServiceExtras as e,
  Route$2 as f,
  getLuxuryGalleryImage as g,
  getProjectBySlug as h,
  Route as i,
  getAppBySlug as j,
  getGalleryOverride as k,
  getGalleryMultiOverride as l,
  getGalleryAltOverride as m,
  router as r,
  useI18n as u
};
