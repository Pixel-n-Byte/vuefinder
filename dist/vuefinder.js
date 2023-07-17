import { ref as A, watch as zt, inject as j, openBlock as w, createElementBlock as I, createElementVNode as h, unref as x, normalizeClass as fe, createCommentVNode as F, createTextVNode as ee, toDisplayString as E, createVNode as Ce, TransitionGroup as Ni, withCtx as K, Fragment as oe, renderList as be, reactive as $t, onMounted as _e, onUpdated as Oi, withDirectives as Te, vShow as Et, withModifiers as Fe, nextTick as Rt, customRef as ji, withKeys as ot, isRef as Pi, vModelText as nt, normalizeStyle as as, provide as Ue, createBlock as X, resolveDynamicComponent as zi, renderSlot as Qt } from "vue";
import ht from "plupload";
var ns;
const Nt = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), Ot = (r, { method: e = "get", params: s = {}, json: i = !0, signal: n = null }) => {
  const a = { method: e };
  if (a.signal = n, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    a.headers = {}, Nt && (a.headers["X-CSRF-Token"] = Nt);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    a.body = d;
  }
  return fetch(r, a).then((d) => d.ok ? i ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Ri(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(e, s) {
    var i = r.get(e);
    i ? i.push(s) : r.set(e, [s]);
  }, off: function(e, s) {
    var i = r.get(e);
    i && (s ? i.splice(i.indexOf(s) >>> 0, 1) : r.set(e, []));
  }, emit: function(e, s) {
    var i = r.get(e);
    i && i.slice().map(function(n) {
      n(s);
    }), (i = r.get("*")) && i.slice().map(function(n) {
      n(e, s);
    });
  } };
}
function Jt(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = A(JSON.parse(e));
  zt(s, i);
  function i() {
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
function $e() {
  function r(e) {
    zr.value = e;
  }
  return { apiUrl: zr, setApiUrl: r };
}
const Bi = { class: "border-neutral-300 flex justify-end items-center py-1 text-sm relative" }, Vi = {
  key: 0,
  class: "flex text-center"
}, Hi = ["aria-label"], Zi = /* @__PURE__ */ h("svg", {
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
], -1), Ui = [
  Zi
], Yi = ["aria-label"], Wi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Fi = [
  Wi
], Ki = ["aria-label"], Gi = /* @__PURE__ */ h("a", {
  type: "button",
  class: "custom-upload-button"
}, "Upload", -1), Xi = [
  Gi
], qi = ["aria-label"], Qi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Ji = [
  Qi
], eo = {
  key: 1,
  class: "flex text-center"
}, to = { class: "pl-2" }, ro = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, so = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, io = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), oo = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), no = [
  io,
  oo
], ao = { class: "flex text-center items-center justify-end" }, lo = ["aria-label"], co = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), uo = [
  co
], ho = ["aria-label"], fo = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, po = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, go = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, mo = ["aria-label"], vo = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, bo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, yo = {
  name: "VFToolbar"
}, So = /* @__PURE__ */ Object.assign(yo, {
  props: {
    data: Object
  },
  setup(r) {
    const e = j("emitter"), { getStore: s, setStore: i } = j("storage"), { t: n } = j("i18n"), a = A(s("viewport", "grid")), d = A([]), m = A(s("full-screen", !1)), l = A("");
    e.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = j("loadingState"), p = () => v.value, b = () => {
      m.value = !m.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), e.on("vf-view-toggle", (S) => {
      i("viewport", S), a.value = S;
    }), (S, k) => (w(), I("div", Bi, [
      l.value.length ? (w(), I("div", eo, [
        h("div", to, [
          ee(E(x(n)("Search results for")) + " ", 1),
          h("span", ro, E(l.value), 1)
        ]),
        p() ? (w(), I("svg", so, no)) : F("", !0)
      ])) : (w(), I("div", Vi, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: k[0] || (k[0] = (M) => x(e).emit("vf-modal-show", {
            type: "new-folder",
            items: d.value
          }))
        }, Ui, 8, Hi),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[1] || (k[1] = (M) => !d.value.length || x(e).emit("delete-button"))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: fe([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Fi, 2))
        ], 8, Yi),
        h("div", {
          class: "mx-1.5 cusom-upload-button-div absolute",
          "aria-label": x(n)("Upload"),
          "data-microtip-position": "bottom",
          onClick: k[2] || (k[2] = (M) => x(e).emit("vf-modal-show", {
            type: "upload",
            items: d.value
          }))
        }, Xi, 8, Ki),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (w(), I("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[3] || (k[3] = (M) => !d.value.length || x(e).emit("vf-modal-show", {
            type: "unarchive",
            items: d.value
          }))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: fe([
              d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ji, 2))
        ], 8, qi)) : F("", !0)
      ])),
      h("div", ao, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), I("svg", {
            onClick: k[4] || (k[4] = (M) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, uo))
        ], 8, lo),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (w(), I("svg", fo, [
            m.value ? (w(), I("path", po)) : (w(), I("path", go))
          ]))
        ], 8, ho),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: k[5] || (k[5] = (M) => l.value.length || x(e).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), I("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: fe([
              l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            a.value == "grid" ? (w(), I("path", vo)) : F("", !0),
            a.value == "list" ? (w(), I("path", bo)) : F("", !0)
          ], 2))
        ], 8, mo)
      ])
    ]));
  }
}), hr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
var wo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _o(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, e) {
  (function(s, i) {
    r.exports = i();
  })(wo, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var g, o, f, y, _ = [], C = !0, V = !1;
        try {
          if (f = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (g = f.call(t)).done) && (_.push(g.value), _.length !== u); C = !0)
              ;
        } catch (W) {
          V = !0, o = W;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (V)
              throw o;
          }
        }
        return _;
      }
    }
    function i(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(o) {
          return Object.getOwnPropertyDescriptor(c, o).enumerable;
        })), t.push.apply(t, g);
      }
      return t;
    }
    function n(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? i(Object(t), !0).forEach(function(g) {
          l(c, g, t[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(t, g));
        });
      }
      return c;
    }
    function a(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var t = 0; t < u.length; t++) {
        var g = u[t];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, O(g.key), g);
      }
    }
    function m(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = O(u), u in c ? Object.defineProperty(c, u, {
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
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, o) {
        return g.__proto__ = o, g;
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
      return S() ? k = Reflect.construct.bind() : k = function(o, f, y) {
        var _ = [null];
        _.push.apply(_, f);
        var C = Function.bind.apply(o, _), V = new C();
        return y && b(V, y.prototype), V;
      }, k.apply(null, arguments);
    }
    function M(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function N(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return N = function(g) {
        if (g === null || !M(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, o);
        }
        function o() {
          return k(g, arguments, p(this).constructor);
        }
        return o.prototype = Object.create(g.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(o, g);
      }, N(c);
    }
    function $(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return $(c);
    }
    function T(c) {
      var u = S();
      return function() {
        var g = p(c), o;
        if (u) {
          var f = p(this).constructor;
          o = Reflect.construct(g, arguments, f);
        } else
          o = g.apply(this, arguments);
        return H(this, o);
      };
    }
    function L(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, t, g) {
        var o = L(u, t);
        if (o) {
          var f = Object.getOwnPropertyDescriptor(o, t);
          return f.get ? f.get.call(arguments.length < 3 ? u : g) : f.value;
        }
      }, B.apply(this, arguments);
    }
    function G(c, u) {
      return q(c) || s(c, u) || te(c, u) || ge();
    }
    function D(c) {
      return R(c) || se(c) || te(c) || ye();
    }
    function R(c) {
      if (Array.isArray(c))
        return ue(c);
    }
    function q(c) {
      if (Array.isArray(c))
        return c;
    }
    function se(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function te(c, u) {
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
      for (var t = 0, g = new Array(u); t < u; t++)
        g[t] = c[t];
      return g;
    }
    function ye() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ge() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function me(c, u) {
      var t = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!t) {
        if (Array.isArray(c) || (t = te(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var g = 0, o = function() {
          };
          return {
            s: o,
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
            f: o
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
    function ne(c, u) {
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
    function O(c) {
      var u = ne(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var z = function(u, t, g) {
      var o = u.x, f = u.y, y = g.x, _ = g.y, C = {
        "+": {
          x: o + y,
          y: f + _
        },
        "-": {
          x: o - y,
          y: f - _
        },
        "*": {
          x: o * y,
          y: f * _
        },
        "/": {
          x: o / y,
          y: f / _
        }
      };
      return C[t];
    }, P = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, ae = function(u) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: t,
        height: t
      };
    }, Z = function(u) {
      return {
        x: u,
        y: u
      };
    }, Se = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var g = new MutationObserver(t);
      c.forEach(function(f, y) {
        g.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var o = function() {
        return pi(g, t);
      };
      return {
        observer: g,
        callback: t,
        cleanup: o
      };
    }, xe = function(c) {
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
        for (var g = arguments.length, o = new Array(g), f = 0; f < g; f++)
          o[f] = arguments[f];
        var y = function() {
          t = null, c.apply(void 0, o);
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
        var o, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (o = g[f]) === null || o === void 0 ? void 0 : o.parentNode;
        return y ? (g.push(y), f++, t(g, f)) : g;
      };
      return u([c]);
    }, si = function(c, u) {
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
      return Pe(c).forEach(function(g) {
        var o = u.getRect(g);
        t.top = Math.min(t.top, o.top), t.left = Math.min(t.left, o.left), t.bottom = Math.max(t.bottom, o.bottom), t.right = Math.max(t.right, o.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Mt = function(c) {
      return !c || c instanceof Document ? Wt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Wt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Wt().y
      };
    }, Lr = function(c) {
      var u = c.elementRect, t = c.containerRect, g = c.tolerance, o = g === void 0 ? {
        x: 0,
        y: 0
      } : g, f = [];
      return u.top - o.y < t.top && f.push("top"), u.left - o.x < t.left && f.push("left"), u.bottom + o.y > t.bottom && f.push("bottom"), u.right + o.y > t.right && f.push("right"), /** @type {DSEdges} */
      f;
    }, ii = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, oi = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, g = c.pointerPos, o = {};
      return g.x > t.x - u.x ? (o.left = t.x - u.x, o.width = g.x - t.x + u.x) : (o.left = g.x, o.width = t.x - g.x - u.x), g.y > t.y - u.y ? (o.top = t.y - u.y, o.height = g.y - t.y + u.y) : (o.top = g.y, o.height = t.y - g.y - u.y), o;
    }, Ar = function(u) {
      var t = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return t;
      if (g.transform.indexOf("3d") >= 0) {
        var o = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (o && o.length) {
          var f, y = (f = o[1]) === null || f === void 0 ? void 0 : f.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, V = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(V[4]) || 0, t.y = parseInt(V[5]) || 0;
      }
      return t;
    }, ni = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Ar(u);
      var g = {
        x: 0,
        y: 0
      }, o = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (o) {
        var f, y = (f = o[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(C[0]) || 0, g.y = parseInt(C[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ar(u) : g;
    }, ai = function(u) {
      var t = u.style, g = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!g.x && !g.x) {
        var o = window.getComputedStyle(u);
        return {
          x: parseInt(o.left) || 0,
          y: parseInt(o.top) || 0
        };
      }
      return g;
    }, li = function(c, u) {
      return u ? ni(c) : ai(c);
    }, ci = function(c) {
      var u = c.element, t = c.edges, g = c.elementRect, o = c.containerRect, f = c.elementPos, y = c.useTransform;
      t.includes("top") && ct(u, {
        y: f.y + o.top - g.top,
        x: f.x
      }, y), t.includes("left") && ct(u, {
        y: f.y,
        x: f.x + o.left - g.left
      }, y), t.includes("bottom") && ct(u, {
        y: f.y + o.bottom - g.bottom,
        x: f.x
      }, y), t.includes("right") && ct(u, {
        y: f.y,
        x: f.x + o.right - g.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, t = c.node, g = u.position, o = g === "absolute" || g === "relative" || g === "fixed";
      !(t instanceof Document) && !o && (t.style.position = "relative");
    }, ui = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, g = c.zoom, o = c.key, f = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, V = {
        x: 0,
        y: 0
      }, W = u ? t * 4 * g : t * g;
      return f.left.includes(o) && (V.x = y.x || -W, !u && !y.x && _ && C(["left"], t)), f.right.includes(o) && (V.x = y.x || W, !u && !y.x && _ && C(["right"], t)), f.up.includes(o) && (V.y = y.y || -W, !u && !y.y && _ && C(["top"], t)), f.down.includes(o) && (V.y = y.y || W, !u && !y.y && _ && C(["bottom"], t)), V;
    }, di = function(c) {
      var u = c.element, t = c.force, g = c.multiSelectionToggle, o = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !t || (o.has(u) ? g && o.delete(u) : o.add(u), u.classList.add(f));
    }, hi = function(c) {
      var u = c.element, t = c.force, g = c.SelectedSet, o = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !t)
        return !1;
      var y = g.has(u), _ = o.has(u);
      y && !_ ? g.delete(u) : !y && _ && g.add(u), u.classList.remove(f);
    }, lt = function(u, t, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, Y = function(u, t, g, o) {
      if (t === void 0)
        return g ? l({}, u, o) : {};
      if (t === null)
        return l({}, u, null);
      var f = !0, y = !1, _ = typeof o == "string";
      _ && (f = typeof t == "string" || t instanceof String), _ && !f && (y = !0, lt(u, "string"));
      var C = !Number.isNaN(o) && typeof o == "number";
      C && (f = !Number.isNaN(t) && typeof t == "number"), C && !f && (y = !0, lt(u, "number"));
      var V = Object.prototype.toString.call(o) === "[object Object]";
      V && (f = Object.prototype.toString.call(t) === "[object Object]"), V && !f && (y = !0, lt(u, "object"));
      var W = typeof o == "boolean";
      W && (f = typeof t == "boolean"), W && !f && (y = !0, lt(u, "boolean"));
      var le = Array.isArray(o);
      le && (f = Array.isArray(t)), le && !f && (y = !0, lt(u, "array"));
      var De = y || g;
      return u === "dragKeys" && f ? l({}, u, Object.assign(o, t)) : u === "dragKeys" && !f ? De ? l({}, u, o) : {} : (u === "dropZones" && f && new Set(t.map(function(ke) {
        return ke.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, t) : De ? l({}, u, o) : {});
    }, fi = function(c, u) {
      return n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Qe = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (t > 0) {
        var o = (c.right - c.left) * t, f = (c.bottom - c.top) * t;
        g = {
          left: c.left + o,
          right: c.right - o,
          top: c.top + f,
          bottom: c.bottom - f
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Nr = function(c) {
      var u = c.element, t = c.posDirection, g = c.containerRect, o = c.useTransform, f = li(u, o), y = z(f, "+", t);
      ct(u, y, o);
      var _ = u.getBoundingClientRect(), C = Lr({
        elementRect: _,
        containerRect: g
      });
      ci({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: g,
        elementPos: y,
        useTransform: o
      });
    }, pi = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, gi = function(c, u, t) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, o = c instanceof Document ? g || document.body : c, f = u.includes("top") && o.scrollTop > 0, y = u.includes("bottom") && o.scrollTop < o.scrollHeight, _ = u.includes("left") && o.scrollLeft > 0, C = u.includes("right") && o.scrollLeft < o.scrollWidth;
        f && (o.scrollTop -= 1 * t), y && (o.scrollTop += 1 * t), _ && (o.scrollLeft -= 1 * t), C && (o.scrollLeft += 1 * t);
      }
    }, ct = function(c, u, t) {
      if (t) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, mi = function(c) {
      for (var u = c.subscribe, t = c.publish, g = c.Interaction, o = c.SelectedSet, f = c.DropZones, y = {
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
              return n({}, le ? {
                dropTarget: le.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var le = G(V[C], 2), De = le[0], ke = le[1];
        ["pre", !1].forEach(function(Ie) {
          return u(Ie ? "".concat(De, ":").concat(Ie) : De, function(ie) {
            return ke.forEach(function(ve) {
              return (!ve.condition || ve.condition(ie)) && t(Ie ? "".concat(Ie).concat(ve.name) : ve.name, n(n({
                items: o.elements,
                isDragging: g.isDragging
              }, ie), ve.extraData ? ve.extraData(ie) : {}));
            });
          });
        });
      }, C = 0, V = Object.entries(y); C < V.length; C++)
        _();
    }, Pe = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, vi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(o) {
          t.reset(), t._node = o, $r({
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
          t._observers = Se(t.parentNodes, kt(function(o) {
            t.DS.PubSub.publish("Area:modified:pre", {
              event: o,
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              event: o,
              item: t
            });
          }, 60));
        }), l(this, "reset", function() {
          t._computedStyle = void 0, t._rect = void 0, t._computedBorder = void 0, t._parentNodes = void 0;
        }), l(this, "stop", function() {
          t._observers.cleanup(), t.reset();
        }), l(this, "scroll", function(o, f) {
          var y = {
            scroll_directions: o,
            scroll_multiplier: f
          };
          t.DS.PubSub.publish("Area:scroll:pre", y), gi(t._node, o, f), t.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(o) {
          var f = o.settings;
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
          return this._rect ? this._rect : this._rect = si(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.HTMLNode);
        }
      }]), c;
    }(), bi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          t._dragKeys = {
            up: t.DS.stores.SettingsStore.s.dragKeys.up.map(function(o) {
              return o.toLowerCase();
            }),
            down: t.DS.stores.SettingsStore.s.dragKeys.down.map(function(o) {
              return o.toLowerCase();
            }),
            left: t.DS.stores.SettingsStore.s.dragKeys.left.map(function(o) {
              return o.toLowerCase();
            }),
            right: t.DS.stores.SettingsStore.s.dragKeys.right.map(function(o) {
              return o.toLowerCase();
            })
          }, t._dragKeysFlat = [].concat(D(t._dragKeys.up), D(t._dragKeys.down), D(t._dragKeys.left), D(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(o) {
          var f = o.event, y = o.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var V = ui({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (V = t.limitDirection(V)), t._elements.forEach(function(W) {
              return Nr({
                element: W,
                posDirection: V,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(o) {
          var f = o.event, y = o.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: f,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), l(this, "start", function(o) {
          var f = o.isDragging, y = o.isDraggingKeyboard;
          !f || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), l(this, "stop", function(o) {
          o != null && o.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), l(this, "update", function(o) {
          var f = o.isDragging, y = o.isDraggingKeyboard;
          if (!(!f || !t._elements.length || y || t.DS.continue)) {
            var _ = z(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (_ = t.limitDirection(_)), t._elements.forEach(function(C) {
              return Nr({
                element: C,
                posDirection: _,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(o) {
          var f = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, _ = {
            top: f.top - t._selectionRect.top + y.y,
            left: f.left - t._selectionRect.left + y.x,
            bottom: f.bottom - t._selectionRect.bottom + y.y,
            right: f.right - t._selectionRect.right + y.x
          };
          return o.x === 0 && o.y === 0 || (o.y < 0 && (o.y = Math.max(o.y, _.top)), o.x < 0 && (o.x = Math.max(o.x, _.left)), o.y > 0 && (o.y = Math.min(o.y, _.bottom)), o.x > 0 && (o.x = Math.min(o.x, _.right)), t._selectionRect.top += o.y, t._selectionRect.bottom += o.y, t._selectionRect.left += o.x, t._selectionRect.right += o.x), o;
        }), l(this, "handleZIndex", function(o) {
          t._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + o ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? z(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? z(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, g;
        }
      }]), c;
    }(), yi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS, o = u.id, f = u.element, y = u.droppables;
        a(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!t.isDestroyed) {
            var C = t.droppables.filter(function(V) {
              return t.DS.SelectedSet.has(V);
            });
            C.length && (C.forEach(function(V) {
              V.classList[_]("".concat(t.Settings.droppableClass)), V.classList[_]("".concat(t.Settings.droppableClass, "-").concat(t.id));
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
          var _, C, V;
          t.isDestroyed || (t._itemsDropped = D(new Set([].concat(D(t._itemsDropped), D((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return t.DS.SelectedSet.has(W);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(t.Settings.droppedTargetClass)), W.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (V = t._itemsDropped) !== null && V !== void 0 && V.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
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
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = o, this.element = f, y && (this.droppables = Pe(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = Se(this.parentNodes, kt(function() {
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
            return Qe(t.DS.SelectableSet.rects.get(g), t.rect, t.Settings.dropInsideThreshold) ? [g] : [];
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
    }(), Si = /* @__PURE__ */ m(
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
        a(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(o) {
          var f = o.dropZones;
          f && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = f.map(function(y) {
            return new yi(n({
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
        }), l(this, "_handleDrop", function(o) {
          t._zones.forEach(function(f) {
            f !== o && f.handleNoDrop();
          }), o && o.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(o, f) {
          for (var y = f.x, _ = f.y, C = 0, V = o.length; C < V; C++) {
            var W = t._zoneByElement.get(o[C]);
            if (W && Qe(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(o) {
          var f = o.isDragging;
          if (f) {
            var y = t.getTarget();
            t._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(o) {
          var f = t._zoneById.get(o);
          return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(o, ")"));
        }), l(this, "getItemsInsideById", function(o, f) {
          var y = t._zoneById.get(o);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(o, ")"));
          var _ = y.itemsInside;
          return f && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(o) {
          var f;
          if ((f = t._zones) !== null && f !== void 0 && f.length) {
            var y = (o == null ? void 0 : o.x) || t.DS.stores.PointerStore.currentVal.x, _ = (o == null ? void 0 : o.y) || t.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(o) {
          var f = o.settings;
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
    ), wi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return t.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          t.stop(), t.Settings.usePointerEvents ? t.DS.Area.HTMLNode.addEventListener("pointerdown", t.start, {
            passive: !1
          }) : t.DS.Area.HTMLNode.addEventListener("mousedown", t.start), t.DS.Area.HTMLNode.addEventListener("touchstart", t.start, {
            passive: !1
          }), t.DS.publish("Interaction:init", {});
        }), l(this, "start", function(o) {
          return t.DS.publish("Interaction:start:pre", {
            event: o,
            isDragging: t.isDragging
          });
        }), l(this, "_start", function(o) {
          o.type === "touchstart" && o.preventDefault(), t._canInteract(o) && (t.isInteracting = !0, t.isDragging = t.isDragEvent(o), t.DS.publish("Interaction:start", {
            event: o,
            isDragging: t.isDragging
          }), t.Settings.usePointerEvents ? (document.addEventListener("pointerup", t.reset), document.addEventListener("pointercancel", t.reset)) : document.addEventListener("mouseup", t.reset), document.addEventListener("touchend", t.reset));
        }), l(this, "isDragEvent", function(o) {
          var f = (
            /** @type {Element} */
            o.target.closest(".".concat(t.Settings.selectableClass))
          );
          return !t.Settings.draggability || t.DS.stores.KeyStore.isMultiSelectKeyPressed(o) || !f ? !1 : (t.Settings.immediateDrag && (t.DS.SelectedSet.size ? t.DS.SelectedSet.has(f) || (t.DS.SelectedSet.clear(), t.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )) : t.DS.SelectedSet.add(
            /** @type {DSElement} */
            f
          )), !!t.DS.SelectedSet.has(f));
        }), l(this, "onClick", function(o) {
          var f = o.event;
          if (t._canInteract(f) && !(f.detail > 0)) {
            var y = t.DS, _ = y.stores, C = _.PointerStore, V = _.KeyStore, W = y.SelectableSet, le = y.SelectedSet;
            C.start(f);
            var De = (
              /** @type {any} */
              f.target
            );
            W.has(De) && (V.isMultiSelectKeyPressed(f) || le.clear(), le.toggle(De), t.reset());
          }
        }), l(this, "stop", function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.DS.Area.HTMLNode;
          t.isInteracting = !1, t.isDragging = !1, t.Settings.usePointerEvents ? (o.removeEventListener("pointerdown", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", t.reset), document.removeEventListener("pointercancel", t.reset)) : (o.removeEventListener("mousedown", t.start), document.removeEventListener("mouseup", t.reset)), o.removeEventListener("touchstart", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", t.reset);
        }), l(this, "update", function(o) {
          var f = o.event, y = o.scroll_directions, _ = o.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: t.isDragging
          });
        }), l(this, "reset", function(o) {
          return t.DS.publish("Interaction:end:pre", {
            event: o,
            isDragging: t.isDragging
          });
        }), l(this, "_reset", function(o) {
          var f = t.isDragging;
          t.stop(), t.init(), t.DS.publish("Interaction:end", {
            event: o,
            isDragging: f
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(o) {
          var f = o.settings;
          t.stop(f["area:pre"]), t.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(o) {
          var f = o.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:start:pre", function(o) {
          var f = o.event;
          return t._start(f);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(o) {
          var f = o.event;
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
    }(), _i = /* @__PURE__ */ m(
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(o, f) {
          return Array.isArray(t.subscribers[o]) || (t.subscribers[o] = []), t.subscribers[o].push(f), t.subscribers[o].length - 1;
        }), l(this, "unsubscribe", function(o, f, y) {
          y >= 0 ? t.subscribers[o].splice(y, 1) : f && (t.subscribers[o] = t.subscribers[o].filter(function(_) {
            return _ !== f;
          }));
        }), l(this, "publish", function(o, f) {
          Array.isArray(o) ? o.forEach(function(y) {
            return t._publish(y, f);
          }) : t._publish(o, f);
        }), l(this, "_publish", function(o, f) {
          var y = t.subscribers[o];
          Array.isArray(y) && (o.includes(":pre") ? t._handlePrePublish(y, f) : t._handlePublish(y, f));
        }), l(this, "_handlePublish", function(o, f) {
          for (var y = 0, _ = o.length; y < _; y++) {
            if (t.DS.stopped)
              return;
            o[y](f);
          }
        }), l(this, "_handlePrePublish", function(o, f) {
          for (var y = o.length; y--; ) {
            if (t.DS.stopped)
              return;
            o[y](f);
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
    ), xi = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = T(t);
      function t(g) {
        var o, f = g.DS;
        return a(this, t), o = u.call(this), l($(o), "_rects", void 0), l($(o), "_timeout", void 0), l($(o), "init", function() {
          return Pe(o.Settings.selectables).forEach(function(y) {
            return o.add(y);
          });
        }), l($(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l($(o), "_onClick", function(y) {
          return o.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l($(o), "_onPointer", function(y) {
          return o.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l($(o), "addAll", function(y) {
          return y.forEach(function(_) {
            return o.add(_);
          });
        }), l($(o), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return o.delete(_);
          });
        }), l($(o), "getRect", function(y) {
          return o._rects ? o.rects.get(y) : y.getBoundingClientRect();
        }), o.DS = f, o.Settings = f.stores.SettingsStore.s, o.DS.subscribe("Interaction:init", o.init), o.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          o.clear(), o.init();
        }), o.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          o.forEach(function(C) {
            C.classList.remove(_["selectableClass:pre"]), C.classList.add(_.selectableClass);
          });
        }), o;
      }
      return m(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(o) {
            if (B(p(t.prototype), "has", this).call(this, o))
              return this;
            var f = {
              items: this.elements,
              item: o
            };
            return this.DS.publish("Selectable:added:pre", f), o.classList.add(this.Settings.selectableClass), o.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? o.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : o.addEventListener("mousedown", this._onPointer), o.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && $r({
              computedStyle: window.getComputedStyle(o),
              node: o
            }), B(p(t.prototype), "add", this).call(this, o), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!B(p(t.prototype), "has", this).call(this, o))
            return !0;
          var f = {
            items: this.elements,
            item: o
          };
          return this.DS.publish("Selectable:removed:pre", f), o.classList.remove(this.Settings.selectableClass), o.classList.remove(this.Settings.hoverClass), o.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? o.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : o.removeEventListener("mousedown", this._onPointer), o.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), B(p(t.prototype), "delete", this).call(this, o), this.DS.publish("Selectable:removed", f), !0;
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
          var o = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(f) {
            return o._rects.set(f, f.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return o._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), t;
    }(/* @__PURE__ */ N(Set)), Di = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = T(t);
      function t(g) {
        var o, f = g.DS;
        return a(this, t), o = u.call(this), l($(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l($(o), "addAll", function(y) {
          return y.forEach(function(_) {
            return o.add(_);
          });
        }), l($(o), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return o.delete(_);
          });
        }), o.DS = f, o;
      }
      return m(t, [{
        key: "add",
        value: function(o) {
          if (B(p(t.prototype), "has", this).call(this, o))
            return this;
          var f = {
            items: this.elements,
            item: o
          };
          return this.DS.publish("Selected:added:pre", f), B(p(t.prototype), "add", this).call(this, o), o.classList.add(this.DS.stores.SettingsStore.s.selectedClass), o.style.zIndex = "".concat((parseInt(o.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!B(p(t.prototype), "has", this).call(this, o))
            return !0;
          var f = {
            items: this.elements,
            item: o
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = B(p(t.prototype), "delete", this).call(this, o);
          return o.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), o.style.zIndex = "".concat((parseInt(o.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", f), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(o) {
            return this.has(o) ? this.delete(o) : this.add(o), o;
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
    }(/* @__PURE__ */ N(Set)), ki = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(o) {
          var f = o.event, y = o.isDragging;
          y || (t._storePrevious(f), t._handleInsideSelection(!0, f));
        }), l(this, "update", function(o) {
          var f = o.isDragging;
          f || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(o, f) {
          var y = t.DS, _ = y.SelectableSet, C = y.SelectorArea, V = y.Selector, W = t.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && t.Settings.multiSelectToggling, le = t.Settings.selectionThreshold, De = _.rects, ke = V.rect, Ie = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ve = me(De), ut;
          try {
            for (ve.s(); !(ut = ve.n()).done; ) {
              var Ct = G(ut.value, 2), dt = Ct[0], It = Ct[1];
              C.isInside(dt, It) && (Qe(It, ke, le) ? Ie.set(dt, It) : ie.set(dt, It));
            }
          } catch (Ft) {
            ve.e(Ft);
          } finally {
            ve.f();
          }
          if (!t.DS.continue) {
            var Pr = t.filterSelected({
              select: Ie,
              unselect: ie,
              selectorRect: ke
            }), Ai = Pr.select, $i = Pr.unselect;
            Ai.forEach(function(Ft, Kt) {
              return di({
                element: Kt,
                force: o,
                multiSelectionToggle: W,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), $i.forEach(function(Ft, Kt) {
              return hi({
                element: Kt,
                force: o,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass,
                PrevSelectedSet: t._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(o) {
          var f = o.select, y = o.unselect;
          return o.selectorRect, {
            select: f,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(t) {
          var g = this.DS, o = g.stores.KeyStore, f = g.SelectedSet;
          o.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Mi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var o, f;
          t.HTMLNode && (o = t.DS.SelectorArea) !== null && o !== void 0 && o.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Yt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (f = t.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(o) {
          var f = o.isDragging;
          if (!f) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Or(t.HTMLNode, ae(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(o) {
          var f = o.isDragging;
          if (!(f || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, C = y.PointerStore, V = oi({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Or(t.HTMLNode, V), t._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(o) {
          var f = o.settings;
          t.HTMLNode.classList.remove(f["selectorClass:pre"]), t.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Ci = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(o, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[f][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var o = t.DS.Area.rect, f = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(o.top + f.top, "px"), C = "".concat(o.left + f.left, "px"), V = "".concat(o.width, "px"), W = "".concat(o.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== V && (y.width = V), y.height !== W && (y.height = W);
        }), l(this, "stop", function(o) {
          t.stopAutoScroll(), o && t.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var o = t.DS, f = o.stores.PointerStore, y = o.Area;
            t.currentEdges = Lr({
              elementRect: ae(f.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(o, f) {
          return t.DS.Area.HTMLNode.contains(o) && t.DS.stores.ScrollStore.canScroll ? !0 : Qe(t.rect, f || o.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = Dt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(o) {
          var f = o.settings;
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
            var g = this.DS.stores.PointerStore, o = t ? g.getPointerPosition(t) : g.initialVal;
            return Qe({
              left: o.x,
              top: o.y,
              right: o.x,
              bottom: o.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Ii = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", t.keydown), document.addEventListener("keyup", t.keyup), window.addEventListener("blur", t.reset);
        }), l(this, "keydown", function(o) {
          var f = o.key.toLowerCase();
          t.DS.publish("KeyStore:down:pre", {
            event: o,
            key: f
          }), t._currentValues.add(f), t.DS.publish("KeyStore:down", {
            event: o,
            key: f
          });
        }), l(this, "keyup", function(o) {
          var f = o.key.toLowerCase();
          t.DS.publish("KeyStore:up:pre", {
            event: o,
            key: f
          }), t._currentValues.delete(f), t.DS.publish("KeyStore:up", {
            event: o,
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
            var o = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
              return f.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(f) {
              return o.includes(f.toLocaleLowerCase());
            }) || t && o.some(function(f) {
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
    }(), Ei = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          t.Settings.usePointerEvents ? document.addEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", t.update), document.addEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(o) {
          return ii({
            event: t._normalizedEvent(o)
          });
        }), l(this, "update", function(o) {
          o && (t.DS.publish("PointerStore:updated:pre", {
            event: o
          }), t.currentVal = t.getPointerPosition(o), t._isMouseInteraction && t.DS.publish("PointerStore:updated", {
            event: o
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
        }), l(this, "reset", function(o) {
          o && (t.currentVal = t.lastVal = t.getPointerPosition(o), t.stop(), t.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(o) {
          var f = o.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:end", function(o) {
          var f = o.event;
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
          this._initialVal = t, this._initialValArea = t && z(t, "-", z(P(this.DS.Area.rect), "+", P(this.DS.Area.computedBorder)));
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
          this._currentVal = t, this._currentValArea = t && z(t, "-", z(P(this.DS.Area.rect), "+", P(this.DS.Area.computedBorder)));
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
          this._lastVal = t, this._lastValArea = t && z(t, "-", z(P(this.DS.Area.rect), "+", P(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Ti = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        a(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
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
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xe(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = z(this.currentVal, "-", this.initialVal), g = Z(this.DS.stores.SettingsStore.s.zoom), o = z(z(t, "*", g), "-", t);
          return {
            x: t.x + o.x,
            y: t.y + o.y
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
    }(), Li = /* @__PURE__ */ m(
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
        var t = this, g = u.DS, o = u.settings;
        a(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, _ = f.init;
          return t.DS.publish("Settings:updated:pre", n({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, _ = f.init, C = fi(y, _), V = function() {
            var ke, Ie = G(le[W], 2), ie = Ie[0], ve = Ie[1];
            ie in t._settings || Object.defineProperty(t.s, ie, {
              get: function() {
                return t._settings[ie];
              },
              set: function(dt) {
                return t.update({
                  settings: l({}, ie, dt)
                });
              }
            }), t._settings["".concat(ie, ":pre")] = t._settings[ie], t._settings[ie] = ve;
            var ut = {
              settings: (ke = {}, l(ke, ie, t._settings[ie]), l(ke, "".concat(ie, ":pre"), t._settings["".concat(ie, ":pre")]), ke)
            };
            t.DS.publish("Settings:updated", ut), t.DS.publish("Settings:updated:".concat(ie), ut);
          }, W = 0, le = Object.entries(C); W < le.length; W++)
            V();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: o,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), jr = /* @__PURE__ */ function() {
      function c(u) {
        var t = this;
        a(this, c), l(this, "continue", !1), l(this, "start", function() {
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
          var o;
          return (o = t.DropZones.getTarget(g)) === null || o === void 0 ? void 0 : o.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return t.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, o) {
          return t.DropZones.getItemsInsideById(g, o);
        }), this.PubSub = new _i({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Li({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Ei({
          DS: this
        }), this.stores.ScrollStore = new Ti({
          DS: this
        }), this.stores.KeyStore = new Ii({
          DS: this
        }), this.Area = new vi({
          DS: this
        }), this.Selector = new Mi({
          DS: this
        }), this.SelectorArea = new Ci({
          DS: this
        }), this.SelectableSet = new xi({
          DS: this
        }), this.SelectedSet = new Di({
          DS: this
        }), this.Selection = new ki({
          DS: this
        }), this.Drag = new bi({
          DS: this
        }), this.DropZones = new Si({
          DS: this
        }), this.Interaction = new wi({
          DS: this
        }), mi({
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
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            o && this.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Pe(t)), o || this.addSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Pe(t)), o && this.removeSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Pe(t).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(t, o, f) : g.addSelection(t, o, f);
          }), o && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, g, o), this.getSelection();
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
        value: function(t, g, o) {
          var f = Pe(t);
          return this.SelectableSet.addAll(f), g && this.SelectedSet.addAll(f), o && this.PubSub.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, g), this.addSelectables(t, o);
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
        value: function(t, g, o) {
          return this.SelectableSet.deleteAll(Pe(t)), g && this.removeSelection(t), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return jr.isCollision = Qe, jr;
  });
})(ls);
var xo = ls.exports;
const Do = /* @__PURE__ */ _o(xo), cs = (r, e, s, i, n) => (e = Math, s = e.log, i = 1024, n = s(r) / s(i) | 0, r / e.pow(i, n)).toFixed(0) + " " + (n ? "KMGTPEZY"[--n] + "iB" : "B"), us = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), ko = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Mo = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Co = [
  Mo
], Io = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Eo = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), To = [
  Eo
], Lo = {
  name: "VFSortIcon"
}, Tt = /* @__PURE__ */ Object.assign(Lo, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), I("div", null, [
      r.direction == "down" ? (w(), I("svg", ko, Co)) : F("", !0),
      r.direction == "up" ? (w(), I("svg", Io, To)) : F("", !0)
    ]));
  }
}), Ao = ["onClick"], $o = {
  name: "VFToast.vue"
}, No = /* @__PURE__ */ Object.assign($o, {
  setup(r) {
    const e = j("emitter"), { getStore: s } = j("storage"), i = A(s("full-screen", !1)), n = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", a = A([]), d = (l) => {
      a.value.splice(l, 1);
    }, m = (l) => {
      let v = a.value.findIndex((p) => p.id === l);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      a.value = [];
    }), e.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, a.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (w(), I("div", {
      class: fe([i.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ce(Ni, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: K(() => [
          (w(!0), I(oe, null, be(a.value, (p, b) => (w(), I("div", {
            onClick: (S) => d(b),
            key: p,
            class: fe([n(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, Ao))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Xe = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Oo } = $e(), er = (r, e) => Oo.value + "?" + Xe({ q: "preview", adapter: r, path: e }), He = typeof window < "u", ds = He && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = He && "IntersectionObserver" in window, fs = He && "classList" in document.createElement("p"), ps = He && window.devicePixelRatio > 1, jo = {
  elements_selector: ".lazy",
  container: ds || He ? document : null,
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
}, gs = (r) => Object.assign({}, jo, r), Rr = function(r, e) {
  let s;
  const i = "LazyLoad::Initialized", n = new r(e);
  try {
    s = new CustomEvent(i, { detail: { instance: n } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(i, !1, !1, { instance: n });
  }
  window.dispatchEvent(s);
}, Po = (r, e) => {
  if (e)
    if (!e.length)
      Rr(r, e);
    else
      for (let s = 0, i; i = e[s]; s += 1)
        Rr(r, i);
}, je = "src", fr = "srcset", pr = "sizes", ms = "poster", wt = "llOriginalAttrs", vs = "data", gr = "loading", bs = "loaded", ys = "applied", zo = "entered", mr = "error", Ss = "native", ws = "data-", _s = "ll-status", pe = (r, e) => r.getAttribute(ws + e), Ro = (r, e, s) => {
  var i = ws + e;
  if (s === null) {
    r.removeAttribute(i);
    return;
  }
  r.setAttribute(i, s);
}, _t = (r) => pe(r, _s), qe = (r, e) => Ro(r, _s, e), Bt = (r) => qe(r, null), vr = (r) => _t(r) === null, Bo = (r) => _t(r) === gr, Vo = (r) => _t(r) === mr, br = (r) => _t(r) === Ss, Ho = [gr, bs, ys, mr], Zo = (r) => Ho.indexOf(_t(r)) >= 0, Ze = (r, e, s, i) => {
  if (r) {
    if (i !== void 0) {
      r(e, s, i);
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
}, Ee = (r, e) => {
  if (fs) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Uo = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Yo = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Vt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Wo = (r) => {
  r.disconnect();
}, Fo = (r, e, s) => {
  e.unobserve_entered && Vt(r, s);
}, yr = (r, e) => {
  r && (r.loadingCount += e);
}, Ko = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Go = (r) => r.loadingCount > 0, Xo = (r) => r.toLoadCount > 0, ks = (r) => {
  let e = [];
  for (let s = 0, i; i = r.children[s]; s += 1)
    i.tagName === "SOURCE" && e.push(i);
  return e;
}, Sr = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  ks(s).forEach(e);
}, Ms = (r, e) => {
  ks(r).forEach(e);
}, Ht = [je], Cs = [je, ms], bt = [je, fr, pr], Is = [vs], Zt = (r) => !!r[wt], Es = (r) => r[wt], Ts = (r) => delete r[wt], it = (r, e) => {
  if (Zt(r))
    return;
  const s = {};
  e.forEach((i) => {
    s[i] = r.getAttribute(i);
  }), r[wt] = s;
}, qo = (r) => {
  Zt(r) || (r[wt] = { backgroundImage: r.style.backgroundImage });
}, Qo = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Ke = (r, e) => {
  if (!Zt(r))
    return;
  const s = Es(r);
  e.forEach((i) => {
    Qo(r, i, s[i]);
  });
}, Jo = (r) => {
  if (!Zt(r))
    return;
  const e = Es(r);
  r.style.backgroundImage = e.backgroundImage;
}, Ls = (r, e, s) => {
  at(r, e.class_applied), qe(r, ys), s && (e.unobserve_completed && Vt(r, e), Ze(e.callback_applied, r, s));
}, As = (r, e, s) => {
  at(r, e.class_loading), qe(r, gr), s && (yr(s, 1), Ze(e.callback_loading, r, s));
}, Ve = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Ve(r, pr, pe(r, e.data_sizes)), Ve(r, fr, pe(r, e.data_srcset)), Ve(r, je, pe(r, e.data_src));
}, en = (r, e) => {
  Sr(r, (s) => {
    it(s, bt), Br(s, e);
  }), it(r, bt), Br(r, e);
}, tn = (r, e) => {
  it(r, Ht), Ve(r, je, pe(r, e.data_src));
}, rn = (r, e) => {
  Ms(r, (s) => {
    it(s, Ht), Ve(s, je, pe(s, e.data_src));
  }), it(r, Cs), Ve(r, ms, pe(r, e.data_poster)), Ve(r, je, pe(r, e.data_src)), r.load();
}, sn = (r, e) => {
  it(r, Is), Ve(r, vs, pe(r, e.data_src));
}, on = (r, e, s) => {
  const i = pe(r, e.data_bg), n = pe(r, e.data_bg_hidpi), a = ps && n ? n : i;
  a && (r.style.backgroundImage = `url("${a}")`, xs(r).setAttribute(je, a), As(r, e, s));
}, nn = (r, e, s) => {
  const i = pe(r, e.data_bg_multi), n = pe(r, e.data_bg_multi_hidpi), a = ps && n ? n : i;
  a && (r.style.backgroundImage = a, Ls(r, e, s));
}, an = (r, e, s) => {
  const i = pe(r, e.data_bg_set);
  if (!i)
    return;
  const n = i.split("|");
  let a = n.map((d) => `image-set(${d})`);
  r.style.backgroundImage = a.join(), r.style.backgroundImage === "" && (a = n.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = a.join()), Ls(r, e, s);
}, $s = {
  IMG: en,
  IFRAME: tn,
  VIDEO: rn,
  OBJECT: sn
}, ln = (r, e) => {
  const s = $s[r.tagName];
  s && s(r, e);
}, cn = (r, e, s) => {
  const i = $s[r.tagName];
  i && (i(r, e), As(r, e, s));
}, un = ["IMG", "IFRAME", "VIDEO", "OBJECT"], dn = (r) => un.indexOf(r.tagName) > -1, Ns = (r, e) => {
  e && !Go(e) && !Xo(e) && Ze(r.callback_finish, e);
}, Vr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, hn = (r, e, s) => {
  r.removeEventListener(e, s);
}, wr = (r) => !!r.llEvLisnrs, fn = (r, e, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const i = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, i, e), Vr(r, "error", s);
}, tr = (r) => {
  if (!wr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const i = e[s];
    hn(r, s, i);
  }
  delete r.llEvLisnrs;
}, Os = (r, e, s) => {
  Yo(r), yr(s, -1), Ko(s), Ee(r, e.class_loading), e.unobserve_completed && Vt(r, s);
}, pn = (r, e, s, i) => {
  const n = br(e);
  Os(e, s, i), at(e, s.class_loaded), qe(e, bs), Ze(s.callback_loaded, e, i), n || Ns(s, i);
}, gn = (r, e, s, i) => {
  const n = br(e);
  Os(e, s, i), at(e, s.class_error), qe(e, mr), Ze(s.callback_error, e, i), s.restore_on_error && Ke(e, bt), n || Ns(s, i);
}, _r = (r, e, s) => {
  const i = xs(r) || r;
  if (wr(i))
    return;
  fn(i, (d) => {
    pn(d, r, e, s), tr(i);
  }, (d) => {
    gn(d, r, e, s), tr(i);
  });
}, mn = (r, e, s) => {
  Uo(r), _r(r, e, s), qo(r), on(r, e, s), nn(r, e, s), an(r, e, s);
}, vn = (r, e, s) => {
  _r(r, e, s), cn(r, e, s);
}, xr = (r, e, s) => {
  dn(r) ? vn(r, e, s) : mn(r, e, s);
}, bn = (r, e, s) => {
  r.setAttribute("loading", "lazy"), _r(r, e, s), ln(r, e), qe(r, Ss);
}, Hr = (r) => {
  r.removeAttribute(je), r.removeAttribute(fr), r.removeAttribute(pr);
}, yn = (r) => {
  Sr(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  Sr(r, (e) => {
    Ke(e, bt);
  }), Ke(r, bt);
}, Sn = (r) => {
  Ms(r, (e) => {
    Ke(e, Ht);
  }), Ke(r, Cs), r.load();
}, wn = (r) => {
  Ke(r, Ht);
}, _n = (r) => {
  Ke(r, Is);
}, xn = {
  IMG: js,
  IFRAME: wn,
  VIDEO: Sn,
  OBJECT: _n
}, Dn = (r) => {
  const e = xn[r.tagName];
  if (!e) {
    Jo(r);
    return;
  }
  e(r);
}, kn = (r, e) => {
  vr(r) || br(r) || (Ee(r, e.class_entered), Ee(r, e.class_exited), Ee(r, e.class_applied), Ee(r, e.class_loading), Ee(r, e.class_loaded), Ee(r, e.class_error));
}, Mn = (r, e) => {
  Dn(r), kn(r, e), Bt(r), Ts(r);
}, Cn = (r, e, s, i) => {
  s.cancel_on_exit && Bo(r) && r.tagName === "IMG" && (tr(r), yn(r), js(r), Ee(r, s.class_loading), yr(i, -1), Bt(r), Ze(s.callback_cancel, r, e, i));
}, In = (r, e, s, i) => {
  const n = Zo(r);
  qe(r, zo), at(r, s.class_entered), Ee(r, s.class_exited), Fo(r, s, i), Ze(s.callback_enter, r, e, i), !n && xr(r, s, i);
}, En = (r, e, s, i) => {
  vr(r) || (at(r, s.class_exited), Cn(r, e, s, i), Ze(s.callback_exit, r, e, i));
}, Tn = ["IMG", "IFRAME", "VIDEO"], Ps = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ln = (r, e, s) => {
  r.forEach((i) => {
    Tn.indexOf(i.tagName) !== -1 && bn(i, e, s);
  }), Ds(s, 0);
}, An = (r) => r.isIntersecting || r.intersectionRatio > 0, $n = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Nn = (r, e, s) => {
  r.forEach(
    (i) => An(i) ? In(i.target, i, e, s) : En(i.target, i, e, s)
  );
}, On = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, jn = (r, e) => {
  Wo(r), On(r, e);
}, Pn = (r, e) => {
  !hs || Ps(r) || (e._observer = new IntersectionObserver((s) => {
    Nn(s, r, e);
  }, $n(r)));
}, zs = (r) => Array.prototype.slice.call(r), jt = (r) => r.container.querySelectorAll(r.elements_selector), zn = (r) => zs(r).filter(vr), Rn = (r) => Vo(r), Bn = (r) => zs(r).filter(Rn), Zr = (r, e) => zn(r || jt(e)), Vn = (r, e) => {
  Bn(jt(r)).forEach((i) => {
    Ee(i, r.class_error), Bt(i);
  }), e.update();
}, Hn = (r, e) => {
  He && (e._onlineHandler = () => {
    Vn(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Zn = (r) => {
  He && window.removeEventListener("online", r._onlineHandler);
}, xt = function(r, e) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, Pn(s, this), Hn(s, this), this.update(e);
};
xt.prototype = {
  update: function(r) {
    const e = this._settings, s = Zr(r, e);
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
    this._observer && this._observer.disconnect(), Zn(this), jt(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Zr(r, e).forEach((i) => {
      Vt(i, this), xr(i, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    jt(r).forEach((e) => {
      Mn(e, r);
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
He && Po(xt, window.lazyLoadOptions);
const Un = { class: "relative flex-auto flex flex-col overflow-hidden custom-explorer" }, Yn = {
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
], ra = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, sa = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ia = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], oa = { class: "grid grid-cols-12 items-center" }, na = { class: "flex col-span-7 items-center" }, aa = {
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
], da = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ha = { class: "col-span-2 text-center" }, fa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, pa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ga = { class: "custom-grid-item-div" }, ma = {
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
    const e = r, s = j("emitter"), { setStore: i, getStore: n } = j("storage"), a = j("adapter"), d = (O) => O == null ? void 0 : O.substring(0, 3), m = (O) => O.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = A(null), v = A(null), p = A(0), b = A(null), { t: S } = j("i18n"), k = Math.floor(Math.random() * 2 ** 32), M = A(n("full-screen", !1)), N = new xt();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, M.value = !M.value, i("full-screen", M.value);
    });
    const $ = A("");
    s.on("vf-search-query", ({ newQuery: O }) => {
      $.value = O, O ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: O
        },
        onSuccess: (z) => {
          z.files.length || s.emit("vf-toast-push", {
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
    const T = () => {
      H && clearTimeout(H);
    }, L = A(!0), B = (O) => {
      O.touches.length > 1 && (L.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), L.value = !L.value);
    }, G = (O) => {
      H = setTimeout(() => {
        const z = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: O.target.getBoundingClientRect().x,
          clientY: O.target.getBoundingClientRect().y
        });
        O.target.dispatchEvent(z);
      }, 500);
    }, D = (O) => {
      O.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: e.data.adapter, path: O.path }
      })) : s.emit("vf-modal-show", {
        type: "preview",
        adapter: e.data.adapter,
        item: O
      });
    }, R = $t({ active: !1, column: "", order: "" }), q = (O = !0) => {
      let z = [...e.data.files], P = R.column, ae = R.order == "asc" ? 1 : -1;
      if (!O)
        return z;
      const Z = (Se, xe) => typeof Se == "string" && typeof xe == "string" ? Se.toLowerCase().localeCompare(xe.toLowerCase()) : Se < xe ? -1 : Se > xe ? 1 : 0;
      return R.active && (z = z.slice().sort((Se, xe) => Z(Se[P], xe[P]) * ae)), z;
    }, se = (O) => {
      R.active && R.column == O ? (R.active = R.order == "asc", R.column = O, R.order = "desc") : (R.active = !0, R.column = O, R.order = "asc");
    }, te = () => b.value.getSelection().map((O) => JSON.parse(O.dataset.item)), ue = (O, z) => {
      if (O.altKey || O.ctrlKey || O.metaKey)
        return O.preventDefault(), !1;
      O.dataTransfer.setDragImage(v.value, 0, 15), O.dataTransfer.effectAllowed = "all", O.dataTransfer.dropEffect = "copy", O.dataTransfer.setData("items", JSON.stringify(te()));
    }, ye = (O, z) => {
      O.preventDefault();
      let P = JSON.parse(O.dataTransfer.getData("items"));
      if (P.find((ae) => ae.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: P, to: z }
      });
    }, ge = (O, z) => {
      O.preventDefault(), !z || z.type !== "dir" || b.value.getSelection().find((P) => P == O.currentTarget) ? (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none") : O.dataTransfer.dropEffect = "copy";
    };
    _e(() => {
      b.value = new Do({
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
      ), b.value.subscribe("predragstart", ({ event: O, isDragging: z }) => {
        if (z)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const P = O.target.offsetWidth - O.offsetX, ae = O.target.offsetHeight - O.offsetY;
          P < 15 && ae < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: O }) => {
        O && b.value.break();
      }), b.value.subscribe("callback", ({ items: O, event: z, isDragging: P }) => {
        s.emit("vf-nodes-selected", te()), p.value = b.value.getSelection().length;
      });
    }), Oi(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), N.update();
    }), _e(() => {
      zt(
        () => e.view,
        () => s.emit("vf-explorer-update")
      );
    });
    const ne = () => {
      console.log("test emit"), s.emit("custom-emit-test");
    };
    return (O, z) => (w(), I("div", Un, [
      r.view == "list" || $.value.length ? (w(), I("div", Yn, [
        h("div", {
          onClick: z[0] || (z[0] = (P) => se("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          ee(E(x(S)("Name")) + " ", 1),
          Te(Ce(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "basename"]
          ])
        ]),
        $.value.length ? F("", !0) : (w(), I("div", {
          key: 0,
          onClick: z[1] || (z[1] = (P) => se("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          ee(E(x(S)("Size")) + " ", 1),
          Te(Ce(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "file_size"]
          ])
        ])),
        $.value.length ? F("", !0) : (w(), I("div", {
          key: 1,
          onClick: z[2] || (z[2] = (P) => se("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          ee(E(x(S)("Date")) + " ", 1),
          Te(Ce(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "last_modified"]
          ])
        ])),
        $.value.length ? (w(), I("div", {
          key: 2,
          onClick: z[3] || (z[3] = (P) => se("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          ee(E(x(S)("Filepath")) + " ", 1),
          Te(Ce(Tt, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, R.active && R.column == "path"]
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
        onTouchstart: B,
        onContextmenu: z[10] || (z[10] = Fe((P) => x(s).emit("vf-contextmenu-show", {
          event: P,
          area: l.value,
          items: te()
        }), ["self", "prevent"])),
        class: fe([(M.value, ""), "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        $.value.length ? (w(!0), I(oe, { key: 0 }, be(q(), (P, ae) => (w(), I("div", {
          onDblclick: (Z) => D(P),
          onTouchstart: z[4] || (z[4] = (Z) => G(Z)),
          onTouchend: z[5] || (z[5] = (Z) => T()),
          onContextmenu: Fe((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: te(),
            target: P
          }), ["prevent"]),
          class: fe(["vf-item-" + x(k), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ae
        }, [
          h("div", Xn, [
            h("div", qn, [
              P.type == "dir" ? (w(), I("img", Qn)) : (w(), I("svg", Jn, ta)),
              h("span", ra, E(P.basename), 1)
            ]),
            h("div", sa, E(P.path), 1)
          ])
        ], 42, Gn))), 256)) : F("", !0),
        r.view == "list" && !$.value.length ? (w(!0), I(oe, { key: 1 }, be(q(), (P, ae) => (w(), I("div", {
          draggable: "true",
          onDblclick: (Z) => D(P),
          onTouchstart: z[6] || (z[6] = (Z) => G(Z)),
          onTouchend: z[7] || (z[7] = (Z) => T()),
          onContextmenu: Fe((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: te(),
            target: P
          }), ["prevent"]),
          onDragstart: (Z) => ue(Z),
          onDragover: (Z) => ge(Z, P),
          onDrop: (Z) => ye(Z, P),
          class: fe(["vf-item-" + x(k), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ae
        }, [
          h("div", oa, [
            h("div", na, [
              P.type == "dir" ? (w(), I("img", aa)) : (w(), I("svg", la, ua)),
              h("span", da, E(P.basename), 1)
            ]),
            h("div", ha, E(P.file_size ? x(cs)(P.file_size) : ""), 1),
            h("div", fa, E(x(us)(P.last_modified)), 1)
          ])
        ], 42, ia))), 256)) : F("", !0),
        r.view == "grid" && !$.value.length ? (w(!0), I(oe, { key: 2 }, be(q(!1), (P, ae) => (w(), I("div", {
          draggable: "true",
          onDblclick: (Z) => D(P),
          onTouchstart: z[8] || (z[8] = (Z) => G(Z)),
          onTouchend: z[9] || (z[9] = (Z) => T()),
          onContextmenu: Fe((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: te(),
            target: P
          }), ["prevent"]),
          onDragstart: (Z) => ue(Z),
          onDragover: (Z) => ge(Z, P),
          onDrop: (Z) => ye(Z, P),
          class: fe(["vf-item-" + x(k), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ae
        }, [
          h("div", ga, [
            h("div", {
              class: "relative grid-folder-view-item",
              onDblclick: ne
            }, [
              P.type == "dir" ? (w(), I("img", ma)) : (P.mime_type ?? "").startsWith("image") ? (w(), I("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": x(er)(x(a).value, P.path),
                alt: P.basename
              }, null, 8, va)) : (w(), I("svg", ba, Sa)),
              !(P.mime_type ?? "").startsWith("image") && P.type != "dir" ? (w(), I("div", wa, E(d(P.extension)), 1)) : F("", !0)
            ], 32),
            h("span", _a, E(m(P.basename)), 1)
          ])
        ], 42, pa))), 256)) : F("", !0)
      ], 34),
      Ce(No)
    ]));
  }
}), ka = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ma = { class: "flex leading-5 items-center" }, Ca = { class: "ml-3" }, Ia = { key: 0 }, Ea = { class: "ml-1" }, Ta = {
  name: "VFStatusbar"
}, La = /* @__PURE__ */ Object.assign(Ta, {
  props: {
    data: Object
  },
  setup(r) {
    const e = j("emitter"), { getStore: s, setStore: i } = j("storage"), n = A(0);
    j("adapter");
    const { t: a, changeLocale: d } = j("i18n");
    A(s("locale", "")), e.on("vf-nodes-selected", (l) => {
      n.value = l.length;
    });
    const m = A("");
    return e.on("vf-search-query", ({ newQuery: l }) => {
      m.value = l;
    }), (l, v) => (w(), I("div", ka, [
      h("div", Ma, [
        h("div", Ca, [
          m.value.length ? (w(), I("span", Ia, E(r.data.files.length) + " items found. ", 1)) : F("", !0),
          h("span", Ea, E(n.value > 0 ? n.value + " " + x(a)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), Aa = (r, e = 0, s = !1) => {
  let i;
  return (...n) => {
    s && !i && r(...n), clearTimeout(i), i = setTimeout(() => {
      r(...n);
    }, e);
  };
}, $a = (r, e, s) => {
  const i = A(r);
  return ji((a, d) => ({
    get() {
      return a(), i.value;
    },
    set: Aa(
      (m) => {
        i.value = m, d();
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
}, null, -1), Za = [
  Ha
], Ua = ["onClick"], Ya = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Wa = [
  Ya
], Fa = { class: "flex leading-5" }, Ka = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Ga = ["title", "onClick"], Xa = {
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
], -1), rl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), sl = ["onKeydown", "placeholder"], il = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), ol = [
  il
], nl = {
  name: "VFBreadcrumb"
}, al = /* @__PURE__ */ Object.assign(nl, {
  props: {
    data: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), n = A(null), a = A([]), d = A(!1), m = A(null), { t: l } = j("i18n"), v = j("loadingState");
    s.on("vf-explorer-update", () => {
      let T = [], L = [];
      n.value = e.data.dirname ?? i.value + "://", n.value.length == 0 && (a.value = []), n.value.replace(i.value + "://", "").split("/").forEach(function(B) {
        T.push(B), T.join("/") != "" && L.push({
          basename: B,
          name: B,
          path: i.value + "://" + T.join("/"),
          type: "dir"
        });
      }), L.length > 4 && (L = L.slice(-5), L[0].name = ".."), a.value = L;
    });
    const p = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      d.value = !0, Rt(() => m.value.focus());
    }, S = $a("", 400), k = () => v.value;
    zt(S, (T) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: T });
    });
    const M = () => a.value.length && !d.value, N = (T) => {
      T.preventDefault();
      let L = JSON.parse(T.dataTransfer.getData("items"));
      if (L.find((B) => B.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: {
          from: L,
          to: a.value[a.value.length - 2] ?? {
            path: i.value + "://"
          }
        }
      });
    }, $ = (T) => {
      T.preventDefault(), M() ? T.dataTransfer.dropEffect = "copy" : (T.dataTransfer.dropEffect = "none", T.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && p();
    };
    return (T, L) => (w(), I("div", Na, [
      h("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onDragover: L[0] || (L[0] = (B) => $(B)),
          onDrop: L[1] || (L[1] = (B) => N(B)),
          onClick: L[2] || (L[2] = (B) => {
            var G;
            return !M() || x(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((G = a.value[a.value.length - 2]) == null ? void 0 : G.path) ?? x(i) + "://"
              }
            });
          }),
          class: fe([
            "h-6 w-6 p-0.5 rounded",
            M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Pa, 34))
      ], 8, Oa),
      k() ? (w(), I("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: L[4] || (L[4] = (B) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Za))
      ], 8, Va)) : (w(), I("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), I("svg", {
          onClick: L[3] || (L[3] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ba))
      ], 8, za)),
      d.value ? (w(), I("div", el, [
        tl,
        rl,
        Te(h("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: ot(p, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": L[6] || (L[6] = (B) => Pi(S) ? S.value = B : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, sl), [
          [nt, x(S)]
        ]),
        (w(), I("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, ol))
      ])) : (w(), I("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Fe(b, ["self"])
      }, [
        (w(), I("svg", {
          onClick: L[5] || (L[5] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Wa)),
        h("div", Fa, [
          (w(!0), I(oe, null, be(a.value, (B, G) => (w(), I("div", { key: G }, [
            Ka,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (D) => x(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: B.path }
              })
            }, E(B.name), 9, Ga)
          ]))), 128))
        ]),
        k() ? (w(), I("svg", Xa, Ja)) : F("", !0)
      ], 8, Ua))
    ]));
  }
}), ll = ["onClick"], cl = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), ul = {
  name: "VFContextMenu"
}, dl = /* @__PURE__ */ Object.assign(ul, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter"), i = A(null), { apiUrl: n } = $e(), a = $t({
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
    const { t: m } = j("i18n"), l = {
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
          const S = n.value + "?" + Xe({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      },
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
      rename: {
        title: () => m("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, p = A("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: k, items: M, target: N = null }) => {
      if (a.items = [], p.value)
        if (N)
          a.items.push(l.openDir), s.emit("vf-context-selected", [N]);
        else
          return;
      else
        !N && !p.value ? (a.items.push(l.refresh), a.items.push(l.newfolder), s.emit("vf-context-selected", [])) : M.length > 1 && M.some(($) => $.path === N.path) ? (a.items.push(l.refresh), a.items.push(l.delete), s.emit("vf-context-selected", M)) : (N.type == "dir" ? a.items.push(l.open) : (a.items.push(l.preview), a.items.push(l.download)), a.items.push(l.rename), a.items.push(l.delete), s.emit("vf-context-selected", [N]));
      b(S, k);
    }), s.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const b = (S, k) => {
      a.active = !0, Rt(() => {
        let M = k.getBoundingClientRect(), N = S.pageX, $ = S.pageY, H = i.value.offsetHeight, T = i.value.offsetWidth;
        N = M.right - S.pageX + window.scrollX < T ? N - T : N, $ = M.bottom - S.pageY + window.scrollY < H ? $ - H : $, a.positions = {
          left: N + "px",
          top: $ + "px"
        };
      });
    };
    return (S, k) => a.active ? (w(), I("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: i,
      style: as(a.positions)
    }, [
      (w(!0), I(oe, null, be(a.items, (M) => (w(), I("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: (N) => v(M)
      }, [
        cl,
        h("span", null, E(M.title()), 1)
      ], 8, ll))), 128))
    ], 4)) : F("", !0);
  }
}), hl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((i, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function fl(r) {
  const e = await hl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function pl(r, e, s) {
  const { getStore: i, setStore: n } = Jt(r), a = A({}), d = (v) => {
    fl(v).then((p) => {
      a.value = p, n("locale", v), n("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  i("locale") ? a.value = i("translations") : d(e);
  const m = (v, ...p) => p.length ? m(v = v.replace("%s", p.shift()), ...p) : v;
  function l(v, ...p) {
    return a.value.hasOwnProperty(v) ? m(a.value[v], ...p) : m(v, ...p);
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
    }
  },
  emits: ["deleteButton", "fileMoved"],
  setup(r, { emit: e }) {
    const s = r, i = Ri(), { setStore: n, getStore: a } = Jt(s.id), d = A(a("adapter"));
    Ue("emitter", i), Ue("storage", Jt(s.id)), Ue("postData", s.postData), Ue("adapter", d), Ue("maxFileSize", s.maxFileSize);
    const m = pl(s.id, s.locale, i);
    Ue("i18n", m);
    const { apiUrl: l, setApiUrl: v } = $e();
    v(s.url);
    const p = $t({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = A(a("viewport", "grid")), S = A(a("darkMode", s.dark));
    i.on("vf-darkMode-toggle", () => {
      S.value = !S.value, n("darkMode", S.value);
    });
    const k = A(!1);
    Ue("loadingState", k);
    const M = A(a("full-screen", !1));
    i.on("vf-fullscreen-toggle", () => {
      M.value = !M.value, n("full-screen", M.value);
    }), i.on("vf-view-toggle", (T) => {
      b.value = T;
    });
    const N = $t({
      active: !1,
      type: "delete",
      data: {}
    });
    i.on("vf-modal-close", () => {
      N.active = !1;
    }), i.on("vf-modal-show", (T) => {
      N.active = !0, N.type = T.type, N.data = T;
    }), i.on("delete-button", (T) => {
      console.log("emit delete"), e("deleteButton", T);
    }), i.on("file-moved", (T) => {
      console.log("emit file moved"), e("fileMoved", T);
    });
    const $ = (T) => {
      Object.assign(p, T), i.emit("vf-nodes-selected", {}), i.emit("vf-explorer-update");
    };
    let H;
    return i.on("vf-fetch-abort", () => {
      H.abort(), k.value = !1;
    }), i.on("vf-fetch", ({ params: T, onSuccess: L = null, onError: B = null }) => {
      ["index", "search"].includes(T.q) && (H && H.abort(), k.value = !0), H = new AbortController();
      const G = H.signal;
      Ot(l.value, { params: T, signal: G }).then((D) => {
        d.value = D.adapter, ["index", "search"].includes(T.q) && (k.value = !1), i.emit("vf-modal-close"), $(D), L(D);
      }).catch((D) => {
        B && B(D);
      }).finally(() => {
      });
    }), i.on("vf-download", (T) => {
      document.getElementById("download_frame").src = T, i.emit("vf-modal-close");
    }), _e(() => {
      i.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), (T, L) => (w(), I("div", gl, [
      h("div", {
        class: fe(S.value ? "dark" : "")
      }, [
        h("div", {
          class: fe([M.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: as(M.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: L[0] || (L[0] = (B) => x(i).emit("vf-contextmenu-hide")),
          onTouchstart: L[1] || (L[1] = (B) => x(i).emit("vf-contextmenu-hide"))
        }, [
          Ce(So, { data: p }, null, 8, ["data"]),
          Ce(al, { data: p }, null, 8, ["data"]),
          Ce(Da, {
            view: b.value,
            data: p
          }, null, 8, ["view", "data"]),
          Ce(La, { data: p }, null, 8, ["data"])
        ], 38),
        N.active ? (w(), X(zi("v-f-modal-" + N.type), {
          key: 0,
          selection: N.data,
          current: p
        }, null, 8, ["selection", "current"])) : F("", !0),
        Ce(dl, { current: p }, null, 8, ["current"]),
        ml
      ], 2)
    ]));
  }
}), yl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), Sl = { class: "fixed z-10 inset-0 overflow-hidden" }, wl = { class: "custom-popup-layout transition-all" }, _l = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, xl = { class: "custom-layout-button-slot" }, Ne = {
  __name: "ModalLayout",
  setup(r) {
    const e = j("emitter");
    return _e(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, i) => (w(), I("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: i[1] || (i[1] = ot((n) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      yl,
      h("div", Sl, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: i[0] || (i[0] = Fe((n) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", wl, [
            h("div", _l, [
              Qt(s.$slots, "default")
            ]),
            h("div", xl, [
              Qt(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Dl = ["aria-label"], kl = /* @__PURE__ */ h("svg", {
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
], -1), Ml = [
  kl
], Cl = {
  name: "Message"
}, Oe = /* @__PURE__ */ Object.assign(Cl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var m;
    const { t: s } = j("i18n"), i = A(!1), n = A(null), a = A((m = n.value) == null ? void 0 : m.strMessage);
    zt(a, () => i.value = !1);
    const d = () => {
      e("hidden"), i.value = !0;
    };
    return (l, v) => (w(), I("div", null, [
      i.value ? F("", !0) : (w(), I("div", {
        key: 0,
        ref_key: "strMessage",
        ref: n,
        class: fe(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Ml, 8, Dl)
      ], 2))
    ]));
  }
}), Il = { class: "sm:flex custom-new-folder-popup delete-modal-container" }, El = { class: "custom-file-picker-title" }, Tl = { class: "file-picker-title-img" }, Ll = /* @__PURE__ */ h("svg", {
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
], -1), Al = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, $l = /* @__PURE__ */ h("hr", null, null, -1), Nl = { class: "mt-3 text-center create-folder-form custom-delete-modal" }, Ol = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, jl = { class: "mt-2" }, Pl = { class: "text-sm text-gray-500" }, zl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Rl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Bl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Vl = [
  Bl
], Hl = {
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
}, null, -1), Ul = [
  Zl
], Yl = { class: "ml-1.5" }, Wl = {
  name: "VFModalDelete"
}, Fl = /* @__PURE__ */ Object.assign(Wl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n"), a = A(e.selection.items), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: i.value,
          path: e.current.dirname,
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
    return (l, v) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", Il, [
          h("div", El, [
            h("div", Tl, [
              Ll,
              h("h3", Al, E(x(n)("Delete files")), 1)
            ]),
            $l
          ]),
          h("div", Nl, [
            h("h3", Ol, E(x(n)("Delete files")), 1),
            h("div", jl, [
              h("p", Pl, E(x(n)("Are you sure you want to delete these files?")), 1),
              (w(!0), I(oe, null, be(a.value, (p) => (w(), I("p", zl, [
                p.type == "dir" ? (w(), I("svg", Rl, Vl)) : (w(), I("svg", Hl, Ul)),
                h("span", Yl, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), Kl = { class: "sm:flex sm:items-start" }, Gl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Xl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ql = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ql = { class: "mt-2" }, Jl = { class: "text-sm text-gray-500" }, ec = {
  name: "VFModalMessage"
}, tc = /* @__PURE__ */ Object.assign(ec, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = j("emitter"), { t: s } = j("i18n");
    return (i, n) => (w(), X(Ne, null, {
      buttons: K(() => [
        h("button", {
          type: "button",
          onClick: n[0] || (n[0] = (a) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: K(() => {
        var a, d;
        return [
          h("div", Kl, [
            Gl,
            h("div", Xl, [
              h("h3", ql, E(((a = r.selection) == null ? void 0 : a.title) ?? "Title"), 1),
              h("div", Ql, [
                h("p", Jl, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), rc = { class: "sm:flex custom-new-folder-popup" }, sc = { class: "custom-file-picker-title" }, ic = { class: "file-picker-title-img" }, oc = /* @__PURE__ */ h("svg", {
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
], -1), nc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ac = /* @__PURE__ */ h("hr", null, null, -1), lc = { class: "mt-3 text-center w-full p-4 h-full" }, cc = { class: "mt-2 create-folder-form" }, uc = { class: "text-sm text-gray-500" }, dc = ["onKeyup", "placeholder"], hc = {
  name: "VFModalNewFolder"
}, fc = /* @__PURE__ */ Object.assign(hc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: i.value,
          path: e.current.dirname,
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
    return (l, v) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", rc, [
          h("div", sc, [
            h("div", ic, [
              oc,
              h("h3", nc, E(x(n)("New Folder")), 1)
            ]),
            ac
          ]),
          h("div", lc, [
            h("div", cc, [
              h("p", uc, E(x(n)("Create a new folder")), 1),
              Te(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Folder Name"),
                type: "text"
              }, null, 40, dc), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), pc = { class: "sm:flex sm:items-start" }, gc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), mc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bc = { class: "mt-2" }, yc = { class: "text-sm text-gray-500" }, Sc = ["onKeyup", "placeholder"], wc = {
  name: "VFModalNewFile"
}, _c = /* @__PURE__ */ Object.assign(wc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: i.value,
          path: e.current.dirname,
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
    return (l, v) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", pc, [
          gc,
          h("div", mc, [
            h("h3", vc, E(x(n)("New File")), 1),
            h("div", bc, [
              h("p", yc, E(x(n)("Create a new file")), 1),
              Te(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("File Name"),
                type: "text"
              }, null, 40, Sc), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), Rs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNjY0IiBkYXRhLW5hbWU9Ikdyb3VwIDY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTQgLTAuMTQpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjA4IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAyMDgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNCAwLjE0KSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggaWQ9Im1hZ25pZnkiIGQ9Ik0xMC4yNDcsM2E3LjI1MSw3LjI1MSwwLDAsMSw1LjUwNywxMS45NjJsLjMuM2guODgxbDUuNTc0LDUuNTc0TDIwLjgzOCwyMi41MWwtNS41NzQtNS41NzR2LS44ODFsLS4zLS4zQTcuMjQ4LDcuMjQ4LDAsMSwxLDEwLjI0NywzbTAsMi4yM2E1LjAxNyw1LjAxNywwLDEsMCw1LjAxNyw1LjAxN0E1LDUsMCwwLDAsMTAuMjQ3LDUuMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NiAtMC44NikiIGZpbGw9IiNmZmI5MDEiLz4KICA8L2c+Cjwvc3ZnPg==", Bs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4wMSIgaGVpZ2h0PSIxMC4wMDkiIHZpZXdCb3g9IjAgMCAxMC4wMSAxMC4wMDkiPg0KDQo8cGF0aCBpZD0iUGF0aF8yMTQiIGRhdGEtbmFtZT0iUGF0aCAyMTQiIGQ9Ik0xMi4xNzQsMTFsMy41ODMtMy41NzVhLjgzNy44MzcsMCwxLDAtMS4xODMtMS4xODNMMTEsOS44MjQsNy40MjQsNi4yNDFBLjgzNy44MzcsMCwwLDAsNi4yNDEsNy40MjRMOS44MjQsMTEsNi4yNDEsMTQuNTc1YS44MzcuODM3LDAsMSwwLDEuMTgzLDEuMTgzTDExLDEyLjE3NWwzLjU3NSwzLjU4M2EuODM3LjgzNywwLDEsMCwxLjE4My0xLjE4M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5NCAtNS45OTYpIiBmaWxsPSIjODA4ZDkzIi8+DQoNCjwvc3ZnPg==", Vs = "data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfMTA4OCIgZGF0YS1uYW1lPSJHcm91cCAxMDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC44OTMiIGhlaWdodD0iMjAuODkzIiB2aWV3Qm94PSIwIDAgMjAuODkzIDIwLjg5MyI+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8zIiBkYXRhLW5hbWU9IkVsbGlwc2UgMyIgY3g9IjIuNzg2IiBjeT0iMi43ODYiIHI9IjIuNzg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjY2MSA3LjY2MSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTciIGRhdGEtbmFtZT0iUGF0aCAyMTciIGQ9Ik0xMC4wOTQsNCw4LjUsNS43NDFINS43NDFBMS43NDEsMS43NDEsMCwwLDAsNCw3LjQ4MlYxNy45MjlBMS43NDEsMS43NDEsMCwwLDAsNS43NDEsMTkuNjdIMTkuNjdhMS43NDEsMS43NDEsMCwwLDAsMS43NDEtMS43NDFWNy40ODJBMS43NDEsMS43NDEsMCwwLDAsMTkuNjcsNS43NDFIMTYuOTFMMTUuMzE3LDRabTIuNjEyLDEzLjA1OGE0LjM1Myw0LjM1MywwLDEsMSw0LjM1My00LjM1M0E0LjM1NCw0LjM1NCwwLDAsMSwxMi43MDUsMTcuMDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjU5IC0yLjI1OSkiIGZpbGw9IiNmZjUyNDIiLz4KICA8cGF0aCBpZD0iUGF0aF8yMTgiIGRhdGEtbmFtZT0iUGF0aCAyMTgiIGQ9Ik0wLDBIMjAuODkzVjIwLjg5M0gwWiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=", xc = { class: "flex" }, Dc = ["aria-label"], kc = { class: "ml-auto mb-2" }, Mc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Cc = { key: 1 }, Ic = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, i = A(""), n = A(""), a = A(null), d = A(!1), { apiUrl: m } = $e(), l = A(""), v = A(!1), { t: p } = j("i18n");
    _e(() => {
      Ot(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((M) => {
        i.value = M, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, n.value = i.value, d.value == !0 && Rt(() => {
        a.value.focus();
      });
    }, S = j("postData"), k = () => {
      l.value = "", v.value = !1, Ot(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: n.value
        }),
        json: !1
      }).then((M) => {
        l.value = p("Updated."), i.value = M, e("load"), d.value = !d.value;
      }).catch((M) => {
        l.value = p(M.message), v.value = !0;
      });
    };
    return (M, N) => (w(), I(oe, null, [
      h("div", xc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Dc),
        h("div", kc, [
          d.value ? (w(), I("button", {
            key: 0,
            onClick: k,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(p)("Save")), 1)) : F("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: N[0] || (N[0] = ($) => b())
          }, E(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (w(), I("div", Cc, [
          Te(h("textarea", {
            ref_key: "editInput",
            ref: a,
            "onUpdate:modelValue": N[1] || (N[1] = ($) => n.value = $),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [nt, n.value]
          ])
        ])) : (w(), I("pre", Mc, E(i.value), 1)),
        l.value.length ? (w(), X(Oe, {
          key: 2,
          onHidden: N[2] || (N[2] = ($) => l.value = ""),
          error: v.value
        }, {
          default: K(() => [
            ee(E(l.value), 1)
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
function Ur(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function Hs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ur(Object(s), !0).forEach(function(i) {
      Lc(r, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Ur(Object(s)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(s, i));
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
function Ec(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var i = e[s];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Tc(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Lc(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function Zs(r) {
  return Ac(r) || $c(r) || Nc(r) || Oc();
}
function Ac(r) {
  if (Array.isArray(r))
    return sr(r);
}
function $c(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Nc(r, e) {
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
  for (var s = 0, i = new Array(e); s < e; s++)
    i[s] = r[s];
  return i;
}
function Oc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ut = typeof window < "u" && typeof window.document < "u", Ae = Ut ? window : {}, Dr = Ut && Ae.document.documentElement ? "ontouchstart" in Ae.document.documentElement : !1, kr = Ut ? "PointerEvent" in Ae : !1, Q = "cropper", Mr = "all", Us = "crop", Ys = "move", Ws = "zoom", Ye = "e", We = "w", Je = "s", ze = "n", ft = "ne", pt = "nw", gt = "se", mt = "sw", ir = "".concat(Q, "-crop"), Wr = "".concat(Q, "-disabled"), he = "".concat(Q, "-hidden"), Fr = "".concat(Q, "-hide"), jc = "".concat(Q, "-invisible"), Pt = "".concat(Q, "-modal"), or = "".concat(Q, "-move"), yt = "".concat(Q, "Action"), Lt = "".concat(Q, "Preview"), Cr = "crop", Fs = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Kr = "dblclick", Pc = Dr ? "touchstart" : "mousedown", zc = Dr ? "touchmove" : "mousemove", Rc = Dr ? "touchend touchcancel" : "mouseup", Gr = kr ? "pointerdown" : Pc, Xr = kr ? "pointermove" : zc, qr = kr ? "pointerup pointercancel" : Rc, Qr = "ready", Jr = "resize", es = "wheel", ur = "zoom", ts = "image/jpeg", Bc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Vc = /^data:/, Hc = /^data:image\/jpeg;base64,/, Zc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
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
}, Uc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Yc = Number.isNaN || Ae.isNaN;
function U(r) {
  return typeof r == "number" && !Yc(r);
}
var ss = function(e) {
  return e > 0 && e < 1 / 0;
};
function Gt(r) {
  return typeof r > "u";
}
function Ge(r) {
  return rr(r) === "object" && r !== null;
}
var Wc = Object.prototype.hasOwnProperty;
function et(r) {
  if (!Ge(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && Wc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function de(r) {
  return typeof r == "function";
}
var Fc = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : Fc.call(r);
}
function re(r, e) {
  return r && de(e) && (Array.isArray(r) || U(r.length) ? qs(r).forEach(function(s, i) {
    e.call(r, s, i, r);
  }) : Ge(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var J = Object.assign || function(e) {
  for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++)
    i[n - 1] = arguments[n];
  return Ge(e) && i.length > 0 && i.forEach(function(a) {
    Ge(a) && Object.keys(a).forEach(function(d) {
      e[d] = a[d];
    });
  }), e;
}, Kc = /\.\d*(?:0|9){12}\d*$/;
function rt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Kc.test(r) ? Math.round(r * e) / e : r;
}
var Gc = /^width|height|left|top|marginLeft|marginTop$/;
function Re(r, e) {
  var s = r.style;
  re(e, function(i, n) {
    Gc.test(n) && U(i) && (i = "".concat(i, "px")), s[n] = i;
  });
}
function Xc(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function ce(r, e) {
  if (e) {
    if (U(r.length)) {
      re(r, function(i) {
        ce(i, e);
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
function Le(r, e) {
  if (e) {
    if (U(r.length)) {
      re(r, function(s) {
        Le(s, e);
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
function tt(r, e, s) {
  if (e) {
    if (U(r.length)) {
      re(r, function(i) {
        tt(i, e, s);
      });
      return;
    }
    s ? ce(r, e) : Le(r, e);
  }
}
var qc = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(qc, "$1-$2").toLowerCase();
}
function dr(r, e) {
  return Ge(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Ir(e)));
}
function St(r, e, s) {
  Ge(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Ir(e)), s);
}
function Qc(r, e) {
  if (Ge(r[e]))
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
  if (Ut) {
    var e = !1, s = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        e = a;
      }
    });
    Ae.addEventListener("test", s, i), Ae.removeEventListener("test", s, i);
  }
  return r;
}();
function Me(r, e, s) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  e.trim().split(Qs).forEach(function(a) {
    if (!Js) {
      var d = r.listeners;
      d && d[a] && d[a][s] && (n = d[a][s], delete d[a][s], Object.keys(d[a]).length === 0 && delete d[a], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(a, n, i);
  });
}
function we(r, e, s) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  e.trim().split(Qs).forEach(function(a) {
    if (i.once && !Js) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      n = function() {
        delete m[a][s], r.removeEventListener(a, n, i);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, m[a] || (m[a] = {}), m[a][s] && r.removeEventListener(a, m[a][s], i), m[a][s] = n, r.listeners = m;
    }
    r.addEventListener(a, n, i);
  });
}
function st(r, e, s) {
  var i;
  return de(Event) && de(CustomEvent) ? i = new CustomEvent(e, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, !0, !0, s)), r.dispatchEvent(i);
}
function ei(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Xt = Ae.location, Jc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function is(r) {
  var e = r.match(Jc);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function os(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function vt(r) {
  var e = r.rotate, s = r.scaleX, i = r.scaleY, n = r.translateX, a = r.translateY, d = [];
  U(n) && n !== 0 && d.push("translateX(".concat(n, "px)")), U(a) && a !== 0 && d.push("translateY(".concat(a, "px)")), U(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), U(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), U(i) && i !== 1 && d.push("scaleY(".concat(i, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function eu(r) {
  var e = Hs({}, r), s = 0;
  return re(r, function(i, n) {
    delete e[n], re(e, function(a) {
      var d = Math.abs(i.startX - a.startX), m = Math.abs(i.startY - a.startY), l = Math.abs(i.endX - a.endX), v = Math.abs(i.endY - a.endY), p = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function At(r, e) {
  var s = r.pageX, i = r.pageY, n = {
    endX: s,
    endY: i
  };
  return e ? n : Hs({
    startX: s,
    startY: i
  }, n);
}
function tu(r) {
  var e = 0, s = 0, i = 0;
  return re(r, function(n) {
    var a = n.startX, d = n.startY;
    e += a, s += d, i += 1;
  }), e /= i, s /= i, {
    pageX: e,
    pageY: s
  };
}
function Be(r) {
  var e = r.aspectRatio, s = r.height, i = r.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = ss(i), d = ss(s);
  if (a && d) {
    var m = s * e;
    n === "contain" && m > i || n === "cover" && m < i ? s = i / e : i = s * e;
  } else
    a ? s = i / e : d && (i = s * e);
  return {
    width: i,
    height: s
  };
}
function ru(r) {
  var e = r.width, s = r.height, i = r.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: s,
      height: e
    };
  var n = i % 90 * Math.PI / 180, a = Math.sin(n), d = Math.cos(n), m = e * d + s * a, l = e * a + s * d;
  return i > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function su(r, e, s, i) {
  var n = e.aspectRatio, a = e.naturalWidth, d = e.naturalHeight, m = e.rotate, l = m === void 0 ? 0 : m, v = e.scaleX, p = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, k = s.aspectRatio, M = s.naturalWidth, N = s.naturalHeight, $ = i.fillColor, H = $ === void 0 ? "transparent" : $, T = i.imageSmoothingEnabled, L = T === void 0 ? !0 : T, B = i.imageSmoothingQuality, G = B === void 0 ? "low" : B, D = i.maxWidth, R = D === void 0 ? 1 / 0 : D, q = i.maxHeight, se = q === void 0 ? 1 / 0 : q, te = i.minWidth, ue = te === void 0 ? 0 : te, ye = i.minHeight, ge = ye === void 0 ? 0 : ye, me = document.createElement("canvas"), ne = me.getContext("2d"), O = Be({
    aspectRatio: k,
    width: R,
    height: se
  }), z = Be({
    aspectRatio: k,
    width: ue,
    height: ge
  }, "cover"), P = Math.min(O.width, Math.max(z.width, M)), ae = Math.min(O.height, Math.max(z.height, N)), Z = Be({
    aspectRatio: n,
    width: R,
    height: se
  }), Se = Be({
    aspectRatio: n,
    width: ue,
    height: ge
  }, "cover"), xe = Math.min(Z.width, Math.max(Se.width, a)), Dt = Math.min(Z.height, Math.max(Se.height, d)), Yt = [-xe / 2, -Dt / 2, xe, Dt];
  return me.width = rt(P), me.height = rt(ae), ne.fillStyle = H, ne.fillRect(0, 0, P, ae), ne.save(), ne.translate(P / 2, ae / 2), ne.rotate(l * Math.PI / 180), ne.scale(p, S), ne.imageSmoothingEnabled = L, ne.imageSmoothingQuality = G, ne.drawImage.apply(ne, [r].concat(Zs(Yt.map(function(kt) {
    return Math.floor(rt(kt));
  })))), ne.restore(), me;
}
var ti = String.fromCharCode;
function iu(r, e, s) {
  var i = "";
  s += e;
  for (var n = e; n < s; n += 1)
    i += ti(r.getUint8(n));
  return i;
}
var ou = /^data:.*,/;
function nu(r) {
  var e = r.replace(ou, ""), s = atob(e), i = new ArrayBuffer(s.length), n = new Uint8Array(i);
  return re(n, function(a, d) {
    n[d] = s.charCodeAt(d);
  }), i;
}
function au(r, e) {
  for (var s = [], i = 8192, n = new Uint8Array(r); n.length > 0; )
    s.push(ti.apply(null, qs(n.subarray(0, i)))), n = n.subarray(i);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function lu(r) {
  var e = new DataView(r), s;
  try {
    var i, n, a;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, m = 2; m + 1 < d; ) {
        if (e.getUint8(m) === 255 && e.getUint8(m + 1) === 225) {
          n = m;
          break;
        }
        m += 1;
      }
    if (n) {
      var l = n + 4, v = n + 10;
      if (iu(e, l, 4) === "Exif") {
        var p = e.getUint16(v);
        if (i = p === 18761, (i || p === 19789) && e.getUint16(v + 2, i) === 42) {
          var b = e.getUint32(v + 4, i);
          b >= 8 && (a = v + b);
        }
      }
    }
    if (a) {
      var S = e.getUint16(a, i), k, M;
      for (M = 0; M < S; M += 1)
        if (k = a + M * 12 + 2, e.getUint16(k, i) === 274) {
          k += 8, s = e.getUint16(k, i), e.setUint16(k, 1, i);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function cu(r) {
  var e = 0, s = 1, i = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      i = -1;
      break;
    case 5:
      e = 90, i = -1;
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
    scaleY: i
  };
}
var uu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, i = this.container, n = this.cropper, a = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    ce(n, he), Le(e, he);
    var m = {
      width: Math.max(i.offsetWidth, a >= 0 ? a : Gs),
      height: Math.max(i.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = m, Re(n, {
      width: m.width,
      height: m.height
    }), ce(e, he), Le(n, he);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, i = this.options.viewMode, n = Math.abs(s.rotate) % 180 === 90, a = n ? s.naturalHeight : s.naturalWidth, d = n ? s.naturalWidth : s.naturalHeight, m = a / d, l = e.width, v = e.height;
    e.height * m > e.width ? i === 3 ? l = e.height * m : v = e.width / m : i === 3 ? v = e.width / m : l = e.height * m;
    var p = {
      aspectRatio: m,
      naturalWidth: a,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = p, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (e.width - p.width) / 2, p.top = (e.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = J({}, p);
  },
  limitCanvas: function(e, s) {
    var i = this.options, n = this.containerData, a = this.canvasData, d = this.cropBoxData, m = i.viewMode, l = a.aspectRatio, v = this.cropped && d;
    if (e) {
      var p = Number(i.minCanvasWidth) || 0, b = Number(i.minCanvasHeight) || 0;
      m > 1 ? (p = Math.max(p, n.width), b = Math.max(b, n.height), m === 3 && (b * l > p ? p = b * l : b = p / l)) : m > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * l > p ? p = b * l : b = p / l));
      var S = Be({
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
  renderCanvas: function(e, s) {
    var i = this.canvasData, n = this.imageData;
    if (s) {
      var a = ru({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), d = a.width, m = a.height, l = i.width * (d / i.naturalWidth), v = i.height * (m / i.naturalHeight);
      i.left -= (l - i.width) / 2, i.top -= (v - i.height) / 2, i.width = l, i.height = v, i.aspectRatio = d / m, i.naturalWidth = d, i.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, Re(this.canvas, J({
      width: i.width,
      height: i.height
    }, vt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, i = this.imageData, n = i.naturalWidth * (s.width / s.naturalWidth), a = i.naturalHeight * (s.height / s.naturalHeight);
    J(i, {
      width: n,
      height: a,
      left: (s.width - n) / 2,
      top: (s.height - a) / 2
    }), Re(this.image, J({
      width: i.width,
      height: i.height
    }, vt(J({
      translateX: i.left,
      translateY: i.top
    }, i)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, i = e.aspectRatio || e.initialAspectRatio, n = Number(e.autoCropArea) || 0.8, a = {
      width: s.width,
      height: s.height
    };
    i && (s.height * i > s.width ? a.height = a.width / i : a.width = a.height * i), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * n), a.height = Math.max(a.minHeight, a.height * n), a.left = s.left + (s.width - a.width) / 2, a.top = s.top + (s.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = J({}, a);
  },
  limitCropBox: function(e, s) {
    var i = this.options, n = this.containerData, a = this.canvasData, d = this.cropBoxData, m = this.limited, l = i.aspectRatio;
    if (e) {
      var v = Number(i.minCropBoxWidth) || 0, p = Number(i.minCropBoxHeight) || 0, b = m ? Math.min(n.width, a.width, a.width + a.left, n.width - a.left) : n.width, S = m ? Math.min(n.height, a.height, a.height + a.top, n.height - a.top) : n.height;
      v = Math.min(v, n.width), p = Math.min(p, n.height), l && (v && p ? p * l > v ? p = v / l : v = p * l : v ? p = v / l : p && (v = p * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, a.left), d.minTop = Math.max(0, a.top), d.maxLeft = Math.min(n.width, a.left + a.width) - d.width, d.maxTop = Math.min(n.height, a.top + a.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = n.width - d.width, d.maxTop = n.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, e.movable && e.cropBoxMovable && St(this.face, yt, i.width >= s.width && i.height >= s.height ? Ys : Mr), Re(this.cropBox, J({
      width: i.width,
      height: i.height
    }, vt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), st(this.element, nr, this.getData());
  }
}, du = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, i = this.options.preview, n = s ? this.crossOriginUrl : this.url, a = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = n, d.alt = a, this.viewBox.appendChild(d), this.viewBoxImage = d, !!i) {
      var m = i;
      typeof i == "string" ? m = e.ownerDocument.querySelectorAll(i) : i.querySelector && (m = [i]), this.previews = m, re(m, function(l) {
        var v = document.createElement("img");
        St(l, Lt, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = n, v.alt = a, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    re(this.previews, function(e) {
      var s = dr(e, Lt);
      Re(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, Qc(e, Lt);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, i = this.cropBoxData, n = i.width, a = i.height, d = e.width, m = e.height, l = i.left - s.left - e.left, v = i.top - s.top - e.top;
    !this.cropped || this.disabled || (Re(this.viewBoxImage, J({
      width: d,
      height: m
    }, vt(J({
      translateX: -l,
      translateY: -v
    }, e)))), re(this.previews, function(p) {
      var b = dr(p, Lt), S = b.width, k = b.height, M = S, N = k, $ = 1;
      n && ($ = S / n, N = a * $), a && N > k && ($ = k / a, M = n * $, N = k), Re(p, {
        width: M,
        height: N
      }), Re(p.getElementsByTagName("img")[0], J({
        width: d * $,
        height: m * $
      }, vt(J({
        translateX: -l * $,
        translateY: -v * $
      }, e))));
    }));
  }
}, hu = {
  bind: function() {
    var e = this.element, s = this.options, i = this.cropper;
    de(s.cropstart) && we(e, cr, s.cropstart), de(s.cropmove) && we(e, lr, s.cropmove), de(s.cropend) && we(e, ar, s.cropend), de(s.crop) && we(e, nr, s.crop), de(s.zoom) && we(e, ur, s.zoom), we(i, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && we(i, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && we(i, Kr, this.onDblclick = this.dblclick.bind(this)), we(e.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), we(e.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && we(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, i = this.cropper;
    de(s.cropstart) && Me(e, cr, s.cropstart), de(s.cropmove) && Me(e, lr, s.cropmove), de(s.cropend) && Me(e, ar, s.cropend), de(s.crop) && Me(e, nr, s.crop), de(s.zoom) && Me(e, ur, s.zoom), Me(i, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && Me(i, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Me(i, Kr, this.onDblclick), Me(e.ownerDocument, Xr, this.onCropMove), Me(e.ownerDocument, qr, this.onCropEnd), s.responsive && Me(window, Jr, this.onResize);
  }
}, fu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, i = this.containerData, n = s.offsetWidth / i.width, a = s.offsetHeight / i.height, d = Math.abs(n - 1) > Math.abs(a - 1) ? n : a;
      if (d !== 1) {
        var m, l;
        e.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(re(m, function(v, p) {
          m[p] = v * d;
        })), this.setCropBoxData(re(l, function(v, p) {
          l[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(Xc(this.dragBox, ir) ? Fs : Cr);
  },
  wheel: function(e) {
    var s = this, i = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), e.deltaY ? n = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? n = -e.wheelDelta / 120 : e.detail && (n = e.detail > 0 ? 1 : -1), this.zoom(-n * i, e)));
  },
  cropStart: function(e) {
    var s = e.buttons, i = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (U(s) && s !== 1 || U(i) && i !== 0 || e.ctrlKey))) {
      var n = this.options, a = this.pointers, d;
      e.changedTouches ? re(e.changedTouches, function(m) {
        a[m.identifier] = At(m);
      }) : a[e.pointerId || 0] = At(e), Object.keys(a).length > 1 && n.zoomable && n.zoomOnTouch ? d = Ws : d = dr(e.target, yt), Bc.test(d) && st(this.element, cr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Us && (this.cropping = !0, ce(this.dragBox, Pt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var i = this.pointers;
      e.preventDefault(), st(this.element, lr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? re(e.changedTouches, function(n) {
        J(i[n.identifier] || {}, At(n, !0));
      }) : J(i[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, i = this.pointers;
      e.changedTouches ? re(e.changedTouches, function(n) {
        delete i[n.identifier];
      }) : delete i[e.pointerId || 0], s && (e.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, tt(this.dragBox, Pt, this.cropped && this.options.modal)), st(this.element, ar, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, pu = {
  change: function(e) {
    var s = this.options, i = this.canvasData, n = this.containerData, a = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = a.left, p = a.top, b = a.width, S = a.height, k = v + b, M = p + S, N = 0, $ = 0, H = n.width, T = n.height, L = !0, B;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && (N = a.minLeft, $ = a.minTop, H = N + Math.min(n.width, i.width, i.left + i.width), T = $ + Math.min(n.height, i.height, i.top + i.height));
    var G = d[Object.keys(d)[0]], D = {
      x: G.endX - G.startX,
      y: G.endY - G.startY
    }, R = function(se) {
      switch (se) {
        case Ye:
          k + D.x > H && (D.x = H - k);
          break;
        case We:
          v + D.x < N && (D.x = N - v);
          break;
        case ze:
          p + D.y < $ && (D.y = $ - p);
          break;
        case Je:
          M + D.y > T && (D.y = T - M);
          break;
      }
    };
    switch (m) {
      case Mr:
        v += D.x, p += D.y;
        break;
      case Ye:
        if (D.x >= 0 && (k >= H || l && (p <= $ || M >= T))) {
          L = !1;
          break;
        }
        R(Ye), b += D.x, b < 0 && (m = We, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case ze:
        if (D.y <= 0 && (p <= $ || l && (v <= N || k >= H))) {
          L = !1;
          break;
        }
        R(ze), S -= D.y, p += D.y, S < 0 && (m = Je, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case We:
        if (D.x <= 0 && (v <= N || l && (p <= $ || M >= T))) {
          L = !1;
          break;
        }
        R(We), b -= D.x, v += D.x, b < 0 && (m = Ye, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case Je:
        if (D.y >= 0 && (M >= T || l && (v <= N || k >= H))) {
          L = !1;
          break;
        }
        R(Je), S += D.y, S < 0 && (m = ze, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case ft:
        if (l) {
          if (D.y <= 0 && (p <= $ || k >= H)) {
            L = !1;
            break;
          }
          R(ze), S -= D.y, p += D.y, b = S * l;
        } else
          R(ze), R(Ye), D.x >= 0 ? k < H ? b += D.x : D.y <= 0 && p <= $ && (L = !1) : b += D.x, D.y <= 0 ? p > $ && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = mt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = pt, b = -b, v -= b) : S < 0 && (m = gt, S = -S, p -= S);
        break;
      case pt:
        if (l) {
          if (D.y <= 0 && (p <= $ || v <= N)) {
            L = !1;
            break;
          }
          R(ze), S -= D.y, p += D.y, b = S * l, v += a.width - b;
        } else
          R(ze), R(We), D.x <= 0 ? v > N ? (b -= D.x, v += D.x) : D.y <= 0 && p <= $ && (L = !1) : (b -= D.x, v += D.x), D.y <= 0 ? p > $ && (S -= D.y, p += D.y) : (S -= D.y, p += D.y);
        b < 0 && S < 0 ? (m = gt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = ft, b = -b, v -= b) : S < 0 && (m = mt, S = -S, p -= S);
        break;
      case mt:
        if (l) {
          if (D.x <= 0 && (v <= N || M >= T)) {
            L = !1;
            break;
          }
          R(We), b -= D.x, v += D.x, S = b / l;
        } else
          R(Je), R(We), D.x <= 0 ? v > N ? (b -= D.x, v += D.x) : D.y >= 0 && M >= T && (L = !1) : (b -= D.x, v += D.x), D.y >= 0 ? M < T && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = ft, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = gt, b = -b, v -= b) : S < 0 && (m = pt, S = -S, p -= S);
        break;
      case gt:
        if (l) {
          if (D.x >= 0 && (k >= H || M >= T)) {
            L = !1;
            break;
          }
          R(Ye), b += D.x, S = b / l;
        } else
          R(Je), R(Ye), D.x >= 0 ? k < H ? b += D.x : D.y >= 0 && M >= T && (L = !1) : b += D.x, D.y >= 0 ? M < T && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = pt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (m = mt, b = -b, v -= b) : S < 0 && (m = ft, S = -S, p -= S);
        break;
      case Ys:
        this.move(D.x, D.y), L = !1;
        break;
      case Ws:
        this.zoom(eu(d), e), L = !1;
        break;
      case Us:
        if (!D.x || !D.y) {
          L = !1;
          break;
        }
        B = ei(this.cropper), v = G.startX - B.left, p = G.startY - B.top, b = a.minWidth, S = a.minHeight, D.x > 0 ? m = D.y > 0 ? gt : ft : D.x < 0 && (v -= b, m = D.y > 0 ? mt : pt), D.y < 0 && (p -= S), this.cropped || (Le(this.cropBox, he), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    L && (a.width = b, a.height = S, a.left = v, a.top = p, this.action = m, this.renderCropBox()), re(d, function(q) {
      q.startX = q.endX, q.startY = q.endY;
    });
  }
}, gu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ce(this.dragBox, Pt), Le(this.cropBox, he), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Le(this.dragBox, Pt), ce(this.cropBox, he)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, re(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Le(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ce(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var e = this.element;
    return e[Q] ? (e[Q] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, n = i.left, a = i.top;
    return this.moveTo(Gt(e) ? e : n + Number(e), Gt(s) ? s : a + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, n = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (U(e) && (i.left = e, n = !0), U(s) && (i.top = s, n = !0), n && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(e, s) {
    var i = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(i.width * e / i.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(e, s, i) {
    var n = this.options, a = this.canvasData, d = a.width, m = a.height, l = a.naturalWidth, v = a.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && n.zoomable) {
      var p = l * e, b = v * e;
      if (st(this.element, ur, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var S = this.pointers, k = ei(this.cropper), M = S && Object.keys(S).length ? tu(S) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        a.left -= (p - d) * ((M.pageX - k.left - a.left) / d), a.top -= (b - m) * ((M.pageY - k.top - a.top) / m);
      } else
        et(s) && U(s.x) && U(s.y) ? (a.left -= (p - d) * ((s.x - a.left) / d), a.top -= (b - m) * ((s.y - a.top) / m)) : (a.left -= (p - d) / 2, a.top -= (b - m) / 2);
      a.width = p, a.height = b, this.renderCanvas(!0);
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
    return e = Number(e), U(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, U(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(U(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.imageData, n = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (U(e) && (i.scaleX = e, n = !0), U(s) && (i.scaleY = s, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, i = this.imageData, n = this.canvasData, a = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: a.left - n.left,
        y: a.top - n.top,
        width: a.width,
        height: a.height
      };
      var m = i.width / i.naturalWidth;
      if (re(d, function(p, b) {
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
    return s.rotatable && (d.rotate = i.rotate || 0), s.scalable && (d.scaleX = i.scaleX || 1, d.scaleY = i.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(e) {
    var s = this.options, i = this.imageData, n = this.canvasData, a = {};
    if (this.ready && !this.disabled && et(e)) {
      var d = !1;
      s.rotatable && U(e.rotate) && e.rotate !== i.rotate && (i.rotate = e.rotate, d = !0), s.scalable && (U(e.scaleX) && e.scaleX !== i.scaleX && (i.scaleX = e.scaleX, d = !0), U(e.scaleY) && e.scaleY !== i.scaleY && (i.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = i.width / i.naturalWidth;
      U(e.x) && (a.left = e.x * m + n.left), U(e.y) && (a.top = e.y * m + n.top), U(e.width) && (a.width = e.width * m), U(e.height) && (a.height = e.height * m), this.setCropBoxData(a);
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
    var e = this.canvasData, s = {};
    return this.ready && re(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
      s[i] = e[i];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(e) {
    var s = this.canvasData, i = s.aspectRatio;
    return this.ready && !this.disabled && et(e) && (U(e.left) && (s.left = e.left), U(e.top) && (s.top = e.top), U(e.width) ? (s.width = e.width, s.height = e.width / i) : U(e.height) && (s.height = e.height, s.width = e.height * i), this.renderCanvas(!0)), this;
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
    var s = this.cropBoxData, i = this.options.aspectRatio, n, a;
    return this.ready && this.cropped && !this.disabled && et(e) && (U(e.left) && (s.left = e.left), U(e.top) && (s.top = e.top), U(e.width) && e.width !== s.width && (n = !0, s.width = e.width), U(e.height) && e.height !== s.height && (a = !0, s.height = e.height), i && (n ? s.height = s.width / i : a && (s.width = s.height * i)), this.renderCropBox()), this;
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
    var s = this.canvasData, i = su(this.image, this.imageData, s, e);
    if (!this.cropped)
      return i;
    var n = this.getData(), a = n.x, d = n.y, m = n.width, l = n.height, v = i.width / Math.floor(s.naturalWidth);
    v !== 1 && (a *= v, d *= v, m *= v, l *= v);
    var p = m / l, b = Be({
      aspectRatio: p,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Be({
      aspectRatio: p,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), k = Be({
      aspectRatio: p,
      width: e.width || (v !== 1 ? i.width : m),
      height: e.height || (v !== 1 ? i.height : l)
    }), M = k.width, N = k.height;
    M = Math.min(b.width, Math.max(S.width, M)), N = Math.min(b.height, Math.max(S.height, N));
    var $ = document.createElement("canvas"), H = $.getContext("2d");
    $.width = rt(M), $.height = rt(N), H.fillStyle = e.fillColor || "transparent", H.fillRect(0, 0, M, N);
    var T = e.imageSmoothingEnabled, L = T === void 0 ? !0 : T, B = e.imageSmoothingQuality;
    H.imageSmoothingEnabled = L, B && (H.imageSmoothingQuality = B);
    var G = i.width, D = i.height, R = a, q = d, se, te, ue, ye, ge, me;
    R <= -m || R > G ? (R = 0, se = 0, ue = 0, ge = 0) : R <= 0 ? (ue = -R, R = 0, se = Math.min(G, m + R), ge = se) : R <= G && (ue = 0, se = Math.min(m, G - R), ge = se), se <= 0 || q <= -l || q > D ? (q = 0, te = 0, ye = 0, me = 0) : q <= 0 ? (ye = -q, q = 0, te = Math.min(D, l + q), me = te) : q <= D && (ye = 0, te = Math.min(l, D - q), me = te);
    var ne = [R, q, se, te];
    if (ge > 0 && me > 0) {
      var O = M / m;
      ne.push(ue * O, ye * O, ge * O, me * O);
    }
    return H.drawImage.apply(H, [i].concat(Zs(ne.map(function(z) {
      return Math.floor(rt(z));
    })))), $;
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
    var s = this.options, i = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var a = e === Cr, d = s.movable && e === Fs;
      e = a || d ? e : Ks, s.dragMode = e, St(i, yt, e), tt(i, ir, a), tt(i, or, d), s.cropBoxMovable || (St(n, yt, e), tt(n, ir, a), tt(n, or, d));
    }
    return this;
  }
}, mu = Ae.Cropper, ri = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Ec(this, r), !e || !Zc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = J({}, rs, et(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Tc(r, [{
    key: "init",
    value: function() {
      var s = this.element, i = s.tagName.toLowerCase(), n;
      if (!s[Q]) {
        if (s[Q] = this, i === "img") {
          if (this.isImg = !0, n = s.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = s.src;
        } else
          i === "canvas" && window.HTMLCanvasElement && (n = s.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var i = this;
      if (s) {
        this.url = s, this.imageData = {};
        var n = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Vc.test(s)) {
          Hc.test(s) ? this.read(nu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          i.read(d.response);
        }, d.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, a.checkCrossOrigin && is(s) && n.crossOrigin && (s = os(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = n.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var i = this.options, n = this.imageData, a = lu(s), d = 0, m = 1, l = 1;
      if (a > 1) {
        this.url = au(s, ts);
        var v = cu(a);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      i.rotatable && (n.rotate = d), i.scalable && (n.scaleX = m, n.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, i = this.url, n = s.crossOrigin, a = i;
      this.options.checkCrossOrigin && is(i) && (n || (n = "anonymous"), a = os(i)), this.crossOrigin = n, this.crossOriginUrl = a;
      var d = document.createElement("img");
      n && (d.crossOrigin = n), d.src = a || i, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), ce(d, Fr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var n = Ae.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ae.navigator.userAgent), a = function(v, p) {
        J(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = J({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (i.naturalWidth && !n) {
        a(i.naturalWidth, i.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        a(d.width, d.height), n || m.removeChild(d);
      }, d.src = i.src, n || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
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
        var s = this.element, i = this.options, n = this.image, a = s.parentNode, d = document.createElement("div");
        d.innerHTML = Uc;
        var m = d.querySelector(".".concat(Q, "-container")), l = m.querySelector(".".concat(Q, "-canvas")), v = m.querySelector(".".concat(Q, "-drag-box")), p = m.querySelector(".".concat(Q, "-crop-box")), b = p.querySelector(".".concat(Q, "-face"));
        this.container = a, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = p, this.viewBox = m.querySelector(".".concat(Q, "-view-box")), this.face = b, l.appendChild(n), ce(s, he), a.insertBefore(m, s.nextSibling), Le(n, Fr), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, ce(p, he), i.guides || ce(p.getElementsByClassName("".concat(Q, "-dashed")), he), i.center || ce(p.getElementsByClassName("".concat(Q, "-center")), he), i.background && ce(m, "".concat(Q, "-bg")), i.highlight || ce(b, jc), i.cropBoxMovable && (ce(b, or), St(b, yt, Mr)), i.cropBoxResizable || (ce(p.getElementsByClassName("".concat(Q, "-line")), he), ce(p.getElementsByClassName("".concat(Q, "-point")), he)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), de(i.ready) && we(s, Qr, i.ready, {
          once: !0
        }), st(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Le(this.element, he);
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
      return window.Cropper = mu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      J(rs, et(s) && s);
    }
  }]), r;
}();
J(ri.prototype, uu, du, hu, fu, pu, gu);
const vu = { class: "flex" }, bu = ["aria-label"], yu = { class: "ml-auto mb-2" }, Su = { class: "w-full flex justify-center" }, wu = ["src"], _u = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: i } = j("i18n"), { apiUrl: n } = $e(), a = A(null), d = A(null), m = A(!1), l = A(""), v = A(!1), p = () => {
      m.value = !m.value, m.value ? d.value = new ri(a.value, {
        crop(k) {
        }
      }) : d.value.destroy();
    }, b = j("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((k) => {
        l.value = "", v.value = !1, Ot(n.value, {
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
          l.value = i("Updated."), a.value.src = er(
            s.selection.adapter,
            s.selection.item.path
          ), p(), e("load");
        }).catch((M) => {
          l.value = i(M.message), v.value = !0;
        });
      });
    };
    return _e(() => {
      e("load");
    }), (k, M) => (w(), I(oe, null, [
      h("div", vu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, bu),
        h("div", yu, [
          m.value ? (w(), I("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(i)("Crop")), 1)) : F("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: M[0] || (M[0] = (N) => p())
          }, E(m.value ? x(i)("Cancel") : x(i)("Edit")), 1)
        ])
      ]),
      h("div", Su, [
        h("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(er)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, wu)
      ]),
      l.value.length ? (w(), X(Oe, {
        key: 0,
        onHidden: M[1] || (M[1] = (N) => l.value = ""),
        error: v.value
      }, {
        default: K(() => [
          ee(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : F("", !0)
    ], 64));
  }
}, xu = { class: "flex" }, Du = ["aria-label"], ku = /* @__PURE__ */ h("div", null, null, -1), Mu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return _e(() => {
      e("load");
    }), (s, i) => (w(), I(oe, null, [
      h("div", xu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Du)
      ]),
      ku
    ], 64));
  }
}, Cu = ["aria-label"], Iu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Eu = ["src"], Tu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: i } = $e(), n = () => i.value + "?" + Xe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return _e(() => {
      e("load");
    }), (a, d) => (w(), I(oe, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Cu),
      h("div", null, [
        h("video", Iu, [
          h("source", {
            src: n(),
            type: "video/mp4"
          }, null, 8, Eu),
          ee(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Lu = ["aria-label"], Au = {
  class: "w-full",
  controls: ""
}, $u = ["src"], Nu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: i } = $e(), n = () => i.value + "?" + Xe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return _e(() => {
      e("load");
    }), (a, d) => (w(), I(oe, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Lu),
      h("div", null, [
        h("audio", Au, [
          h("source", {
            src: n(),
            type: "audio/mpeg"
          }, null, 8, $u),
          ee(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Ou = ["aria-label"], ju = ["data"], Pu = ["src"], zu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: i } = $e(), n = () => i.value + "?" + Xe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return _e(() => {
      e("load");
    }), (a, d) => (w(), I(oe, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Ou),
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
        `, 8, Pu)
        ], 8, ju)
      ])
    ], 64));
  }
}, Ru = { class: "sm:flex custom-new-folder-popup edit-preview-container" }, Bu = { class: "custom-file-picker-title" }, Vu = { class: "file-picker-title-img" }, Hu = /* @__PURE__ */ h("svg", {
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
}, Uu = /* @__PURE__ */ h("hr", null, null, -1), Yu = { class: "mt-3 text-center w-full p-4 h-full create-folder-form edit-preview" }, Wu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Fu = {
  key: 0,
  class: "flex leading-5"
}, Ku = /* @__PURE__ */ h("svg", {
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
], -1), Gu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Xu = { class: "font-bold pl-2" }, qu = { class: "font-bold pl-2" }, Qu = { class: "search-terms-div-preview bg-white dark:bg-gray-800" }, Ju = /* @__PURE__ */ h("div", null, [
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
    /* @__PURE__ */ ee(" Search Terms")
  ])
], -1), ed = /* @__PURE__ */ h("hr", null, null, -1), td = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), rd = { id: "tags-space" }, sd = ["onClick"], id = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
      /* @__PURE__ */ ee(" File Details")
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
], -1), od = { class: "bg-white custom-file-picker-action" }, nd = {
  name: "VFModalPreview"
}, ad = /* @__PURE__ */ Object.assign(nd, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = $e(), i = j("emitter"), { t: n } = j("i18n"), a = A(!1), d = (S) => a.value = S;
    let m = A([]);
    _e(() => {
      p();
    });
    const l = (S) => (e.selection.item.mime_type ?? "").startsWith(S), v = () => {
      const S = s.value + "?" + Xe({
        q: "download",
        adapter: e.selection.adapter,
        path: e.selection.item.path
      });
      i.emit("vf-download", S);
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
    return (S, k) => (w(), X(Ne, null, {
      buttons: K(() => [
        h("div", Qu, [
          Ju,
          ed,
          td,
          h("div", rd, [
            (w(!0), I(oe, null, be(x(m), (M) => (w(), I("span", {
              key: M.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (N) => b(M.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, sd),
              h("p", null, E(M.tag_name), 1)
            ]))), 128))
          ])
        ]),
        id,
        h("div", od, [
          h("button", {
            type: "button",
            onClick: k[6] || (k[6] = (M) => x(i).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Close")), 1),
          h("button", {
            type: "button",
            onClick: k[7] || (k[7] = (M) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Download")), 1)
        ])
      ]),
      default: K(() => [
        h("div", Ru, [
          h("div", Bu, [
            h("div", Vu, [
              Hu,
              h("h3", Zu, E(x(n)("Edit")), 1)
            ]),
            Uu
          ]),
          h("div", Yu, [
            h("div", null, [
              l("text") ? (w(), X(Ic, {
                key: 0,
                selection: r.selection,
                onLoad: k[0] || (k[0] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), X(_u, {
                key: 1,
                selection: r.selection,
                onLoad: k[1] || (k[1] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), X(Tu, {
                key: 2,
                selection: r.selection,
                onLoad: k[2] || (k[2] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), X(Nu, {
                key: 3,
                selection: r.selection,
                onLoad: k[3] || (k[3] = (M) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), X(zu, {
                key: 4,
                selection: r.selection,
                onLoad: k[4] || (k[4] = (M) => d(!0))
              }, null, 8, ["selection"])) : (w(), X(Mu, {
                key: 5,
                selection: r.selection,
                onLoad: k[5] || (k[5] = (M) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Wu, [
              a.value == !1 ? (w(), I("div", Fu, [
                Ku,
                h("span", null, E(x(n)("Loading")), 1)
              ])) : F("", !0)
            ])
          ])
        ]),
        h("div", Gu, [
          h("div", null, [
            h("span", Xu, E(x(n)("File Size")) + ": ", 1),
            ee(E(x(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", qu, E(x(n)("Last Modified")) + ": ", 1),
            ee(" " + E(x(us)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ld = { class: "sm:flex custom-new-folder-popup" }, cd = { class: "custom-file-picker-title" }, ud = { class: "file-picker-title-img" }, dd = /* @__PURE__ */ h("svg", {
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
], -1), hd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, fd = /* @__PURE__ */ h("hr", null, null, -1), pd = { class: "mt-3 text-center w-full p-4 h-full" }, gd = { class: "mt-2 create-folder-form" }, md = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, vd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, bd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), yd = [
  bd
], Sd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, wd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), _d = [
  wd
], xd = { class: "ml-1.5" }, Dd = ["onKeyup"], kd = {
  name: "VFModalRename"
}, Md = /* @__PURE__ */ Object.assign(kd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n"), a = A(e.selection.items[0]), d = A(e.selection.items[0].basename), m = A(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: i.value,
          path: e.current.dirname,
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
    return (v, p) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", ld, [
          h("div", cd, [
            h("div", ud, [
              dd,
              h("h3", hd, E(x(n)("Rename")), 1)
            ]),
            fd
          ]),
          h("div", pd, [
            h("div", gd, [
              h("p", md, [
                a.value.type == "dir" ? (w(), I("svg", vd, yd)) : (w(), I("svg", Sd, _d)),
                h("span", xd, E(a.value.basename), 1)
              ]),
              Te(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Dd), [
                [nt, d.value]
              ]),
              m.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(m.value), 1)
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
}), Cd = { class: "flex flex-col h-full items-center" }, Id = { class: "custom-file-picker-title" }, Ed = { class: "file-picker-title-img" }, Td = /* @__PURE__ */ h("svg", {
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
], -1), Ld = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ad = /* @__PURE__ */ h("hr", null, null, -1), $d = { class: "mt-3 text-center custom-file-picker-body" }, Nd = { class: "mt-2" }, Od = { class: "text-gray-500 mb-1" }, jd = ["id"], Pd = {
  key: 0,
  class: "py-2"
}, zd = { class: "search-terms-div bg-white dark:bg-gray-800" }, Rd = /* @__PURE__ */ h("div", null, [
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
    /* @__PURE__ */ ee(" Search Terms")
  ])
], -1), Bd = /* @__PURE__ */ h("hr", null, null, -1), Vd = /* @__PURE__ */ h("div", null, [
  /* @__PURE__ */ h("input", {
    id: "search-terms-file-picker",
    class: "form-control user-dynamic-input address-autocomplete",
    type: "text",
    placeholder: "Search Terms",
    autocomplete: "off"
  })
], -1), Hd = { id: "tags-space" }, Zd = ["onClick"], Ud = /* @__PURE__ */ h("div", { class: "details-div bg-white dark:bg-gray-800" }, [
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
      /* @__PURE__ */ ee(" File Details")
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
], -1), Yd = { class: "bg-white custom-file-picker-action" }, Wd = ["disabled", "onClick"], Fd = {
  name: "VFModalUpload"
}, Kd = /* @__PURE__ */ Object.assign(Fd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter"), { apiUrl: i } = $e(), { t: n } = j("i18n"), a = j("maxFileSize"), d = A(null), m = A(null), l = A(null), v = A([]), p = A("");
    let b = A([]);
    const S = A(!0), k = () => {
      p.value = "", d.value.start();
    }, M = j("postData");
    _e(() => {
      d.value = new ht.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: a,
        multiple_queues: !0,
        file_data_name: "file",
        url: i.value + "?" + Xe(
          Object.assign(M, {
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
          FilesAdded: function(H, T) {
            S.value = !1, ht.each(T, function(L) {
              v.value.push({
                id: L.id,
                name: L.name,
                size: ht.formatSize(L.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(H, T) {
            v.value[v.value.findIndex((L) => L.id == T.id)].percent = T.percent + "%";
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
          Error: function(H, T) {
            d.value.stop(), T.code == ht.HTTP_ERROR ? p.value = n(JSON.parse(T.response).message) : T.code == ht.FILE_SIZE_ERROR ? p.value = n(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [a]
            ) : p.value = n(T.message);
          }
        }
      }), d.value.init(), N();
    });
    function N() {
      let H = document.querySelector("#search-terms-file-picker");
      H.addEventListener("keypress", (T) => {
        T.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: T.target.value
        }), H.value = "");
      });
    }
    function $(H) {
      const T = b.value.findIndex((L) => L.tag_id === H);
      b.value.splice(T, 1);
    }
    return (H, T) => (w(), X(Ne, null, {
      buttons: K(() => [
        h("div", zd, [
          Rd,
          Bd,
          Vd,
          h("div", Hd, [
            (w(!0), I(oe, null, be(x(b), (L) => (w(), I("span", {
              key: L.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (B) => $(L.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, Zd),
              h("p", null, E(L.tag_name), 1)
            ]))), 128))
          ])
        ]),
        Ud,
        h("div", Yd, [
          h("button", {
            disabled: S.value,
            onClick: Fe(k, ["prevent"]),
            type: "button",
            class: fe([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, E(x(n)("Upload")), 11, Wd),
          h("button", {
            type: "button",
            onClick: T[1] || (T[1] = (L) => x(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Cancel")), 1)
        ])
      ]),
      default: K(() => [
        h("div", Cd, [
          h("div", Id, [
            h("div", Ed, [
              Td,
              h("h3", Ld, E(x(n)("Upload files")), 1)
            ]),
            Ad
          ]),
          h("div", $d, [
            h("div", Nd, [
              h("div", Od, [
                (w(!0), I(oe, null, be(v.value, (L) => (w(), I("div", null, [
                  h("div", {
                    id: L.id
                  }, [
                    ee(E(L.name) + " ( " + E(L.size) + ") ", 1),
                    h("b", null, E(L.percent), 1)
                  ], 8, jd)
                ]))), 256)),
                v.value.length ? F("", !0) : (w(), I("div", Pd, E(x(n)("No files selected!")), 1))
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
              p.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: T[0] || (T[0] = (L) => p.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(p.value), 1)
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
}), Gd = { class: "sm:flex custom-new-folder-popup" }, Xd = { class: "custom-file-picker-title" }, qd = { class: "file-picker-title-img" }, Qd = /* @__PURE__ */ h("svg", {
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
], -1), Jd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, eh = /* @__PURE__ */ h("hr", null, null, -1), th = { class: "mt-3 text-center w-full p-4 h-full" }, rh = { class: "mt-2 create-folder-form" }, sh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ih = {
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
}, null, -1), nh = [
  oh
], ah = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, lh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ch = [
  lh
], uh = { class: "ml-1.5" }, dh = ["onKeyup", "placeholder"], hh = {
  name: "VFModalArchive"
}, fh = /* @__PURE__ */ Object.assign(hh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n"), a = A(""), d = A(""), m = A(e.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: i.value,
          path: e.current.dirname,
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
    return (v, p) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", Gd, [
          h("div", Xd, [
            h("div", qd, [
              Qd,
              h("h3", Jd, E(x(n)("Archive the files")), 1)
            ]),
            eh
          ]),
          h("div", th, [
            h("div", rh, [
              (w(!0), I(oe, null, be(m.value, (b) => (w(), I("p", sh, [
                b.type == "dir" ? (w(), I("svg", ih, nh)) : (w(), I("svg", ah, ch)),
                h("span", uh, E(b.basename), 1)
              ]))), 256)),
              Te(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => a.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, dh), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), ph = { class: "sm:flex sm:items-start" }, gh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), mh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bh = { class: "mt-2" }, yh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Sh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, wh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), _h = [
  wh
], xh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Dh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), kh = [
  Dh
], Mh = { class: "ml-1.5" }, Ch = { class: "my-1 text-sm text-gray-500" }, Ih = {
  name: "VFModalUnarchive"
}, Eh = /* @__PURE__ */ Object.assign(Ih, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter");
    j("storage");
    const i = j("adapter"), { t: n } = j("i18n");
    A("");
    const a = A(e.selection.items[0]), d = A(""), m = A([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: i.value,
          path: e.current.dirname,
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
    return (v, p) => (w(), X(Ne, null, {
      buttons: K(() => [
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
      default: K(() => [
        h("div", ph, [
          gh,
          h("div", mh, [
            h("h3", vh, E(x(n)("Unarchive")), 1),
            h("div", bh, [
              (w(!0), I(oe, null, be(m.value, (b) => (w(), I("p", yh, [
                b.type == "dir" ? (w(), I("svg", Sh, _h)) : (w(), I("svg", xh, kh)),
                h("span", Mh, E(b.basename), 1)
              ]))), 256)),
              h("p", Ch, E(x(n)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), Th = { class: "sm:flex sm:items-start" }, Lh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Ah = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, $h = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nh = { class: "mt-2" }, Oh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, jh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ph = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), zh = [
  Ph
], Rh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Bh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Vh = [
  Bh
], Hh = { class: "ml-1.5" }, Zh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Uh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Yh = /* @__PURE__ */ h("svg", {
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
], -1), Wh = { class: "ml-1.5 overflow-auto" }, Fh = {
  name: "VFModalMove"
}, Kh = /* @__PURE__ */ Object.assign(Fh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = j("emitter"), { t: i } = j("i18n");
    j("storage");
    const n = j("adapter"), a = A(e.selection.items.from), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: n.value,
          path: e.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: e.current.dirname,
            to: e.selection.items.to.path,
            files: a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          }), s.emit("vf-toast-push", { label: i("Files moved.", e.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, v) => (w(), X(Ne, null, {
      buttons: K(() => [
        h("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: K(() => [
        h("div", Th, [
          Lh,
          h("div", Ah, [
            h("h3", $h, E(x(i)("Move files")), 1),
            h("div", Nh, [
              (w(!0), I(oe, null, be(a.value, (p) => (w(), I("p", Oh, [
                p.type == "dir" ? (w(), I("svg", jh, zh)) : (w(), I("svg", Rh, Vh)),
                h("span", Hh, E(p.path), 1)
              ]))), 256)),
              h("p", Zh, E(x(i)("Are you sure you want to move these files?")), 1),
              h("p", Uh, [
                Yh,
                h("span", Wh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), X(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: K(() => [
                  ee(E(d.value), 1)
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
}), Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: fh,
  ModalDelete: Fl,
  ModalMessage: tc,
  ModalMove: Kh,
  ModalNewFile: _c,
  ModalNewFolder: fc,
  ModalPreview: ad,
  ModalRename: Md,
  ModalUnarchive: Eh,
  ModalUpload: Kd
}, Symbol.toStringTag, { value: "Module" })), qt = {
  VueFinder: bl,
  ...Gh
};
const Qh = {
  install(r) {
    for (const e in qt)
      if (qt.hasOwnProperty(e)) {
        const s = qt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Qh as default
};
