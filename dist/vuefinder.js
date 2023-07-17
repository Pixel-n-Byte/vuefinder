import { ref as A, watch as zt, inject as z, openBlock as w, createElementBlock as I, createElementVNode as h, unref as x, normalizeClass as he, createCommentVNode as K, createTextVNode as te, toDisplayString as E, createVNode as Me, TransitionGroup as Oo, withCtx as G, Fragment as ne, renderList as ve, reactive as $t, onMounted as we, onUpdated as jo, withDirectives as Ee, vShow as Et, withModifiers as We, nextTick as Rt, customRef as Po, withKeys as ot, isRef as zo, vModelText as it, normalizeStyle as as, provide as Ue, createBlock as q, resolveDynamicComponent as Ro, renderSlot as Qt } from "vue";
import dt from "plupload";
var ns;
const Nt = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), Ot = (r, { method: e = "get", params: s = {}, json: o = !0, signal: a = null }) => {
  const n = { method: e };
  if (n.signal = a, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    n.headers = {}, Nt && (n.headers["X-CSRF-Token"] = Nt);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
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
  const s = A(JSON.parse(e));
  zt(s, o);
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
const zr = A("");
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
], Go = ["aria-label"], Xo = /* @__PURE__ */ h("a", {
  type: "button",
  class: "custom-upload-button"
}, "Upload", -1), qo = [
  Xo
], Qo = ["aria-label"], Jo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), ei = [
  Jo
], ti = {
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
    const e = z("emitter"), { getStore: s, setStore: o } = z("storage"), { t: a } = z("i18n"), n = A(s("viewport", "grid")), d = A([]), m = A(s("full-screen", !1)), l = A("");
    e.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = z("loadingState"), p = () => v.value, b = () => {
      m.value = !m.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), e.on("vf-view-toggle", (S) => {
      o("viewport", S), n.value = S;
    }), (S, M) => (w(), I("div", Vo, [
      l.value.length ? (w(), I("div", ti, [
        h("div", ri, [
          te(E(x(a)("Search results for")) + " ", 1),
          h("span", si, E(l.value), 1)
        ]),
        p() ? (w(), I("svg", oi, ai)) : K("", !0)
      ])) : (w(), I("div", Ho, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = (k) => x(e).emit("vf-modal-show", {
            type: "new-folder",
            items: d.value
          }))
        }, Yo, 8, Uo),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = (k) => !d.value.length || x(e).emit("delete-button"))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([
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
          "aria-label": x(a)("Upload"),
          "data-microtip-position": "bottom",
          onClick: M[2] || (M[2] = (k) => x(e).emit("custom-modal-show", {
            type: "upload",
            items: d.value
          }))
        }, qo, 8, Go),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (w(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = (k) => !d.value.length || x(e).emit("vf-modal-show", {
            type: "unarchive",
            items: d.value
          }))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, ei, 2))
        ], 8, Qo)) : K("", !0)
      ])),
      h("div", li, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), I("svg", {
            onClick: M[4] || (M[4] = (k) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, di))
        ], 8, ci),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Toggle Full Screen"),
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
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[5] || (M[5] = (k) => l.value.length || x(e).emit("vf-view-toggle", n.value == "list" ? "grid" : "list"))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([
              l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            n.value == "grid" ? (w(), I("path", vi)) : K("", !0),
            n.value == "list" ? (w(), I("path", bi)) : K("", !0)
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
(function(r, e) {
  (function(s, o) {
    r.exports = o();
  })(wi, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var g, i, f, y, _ = [], C = !0, H = !1;
        try {
          if (f = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (g = f.call(t)).done) && (_.push(g.value), _.length !== u); C = !0)
              ;
        } catch (W) {
          H = !0, i = W;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (H)
              throw i;
          }
        }
        return _;
      }
    }
    function o(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(i) {
          return Object.getOwnPropertyDescriptor(c, i).enumerable;
        })), t.push.apply(t, g);
      }
      return t;
    }
    function a(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(t), !0).forEach(function(g) {
          l(c, g, t[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(t, g));
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
        var g = u[t];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, B(g.key), g);
      }
    }
    function m(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = B(u), u in c ? Object.defineProperty(c, u, {
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
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
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
    function M(c, u, t) {
      return S() ? M = Reflect.construct.bind() : M = function(i, f, y) {
        var _ = [null];
        _.push.apply(_, f);
        var C = Function.bind.apply(i, _), H = new C();
        return y && b(H, y.prototype), H;
      }, M.apply(null, arguments);
    }
    function k(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function P(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return P = function(g) {
        if (g === null || !k(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, i);
        }
        function i() {
          return M(g, arguments, p(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(i, g);
      }, P(c);
    }
    function L(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function V(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return L(c);
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
        return V(this, i);
      };
    }
    function T(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function O() {
      return typeof Reflect < "u" && Reflect.get ? O = Reflect.get.bind() : O = function(u, t, g) {
        var i = T(u, t);
        if (i) {
          var f = Object.getOwnPropertyDescriptor(i, t);
          return f.get ? f.get.call(arguments.length < 3 ? u : g) : f.value;
        }
      }, O.apply(this, arguments);
    }
    function F(c, u) {
      return X(c) || s(c, u) || se(c, u) || pe();
    }
    function D(c) {
      return R(c) || Q(c) || se(c) || be();
    }
    function R(c) {
      if (Array.isArray(c))
        return ce(c);
    }
    function X(c) {
      if (Array.isArray(c))
        return c;
    }
    function Q(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function se(c, u) {
      if (c) {
        if (typeof c == "string")
          return ce(c, u);
        var t = Object.prototype.toString.call(c).slice(8, -1);
        if (t === "Object" && c.constructor && (t = c.constructor.name), t === "Map" || t === "Set")
          return Array.from(c);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return ce(c, u);
      }
    }
    function ce(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var t = 0, g = new Array(u); t < u; t++)
        g[t] = c[t];
      return g;
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
        if (Array.isArray(c) || (t = se(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
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
          t = t.call(c);
        },
        n: function() {
          var C = t.next();
          return f = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
        },
        f: function() {
          try {
            !f && t.return != null && t.return();
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
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var g = t.call(c, u || "default");
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
    var N = function(u, t, g) {
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
      var g = new MutationObserver(t);
      c.forEach(function(f, y) {
        g.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return go(g, t);
      };
      return {
        observer: g,
        callback: t,
        cleanup: i
      };
    }, xt = function(c) {
      var u = Mt(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, Dt = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Yt = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, kt = function(c, u) {
      var t;
      return function() {
        for (var g = arguments.length, i = new Array(g), f = 0; f < g; f++)
          i[f] = arguments[f];
        var y = function() {
          t = null, c.apply(void 0, i);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Wt = function() {
      var c, u, t, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Er = function(c) {
      var u = function t(g) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = g[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (g.push(y), f++, t(g, f)) : g;
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
      return je(c).forEach(function(g) {
        var i = u.getRect(g);
        t.top = Math.min(t.top, i.top), t.left = Math.min(t.left, i.left), t.bottom = Math.max(t.bottom, i.bottom), t.right = Math.max(t.right, i.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Mt = function(c) {
      return !c || c instanceof Document ? Wt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Wt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Wt().y
      };
    }, Lr = function(c) {
      var u = c.elementRect, t = c.containerRect, g = c.tolerance, i = g === void 0 ? {
        x: 0,
        y: 0
      } : g, f = [];
      return u.top - i.y < t.top && f.push("top"), u.left - i.x < t.left && f.push("left"), u.bottom + i.y > t.bottom && f.push("bottom"), u.right + i.y > t.right && f.push("right"), /** @type {DSEdges} */
      f;
    }, oo = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, io = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, g = c.pointerPos, i = {};
      return g.x > t.x - u.x ? (i.left = t.x - u.x, i.width = g.x - t.x + u.x) : (i.left = g.x, i.width = t.x - g.x - u.x), g.y > t.y - u.y ? (i.top = t.y - u.y, i.height = g.y - t.y + u.y) : (i.top = g.y, i.height = t.y - g.y - u.y), i;
    }, Ar = function(u) {
      var t = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return t;
      if (g.transform.indexOf("3d") >= 0) {
        var i = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var f, y = (f = i[1]) === null || f === void 0 ? void 0 : f.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, H = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(H[4]) || 0, t.y = parseInt(H[5]) || 0;
      }
      return t;
    }, no = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Ar(u);
      var g = {
        x: 0,
        y: 0
      }, i = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var f, y = (f = i[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(C[0]) || 0, g.y = parseInt(C[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ar(u) : g;
    }, ao = function(u) {
      var t = u.style, g = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
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
      var u = c.element, t = c.edges, g = c.elementRect, i = c.containerRect, f = c.elementPos, y = c.useTransform;
      t.includes("top") && lt(u, {
        y: f.y + i.top - g.top,
        x: f.x
      }, y), t.includes("left") && lt(u, {
        y: f.y,
        x: f.x + i.left - g.left
      }, y), t.includes("bottom") && lt(u, {
        y: f.y + i.bottom - g.bottom,
        x: f.x
      }, y), t.includes("right") && lt(u, {
        y: f.y,
        x: f.x + i.right - g.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, t = c.node, g = u.position, i = g === "absolute" || g === "relative" || g === "fixed";
      !(t instanceof Document) && !i && (t.style.position = "relative");
    }, uo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, g = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, H = {
        x: 0,
        y: 0
      }, W = u ? t * 4 * g : t * g;
      return f.left.includes(i) && (H.x = y.x || -W, !u && !y.x && _ && C(["left"], t)), f.right.includes(i) && (H.x = y.x || W, !u && !y.x && _ && C(["right"], t)), f.up.includes(i) && (H.y = y.y || -W, !u && !y.y && _ && C(["top"], t)), f.down.includes(i) && (H.y = y.y || W, !u && !y.y && _ && C(["bottom"], t)), H;
    }, ho = function(c) {
      var u = c.element, t = c.force, g = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !t || (i.has(u) ? g && i.delete(u) : i.add(u), u.classList.add(f));
    }, fo = function(c) {
      var u = c.element, t = c.force, g = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !t)
        return !1;
      var y = g.has(u), _ = i.has(u);
      y && !_ ? g.delete(u) : !y && _ && g.add(u), u.classList.remove(f);
    }, at = function(u, t, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, Y = function(u, t, g, i) {
      if (t === void 0)
        return g ? l({}, u, i) : {};
      if (t === null)
        return l({}, u, null);
      var f = !0, y = !1, _ = typeof i == "string";
      _ && (f = typeof t == "string" || t instanceof String), _ && !f && (y = !0, at(u, "string"));
      var C = !Number.isNaN(i) && typeof i == "number";
      C && (f = !Number.isNaN(t) && typeof t == "number"), C && !f && (y = !0, at(u, "number"));
      var H = Object.prototype.toString.call(i) === "[object Object]";
      H && (f = Object.prototype.toString.call(t) === "[object Object]"), H && !f && (y = !0, at(u, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof t == "boolean"), W && !f && (y = !0, at(u, "boolean"));
      var ae = Array.isArray(i);
      ae && (f = Array.isArray(t)), ae && !f && (y = !0, at(u, "array"));
      var xe = y || g;
      return u === "dragKeys" && f ? l({}, u, Object.assign(i, t)) : u === "dragKeys" && !f ? xe ? l({}, u, i) : {} : (u === "dropZones" && f && new Set(t.map(function(De) {
        return De.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, t) : xe ? l({}, u, i) : {});
    }, po = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, qe = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (t > 0) {
        var i = (c.right - c.left) * t, f = (c.bottom - c.top) * t;
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
      var u = c.element, t = c.posDirection, g = c.containerRect, i = c.useTransform, f = lo(u, i), y = N(f, "+", t);
      lt(u, y, i);
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
    }, mo = function(c, u, t) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? g || document.body : c, f = u.includes("top") && i.scrollTop > 0, y = u.includes("bottom") && i.scrollTop < i.scrollHeight, _ = u.includes("left") && i.scrollLeft > 0, C = u.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * t), y && (i.scrollTop += 1 * t), _ && (i.scrollLeft -= 1 * t), C && (i.scrollLeft += 1 * t);
      }
    }, lt = function(c, u, t) {
      if (t) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, vo = function(c) {
      for (var u = c.subscribe, t = c.publish, g = c.Interaction, i = c.SelectedSet, f = c.DropZones, y = {
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
      }, _ = function() {
        var ae = F(H[C], 2), xe = ae[0], De = ae[1];
        ["pre", !1].forEach(function(Ce) {
          return u(Ce ? "".concat(xe, ":").concat(Ce) : xe, function(ie) {
            return De.forEach(function(me) {
              return (!me.condition || me.condition(ie)) && t(Ce ? "".concat(Ce).concat(me.name) : me.name, a(a({
                items: i.elements,
                isDragging: g.isDragging
              }, ie), me.extraData ? me.extraData(ie) : {}));
            });
          });
        });
      }, C = 0, H = Object.entries(y); C < H.length; C++)
        _();
    }, je = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
          t._observers = ye(t.parentNodes, kt(function(i) {
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
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          t.setArea(f.area);
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
        var t = this, g = u.DS;
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
          }, t._dragKeysFlat = [].concat(D(t._dragKeys.up), D(t._dragKeys.down), D(t._dragKeys.left), D(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var H = uo({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (H = t.limitDirection(H)), t._elements.forEach(function(W) {
              return Nr({
                element: W,
                posDirection: H,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
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
            var _ = N(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (_ = t.limitDirection(_)), t._elements.forEach(function(C) {
              return Nr({
                element: C,
                posDirection: _,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(i) {
          var f = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, _ = {
            top: f.top - t._selectionRect.top + y.y,
            left: f.left - t._selectionRect.left + y.x,
            bottom: f.bottom - t._selectionRect.bottom + y.y,
            right: f.right - t._selectionRect.right + y.x
          };
          return i.x === 0 && i.y === 0 || (i.y < 0 && (i.y = Math.max(i.y, _.top)), i.x < 0 && (i.x = Math.max(i.x, _.left)), i.y > 0 && (i.y = Math.min(i.y, _.bottom)), i.x > 0 && (i.x = Math.min(i.x, _.right)), t._selectionRect.top += i.y, t._selectionRect.bottom += i.y, t._selectionRect.left += i.x, t._selectionRect.right += i.x), i;
        }), l(this, "handleZIndex", function(i) {
          t._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? N(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? N(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, g;
        }
      }]), c;
    }(), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS, i = u.id, f = u.element, y = u.droppables;
        n(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!t.isDestroyed) {
            var C = t.droppables.filter(function(H) {
              return t.DS.SelectedSet.has(H);
            });
            C.length && (C.forEach(function(H) {
              H.classList[_]("".concat(t.Settings.droppableClass)), H.classList[_]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[_]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var _;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(t.Settings.droppedTargetClass), C.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function(C) {
            return !t.DS.SelectedSet.has(C);
          }), (_ = t._itemsDropped) !== null && _ !== void 0 && _.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var _, C, H;
          t.isDestroyed || (t._itemsDropped = D(new Set([].concat(D(t._itemsDropped), D((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return t.DS.SelectedSet.has(W);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(t.Settings.droppedTargetClass)), W.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (H = t._itemsDropped) !== null && H !== void 0 && H.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          t.droppables.forEach(function(C) {
            t.itemsInside.includes(C) ? (C.classList.add("".concat(t.Settings.droppedInsideClass)), C.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), _ = !0) : (C.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), C.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), _ ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), l(this, "start", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || t.setReadyClasses("add");
        }), l(this, "stop", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = je(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = ye(this.parentNodes, kt(function() {
          return t._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var t = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(t.Settings.droppedTargetClass)), g.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id)), g.classList.remove("".concat(t.Settings.droppableClass)), g.classList.remove("".concat(t.Settings.droppableClass, "-").concat(t.id));
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
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return qe(t.DS.SelectableSet.rects.get(g), t.rect, t.Settings.dropInsideThreshold) ? [g] : [];
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
        var t = this, g = u.DS;
        n(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(i) {
          var f = i.dropZones;
          f && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = f.map(function(y) {
            return new So(a({
              DS: t.DS
            }, y));
          }), t._zones.forEach(function(y) {
            t._zoneByElement.set(y.element, y), t._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var C = t._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return t._zonesByDroppable.set(_, [y]);
              t._zonesByDroppable.set(_, D(new Set([].concat(D(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          t._zones.forEach(function(f) {
            f !== i && f.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, f) {
          for (var y = f.x, _ = f.y, C = 0, H = i.length; C < H; C++) {
            var W = t._zoneByElement.get(i[C]);
            if (W && qe(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
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
          var _ = y.itemsInside;
          return f && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(i) {
          var f;
          if ((f = t._zones) !== null && f !== void 0 && f.length) {
            var y = (i == null ? void 0 : i.x) || t.DS.stores.PointerStore.currentVal.x, _ = (i == null ? void 0 : i.y) || t.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return t._getZoneByElementsFromPoint(
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
        var t = this, g = u.DS;
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
            var y = t.DS, _ = y.stores, C = _.PointerStore, H = _.KeyStore, W = y.SelectableSet, ae = y.SelectedSet;
            C.start(f);
            var xe = (
              /** @type {any} */
              f.target
            );
            W.has(xe) && (H.isMultiSelectKeyPressed(f) || ae.clear(), ae.toggle(xe), t.reset());
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
          var f = i.event, y = i.scroll_directions, _ = i.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: _,
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
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(i) {
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
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(t) {
            var g = (
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
              !g && !this.DS.SelectorArea.isClicked(t))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), xo = /* @__PURE__ */ m(
      function c(u) {
        var t = this, g = u.DS;
        n(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(i, f) {
          return Array.isArray(t.subscribers[i]) || (t.subscribers[i] = []), t.subscribers[i].push(f), t.subscribers[i].length - 1;
        }), l(this, "unsubscribe", function(i, f, y) {
          y >= 0 ? t.subscribers[i].splice(y, 1) : f && (t.subscribers[i] = t.subscribers[i].filter(function(_) {
            return _ !== f;
          }));
        }), l(this, "publish", function(i, f) {
          Array.isArray(i) ? i.forEach(function(y) {
            return t._publish(y, f);
          }) : t._publish(i, f);
        }), l(this, "_publish", function(i, f) {
          var y = t.subscribers[i];
          Array.isArray(y) && (i.includes(":pre") ? t._handlePrePublish(y, f) : t._handlePublish(y, f));
        }), l(this, "_handlePublish", function(i, f) {
          for (var y = 0, _ = i.length; y < _; y++) {
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
      v(t, c);
      var u = j(t);
      function t(g) {
        var i, f = g.DS;
        return n(this, t), i = u.call(this), l(L(i), "_rects", void 0), l(L(i), "_timeout", void 0), l(L(i), "init", function() {
          return je(i.Settings.selectables).forEach(function(y) {
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
      return m(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(i) {
            if (O(p(t.prototype), "has", this).call(this, i))
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
            }), O(p(t.prototype), "add", this).call(this, i), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!O(p(t.prototype), "has", this).call(this, i))
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
          }), O(p(t.prototype), "delete", this).call(this, i), this.DS.publish("Selectable:removed", f), !0;
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
    }(/* @__PURE__ */ P(Set)), ko = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = j(t);
      function t(g) {
        var i, f = g.DS;
        return n(this, t), i = u.call(this), l(L(i), "clear", function() {
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
      return m(t, [{
        key: "add",
        value: function(i) {
          if (O(p(t.prototype), "has", this).call(this, i))
            return this;
          var f = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selected:added:pre", f), O(p(t.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!O(p(t.prototype), "has", this).call(this, i))
            return !0;
          var f = {
            items: this.elements,
            item: i
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = O(p(t.prototype), "delete", this).call(this, i);
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
    }(/* @__PURE__ */ P(Set)), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        n(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (t._storePrevious(f), t._handleInsideSelection(!0, f));
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          f || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(i, f) {
          var y = t.DS, _ = y.SelectableSet, C = y.SelectorArea, H = y.Selector, W = t.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && t.Settings.multiSelectToggling, ae = t.Settings.selectionThreshold, xe = _.rects, De = H.rect, Ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), me = ge(xe), ct;
          try {
            for (me.s(); !(ct = me.n()).done; ) {
              var Ct = F(ct.value, 2), ut = Ct[0], It = Ct[1];
              C.isInside(ut, It) && (qe(It, De, ae) ? Ce.set(ut, It) : ie.set(ut, It));
            }
          } catch (Ft) {
            me.e(Ft);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var Pr = t.filterSelected({
              select: Ce,
              unselect: ie,
              selectorRect: De
            }), $o = Pr.select, No = Pr.unselect;
            $o.forEach(function(Ft, Kt) {
              return ho({
                element: Kt,
                force: i,
                multiSelectionToggle: W,
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
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(t) {
          var g = this.DS, i = g.stores.KeyStore, f = g.SelectedSet;
          i.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        n(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var i, f;
          t.HTMLNode && (i = t.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Yt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (f = t.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Or(t.HTMLNode, U(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, C = y.PointerStore, H = io({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Or(t.HTMLNode, H), t._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          t.HTMLNode.classList.remove(f["selectorClass:pre"]), t.HTMLNode.classList.add(f.selectorClass);
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
        var t = this, g = u.DS;
        n(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[f][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var i = t.DS.Area.rect, f = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(i.top + f.top, "px"), C = "".concat(i.left + f.left, "px"), H = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== H && (y.width = H), y.height !== W && (y.height = W);
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
        }), this.DS = g, this.HTMLNode = Dt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          t.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), t.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          t.updatePos(), t.stopAutoScroll();
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
          function(t) {
            var g = this.DS.stores.PointerStore, i = t ? g.getPointerPosition(t) : g.initialVal;
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
        var t = this, g = u.DS;
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
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(t) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
              return f.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(f) {
              return i.includes(f.toLocaleLowerCase());
            }) || t && i.some(function(f) {
              return t[g._keyMapping[f]];
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
        var t = this, g = u.DS;
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
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return t.reset(f);
        });
      }
      return m(c, [{
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
          this._initialVal = t, this._initialValArea = t && N(t, "-", N(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
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
          this._currentVal = t, this._currentValArea = t && N(t, "-", N(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
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
          this._lastVal = t, this._lastValArea = t && N(t, "-", N(re(this.DS.Area.rect), "+", re(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Lo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        n(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "start", function() {
          t._currentVal = t._initialVal = Mt(t.DS.stores.SettingsStore.s.area), t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "update", function() {
          return t._currentVal = Mt(t.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          t.DS.stores.SettingsStore.s.area.removeEventListener("scroll", t.update), t._initialVal = {
            x: 0,
            y: 0
          }, t._canScroll = null;
        }), l(this, "reset", function() {
          t.stop(), t.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = N(this.currentVal, "-", this.initialVal), g = _e(this.DS.stores.SettingsStore.s.zoom), i = N(N(t, "*", g), "-", t);
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
          return this._currentVal || (this._currentVal = Mt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
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
        var t = this, g = u.DS, i = u.settings;
        n(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, _ = f.init;
          return t.DS.publish("Settings:updated:pre", a({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, _ = f.init, C = po(y, _), H = function() {
            var De, Ce = F(ae[W], 2), ie = Ce[0], me = Ce[1];
            ie in t._settings || Object.defineProperty(t.s, ie, {
              get: function() {
                return t._settings[ie];
              },
              set: function(ut) {
                return t.update({
                  settings: l({}, ie, ut)
                });
              }
            }), t._settings["".concat(ie, ":pre")] = t._settings[ie], t._settings[ie] = me;
            var ct = {
              settings: (De = {}, l(De, ie, t._settings[ie]), l(De, "".concat(ie, ":pre"), t._settings["".concat(ie, ":pre")]), De)
            };
            t.DS.publish("Settings:updated", ct), t.DS.publish("Settings:updated:".concat(ie), ct);
          }, W = 0, ae = Object.entries(C); W < ae.length; W++)
            H();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
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
        }), l(this, "setSettings", function(g) {
          return t.stores.SettingsStore.update({
            settings: g
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
        }), l(this, "isMultiSelect", function(g) {
          return t.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), l(this, "isDragging", function() {
          return t.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(g) {
          var i;
          return (i = t.DropZones.getTarget(g)) === null || i === void 0 ? void 0 : i.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return t.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, i) {
          return t.DropZones.getItemsInsideById(g, i);
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
          return t.continue = !1;
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
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            i && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(je(t)), i || this.addSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(je(t)), i && this.removeSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return je(t).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(t, i, f) : g.addSelection(t, i, f);
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, g, i), this.getSelection();
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
        value: function(t, g, i) {
          var f = je(t);
          return this.SelectableSet.addAll(f), g && this.SelectedSet.addAll(f), i && this.PubSub.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, g), this.addSelectables(t, i);
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
        value: function(t, g, i) {
          return this.SelectableSet.deleteAll(je(t)), g && this.removeSelection(t), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return jr.isCollision = qe, jr;
  });
})(ls);
var xi = ls.exports;
const Di = /* @__PURE__ */ _i(xi), cs = (r, e, s, o, a) => (e = Math, s = e.log, o = 1024, a = s(r) / s(o) | 0, r / e.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), us = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), ki = {
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
}, Tt = /* @__PURE__ */ Object.assign(Li, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), I("div", null, [
      r.direction == "down" ? (w(), I("svg", ki, Ci)) : K("", !0),
      r.direction == "up" ? (w(), I("svg", Ii, Ti)) : K("", !0)
    ]));
  }
}), Ai = ["onClick"], $i = {
  name: "VFToast.vue"
}, Ni = /* @__PURE__ */ Object.assign($i, {
  setup(r) {
    const e = z("emitter"), { getStore: s } = z("storage"), o = A(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = A([]), d = (l) => {
      n.value.splice(l, 1);
    }, m = (l) => {
      let v = n.value.findIndex((p) => p.id === l);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      n.value = [];
    }), e.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, n.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (w(), I("div", {
      class: he([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Me(Oo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          (w(!0), I(ne, null, ve(n.value, (p, b) => (w(), I("div", {
            onClick: (S) => d(b),
            key: p,
            class: he([a(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, Ai))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ge = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Oi } = Ae(), er = (r, e) => Oi.value + "?" + Ge({ q: "preview", adapter: r, path: e }), Ve = typeof window < "u", ds = Ve && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Ve && "IntersectionObserver" in window, fs = Ve && "classList" in document.createElement("p"), ps = Ve && window.devicePixelRatio > 1, ji = {
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
}, gs = (r) => Object.assign({}, ji, r), Rr = function(r, e) {
  let s;
  const o = "LazyLoad::Initialized", a = new r(e);
  try {
    s = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, Pi = (r, e) => {
  if (e)
    if (!e.length)
      Rr(r, e);
    else
      for (let s = 0, o; o = e[s]; s += 1)
        Rr(r, o);
}, Oe = "src", fr = "srcset", pr = "sizes", ms = "poster", St = "llOriginalAttrs", vs = "data", gr = "loading", bs = "loaded", ys = "applied", zi = "entered", mr = "error", Ss = "native", ws = "data-", _s = "ll-status", fe = (r, e) => r.getAttribute(ws + e), Ri = (r, e, s) => {
  var o = ws + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, wt = (r) => fe(r, _s), Xe = (r, e) => Ri(r, _s, e), Bt = (r) => Xe(r, null), vr = (r) => wt(r) === null, Bi = (r) => wt(r) === gr, Vi = (r) => wt(r) === mr, br = (r) => wt(r) === Ss, Hi = [gr, bs, ys, mr], Ui = (r) => Hi.indexOf(wt(r)) >= 0, He = (r, e, s, o) => {
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
}, nt = (r, e) => {
  if (fs) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Ie = (r, e) => {
  if (fs) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Zi = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Yi = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Vt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Wi = (r) => {
  r.disconnect();
}, Fi = (r, e, s) => {
  e.unobserve_entered && Vt(r, s);
}, yr = (r, e) => {
  r && (r.loadingCount += e);
}, Ki = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Gi = (r) => r.loadingCount > 0, Xi = (r) => r.toLoadCount > 0, ks = (r) => {
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
}, Ht = [Oe], Cs = [Oe, ms], vt = [Oe, fr, pr], Is = [vs], Ut = (r) => !!r[St], Es = (r) => r[St], Ts = (r) => delete r[St], st = (r, e) => {
  if (Ut(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[St] = s;
}, qi = (r) => {
  Ut(r) || (r[St] = { backgroundImage: r.style.backgroundImage });
}, Qi = (r, e, s) => {
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
    Qi(r, o, s[o]);
  });
}, Ji = (r) => {
  if (!Ut(r))
    return;
  const e = Es(r);
  r.style.backgroundImage = e.backgroundImage;
}, Ls = (r, e, s) => {
  nt(r, e.class_applied), Xe(r, ys), s && (e.unobserve_completed && Vt(r, e), He(e.callback_applied, r, s));
}, As = (r, e, s) => {
  nt(r, e.class_loading), Xe(r, gr), s && (yr(s, 1), He(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Be(r, pr, fe(r, e.data_sizes)), Be(r, fr, fe(r, e.data_srcset)), Be(r, Oe, fe(r, e.data_src));
}, en = (r, e) => {
  Sr(r, (s) => {
    st(s, vt), Br(s, e);
  }), st(r, vt), Br(r, e);
}, tn = (r, e) => {
  st(r, Ht), Be(r, Oe, fe(r, e.data_src));
}, rn = (r, e) => {
  Ms(r, (s) => {
    st(s, Ht), Be(s, Oe, fe(s, e.data_src));
  }), st(r, Cs), Be(r, ms, fe(r, e.data_poster)), Be(r, Oe, fe(r, e.data_src)), r.load();
}, sn = (r, e) => {
  st(r, Is), Be(r, vs, fe(r, e.data_src));
}, on = (r, e, s) => {
  const o = fe(r, e.data_bg), a = fe(r, e.data_bg_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = `url("${n}")`, xs(r).setAttribute(Oe, n), As(r, e, s));
}, nn = (r, e, s) => {
  const o = fe(r, e.data_bg_multi), a = fe(r, e.data_bg_multi_hidpi), n = ps && a ? a : o;
  n && (r.style.backgroundImage = n, Ls(r, e, s));
}, an = (r, e, s) => {
  const o = fe(r, e.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let n = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = n.join(), r.style.backgroundImage === "" && (n = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = n.join()), Ls(r, e, s);
}, $s = {
  IMG: en,
  IFRAME: tn,
  VIDEO: rn,
  OBJECT: sn
}, ln = (r, e) => {
  const s = $s[r.tagName];
  s && s(r, e);
}, cn = (r, e, s) => {
  const o = $s[r.tagName];
  o && (o(r, e), As(r, e, s));
}, un = ["IMG", "IFRAME", "VIDEO", "OBJECT"], dn = (r) => un.indexOf(r.tagName) > -1, Ns = (r, e) => {
  e && !Gi(e) && !Xi(e) && He(r.callback_finish, e);
}, Vr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, hn = (r, e, s) => {
  r.removeEventListener(e, s);
}, wr = (r) => !!r.llEvLisnrs, fn = (r, e, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, o, e), Vr(r, "error", s);
}, tr = (r) => {
  if (!wr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    hn(r, s, o);
  }
  delete r.llEvLisnrs;
}, Os = (r, e, s) => {
  Yi(r), yr(s, -1), Ki(s), Ie(r, e.class_loading), e.unobserve_completed && Vt(r, s);
}, pn = (r, e, s, o) => {
  const a = br(e);
  Os(e, s, o), nt(e, s.class_loaded), Xe(e, bs), He(s.callback_loaded, e, o), a || Ns(s, o);
}, gn = (r, e, s, o) => {
  const a = br(e);
  Os(e, s, o), nt(e, s.class_error), Xe(e, mr), He(s.callback_error, e, o), s.restore_on_error && Fe(e, vt), a || Ns(s, o);
}, _r = (r, e, s) => {
  const o = xs(r) || r;
  if (wr(o))
    return;
  fn(o, (d) => {
    pn(d, r, e, s), tr(o);
  }, (d) => {
    gn(d, r, e, s), tr(o);
  });
}, mn = (r, e, s) => {
  Zi(r), _r(r, e, s), qi(r), on(r, e, s), nn(r, e, s), an(r, e, s);
}, vn = (r, e, s) => {
  _r(r, e, s), cn(r, e, s);
}, xr = (r, e, s) => {
  dn(r) ? vn(r, e, s) : mn(r, e, s);
}, bn = (r, e, s) => {
  r.setAttribute("loading", "lazy"), _r(r, e, s), ln(r, e), Xe(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(Oe), r.removeAttribute(fr), r.removeAttribute(pr);
}, yn = (r) => {
  Sr(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  Sr(r, (e) => {
    Fe(e, vt);
  }), Fe(r, vt);
}, Sn = (r) => {
  Ms(r, (e) => {
    Fe(e, Ht);
  }), Fe(r, Cs), r.load();
}, wn = (r) => {
  Fe(r, Ht);
}, _n = (r) => {
  Fe(r, Is);
}, xn = {
  IMG: js,
  IFRAME: wn,
  VIDEO: Sn,
  OBJECT: _n
}, Dn = (r) => {
  const e = xn[r.tagName];
  if (!e) {
    Ji(r);
    return;
  }
  e(r);
}, kn = (r, e) => {
  vr(r) || br(r) || (Ie(r, e.class_entered), Ie(r, e.class_exited), Ie(r, e.class_applied), Ie(r, e.class_loading), Ie(r, e.class_loaded), Ie(r, e.class_error));
}, Mn = (r, e) => {
  Dn(r), kn(r, e), Bt(r), Ts(r);
}, Cn = (r, e, s, o) => {
  s.cancel_on_exit && Bi(r) && r.tagName === "IMG" && (tr(r), yn(r), js(r), Ie(r, s.class_loading), yr(o, -1), Bt(r), He(s.callback_cancel, r, e, o));
}, In = (r, e, s, o) => {
  const a = Ui(r);
  Xe(r, zi), nt(r, s.class_entered), Ie(r, s.class_exited), Fi(r, s, o), He(s.callback_enter, r, e, o), !a && xr(r, s, o);
}, En = (r, e, s, o) => {
  vr(r) || (nt(r, s.class_exited), Cn(r, e, s, o), He(s.callback_exit, r, e, o));
}, Tn = ["IMG", "IFRAME", "VIDEO"], Ps = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ln = (r, e, s) => {
  r.forEach((o) => {
    Tn.indexOf(o.tagName) !== -1 && bn(o, e, s);
  }), Ds(s, 0);
}, An = (r) => r.isIntersecting || r.intersectionRatio > 0, $n = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Nn = (r, e, s) => {
  r.forEach(
    (o) => An(o) ? In(o.target, o, e, s) : En(o.target, o, e, s)
  );
}, On = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, jn = (r, e) => {
  Wi(r), On(r, e);
}, Pn = (r, e) => {
  !hs || Ps(r) || (e._observer = new IntersectionObserver((s) => {
    Nn(s, r, e);
  }, $n(r)));
}, zs = (r) => Array.prototype.slice.call(r), jt = (r) => r.container.querySelectorAll(r.elements_selector), zn = (r) => zs(r).filter(vr), Rn = (r) => Vi(r), Bn = (r) => zs(r).filter(Rn), Ur = (r, e) => zn(r || jt(e)), Vn = (r, e) => {
  Bn(jt(r)).forEach((o) => {
    Ie(o, r.class_error), Bt(o);
  }), e.update();
}, Hn = (r, e) => {
  Ve && (e._onlineHandler = () => {
    Vn(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Un = (r) => {
  Ve && window.removeEventListener("online", r._onlineHandler);
}, _t = function(r, e) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, Pn(s, this), Hn(s, this), this.update(e);
};
_t.prototype = {
  update: function(r) {
    const e = this._settings, s = Ur(r, e);
    if (Ds(this, s.length), ds || !hs) {
      this.loadAll(s);
      return;
    }
    if (Ps(e)) {
      Ln(s, e, this);
      return;
    }
    jn(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Un(this), jt(this._settings).forEach((r) => {
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
    jt(r).forEach((e) => {
      Mn(e, r);
    });
  }
};
_t.load = (r, e) => {
  const s = gs(e);
  xr(r, s);
};
_t.resetStatus = (r) => {
  Bt(r);
};
Ve && Pi(_t, window.lazyLoadOptions);
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
}, ea = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ta = [
  ea
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
    const e = r, s = z("emitter"), { setStore: o, getStore: a } = z("storage"), n = z("adapter"), d = ($) => $ == null ? void 0 : $.substring(0, 3), m = ($) => $.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = A(null), v = A(null), p = A(0), b = A(null), { t: S } = z("i18n"), M = Math.floor(Math.random() * 2 ** 32), k = A(a("full-screen", !1)), P = new _t();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, k.value = !k.value, o("full-screen", k.value);
    });
    const L = A("");
    s.on("vf-search-query", ({ newQuery: $ }) => {
      L.value = $, $ ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
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
          adapter: e.data.adapter,
          path: e.data.dirname
        }
      });
    });
    let V = null;
    const j = () => {
      V && clearTimeout(V);
    }, T = A(!0), O = ($) => {
      $.touches.length > 1 && (T.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), T.value = !T.value);
    }, F = ($) => {
      V = setTimeout(() => {
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
        params: { q: "index", adapter: e.data.adapter, path: $.path }
      })) : s.emit("custom-modal-show", {
        type: "preview",
        adapter: e.data.adapter,
        item: $
      });
    }, R = $t({ active: !1, column: "", order: "" }), X = ($ = !0) => {
      let B = [...e.data.files], N = R.column, re = R.order == "asc" ? 1 : -1;
      if (!$)
        return B;
      const U = (_e, ye) => typeof _e == "string" && typeof ye == "string" ? _e.toLowerCase().localeCompare(ye.toLowerCase()) : _e < ye ? -1 : _e > ye ? 1 : 0;
      return R.active && (B = B.slice().sort((_e, ye) => U(_e[N], ye[N]) * re)), B;
    }, Q = ($) => {
      R.active && R.column == $ ? (R.active = R.order == "asc", R.column = $, R.order = "desc") : (R.active = !0, R.column = $, R.order = "asc");
    }, se = () => b.value.getSelection().map(($) => JSON.parse($.dataset.item)), ce = ($, B) => {
      if ($.altKey || $.ctrlKey || $.metaKey)
        return $.preventDefault(), !1;
      $.dataTransfer.setDragImage(v.value, 0, 15), $.dataTransfer.effectAllowed = "all", $.dataTransfer.dropEffect = "copy", $.dataTransfer.setData("items", JSON.stringify(se()));
    }, be = ($, B) => {
      $.preventDefault();
      let N = JSON.parse($.dataTransfer.getData("items"));
      if (N.find((re) => re.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: N, to: B }
      });
    }, pe = ($, B) => {
      $.preventDefault(), !B || B.type !== "dir" || b.value.getSelection().find((N) => N == $.currentTarget) ? ($.dataTransfer.dropEffect = "none", $.dataTransfer.effectAllowed = "none") : $.dataTransfer.dropEffect = "copy";
    };
    return we(() => {
      b.value = new Di({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Rt(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + M)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: $, isDragging: B }) => {
        if (B)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const N = $.target.offsetWidth - $.offsetX, re = $.target.offsetHeight - $.offsetY;
          N < 15 && re < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: $ }) => {
        $ && b.value.break();
      }), b.value.subscribe("callback", ({ items: $, event: B, isDragging: N }) => {
        s.emit("vf-nodes-selected", se()), p.value = b.value.getSelection().length;
      });
    }), jo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), P.update();
    }), we(() => {
      zt(
        () => e.view,
        () => s.emit("vf-explorer-update")
      );
    }), ($, B) => (w(), I("div", Zn, [
      r.view == "list" || L.value.length ? (w(), I("div", Yn, [
        h("div", {
          onClick: B[0] || (B[0] = (N) => Q("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          te(E(x(S)("Name")) + " ", 1),
          Ee(Me(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "basename"]
          ])
        ]),
        L.value.length ? K("", !0) : (w(), I("div", {
          key: 0,
          onClick: B[1] || (B[1] = (N) => Q("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          te(E(x(S)("Size")) + " ", 1),
          Ee(Me(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "file_size"]
          ])
        ])),
        L.value.length ? K("", !0) : (w(), I("div", {
          key: 1,
          onClick: B[2] || (B[2] = (N) => Q("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          te(E(x(S)("Date")) + " ", 1),
          Ee(Me(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "last_modified"]
          ])
        ])),
        L.value.length ? (w(), I("div", {
          key: 2,
          onClick: B[3] || (B[3] = (N) => Q("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          te(E(x(S)("Filepath")) + " ", 1),
          Ee(Me(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
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
        onTouchstart: O,
        onContextmenu: B[10] || (B[10] = We((N) => x(s).emit("vf-contextmenu-show", {
          event: N,
          area: l.value,
          items: se()
        }), ["self", "prevent"])),
        class: he([(k.value, ""), "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        L.value.length ? (w(!0), I(ne, { key: 0 }, ve(X(), (N, re) => (w(), I("div", {
          onDblclick: (U) => D(N),
          onTouchstart: B[4] || (B[4] = (U) => F(U)),
          onTouchend: B[5] || (B[5] = (U) => j()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: se(),
            target: N
          }), ["prevent"]),
          class: he(["vf-item-" + x(M), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": re
        }, [
          h("div", Xn, [
            h("div", qn, [
              N.type == "dir" ? (w(), I("img", Qn)) : (w(), I("svg", Jn, ta)),
              h("span", ra, E(N.basename), 1)
            ]),
            h("div", sa, E(N.path), 1)
          ])
        ], 42, Gn))), 256)) : K("", !0),
        r.view == "list" && !L.value.length ? (w(!0), I(ne, { key: 1 }, ve(X(), (N, re) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => D(N),
          onTouchstart: B[6] || (B[6] = (U) => F(U)),
          onTouchend: B[7] || (B[7] = (U) => j()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: se(),
            target: N
          }), ["prevent"]),
          onDragstart: (U) => ce(U),
          onDragover: (U) => pe(U, N),
          onDrop: (U) => be(U, N),
          class: he(["vf-item-" + x(M), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": re
        }, [
          h("div", ia, [
            h("div", na, [
              N.type == "dir" ? (w(), I("img", aa)) : (w(), I("svg", la, ua)),
              h("span", da, E(N.basename), 1)
            ]),
            h("div", ha, E(N.file_size ? x(cs)(N.file_size) : ""), 1),
            h("div", fa, E(x(us)(N.last_modified)), 1)
          ])
        ], 42, oa))), 256)) : K("", !0),
        r.view == "grid" && !L.value.length ? (w(!0), I(ne, { key: 2 }, ve(X(!1), (N, re) => (w(), I("div", {
          draggable: "true",
          onDblclick: (U) => D(N),
          onTouchstart: B[8] || (B[8] = (U) => F(U)),
          onTouchend: B[9] || (B[9] = (U) => j()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", {
            event: U,
            area: l.value,
            items: se(),
            target: N
          }), ["prevent"]),
          onDragstart: (U) => ce(U),
          onDragover: (U) => pe(U, N),
          onDrop: (U) => be(U, N),
          class: he(["vf-item-" + x(M), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": re
        }, [
          h("div", ga, [
            h("div", ma, [
              N.type == "dir" ? (w(), I("img", va)) : (N.mime_type ?? "").startsWith("image") ? (w(), I("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": x(er)(x(n).value, N.path),
                alt: N.basename
              }, null, 8, ba)) : (w(), I("svg", ya, wa)),
              !(N.mime_type ?? "").startsWith("image") && N.type != "dir" ? (w(), I("div", _a, E(d(N.extension)), 1)) : K("", !0)
            ]),
            h("span", xa, E(m(N.basename)), 1)
          ])
        ], 42, pa))), 256)) : K("", !0)
      ], 34),
      Me(Ni)
    ]));
  }
}), Ma = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ca = { class: "flex leading-5 items-center" }, Ia = { class: "ml-3" }, Ea = { key: 0 }, Ta = { class: "ml-1" }, La = {
  name: "VFStatusbar"
}, Aa = /* @__PURE__ */ Object.assign(La, {
  props: {
    data: Object
  },
  setup(r) {
    const e = z("emitter"), { getStore: s, setStore: o } = z("storage"), a = A(0);
    z("adapter");
    const { t: n, changeLocale: d } = z("i18n");
    A(s("locale", "")), e.on("vf-nodes-selected", (l) => {
      a.value = l.length;
    });
    const m = A("");
    return e.on("vf-search-query", ({ newQuery: l }) => {
      m.value = l;
    }), (l, v) => (w(), I("div", Ma, [
      h("div", Ca, [
        h("div", Ia, [
          m.value.length ? (w(), I("span", Ea, E(r.data.files.length) + " items found. ", 1)) : K("", !0),
          h("span", Ta, E(a.value > 0 ? a.value + " " + x(n)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), $a = (r, e = 0, s = !1) => {
  let o;
  return (...a) => {
    s && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, e);
  };
}, Na = (r, e, s) => {
  const o = A(r);
  return Po((n, d) => ({
    get() {
      return n(), o.value;
    },
    set: $a(
      (m) => {
        o.value = m, d();
      },
      e,
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
}, null, -1), el = [
  Qa,
  Ja
], tl = {
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), a = A(null), n = A([]), d = A(!1), m = A(null), { t: l } = z("i18n"), v = z("loadingState");
    s.on("vf-explorer-update", () => {
      let j = [], T = [];
      a.value = e.data.dirname ?? o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(O) {
        j.push(O), j.join("/") != "" && T.push({
          basename: O,
          name: O,
          path: o.value + "://" + j.join("/"),
          type: "dir"
        });
      }), T.length > 4 && (T = T.slice(-5), T[0].name = ".."), n.value = T;
    });
    const p = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      d.value = !0, Rt(() => m.value.focus());
    }, S = Na("", 400), M = () => v.value;
    zt(S, (j) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: j });
    });
    const k = () => n.value.length && !d.value, P = (j) => {
      j.preventDefault();
      let T = JSON.parse(j.dataTransfer.getData("items"));
      if (T.find((O) => O.storage != o.value)) {
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
    }, L = (j) => {
      j.preventDefault(), k() ? j.dataTransfer.dropEffect = "copy" : (j.dataTransfer.dropEffect = "none", j.dataTransfer.effectAllowed = "none");
    }, V = () => {
      S.value == "" && p();
    };
    return (j, T) => (w(), I("div", Oa, [
      h("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onDragover: T[0] || (T[0] = (O) => L(O)),
          onDrop: T[1] || (T[1] = (O) => P(O)),
          onClick: T[2] || (T[2] = (O) => {
            var F;
            return !k() || x(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((F = n.value[n.value.length - 2]) == null ? void 0 : F.path) ?? x(o) + "://"
              }
            });
          }),
          class: he([
            "h-6 w-6 p-0.5 rounded",
            k() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, za, 34))
      ], 8, ja),
      M() ? (w(), I("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: T[4] || (T[4] = (O) => x(s).emit("vf-fetch-abort")),
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
          onClick: T[3] || (T[3] = (O) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Va))
      ], 8, Ra)),
      d.value ? (w(), I("div", tl, [
        rl,
        sl,
        Ee(h("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: ot(p, ["esc"]),
          onBlur: V,
          "onUpdate:modelValue": T[6] || (T[6] = (O) => zo(S) ? S.value = O : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, ol), [
          [it, x(S)]
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
        onClick: We(b, ["self"])
      }, [
        (w(), I("svg", {
          onClick: T[5] || (T[5] = (O) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa)),
        h("div", Ka, [
          (w(!0), I(ne, null, ve(n.value, (O, F) => (w(), I("div", { key: F }, [
            Ga,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: O.basename,
              onClick: (D) => x(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: O.path }
              })
            }, E(O.name), 9, Xa)
          ]))), 128))
        ]),
        M() ? (w(), I("svg", qa, el)) : K("", !0)
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
    const e = r, s = z("emitter"), o = A(null), { apiUrl: a } = Ae(), n = $t({
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
    const { t: m } = z("i18n"), l = {
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
          s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => m("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          const S = a.value + "?" + Ge({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
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
    }), s.on("vf-contextmenu-show", ({ event: S, area: M, items: k, target: P = null }) => {
      if (n.items = [], p.value)
        if (P)
          n.items.push(l.openDir), s.emit("vf-context-selected", [P]);
        else
          return;
      else
        !P && !p.value ? (n.items.push(l.refresh), n.items.push(l.newfolder), s.emit("vf-context-selected", [])) : k.length > 1 && k.some((L) => L.path === P.path) ? (n.items.push(l.refresh), n.items.push(l.delete), s.emit("vf-context-selected", k)) : (P.type == "dir" ? n.items.push(l.open) : (n.items.push(l.preview), n.items.push(l.download)), n.items.push(l.delete), s.emit("vf-context-selected", [P]));
      b(S, M);
    }), s.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (S, M) => {
      n.active = !0, Rt(() => {
        let k = M.getBoundingClientRect(), P = S.pageX, L = S.pageY, V = o.value.offsetHeight, j = o.value.offsetWidth;
        P = k.right - S.pageX + window.scrollX < j ? P - j : P, L = k.bottom - S.pageY + window.scrollY < V ? L - V : L, n.positions = {
          left: P + "px",
          top: L + "px"
        };
      });
    };
    return (S, M) => n.active ? (w(), I("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: as(n.positions)
    }, [
      (w(!0), I(ne, null, ve(n.items, (k) => (w(), I("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: k.title,
        onClick: (P) => v(k)
      }, [
        ul,
        h("span", null, E(k.title()), 1)
      ], 8, cl))), 128))
    ], 4)) : K("", !0);
  }
}), fl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function pl(r) {
  const e = await fl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function gl(r, e, s) {
  const { getStore: o, setStore: a } = Jt(r), n = A({}), d = (v) => {
    pl(v).then((p) => {
      n.value = p, a("locale", v), a("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? n.value = o("translations") : d(e);
  const m = (v, ...p) => p.length ? m(v = v.replace("%s", p.shift()), ...p) : v;
  function l(v, ...p) {
    return n.value.hasOwnProperty(v) ? m(n.value[v], ...p) : m(v, ...p);
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
  setup(r, { expose: e, emit: s }) {
    const o = r;
    e({
      doSomething: () => {
        n.emit("vf-fetch", { params: { q: "index", adapter: l.value } }), console.log("here");
      }
    });
    const n = Bo(), { setStore: d, getStore: m } = Jt(o.id), l = A(m("adapter"));
    Ue("emitter", n), Ue("storage", Jt(o.id)), Ue("postData", o.postData), Ue("adapter", l), Ue("maxFileSize", o.maxFileSize);
    const v = gl(o.id, o.locale, n);
    Ue("i18n", v);
    const { apiUrl: p, setApiUrl: b } = Ae();
    b(o.url);
    const S = $t({
      adapter: l.value,
      storages: [],
      dirname: ".",
      files: []
    }), M = A(m("viewport", "grid")), k = A(m("darkMode", o.dark));
    n.on("vf-darkMode-toggle", () => {
      k.value = !k.value, d("darkMode", k.value);
    });
    const P = A(!1);
    Ue("loadingState", P);
    const L = A(m("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      L.value = !L.value, d("full-screen", L.value);
    }), n.on("vf-view-toggle", (O) => {
      M.value = O;
    });
    const V = $t({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      V.active = !1;
    }), n.on("vf-modal-show", (O) => {
      V.active = !0, V.type = O.type, V.data = O;
    }), n.on("custom-modal-show", (O) => {
      s("customUploadItem", O);
    }), s("fileUploaded", () => {
      console.log("here Emmit");
    }), n.on("delete-button", (O) => {
      console.log("emit delete"), s("deleteButton", O);
    }), n.on("custom-modal-show", (O) => {
      s("customOpenItem", O);
    }), n.on("file-moved", (O) => {
      s("fileMoved", O);
    });
    const j = (O) => {
      Object.assign(S, O), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let T;
    return n.on("vf-fetch-abort", () => {
      T.abort(), P.value = !1;
    }), n.on("vf-fetch", ({ params: O, onSuccess: F = null, onError: D = null }) => {
      ["index", "search"].includes(O.q) && (T && T.abort(), P.value = !0);
      const R = O.path;
      s("customUpdateVariable", R), T = new AbortController();
      const X = T.signal;
      Ot(p.value, { params: O, signal: X }).then((Q) => {
        l.value = Q.adapter, ["index", "search"].includes(O.q) && (P.value = !1), n.emit("vf-modal-close"), j(Q), F(Q);
      }).catch((Q) => {
        D && D(Q);
      }).finally(() => {
      });
    }), n.on("vf-download", (O) => {
      document.getElementById("download_frame").src = O, n.emit("vf-modal-close");
    }), we(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), (O, F) => (w(), I("div", ml, [
      h("div", {
        class: he(k.value ? "dark" : "")
      }, [
        h("div", {
          class: he([
            L.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md",
            "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
          ]),
          style: as(L.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: F[0] || (F[0] = (D) => x(n).emit("vf-contextmenu-hide")),
          onTouchstart: F[1] || (F[1] = (D) => x(n).emit("vf-contextmenu-hide"))
        }, [
          Me(Si, { data: S }, null, 8, ["data"]),
          Me(ll, { data: S }, null, 8, ["data"]),
          Me(ka, {
            view: M.value,
            data: S
          }, null, 8, ["view", "data"]),
          Me(Aa, { data: S }, null, 8, ["data"])
        ], 38),
        V.active ? (w(), q(Ro("v-f-modal-" + V.type), {
          key: 0,
          selection: V.data,
          current: S
        }, null, 8, ["selection", "current"])) : K("", !0),
        Me(hl, { current: S }, null, 8, ["current"]),
        vl
      ], 2)
    ]));
  }
}), Sl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), wl = { class: "fixed z-10 inset-0 overflow-hidden" }, _l = { class: "custom-popup-layout transition-all" }, xl = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, Dl = { class: "custom-layout-button-slot" }, $e = {
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
      onKeyup: o[1] || (o[1] = ot((a) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Sl,
      h("div", wl, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((a) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", _l, [
            h("div", xl, [
              Qt(s.$slots, "default")
            ]),
            h("div", Dl, [
              Qt(s.$slots, "buttons")
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
}, Ne = /* @__PURE__ */ Object.assign(Il, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var m;
    const { t: s } = z("i18n"), o = A(!1), a = A(null), n = A((m = a.value) == null ? void 0 : m.strMessage);
    zt(n, () => o.value = !1);
    const d = () => {
      e("hidden"), o.value = !0;
    };
    return (l, v) => (w(), I("div", null, [
      o.value ? K("", !0) : (w(), I("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: he(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(l.$slots, "default"),
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = A(e.selection.items), d = A(""), m = () => {
      n.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
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
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", El, [
          h("div", Tl, [
            h("div", Ll, [
              Al,
              h("h3", $l, E(x(a)("Delete files")), 1)
            ]),
            Nl
          ]),
          h("div", Ol, [
            h("h3", jl, E(x(a)("Delete files")), 1),
            h("div", Pl, [
              h("p", zl, E(x(a)("Are you sure you want to delete these files?")), 1),
              (w(!0), I(ne, null, ve(n.value, (p) => (w(), I("p", Rl, [
                p.type == "dir" ? (w(), I("svg", Bl, Hl)) : (w(), I("svg", Ul, Yl)),
                h("span", Wl, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
}, Jl = { class: "mt-2" }, ec = { class: "text-sm text-gray-500" }, tc = {
  name: "VFModalMessage"
}, rc = /* @__PURE__ */ Object.assign(tc, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = z("emitter"), { t: s } = z("i18n");
    return (o, a) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: G(() => {
        var n, d;
        return [
          h("div", Gl, [
            Xl,
            h("div", ql, [
              h("h3", Ql, E(((n = r.selection) == null ? void 0 : n.title) ?? "Title"), 1),
              h("div", Jl, [
                h("p", ec, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = A(""), d = A(""), m = () => {
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
          onClick: m,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", sc, [
          h("div", oc, [
            h("div", ic, [
              nc,
              h("h3", ac, E(x(a)("New Folder")), 1)
            ]),
            lc
          ]),
          h("div", cc, [
            h("div", uc, [
              h("p", dc, E(x(a)("Create a new folder")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => n.value = p),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, hc), [
                [it, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = A(""), d = A(""), m = () => {
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
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", gc, [
          mc,
          h("div", vc, [
            h("h3", bc, E(x(a)("New File")), 1),
            h("div", yc, [
              h("p", Sc, E(x(a)("Create a new file")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => n.value = p),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, wc), [
                [it, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
}), Rs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Bs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4wMSIgaGVpZ2h0PSIxMC4wMDkiIHZpZXdCb3g9IjAgMCAxMC4wMSAxMC4wMDkiPg0KDQo8cGF0aCBpZD0iUGF0aF8yMTQiIGRhdGEtbmFtZT0iUGF0aCAyMTQiIGQ9Ik0xMi4xNzQsMTFsMy41ODMtMy41NzVhLjgzNy44MzcsMCwxLDAtMS4xODMtMS4xODNMMTEsOS44MjQsNy40MjQsNi4yNDFBLjgzNy44MzcsMCwwLDAsNi4yNDEsNy40MjRMOS44MjQsMTEsNi4yNDEsMTQuNTc1YS44MzcuODM3LDAsMSwwLDEuMTgzLDEuMTgzTDExLDEyLjE3NWwzLjU3NSwzLjU4M2EuODM3LjgzNywwLDEsMCwxLjE4My0xLjE4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5NCAtNS45OTYpIiBmaWxsPSIjODA4ZDkzIi8+DQoNCjwvc3ZnPg==", Vs = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", Dc = { class: "flex" }, kc = ["aria-label"], Mc = { class: "ml-auto mb-2" }, Cc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Ic = { key: 1 }, Ec = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, o = A(""), a = A(""), n = A(null), d = A(!1), { apiUrl: m } = Ae(), l = A(""), v = A(!1), { t: p } = z("i18n");
    we(() => {
      Ot(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((k) => {
        o.value = k, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = o.value, d.value == !0 && Rt(() => {
        n.value.focus();
      });
    }, S = z("postData"), M = () => {
      l.value = "", v.value = !1, Ot(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((k) => {
        l.value = p("Updated."), o.value = k, e("load"), d.value = !d.value;
      }).catch((k) => {
        l.value = p(k.message), v.value = !0;
      });
    };
    return (k, P) => (w(), I(ne, null, [
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
            onClick: M,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(p)("Save")), 1)) : K("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: P[0] || (P[0] = (L) => b())
          }, E(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (w(), I("div", Ic, [
          Ee(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": P[1] || (P[1] = (L) => a.value = L),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [it, a.value]
          ])
        ])) : (w(), I("pre", Cc, E(o.value), 1)),
        l.value.length ? (w(), q(Ne, {
          key: 2,
          onHidden: P[2] || (P[2] = (L) => l.value = ""),
          error: v.value
        }, {
          default: G(() => [
            te(E(l.value), 1)
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
      Ac(r, o, s[o]);
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
function Tc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Lc(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Ac(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
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
function Oc(r, e) {
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
function jc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Zt = typeof window < "u" && typeof window.document < "u", Le = Zt ? window : {}, Dr = Zt && Le.document.documentElement ? "ontouchstart" in Le.document.documentElement : !1, kr = Zt ? "PointerEvent" in Le : !1, J = "cropper", Mr = "all", Zs = "crop", Ys = "move", Ws = "zoom", Ze = "e", Ye = "w", Qe = "s", Pe = "n", ht = "ne", ft = "nw", pt = "se", gt = "sw", or = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), de = "".concat(J, "-hidden"), Fr = "".concat(J, "-hide"), Pc = "".concat(J, "-invisible"), Pt = "".concat(J, "-modal"), ir = "".concat(J, "-move"), bt = "".concat(J, "Action"), Lt = "".concat(J, "Preview"), Cr = "crop", Fs = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Kr = "dblclick", zc = Dr ? "touchstart" : "mousedown", Rc = Dr ? "touchmove" : "mousemove", Bc = Dr ? "touchend touchcancel" : "mouseup", Gr = kr ? "pointerdown" : zc, Xr = kr ? "pointermove" : Rc, qr = kr ? "pointerup pointercancel" : Bc, Qr = "ready", Jr = "resize", es = "wheel", ur = "zoom", ts = "image/jpeg", Vc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Hc = /^data:/, Uc = /^data:image\/jpeg;base64,/, Zc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
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
}, Yc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Wc = Number.isNaN || Le.isNaN;
function Z(r) {
  return typeof r == "number" && !Wc(r);
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
var Fc = Object.prototype.hasOwnProperty;
function Je(r) {
  if (!Ke(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && Fc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ue(r) {
  return typeof r == "function";
}
var Kc = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : Kc.call(r);
}
function oe(r, e) {
  return r && ue(e) && (Array.isArray(r) || Z(r.length) ? qs(r).forEach(function(s, o) {
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
}, Gc = /\.\d*(?:0|9){12}\d*$/;
function tt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Gc.test(r) ? Math.round(r * e) / e : r;
}
var Xc = /^width|height|left|top|marginLeft|marginTop$/;
function ze(r, e) {
  var s = r.style;
  oe(e, function(o, a) {
    Xc.test(a) && Z(o) && (o = "".concat(o, "px")), s[a] = o;
  });
}
function qc(r, e) {
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
var Qc = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(Qc, "$1-$2").toLowerCase();
}
function dr(r, e) {
  return Ke(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Ir(e)));
}
function yt(r, e, s) {
  Ke(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Ir(e)), s);
}
function Jc(r, e) {
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
    r.removeAttribute("data-".concat(Ir(e)));
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
function rt(r, e, s) {
  var o;
  return ue(Event) && ue(CustomEvent) ? o = new CustomEvent(e, {
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
var Xt = Le.location, eu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var e = r.match(eu);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function is(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function mt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, a = r.translateX, n = r.translateY, d = [];
  Z(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), Z(n) && n !== 0 && d.push("translateY(".concat(n, "px)")), Z(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Z(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Z(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function tu(r) {
  var e = Hs({}, r), s = 0;
  return oe(r, function(o, a) {
    delete e[a], oe(e, function(n) {
      var d = Math.abs(o.startX - n.startX), m = Math.abs(o.startY - n.startY), l = Math.abs(o.endX - n.endX), v = Math.abs(o.endY - n.endY), p = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function At(r, e) {
  var s = r.pageX, o = r.pageY, a = {
    endX: s,
    endY: o
  };
  return e ? a : Hs({
    startX: s,
    startY: o
  }, a);
}
function ru(r) {
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
    var m = s * e;
    a === "contain" && m > o || a === "cover" && m < o ? s = o / e : o = s * e;
  } else
    n ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function su(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var a = o % 90 * Math.PI / 180, n = Math.sin(a), d = Math.cos(a), m = e * d + s * n, l = e * n + s * d;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function ou(r, e, s, o) {
  var a = e.aspectRatio, n = e.naturalWidth, d = e.naturalHeight, m = e.rotate, l = m === void 0 ? 0 : m, v = e.scaleX, p = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, M = s.aspectRatio, k = s.naturalWidth, P = s.naturalHeight, L = o.fillColor, V = L === void 0 ? "transparent" : L, j = o.imageSmoothingEnabled, T = j === void 0 ? !0 : j, O = o.imageSmoothingQuality, F = O === void 0 ? "low" : O, D = o.maxWidth, R = D === void 0 ? 1 / 0 : D, X = o.maxHeight, Q = X === void 0 ? 1 / 0 : X, se = o.minWidth, ce = se === void 0 ? 0 : se, be = o.minHeight, pe = be === void 0 ? 0 : be, ge = document.createElement("canvas"), $ = ge.getContext("2d"), B = Re({
    aspectRatio: M,
    width: R,
    height: Q
  }), N = Re({
    aspectRatio: M,
    width: ce,
    height: pe
  }, "cover"), re = Math.min(B.width, Math.max(N.width, k)), U = Math.min(B.height, Math.max(N.height, P)), _e = Re({
    aspectRatio: a,
    width: R,
    height: Q
  }), ye = Re({
    aspectRatio: a,
    width: ce,
    height: pe
  }, "cover"), xt = Math.min(_e.width, Math.max(ye.width, n)), Dt = Math.min(_e.height, Math.max(ye.height, d)), Yt = [-xt / 2, -Dt / 2, xt, Dt];
  return ge.width = tt(re), ge.height = tt(U), $.fillStyle = V, $.fillRect(0, 0, re, U), $.save(), $.translate(re / 2, U / 2), $.rotate(l * Math.PI / 180), $.scale(p, S), $.imageSmoothingEnabled = T, $.imageSmoothingQuality = F, $.drawImage.apply($, [r].concat(Us(Yt.map(function(kt) {
    return Math.floor(tt(kt));
  })))), $.restore(), ge;
}
var to = String.fromCharCode;
function iu(r, e, s) {
  var o = "";
  s += e;
  for (var a = e; a < s; a += 1)
    o += to(r.getUint8(a));
  return o;
}
var nu = /^data:.*,/;
function au(r) {
  var e = r.replace(nu, ""), s = atob(e), o = new ArrayBuffer(s.length), a = new Uint8Array(o);
  return oe(a, function(n, d) {
    a[d] = s.charCodeAt(d);
  }), o;
}
function lu(r, e) {
  for (var s = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(to.apply(null, qs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function cu(r) {
  var e = new DataView(r), s;
  try {
    var o, a, n;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, m = 2; m + 1 < d; ) {
        if (e.getUint8(m) === 255 && e.getUint8(m + 1) === 225) {
          a = m;
          break;
        }
        m += 1;
      }
    if (a) {
      var l = a + 4, v = a + 10;
      if (iu(e, l, 4) === "Exif") {
        var p = e.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (n = v + b);
        }
      }
    }
    if (n) {
      var S = e.getUint16(n, o), M, k;
      for (k = 0; k < S; k += 1)
        if (M = n + k * 12 + 2, e.getUint16(M, o) === 274) {
          M += 8, s = e.getUint16(M, o), e.setUint16(M, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function uu(r) {
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
var du = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, a = this.cropper, n = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    le(a, de), Te(e, de);
    var m = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Gs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = m, ze(a, {
      width: m.width,
      height: m.height
    }), le(e, de), Te(a, de);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, n = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, m = n / d, l = e.width, v = e.height;
    e.height * m > e.width ? o === 3 ? l = e.height * m : v = e.width / m : o === 3 ? v = e.width / m : l = e.height * m;
    var p = {
      aspectRatio: m,
      naturalWidth: n,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (e.width - p.width) / 2, p.top = (e.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = ee({}, p);
  },
  limitCanvas: function(e, s) {
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, m = o.viewMode, l = n.aspectRatio, v = this.cropped && d;
    if (e) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (p = Math.max(p, a.width), b = Math.max(b, a.height), m === 3 && (b * l > p ? p = b * l : b = p / l)) : m > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * l > p ? p = b * l : b = p / l));
      var S = Re({
        aspectRatio: l,
        width: p,
        height: b
      });
      p = S.width, b = S.height, n.minWidth = p, n.minHeight = b, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var M = a.width - n.width, k = a.height - n.height;
        n.minLeft = Math.min(0, M), n.minTop = Math.min(0, k), n.maxLeft = Math.max(0, M), n.maxTop = Math.max(0, k), v && this.limited && (n.minLeft = Math.min(d.left, d.left + (d.width - n.width)), n.minTop = Math.min(d.top, d.top + (d.height - n.height)), n.maxLeft = d.left, n.maxTop = d.top, m === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, M), n.maxLeft = Math.max(0, M)), n.height >= a.height && (n.minTop = Math.min(0, k), n.maxTop = Math.max(0, k))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, a = this.imageData;
    if (s) {
      var n = su({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = n.width, m = n.height, l = o.width * (d / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, ze(this.canvas, ee({
      width: o.width,
      height: o.height
    }, mt({
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
    }, mt(ee({
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
    var o = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (e) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, S = m ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      v = Math.min(v, a.width), p = Math.min(p, a.height), l && (v && p ? p * l > v ? p = v / l : v = p * l : v ? p = v / l : p && (v = p * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, n.left), d.minTop = Math.max(0, n.top), d.maxLeft = Math.min(a.width, n.left + n.width) - d.width, d.maxTop = Math.min(a.height, n.top + n.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && yt(this.face, bt, o.width >= s.width && o.height >= s.height ? Ys : Mr), ze(this.cropBox, ee({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, nr, this.getData());
  }
}, hu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, a = s ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = n, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = e.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, oe(m, function(l) {
        var v = document.createElement("img");
        yt(l, Lt, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = n, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    oe(this.previews, function(e) {
      var s = dr(e, Lt);
      ze(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, Jc(e, Lt);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, d = e.width, m = e.height, l = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (ze(this.viewBoxImage, ee({
      width: d,
      height: m
    }, mt(ee({
      translateX: -l,
      translateY: -v
    }, e)))), oe(this.previews, function(p) {
      var b = dr(p, Lt), S = b.width, M = b.height, k = S, P = M, L = 1;
      a && (L = S / a, P = n * L), n && P > M && (L = M / n, k = a * L, P = M), ze(p, {
        width: k,
        height: P
      }), ze(p.getElementsByTagName("img")[0], ee({
        width: d * L,
        height: m * L
      }, mt(ee({
        translateX: -l * L,
        translateY: -v * L
      }, e))));
    }));
  }
}, fu = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && Se(e, cr, s.cropstart), ue(s.cropmove) && Se(e, lr, s.cropmove), ue(s.cropend) && Se(e, ar, s.cropend), ue(s.crop) && Se(e, nr, s.crop), ue(s.zoom) && Se(e, ur, s.zoom), Se(o, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && Se(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Se(o, Kr, this.onDblclick = this.dblclick.bind(this)), Se(e.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), Se(e.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && Se(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && ke(e, cr, s.cropstart), ue(s.cropmove) && ke(e, lr, s.cropmove), ue(s.cropend) && ke(e, ar, s.cropend), ue(s.crop) && ke(e, nr, s.crop), ue(s.zoom) && ke(e, ur, s.zoom), ke(o, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && ke(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && ke(o, Kr, this.onDblclick), ke(e.ownerDocument, Xr, this.onCropMove), ke(e.ownerDocument, qr, this.onCropEnd), s.responsive && ke(window, Jr, this.onResize);
  }
}, pu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, a = s.offsetWidth / o.width, n = s.offsetHeight / o.height, d = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (d !== 1) {
        var m, l;
        e.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(oe(m, function(v, p) {
          m[p] = v * d;
        })), this.setCropBoxData(oe(l, function(v, p) {
          l[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(qc(this.dragBox, or) ? Fs : Cr);
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
      e.changedTouches ? oe(e.changedTouches, function(m) {
        n[m.identifier] = At(m);
      }) : n[e.pointerId || 0] = At(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? d = Ws : d = dr(e.target, bt), Vc.test(d) && rt(this.element, cr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Zs && (this.cropping = !0, le(this.dragBox, Pt)));
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
        ee(o[a.identifier] || {}, At(a, !0));
      }) : ee(o[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? oe(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, Pt, this.cropped && this.options.modal)), rt(this.element, ar, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, gu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = n.left, p = n.top, b = n.width, S = n.height, M = v + b, k = p + S, P = 0, L = 0, V = a.width, j = a.height, T = !0, O;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && (P = n.minLeft, L = n.minTop, V = P + Math.min(a.width, o.width, o.left + o.width), j = L + Math.min(a.height, o.height, o.top + o.height));
    var F = d[Object.keys(d)[0]], D = {
      x: F.endX - F.startX,
      y: F.endY - F.startY
    }, R = function(Q) {
      switch (Q) {
        case Ze:
          M + D.x > V && (D.x = V - M);
          break;
        case Ye:
          v + D.x < P && (D.x = P - v);
          break;
        case Pe:
          p + D.y < L && (D.y = L - p);
          break;
        case Qe:
          k + D.y > j && (D.y = j - k);
          break;
      }
    };
    switch (m) {
      case Mr:
        v += D.x, p += D.y;
        break;
      case Ze:
        if (D.x >= 0 && (M >= V || l && (p <= L || k >= j))) {
          T = !1;
          break;
        }
        R(Ze), b += D.x, b < 0 && (m = Ye, b = -b, v -= b), l && (S = b / l, p += (n.height - S) / 2);
        break;
      case Pe:
        if (D.y <= 0 && (p <= L || l && (v <= P || M >= V))) {
          T = !1;
          break;
        }
        R(Pe), S -= D.y, p += D.y, S < 0 && (m = Qe, S = -S, p -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case Ye:
        if (D.x <= 0 && (v <= P || l && (p <= L || k >= j))) {
          T = !1;
          break;
        }
        R(Ye), b -= D.x, v += D.x, b < 0 && (m = Ze, b = -b, v -= b), l && (S = b / l, p += (n.height - S) / 2);
        break;
      case Qe:
        if (D.y >= 0 && (k >= j || l && (v <= P || M >= V))) {
          T = !1;
          break;
        }
        R(Qe), S += D.y, S < 0 && (m = Pe, S = -S, p -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case ht:
        if (l) {
          if (D.y <= 0 && (p <= L || M >= V)) {
            T = !1;
            break;
          }
          R(Pe), S -= D.y, p += D.y, b = S * l;
        } else
          R(Pe), R(Ze), D.x >= 0 ? M < V ? b += D.x : D.y <= 0 && p <= L && (T = !1) : b += D.x, D.y <= 0 ? p > L && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = gt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = ft, b = -b, v -= b) : S < 0 && (m = pt, S = -S, p -= S);
        break;
      case ft:
        if (l) {
          if (D.y <= 0 && (p <= L || v <= P)) {
            T = !1;
            break;
          }
          R(Pe), S -= D.y, p += D.y, b = S * l, v += n.width - b;
        } else
          R(Pe), R(Ye), D.x <= 0 ? v > P ? (b -= D.x, v += D.x) : D.y <= 0 && p <= L && (T = !1) : (b -= D.x, v += D.x), D.y <= 0 ? p > L && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = pt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = ht, b = -b, v -= b) : S < 0 && (m = gt, S = -S, p -= S);
        break;
      case gt:
        if (l) {
          if (D.x <= 0 && (v <= P || k >= j)) {
            T = !1;
            break;
          }
          R(Ye), b -= D.x, v += D.x, S = b / l;
        } else
          R(Qe), R(Ye), D.x <= 0 ? v > P ? (b -= D.x, v += D.x) : D.y >= 0 && k >= j && (T = !1) : (b -= D.x, v += D.x), D.y >= 0 ? k < j && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = ht, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = pt, b = -b, v -= b) : S < 0 && (m = ft, S = -S, p -= S);
        break;
      case pt:
        if (l) {
          if (D.x >= 0 && (M >= V || k >= j)) {
            T = !1;
            break;
          }
          R(Ze), b += D.x, S = b / l;
        } else
          R(Qe), R(Ze), D.x >= 0 ? M < V ? b += D.x : D.y >= 0 && k >= j && (T = !1) : b += D.x, D.y >= 0 ? k < j && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = ft, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = gt, b = -b, v -= b) : S < 0 && (m = ht, S = -S, p -= S);
        break;
      case Ys:
        this.move(D.x, D.y), T = !1;
        break;
      case Ws:
        this.zoom(tu(d), e), T = !1;
        break;
      case Zs:
        if (!D.x || !D.y) {
          T = !1;
          break;
        }
        O = eo(this.cropper), v = F.startX - O.left, p = F.startY - O.top, b = n.minWidth, S = n.minHeight, D.x > 0 ? m = D.y > 0 ? pt : ht : D.x < 0 && (v -= b, m = D.y > 0 ? gt : ft), D.y < 0 && (p -= S), this.cropped || (Te(this.cropBox, de), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    T && (n.width = b, n.height = S, n.left = v, n.top = p, this.action = m, this.renderCropBox()), oe(d, function(X) {
      X.startX = X.endX, X.startY = X.endY;
    });
  }
}, mu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && le(this.dragBox, Pt), Te(this.cropBox, de), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Te(this.dragBox, Pt), le(this.cropBox, de)), this;
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
    var a = this.options, n = this.canvasData, d = n.width, m = n.height, l = n.naturalWidth, v = n.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var p = l * e, b = v * e;
      if (rt(this.element, ur, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, M = eo(this.cropper), k = S && Object.keys(S).length ? ru(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (p - d) * ((k.pageX - M.left - n.left) / d), n.top -= (b - m) * ((k.pageY - M.top - n.top) / m);
      } else
        Je(s) && Z(s.x) && Z(s.y) ? (n.left -= (p - d) * ((s.x - n.left) / d), n.top -= (b - m) * ((s.y - n.top) / m)) : (n.left -= (p - d) / 2, n.top -= (b - m) / 2);
      n.width = p, n.height = b, this.renderCanvas(!0);
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
      var m = o.width / o.naturalWidth;
      if (oe(d, function(p, b) {
        d[b] = p / m;
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
      var m = o.width / o.naturalWidth;
      Z(e.x) && (n.left = e.x * m + a.left), Z(e.y) && (n.top = e.y * m + a.top), Z(e.width) && (n.width = e.width * m), Z(e.height) && (n.height = e.height * m), this.setCropBoxData(n);
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
    var s = this.canvasData, o = ou(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, d = a.y, m = a.width, l = a.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (n *= v, d *= v, m *= v, l *= v);
    var p = m / l, b = Re({
      aspectRatio: p,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Re({
      aspectRatio: p,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), M = Re({
      aspectRatio: p,
      width: e.width || (v !== 1 ? o.width : m),
      height: e.height || (v !== 1 ? o.height : l)
    }), k = M.width, P = M.height;
    k = Math.min(b.width, Math.max(S.width, k)), P = Math.min(b.height, Math.max(S.height, P));
    var L = document.createElement("canvas"), V = L.getContext("2d");
    L.width = tt(k), L.height = tt(P), V.fillStyle = e.fillColor || "transparent", V.fillRect(0, 0, k, P);
    var j = e.imageSmoothingEnabled, T = j === void 0 ? !0 : j, O = e.imageSmoothingQuality;
    V.imageSmoothingEnabled = T, O && (V.imageSmoothingQuality = O);
    var F = o.width, D = o.height, R = n, X = d, Q, se, ce, be, pe, ge;
    R <= -m || R > F ? (R = 0, Q = 0, ce = 0, pe = 0) : R <= 0 ? (ce = -R, R = 0, Q = Math.min(F, m + R), pe = Q) : R <= F && (ce = 0, Q = Math.min(m, F - R), pe = Q), Q <= 0 || X <= -l || X > D ? (X = 0, se = 0, be = 0, ge = 0) : X <= 0 ? (be = -X, X = 0, se = Math.min(D, l + X), ge = se) : X <= D && (be = 0, se = Math.min(l, D - X), ge = se);
    var $ = [R, X, Q, se];
    if (pe > 0 && ge > 0) {
      var B = k / m;
      $.push(ce * B, be * B, pe * B, ge * B);
    }
    return V.drawImage.apply(V, [o].concat(Us($.map(function(N) {
      return Math.floor(tt(N));
    })))), L;
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
      var n = e === Cr, d = s.movable && e === Fs;
      e = n || d ? e : Ks, s.dragMode = e, yt(o, bt, e), et(o, or, n), et(o, ir, d), s.cropBoxMovable || (yt(a, bt, e), et(a, or, n), et(a, ir, d));
    }
    return this;
  }
}, vu = Le.Cropper, ro = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Tc(this, r), !e || !Zc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = ee({}, rs, Je(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Lc(r, [{
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
        if (Hc.test(s)) {
          Uc.test(s) ? this.read(au(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
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
      var o = this.options, a = this.imageData, n = cu(s), d = 0, m = 1, l = 1;
      if (n > 1) {
        this.url = lu(s, ts);
        var v = uu(n);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (a.rotate = d), o.scalable && (a.scaleX = m, a.scaleY = l), this.clone();
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
      var a = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent), n = function(v, p) {
        ee(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = ee({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
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
        d.innerHTML = Yc;
        var m = d.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), p = m.querySelector(".".concat(J, "-crop-box")), b = p.querySelector(".".concat(J, "-face"));
        this.container = n, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = p, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), le(s, de), n.insertBefore(m, s.nextSibling), Te(a, Fr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, le(p, de), o.guides || le(p.getElementsByClassName("".concat(J, "-dashed")), de), o.center || le(p.getElementsByClassName("".concat(J, "-center")), de), o.background && le(m, "".concat(J, "-bg")), o.highlight || le(b, Pc), o.cropBoxMovable && (le(b, ir), yt(b, bt, Mr)), o.cropBoxResizable || (le(p.getElementsByClassName("".concat(J, "-line")), de), le(p.getElementsByClassName("".concat(J, "-point")), de)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ue(o.ready) && Se(s, Qr, o.ready, {
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
        s && s.removeChild(this.cropper), Te(this.element, de);
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
      ee(rs, Je(s) && s);
    }
  }]), r;
}();
ee(ro.prototype, du, hu, fu, pu, gu, mu);
const bu = { class: "flex" }, yu = ["aria-label"], Su = { class: "ml-auto mb-2" }, wu = { class: "w-full flex justify-center" }, _u = ["src"], xu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: o } = z("i18n"), { apiUrl: a } = Ae(), n = A(null), d = A(null), m = A(!1), l = A(""), v = A(!1), p = () => {
      m.value = !m.value, m.value ? d.value = new ro(n.value, {
        crop(M) {
        }
      }) : d.value.destroy();
    }, b = z("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((M) => {
        l.value = "", v.value = !1, Ot(a.value, {
          method: "POST",
          params: Object.assign(b, {
            q: "upload",
            adapter: s.selection.adapter,
            path: s.selection.item.path,
            file: M
          }),
          name: s.selection.item.basename,
          json: !1
        }).then((k) => {
          l.value = o("Updated."), n.value.src = er(
            s.selection.adapter,
            s.selection.item.path
          ), p(), e("load");
        }).catch((k) => {
          l.value = o(k.message), v.value = !0;
        });
      });
    };
    return we(() => {
      e("load");
    }), (M, k) => (w(), I(ne, null, [
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
          }, E(x(o)("Crop")), 1)) : K("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: k[0] || (k[0] = (P) => p())
          }, E(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      h("div", wu, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(er)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, _u)
      ]),
      l.value.length ? (w(), q(Ne, {
        key: 0,
        onHidden: k[1] || (k[1] = (P) => l.value = ""),
        error: v.value
      }, {
        default: G(() => [
          te(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, Du = { class: "flex" }, ku = ["aria-label"], Mu = /* @__PURE__ */ h("div", null, null, -1), Cu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return we(() => {
      e("load");
    }), (s, o) => (w(), I(ne, null, [
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
      }, E(r.selection.item.basename), 9, Iu),
      h("div", null, [
        h("video", Eu, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Tu),
          te(" Your browser does not support the video tag. ")
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
      }, E(r.selection.item.basename), 9, Au),
      h("div", null, [
        h("audio", $u, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Nu),
          te(" Your browser does not support the audio element. ")
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
      }, E(r.selection.item.basename), 9, ju),
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
], -1), Xu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, qu = { class: "font-bold pl-2" }, Qu = { class: "font-bold pl-2" }, Ju = { class: "search-terms-div-preview bg-white dark:bg-gray-800" }, ed = /* @__PURE__ */ h("div", null, [
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
], -1), td = /* @__PURE__ */ h("hr", null, null, -1), rd = /* @__PURE__ */ h("div", null, [
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
], -1), nd = { class: "bg-white custom-file-picker-action" }, ad = {
  name: "VFModalPreview"
}, ld = /* @__PURE__ */ Object.assign(ad, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Ae(), o = z("emitter"), { t: a } = z("i18n"), n = A(!1), d = (S) => n.value = S;
    let m = A([]);
    we(() => {
      p();
    });
    const l = (S) => (e.selection.item.mime_type ?? "").startsWith(S), v = () => {
      const S = s.value + "?" + Ge({
        q: "download",
        adapter: e.selection.adapter,
        path: e.selection.item.path
      });
      o.emit("vf-download", S);
    };
    function p() {
      let S = document.querySelector("#search-terms-file-picker");
      S.addEventListener("keypress", (M) => {
        M.key === "Enter" && (m.value.push({
          tag_id: m.value.length + 1,
          tag_name: M.target.value
        }), S.value = "");
      });
    }
    function b(S) {
      const M = m.value.findIndex((k) => k.tag_id === S);
      m.value.splice(M, 1);
    }
    return (S, M) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", Ju, [
          ed,
          td,
          rd,
          h("div", sd, [
            (w(!0), I(ne, null, ve(x(m), (k) => (w(), I("span", {
              key: k.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (P) => b(k.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, od),
              h("p", null, E(k.tag_name), 1)
            ]))), 128))
          ])
        ]),
        id,
        h("div", nd, [
          h("button", {
            type: "button",
            onClick: M[6] || (M[6] = (k) => x(o).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(a)("Close")), 1),
          h("button", {
            type: "button",
            onClick: M[7] || (M[7] = (k) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(a)("Download")), 1)
        ])
      ]),
      default: G(() => [
        h("div", Bu, [
          h("div", Vu, [
            h("div", Hu, [
              Uu,
              h("h3", Zu, E(x(a)("Edit")), 1)
            ]),
            Yu
          ]),
          h("div", Wu, [
            h("div", null, [
              l("text") ? (w(), q(Ec, {
                key: 0,
                selection: r.selection,
                onLoad: M[0] || (M[0] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), q(xu, {
                key: 1,
                selection: r.selection,
                onLoad: M[1] || (M[1] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), q(Lu, {
                key: 2,
                selection: r.selection,
                onLoad: M[2] || (M[2] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), q(Ou, {
                key: 3,
                selection: r.selection,
                onLoad: M[3] || (M[3] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), q(Ru, {
                key: 4,
                selection: r.selection,
                onLoad: M[4] || (M[4] = (k) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(Cu, {
                key: 5,
                selection: r.selection,
                onLoad: M[5] || (M[5] = (k) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Fu, [
              n.value == !1 ? (w(), I("div", Ku, [
                Gu,
                h("span", null, E(x(a)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        h("div", Xu, [
          h("div", null, [
            h("span", qu, E(x(a)("File Size")) + ": ", 1),
            te(E(x(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Qu, E(x(a)("Last Modified")) + ": ", 1),
            te(" " + E(x(us)(r.selection.item.last_modified)), 1)
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = A(e.selection.items[0]), d = A(e.selection.items[0].basename), m = A(""), l = () => {
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
          m.value = a(v.message);
        }
      });
    };
    return (v, p) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", cd, [
          h("div", ud, [
            h("div", dd, [
              hd,
              h("h3", fd, E(x(a)("Rename")), 1)
            ]),
            pd
          ]),
          h("div", gd, [
            h("div", md, [
              h("p", vd, [
                n.value.type == "dir" ? (w(), I("svg", bd, Sd)) : (w(), I("svg", wd, xd)),
                h("span", Dd, E(n.value.basename), 1)
              ]),
              Ee(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, kd), [
                [it, d.value]
              ]),
              m.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(m.value), 1)
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
    /* @__PURE__ */ te(" Search Terms")
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
], -1), Wd = { class: "bg-white custom-file-picker-action" }, Fd = ["disabled", "onClick"], Kd = {
  name: "VFModalUpload"
}, Gd = /* @__PURE__ */ Object.assign(Kd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = z("emitter"), { apiUrl: o } = Ae(), { t: a } = z("i18n"), n = z("maxFileSize"), d = A(null), m = A(null), l = A(null), v = A([]), p = A("");
    let b = A([]);
    const S = A(!0), M = () => {
      p.value = "", d.value.start();
    }, k = z("postData");
    we(() => {
      d.value = new dt.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ge(
          Object.assign(k, {
            q: "upload",
            adapter: e.current.adapter,
            path: e.current.dirname
          })
        ),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Nt && { "X-CSRF-Token": Nt }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(V, j) {
            S.value = !1, dt.each(j, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: dt.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(V, j) {
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
          Error: function(V, j) {
            d.value.stop(), j.code == dt.HTTP_ERROR ? p.value = a(JSON.parse(j.response).message) : j.code == dt.FILE_SIZE_ERROR ? p.value = a(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [n]
            ) : p.value = a(j.message);
          }
        }
      }), d.value.init(), P();
    });
    function P() {
      let V = document.querySelector("#search-terms-file-picker");
      V.addEventListener("keypress", (j) => {
        j.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: j.target.value
        }), V.value = "");
      });
    }
    function L(V) {
      const j = b.value.findIndex((T) => T.tag_id === V);
      b.value.splice(j, 1);
    }
    return (V, j) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", Rd, [
          Bd,
          Vd,
          Hd,
          h("div", Ud, [
            (w(!0), I(ne, null, ve(x(b), (T) => (w(), I("span", {
              key: T.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (O) => L(T.tag_id),
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
            onClick: We(M, ["prevent"]),
            type: "button",
            class: he([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, E(x(a)("Upload")), 11, Fd),
          h("button", {
            type: "button",
            onClick: j[1] || (j[1] = (T) => x(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(a)("Cancel")), 1)
        ])
      ]),
      default: G(() => [
        h("div", Id, [
          h("div", Ed, [
            h("div", Td, [
              Ld,
              h("h3", Ad, E(x(a)("Upload files")), 1)
            ]),
            $d
          ]),
          h("div", Nd, [
            h("div", Od, [
              h("div", jd, [
                (w(!0), I(ne, null, ve(v.value, (T) => (w(), I("div", null, [
                  h("div", {
                    id: T.id
                  }, [
                    te(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    h("b", null, E(T.percent), 1)
                  ], 8, Pd)
                ]))), 256)),
                v.value.length ? K("", !0) : (w(), I("div", zd, E(x(a)("No files selected!")), 1))
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
                }, E(x(a)("Select Files")), 513)
              ], 512),
              p.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: j[0] || (j[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(p.value), 1)
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
], -1), eh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, th = /* @__PURE__ */ h("hr", null, null, -1), rh = { class: "mt-3 text-center w-full p-4 h-full" }, sh = { class: "mt-2 create-folder-form" }, oh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ih = {
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n"), n = A(""), d = A(""), m = A(e.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
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
    return (v, p) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Xd, [
          h("div", qd, [
            h("div", Qd, [
              Jd,
              h("h3", eh, E(x(a)("Archive the files")), 1)
            ]),
            th
          ]),
          h("div", rh, [
            h("div", sh, [
              (w(!0), I(ne, null, ve(m.value, (b) => (w(), I("p", oh, [
                b.type == "dir" ? (w(), I("svg", ih, ah)) : (w(), I("svg", lh, uh)),
                h("span", dh, E(b.basename), 1)
              ]))), 256)),
              Ee(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, hh), [
                [it, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
    const e = r, s = z("emitter");
    z("storage");
    const o = z("adapter"), { t: a } = z("i18n");
    A("");
    const n = A(e.selection.items[0]), d = A(""), m = A([]), l = () => {
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
    return (v, p) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", gh, [
          mh,
          h("div", vh, [
            h("h3", bh, E(x(a)("Unarchive")), 1),
            h("div", yh, [
              (w(!0), I(ne, null, ve(m.value, (b) => (w(), I("p", Sh, [
                b.type == "dir" ? (w(), I("svg", wh, xh)) : (w(), I("svg", Dh, Mh)),
                h("span", Ch, E(b.basename), 1)
              ]))), 256)),
              h("p", Ih, E(x(a)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
    const e = r, s = z("emitter"), { t: o } = z("i18n");
    z("storage");
    const a = z("adapter"), n = A(e.selection.items.from), d = A(""), m = () => {
      n.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: e.current.dirname,
          items: JSON.stringify(n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: e.current.dirname,
            to: e.selection.items.to.path,
            files: n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
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
      default: G(() => [
        h("div", Lh, [
          Ah,
          h("div", $h, [
            h("h3", Nh, E(x(o)("Move files")), 1),
            h("div", Oh, [
              (w(!0), I(ne, null, ve(n.value, (p) => (w(), I("p", jh, [
                p.type == "dir" ? (w(), I("svg", Ph, Rh)) : (w(), I("svg", Bh, Hh)),
                h("span", Uh, E(p.path), 1)
              ]))), 256)),
              h("p", Zh, E(x(o)("Are you sure you want to move these files?")), 1),
              h("p", Yh, [
                Wh,
                h("span", Fh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(E(d.value), 1)
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
}, Symbol.toStringTag, { value: "Module" })), qt = {
  VueFinder: yl,
  ...Xh
};
const Jh = {
  install(r) {
    for (const e in qt)
      if (qt.hasOwnProperty(e)) {
        const s = qt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Jh as default
};
