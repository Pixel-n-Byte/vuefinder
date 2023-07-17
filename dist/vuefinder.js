import { ref as A, watch as ze, inject as P, openBlock as w, createElementBlock as I, createElementVNode as h, unref as x, normalizeClass as ht, createCommentVNode as F, createTextVNode as tt, toDisplayString as E, createVNode as Mt, TransitionGroup as Oo, withCtx as X, Fragment as nt, renderList as vt, reactive as $e, onMounted as wt, onUpdated as jo, withDirectives as Et, vShow as Ee, withModifiers as Wt, nextTick as Re, customRef as Po, withKeys as oe, isRef as zo, vModelText as ie, normalizeStyle as as, provide as Ut, createBlock as q, resolveDynamicComponent as Ro, renderSlot as Qe } from "vue";
import de from "plupload";
var ns;
const Ne = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), Oe = (r, { method: t = "get", params: s = {}, json: o = !0, signal: n = null }) => {
  const a = { method: t };
  if (a.signal = n, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    a.headers = {}, Ne && (a.headers["X-CSRF-Token"] = Ne);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    a.body = d;
  }
  return fetch(r, a).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Bo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(n) {
      n(s);
    }), (o = r.get("*")) && o.slice().map(function(n) {
      n(t, s);
    });
  } };
}
function Je(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = A(JSON.parse(t));
  ze(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function n(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function a() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: n, clearStore: a };
}
const zr = A("");
function At() {
  function r(t) {
    zr.value = t;
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
], Go = ["aria-label"], Xo = /* @__PURE__ */ h("a", {
  type: "button",
  class: "custom-upload-button"
}, "Upload", -1), qo = [
  Xo
], Qo = ["aria-label"], Jo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), ti = [
  Jo
], ei = {
  key: 1,
  class: "flex text-center"
}, ri = { class: "pl-2" }, si = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, oi = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ii = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ni = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ai = [
  ii,
  ni
], li = { class: "flex text-center items-center justify-end" }, ci = ["aria-label"], ui = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), di = [
  ui
], hi = ["aria-label"], fi = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, pi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, gi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, mi = ["aria-label"], vi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, bi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, yi = {
  name: "VFToolbar"
}, Si = /* @__PURE__ */ Object.assign(yi, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), { t: n } = P("i18n"), a = A(s("viewport", "grid")), d = A([]), m = A(s("full-screen", !1)), l = A("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = P("loadingState"), p = () => v.value, b = () => {
      m.value = !m.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), t.on("vf-view-toggle", (S) => {
      o("viewport", S), a.value = S;
    }), (S, k) => (w(), I("div", Vo, [
      l.value.length ? (w(), I("div", ei, [
        h("div", ri, [
          tt(E(x(n)("Search results for")) + " ", 1),
          h("span", si, E(l.value), 1)
        ]),
        p() ? (w(), I("svg", oi, ai)) : F("", !0)
      ])) : (w(), I("div", Ho, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: k[0] || (k[0] = (M) => x(t).emit("vf-modal-show", {
            type: "new-folder",
            items: d.value
          }))
        }, Yo, 8, Uo),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[1] || (k[1] = (M) => !d.value.length || x(t).emit("delete-button"))
        }, [
          (w(), I("svg", {
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
        ], 8, Wo),
        h("div", {
          class: "mx-1.5 cusom-upload-button-div absolute",
          "aria-label": x(n)("Upload"),
          "data-microtip-position": "bottom",
          onClick: k[2] || (k[2] = (M) => x(t).emit("custom-modal-show", {
            type: "upload",
            items: d.value
          }))
        }, qo, 8, Go),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (w(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[3] || (k[3] = (M) => !d.value.length || x(t).emit("vf-modal-show", {
            type: "unarchive",
            items: d.value
          }))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, ti, 2))
        ], 8, Qo)) : F("", !0)
      ])),
      h("div", li, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), I("svg", {
            onClick: k[4] || (k[4] = (M) => x(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, di))
        ], 8, ci),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (w(), I("svg", fi, [
            m.value ? (w(), I("path", pi)) : (w(), I("path", gi))
          ]))
        ], 8, hi),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: k[5] || (k[5] = (M) => l.value.length || x(t).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), I("svg", {
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
            a.value == "grid" ? (w(), I("path", vi)) : F("", !0),
            a.value == "list" ? (w(), I("path", bi)) : F("", !0)
          ], 2))
        ], 8, mi)
      ])
    ]));
  }
}), hr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
var wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(wi, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var g, i, f, y, _ = [], C = !0, V = !1;
        try {
          if (f = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            C = !1;
          } else
            for (; !(C = (g = f.call(e)).done) && (_.push(g.value), _.length !== u); C = !0)
              ;
        } catch (W) {
          V = !0, i = W;
        } finally {
          try {
            if (!C && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (V)
              throw i;
          }
        }
        return _;
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
    function n(c) {
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
    function a(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var g = u[e];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, B(g.key), g);
      }
    }
    function m(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, e) {
      return u = B(u), u in c ? Object.defineProperty(c, u, {
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
    function k(c, u, e) {
      return S() ? k = Reflect.construct.bind() : k = function(i, f, y) {
        var _ = [null];
        _.push.apply(_, f);
        var C = Function.bind.apply(i, _), V = new C();
        return y && b(V, y.prototype), V;
      }, k.apply(null, arguments);
    }
    function M(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function j(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return j = function(g) {
        if (g === null || !M(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, i);
        }
        function i() {
          return k(g, arguments, p(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(i, g);
      }, j(c);
    }
    function L(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return L(c);
    }
    function O(c) {
      var u = S();
      return function() {
        var g = p(c), i;
        if (u) {
          var f = p(this).constructor;
          i = Reflect.construct(g, arguments, f);
        } else
          i = g.apply(this, arguments);
        return H(this, i);
      };
    }
    function T(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function R() {
      return typeof Reflect < "u" && Reflect.get ? R = Reflect.get.bind() : R = function(u, e, g) {
        var i = T(u, e);
        if (i) {
          var f = Object.getOwnPropertyDescriptor(i, e);
          return f.get ? f.get.call(arguments.length < 3 ? u : g) : f.value;
        }
      }, R.apply(this, arguments);
    }
    function K(c, u) {
      return G(c) || s(c, u) || rt(c, u) || pt();
    }
    function D(c) {
      return z(c) || ot(c) || rt(c) || bt();
    }
    function z(c) {
      if (Array.isArray(c))
        return ct(c);
    }
    function G(c) {
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
    function bt() {
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
            e: function(C) {
              throw C;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, y = !1, _;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var C = e.next();
          return f = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
        },
        f: function() {
          try {
            !f && e.return != null && e.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function $(c, u) {
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
    function B(c) {
      var u = $(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var N = function(u, e, g) {
      var i = u.x, f = u.y, y = g.x, _ = g.y, C = {
        "+": {
          x: i + y,
          y: f + _
        },
        "-": {
          x: i - y,
          y: f - _
        },
        "*": {
          x: i * y,
          y: f * _
        },
        "/": {
          x: i / y,
          y: f / _
        }
      };
      return C[e];
    }, et = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
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
    }, yt = function(c, u) {
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
        return go(g, e);
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
    }, oo = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, io = function(c) {
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
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, V = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        e.x = parseInt(V[4]) || 0, e.y = parseInt(V[5]) || 0;
      }
      return e;
    }, no = function(u) {
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
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(C[0]) || 0, g.y = parseInt(C[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ar(u) : g;
    }, ao = function(u) {
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
    }, lo = function(c, u) {
      return u ? no(c) : ao(c);
    }, co = function(c) {
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
    }, uo = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, g = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, V = {
        x: 0,
        y: 0
      }, W = u ? e * 4 * g : e * g;
      return f.left.includes(i) && (V.x = y.x || -W, !u && !y.x && _ && C(["left"], e)), f.right.includes(i) && (V.x = y.x || W, !u && !y.x && _ && C(["right"], e)), f.up.includes(i) && (V.y = y.y || -W, !u && !y.y && _ && C(["top"], e)), f.down.includes(i) && (V.y = y.y || W, !u && !y.y && _ && C(["bottom"], e)), V;
    }, ho = function(c) {
      var u = c.element, e = c.force, g = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !e || (i.has(u) ? g && i.delete(u) : i.add(u), u.classList.add(f));
    }, fo = function(c) {
      var u = c.element, e = c.force, g = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !e)
        return !1;
      var y = g.has(u), _ = i.has(u);
      y && !_ ? g.delete(u) : !y && _ && g.add(u), u.classList.remove(f);
    }, ae = function(u, e, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, g, i) {
      if (e === void 0)
        return g ? l({}, u, i) : {};
      if (e === null)
        return l({}, u, null);
      var f = !0, y = !1, _ = typeof i == "string";
      _ && (f = typeof e == "string" || e instanceof String), _ && !f && (y = !0, ae(u, "string"));
      var C = !Number.isNaN(i) && typeof i == "number";
      C && (f = !Number.isNaN(e) && typeof e == "number"), C && !f && (y = !0, ae(u, "number"));
      var V = Object.prototype.toString.call(i) === "[object Object]";
      V && (f = Object.prototype.toString.call(e) === "[object Object]"), V && !f && (y = !0, ae(u, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof e == "boolean"), W && !f && (y = !0, ae(u, "boolean"));
      var at = Array.isArray(i);
      at && (f = Array.isArray(e)), at && !f && (y = !0, ae(u, "array"));
      var xt = y || g;
      return u === "dragKeys" && f ? l({}, u, Object.assign(i, e)) : u === "dragKeys" && !f ? xt ? l({}, u, i) : {} : (u === "dropZones" && f && new Set(e.map(function(Dt) {
        return Dt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, e) : xt ? l({}, u, i) : {});
    }, po = function(c, u) {
      return n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
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
      var u = c.element, e = c.posDirection, g = c.containerRect, i = c.useTransform, f = lo(u, i), y = N(f, "+", e);
      le(u, y, i);
      var _ = u.getBoundingClientRect(), C = Lr({
        elementRect: _,
        containerRect: g
      });
      co({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: g,
        elementPos: y,
        useTransform: i
      });
    }, go = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, mo = function(c, u, e) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? g || document.body : c, f = u.includes("top") && i.scrollTop > 0, y = u.includes("bottom") && i.scrollTop < i.scrollHeight, _ = u.includes("left") && i.scrollLeft > 0, C = u.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * e), y && (i.scrollTop += 1 * e), _ && (i.scrollLeft -= 1 * e), C && (i.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, vo = function(c) {
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
            condition: function(at) {
              return at.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var at = f.getTarget();
              return n({}, at ? {
                dropTarget: at.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var at = K(V[C], 2), xt = at[0], Dt = at[1];
        ["pre", !1].forEach(function(Ct) {
          return u(Ct ? "".concat(xt, ":").concat(Ct) : xt, function(it) {
            return Dt.forEach(function(mt) {
              return (!mt.condition || mt.condition(it)) && e(Ct ? "".concat(Ct).concat(mt.name) : mt.name, n(n({
                items: i.elements,
                isDragging: g.isDragging
              }, it), mt.extraData ? mt.extraData(it) : {}));
            });
          });
        });
      }, C = 0, V = Object.entries(y); C < V.length; C++)
        _();
    }, jt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(i) {
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
          e._observers = yt(e.parentNodes, ke(function(i) {
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
          e.DS.PubSub.publish("Area:scroll:pre", y), mo(e._node, i, f), e.DS.PubSub.publish("Area:scroll", y);
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
        var e = this, g = u.DS;
        a(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
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
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var C = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], C), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var V = uo({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: _,
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
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: f,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), l(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), l(this, "stop", function(i) {
          i != null && i.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), l(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !e._elements.length || y || e.DS.continue)) {
            var _ = N(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (_ = e.limitDirection(_)), e._elements.forEach(function(C) {
              return Nr({
                element: C,
                posDirection: _,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(i) {
          var f = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, _ = {
            top: f.top - e._selectionRect.top + y.y,
            left: f.left - e._selectionRect.left + y.x,
            bottom: f.bottom - e._selectionRect.bottom + y.y,
            right: f.right - e._selectionRect.right + y.x
          };
          return i.x === 0 && i.y === 0 || (i.y < 0 && (i.y = Math.max(i.y, _.top)), i.x < 0 && (i.x = Math.max(i.x, _.left)), i.y > 0 && (i.y = Math.min(i.y, _.bottom)), i.x > 0 && (i.x = Math.min(i.x, _.right)), e._selectionRect.top += i.y, e._selectionRect.bottom += i.y, e._selectionRect.left += i.x, e._selectionRect.right += i.x), i;
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
    }(), So = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS, i = u.id, f = u.element, y = u.droppables;
        a(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!e.isDestroyed) {
            var C = e.droppables.filter(function(V) {
              return e.DS.SelectedSet.has(V);
            });
            C.length && (C.forEach(function(V) {
              V.classList[_]("".concat(e.Settings.droppableClass)), V.classList[_]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[_]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var _;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(e.Settings.droppedTargetClass), C.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(C) {
            return !e.DS.SelectedSet.has(C);
          }), (_ = e._itemsDropped) !== null && _ !== void 0 && _.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var _, C, V;
          e.isDestroyed || (e._itemsDropped = D(new Set([].concat(D(e._itemsDropped), D((_ = e.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (C = e._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (V = e._itemsDropped) !== null && V !== void 0 && V.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          e.droppables.forEach(function(C) {
            e.itemsInside.includes(C) ? (C.classList.add("".concat(e.Settings.droppedInsideClass)), C.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), _ = !0) : (C.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), C.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), _ ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), l(this, "start", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || e.setReadyClasses("add");
        }), l(this, "stop", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = jt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          e.element && (e.element.classList.remove(C["dropZoneClass:pre"]), e.element.classList.add(C.dropZoneClass));
        }), this._observers = yt(this.parentNodes, ke(function() {
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
    }(), wo = /* @__PURE__ */ m(
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
        a(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(i) {
          var f = i.dropZones;
          f && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = f.map(function(y) {
            return new So(n({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var C = e._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return e._zonesByDroppable.set(_, [y]);
              e._zonesByDroppable.set(_, D(new Set([].concat(D(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          e._zones.forEach(function(f) {
            f !== i && f.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, f) {
          for (var y = f.x, _ = f.y, C = 0, V = i.length; C < V; C++) {
            var W = e._zoneByElement.get(i[C]);
            if (W && qt(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
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
          var _ = y.itemsInside;
          return f && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(i) {
          var f;
          if ((f = e._zones) !== null && f !== void 0 && f.length) {
            var y = (i == null ? void 0 : i.x) || e.DS.stores.PointerStore.currentVal.x, _ = (i == null ? void 0 : i.y) || e.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
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
    ), _o = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
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
            var y = e.DS, _ = y.stores, C = _.PointerStore, V = _.KeyStore, W = y.SelectableSet, at = y.SelectedSet;
            C.start(f);
            var xt = (
              /** @type {any} */
              f.target
            );
            W.has(xt) && (V.isMultiSelectKeyPressed(f) || at.clear(), at.toggle(xt), e.reset());
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
          var f = i.event, y = i.scroll_directions, _ = i.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: _,
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
    }(), xo = /* @__PURE__ */ m(
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(i, f) {
          return Array.isArray(e.subscribers[i]) || (e.subscribers[i] = []), e.subscribers[i].push(f), e.subscribers[i].length - 1;
        }), l(this, "unsubscribe", function(i, f, y) {
          y >= 0 ? e.subscribers[i].splice(y, 1) : f && (e.subscribers[i] = e.subscribers[i].filter(function(_) {
            return _ !== f;
          }));
        }), l(this, "publish", function(i, f) {
          Array.isArray(i) ? i.forEach(function(y) {
            return e._publish(y, f);
          }) : e._publish(i, f);
        }), l(this, "_publish", function(i, f) {
          var y = e.subscribers[i];
          Array.isArray(y) && (i.includes(":pre") ? e._handlePrePublish(y, f) : e._handlePublish(y, f));
        }), l(this, "_handlePublish", function(i, f) {
          for (var y = 0, _ = i.length; y < _; y++) {
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
    ), Do = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = O(e);
      function e(g) {
        var i, f = g.DS;
        return a(this, e), i = u.call(this), l(L(i), "_rects", void 0), l(L(i), "_timeout", void 0), l(L(i), "init", function() {
          return jt(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), l(L(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(L(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(L(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(L(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), l(L(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), l(L(i), "getRect", function(y) {
          return i._rects ? i.rects.get(y) : y.getBoundingClientRect();
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          i.forEach(function(C) {
            C.classList.remove(_["selectableClass:pre"]), C.classList.add(_.selectableClass);
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
            if (R(p(e.prototype), "has", this).call(this, i))
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
            }), R(p(e.prototype), "add", this).call(this, i), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!R(p(e.prototype), "has", this).call(this, i))
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
          }), R(p(e.prototype), "delete", this).call(this, i), this.DS.publish("Selectable:removed", f), !0;
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
    }(/* @__PURE__ */ j(Set)), ko = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = O(e);
      function e(g) {
        var i, f = g.DS;
        return a(this, e), i = u.call(this), l(L(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(L(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), l(L(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), i.DS = f, i;
      }
      return m(e, [{
        key: "add",
        value: function(i) {
          if (R(p(e.prototype), "has", this).call(this, i))
            return this;
          var f = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selected:added:pre", f), R(p(e.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!R(p(e.prototype), "has", this).call(this, i))
            return !0;
          var f = {
            items: this.elements,
            item: i
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = R(p(e.prototype), "delete", this).call(this, i);
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
    }(/* @__PURE__ */ j(Set)), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (e._storePrevious(f), e._handleInsideSelection(!0, f));
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          f || e.DS.continue || e._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(i, f) {
          var y = e.DS, _ = y.SelectableSet, C = y.SelectorArea, V = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && e.Settings.multiSelectToggling, at = e.Settings.selectionThreshold, xt = _.rects, Dt = V.rect, Ct = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), mt = gt(xt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Ce = K(ce.value, 2), ue = Ce[0], Ie = Ce[1];
              C.isInside(ue, Ie) && (qt(Ie, Dt, at) ? Ct.set(ue, Ie) : it.set(ue, Ie));
            }
          } catch (Fe) {
            mt.e(Fe);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Pr = e.filterSelected({
              select: Ct,
              unselect: it,
              selectorRect: Dt
            }), $o = Pr.select, No = Pr.unselect;
            $o.forEach(function(Fe, Ke) {
              return ho({
                element: Ke,
                force: i,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), No.forEach(function(Fe, Ke) {
              return fo({
                element: Ke,
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
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var i, f;
          e.HTMLNode && (i = e.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (f = e.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), l(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = e.DS.stores.PointerStore, _ = y.initialValArea;
            Or(e.HTMLNode, U(_, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), l(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || e.DS.continue)) {
            var y = e.DS.stores, _ = y.ScrollStore, C = y.PointerStore, V = io({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
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
    }(), Io = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), l(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[f][y](e.HTMLNode);
        }), l(this, "updatePos", function() {
          e._rect = null;
          var i = e.DS.Area.rect, f = e.DS.Area.computedBorder, y = e.HTMLNode.style, _ = "".concat(i.top + f.top, "px"), C = "".concat(i.left + f.left, "px"), V = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== V && (y.width = V), y.height !== W && (y.height = W);
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
              elementRect: U(f.currentVal),
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
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
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
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(i) {
          return oo({
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
          this._initialVal = e, this._initialValArea = e && N(e, "-", N(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
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
          this._currentVal = e, this._currentValArea = e && N(e, "-", N(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
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
          this._lastVal = e, this._lastValArea = e && N(e, "-", N(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Lo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
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
    }(), Ao = /* @__PURE__ */ m(
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
        a(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, _ = f.init;
          return e.DS.publish("Settings:updated:pre", n({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, _ = f.init, C = po(y, _), V = function() {
            var Dt, Ct = K(at[W], 2), it = Ct[0], mt = Ct[1];
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
          }, W = 0, at = Object.entries(C); W < at.length; W++)
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
        a(this, c), l(this, "continue", !1), l(this, "start", function() {
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
        }), this.Selector = new Co({
          DS: this
        }), this.SelectorArea = new Io({
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
})(ls);
var xi = ls.exports;
const Di = /* @__PURE__ */ _i(xi), cs = (r, t, s, o, n) => (t = Math, s = t.log, o = 1024, n = s(r) / s(o) | 0, r / t.pow(o, n)).toFixed(0) + " " + (n ? "KMGTPEZY"[--n] + "iB" : "B"), us = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), ki = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Mi = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ci = [
  Mi
], Ii = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ei = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ti = [
  Ei
], Li = {
  name: "VFSortIcon"
}, Te = /* @__PURE__ */ Object.assign(Li, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (w(), I("div", null, [
      r.direction == "down" ? (w(), I("svg", ki, Ci)) : F("", !0),
      r.direction == "up" ? (w(), I("svg", Ii, Ti)) : F("", !0)
    ]));
  }
}), Ai = ["onClick"], $i = {
  name: "VFToast.vue"
}, Ni = /* @__PURE__ */ Object.assign($i, {
  setup(r) {
    const t = P("emitter"), { getStore: s } = P("storage"), o = A(s("full-screen", !1)), n = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", a = A([]), d = (l) => {
      a.value.splice(l, 1);
    }, m = (l) => {
      let v = a.value.findIndex((p) => p.id === l);
      v !== -1 && d(v);
    };
    return t.on("vf-toast-clear", () => {
      a.value = [];
    }), t.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, a.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (w(), I("div", {
      class: ht([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Mt(Oo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: X(() => [
          (w(!0), I(nt, null, vt(a.value, (p, b) => (w(), I("div", {
            onClick: (S) => d(b),
            key: p,
            class: ht([n(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, Ai))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Gt = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Oi } = At(), tr = (r, t) => Oi.value + "?" + Gt({ q: "preview", adapter: r, path: t }), Vt = typeof window < "u", ds = Vt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Vt && "IntersectionObserver" in window, fs = Vt && "classList" in document.createElement("p"), ps = Vt && window.devicePixelRatio > 1, ji = {
  elements_selector: ".lazy",
  container: ds || Vt ? document : null,
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
}, gs = (r) => Object.assign({}, ji, r), Rr = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", n = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: n } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: n });
  }
  window.dispatchEvent(s);
}, Pi = (r, t) => {
  if (t)
    if (!t.length)
      Rr(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Rr(r, o);
}, Ot = "src", fr = "srcset", pr = "sizes", ms = "poster", Se = "llOriginalAttrs", vs = "data", gr = "loading", bs = "loaded", ys = "applied", zi = "entered", mr = "error", Ss = "native", ws = "data-", _s = "ll-status", ft = (r, t) => r.getAttribute(ws + t), Ri = (r, t, s) => {
  var o = ws + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, we = (r) => ft(r, _s), Xt = (r, t) => Ri(r, _s, t), Be = (r) => Xt(r, null), vr = (r) => we(r) === null, Bi = (r) => we(r) === gr, Vi = (r) => we(r) === mr, br = (r) => we(r) === Ss, Hi = [gr, bs, ys, mr], Ui = (r) => Hi.indexOf(we(r)) >= 0, Ht = (r, t, s, o) => {
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
  if (fs) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, It = (r, t) => {
  if (fs) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Zi = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Yi = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Ve = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, Wi = (r) => {
  r.disconnect();
}, Fi = (r, t, s) => {
  t.unobserve_entered && Ve(r, s);
}, yr = (r, t) => {
  r && (r.loadingCount += t);
}, Ki = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, t) => {
  r && (r.toLoadCount = t);
}, Gi = (r) => r.loadingCount > 0, Xi = (r) => r.toLoadCount > 0, ks = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, Sr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  ks(s).forEach(t);
}, Ms = (r, t) => {
  ks(r).forEach(t);
}, He = [Ot], Cs = [Ot, ms], ve = [Ot, fr, pr], Is = [vs], Ue = (r) => !!r[Se], Es = (r) => r[Se], Ts = (r) => delete r[Se], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[Se] = s;
}, qi = (r) => {
  Ue(r) || (r[Se] = { backgroundImage: r.style.backgroundImage });
}, Qi = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Ft = (r, t) => {
  if (!Ue(r))
    return;
  const s = Es(r);
  t.forEach((o) => {
    Qi(r, o, s[o]);
  });
}, Ji = (r) => {
  if (!Ue(r))
    return;
  const t = Es(r);
  r.style.backgroundImage = t.backgroundImage;
}, Ls = (r, t, s) => {
  ne(r, t.class_applied), Xt(r, ys), s && (t.unobserve_completed && Ve(r, t), Ht(t.callback_applied, r, s));
}, As = (r, t, s) => {
  ne(r, t.class_loading), Xt(r, gr), s && (yr(s, 1), Ht(t.callback_loading, r, s));
}, Bt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Br = (r, t) => {
  Bt(r, pr, ft(r, t.data_sizes)), Bt(r, fr, ft(r, t.data_srcset)), Bt(r, Ot, ft(r, t.data_src));
}, tn = (r, t) => {
  Sr(r, (s) => {
    se(s, ve), Br(s, t);
  }), se(r, ve), Br(r, t);
}, en = (r, t) => {
  se(r, He), Bt(r, Ot, ft(r, t.data_src));
}, rn = (r, t) => {
  Ms(r, (s) => {
    se(s, He), Bt(s, Ot, ft(s, t.data_src));
  }), se(r, Cs), Bt(r, ms, ft(r, t.data_poster)), Bt(r, Ot, ft(r, t.data_src)), r.load();
}, sn = (r, t) => {
  se(r, Is), Bt(r, vs, ft(r, t.data_src));
}, on = (r, t, s) => {
  const o = ft(r, t.data_bg), n = ft(r, t.data_bg_hidpi), a = ps && n ? n : o;
  a && (r.style.backgroundImage = `url("${a}")`, xs(r).setAttribute(Ot, a), As(r, t, s));
}, nn = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), n = ft(r, t.data_bg_multi_hidpi), a = ps && n ? n : o;
  a && (r.style.backgroundImage = a, Ls(r, t, s));
}, an = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const n = o.split("|");
  let a = n.map((d) => `image-set(${d})`);
  r.style.backgroundImage = a.join(), r.style.backgroundImage === "" && (a = n.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = a.join()), Ls(r, t, s);
}, $s = {
  IMG: tn,
  IFRAME: en,
  VIDEO: rn,
  OBJECT: sn
}, ln = (r, t) => {
  const s = $s[r.tagName];
  s && s(r, t);
}, cn = (r, t, s) => {
  const o = $s[r.tagName];
  o && (o(r, t), As(r, t, s));
}, un = ["IMG", "IFRAME", "VIDEO", "OBJECT"], dn = (r) => un.indexOf(r.tagName) > -1, Ns = (r, t) => {
  t && !Gi(t) && !Xi(t) && Ht(r.callback_finish, t);
}, Vr = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, hn = (r, t, s) => {
  r.removeEventListener(t, s);
}, wr = (r) => !!r.llEvLisnrs, fn = (r, t, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, o, t), Vr(r, "error", s);
}, er = (r) => {
  if (!wr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    hn(r, s, o);
  }
  delete r.llEvLisnrs;
}, Os = (r, t, s) => {
  Yi(r), yr(s, -1), Ki(s), It(r, t.class_loading), t.unobserve_completed && Ve(r, s);
}, pn = (r, t, s, o) => {
  const n = br(t);
  Os(t, s, o), ne(t, s.class_loaded), Xt(t, bs), Ht(s.callback_loaded, t, o), n || Ns(s, o);
}, gn = (r, t, s, o) => {
  const n = br(t);
  Os(t, s, o), ne(t, s.class_error), Xt(t, mr), Ht(s.callback_error, t, o), s.restore_on_error && Ft(t, ve), n || Ns(s, o);
}, _r = (r, t, s) => {
  const o = xs(r) || r;
  if (wr(o))
    return;
  fn(o, (d) => {
    pn(d, r, t, s), er(o);
  }, (d) => {
    gn(d, r, t, s), er(o);
  });
}, mn = (r, t, s) => {
  Zi(r), _r(r, t, s), qi(r), on(r, t, s), nn(r, t, s), an(r, t, s);
}, vn = (r, t, s) => {
  _r(r, t, s), cn(r, t, s);
}, xr = (r, t, s) => {
  dn(r) ? vn(r, t, s) : mn(r, t, s);
}, bn = (r, t, s) => {
  r.setAttribute("loading", "lazy"), _r(r, t, s), ln(r, t), Xt(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(Ot), r.removeAttribute(fr), r.removeAttribute(pr);
}, yn = (r) => {
  Sr(r, (t) => {
    Hr(t);
  }), Hr(r);
}, js = (r) => {
  Sr(r, (t) => {
    Ft(t, ve);
  }), Ft(r, ve);
}, Sn = (r) => {
  Ms(r, (t) => {
    Ft(t, He);
  }), Ft(r, Cs), r.load();
}, wn = (r) => {
  Ft(r, He);
}, _n = (r) => {
  Ft(r, Is);
}, xn = {
  IMG: js,
  IFRAME: wn,
  VIDEO: Sn,
  OBJECT: _n
}, Dn = (r) => {
  const t = xn[r.tagName];
  if (!t) {
    Ji(r);
    return;
  }
  t(r);
}, kn = (r, t) => {
  vr(r) || br(r) || (It(r, t.class_entered), It(r, t.class_exited), It(r, t.class_applied), It(r, t.class_loading), It(r, t.class_loaded), It(r, t.class_error));
}, Mn = (r, t) => {
  Dn(r), kn(r, t), Be(r), Ts(r);
}, Cn = (r, t, s, o) => {
  s.cancel_on_exit && Bi(r) && r.tagName === "IMG" && (er(r), yn(r), js(r), It(r, s.class_loading), yr(o, -1), Be(r), Ht(s.callback_cancel, r, t, o));
}, In = (r, t, s, o) => {
  const n = Ui(r);
  Xt(r, zi), ne(r, s.class_entered), It(r, s.class_exited), Fi(r, s, o), Ht(s.callback_enter, r, t, o), !n && xr(r, s, o);
}, En = (r, t, s, o) => {
  vr(r) || (ne(r, s.class_exited), Cn(r, t, s, o), Ht(s.callback_exit, r, t, o));
}, Tn = ["IMG", "IFRAME", "VIDEO"], Ps = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ln = (r, t, s) => {
  r.forEach((o) => {
    Tn.indexOf(o.tagName) !== -1 && bn(o, t, s);
  }), Ds(s, 0);
}, An = (r) => r.isIntersecting || r.intersectionRatio > 0, $n = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Nn = (r, t, s) => {
  r.forEach(
    (o) => An(o) ? In(o.target, o, t, s) : En(o.target, o, t, s)
  );
}, On = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, jn = (r, t) => {
  Wi(r), On(r, t);
}, Pn = (r, t) => {
  !hs || Ps(r) || (t._observer = new IntersectionObserver((s) => {
    Nn(s, r, t);
  }, $n(r)));
}, zs = (r) => Array.prototype.slice.call(r), je = (r) => r.container.querySelectorAll(r.elements_selector), zn = (r) => zs(r).filter(vr), Rn = (r) => Vi(r), Bn = (r) => zs(r).filter(Rn), Ur = (r, t) => zn(r || je(t)), Vn = (r, t) => {
  Bn(je(r)).forEach((o) => {
    It(o, r.class_error), Be(o);
  }), t.update();
}, Hn = (r, t) => {
  Vt && (t._onlineHandler = () => {
    Vn(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Un = (r) => {
  Vt && window.removeEventListener("online", r._onlineHandler);
}, _e = function(r, t) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, Pn(s, this), Hn(s, this), this.update(t);
};
_e.prototype = {
  update: function(r) {
    const t = this._settings, s = Ur(r, t);
    if (Ds(this, s.length), ds || !hs) {
      this.loadAll(s);
      return;
    }
    if (Ps(t)) {
      Ln(s, t, this);
      return;
    }
    jn(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Un(this), je(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Ur(r, t).forEach((o) => {
      Ve(o, this), xr(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    je(r).forEach((t) => {
      Mn(t, r);
    });
  }
};
_e.load = (r, t) => {
  const s = gs(t);
  xr(r, s);
};
_e.resetStatus = (r) => {
  Be(r);
};
Vt && Pi(_e, window.lazyLoadOptions);
const Zn = { class: "relative flex-auto flex flex-col overflow-hidden custom-explorer" }, Yn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Wn = { class: "absolute" }, Fn = /* @__PURE__ */ h("svg", {
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
], -1), Kn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Gn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Xn = { class: "grid grid-cols-12 items-center" }, qn = { class: "flex col-span-7 items-center" }, Qn = {
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
}, ta = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ea = [
  ta
], ra = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, sa = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, oa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ia = { class: "grid grid-cols-12 items-center" }, na = { class: "flex col-span-7 items-center" }, aa = {
  key: 0,
  src: hr,
  alt: ""
}, la = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ca = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ua = [
  ca
], da = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ha = { class: "col-span-2 text-center" }, fa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, pa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ga = { class: "custom-grid-item-div" }, ma = { class: "relative grid-folder-view-item" }, va = {
  key: 0,
  src: hr,
  alt: ""
}, ba = ["data-src", "alt"], ya = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sa = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), wa = [
  Sa
], _a = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, xa = { class: "break-all custom-item-text" }, Da = {
  name: "VFExplorer"
}, ka = /* @__PURE__ */ Object.assign(Da, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { setStore: o, getStore: n } = P("storage"), a = P("adapter"), d = ($) => $ == null ? void 0 : $.substring(0, 3), m = ($) => $.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = A(null), v = A(null), p = A(0), b = A(null), { t: S } = P("i18n"), k = Math.floor(Math.random() * 2 ** 32), M = A(n("full-screen", !1)), j = new _e();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, M.value = !M.value, o("full-screen", M.value);
    });
    const L = A("");
    s.on("vf-search-query", ({ newQuery: $ }) => {
      L.value = $, $ ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: $
        },
        onSuccess: (B) => {
          B.files.length || s.emit("vf-toast-push", {
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
    let H = null;
    const O = () => {
      H && clearTimeout(H);
    }, T = A(!0), R = ($) => {
      $.touches.length > 1 && (T.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), T.value = !T.value);
    }, K = ($) => {
      H = setTimeout(() => {
        const B = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: $.target.getBoundingClientRect().x,
          clientY: $.target.getBoundingClientRect().y
        });
        $.target.dispatchEvent(B);
      }, 500);
    }, D = ($) => {
      $.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: t.data.adapter, path: $.path }
      })) : s.emit("custom-modal-show", {
        type: "preview",
        adapter: t.data.adapter,
        item: $
      });
    }, z = $e({ active: !1, column: "", order: "" }), G = ($ = !0) => {
      let B = [...t.data.files], N = z.column, et = z.order == "asc" ? 1 : -1;
      if (!$)
        return B;
      const U = (_t, yt) => typeof _t == "string" && typeof yt == "string" ? _t.toLowerCase().localeCompare(yt.toLowerCase()) : _t < yt ? -1 : _t > yt ? 1 : 0;
      return z.active && (B = B.slice().sort((_t, yt) => U(_t[N], yt[N]) * et)), B;
    }, ot = ($) => {
      z.active && z.column == $ ? (z.active = z.order == "asc", z.column = $, z.order = "desc") : (z.active = !0, z.column = $, z.order = "asc");
    }, rt = () => b.value.getSelection().map(($) => JSON.parse($.dataset.item)), ct = ($, B) => {
      if ($.altKey || $.ctrlKey || $.metaKey)
        return $.preventDefault(), !1;
      $.dataTransfer.setDragImage(v.value, 0, 15), $.dataTransfer.effectAllowed = "all", $.dataTransfer.dropEffect = "copy", $.dataTransfer.setData("items", JSON.stringify(rt()));
    }, bt = ($, B) => {
      $.preventDefault();
      let N = JSON.parse($.dataTransfer.getData("items"));
      if (N.find((et) => et.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: N, to: B }
      });
    }, pt = ($, B) => {
      $.preventDefault(), !B || B.type !== "dir" || b.value.getSelection().find((N) => N == $.currentTarget) ? ($.dataTransfer.dropEffect = "none", $.dataTransfer.effectAllowed = "none") : $.dataTransfer.dropEffect = "copy";
    };
    return wt(() => {
      b.value = new Di({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Re(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + k)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: $, isDragging: B }) => {
        if (B)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const N = $.target.offsetWidth - $.offsetX, et = $.target.offsetHeight - $.offsetY;
          N < 15 && et < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: $ }) => {
        $ && b.value.break();
      }), b.value.subscribe("callback", ({ items: $, event: B, isDragging: N }) => {
        s.emit("vf-nodes-selected", rt()), p.value = b.value.getSelection().length;
      });
    }), jo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), j.update();
    }), wt(() => {
      ze(
        () => t.view,
        () => s.emit("vf-explorer-update")
      );
    }), ($, B) => (w(), I("div", Zn, [
      r.view == "list" || L.value.length ? (w(), I("div", Yn, [
        h("div", {
          onClick: B[0] || (B[0] = (N) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          tt(E(x(S)("Name")) + " ", 1),
          Et(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "basename"]
          ])
        ]),
        L.value.length ? F("", !0) : (w(), I("div", {
          key: 0,
          onClick: B[1] || (B[1] = (N) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          tt(E(x(S)("Size")) + " ", 1),
          Et(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "file_size"]
          ])
        ])),
        L.value.length ? F("", !0) : (w(), I("div", {
          key: 1,
          onClick: B[2] || (B[2] = (N) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          tt(E(x(S)("Date")) + " ", 1),
          Et(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "last_modified"]
          ])
        ])),
        L.value.length ? (w(), I("div", {
          key: 2,
          onClick: B[3] || (B[3] = (N) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          tt(E(x(S)("Filepath")) + " ", 1),
          Et(Mt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Ee, z.active && z.column == "path"]
          ])
        ])) : F("", !0)
      ])) : F("", !0),
      h("div", Wn, [
        h("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Fn,
          h("div", Kn, E(p.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: R,
        onContextmenu: B[10] || (B[10] = Wt((N) => x(s).emit("vf-contextmenu-show", {
          event: N,
          area: l.value,
          items: rt()
        }), ["self", "prevent"])),
        class: ht([(M.value, ""), "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        L.value.length ? (w(!0), I(nt, { key: 0 }, vt(G(), (N, et) => (w(), I("div", {
          onDblclick: (U) => D(N),
          onTouchstart: B[4] || (B[4] = (U) => K(U)),
          onTouchend: B[5] || (B[5] = (U) => O()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          class: ht(["vf-item-" + x(k), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": et
        }, [
          h("div", Xn, [
            h("div", qn, [
              N.type == "dir" ? (w(), I("img", Qn)) : (w(), I("svg", Jn, ea)),
              h("span", ra, E(N.basename), 1)
            ]),
            h("div", sa, E(N.path), 1)
          ])
        ], 42, Gn))), 256)) : F("", !0),
        r.view == "list" && !L.value.length ? (w(!0), I(nt, { key: 1 }, vt(G(), (N, et) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => D(N),
          onTouchstart: B[6] || (B[6] = (U) => K(U)),
          onTouchend: B[7] || (B[7] = (U) => O()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          onDragstart: (U) => ct(U),
          onDragover: (U) => pt(U, N),
          onDrop: (U) => bt(U, N),
          class: ht(["vf-item-" + x(k), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": et
        }, [
          h("div", ia, [
            h("div", na, [
              N.type == "dir" ? (w(), I("img", aa)) : (w(), I("svg", la, ua)),
              h("span", da, E(N.basename), 1)
            ]),
            h("div", ha, E(N.file_size ? x(cs)(N.file_size) : ""), 1),
            h("div", fa, E(x(us)(N.last_modified)), 1)
          ])
        ], 42, oa))), 256)) : F("", !0),
        r.view == "grid" && !L.value.length ? (w(!0), I(nt, { key: 2 }, vt(G(!1), (N, et) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => D(N),
          onTouchstart: B[8] || (B[8] = (U) => K(U)),
          onTouchend: B[9] || (B[9] = (U) => O()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: rt(),
            target: N
          }), ["prevent"]),
          onDragstart: (U) => ct(U),
          onDragover: (U) => pt(U, N),
          onDrop: (U) => bt(U, N),
          class: ht(["vf-item-" + x(k), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": et
        }, [
          h("div", ga, [
            h("div", ma, [
              N.type == "dir" ? (w(), I("img", va)) : (N.mime_type ?? "").startsWith("image") ? (w(), I("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": x(tr)(x(a).value, N.path),
                alt: N.basename
              }, null, 8, ba)) : (w(), I("svg", ya, wa)),
              !(N.mime_type ?? "").startsWith("image") && N.type != "dir" ? (w(), I("div", _a, E(d(N.extension)), 1)) : F("", !0)
            ]),
            h("span", xa, E(m(N.basename)), 1)
          ])
        ], 42, pa))), 256)) : F("", !0)
      ], 34),
      Mt(Ni)
    ]));
  }
}), Ma = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ca = { class: "flex leading-5 items-center" }, Ia = { class: "ml-3" }, Ea = { key: 0 }, Ta = { class: "ml-1" }, La = {
  name: "VFStatusbar"
}, Aa = /* @__PURE__ */ Object.assign(La, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), n = A(0);
    P("adapter");
    const { t: a, changeLocale: d } = P("i18n");
    A(s("locale", "")), t.on("vf-nodes-selected", (l) => {
      n.value = l.length;
    });
    const m = A("");
    return t.on("vf-search-query", ({ newQuery: l }) => {
      m.value = l;
    }), (l, v) => (w(), I("div", Ma, [
      h("div", Ca, [
        h("div", Ia, [
          m.value.length ? (w(), I("span", Ea, E(r.data.files.length) + " items found. ", 1)) : F("", !0),
          h("span", Ta, E(n.value > 0 ? n.value + " " + x(a)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), $a = (r, t = 0, s = !1) => {
  let o;
  return (...n) => {
    s && !o && r(...n), clearTimeout(o), o = setTimeout(() => {
      r(...n);
    }, t);
  };
}, Na = (r, t, s) => {
  const o = A(r);
  return Po((a, d) => ({
    get() {
      return a(), o.value;
    },
    set: $a(
      (m) => {
        o.value = m, d();
      },
      t,
      s
    )
  }));
}, Oa = { class: "custom-file-picker-search-bar flex p-2 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, ja = ["aria-label"], Pa = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), za = [
  Pa
], Ra = ["aria-label"], Ba = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Va = [
  Ba
], Ha = ["aria-label"], Ua = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Za = [
  Ua
], Ya = ["onClick"], Wa = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Fa = [
  Wa
], Ka = { class: "flex leading-5" }, Ga = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Xa = ["title", "onClick"], qa = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Qa = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ja = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), tl = [
  Qa,
  Ja
], el = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, rl = /* @__PURE__ */ h("svg", {
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
], -1), sl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), ol = ["onKeydown", "placeholder"], il = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), nl = [
  il
], al = {
  name: "VFBreadcrumb"
}, ll = /* @__PURE__ */ Object.assign(al, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), n = A(null), a = A([]), d = A(!1), m = A(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let O = [], T = [];
      n.value = t.data.dirname ?? o.value + "://", n.value.length == 0 && (a.value = []), n.value.replace(o.value + "://", "").split("/").forEach(function(R) {
        O.push(R), O.join("/") != "" && T.push({
          basename: R,
          name: R,
          path: o.value + "://" + O.join("/"),
          type: "dir"
        });
      }), T.length > 4 && (T = T.slice(-5), T[0].name = ".."), a.value = T;
    });
    const p = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      d.value = !0, Re(() => m.value.focus());
    }, S = Na("", 400), k = () => v.value;
    ze(S, (O) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: O });
    });
    const M = () => a.value.length && !d.value, j = (O) => {
      O.preventDefault();
      let T = JSON.parse(O.dataTransfer.getData("items"));
      if (T.find((R) => R.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: {
          from: T,
          to: a.value[a.value.length - 2] ?? {
            path: o.value + "://"
          }
        }
      });
    }, L = (O) => {
      O.preventDefault(), M() ? O.dataTransfer.dropEffect = "copy" : (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && p();
    };
    return (O, T) => (w(), I("div", Oa, [
      h("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onDragover: T[0] || (T[0] = (R) => L(R)),
          onDrop: T[1] || (T[1] = (R) => j(R)),
          onClick: T[2] || (T[2] = (R) => {
            var K;
            return !M() || x(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((K = a.value[a.value.length - 2]) == null ? void 0 : K.path) ?? x(o) + "://"
              }
            });
          }),
          class: ht([
            "h-6 w-6 p-0.5 rounded",
            M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, za, 34))
      ], 8, ja),
      k() ? (w(), I("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: T[4] || (T[4] = (R) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Za))
      ], 8, Ha)) : (w(), I("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: T[3] || (T[3] = (R) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Va))
      ], 8, Ra)),
      d.value ? (w(), I("div", el, [
        rl,
        sl,
        Et(h("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: oe(p, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": T[6] || (T[6] = (R) => zo(S) ? S.value = R : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, ol), [
          [ie, x(S)]
        ]),
        (w(), I("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, nl))
      ])) : (w(), I("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (w(), I("svg", {
          onClick: T[5] || (T[5] = (R) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa)),
        h("div", Ka, [
          (w(!0), I(nt, null, vt(a.value, (R, K) => (w(), I("div", { key: K }, [
            Ga,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: R.basename,
              onClick: (D) => x(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: R.path }
              })
            }, E(R.name), 9, Xa)
          ]))), 128))
        ]),
        k() ? (w(), I("svg", qa, tl)) : F("", !0)
      ], 8, Ya))
    ]));
  }
}), cl = ["onClick"], ul = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), dl = {
  name: "VFContextMenu"
}, hl = /* @__PURE__ */ Object.assign(dl, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), o = A(null), { apiUrl: n } = At(), a = $e({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = A([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: m } = P("i18n"), l = {
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
          const S = n.value + "?" + Gt({ q: "download", adapter: t.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      }
      // archive: {
      //   title: () =>  t('Archive'),
      //   action: () => {
      //     emitter.emit('vf-modal-show', {type:'archive', items: selectedItems});
      //   },
      // },
      // unarchive: {
      //   title: () => t('Unarchive'),
      //   action: () => {
      //     emitter.emit('vf-modal-show', {type:'unarchive', items: selectedItems});
      //   },
      // },
      // rename: {
      //   title: () =>  t('Rename'),
      //   action: () => {
      //     emitter.emit('vf-modal-show', {type:'rename', items: selectedItems});
      //   },
      // }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, p = A("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: k, items: M, target: j = null }) => {
      if (a.items = [], p.value)
        if (j)
          a.items.push(l.openDir), s.emit("vf-context-selected", [j]);
        else
          return;
      else
        !j && !p.value ? (a.items.push(l.refresh), a.items.push(l.newfolder), s.emit("vf-context-selected", [])) : M.length > 1 && M.some((L) => L.path === j.path) ? (a.items.push(l.refresh), a.items.push(l.delete), s.emit("vf-context-selected", M)) : (j.type == "dir" ? a.items.push(l.open) : (a.items.push(l.preview), a.items.push(l.download)), a.items.push(l.delete), s.emit("vf-context-selected", [j]));
      b(S, k);
    }), s.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const b = (S, k) => {
      a.active = !0, Re(() => {
        let M = k.getBoundingClientRect(), j = S.pageX, L = S.pageY, H = o.value.offsetHeight, O = o.value.offsetWidth;
        j = M.right - S.pageX + window.scrollX < O ? j - O : j, L = M.bottom - S.pageY + window.scrollY < H ? L - H : L, a.positions = {
          left: j + "px",
          top: L + "px"
        };
      });
    };
    return (S, k) => a.active ? (w(), I("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: as(a.positions)
    }, [
      (w(!0), I(nt, null, vt(a.items, (M) => (w(), I("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: (j) => v(M)
      }, [
        ul,
        h("span", null, E(M.title()), 1)
      ], 8, cl))), 128))
    ], 4)) : F("", !0);
  }
}), fl = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function pl(r) {
  const t = await fl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function gl(r, t, s) {
  const { getStore: o, setStore: n } = Je(r), a = A({}), d = (v) => {
    pl(v).then((p) => {
      a.value = p, n("locale", v), n("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? a.value = o("translations") : d(t);
  const m = (v, ...p) => p.length ? m(v = v.replace("%s", p.shift()), ...p) : v;
  function l(v, ...p) {
    return a.value.hasOwnProperty(v) ? m(a.value[v], ...p) : m(v, ...p);
  }
  return { t: l, changeLocale: d };
}
const ml = { class: "vuefinder" }, vl = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), bl = {
  name: "VueFinder"
}, yl = /* @__PURE__ */ Object.assign(bl, {
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
  emits: ["deleteButton", "fileMoved", "fileUploaded"],
  setup(r, { expose: t, emit: s }) {
    const o = r;
    t({
      doSomething
    });
    const n = Bo(), { setStore: a, getStore: d } = Je(o.id), m = A(d("adapter"));
    Ut("emitter", n), Ut("storage", Je(o.id)), Ut("postData", o.postData), Ut("adapter", m), Ut("maxFileSize", o.maxFileSize);
    const l = gl(o.id, o.locale, n);
    Ut("i18n", l);
    const { apiUrl: v, setApiUrl: p } = At();
    p(o.url);
    const b = $e({
      adapter: m.value,
      storages: [],
      dirname: ".",
      files: []
    }), S = A(d("viewport", "grid")), k = A(d("darkMode", o.dark));
    n.on("vf-darkMode-toggle", () => {
      k.value = !k.value, a("darkMode", k.value);
    });
    const M = A(!1);
    Ut("loadingState", M);
    const j = A(d("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      j.value = !j.value, a("full-screen", j.value);
    }), n.on("vf-view-toggle", (T) => {
      S.value = T;
    });
    const L = $e({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      L.active = !1;
    }), n.on("vf-modal-show", (T) => {
      L.active = !0, L.type = T.type, L.data = T;
    }), n.on("custom-modal-show", (T) => {
      s("customUploadItem", T);
    }), s("fileUploaded", () => {
      console.log("here Emmit");
    }), n.on("delete-button", (T) => {
      console.log("emit delete"), s("deleteButton", T);
    }), n.on("custom-modal-show", (T) => {
      s("customOpenItem", T);
    }), n.on("file-moved", (T) => {
      s("fileMoved", T);
    });
    const H = (T) => {
      Object.assign(b, T), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let O;
    return n.on("vf-fetch-abort", () => {
      O.abort(), M.value = !1;
    }), n.on("vf-fetch", ({ params: T, onSuccess: R = null, onError: K = null }) => {
      ["index", "search"].includes(T.q) && (O && O.abort(), M.value = !0);
      const D = T.path;
      s("customUpdateVariable", D), O = new AbortController();
      const z = O.signal;
      Oe(v.value, { params: T, signal: z }).then((G) => {
        m.value = G.adapter, ["index", "search"].includes(T.q) && (M.value = !1), n.emit("vf-modal-close"), H(G), R(G);
      }).catch((G) => {
        K && K(G);
      }).finally(() => {
      });
    }), n.on("vf-download", (T) => {
      document.getElementById("download_frame").src = T, n.emit("vf-modal-close");
    }), wt(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: m.value } });
    }), (T, R) => (w(), I("div", ml, [
      h("div", {
        class: ht(k.value ? "dark" : "")
      }, [
        h("div", {
          class: ht([
            j.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md",
            "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
          ]),
          style: as(j.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: R[0] || (R[0] = (K) => x(n).emit("vf-contextmenu-hide")),
          onTouchstart: R[1] || (R[1] = (K) => x(n).emit("vf-contextmenu-hide"))
        }, [
          Mt(Si, { data: b }, null, 8, ["data"]),
          Mt(ll, { data: b }, null, 8, ["data"]),
          Mt(ka, {
            view: S.value,
            data: b
          }, null, 8, ["view", "data"]),
          Mt(Aa, { data: b }, null, 8, ["data"])
        ], 38),
        L.active ? (w(), q(Ro("v-f-modal-" + L.type), {
          key: 0,
          selection: L.data,
          current: b
        }, null, 8, ["selection", "current"])) : F("", !0),
        Mt(hl, { current: b }, null, 8, ["current"]),
        vl
      ], 2)
    ]));
  }
}), Sl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), wl = { class: "fixed z-10 inset-0 overflow-hidden" }, _l = { class: "custom-popup-layout transition-all" }, xl = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, Dl = { class: "custom-layout-button-slot" }, $t = {
  __name: "ModalLayout",
  setup(r) {
    const t = P("emitter");
    return wt(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), I("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((n) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Sl,
      h("div", wl, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((n) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", _l, [
            h("div", xl, [
              Qe(s.$slots, "default")
            ]),
            h("div", Dl, [
              Qe(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, kl = ["aria-label"], Ml = /* @__PURE__ */ h("svg", {
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
], -1), Cl = [
  Ml
], Il = {
  name: "Message"
}, Nt = /* @__PURE__ */ Object.assign(Il, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var m;
    const { t: s } = P("i18n"), o = A(!1), n = A(null), a = A((m = n.value) == null ? void 0 : m.strMessage);
    ze(a, () => o.value = !1);
    const d = () => {
      t("hidden"), o.value = !0;
    };
    return (l, v) => (w(), I("div", null, [
      o.value ? F("", !0) : (w(), I("div", {
        key: 0,
        ref_key: "strMessage",
        ref: n,
        class: ht(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qe(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Cl, 8, kl)
      ], 2))
    ]));
  }
}), El = { class: "sm:flex custom-new-folder-popup delete-modal-container" }, Tl = { class: "custom-file-picker-title" }, Ll = { class: "file-picker-title-img" }, Al = /* @__PURE__ */ h("svg", {
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
], -1), $l = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nl = /* @__PURE__ */ h("hr", null, null, -1), Ol = { class: "mt-3 text-center create-folder-form custom-delete-modal" }, jl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Pl = { class: "mt-2" }, zl = { class: "text-sm text-gray-500" }, Rl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Bl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Hl = [
  Vl
], Ul = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Zl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Yl = [
  Zl
], Wl = { class: "ml-1.5" }, Fl = {
  name: "VFModalDelete"
}, Kl = /* @__PURE__ */ Object.assign(Fl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = A(t.selection.items), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(
            a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          )
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("Files deleted.") }), s.emit("delete-button", { files: a.value });
        },
        onError: (l) => {
          d.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", El, [
          h("div", Tl, [
            h("div", Ll, [
              Al,
              h("h3", $l, E(x(n)("Delete files")), 1)
            ]),
            Nl
          ]),
          h("div", Ol, [
            h("h3", jl, E(x(n)("Delete files")), 1),
            h("div", Pl, [
              h("p", zl, E(x(n)("Are you sure you want to delete these files?")), 1),
              (w(!0), I(nt, null, vt(a.value, (p) => (w(), I("p", Rl, [
                p.type == "dir" ? (w(), I("svg", Bl, Hl)) : (w(), I("svg", Ul, Yl)),
                h("span", Wl, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Gl = { class: "sm:flex sm:items-start" }, Xl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), ql = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ql = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Jl = { class: "mt-2" }, tc = { class: "text-sm text-gray-500" }, ec = {
  name: "VFModalMessage"
}, rc = /* @__PURE__ */ Object.assign(ec, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = P("emitter"), { t: s } = P("i18n");
    return (o, n) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: n[0] || (n[0] = (a) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: X(() => {
        var a, d;
        return [
          h("div", Gl, [
            Xl,
            h("div", ql, [
              h("h3", Ql, E(((a = r.selection) == null ? void 0 : a.title) ?? "Title"), 1),
              h("div", Jl, [
                h("p", tc, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), sc = { class: "sm:flex custom-new-folder-popup" }, oc = { class: "custom-file-picker-title" }, ic = { class: "file-picker-title-img" }, nc = /* @__PURE__ */ h("svg", {
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
], -1), ac = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, lc = /* @__PURE__ */ h("hr", null, null, -1), cc = { class: "mt-3 text-center w-full p-4 h-full" }, uc = { class: "mt-2 create-folder-form" }, dc = { class: "text-sm text-gray-500" }, hc = ["onKeyup", "placeholder"], fc = {
  name: "VFModalNewFolder"
}, pc = /* @__PURE__ */ Object.assign(fc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: t.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", {
            label: n("%s is created.", a.value)
          });
        },
        onError: (l) => {
          d.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", sc, [
          h("div", oc, [
            h("div", ic, [
              nc,
              h("h3", ac, E(x(n)("New Folder")), 1)
            ]),
            lc
          ]),
          h("div", cc, [
            h("div", uc, [
              h("p", dc, E(x(n)("Create a new folder")), 1),
              Et(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Folder Name"),
                type: "text"
              }, null, 40, hc), [
                [ie, a.value]
              ]),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gc = { class: "sm:flex sm:items-start" }, mc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), vc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, bc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, yc = { class: "mt-2" }, Sc = { class: "text-sm text-gray-500" }, wc = ["onKeyup", "placeholder"], _c = {
  name: "VFModalNewFile"
}, xc = /* @__PURE__ */ Object.assign(_c, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: t.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("%s is created.", a.value) });
        },
        onError: (l) => {
          d.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", gc, [
          mc,
          h("div", vc, [
            h("h3", bc, E(x(n)("New File")), 1),
            h("div", yc, [
              h("p", Sc, E(x(n)("Create a new file")), 1),
              Et(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("File Name"),
                type: "text"
              }, null, 40, wc), [
                [ie, a.value]
              ]),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Bs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4wMSIgaGVpZ2h0PSIxMC4wMDkiIHZpZXdCb3g9IjAgMCAxMC4wMSAxMC4wMDkiPg0KDQo8cGF0aCBpZD0iUGF0aF8yMTQiIGRhdGEtbmFtZT0iUGF0aCAyMTQiIGQ9Ik0xMi4xNzQsMTFsMy41ODMtMy41NzVhLjgzNy44MzcsMCwxLDAtMS4xODMtMS4xODNMMTEsOS44MjQsNy40MjQsNi4yNDFBLjgzNy44MzcsMCwwLDAsNi4yNDEsNy40MjRMOS44MjQsMTEsNi4yNDEsMTQuNTc1YS44MzcuODM3LDAsMSwwLDEuMTgzLDEuMTgzTDExLDEyLjE3NWwzLjU3NSwzLjU4M2EuODM3LjgzNywwLDEsMCwxLjE4My0xLjE4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5NCAtNS45OTYpIiBmaWxsPSIjODA4ZDkzIi8+DQoNCjwvc3ZnPg==", Vs = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", Dc = { class: "flex" }, kc = ["aria-label"], Mc = { class: "ml-auto mb-2" }, Cc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Ic = { key: 1 }, Ec = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, o = A(""), n = A(""), a = A(null), d = A(!1), { apiUrl: m } = At(), l = A(""), v = A(!1), { t: p } = P("i18n");
    wt(() => {
      Oe(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, t("load");
      });
    });
    const b = () => {
      d.value = !d.value, n.value = o.value, d.value == !0 && Re(() => {
        a.value.focus();
      });
    }, S = P("postData"), k = () => {
      l.value = "", v.value = !1, Oe(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: n.value
        }),
        json: !1
      }).then((M) => {
        l.value = p("Updated."), o.value = M, t("load"), d.value = !d.value;
      }).catch((M) => {
        l.value = p(M.message), v.value = !0;
      });
    };
    return (M, j) => (w(), I(nt, null, [
      h("div", Dc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, kc),
        h("div", Mc, [
          d.value ? (w(), I("button", {
            key: 0,
            onClick: k,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(p)("Save")), 1)) : F("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: j[0] || (j[0] = (L) => b())
          }, E(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (w(), I("div", Ic, [
          Et(h("textarea", {
            ref_key: "editInput",
            ref: a,
            "onUpdate:modelValue": j[1] || (j[1] = (L) => n.value = L),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ie, n.value]
          ])
        ])) : (w(), I("pre", Cc, E(o.value), 1)),
        l.value.length ? (w(), q(Nt, {
          key: 2,
          onHidden: j[2] || (j[2] = (L) => l.value = ""),
          error: v.value
        }, {
          default: X(() => [
            tt(E(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : F("", !0)
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
function Zr(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Hs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zr(Object(s), !0).forEach(function(o) {
      Ac(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Zr(Object(s)).forEach(function(o) {
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
function Tc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Lc(r, t, s) {
  return t && Yr(r.prototype, t), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ac(r, t, s) {
  return t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function Us(r) {
  return $c(r) || Nc(r) || Oc(r) || jc();
}
function $c(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Nc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Oc(r, t) {
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
function jc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ze = typeof window < "u" && typeof window.document < "u", Lt = Ze ? window : {}, Dr = Ze && Lt.document.documentElement ? "ontouchstart" in Lt.document.documentElement : !1, kr = Ze ? "PointerEvent" in Lt : !1, Q = "cropper", Mr = "all", Zs = "crop", Ys = "move", Ws = "zoom", Zt = "e", Yt = "w", Qt = "s", Pt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", or = "".concat(Q, "-crop"), Wr = "".concat(Q, "-disabled"), dt = "".concat(Q, "-hidden"), Fr = "".concat(Q, "-hide"), Pc = "".concat(Q, "-invisible"), Pe = "".concat(Q, "-modal"), ir = "".concat(Q, "-move"), be = "".concat(Q, "Action"), Le = "".concat(Q, "Preview"), Cr = "crop", Fs = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Kr = "dblclick", zc = Dr ? "touchstart" : "mousedown", Rc = Dr ? "touchmove" : "mousemove", Bc = Dr ? "touchend touchcancel" : "mouseup", Gr = kr ? "pointerdown" : zc, Xr = kr ? "pointermove" : Rc, qr = kr ? "pointerup pointercancel" : Bc, Qr = "ready", Jr = "resize", ts = "wheel", ur = "zoom", es = "image/jpeg", Vc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Hc = /^data:/, Uc = /^data:image\/jpeg;base64,/, Zc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
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
  minContainerWidth: Gs,
  minContainerHeight: Xs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Yc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Wc = Number.isNaN || Lt.isNaN;
function Z(r) {
  return typeof r == "number" && !Wc(r);
}
var ss = function(t) {
  return t > 0 && t < 1 / 0;
};
function Ge(r) {
  return typeof r > "u";
}
function Kt(r) {
  return rr(r) === "object" && r !== null;
}
var Fc = Object.prototype.hasOwnProperty;
function Jt(r) {
  if (!Kt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && Fc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ut(r) {
  return typeof r == "function";
}
var Kc = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : Kc.call(r);
}
function st(r, t) {
  return r && ut(t) && (Array.isArray(r) || Z(r.length) ? qs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Kt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var J = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++)
    o[n - 1] = arguments[n];
  return Kt(t) && o.length > 0 && o.forEach(function(a) {
    Kt(a) && Object.keys(a).forEach(function(d) {
      t[d] = a[d];
    });
  }), t;
}, Gc = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Gc.test(r) ? Math.round(r * t) / t : r;
}
var Xc = /^width|height|left|top|marginLeft|marginTop$/;
function zt(r, t) {
  var s = r.style;
  st(t, function(o, n) {
    Xc.test(n) && Z(o) && (o = "".concat(o, "px")), s[n] = o;
  });
}
function qc(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function lt(r, t) {
  if (t) {
    if (Z(r.length)) {
      st(r, function(o) {
        lt(o, t);
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
    s ? lt(r, t) : Tt(r, t);
  }
}
var Qc = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(Qc, "$1-$2").toLowerCase();
}
function dr(r, t) {
  return Kt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Ir(t)));
}
function ye(r, t, s) {
  Kt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Ir(t)), s);
}
function Jc(r, t) {
  if (Kt(r[t]))
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
var Qs = /\s\s*/, Js = function() {
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
      set: function(a) {
        t = a;
      }
    });
    Lt.addEventListener("test", s, o), Lt.removeEventListener("test", s, o);
  }
  return r;
}();
function kt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  t.trim().split(Qs).forEach(function(a) {
    if (!Js) {
      var d = r.listeners;
      d && d[a] && d[a][s] && (n = d[a][s], delete d[a][s], Object.keys(d[a]).length === 0 && delete d[a], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(a, n, o);
  });
}
function St(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  t.trim().split(Qs).forEach(function(a) {
    if (o.once && !Js) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      n = function() {
        delete m[a][s], r.removeEventListener(a, n, o);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, m[a] || (m[a] = {}), m[a][s] && r.removeEventListener(a, m[a][s], o), m[a][s] = n, r.listeners = m;
    }
    r.addEventListener(a, n, o);
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
function to(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Xe = Lt.location, tu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var t = r.match(tu);
  return t !== null && (t[1] !== Xe.protocol || t[2] !== Xe.hostname || t[3] !== Xe.port);
}
function is(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function me(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, n = r.translateX, a = r.translateY, d = [];
  Z(n) && n !== 0 && d.push("translateX(".concat(n, "px)")), Z(a) && a !== 0 && d.push("translateY(".concat(a, "px)")), Z(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), Z(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Z(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function eu(r) {
  var t = Hs({}, r), s = 0;
  return st(r, function(o, n) {
    delete t[n], st(t, function(a) {
      var d = Math.abs(o.startX - a.startX), m = Math.abs(o.startY - a.startY), l = Math.abs(o.endX - a.endX), v = Math.abs(o.endY - a.endY), p = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, n = {
    endX: s,
    endY: o
  };
  return t ? n : Hs({
    startX: s,
    startY: o
  }, n);
}
function ru(r) {
  var t = 0, s = 0, o = 0;
  return st(r, function(n) {
    var a = n.startX, d = n.startY;
    t += a, s += d, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Rt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = ss(o), d = ss(s);
  if (a && d) {
    var m = s * t;
    n === "contain" && m > o || n === "cover" && m < o ? s = o / t : o = s * t;
  } else
    a ? s = o / t : d && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function su(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var n = o % 90 * Math.PI / 180, a = Math.sin(n), d = Math.cos(n), m = t * d + s * a, l = t * a + s * d;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function ou(r, t, s, o) {
  var n = t.aspectRatio, a = t.naturalWidth, d = t.naturalHeight, m = t.rotate, l = m === void 0 ? 0 : m, v = t.scaleX, p = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, k = s.aspectRatio, M = s.naturalWidth, j = s.naturalHeight, L = o.fillColor, H = L === void 0 ? "transparent" : L, O = o.imageSmoothingEnabled, T = O === void 0 ? !0 : O, R = o.imageSmoothingQuality, K = R === void 0 ? "low" : R, D = o.maxWidth, z = D === void 0 ? 1 / 0 : D, G = o.maxHeight, ot = G === void 0 ? 1 / 0 : G, rt = o.minWidth, ct = rt === void 0 ? 0 : rt, bt = o.minHeight, pt = bt === void 0 ? 0 : bt, gt = document.createElement("canvas"), $ = gt.getContext("2d"), B = Rt({
    aspectRatio: k,
    width: z,
    height: ot
  }), N = Rt({
    aspectRatio: k,
    width: ct,
    height: pt
  }, "cover"), et = Math.min(B.width, Math.max(N.width, M)), U = Math.min(B.height, Math.max(N.height, j)), _t = Rt({
    aspectRatio: n,
    width: z,
    height: ot
  }), yt = Rt({
    aspectRatio: n,
    width: ct,
    height: pt
  }, "cover"), xe = Math.min(_t.width, Math.max(yt.width, a)), De = Math.min(_t.height, Math.max(yt.height, d)), Ye = [-xe / 2, -De / 2, xe, De];
  return gt.width = ee(et), gt.height = ee(U), $.fillStyle = H, $.fillRect(0, 0, et, U), $.save(), $.translate(et / 2, U / 2), $.rotate(l * Math.PI / 180), $.scale(p, S), $.imageSmoothingEnabled = T, $.imageSmoothingQuality = K, $.drawImage.apply($, [r].concat(Us(Ye.map(function(ke) {
    return Math.floor(ee(ke));
  })))), $.restore(), gt;
}
var eo = String.fromCharCode;
function iu(r, t, s) {
  var o = "";
  s += t;
  for (var n = t; n < s; n += 1)
    o += eo(r.getUint8(n));
  return o;
}
var nu = /^data:.*,/;
function au(r) {
  var t = r.replace(nu, ""), s = atob(t), o = new ArrayBuffer(s.length), n = new Uint8Array(o);
  return st(n, function(a, d) {
    n[d] = s.charCodeAt(d);
  }), o;
}
function lu(r, t) {
  for (var s = [], o = 8192, n = new Uint8Array(r); n.length > 0; )
    s.push(eo.apply(null, qs(n.subarray(0, o)))), n = n.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function cu(r) {
  var t = new DataView(r), s;
  try {
    var o, n, a;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, m = 2; m + 1 < d; ) {
        if (t.getUint8(m) === 255 && t.getUint8(m + 1) === 225) {
          n = m;
          break;
        }
        m += 1;
      }
    if (n) {
      var l = n + 4, v = n + 10;
      if (iu(t, l, 4) === "Exif") {
        var p = t.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && t.getUint16(v + 2, o) === 42) {
          var b = t.getUint32(v + 4, o);
          b >= 8 && (a = v + b);
        }
      }
    }
    if (a) {
      var S = t.getUint16(a, o), k, M;
      for (M = 0; M < S; M += 1)
        if (k = a + M * 12 + 2, t.getUint16(k, o) === 274) {
          k += 8, s = t.getUint16(k, o), t.setUint16(k, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function uu(r) {
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
var du = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, n = this.cropper, a = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    lt(n, dt), Tt(t, dt);
    var m = {
      width: Math.max(o.offsetWidth, a >= 0 ? a : Gs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = m, zt(n, {
      width: m.width,
      height: m.height
    }), lt(t, dt), Tt(n, dt);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, n = Math.abs(s.rotate) % 180 === 90, a = n ? s.naturalHeight : s.naturalWidth, d = n ? s.naturalWidth : s.naturalHeight, m = a / d, l = t.width, v = t.height;
    t.height * m > t.width ? o === 3 ? l = t.height * m : v = t.width / m : o === 3 ? v = t.width / m : l = t.height * m;
    var p = {
      aspectRatio: m,
      naturalWidth: a,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (t.width - p.width) / 2, p.top = (t.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = J({}, p);
  },
  limitCanvas: function(t, s) {
    var o = this.options, n = this.containerData, a = this.canvasData, d = this.cropBoxData, m = o.viewMode, l = a.aspectRatio, v = this.cropped && d;
    if (t) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (p = Math.max(p, n.width), b = Math.max(b, n.height), m === 3 && (b * l > p ? p = b * l : b = p / l)) : m > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * l > p ? p = b * l : b = p / l));
      var S = Rt({
        aspectRatio: l,
        width: p,
        height: b
      });
      p = S.width, b = S.height, a.minWidth = p, a.minHeight = b, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var k = n.width - a.width, M = n.height - a.height;
        a.minLeft = Math.min(0, k), a.minTop = Math.min(0, M), a.maxLeft = Math.max(0, k), a.maxTop = Math.max(0, M), v && this.limited && (a.minLeft = Math.min(d.left, d.left + (d.width - a.width)), a.minTop = Math.min(d.top, d.top + (d.height - a.height)), a.maxLeft = d.left, a.maxTop = d.top, m === 2 && (a.width >= n.width && (a.minLeft = Math.min(0, k), a.maxLeft = Math.max(0, k)), a.height >= n.height && (a.minTop = Math.min(0, M), a.maxTop = Math.max(0, M))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = n.width, a.maxTop = n.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, n = this.imageData;
    if (s) {
      var a = su({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), d = a.width, m = a.height, l = o.width * (d / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, zt(this.canvas, J({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, n = o.naturalWidth * (s.width / s.naturalWidth), a = o.naturalHeight * (s.height / s.naturalHeight);
    J(o, {
      width: n,
      height: a,
      left: (s.width - n) / 2,
      top: (s.height - a) / 2
    }), zt(this.image, J({
      width: o.width,
      height: o.height
    }, me(J({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, n = Number(t.autoCropArea) || 0.8, a = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? a.height = a.width / o : a.width = a.height * o), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * n), a.height = Math.max(a.minHeight, a.height * n), a.left = s.left + (s.width - a.width) / 2, a.top = s.top + (s.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = J({}, a);
  },
  limitCropBox: function(t, s) {
    var o = this.options, n = this.containerData, a = this.canvasData, d = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (t) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(n.width, a.width, a.width + a.left, n.width - a.left) : n.width, S = m ? Math.min(n.height, a.height, a.height + a.top, n.height - a.top) : n.height;
      v = Math.min(v, n.width), p = Math.min(p, n.height), l && (v && p ? p * l > v ? p = v / l : v = p * l : v ? p = v / l : p && (v = p * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, a.left), d.minTop = Math.max(0, a.top), d.maxLeft = Math.min(n.width, a.left + a.width) - d.width, d.maxTop = Math.min(n.height, a.top + a.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = n.width - d.width, d.maxTop = n.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && ye(this.face, be, o.width >= s.width && o.height >= s.height ? Ys : Mr), zt(this.cropBox, J({
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
}, hu = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, n = s ? this.crossOriginUrl : this.url, a = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = n, d.alt = a, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = t.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, st(m, function(l) {
        var v = document.createElement("img");
        ye(l, Le, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = n, v.alt = a, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var s = dr(t, Le);
      zt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, Jc(t, Le);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, n = o.width, a = o.height, d = t.width, m = t.height, l = o.left - s.left - t.left, v = o.top - s.top - t.top;
    !this.cropped || this.disabled || (zt(this.viewBoxImage, J({
      width: d,
      height: m
    }, me(J({
      translateX: -l,
      translateY: -v
    }, t)))), st(this.previews, function(p) {
      var b = dr(p, Le), S = b.width, k = b.height, M = S, j = k, L = 1;
      n && (L = S / n, j = a * L), a && j > k && (L = k / a, M = n * L, j = k), zt(p, {
        width: M,
        height: j
      }), zt(p.getElementsByTagName("img")[0], J({
        width: d * L,
        height: m * L
      }, me(J({
        translateX: -l * L,
        translateY: -v * L
      }, t))));
    }));
  }
}, fu = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && St(t, cr, s.cropstart), ut(s.cropmove) && St(t, lr, s.cropmove), ut(s.cropend) && St(t, ar, s.cropend), ut(s.crop) && St(t, nr, s.crop), ut(s.zoom) && St(t, ur, s.zoom), St(o, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && St(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && St(o, Kr, this.onDblclick = this.dblclick.bind(this)), St(t.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), St(t.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && St(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && kt(t, cr, s.cropstart), ut(s.cropmove) && kt(t, lr, s.cropmove), ut(s.cropend) && kt(t, ar, s.cropend), ut(s.crop) && kt(t, nr, s.crop), ut(s.zoom) && kt(t, ur, s.zoom), kt(o, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && kt(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && kt(o, Kr, this.onDblclick), kt(t.ownerDocument, Xr, this.onCropMove), kt(t.ownerDocument, qr, this.onCropEnd), s.responsive && kt(window, Jr, this.onResize);
  }
}, pu = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, n = s.offsetWidth / o.width, a = s.offsetHeight / o.height, d = Math.abs(n - 1) > Math.abs(a - 1) ? n : a;
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
    this.disabled || this.options.dragMode === Ks || this.setDragMode(qc(this.dragBox, or) ? Fs : Cr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (Z(s) && s !== 1 || Z(o) && o !== 0 || t.ctrlKey))) {
      var n = this.options, a = this.pointers, d;
      t.changedTouches ? st(t.changedTouches, function(m) {
        a[m.identifier] = Ae(m);
      }) : a[t.pointerId || 0] = Ae(t), Object.keys(a).length > 1 && n.zoomable && n.zoomOnTouch ? d = Ws : d = dr(t.target, be), Vc.test(d) && re(this.element, cr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Zs && (this.cropping = !0, lt(this.dragBox, Pe)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(n) {
        J(o[n.identifier] || {}, Ae(n, !0));
      }) : J(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(n) {
        delete o[n.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, Pe, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, gu = {
  change: function(t) {
    var s = this.options, o = this.canvasData, n = this.containerData, a = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = a.left, p = a.top, b = a.width, S = a.height, k = v + b, M = p + S, j = 0, L = 0, H = n.width, O = n.height, T = !0, R;
    !l && t.shiftKey && (l = b && S ? b / S : 1), this.limited && (j = a.minLeft, L = a.minTop, H = j + Math.min(n.width, o.width, o.left + o.width), O = L + Math.min(n.height, o.height, o.top + o.height));
    var K = d[Object.keys(d)[0]], D = {
      x: K.endX - K.startX,
      y: K.endY - K.startY
    }, z = function(ot) {
      switch (ot) {
        case Zt:
          k + D.x > H && (D.x = H - k);
          break;
        case Yt:
          v + D.x < j && (D.x = j - v);
          break;
        case Pt:
          p + D.y < L && (D.y = L - p);
          break;
        case Qt:
          M + D.y > O && (D.y = O - M);
          break;
      }
    };
    switch (m) {
      case Mr:
        v += D.x, p += D.y;
        break;
      case Zt:
        if (D.x >= 0 && (k >= H || l && (p <= L || M >= O))) {
          T = !1;
          break;
        }
        z(Zt), b += D.x, b < 0 && (m = Yt, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case Pt:
        if (D.y <= 0 && (p <= L || l && (v <= j || k >= H))) {
          T = !1;
          break;
        }
        z(Pt), S -= D.y, p += D.y, S < 0 && (m = Qt, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case Yt:
        if (D.x <= 0 && (v <= j || l && (p <= L || M >= O))) {
          T = !1;
          break;
        }
        z(Yt), b -= D.x, v += D.x, b < 0 && (m = Zt, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case Qt:
        if (D.y >= 0 && (M >= O || l && (v <= j || k >= H))) {
          T = !1;
          break;
        }
        z(Qt), S += D.y, S < 0 && (m = Pt, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case he:
        if (l) {
          if (D.y <= 0 && (p <= L || k >= H)) {
            T = !1;
            break;
          }
          z(Pt), S -= D.y, p += D.y, b = S * l;
        } else
          z(Pt), z(Zt), D.x >= 0 ? k < H ? b += D.x : D.y <= 0 && p <= L && (T = !1) : b += D.x, D.y <= 0 ? p > L && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = ge, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = fe, b = -b, v -= b) : S < 0 && (m = pe, S = -S, p -= S);
        break;
      case fe:
        if (l) {
          if (D.y <= 0 && (p <= L || v <= j)) {
            T = !1;
            break;
          }
          z(Pt), S -= D.y, p += D.y, b = S * l, v += a.width - b;
        } else
          z(Pt), z(Yt), D.x <= 0 ? v > j ? (b -= D.x, v += D.x) : D.y <= 0 && p <= L && (T = !1) : (b -= D.x, v += D.x), D.y <= 0 ? p > L && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = pe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = he, b = -b, v -= b) : S < 0 && (m = ge, S = -S, p -= S);
        break;
      case ge:
        if (l) {
          if (D.x <= 0 && (v <= j || M >= O)) {
            T = !1;
            break;
          }
          z(Yt), b -= D.x, v += D.x, S = b / l;
        } else
          z(Qt), z(Yt), D.x <= 0 ? v > j ? (b -= D.x, v += D.x) : D.y >= 0 && M >= O && (T = !1) : (b -= D.x, v += D.x), D.y >= 0 ? M < O && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = he, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = pe, b = -b, v -= b) : S < 0 && (m = fe, S = -S, p -= S);
        break;
      case pe:
        if (l) {
          if (D.x >= 0 && (k >= H || M >= O)) {
            T = !1;
            break;
          }
          z(Zt), b += D.x, S = b / l;
        } else
          z(Qt), z(Zt), D.x >= 0 ? k < H ? b += D.x : D.y >= 0 && M >= O && (T = !1) : b += D.x, D.y >= 0 ? M < O && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = fe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = ge, b = -b, v -= b) : S < 0 && (m = he, S = -S, p -= S);
        break;
      case Ys:
        this.move(D.x, D.y), T = !1;
        break;
      case Ws:
        this.zoom(eu(d), t), T = !1;
        break;
      case Zs:
        if (!D.x || !D.y) {
          T = !1;
          break;
        }
        R = to(this.cropper), v = K.startX - R.left, p = K.startY - R.top, b = a.minWidth, S = a.minHeight, D.x > 0 ? m = D.y > 0 ? pe : he : D.x < 0 && (v -= b, m = D.y > 0 ? ge : fe), D.y < 0 && (p -= S), this.cropped || (Tt(this.cropBox, dt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    T && (a.width = b, a.height = S, a.left = v, a.top = p, this.action = m, this.renderCropBox()), st(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, mu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && lt(this.dragBox, Pe), Tt(this.cropBox, dt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = J({}, this.initialImageData), this.canvasData = J({}, this.initialCanvasData), this.cropBoxData = J({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (J(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Tt(this.dragBox, Pe), lt(this.cropBox, dt)), this;
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
    return this.ready && this.disabled && (this.disabled = !1, Tt(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, lt(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[Q] ? (t[Q] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, n = o.left, a = o.top;
    return this.moveTo(Ge(t) ? t : n + Number(t), Ge(s) ? s : a + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, n = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (Z(t) && (o.left = t, n = !0), Z(s) && (o.top = s, n = !0), n && this.renderCanvas(!0)), this;
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
    var n = this.options, a = this.canvasData, d = a.width, m = a.height, l = a.naturalWidth, v = a.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && n.zoomable) {
      var p = l * t, b = v * t;
      if (re(this.element, ur, {
        ratio: t,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, k = to(this.cropper), M = S && Object.keys(S).length ? ru(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        a.left -= (p - d) * ((M.pageX - k.left - a.left) / d), a.top -= (b - m) * ((M.pageY - k.top - a.top) / m);
      } else
        Jt(s) && Z(s.x) && Z(s.y) ? (a.left -= (p - d) * ((s.x - a.left) / d), a.top -= (b - m) * ((s.y - a.top) / m)) : (a.left -= (p - d) / 2, a.top -= (b - m) / 2);
      a.width = p, a.height = b, this.renderCanvas(!0);
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
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, n = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (Z(t) && (o.scaleX = t, n = !0), Z(s) && (o.scaleY = s, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, n = this.canvasData, a = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: a.left - n.left,
        y: a.top - n.top,
        width: a.width,
        height: a.height
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
    var s = this.options, o = this.imageData, n = this.canvasData, a = {};
    if (this.ready && !this.disabled && Jt(t)) {
      var d = !1;
      s.rotatable && Z(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, d = !0), s.scalable && (Z(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, d = !0), Z(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = o.width / o.naturalWidth;
      Z(t.x) && (a.left = t.x * m + n.left), Z(t.y) && (a.top = t.y * m + n.top), Z(t.width) && (a.width = t.width * m), Z(t.height) && (a.height = t.height * m), this.setCropBoxData(a);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? J({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? J({}, this.imageData) : {};
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
    return this.ready && !this.disabled && Jt(t) && (Z(t.left) && (s.left = t.left), Z(t.top) && (s.top = t.top), Z(t.width) ? (s.width = t.width, s.height = t.width / o) : Z(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
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
    var s = this.cropBoxData, o = this.options.aspectRatio, n, a;
    return this.ready && this.cropped && !this.disabled && Jt(t) && (Z(t.left) && (s.left = t.left), Z(t.top) && (s.top = t.top), Z(t.width) && t.width !== s.width && (n = !0, s.width = t.width), Z(t.height) && t.height !== s.height && (a = !0, s.height = t.height), o && (n ? s.height = s.width / o : a && (s.width = s.height * o)), this.renderCropBox()), this;
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
    var s = this.canvasData, o = ou(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var n = this.getData(), a = n.x, d = n.y, m = n.width, l = n.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (a *= v, d *= v, m *= v, l *= v);
    var p = m / l, b = Rt({
      aspectRatio: p,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Rt({
      aspectRatio: p,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), k = Rt({
      aspectRatio: p,
      width: t.width || (v !== 1 ? o.width : m),
      height: t.height || (v !== 1 ? o.height : l)
    }), M = k.width, j = k.height;
    M = Math.min(b.width, Math.max(S.width, M)), j = Math.min(b.height, Math.max(S.height, j));
    var L = document.createElement("canvas"), H = L.getContext("2d");
    L.width = ee(M), L.height = ee(j), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, M, j);
    var O = t.imageSmoothingEnabled, T = O === void 0 ? !0 : O, R = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = T, R && (H.imageSmoothingQuality = R);
    var K = o.width, D = o.height, z = a, G = d, ot, rt, ct, bt, pt, gt;
    z <= -m || z > K ? (z = 0, ot = 0, ct = 0, pt = 0) : z <= 0 ? (ct = -z, z = 0, ot = Math.min(K, m + z), pt = ot) : z <= K && (ct = 0, ot = Math.min(m, K - z), pt = ot), ot <= 0 || G <= -l || G > D ? (G = 0, rt = 0, bt = 0, gt = 0) : G <= 0 ? (bt = -G, G = 0, rt = Math.min(D, l + G), gt = rt) : G <= D && (bt = 0, rt = Math.min(l, D - G), gt = rt);
    var $ = [z, G, ot, rt];
    if (pt > 0 && gt > 0) {
      var B = M / m;
      $.push(ct * B, bt * B, pt * B, gt * B);
    }
    return H.drawImage.apply(H, [o].concat(Us($.map(function(N) {
      return Math.floor(ee(N));
    })))), L;
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
    var s = this.options, o = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var a = t === Cr, d = s.movable && t === Fs;
      t = a || d ? t : Ks, s.dragMode = t, ye(o, be, t), te(o, or, a), te(o, ir, d), s.cropBoxMovable || (ye(n, be, t), te(n, or, a), te(n, ir, d));
    }
    return this;
  }
}, vu = Lt.Cropper, ro = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Tc(this, r), !t || !Zc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = J({}, rs, Jt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Lc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), n;
      if (!s[Q]) {
        if (s[Q] = this, o === "img") {
          if (this.isImg = !0, n = s.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (n = s.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var n = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Hc.test(s)) {
          Uc.test(s) ? this.read(au(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== es && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, a.checkCrossOrigin && os(s) && n.crossOrigin && (s = is(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = n.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, n = this.imageData, a = cu(s), d = 0, m = 1, l = 1;
      if (a > 1) {
        this.url = lu(s, es);
        var v = uu(a);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (n.rotate = d), o.scalable && (n.scaleX = m, n.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, n = s.crossOrigin, a = o;
      this.options.checkCrossOrigin && os(o) && (n || (n = "anonymous"), a = is(o)), this.crossOrigin = n, this.crossOriginUrl = a;
      var d = document.createElement("img");
      n && (d.crossOrigin = n), d.src = a || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), lt(d, Fr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var n = Lt.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Lt.navigator.userAgent), a = function(v, p) {
        J(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = J({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !n) {
        a(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        a(d.width, d.height), n || m.removeChild(d);
      }, d.src = o.src, n || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
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
        var s = this.element, o = this.options, n = this.image, a = s.parentNode, d = document.createElement("div");
        d.innerHTML = Yc;
        var m = d.querySelector(".".concat(Q, "-container")), l = m.querySelector(".".concat(Q, "-canvas")), v = m.querySelector(".".concat(Q, "-drag-box")), p = m.querySelector(".".concat(Q, "-crop-box")), b = p.querySelector(".".concat(Q, "-face"));
        this.container = a, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = p, this.viewBox = m.querySelector(".".concat(Q, "-view-box")), this.face = b, l.appendChild(n), lt(s, dt), a.insertBefore(m, s.nextSibling), Tt(n, Fr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, lt(p, dt), o.guides || lt(p.getElementsByClassName("".concat(Q, "-dashed")), dt), o.center || lt(p.getElementsByClassName("".concat(Q, "-center")), dt), o.background && lt(m, "".concat(Q, "-bg")), o.highlight || lt(b, Pc), o.cropBoxMovable && (lt(b, ir), ye(b, be, Mr)), o.cropBoxResizable || (lt(p.getElementsByClassName("".concat(Q, "-line")), dt), lt(p.getElementsByClassName("".concat(Q, "-point")), dt)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ut(o.ready) && St(s, Qr, o.ready, {
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
      return window.Cropper = vu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      J(rs, Jt(s) && s);
    }
  }]), r;
}();
J(ro.prototype, du, hu, fu, pu, gu, mu);
const bu = { class: "flex" }, yu = ["aria-label"], Su = { class: "ml-auto mb-2" }, wu = { class: "w-full flex justify-center" }, _u = ["src"], xu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: n } = At(), a = A(null), d = A(null), m = A(!1), l = A(""), v = A(!1), p = () => {
      m.value = !m.value, m.value ? d.value = new ro(a.value, {
        crop(k) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((k) => {
        l.value = "", v.value = !1, Oe(n.value, {
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
          l.value = o("Updated."), a.value.src = tr(
            s.selection.adapter,
            s.selection.item.path
          ), p(), t("load");
        }).catch((M) => {
          l.value = o(M.message), v.value = !0;
        });
      });
    };
    return wt(() => {
      t("load");
    }), (k, M) => (w(), I(nt, null, [
      h("div", bu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, yu),
        h("div", Su, [
          m.value ? (w(), I("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(o)("Crop")), 1)) : F("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: M[0] || (M[0] = (j) => p())
          }, E(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      h("div", wu, [
        h("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, _u)
      ]),
      l.value.length ? (w(), q(Nt, {
        key: 0,
        onHidden: M[1] || (M[1] = (j) => l.value = ""),
        error: v.value
      }, {
        default: X(() => [
          tt(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : F("", !0)
    ], 64));
  }
}, Du = { class: "flex" }, ku = ["aria-label"], Mu = /* @__PURE__ */ h("div", null, null, -1), Cu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return wt(() => {
      t("load");
    }), (s, o) => (w(), I(nt, null, [
      h("div", Du, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, ku)
      ]),
      Mu
    ], 64));
  }
}, Iu = ["aria-label"], Eu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Tu = ["src"], Lu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return wt(() => {
      t("load");
    }), (a, d) => (w(), I(nt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Iu),
      h("div", null, [
        h("video", Eu, [
          h("source", {
            src: n(),
            type: "video/mp4"
          }, null, 8, Tu),
          tt(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Au = ["aria-label"], $u = {
  class: "w-full",
  controls: ""
}, Nu = ["src"], Ou = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return wt(() => {
      t("load");
    }), (a, d) => (w(), I(nt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Au),
      h("div", null, [
        h("audio", $u, [
          h("source", {
            src: n(),
            type: "audio/mpeg"
          }, null, 8, Nu),
          tt(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, ju = ["aria-label"], Pu = ["data"], zu = ["src"], Ru = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Gt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return wt(() => {
      t("load");
    }), (a, d) => (w(), I(nt, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, ju),
      h("div", null, [
        h("object", {
          class: "h-[60vh]",
          data: n(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          h("iframe", {
            class: "border-0",
            src: n(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, zu)
        ], 8, Pu)
      ])
    ], 64));
  }
}, Bu = { class: "sm:flex custom-new-folder-popup edit-preview-container" }, Vu = { class: "custom-file-picker-title" }, Hu = { class: "file-picker-title-img" }, Uu = /* @__PURE__ */ h("svg", {
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
], -1), Zu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yu = /* @__PURE__ */ h("hr", null, null, -1), Wu = { class: "mt-3 text-center w-full p-4 h-full create-folder-form edit-preview" }, Fu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Ku = {
  key: 0,
  class: "flex leading-5"
}, Gu = /* @__PURE__ */ h("svg", {
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
], -1), Xu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, qu = { class: "font-bold pl-2" }, Qu = { class: "font-bold pl-2" }, Ju = { class: "search-terms-div-preview bg-white dark:bg-gray-800" }, td = /* @__PURE__ */ h("div", null, [
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
    /* @__PURE__ */ tt(" Search Terms")
  ])
], -1), ed = /* @__PURE__ */ h("hr", null, null, -1), rd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), sd = { id: "tags-space" }, od = ["onClick"], id = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
      /* @__PURE__ */ tt(" File Details")
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
], -1), nd = { class: "bg-white custom-file-picker-action" }, ad = {
  name: "VFModalPreview"
}, ld = /* @__PURE__ */ Object.assign(ad, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: s } = At(), o = P("emitter"), { t: n } = P("i18n"), a = A(!1), d = (S) => a.value = S;
    let m = A([]);
    wt(() => {
      p();
    });
    const l = (S) => (t.selection.item.mime_type ?? "").startsWith(S), v = () => {
      const S = s.value + "?" + Gt({
        q: "download",
        adapter: t.selection.adapter,
        path: t.selection.item.path
      });
      o.emit("vf-download", S);
    };
    function p() {
      let S = document.querySelector("#search-terms-file-picker");
      S.addEventListener("keypress", (k) => {
        k.key === "Enter" && (m.value.push({
          tag_id: m.value.length + 1,
          tag_name: k.target.value
        }), S.value = "");
      });
    }
    function b(S) {
      const k = m.value.findIndex((M) => M.tag_id === S);
      m.value.splice(k, 1);
    }
    return (S, k) => (w(), q($t, null, {
      buttons: X(() => [
        h("div", Ju, [
          td,
          ed,
          rd,
          h("div", sd, [
            (w(!0), I(nt, null, vt(x(m), (M) => (w(), I("span", {
              key: M.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (j) => b(M.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, od),
              h("p", null, E(M.tag_name), 1)
            ]))), 128))
          ])
        ]),
        id,
        h("div", nd, [
          h("button", {
            type: "button",
            onClick: k[6] || (k[6] = (M) => x(o).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Close")), 1),
          h("button", {
            type: "button",
            onClick: k[7] || (k[7] = (M) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Download")), 1)
        ])
      ]),
      default: X(() => [
        h("div", Bu, [
          h("div", Vu, [
            h("div", Hu, [
              Uu,
              h("h3", Zu, E(x(n)("Edit")), 1)
            ]),
            Yu
          ]),
          h("div", Wu, [
            h("div", null, [
              l("text") ? (w(), q(Ec, {
                key: 0,
                selection: r.selection,
                onLoad: k[0] || (k[0] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), q(xu, {
                key: 1,
                selection: r.selection,
                onLoad: k[1] || (k[1] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), q(Lu, {
                key: 2,
                selection: r.selection,
                onLoad: k[2] || (k[2] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), q(Ou, {
                key: 3,
                selection: r.selection,
                onLoad: k[3] || (k[3] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), q(Ru, {
                key: 4,
                selection: r.selection,
                onLoad: k[4] || (k[4] = (M) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(Cu, {
                key: 5,
                selection: r.selection,
                onLoad: k[5] || (k[5] = (M) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Fu, [
              a.value == !1 ? (w(), I("div", Ku, [
                Gu,
                h("span", null, E(x(n)("Loading")), 1)
              ])) : F("", !0)
            ])
          ])
        ]),
        h("div", Xu, [
          h("div", null, [
            h("span", qu, E(x(n)("File Size")) + ": ", 1),
            tt(E(x(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Qu, E(x(n)("Last Modified")) + ": ", 1),
            tt(" " + E(x(us)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), cd = { class: "sm:flex custom-new-folder-popup" }, ud = { class: "custom-file-picker-title" }, dd = { class: "file-picker-title-img" }, hd = /* @__PURE__ */ h("svg", {
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
], -1), fd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, pd = /* @__PURE__ */ h("hr", null, null, -1), gd = { class: "mt-3 text-center w-full p-4 h-full" }, md = { class: "mt-2 create-folder-form" }, vd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, bd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, yd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Sd = [
  yd
], wd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _d = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), xd = [
  _d
], Dd = { class: "ml-1.5" }, kd = ["onKeyup"], Md = {
  name: "VFModalRename"
}, Cd = /* @__PURE__ */ Object.assign(Md, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = A(t.selection.items[0]), d = A(t.selection.items[0].basename), m = A(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", {
            label: n("%s is renamed.", d.value)
          });
        },
        onError: (v) => {
          m.value = n(v.message);
        }
      });
    };
    return (v, p) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", cd, [
          h("div", ud, [
            h("div", dd, [
              hd,
              h("h3", fd, E(x(n)("Rename")), 1)
            ]),
            pd
          ]),
          h("div", gd, [
            h("div", md, [
              h("p", vd, [
                a.value.type == "dir" ? (w(), I("svg", bd, Sd)) : (w(), I("svg", wd, xd)),
                h("span", Dd, E(a.value.basename), 1)
              ]),
              Et(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, kd), [
                [ie, d.value]
              ]),
              m.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(m.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Id = { class: "flex flex-col h-full items-center" }, Ed = { class: "custom-file-picker-title" }, Td = { class: "file-picker-title-img" }, Ld = /* @__PURE__ */ h("svg", {
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
}, Rd = { class: "search-terms-div bg-white dark:bg-gray-800" }, Bd = /* @__PURE__ */ h("div", null, [
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
    /* @__PURE__ */ tt(" Search Terms")
  ])
], -1), Vd = /* @__PURE__ */ h("hr", null, null, -1), Hd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), Ud = { id: "tags-space" }, Zd = ["onClick"], Yd = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
      /* @__PURE__ */ tt(" File Details")
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
], -1), Wd = { class: "bg-white custom-file-picker-action" }, Fd = ["disabled", "onClick"], Kd = {
  name: "VFModalUpload"
}, Gd = /* @__PURE__ */ Object.assign(Kd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { apiUrl: o } = At(), { t: n } = P("i18n"), a = P("maxFileSize"), d = A(null), m = A(null), l = A(null), v = A([]), p = A("");
    let b = A([]);
    const S = A(!0), k = () => {
      p.value = "", d.value.start();
    }, M = P("postData");
    wt(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: a,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Gt(
          Object.assign(M, {
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
          FilesAdded: function(H, O) {
            S.value = !1, de.each(O, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: de.formatSize(T.size),
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
                adapter: t.current.adapter,
                path: t.current.dirname
              }
            });
          },
          Error: function(H, O) {
            d.value.stop(), O.code == de.HTTP_ERROR ? p.value = n(JSON.parse(O.response).message) : O.code == de.FILE_SIZE_ERROR ? p.value = n(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [a]
            ) : p.value = n(O.message);
          }
        }
      }), d.value.init(), j();
    });
    function j() {
      let H = document.querySelector("#search-terms-file-picker");
      H.addEventListener("keypress", (O) => {
        O.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: O.target.value
        }), H.value = "");
      });
    }
    function L(H) {
      const O = b.value.findIndex((T) => T.tag_id === H);
      b.value.splice(O, 1);
    }
    return (H, O) => (w(), q($t, null, {
      buttons: X(() => [
        h("div", Rd, [
          Bd,
          Vd,
          Hd,
          h("div", Ud, [
            (w(!0), I(nt, null, vt(x(b), (T) => (w(), I("span", {
              key: T.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (R) => L(T.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, Zd),
              h("p", null, E(T.tag_name), 1)
            ]))), 128))
          ])
        ]),
        Yd,
        h("div", Wd, [
          h("button", {
            disabled: S.value,
            onClick: Wt(k, ["prevent"]),
            type: "button",
            class: ht([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, E(x(n)("Upload")), 11, Fd),
          h("button", {
            type: "button",
            onClick: O[1] || (O[1] = (T) => x(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Cancel")), 1)
        ])
      ]),
      default: X(() => [
        h("div", Id, [
          h("div", Ed, [
            h("div", Td, [
              Ld,
              h("h3", Ad, E(x(n)("Upload files")), 1)
            ]),
            $d
          ]),
          h("div", Nd, [
            h("div", Od, [
              h("div", jd, [
                (w(!0), I(nt, null, vt(v.value, (T) => (w(), I("div", null, [
                  h("div", {
                    id: T.id
                  }, [
                    tt(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    h("b", null, E(T.percent), 1)
                  ], 8, Pd)
                ]))), 256)),
                v.value.length ? F("", !0) : (w(), I("div", zd, E(x(n)("No files selected!")), 1))
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
                }, E(x(n)("Select Files")), 513)
              ], 512),
              p.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: O[0] || (O[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(p.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xd = { class: "sm:flex custom-new-folder-popup" }, qd = { class: "custom-file-picker-title" }, Qd = { class: "file-picker-title-img" }, Jd = /* @__PURE__ */ h("svg", {
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
], -1), th = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, eh = /* @__PURE__ */ h("hr", null, null, -1), rh = { class: "mt-3 text-center w-full p-4 h-full" }, sh = { class: "mt-2 create-folder-form" }, oh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ih = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, nh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ah = [
  nh
], lh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ch = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), uh = [
  ch
], dh = { class: "ml-1.5" }, hh = ["onKeyup", "placeholder"], fh = {
  name: "VFModalArchive"
}, ph = /* @__PURE__ */ Object.assign(fh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = A(""), d = A(""), m = A(t.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(
            m.value.map(({ path: v, type: p }) => ({ path: v, type: p }))
          ),
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = n(v.message);
        }
      });
    };
    return (v, p) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", Xd, [
          h("div", qd, [
            h("div", Qd, [
              Jd,
              h("h3", th, E(x(n)("Archive the files")), 1)
            ]),
            eh
          ]),
          h("div", rh, [
            h("div", sh, [
              (w(!0), I(nt, null, vt(m.value, (b) => (w(), I("p", oh, [
                b.type == "dir" ? (w(), I("svg", ih, ah)) : (w(), I("svg", lh, uh)),
                h("span", dh, E(b.basename), 1)
              ]))), 256)),
              Et(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => a.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, hh), [
                [ie, a.value]
              ]),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gh = { class: "sm:flex sm:items-start" }, mh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), vh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, bh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, yh = { class: "mt-2" }, Sh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, wh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _h = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), xh = [
  _h
], Dh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, kh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Mh = [
  kh
], Ch = { class: "ml-1.5" }, Ih = { class: "my-1 text-sm text-gray-500" }, Eh = {
  name: "VFModalUnarchive"
}, Th = /* @__PURE__ */ Object.assign(Eh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n");
    A("");
    const a = A(t.selection.items[0]), d = A(""), m = A([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("The file unarchived.") });
        },
        onError: (v) => {
          d.value = n(v.message);
        }
      });
    };
    return (v, p) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", gh, [
          mh,
          h("div", vh, [
            h("h3", bh, E(x(n)("Unarchive")), 1),
            h("div", yh, [
              (w(!0), I(nt, null, vt(m.value, (b) => (w(), I("p", Sh, [
                b.type == "dir" ? (w(), I("svg", wh, xh)) : (w(), I("svg", Dh, Mh)),
                h("span", Ch, E(b.basename), 1)
              ]))), 256)),
              h("p", Ih, E(x(n)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lh = { class: "sm:flex sm:items-start" }, Ah = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), $h = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Nh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Oh = { class: "mt-2" }, jh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ph = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, zh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Rh = [
  zh
], Bh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Hh = [
  Vh
], Uh = { class: "ml-1.5" }, Zh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Yh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Wh = /* @__PURE__ */ h("svg", {
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
], -1), Fh = { class: "ml-1.5 overflow-auto" }, Kh = {
  name: "VFModalMove"
}, Gh = /* @__PURE__ */ Object.assign(Kh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const n = P("adapter"), a = A(t.selection.items.from), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: t.current.dirname,
            to: t.selection.items.to.path,
            files: a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", t.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, v) => (w(), q($t, null, {
      buttons: X(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: X(() => [
        h("div", Lh, [
          Ah,
          h("div", $h, [
            h("h3", Nh, E(x(o)("Move files")), 1),
            h("div", Oh, [
              (w(!0), I(nt, null, vt(a.value, (p) => (w(), I("p", jh, [
                p.type == "dir" ? (w(), I("svg", Ph, Rh)) : (w(), I("svg", Bh, Hh)),
                h("span", Uh, E(p.path), 1)
              ]))), 256)),
              h("p", Zh, E(x(o)("Are you sure you want to move these files?")), 1),
              h("p", Yh, [
                Wh,
                h("span", Fh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Nt, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: X(() => [
                  tt(E(d.value), 1)
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: ph,
  ModalDelete: Kl,
  ModalMessage: rc,
  ModalMove: Gh,
  ModalNewFile: xc,
  ModalNewFolder: pc,
  ModalPreview: ld,
  ModalRename: Cd,
  ModalUnarchive: Th,
  ModalUpload: Gd
}, Symbol.toStringTag, { value: "Module" })), qe = {
  VueFinder: yl,
  ...Xh
};
const Jh = {
  install(r) {
    for (const t in qe)
      if (qe.hasOwnProperty(t)) {
        const s = qe[t];
        r.component(s.name, s);
      }
  }
};
export {
  Jh as default
};
