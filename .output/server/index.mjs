globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
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
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"4d-23Bf4CpKHCRXSEyuS2pgzB/OPlQ"',
    "mtime": "2026-06-13T18:44:17.357Z",
    "size": 77,
    "path": "../public/robots.txt"
  },
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"35f-B9RN3wd0604MGDLA18arazOcSWY"',
    "mtime": "2026-06-13T18:44:17.357Z",
    "size": 863,
    "path": "../public/llms.txt"
  },
  "/assets/apps-jGPZOFtv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-/e8Ba6tKhDWkaLDUUrwULOMdMyg"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 103,
    "path": "../public/assets/apps-jGPZOFtv.js"
  },
  "/assets/apps.index-CWSyQHMm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3db3-lAFWCkY24dQvu19NMvsxr7WIq1I"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 15795,
    "path": "../public/assets/apps.index-CWSyQHMm.js"
  },
  "/assets/apps._slug-COLcsrHw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"156-awilHKWYpFKsETwUeQbVCGU2v8w"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 342,
    "path": "../public/assets/apps._slug-COLcsrHw.js"
  },
  "/assets/apps._slug-DT_-toul.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16c-grOp/ientW3lxTYjyxH27v8fQF8"',
    "mtime": "2026-06-14T18:54:58.290Z",
    "size": 364,
    "path": "../public/assets/apps._slug-DT_-toul.js"
  },
  "/assets/apps._slug-y2Jj5Al2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"263d-vdweIwqBPf7+cCufPMhSWs82Xv8"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 9789,
    "path": "../public/assets/apps._slug-y2Jj5Al2.js"
  },
  "/assets/auto-cover-Yhl9OwdD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"100d-WJlTupTw9inorYIHNHQsQ1mNHYo"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 4109,
    "path": "../public/assets/auto-cover-Yhl9OwdD.js"
  },
  "/assets/blog.machine-learning-project-ideas-C8IoixKV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1403-K6s5DjfcLFWanUL8Sp9c104LsJA"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 5123,
    "path": "../public/assets/blog.machine-learning-project-ideas-C8IoixKV.js"
  },
  "/assets/circle-check-Bi2GPykP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Ose1X7bnVaO9+DzNe9U/SlZ/i3Q"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 174,
    "path": "../public/assets/circle-check-Bi2GPykP.js"
  },
  "/assets/domains-BkB1QIut.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d7-bRYsRYUSZuqqXoF+MDsZsXe6xqg"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 4311,
    "path": "../public/assets/domains-BkB1QIut.js"
  },
  "/assets/index-DF7DSJrw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89dd-/JSiar98ZDNI0vUOiyQh7FXZDDE"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 35293,
    "path": "../public/assets/index-DF7DSJrw.js"
  },
  "/assets/kids-test-DSdprEx7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5555-xmFMtF15vYAZBncgVPsjtUw0w14"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 21845,
    "path": "../public/assets/kids-test-DSdprEx7.js"
  },
  "/assets/layers-CkA2MZ7Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a6-cuRSlF7BffdedIHnahbJgIYL9RA"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 422,
    "path": "../public/assets/layers-CkA2MZ7Y.js"
  },
  "/assets/package-DHN-8clN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"175-v9Fe5ckEgwoMA7gZ1pD5ZCtxmEs"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 373,
    "path": "../public/assets/package-DHN-8clN.js"
  },
  "/assets/projects-CJwvXeN9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-EfRk2NoaBAHNmfzPOgoLsgn1Goc"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 103,
    "path": "../public/assets/projects-CJwvXeN9.js"
  },
  "/assets/projects.index-CtJ_oYoj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ac8-o93kga4cEhARWxuhTJCDLRPxbbg"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 6856,
    "path": "../public/assets/projects.index-CtJ_oYoj.js"
  },
  "/assets/index-TJApp1JS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a7c7f-SIbq13QDNp541m037RGAOGdkrx8"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 687231,
    "path": "../public/assets/index-TJApp1JS.js"
  },
  "/assets/projects._slug-CkWpdVmL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16a-aeJEijeX53kWlJzKy3gNTYpxUww"',
    "mtime": "2026-06-14T18:54:58.287Z",
    "size": 362,
    "path": "../public/assets/projects._slug-CkWpdVmL.js"
  },
  "/assets/projects._slug-D0LFjMOw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2864-fOsS+rAN831VCCymael2nYh08nI"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 10340,
    "path": "../public/assets/projects._slug-D0LFjMOw.js"
  },
  "/assets/projects._slug-DpUcHcAk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16c-grOp/ientW3lxTYjyxH27v8fQF8"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 364,
    "path": "../public/assets/projects._slug-DpUcHcAk.js"
  },
  "/assets/screen-kinds-SbdJ9Elm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e5ae-3cKvBtduy+HDkGPijjL/EGfotuo"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 124334,
    "path": "../public/assets/screen-kinds-SbdJ9Elm.js"
  },
  "/assets/services-BAcrzOPu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-EdH6/nIox2ove3Ps11rpqkpEIAE"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 103,
    "path": "../public/assets/services-BAcrzOPu.js"
  },
  "/assets/services._slug-C89Vrp99.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-v/CZs7QaZ1xt6nsp9ac+2OIb34o"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 386,
    "path": "../public/assets/services._slug-C89Vrp99.js"
  },
  "/assets/services._slug-CkW7ITr5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d-3cbgojs+4PzucyiI+aE2DPM6mm8"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 349,
    "path": "../public/assets/services._slug-CkW7ITr5.js"
  },
  "/assets/services._slug-DN1Nsbce.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2985-cn8yMRX8+97jK9GDzE3g4/1Kklw"',
    "mtime": "2026-06-14T18:54:58.244Z",
    "size": 10629,
    "path": "../public/assets/services._slug-DN1Nsbce.js"
  },
  "/assets/styles-5Nm7gEgT.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2b5c6-zqCdXjtyntbjvuYmBo+9RheVnWo"',
    "mtime": "2026-06-14T18:54:58.229Z",
    "size": 177606,
    "path": "../public/assets/styles-5Nm7gEgT.css"
  },
  "/assets/telegram-B-OLi1cR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d2-GnkZ5gaCKVoji1vLBvnDDXUzWKU"',
    "mtime": "2026-06-14T18:54:58.260Z",
    "size": 210,
    "path": "../public/assets/telegram-B-OLi1cR.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
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
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _F8E9o9 = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
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
const globalMiddleware = [
  toEventHandler(_F8E9o9)
].filter(Boolean);
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
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
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
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
let _fetch = nitroApp.fetch;
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: _fetch,
  bun: { websocket: void 0 },
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const bun = {};
export {
  bun as default
};
