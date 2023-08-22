import { ref as L, watch as ot, inject as z, openBlock as w, createElementBlock as I, unref as D, createCommentVNode as Y, normalizeClass as ce, createElementVNode as h, createTextVNode as te, toDisplayString as E, createVNode as Me, TransitionGroup as Oo, withCtx as G, Fragment as ne, renderList as ve, reactive as Nt, onMounted as we, onUpdated as jo, withDirectives as Ee, vShow as Tt, withModifiers as We, nextTick as Rt, customRef as Po, withKeys as it, isRef as zo, vModelText as nt, normalizeStyle as as, provide as Ue, createBlock as q, resolveDynamicComponent as Ro, renderSlot as Qt } from "vue";
import ht from "plupload";
var ns;
const Ot = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), jt = (r, { method: e = "get", params: s = {}, json: o = !0, signal: a = null }) => {
  const n = { method: e };
  if (n.signal = a, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    n.headers = {}, Ot && (n.headers["X-CSRF-Token"] = Ot);
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
  ot(s, o);
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
const zr = L("");
function Ae() {
  function r(e) {
    zr.value = e;
  }
  return { apiUrl: zr, setApiUrl: r };
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
], Wo = ["aria-label"], Fo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Ko = [
  Fo
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
    const e = r, s = z("emitter"), { getStore: o, setStore: a } = z("storage"), { t: n } = z("i18n"), d = L(o("viewport", "grid")), p = L([]), l = L(o("full-screen", !1)), v = L("");
    s.on("vf-search-query", ({ newQuery: k }) => {
      v.value = k;
    });
    const g = z("loadingState"), b = () => g.value, S = () => {
      l.value = !l.value, s.emit("vf-fullscreen-toggle");
    };
    return s.on("vf-nodes-selected", (k) => {
      p.value = k;
    }), s.on("vf-view-toggle", (k) => {
      a("viewport", k), d.value = k;
    }), (k, M) => (w(), I("div", Vo, [
      v.value.length ? (w(), I("div", Jo, [
        h("div", ei, [
          te(E(D(n)("Search results for")) + " ", 1),
          h("span", ti, E(v.value), 1)
        ]),
        b() ? (w(), I("svg", ri, ii)) : Y("", !0)
      ])) : (w(), I("div", Ho, [
        e.type !== "standalone" ? (w(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": D(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = ($) => D(s).emit("vf-modal-show", {
            type: "new-folder",
            items: p.value
          }))
        }, Yo, 8, Uo)) : Y("", !0),
        e.type !== "standalone" ? (w(), I("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": D(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = ($) => !p.value.length || D(s).emit("vf-modal-show", { type: "delete", items: p.value }))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([
              p.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ko, 2))
        ], 8, Wo)) : Y("", !0),
        h("div", {
          class: ce(`mx-1.5 absolute ${e.type == "standalone" ? "standalone-upload-button-div" : "custom-upload-button-div"}`),
          "aria-label": D(n)("Upload"),
          "data-microtip-position": "bottom",
          onClick: M[2] || (M[2] = ($) => D(s).emit("custom-modal-show", {
            type: "upload",
            items: p.value
          }))
        }, [
          h("a", {
            type: "button",
            class: ce(`${e.type == "standalone" ? "standalone-upload-button" : "custom-upload-button"}`)
          }, "Upload", 2)
        ], 10, Go),
        p.value.length == 1 && p.value[0].mime_type == "application/zip" ? (w(), I("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": D(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = ($) => !p.value.length || D(s).emit("vf-modal-show", {
            type: "unarchive",
            items: p.value
          }))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([
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
          "aria-label": D(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), I("svg", {
            onClick: M[4] || (M[4] = ($) => D(s).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, ci))
        ], 8, ai),
        h("div", {
          class: "mx-1.5",
          "aria-label": D(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: S
        }, [
          (w(), I("svg", di, [
            l.value ? (w(), I("path", hi)) : (w(), I("path", fi))
          ]))
        ], 8, ui),
        e.type !== "standalone" ? (w(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": D(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[5] || (M[5] = ($) => v.value.length || D(s).emit("vf-view-toggle", d.value == "list" ? "grid" : "list"))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([
              v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            d.value == "grid" ? (w(), I("path", gi)) : Y("", !0),
            d.value == "list" ? (w(), I("path", mi)) : Y("", !0)
          ], 2))
        ], 8, pi)) : Y("", !0)
      ])
    ]));
  }
}), hr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
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
        } catch (F) {
          V = !0, i = F;
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
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, R(m.key), m);
      }
    }
    function p(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
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
    function k(c, u, t) {
      return S() ? k = Reflect.construct.bind() : k = function(i, f, y) {
        var x = [null];
        x.push.apply(x, f);
        var C = Function.bind.apply(i, x), V = new C();
        return y && b(V, y.prototype), V;
      }, k.apply(null, arguments);
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
          return k(m, arguments, g(this).constructor);
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
    function j(c) {
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
      return X(c) || s(c, u) || Q(c, u) || pe();
    }
    function _(c) {
      return P(c) || se(c) || Q(c) || be();
    }
    function P(c) {
      if (Array.isArray(c))
        return ue(c);
    }
    function X(c) {
      if (Array.isArray(c))
        return c;
    }
    function se(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function Q(c, u) {
      if (c) {
        if (typeof c == "string")
          return ue(c, u);
        var t = Object.prototype.toString.call(c).slice(8, -1);
        if (t === "Object" && c.constructor && (t = c.constructor.name), t === "Map" || t === "Set")
          return Array.from(c);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return ue(c, u);
      }
    }
    function ue(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var t = 0, m = new Array(u); t < u; t++)
        m[t] = c[t];
      return m;
    }
    function be() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pe() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ge(c, u) {
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
    function A(c, u) {
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
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, t, m) {
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
    }, re = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: t,
        height: t
      };
    }, _e = function(u) {
      return {
        x: u,
        y: u
      };
    }, ye = function(c, u) {
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
    }, Dt = function(c) {
      var u = It(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, kt = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Yt = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Mt = function(c, u) {
      var t;
      return function() {
        for (var m = arguments.length, i = new Array(m), f = 0; f < m; f++)
          i[f] = arguments[f];
        var y = function() {
          t = null, c.apply(void 0, i);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Wt = function() {
      var c, u, t, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Er = function(c) {
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
    }, Tr = function(c, u) {
      var t = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return je(c).forEach(function(m) {
        var i = u.getRect(m);
        t.top = Math.min(t.top, i.top), t.left = Math.min(t.left, i.left), t.bottom = Math.max(t.bottom, i.bottom), t.right = Math.max(t.right, i.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, It = function(c) {
      return !c || c instanceof Document ? Wt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Wt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Wt().y
      };
    }, Lr = function(c) {
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
    }, Ar = function(u) {
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
        return Ar(u);
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
      return !m.x && !m.x ? Ar(u) : m;
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
      t.includes("top") && ct(u, {
        y: f.y + i.top - m.top,
        x: f.x
      }, y), t.includes("left") && ct(u, {
        y: f.y,
        x: f.x + i.left - m.left
      }, y), t.includes("bottom") && ct(u, {
        y: f.y + i.bottom - m.bottom,
        x: f.x
      }, y), t.includes("right") && ct(u, {
        y: f.y,
        x: f.x + i.right - m.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, t = c.node, m = u.position, i = m === "absolute" || m === "relative" || m === "fixed";
      !(t instanceof Document) && !i && (t.style.position = "relative");
    }, uo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, m = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, x = c.canScroll, C = c.scrollCallback, V = {
        x: 0,
        y: 0
      }, F = u ? t * 4 * m : t * m;
      return f.left.includes(i) && (V.x = y.x || -F, !u && !y.x && x && C(["left"], t)), f.right.includes(i) && (V.x = y.x || F, !u && !y.x && x && C(["right"], t)), f.up.includes(i) && (V.y = y.y || -F, !u && !y.y && x && C(["top"], t)), f.down.includes(i) && (V.y = y.y || F, !u && !y.y && x && C(["bottom"], t)), V;
    }, ho = function(c) {
      var u = c.element, t = c.force, m = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !t || (i.has(u) ? m && i.delete(u) : i.add(u), u.classList.add(f));
    }, fo = function(c) {
      var u = c.element, t = c.force, m = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !t)
        return !1;
      var y = m.has(u), x = i.has(u);
      y && !x ? m.delete(u) : !y && x && m.add(u), u.classList.remove(f);
    }, lt = function(u, t, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, W = function(u, t, m, i) {
      if (t === void 0)
        return m ? l({}, u, i) : {};
      if (t === null)
        return l({}, u, null);
      var f = !0, y = !1, x = typeof i == "string";
      x && (f = typeof t == "string" || t instanceof String), x && !f && (y = !0, lt(u, "string"));
      var C = !Number.isNaN(i) && typeof i == "number";
      C && (f = !Number.isNaN(t) && typeof t == "number"), C && !f && (y = !0, lt(u, "number"));
      var V = Object.prototype.toString.call(i) === "[object Object]";
      V && (f = Object.prototype.toString.call(t) === "[object Object]"), V && !f && (y = !0, lt(u, "object"));
      var F = typeof i == "boolean";
      F && (f = typeof t == "boolean"), F && !f && (y = !0, lt(u, "boolean"));
      var ae = Array.isArray(i);
      ae && (f = Array.isArray(t)), ae && !f && (y = !0, lt(u, "array"));
      var xe = y || m;
      return u === "dragKeys" && f ? l({}, u, Object.assign(i, t)) : u === "dragKeys" && !f ? xe ? l({}, u, i) : {} : (u === "dropZones" && f && new Set(t.map(function(De) {
        return De.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, t) : xe ? l({}, u, i) : {});
    }, po = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, W("area", c.area, u, document)), W("selectables", c.selectables, u, null)), W("autoScrollSpeed", c.autoScrollSpeed, u, 5)), W("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), W("zoom", c.zoom, u, 1)), W("customStyles", c.customStyles, u, !1)), W("multiSelectMode", c.multiSelectMode, u, !1)), W("multiSelectToggling", c.multiSelectToggling, u, !0)), W("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), W("selector", c.selector, u, null)), W("selectionThreshold", c.selectionThreshold, u, 0)), W("draggability", c.draggability, u, !0)), W("immediateDrag", c.immediateDrag, u, !0)), W("keyboardDrag", c.keyboardDrag, u, !0)), W("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), W("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), W("useTransform", c.useTransform, u, !0)), W("refreshMemoryRate", c.refreshMemoryRate, u, 80)), W("dropZones", c.dropZones, u, [])), W("dropInsideThreshold", c.dropInsideThreshold, u, 1)), W("dropTargetThreshold", c.dropTargetThreshold, u, 0)), W("usePointerEvents", c.usePointerEvents, u, !1)), W("hoverClass", c.hoverClass, u, "ds-hover")), W("selectableClass", c.selectableClass, u, "ds-selectable")), W("selectedClass", c.selectedClass, u, "ds-selected")), W("selectorClass", c.selectorClass, u, "ds-selector")), W("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), W("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), W("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), W("droppableClass", c.droppableClass, u, "ds-droppable")), W("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), W("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), W("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), W("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), W("dragAsBlock", c.dragAsBlock, u, !1));
    }, qe = function(c, u) {
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
    }, Nr = function(c) {
      var u = c.element, t = c.posDirection, m = c.containerRect, i = c.useTransform, f = lo(u, i), y = O(f, "+", t);
      ct(u, y, i);
      var x = u.getBoundingClientRect(), C = Lr({
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
    }, ct = function(c, u, t) {
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
            condition: function(ae) {
              return ae.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var ae = f.getTarget();
              return a({}, ae ? {
                dropTarget: ae.toObject()
              } : {});
            }
          }
        ]
      }, x = function() {
        var ae = K(V[C], 2), xe = ae[0], De = ae[1];
        ["pre", !1].forEach(function(Ie) {
          return u(Ie ? "".concat(xe, ":").concat(Ie) : xe, function(ie) {
            return De.forEach(function(me) {
              return (!me.condition || me.condition(ie)) && t(Ie ? "".concat(Ie).concat(me.name) : me.name, a(a({
                items: i.elements,
                isDragging: m.isDragging
              }, ie), me.extraData ? me.extraData(ie) : {}));
            });
          });
        });
      }, C = 0, V = Object.entries(y); C < V.length; C++)
        x();
    }, je = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : _(new Set(_(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(i) {
          t.reset(), t._node = i, $r({
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
          t._observers = ye(t.parentNodes, Mt(function(i) {
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
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.HTMLNode);
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
          }, t._dragKeysFlat = [].concat(_(t._dragKeys.up), _(t._dragKeys.down), _(t._dragKeys.left), _(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, x = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(x) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
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
            t.DS.stores.SettingsStore.s.dragAsBlock && (V = t.limitDirection(V)), t._elements.forEach(function(F) {
              return Nr({
                element: F,
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
          !f || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), l(this, "stop", function(i) {
          i != null && i.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), l(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !t._elements.length || y || t.DS.continue)) {
            var x = O(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (x = t.limitDirection(x)), t._elements.forEach(function(C) {
              return Nr({
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
          var t = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? O(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? O(t, "-", this._prevScrollPos) : {
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
          t.isDestroyed || (t._itemsDropped = _(new Set([].concat(_(t._itemsDropped), _((x = t.droppables) === null || x === void 0 ? void 0 : x.filter(function(F) {
            return t.DS.SelectedSet.has(F);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(F) {
            F.classList.add("".concat(t.Settings.droppedTargetClass)), F.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
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
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = je(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(x) {
          var C = x.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = ye(this.parentNodes, Mt(function() {
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
            return qe(t.DS.SelectableSet.rects.get(m), t.rect, t.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return t._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.element);
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
              t._zonesByDroppable.set(x, _(new Set([].concat(_(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          t._zones.forEach(function(f) {
            f !== i && f.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, f) {
          for (var y = f.x, x = f.y, C = 0, V = i.length; C < V; C++) {
            var F = t._zoneByElement.get(i[C]);
            if (F && qe(F.rect, {
              left: y,
              right: y,
              top: x,
              bottom: x
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return F;
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
            var y = t.DS, x = y.stores, C = x.PointerStore, V = x.KeyStore, F = y.SelectableSet, ae = y.SelectedSet;
            C.start(f);
            var xe = (
              /** @type {any} */
              f.target
            );
            F.has(xe) && (V.isMultiSelectKeyPressed(f) || ae.clear(), ae.toggle(xe), t.reset());
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
      var u = j(t);
      function t(m) {
        var i, f = m.DS;
        return n(this, t), i = u.call(this), l(N(i), "_rects", void 0), l(N(i), "_timeout", void 0), l(N(i), "init", function() {
          return je(i.Settings.selectables).forEach(function(y) {
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
            }), this.Settings.draggability && !this.Settings.useTransform && $r({
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
      var u = j(t);
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
          var y = t.DS, x = y.SelectableSet, C = y.SelectorArea, V = y.Selector, F = t.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && t.Settings.multiSelectToggling, ae = t.Settings.selectionThreshold, xe = x.rects, De = V.rect, Ie = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), me = ge(xe), ut;
          try {
            for (me.s(); !(ut = me.n()).done; ) {
              var Ct = K(ut.value, 2), dt = Ct[0], Et = Ct[1];
              C.isInside(dt, Et) && (qe(Et, De, ae) ? Ie.set(dt, Et) : ie.set(dt, Et));
            }
          } catch (Ft) {
            me.e(Ft);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var Pr = t.filterSelected({
              select: Ie,
              unselect: ie,
              selectorRect: De
            }), $o = Pr.select, No = Pr.unselect;
            $o.forEach(function(Ft, Kt) {
              return ho({
                element: Kt,
                force: i,
                multiSelectionToggle: F,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), No.forEach(function(Ft, Kt) {
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
          t.HTMLNode && (i = t.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Yt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (f = t.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = t.DS.stores.PointerStore, x = y.initialValArea;
            Or(t.HTMLNode, U(x, 1)), t.HTMLNode.style.display = "block", t._rect = null;
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
            Or(t.HTMLNode, V), t._rect = null;
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
          var i = t.DS.Area.rect, f = t.DS.Area.computedBorder, y = t.HTMLNode.style, x = "".concat(i.top + f.top, "px"), C = "".concat(i.left + f.left, "px"), V = "".concat(i.width, "px"), F = "".concat(i.height, "px");
          y.top !== x && (y.top = x), y.left !== C && (y.left = C), y.width !== V && (y.width = V), y.height !== F && (y.height = F);
        }), l(this, "stop", function(i) {
          t.stopAutoScroll(), i && t.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var i = t.DS, f = i.stores.PointerStore, y = i.Area;
            t.currentEdges = Lr({
              elementRect: U(f.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(i, f) {
          return t.DS.Area.HTMLNode.contains(i) && t.DS.stores.ScrollStore.canScroll ? !0 : qe(t.rect, f || i.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = kt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
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
            return qe({
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
          this._initialVal = t, this._initialValArea = t && O(t, "-", O(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
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
          this._currentVal = t, this._currentValArea = t && O(t, "-", O(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
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
          this._lastVal = t, this._lastValArea = t && O(t, "-", O(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Lo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "start", function() {
          t._currentVal = t._initialVal = It(t.DS.stores.SettingsStore.s.area), t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "update", function() {
          return t._currentVal = It(t.DS.stores.SettingsStore.s.area);
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
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = Dt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = O(this.currentVal, "-", this.initialVal), m = _e(this.DS.stores.SettingsStore.s.zoom), i = O(O(t, "*", m), "-", t);
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
          return this._currentVal || (this._currentVal = It(this.DS.stores.SettingsStore.s.area)), this._currentVal;
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
            var De, Ie = K(ae[F], 2), ie = Ie[0], me = Ie[1];
            ie in t._settings || Object.defineProperty(t.s, ie, {
              get: function() {
                return t._settings[ie];
              },
              set: function(dt) {
                return t.update({
                  settings: l({}, ie, dt)
                });
              }
            }), t._settings["".concat(ie, ":pre")] = t._settings[ie], t._settings[ie] = me;
            var ut = {
              settings: (De = {}, l(De, ie, t._settings[ie]), l(De, "".concat(ie, ":pre"), t._settings["".concat(ie, ":pre")]), De)
            };
            t.DS.publish("Settings:updated", ut), t.DS.publish("Settings:updated:".concat(ie), ut);
          }, F = 0, ae = Object.entries(C); F < ae.length; F++)
            V();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: i,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), jr = /* @__PURE__ */ function() {
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
            return this.SelectedSet.addAll(je(t)), i || this.addSelectables(t), m && this.PubSub.publish("callback", {
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
          return this.SelectedSet.deleteAll(je(t)), i && this.removeSelectables(t), m && this.PubSub.publish("callback", {
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
          return je(t).forEach(function(y) {
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
          var f = je(t);
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
          return this.SelectableSet.deleteAll(je(t)), m && this.removeSelection(t), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return jr.isCollision = qe, jr;
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
}, Lt = /* @__PURE__ */ Object.assign(Ei, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), I("div", null, [
      r.direction == "down" ? (w(), I("svg", xi, ki)) : Y("", !0),
      r.direction == "up" ? (w(), I("svg", Mi, Ci)) : Y("", !0)
    ]));
  }
}), Ti = ["onClick"], Li = {
  name: "VFToast.vue"
}, Ai = /* @__PURE__ */ Object.assign(Li, {
  setup(r) {
    const e = z("emitter"), { getStore: s } = z("storage"), o = L(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = L([]), d = (l) => {
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
    }), (l, v) => (w(), I("div", {
      class: ce([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Me(Oo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          (w(!0), I(ne, null, ve(n.value, (g, b) => (w(), I("div", {
            onClick: (S) => d(b),
            key: g,
            class: ce([a(g.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(g.label), 11, Ti))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ge = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: $i } = Ae(), er = (r, e) => $i.value + "?" + Ge({ q: "preview", adapter: r, path: e }), Ve = typeof window < "u", ds = Ve && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Ve && "IntersectionObserver" in window, fs = Ve && "classList" in document.createElement("p"), ps = Ve && window.devicePixelRatio > 1, Ni = {
  elements_selector: ".lazy",
  container: ds || Ve ? document : null,
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
}, Oe = "src", fr = "srcset", pr = "sizes", ms = "poster", wt = "llOriginalAttrs", vs = "data", gr = "loading", bs = "loaded", ys = "applied", ji = "entered", mr = "error", Ss = "native", ws = "data-", _s = "ll-status", fe = (r, e) => r.getAttribute(ws + e), Pi = (r, e, s) => {
  var o = ws + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, _t = (r) => fe(r, _s), Xe = (r, e) => Pi(r, _s, e), Bt = (r) => Xe(r, null), vr = (r) => _t(r) === null, zi = (r) => _t(r) === gr, Ri = (r) => _t(r) === mr, br = (r) => _t(r) === Ss, Bi = [gr, bs, ys, mr], Vi = (r) => Bi.indexOf(_t(r)) >= 0, He = (r, e, s, o) => {
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
}, at = (r, e) => {
  if (fs) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Ce = (r, e) => {
  if (fs) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Hi = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Ui = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Vt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Zi = (r) => {
  r.disconnect();
}, Yi = (r, e, s) => {
  e.unobserve_entered && Vt(r, s);
}, yr = (r, e) => {
  r && (r.loadingCount += e);
}, Wi = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Fi = (r) => r.loadingCount > 0, Ki = (r) => r.toLoadCount > 0, ks = (r) => {
  let e = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, Sr = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  ks(s).forEach(e);
}, Ms = (r, e) => {
  ks(r).forEach(e);
}, Ht = [Oe], Is = [Oe, ms], bt = [Oe, fr, pr], Cs = [vs], Ut = (r) => !!r[wt], Es = (r) => r[wt], Ts = (r) => delete r[wt], st = (r, e) => {
  if (Ut(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[wt] = s;
}, Gi = (r) => {
  Ut(r) || (r[wt] = { backgroundImage: r.style.backgroundImage });
}, Xi = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Fe = (r, e) => {
  if (!Ut(r))
    return;
  const s = Es(r);
  e.forEach((o) => {
    Xi(r, o, s[o]);
  });
}, qi = (r) => {
  if (!Ut(r))
    return;
  const e = Es(r);
  r.style.backgroundImage = e.backgroundImage;
}, Ls = (r, e, s) => {
  at(r, e.class_applied), Xe(r, ys), s && (e.unobserve_completed && Vt(r, e), He(e.callback_applied, r, s));
}, As = (r, e, s) => {
  at(r, e.class_loading), Xe(r, gr), s && (yr(s, 1), He(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Be(r, pr, fe(r, e.data_sizes)), Be(r, fr, fe(r, e.data_srcset)), Be(r, Oe, fe(r, e.data_src));
}, Qi = (r, e) => {
  Sr(r, (s) => {
    st(s, bt), Br(s, e);
  }), st(r, bt), Br(r, e);
}, Ji = (r, e) => {
  st(r, Ht), Be(r, Oe, fe(r, e.data_src));
}, en = (r, e) => {
  Ms(r, (s) => {
    st(s, Ht), Be(s, Oe, fe(s, e.data_src));
  }), st(r, Is), Be(r, ms, fe(r, e.data_poster)), Be(r, Oe, fe(r, e.data_src)), r.load();
}, tn = (r, e) => {
  st(r, Cs), Be(r, vs, fe(r, e.data_src));
}, rn = (r, e, s) => {
  const o = fe(r, e.data_bg), a = fe(r, e.data_bg_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = `url("${n}")`, xs(r).setAttribute(Oe, n), As(r, e, s));
}, sn = (r, e, s) => {
  const o = fe(r, e.data_bg_multi), a = fe(r, e.data_bg_multi_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = n, Ls(r, e, s));
}, on = (r, e, s) => {
  const o = fe(r, e.data_bg_set);
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
  e && !Fi(e) && !Ki(e) && He(r.callback_finish, e);
}, Vr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, un = (r, e, s) => {
  r.removeEventListener(e, s);
}, wr = (r) => !!r.llEvLisnrs, dn = (r, e, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, o, e), Vr(r, "error", s);
}, tr = (r) => {
  if (!wr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    un(r, s, o);
  }
  delete r.llEvLisnrs;
}, Os = (r, e, s) => {
  Ui(r), yr(s, -1), Wi(s), Ce(r, e.class_loading), e.unobserve_completed && Vt(r, s);
}, hn = (r, e, s, o) => {
  const a = br(e);
  Os(e, s, o), at(e, s.class_loaded), Xe(e, bs), He(s.callback_loaded, e, o), a || Ns(s, o);
}, fn = (r, e, s, o) => {
  const a = br(e);
  Os(e, s, o), at(e, s.class_error), Xe(e, mr), He(s.callback_error, e, o), s.restore_on_error && Fe(e, bt), a || Ns(s, o);
}, _r = (r, e, s) => {
  const o = xs(r) || r;
  if (wr(o))
    return;
  dn(o, (d) => {
    hn(d, r, e, s), tr(o);
  }, (d) => {
    fn(d, r, e, s), tr(o);
  });
}, pn = (r, e, s) => {
  Hi(r), _r(r, e, s), Gi(r), rn(r, e, s), sn(r, e, s), on(r, e, s);
}, gn = (r, e, s) => {
  _r(r, e, s), an(r, e, s);
}, xr = (r, e, s) => {
  cn(r) ? gn(r, e, s) : pn(r, e, s);
}, mn = (r, e, s) => {
  r.setAttribute("loading", "lazy"), _r(r, e, s), nn(r, e), Xe(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(Oe), r.removeAttribute(fr), r.removeAttribute(pr);
}, vn = (r) => {
  Sr(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  Sr(r, (e) => {
    Fe(e, bt);
  }), Fe(r, bt);
}, bn = (r) => {
  Ms(r, (e) => {
    Fe(e, Ht);
  }), Fe(r, Is), r.load();
}, yn = (r) => {
  Fe(r, Ht);
}, Sn = (r) => {
  Fe(r, Cs);
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
  vr(r) || br(r) || (Ce(r, e.class_entered), Ce(r, e.class_exited), Ce(r, e.class_applied), Ce(r, e.class_loading), Ce(r, e.class_loaded), Ce(r, e.class_error));
}, Dn = (r, e) => {
  _n(r), xn(r, e), Bt(r), Ts(r);
}, kn = (r, e, s, o) => {
  s.cancel_on_exit && zi(r) && r.tagName === "IMG" && (tr(r), vn(r), js(r), Ce(r, s.class_loading), yr(o, -1), Bt(r), He(s.callback_cancel, r, e, o));
}, Mn = (r, e, s, o) => {
  const a = Vi(r);
  Xe(r, ji), at(r, s.class_entered), Ce(r, s.class_exited), Yi(r, s, o), He(s.callback_enter, r, e, o), !a && xr(r, s, o);
}, In = (r, e, s, o) => {
  vr(r) || (at(r, s.class_exited), kn(r, e, s, o), He(s.callback_exit, r, e, o));
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
}, zs = (r) => Array.prototype.slice.call(r), Pt = (r) => r.container.querySelectorAll(r.elements_selector), jn = (r) => zs(r).filter(vr), Pn = (r) => Ri(r), zn = (r) => zs(r).filter(Pn), Ur = (r, e) => jn(r || Pt(e)), Rn = (r, e) => {
  zn(Pt(r)).forEach((o) => {
    Ce(o, r.class_error), Bt(o);
  }), e.update();
}, Bn = (r, e) => {
  Ve && (e._onlineHandler = () => {
    Rn(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Vn = (r) => {
  Ve && window.removeEventListener("online", r._onlineHandler);
}, xt = function(r, e) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, On(s, this), Bn(s, this), this.update(e);
};
xt.prototype = {
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
    this._observer && this._observer.disconnect(), Vn(this), Pt(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Ur(r, e).forEach((o) => {
      Vt(o, this), xr(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Pt(r).forEach((e) => {
      Dn(e, r);
    });
  }
};
xt.load = (r, e) => {
  const s = gs(e);
  xr(r, s);
};
xt.resetStatus = (r) => {
  Bt(r);
};
Ve && Oi(xt, window.lazyLoadOptions);
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
], -1), Wn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Fn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Kn = { class: "grid grid-cols-12 items-center" }, Gn = { class: "flex col-span-7 items-center" }, Xn = {
  key: 0,
  src: hr,
  alt: ""
}, qn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Jn = [
  Qn
], ea = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], sa = { class: "grid grid-cols-12 items-center" }, oa = { class: "flex col-span-7 items-center" }, ia = {
  key: 0,
  src: hr,
  alt: ""
}, na = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, aa = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), la = [
  aa
], ca = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ua = { class: "col-span-2 text-center" }, da = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ha = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], fa = { class: "custom-grid-item-div" }, pa = { class: "relative grid-folder-view-item" }, ga = {
  key: 0,
  src: hr,
  alt: ""
}, ma = ["data-src", "alt"], va = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ba = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ya = [
  ba
], Sa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, wa = { class: "break-all custom-item-text" }, _a = {
  name: "VFExplorer"
}, xa = /* @__PURE__ */ Object.assign(_a, {
  props: {
    view: String,
    data: Object,
    search: Object,
    type: String
  },
  setup(r) {
    const e = r, s = z("emitter"), { setStore: o, getStore: a } = z("storage"), n = z("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), p = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), g = L(0), b = L(null), { t: S } = z("i18n"), k = Math.floor(Math.random() * 2 ** 32), M = L(a("full-screen", !1)), $ = new xt();
    s.on("vf-fullscreen-toggle", () => {
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
    const j = () => {
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
    }, _ = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: e.data.adapter, path: A.path }
      })) : A.type !== "dir" && e.type !== "standalone" ? s.emit("custom-modal-show", {
        type: "preview",
        adapter: e.data.adapter,
        item: A
      }) : A.type !== "dir" && e.type === "standalone" && s.emit("custom-v-f-insert", { type: "insert", item: A });
    }, P = Nt({ active: !1, column: "", order: "" }), X = (A = !0) => {
      let R = [...e.data.files], O = P.column, re = P.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (_e, ye) => typeof _e == "string" && typeof ye == "string" ? _e.toLowerCase().localeCompare(ye.toLowerCase()) : _e < ye ? -1 : _e > ye ? 1 : 0;
      return P.active && (R = R.slice().sort((_e, ye) => U(_e[O], ye[O]) * re)), R;
    }, se = (A) => {
      P.active && P.column == A ? (P.active = P.order == "asc", P.column = A, P.order = "desc") : (P.active = !0, P.column = A, P.order = "asc");
    }, Q = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ue = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(Q()));
    }, be = (A, R) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((re) => re.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: O, to: R }
      });
    }, pe = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return we(() => {
      b.value = new _i({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Rt(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + k)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          g.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, re = A.target.offsetHeight - A.offsetY;
          O < 15 && re < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", Q()), g.value = b.value.getSelection().length;
      });
    }), jo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), $.update();
    }), we(() => {
      ot(
        () => e.view,
        () => s.emit("vf-explorer-update")
      );
    }), (A, R) => (w(), I("div", Hn, [
      r.view == "list" || N.value.length ? (w(), I("div", Un, [
        h("div", {
          onClick: R[0] || (R[0] = (O) => se("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          te(E(D(S)("Name")) + " ", 1),
          Ee(Me(Lt, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, P.active && P.column == "basename"]
          ])
        ]),
        N.value.length ? Y("", !0) : (w(), I("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => se("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          te(E(D(S)("Size")) + " ", 1),
          Ee(Me(Lt, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, P.active && P.column == "file_size"]
          ])
        ])),
        N.value.length ? Y("", !0) : (w(), I("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => se("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          te(E(D(S)("Date")) + " ", 1),
          Ee(Me(Lt, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, P.active && P.column == "last_modified"]
          ])
        ])),
        N.value.length ? (w(), I("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => se("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          te(E(D(S)("Filepath")) + " ", 1),
          Ee(Me(Lt, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, P.active && P.column == "path"]
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
          h("div", Wn, E(g.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: B,
        onContextmenu: R[10] || (R[10] = We((O) => D(s).emit("vf-contextmenu-show", {
          event: O,
          area: l.value,
          items: Q()
        }), ["self", "prevent"])),
        class: ce(`h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto ${e.type == "standalone" ? "standalone-grid-div" : ""}`),
        ref_key: "selectorArea",
        ref: l
      }, [
        N.value.length ? (w(!0), I(ne, { key: 0 }, ve(X(), (O, re) => (w(), I("div", {
          onDblclick: (U) => _(O),
          onTouchstart: R[4] || (R[4] = (U) => K(U)),
          onTouchend: R[5] || (R[5] = (U) => j()),
          onContextmenu: We((U) => D(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: O
          }), ["prevent"]),
          class: ce(["vf-item-" + D(k), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", Kn, [
            h("div", Gn, [
              O.type == "dir" ? (w(), I("img", Xn)) : (w(), I("svg", qn, Jn)),
              h("span", ea, E(O.basename), 1)
            ]),
            h("div", ta, E(O.path), 1)
          ])
        ], 42, Fn))), 256)) : Y("", !0),
        r.view == "list" && !N.value.length ? (w(!0), I(ne, { key: 1 }, ve(X(), (O, re) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => _(O),
          onTouchstart: R[6] || (R[6] = (U) => K(U)),
          onTouchend: R[7] || (R[7] = (U) => j()),
          onContextmenu: We((U) => D(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: O
          }), ["prevent"]),
          onDragstart: (U) => ue(U),
          onDragover: (U) => pe(U, O),
          onDrop: (U) => be(U, O),
          class: ce(["vf-item-" + D(k), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", sa, [
            h("div", oa, [
              O.type == "dir" ? (w(), I("img", ia)) : (w(), I("svg", na, la)),
              h("span", ca, E(O.basename), 1)
            ]),
            h("div", ua, E(O.file_size ? D(cs)(O.file_size) : ""), 1),
            h("div", da, E(D(us)(O.last_modified)), 1)
          ])
        ], 42, ra))), 256)) : Y("", !0),
        r.view == "grid" && !N.value.length ? (w(!0), I(ne, { key: 2 }, ve(X(!1), (O, re) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => _(O),
          onTouchstart: R[8] || (R[8] = (U) => K(U)),
          onTouchend: R[9] || (R[9] = (U) => j()),
          onContextmenu: We((U) => D(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: Q(),
            target: O
          }), ["prevent"]),
          onDragstart: (U) => ue(U),
          onDragover: (U) => pe(U, O),
          onDrop: (U) => be(U, O),
          class: ce(["vf-item-" + D(k), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", fa, [
            h("div", pa, [
              O.type == "dir" ? (w(), I("img", ga)) : (O.mime_type ?? "").startsWith("image") ? (w(), I("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": D(er)(D(n).value, O.path),
                alt: O.basename
              }, null, 8, ma)) : (w(), I("svg", va, ya)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), I("div", Sa, E(d(O.extension)), 1)) : Y("", !0)
            ]),
            h("span", wa, E(p(O.basename)), 1)
          ])
        ], 42, ha))), 256)) : Y("", !0)
      ], 34),
      Me(Ai)
    ]));
  }
}), Da = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, ka = { class: "flex leading-5 items-center" }, Ma = { class: "ml-3" }, Ia = { key: 0 }, Ca = { class: "ml-1" }, Ea = {
  name: "VFStatusbar"
}, Ta = /* @__PURE__ */ Object.assign(Ea, {
  props: {
    data: Object
  },
  setup(r) {
    const e = z("emitter"), { getStore: s, setStore: o } = z("storage"), a = L(0);
    z("adapter");
    const { t: n, changeLocale: d } = z("i18n");
    L(s("locale", "")), e.on("vf-nodes-selected", (l) => {
      a.value = l.length;
    });
    const p = L("");
    return e.on("vf-search-query", ({ newQuery: l }) => {
      p.value = l;
    }), (l, v) => (w(), I("div", Da, [
      h("div", ka, [
        h("div", Ma, [
          p.value.length ? (w(), I("span", Ia, E(r.data.files.length) + " items found. ", 1)) : Y("", !0),
          h("span", Ca, E(a.value > 0 ? a.value + " " + D(n)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), La = (r, e = 0, s = !1) => {
  let o;
  return (...a) => {
    s && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, e);
  };
}, Aa = (r, e, s) => {
  const o = L(r);
  return Po((n, d) => ({
    get() {
      return n(), o.value;
    },
    set: La(
      (p) => {
        o.value = p, d();
      },
      e,
      s
    )
  }));
}, $a = { class: "custom-file-picker-search-bar flex p-2 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Na = ["aria-label"], Oa = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), ja = [
  Oa
], Pa = ["aria-label"], za = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ra = [
  za
], Ba = ["aria-label"], Va = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ha = [
  Va
], Ua = ["onClick"], Za = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Ya = [
  Za
], Wa = { class: "flex leading-5" }, Fa = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Ka = ["title", "onClick"], Ga = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Xa = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), qa = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Qa = [
  Xa,
  qa
], Ja = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, el = /* @__PURE__ */ h("svg", {
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
], -1), tl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), rl = ["onKeydown", "placeholder"], sl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), ol = [
  sl
], il = {
  name: "VFBreadcrumb"
}, nl = /* @__PURE__ */ Object.assign(il, {
  props: {
    data: Object,
    type: String
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), a = L(null), n = L([]), d = L(!1), p = L(null), { t: l } = z("i18n"), v = z("loadingState");
    s.on("vf-explorer-update", () => {
      let j = [], T = [];
      a.value = e.data.dirname ?? o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(B) {
        j.push(B), j.join("/") != "" && T.push({
          basename: B,
          name: B,
          path: o.value + "://" + j.join("/"),
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
      d.value = !0, Rt(() => p.value.focus());
    }, S = Aa("", 400), k = () => v.value;
    ot(S, (j) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: j });
    });
    const M = () => n.value.length && !d.value, $ = (j) => {
      j.preventDefault();
      let T = JSON.parse(j.dataTransfer.getData("items"));
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
    }, N = (j) => {
      j.preventDefault(), M() ? j.dataTransfer.dropEffect = "copy" : (j.dataTransfer.dropEffect = "none", j.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && g();
    };
    return (j, T) => (w(), I("div", $a, [
      h("span", {
        "aria-label": D(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onDragover: T[0] || (T[0] = (B) => N(B)),
          onDrop: T[1] || (T[1] = (B) => $(B)),
          onClick: T[2] || (T[2] = (B) => {
            var K;
            return !M() || D(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((K = n.value[n.value.length - 2]) == null ? void 0 : K.path) ?? D(o) + "://"
              }
            });
          }),
          class: ce([
            "h-6 w-6 p-0.5 rounded",
            M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ja, 34))
      ], 8, Na),
      k() ? (w(), I("span", {
        key: 1,
        "aria-label": D(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: T[4] || (T[4] = (B) => D(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ha))
      ], 8, Ba)) : (w(), I("span", {
        key: 0,
        "aria-label": D(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: T[3] || (T[3] = (B) => D(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ra))
      ], 8, Pa)),
      d.value ? (w(), I("div", Ja, [
        el,
        tl,
        Ee(h("input", {
          ref_key: "searchInput",
          ref: p,
          onKeydown: it(g, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": T[6] || (T[6] = (B) => zo(S) ? S.value = B : null),
          placeholder: D(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, rl), [
          [nt, D(S)]
        ]),
        (w(), I("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: g,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, ol))
      ])) : (w(), I("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (w(), I("svg", {
          onClick: T[5] || (T[5] = (B) => D(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ya)),
        h("div", Wa, [
          (w(!0), I(ne, null, ve(n.value, (B, K) => (w(), I("div", { key: K }, [
            Fa,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (_) => D(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: B.path }
              })
            }, E(B.name), 9, Ka)
          ]))), 128))
        ]),
        k() ? (w(), I("svg", Ga, Qa)) : Y("", !0)
      ], 8, Ua))
    ]));
  }
}), al = ["onClick"], ll = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), cl = {
  name: "VFContextMenu"
}, ul = /* @__PURE__ */ Object.assign(cl, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter"), o = L(null), { apiUrl: a } = Ae(), n = Nt({
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
    const { t: p } = z("i18n"), l = {
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
          const S = a.value + "?" + Ge({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, g = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      g.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: k, items: M, target: $ = null }) => {
      if (n.items = [], g.value)
        if ($)
          n.items.push(l.openDir), s.emit("vf-context-selected", [$]);
        else
          return;
      else
        !$ && !g.value ? (n.items.push(l.refresh), n.items.push(l.newfolder), s.emit("vf-context-selected", [])) : M.length > 1 && M.some((N) => N.path === $.path) ? (n.items.push(l.refresh), n.items.push(l.delete), s.emit("vf-context-selected", M)) : ($.type == "dir" ? n.items.push(l.open) : $.type == "file" && e.current.type == "regular" ? n.items.push(l.download) : $.type == "file" && e.current.type == "standalone" && (n.items.push(l.insert), n.items.push(l.download)), n.items.push(l.delete), s.emit("vf-context-selected", [$]));
      b(S, k);
    }), s.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (S, k) => {
      n.active = !0, Rt(() => {
        let M = k.getBoundingClientRect(), $ = S.pageX, N = S.pageY, H = o.value.offsetHeight, j = o.value.offsetWidth;
        $ = M.right - S.pageX + window.scrollX < j ? $ - j : $, N = M.bottom - S.pageY + window.scrollY < H ? N - H : N, n.positions = {
          left: $ + "px",
          top: N + "px"
        };
      });
    };
    return (S, k) => n.active ? (w(), I("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: as(n.positions)
    }, [
      (w(!0), I(ne, null, ve(n.items, (M) => (w(), I("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: ($) => v(M)
      }, [
        ll,
        h("span", null, E(M.title()), 1)
      ], 8, al))), 128))
    ], 4)) : Y("", !0);
  }
}), dl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function hl(r) {
  const e = await dl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function fl(r, e, s) {
  const { getStore: o, setStore: a } = Jt(r), n = L({}), d = (v) => {
    hl(v).then((g) => {
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
const pl = { class: "vuefinder" }, gl = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), ml = {
  name: "VueFinder"
}, vl = /* @__PURE__ */ Object.assign(ml, {
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
    Ue("emitter", n), Ue("storage", Jt(o.id)), Ue("postData", o.postData), Ue("adapter", l), Ue("maxFileSize", o.maxFileSize);
    const g = fl(o.id, o.locale, n);
    Ue("i18n", g);
    const { apiUrl: b, setApiUrl: S } = Ae();
    S(o.url);
    const k = Nt({
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
    Ue("loadingState", H);
    const j = L(p("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      j.value = !j.value, d("full-screen", j.value);
    }), n.on("vf-view-toggle", (_) => {
      M.value = _;
    });
    const T = Nt({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      T.active = !1;
    }), n.on("vf-modal-show", (_) => {
      T.active = !0, T.type = _.type, T.data = _;
    }), n.on("custom-modal-show", (_) => {
      s("customUploadItem", _, k);
    }), n.on("custom-v-f-insert", (_) => {
      s("customInsertItem", _);
    }), n.on("custom-v-f-delete", (_) => {
      s("customDeleteItem", _);
    }), n.on("custom-v-f-move", (_) => {
      s("customMoveItem", _);
    }), s("fileUploaded", () => {
      console.log("here Emmit uploaded");
    }), n.on("file-moved", (_) => {
      s("fileMoved", _);
    });
    const B = (_) => {
      Object.assign(k, _), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let K;
    return n.on("vf-fetch-abort", () => {
      K.abort(), H.value = !1;
    }), n.on("vf-fetch", ({ params: _, onSuccess: P = null, onError: X = null }) => {
      ["index", "search"].includes(_.q) && (K && K.abort(), H.value = !0), a = _.path, s("customUpdateVariable", a), K = new AbortController();
      const se = K.signal;
      jt(b.value, { params: _, signal: se }).then((Q) => {
        l.value = Q.adapter, ["index", "search"].includes(_.q) && (H.value = !1), n.emit("vf-modal-close"), B(Q), P(Q);
      }).catch((Q) => {
        X && X(Q);
      }).finally(() => {
      });
    }), n.on("vf-download", (_) => {
      document.getElementById("download_frame").src = _, n.emit("vf-modal-close");
    }), we(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), ot(() => {
      v.value = o.movedItems;
    }, {
      immediate: !1
    }), (_, P) => (w(), I("div", pl, [
      h("div", {
        class: ce(`${$.value ? "dark" : ""} vuefinder-custom-div`)
      }, [
        h("div", {
          class: ce([
            j.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md",
            "custom-vuefinder-explorer-container border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
          ]),
          style: as(j.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: P[0] || (P[0] = (X) => D(n).emit("vf-contextmenu-hide")),
          onTouchstart: P[1] || (P[1] = (X) => D(n).emit("vf-contextmenu-hide"))
        }, [
          Me(bi, {
            data: k,
            type: o.vueFinderType
          }, null, 8, ["data", "type"]),
          Me(nl, {
            data: k,
            type: o.vueFinderType
          }, null, 8, ["data", "type"]),
          Me(xa, {
            view: M.value,
            data: k,
            type: o.vueFinderType
          }, null, 8, ["view", "data", "type"]),
          Me(Ta, { data: k }, null, 8, ["data"])
        ], 38),
        T.active ? (w(), q(Ro("v-f-modal-" + T.type), {
          key: 0,
          selection: T.data,
          current: k,
          movedItemsProp: D(v)
        }, null, 8, ["selection", "current", "movedItemsProp"])) : Y("", !0),
        Me(ul, {
          current: k,
          testProp: "hi_there"
        }, null, 8, ["current"]),
        gl
      ], 2)
    ]));
  }
}), bl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), yl = { class: "fixed z-10 inset-0 overflow-hidden" }, Sl = { class: "custom-popup-layout transition-all" }, wl = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, _l = { class: "custom-layout-button-slot" }, $e = {
  __name: "ModalLayout",
  setup(r) {
    const e = z("emitter");
    return we(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), I("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = it((a) => D(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      bl,
      h("div", yl, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((a) => D(e).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", Sl, [
            h("div", wl, [
              Qt(s.$slots, "default")
            ]),
            h("div", _l, [
              Qt(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, xl = ["aria-label"], Dl = /* @__PURE__ */ h("svg", {
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
], -1), kl = [
  Dl
], Ml = {
  name: "Message"
}, Ne = /* @__PURE__ */ Object.assign(Ml, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var p;
    const { t: s } = z("i18n"), o = L(!1), a = L(null), n = L((p = a.value) == null ? void 0 : p.strMessage);
    ot(n, () => o.value = !1);
    const d = () => {
      e("hidden"), o.value = !0;
    };
    return (l, v) => (w(), I("div", null, [
      o.value ? Y("", !0) : (w(), I("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ce(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": D(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, kl, 8, xl)
      ], 2))
    ]));
  }
}), Il = { class: "sm:flex custom-new-folder-popup delete-modal-container" }, Cl = { class: "custom-file-picker-title" }, El = { class: "file-picker-title-img" }, Tl = /* @__PURE__ */ h("svg", {
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
], -1), Ll = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Al = /* @__PURE__ */ h("hr", null, null, -1), $l = { class: "mt-3 text-center create-folder-form custom-delete-modal" }, Nl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ol = { class: "mt-2" }, jl = { class: "text-sm text-gray-500" }, Pl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, zl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Rl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Bl = [
  Rl
], Vl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Hl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ul = [
  Hl
], Zl = { class: "ml-1.5" }, Yl = {
  name: "VFModalDelete"
}, Wl = /* @__PURE__ */ Object.assign(Yl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = L(e.selection.items), d = L(""), p = () => {
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
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (g) => D(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Il, [
          h("div", Cl, [
            h("div", El, [
              Tl,
              h("h3", Ll, E(D(a)("Delete files")), 1)
            ]),
            Al
          ]),
          h("div", $l, [
            h("h3", Nl, E(D(a)("Delete files")), 1),
            h("div", Ol, [
              h("p", jl, E(D(a)("Are you sure you want to delete these files?")), 1),
              (w(!0), I(ne, null, ve(n.value, (g) => (w(), I("p", Pl, [
                g.type == "dir" ? (w(), I("svg", zl, Bl)) : (w(), I("svg", Vl, Ul)),
                h("span", Zl, E(g.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Ne, {
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
}), Fl = { class: "sm:flex sm:items-start" }, Kl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Gl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Xl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ql = { class: "mt-2" }, Ql = { class: "text-sm text-gray-500" }, Jl = {
  name: "VFModalMessage"
}, ec = /* @__PURE__ */ Object.assign(Jl, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = z("emitter"), { t: s } = z("i18n");
    return (o, a) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => D(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(s)("Close")), 1)
      ]),
      default: G(() => {
        var n, d;
        return [
          h("div", Fl, [
            Kl,
            h("div", Gl, [
              h("h3", Xl, E(((n = r.selection) == null ? void 0 : n.title) ?? "Title"), 1),
              h("div", ql, [
                h("p", Ql, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), tc = { class: "sm:flex custom-new-folder-popup" }, rc = { class: "custom-file-picker-title" }, sc = { class: "file-picker-title-img" }, oc = /* @__PURE__ */ h("svg", {
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
], -1), ic = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nc = /* @__PURE__ */ h("hr", null, null, -1), ac = { class: "mt-3 text-center w-full p-4 h-full" }, lc = { class: "mt-2 create-folder-form" }, cc = { class: "text-sm text-gray-500" }, uc = ["onKeyup", "placeholder"], dc = {
  name: "VFModalNewFolder"
}, hc = /* @__PURE__ */ Object.assign(dc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = L(""), d = L(""), p = () => {
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
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => D(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", tc, [
          h("div", rc, [
            h("div", sc, [
              oc,
              h("h3", ic, E(D(a)("New Folder")), 1)
            ]),
            nc
          ]),
          h("div", ac, [
            h("div", lc, [
              h("p", cc, E(D(a)("Create a new folder")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: it(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: D(a)("Folder Name"),
                type: "text"
              }, null, 40, uc), [
                [nt, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
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
}), fc = { class: "sm:flex sm:items-start" }, pc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), gc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, mc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, vc = { class: "mt-2" }, bc = { class: "text-sm text-gray-500" }, yc = ["onKeyup", "placeholder"], Sc = {
  name: "VFModalNewFile"
}, wc = /* @__PURE__ */ Object.assign(Sc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = L(""), d = L(""), p = () => {
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
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => D(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", fc, [
          pc,
          h("div", gc, [
            h("h3", mc, E(D(a)("New File")), 1),
            h("div", vc, [
              h("p", bc, E(D(a)("Create a new file")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: it(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: D(a)("File Name"),
                type: "text"
              }, null, 40, yc), [
                [nt, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
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
}), Rs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Bs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4wMSIgaGVpZ2h0PSIxMC4wMDkiIHZpZXdCb3g9IjAgMCAxMC4wMSAxMC4wMDkiPg0KDQo8cGF0aCBpZD0iUGF0aF8yMTQiIGRhdGEtbmFtZT0iUGF0aCAyMTQiIGQ9Ik0xMi4xNzQsMTFsMy41ODMtMy41NzVhLjgzNy44MzcsMCwxLDAtMS4xODMtMS4xODNMMTEsOS44MjQsNy40MjQsNi4yNDFBLjgzNy44MzcsMCwwLDAsNi4yNDEsNy40MjRMOS44MjQsMTEsNi4yNDEsMTQuNTc1YS44MzcuODM3LDAsMSwwLDEuMTgzLDEuMTgzTDExLDEyLjE3NWwzLjU3NSwzLjU4M2EuODM3LjgzNywwLDEsMCwxLjE4My0xLjE4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5NCAtNS45OTYpIiBmaWxsPSIjODA4ZDkzIi8+DQoNCjwvc3ZnPg==", Vs = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", _c = { class: "flex" }, xc = ["aria-label"], Dc = { class: "ml-auto mb-2" }, kc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Mc = { key: 1 }, Ic = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, o = L(""), a = L(""), n = L(null), d = L(!1), { apiUrl: p } = Ae(), l = L(""), v = L(!1), { t: g } = z("i18n");
    we(() => {
      jt(p.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = o.value, d.value == !0 && Rt(() => {
        n.value.focus();
      });
    }, S = z("postData"), k = () => {
      l.value = "", v.value = !1, jt(p.value, {
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
    return (M, $) => (w(), I(ne, null, [
      h("div", _c, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, xc),
        h("div", Dc, [
          d.value ? (w(), I("button", {
            key: 0,
            onClick: k,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(D(g)("Save")), 1)) : Y("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: $[0] || ($[0] = (N) => b())
          }, E(d.value ? D(g)("Cancel") : D(g)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (w(), I("div", Mc, [
          Ee(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": $[1] || ($[1] = (N) => a.value = N),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [nt, a.value]
          ])
        ])) : (w(), I("pre", kc, E(o.value), 1)),
        l.value.length ? (w(), q(Ne, {
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
      Tc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Zr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rr(r);
}
function Cc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Ec(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Tc(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function Us(r) {
  return Lc(r) || Ac(r) || $c(r) || Nc();
}
function Lc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Ac(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function $c(r, e) {
  if (r) {
    if (typeof r == "string")
      return sr(r, e);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, e);
  }
}
function sr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var s = 0, o = new Array(e); s < e; s++)
    o[s] = r[s];
  return o;
}
function Nc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Zt = typeof window < "u" && typeof window.document < "u", Le = Zt ? window : {}, Dr = Zt && Le.document.documentElement ? "ontouchstart" in Le.document.documentElement : !1, kr = Zt ? "PointerEvent" in Le : !1, J = "cropper", Mr = "all", Zs = "crop", Ys = "move", Ws = "zoom", Ze = "e", Ye = "w", Qe = "s", Pe = "n", ft = "ne", pt = "nw", gt = "se", mt = "sw", or = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), he = "".concat(J, "-hidden"), Fr = "".concat(J, "-hide"), Oc = "".concat(J, "-invisible"), zt = "".concat(J, "-modal"), ir = "".concat(J, "-move"), yt = "".concat(J, "Action"), At = "".concat(J, "Preview"), Ir = "crop", Fs = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Kr = "dblclick", jc = Dr ? "touchstart" : "mousedown", Pc = Dr ? "touchmove" : "mousemove", zc = Dr ? "touchend touchcancel" : "mouseup", Gr = kr ? "pointerdown" : jc, Xr = kr ? "pointermove" : Pc, qr = kr ? "pointerup pointercancel" : zc, Qr = "ready", Jr = "resize", es = "wheel", ur = "zoom", ts = "image/jpeg", Rc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Bc = /^data:/, Vc = /^data:image\/jpeg;base64,/, Hc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Ir,
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
}, Uc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Zc = Number.isNaN || Le.isNaN;
function Z(r) {
  return typeof r == "number" && !Zc(r);
}
var ss = function(e) {
  return e > 0 && e < 1 / 0;
};
function Gt(r) {
  return typeof r > "u";
}
function Ke(r) {
  return rr(r) === "object" && r !== null;
}
var Yc = Object.prototype.hasOwnProperty;
function Je(r) {
  if (!Ke(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && Yc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function de(r) {
  return typeof r == "function";
}
var Wc = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : Wc.call(r);
}
function oe(r, e) {
  return r && de(e) && (Array.isArray(r) || Z(r.length) ? qs(r).forEach(function(s, o) {
    e.call(r, s, o, r);
  }) : Ke(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var ee = Object.assign || function(e) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    o[a - 1] = arguments[a];
  return Ke(e) && o.length > 0 && o.forEach(function(n) {
    Ke(n) && Object.keys(n).forEach(function(d) {
      e[d] = n[d];
    });
  }), e;
}, Fc = /\.\d*(?:0|9){12}\d*$/;
function tt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Fc.test(r) ? Math.round(r * e) / e : r;
}
var Kc = /^width|height|left|top|marginLeft|marginTop$/;
function ze(r, e) {
  var s = r.style;
  oe(e, function(o, a) {
    Kc.test(a) && Z(o) && (o = "".concat(o, "px")), s[a] = o;
  });
}
function Gc(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function le(r, e) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(o) {
        le(o, e);
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
function Te(r, e) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(s) {
        Te(s, e);
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
function et(r, e, s) {
  if (e) {
    if (Z(r.length)) {
      oe(r, function(o) {
        et(o, e, s);
      });
      return;
    }
    s ? le(r, e) : Te(r, e);
  }
}
var Xc = /([a-z\d])([A-Z])/g;
function Cr(r) {
  return r.replace(Xc, "$1-$2").toLowerCase();
}
function dr(r, e) {
  return Ke(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Cr(e)));
}
function St(r, e, s) {
  Ke(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Cr(e)), s);
}
function qc(r, e) {
  if (Ke(r[e]))
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
    r.removeAttribute("data-".concat(Cr(e)));
}
var Qs = /\s\s*/, Js = function() {
  var r = !1;
  if (Zt) {
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
    Le.addEventListener("test", s, o), Le.removeEventListener("test", s, o);
  }
  return r;
}();
function ke(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(Qs).forEach(function(n) {
    if (!Js) {
      var d = r.listeners;
      d && d[n] && d[n][s] && (a = d[n][s], delete d[n][s], Object.keys(d[n]).length === 0 && delete d[n], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, a, o);
  });
}
function Se(r, e, s) {
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
function rt(r, e, s) {
  var o;
  return de(Event) && de(CustomEvent) ? o = new CustomEvent(e, {
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
var Xt = Le.location, Qc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var e = r.match(Qc);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function is(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function vt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, a = r.translateX, n = r.translateY, d = [];
  Z(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), Z(n) && n !== 0 && d.push("translateY(".concat(n, "px)")), Z(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Z(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Z(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var p = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: p,
    msTransform: p,
    transform: p
  };
}
function Jc(r) {
  var e = Hs({}, r), s = 0;
  return oe(r, function(o, a) {
    delete e[a], oe(e, function(n) {
      var d = Math.abs(o.startX - n.startX), p = Math.abs(o.startY - n.startY), l = Math.abs(o.endX - n.endX), v = Math.abs(o.endY - n.endY), g = Math.sqrt(d * d + p * p), b = Math.sqrt(l * l + v * v), S = (b - g) / g;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function $t(r, e) {
  var s = r.pageX, o = r.pageY, a = {
    endX: s,
    endY: o
  };
  return e ? a : Hs({
    startX: s,
    startY: o
  }, a);
}
function eu(r) {
  var e = 0, s = 0, o = 0;
  return oe(r, function(a) {
    var n = a.startX, d = a.startY;
    e += n, s += d, o += 1;
  }), e /= o, s /= o, {
    pageX: e,
    pageY: s
  };
}
function Re(r) {
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
function tu(r) {
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
function ru(r, e, s, o) {
  var a = e.aspectRatio, n = e.naturalWidth, d = e.naturalHeight, p = e.rotate, l = p === void 0 ? 0 : p, v = e.scaleX, g = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, k = s.aspectRatio, M = s.naturalWidth, $ = s.naturalHeight, N = o.fillColor, H = N === void 0 ? "transparent" : N, j = o.imageSmoothingEnabled, T = j === void 0 ? !0 : j, B = o.imageSmoothingQuality, K = B === void 0 ? "low" : B, _ = o.maxWidth, P = _ === void 0 ? 1 / 0 : _, X = o.maxHeight, se = X === void 0 ? 1 / 0 : X, Q = o.minWidth, ue = Q === void 0 ? 0 : Q, be = o.minHeight, pe = be === void 0 ? 0 : be, ge = document.createElement("canvas"), A = ge.getContext("2d"), R = Re({
    aspectRatio: k,
    width: P,
    height: se
  }), O = Re({
    aspectRatio: k,
    width: ue,
    height: pe
  }, "cover"), re = Math.min(R.width, Math.max(O.width, M)), U = Math.min(R.height, Math.max(O.height, $)), _e = Re({
    aspectRatio: a,
    width: P,
    height: se
  }), ye = Re({
    aspectRatio: a,
    width: ue,
    height: pe
  }, "cover"), Dt = Math.min(_e.width, Math.max(ye.width, n)), kt = Math.min(_e.height, Math.max(ye.height, d)), Yt = [-Dt / 2, -kt / 2, Dt, kt];
  return ge.width = tt(re), ge.height = tt(U), A.fillStyle = H, A.fillRect(0, 0, re, U), A.save(), A.translate(re / 2, U / 2), A.rotate(l * Math.PI / 180), A.scale(g, S), A.imageSmoothingEnabled = T, A.imageSmoothingQuality = K, A.drawImage.apply(A, [r].concat(Us(Yt.map(function(Mt) {
    return Math.floor(tt(Mt));
  })))), A.restore(), ge;
}
var to = String.fromCharCode;
function su(r, e, s) {
  var o = "";
  s += e;
  for (var a = e; a < s; a += 1)
    o += to(r.getUint8(a));
  return o;
}
var ou = /^data:.*,/;
function iu(r) {
  var e = r.replace(ou, ""), s = atob(e), o = new ArrayBuffer(s.length), a = new Uint8Array(o);
  return oe(a, function(n, d) {
    a[d] = s.charCodeAt(d);
  }), o;
}
function nu(r, e) {
  for (var s = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(to.apply(null, qs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function au(r) {
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
      if (su(e, l, 4) === "Exif") {
        var g = e.getUint16(v);
        if (o = g === 18761, (o || g === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (n = v + b);
        }
      }
    }
    if (n) {
      var S = e.getUint16(n, o), k, M;
      for (M = 0; M < S; M += 1)
        if (k = n + M * 12 + 2, e.getUint16(k, o) === 274) {
          k += 8, s = e.getUint16(k, o), e.setUint16(k, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function lu(r) {
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
var cu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, a = this.cropper, n = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    le(a, he), Te(e, he);
    var p = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Gs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = p, ze(a, {
      width: p.width,
      height: p.height
    }), le(e, he), Te(a, he);
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
      var S = Re({
        aspectRatio: l,
        width: g,
        height: b
      });
      g = S.width, b = S.height, n.minWidth = g, n.minHeight = b, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (s)
      if (p > (v ? 0 : 1)) {
        var k = a.width - n.width, M = a.height - n.height;
        n.minLeft = Math.min(0, k), n.minTop = Math.min(0, M), n.maxLeft = Math.max(0, k), n.maxTop = Math.max(0, M), v && this.limited && (n.minLeft = Math.min(d.left, d.left + (d.width - n.width)), n.minTop = Math.min(d.top, d.top + (d.height - n.height)), n.maxLeft = d.left, n.maxTop = d.top, p === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, k), n.maxLeft = Math.max(0, k)), n.height >= a.height && (n.minTop = Math.min(0, M), n.maxTop = Math.max(0, M))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, a = this.imageData;
    if (s) {
      var n = tu({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = n.width, p = n.height, l = o.width * (d / o.naturalWidth), v = o.height * (p / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / p, o.naturalWidth = d, o.naturalHeight = p, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, ze(this.canvas, ee({
      width: o.width,
      height: o.height
    }, vt({
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
    }), ze(this.image, ee({
      width: o.width,
      height: o.height
    }, vt(ee({
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
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && St(this.face, yt, o.width >= s.width && o.height >= s.height ? Ys : Mr), ze(this.cropBox, ee({
      width: o.width,
      height: o.height
    }, vt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, nr, this.getData());
  }
}, uu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, a = s ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = n, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var p = o;
      typeof o == "string" ? p = e.ownerDocument.querySelectorAll(o) : o.querySelector && (p = [o]), this.previews = p, oe(p, function(l) {
        var v = document.createElement("img");
        St(l, At, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = n, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    oe(this.previews, function(e) {
      var s = dr(e, At);
      ze(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, qc(e, At);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, d = e.width, p = e.height, l = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (ze(this.viewBoxImage, ee({
      width: d,
      height: p
    }, vt(ee({
      translateX: -l,
      translateY: -v
    }, e)))), oe(this.previews, function(g) {
      var b = dr(g, At), S = b.width, k = b.height, M = S, $ = k, N = 1;
      a && (N = S / a, $ = n * N), n && $ > k && (N = k / n, M = a * N, $ = k), ze(g, {
        width: M,
        height: $
      }), ze(g.getElementsByTagName("img")[0], ee({
        width: d * N,
        height: p * N
      }, vt(ee({
        translateX: -l * N,
        translateY: -v * N
      }, e))));
    }));
  }
}, du = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    de(s.cropstart) && Se(e, cr, s.cropstart), de(s.cropmove) && Se(e, lr, s.cropmove), de(s.cropend) && Se(e, ar, s.cropend), de(s.crop) && Se(e, nr, s.crop), de(s.zoom) && Se(e, ur, s.zoom), Se(o, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && Se(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Se(o, Kr, this.onDblclick = this.dblclick.bind(this)), Se(e.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), Se(e.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && Se(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    de(s.cropstart) && ke(e, cr, s.cropstart), de(s.cropmove) && ke(e, lr, s.cropmove), de(s.cropend) && ke(e, ar, s.cropend), de(s.crop) && ke(e, nr, s.crop), de(s.zoom) && ke(e, ur, s.zoom), ke(o, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && ke(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && ke(o, Kr, this.onDblclick), ke(e.ownerDocument, Xr, this.onCropMove), ke(e.ownerDocument, qr, this.onCropEnd), s.responsive && ke(window, Jr, this.onResize);
  }
}, hu = {
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
    this.disabled || this.options.dragMode === Ks || this.setDragMode(Gc(this.dragBox, or) ? Fs : Ir);
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
        n[p.identifier] = $t(p);
      }) : n[e.pointerId || 0] = $t(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? d = Ws : d = dr(e.target, yt), Rc.test(d) && rt(this.element, cr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Zs && (this.cropping = !0, le(this.dragBox, zt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), rt(this.element, lr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? oe(e.changedTouches, function(a) {
        ee(o[a.identifier] || {}, $t(a, !0));
      }) : ee(o[e.pointerId || 0] || {}, $t(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? oe(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, zt, this.cropped && this.options.modal)), rt(this.element, ar, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, fu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, d = this.pointers, p = this.action, l = s.aspectRatio, v = n.left, g = n.top, b = n.width, S = n.height, k = v + b, M = g + S, $ = 0, N = 0, H = a.width, j = a.height, T = !0, B;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && ($ = n.minLeft, N = n.minTop, H = $ + Math.min(a.width, o.width, o.left + o.width), j = N + Math.min(a.height, o.height, o.top + o.height));
    var K = d[Object.keys(d)[0]], _ = {
      x: K.endX - K.startX,
      y: K.endY - K.startY
    }, P = function(se) {
      switch (se) {
        case Ze:
          k + _.x > H && (_.x = H - k);
          break;
        case Ye:
          v + _.x < $ && (_.x = $ - v);
          break;
        case Pe:
          g + _.y < N && (_.y = N - g);
          break;
        case Qe:
          M + _.y > j && (_.y = j - M);
          break;
      }
    };
    switch (p) {
      case Mr:
        v += _.x, g += _.y;
        break;
      case Ze:
        if (_.x >= 0 && (k >= H || l && (g <= N || M >= j))) {
          T = !1;
          break;
        }
        P(Ze), b += _.x, b < 0 && (p = Ye, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case Pe:
        if (_.y <= 0 && (g <= N || l && (v <= $ || k >= H))) {
          T = !1;
          break;
        }
        P(Pe), S -= _.y, g += _.y, S < 0 && (p = Qe, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case Ye:
        if (_.x <= 0 && (v <= $ || l && (g <= N || M >= j))) {
          T = !1;
          break;
        }
        P(Ye), b -= _.x, v += _.x, b < 0 && (p = Ze, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case Qe:
        if (_.y >= 0 && (M >= j || l && (v <= $ || k >= H))) {
          T = !1;
          break;
        }
        P(Qe), S += _.y, S < 0 && (p = Pe, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case ft:
        if (l) {
          if (_.y <= 0 && (g <= N || k >= H)) {
            T = !1;
            break;
          }
          P(Pe), S -= _.y, g += _.y, b = S * l;
        } else
          P(Pe), P(Ze), _.x >= 0 ? k < H ? b += _.x : _.y <= 0 && g <= N && (T = !1) : b += _.x, _.y <= 0 ? g > N && (S -= _.y, g += _.y) : (S -= _.y, g += _.y);
        b < 0 && S < 0 ? (p = mt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = pt, b = -b, v -= b) : S < 0 && (p = gt, S = -S, g -= S);
        break;
      case pt:
        if (l) {
          if (_.y <= 0 && (g <= N || v <= $)) {
            T = !1;
            break;
          }
          P(Pe), S -= _.y, g += _.y, b = S * l, v += n.width - b;
        } else
          P(Pe), P(Ye), _.x <= 0 ? v > $ ? (b -= _.x, v += _.x) : _.y <= 0 && g <= N && (T = !1) : (b -= _.x, v += _.x), _.y <= 0 ? g > N && (S -= _.y, g += _.y) : (S -= _.y, g += _.y);
        b < 0 && S < 0 ? (p = gt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = ft, b = -b, v -= b) : S < 0 && (p = mt, S = -S, g -= S);
        break;
      case mt:
        if (l) {
          if (_.x <= 0 && (v <= $ || M >= j)) {
            T = !1;
            break;
          }
          P(Ye), b -= _.x, v += _.x, S = b / l;
        } else
          P(Qe), P(Ye), _.x <= 0 ? v > $ ? (b -= _.x, v += _.x) : _.y >= 0 && M >= j && (T = !1) : (b -= _.x, v += _.x), _.y >= 0 ? M < j && (S += _.y) : S += _.y;
        b < 0 && S < 0 ? (p = ft, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = gt, b = -b, v -= b) : S < 0 && (p = pt, S = -S, g -= S);
        break;
      case gt:
        if (l) {
          if (_.x >= 0 && (k >= H || M >= j)) {
            T = !1;
            break;
          }
          P(Ze), b += _.x, S = b / l;
        } else
          P(Qe), P(Ze), _.x >= 0 ? k < H ? b += _.x : _.y >= 0 && M >= j && (T = !1) : b += _.x, _.y >= 0 ? M < j && (S += _.y) : S += _.y;
        b < 0 && S < 0 ? (p = pt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = mt, b = -b, v -= b) : S < 0 && (p = ft, S = -S, g -= S);
        break;
      case Ys:
        this.move(_.x, _.y), T = !1;
        break;
      case Ws:
        this.zoom(Jc(d), e), T = !1;
        break;
      case Zs:
        if (!_.x || !_.y) {
          T = !1;
          break;
        }
        B = eo(this.cropper), v = K.startX - B.left, g = K.startY - B.top, b = n.minWidth, S = n.minHeight, _.x > 0 ? p = _.y > 0 ? gt : ft : _.x < 0 && (v -= b, p = _.y > 0 ? mt : pt), _.y < 0 && (g -= S), this.cropped || (Te(this.cropBox, he), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    T && (n.width = b, n.height = S, n.left = v, n.top = g, this.action = p, this.renderCropBox()), oe(d, function(X) {
      X.startX = X.endX, X.startY = X.endY;
    });
  }
}, pu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && le(this.dragBox, zt), Te(this.cropBox, he), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Te(this.dragBox, zt), le(this.cropBox, he)), this;
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
    return this.ready && this.disabled && (this.disabled = !1, Te(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, le(this.cropper, Wr)), this;
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
      if (rt(this.element, ur, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, k = eo(this.cropper), M = S && Object.keys(S).length ? eu(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (g - d) * ((M.pageX - k.left - n.left) / d), n.top -= (b - p) * ((M.pageY - k.top - n.top) / p);
      } else
        Je(s) && Z(s.x) && Z(s.y) ? (n.left -= (g - d) * ((s.x - n.left) / d), n.top -= (b - p) * ((s.y - n.top) / p)) : (n.left -= (g - d) / 2, n.top -= (b - p) / 2);
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
    if (this.ready && !this.disabled && Je(e)) {
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
    return this.ready && !this.disabled && Je(e) && (Z(e.left) && (s.left = e.left), Z(e.top) && (s.top = e.top), Z(e.width) ? (s.width = e.width, s.height = e.width / o) : Z(e.height) && (s.height = e.height, s.width = e.height * o), this.renderCanvas(!0)), this;
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
    return this.ready && this.cropped && !this.disabled && Je(e) && (Z(e.left) && (s.left = e.left), Z(e.top) && (s.top = e.top), Z(e.width) && e.width !== s.width && (a = !0, s.width = e.width), Z(e.height) && e.height !== s.height && (n = !0, s.height = e.height), o && (a ? s.height = s.width / o : n && (s.width = s.height * o)), this.renderCropBox()), this;
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
    var s = this.canvasData, o = ru(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, d = a.y, p = a.width, l = a.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (n *= v, d *= v, p *= v, l *= v);
    var g = p / l, b = Re({
      aspectRatio: g,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Re({
      aspectRatio: g,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), k = Re({
      aspectRatio: g,
      width: e.width || (v !== 1 ? o.width : p),
      height: e.height || (v !== 1 ? o.height : l)
    }), M = k.width, $ = k.height;
    M = Math.min(b.width, Math.max(S.width, M)), $ = Math.min(b.height, Math.max(S.height, $));
    var N = document.createElement("canvas"), H = N.getContext("2d");
    N.width = tt(M), N.height = tt($), H.fillStyle = e.fillColor || "transparent", H.fillRect(0, 0, M, $);
    var j = e.imageSmoothingEnabled, T = j === void 0 ? !0 : j, B = e.imageSmoothingQuality;
    H.imageSmoothingEnabled = T, B && (H.imageSmoothingQuality = B);
    var K = o.width, _ = o.height, P = n, X = d, se, Q, ue, be, pe, ge;
    P <= -p || P > K ? (P = 0, se = 0, ue = 0, pe = 0) : P <= 0 ? (ue = -P, P = 0, se = Math.min(K, p + P), pe = se) : P <= K && (ue = 0, se = Math.min(p, K - P), pe = se), se <= 0 || X <= -l || X > _ ? (X = 0, Q = 0, be = 0, ge = 0) : X <= 0 ? (be = -X, X = 0, Q = Math.min(_, l + X), ge = Q) : X <= _ && (be = 0, Q = Math.min(l, _ - X), ge = Q);
    var A = [P, X, se, Q];
    if (pe > 0 && ge > 0) {
      var R = M / p;
      A.push(ue * R, be * R, pe * R, ge * R);
    }
    return H.drawImage.apply(H, [o].concat(Us(A.map(function(O) {
      return Math.floor(tt(O));
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
      var n = e === Ir, d = s.movable && e === Fs;
      e = n || d ? e : Ks, s.dragMode = e, St(o, yt, e), et(o, or, n), et(o, ir, d), s.cropBoxMovable || (St(a, yt, e), et(a, or, n), et(a, ir, d));
    }
    return this;
  }
}, gu = Le.Cropper, ro = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Cc(this, r), !e || !Hc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = ee({}, rs, Je(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Ec(r, [{
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
        if (Bc.test(s)) {
          Vc.test(s) ? this.read(iu(s)) : this.clone();
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
      var o = this.options, a = this.imageData, n = au(s), d = 0, p = 1, l = 1;
      if (n > 1) {
        this.url = nu(s, ts);
        var v = lu(n);
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
      a && (d.crossOrigin = a), d.src = n || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), le(d, Fr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent), n = function(v, g) {
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
        d.innerHTML = Uc;
        var p = d.querySelector(".".concat(J, "-container")), l = p.querySelector(".".concat(J, "-canvas")), v = p.querySelector(".".concat(J, "-drag-box")), g = p.querySelector(".".concat(J, "-crop-box")), b = g.querySelector(".".concat(J, "-face"));
        this.container = n, this.cropper = p, this.canvas = l, this.dragBox = v, this.cropBox = g, this.viewBox = p.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), le(s, he), n.insertBefore(p, s.nextSibling), Te(a, Fr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, le(g, he), o.guides || le(g.getElementsByClassName("".concat(J, "-dashed")), he), o.center || le(g.getElementsByClassName("".concat(J, "-center")), he), o.background && le(p, "".concat(J, "-bg")), o.highlight || le(b, Oc), o.cropBoxMovable && (le(b, ir), St(b, yt, Mr)), o.cropBoxResizable || (le(g.getElementsByClassName("".concat(J, "-line")), he), le(g.getElementsByClassName("".concat(J, "-point")), he)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), de(o.ready) && Se(s, Qr, o.ready, {
          once: !0
        }), rt(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Te(this.element, he);
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
      return window.Cropper = gu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      ee(rs, Je(s) && s);
    }
  }]), r;
}();
ee(ro.prototype, cu, uu, du, hu, fu, pu);
const mu = { class: "flex" }, vu = ["aria-label"], bu = { class: "ml-auto mb-2" }, yu = { class: "w-full flex justify-center" }, Su = ["src"], wu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: o } = z("i18n"), { apiUrl: a } = Ae(), n = L(null), d = L(null), p = L(!1), l = L(""), v = L(!1), g = () => {
      p.value = !p.value, p.value ? d.value = new ro(n.value, {
        crop(k) {
        }
      }) : d.value.destroy();
    }, b = z("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((k) => {
        l.value = "", v.value = !1, jt(a.value, {
          method: "POST",
          params: Object.assign(b, {
            q: "upload",
            adapter: s.selection.adapter,
            path: s.selection.item.path,
            file: k
          }),
          name: s.selection.item.basename,
          json: !1
        }).then((M) => {
          l.value = o("Updated."), n.value.src = er(
            s.selection.adapter,
            s.selection.item.path
          ), g(), e("load");
        }).catch((M) => {
          l.value = o(M.message), v.value = !0;
        });
      });
    };
    return we(() => {
      e("load");
    }), (k, M) => (w(), I(ne, null, [
      h("div", mu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, vu),
        h("div", bu, [
          p.value ? (w(), I("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(D(o)("Crop")), 1)) : Y("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: M[0] || (M[0] = ($) => g())
          }, E(p.value ? D(o)("Cancel") : D(o)("Edit")), 1)
        ])
      ]),
      h("div", yu, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: D(er)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Su)
      ]),
      l.value.length ? (w(), q(Ne, {
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
}, _u = { class: "flex" }, xu = ["aria-label"], Du = /* @__PURE__ */ h("div", null, null, -1), ku = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return we(() => {
      e("load");
    }), (s, o) => (w(), I(ne, null, [
      h("div", _u, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, xu)
      ]),
      Du
    ], 64));
  }
}, Mu = ["aria-label"], Iu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Cu = ["src"], Eu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Mu),
      h("div", null, [
        h("video", Iu, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Cu),
          te(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Tu = ["aria-label"], Lu = {
  class: "w-full",
  controls: ""
}, Au = ["src"], $u = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Tu),
      h("div", null, [
        h("audio", Lu, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Au),
          te(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Nu = ["aria-label"], Ou = ["data"], ju = ["src"], Pu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), I(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Nu),
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
        `, 8, ju)
        ], 8, Ou)
      ])
    ], 64));
  }
}, zu = { class: "sm:flex custom-new-folder-popup edit-preview-container" }, Ru = { class: "custom-file-picker-title" }, Bu = { class: "file-picker-title-img" }, Vu = /* @__PURE__ */ h("svg", {
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
], -1), Hu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Uu = /* @__PURE__ */ h("hr", null, null, -1), Zu = { class: "mt-3 text-center w-full p-4 h-full create-folder-form edit-preview" }, Yu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Wu = {
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
], -1), Ku = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Gu = { class: "font-bold pl-2" }, Xu = { class: "font-bold pl-2" }, qu = { class: "search-terms-div-preview bg-white dark:bg-gray-800" }, Qu = /* @__PURE__ */ h("div", null, [
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
], -1), Ju = /* @__PURE__ */ h("hr", null, null, -1), ed = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), td = { id: "tags-space" }, rd = ["onClick"], sd = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
], -1), od = { class: "bg-white custom-file-picker-action" }, id = {
  name: "VFModalPreview"
}, nd = /* @__PURE__ */ Object.assign(id, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Ae(), o = z("emitter"), { t: a } = z("i18n"), n = L(!1), d = (S) => n.value = S;
    let p = L([]);
    we(() => {
      g();
    });
    const l = (S) => (e.selection.item.mime_type ?? "").startsWith(S), v = () => {
      const S = s.value + "?" + Ge({
        q: "download",
        adapter: e.selection.adapter,
        path: e.selection.item.path
      });
      o.emit("vf-download", S);
    };
    function g() {
      let S = document.querySelector("#search-terms-file-picker");
      S.addEventListener("keypress", (k) => {
        k.key === "Enter" && (p.value.push({
          tag_id: p.value.length + 1,
          tag_name: k.target.value
        }), S.value = "");
      });
    }
    function b(S) {
      const k = p.value.findIndex((M) => M.tag_id === S);
      p.value.splice(k, 1);
    }
    return (S, k) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", qu, [
          Qu,
          Ju,
          ed,
          h("div", td, [
            (w(!0), I(ne, null, ve(D(p), (M) => (w(), I("span", {
              key: M.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: ($) => b(M.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, rd),
              h("p", null, E(M.tag_name), 1)
            ]))), 128))
          ])
        ]),
        sd,
        h("div", od, [
          h("button", {
            type: "button",
            onClick: k[6] || (k[6] = (M) => D(o).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(D(a)("Close")), 1),
          h("button", {
            type: "button",
            onClick: k[7] || (k[7] = (M) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(D(a)("Download")), 1)
        ])
      ]),
      default: G(() => [
        h("div", zu, [
          h("div", Ru, [
            h("div", Bu, [
              Vu,
              h("h3", Hu, E(D(a)("Edit")), 1)
            ]),
            Uu
          ]),
          h("div", Zu, [
            h("div", null, [
              l("text") ? (w(), q(Ic, {
                key: 0,
                selection: r.selection,
                onLoad: k[0] || (k[0] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), q(wu, {
                key: 1,
                selection: r.selection,
                onLoad: k[1] || (k[1] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), q(Eu, {
                key: 2,
                selection: r.selection,
                onLoad: k[2] || (k[2] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), q($u, {
                key: 3,
                selection: r.selection,
                onLoad: k[3] || (k[3] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), q(Pu, {
                key: 4,
                selection: r.selection,
                onLoad: k[4] || (k[4] = (M) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(ku, {
                key: 5,
                selection: r.selection,
                onLoad: k[5] || (k[5] = (M) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Yu, [
              n.value == !1 ? (w(), I("div", Wu, [
                Fu,
                h("span", null, E(D(a)("Loading")), 1)
              ])) : Y("", !0)
            ])
          ])
        ]),
        h("div", Ku, [
          h("div", null, [
            h("span", Gu, E(D(a)("File Size")) + ": ", 1),
            te(E(D(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Xu, E(D(a)("Last Modified")) + ": ", 1),
            te(" " + E(D(us)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ad = { class: "sm:flex custom-new-folder-popup" }, ld = { class: "custom-file-picker-title" }, cd = { class: "file-picker-title-img" }, ud = /* @__PURE__ */ h("svg", {
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
], -1), dd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, hd = /* @__PURE__ */ h("hr", null, null, -1), fd = { class: "mt-3 text-center w-full p-4 h-full" }, pd = { class: "mt-2 create-folder-form" }, gd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, md = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, vd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), bd = [
  vd
], yd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), wd = [
  Sd
], _d = { class: "ml-1.5" }, xd = ["onKeyup"], Dd = {
  name: "VFModalRename"
}, kd = /* @__PURE__ */ Object.assign(Dd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = L(e.selection.items[0]), d = L(e.selection.items[0].basename), p = L(""), l = () => {
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
    return (v, g) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => D(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", ad, [
          h("div", ld, [
            h("div", cd, [
              ud,
              h("h3", dd, E(D(a)("Rename")), 1)
            ]),
            hd
          ]),
          h("div", fd, [
            h("div", pd, [
              h("p", gd, [
                n.value.type == "dir" ? (w(), I("svg", md, bd)) : (w(), I("svg", yd, wd)),
                h("span", _d, E(n.value.basename), 1)
              ]),
              Ee(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => d.value = b),
                onKeyup: it(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, xd), [
                [nt, d.value]
              ]),
              p.value.length ? (w(), q(Ne, {
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
}), Md = { class: "flex flex-col h-full items-center" }, Id = { class: "custom-file-picker-title" }, Cd = { class: "file-picker-title-img" }, Ed = /* @__PURE__ */ h("svg", {
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
], -1), Td = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ld = /* @__PURE__ */ h("hr", null, null, -1), Ad = { class: "mt-3 text-center custom-file-picker-body" }, $d = { class: "mt-2" }, Nd = { class: "text-gray-500 mb-1" }, Od = ["id"], jd = {
  key: 0,
  class: "py-2"
}, Pd = { class: "search-terms-div bg-white dark:bg-gray-800" }, zd = /* @__PURE__ */ h("div", null, [
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
], -1), Rd = /* @__PURE__ */ h("hr", null, null, -1), Bd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), Vd = { id: "tags-space" }, Hd = ["onClick"], Ud = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
], -1), Zd = { class: "bg-white custom-file-picker-action" }, Yd = ["disabled", "onClick"], Wd = {
  name: "VFModalUpload"
}, Fd = /* @__PURE__ */ Object.assign(Wd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter"), { apiUrl: o } = Ae(), { t: a } = z("i18n"), n = z("maxFileSize"), d = L(null), p = L(null), l = L(null), v = L([]), g = L("");
    let b = L([]);
    const S = L(!0), k = () => {
      g.value = "", d.value.start();
    }, M = z("postData");
    we(() => {
      d.value = new ht.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: p.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ge(
          Object.assign(M, {
            q: "upload",
            adapter: e.current.adapter,
            path: e.current.dirname
          })
        ),
        headers: {
          ...Ot && { "X-CSRF-Token": Ot }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(H, j) {
            S.value = !1, ht.each(j, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: ht.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(H, j) {
            v.value[v.value.findIndex((T) => T.id == j.id)].percent = j.percent + "%";
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
          Error: function(H, j) {
            d.value.stop(), j.code == ht.HTTP_ERROR ? g.value = a(JSON.parse(j.response).message) : j.code == ht.FILE_SIZE_ERROR ? g.value = a(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [n]
            ) : g.value = a(j.message);
          }
        }
      }), d.value.init(), $();
    });
    function $() {
      let H = document.querySelector("#search-terms-file-picker");
      H.addEventListener("keypress", (j) => {
        j.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: j.target.value
        }), H.value = "");
      });
    }
    function N(H) {
      const j = b.value.findIndex((T) => T.tag_id === H);
      b.value.splice(j, 1);
    }
    return (H, j) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", Pd, [
          zd,
          Rd,
          Bd,
          h("div", Vd, [
            (w(!0), I(ne, null, ve(D(b), (T) => (w(), I("span", {
              key: T.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (B) => N(T.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, Hd),
              h("p", null, E(T.tag_name), 1)
            ]))), 128))
          ])
        ]),
        Ud,
        h("div", Zd, [
          h("button", {
            disabled: S.value,
            onClick: We(k, ["prevent"]),
            type: "button",
            class: ce([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, E(D(a)("Upload")), 11, Yd),
          h("button", {
            type: "button",
            onClick: j[1] || (j[1] = (T) => D(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(D(a)("Cancel")), 1)
        ])
      ]),
      default: G(() => [
        h("div", Md, [
          h("div", Id, [
            h("div", Cd, [
              Ed,
              h("h3", Td, E(D(a)("Upload files")), 1)
            ]),
            Ld
          ]),
          h("div", Ad, [
            h("div", $d, [
              h("div", Nd, [
                (w(!0), I(ne, null, ve(v.value, (T) => (w(), I("div", null, [
                  h("div", {
                    id: T.id
                  }, [
                    te(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    h("b", null, E(T.percent), 1)
                  ], 8, Od)
                ]))), 256)),
                v.value.length ? Y("", !0) : (w(), I("div", jd, E(D(a)("No files selected!")), 1))
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
                }, E(D(a)("Select Files")), 513)
              ], 512),
              g.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: j[0] || (j[0] = (T) => g.value = ""),
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
}), Kd = { class: "sm:flex custom-new-folder-popup" }, Gd = { class: "custom-file-picker-title" }, Xd = { class: "file-picker-title-img" }, qd = /* @__PURE__ */ h("svg", {
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
], -1), Qd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Jd = /* @__PURE__ */ h("hr", null, null, -1), eh = { class: "mt-3 text-center w-full p-4 h-full" }, th = { class: "mt-2 create-folder-form" }, rh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, sh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, oh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ih = [
  oh
], nh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ah = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), lh = [
  ah
], ch = { class: "ml-1.5" }, uh = ["onKeyup", "placeholder"], dh = {
  name: "VFModalArchive"
}, hh = /* @__PURE__ */ Object.assign(dh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = L(""), d = L(""), p = L(e.selection.items), l = () => {
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
    return (v, g) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => D(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Kd, [
          h("div", Gd, [
            h("div", Xd, [
              qd,
              h("h3", Qd, E(D(a)("Archive the files")), 1)
            ]),
            Jd
          ]),
          h("div", eh, [
            h("div", th, [
              (w(!0), I(ne, null, ve(p.value, (b) => (w(), I("p", rh, [
                b.type == "dir" ? (w(), I("svg", sh, ih)) : (w(), I("svg", nh, lh)),
                h("span", ch, E(b.basename), 1)
              ]))), 256)),
              Ee(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => n.value = b),
                onKeyup: it(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: D(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, uh), [
                [nt, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
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
}), fh = { class: "sm:flex sm:items-start" }, ph = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), gh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, mh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, vh = { class: "mt-2" }, bh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, yh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), wh = [
  Sh
], _h = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Dh = [
  xh
], kh = { class: "ml-1.5" }, Mh = { class: "my-1 text-sm text-gray-500" }, Ih = {
  name: "VFModalUnarchive"
}, Ch = /* @__PURE__ */ Object.assign(Ih, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n");
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
    return (v, g) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: g[1] || (g[1] = (b) => D(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", fh, [
          ph,
          h("div", gh, [
            h("h3", mh, E(D(a)("Unarchive")), 1),
            h("div", vh, [
              (w(!0), I(ne, null, ve(p.value, (b) => (w(), I("p", bh, [
                b.type == "dir" ? (w(), I("svg", yh, wh)) : (w(), I("svg", _h, Dh)),
                h("span", kh, E(b.basename), 1)
              ]))), 256)),
              h("p", Mh, E(D(a)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Ne, {
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
}), Eh = { class: "sm:flex sm:items-start" }, Th = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Lh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ah = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, $h = { class: "mt-2" }, Nh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Oh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ph = [
  jh
], zh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Rh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Bh = [
  Rh
], Vh = { class: "ml-1.5" }, Hh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Uh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Zh = /* @__PURE__ */ h("svg", {
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
], -1), Yh = { class: "ml-1.5 overflow-auto" }, Wh = {
  name: "VFModalMove"
}, Fh = /* @__PURE__ */ Object.assign(Wh, {
  props: {
    selection: Object,
    current: Object,
    movePromptProp: Boolean,
    movedItemsProp: Object
  },
  setup(r) {
    const e = r, s = z("emitter"), { t: o } = z("i18n");
    z("storage");
    const a = z("adapter");
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
          items: JSON.stringify(b.map(({ path: S, type: k }) => ({ path: S, type: k }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: e.current.dirname,
            to: e.selection.items.to.path,
            files: b.map(({ path: S, type: k }) => ({ path: S, type: k }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (S) => {
          p.value = o(S.message);
        }
      });
    };
    return ot(() => {
      n.value = e.movedItemsProp, n.value.length > 0 && g(n.value);
    }, {
      immediate: !1
    }), (b, S) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: S[1] || (S[1] = (k) => D(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(D(o)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Eh, [
          Th,
          h("div", Lh, [
            h("h3", Ah, E(D(o)("Move files")), 1),
            h("div", $h, [
              (w(!0), I(ne, null, ve(d.value, (k) => (w(), I("p", Nh, [
                k.type == "dir" ? (w(), I("svg", Oh, Ph)) : (w(), I("svg", zh, Bh)),
                h("span", Vh, E(k.path), 1)
              ]))), 256)),
              h("p", Hh, E(D(o)("Are you sure you want to move these files?")), 1),
              h("p", Uh, [
                Zh,
                h("span", Yh, E(r.selection.items.to.path), 1)
              ]),
              p.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: S[0] || (S[0] = (k) => p.value = ""),
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
}), Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: hh,
  ModalDelete: Wl,
  ModalMessage: ec,
  ModalMove: Fh,
  ModalNewFile: wc,
  ModalNewFolder: hc,
  ModalPreview: nd,
  ModalRename: kd,
  ModalUnarchive: Ch,
  ModalUpload: Fd
}, Symbol.toStringTag, { value: "Module" })), qt = {
  VueFinder: vl,
  ...Kh
};
const qh = {
  install(r) {
    for (const e in qt)
      if (qt.hasOwnProperty(e)) {
        const s = qt[e];
        r.component(s.name, s);
      }
  }
};
export {
  qh as default
};
