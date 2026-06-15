import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 pb-24 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black", children: "پروژه یافت نشد" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "mt-6 inline-block text-primary", children: "بازگشت به نمونه کارها" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
