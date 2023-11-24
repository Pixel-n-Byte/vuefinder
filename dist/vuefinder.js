import { ref as L, watch as at, inject as P, openBlock as _, createElementBlock as I, unref as k, createCommentVNode as Y, normalizeClass as ue, createElementVNode as h, createTextVNode as te, toDisplayString as E, createVNode as Ce, TransitionGroup as Oo, withCtx as G, Fragment as ne, renderList as ye, reactive as Ot, onMounted as xe, onUpdated as jo, withDirectives as Ae, vShow as Lt, withModifiers as ze, nextTick as Bt, customRef as Po, withKeys as lt, isRef as zo, vModelText as ct, normalizeStyle as as, provide as We, createBlock as q, resolveDynamicComponent as Ro, renderSlot as Qt } from "vue";
import gt from "plupload";
var ns;
const jt = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), Pt = (r, { method: e = "get", params: s = {}, json: o = !0, signal: a = null }) => {
  const n = { method: e };
  if (n.signal = a, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    n.headers = {}, jt && (n.headers["X-CSRF-Token"] = jt);
    let d = new FormData();
    for (const [p, l] of Object.entries(s))
      d.append(p, l);
    n.body = d;
  }
  return fetch(r, n).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Bo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(e, s) {
    var o = r.get(e);
    o ? o.push(s) : r.set(e, [s]);
  }, off: function(e, s) {
    var o = r.get(e);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(e, []));
  }, emit: function(e, s) {
    var o = r.get(e);
    o && o.slice().map(function(a) {
      a(s);
    }), (o = r.get("*")) && o.slice().map(function(a) {
      a(e, s);
    });
  } };
}
function Jt(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(e));
  at(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function a(p, l) {
    s.value = Object.assign({ ...s.value }, { [p]: l });
  }
  function n() {
    s.value = null;
  }
  return { getStore: (p, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(p) ? s.value[p] : l, setStore: a, clearStore: n };
}
const Pr = L("");
function Oe() {
  function r(e) {
    Pr.value = e;
  }
  return { apiUrl: Pr, setApiUrl: r };
}
const Vo = { class: "border-neutral-300 flex justify-end items-center py-1 text-sm relative" }, Ho = {
  key: 0,
  class: "flex text-center"
}, Uo = ["aria-label"], Zo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Yo = [
  Zo
], Fo = ["aria-label"], Wo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Ko = [
  Wo
], Go = ["aria-label"], Xo = ["aria-label"], qo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Qo = [
  qo
], Jo = {
  key: 1,
  class: "flex text-center"
}, ei = { class: "pl-2" }, ti = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, ri = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, si = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), oi = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ii = [
  si,
  oi
], ni = { class: "flex text-center items-center justify-end" }, ai = ["aria-label"], li = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), ci = [
  li
], ui = ["aria-label"], di = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, hi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, fi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, pi = ["aria-label"], gi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, mi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, vi = {
  name: "VFToolbar"
}, bi = /* @__PURE__ */ Object.assign(vi, {
  props: {
    data: Object,
    type: String
  },
  setup(r) {
    const e = r, s = P("emitter"), { getStore: o, setStore: a } = P("storage"), { t: n } = P("i18n"), d = L(o("viewport", "grid")), p = L([]), l = L(o("full-screen", !1)), v = L("");
    s.on("vf-search-query", ({ newQuery: D }) => {
      v.value = D;
    });
    const g = P("loadingState"), b = () => g.value, S = () => {
      l.value = !l.value, s.emit("vf-fullscreen-toggle");
    };
    return s.on("vf-nodes-selected", (D) => {
      p.value = D;
    }), s.on("vf-view-toggle", (D) => {
      a("viewport", D), d.value = D;
    }), (D, M) => (_(), I("div", Vo, [
      v.value.length ? (_(), I("div", Jo, [
        h("div", ei, [
          te(E(k(n)("Search results for")) + " ", 1),
          h("span", ti, E(v.value), 1)
        ]),
        b() ? (_(), I("svg", ri, ii)) : Y("", !0)
      ])) : (_(), I("div", Ho, [
        e.type !== "standalone" ? (_(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": k(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = ($) => k(s).emit("vf-modal-show", {
            type: "new-folder",
            items: p.value
          }))
        }, Yo, 8, Uo)) : Y("", !0),
        e.type !== "standalone" ? (_(), I("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": k(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = ($) => !p.value.length || k(s).emit("vf-modal-show", { type: "delete", items: p.value }))
        }, [
          (_(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([
              p.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ko, 2))
        ], 8, Fo)) : Y("", !0),
        h("div", {
          class: ue(`mx-1.5 absolute ${e.type == "standalone" ? "standalone-upload-button-div" : "custom-upload-button-div"}`),
          "aria-label": k(n)("Upload"),
          "data-microtip-position": "bottom",
          onClick: M[2] || (M[2] = ($) => k(s).emit("custom-modal-show", {
            type: "upload",
            items: p.value
          }))
        }, [
          h("a", {
            type: "button",
            class: ue(`${e.type == "standalone" ? "standalone-upload-button" : "custom-upload-button"}`)
          }, "Upload", 2)
        ], 10, Go),
        p.value.length == 1 && p.value[0].mime_type == "application/zip" ? (_(), I("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": k(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = ($) => !p.value.length || k(s).emit("vf-modal-show", {
            type: "unarchive",
            items: p.value
          }))
        }, [
          (_(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([
              p.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Qo, 2))
        ], 8, Xo)) : Y("", !0)
      ])),
      h("div", ni, [
        h("div", {
          class: "mx-1.5",
          "aria-label": k(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (_(), I("svg", {
            onClick: M[4] || (M[4] = ($) => k(s).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, ci))
        ], 8, ai),
        h("div", {
          class: "mx-1.5",
          "aria-label": k(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: S
        }, [
          (_(), I("svg", di, [
            l.value ? (_(), I("path", hi)) : (_(), I("path", fi))
          ]))
        ], 8, ui),
        e.type !== "standalone" ? (_(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": k(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[5] || (M[5] = ($) => v.value.length || k(s).emit("vf-view-toggle", d.value == "list" ? "grid" : "list"))
        }, [
          (_(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([
              v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            d.value == "grid" ? (_(), I("path", gi)) : Y("", !0),
            d.value == "list" ? (_(), I("path", mi)) : Y("", !0)
          ], 2))
        ], 8, pi)) : Y("", !0)
      ])
    ]));
  }
}), dr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
var yi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Si(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, e) {
  (function(s, o) {
    r.exports = o();
  })(yi, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var m, i, f, y, x = [], C = !0, V = !1;
        try {
          if (f = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (m = f.call(t)).done) && (x.push(m.value), x.length !== u); C = !0)
              ;
        } catch (W) {
          V = !0, i = W;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (V)
              throw i;
          }
        }
        return x;
      }
    }
    function o(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(i) {
          return Object.getOwnPropertyDescriptor(c, i).enumerable;
        })), t.push.apply(t, m);
      }
      return t;
    }
    function a(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(t), !0).forEach(function(m) {
          l(c, m, t[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(t, m));
        });
      }
      return c;
    }
    function n(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var t = 0; t < u.length; t++) {
        var m = u[t];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, we(m.key), m);
      }
    }
    function p(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = we(u), u in c ? Object.defineProperty(c, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = t, c;
    }
    function v(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function g(c) {
      return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, g(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, i) {
        return m.__proto__ = i, m;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function D(c, u, t) {
      return S() ? D = Reflect.construct.bind() : D = function(i, f, y) {
        var x = [null];
        x.push.apply(x, f);
        var C = Function.bind.apply(i, x), V = new C();
        return y && b(V, y.prototype), V;
      }, D.apply(null, arguments);
    }
    function M(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function $(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return $ = function(m) {
        if (m === null || !M(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, i);
        }
        function i() {
          return D(m, arguments, g(this).constructor);
        }
        return i.prototype = Object.create(m.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(i, m);
      }, $(c);
    }
    function N(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return N(c);
    }
    function O(c) {
      var u = S();
      return function() {
        var m = g(c), i;
        if (u) {
          var f = g(this).constructor;
          i = Reflect.construct(m, arguments, f);
        } else
          i = m.apply(this, arguments);
        return H(this, i);
      };
    }
    function T(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = g(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, t, m) {
        var i = T(u, t);
        if (i) {
          var f = Object.getOwnPropertyDescriptor(i, t);
          return f.get ? f.get.call(arguments.length < 3 ? u : m) : f.value;
        }
      }, B.apply(this, arguments);
    }
    function K(c, u) {
      return X(c) || s(c, u) || Q(c, u) || ve();
    }
    function w(c) {
      return j(c) || re(c) || Q(c) || Se();
    }
    function j(c) {
      if (Array.isArray(c))
        return he(c);
    }
    function X(c) {
      if (Array.isArray(c))
        return c;
    }
    function re(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function Q(c, u) {
      if (c) {
        if (typeof c == "string")
          return he(c, u);
        var t = Object.prototype.toString.call(c).slice(8, -1);
        if (t === "Object" && c.constructor && (t = c.constructor.name), t === "Map" || t === "Set")
          return Array.from(c);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return he(c, u);
      }
    }
    function he(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var t = 0, m = new Array(u); t < u; t++)
        m[t] = c[t];
      return m;
    }
    function Se() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ve() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function fe(c, u) {
      var t = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!t) {
        if (Array.isArray(c) || (t = Q(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var m = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function(C) {
              throw C;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, y = !1, x;
      return {
        s: function() {
          t = t.call(c);
        },
        n: function() {
          var C = t.next();
          return f = C.done, C;
        },
        e: function(C) {
          y = !0, x = C;
        },
        f: function() {
          try {
            !f && t.return != null && t.return();
          } finally {
            if (y)
              throw x;
          }
        }
      };
    }
    function ae(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var m = t.call(c, u || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function we(c) {
      var u = ae(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var se = function(u, t, m) {
      var i = u.x, f = u.y, y = m.x, x = m.y, C = {
        "+": {
          x: i + y,
          y: f + x
        },
        "-": {
          x: i - y,
          y: f - x
        },
        "*": {
          x: i * y,
          y: f * x
        },
        "/": {
          x: i / y,
          y: f / x
        }
      };
      return C[t];
    }, A = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, R = function(u) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: t,
        height: t
      };
    }, z = function(u) {
      return {
        x: u,
        y: u
      };
    }, de = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var m = new MutationObserver(t);
      c.forEach(function(f, y) {
        m.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return go(m, t);
      };
      return {
        observer: m,
        callback: t,
        cleanup: i
      };
    }, U = function(c) {
      var u = Ct(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, De = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ee = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, It = function(c, u) {
      var t;
      return function() {
        for (var m = arguments.length, i = new Array(m), f = 0; f < m; f++)
          i[f] = arguments[f];
        var y = function() {
          t = null, c.apply(void 0, i);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Ft = function() {
      var c, u, t, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Cr = function(c) {
      var u = function t(m) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = m[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (m.push(y), f++, t(m, f)) : m;
      };
      return u([c]);
    }, so = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var t = c.getBoundingClientRect();
      return {
        top: t.top,
        left: t.left,
        bottom: t.bottom,
        right: t.right,
        width: (c.clientWidth || t.width) * u,
        height: (c.clientHeight || t.height) * u
      };
    }, Er = function(c, u) {
      var t = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Be(c).forEach(function(m) {
        var i = u.getRect(m);
        t.top = Math.min(t.top, i.top), t.left = Math.min(t.left, i.left), t.bottom = Math.max(t.bottom, i.bottom), t.right = Math.max(t.right, i.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Ct = function(c) {
      return !c || c instanceof Document ? Ft() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Ft().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Ft().y
      };
    }, Tr = function(c) {
      var u = c.elementRect, t = c.containerRect, m = c.tolerance, i = m === void 0 ? {
        x: 0,
        y: 0
      } : m, f = [];
      return u.top - i.y < t.top && f.push("top"), u.left - i.x < t.left && f.push("left"), u.bottom + i.y > t.bottom && f.push("bottom"), u.right + i.y > t.right && f.push("right"), /** @type {DSEdges} */
      f;
    }, oo = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, io = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, m = c.pointerPos, i = {};
      return m.x > t.x - u.x ? (i.left = t.x - u.x, i.width = m.x - t.x + u.x) : (i.left = m.x, i.width = t.x - m.x - u.x), m.y > t.y - u.y ? (i.top = t.y - u.y, i.height = m.y - t.y + u.y) : (i.top = m.y, i.height = t.y - m.y - u.y), i;
    }, Lr = function(u) {
      var t = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return t;
      if (m.transform.indexOf("3d") >= 0) {
        var i = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var f, y = (f = i[1]) === null || f === void 0 ? void 0 : f.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var x = m.transform.trim().match(/matrix\((.*?)\)/);
      if (x && x.length) {
        var C, V = (C = x[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(V[4]) || 0, t.y = parseInt(V[5]) || 0;
      }
      return t;
    }, no = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Lr(u);
      var m = {
        x: 0,
        y: 0
      }, i = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var f, y = (f = i[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var x, C = (x = y[1]) === null || x === void 0 ? void 0 : x.split(",");
          m.x = parseInt(C[0]) || 0, m.y = parseInt(C[1]) || 0;
        }
      }
      return !m.x && !m.x ? Lr(u) : m;
    }, ao = function(u) {
      var t = u.style, m = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!m.x && !m.x) {
        var i = window.getComputedStyle(u);
        return {
          x: parseInt(i.left) || 0,
          y: parseInt(i.top) || 0
        };
      }
      return m;
    }, lo = function(c, u) {
      return u ? no(c) : ao(c);
    }, co = function(c) {
      var u = c.element, t = c.edges, m = c.elementRect, i = c.containerRect, f = c.elementPos, y = c.useTransform;
      t.includes("top") && ht(u, {
        y: f.y + i.top - m.top,
        x: f.x
      }, y), t.includes("left") && ht(u, {
        y: f.y,
        x: f.x + i.left - m.left
      }, y), t.includes("bottom") && ht(u, {
        y: f.y + i.bottom - m.bottom,
        x: f.x
      }, y), t.includes("right") && ht(u, {
        y: f.y,
        x: f.x + i.right - m.right
      }, y);
    }, Ar = function(c) {
      var u = c.computedStyle, t = c.node, m = u.position, i = m === "absolute" || m === "relative" || m === "fixed";
      !(t instanceof Document) && !i && (t.style.position = "relative");
    }, uo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, m = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, x = c.canScroll, C = c.scrollCallback, V = {
        x: 0,
        y: 0
      }, W = u ? t * 4 * m : t * m;
      return f.left.includes(i) && (V.x = y.x || -W, !u && !y.x && x && C(["left"], t)), f.right.includes(i) && (V.x = y.x || W, !u && !y.x && x && C(["right"], t)), f.up.includes(i) && (V.y = y.y || -W, !u && !y.y && x && C(["top"], t)), f.down.includes(i) && (V.y = y.y || W, !u && !y.y && x && C(["bottom"], t)), V;
    }, ho = function(c) {
      var u = c.element, t = c.force, m = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !t || (i.has(u) ? m && i.delete(u) : i.add(u), u.classList.add(f));
    }, fo = function(c) {
      var u = c.element, t = c.force, m = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !t)
        return !1;
      var y = m.has(u), x = i.has(u);
      y && !x ? m.delete(u) : !y && x && m.add(u), u.classList.remove(f);
    }, dt = function(u, t, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, F = function(u, t, m, i) {
      if (t === void 0)
        return m ? l({}, u, i) : {};
      if (t === null)
        return l({}, u, null);
      var f = !0, y = !1, x = typeof i == "string";
      x && (f = typeof t == "string" || t instanceof String), x && !f && (y = !0, dt(u, "string"));
      var C = !Number.isNaN(i) && typeof i == "number";
      C && (f = !Number.isNaN(t) && typeof t == "number"), C && !f && (y = !0, dt(u, "number"));
      var V = Object.prototype.toString.call(i) === "[object Object]";
      V && (f = Object.prototype.toString.call(t) === "[object Object]"), V && !f && (y = !0, dt(u, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof t == "boolean"), W && !f && (y = !0, dt(u, "boolean"));
      var le = Array.isArray(i);
      le && (f = Array.isArray(t)), le && !f && (y = !0, dt(u, "array"));
      var ke = y || m;
      return u === "dragKeys" && f ? l({}, u, Object.assign(i, t)) : u === "dragKeys" && !f ? ke ? l({}, u, i) : {} : (u === "dropZones" && f && new Set(t.map(function(Me) {
        return Me.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, t) : ke ? l({}, u, i) : {});
    }, po = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, F("area", c.area, u, document)), F("selectables", c.selectables, u, null)), F("autoScrollSpeed", c.autoScrollSpeed, u, 5)), F("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), F("zoom", c.zoom, u, 1)), F("customStyles", c.customStyles, u, !1)), F("multiSelectMode", c.multiSelectMode, u, !1)), F("multiSelectToggling", c.multiSelectToggling, u, !0)), F("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), F("selector", c.selector, u, null)), F("selectionThreshold", c.selectionThreshold, u, 0)), F("draggability", c.draggability, u, !0)), F("immediateDrag", c.immediateDrag, u, !0)), F("keyboardDrag", c.keyboardDrag, u, !0)), F("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), F("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), F("useTransform", c.useTransform, u, !0)), F("refreshMemoryRate", c.refreshMemoryRate, u, 80)), F("dropZones", c.dropZones, u, [])), F("dropInsideThreshold", c.dropInsideThreshold, u, 1)), F("dropTargetThreshold", c.dropTargetThreshold, u, 0)), F("usePointerEvents", c.usePointerEvents, u, !1)), F("hoverClass", c.hoverClass, u, "ds-hover")), F("selectableClass", c.selectableClass, u, "ds-selectable")), F("selectedClass", c.selectedClass, u, "ds-selected")), F("selectorClass", c.selectorClass, u, "ds-selector")), F("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), F("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), F("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), F("droppableClass", c.droppableClass, u, "ds-droppable")), F("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), F("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), F("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), F("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), F("dragAsBlock", c.dragAsBlock, u, !1));
    }, et = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (t > 0) {
        var i = (c.right - c.left) * t, f = (c.bottom - c.top) * t;
        m = {
          left: c.left + i,
          right: c.right - i,
          top: c.top + f,
          bottom: c.bottom - f
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, $r = function(c) {
      var u = c.element, t = c.posDirection, m = c.containerRect, i = c.useTransform, f = lo(u, i), y = se(f, "+", t);
      ht(u, y, i);
      var x = u.getBoundingClientRect(), C = Tr({
        elementRect: x,
        containerRect: m
      });
      co({
        element: u,
        edges: C,
        elementRect: x,
        containerRect: m,
        elementPos: y,
        useTransform: i
      });
    }, go = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, mo = function(c, u, t) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? m || document.body : c, f = u.includes("top") && i.scrollTop > 0, y = u.includes("bottom") && i.scrollTop < i.scrollHeight, x = u.includes("left") && i.scrollLeft > 0, C = u.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * t), y && (i.scrollTop += 1 * t), x && (i.scrollLeft -= 1 * t), C && (i.scrollLeft += 1 * t);
      }
    }, ht = function(c, u, t) {
      if (t) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, vo = function(c) {
      for (var u = c.subscribe, t = c.publish, m = c.Interaction, i = c.SelectedSet, f = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(le) {
              return le.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var le = f.getTarget();
              return a({}, le ? {
                dropTarget: le.toObject()
              } : {});
            }
          }
        ]
      }, x = function() {
        var le = K(V[C], 2), ke = le[0], Me = le[1];
        ["pre", !1].forEach(function(Te) {
          return u(Te ? "".concat(ke, ":").concat(Te) : ke, function(ie) {
            return Me.forEach(function(be) {
              return (!be.condition || be.condition(ie)) && t(Te ? "".concat(Te).concat(be.name) : be.name, a(a({
                items: i.elements,
                isDragging: m.isDragging
              }, ie), be.extraData ? be.extraData(ie) : {}));
            });
          });
        });
      }, C = 0, V = Object.entries(y); C < V.length; C++)
        x();
    }, Be = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : w(new Set(w(c))) : [];
    }, Nr = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(i) {
          t.reset(), t._node = i, Ar({
            computedStyle: t.computedStyle,
            node: t._node
          }), setTimeout(function() {
            t.DS.PubSub.publish("Area:modified:pre", {
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              item: t
            });
          });
        }), l(this, "start", function() {
          t._observers = de(t.parentNodes, It(function(i) {
            t.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              event: i,
              item: t
            });
          }, 60));
        }), l(this, "reset", function() {
          t._computedStyle = void 0, t._rect = void 0, t._computedBorder = void 0, t._parentNodes = void 0;
        }), l(this, "stop", function() {
          t._observers.cleanup(), t.reset();
        }), l(this, "scroll", function(i, f) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: f
          };
          t.DS.PubSub.publish("Area:scroll:pre", y), mo(t._node, i, f), t.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          t.setArea(f.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return p(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = so(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Cr(this.HTMLNode);
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          t._dragKeys = {
            up: t.DS.stores.SettingsStore.s.dragKeys.up.map(function(i) {
              return i.toLowerCase();
            }),
            down: t.DS.stores.SettingsStore.s.dragKeys.down.map(function(i) {
              return i.toLowerCase();
            }),
            left: t.DS.stores.SettingsStore.s.dragKeys.left.map(function(i) {
              return i.toLowerCase();
            }),
            right: t.DS.stores.SettingsStore.s.dragKeys.right.map(function(i) {
              return i.toLowerCase();
            })
          }, t._dragKeysFlat = [].concat(w(t._dragKeys.up), w(t._dragKeys.down), w(t._dragKeys.left), w(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, x = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(x) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Er(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var V = uo({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: x,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (V = t.limitDirection(V)), t._elements.forEach(function(W) {
              return $r({
                element: W,
                posDirection: V,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, x = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(x) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: f,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), l(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Er(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), l(this, "stop", function(i) {
          i != null && i.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), l(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !t._elements.length || y || t.DS.continue)) {
            var x = se(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (x = t.limitDirection(x)), t._elements.forEach(function(C) {
              return $r({
                element: C,
                posDirection: x,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(i) {
          var f = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, x = {
            top: f.top - t._selectionRect.top + y.y,
            left: f.left - t._selectionRect.left + y.x,
            bottom: f.bottom - t._selectionRect.bottom + y.y,
            right: f.right - t._selectionRect.right + y.x
          };
          return i.x === 0 && i.y === 0 || (i.y < 0 && (i.y = Math.max(i.y, x.top)), i.x < 0 && (i.x = Math.max(i.x, x.left)), i.y > 0 && (i.y = Math.min(i.y, x.bottom)), i.x > 0 && (i.x = Math.min(i.x, x.right)), t._selectionRect.top += i.y, t._selectionRect.bottom += i.y, t._selectionRect.left += i.x, t._selectionRect.right += i.x), i;
        }), l(this, "handleZIndex", function(i) {
          t._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return p(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? se(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? se(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, m;
        }
      }]), c;
    }(), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS, i = u.id, f = u.element, y = u.droppables;
        n(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(x) {
          if (!t.isDestroyed) {
            var C = t.droppables.filter(function(V) {
              return t.DS.SelectedSet.has(V);
            });
            C.length && (C.forEach(function(V) {
              V.classList[x]("".concat(t.Settings.droppableClass)), V.classList[x]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[x]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var x;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(t.Settings.droppedTargetClass), C.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function(C) {
            return !t.DS.SelectedSet.has(C);
          }), (x = t._itemsDropped) !== null && x !== void 0 && x.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var x, C, V;
          t.isDestroyed || (t._itemsDropped = w(new Set([].concat(w(t._itemsDropped), w((x = t.droppables) === null || x === void 0 ? void 0 : x.filter(function(W) {
            return t.DS.SelectedSet.has(W);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(t.Settings.droppedTargetClass)), W.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (V = t._itemsDropped) !== null && V !== void 0 && V.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var x = !1;
          t.droppables.forEach(function(C) {
            t.itemsInside.includes(C) ? (C.classList.add("".concat(t.Settings.droppedInsideClass)), C.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), x = !0) : (C.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), C.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), x ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), l(this, "start", function(x) {
          var C = x.isDragging;
          !C || t.isDestroyed || t.setReadyClasses("add");
        }), l(this, "stop", function(x) {
          var C = x.isDragging;
          !C || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = Be(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(x) {
          var C = x.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = de(this.parentNodes, It(function() {
          return t._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return p(c, [{
        key: "destroy",
        value: function() {
          var t = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(t.Settings.droppedTargetClass)), m.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id)), m.classList.remove("".concat(t.Settings.droppableClass)), m.classList.remove("".concat(t.Settings.droppableClass, "-").concat(t.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var t = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return et(t.DS.SelectableSet.rects.get(m), t.rect, t.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return t._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Cr(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(t) {
          this._droppables = t;
        }
      }]), c;
    }(), wo = /* @__PURE__ */ p(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(i) {
          var f = i.dropZones;
          f && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = f.map(function(y) {
            return new So(a({
              DS: t.DS
            }, y));
          }), t._zones.forEach(function(y) {
            t._zoneByElement.set(y.element, y), t._zoneById.set(y.id, y), y.droppables.forEach(function(x) {
              var C = t._zonesByDroppable.get(x);
              if (!(C != null && C.length))
                return t._zonesByDroppable.set(x, [y]);
              t._zonesByDroppable.set(x, w(new Set([].concat(w(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          t._zones.forEach(function(f) {
            f !== i && f.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, f) {
          for (var y = f.x, x = f.y, C = 0, V = i.length; C < V; C++) {
            var W = t._zoneByElement.get(i[C]);
            if (W && et(W.rect, {
              left: y,
              right: y,
              top: x,
              bottom: x
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(i) {
          var f = i.isDragging;
          if (f) {
            var y = t.getTarget();
            t._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(i) {
          var f = t._zoneById.get(i);
          return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        }), l(this, "getItemsInsideById", function(i, f) {
          var y = t._zoneById.get(i);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
          var x = y.itemsInside;
          return f && y.handleItemsInsideClasses(), x;
        }), l(this, "getTarget", function(i) {
          var f;
          if ((f = t._zones) !== null && f !== void 0 && f.length) {
            var y = (i == null ? void 0 : i.x) || t.DS.stores.PointerStore.currentVal.x, x = (i == null ? void 0 : i.y) || t.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, x);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: x
              }
            );
          }
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(i) {
          var f = i.settings;
          return t.setDropZones(f);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), _o = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return t.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          t.stop(), t.Settings.usePointerEvents ? t.DS.Area.HTMLNode.addEventListener("pointerdown", t.start, {
            passive: !1
          }) : t.DS.Area.HTMLNode.addEventListener("mousedown", t.start), t.DS.Area.HTMLNode.addEventListener("touchstart", t.start, {
            passive: !1
          }), t.DS.publish("Interaction:init", {});
        }), l(this, "start", function(i) {
          return t.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: t.isDragging
          });
        }), l(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), t._canInteract(i) && (t.isInteracting = !0, t.isDragging = t.isDragEvent(i), t.DS.publish("Interaction:start", {
            event: i,
            isDragging: t.isDragging
          }), t.Settings.usePointerEvents ? (document.addEventListener("pointerup", t.reset), document.addEventListener("pointercancel", t.reset)) : document.addEventListener("mouseup", t.reset), document.addEventListener("touchend", t.reset));
        }), l(this, "isDragEvent", function(i) {
          var f = (
            /** @type {Element} */
            i.target.closest(".".concat(t.Settings.selectableClass))
          );
          return !t.Settings.draggability || t.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !f ? !1 : (t.Settings.immediateDrag && (t.DS.SelectedSet.size ? t.DS.SelectedSet.has(f) || (t.DS.SelectedSet.clear(), t.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )) : t.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )), !!t.DS.SelectedSet.has(f));
        }), l(this, "onClick", function(i) {
          var f = i.event;
          if (t._canInteract(f) && !(f.detail > 0)) {
            var y = t.DS, x = y.stores, C = x.PointerStore, V = x.KeyStore, W = y.SelectableSet, le = y.SelectedSet;
            C.start(f);
            var ke = (
              /** @type {any} */
              f.target
            );
            W.has(ke) && (V.isMultiSelectKeyPressed(f) || le.clear(), le.toggle(ke), t.reset());
          }
        }), l(this, "stop", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.DS.Area.HTMLNode;
          t.isInteracting = !1, t.isDragging = !1, t.Settings.usePointerEvents ? (i.removeEventListener("pointerdown", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", t.reset), document.removeEventListener("pointercancel", t.reset)) : (i.removeEventListener("mousedown", t.start), document.removeEventListener("mouseup", t.reset)), i.removeEventListener("touchstart", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", t.reset);
        }), l(this, "update", function(i) {
          var f = i.event, y = i.scroll_directions, x = i.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: x,
            isDragging: t.isDragging
          });
        }), l(this, "reset", function(i) {
          return t.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: t.isDragging
          });
        }), l(this, "_reset", function(i) {
          var f = t.isDragging;
          t.stop(), t.init(), t.DS.publish("Interaction:end", {
            event: i,
            isDragging: f
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          t.stop(f["area:pre"]), t.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(i) {
          var f = i.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:start:pre", function(i) {
          var f = i.event;
          return t._start(f);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(i) {
          var f = i.event;
          return t._reset(f);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return p(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(t) {
            var m = (
              /** @type {MouseEvent} */
              t.clientX === 0 && /** @type {MouseEvent} */
              t.clientY === 0 && /** @type {MouseEvent} */
              t.detail === 0 && t.target
            );
            return (
              /** @type {MouseEvent} */
              !(t.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              t.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                t.target
              ) || // fix outside elements issue
              !m && !this.DS.SelectorArea.isClicked(t))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), xo = /* @__PURE__ */ p(
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(i, f) {
          return Array.isArray(t.subscribers[i]) || (t.subscribers[i] = []), t.subscribers[i].push(f), t.subscribers[i].length - 1;
        }), l(this, "unsubscribe", function(i, f, y) {
          y >= 0 ? t.subscribers[i].splice(y, 1) : f && (t.subscribers[i] = t.subscribers[i].filter(function(x) {
            return x !== f;
          }));
        }), l(this, "publish", function(i, f) {
          Array.isArray(i) ? i.forEach(function(y) {
            return t._publish(y, f);
          }) : t._publish(i, f);
        }), l(this, "_publish", function(i, f) {
          var y = t.subscribers[i];
          Array.isArray(y) && (i.includes(":pre") ? t._handlePrePublish(y, f) : t._handlePublish(y, f));
        }), l(this, "_handlePublish", function(i, f) {
          for (var y = 0, x = i.length; y < x; y++) {
            if (t.DS.stopped)
              return;
            i[y](f);
          }
        }), l(this, "_handlePrePublish", function(i, f) {
          for (var y = i.length; y--; ) {
            if (t.DS.stopped)
              return;
            i[y](f);
          }
        }), this.DS = m;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), Do = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = O(t);
      function t(m) {
        var i, f = m.DS;
        return n(this, t), i = u.call(this), l(N(i), "_rects", void 0), l(N(i), "_timeout", void 0), l(N(i), "init", function() {
          return Be(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), l(N(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(N(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(N(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(N(i), "addAll", function(y) {
          return y.forEach(function(x) {
            return i.add(x);
          });
        }), l(N(i), "deleteAll", function(y) {
          return y.forEach(function(x) {
            return i.delete(x);
          });
        }), l(N(i), "getRect", function(y) {
          return i._rects ? i.rects.get(y) : y.getBoundingClientRect();
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var x = y.settings;
          i.forEach(function(C) {
            C.classList.remove(x["selectableClass:pre"]), C.classList.add(x.selectableClass);
          });
        }), i;
      }
      return p(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(i) {
            if (B(g(t.prototype), "has", this).call(this, i))
              return this;
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:added:pre", f), i.classList.add(this.Settings.selectableClass), i.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : i.addEventListener("mousedown", this._onPointer), i.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ar({
              computedStyle: window.getComputedStyle(i),
              node: i
            }), B(g(t.prototype), "add", this).call(this, i), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!B(g(t.prototype), "has", this).call(this, i))
            return !0;
          var f = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selectable:removed:pre", f), i.classList.remove(this.Settings.selectableClass), i.classList.remove(this.Settings.hoverClass), i.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : i.removeEventListener("mousedown", this._onPointer), i.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), B(g(t.prototype), "delete", this).call(this, i), this.DS.publish("Selectable:removed", f), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var i = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(f) {
            return i._rects.set(f, f.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return i._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), t;
    }(/* @__PURE__ */ $(Set)), ko = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = O(t);
      function t(m) {
        var i, f = m.DS;
        return n(this, t), i = u.call(this), l(N(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(N(i), "addAll", function(y) {
          return y.forEach(function(x) {
            return i.add(x);
          });
        }), l(N(i), "deleteAll", function(y) {
          return y.forEach(function(x) {
            return i.delete(x);
          });
        }), i.DS = f, i;
      }
      return p(t, [{
        key: "add",
        value: function(i) {
          if (B(g(t.prototype), "has", this).call(this, i))
            return this;
          var f = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selected:added:pre", f), B(g(t.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!B(g(t.prototype), "has", this).call(this, i))
            return !0;
          var f = {
            items: this.elements,
            item: i
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = B(g(t.prototype), "delete", this).call(this, i);
          return i.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", f), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(i) {
            return this.has(i) ? this.delete(i) : this.add(i), i;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), t;
    }(/* @__PURE__ */ $(Set)), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (t._storePrevious(f), t._handleInsideSelection(!0, f));
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          f || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(i, f) {
          var y = t.DS, x = y.SelectableSet, C = y.SelectorArea, V = y.Selector, W = t.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && t.Settings.multiSelectToggling, le = t.Settings.selectionThreshold, ke = x.rects, Me = V.rect, Te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), be = fe(ke), ft;
          try {
            for (be.s(); !(ft = be.n()).done; ) {
              var Et = K(ft.value, 2), pt = Et[0], Tt = Et[1];
              C.isInside(pt, Tt) && (et(Tt, Me, le) ? Te.set(pt, Tt) : ie.set(pt, Tt));
            }
          } catch (Wt) {
            be.e(Wt);
          } finally {
            be.f();
          }
          if (!t.DS.continue) {
            var jr = t.filterSelected({
              select: Te,
              unselect: ie,
              selectorRect: Me
            }), $o = jr.select, No = jr.unselect;
            $o.forEach(function(Wt, Kt) {
              return ho({
                element: Kt,
                force: i,
                multiSelectionToggle: W,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), No.forEach(function(Wt, Kt) {
              return fo({
                element: Kt,
                force: i,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass,
                PrevSelectedSet: t._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(i) {
          var f = i.select, y = i.unselect;
          return i.selectorRect, {
            select: f,
            unselect: y
          };
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return p(c, [{
        key: "_storePrevious",
        value: function(t) {
          var m = this.DS, i = m.stores.KeyStore, f = m.SelectedSet;
          i.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Io = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var i, f;
          t.HTMLNode && (i = t.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Ee(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (f = t.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = t.DS.stores.PointerStore, x = y.initialValArea;
            Nr(t.HTMLNode, R(x, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || t.DS.continue)) {
            var y = t.DS.stores, x = y.ScrollStore, C = y.PointerStore, V = io({
              scrollAmount: x.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Nr(t.HTMLNode, V), t._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          t.HTMLNode.classList.remove(f["selectorClass:pre"]), t.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return p(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[f][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var i = t.DS.Area.rect, f = t.DS.Area.computedBorder, y = t.HTMLNode.style, x = "".concat(i.top + f.top, "px"), C = "".concat(i.left + f.left, "px"), V = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== x && (y.top = x), y.left !== C && (y.left = C), y.width !== V && (y.width = V), y.height !== W && (y.height = W);
        }), l(this, "stop", function(i) {
          t.stopAutoScroll(), i && t.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var i = t.DS, f = i.stores.PointerStore, y = i.Area;
            t.currentEdges = Tr({
              elementRect: R(f.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(i, f) {
          return t.DS.Area.HTMLNode.contains(i) && t.DS.stores.ScrollStore.canScroll ? !0 : et(t.rect, f || i.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = De(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          t.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), t.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          t.updatePos(), t.stopAutoScroll();
        });
      }
      return p(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(t) {
            var m = this.DS.stores.PointerStore, i = t ? m.getPointerPosition(t) : m.initialVal;
            return et({
              left: i.x,
              top: i.y,
              right: i.x,
              bottom: i.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", t.keydown), document.addEventListener("keyup", t.keyup), window.addEventListener("blur", t.reset);
        }), l(this, "keydown", function(i) {
          var f = i.key.toLowerCase();
          t.DS.publish("KeyStore:down:pre", {
            event: i,
            key: f
          }), t._currentValues.add(f), t.DS.publish("KeyStore:down", {
            event: i,
            key: f
          });
        }), l(this, "keyup", function(i) {
          var f = i.key.toLowerCase();
          t.DS.publish("KeyStore:up:pre", {
            event: i,
            key: f
          }), t._currentValues.delete(f), t.DS.publish("KeyStore:up", {
            event: i,
            key: f
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", t.keydown), document.removeEventListener("keyup", t.reset), window.removeEventListener("blur", t.reset), t.reset();
        }), l(this, "reset", function() {
          return t._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return p(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(t) {
            var m = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
              return f.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(f) {
              return i.includes(f.toLocaleLowerCase());
            }) || t && i.some(function(f) {
              return t[m._keyMapping[f]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          t.Settings.usePointerEvents ? document.addEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", t.update), document.addEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(i) {
          return oo({
            event: t._normalizedEvent(i)
          });
        }), l(this, "update", function(i) {
          i && (t.DS.publish("PointerStore:updated:pre", {
            event: i
          }), t.currentVal = t.getPointerPosition(i), t._isMouseInteraction && t.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), l(this, "stop", function() {
          t.Settings.usePointerEvents ? document.removeEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", t.update), document.removeEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return t._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(i) {
          i && (t.currentVal = t.lastVal = t.getPointerPosition(i), t.stop(), t.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return t.reset(f);
        });
      }
      return p(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(t) {
            t && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(t));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(t) {
            return "touches" in t && t.type !== "touchend" && (this._lastTouch = t), "touches" in t ? this._lastTouch.touches[0] : t;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._initialVal = t, this._initialValArea = t && se(t, "-", se(A(this.DS.Area.rect), "+", A(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._currentVal = t, this._currentValArea = t && se(t, "-", se(A(this.DS.Area.rect), "+", A(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._lastVal = t, this._lastValArea = t && se(t, "-", se(A(this.DS.Area.rect), "+", A(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Lo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "start", function() {
          t._currentVal = t._initialVal = Ct(t.DS.stores.SettingsStore.s.area), t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "update", function() {
          return t._currentVal = Ct(t.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          t.DS.stores.SettingsStore.s.area.removeEventListener("scroll", t.update), t._initialVal = {
            x: 0,
            y: 0
          }, t._canScroll = null;
        }), l(this, "reset", function() {
          t.stop(), t.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return p(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = U(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = se(this.currentVal, "-", this.initialVal), m = z(this.DS.stores.SettingsStore.s.zoom), i = se(se(t, "*", m), "-", t);
          return {
            x: t.x + i.x,
            y: t.y + i.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ct(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), Ao = /* @__PURE__ */ p(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS, i = u.settings;
        n(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, x = f.init;
          return t.DS.publish("Settings:updated:pre", a({
            settings: y
          }, x ? {
            init: x
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, x = f.init, C = po(y, x), V = function() {
            var Me, Te = K(le[W], 2), ie = Te[0], be = Te[1];
            ie in t._settings || Object.defineProperty(t.s, ie, {
              get: function() {
                return t._settings[ie];
              },
              set: function(pt) {
                return t.update({
                  settings: l({}, ie, pt)
                });
              }
            }), t._settings["".concat(ie, ":pre")] = t._settings[ie], t._settings[ie] = be;
            var ft = {
              settings: (Me = {}, l(Me, ie, t._settings[ie]), l(Me, "".concat(ie, ":pre"), t._settings["".concat(ie, ":pre")]), Me)
            };
            t.DS.publish("Settings:updated", ft), t.DS.publish("Settings:updated:".concat(ie), ft);
          }, W = 0, le = Object.entries(C); W < le.length; W++)
            V();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: i,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Or = /* @__PURE__ */ function() {
      function c(u) {
        var t = this;
        n(this, c), l(this, "continue", !1), l(this, "start", function() {
          t.stopped = !1, t.Interaction.init();
        }), l(this, "break", function() {
          return t.continue = !0;
        }), l(this, "setSettings", function(m) {
          return t.stores.SettingsStore.update({
            settings: m
          });
        }), l(this, "getSelection", function() {
          return t.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return t.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return t.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return t.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return t.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return t.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return t.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return t.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(m) {
          return t.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), l(this, "isDragging", function() {
          return t.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(m) {
          var i;
          return (i = t.DropZones.getTarget(m)) === null || i === void 0 ? void 0 : i.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(m) {
          return t.DropZones.getItemsDroppedById(m);
        }), l(this, "getItemsInsideByZoneId", function(m, i) {
          return t.DropZones.getItemsInsideById(m, i);
        }), this.PubSub = new xo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Ao({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new To({
          DS: this
        }), this.stores.ScrollStore = new Lo({
          DS: this
        }), this.stores.KeyStore = new Eo({
          DS: this
        }), this.Area = new bo({
          DS: this
        }), this.Selector = new Io({
          DS: this
        }), this.SelectorArea = new Co({
          DS: this
        }), this.SelectableSet = new Do({
          DS: this
        }), this.SelectedSet = new ko({
          DS: this
        }), this.Selection = new Mo({
          DS: this
        }), this.Drag = new yo({
          DS: this
        }), this.DropZones = new wo({
          DS: this
        }), this.Interaction = new _o({
          DS: this
        }), vo({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return t.continue = !1;
        }), this.start();
      }
      return p(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            i && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Be(t)), i || this.addSelectables(t), m && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Be(t)), i && this.removeSelectables(t), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(t) {
          var m = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Be(t).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(t, i, f) : m.addSelection(t, i, f);
          }), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, m, i), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), t && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(t, m, i) {
          var f = Be(t);
          return this.SelectableSet.addAll(f), m && this.SelectedSet.addAll(f), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, m), this.addSelectables(t, i);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(t, m, i) {
          return this.SelectableSet.deleteAll(Be(t)), m && this.removeSelection(t), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Or.isCollision = et, Or;
  });
})(ls);
var wi = ls.exports;
const _i = /* @__PURE__ */ Si(wi), cs = (r, e, s, o, a) => (e = Math, s = e.log, o = 1024, a = s(r) / s(o) | 0, r / e.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), us = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), xi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Di = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), ki = [
  Di
], Mi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ii = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ci = [
  Ii
], Ei = {
  name: "VFSortIcon"
}, At = /* @__PURE__ */ Object.assign(Ei, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (_(), I("div", null, [
      r.direction == "down" ? (_(), I("svg", xi, ki)) : Y("", !0),
      r.direction == "up" ? (_(), I("svg", Mi, Ci)) : Y("", !0)
    ]));
  }
}), Ti = ["onClick"], Li = {
  name: "VFToast.vue"
}, Ai = /* @__PURE__ */ Object.assign(Li, {
  setup(r) {
    const e = P("emitter"), { getStore: s } = P("storage"), o = L(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = L([]), d = (l) => {
      n.value.splice(l, 1);
    }, p = (l) => {
      let v = n.value.findIndex((g) => g.id === l);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      n.value = [];
    }), e.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, n.value.push(l), setTimeout(() => {
        p(v);
      }, 5e3);
    }), (l, v) => (_(), I("div", {
      class: ue([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ce(Oo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          (_(!0), I(ne, null, ye(n.value, (g, b) => (_(), I("div", {
            onClick: (S) => d(b),
            key: g,
            class: ue([a(g.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(g.label), 11, Ti))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Qe = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: $i } = Oe(), zr = (r, e) => $i.value + "?" + Qe({ q: "preview", adapter: r, path: e }), Ye = typeof window < "u", ds = Ye && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Ye && "IntersectionObserver" in window, fs = Ye && "classList" in document.createElement("p"), ps = Ye && window.devicePixelRatio > 1, Ni = {
  elements_selector: ".lazy",
  container: ds || Ye ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, gs = (r) => Object.assign({}, Ni, r), Rr = function(r, e) {
  let s;
  const o = "LazyLoad::Initialized", a = new r(e);
  try {
    s = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, Oi = (r, e) => {
  if (e)
    if (!e.length)
      Rr(r, e);
    else
      for (let s = 0, o; o = e[s]; s += 1)
        Rr(r, o);
}, Re = "src", hr = "srcset", fr = "sizes", ms = "poster", Dt = "llOriginalAttrs", vs = "data", pr = "loading", bs = "loaded", ys = "applied", ji = "entered", gr = "error", Ss = "native", ws = "data-", _s = "ll-status", me = (r, e) => r.getAttribute(ws + e), Pi = (r, e, s) => {
  var o = ws + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, kt = (r) => me(r, _s), Je = (r, e) => Pi(r, _s, e), Vt = (r) => Je(r, null), mr = (r) => kt(r) === null, zi = (r) => kt(r) === pr, Ri = (r) => kt(r) === gr, vr = (r) => kt(r) === Ss, Bi = [pr, bs, ys, gr], Vi = (r) => Bi.indexOf(kt(r)) >= 0, Fe = (r, e, s, o) => {
  if (r) {
    if (o !== void 0) {
      r(e, s, o);
      return;
    }
    if (s !== void 0) {
      r(e, s);
      return;
    }
    r(e);
  }
}, ut = (r, e) => {
  if (fs) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Le = (r, e) => {
  if (fs) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Hi = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Ui = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Ht = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Zi = (r) => {
  r.disconnect();
}, Yi = (r, e, s) => {
  e.unobserve_entered && Ht(r, s);
}, br = (r, e) => {
  r && (r.loadingCount += e);
}, Fi = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Wi = (r) => r.loadingCount > 0, Ki = (r) => r.toLoadCount > 0, ks = (r) => {
  let e = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, yr = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  ks(s).forEach(e);
}, Ms = (r, e) => {
  ks(r).forEach(e);
}, Ut = [Re], Is = [Re, ms], wt = [Re, hr, fr], Cs = [vs], Zt = (r) => !!r[Dt], Es = (r) => r[Dt], Ts = (r) => delete r[Dt], nt = (r, e) => {
  if (Zt(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[Dt] = s;
}, Gi = (r) => {
  Zt(r) || (r[Dt] = { backgroundImage: r.style.backgroundImage });
}, Xi = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Xe = (r, e) => {
  if (!Zt(r))
    return;
  const s = Es(r);
  e.forEach((o) => {
    Xi(r, o, s[o]);
  });
}, qi = (r) => {
  if (!Zt(r))
    return;
  const e = Es(r);
  r.style.backgroundImage = e.backgroundImage;
}, Ls = (r, e, s) => {
  ut(r, e.class_applied), Je(r, ys), s && (e.unobserve_completed && Ht(r, e), Fe(e.callback_applied, r, s));
}, As = (r, e, s) => {
  ut(r, e.class_loading), Je(r, pr), s && (br(s, 1), Fe(e.callback_loading, r, s));
}, Ze = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Ze(r, fr, me(r, e.data_sizes)), Ze(r, hr, me(r, e.data_srcset)), Ze(r, Re, me(r, e.data_src));
}, Qi = (r, e) => {
  yr(r, (s) => {
    nt(s, wt), Br(s, e);
  }), nt(r, wt), Br(r, e);
}, Ji = (r, e) => {
  nt(r, Ut), Ze(r, Re, me(r, e.data_src));
}, en = (r, e) => {
  Ms(r, (s) => {
    nt(s, Ut), Ze(s, Re, me(s, e.data_src));
  }), nt(r, Is), Ze(r, ms, me(r, e.data_poster)), Ze(r, Re, me(r, e.data_src)), r.load();
}, tn = (r, e) => {
  nt(r, Cs), Ze(r, vs, me(r, e.data_src));
}, rn = (r, e, s) => {
  const o = me(r, e.data_bg), a = me(r, e.data_bg_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = `url("${n}")`, xs(r).setAttribute(Re, n), As(r, e, s));
}, sn = (r, e, s) => {
  const o = me(r, e.data_bg_multi), a = me(r, e.data_bg_multi_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = n, Ls(r, e, s));
}, on = (r, e, s) => {
  const o = me(r, e.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let n = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = n.join(), r.style.backgroundImage === "" && (n = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = n.join()), Ls(r, e, s);
}, $s = {
  IMG: Qi,
  IFRAME: Ji,
  VIDEO: en,
  OBJECT: tn
}, nn = (r, e) => {
  const s = $s[r.tagName];
  s && s(r, e);
}, an = (r, e, s) => {
  const o = $s[r.tagName];
  o && (o(r, e), As(r, e, s));
}, ln = ["IMG", "IFRAME", "VIDEO", "OBJECT"], cn = (r) => ln.indexOf(r.tagName) > -1, Ns = (r, e) => {
  e && !Wi(e) && !Ki(e) && Fe(r.callback_finish, e);
}, Vr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, un = (r, e, s) => {
  r.removeEventListener(e, s);
}, Sr = (r) => !!r.llEvLisnrs, dn = (r, e, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, o, e), Vr(r, "error", s);
}, er = (r) => {
  if (!Sr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    un(r, s, o);
  }
  delete r.llEvLisnrs;
}, Os = (r, e, s) => {
  Ui(r), br(s, -1), Fi(s), Le(r, e.class_loading), e.unobserve_completed && Ht(r, s);
}, hn = (r, e, s, o) => {
  const a = vr(e);
  Os(e, s, o), ut(e, s.class_loaded), Je(e, bs), Fe(s.callback_loaded, e, o), a || Ns(s, o);
}, fn = (r, e, s, o) => {
  const a = vr(e);
  Os(e, s, o), ut(e, s.class_error), Je(e, gr), Fe(s.callback_error, e, o), s.restore_on_error && Xe(e, wt), a || Ns(s, o);
}, wr = (r, e, s) => {
  const o = xs(r) || r;
  if (Sr(o))
    return;
  dn(o, (d) => {
    hn(d, r, e, s), er(o);
  }, (d) => {
    fn(d, r, e, s), er(o);
  });
}, pn = (r, e, s) => {
  Hi(r), wr(r, e, s), Gi(r), rn(r, e, s), sn(r, e, s), on(r, e, s);
}, gn = (r, e, s) => {
  wr(r, e, s), an(r, e, s);
}, _r = (r, e, s) => {
  cn(r) ? gn(r, e, s) : pn(r, e, s);
}, mn = (r, e, s) => {
  r.setAttribute("loading", "lazy"), wr(r, e, s), nn(r, e), Je(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(Re), r.removeAttribute(hr), r.removeAttribute(fr);
}, vn = (r) => {
  yr(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  yr(r, (e) => {
    Xe(e, wt);
  }), Xe(r, wt);
}, bn = (r) => {
  Ms(r, (e) => {
    Xe(e, Ut);
  }), Xe(r, Is), r.load();
}, yn = (r) => {
  Xe(r, Ut);
}, Sn = (r) => {
  Xe(r, Cs);
}, wn = {
  IMG: js,
  IFRAME: yn,
  VIDEO: bn,
  OBJECT: Sn
}, _n = (r) => {
  const e = wn[r.tagName];
  if (!e) {
    qi(r);
    return;
  }
  e(r);
}, xn = (r, e) => {
  mr(r) || vr(r) || (Le(r, e.class_entered), Le(r, e.class_exited), Le(r, e.class_applied), Le(r, e.class_loading), Le(r, e.class_loaded), Le(r, e.class_error));
}, Dn = (r, e) => {
  _n(r), xn(r, e), Vt(r), Ts(r);
}, kn = (r, e, s, o) => {
  s.cancel_on_exit && zi(r) && r.tagName === "IMG" && (er(r), vn(r), js(r), Le(r, s.class_loading), br(o, -1), Vt(r), Fe(s.callback_cancel, r, e, o));
}, Mn = (r, e, s, o) => {
  const a = Vi(r);
  Je(r, ji), ut(r, s.class_entered), Le(r, s.class_exited), Yi(r, s, o), Fe(s.callback_enter, r, e, o), !a && _r(r, s, o);
}, In = (r, e, s, o) => {
  mr(r) || (ut(r, s.class_exited), kn(r, e, s, o), Fe(s.callback_exit, r, e, o));
}, Cn = ["IMG", "IFRAME", "VIDEO"], Ps = (r) => r.use_native && "loading" in HTMLImageElement.prototype, En = (r, e, s) => {
  r.forEach((o) => {
    Cn.indexOf(o.tagName) !== -1 && mn(o, e, s);
  }), Ds(s, 0);
}, Tn = (r) => r.isIntersecting || r.intersectionRatio > 0, Ln = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), An = (r, e, s) => {
  r.forEach(
    (o) => Tn(o) ? Mn(o.target, o, e, s) : In(o.target, o, e, s)
  );
}, $n = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, Nn = (r, e) => {
  Zi(r), $n(r, e);
}, On = (r, e) => {
  !hs || Ps(r) || (e._observer = new IntersectionObserver((s) => {
    An(s, r, e);
  }, Ln(r)));
}, zs = (r) => Array.prototype.slice.call(r), zt = (r) => r.container.querySelectorAll(r.elements_selector), jn = (r) => zs(r).filter(mr), Pn = (r) => Ri(r), zn = (r) => zs(r).filter(Pn), Ur = (r, e) => jn(r || zt(e)), Rn = (r, e) => {
  zn(zt(r)).forEach((o) => {
    Le(o, r.class_error), Vt(o);
  }), e.update();
}, Bn = (r, e) => {
  Ye && (e._onlineHandler = () => {
    Rn(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Vn = (r) => {
  Ye && window.removeEventListener("online", r._onlineHandler);
}, Mt = function(r, e) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, On(s, this), Bn(s, this), this.update(e);
};
Mt.prototype = {
  update: function(r) {
    const e = this._settings, s = Ur(r, e);
    if (Ds(this, s.length), ds || !hs) {
      this.loadAll(s);
      return;
    }
    if (Ps(e)) {
      En(s, e, this);
      return;
    }
    Nn(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Vn(this), zt(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Ur(r, e).forEach((o) => {
      Ht(o, this), _r(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    zt(r).forEach((e) => {
      Dn(e, r);
    });
  }
};
Mt.load = (r, e) => {
  const s = gs(e);
  _r(r, s);
};
Mt.resetStatus = (r) => {
  Vt(r);
};
Ye && Oi(Mt, window.lazyLoadOptions);
const Hn = { class: "relative flex-auto flex flex-col overflow-hidden custom-explorer" }, Un = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Zn = { class: "absolute" }, Yn = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Fn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Wn = ["onDragover", "onDragleave"], Kn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Gn = { class: "grid grid-cols-12 items-center" }, Xn = { class: "flex col-span-7 items-center" }, qn = {
  key: 0,
  src: dr,
  alt: ""
}, Qn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ea = [
  Jn
], ta = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, sa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], oa = { class: "grid grid-cols-12 items-center" }, ia = { class: "flex col-span-7 items-center" }, na = {
  key: 0,
  src: dr,
  alt: ""
}, aa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, la = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ca = [
  la
], ua = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, da = { class: "col-span-2 text-center" }, ha = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, fa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], pa = { class: "custom-grid-item-div" }, ga = { class: "relative grid-folder-view-item" }, ma = {
  key: 0,
  src: dr,
  alt: ""
}, va = ["src", "alt"], ba = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ya = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Sa = [
  ya
], wa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, _a = { class: "break-all custom-item-text" }, xa = {
  name: "VFExplorer"
}, Da = /* @__PURE__ */ Object.assign(xa, {
  props: {
    view: String,
    data: Object,
    search: Object,
    type: String
  },
  setup(r) {
    const e = r, s = P("emitter"), { setStore: o, getStore: a } = P("storage"), n = P("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), p = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), g = L(0), b = L(null), { t: S } = P("i18n"), D = Math.floor(Math.random() * 2 ** 32), M = L(a("full-screen", !1)), $ = new Mt();
    L(), s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, M.value = !M.value, o("full-screen", M.value);
    });
    const N = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      N.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", {
            label: S("No search result found.")
          });
        }
      }) : s.emit("vf-fetch", {
        params: {
          q: "index",
          adapter: e.data.adapter,
          path: e.data.dirname
        }
      });
    });
    let H = null;
    const O = () => {
      H && clearTimeout(H);
    }, T = L(!0), B = (A) => {
      A.touches.length > 1 && (T.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), T.value = !T.value);
    }, K = (A) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, w = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: e.data.adapter, path: A.path }
      })) : A.type !== "dir" && e.type !== "standalone" ? s.emit("custom-modal-show", {
        type: "preview",
        adapter: e.data.adapter,
        item: A
      }) : A.type !== "dir" && e.type === "standalone" && s.emit("custom-v-f-insert", { type: "insert", item: A });
    }, j = Ot({ active: !1, column: "", order: "" }), X = (A = !0) => {
      let R = [...e.data.files], z = j.column, de = j.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (De, Ee) => typeof De == "string" && typeof Ee == "string" ? De.toLowerCase().localeCompare(Ee.toLowerCase()) : De < Ee ? -1 : De > Ee ? 1 : 0;
      return j.active && (R = R.slice().sort((De, Ee) => U(De[z], Ee[z]) * de)), R;
    }, re = (A) => {
      j.active && j.column == A ? (j.active = j.order == "asc", j.column = A, j.order = "desc") : (j.active = !0, j.column = A, j.order = "asc");
    }, Q = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), he = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(Q()));
    }, Se = (A, R) => {
      A.preventDefault();
      let z;
      if (!A.dataTransfer.files[0] && A.dataTransfer.getData("items")) {
        if (z = JSON.parse(A.dataTransfer.getData("items")), z.find((de) => de.storage != n.value)) {
          alert("Moving items between different storages is not supported yet.");
          return;
        }
        s.emit("vf-modal-show", {
          type: "move",
          items: { from: z, to: R }
        });
      }
    }, ve = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((z) => z == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    }, fe = () => {
      b.value = new _i({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Bt(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + D)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          g.value = b.value.getSelection().length, b.value.break();
        else {
          const z = A.target.offsetWidth - A.offsetX, de = A.target.offsetHeight - A.offsetY;
          z < 15 && de < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: z }) => {
        s.emit("vf-nodes-selected", Q()), g.value = b.value.getSelection().length;
      });
    };
    xe(() => {
      fe();
    }), jo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), $.update();
    }), xe(() => {
      at(
        () => e.view,
        () => s.emit("vf-explorer-update")
      );
    });
    const ae = (A) => {
      l.value.classList.add("custom-drag-drop-overlay");
    }, we = (A) => {
      l.value.classList.remove("custom-drag-drop-overlay");
    }, se = (A) => {
      A.preventDefault(), l.value.classList.remove("custom-drag-drop-overlay");
      let R;
      A.dataTransfer.files[0] && (R = {
        dirPath: e.data.dirname,
        targetElement: l.value,
        fileArray: A.dataTransfer.files
      }, s.emit("custom-drop-image", R));
    };
    return (A, R) => (_(), I("div", Hn, [
      r.view == "list" || N.value.length ? (_(), I("div", Un, [
        h("div", {
          onClick: R[0] || (R[0] = (z) => re("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          te(E(k(S)("Name")) + " ", 1),
          Ae(Ce(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Lt, j.active && j.column == "basename"]
          ])
        ]),
        N.value.length ? Y("", !0) : (_(), I("div", {
          key: 0,
          onClick: R[1] || (R[1] = (z) => re("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          te(E(k(S)("Size")) + " ", 1),
          Ae(Ce(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Lt, j.active && j.column == "file_size"]
          ])
        ])),
        N.value.length ? Y("", !0) : (_(), I("div", {
          key: 1,
          onClick: R[2] || (R[2] = (z) => re("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          te(E(k(S)("Date")) + " ", 1),
          Ae(Ce(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Lt, j.active && j.column == "last_modified"]
          ])
        ])),
        N.value.length ? (_(), I("div", {
          key: 2,
          onClick: R[3] || (R[3] = (z) => re("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          te(E(k(S)("Filepath")) + " ", 1),
          Ae(Ce(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Lt, j.active && j.column == "path"]
          ])
        ])) : Y("", !0)
      ])) : Y("", !0),
      h("div", Zn, [
        h("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Yn,
          h("div", Fn, E(g.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: B,
        onContextmenu: R[10] || (R[10] = ze((z) => k(s).emit("vf-contextmenu-show", {
          event: z,
          area: l.value,
          items: Q()
        }), ["self", "prevent"])),
        class: ue(`h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto ${e.type == "standalone" ? "standalone-grid-div" : ""}`),
        ref_key: "selectorArea",
        ref: l,
        onDrop: se,
        onDragover: ze(ae, ["prevent"]),
        onDragleave: ze(we, ["prevent"])
      }, [
        N.value.length ? (_(!0), I(ne, { key: 0 }, ye(X(), (z, de) => (_(), I("div", {
          onDblclick: (U) => w(z),
          onTouchstart: R[4] || (R[4] = (U) => K(U)),
          onTouchend: R[5] || (R[5] = (U) => O()),
          onContextmenu: ze((U) => k(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: z
          }), ["prevent"]),
          class: ue(["vf-item-" + k(D), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": z.type,
          "data-item": JSON.stringify(z),
          "data-index": de
        }, [
          h("div", Gn, [
            h("div", Xn, [
              z.type == "dir" ? (_(), I("img", qn)) : (_(), I("svg", Qn, ea)),
              h("span", ta, E(z.basename), 1)
            ]),
            h("div", ra, E(z.path), 1)
          ])
        ], 42, Kn))), 256)) : Y("", !0),
        r.view == "list" && !N.value.length ? (_(!0), I(ne, { key: 1 }, ye(X(), (z, de) => (_(), I("div", {
          draggable: "true",
          onDblclick: (U) => w(z),
          onTouchstart: R[6] || (R[6] = (U) => K(U)),
          onTouchend: R[7] || (R[7] = (U) => O()),
          onContextmenu: ze((U) => k(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: z
          }), ["prevent"]),
          onDragstart: (U) => he(U),
          onDragover: (U) => ve(U, z),
          onDrop: (U) => Se(U, z),
          class: ue(["vf-item-" + k(D), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": z.type,
          "data-item": JSON.stringify(z),
          "data-index": de
        }, [
          h("div", oa, [
            h("div", ia, [
              z.type == "dir" ? (_(), I("img", na)) : (_(), I("svg", aa, ca)),
              h("span", ua, E(z.basename), 1)
            ]),
            h("div", da, E(z.file_size ? k(cs)(z.file_size) : ""), 1),
            h("div", ha, E(k(us)(z.last_modified)), 1)
          ])
        ], 42, sa))), 256)) : Y("", !0),
        r.view == "grid" && !N.value.length ? (_(!0), I(ne, { key: 2 }, ye(X(!1), (z, de) => (_(), I("div", {
          draggable: "true",
          onDblclick: (U) => w(z),
          onTouchstart: R[8] || (R[8] = (U) => K(U)),
          onTouchend: R[9] || (R[9] = (U) => O()),
          onContextmenu: ze((U) => k(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: z
          }), ["prevent"]),
          onDragstart: (U) => he(U),
          onDragover: (U) => ve(U, z),
          onDrop: (U) => Se(U, z),
          class: ue(["vf-item-" + k(D), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": z.type,
          "data-item": JSON.stringify(z),
          "data-index": de
        }, [
          h("div", pa, [
            h("div", ga, [
              z.type == "dir" ? (_(), I("img", ma)) : (z.mime_type ?? "").startsWith("image") ? (_(), I("img", {
                key: 1,
                class: "custom-grid-item-file",
                src: z.path.replace("local://", "https://medias-storage.s3.us-east-2.amazonaws.com/"),
                alt: z.basename
              }, null, 8, va)) : (_(), I("svg", ba, Sa)),
              !(z.mime_type ?? "").startsWith("image") && z.type != "dir" ? (_(), I("div", wa, E(d(z.extension)), 1)) : Y("", !0)
            ]),
            h("span", _a, E(p(z.basename)), 1)
          ])
        ], 42, fa))), 256)) : Y("", !0)
      ], 42, Wn),
      Ce(Ai)
    ]));
  }
}), ka = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ma = { class: "flex leading-5 items-center" }, Ia = { class: "ml-3" }, Ca = { key: 0 }, Ea = { class: "ml-1" }, Ta = {
  name: "VFStatusbar"
}, La = /* @__PURE__ */ Object.assign(Ta, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: o } = P("storage"), a = L(0);
    P("adapter");
    const { t: n, changeLocale: d } = P("i18n");
    L(s("locale", "")), e.on("vf-nodes-selected", (l) => {
      a.value = l.length;
    });
    const p = L("");
    return e.on("vf-search-query", ({ newQuery: l }) => {
      p.value = l;
    }), (l, v) => (_(), I("div", ka, [
      h("div", Ma, [
        h("div", Ia, [
          p.value.length ? (_(), I("span", Ca, E(r.data.files.length) + " items found. ", 1)) : Y("", !0),
          h("span", Ea, E(a.value > 0 ? a.value + " " + k(n)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), Aa = (r, e = 0, s = !1) => {
  let o;
  return (...a) => {
    s && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, e);
  };
}, $a = (r, e, s) => {
  const o = L(r);
  return Po((n, d) => ({
    get() {
      return n(), o.value;
    },
    set: Aa(
      (p) => {
        o.value = p, d();
      },
      e,
      s
    )
  }));
}, Na = { class: "custom-file-picker-search-bar flex p-2 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Oa = ["aria-label"], ja = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Pa = [
  ja
], za = ["aria-label"], Ra = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ba = [
  Ra
], Va = ["aria-label"], Ha = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ua = [
  Ha
], Za = ["onClick"], Ya = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Fa = [
  Ya
], Wa = { class: "flex leading-5" }, Ka = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Ga = ["title", "onClick"], Xa = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, qa = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Qa = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Ja = [
  qa,
  Qa
], el = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, tl = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), rl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), sl = ["onKeydown", "placeholder"], ol = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), il = [
  ol
], nl = {
  name: "VFBreadcrumb"
}, al = /* @__PURE__ */ Object.assign(nl, {
  props: {
    data: Object,
    type: String
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), a = L(null), n = L([]), d = L(!1), p = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let O = [], T = [];
      a.value = e.data.dirname ?? o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(B) {
        O.push(B), O.join("/") != "" && T.push({
          basename: B,
          name: B,
          path: o.value + "://" + O.join("/"),
          type: "dir"
        });
      }), T.length > 4 && (T = T.slice(-5), T[0].name = ".."), n.value = T;
    });
    const g = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      g();
    });
    const b = () => {
      d.value = !0, Bt(() => p.value.focus());
    }, S = $a("", 400), D = () => v.value;
    at(S, (O) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: O });
    });
    const M = () => n.value.length && !d.value, $ = (O) => {
      O.preventDefault();
      let T = JSON.parse(O.dataTransfer.getData("items"));
      if (T.find((B) => B.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: {
          from: T,
          to: n.value[n.value.length - 2] ?? {
            path: o.value + "://"
          }
        }
      });
    }, N = (O) => {
      O.preventDefault(), M() ? O.dataTransfer.dropEffect = "copy" : (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && g();
    };
    return (O, T) => (_(), I("div", Na, [
      h("span", {
        "aria-label": k(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), I("svg", {
          onDragover: T[0] || (T[0] = (B) => N(B)),
          onDrop: T[1] || (T[1] = (B) => $(B)),
          onClick: T[2] || (T[2] = (B) => {
            var K;
            return !M() || k(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((K = n.value[n.value.length - 2]) == null ? void 0 : K.path) ?? k(o) + "://"
              }
            });
          }),
          class: ue([
            "h-6 w-6 p-0.5 rounded",
            M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Pa, 34))
      ], 8, Oa),
      D() ? (_(), I("span", {
        key: 1,
        "aria-label": k(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), I("svg", {
          onClick: T[4] || (T[4] = (B) => k(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ua))
      ], 8, Va)) : (_(), I("span", {
        key: 0,
        "aria-label": k(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), I("svg", {
          onClick: T[3] || (T[3] = (B) => k(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ba))
      ], 8, za)),
      d.value ? (_(), I("div", el, [
        tl,
        rl,
        Ae(h("input", {
          ref_key: "searchInput",
          ref: p,
          onKeydown: lt(g, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": T[6] || (T[6] = (B) => zo(S) ? S.value = B : null),
          placeholder: k(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, sl), [
          [ct, k(S)]
        ]),
        (_(), I("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: g,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, il))
      ])) : (_(), I("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: ze(b, ["self"])
      }, [
        (_(), I("svg", {
          onClick: T[5] || (T[5] = (B) => k(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa)),
        h("div", Wa, [
          (_(!0), I(ne, null, ye(n.value, (B, K) => (_(), I("div", { key: K }, [
            Ka,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (w) => k(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: B.path }
              })
            }, E(B.name), 9, Ga)
          ]))), 128))
        ]),
        D() ? (_(), I("svg", Xa, Ja)) : Y("", !0)
      ], 8, Za))
    ]));
  }
}), ll = ["onClick"], cl = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), ul = {
  name: "VFContextMenu"
}, dl = /* @__PURE__ */ Object.assign(ul, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), o = L(null), { apiUrl: a } = Oe(), n = Ot({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = L([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: p } = P("i18n"), l = {
      newfolder: {
        title: () => p("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => p("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => p("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => p("Preview"),
        action: () => {
          console.log(d.value[0]), s.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: d.value[0] });
        }
      },
      insert: {
        title: () => p("Insert"),
        action: () => {
          s.emit("custom-v-f-insert", { type: "insert", item: d.value[0] });
        }
      },
      open: {
        title: () => p("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => p("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => p("Download"),
        action: () => {
          const S = a.value + "?" + Qe({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, g = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      g.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: D, items: M, target: $ = null }) => {
      if (n.items = [], g.value)
        if ($)
          n.items.push(l.openDir), s.emit("vf-context-selected", [$]);
        else
          return;
      else
        !$ && !g.value ? (n.items.push(l.refresh), n.items.push(l.newfolder), s.emit("vf-context-selected", [])) : M.length > 1 && M.some((N) => N.path === $.path) ? (n.items.push(l.refresh), n.items.push(l.delete), s.emit("vf-context-selected", M)) : ($.type == "dir" ? n.items.push(l.open) : $.type == "file" && e.current.type == "regular" ? n.items.push(l.download) : $.type == "file" && e.current.type == "standalone" && (n.items.push(l.insert), n.items.push(l.download)), n.items.push(l.delete), s.emit("vf-context-selected", [$]));
      b(S, D);
    }), s.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (S, D) => {
      n.active = !0, Bt(() => {
        let M = D.getBoundingClientRect(), $ = S.pageX, N = S.pageY, H = o.value.offsetHeight, O = o.value.offsetWidth;
        $ = M.right - S.pageX + window.scrollX < O ? $ - O : $, N = M.bottom - S.pageY + window.scrollY < H ? N - H : N, n.positions = {
          left: $ + "px",
          top: N + "px"
        };
      });
    };
    return (S, D) => n.active ? (_(), I("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: as(n.positions)
    }, [
      (_(!0), I(ne, null, ye(n.items, (M) => (_(), I("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: ($) => v(M)
      }, [
        cl,
        h("span", null, E(M.title()), 1)
      ], 8, ll))), 128))
    ], 4)) : Y("", !0);
  }
}), hl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function fl(r) {
  const e = await hl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function pl(r, e, s) {
  const { getStore: o, setStore: a } = Jt(r), n = L({}), d = (v) => {
    fl(v).then((g) => {
      n.value = g, a("locale", v), a("translations", g), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((g) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? n.value = o("translations") : d(e);
  const p = (v, ...g) => g.length ? p(v = v.replace("%s", g.shift()), ...g) : v;
  function l(v, ...g) {
    return n.value.hasOwnProperty(v) ? p(n.value[v], ...g) : p(v, ...g);
  }
  return { t: l, changeLocale: d };
}
const gl = { class: "vuefinder" }, ml = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), vl = {
  name: "VueFinder"
}, bl = /* @__PURE__ */ Object.assign(vl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    },
    vueFinderType: {
      type: String,
      default: "regular"
    },
    vueFinderUploadUrl: {
      type: String,
      default: ""
    },
    vueFinderGetInfoUrl: {
      type: String,
      default: ""
    },
    vueFinderDeleteUrl: {
      type: String,
      default: ""
    },
    vueFinderMoveUrl: {
      type: String,
      default: ""
    },
    movePrompt: {
      type: Boolean,
      default: !1
    },
    movedItems: {
      default: null
    }
  },
  emits: ["deleteButton", "fileMoved", "fileUploaded", "customUploadItem", "customInsertItem", "customDeleteItem", "customMoveItem"],
  setup(r, { expose: e, emit: s }) {
    const o = r;
    e({
      performAction: N
    });
    let a = L();
    const n = Bo(), { setStore: d, getStore: p } = Jt(o.id), l = L(p("adapter"));
    L(o.movePrompt);
    let v = L(o.movedItems);
    We("emitter", n), We("storage", Jt(o.id)), We("postData", o.postData), We("adapter", l), We("maxFileSize", o.maxFileSize);
    const g = pl(o.id, o.locale, n);
    We("i18n", g);
    const { apiUrl: b, setApiUrl: S } = Oe();
    S(o.url);
    const D = Ot({
      adapter: l.value,
      storages: [],
      dirname: ".",
      files: [],
      type: o.vueFinderType,
      url: o.vueFinderUploadUrl
    }), M = L(p("viewport", "grid")), $ = L(p("darkMode", o.dark));
    n.on("vf-darkMode-toggle", () => {
      $.value = !$.value, d("darkMode", $.value);
    });
    function N() {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }
    const H = L(!1);
    We("loadingState", H);
    const O = L(p("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      O.value = !O.value, d("full-screen", O.value);
    }), n.on("vf-view-toggle", (w) => {
      M.value = w;
    });
    const T = Ot({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      T.active = !1;
    }), n.on("vf-modal-show", (w) => {
      T.active = !0, T.type = w.type, T.data = w;
    }), n.on("custom-modal-show", (w) => {
      s("customUploadItem", w, D);
    }), n.on("custom-drop-image", (w) => {
      s("customDragDrop", w);
    }), n.on("custom-v-f-insert", (w) => {
      s("customInsertItem", w);
    }), n.on("custom-v-f-delete", (w) => {
      s("customDeleteItem", w);
    }), n.on("custom-v-f-move", (w) => {
      s("customMoveItem", w);
    }), s("fileUploaded", () => {
      console.log("here Emmit uploaded");
    }), n.on("file-moved", (w) => {
      s("fileMoved", w);
    });
    const B = (w) => {
      Object.assign(D, w), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let K;
    return n.on("vf-fetch-abort", () => {
      K.abort(), H.value = !1;
    }), n.on("vf-fetch", ({ params: w, onSuccess: j = null, onError: X = null }) => {
      ["index", "search"].includes(w.q) && (K && K.abort(), H.value = !0), a = w.path, s("customUpdateVariable", a), K = new AbortController();
      const re = K.signal;
      Pt(b.value, { params: w, signal: re }).then((Q) => {
        l.value = Q.adapter, ["index", "search"].includes(w.q) && (H.value = !1), n.emit("vf-modal-close"), B(Q), j(Q);
      }).catch((Q) => {
        X && X(Q);
      }).finally(() => {
      });
    }), n.on("vf-download", (w) => {
      document.getElementById("download_frame").src = w, n.emit("vf-modal-close");
    }), xe(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), at(() => {
      v.value = o.movedItems;
    }, {
      immediate: !1
    }), (w, j) => (_(), I("div", gl, [
      h("div", {
        class: ue(`${$.value ? "dark" : ""} vuefinder-custom-div`)
      }, [
        h("div", {
          class: ue([
            O.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md",
            "custom-vuefinder-explorer-container border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
          ]),
          style: as(O.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: j[0] || (j[0] = (X) => k(n).emit("vf-contextmenu-hide")),
          onTouchstart: j[1] || (j[1] = (X) => k(n).emit("vf-contextmenu-hide"))
        }, [
          Ce(bi, {
            data: D,
            type: o.vueFinderType
          }, null, 8, ["data", "type"]),
          Ce(al, {
            data: D,
            type: o.vueFinderType
          }, null, 8, ["data", "type"]),
          Ce(Da, {
            view: M.value,
            data: D,
            type: o.vueFinderType
          }, null, 8, ["view", "data", "type"]),
          Ce(La, { data: D }, null, 8, ["data"])
        ], 38),
        T.active ? (_(), q(Ro("v-f-modal-" + T.type), {
          key: 0,
          selection: T.data,
          current: D,
          movedItemsProp: k(v),
          modalType: o.vueFinderType
        }, null, 8, ["selection", "current", "movedItemsProp", "modalType"])) : Y("", !0),
        Ce(dl, {
          current: D,
          testProp: "hi_there"
        }, null, 8, ["current"]),
        ml
      ], 2)
    ]));
  }
}), yl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), Sl = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, wl = { class: "custom-layout-button-slot" }, je = {
  __name: "ModalLayout",
  props: {
    modalType: {
      type: String
    }
  },
  setup(r) {
    const e = r, s = P("emitter");
    return xe(() => {
      const o = document.querySelector(".v-f-modal input");
      console.log(e.modalType !== "standalone"), o && o.focus();
    }), (o, a) => (_(), I("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: a[1] || (a[1] = lt((n) => k(s).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      yl,
      h("div", {
        class: ue(`${e.modalType !== "standalone" ? "fixed" : ""} z-10 inset-0 overflow-hidden`)
      }, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: a[0] || (a[0] = ze((n) => k(s).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", {
            class: ue(`${e.modalType !== "standalone" ? "custom-layout-regular" : "custom-layout-standalone"} custom-popup-layout transition-all`)
          }, [
            h("div", Sl, [
              Qt(o.$slots, "default")
            ]),
            h("div", wl, [
              Qt(o.$slots, "buttons")
            ])
          ], 2)
        ], 32)
      ], 2)
    ], 32));
  }
}, _l = ["aria-label"], xl = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Dl = [
  xl
], kl = {
  name: "Message"
}, Pe = /* @__PURE__ */ Object.assign(kl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var p;
    const { t: s } = P("i18n"), o = L(!1), a = L(null), n = L((p = a.value) == null ? void 0 : p.strMessage);
    at(n, () => o.value = !1);
    const d = () => {
      e("hidden"), o.value = !0;
    };
    return (l, v) => (_(), I("div", null, [
      o.value ? Y("", !0) : (_(), I("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ue(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": k(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Dl, 8, _l)
      ], 2))
    ]));
  }
}), Ml = { class: "sm:flex custom-new-folder-popup delete-modal-container" }, Il = { class: "custom-file-picker-title" }, Cl = { class: "file-picker-title-img" }, El = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), Tl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ll = /* @__PURE__ */ h("hr", null, null, -1), Al = { class: "mt-3 text-center create-folder-form custom-delete-modal" }, $l = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nl = { class: "mt-2" }, Ol = { class: "text-sm text-gray-500" }, jl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Pl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, zl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Rl = [
  zl
], Bl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Hl = [
  Vl
], Ul = { class: "ml-1.5" }, Zl = {
  name: "VFModalDelete"
}, Yl = /* @__PURE__ */ Object.assign(Zl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = L(e.selection.items), d = L(""), p = () => {
      let l = [], v = [];
      n.value.length && (n.value.forEach((g) => {
        g.type === "file" ? l.push(g) : g.type === "dir" && v.push(g);
      }), l.length > 0 && s.emit("custom-v-f-delete", {
        items: l
      }), v.length > 0 && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(
            v.map(({ path: g, type: b }) => ({ path: g, type: b }))
          )
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("Files deleted.") }), s.emit("delete-button", { files: v });
        },
        onError: (g) => {
          d.value = a(g.message);
        }
      }));
    };
    return (l, v) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (g) => k(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Ml, [
          h("div", Il, [
            h("div", Cl, [
              El,
              h("h3", Tl, E(k(a)("Delete files")), 1)
            ]),
            Ll
          ]),
          h("div", Al, [
            h("h3", $l, E(k(a)("Delete files")), 1),
            h("div", Nl, [
              h("p", Ol, E(k(a)("Are you sure you want to delete these files?")), 1),
              (_(!0), I(ne, null, ye(n.value, (g) => (_(), I("p", jl, [
                g.type == "dir" ? (_(), I("svg", Pl, Rl)) : (_(), I("svg", Bl, Hl)),
                h("span", Ul, E(g.basename), 1)
              ]))), 256)),
              d.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: v[0] || (v[0] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Fl = { class: "sm:flex sm:items-start" }, Wl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), Kl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Gl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xl = { class: "mt-2" }, ql = { class: "text-sm text-gray-500" }, Ql = {
  name: "VFModalMessage"
}, Jl = /* @__PURE__ */ Object.assign(Ql, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = P("emitter"), { t: s } = P("i18n");
    return (o, a) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => k(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(s)("Close")), 1)
      ]),
      default: G(() => {
        var n, d;
        return [
          h("div", Fl, [
            Wl,
            h("div", Kl, [
              h("h3", Gl, E(((n = r.selection) == null ? void 0 : n.title) ?? "Title"), 1),
              h("div", Xl, [
                h("p", ql, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), ec = { class: "sm:flex custom-new-folder-popup" }, tc = { class: "custom-file-picker-title" }, rc = { class: "file-picker-title-img" }, sc = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), oc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ic = /* @__PURE__ */ h("hr", null, null, -1), nc = { class: "mt-3 text-center w-full p-4 h-full" }, ac = { class: "mt-2 create-folder-form" }, lc = { class: "text-sm text-gray-500" }, cc = ["onKeyup", "placeholder"], uc = {
  name: "VFModalNewFolder"
}, dc = /* @__PURE__ */ Object.assign(uc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", {
            label: a("%s is created.", n.value)
          });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => k(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", ec, [
          h("div", tc, [
            h("div", rc, [
              sc,
              h("h3", oc, E(k(a)("New Folder")), 1)
            ]),
            ic
          ]),
          h("div", nc, [
            h("div", ac, [
              h("p", lc, E(k(a)("Create a new folder")), 1),
              Ae(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: lt(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: k(a)("Folder Name"),
                type: "text"
              }, null, 40, cc), [
                [ct, n.value]
              ]),
              d.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: v[1] || (v[1] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hc = { class: "sm:flex sm:items-start" }, fc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mc = { class: "mt-2" }, vc = { class: "text-sm text-gray-500" }, bc = ["onKeyup", "placeholder"], yc = {
  name: "VFModalNewFile"
}, Sc = /* @__PURE__ */ Object.assign(yc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is created.", n.value) });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => k(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", hc, [
          fc,
          h("div", pc, [
            h("h3", gc, E(k(a)("New File")), 1),
            h("div", mc, [
              h("p", vc, E(k(a)("Create a new file")), 1),
              Ae(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: lt(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: k(a)("File Name"),
                type: "text"
              }, null, 40, bc), [
                [ct, n.value]
              ]),
              d.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: v[1] || (v[1] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Bs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4wMSIgaGVpZ2h0PSIxMC4wMDkiIHZpZXdCb3g9IjAgMCAxMC4wMSAxMC4wMDkiPg0KDQo8cGF0aCBpZD0iUGF0aF8yMTQiIGRhdGEtbmFtZT0iUGF0aCAyMTQiIGQ9Ik0xMi4xNzQsMTFsMy41ODMtMy41NzVhLjgzNy44MzcsMCwxLDAtMS4xODMtMS4xODNMMTEsOS44MjQsNy40MjQsNi4yNDFBLjgzNy44MzcsMCwwLDAsNi4yNDEsNy40MjRMOS44MjQsMTEsNi4yNDEsMTQuNTc1YS44MzcuODM3LDAsMSwwLDEuMTgzLDEuMTgzTDExLDEyLjE3NWwzLjU3NSwzLjU4M2EuODM3LjgzNywwLDEsMCwxLjE4My0xLjE4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5NCAtNS45OTYpIiBmaWxsPSIjODA4ZDkzIi8+DQoNCjwvc3ZnPg==", Vs = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", wc = { class: "flex" }, _c = ["aria-label"], xc = { class: "ml-auto mb-2" }, Dc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, kc = { key: 1 }, Mc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, o = L(""), a = L(""), n = L(null), d = L(!1), { apiUrl: p } = Oe(), l = L(""), v = L(!1), { t: g } = P("i18n");
    xe(() => {
      Pt(p.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = o.value, d.value == !0 && Bt(() => {
        n.value.focus();
      });
    }, S = P("postData"), D = () => {
      l.value = "", v.value = !1, Pt(p.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((M) => {
        l.value = g("Updated."), o.value = M, e("load"), d.value = !d.value;
      }).catch((M) => {
        l.value = g(M.message), v.value = !0;
      });
    };
    return (M, $) => (_(), I(ne, null, [
      h("div", wc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, _c),
        h("div", xc, [
          d.value ? (_(), I("button", {
            key: 0,
            onClick: D,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(k(g)("Save")), 1)) : Y("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: $[0] || ($[0] = (N) => b())
          }, E(d.value ? k(g)("Cancel") : k(g)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (_(), I("div", kc, [
          Ae(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": $[1] || ($[1] = (N) => a.value = N),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ct, a.value]
          ])
        ])) : (_(), I("pre", Dc, E(o.value), 1)),
        l.value.length ? (_(), q(Pe, {
          key: 2,
          onHidden: $[2] || ($[2] = (N) => l.value = ""),
          error: v.value
        }, {
          default: G(() => [
            te(E(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Y("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
function Zr(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    e && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Hs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zr(Object(s), !0).forEach(function(o) {
      Ec(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Zr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function tr(r) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tr(r);
}
function Ic(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Cc(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ec(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function Us(r) {
  return Tc(r) || Lc(r) || Ac(r) || $c();
}
function Tc(r) {
  if (Array.isArray(r))
    return rr(r);
}
function Lc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Ac(r, e) {
  if (r) {
    if (typeof r == "string")
      return rr(r, e);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return rr(r, e);
  }
}
function rr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var s = 0, o = new Array(e); s < e; s++)
    o[s] = r[s];
  return o;
}
function $c() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Yt = typeof window < "u" && typeof window.document < "u", Ne = Yt ? window : {}, xr = Yt && Ne.document.documentElement ? "ontouchstart" in Ne.document.documentElement : !1, Dr = Yt ? "PointerEvent" in Ne : !1, J = "cropper", kr = "all", Zs = "crop", Ys = "move", Fs = "zoom", Ke = "e", Ge = "w", tt = "s", Ve = "n", mt = "ne", vt = "nw", bt = "se", yt = "sw", sr = "".concat(J, "-crop"), Fr = "".concat(J, "-disabled"), ge = "".concat(J, "-hidden"), Wr = "".concat(J, "-hide"), Nc = "".concat(J, "-invisible"), Rt = "".concat(J, "-modal"), or = "".concat(J, "-move"), _t = "".concat(J, "Action"), $t = "".concat(J, "Preview"), Mr = "crop", Ws = "move", Ks = "none", ir = "crop", nr = "cropend", ar = "cropmove", lr = "cropstart", Kr = "dblclick", Oc = xr ? "touchstart" : "mousedown", jc = xr ? "touchmove" : "mousemove", Pc = xr ? "touchend touchcancel" : "mouseup", Gr = Dr ? "pointerdown" : Oc, Xr = Dr ? "pointermove" : jc, qr = Dr ? "pointerup pointercancel" : Pc, Qr = "ready", Jr = "resize", es = "wheel", cr = "zoom", ts = "image/jpeg", zc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Rc = /^data:/, Bc = /^data:image\/jpeg;base64,/, Vc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Mr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Gs,
  minContainerHeight: Xs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Hc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Uc = Number.isNaN || Ne.isNaN;
function Z(r) {
  return typeof r == "number" && !Uc(r);
}
var ss = function(e) {
  return e > 0 && e < 1 / 0;
};
function Gt(r) {
  return typeof r > "u";
}
function qe(r) {
  return tr(r) === "object" && r !== null;
}
var Zc = Object.prototype.hasOwnProperty;
function rt(r) {
  if (!qe(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && Zc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function pe(r) {
  return typeof r == "function";
}
var Yc = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : Yc.call(r);
}
function oe(r, e) {
  return r && pe(e) && (Array.isArray(r) || Z(r.length) ? qs(r).forEach(function(s, o) {
    e.call(r, s, o, r);
  }) : qe(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var ee = Object.assign || function(e) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    o[a - 1] = arguments[a];
  return qe(e) && o.length > 0 && o.forEach(function(n) {
    qe(n) && Object.keys(n).forEach(function(d) {
      e[d] = n[d];
    });
  }), e;
}, Fc = /\.\d*(?:0|9){12}\d*$/;
function ot(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Fc.test(r) ? Math.round(r * e) / e : r;
}
var Wc = /^width|height|left|top|marginLeft|marginTop$/;
function He(r, e) {
  var s = r.style;
  oe(e, function(o, a) {
    Wc.test(a) && Z(o) && (o = "".concat(o, "px")), s[a] = o;
  });
}
function Kc(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function ce(r, e) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(o) {
        ce(o, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(e);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(e) < 0 && (r.className = "".concat(s, " ").concat(e)) : r.className = e;
  }
}
function $e(r, e) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(s) {
        $e(s, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(e);
      return;
    }
    r.className.indexOf(e) >= 0 && (r.className = r.className.replace(e, ""));
  }
}
function st(r, e, s) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(o) {
        st(o, e, s);
      });
      return;
    }
    s ? ce(r, e) : $e(r, e);
  }
}
var Gc = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(Gc, "$1-$2").toLowerCase();
}
function ur(r, e) {
  return qe(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Ir(e)));
}
function xt(r, e, s) {
  qe(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Ir(e)), s);
}
function Xc(r, e) {
  if (qe(r[e]))
    try {
      delete r[e];
    } catch {
      r[e] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[e];
    } catch {
      r.dataset[e] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Ir(e)));
}
var Qs = /\s\s*/, Js = function() {
  var r = !1;
  if (Yt) {
    var e = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(n) {
        e = n;
      }
    });
    Ne.addEventListener("test", s, o), Ne.removeEventListener("test", s, o);
  }
  return r;
}();
function Ie(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(Qs).forEach(function(n) {
    if (!Js) {
      var d = r.listeners;
      d && d[n] && d[n][s] && (a = d[n][s], delete d[n][s], Object.keys(d[n]).length === 0 && delete d[n], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, a, o);
  });
}
function _e(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(Qs).forEach(function(n) {
    if (o.once && !Js) {
      var d = r.listeners, p = d === void 0 ? {} : d;
      a = function() {
        delete p[n][s], r.removeEventListener(n, a, o);
        for (var v = arguments.length, g = new Array(v), b = 0; b < v; b++)
          g[b] = arguments[b];
        s.apply(r, g);
      }, p[n] || (p[n] = {}), p[n][s] && r.removeEventListener(n, p[n][s], o), p[n][s] = a, r.listeners = p;
    }
    r.addEventListener(n, a, o);
  });
}
function it(r, e, s) {
  var o;
  return pe(Event) && pe(CustomEvent) ? o = new CustomEvent(e, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, !0, !0, s)), r.dispatchEvent(o);
}
function eo(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Xt = Ne.location, qc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var e = r.match(qc);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function is(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function St(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, a = r.translateX, n = r.translateY, d = [];
  Z(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), Z(n) && n !== 0 && d.push("translateY(".concat(n, "px)")), Z(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Z(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Z(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var p = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: p,
    msTransform: p,
    transform: p
  };
}
function Qc(r) {
  var e = Hs({}, r), s = 0;
  return oe(r, function(o, a) {
    delete e[a], oe(e, function(n) {
      var d = Math.abs(o.startX - n.startX), p = Math.abs(o.startY - n.startY), l = Math.abs(o.endX - n.endX), v = Math.abs(o.endY - n.endY), g = Math.sqrt(d * d + p * p), b = Math.sqrt(l * l + v * v), S = (b - g) / g;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Nt(r, e) {
  var s = r.pageX, o = r.pageY, a = {
    endX: s,
    endY: o
  };
  return e ? a : Hs({
    startX: s,
    startY: o
  }, a);
}
function Jc(r) {
  var e = 0, s = 0, o = 0;
  return oe(r, function(a) {
    var n = a.startX, d = a.startY;
    e += n, s += d, o += 1;
  }), e /= o, s /= o, {
    pageX: e,
    pageY: s
  };
}
function Ue(r) {
  var e = r.aspectRatio, s = r.height, o = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = ss(o), d = ss(s);
  if (n && d) {
    var p = s * e;
    a === "contain" && p > o || a === "cover" && p < o ? s = o / e : o = s * e;
  } else
    n ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function eu(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var a = o % 90 * Math.PI / 180, n = Math.sin(a), d = Math.cos(a), p = e * d + s * n, l = e * n + s * d;
  return o > 90 ? {
    width: l,
    height: p
  } : {
    width: p,
    height: l
  };
}
function tu(r, e, s, o) {
  var a = e.aspectRatio, n = e.naturalWidth, d = e.naturalHeight, p = e.rotate, l = p === void 0 ? 0 : p, v = e.scaleX, g = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, D = s.aspectRatio, M = s.naturalWidth, $ = s.naturalHeight, N = o.fillColor, H = N === void 0 ? "transparent" : N, O = o.imageSmoothingEnabled, T = O === void 0 ? !0 : O, B = o.imageSmoothingQuality, K = B === void 0 ? "low" : B, w = o.maxWidth, j = w === void 0 ? 1 / 0 : w, X = o.maxHeight, re = X === void 0 ? 1 / 0 : X, Q = o.minWidth, he = Q === void 0 ? 0 : Q, Se = o.minHeight, ve = Se === void 0 ? 0 : Se, fe = document.createElement("canvas"), ae = fe.getContext("2d"), we = Ue({
    aspectRatio: D,
    width: j,
    height: re
  }), se = Ue({
    aspectRatio: D,
    width: he,
    height: ve
  }, "cover"), A = Math.min(we.width, Math.max(se.width, M)), R = Math.min(we.height, Math.max(se.height, $)), z = Ue({
    aspectRatio: a,
    width: j,
    height: re
  }), de = Ue({
    aspectRatio: a,
    width: he,
    height: ve
  }, "cover"), U = Math.min(z.width, Math.max(de.width, n)), De = Math.min(z.height, Math.max(de.height, d)), Ee = [-U / 2, -De / 2, U, De];
  return fe.width = ot(A), fe.height = ot(R), ae.fillStyle = H, ae.fillRect(0, 0, A, R), ae.save(), ae.translate(A / 2, R / 2), ae.rotate(l * Math.PI / 180), ae.scale(g, S), ae.imageSmoothingEnabled = T, ae.imageSmoothingQuality = K, ae.drawImage.apply(ae, [r].concat(Us(Ee.map(function(It) {
    return Math.floor(ot(It));
  })))), ae.restore(), fe;
}
var to = String.fromCharCode;
function ru(r, e, s) {
  var o = "";
  s += e;
  for (var a = e; a < s; a += 1)
    o += to(r.getUint8(a));
  return o;
}
var su = /^data:.*,/;
function ou(r) {
  var e = r.replace(su, ""), s = atob(e), o = new ArrayBuffer(s.length), a = new Uint8Array(o);
  return oe(a, function(n, d) {
    a[d] = s.charCodeAt(d);
  }), o;
}
function iu(r, e) {
  for (var s = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(to.apply(null, qs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function nu(r) {
  var e = new DataView(r), s;
  try {
    var o, a, n;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, p = 2; p + 1 < d; ) {
        if (e.getUint8(p) === 255 && e.getUint8(p + 1) === 225) {
          a = p;
          break;
        }
        p += 1;
      }
    if (a) {
      var l = a + 4, v = a + 10;
      if (ru(e, l, 4) === "Exif") {
        var g = e.getUint16(v);
        if (o = g === 18761, (o || g === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (n = v + b);
        }
      }
    }
    if (n) {
      var S = e.getUint16(n, o), D, M;
      for (M = 0; M < S; M += 1)
        if (D = n + M * 12 + 2, e.getUint16(D, o) === 274) {
          D += 8, s = e.getUint16(D, o), e.setUint16(D, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function au(r) {
  var e = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      e = 90, o = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, s = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: s,
    scaleY: o
  };
}
var lu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, a = this.cropper, n = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    ce(a, ge), $e(e, ge);
    var p = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Gs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = p, He(a, {
      width: p.width,
      height: p.height
    }), ce(e, ge), $e(a, ge);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, n = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, p = n / d, l = e.width, v = e.height;
    e.height * p > e.width ? o === 3 ? l = e.height * p : v = e.width / p : o === 3 ? v = e.width / p : l = e.height * p;
    var g = {
      aspectRatio: p,
      naturalWidth: n,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = g, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), g.width = Math.min(Math.max(g.width, g.minWidth), g.maxWidth), g.height = Math.min(Math.max(g.height, g.minHeight), g.maxHeight), g.left = (e.width - g.width) / 2, g.top = (e.height - g.height) / 2, g.oldLeft = g.left, g.oldTop = g.top, this.initialCanvasData = ee({}, g);
  },
  limitCanvas: function(e, s) {
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, p = o.viewMode, l = n.aspectRatio, v = this.cropped && d;
    if (e) {
      var g = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      p > 1 ? (g = Math.max(g, a.width), b = Math.max(b, a.height), p === 3 && (b * l > g ? g = b * l : b = g / l)) : p > 0 && (g ? g = Math.max(g, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (g = d.width, b = d.height, b * l > g ? g = b * l : b = g / l));
      var S = Ue({
        aspectRatio: l,
        width: g,
        height: b
      });
      g = S.width, b = S.height, n.minWidth = g, n.minHeight = b, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (s)
      if (p > (v ? 0 : 1)) {
        var D = a.width - n.width, M = a.height - n.height;
        n.minLeft = Math.min(0, D), n.minTop = Math.min(0, M), n.maxLeft = Math.max(0, D), n.maxTop = Math.max(0, M), v && this.limited && (n.minLeft = Math.min(d.left, d.left + (d.width - n.width)), n.minTop = Math.min(d.top, d.top + (d.height - n.height)), n.maxLeft = d.left, n.maxTop = d.top, p === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, D), n.maxLeft = Math.max(0, D)), n.height >= a.height && (n.minTop = Math.min(0, M), n.maxTop = Math.max(0, M))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, a = this.imageData;
    if (s) {
      var n = eu({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = n.width, p = n.height, l = o.width * (d / o.naturalWidth), v = o.height * (p / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / p, o.naturalWidth = d, o.naturalHeight = p, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, He(this.canvas, ee({
      width: o.width,
      height: o.height
    }, St({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, o = this.imageData, a = o.naturalWidth * (s.width / s.naturalWidth), n = o.naturalHeight * (s.height / s.naturalHeight);
    ee(o, {
      width: a,
      height: n,
      left: (s.width - a) / 2,
      top: (s.height - n) / 2
    }), He(this.image, ee({
      width: o.width,
      height: o.height
    }, St(ee({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, n = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? n.height = n.width / o : n.width = n.height * o), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = s.left + (s.width - n.width) / 2, n.top = s.top + (s.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = ee({}, n);
  },
  limitCropBox: function(e, s) {
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, p = this.limited, l = o.aspectRatio;
    if (e) {
      var v = Number(o.minCropBoxWidth) || 0, g = Number(o.minCropBoxHeight) || 0, b = p ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, S = p ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      v = Math.min(v, a.width), g = Math.min(g, a.height), l && (v && g ? g * l > v ? g = v / l : v = g * l : v ? g = v / l : g && (v = g * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(g, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (p ? (d.minLeft = Math.max(0, n.left), d.minTop = Math.max(0, n.top), d.maxLeft = Math.min(a.width, n.left + n.width) - d.width, d.maxTop = Math.min(a.height, n.top + n.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && xt(this.face, _t, o.width >= s.width && o.height >= s.height ? Ys : kr), He(this.cropBox, ee({
      width: o.width,
      height: o.height
    }, St({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), it(this.element, ir, this.getData());
  }
}, cu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, a = s ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = n, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var p = o;
      typeof o == "string" ? p = e.ownerDocument.querySelectorAll(o) : o.querySelector && (p = [o]), this.previews = p, oe(p, function(l) {
        var v = document.createElement("img");
        xt(l, $t, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = n, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    oe(this.previews, function(e) {
      var s = ur(e, $t);
      He(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, Xc(e, $t);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, d = e.width, p = e.height, l = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (He(this.viewBoxImage, ee({
      width: d,
      height: p
    }, St(ee({
      translateX: -l,
      translateY: -v
    }, e)))), oe(this.previews, function(g) {
      var b = ur(g, $t), S = b.width, D = b.height, M = S, $ = D, N = 1;
      a && (N = S / a, $ = n * N), n && $ > D && (N = D / n, M = a * N, $ = D), He(g, {
        width: M,
        height: $
      }), He(g.getElementsByTagName("img")[0], ee({
        width: d * N,
        height: p * N
      }, St(ee({
        translateX: -l * N,
        translateY: -v * N
      }, e))));
    }));
  }
}, uu = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    pe(s.cropstart) && _e(e, lr, s.cropstart), pe(s.cropmove) && _e(e, ar, s.cropmove), pe(s.cropend) && _e(e, nr, s.cropend), pe(s.crop) && _e(e, ir, s.crop), pe(s.zoom) && _e(e, cr, s.zoom), _e(o, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && _e(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && _e(o, Kr, this.onDblclick = this.dblclick.bind(this)), _e(e.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), _e(e.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && _e(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    pe(s.cropstart) && Ie(e, lr, s.cropstart), pe(s.cropmove) && Ie(e, ar, s.cropmove), pe(s.cropend) && Ie(e, nr, s.cropend), pe(s.crop) && Ie(e, ir, s.crop), pe(s.zoom) && Ie(e, cr, s.zoom), Ie(o, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && Ie(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Ie(o, Kr, this.onDblclick), Ie(e.ownerDocument, Xr, this.onCropMove), Ie(e.ownerDocument, qr, this.onCropEnd), s.responsive && Ie(window, Jr, this.onResize);
  }
}, du = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, a = s.offsetWidth / o.width, n = s.offsetHeight / o.height, d = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (d !== 1) {
        var p, l;
        e.restore && (p = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(oe(p, function(v, g) {
          p[g] = v * d;
        })), this.setCropBoxData(oe(l, function(v, g) {
          l[g] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(Kc(this.dragBox, sr) ? Ws : Mr);
  },
  wheel: function(e) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), e.deltaY ? a = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? a = -e.wheelDelta / 120 : e.detail && (a = e.detail > 0 ? 1 : -1), this.zoom(-a * o, e)));
  },
  cropStart: function(e) {
    var s = e.buttons, o = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (Z(s) && s !== 1 || Z(o) && o !== 0 || e.ctrlKey))) {
      var a = this.options, n = this.pointers, d;
      e.changedTouches ? oe(e.changedTouches, function(p) {
        n[p.identifier] = Nt(p);
      }) : n[e.pointerId || 0] = Nt(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? d = Fs : d = ur(e.target, _t), zc.test(d) && it(this.element, lr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Zs && (this.cropping = !0, ce(this.dragBox, Rt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), it(this.element, ar, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? oe(e.changedTouches, function(a) {
        ee(o[a.identifier] || {}, Nt(a, !0));
      }) : ee(o[e.pointerId || 0] || {}, Nt(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? oe(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, st(this.dragBox, Rt, this.cropped && this.options.modal)), it(this.element, nr, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, hu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, d = this.pointers, p = this.action, l = s.aspectRatio, v = n.left, g = n.top, b = n.width, S = n.height, D = v + b, M = g + S, $ = 0, N = 0, H = a.width, O = a.height, T = !0, B;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && ($ = n.minLeft, N = n.minTop, H = $ + Math.min(a.width, o.width, o.left + o.width), O = N + Math.min(a.height, o.height, o.top + o.height));
    var K = d[Object.keys(d)[0]], w = {
      x: K.endX - K.startX,
      y: K.endY - K.startY
    }, j = function(re) {
      switch (re) {
        case Ke:
          D + w.x > H && (w.x = H - D);
          break;
        case Ge:
          v + w.x < $ && (w.x = $ - v);
          break;
        case Ve:
          g + w.y < N && (w.y = N - g);
          break;
        case tt:
          M + w.y > O && (w.y = O - M);
          break;
      }
    };
    switch (p) {
      case kr:
        v += w.x, g += w.y;
        break;
      case Ke:
        if (w.x >= 0 && (D >= H || l && (g <= N || M >= O))) {
          T = !1;
          break;
        }
        j(Ke), b += w.x, b < 0 && (p = Ge, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case Ve:
        if (w.y <= 0 && (g <= N || l && (v <= $ || D >= H))) {
          T = !1;
          break;
        }
        j(Ve), S -= w.y, g += w.y, S < 0 && (p = tt, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case Ge:
        if (w.x <= 0 && (v <= $ || l && (g <= N || M >= O))) {
          T = !1;
          break;
        }
        j(Ge), b -= w.x, v += w.x, b < 0 && (p = Ke, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case tt:
        if (w.y >= 0 && (M >= O || l && (v <= $ || D >= H))) {
          T = !1;
          break;
        }
        j(tt), S += w.y, S < 0 && (p = Ve, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case mt:
        if (l) {
          if (w.y <= 0 && (g <= N || D >= H)) {
            T = !1;
            break;
          }
          j(Ve), S -= w.y, g += w.y, b = S * l;
        } else
          j(Ve), j(Ke), w.x >= 0 ? D < H ? b += w.x : w.y <= 0 && g <= N && (T = !1) : b += w.x, w.y <= 0 ? g > N && (S -= w.y, g += w.y) : (S -= w.y, g += w.y);
        b < 0 && S < 0 ? (p = yt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = vt, b = -b, v -= b) : S < 0 && (p = bt, S = -S, g -= S);
        break;
      case vt:
        if (l) {
          if (w.y <= 0 && (g <= N || v <= $)) {
            T = !1;
            break;
          }
          j(Ve), S -= w.y, g += w.y, b = S * l, v += n.width - b;
        } else
          j(Ve), j(Ge), w.x <= 0 ? v > $ ? (b -= w.x, v += w.x) : w.y <= 0 && g <= N && (T = !1) : (b -= w.x, v += w.x), w.y <= 0 ? g > N && (S -= w.y, g += w.y) : (S -= w.y, g += w.y);
        b < 0 && S < 0 ? (p = bt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = mt, b = -b, v -= b) : S < 0 && (p = yt, S = -S, g -= S);
        break;
      case yt:
        if (l) {
          if (w.x <= 0 && (v <= $ || M >= O)) {
            T = !1;
            break;
          }
          j(Ge), b -= w.x, v += w.x, S = b / l;
        } else
          j(tt), j(Ge), w.x <= 0 ? v > $ ? (b -= w.x, v += w.x) : w.y >= 0 && M >= O && (T = !1) : (b -= w.x, v += w.x), w.y >= 0 ? M < O && (S += w.y) : S += w.y;
        b < 0 && S < 0 ? (p = mt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = bt, b = -b, v -= b) : S < 0 && (p = vt, S = -S, g -= S);
        break;
      case bt:
        if (l) {
          if (w.x >= 0 && (D >= H || M >= O)) {
            T = !1;
            break;
          }
          j(Ke), b += w.x, S = b / l;
        } else
          j(tt), j(Ke), w.x >= 0 ? D < H ? b += w.x : w.y >= 0 && M >= O && (T = !1) : b += w.x, w.y >= 0 ? M < O && (S += w.y) : S += w.y;
        b < 0 && S < 0 ? (p = vt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = yt, b = -b, v -= b) : S < 0 && (p = mt, S = -S, g -= S);
        break;
      case Ys:
        this.move(w.x, w.y), T = !1;
        break;
      case Fs:
        this.zoom(Qc(d), e), T = !1;
        break;
      case Zs:
        if (!w.x || !w.y) {
          T = !1;
          break;
        }
        B = eo(this.cropper), v = K.startX - B.left, g = K.startY - B.top, b = n.minWidth, S = n.minHeight, w.x > 0 ? p = w.y > 0 ? bt : mt : w.x < 0 && (v -= b, p = w.y > 0 ? yt : vt), w.y < 0 && (g -= S), this.cropped || ($e(this.cropBox, ge), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    T && (n.width = b, n.height = S, n.left = v, n.top = g, this.action = p, this.renderCropBox()), oe(d, function(X) {
      X.startX = X.endX, X.startY = X.endY;
    });
  }
}, fu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ce(this.dragBox, Rt), $e(this.cropBox, ge), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = ee({}, this.initialImageData), this.canvasData = ee({}, this.initialCanvasData), this.cropBoxData = ee({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (ee(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $e(this.dragBox, Rt), ce(this.cropBox, ge)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, oe(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, $e(this.cropper, Fr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ce(this.cropper, Fr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var e = this.element;
    return e[J] ? (e[J] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = o.left, n = o.top;
    return this.moveTo(Gt(e) ? e : a + Number(e), Gt(s) ? s : n + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (Z(e) && (o.left = e, a = !0), Z(s) && (o.top = s, a = !0), a && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(e, s) {
    var o = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(o.width * e / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(e, s, o) {
    var a = this.options, n = this.canvasData, d = n.width, p = n.height, l = n.naturalWidth, v = n.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var g = l * e, b = v * e;
      if (it(this.element, cr, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, D = eo(this.cropper), M = S && Object.keys(S).length ? Jc(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (g - d) * ((M.pageX - D.left - n.left) / d), n.top -= (b - p) * ((M.pageY - D.top - n.top) / p);
      } else
        rt(s) && Z(s.x) && Z(s.y) ? (n.left -= (g - d) * ((s.x - n.left) / d), n.top -= (b - p) * ((s.y - n.top) / p)) : (n.left -= (g - d) / 2, n.top -= (b - p) / 2);
      n.width = g, n.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(e) {
    return e = Number(e), Z(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, Z(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(Z(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (Z(e) && (o.scaleX = e, a = !0), Z(s) && (o.scaleY = s, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, a = this.canvasData, n = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: n.left - a.left,
        y: n.top - a.top,
        width: n.width,
        height: n.height
      };
      var p = o.width / o.naturalWidth;
      if (oe(d, function(g, b) {
        d[b] = g / p;
      }), e) {
        var l = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = l - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = o.rotate || 0), s.scalable && (d.scaleX = o.scaleX || 1, d.scaleY = o.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(e) {
    var s = this.options, o = this.imageData, a = this.canvasData, n = {};
    if (this.ready && !this.disabled && rt(e)) {
      var d = !1;
      s.rotatable && Z(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, d = !0), s.scalable && (Z(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, d = !0), Z(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var p = o.width / o.naturalWidth;
      Z(e.x) && (n.left = e.x * p + a.left), Z(e.y) && (n.top = e.y * p + a.top), Z(e.width) && (n.width = e.width * p), Z(e.height) && (n.height = e.height * p), this.setCropBoxData(n);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? ee({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? ee({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var e = this.canvasData, s = {};
    return this.ready && oe(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = e[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(e) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && rt(e) && (Z(e.left) && (s.left = e.left), Z(e.top) && (s.top = e.top), Z(e.width) ? (s.width = e.width, s.height = e.width / o) : Z(e.height) && (s.height = e.height, s.width = e.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var e = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(e) {
    var s = this.cropBoxData, o = this.options.aspectRatio, a, n;
    return this.ready && this.cropped && !this.disabled && rt(e) && (Z(e.left) && (s.left = e.left), Z(e.top) && (s.top = e.top), Z(e.width) && e.width !== s.width && (a = !0, s.width = e.width), Z(e.height) && e.height !== s.height && (n = !0, s.height = e.height), o && (a ? s.height = s.width / o : n && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = tu(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, d = a.y, p = a.width, l = a.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (n *= v, d *= v, p *= v, l *= v);
    var g = p / l, b = Ue({
      aspectRatio: g,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Ue({
      aspectRatio: g,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), D = Ue({
      aspectRatio: g,
      width: e.width || (v !== 1 ? o.width : p),
      height: e.height || (v !== 1 ? o.height : l)
    }), M = D.width, $ = D.height;
    M = Math.min(b.width, Math.max(S.width, M)), $ = Math.min(b.height, Math.max(S.height, $));
    var N = document.createElement("canvas"), H = N.getContext("2d");
    N.width = ot(M), N.height = ot($), H.fillStyle = e.fillColor || "transparent", H.fillRect(0, 0, M, $);
    var O = e.imageSmoothingEnabled, T = O === void 0 ? !0 : O, B = e.imageSmoothingQuality;
    H.imageSmoothingEnabled = T, B && (H.imageSmoothingQuality = B);
    var K = o.width, w = o.height, j = n, X = d, re, Q, he, Se, ve, fe;
    j <= -p || j > K ? (j = 0, re = 0, he = 0, ve = 0) : j <= 0 ? (he = -j, j = 0, re = Math.min(K, p + j), ve = re) : j <= K && (he = 0, re = Math.min(p, K - j), ve = re), re <= 0 || X <= -l || X > w ? (X = 0, Q = 0, Se = 0, fe = 0) : X <= 0 ? (Se = -X, X = 0, Q = Math.min(w, l + X), fe = Q) : X <= w && (Se = 0, Q = Math.min(l, w - X), fe = Q);
    var ae = [j, X, re, Q];
    if (ve > 0 && fe > 0) {
      var we = M / p;
      ae.push(he * we, Se * we, ve * we, fe * we);
    }
    return H.drawImage.apply(H, [o].concat(Us(ae.map(function(se) {
      return Math.floor(ot(se));
    })))), N;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(e) {
    var s = this.options;
    return !this.disabled && !Gt(e) && (s.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(e) {
    var s = this.options, o = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var n = e === Mr, d = s.movable && e === Ws;
      e = n || d ? e : Ks, s.dragMode = e, xt(o, _t, e), st(o, sr, n), st(o, or, d), s.cropBoxMovable || (xt(a, _t, e), st(a, sr, n), st(a, or, d));
    }
    return this;
  }
}, pu = Ne.Cropper, ro = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Ic(this, r), !e || !Vc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = ee({}, rs, rt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Cc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), a;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, a = s.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (a = s.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var a = this.element, n = this.options;
        if (!n.rotatable && !n.scalable && (n.checkOrientation = !1), !n.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Rc.test(s)) {
          Bc.test(s) ? this.read(ou(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), p = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = p, d.onerror = p, d.ontimeout = p, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, n.checkCrossOrigin && os(s) && a.crossOrigin && (s = is(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = a.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, a = this.imageData, n = nu(s), d = 0, p = 1, l = 1;
      if (n > 1) {
        this.url = iu(s, ts);
        var v = au(n);
        d = v.rotate, p = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (a.rotate = d), o.scalable && (a.scaleX = p, a.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, a = s.crossOrigin, n = o;
      this.options.checkCrossOrigin && os(o) && (a || (a = "anonymous"), n = is(o)), this.crossOrigin = a, this.crossOriginUrl = n;
      var d = document.createElement("img");
      a && (d.crossOrigin = a), d.src = n || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), ce(d, Wr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Ne.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ne.navigator.userAgent), n = function(v, g) {
        ee(s.imageData, {
          naturalWidth: v,
          naturalHeight: g,
          aspectRatio: v / g
        }), s.initialImageData = ee({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !a) {
        n(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), p = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        n(d.width, d.height), a || p.removeChild(d);
      }, d.src = o.src, a || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", p.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, a = this.image, n = s.parentNode, d = document.createElement("div");
        d.innerHTML = Hc;
        var p = d.querySelector(".".concat(J, "-container")), l = p.querySelector(".".concat(J, "-canvas")), v = p.querySelector(".".concat(J, "-drag-box")), g = p.querySelector(".".concat(J, "-crop-box")), b = g.querySelector(".".concat(J, "-face"));
        this.container = n, this.cropper = p, this.canvas = l, this.dragBox = v, this.cropBox = g, this.viewBox = p.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), ce(s, ge), n.insertBefore(p, s.nextSibling), $e(a, Wr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, ce(g, ge), o.guides || ce(g.getElementsByClassName("".concat(J, "-dashed")), ge), o.center || ce(g.getElementsByClassName("".concat(J, "-center")), ge), o.background && ce(p, "".concat(J, "-bg")), o.highlight || ce(b, Nc), o.cropBoxMovable && (ce(b, or), xt(b, _t, kr)), o.cropBoxResizable || (ce(g.getElementsByClassName("".concat(J, "-line")), ge), ce(g.getElementsByClassName("".concat(J, "-point")), ge)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), pe(o.ready) && _e(s, Qr, o.ready, {
          once: !0
        }), it(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), $e(this.element, ge);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = pu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      ee(rs, rt(s) && s);
    }
  }]), r;
}();
ee(ro.prototype, lu, cu, uu, du, hu, fu);
const gu = { class: "flex" }, mu = ["aria-label"], vu = { class: "ml-auto mb-2" }, bu = { class: "w-full flex justify-center" }, yu = ["src"], Su = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: a } = Oe(), n = L(null), d = L(null), p = L(!1), l = L(""), v = L(!1), g = () => {
      p.value = !p.value, p.value ? d.value = new ro(n.value, {
        crop(D) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((D) => {
        l.value = "", v.value = !1, Pt(a.value, {
          method: "POST",
          params: Object.assign(b, {
            q: "upload",
            adapter: s.selection.adapter,
            path: s.selection.item.path,
            file: D
          }),
          name: s.selection.item.basename,
          json: !1
        }).then((M) => {
          l.value = o("Updated."), n.value.src = zr(
            s.selection.adapter,
            s.selection.item.path
          ), g(), e("load");
        }).catch((M) => {
          l.value = o(M.message), v.value = !0;
        });
      });
    };
    return xe(() => {
      e("load");
    }), (D, M) => (_(), I(ne, null, [
      h("div", gu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, mu),
        h("div", vu, [
          p.value ? (_(), I("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(k(o)("Crop")), 1)) : Y("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: M[0] || (M[0] = ($) => g())
          }, E(p.value ? k(o)("Cancel") : k(o)("Edit")), 1)
        ])
      ]),
      h("div", bu, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: k(zr)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, yu)
      ]),
      l.value.length ? (_(), q(Pe, {
        key: 0,
        onHidden: M[1] || (M[1] = ($) => l.value = ""),
        error: v.value
      }, {
        default: G(() => [
          te(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Y("", !0)
    ], 64));
  }
}, wu = { class: "flex" }, _u = ["aria-label"], xu = /* @__PURE__ */ h("div", null, null, -1), Du = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return xe(() => {
      e("load");
    }), (s, o) => (_(), I(ne, null, [
      h("div", wu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, _u)
      ]),
      xu
    ], 64));
  }
}, ku = ["aria-label"], Mu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Iu = ["src"], Cu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Oe(), a = () => o.value + "?" + Qe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return xe(() => {
      e("load");
    }), (n, d) => (_(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, ku),
      h("div", null, [
        h("video", Mu, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Iu),
          te(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Eu = ["aria-label"], Tu = {
  class: "w-full",
  controls: ""
}, Lu = ["src"], Au = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Oe(), a = () => o.value + "?" + Qe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return xe(() => {
      e("load");
    }), (n, d) => (_(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Eu),
      h("div", null, [
        h("audio", Tu, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Lu),
          te(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, $u = ["aria-label"], Nu = ["data"], Ou = ["src"], ju = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Oe(), a = () => o.value + "?" + Qe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return xe(() => {
      e("load");
    }), (n, d) => (_(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, $u),
      h("div", null, [
        h("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          h("iframe", {
            class: "border-0",
            src: a(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, Ou)
        ], 8, Nu)
      ])
    ], 64));
  }
}, Pu = { class: "sm:flex custom-new-folder-popup edit-preview-container" }, zu = { class: "custom-file-picker-title" }, Ru = { class: "file-picker-title-img" }, Bu = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), Vu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Hu = /* @__PURE__ */ h("hr", null, null, -1), Uu = { class: "mt-3 text-center w-full p-4 h-full create-folder-form edit-preview" }, Zu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Yu = {
  key: 0,
  class: "flex leading-5"
}, Fu = /* @__PURE__ */ h("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ h("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Wu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Ku = { class: "font-bold pl-2" }, Gu = { class: "font-bold pl-2" }, Xu = { class: "search-terms-div-preview bg-white dark:bg-gray-800" }, qu = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("label", {
    class: "custom-uploader-label",
    for: "img-upload-rte-search-terms"
  }, [
    /* @__PURE__ */ h("div", { class: "post-info icon-circle search-icon" }, [
      /* @__PURE__ */ h("img", {
        class: "router-img-btn-img",
        src: Rs,
        alt: "",
        srcset: ""
      })
    ]),
    /* @__PURE__ */ te(" Search Terms")
  ])
], -1), Qu = /* @__PURE__ */ h("hr", null, null, -1), Ju = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), ed = { id: "tags-space" }, td = ["onClick"], rd = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("label", {
      class: "custom-uploader-label",
      for: "img-upload-rte-captions"
    }, [
      /* @__PURE__ */ h("div", { class: "post-info icon-circle details-icon" }, [
        /* @__PURE__ */ h("img", {
          class: "router-img-btn-img",
          src: Vs,
          alt: "",
          srcset: ""
        })
      ]),
      /* @__PURE__ */ te(" File Details")
    ])
  ]),
  /* @__PURE__ */ h("hr"),
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("input", {
      id: "details-file-picker",
      class: "form-control user-dynamic-input address-autocomplete",
      type: "text",
      placeholder: "Details",
      autocomplete: "off"
    })
  ])
], -1), sd = { class: "bg-white custom-file-picker-action" }, od = {
  name: "VFModalPreview"
}, id = /* @__PURE__ */ Object.assign(od, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Oe(), o = P("emitter"), { t: a } = P("i18n"), n = L(!1), d = (S) => n.value = S;
    let p = L([]);
    xe(() => {
      g();
    });
    const l = (S) => (e.selection.item.mime_type ?? "").startsWith(S), v = () => {
      const S = s.value + "?" + Qe({
        q: "download",
        adapter: e.selection.adapter,
        path: e.selection.item.path
      });
      o.emit("vf-download", S);
    };
    function g() {
      let S = document.querySelector("#search-terms-file-picker");
      S.addEventListener("keypress", (D) => {
        D.key === "Enter" && (p.value.push({
          tag_id: p.value.length + 1,
          tag_name: D.target.value
        }), S.value = "");
      });
    }
    function b(S) {
      const D = p.value.findIndex((M) => M.tag_id === S);
      p.value.splice(D, 1);
    }
    return (S, D) => (_(), q(je, null, {
      buttons: G(() => [
        h("div", Xu, [
          qu,
          Qu,
          Ju,
          h("div", ed, [
            (_(!0), I(ne, null, ye(k(p), (M) => (_(), I("span", {
              key: M.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: ($) => b(M.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, td),
              h("p", null, E(M.tag_name), 1)
            ]))), 128))
          ])
        ]),
        rd,
        h("div", sd, [
          h("button", {
            type: "button",
            onClick: D[6] || (D[6] = (M) => k(o).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(k(a)("Close")), 1),
          h("button", {
            type: "button",
            onClick: D[7] || (D[7] = (M) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(k(a)("Download")), 1)
        ])
      ]),
      default: G(() => [
        h("div", Pu, [
          h("div", zu, [
            h("div", Ru, [
              Bu,
              h("h3", Vu, E(k(a)("Edit")), 1)
            ]),
            Hu
          ]),
          h("div", Uu, [
            h("div", null, [
              l("text") ? (_(), q(Mc, {
                key: 0,
                selection: r.selection,
                onLoad: D[0] || (D[0] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (_(), q(Su, {
                key: 1,
                selection: r.selection,
                onLoad: D[1] || (D[1] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (_(), q(Cu, {
                key: 2,
                selection: r.selection,
                onLoad: D[2] || (D[2] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (_(), q(Au, {
                key: 3,
                selection: r.selection,
                onLoad: D[3] || (D[3] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (_(), q(ju, {
                key: 4,
                selection: r.selection,
                onLoad: D[4] || (D[4] = (M) => d(!0))
              }, null, 8, ["selection"])) : (_(), q(Du, {
                key: 5,
                selection: r.selection,
                onLoad: D[5] || (D[5] = (M) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Zu, [
              n.value == !1 ? (_(), I("div", Yu, [
                Fu,
                h("span", null, E(k(a)("Loading")), 1)
              ])) : Y("", !0)
            ])
          ])
        ]),
        h("div", Wu, [
          h("div", null, [
            h("span", Ku, E(k(a)("File Size")) + ": ", 1),
            te(E(k(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Gu, E(k(a)("Last Modified")) + ": ", 1),
            te(" " + E(k(us)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nd = { class: "sm:flex custom-new-folder-popup" }, ad = { class: "custom-file-picker-title" }, ld = { class: "file-picker-title-img" }, cd = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), ud = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, dd = /* @__PURE__ */ h("hr", null, null, -1), hd = { class: "mt-3 text-center w-full p-4 h-full" }, fd = { class: "mt-2 create-folder-form" }, pd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, gd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, md = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), vd = [
  md
], bd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, yd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Sd = [
  yd
], wd = { class: "ml-1.5" }, _d = ["onKeyup"], xd = {
  name: "VFModalRename"
}, Dd = /* @__PURE__ */ Object.assign(xd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = L(e.selection.items[0]), d = L(e.selection.items[0].basename), p = L(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", {
            label: a("%s is renamed.", d.value)
          });
        },
        onError: (v) => {
          p.value = a(v.message);
        }
      });
    };
    return (v, g) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => k(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", nd, [
          h("div", ad, [
            h("div", ld, [
              cd,
              h("h3", ud, E(k(a)("Rename")), 1)
            ]),
            dd
          ]),
          h("div", hd, [
            h("div", fd, [
              h("p", pd, [
                n.value.type == "dir" ? (_(), I("svg", gd, vd)) : (_(), I("svg", bd, Sd)),
                h("span", wd, E(n.value.basename), 1)
              ]),
              Ae(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => d.value = b),
                onKeyup: lt(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, _d), [
                [ct, d.value]
              ]),
              p.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: g[1] || (g[1] = (b) => p.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(p.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), kd = { class: "flex flex-col h-full items-center" }, Md = { class: "custom-file-picker-title" }, Id = { class: "file-picker-title-img" }, Cd = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), Ed = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Td = /* @__PURE__ */ h("hr", null, null, -1), Ld = { class: "mt-3 text-center custom-file-picker-body" }, Ad = { class: "mt-2" }, $d = { class: "text-gray-500 mb-1" }, Nd = ["id"], Od = {
  key: 0,
  class: "py-2"
}, jd = { class: "search-terms-div bg-white dark:bg-gray-800" }, Pd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("label", {
    class: "custom-uploader-label",
    for: "img-upload-rte-search-terms"
  }, [
    /* @__PURE__ */ h("div", { class: "post-info icon-circle search-icon" }, [
      /* @__PURE__ */ h("img", {
        class: "router-img-btn-img",
        src: Rs,
        alt: "",
        srcset: ""
      })
    ]),
    /* @__PURE__ */ te(" Search Terms")
  ])
], -1), zd = /* @__PURE__ */ h("hr", null, null, -1), Rd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), Bd = { id: "tags-space" }, Vd = ["onClick"], Hd = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("label", {
      class: "custom-uploader-label",
      for: "img-upload-rte-captions"
    }, [
      /* @__PURE__ */ h("div", { class: "post-info icon-circle details-icon" }, [
        /* @__PURE__ */ h("img", {
          class: "router-img-btn-img",
          src: Vs,
          alt: "",
          srcset: ""
        })
      ]),
      /* @__PURE__ */ te(" File Details")
    ])
  ]),
  /* @__PURE__ */ h("hr"),
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("input", {
      id: "details-file-picker",
      class: "form-control user-dynamic-input address-autocomplete",
      type: "text",
      placeholder: "Details",
      autocomplete: "off"
    })
  ])
], -1), Ud = { class: "bg-white custom-file-picker-action" }, Zd = ["disabled", "onClick"], Yd = {
  name: "VFModalUpload"
}, Fd = /* @__PURE__ */ Object.assign(Yd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { apiUrl: o } = Oe(), { t: a } = P("i18n"), n = P("maxFileSize"), d = L(null), p = L(null), l = L(null), v = L([]), g = L("");
    let b = L([]);
    const S = L(!0), D = () => {
      g.value = "", d.value.start();
    }, M = P("postData");
    xe(() => {
      d.value = new gt.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: p.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Qe(
          Object.assign(M, {
            q: "upload",
            adapter: e.current.adapter,
            path: e.current.dirname
          })
        ),
        headers: {
          ...jt && { "X-CSRF-Token": jt }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(H, O) {
            S.value = !1, gt.each(O, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: gt.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(H, O) {
            v.value[v.value.findIndex((T) => T.id == O.id)].percent = O.percent + "%";
          },
          UploadComplete: function() {
            S.value = !0, s.emit("vf-fetch", {
              params: {
                q: "index",
                adapter: e.current.adapter,
                path: e.current.dirname
              }
            });
          },
          Error: function(H, O) {
            d.value.stop(), O.code == gt.HTTP_ERROR ? g.value = a(JSON.parse(O.response).message) : O.code == gt.FILE_SIZE_ERROR ? g.value = a(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [n]
            ) : g.value = a(O.message);
          }
        }
      }), d.value.init(), $();
    });
    function $() {
      let H = document.querySelector("#search-terms-file-picker");
      H.addEventListener("keypress", (O) => {
        O.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: O.target.value
        }), H.value = "");
      });
    }
    function N(H) {
      const O = b.value.findIndex((T) => T.tag_id === H);
      b.value.splice(O, 1);
    }
    return (H, O) => (_(), q(je, null, {
      buttons: G(() => [
        h("div", jd, [
          Pd,
          zd,
          Rd,
          h("div", Bd, [
            (_(!0), I(ne, null, ye(k(b), (T) => (_(), I("span", {
              key: T.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (B) => N(T.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, Vd),
              h("p", null, E(T.tag_name), 1)
            ]))), 128))
          ])
        ]),
        Hd,
        h("div", Ud, [
          h("button", {
            disabled: S.value,
            onClick: ze(D, ["prevent"]),
            type: "button",
            class: ue([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, E(k(a)("Upload")), 11, Zd),
          h("button", {
            type: "button",
            onClick: O[1] || (O[1] = (T) => k(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(k(a)("Cancel")), 1)
        ])
      ]),
      default: G(() => [
        h("div", kd, [
          h("div", Md, [
            h("div", Id, [
              Cd,
              h("h3", Ed, E(k(a)("Upload files")), 1)
            ]),
            Td
          ]),
          h("div", Ld, [
            h("div", Ad, [
              h("div", $d, [
                (_(!0), I(ne, null, ye(v.value, (T) => (_(), I("div", null, [
                  h("div", {
                    id: T.id
                  }, [
                    te(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    h("b", null, E(T.percent), 1)
                  ], 8, Nd)
                ]))), 256)),
                v.value.length ? Y("", !0) : (_(), I("div", Od, E(k(a)("No files selected!")), 1))
              ]),
              h("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: p
              }, [
                h("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(k(a)("Select Files")), 513)
              ], 512),
              g.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: O[0] || (O[0] = (T) => g.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(g.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Wd = { class: "sm:flex custom-new-folder-popup" }, Kd = { class: "custom-file-picker-title" }, Gd = { class: "file-picker-title-img" }, Xd = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1), qd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Qd = /* @__PURE__ */ h("hr", null, null, -1), Jd = { class: "mt-3 text-center w-full p-4 h-full" }, eh = { class: "mt-2 create-folder-form" }, th = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, rh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, sh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), oh = [
  sh
], ih = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, nh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ah = [
  nh
], lh = { class: "ml-1.5" }, ch = ["onKeyup", "placeholder"], uh = {
  name: "VFModalArchive"
}, dh = /* @__PURE__ */ Object.assign(uh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = L(e.selection.items), l = () => {
      p.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(
            p.value.map(({ path: v, type: g }) => ({ path: v, type: g }))
          ),
          name: n.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, g) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => k(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Wd, [
          h("div", Kd, [
            h("div", Gd, [
              Xd,
              h("h3", qd, E(k(a)("Archive the files")), 1)
            ]),
            Qd
          ]),
          h("div", Jd, [
            h("div", eh, [
              (_(!0), I(ne, null, ye(p.value, (b) => (_(), I("p", th, [
                b.type == "dir" ? (_(), I("svg", rh, oh)) : (_(), I("svg", ih, ah)),
                h("span", lh, E(b.basename), 1)
              ]))), 256)),
              Ae(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => n.value = b),
                onKeyup: lt(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: k(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, ch), [
                [ct, n.value]
              ]),
              d.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: g[1] || (g[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hh = { class: "sm:flex sm:items-start" }, fh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), ph = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mh = { class: "mt-2" }, vh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, bh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, yh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Sh = [
  yh
], wh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _h = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), xh = [
  _h
], Dh = { class: "ml-1.5" }, kh = { class: "my-1 text-sm text-gray-500" }, Mh = {
  name: "VFModalUnarchive"
}, Ih = /* @__PURE__ */ Object.assign(Mh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n");
    L("");
    const n = L(e.selection.items[0]), d = L(""), p = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, g) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: g[1] || (g[1] = (b) => k(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", hh, [
          fh,
          h("div", ph, [
            h("h3", gh, E(k(a)("Unarchive")), 1),
            h("div", mh, [
              (_(!0), I(ne, null, ye(p.value, (b) => (_(), I("p", vh, [
                b.type == "dir" ? (_(), I("svg", bh, Sh)) : (_(), I("svg", wh, xh)),
                h("span", Dh, E(b.basename), 1)
              ]))), 256)),
              h("p", kh, E(k(a)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: g[0] || (g[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ch = { class: "sm:flex sm:items-start" }, Eh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), Th = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Lh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ah = { class: "mt-2" }, $h = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Nh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Oh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), jh = [
  Oh
], Ph = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, zh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Rh = [
  zh
], Bh = { class: "ml-1.5" }, Vh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Hh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Uh = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Zh = { class: "ml-1.5 overflow-auto" }, Yh = {
  name: "VFModalMove"
}, Fh = /* @__PURE__ */ Object.assign(Yh, {
  props: {
    selection: Object,
    current: Object,
    movePromptProp: Boolean,
    movedItemsProp: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const a = P("adapter");
    let n = L(e.movedItemsProp);
    const d = L(e.selection.items.from), p = L("");
    let l = [];
    const v = () => {
      if (d.value.length) {
        for (const b of d.value)
          b.type === "file" && l.push(b);
        s.emit("custom-v-f-move", {
          from: e.current.dirname,
          to: e.selection.items.to.path,
          items: l
        }), console.log({
          initial: d.value,
          resulting: l
        });
      }
    }, g = (b) => {
      console.log(b), s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: e.current.dirname,
          items: JSON.stringify(b.map(({ path: S, type: D }) => ({ path: S, type: D }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: e.current.dirname,
            to: e.selection.items.to.path,
            files: b.map(({ path: S, type: D }) => ({ path: S, type: D }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (S) => {
          p.value = o(S.message);
        }
      });
    };
    return at(() => {
      n.value = e.movedItemsProp, n.value.length > 0 && g(n.value);
    }, {
      immediate: !1
    }), (b, S) => (_(), q(je, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: S[1] || (S[1] = (D) => k(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(k(o)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Ch, [
          Eh,
          h("div", Th, [
            h("h3", Lh, E(k(o)("Move files")), 1),
            h("div", Ah, [
              (_(!0), I(ne, null, ye(d.value, (D) => (_(), I("p", $h, [
                D.type == "dir" ? (_(), I("svg", Nh, jh)) : (_(), I("svg", Ph, Rh)),
                h("span", Bh, E(D.path), 1)
              ]))), 256)),
              h("p", Vh, E(k(o)("Are you sure you want to move these files?")), 1),
              h("p", Hh, [
                Uh,
                h("span", Zh, E(r.selection.items.to.path), 1)
              ]),
              p.value.length ? (_(), q(Pe, {
                key: 0,
                onHidden: S[0] || (S[0] = (D) => p.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(p.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: dh,
  ModalDelete: Yl,
  ModalMessage: Jl,
  ModalMove: Fh,
  ModalNewFile: Sc,
  ModalNewFolder: dc,
  ModalPreview: id,
  ModalRename: Dd,
  ModalUnarchive: Ih,
  ModalUpload: Fd
}, Symbol.toStringTag, { value: "Module" })), qt = {
  VueFinder: bl,
  ...Wh
};
const Xh = {
  install(r) {
    for (const e in qt)
      if (qt.hasOwnProperty(e)) {
        const s = qt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Xh as default
};
