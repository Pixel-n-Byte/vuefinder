import { ref as $, watch as ze, inject as O, openBlock as _, createElementBlock as M, createElementVNode as h, unref as x, normalizeClass as ht, createCommentVNode as K, createTextVNode as et, toDisplayString as C, createVNode as Mt, TransitionGroup as No, withCtx as F, Fragment as lt, renderList as wt, reactive as $e, onMounted as Ct, onUpdated as Oo, withDirectives as St, vShow as Ee, withModifiers as Wt, nextTick as Re, isRef as ls, vModelSelect as zr, createStaticVNode as jo, customRef as Po, withKeys as oe, vModelText as ie, normalizeStyle as cs, provide as Ut, createBlock as X, resolveDynamicComponent as zo, renderSlot as Je } from "vue";
import de from "plupload";
var as;
const Ne = (as = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : as.getAttribute("content"), Oe = (r, { method: t = "get", params: s = {}, json: o = !0, signal: a = null }) => {
  const n = { method: t };
  if (n.signal = a, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    n.headers = {}, Ne && (n.headers["X-CSRF-Token"] = Ne);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    n.body = d;
  }
  return fetch(r, n).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Ro(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(a) {
      a(s);
    }), (o = r.get("*")) && o.slice().map(function(a) {
      a(t, s);
    });
  } };
}
function Qe(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = $(JSON.parse(t));
  ze(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function a(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function n() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: a, clearStore: n };
}
const Rr = $("");
function At() {
  function r(t) {
    Rr.value = t;
  }
  return { apiUrl: Rr, setApiUrl: r };
}
const Bo = { class: "border-neutral-300 flex justify-end items-center py-1 text-sm relative" }, Vo = {
  key: 0,
  class: "flex text-center"
}, Ho = ["aria-label"], Uo = /* @__PURE__ */ h("svg", {
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
], -1), Zo = [
  Uo
], Yo = ["aria-label"], Wo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Ko = [
  Wo
], Fo = ["aria-label"], Go = /* @__PURE__ */ h("a", {
  type: "button",
  class: "custom-upload-button"
}, "Upload", -1), Xo = [
  Go
], qo = ["aria-label"], Jo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Qo = [
  Jo
], ti = {
  key: 1,
  class: "flex text-center"
}, ei = { class: "pl-2" }, ri = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, si = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, oi = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ii = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ni = [
  oi,
  ii
], ai = { class: "flex text-center items-center justify-end" }, li = ["aria-label"], ci = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), ui = [
  ci
], di = ["aria-label"], hi = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, fi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, pi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, gi = ["aria-label"], mi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, vi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, bi = {
  name: "VFToolbar"
}, yi = /* @__PURE__ */ Object.assign(bi, {
  props: {
    data: Object
  },
  setup(r) {
    const t = O("emitter"), { getStore: s, setStore: o } = O("storage"), { t: a } = O("i18n"), n = $(s("viewport", "grid")), d = $([]), m = $(s("full-screen", !1)), l = $("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = O("loadingState"), p = () => v.value, b = () => {
      m.value = !m.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), t.on("vf-view-toggle", (S) => {
      o("viewport", S), n.value = S;
    }), (S, I) => (_(), M("div", Bo, [
      l.value.length ? (_(), M("div", ti, [
        h("div", ei, [
          et(C(x(a)("Search results for")) + " ", 1),
          h("span", ri, C(l.value), 1)
        ]),
        p() ? (_(), M("svg", si, ni)) : K("", !0)
      ])) : (_(), M("div", Vo, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: I[0] || (I[0] = (E) => x(t).emit("vf-modal-show", {
            type: "new-folder",
            items: d.value
          }))
        }, Zo, 8, Ho),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: I[1] || (I[1] = (E) => !d.value.length || x(t).emit("delete-button"))
        }, [
          (_(), M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ko, 2))
        ], 8, Yo),
        h("div", {
          class: "mx-1.5 cusom-upload-button-div absolute",
          "aria-label": x(a)("Upload"),
          "data-microtip-position": "bottom",
          onClick: I[2] || (I[2] = (E) => x(t).emit("vf-modal-show", {
            type: "upload",
            items: d.value
          }))
        }, Xo, 8, Fo),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (_(), M("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: I[3] || (I[3] = (E) => !d.value.length || x(t).emit("vf-modal-show", {
            type: "unarchive",
            items: d.value
          }))
        }, [
          (_(), M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Qo, 2))
        ], 8, qo)) : K("", !0)
      ])),
      h("div", ai, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (_(), M("svg", {
            onClick: I[4] || (I[4] = (E) => x(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, ui))
        ], 8, li),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (_(), M("svg", hi, [
            m.value ? (_(), M("path", fi)) : (_(), M("path", pi))
          ]))
        ], 8, di),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: I[5] || (I[5] = (E) => l.value.length || x(t).emit("vf-view-toggle", n.value == "list" ? "grid" : "list"))
        }, [
          (_(), M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([
              l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            n.value == "grid" ? (_(), M("path", mi)) : K("", !0),
            n.value == "list" ? (_(), M("path", vi)) : K("", !0)
          ], 2))
        ], 8, gi)
      ])
    ]));
  }
}), hr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
var Si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var us = { exports: {} };
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(Si, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var g, i, f, y, w = [], k = !0, V = !1;
        try {
          if (f = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            k = !1;
          } else
            for (; !(k = (g = f.call(e)).done) && (w.push(g.value), w.length !== u); k = !0)
              ;
        } catch (W) {
          V = !0, i = W;
        } finally {
          try {
            if (!k && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (V)
              throw i;
          }
        }
        return w;
      }
    }
    function o(c, u) {
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(i) {
          return Object.getOwnPropertyDescriptor(c, i).enumerable;
        })), e.push.apply(e, g);
      }
      return e;
    }
    function a(c) {
      for (var u = 1; u < arguments.length; u++) {
        var e = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(e), !0).forEach(function(g) {
          l(c, g, e[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(e, g));
        });
      }
      return c;
    }
    function n(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var g = u[e];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, R(g.key), g);
      }
    }
    function m(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, e) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = e, c;
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
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, p(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, i) {
        return g.__proto__ = i, g;
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
    function I(c, u, e) {
      return S() ? I = Reflect.construct.bind() : I = function(i, f, y) {
        var w = [null];
        w.push.apply(w, f);
        var k = Function.bind.apply(i, w), V = new k();
        return y && b(V, y.prototype), V;
      }, I.apply(null, arguments);
    }
    function E(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function L(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return L = function(g) {
        if (g === null || !E(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, i);
        }
        function i() {
          return I(g, arguments, p(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(i, g);
      }, L(c);
    }
    function T(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function U(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return T(c);
    }
    function j(c) {
      var u = S();
      return function() {
        var g = p(c), i;
        if (u) {
          var f = p(this).constructor;
          i = Reflect.construct(g, arguments, f);
        } else
          i = g.apply(this, arguments);
        return U(this, i);
      };
    }
    function P(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, e, g) {
        var i = P(u, e);
        if (i) {
          var f = Object.getOwnPropertyDescriptor(i, e);
          return f.get ? f.get.call(arguments.length < 3 ? u : g) : f.value;
        }
      }, B.apply(this, arguments);
    }
    function G(c, u) {
      return q(c) || s(c, u) || rt(c, u) || pt();
    }
    function D(c) {
      return z(c) || ot(c) || rt(c) || vt();
    }
    function z(c) {
      if (Array.isArray(c))
        return ct(c);
    }
    function q(c) {
      if (Array.isArray(c))
        return c;
    }
    function ot(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function rt(c, u) {
      if (c) {
        if (typeof c == "string")
          return ct(c, u);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return ct(c, u);
      }
    }
    function ct(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var e = 0, g = new Array(u); e < u; e++)
        g[e] = c[e];
      return g;
    }
    function vt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, u) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = rt(c)) || u && c && typeof c.length == "number") {
          e && (c = e);
          var g = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
              };
            },
            e: function(k) {
              throw k;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, y = !1, w;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var k = e.next();
          return f = k.done, k;
        },
        e: function(k) {
          y = !0, w = k;
        },
        f: function() {
          try {
            !f && e.return != null && e.return();
          } finally {
            if (y)
              throw w;
          }
        }
      };
    }
    function A(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var g = e.call(c, u || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var N = function(u, e, g) {
      var i = u.x, f = u.y, y = g.x, w = g.y, k = {
        "+": {
          x: i + y,
          y: f + w
        },
        "-": {
          x: i - y,
          y: f - w
        },
        "*": {
          x: i * y,
          y: f * w
        },
        "/": {
          x: i / y,
          y: f / w
        }
      };
      return k[e];
    }, tt = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, H = function(u) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: e,
        height: e
      };
    }, _t = function(u) {
      return {
        x: u,
        y: u
      };
    }, bt = function(c, u) {
      var e = u;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var g = new MutationObserver(e);
      c.forEach(function(f, y) {
        g.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return po(g, e);
      };
      return {
        observer: g,
        callback: e,
        cleanup: i
      };
    }, xe = function(c) {
      var u = Me(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, De = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ye = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, ke = function(c, u) {
      var e;
      return function() {
        for (var g = arguments.length, i = new Array(g), f = 0; f < g; f++)
          i[f] = arguments[f];
        var y = function() {
          e = null, c.apply(void 0, i);
        };
        clearTimeout(e), e = setTimeout(y, u);
      };
    }, We = function() {
      var c, u, e, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Er = function(c) {
      var u = function e(g) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = g[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (g.push(y), f++, e(g, f)) : g;
      };
      return u([c]);
    }, ro = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * u,
        height: (c.clientHeight || e.height) * u
      };
    }, Tr = function(c, u) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return jt(c).forEach(function(g) {
        var i = u.getRect(g);
        e.top = Math.min(e.top, i.top), e.left = Math.min(e.left, i.left), e.bottom = Math.max(e.bottom, i.bottom), e.right = Math.max(e.right, i.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Me = function(c) {
      return !c || c instanceof Document ? We() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : We().x,
        y: c.scrollTop >= 0 ? c.scrollTop : We().y
      };
    }, Lr = function(c) {
      var u = c.elementRect, e = c.containerRect, g = c.tolerance, i = g === void 0 ? {
        x: 0,
        y: 0
      } : g, f = [];
      return u.top - i.y < e.top && f.push("top"), u.left - i.x < e.left && f.push("left"), u.bottom + i.y > e.bottom && f.push("bottom"), u.right + i.y > e.right && f.push("right"), /** @type {DSEdges} */
      f;
    }, so = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, oo = function(c) {
      var u = c.scrollAmount, e = c.initialPointerPos, g = c.pointerPos, i = {};
      return g.x > e.x - u.x ? (i.left = e.x - u.x, i.width = g.x - e.x + u.x) : (i.left = g.x, i.width = e.x - g.x - u.x), g.y > e.y - u.y ? (i.top = e.y - u.y, i.height = g.y - e.y + u.y) : (i.top = g.y, i.height = e.y - g.y - u.y), i;
    }, Ar = function(u) {
      var e = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return e;
      if (g.transform.indexOf("3d") >= 0) {
        var i = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var f, y = (f = i[1]) === null || f === void 0 ? void 0 : f.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var w = g.transform.trim().match(/matrix\((.*?)\)/);
      if (w && w.length) {
        var k, V = (k = w[1]) === null || k === void 0 ? void 0 : k.split(",");
        e.x = parseInt(V[4]) || 0, e.y = parseInt(V[5]) || 0;
      }
      return e;
    }, io = function(u) {
      var e = u.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Ar(u);
      var g = {
        x: 0,
        y: 0
      }, i = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var f, y = (f = i[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var w, k = (w = y[1]) === null || w === void 0 ? void 0 : w.split(",");
          g.x = parseInt(k[0]) || 0, g.y = parseInt(k[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ar(u) : g;
    }, no = function(u) {
      var e = u.style, g = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!g.x && !g.x) {
        var i = window.getComputedStyle(u);
        return {
          x: parseInt(i.left) || 0,
          y: parseInt(i.top) || 0
        };
      }
      return g;
    }, ao = function(c, u) {
      return u ? io(c) : no(c);
    }, lo = function(c) {
      var u = c.element, e = c.edges, g = c.elementRect, i = c.containerRect, f = c.elementPos, y = c.useTransform;
      e.includes("top") && le(u, {
        y: f.y + i.top - g.top,
        x: f.x
      }, y), e.includes("left") && le(u, {
        y: f.y,
        x: f.x + i.left - g.left
      }, y), e.includes("bottom") && le(u, {
        y: f.y + i.bottom - g.bottom,
        x: f.x
      }, y), e.includes("right") && le(u, {
        y: f.y,
        x: f.x + i.right - g.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, e = c.node, g = u.position, i = g === "absolute" || g === "relative" || g === "fixed";
      !(e instanceof Document) && !i && (e.style.position = "relative");
    }, co = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, g = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, w = c.canScroll, k = c.scrollCallback, V = {
        x: 0,
        y: 0
      }, W = u ? e * 4 * g : e * g;
      return f.left.includes(i) && (V.x = y.x || -W, !u && !y.x && w && k(["left"], e)), f.right.includes(i) && (V.x = y.x || W, !u && !y.x && w && k(["right"], e)), f.up.includes(i) && (V.y = y.y || -W, !u && !y.y && w && k(["top"], e)), f.down.includes(i) && (V.y = y.y || W, !u && !y.y && w && k(["bottom"], e)), V;
    }, uo = function(c) {
      var u = c.element, e = c.force, g = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !e || (i.has(u) ? g && i.delete(u) : i.add(u), u.classList.add(f));
    }, ho = function(c) {
      var u = c.element, e = c.force, g = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !e)
        return !1;
      var y = g.has(u), w = i.has(u);
      y && !w ? g.delete(u) : !y && w && g.add(u), u.classList.remove(f);
    }, ae = function(u, e, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, g, i) {
      if (e === void 0)
        return g ? l({}, u, i) : {};
      if (e === null)
        return l({}, u, null);
      var f = !0, y = !1, w = typeof i == "string";
      w && (f = typeof e == "string" || e instanceof String), w && !f && (y = !0, ae(u, "string"));
      var k = !Number.isNaN(i) && typeof i == "number";
      k && (f = !Number.isNaN(e) && typeof e == "number"), k && !f && (y = !0, ae(u, "number"));
      var V = Object.prototype.toString.call(i) === "[object Object]";
      V && (f = Object.prototype.toString.call(e) === "[object Object]"), V && !f && (y = !0, ae(u, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof e == "boolean"), W && !f && (y = !0, ae(u, "boolean"));
      var nt = Array.isArray(i);
      nt && (f = Array.isArray(e)), nt && !f && (y = !0, ae(u, "array"));
      var xt = y || g;
      return u === "dragKeys" && f ? l({}, u, Object.assign(i, e)) : u === "dragKeys" && !f ? xt ? l({}, u, i) : {} : (u === "dropZones" && f && new Set(e.map(function(Dt) {
        return Dt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, e) : xt ? l({}, u, i) : {});
    }, fo = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, qt = function(c, u) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (e > 0) {
        var i = (c.right - c.left) * e, f = (c.bottom - c.top) * e;
        g = {
          left: c.left + i,
          right: c.right - i,
          top: c.top + f,
          bottom: c.bottom - f
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Nr = function(c) {
      var u = c.element, e = c.posDirection, g = c.containerRect, i = c.useTransform, f = ao(u, i), y = N(f, "+", e);
      le(u, y, i);
      var w = u.getBoundingClientRect(), k = Lr({
        elementRect: w,
        containerRect: g
      });
      lo({
        element: u,
        edges: k,
        elementRect: w,
        containerRect: g,
        elementPos: y,
        useTransform: i
      });
    }, po = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, go = function(c, u, e) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? g || document.body : c, f = u.includes("top") && i.scrollTop > 0, y = u.includes("bottom") && i.scrollTop < i.scrollHeight, w = u.includes("left") && i.scrollLeft > 0, k = u.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * e), y && (i.scrollTop += 1 * e), w && (i.scrollLeft -= 1 * e), k && (i.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, mo = function(c) {
      for (var u = c.subscribe, e = c.publish, g = c.Interaction, i = c.SelectedSet, f = c.DropZones, y = {
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
            condition: function(nt) {
              return nt.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var nt = f.getTarget();
              return a({}, nt ? {
                dropTarget: nt.toObject()
              } : {});
            }
          }
        ]
      }, w = function() {
        var nt = G(V[k], 2), xt = nt[0], Dt = nt[1];
        ["pre", !1].forEach(function(It) {
          return u(It ? "".concat(xt, ":").concat(It) : xt, function(it) {
            return Dt.forEach(function(mt) {
              return (!mt.condition || mt.condition(it)) && e(It ? "".concat(It).concat(mt.name) : mt.name, a(a({
                items: i.elements,
                isDragging: g.isDragging
              }, it), mt.extraData ? mt.extraData(it) : {}));
            });
          });
        });
      }, k = 0, V = Object.entries(y); k < V.length; k++)
        w();
    }, jt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, vo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(i) {
          e.reset(), e._node = i, $r({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), l(this, "start", function() {
          e._observers = bt(e.parentNodes, ke(function(i) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: i,
              item: e
            });
          }, 60));
        }), l(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), l(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), l(this, "scroll", function(i, f) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: f
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), go(e._node, i, f), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          e.setArea(f.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return m(c, [{
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
          return this._rect ? this._rect : this._rect = ro(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.HTMLNode);
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(i) {
              return i.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(i) {
              return i.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(i) {
              return i.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(i) {
              return i.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(D(e._dragKeys.up), D(e._dragKeys.down), D(e._dragKeys.left), D(e._dragKeys.right));
        }), l(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var k = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], k), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var V = co({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: w,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (V = e.limitDirection(V)), e._elements.forEach(function(W) {
              return Nr({
                element: W,
                posDirection: V,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], k);
          }
        }), l(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var k = {
              event: f,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], k);
          }
        }), l(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), l(this, "stop", function(i) {
          i != null && i.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), l(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !e._elements.length || y || e.DS.continue)) {
            var w = N(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (w = e.limitDirection(w)), e._elements.forEach(function(k) {
              return Nr({
                element: k,
                posDirection: w,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(i) {
          var f = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, w = {
            top: f.top - e._selectionRect.top + y.y,
            left: f.left - e._selectionRect.left + y.x,
            bottom: f.bottom - e._selectionRect.bottom + y.y,
            right: f.right - e._selectionRect.right + y.x
          };
          return i.x === 0 && i.y === 0 || (i.y < 0 && (i.y = Math.max(i.y, w.top)), i.x < 0 && (i.x = Math.max(i.x, w.left)), i.y > 0 && (i.y = Math.min(i.y, w.bottom)), i.x > 0 && (i.x = Math.min(i.x, w.right)), e._selectionRect.top += i.y, e._selectionRect.bottom += i.y, e._selectionRect.left += i.x, e._selectionRect.right += i.x), i;
        }), l(this, "handleZIndex", function(i) {
          e._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? N(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? N(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, g;
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS, i = u.id, f = u.element, y = u.droppables;
        n(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(w) {
          if (!e.isDestroyed) {
            var k = e.droppables.filter(function(V) {
              return e.DS.SelectedSet.has(V);
            });
            k.length && (k.forEach(function(V) {
              V.classList[w]("".concat(e.Settings.droppableClass)), V.classList[w]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[w]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var w;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(k) {
            k.classList.remove(e.Settings.droppedTargetClass), k.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(k) {
            return !e.DS.SelectedSet.has(k);
          }), (w = e._itemsDropped) !== null && w !== void 0 && w.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var w, k, V;
          e.isDestroyed || (e._itemsDropped = D(new Set([].concat(D(e._itemsDropped), D((w = e.droppables) === null || w === void 0 ? void 0 : w.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (k = e._itemsDropped) === null || k === void 0 || k.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (V = e._itemsDropped) !== null && V !== void 0 && V.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var w = !1;
          e.droppables.forEach(function(k) {
            e.itemsInside.includes(k) ? (k.classList.add("".concat(e.Settings.droppedInsideClass)), k.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), w = !0) : (k.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), k.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || k.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), w ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), l(this, "start", function(w) {
          var k = w.isDragging;
          !k || e.isDestroyed || e.setReadyClasses("add");
        }), l(this, "stop", function(w) {
          var k = w.isDragging;
          !k || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = jt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(w) {
          var k = w.settings;
          e.element && (e.element.classList.remove(k["dropZoneClass:pre"]), e.element.classList.add(k.dropZoneClass));
        }), this._observers = bt(this.parentNodes, ke(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(e.Settings.droppedTargetClass)), g.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), g.classList.remove("".concat(e.Settings.droppableClass)), g.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
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
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return qt(e.DS.SelectableSet.rects.get(g), e.rect, e.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
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
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), So = /* @__PURE__ */ m(
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
        var e = this, g = u.DS;
        n(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(i) {
          var f = i.dropZones;
          f && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = f.map(function(y) {
            return new yo(a({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(w) {
              var k = e._zonesByDroppable.get(w);
              if (!(k != null && k.length))
                return e._zonesByDroppable.set(w, [y]);
              e._zonesByDroppable.set(w, D(new Set([].concat(D(k), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          e._zones.forEach(function(f) {
            f !== i && f.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, f) {
          for (var y = f.x, w = f.y, k = 0, V = i.length; k < V; k++) {
            var W = e._zoneByElement.get(i[k]);
            if (W && qt(W.rect, {
              left: y,
              right: y,
              top: w,
              bottom: w
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(i) {
          var f = i.isDragging;
          if (f) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(i) {
          var f = e._zoneById.get(i);
          return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        }), l(this, "getItemsInsideById", function(i, f) {
          var y = e._zoneById.get(i);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
          var w = y.itemsInside;
          return f && y.handleItemsInsideClasses(), w;
        }), l(this, "getTarget", function(i) {
          var f;
          if ((f = e._zones) !== null && f !== void 0 && f.length) {
            var y = (i == null ? void 0 : i.x) || e.DS.stores.PointerStore.currentVal.x, w = (i == null ? void 0 : i.y) || e.DS.stores.PointerStore.currentVal.y, k = document.elementsFromPoint(y, w);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              k,
              {
                x: y,
                y: w
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(i) {
          var f = i.settings;
          return e.setDropZones(f);
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
    ), wo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), l(this, "start", function(i) {
          return e.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: e.isDragging
          });
        }), l(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), e._canInteract(i) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(i), e.DS.publish("Interaction:start", {
            event: i,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), l(this, "isDragEvent", function(i) {
          var f = (
            /** @type {Element} */
            i.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !f ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(f) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )), !!e.DS.SelectedSet.has(f));
        }), l(this, "onClick", function(i) {
          var f = i.event;
          if (e._canInteract(f) && !(f.detail > 0)) {
            var y = e.DS, w = y.stores, k = w.PointerStore, V = w.KeyStore, W = y.SelectableSet, nt = y.SelectedSet;
            k.start(f);
            var xt = (
              /** @type {any} */
              f.target
            );
            W.has(xt) && (V.isMultiSelectKeyPressed(f) || nt.clear(), nt.toggle(xt), e.reset());
          }
        }), l(this, "stop", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (i.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (i.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), i.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), l(this, "update", function(i) {
          var f = i.event, y = i.scroll_directions, w = i.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: w,
            isDragging: e.isDragging
          });
        }), l(this, "reset", function(i) {
          return e.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: e.isDragging
          });
        }), l(this, "_reset", function(i) {
          var f = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: i,
            isDragging: f
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          e.stop(f["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(i) {
          var f = i.event;
          return e.start(f);
        }), this.DS.subscribe("Interaction:start:pre", function(i) {
          var f = i.event;
          return e._start(f);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(i) {
          var f = i.event;
          return e._reset(f);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var g = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !g && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), _o = /* @__PURE__ */ m(
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(i, f) {
          return Array.isArray(e.subscribers[i]) || (e.subscribers[i] = []), e.subscribers[i].push(f), e.subscribers[i].length - 1;
        }), l(this, "unsubscribe", function(i, f, y) {
          y >= 0 ? e.subscribers[i].splice(y, 1) : f && (e.subscribers[i] = e.subscribers[i].filter(function(w) {
            return w !== f;
          }));
        }), l(this, "publish", function(i, f) {
          Array.isArray(i) ? i.forEach(function(y) {
            return e._publish(y, f);
          }) : e._publish(i, f);
        }), l(this, "_publish", function(i, f) {
          var y = e.subscribers[i];
          Array.isArray(y) && (i.includes(":pre") ? e._handlePrePublish(y, f) : e._handlePublish(y, f));
        }), l(this, "_handlePublish", function(i, f) {
          for (var y = 0, w = i.length; y < w; y++) {
            if (e.DS.stopped)
              return;
            i[y](f);
          }
        }), l(this, "_handlePrePublish", function(i, f) {
          for (var y = i.length; y--; ) {
            if (e.DS.stopped)
              return;
            i[y](f);
          }
        }), this.DS = g;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), xo = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = j(e);
      function e(g) {
        var i, f = g.DS;
        return n(this, e), i = u.call(this), l(T(i), "_rects", void 0), l(T(i), "_timeout", void 0), l(T(i), "init", function() {
          return jt(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), l(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(T(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(T(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(T(i), "addAll", function(y) {
          return y.forEach(function(w) {
            return i.add(w);
          });
        }), l(T(i), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return i.delete(w);
          });
        }), l(T(i), "getRect", function(y) {
          return i._rects ? i.rects.get(y) : y.getBoundingClientRect();
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var w = y.settings;
          i.forEach(function(k) {
            k.classList.remove(w["selectableClass:pre"]), k.classList.add(w.selectableClass);
          });
        }), i;
      }
      return m(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(i) {
            if (B(p(e.prototype), "has", this).call(this, i))
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
            }), B(p(e.prototype), "add", this).call(this, i), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!B(p(e.prototype), "has", this).call(this, i))
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
          }), B(p(e.prototype), "delete", this).call(this, i), this.DS.publish("Selectable:removed", f), !0;
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
      }]), e;
    }(/* @__PURE__ */ L(Set)), Do = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = j(e);
      function e(g) {
        var i, f = g.DS;
        return n(this, e), i = u.call(this), l(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(T(i), "addAll", function(y) {
          return y.forEach(function(w) {
            return i.add(w);
          });
        }), l(T(i), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return i.delete(w);
          });
        }), i.DS = f, i;
      }
      return m(e, [{
        key: "add",
        value: function(i) {
          if (B(p(e.prototype), "has", this).call(this, i))
            return this;
          var f = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selected:added:pre", f), B(p(e.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!B(p(e.prototype), "has", this).call(this, i))
            return !0;
          var f = {
            items: this.elements,
            item: i
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = B(p(e.prototype), "delete", this).call(this, i);
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
      }]), e;
    }(/* @__PURE__ */ L(Set)), ko = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (e._storePrevious(f), e._handleInsideSelection(!0, f));
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          f || e.DS.continue || e._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(i, f) {
          var y = e.DS, w = y.SelectableSet, k = y.SelectorArea, V = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && e.Settings.multiSelectToggling, nt = e.Settings.selectionThreshold, xt = w.rects, Dt = V.rect, It = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), mt = gt(xt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Ce = G(ce.value, 2), ue = Ce[0], Ie = Ce[1];
              k.isInside(ue, Ie) && (qt(Ie, Dt, nt) ? It.set(ue, Ie) : it.set(ue, Ie));
            }
          } catch (Ke) {
            mt.e(Ke);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Pr = e.filterSelected({
              select: It,
              unselect: it,
              selectorRect: Dt
            }), Ao = Pr.select, $o = Pr.unselect;
            Ao.forEach(function(Ke, Fe) {
              return uo({
                element: Fe,
                force: i,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), $o.forEach(function(Ke, Fe) {
              return ho({
                element: Fe,
                force: i,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(i) {
          var f = i.select, y = i.unselect;
          return i.selectorRect, {
            select: f,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(e) {
          var g = this.DS, i = g.stores.KeyStore, f = g.SelectedSet;
          i.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var i, f;
          e.HTMLNode && (i = e.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (f = e.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), l(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = e.DS.stores.PointerStore, w = y.initialValArea;
            Or(e.HTMLNode, H(w, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), l(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || e.DS.continue)) {
            var y = e.DS.stores, w = y.ScrollStore, k = y.PointerStore, V = oo({
              scrollAmount: w.scrollAmount,
              initialPointerPos: k.initialValArea,
              pointerPos: k.currentValArea
            });
            Or(e.HTMLNode, V), e._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          e.HTMLNode.classList.remove(f["selectorClass:pre"]), e.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), l(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[f][y](e.HTMLNode);
        }), l(this, "updatePos", function() {
          e._rect = null;
          var i = e.DS.Area.rect, f = e.DS.Area.computedBorder, y = e.HTMLNode.style, w = "".concat(i.top + f.top, "px"), k = "".concat(i.left + f.left, "px"), V = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== w && (y.top = w), y.left !== k && (y.left = k), y.width !== V && (y.width = V), y.height !== W && (y.height = W);
        }), l(this, "stop", function(i) {
          e.stopAutoScroll(), i && e.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var i = e.DS, f = i.stores.PointerStore, y = i.Area;
            e.currentEdges = Lr({
              elementRect: H(f.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), l(this, "isInside", function(i, f) {
          return e.DS.Area.HTMLNode.contains(i) && e.DS.stores.ScrollStore.canScroll ? !0 : qt(e.rect, f || i.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = De(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          e.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), e.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return m(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var g = this.DS.stores.PointerStore, i = e ? g.getPointerPosition(e) : g.initialVal;
            return qt({
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
    }(), Io = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), l(this, "keydown", function(i) {
          var f = i.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: i,
            key: f
          }), e._currentValues.add(f), e.DS.publish("KeyStore:down", {
            event: i,
            key: f
          });
        }), l(this, "keyup", function(i) {
          var f = i.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: i,
            key: f
          }), e._currentValues.delete(f), e.DS.publish("KeyStore:up", {
            event: i,
            key: f
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), l(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
              return f.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(f) {
              return i.includes(f.toLocaleLowerCase());
            }) || e && i.some(function(f) {
              return e[g._keyMapping[f]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(i) {
          return so({
            event: e._normalizedEvent(i)
          });
        }), l(this, "update", function(i) {
          i && (e.DS.publish("PointerStore:updated:pre", {
            event: i
          }), e.currentVal = e.getPointerPosition(i), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), l(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(i) {
          i && (e.currentVal = e.lastVal = e.getPointerPosition(i), e.stop(), e.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return e.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return e.reset(f);
        });
      }
      return m(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
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
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
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
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && N(e, "-", N(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && N(e, "-", N(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && N(e, "-", N(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        n(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "start", function() {
          e._currentVal = e._initialVal = Me(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "update", function() {
          return e._currentVal = Me(e.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), l(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xe(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = N(this.currentVal, "-", this.initialVal), g = _t(this.DS.stores.SettingsStore.s.zoom), i = N(N(e, "*", g), "-", e);
          return {
            x: e.x + i.x,
            y: e.y + i.y
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
          return this._currentVal || (this._currentVal = Me(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), Lo = /* @__PURE__ */ m(
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
        var e = this, g = u.DS, i = u.settings;
        n(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, w = f.init;
          return e.DS.publish("Settings:updated:pre", a({
            settings: y
          }, w ? {
            init: w
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, w = f.init, k = fo(y, w), V = function() {
            var Dt, It = G(nt[W], 2), it = It[0], mt = It[1];
            it in e._settings || Object.defineProperty(e.s, it, {
              get: function() {
                return e._settings[it];
              },
              set: function(ue) {
                return e.update({
                  settings: l({}, it, ue)
                });
              }
            }), e._settings["".concat(it, ":pre")] = e._settings[it], e._settings[it] = mt;
            var ce = {
              settings: (Dt = {}, l(Dt, it, e._settings[it]), l(Dt, "".concat(it, ":pre"), e._settings["".concat(it, ":pre")]), Dt)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(it), ce);
          }, W = 0, nt = Object.entries(k); W < nt.length; W++)
            V();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: i,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), jr = /* @__PURE__ */ function() {
      function c(u) {
        var e = this;
        n(this, c), l(this, "continue", !1), l(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), l(this, "break", function() {
          return e.continue = !0;
        }), l(this, "setSettings", function(g) {
          return e.stores.SettingsStore.update({
            settings: g
          });
        }), l(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(g) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), l(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(g) {
          var i;
          return (i = e.DropZones.getTarget(g)) === null || i === void 0 ? void 0 : i.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return e.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, i) {
          return e.DropZones.getItemsInsideById(g, i);
        }), this.PubSub = new _o({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Lo({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Eo({
          DS: this
        }), this.stores.ScrollStore = new To({
          DS: this
        }), this.stores.KeyStore = new Io({
          DS: this
        }), this.Area = new vo({
          DS: this
        }), this.Selector = new Mo({
          DS: this
        }), this.SelectorArea = new Co({
          DS: this
        }), this.SelectableSet = new xo({
          DS: this
        }), this.SelectedSet = new Do({
          DS: this
        }), this.Selection = new ko({
          DS: this
        }), this.Drag = new bo({
          DS: this
        }), this.DropZones = new So({
          DS: this
        }), this.Interaction = new wo({
          DS: this
        }), mo({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return e.continue = !1;
        }), this.start();
      }
      return m(c, [{
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
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            i && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
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
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(jt(e)), i || this.addSelectables(e), g && this.PubSub.publish("callback", {
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
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(jt(e)), i && this.removeSelectables(e), g && this.PubSub.publish("callback", {
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
        value: function(e) {
          var g = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return jt(e).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(e, i, f) : g.addSelection(e, i, f);
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
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, g, i), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
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
        value: function(e, g, i) {
          var f = jt(e);
          return this.SelectableSet.addAll(f), g && this.SelectedSet.addAll(f), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
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
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, g), this.addSelectables(e, i);
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
        value: function(e, g, i) {
          return this.SelectableSet.deleteAll(jt(e)), g && this.removeSelection(e), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return jr.isCollision = qt, jr;
  });
})(us);
var _i = us.exports;
const xi = /* @__PURE__ */ wi(_i), ds = (r, t, s, o, a) => (t = Math, s = t.log, o = 1024, a = s(r) / s(o) | 0, r / t.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), hs = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), Di = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, ki = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Mi = [
  ki
], Ci = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ii = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ei = [
  Ii
], Ti = {
  name: "VFSortIcon"
}, Te = /* @__PURE__ */ Object.assign(Ti, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (_(), M("div", null, [
      r.direction == "down" ? (_(), M("svg", Di, Mi)) : K("", !0),
      r.direction == "up" ? (_(), M("svg", Ci, Ei)) : K("", !0)
    ]));
  }
}), Li = ["onClick"], Ai = {
  name: "VFToast.vue"
}, $i = /* @__PURE__ */ Object.assign(Ai, {
  setup(r) {
    const t = O("emitter"), { getStore: s } = O("storage"), o = $(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = $([]), d = (l) => {
      n.value.splice(l, 1);
    }, m = (l) => {
      let v = n.value.findIndex((p) => p.id === l);
      v !== -1 && d(v);
    };
    return t.on("vf-toast-clear", () => {
      n.value = [];
    }), t.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, n.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (_(), M("div", {
      class: ht([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Mt(No, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (_(!0), M(lt, null, wt(n.value, (p, b) => (_(), M("div", {
            onClick: (S) => d(b),
            key: p,
            class: ht([a(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, C(p.label), 11, Li))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Gt = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Ni } = At(), tr = (r, t) => Ni.value + "?" + Gt({ q: "preview", adapter: r, path: t }), Vt = typeof window < "u", fs = Vt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ps = Vt && "IntersectionObserver" in window, gs = Vt && "classList" in document.createElement("p"), ms = Vt && window.devicePixelRatio > 1, Oi = {
  elements_selector: ".lazy",
  container: fs || Vt ? document : null,
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
}, vs = (r) => Object.assign({}, Oi, r), Br = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", a = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, ji = (r, t) => {
  if (t)
    if (!t.length)
      Br(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Br(r, o);
}, Ot = "src", fr = "srcset", pr = "sizes", bs = "poster", Se = "llOriginalAttrs", ys = "data", gr = "loading", Ss = "loaded", ws = "applied", Pi = "entered", mr = "error", _s = "native", xs = "data-", Ds = "ll-status", ft = (r, t) => r.getAttribute(xs + t), zi = (r, t, s) => {
  var o = xs + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, we = (r) => ft(r, Ds), Xt = (r, t) => zi(r, Ds, t), Be = (r) => Xt(r, null), vr = (r) => we(r) === null, Ri = (r) => we(r) === gr, Bi = (r) => we(r) === mr, br = (r) => we(r) === _s, Vi = [gr, Ss, ws, mr], Hi = (r) => Vi.indexOf(we(r)) >= 0, Ht = (r, t, s, o) => {
  if (r) {
    if (o !== void 0) {
      r(t, s, o);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ne = (r, t) => {
  if (gs) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, Et = (r, t) => {
  if (gs) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Ui = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Zi = (r) => {
  delete r.llTempImage;
}, ks = (r) => r.llTempImage, Ve = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, Yi = (r) => {
  r.disconnect();
}, Wi = (r, t, s) => {
  t.unobserve_entered && Ve(r, s);
}, yr = (r, t) => {
  r && (r.loadingCount += t);
}, Ki = (r) => {
  r && (r.toLoadCount -= 1);
}, Ms = (r, t) => {
  r && (r.toLoadCount = t);
}, Fi = (r) => r.loadingCount > 0, Gi = (r) => r.toLoadCount > 0, Cs = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, Sr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Cs(s).forEach(t);
}, Is = (r, t) => {
  Cs(r).forEach(t);
}, He = [Ot], Es = [Ot, bs], ve = [Ot, fr, pr], Ts = [ys], Ue = (r) => !!r[Se], Ls = (r) => r[Se], As = (r) => delete r[Se], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[Se] = s;
}, Xi = (r) => {
  Ue(r) || (r[Se] = { backgroundImage: r.style.backgroundImage });
}, qi = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Kt = (r, t) => {
  if (!Ue(r))
    return;
  const s = Ls(r);
  t.forEach((o) => {
    qi(r, o, s[o]);
  });
}, Ji = (r) => {
  if (!Ue(r))
    return;
  const t = Ls(r);
  r.style.backgroundImage = t.backgroundImage;
}, $s = (r, t, s) => {
  ne(r, t.class_applied), Xt(r, ws), s && (t.unobserve_completed && Ve(r, t), Ht(t.callback_applied, r, s));
}, Ns = (r, t, s) => {
  ne(r, t.class_loading), Xt(r, gr), s && (yr(s, 1), Ht(t.callback_loading, r, s));
}, Bt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Vr = (r, t) => {
  Bt(r, pr, ft(r, t.data_sizes)), Bt(r, fr, ft(r, t.data_srcset)), Bt(r, Ot, ft(r, t.data_src));
}, Qi = (r, t) => {
  Sr(r, (s) => {
    se(s, ve), Vr(s, t);
  }), se(r, ve), Vr(r, t);
}, tn = (r, t) => {
  se(r, He), Bt(r, Ot, ft(r, t.data_src));
}, en = (r, t) => {
  Is(r, (s) => {
    se(s, He), Bt(s, Ot, ft(s, t.data_src));
  }), se(r, Es), Bt(r, bs, ft(r, t.data_poster)), Bt(r, Ot, ft(r, t.data_src)), r.load();
}, rn = (r, t) => {
  se(r, Ts), Bt(r, ys, ft(r, t.data_src));
}, sn = (r, t, s) => {
  const o = ft(r, t.data_bg), a = ft(r, t.data_bg_hidpi), n = ms && a ? a : o;
  n && (r.style.backgroundImage = `url("${n}")`, ks(r).setAttribute(Ot, n), Ns(r, t, s));
}, on = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), a = ft(r, t.data_bg_multi_hidpi), n = ms && a ? a : o;
  n && (r.style.backgroundImage = n, $s(r, t, s));
}, nn = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let n = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = n.join(), r.style.backgroundImage === "" && (n = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = n.join()), $s(r, t, s);
}, Os = {
  IMG: Qi,
  IFRAME: tn,
  VIDEO: en,
  OBJECT: rn
}, an = (r, t) => {
  const s = Os[r.tagName];
  s && s(r, t);
}, ln = (r, t, s) => {
  const o = Os[r.tagName];
  o && (o(r, t), Ns(r, t, s));
}, cn = ["IMG", "IFRAME", "VIDEO", "OBJECT"], un = (r) => cn.indexOf(r.tagName) > -1, js = (r, t) => {
  t && !Fi(t) && !Gi(t) && Ht(r.callback_finish, t);
}, Hr = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, dn = (r, t, s) => {
  r.removeEventListener(t, s);
}, wr = (r) => !!r.llEvLisnrs, hn = (r, t, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Hr(r, o, t), Hr(r, "error", s);
}, er = (r) => {
  if (!wr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    dn(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ps = (r, t, s) => {
  Zi(r), yr(s, -1), Ki(s), Et(r, t.class_loading), t.unobserve_completed && Ve(r, s);
}, fn = (r, t, s, o) => {
  const a = br(t);
  Ps(t, s, o), ne(t, s.class_loaded), Xt(t, Ss), Ht(s.callback_loaded, t, o), a || js(s, o);
}, pn = (r, t, s, o) => {
  const a = br(t);
  Ps(t, s, o), ne(t, s.class_error), Xt(t, mr), Ht(s.callback_error, t, o), s.restore_on_error && Kt(t, ve), a || js(s, o);
}, _r = (r, t, s) => {
  const o = ks(r) || r;
  if (wr(o))
    return;
  hn(o, (d) => {
    fn(d, r, t, s), er(o);
  }, (d) => {
    pn(d, r, t, s), er(o);
  });
}, gn = (r, t, s) => {
  Ui(r), _r(r, t, s), Xi(r), sn(r, t, s), on(r, t, s), nn(r, t, s);
}, mn = (r, t, s) => {
  _r(r, t, s), ln(r, t, s);
}, xr = (r, t, s) => {
  un(r) ? mn(r, t, s) : gn(r, t, s);
}, vn = (r, t, s) => {
  r.setAttribute("loading", "lazy"), _r(r, t, s), an(r, t), Xt(r, _s);
}, Ur = (r) => {
  r.removeAttribute(Ot), r.removeAttribute(fr), r.removeAttribute(pr);
}, bn = (r) => {
  Sr(r, (t) => {
    Ur(t);
  }), Ur(r);
}, zs = (r) => {
  Sr(r, (t) => {
    Kt(t, ve);
  }), Kt(r, ve);
}, yn = (r) => {
  Is(r, (t) => {
    Kt(t, He);
  }), Kt(r, Es), r.load();
}, Sn = (r) => {
  Kt(r, He);
}, wn = (r) => {
  Kt(r, Ts);
}, _n = {
  IMG: zs,
  IFRAME: Sn,
  VIDEO: yn,
  OBJECT: wn
}, xn = (r) => {
  const t = _n[r.tagName];
  if (!t) {
    Ji(r);
    return;
  }
  t(r);
}, Dn = (r, t) => {
  vr(r) || br(r) || (Et(r, t.class_entered), Et(r, t.class_exited), Et(r, t.class_applied), Et(r, t.class_loading), Et(r, t.class_loaded), Et(r, t.class_error));
}, kn = (r, t) => {
  xn(r), Dn(r, t), Be(r), As(r);
}, Mn = (r, t, s, o) => {
  s.cancel_on_exit && Ri(r) && r.tagName === "IMG" && (er(r), bn(r), zs(r), Et(r, s.class_loading), yr(o, -1), Be(r), Ht(s.callback_cancel, r, t, o));
}, Cn = (r, t, s, o) => {
  const a = Hi(r);
  Xt(r, Pi), ne(r, s.class_entered), Et(r, s.class_exited), Wi(r, s, o), Ht(s.callback_enter, r, t, o), !a && xr(r, s, o);
}, In = (r, t, s, o) => {
  vr(r) || (ne(r, s.class_exited), Mn(r, t, s, o), Ht(s.callback_exit, r, t, o));
}, En = ["IMG", "IFRAME", "VIDEO"], Rs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Tn = (r, t, s) => {
  r.forEach((o) => {
    En.indexOf(o.tagName) !== -1 && vn(o, t, s);
  }), Ms(s, 0);
}, Ln = (r) => r.isIntersecting || r.intersectionRatio > 0, An = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), $n = (r, t, s) => {
  r.forEach(
    (o) => Ln(o) ? Cn(o.target, o, t, s) : In(o.target, o, t, s)
  );
}, Nn = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, On = (r, t) => {
  Yi(r), Nn(r, t);
}, jn = (r, t) => {
  !ps || Rs(r) || (t._observer = new IntersectionObserver((s) => {
    $n(s, r, t);
  }, An(r)));
}, Bs = (r) => Array.prototype.slice.call(r), je = (r) => r.container.querySelectorAll(r.elements_selector), Pn = (r) => Bs(r).filter(vr), zn = (r) => Bi(r), Rn = (r) => Bs(r).filter(zn), Zr = (r, t) => Pn(r || je(t)), Bn = (r, t) => {
  Rn(je(r)).forEach((o) => {
    Et(o, r.class_error), Be(o);
  }), t.update();
}, Vn = (r, t) => {
  Vt && (t._onlineHandler = () => {
    Bn(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Hn = (r) => {
  Vt && window.removeEventListener("online", r._onlineHandler);
}, _e = function(r, t) {
  const s = vs(r);
  this._settings = s, this.loadingCount = 0, jn(s, this), Vn(s, this), this.update(t);
};
_e.prototype = {
  update: function(r) {
    const t = this._settings, s = Zr(r, t);
    if (Ms(this, s.length), fs || !ps) {
      this.loadAll(s);
      return;
    }
    if (Rs(t)) {
      Tn(s, t, this);
      return;
    }
    On(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Hn(this), je(this._settings).forEach((r) => {
      As(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Zr(r, t).forEach((o) => {
      Ve(o, this), xr(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    je(r).forEach((t) => {
      kn(t, r);
    });
  }
};
_e.load = (r, t) => {
  const s = vs(t);
  xr(r, s);
};
_e.resetStatus = (r) => {
  Be(r);
};
Vt && ji(_e, window.lazyLoadOptions);
const Un = { class: "relative flex-auto flex flex-col overflow-hidden" }, Zn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Yn = { class: "absolute" }, Wn = /* @__PURE__ */ h("svg", {
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
], -1), Kn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Fn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Gn = { class: "grid grid-cols-12 items-center" }, Xn = { class: "flex col-span-7 items-center" }, qn = {
  key: 0,
  src: hr,
  alt: ""
}, Jn = {
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
}, null, -1), ta = [
  Qn
], ea = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, sa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], oa = { class: "grid grid-cols-12 items-center" }, ia = { class: "flex col-span-7 items-center" }, na = {
  key: 0,
  src: hr,
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
], ua = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, da = { class: "col-span-2 text-center" }, ha = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, fa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], pa = { class: "custom-grid-item-div" }, ga = { class: "relative" }, ma = {
  key: 0,
  src: hr,
  alt: ""
}, va = ["data-src", "alt"], ba = {
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
    search: Object
  },
  setup(r) {
    const t = r, s = O("emitter"), { setStore: o, getStore: a } = O("storage"), n = O("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), m = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = $(null), v = $(null), p = $(0), b = $(null), { t: S } = O("i18n"), I = Math.floor(Math.random() * 2 ** 32), E = $(a("full-screen", !1)), L = new _e();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, E.value = !E.value, o("full-screen", E.value);
    });
    const T = $("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      T.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
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
          adapter: t.data.adapter,
          path: t.data.dirname
        }
      });
    });
    let U = null;
    const j = () => {
      U && clearTimeout(U);
    }, P = $(!0), B = (A) => {
      A.touches.length > 1 && (P.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), P.value = !P.value);
    }, G = (A) => {
      U = setTimeout(() => {
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
    }, D = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: t.data.adapter, path: A.path }
      })) : s.emit("vf-modal-show", {
        type: "preview",
        adapter: t.data.adapter,
        item: A
      });
    }, z = $e({ active: !1, column: "", order: "" }), q = (A = !0) => {
      let R = [...t.data.files], N = z.column, tt = z.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const H = (_t, bt) => typeof _t == "string" && typeof bt == "string" ? _t.toLowerCase().localeCompare(bt.toLowerCase()) : _t < bt ? -1 : _t > bt ? 1 : 0;
      return z.active && (R = R.slice().sort((_t, bt) => H(_t[N], bt[N]) * tt)), R;
    }, ot = (A) => {
      z.active && z.column == A ? (z.active = z.order == "asc", z.column = A, z.order = "desc") : (z.active = !0, z.column = A, z.order = "asc");
    }, rt = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ct = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(rt()));
    }, vt = (A, R) => {
      A.preventDefault();
      let N = JSON.parse(A.dataTransfer.getData("items"));
      if (N.find((tt) => tt.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: N, to: R }
      });
    }, pt = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((N) => N == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Ct(() => {
      b.value = new xi({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Re(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + I)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const N = A.target.offsetWidth - A.offsetX, tt = A.target.offsetHeight - A.offsetY;
          N < 15 && tt < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: N }) => {
        s.emit("vf-nodes-selected", rt()), p.value = b.value.getSelection().length;
      });
    }), Oo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), L.update();
    }), Ct(() => {
      ze(
        () => t.view,
        () => s.emit("vf-explorer-update")
      );
    }), (A, R) => (_(), M("div", Un, [
      r.view == "list" || T.value.length ? (_(), M("div", Zn, [
        h("div", {
          onClick: R[0] || (R[0] = (N) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          et(C(x(S)("Name")) + " ", 1),
          St(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "basename"]
          ])
        ]),
        T.value.length ? K("", !0) : (_(), M("div", {
          key: 0,
          onClick: R[1] || (R[1] = (N) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          et(C(x(S)("Size")) + " ", 1),
          St(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "file_size"]
          ])
        ])),
        T.value.length ? K("", !0) : (_(), M("div", {
          key: 1,
          onClick: R[2] || (R[2] = (N) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          et(C(x(S)("Date")) + " ", 1),
          St(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "last_modified"]
          ])
        ])),
        T.value.length ? (_(), M("div", {
          key: 2,
          onClick: R[3] || (R[3] = (N) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          et(C(x(S)("Filepath")) + " ", 1),
          St(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
      h("div", Yn, [
        h("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Wn,
          h("div", Kn, C(p.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: B,
        onContextmenu: R[10] || (R[10] = Wt((N) => x(s).emit("vf-contextmenu-show", {
          event: N,
          area: l.value,
          items: rt()
        }), ["self", "prevent"])),
        class: ht([E.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        T.value.length ? (_(!0), M(lt, { key: 0 }, wt(q(), (N, tt) => (_(), M("div", {
          onDblclick: (H) => D(N),
          onTouchstart: R[4] || (R[4] = (H) => G(H)),
          onTouchend: R[5] || (R[5] = (H) => j()),
          onContextmenu: Wt((H) => x(s).emit("vf-contextmenu-show", {
            event: H,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          class: ht(["vf-item-" + x(I), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": tt
        }, [
          h("div", Gn, [
            h("div", Xn, [
              N.type == "dir" ? (_(), M("img", qn)) : (_(), M("svg", Jn, ta)),
              h("span", ea, C(N.basename), 1)
            ]),
            h("div", ra, C(N.path), 1)
          ])
        ], 42, Fn))), 256)) : K("", !0),
        r.view == "list" && !T.value.length ? (_(!0), M(lt, { key: 1 }, wt(q(), (N, tt) => (_(), M("div", {
          draggable: "true",
          onDblclick: (H) => D(N),
          onTouchstart: R[6] || (R[6] = (H) => G(H)),
          onTouchend: R[7] || (R[7] = (H) => j()),
          onContextmenu: Wt((H) => x(s).emit("vf-contextmenu-show", {
            event: H,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          onDragstart: (H) => ct(H),
          onDragover: (H) => pt(H, N),
          onDrop: (H) => vt(H, N),
          class: ht(["vf-item-" + x(I), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": tt
        }, [
          h("div", oa, [
            h("div", ia, [
              N.type == "dir" ? (_(), M("img", na)) : (_(), M("svg", aa, ca)),
              h("span", ua, C(N.basename), 1)
            ]),
            h("div", da, C(N.file_size ? x(ds)(N.file_size) : ""), 1),
            h("div", ha, C(x(hs)(N.last_modified)), 1)
          ])
        ], 42, sa))), 256)) : K("", !0),
        r.view == "grid" && !T.value.length ? (_(!0), M(lt, { key: 2 }, wt(q(!1), (N, tt) => (_(), M("div", {
          draggable: "true",
          onDblclick: (H) => D(N),
          onTouchstart: R[8] || (R[8] = (H) => G(H)),
          onTouchend: R[9] || (R[9] = (H) => j()),
          onContextmenu: Wt((H) => x(s).emit("vf-contextmenu-show", {
            event: H,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          onDragstart: (H) => ct(H),
          onDragover: (H) => pt(H, N),
          onDrop: (H) => vt(H, N),
          class: ht(["vf-item-" + x(I), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": tt
        }, [
          h("div", pa, [
            h("div", ga, [
              N.type == "dir" ? (_(), M("img", ma)) : (N.mime_type ?? "").startsWith("image") ? (_(), M("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": x(tr)(x(n).value, N.path),
                alt: N.basename
              }, null, 8, va)) : (_(), M("svg", ba, Sa)),
              !(N.mime_type ?? "").startsWith("image") && N.type != "dir" ? (_(), M("div", wa, C(d(N.extension)), 1)) : K("", !0)
            ]),
            h("span", _a, C(m(N.basename)), 1)
          ])
        ], 42, fa))), 256)) : K("", !0)
      ], 34),
      Mt($i)
    ]));
  }
}), ka = "0.0.1", Ma = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ca = { class: "flex leading-5 items-center" }, Ia = ["aria-label"], Ea = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ta = [
  Ea
], La = ["value"], Aa = { class: "ml-3" }, $a = { key: 0 }, Na = { class: "ml-1" }, Oa = { class: "flex leading-5 items-center" }, ja = {
  value: "",
  disabled: ""
}, Pa = /* @__PURE__ */ jo('<option value="en">English</option><option value="fr">French</option><option value="fa">Persian</option><option value="ru">Russian</option><option value="tr">Turkish</option><option value="tr">Hebrew</option>', 6), za = ["aria-label"], Ra = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Ba = [
  Ra
], Va = {
  name: "VFStatusbar"
}, Ha = /* @__PURE__ */ Object.assign(Va, {
  props: {
    data: Object
  },
  setup(r) {
    const t = O("emitter"), { getStore: s, setStore: o } = O("storage"), a = $(0), n = O("adapter"), { t: d, changeLocale: m } = O("i18n"), l = $(s("locale", "")), v = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: n.value } }), o("adapter", n.value);
    };
    t.on("vf-nodes-selected", (b) => {
      a.value = b.length;
    });
    const p = $("");
    return t.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    }), (b, S) => (_(), M("div", Ma, [
      h("div", Ca, [
        h("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ta, 8, Ia),
        St(h("select", {
          "onUpdate:modelValue": S[0] || (S[0] = (I) => ls(n) ? n.value = I : null),
          onChange: v,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (_(!0), M(lt, null, wt(r.data.storages, (I) => (_(), M("option", { value: I }, C(I), 9, La))), 256))
        ], 544), [
          [zr, x(n)]
        ]),
        h("div", Aa, [
          p.value.length ? (_(), M("span", $a, C(r.data.files.length) + " items found. ", 1)) : K("", !0),
          h("span", Na, C(a.value > 0 ? a.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      h("div", Oa, [
        St(h("select", {
          "onUpdate:modelValue": S[1] || (S[1] = (I) => l.value = I),
          onChange: S[2] || (S[2] = (I) => x(m)(I.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          h("option", ja, C(x(d)("Language")), 1),
          Pa
        ], 544), [
          [zr, l.value]
        ]),
        h("span", {
          class: "mr-1",
          "aria-label": x(d)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: S[3] || (S[3] = (I) => x(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(ka), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, Ba, 8, za)
      ])
    ]));
  }
}), Ua = (r, t = 0, s = !1) => {
  let o;
  return (...a) => {
    s && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, t);
  };
}, Za = (r, t, s) => {
  const o = $(r);
  return Po((n, d) => ({
    get() {
      return n(), o.value;
    },
    set: Ua(
      (m) => {
        o.value = m, d();
      },
      t,
      s
    )
  }));
}, Ya = { class: "custom-file-picker-search-bar flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Wa = ["aria-label"], Ka = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Fa = [
  Ka
], Ga = ["aria-label"], Xa = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), qa = [
  Xa
], Ja = ["aria-label"], Qa = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), tl = [
  Qa
], el = ["onClick"], rl = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), sl = [
  rl
], ol = { class: "flex leading-5" }, il = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), nl = ["title", "onClick"], al = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ll = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), cl = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ul = [
  ll,
  cl
], dl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, hl = /* @__PURE__ */ h("svg", {
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
], -1), fl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), pl = ["onKeydown", "placeholder"], gl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), ml = [
  gl
], vl = {
  name: "VFBreadcrumb"
}, bl = /* @__PURE__ */ Object.assign(vl, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), a = $(null), n = $([]), d = $(!1), m = $(null), { t: l } = O("i18n"), v = O("loadingState");
    s.on("vf-explorer-update", () => {
      let j = [], P = [];
      a.value = t.data.dirname ?? o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(B) {
        j.push(B), j.join("/") != "" && P.push({
          basename: B,
          name: B,
          path: o.value + "://" + j.join("/"),
          type: "dir"
        });
      }), P.length > 4 && (P = P.slice(-5), P[0].name = ".."), n.value = P;
    });
    const p = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      d.value = !0, Re(() => m.value.focus());
    }, S = Za("", 400), I = () => v.value;
    ze(S, (j) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: j });
    });
    const E = () => n.value.length && !d.value, L = (j) => {
      j.preventDefault();
      let P = JSON.parse(j.dataTransfer.getData("items"));
      if (P.find((B) => B.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: {
          from: P,
          to: n.value[n.value.length - 2] ?? {
            path: o.value + "://"
          }
        }
      });
    }, T = (j) => {
      j.preventDefault(), E() ? j.dataTransfer.dropEffect = "copy" : (j.dataTransfer.dropEffect = "none", j.dataTransfer.effectAllowed = "none");
    }, U = () => {
      S.value == "" && p();
    };
    return (j, P) => (_(), M("div", Ya, [
      h("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), M("svg", {
          onDragover: P[0] || (P[0] = (B) => T(B)),
          onDrop: P[1] || (P[1] = (B) => L(B)),
          onClick: P[2] || (P[2] = (B) => {
            var G;
            return !E() || x(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((G = n.value[n.value.length - 2]) == null ? void 0 : G.path) ?? x(o) + "://"
              }
            });
          }),
          class: ht([
            "h-6 w-6 p-0.5 rounded",
            E() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa, 34))
      ], 8, Wa),
      I() ? (_(), M("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), M("svg", {
          onClick: P[4] || (P[4] = (B) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, tl))
      ], 8, Ja)) : (_(), M("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), M("svg", {
          onClick: P[3] || (P[3] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, qa))
      ], 8, Ga)),
      d.value ? (_(), M("div", dl, [
        hl,
        fl,
        St(h("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: oe(p, ["esc"]),
          onBlur: U,
          "onUpdate:modelValue": P[6] || (P[6] = (B) => ls(S) ? S.value = B : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, pl), [
          [ie, x(S)]
        ]),
        (_(), M("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, ml))
      ])) : (_(), M("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (_(), M("svg", {
          onClick: P[5] || (P[5] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, sl)),
        h("div", ol, [
          (_(!0), M(lt, null, wt(n.value, (B, G) => (_(), M("div", { key: G }, [
            il,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (D) => x(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: B.path }
              })
            }, C(B.name), 9, nl)
          ]))), 128))
        ]),
        I() ? (_(), M("svg", al, ul)) : K("", !0)
      ], 8, el))
    ]));
  }
}), yl = ["onClick"], Sl = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), wl = {
  name: "VFContextMenu"
}, _l = /* @__PURE__ */ Object.assign(wl, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter"), o = $(null), { apiUrl: a } = At(), n = $e({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = $([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: m } = O("i18n"), l = {
      newfolder: {
        title: () => m("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => m("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => m("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => m("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          const S = a.value + "?" + Gt({ q: "download", adapter: t.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      },
      archive: {
        title: () => m("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => m("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => m("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, p = $("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: I, items: E, target: L = null }) => {
      if (n.items = [], p.value)
        if (L)
          n.items.push(l.openDir), s.emit("vf-context-selected", [L]);
        else
          return;
      else
        !L && !p.value ? (n.items.push(l.refresh), n.items.push(l.newfolder), s.emit("vf-context-selected", [])) : E.length > 1 && E.some((T) => T.path === L.path) ? (n.items.push(l.refresh), n.items.push(l.archive), n.items.push(l.delete), s.emit("vf-context-selected", E)) : (L.type == "dir" ? n.items.push(l.open) : (n.items.push(l.preview), n.items.push(l.download)), n.items.push(l.rename), L.mime_type == "application/zip" ? n.items.push(l.unarchive) : n.items.push(l.archive), n.items.push(l.delete), s.emit("vf-context-selected", [L]));
      b(S, I);
    }), s.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (S, I) => {
      n.active = !0, Re(() => {
        let E = I.getBoundingClientRect(), L = S.pageX, T = S.pageY, U = o.value.offsetHeight, j = o.value.offsetWidth;
        L = E.right - S.pageX + window.scrollX < j ? L - j : L, T = E.bottom - S.pageY + window.scrollY < U ? T - U : T, n.positions = {
          left: L + "px",
          top: T + "px"
        };
      });
    };
    return (S, I) => n.active ? (_(), M("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: cs(n.positions)
    }, [
      (_(!0), M(lt, null, wt(n.items, (E) => (_(), M("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: E.title,
        onClick: (L) => v(E)
      }, [
        Sl,
        h("span", null, C(E.title()), 1)
      ], 8, yl))), 128))
    ], 4)) : K("", !0);
  }
}), xl = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Dl(r) {
  const t = await xl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function kl(r, t, s) {
  const { getStore: o, setStore: a } = Qe(r), n = $({}), d = (v) => {
    Dl(v).then((p) => {
      n.value = p, a("locale", v), a("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? n.value = o("translations") : d(t);
  const m = (v, ...p) => p.length ? m(v = v.replace("%s", p.shift()), ...p) : v;
  function l(v, ...p) {
    return n.value.hasOwnProperty(v) ? m(n.value[v], ...p) : m(v, ...p);
  }
  return { t: l, changeLocale: d };
}
const Ml = { class: "vuefinder" }, Cl = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Il = {
  name: "VueFinder"
}, El = /* @__PURE__ */ Object.assign(Il, {
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
    }
  },
  emits: ["deleteButton", "fileMoved"],
  setup(r, { emit: t }) {
    const s = r, o = Ro(), { setStore: a, getStore: n } = Qe(s.id), d = $(n("adapter"));
    Ut("emitter", o), Ut("storage", Qe(s.id)), Ut("postData", s.postData), Ut("adapter", d), Ut("maxFileSize", s.maxFileSize);
    const m = kl(s.id, s.locale, o);
    Ut("i18n", m);
    const { apiUrl: l, setApiUrl: v } = At();
    v(s.url);
    const p = $e({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = $(n("viewport", "grid")), S = $(n("darkMode", s.dark));
    o.on("vf-darkMode-toggle", () => {
      S.value = !S.value, a("darkMode", S.value);
    });
    const I = $(!1);
    Ut("loadingState", I);
    const E = $(n("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      E.value = !E.value, a("full-screen", E.value);
    }), o.on("vf-view-toggle", (j) => {
      b.value = j;
    });
    const L = $e({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      L.active = !1;
    }), o.on("vf-modal-show", (j) => {
      L.active = !0, L.type = j.type, L.data = j;
    }), o.on("delete-button", (j) => {
      console.log("emit delete"), t("deleteButton", j);
    }), o.on("file-moved", (j) => {
      console.log("emit file moved"), t("fileMoved", j);
    });
    const T = (j) => {
      Object.assign(p, j), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let U;
    return o.on("vf-fetch-abort", () => {
      U.abort(), I.value = !1;
    }), o.on("vf-fetch", ({ params: j, onSuccess: P = null, onError: B = null }) => {
      ["index", "search"].includes(j.q) && (U && U.abort(), I.value = !0), U = new AbortController();
      const G = U.signal;
      Oe(l.value, { params: j, signal: G }).then((D) => {
        d.value = D.adapter, ["index", "search"].includes(j.q) && (I.value = !1), o.emit("vf-modal-close"), T(D), P(D);
      }).catch((D) => {
        B && B(D);
      }).finally(() => {
      });
    }), o.on("vf-download", (j) => {
      document.getElementById("download_frame").src = j, o.emit("vf-modal-close");
    }), Ct(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), (j, P) => (_(), M("div", Ml, [
      h("div", {
        class: ht(S.value ? "dark" : "")
      }, [
        h("div", {
          class: ht([E.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: cs(E.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: P[0] || (P[0] = (B) => x(o).emit("vf-contextmenu-hide")),
          onTouchstart: P[1] || (P[1] = (B) => x(o).emit("vf-contextmenu-hide"))
        }, [
          Mt(yi, { data: p }, null, 8, ["data"]),
          Mt(bl, { data: p }, null, 8, ["data"]),
          Mt(Da, {
            view: b.value,
            data: p
          }, null, 8, ["view", "data"]),
          Mt(Ha, { data: p }, null, 8, ["data"])
        ], 38),
        L.active ? (_(), X(zo("v-f-modal-" + L.type), {
          key: 0,
          selection: L.data,
          current: p
        }, null, 8, ["selection", "current"])) : K("", !0),
        Mt(_l, { current: p }, null, 8, ["current"]),
        Cl
      ], 2)
    ]));
  }
}), Tl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), Ll = { class: "fixed z-10 inset-0 overflow-hidden" }, Al = { class: "custom-popup-layout transition-all" }, $l = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, Nl = { class: "custom-layout-button-slot" }, $t = {
  __name: "ModalLayout",
  setup(r) {
    const t = O("emitter");
    return Ct(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (_(), M("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((a) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Tl,
      h("div", Ll, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((a) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", Al, [
            h("div", $l, [
              Je(s.$slots, "default")
            ]),
            h("div", Nl, [
              Je(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Ol = ["aria-label"], jl = /* @__PURE__ */ h("svg", {
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
], -1), Pl = [
  jl
], zl = {
  name: "Message"
}, Nt = /* @__PURE__ */ Object.assign(zl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var m;
    const { t: s } = O("i18n"), o = $(!1), a = $(null), n = $((m = a.value) == null ? void 0 : m.strMessage);
    ze(n, () => o.value = !1);
    const d = () => {
      t("hidden"), o.value = !0;
    };
    return (l, v) => (_(), M("div", null, [
      o.value ? K("", !0) : (_(), M("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ht(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Je(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Pl, 8, Ol)
      ], 2))
    ]));
  }
}), Rl = { class: "sm:flex custom-new-folder-popup" }, Bl = { class: "custom-file-picker-title" }, Vl = { class: "file-picker-title-img" }, Hl = /* @__PURE__ */ h("svg", {
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
], -1), Ul = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Zl = /* @__PURE__ */ h("hr", null, null, -1), Yl = { class: "mt-3 text-center w-full p-4 h-full" }, Wl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Kl = { class: "mt-2" }, Fl = { class: "text-sm text-gray-500" }, Gl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Xl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ql = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Jl = [
  ql
], Ql = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, tc = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ec = [
  tc
], rc = { class: "ml-1.5" }, sc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, oc = {
  name: "VFModalDelete"
}, ic = /* @__PURE__ */ Object.assign(oc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = $(t.selection.items), d = $(""), m = () => {
      n.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(
            n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          )
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("Files deleted.") }), s.emit("delete-button", { files: n.value });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1),
        h("div", sc, C(x(a)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        h("div", Rl, [
          h("div", Bl, [
            h("div", Vl, [
              Hl,
              h("h3", Ul, C(x(a)("Delete files")), 1)
            ]),
            Zl
          ]),
          h("div", Yl, [
            h("h3", Wl, C(x(a)("Delete files")), 1),
            h("div", Kl, [
              h("p", Fl, C(x(a)("Are you sure you want to delete these files?")), 1),
              (_(!0), M(lt, null, wt(n.value, (p) => (_(), M("p", Gl, [
                p.type == "dir" ? (_(), M("svg", Xl, Jl)) : (_(), M("svg", Ql, ec)),
                h("span", rc, C(p.basename), 1)
              ]))), 256)),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nc = { class: "sm:flex sm:items-start" }, ac = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), lc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, cc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, uc = { class: "mt-2" }, dc = { class: "text-sm text-gray-500" }, hc = {
  name: "VFModalMessage"
}, fc = /* @__PURE__ */ Object.assign(hc, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = O("emitter"), { t: s } = O("i18n");
    return (o, a) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var n, d;
        return [
          h("div", nc, [
            ac,
            h("div", lc, [
              h("h3", cc, C(((n = r.selection) == null ? void 0 : n.title) ?? "Title"), 1),
              h("div", uc, [
                h("p", dc, C(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), pc = { class: "sm:flex custom-new-folder-popup" }, gc = { class: "custom-file-picker-title" }, mc = { class: "file-picker-title-img" }, vc = /* @__PURE__ */ h("svg", {
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
], -1), bc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, yc = /* @__PURE__ */ h("hr", null, null, -1), Sc = { class: "mt-3 text-center w-full p-4 h-full" }, wc = { class: "mt-2 create-folder-form" }, _c = { class: "text-sm text-gray-500" }, xc = ["onKeyup", "placeholder"], Dc = {
  name: "VFModalNewFolder"
}, kc = /* @__PURE__ */ Object.assign(Dc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = $(""), d = $(""), m = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: t.current.dirname,
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
    return (l, v) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", pc, [
          h("div", gc, [
            h("div", mc, [
              vc,
              h("h3", bc, C(x(a)("New Folder")), 1)
            ]),
            yc
          ]),
          h("div", Sc, [
            h("div", wc, [
              h("p", _c, C(x(a)("Create a new folder")), 1),
              St(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => n.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, xc), [
                [ie, n.value]
              ]),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Mc = { class: "sm:flex sm:items-start" }, Cc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Ic = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ec = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Tc = { class: "mt-2" }, Lc = { class: "text-sm text-gray-500" }, Ac = ["onKeyup", "placeholder"], $c = {
  name: "VFModalNewFile"
}, Nc = /* @__PURE__ */ Object.assign($c, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = $(""), d = $(""), m = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: t.current.dirname,
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
    return (l, v) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", Mc, [
          Cc,
          h("div", Ic, [
            h("h3", Ec, C(x(a)("New File")), 1),
            h("div", Tc, [
              h("p", Lc, C(x(a)("Create a new file")), 1),
              St(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => n.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, Ac), [
                [ie, n.value]
              ]),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Oc = { class: "flex" }, jc = ["aria-label"], Pc = { class: "ml-auto mb-2" }, zc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Rc = { key: 1 }, Bc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, o = $(""), a = $(""), n = $(null), d = $(!1), { apiUrl: m } = At(), l = $(""), v = $(!1), { t: p } = O("i18n");
    Ct(() => {
      Oe(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((E) => {
        o.value = E, t("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = o.value, d.value == !0 && Re(() => {
        n.value.focus();
      });
    }, S = O("postData"), I = () => {
      l.value = "", v.value = !1, Oe(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((E) => {
        l.value = p("Updated."), o.value = E, t("load"), d.value = !d.value;
      }).catch((E) => {
        l.value = p(E.message), v.value = !0;
      });
    };
    return (E, L) => (_(), M(lt, null, [
      h("div", Oc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, jc),
        h("div", Pc, [
          d.value ? (_(), M("button", {
            key: 0,
            onClick: I,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(x(p)("Save")), 1)) : K("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: L[0] || (L[0] = (T) => b())
          }, C(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (_(), M("div", Rc, [
          St(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": L[1] || (L[1] = (T) => a.value = T),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ie, a.value]
          ])
        ])) : (_(), M("pre", zc, C(o.value), 1)),
        l.value.length ? (_(), X(Nt, {
          key: 2,
          onHidden: L[2] || (L[2] = (T) => l.value = ""),
          error: v.value
        }, {
          default: F(() => [
            et(C(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : K("", !0)
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
function Yr(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Vs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yr(Object(s), !0).forEach(function(o) {
      Uc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Yr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(r);
}
function Vc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Hc(r, t, s) {
  return t && Wr(r.prototype, t), s && Wr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Uc(r, t, s) {
  return t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function Hs(r) {
  return Zc(r) || Yc(r) || Wc(r) || Kc();
}
function Zc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Yc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Wc(r, t) {
  if (r) {
    if (typeof r == "string")
      return sr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, t);
  }
}
function sr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, o = new Array(t); s < t; s++)
    o[s] = r[s];
  return o;
}
function Kc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ze = typeof window < "u" && typeof window.document < "u", Lt = Ze ? window : {}, Dr = Ze && Lt.document.documentElement ? "ontouchstart" in Lt.document.documentElement : !1, kr = Ze ? "PointerEvent" in Lt : !1, J = "cropper", Mr = "all", Us = "crop", Zs = "move", Ys = "zoom", Zt = "e", Yt = "w", Jt = "s", Pt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", or = "".concat(J, "-crop"), Kr = "".concat(J, "-disabled"), dt = "".concat(J, "-hidden"), Fr = "".concat(J, "-hide"), Fc = "".concat(J, "-invisible"), Pe = "".concat(J, "-modal"), ir = "".concat(J, "-move"), be = "".concat(J, "Action"), Le = "".concat(J, "Preview"), Cr = "crop", Ws = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Gr = "dblclick", Gc = Dr ? "touchstart" : "mousedown", Xc = Dr ? "touchmove" : "mousemove", qc = Dr ? "touchend touchcancel" : "mouseup", Xr = kr ? "pointerdown" : Gc, qr = kr ? "pointermove" : Xc, Jr = kr ? "pointerup pointercancel" : qc, Qr = "ready", ts = "resize", es = "wheel", ur = "zoom", rs = "image/jpeg", Jc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Qc = /^data:/, tu = /^data:image\/jpeg;base64,/, eu = /^img|canvas$/i, Fs = 200, Gs = 100, ss = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Cr,
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
  minContainerWidth: Fs,
  minContainerHeight: Gs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, ru = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', su = Number.isNaN || Lt.isNaN;
function Z(r) {
  return typeof r == "number" && !su(r);
}
var os = function(t) {
  return t > 0 && t < 1 / 0;
};
function Ge(r) {
  return typeof r > "u";
}
function Ft(r) {
  return rr(r) === "object" && r !== null;
}
var ou = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Ft(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && ou.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ut(r) {
  return typeof r == "function";
}
var iu = Array.prototype.slice;
function Xs(r) {
  return Array.from ? Array.from(r) : iu.call(r);
}
function st(r, t) {
  return r && ut(t) && (Array.isArray(r) || Z(r.length) ? Xs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Ft(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    o[a - 1] = arguments[a];
  return Ft(t) && o.length > 0 && o.forEach(function(n) {
    Ft(n) && Object.keys(n).forEach(function(d) {
      t[d] = n[d];
    });
  }), t;
}, nu = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return nu.test(r) ? Math.round(r * t) / t : r;
}
var au = /^width|height|left|top|marginLeft|marginTop$/;
function zt(r, t) {
  var s = r.style;
  st(t, function(o, a) {
    au.test(a) && Z(o) && (o = "".concat(o, "px")), s[a] = o;
  });
}
function lu(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (Z(r.length)) {
      st(r, function(o) {
        at(o, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function Tt(r, t) {
  if (t) {
    if (Z(r.length)) {
      st(r, function(s) {
        Tt(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (Z(r.length)) {
      st(r, function(o) {
        te(o, t, s);
      });
      return;
    }
    s ? at(r, t) : Tt(r, t);
  }
}
var cu = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(cu, "$1-$2").toLowerCase();
}
function dr(r, t) {
  return Ft(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Ir(t)));
}
function ye(r, t, s) {
  Ft(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Ir(t)), s);
}
function uu(r, t) {
  if (Ft(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Ir(t)));
}
var qs = /\s\s*/, Js = function() {
  var r = !1;
  if (Ze) {
    var t = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(n) {
        t = n;
      }
    });
    Lt.addEventListener("test", s, o), Lt.removeEventListener("test", s, o);
  }
  return r;
}();
function kt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  t.trim().split(qs).forEach(function(n) {
    if (!Js) {
      var d = r.listeners;
      d && d[n] && d[n][s] && (a = d[n][s], delete d[n][s], Object.keys(d[n]).length === 0 && delete d[n], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, a, o);
  });
}
function yt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  t.trim().split(qs).forEach(function(n) {
    if (o.once && !Js) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      a = function() {
        delete m[n][s], r.removeEventListener(n, a, o);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, m[n] || (m[n] = {}), m[n][s] && r.removeEventListener(n, m[n][s], o), m[n][s] = a, r.listeners = m;
    }
    r.addEventListener(n, a, o);
  });
}
function re(r, t, s) {
  var o;
  return ut(Event) && ut(CustomEvent) ? o = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(o);
}
function Qs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Xe = Lt.location, du = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function is(r) {
  var t = r.match(du);
  return t !== null && (t[1] !== Xe.protocol || t[2] !== Xe.hostname || t[3] !== Xe.port);
}
function ns(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function me(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, a = r.translateX, n = r.translateY, d = [];
  Z(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), Z(n) && n !== 0 && d.push("translateY(".concat(n, "px)")), Z(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), Z(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Z(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function hu(r) {
  var t = Vs({}, r), s = 0;
  return st(r, function(o, a) {
    delete t[a], st(t, function(n) {
      var d = Math.abs(o.startX - n.startX), m = Math.abs(o.startY - n.startY), l = Math.abs(o.endX - n.endX), v = Math.abs(o.endY - n.endY), p = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, a = {
    endX: s,
    endY: o
  };
  return t ? a : Vs({
    startX: s,
    startY: o
  }, a);
}
function fu(r) {
  var t = 0, s = 0, o = 0;
  return st(r, function(a) {
    var n = a.startX, d = a.startY;
    t += n, s += d, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Rt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = os(o), d = os(s);
  if (n && d) {
    var m = s * t;
    a === "contain" && m > o || a === "cover" && m < o ? s = o / t : o = s * t;
  } else
    n ? s = o / t : d && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function pu(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var a = o % 90 * Math.PI / 180, n = Math.sin(a), d = Math.cos(a), m = t * d + s * n, l = t * n + s * d;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function gu(r, t, s, o) {
  var a = t.aspectRatio, n = t.naturalWidth, d = t.naturalHeight, m = t.rotate, l = m === void 0 ? 0 : m, v = t.scaleX, p = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, I = s.aspectRatio, E = s.naturalWidth, L = s.naturalHeight, T = o.fillColor, U = T === void 0 ? "transparent" : T, j = o.imageSmoothingEnabled, P = j === void 0 ? !0 : j, B = o.imageSmoothingQuality, G = B === void 0 ? "low" : B, D = o.maxWidth, z = D === void 0 ? 1 / 0 : D, q = o.maxHeight, ot = q === void 0 ? 1 / 0 : q, rt = o.minWidth, ct = rt === void 0 ? 0 : rt, vt = o.minHeight, pt = vt === void 0 ? 0 : vt, gt = document.createElement("canvas"), A = gt.getContext("2d"), R = Rt({
    aspectRatio: I,
    width: z,
    height: ot
  }), N = Rt({
    aspectRatio: I,
    width: ct,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max(N.width, E)), H = Math.min(R.height, Math.max(N.height, L)), _t = Rt({
    aspectRatio: a,
    width: z,
    height: ot
  }), bt = Rt({
    aspectRatio: a,
    width: ct,
    height: pt
  }, "cover"), xe = Math.min(_t.width, Math.max(bt.width, n)), De = Math.min(_t.height, Math.max(bt.height, d)), Ye = [-xe / 2, -De / 2, xe, De];
  return gt.width = ee(tt), gt.height = ee(H), A.fillStyle = U, A.fillRect(0, 0, tt, H), A.save(), A.translate(tt / 2, H / 2), A.rotate(l * Math.PI / 180), A.scale(p, S), A.imageSmoothingEnabled = P, A.imageSmoothingQuality = G, A.drawImage.apply(A, [r].concat(Hs(Ye.map(function(ke) {
    return Math.floor(ee(ke));
  })))), A.restore(), gt;
}
var to = String.fromCharCode;
function mu(r, t, s) {
  var o = "";
  s += t;
  for (var a = t; a < s; a += 1)
    o += to(r.getUint8(a));
  return o;
}
var vu = /^data:.*,/;
function bu(r) {
  var t = r.replace(vu, ""), s = atob(t), o = new ArrayBuffer(s.length), a = new Uint8Array(o);
  return st(a, function(n, d) {
    a[d] = s.charCodeAt(d);
  }), o;
}
function yu(r, t) {
  for (var s = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(to.apply(null, Xs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function Su(r) {
  var t = new DataView(r), s;
  try {
    var o, a, n;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, m = 2; m + 1 < d; ) {
        if (t.getUint8(m) === 255 && t.getUint8(m + 1) === 225) {
          a = m;
          break;
        }
        m += 1;
      }
    if (a) {
      var l = a + 4, v = a + 10;
      if (mu(t, l, 4) === "Exif") {
        var p = t.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && t.getUint16(v + 2, o) === 42) {
          var b = t.getUint32(v + 4, o);
          b >= 8 && (n = v + b);
        }
      }
    }
    if (n) {
      var S = t.getUint16(n, o), I, E;
      for (E = 0; E < S; E += 1)
        if (I = n + E * 12 + 2, t.getUint16(I, o) === 274) {
          I += 8, s = t.getUint16(I, o), t.setUint16(I, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function wu(r) {
  var t = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      t = 90, o = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: o
  };
}
var _u = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, a = this.cropper, n = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    at(a, dt), Tt(t, dt);
    var m = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Fs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Gs)
    };
    this.containerData = m, zt(a, {
      width: m.width,
      height: m.height
    }), at(t, dt), Tt(a, dt);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, n = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, m = n / d, l = t.width, v = t.height;
    t.height * m > t.width ? o === 3 ? l = t.height * m : v = t.width / m : o === 3 ? v = t.width / m : l = t.height * m;
    var p = {
      aspectRatio: m,
      naturalWidth: n,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (t.width - p.width) / 2, p.top = (t.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = Q({}, p);
  },
  limitCanvas: function(t, s) {
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, m = o.viewMode, l = n.aspectRatio, v = this.cropped && d;
    if (t) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (p = Math.max(p, a.width), b = Math.max(b, a.height), m === 3 && (b * l > p ? p = b * l : b = p / l)) : m > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * l > p ? p = b * l : b = p / l));
      var S = Rt({
        aspectRatio: l,
        width: p,
        height: b
      });
      p = S.width, b = S.height, n.minWidth = p, n.minHeight = b, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var I = a.width - n.width, E = a.height - n.height;
        n.minLeft = Math.min(0, I), n.minTop = Math.min(0, E), n.maxLeft = Math.max(0, I), n.maxTop = Math.max(0, E), v && this.limited && (n.minLeft = Math.min(d.left, d.left + (d.width - n.width)), n.minTop = Math.min(d.top, d.top + (d.height - n.height)), n.maxLeft = d.left, n.maxTop = d.top, m === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, I), n.maxLeft = Math.max(0, I)), n.height >= a.height && (n.minTop = Math.min(0, E), n.maxTop = Math.max(0, E))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, a = this.imageData;
    if (s) {
      var n = pu({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = n.width, m = n.height, l = o.width * (d / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, zt(this.canvas, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, a = o.naturalWidth * (s.width / s.naturalWidth), n = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: a,
      height: n,
      left: (s.width - a) / 2,
      top: (s.height - n) / 2
    }), zt(this.image, Q({
      width: o.width,
      height: o.height
    }, me(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, n = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? n.height = n.width / o : n.width = n.height * o), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = s.left + (s.width - n.width) / 2, n.top = s.top + (s.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = Q({}, n);
  },
  limitCropBox: function(t, s) {
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (t) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, S = m ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      v = Math.min(v, a.width), p = Math.min(p, a.height), l && (v && p ? p * l > v ? p = v / l : v = p * l : v ? p = v / l : p && (v = p * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, n.left), d.minTop = Math.max(0, n.top), d.maxLeft = Math.min(a.width, n.left + n.width) - d.width, d.maxTop = Math.min(a.height, n.top + n.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && ye(this.face, be, o.width >= s.width && o.height >= s.height ? Zs : Mr), zt(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, nr, this.getData());
  }
}, xu = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, a = s ? this.crossOriginUrl : this.url, n = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = n, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = t.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, st(m, function(l) {
        var v = document.createElement("img");
        ye(l, Le, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = n, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var s = dr(t, Le);
      zt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, uu(t, Le);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, d = t.width, m = t.height, l = o.left - s.left - t.left, v = o.top - s.top - t.top;
    !this.cropped || this.disabled || (zt(this.viewBoxImage, Q({
      width: d,
      height: m
    }, me(Q({
      translateX: -l,
      translateY: -v
    }, t)))), st(this.previews, function(p) {
      var b = dr(p, Le), S = b.width, I = b.height, E = S, L = I, T = 1;
      a && (T = S / a, L = n * T), n && L > I && (T = I / n, E = a * T, L = I), zt(p, {
        width: E,
        height: L
      }), zt(p.getElementsByTagName("img")[0], Q({
        width: d * T,
        height: m * T
      }, me(Q({
        translateX: -l * T,
        translateY: -v * T
      }, t))));
    }));
  }
}, Du = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && yt(t, cr, s.cropstart), ut(s.cropmove) && yt(t, lr, s.cropmove), ut(s.cropend) && yt(t, ar, s.cropend), ut(s.crop) && yt(t, nr, s.crop), ut(s.zoom) && yt(t, ur, s.zoom), yt(o, Xr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && yt(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && yt(o, Gr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, Jr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && yt(window, ts, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && kt(t, cr, s.cropstart), ut(s.cropmove) && kt(t, lr, s.cropmove), ut(s.cropend) && kt(t, ar, s.cropend), ut(s.crop) && kt(t, nr, s.crop), ut(s.zoom) && kt(t, ur, s.zoom), kt(o, Xr, this.onCropStart), s.zoomable && s.zoomOnWheel && kt(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && kt(o, Gr, this.onDblclick), kt(t.ownerDocument, qr, this.onCropMove), kt(t.ownerDocument, Jr, this.onCropEnd), s.responsive && kt(window, ts, this.onResize);
  }
}, ku = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, a = s.offsetWidth / o.width, n = s.offsetHeight / o.height, d = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (d !== 1) {
        var m, l;
        t.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(st(m, function(v, p) {
          m[p] = v * d;
        })), this.setCropBoxData(st(l, function(v, p) {
          l[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(lu(this.dragBox, or) ? Ws : Cr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (Z(s) && s !== 1 || Z(o) && o !== 0 || t.ctrlKey))) {
      var a = this.options, n = this.pointers, d;
      t.changedTouches ? st(t.changedTouches, function(m) {
        n[m.identifier] = Ae(m);
      }) : n[t.pointerId || 0] = Ae(t), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? d = Ys : d = dr(t.target, be), Jc.test(d) && re(this.element, cr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Us && (this.cropping = !0, at(this.dragBox, Pe)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(a) {
        Q(o[a.identifier] || {}, Ae(a, !0));
      }) : Q(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, Pe, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, Mu = {
  change: function(t) {
    var s = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = n.left, p = n.top, b = n.width, S = n.height, I = v + b, E = p + S, L = 0, T = 0, U = a.width, j = a.height, P = !0, B;
    !l && t.shiftKey && (l = b && S ? b / S : 1), this.limited && (L = n.minLeft, T = n.minTop, U = L + Math.min(a.width, o.width, o.left + o.width), j = T + Math.min(a.height, o.height, o.top + o.height));
    var G = d[Object.keys(d)[0]], D = {
      x: G.endX - G.startX,
      y: G.endY - G.startY
    }, z = function(ot) {
      switch (ot) {
        case Zt:
          I + D.x > U && (D.x = U - I);
          break;
        case Yt:
          v + D.x < L && (D.x = L - v);
          break;
        case Pt:
          p + D.y < T && (D.y = T - p);
          break;
        case Jt:
          E + D.y > j && (D.y = j - E);
          break;
      }
    };
    switch (m) {
      case Mr:
        v += D.x, p += D.y;
        break;
      case Zt:
        if (D.x >= 0 && (I >= U || l && (p <= T || E >= j))) {
          P = !1;
          break;
        }
        z(Zt), b += D.x, b < 0 && (m = Yt, b = -b, v -= b), l && (S = b / l, p += (n.height - S) / 2);
        break;
      case Pt:
        if (D.y <= 0 && (p <= T || l && (v <= L || I >= U))) {
          P = !1;
          break;
        }
        z(Pt), S -= D.y, p += D.y, S < 0 && (m = Jt, S = -S, p -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case Yt:
        if (D.x <= 0 && (v <= L || l && (p <= T || E >= j))) {
          P = !1;
          break;
        }
        z(Yt), b -= D.x, v += D.x, b < 0 && (m = Zt, b = -b, v -= b), l && (S = b / l, p += (n.height - S) / 2);
        break;
      case Jt:
        if (D.y >= 0 && (E >= j || l && (v <= L || I >= U))) {
          P = !1;
          break;
        }
        z(Jt), S += D.y, S < 0 && (m = Pt, S = -S, p -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case he:
        if (l) {
          if (D.y <= 0 && (p <= T || I >= U)) {
            P = !1;
            break;
          }
          z(Pt), S -= D.y, p += D.y, b = S * l;
        } else
          z(Pt), z(Zt), D.x >= 0 ? I < U ? b += D.x : D.y <= 0 && p <= T && (P = !1) : b += D.x, D.y <= 0 ? p > T && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = ge, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = fe, b = -b, v -= b) : S < 0 && (m = pe, S = -S, p -= S);
        break;
      case fe:
        if (l) {
          if (D.y <= 0 && (p <= T || v <= L)) {
            P = !1;
            break;
          }
          z(Pt), S -= D.y, p += D.y, b = S * l, v += n.width - b;
        } else
          z(Pt), z(Yt), D.x <= 0 ? v > L ? (b -= D.x, v += D.x) : D.y <= 0 && p <= T && (P = !1) : (b -= D.x, v += D.x), D.y <= 0 ? p > T && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = pe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = he, b = -b, v -= b) : S < 0 && (m = ge, S = -S, p -= S);
        break;
      case ge:
        if (l) {
          if (D.x <= 0 && (v <= L || E >= j)) {
            P = !1;
            break;
          }
          z(Yt), b -= D.x, v += D.x, S = b / l;
        } else
          z(Jt), z(Yt), D.x <= 0 ? v > L ? (b -= D.x, v += D.x) : D.y >= 0 && E >= j && (P = !1) : (b -= D.x, v += D.x), D.y >= 0 ? E < j && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = he, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = pe, b = -b, v -= b) : S < 0 && (m = fe, S = -S, p -= S);
        break;
      case pe:
        if (l) {
          if (D.x >= 0 && (I >= U || E >= j)) {
            P = !1;
            break;
          }
          z(Zt), b += D.x, S = b / l;
        } else
          z(Jt), z(Zt), D.x >= 0 ? I < U ? b += D.x : D.y >= 0 && E >= j && (P = !1) : b += D.x, D.y >= 0 ? E < j && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = fe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = ge, b = -b, v -= b) : S < 0 && (m = he, S = -S, p -= S);
        break;
      case Zs:
        this.move(D.x, D.y), P = !1;
        break;
      case Ys:
        this.zoom(hu(d), t), P = !1;
        break;
      case Us:
        if (!D.x || !D.y) {
          P = !1;
          break;
        }
        B = Qs(this.cropper), v = G.startX - B.left, p = G.startY - B.top, b = n.minWidth, S = n.minHeight, D.x > 0 ? m = D.y > 0 ? pe : he : D.x < 0 && (v -= b, m = D.y > 0 ? ge : fe), D.y < 0 && (p -= S), this.cropped || (Tt(this.cropBox, dt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    P && (n.width = b, n.height = S, n.left = v, n.top = p, this.action = m, this.renderCropBox()), st(d, function(q) {
      q.startX = q.endX, q.startY = q.endY;
    });
  }
}, Cu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, Pe), Tt(this.cropBox, dt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Tt(this.dragBox, Pe), at(this.cropBox, dt)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, st(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Tt(this.cropper, Kr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Kr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, a = o.left, n = o.top;
    return this.moveTo(Ge(t) ? t : a + Number(t), Ge(s) ? s : n + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, a = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (Z(t) && (o.left = t, a = !0), Z(s) && (o.top = s, a = !0), a && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var o = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(o.width * t / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, o) {
    var a = this.options, n = this.canvasData, d = n.width, m = n.height, l = n.naturalWidth, v = n.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var p = l * t, b = v * t;
      if (re(this.element, ur, {
        ratio: t,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, I = Qs(this.cropper), E = S && Object.keys(S).length ? fu(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (p - d) * ((E.pageX - I.left - n.left) / d), n.top -= (b - m) * ((E.pageY - I.top - n.top) / m);
      } else
        Qt(s) && Z(s.x) && Z(s.y) ? (n.left -= (p - d) * ((s.x - n.left) / d), n.top -= (b - m) * ((s.y - n.top) / m)) : (n.left -= (p - d) / 2, n.top -= (b - m) / 2);
      n.width = p, n.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), Z(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, Z(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(Z(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, a = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (Z(t) && (o.scaleX = t, a = !0), Z(s) && (o.scaleY = s, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, a = this.canvasData, n = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: n.left - a.left,
        y: n.top - a.top,
        width: n.width,
        height: n.height
      };
      var m = o.width / o.naturalWidth;
      if (st(d, function(p, b) {
        d[b] = p / m;
      }), t) {
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
  setData: function(t) {
    var s = this.options, o = this.imageData, a = this.canvasData, n = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var d = !1;
      s.rotatable && Z(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, d = !0), s.scalable && (Z(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, d = !0), Z(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = o.width / o.naturalWidth;
      Z(t.x) && (n.left = t.x * m + a.left), Z(t.y) && (n.top = t.y * m + a.top), Z(t.width) && (n.width = t.width * m), Z(t.height) && (n.height = t.height * m), this.setCropBoxData(n);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, s = {};
    return this.ready && st(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = t[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (Z(t.left) && (s.left = t.left), Z(t.top) && (s.top = t.top), Z(t.width) ? (s.width = t.width, s.height = t.width / o) : Z(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, o = this.options.aspectRatio, a, n;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (Z(t.left) && (s.left = t.left), Z(t.top) && (s.top = t.top), Z(t.width) && t.width !== s.width && (a = !0, s.width = t.width), Z(t.height) && t.height !== s.height && (n = !0, s.height = t.height), o && (a ? s.height = s.width / o : n && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = gu(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, d = a.y, m = a.width, l = a.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (n *= v, d *= v, m *= v, l *= v);
    var p = m / l, b = Rt({
      aspectRatio: p,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Rt({
      aspectRatio: p,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), I = Rt({
      aspectRatio: p,
      width: t.width || (v !== 1 ? o.width : m),
      height: t.height || (v !== 1 ? o.height : l)
    }), E = I.width, L = I.height;
    E = Math.min(b.width, Math.max(S.width, E)), L = Math.min(b.height, Math.max(S.height, L));
    var T = document.createElement("canvas"), U = T.getContext("2d");
    T.width = ee(E), T.height = ee(L), U.fillStyle = t.fillColor || "transparent", U.fillRect(0, 0, E, L);
    var j = t.imageSmoothingEnabled, P = j === void 0 ? !0 : j, B = t.imageSmoothingQuality;
    U.imageSmoothingEnabled = P, B && (U.imageSmoothingQuality = B);
    var G = o.width, D = o.height, z = n, q = d, ot, rt, ct, vt, pt, gt;
    z <= -m || z > G ? (z = 0, ot = 0, ct = 0, pt = 0) : z <= 0 ? (ct = -z, z = 0, ot = Math.min(G, m + z), pt = ot) : z <= G && (ct = 0, ot = Math.min(m, G - z), pt = ot), ot <= 0 || q <= -l || q > D ? (q = 0, rt = 0, vt = 0, gt = 0) : q <= 0 ? (vt = -q, q = 0, rt = Math.min(D, l + q), gt = rt) : q <= D && (vt = 0, rt = Math.min(l, D - q), gt = rt);
    var A = [z, q, ot, rt];
    if (pt > 0 && gt > 0) {
      var R = E / m;
      A.push(ct * R, vt * R, pt * R, gt * R);
    }
    return U.drawImage.apply(U, [o].concat(Hs(A.map(function(N) {
      return Math.floor(ee(N));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !Ge(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, o = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var n = t === Cr, d = s.movable && t === Ws;
      t = n || d ? t : Ks, s.dragMode = t, ye(o, be, t), te(o, or, n), te(o, ir, d), s.cropBoxMovable || (ye(a, be, t), te(a, or, n), te(a, ir, d));
    }
    return this;
  }
}, Iu = Lt.Cropper, eo = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Vc(this, r), !t || !eu.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, ss, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Hc(r, [{
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
        if (Qc.test(s)) {
          tu.test(s) ? this.read(bu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== rs && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, n.checkCrossOrigin && is(s) && a.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = a.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, a = this.imageData, n = Su(s), d = 0, m = 1, l = 1;
      if (n > 1) {
        this.url = yu(s, rs);
        var v = wu(n);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (a.rotate = d), o.scalable && (a.scaleX = m, a.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, a = s.crossOrigin, n = o;
      this.options.checkCrossOrigin && is(o) && (a || (a = "anonymous"), n = ns(o)), this.crossOrigin = a, this.crossOriginUrl = n;
      var d = document.createElement("img");
      a && (d.crossOrigin = a), d.src = n || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), at(d, Fr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Lt.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Lt.navigator.userAgent), n = function(v, p) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !a) {
        n(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        n(d.width, d.height), a || m.removeChild(d);
      }, d.src = o.src, a || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
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
        d.innerHTML = ru;
        var m = d.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), p = m.querySelector(".".concat(J, "-crop-box")), b = p.querySelector(".".concat(J, "-face"));
        this.container = n, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = p, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), at(s, dt), n.insertBefore(m, s.nextSibling), Tt(a, Fr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, at(p, dt), o.guides || at(p.getElementsByClassName("".concat(J, "-dashed")), dt), o.center || at(p.getElementsByClassName("".concat(J, "-center")), dt), o.background && at(m, "".concat(J, "-bg")), o.highlight || at(b, Fc), o.cropBoxMovable && (at(b, ir), ye(b, be, Mr)), o.cropBoxResizable || (at(p.getElementsByClassName("".concat(J, "-line")), dt), at(p.getElementsByClassName("".concat(J, "-point")), dt)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ut(o.ready) && yt(s, Qr, o.ready, {
          once: !0
        }), re(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Tt(this.element, dt);
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
      return window.Cropper = Iu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(ss, Qt(s) && s);
    }
  }]), r;
}();
Q(eo.prototype, _u, xu, Du, ku, Mu, Cu);
const Eu = { class: "flex" }, Tu = ["aria-label"], Lu = { class: "ml-auto mb-2" }, Au = { class: "w-full flex justify-center" }, $u = ["src"], Nu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { t: o } = O("i18n"), { apiUrl: a } = At(), n = $(null), d = $(null), m = $(!1), l = $(""), v = $(!1), p = () => {
      m.value = !m.value, m.value ? d.value = new eo(n.value, {
        crop(I) {
        }
      }) : d.value.destroy();
    }, b = O("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (I) => {
          l.value = "", v.value = !1, Oe(a.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: I
            }),
            name: s.selection.item.basename,
            json: !1
          }).then((E) => {
            l.value = o("Updated."), n.value.src = tr(s.selection.adapter, s.selection.item.path), p(), t("load");
          }).catch((E) => {
            l.value = o(E.message), v.value = !0;
          });
        }
      );
    };
    return Ct(() => {
      t("load");
    }), (I, E) => (_(), M(lt, null, [
      h("div", Eu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, Tu),
        h("div", Lu, [
          m.value ? (_(), M("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(x(o)("Crop")), 1)) : K("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: E[0] || (E[0] = (L) => p())
          }, C(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      h("div", Au, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, $u)
      ]),
      l.value.length ? (_(), X(Nt, {
        key: 0,
        onHidden: E[1] || (E[1] = (L) => l.value = ""),
        error: v.value
      }, {
        default: F(() => [
          et(C(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, Ou = { class: "flex" }, ju = ["aria-label"], Pu = /* @__PURE__ */ h("div", null, null, -1), zu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return Ct(() => {
      t("load");
    }), (s, o) => (_(), M(lt, null, [
      h("div", Ou, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, ju)
      ]),
      Pu
    ], 64));
  }
}, Ru = ["aria-label"], Bu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Vu = ["src"], Hu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), a = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Ct(() => {
      t("load");
    }), (n, d) => (_(), M(lt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, Ru),
      h("div", null, [
        h("video", Bu, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Vu),
          et(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Uu = ["aria-label"], Zu = {
  class: "w-full",
  controls: ""
}, Yu = ["src"], Wu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), a = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Ct(() => {
      t("load");
    }), (n, d) => (_(), M(lt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, Uu),
      h("div", null, [
        h("audio", Zu, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Yu),
          et(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Ku = ["aria-label"], Fu = ["data"], Gu = ["src"], Xu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), a = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Ct(() => {
      t("load");
    }), (n, d) => (_(), M(lt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, Ku),
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
        `, 8, Gu)
        ], 8, Fu)
      ])
    ], 64));
  }
}, qu = { class: "sm:flex custom-new-folder-popup" }, Ju = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Qu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, td = {
  key: 0,
  class: "flex leading-5"
}, ed = /* @__PURE__ */ h("svg", {
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
], -1), rd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, sd = { class: "font-bold pl-2" }, od = { class: "font-bold pl-2" }, id = {
  name: "VFModalPreview"
}, nd = /* @__PURE__ */ Object.assign(id, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: s } = At(), o = O("emitter"), { t: a } = O("i18n"), n = $(!1), d = (v) => n.value = v, m = (v) => (t.selection.item.mime_type ?? "").startsWith(v), l = () => {
      const v = s.value + "?" + Gt({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      o.emit("vf-download", v);
    };
    return (v, p) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: p[6] || (p[6] = (b) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Close")), 1),
        h("button", {
          type: "button",
          onClick: p[7] || (p[7] = (b) => l()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Download")), 1)
      ]),
      default: F(() => [
        h("div", qu, [
          h("div", Ju, [
            h("div", null, [
              m("text") ? (_(), X(Bc, {
                key: 0,
                selection: r.selection,
                onLoad: p[0] || (p[0] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("image") ? (_(), X(Nu, {
                key: 1,
                selection: r.selection,
                onLoad: p[1] || (p[1] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("video") ? (_(), X(Hu, {
                key: 2,
                selection: r.selection,
                onLoad: p[2] || (p[2] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("audio") ? (_(), X(Wu, {
                key: 3,
                selection: r.selection,
                onLoad: p[3] || (p[3] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("application/pdf") ? (_(), X(Xu, {
                key: 4,
                selection: r.selection,
                onLoad: p[4] || (p[4] = (b) => d(!0))
              }, null, 8, ["selection"])) : (_(), X(zu, {
                key: 5,
                selection: r.selection,
                onLoad: p[5] || (p[5] = (b) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Qu, [
              n.value == !1 ? (_(), M("div", td, [
                ed,
                h("span", null, C(x(a)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        h("div", rd, [
          h("div", null, [
            h("span", sd, C(x(a)("File Size")) + ": ", 1),
            et(C(x(ds)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", od, C(x(a)("Last Modified")) + ": ", 1),
            et(" " + C(x(hs)(r.selection.item.last_modified)), 1)
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
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = $(t.selection.items[0]), d = $(t.selection.items[0].basename), m = $(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: t.current.dirname,
          item: n.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", {
            label: a("%s is renamed.", d.value)
          });
        },
        onError: (v) => {
          m.value = a(v.message);
        }
      });
    };
    return (v, p) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", ad, [
          h("div", ld, [
            h("div", cd, [
              ud,
              h("h3", dd, C(x(a)("Rename")), 1)
            ]),
            hd
          ]),
          h("div", fd, [
            h("div", pd, [
              h("p", gd, [
                n.value.type == "dir" ? (_(), M("svg", md, bd)) : (_(), M("svg", yd, wd)),
                h("span", _d, C(n.value.basename), 1)
              ]),
              St(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, xd), [
                [ie, d.value]
              ]),
              m.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(m.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Md = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Cd = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", Id = { class: "flex flex-col h-full items-center" }, Ed = { class: "custom-file-picker-title" }, Td = { class: "file-picker-title-img" }, Ld = /* @__PURE__ */ h("svg", {
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
], -1), Ad = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, $d = /* @__PURE__ */ h("hr", null, null, -1), Nd = { class: "mt-3 text-center custom-file-picker-body" }, Od = { class: "mt-2" }, jd = { class: "text-gray-500 mb-1" }, Pd = ["id"], zd = {
  key: 0,
  class: "py-2"
}, Rd = /* @__PURE__ */ h("div", { class: "search-terms-div bg-white dark:bg-gray-800" }, [
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("label", {
      class: "custom-uploader-label",
      for: "img-upload-rte-search-terms"
    }, [
      /* @__PURE__ */ h("div", { class: "post-info icon-circle search-icon" }, [
        /* @__PURE__ */ h("img", {
          class: "router-img-btn-img",
          src: Md,
          alt: "",
          srcset: ""
        })
      ]),
      /* @__PURE__ */ et(" Search Terms")
    ])
  ]),
  /* @__PURE__ */ h("hr"),
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("input", {
      id: "search-terms-file-picker",
      class: "form-control user-dynamic-input address-autocomplete",
      type: "text",
      placeholder: "Search Terms",
      autocomplete: "off"
    })
  ])
], -1), Bd = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
  /* @__PURE__ */ h("div", null, [
    /* @__PURE__ */ h("label", {
      class: "custom-uploader-label",
      for: "img-upload-rte-captions"
    }, [
      /* @__PURE__ */ h("div", { class: "post-info icon-circle details-icon" }, [
        /* @__PURE__ */ h("img", {
          class: "router-img-btn-img",
          src: Cd,
          alt: "",
          srcset: ""
        })
      ]),
      /* @__PURE__ */ et(" Video Details")
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
], -1), Vd = { class: "bg-white custom-file-picker-action" }, Hd = ["disabled", "onClick"], Ud = {
  name: "VFModalUpload"
}, Zd = /* @__PURE__ */ Object.assign(Ud, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter"), { apiUrl: o } = At(), { t: a } = O("i18n"), n = O("maxFileSize"), d = $(null), m = $(null), l = $(null), v = $([]), p = $(""), b = $(!0), S = () => {
      p.value = "", d.value.start();
    }, I = O("postData");
    return Ct(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Gt(
          Object.assign(I, {
            q: "upload",
            adapter: t.current.adapter,
            path: t.current.dirname
          })
        ),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Ne && { "X-CSRF-Token": Ne }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(E, L) {
            b.value = !1, de.each(L, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: de.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(E, L) {
            v.value[v.value.findIndex((T) => T.id == L.id)].percent = L.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, s.emit("vf-fetch", {
              params: {
                q: "index",
                adapter: t.current.adapter,
                path: t.current.dirname
              }
            });
          },
          Error: function(E, L) {
            d.value.stop(), L.code == de.HTTP_ERROR ? p.value = a(JSON.parse(L.response).message) : L.code == de.FILE_SIZE_ERROR ? p.value = a(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [n]
            ) : p.value = a(L.message);
          }
        }
      }), d.value.init();
    }), (E, L) => (_(), X($t, null, {
      buttons: F(() => [
        Rd,
        Bd,
        h("div", Vd, [
          h("button", {
            disabled: b.value,
            onClick: Wt(S, ["prevent"]),
            type: "button",
            class: ht([
              b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, C(x(a)("Upload")), 11, Hd),
          h("button", {
            type: "button",
            onClick: L[1] || (L[1] = (T) => x(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, C(x(a)("Cancel")), 1)
        ])
      ]),
      default: F(() => [
        h("div", Id, [
          h("div", Ed, [
            h("div", Td, [
              Ld,
              h("h3", Ad, C(x(a)("Upload files")), 1)
            ]),
            $d
          ]),
          h("div", Nd, [
            h("div", Od, [
              h("div", jd, [
                (_(!0), M(lt, null, wt(v.value, (T) => (_(), M("div", null, [
                  h("div", {
                    id: T.id
                  }, [
                    et(C(T.name) + " ( " + C(T.size) + ") ", 1),
                    h("b", null, C(T.percent), 1)
                  ], 8, Pd)
                ]))), 256)),
                v.value.length ? K("", !0) : (_(), M("div", zd, C(x(a)("No files selected!")), 1))
              ]),
              h("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                h("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, C(x(a)("Select Files")), 513)
              ], 512),
              p.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: L[0] || (L[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(p.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Yd = { class: "sm:flex custom-new-folder-popup" }, Wd = { class: "custom-file-picker-title" }, Kd = { class: "file-picker-title-img" }, Fd = /* @__PURE__ */ h("svg", {
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
], -1), Gd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xd = /* @__PURE__ */ h("hr", null, null, -1), qd = { class: "mt-3 text-center w-full p-4 h-full" }, Jd = { class: "mt-2 create-folder-form" }, Qd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, th = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, eh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), rh = [
  eh
], sh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, oh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ih = [
  oh
], nh = { class: "ml-1.5" }, ah = ["onKeyup", "placeholder"], lh = {
  name: "VFModalArchive"
}, ch = /* @__PURE__ */ Object.assign(lh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = $(""), d = $(""), m = $(t.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(
            m.value.map(({ path: v, type: p }) => ({ path: v, type: p }))
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
    return (v, p) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", Yd, [
          h("div", Wd, [
            h("div", Kd, [
              Fd,
              h("h3", Gd, C(x(a)("Archive the files")), 1)
            ]),
            Xd
          ]),
          h("div", qd, [
            h("div", Jd, [
              (_(!0), M(lt, null, wt(m.value, (b) => (_(), M("p", Qd, [
                b.type == "dir" ? (_(), M("svg", th, rh)) : (_(), M("svg", sh, ih)),
                h("span", nh, C(b.basename), 1)
              ]))), 256)),
              St(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, ah), [
                [ie, n.value]
              ]),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), uh = { class: "sm:flex sm:items-start" }, dh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), hh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, fh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ph = { class: "mt-2" }, gh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, mh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, vh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), bh = [
  vh
], yh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), wh = [
  Sh
], _h = { class: "ml-1.5" }, xh = { class: "my-1 text-sm text-gray-500" }, Dh = {
  name: "VFModalUnarchive"
}, kh = /* @__PURE__ */ Object.assign(Dh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n");
    $("");
    const n = $(t.selection.items[0]), d = $(""), m = $([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: t.current.dirname,
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
    return (v, p) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", uh, [
          dh,
          h("div", hh, [
            h("h3", fh, C(x(a)("Unarchive")), 1),
            h("div", ph, [
              (_(!0), M(lt, null, wt(m.value, (b) => (_(), M("p", gh, [
                b.type == "dir" ? (_(), M("svg", mh, bh)) : (_(), M("svg", yh, wh)),
                h("span", _h, C(b.basename), 1)
              ]))), 256)),
              h("p", xh, C(x(a)("The archive will be unarchived at")) + " (" + C(r.current.dirname) + ")", 1),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Mh = { class: "sm:flex sm:items-start" }, Ch = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Ih = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Eh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Th = { class: "mt-2" }, Lh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ah = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $h = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Nh = [
  $h
], Oh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ph = [
  jh
], zh = { class: "ml-1.5" }, Rh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Bh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Vh = /* @__PURE__ */ h("svg", {
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
], -1), Hh = { class: "ml-1.5 overflow-auto" }, Uh = {
  name: "VFModalMove"
}, Zh = /* @__PURE__ */ Object.assign(Uh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = O("emitter"), { t: o } = O("i18n");
    O("storage");
    const a = O("adapter"), n = $(t.selection.items.from), d = $(""), m = () => {
      n.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: t.current.dirname,
          items: JSON.stringify(n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: t.current.dirname,
            to: t.selection.items.to.path,
            files: n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", t.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, v) => (_(), X($t, null, {
      buttons: F(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        h("div", Mh, [
          Ch,
          h("div", Ih, [
            h("h3", Eh, C(x(o)("Move files")), 1),
            h("div", Th, [
              (_(!0), M(lt, null, wt(n.value, (p) => (_(), M("p", Lh, [
                p.type == "dir" ? (_(), M("svg", Ah, Nh)) : (_(), M("svg", Oh, Ph)),
                h("span", zh, C(p.path), 1)
              ]))), 256)),
              h("p", Rh, C(x(o)("Are you sure you want to move these files?")), 1),
              h("p", Bh, [
                Vh,
                h("span", Hh, C(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (_(), X(Nt, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(C(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: ch,
  ModalDelete: ic,
  ModalMessage: fc,
  ModalMove: Zh,
  ModalNewFile: Nc,
  ModalNewFolder: kc,
  ModalPreview: nd,
  ModalRename: kd,
  ModalUnarchive: kh,
  ModalUpload: Zd
}, Symbol.toStringTag, { value: "Module" })), qe = {
  VueFinder: El,
  ...Yh
};
const Fh = {
  install(r) {
    for (const t in qe)
      if (qe.hasOwnProperty(t)) {
        const s = qe[t];
        r.component(s.name, s);
      }
  }
};
export {
  Fh as default
};
