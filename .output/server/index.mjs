globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"35f-B9RN3wd0604MGDLA18arazOcSWY"',
    "mtime": "2026-06-13T18:44:17.357Z",
    "size": 863,
    "path": "../public/llms.txt"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"4d-23Bf4CpKHCRXSEyuS2pgzB/OPlQ"',
    "mtime": "2026-06-13T18:44:17.357Z",
    "size": 77,
    "path": "../public/robots.txt"
  },
  "/assets/apps-K0lDuK-8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-CnCQfjFK9RxrnoRXXCnEPxxrTSk"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 103,
    "path": "../public/assets/apps-K0lDuK-8.js"
  },
  "/assets/apps.index-CcWlnMZL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3db3-4xZ5mE+2qx728mtRA53Jqe1xtSo"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 15795,
    "path": "../public/assets/apps.index-CcWlnMZL.js"
  },
  "/assets/apps._slug-BPDecvCK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"156-S07TEj7P9SgEzjwaWB6TyxfsdHg"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 342,
    "path": "../public/assets/apps._slug-BPDecvCK.js"
  },
  "/assets/apps._slug-D3m98XMW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"263d-QU9KX80avtAM8koEmrHJE5+deuQ"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 9789,
    "path": "../public/assets/apps._slug-D3m98XMW.js"
  },
  "/assets/apps._slug-DDtGbNwf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16c-c0w+vWH8j1bHuyZp92NL29m+K08"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 364,
    "path": "../public/assets/apps._slug-DDtGbNwf.js"
  },
  "/assets/auto-cover-CZ3DTbX4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"100d-cH8kz5SI0vMZZys7nZuS5k73fhw"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 4109,
    "path": "../public/assets/auto-cover-CZ3DTbX4.js"
  },
  "/assets/blog.machine-learning-project-ideas-Djbxdkxe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1403-6+UQihfK4avynC/9pMhHaE6ho2I"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 5123,
    "path": "../public/assets/blog.machine-learning-project-ideas-Djbxdkxe.js"
  },
  "/assets/circle-check-CI8UwOzY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-OzC+EtUtT/AHAQHb6Av27rC+Nak"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 174,
    "path": "../public/assets/circle-check-CI8UwOzY.js"
  },
  "/assets/index-Cay2Z676.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89dd-O/fOJnvgpQRBQIsblPupxjO0u4E"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 35293,
    "path": "../public/assets/index-Cay2Z676.js"
  },
  "/assets/kids-test-BHh-zFuR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5555-GIUt2fbyJAf+Ms1AcndiFsj3dMk"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 21845,
    "path": "../public/assets/kids-test-BHh-zFuR.js"
  },
  "/assets/domains-BkB1QIut.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d7-bRYsRYUSZuqqXoF+MDsZsXe6xqg"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 4311,
    "path": "../public/assets/domains-BkB1QIut.js"
  },
  "/assets/layers-B1fTuH4-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a6-l8I1MnhDrcTzzAeIz+os6vnJAG8"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 422,
    "path": "../public/assets/layers-B1fTuH4-.js"
  },
  "/assets/projects-C0jRB2A4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-8Fn2Hjo59XNFrGPzIilqsCIHRWQ"',
    "mtime": "2026-06-15T09:35:50.635Z",
    "size": 103,
    "path": "../public/assets/projects-C0jRB2A4.js"
  },
  "/assets/package-DaT4fRT8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"175-BjFleaNdVIOBoEpDORs1MFXaBWs"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 373,
    "path": "../public/assets/package-DaT4fRT8.js"
  },
  "/assets/projects.index-ksWqGMDQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ac8-0NLyYEKfw2/YndnO83piwMxL+ic"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 6856,
    "path": "../public/assets/projects.index-ksWqGMDQ.js"
  },
  "/assets/projects._slug-CONKSt8D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16a-NtWx48kU6/L8FgorVQHJw02m0CA"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 362,
    "path": "../public/assets/projects._slug-CONKSt8D.js"
  },
  "/assets/projects._slug-CVkll1vC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16c-c0w+vWH8j1bHuyZp92NL29m+K08"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 364,
    "path": "../public/assets/projects._slug-CVkll1vC.js"
  },
  "/assets/projects._slug-DYExMzJy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2864-UbQVqKfA0HIIkXqUOq+cgjY1yB4"',
    "mtime": "2026-06-15T09:35:50.638Z",
    "size": 10340,
    "path": "../public/assets/projects._slug-DYExMzJy.js"
  },
  "/assets/screen-kinds-B46F4SMA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e5ae-G0CJyFLnnW9DjHUOVqxBpDubdw4"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 124334,
    "path": "../public/assets/screen-kinds-B46F4SMA.js"
  },
  "/assets/services-Eom8suUe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-1U3DW3s5Q2U0JV2xH/jKG5SaNeY"',
    "mtime": "2026-06-15T09:35:50.635Z",
    "size": 103,
    "path": "../public/assets/services-Eom8suUe.js"
  },
  "/assets/services._slug-CwylgKqd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d-NLCuqOWIxTbuZiBury8a/YBW8to"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 349,
    "path": "../public/assets/services._slug-CwylgKqd.js"
  },
  "/assets/services._slug-Dio1tMdG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-dL2DyZULdJkVgQGK4wl9BQa7gGs"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 386,
    "path": "../public/assets/services._slug-Dio1tMdG.js"
  },
  "/assets/index-CL5mi1_d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a7c83-16sjM1s9wzUz/txHOVre0RJvkP8"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 687235,
    "path": "../public/assets/index-CL5mi1_d.js"
  },
  "/assets/services._slug-DTUAyrfk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2985-djP5xBNhHtIdKG8orCfEAbk9Tuo"',
    "mtime": "2026-06-15T09:35:50.636Z",
    "size": 10629,
    "path": "../public/assets/services._slug-DTUAyrfk.js"
  },
  "/assets/styles-5Nm7gEgT.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2b5c6-zqCdXjtyntbjvuYmBo+9RheVnWo"',
    "mtime": "2026-06-15T09:35:50.615Z",
    "size": 177606,
    "path": "../public/assets/styles-5Nm7gEgT.css"
  },
  "/assets/telegram-B-OLi1cR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d2-GnkZ5gaCKVoji1vLBvnDDXUzWKU"',
    "mtime": "2026-06-15T09:35:50.637Z",
    "size": 210,
    "path": "../public/assets/telegram-B-OLi1cR.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_WIzSgf = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_WIzSgf };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
