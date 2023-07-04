import { ref as L, watch as Rt, inject as P, openBlock as _, createElementBlock as C, createElementVNode as p, unref as x, normalizeClass as he, createCommentVNode as X, createTextVNode as se, toDisplayString as M, createVNode as Ce, TransitionGroup as Lo, withCtx as Z, Fragment as le, renderList as we, reactive as Lt, onMounted as Me, onUpdated as Oo, withDirectives as Se, vShow as Tt, withModifiers as We, nextTick as Vt, isRef as as, vModelSelect as jr, createStaticVNode as Po, customRef as No, withKeys as ot, vModelText as nt, normalizeStyle as ls, provide as Ue, createBlock as q, resolveDynamicComponent as jo, renderSlot as Jt } from "vue";
import dt from "plupload";
var is;
const Ot = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Pt = (r, { method: e = "get", params: s = {}, json: o = !0, signal: a = null }) => {
  const i = { method: e };
  if (i.signal = a, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    i.headers = {}, Ot && (i.headers["X-CSRF-Token"] = Ot);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    i.body = d;
  }
  return fetch(r, i).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Ro(r) {
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
function Qt(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(e));
  Rt(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function a(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: a, clearStore: i };
}
const Rr = L("");
function Ae() {
  function r(e) {
    Rr.value = e;
  }
  return { apiUrl: Rr, setApiUrl: r };
}
const Vo = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Bo = {
  key: 0,
  class: "flex text-center"
}, zo = ["aria-label"], Ho = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Uo = [
  Ho
], Ko = ["aria-label"], Yo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Wo = [
  Yo
], Xo = ["aria-label"], Zo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Fo = [
  Zo
], qo = {
  key: 1,
  class: "flex text-center"
}, Go = { class: "pl-2" }, Jo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Qo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, en = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), tn = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), rn = [
  en,
  tn
], sn = { class: "flex text-center items-center justify-end" }, on = ["aria-label"], nn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), an = [
  nn
], ln = ["aria-label"], cn = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, un = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, dn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, hn = ["aria-label"], fn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, pn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, gn = {
  name: "VFToolbar"
}, mn = /* @__PURE__ */ Object.assign(gn, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: o } = P("storage"), { t: a } = P("i18n"), i = L(s("viewport", "grid")), d = L([]), m = L(s("full-screen", !1)), l = L("");
    e.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = P("loadingState"), f = () => v.value, b = () => {
      m.value = !m.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), e.on("vf-view-toggle", (S) => {
      o("viewport", S), i.value = S;
    }), (S, T) => (_(), C("div", Vo, [
      l.value.length ? (_(), C("div", qo, [
        p("div", Go, [
          se(M(x(a)("Search results for")) + " ", 1),
          p("span", Jo, M(l.value), 1)
        ]),
        f() ? (_(), C("svg", Qo, rn)) : X("", !0)
      ])) : (_(), C("div", Bo, [
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: T[0] || (T[0] = (E) => x(e).emit("vf-modal-show", { type: "new-folder", items: d.value }))
        }, Uo, 8, zo),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: T[1] || (T[1] = (E) => !d.value.length || x(e).emit("delete-button"))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Wo, 2))
        ], 8, Ko),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (_(), C("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: T[2] || (T[2] = (E) => !d.value.length || x(e).emit("vf-modal-show", { type: "unarchive", items: d.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Fo, 2))
        ], 8, Xo)) : X("", !0)
      ])),
      p("div", sn, [
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (_(), C("svg", {
            onClick: T[3] || (T[3] = (E) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, an))
        ], 8, on),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (_(), C("svg", cn, [
            m.value ? (_(), C("path", un)) : (_(), C("path", dn))
          ]))
        ], 8, ln),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: T[4] || (T[4] = (E) => l.value.length || x(e).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (_(), C("path", fn)) : X("", !0),
            i.value == "list" ? (_(), C("path", pn)) : X("", !0)
          ], 2))
        ], 8, hn)
      ])
    ]));
  }
});
var vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var cs = { exports: {} };
(function(r, e) {
  (function(s, o) {
    r.exports = o();
  })(vn, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var g, n, h, y, w = [], D = !0, z = !1;
        try {
          if (h = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            D = !1;
          } else
            for (; !(D = (g = h.call(t)).done) && (w.push(g.value), w.length !== u); D = !0)
              ;
        } catch (W) {
          z = !0, n = W;
        } finally {
          try {
            if (!D && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (z)
              throw n;
          }
        }
        return w;
      }
    }
    function o(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
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
    function i(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var t = 0; t < u.length; t++) {
        var g = u[t];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, V(g.key), g);
      }
    }
    function m(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = V(u), u in c ? Object.defineProperty(c, u, {
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
    function f(c) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, f(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, n) {
        return g.__proto__ = n, g;
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
    function T(c, u, t) {
      return S() ? T = Reflect.construct.bind() : T = function(n, h, y) {
        var w = [null];
        w.push.apply(w, h);
        var D = Function.bind.apply(n, w), z = new D();
        return y && b(z, y.prototype), z;
      }, T.apply(null, arguments);
    }
    function E(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function I(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(g) {
        if (g === null || !E(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, n);
        }
        function n() {
          return T(g, arguments, f(this).constructor);
        }
        return n.prototype = Object.create(g.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, g);
      }, I(c);
    }
    function $(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function U(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return $(c);
    }
    function N(c) {
      var u = S();
      return function() {
        var g = f(c), n;
        if (u) {
          var h = f(this).constructor;
          n = Reflect.construct(g, arguments, h);
        } else
          n = g.apply(this, arguments);
        return U(this, n);
      };
    }
    function j(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = f(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, t, g) {
        var n = j(u, t);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, t);
          return h.get ? h.get.call(arguments.length < 3 ? u : g) : h.value;
        }
      }, B.apply(this, arguments);
    }
    function F(c, u) {
      return G(c) || s(c, u) || te(c, u) || pe();
    }
    function k(c) {
      return R(c) || oe(c) || te(c) || ve();
    }
    function R(c) {
      if (Array.isArray(c))
        return ce(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function oe(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function te(c, u) {
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
    function ve() {
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
        if (Array.isArray(c) || (t = te(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var g = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, w;
      return {
        s: function() {
          t = t.call(c);
        },
        n: function() {
          var D = t.next();
          return h = D.done, D;
        },
        e: function(D) {
          y = !0, w = D;
        },
        f: function() {
          try {
            !h && t.return != null && t.return();
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
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var g = t.call(c, u || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function V(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, t, g) {
      var n = u.x, h = u.y, y = g.x, w = g.y, D = {
        "+": {
          x: n + y,
          y: h + w
        },
        "-": {
          x: n - y,
          y: h - w
        },
        "*": {
          x: n * y,
          y: h * w
        },
        "/": {
          x: n / y,
          y: h / w
        }
      };
      return D[t];
    }, ee = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, H = function(u) {
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
    }, be = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var g = new MutationObserver(t);
      c.forEach(function(h, y) {
        g.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return fo(g, t);
      };
      return {
        observer: g,
        callback: t,
        cleanup: n
      };
    }, xt = function(c) {
      var u = Ct(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, kt = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Yt = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Dt = function(c, u) {
      var t;
      return function() {
        for (var g = arguments.length, n = new Array(g), h = 0; h < g; h++)
          n[h] = arguments[h];
        var y = function() {
          t = null, c.apply(void 0, n);
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
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = g[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (g.push(y), h++, t(g, h)) : g;
      };
      return u([c]);
    }, to = function(c, u) {
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
      return Ne(c).forEach(function(g) {
        var n = u.getRect(g);
        t.top = Math.min(t.top, n.top), t.left = Math.min(t.left, n.left), t.bottom = Math.max(t.bottom, n.bottom), t.right = Math.max(t.right, n.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Ct = function(c) {
      return !c || c instanceof Document ? Wt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Wt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Wt().y
      };
    }, $r = function(c) {
      var u = c.elementRect, t = c.containerRect, g = c.tolerance, n = g === void 0 ? {
        x: 0,
        y: 0
      } : g, h = [];
      return u.top - n.y < t.top && h.push("top"), u.left - n.x < t.left && h.push("left"), u.bottom + n.y > t.bottom && h.push("bottom"), u.right + n.y > t.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, ro = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, so = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, g = c.pointerPos, n = {};
      return g.x > t.x - u.x ? (n.left = t.x - u.x, n.width = g.x - t.x + u.x) : (n.left = g.x, n.width = t.x - g.x - u.x), g.y > t.y - u.y ? (n.top = t.y - u.y, n.height = g.y - t.y + u.y) : (n.top = g.y, n.height = t.y - g.y - u.y), n;
    }, Ir = function(u) {
      var t = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return t;
      if (g.transform.indexOf("3d") >= 0) {
        var n = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var w = g.transform.trim().match(/matrix\((.*?)\)/);
      if (w && w.length) {
        var D, z = (D = w[1]) === null || D === void 0 ? void 0 : D.split(",");
        t.x = parseInt(z[4]) || 0, t.y = parseInt(z[5]) || 0;
      }
      return t;
    }, oo = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Ir(u);
      var g = {
        x: 0,
        y: 0
      }, n = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var w, D = (w = y[1]) === null || w === void 0 ? void 0 : w.split(",");
          g.x = parseInt(D[0]) || 0, g.y = parseInt(D[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ir(u) : g;
    }, no = function(u) {
      var t = u.style, g = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!g.x && !g.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return g;
    }, io = function(c, u) {
      return u ? oo(c) : no(c);
    }, ao = function(c) {
      var u = c.element, t = c.edges, g = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      t.includes("top") && lt(u, {
        y: h.y + n.top - g.top,
        x: h.x
      }, y), t.includes("left") && lt(u, {
        y: h.y,
        x: h.x + n.left - g.left
      }, y), t.includes("bottom") && lt(u, {
        y: h.y + n.bottom - g.bottom,
        x: h.x
      }, y), t.includes("right") && lt(u, {
        y: h.y,
        x: h.x + n.right - g.right
      }, y);
    }, Ar = function(c) {
      var u = c.computedStyle, t = c.node, g = u.position, n = g === "absolute" || g === "relative" || g === "fixed";
      !(t instanceof Document) && !n && (t.style.position = "relative");
    }, lo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, g = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, w = c.canScroll, D = c.scrollCallback, z = {
        x: 0,
        y: 0
      }, W = u ? t * 4 * g : t * g;
      return h.left.includes(n) && (z.x = y.x || -W, !u && !y.x && w && D(["left"], t)), h.right.includes(n) && (z.x = y.x || W, !u && !y.x && w && D(["right"], t)), h.up.includes(n) && (z.y = y.y || -W, !u && !y.y && w && D(["top"], t)), h.down.includes(n) && (z.y = y.y || W, !u && !y.y && w && D(["bottom"], t)), z;
    }, co = function(c) {
      var u = c.element, t = c.force, g = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !t || (n.has(u) ? g && n.delete(u) : n.add(u), u.classList.add(h));
    }, uo = function(c) {
      var u = c.element, t = c.force, g = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !t)
        return !1;
      var y = g.has(u), w = n.has(u);
      y && !w ? g.delete(u) : !y && w && g.add(u), u.classList.remove(h);
    }, at = function(u, t, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, Y = function(u, t, g, n) {
      if (t === void 0)
        return g ? l({}, u, n) : {};
      if (t === null)
        return l({}, u, null);
      var h = !0, y = !1, w = typeof n == "string";
      w && (h = typeof t == "string" || t instanceof String), w && !h && (y = !0, at(u, "string"));
      var D = !Number.isNaN(n) && typeof n == "number";
      D && (h = !Number.isNaN(t) && typeof t == "number"), D && !h && (y = !0, at(u, "number"));
      var z = Object.prototype.toString.call(n) === "[object Object]";
      z && (h = Object.prototype.toString.call(t) === "[object Object]"), z && !h && (y = !0, at(u, "object"));
      var W = typeof n == "boolean";
      W && (h = typeof t == "boolean"), W && !h && (y = !0, at(u, "boolean"));
      var ie = Array.isArray(n);
      ie && (h = Array.isArray(t)), ie && !h && (y = !0, at(u, "array"));
      var xe = y || g;
      return u === "dragKeys" && h ? l({}, u, Object.assign(n, t)) : u === "dragKeys" && !h ? xe ? l({}, u, n) : {} : (u === "dropZones" && h && new Set(t.map(function(ke) {
        return ke.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? l({}, u, t) : xe ? l({}, u, n) : {});
    }, ho = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Ge = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (t > 0) {
        var n = (c.right - c.left) * t, h = (c.bottom - c.top) * t;
        g = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, t = c.posDirection, g = c.containerRect, n = c.useTransform, h = io(u, n), y = O(h, "+", t);
      lt(u, y, n);
      var w = u.getBoundingClientRect(), D = $r({
        elementRect: w,
        containerRect: g
      });
      ao({
        element: u,
        edges: D,
        elementRect: w,
        containerRect: g,
        elementPos: y,
        useTransform: n
      });
    }, fo = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, po = function(c, u, t) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? g || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, w = u.includes("left") && n.scrollLeft > 0, D = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * t), y && (n.scrollTop += 1 * t), w && (n.scrollLeft -= 1 * t), D && (n.scrollLeft += 1 * t);
      }
    }, lt = function(c, u, t) {
      if (t) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, go = function(c) {
      for (var u = c.subscribe, t = c.publish, g = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
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
            condition: function(ie) {
              return ie.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var ie = h.getTarget();
              return a({}, ie ? {
                dropTarget: ie.toObject()
              } : {});
            }
          }
        ]
      }, w = function() {
        var ie = F(z[D], 2), xe = ie[0], ke = ie[1];
        ["pre", !1].forEach(function(Ee) {
          return u(Ee ? "".concat(xe, ":").concat(Ee) : xe, function(ne) {
            return ke.forEach(function(me) {
              return (!me.condition || me.condition(ne)) && t(Ee ? "".concat(Ee).concat(me.name) : me.name, a(a({
                items: n.elements,
                isDragging: g.isDragging
              }, ne), me.extraData ? me.extraData(ne) : {}));
            });
          });
        });
      }, D = 0, z = Object.entries(y); D < z.length; D++)
        w();
    }, Ne = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(n) {
          t.reset(), t._node = n, Ar({
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
          t._observers = be(t.parentNodes, Dt(function(n) {
            t.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              event: n,
              item: t
            });
          }, 60));
        }), l(this, "reset", function() {
          t._computedStyle = void 0, t._rect = void 0, t._computedBorder = void 0, t._parentNodes = void 0;
        }), l(this, "stop", function() {
          t._observers.cleanup(), t.reset();
        }), l(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          t.DS.PubSub.publish("Area:scroll:pre", y), po(t._node, n, h), t.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.setArea(h.area);
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
          return this._rect ? this._rect : this._rect = to(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.HTMLNode);
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          t._dragKeys = {
            up: t.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: t.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: t.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: t.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, t._dragKeysFlat = [].concat(k(t._dragKeys.up), k(t._dragKeys.down), k(t._dragKeys.left), k(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, w = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(w) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var D = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], D), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var z = lo({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: w,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (z = t.limitDirection(z)), t._elements.forEach(function(W) {
              return Lr({
                element: W,
                posDirection: z,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), l(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, w = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(w) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: h,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), l(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), l(this, "stop", function(n) {
          n != null && n.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), l(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !t._elements.length || y || t.DS.continue)) {
            var w = O(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (w = t.limitDirection(w)), t._elements.forEach(function(D) {
              return Lr({
                element: D,
                posDirection: w,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(n) {
          var h = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, w = {
            top: h.top - t._selectionRect.top + y.y,
            left: h.left - t._selectionRect.left + y.x,
            bottom: h.bottom - t._selectionRect.bottom + y.y,
            right: h.right - t._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, w.top)), n.x < 0 && (n.x = Math.max(n.x, w.left)), n.y > 0 && (n.y = Math.min(n.y, w.bottom)), n.x > 0 && (n.x = Math.min(n.x, w.right)), t._selectionRect.top += n.y, t._selectionRect.bottom += n.y, t._selectionRect.left += n.x, t._selectionRect.right += n.x), n;
        }), l(this, "handleZIndex", function(n) {
          t._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? O(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? O(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, g;
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS, n = u.id, h = u.element, y = u.droppables;
        i(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(w) {
          if (!t.isDestroyed) {
            var D = t.droppables.filter(function(z) {
              return t.DS.SelectedSet.has(z);
            });
            D.length && (D.forEach(function(z) {
              z.classList[w]("".concat(t.Settings.droppableClass)), z.classList[w]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[w]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var w;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(t.Settings.droppedTargetClass), D.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function(D) {
            return !t.DS.SelectedSet.has(D);
          }), (w = t._itemsDropped) !== null && w !== void 0 && w.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var w, D, z;
          t.isDestroyed || (t._itemsDropped = k(new Set([].concat(k(t._itemsDropped), k((w = t.droppables) === null || w === void 0 ? void 0 : w.filter(function(W) {
            return t.DS.SelectedSet.has(W);
          }))))), (D = t._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(t.Settings.droppedTargetClass)), W.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (z = t._itemsDropped) !== null && z !== void 0 && z.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var w = !1;
          t.droppables.forEach(function(D) {
            t.itemsInside.includes(D) ? (D.classList.add("".concat(t.Settings.droppedInsideClass)), D.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), w = !0) : (D.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), D.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), w ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), l(this, "start", function(w) {
          var D = w.isDragging;
          !D || t.isDestroyed || t.setReadyClasses("add");
        }), l(this, "stop", function(w) {
          var D = w.isDragging;
          !D || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Ne(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(w) {
          var D = w.settings;
          t.element && (t.element.classList.remove(D["dropZoneClass:pre"]), t.element.classList.add(D.dropZoneClass));
        }), this._observers = be(this.parentNodes, Dt(function() {
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
            return Ge(t.DS.SelectableSet.rects.get(g), t.rect, t.Settings.dropInsideThreshold) ? [g] : [];
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
    }(), yo = /* @__PURE__ */ m(
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
        i(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = h.map(function(y) {
            return new bo(a({
              DS: t.DS
            }, y));
          }), t._zones.forEach(function(y) {
            t._zoneByElement.set(y.element, y), t._zoneById.set(y.id, y), y.droppables.forEach(function(w) {
              var D = t._zonesByDroppable.get(w);
              if (!(D != null && D.length))
                return t._zonesByDroppable.set(w, [y]);
              t._zonesByDroppable.set(w, k(new Set([].concat(k(D), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(n) {
          t._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, w = h.y, D = 0, z = n.length; D < z; D++) {
            var W = t._zoneByElement.get(n[D]);
            if (W && Ge(W.rect, {
              left: y,
              right: y,
              top: w,
              bottom: w
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = t.getTarget();
            t._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(n) {
          var h = t._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), l(this, "getItemsInsideById", function(n, h) {
          var y = t._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var w = y.itemsInside;
          return h && y.handleItemsInsideClasses(), w;
        }), l(this, "getTarget", function(n) {
          var h;
          if ((h = t._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || t.DS.stores.PointerStore.currentVal.x, w = (n == null ? void 0 : n.y) || t.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, w);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              D,
              {
                x: y,
                y: w
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return t.setDropZones(h);
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
    ), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return t.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          t.stop(), t.Settings.usePointerEvents ? t.DS.Area.HTMLNode.addEventListener("pointerdown", t.start, {
            passive: !1
          }) : t.DS.Area.HTMLNode.addEventListener("mousedown", t.start), t.DS.Area.HTMLNode.addEventListener("touchstart", t.start, {
            passive: !1
          }), t.DS.publish("Interaction:init", {});
        }), l(this, "start", function(n) {
          return t.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), l(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), t._canInteract(n) && (t.isInteracting = !0, t.isDragging = t.isDragEvent(n), t.DS.publish("Interaction:start", {
            event: n,
            isDragging: t.isDragging
          }), t.Settings.usePointerEvents ? (document.addEventListener("pointerup", t.reset), document.addEventListener("pointercancel", t.reset)) : document.addEventListener("mouseup", t.reset), document.addEventListener("touchend", t.reset));
        }), l(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(t.Settings.selectableClass))
          );
          return !t.Settings.draggability || t.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (t.Settings.immediateDrag && (t.DS.SelectedSet.size ? t.DS.SelectedSet.has(h) || (t.DS.SelectedSet.clear(), t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!t.DS.SelectedSet.has(h));
        }), l(this, "onClick", function(n) {
          var h = n.event;
          if (t._canInteract(h) && !(h.detail > 0)) {
            var y = t.DS, w = y.stores, D = w.PointerStore, z = w.KeyStore, W = y.SelectableSet, ie = y.SelectedSet;
            D.start(h);
            var xe = (
              /** @type {any} */
              h.target
            );
            W.has(xe) && (z.isMultiSelectKeyPressed(h) || ie.clear(), ie.toggle(xe), t.reset());
          }
        }), l(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.DS.Area.HTMLNode;
          t.isInteracting = !1, t.isDragging = !1, t.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", t.reset), document.removeEventListener("pointercancel", t.reset)) : (n.removeEventListener("mousedown", t.start), document.removeEventListener("mouseup", t.reset)), n.removeEventListener("touchstart", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", t.reset);
        }), l(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, w = n.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: w,
            isDragging: t.isDragging
          });
        }), l(this, "reset", function(n) {
          return t.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), l(this, "_reset", function(n) {
          var h = t.isDragging;
          t.stop(), t.init(), t.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.stop(h["area:pre"]), t.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return t._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return t._reset(h);
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
    }(), wo = /* @__PURE__ */ m(
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(n, h) {
          return Array.isArray(t.subscribers[n]) || (t.subscribers[n] = []), t.subscribers[n].push(h), t.subscribers[n].length - 1;
        }), l(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? t.subscribers[n].splice(y, 1) : h && (t.subscribers[n] = t.subscribers[n].filter(function(w) {
            return w !== h;
          }));
        }), l(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return t._publish(y, h);
          }) : t._publish(n, h);
        }), l(this, "_publish", function(n, h) {
          var y = t.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? t._handlePrePublish(y, h) : t._handlePublish(y, h));
        }), l(this, "_handlePublish", function(n, h) {
          for (var y = 0, w = n.length; y < w; y++) {
            if (t.DS.stopped)
              return;
            n[y](h);
          }
        }), l(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (t.DS.stopped)
              return;
            n[y](h);
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
    ), _o = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = N(t);
      function t(g) {
        var n, h = g.DS;
        return i(this, t), n = u.call(this), l($(n), "_rects", void 0), l($(n), "_timeout", void 0), l($(n), "init", function() {
          return Ne(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), l($(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), l($(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l($(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l($(n), "addAll", function(y) {
          return y.forEach(function(w) {
            return n.add(w);
          });
        }), l($(n), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return n.delete(w);
          });
        }), l($(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var w = y.settings;
          n.forEach(function(D) {
            D.classList.remove(w["selectableClass:pre"]), D.classList.add(w.selectableClass);
          });
        }), n;
      }
      return m(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (B(f(t.prototype), "has", this).call(this, n))
              return this;
            var h = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", h), n.classList.add(this.Settings.selectableClass), n.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ar({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), B(f(t.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!B(f(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selectable:removed:pre", h), n.classList.remove(this.Settings.selectableClass), n.classList.remove(this.Settings.hoverClass), n.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), B(f(t.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
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
          var n = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return n._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return n._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), t;
    }(/* @__PURE__ */ I(Set)), xo = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = N(t);
      function t(g) {
        var n, h = g.DS;
        return i(this, t), n = u.call(this), l($(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), l($(n), "addAll", function(y) {
          return y.forEach(function(w) {
            return n.add(w);
          });
        }), l($(n), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return n.delete(w);
          });
        }), n.DS = h, n;
      }
      return m(t, [{
        key: "add",
        value: function(n) {
          if (B(f(t.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), B(f(t.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!B(f(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = B(f(t.prototype), "delete", this).call(this, n);
          return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(n) {
            return this.has(n) ? this.delete(n) : this.add(n), n;
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
    }(/* @__PURE__ */ I(Set)), ko = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (t._storePrevious(h), t._handleInsideSelection(!0, h));
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          h || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(n, h) {
          var y = t.DS, w = y.SelectableSet, D = y.SelectorArea, z = y.Selector, W = t.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && t.Settings.multiSelectToggling, ie = t.Settings.selectionThreshold, xe = w.rects, ke = z.rect, Ee = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), me = ge(xe), ct;
          try {
            for (me.s(); !(ct = me.n()).done; ) {
              var Mt = F(ct.value, 2), ut = Mt[0], Et = Mt[1];
              D.isInside(ut, Et) && (Ge(Et, ke, ie) ? Ee.set(ut, Et) : ne.set(ut, Et));
            }
          } catch (Xt) {
            me.e(Xt);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var Nr = t.filterSelected({
              select: Ee,
              unselect: ne,
              selectorRect: ke
            }), Io = Nr.select, Ao = Nr.unselect;
            Io.forEach(function(Xt, Zt) {
              return co({
                element: Zt,
                force: n,
                multiSelectionToggle: W,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), Ao.forEach(function(Xt, Zt) {
              return uo({
                element: Zt,
                force: n,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass,
                PrevSelectedSet: t._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(t) {
          var g = this.DS, n = g.stores.KeyStore, h = g.SelectedSet;
          n.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Do = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var n, h;
          t.HTMLNode && (n = t.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Yt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (h = t.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = t.DS.stores.PointerStore, w = y.initialValArea;
            Or(t.HTMLNode, H(w, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || t.DS.continue)) {
            var y = t.DS.stores, w = y.ScrollStore, D = y.PointerStore, z = so({
              scrollAmount: w.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Or(t.HTMLNode, z), t._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorClass:pre"]), t.HTMLNode.classList.add(h.selectorClass);
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
        var t = this, g = u.DS;
        i(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[h][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var n = t.DS.Area.rect, h = t.DS.Area.computedBorder, y = t.HTMLNode.style, w = "".concat(n.top + h.top, "px"), D = "".concat(n.left + h.left, "px"), z = "".concat(n.width, "px"), W = "".concat(n.height, "px");
          y.top !== w && (y.top = w), y.left !== D && (y.left = D), y.width !== z && (y.width = z), y.height !== W && (y.height = W);
        }), l(this, "stop", function(n) {
          t.stopAutoScroll(), n && t.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var n = t.DS, h = n.stores.PointerStore, y = n.Area;
            t.currentEdges = $r({
              elementRect: H(h.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(n, h) {
          return t.DS.Area.HTMLNode.contains(n) && t.DS.stores.ScrollStore.canScroll ? !0 : Ge(t.rect, h || n.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = kt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), t.HTMLNode.classList.add(h.selectorAreaClass);
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
            var g = this.DS.stores.PointerStore, n = t ? g.getPointerPosition(t) : g.initialVal;
            return Ge({
              left: n.x,
              top: n.y,
              right: n.x,
              bottom: n.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", t.keydown), document.addEventListener("keyup", t.keyup), window.addEventListener("blur", t.reset);
        }), l(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), t._currentValues.add(h), t.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), l(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), t._currentValues.delete(h), t.DS.publish("KeyStore:up", {
            event: n,
            key: h
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
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || t && n.some(function(h) {
              return t[g._keyMapping[h]];
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
        var t = this, g = u.DS;
        i(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          t.Settings.usePointerEvents ? document.addEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", t.update), document.addEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(n) {
          return ro({
            event: t._normalizedEvent(n)
          });
        }), l(this, "update", function(n) {
          n && (t.DS.publish("PointerStore:updated:pre", {
            event: n
          }), t.currentVal = t.getPointerPosition(n), t._isMouseInteraction && t.DS.publish("PointerStore:updated", {
            event: n
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
        }), l(this, "reset", function(n) {
          n && (t.currentVal = t.lastVal = t.getPointerPosition(n), t.stop(), t.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return t.reset(h);
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
          this._initialVal = t, this._initialValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
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
          this._currentVal = t, this._currentValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
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
          this._lastVal = t, this._lastValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
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
          var t = O(this.currentVal, "-", this.initialVal), g = _e(this.DS.stores.SettingsStore.s.zoom), n = O(O(t, "*", g), "-", t);
          return {
            x: t.x + n.x,
            y: t.y + n.y
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
    }(), $o = /* @__PURE__ */ m(
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
        var t = this, g = u.DS, n = u.settings;
        i(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(h) {
          var y = h.settings, w = h.init;
          return t.DS.publish("Settings:updated:pre", a({
            settings: y
          }, w ? {
            init: w
          } : {}));
        }), l(this, "_update", function(h) {
          for (var y = h.settings, w = h.init, D = ho(y, w), z = function() {
            var ke, Ee = F(ie[W], 2), ne = Ee[0], me = Ee[1];
            ne in t._settings || Object.defineProperty(t.s, ne, {
              get: function() {
                return t._settings[ne];
              },
              set: function(ut) {
                return t.update({
                  settings: l({}, ne, ut)
                });
              }
            }), t._settings["".concat(ne, ":pre")] = t._settings[ne], t._settings[ne] = me;
            var ct = {
              settings: (ke = {}, l(ke, ne, t._settings[ne]), l(ke, "".concat(ne, ":pre"), t._settings["".concat(ne, ":pre")]), ke)
            };
            t.DS.publish("Settings:updated", ct), t.DS.publish("Settings:updated:".concat(ne), ct);
          }, W = 0, ie = Object.entries(D); W < ie.length; W++)
            z();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Pr = /* @__PURE__ */ function() {
      function c(u) {
        var t = this;
        i(this, c), l(this, "continue", !1), l(this, "start", function() {
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
          var n;
          return (n = t.DropZones.getTarget(g)) === null || n === void 0 ? void 0 : n.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return t.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, n) {
          return t.DropZones.getItemsInsideById(g, n);
        }), this.PubSub = new wo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new $o({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Eo({
          DS: this
        }), this.stores.ScrollStore = new To({
          DS: this
        }), this.stores.KeyStore = new Mo({
          DS: this
        }), this.Area = new mo({
          DS: this
        }), this.Selector = new Do({
          DS: this
        }), this.SelectorArea = new Co({
          DS: this
        }), this.SelectableSet = new _o({
          DS: this
        }), this.SelectedSet = new xo({
          DS: this
        }), this.Selection = new ko({
          DS: this
        }), this.Drag = new vo({
          DS: this
        }), this.DropZones = new yo({
          DS: this
        }), this.Interaction = new So({
          DS: this
        }), go({
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
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Ne(t)), n || this.addSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ne(t)), n && this.removeSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ne(t).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(t, n, h) : g.addSelection(t, n, h);
          }), n && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, g, n), this.getSelection();
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
        value: function(t, g, n) {
          var h = Ne(t);
          return this.SelectableSet.addAll(h), g && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, g), this.addSelectables(t, n);
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
        value: function(t, g, n) {
          return this.SelectableSet.deleteAll(Ne(t)), g && this.removeSelection(t), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Pr.isCollision = Ge, Pr;
  });
})(cs);
var yn = cs.exports;
const Sn = /* @__PURE__ */ bn(yn), us = (r, e, s, o, a) => (e = Math, s = e.log, o = 1024, a = s(r) / s(o) | 0, r / e.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ds = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), wn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, _n = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), xn = [
  _n
], kn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Dn = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Cn = [
  Dn
], Mn = {
  name: "VFSortIcon"
}, $t = /* @__PURE__ */ Object.assign(Mn, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (_(), C("div", null, [
      r.direction == "down" ? (_(), C("svg", wn, xn)) : X("", !0),
      r.direction == "up" ? (_(), C("svg", kn, Cn)) : X("", !0)
    ]));
  }
}), En = ["onClick"], Tn = {
  name: "VFToast.vue"
}, $n = /* @__PURE__ */ Object.assign(Tn, {
  setup(r) {
    const e = P("emitter"), { getStore: s } = P("storage"), o = L(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = L([]), d = (l) => {
      i.value.splice(l, 1);
    }, m = (l) => {
      let v = i.value.findIndex((f) => f.id === l);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      i.value = [];
    }), e.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, i.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (_(), C("div", {
      class: he([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ce(Lo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: Z(() => [
          (_(!0), C(le, null, we(i.value, (f, b) => (_(), C("div", {
            onClick: (S) => d(b),
            key: f,
            class: he([a(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, M(f.label), 11, En))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Fe = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: In } = Ae(), er = (r, e) => In.value + "?" + Fe({ q: "preview", adapter: r, path: e }), ze = typeof window < "u", hs = ze && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), fs = ze && "IntersectionObserver" in window, ps = ze && "classList" in document.createElement("p"), gs = ze && window.devicePixelRatio > 1, An = {
  elements_selector: ".lazy",
  container: hs || ze ? document : null,
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
}, ms = (r) => Object.assign({}, An, r), Vr = function(r, e) {
  let s;
  const o = "LazyLoad::Initialized", a = new r(e);
  try {
    s = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, Ln = (r, e) => {
  if (e)
    if (!e.length)
      Vr(r, e);
    else
      for (let s = 0, o; o = e[s]; s += 1)
        Vr(r, o);
}, Pe = "src", hr = "srcset", fr = "sizes", vs = "poster", St = "llOriginalAttrs", bs = "data", pr = "loading", ys = "loaded", Ss = "applied", On = "entered", gr = "error", ws = "native", _s = "data-", xs = "ll-status", fe = (r, e) => r.getAttribute(_s + e), Pn = (r, e, s) => {
  var o = _s + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, wt = (r) => fe(r, xs), qe = (r, e) => Pn(r, xs, e), Bt = (r) => qe(r, null), mr = (r) => wt(r) === null, Nn = (r) => wt(r) === pr, jn = (r) => wt(r) === gr, vr = (r) => wt(r) === ws, Rn = [pr, ys, Ss, gr], Vn = (r) => Rn.indexOf(wt(r)) >= 0, He = (r, e, s, o) => {
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
}, it = (r, e) => {
  if (ps) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Te = (r, e) => {
  if (ps) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Bn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, zn = (r) => {
  delete r.llTempImage;
}, ks = (r) => r.llTempImage, zt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Hn = (r) => {
  r.disconnect();
}, Un = (r, e, s) => {
  e.unobserve_entered && zt(r, s);
}, br = (r, e) => {
  r && (r.loadingCount += e);
}, Kn = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Yn = (r) => r.loadingCount > 0, Wn = (r) => r.toLoadCount > 0, Cs = (r) => {
  let e = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, yr = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Cs(s).forEach(e);
}, Ms = (r, e) => {
  Cs(r).forEach(e);
}, Ht = [Pe], Es = [Pe, vs], vt = [Pe, hr, fr], Ts = [bs], Ut = (r) => !!r[St], $s = (r) => r[St], Is = (r) => delete r[St], st = (r, e) => {
  if (Ut(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[St] = s;
}, Xn = (r) => {
  Ut(r) || (r[St] = { backgroundImage: r.style.backgroundImage });
}, Zn = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Xe = (r, e) => {
  if (!Ut(r))
    return;
  const s = $s(r);
  e.forEach((o) => {
    Zn(r, o, s[o]);
  });
}, Fn = (r) => {
  if (!Ut(r))
    return;
  const e = $s(r);
  r.style.backgroundImage = e.backgroundImage;
}, As = (r, e, s) => {
  it(r, e.class_applied), qe(r, Ss), s && (e.unobserve_completed && zt(r, e), He(e.callback_applied, r, s));
}, Ls = (r, e, s) => {
  it(r, e.class_loading), qe(r, pr), s && (br(s, 1), He(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Be(r, fr, fe(r, e.data_sizes)), Be(r, hr, fe(r, e.data_srcset)), Be(r, Pe, fe(r, e.data_src));
}, qn = (r, e) => {
  yr(r, (s) => {
    st(s, vt), Br(s, e);
  }), st(r, vt), Br(r, e);
}, Gn = (r, e) => {
  st(r, Ht), Be(r, Pe, fe(r, e.data_src));
}, Jn = (r, e) => {
  Ms(r, (s) => {
    st(s, Ht), Be(s, Pe, fe(s, e.data_src));
  }), st(r, Es), Be(r, vs, fe(r, e.data_poster)), Be(r, Pe, fe(r, e.data_src)), r.load();
}, Qn = (r, e) => {
  st(r, Ts), Be(r, bs, fe(r, e.data_src));
}, ei = (r, e, s) => {
  const o = fe(r, e.data_bg), a = fe(r, e.data_bg_hidpi), i = gs && a ? a : o;
  i && (r.style.backgroundImage = `url("${i}")`, ks(r).setAttribute(Pe, i), Ls(r, e, s));
}, ti = (r, e, s) => {
  const o = fe(r, e.data_bg_multi), a = fe(r, e.data_bg_multi_hidpi), i = gs && a ? a : o;
  i && (r.style.backgroundImage = i, As(r, e, s));
}, ri = (r, e, s) => {
  const o = fe(r, e.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let i = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = i.join()), As(r, e, s);
}, Os = {
  IMG: qn,
  IFRAME: Gn,
  VIDEO: Jn,
  OBJECT: Qn
}, si = (r, e) => {
  const s = Os[r.tagName];
  s && s(r, e);
}, oi = (r, e, s) => {
  const o = Os[r.tagName];
  o && (o(r, e), Ls(r, e, s));
}, ni = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ii = (r) => ni.indexOf(r.tagName) > -1, Ps = (r, e) => {
  e && !Yn(e) && !Wn(e) && He(r.callback_finish, e);
}, zr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, ai = (r, e, s) => {
  r.removeEventListener(e, s);
}, Sr = (r) => !!r.llEvLisnrs, li = (r, e, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  zr(r, o, e), zr(r, "error", s);
}, tr = (r) => {
  if (!Sr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    ai(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ns = (r, e, s) => {
  zn(r), br(s, -1), Kn(s), Te(r, e.class_loading), e.unobserve_completed && zt(r, s);
}, ci = (r, e, s, o) => {
  const a = vr(e);
  Ns(e, s, o), it(e, s.class_loaded), qe(e, ys), He(s.callback_loaded, e, o), a || Ps(s, o);
}, ui = (r, e, s, o) => {
  const a = vr(e);
  Ns(e, s, o), it(e, s.class_error), qe(e, gr), He(s.callback_error, e, o), s.restore_on_error && Xe(e, vt), a || Ps(s, o);
}, wr = (r, e, s) => {
  const o = ks(r) || r;
  if (Sr(o))
    return;
  li(o, (d) => {
    ci(d, r, e, s), tr(o);
  }, (d) => {
    ui(d, r, e, s), tr(o);
  });
}, di = (r, e, s) => {
  Bn(r), wr(r, e, s), Xn(r), ei(r, e, s), ti(r, e, s), ri(r, e, s);
}, hi = (r, e, s) => {
  wr(r, e, s), oi(r, e, s);
}, _r = (r, e, s) => {
  ii(r) ? hi(r, e, s) : di(r, e, s);
}, fi = (r, e, s) => {
  r.setAttribute("loading", "lazy"), wr(r, e, s), si(r, e), qe(r, ws);
}, Hr = (r) => {
  r.removeAttribute(Pe), r.removeAttribute(hr), r.removeAttribute(fr);
}, pi = (r) => {
  yr(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  yr(r, (e) => {
    Xe(e, vt);
  }), Xe(r, vt);
}, gi = (r) => {
  Ms(r, (e) => {
    Xe(e, Ht);
  }), Xe(r, Es), r.load();
}, mi = (r) => {
  Xe(r, Ht);
}, vi = (r) => {
  Xe(r, Ts);
}, bi = {
  IMG: js,
  IFRAME: mi,
  VIDEO: gi,
  OBJECT: vi
}, yi = (r) => {
  const e = bi[r.tagName];
  if (!e) {
    Fn(r);
    return;
  }
  e(r);
}, Si = (r, e) => {
  mr(r) || vr(r) || (Te(r, e.class_entered), Te(r, e.class_exited), Te(r, e.class_applied), Te(r, e.class_loading), Te(r, e.class_loaded), Te(r, e.class_error));
}, wi = (r, e) => {
  yi(r), Si(r, e), Bt(r), Is(r);
}, _i = (r, e, s, o) => {
  s.cancel_on_exit && Nn(r) && r.tagName === "IMG" && (tr(r), pi(r), js(r), Te(r, s.class_loading), br(o, -1), Bt(r), He(s.callback_cancel, r, e, o));
}, xi = (r, e, s, o) => {
  const a = Vn(r);
  qe(r, On), it(r, s.class_entered), Te(r, s.class_exited), Un(r, s, o), He(s.callback_enter, r, e, o), !a && _r(r, s, o);
}, ki = (r, e, s, o) => {
  mr(r) || (it(r, s.class_exited), _i(r, e, s, o), He(s.callback_exit, r, e, o));
}, Di = ["IMG", "IFRAME", "VIDEO"], Rs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ci = (r, e, s) => {
  r.forEach((o) => {
    Di.indexOf(o.tagName) !== -1 && fi(o, e, s);
  }), Ds(s, 0);
}, Mi = (r) => r.isIntersecting || r.intersectionRatio > 0, Ei = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Ti = (r, e, s) => {
  r.forEach(
    (o) => Mi(o) ? xi(o.target, o, e, s) : ki(o.target, o, e, s)
  );
}, $i = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, Ii = (r, e) => {
  Hn(r), $i(r, e);
}, Ai = (r, e) => {
  !fs || Rs(r) || (e._observer = new IntersectionObserver((s) => {
    Ti(s, r, e);
  }, Ei(r)));
}, Vs = (r) => Array.prototype.slice.call(r), Nt = (r) => r.container.querySelectorAll(r.elements_selector), Li = (r) => Vs(r).filter(mr), Oi = (r) => jn(r), Pi = (r) => Vs(r).filter(Oi), Ur = (r, e) => Li(r || Nt(e)), Ni = (r, e) => {
  Pi(Nt(r)).forEach((o) => {
    Te(o, r.class_error), Bt(o);
  }), e.update();
}, ji = (r, e) => {
  ze && (e._onlineHandler = () => {
    Ni(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Ri = (r) => {
  ze && window.removeEventListener("online", r._onlineHandler);
}, _t = function(r, e) {
  const s = ms(r);
  this._settings = s, this.loadingCount = 0, Ai(s, this), ji(s, this), this.update(e);
};
_t.prototype = {
  update: function(r) {
    const e = this._settings, s = Ur(r, e);
    if (Ds(this, s.length), hs || !fs) {
      this.loadAll(s);
      return;
    }
    if (Rs(e)) {
      Ci(s, e, this);
      return;
    }
    Ii(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Ri(this), Nt(this._settings).forEach((r) => {
      Is(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Ur(r, e).forEach((o) => {
      zt(o, this), _r(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Nt(r).forEach((e) => {
      wi(e, r);
    });
  }
};
_t.load = (r, e) => {
  const s = ms(e);
  _r(r, s);
};
_t.resetStatus = (r) => {
  Bt(r);
};
ze && Ln(_t, window.lazyLoadOptions);
const Vi = { class: "relative flex-auto flex flex-col overflow-hidden" }, Bi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, zi = { class: "absolute" }, Hi = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Ui = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Ki = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Yi = { class: "grid grid-cols-12 items-center" }, Wi = { class: "flex col-span-7 items-center" }, Xi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Zi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fi = [
  Zi
], qi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ji = [
  Gi
], Qi = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ea = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ra = { class: "grid grid-cols-12 items-center" }, sa = { class: "flex col-span-7 items-center" }, oa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, na = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ia = [
  na
], aa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, la = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ca = [
  la
], ua = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, da = { class: "col-span-2 text-center" }, ha = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, fa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], pa = { class: "relative" }, ga = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ma = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), va = [
  ma
], ba = ["data-src", "alt"], ya = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), wa = [
  Sa
], _a = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, xa = { class: "break-all" }, ka = {
  name: "VFExplorer"
}, Da = /* @__PURE__ */ Object.assign(ka, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { setStore: o, getStore: a } = P("storage"), i = P("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), m = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), f = L(0), b = L(null), { t: S } = P("i18n"), T = Math.floor(Math.random() * 2 ** 32), E = L(a("full-screen", !1)), I = new _t();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, E.value = !E.value, o("full-screen", E.value);
    });
    const $ = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      $.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: A
        },
        onSuccess: (V) => {
          V.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let U = null;
    const N = () => {
      U && clearTimeout(U);
    }, j = L(!0), B = (A) => {
      A.touches.length > 1 && (j.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, F = (A) => {
      U = setTimeout(() => {
        const V = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(V);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: e.data.adapter, item: A });
    }, R = Lt({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let V = [...e.data.files], O = R.column, ee = R.order == "asc" ? 1 : -1;
      if (!A)
        return V;
      const H = (_e, be) => typeof _e == "string" && typeof be == "string" ? _e.toLowerCase().localeCompare(be.toLowerCase()) : _e < be ? -1 : _e > be ? 1 : 0;
      return R.active && (V = V.slice().sort((_e, be) => H(_e[O], be[O]) * ee)), V;
    }, oe = (A) => {
      R.active && R.column == A ? (R.active = R.order == "asc", R.column = A, R.order = "desc") : (R.active = !0, R.column = A, R.order = "asc");
    }, te = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ce = (A, V) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(te()));
    }, ve = (A, V) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((ee) => ee.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: V } });
    }, pe = (A, V) => {
      A.preventDefault(), !V || V.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Me(() => {
      b.value = new Sn({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Vt(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + T));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: V }) => {
        if (V)
          f.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, ee = A.target.offsetHeight - A.offsetY;
          O < 15 && ee < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: V, isDragging: O }) => {
        s.emit("vf-nodes-selected", te()), f.value = b.value.getSelection().length;
      });
    }), Oo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), I.update();
    }), Me(() => {
      Rt(() => e.view, () => s.emit("vf-explorer-update"));
    }), (A, V) => (_(), C("div", Vi, [
      r.view == "list" || $.value.length ? (_(), C("div", Bi, [
        p("div", {
          onClick: V[0] || (V[0] = (O) => oe("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          se(M(x(S)("Name")) + " ", 1),
          Se(Ce($t, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, R.active && R.column == "basename"]
          ])
        ]),
        $.value.length ? X("", !0) : (_(), C("div", {
          key: 0,
          onClick: V[1] || (V[1] = (O) => oe("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          se(M(x(S)("Size")) + " ", 1),
          Se(Ce($t, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, R.active && R.column == "file_size"]
          ])
        ])),
        $.value.length ? X("", !0) : (_(), C("div", {
          key: 1,
          onClick: V[2] || (V[2] = (O) => oe("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          se(M(x(S)("Date")) + " ", 1),
          Se(Ce($t, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, R.active && R.column == "last_modified"]
          ])
        ])),
        $.value.length ? (_(), C("div", {
          key: 2,
          onClick: V[3] || (V[3] = (O) => oe("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          se(M(x(S)("Filepath")) + " ", 1),
          Se(Ce($t, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Tt, R.active && R.column == "path"]
          ])
        ])) : X("", !0)
      ])) : X("", !0),
      p("div", zi, [
        p("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Hi,
          p("div", Ui, M(f.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: B,
        onContextmenu: V[10] || (V[10] = We((O) => x(s).emit("vf-contextmenu-show", { event: O, area: l.value, items: te() }), ["self", "prevent"])),
        class: he([E.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        $.value.length ? (_(!0), C(le, { key: 0 }, we(G(), (O, ee) => (_(), C("div", {
          onDblclick: (H) => k(O),
          onTouchstart: V[4] || (V[4] = (H) => F(H)),
          onTouchend: V[5] || (V[5] = (H) => N()),
          onContextmenu: We((H) => x(s).emit("vf-contextmenu-show", { event: H, area: l.value, items: te(), target: O }), ["prevent"]),
          class: he(["vf-item-" + x(T), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          p("div", Yi, [
            p("div", Wi, [
              O.type == "dir" ? (_(), C("svg", Xi, Fi)) : (_(), C("svg", qi, Ji)),
              p("span", Qi, M(O.basename), 1)
            ]),
            p("div", ea, M(O.path), 1)
          ])
        ], 42, Ki))), 256)) : X("", !0),
        r.view == "list" && !$.value.length ? (_(!0), C(le, { key: 1 }, we(G(), (O, ee) => (_(), C("div", {
          draggable: "true",
          onDblclick: (H) => k(O),
          onTouchstart: V[6] || (V[6] = (H) => F(H)),
          onTouchend: V[7] || (V[7] = (H) => N()),
          onContextmenu: We((H) => x(s).emit("vf-contextmenu-show", { event: H, area: l.value, items: te(), target: O }), ["prevent"]),
          onDragstart: (H) => ce(H),
          onDragover: (H) => pe(H, O),
          onDrop: (H) => ve(H, O),
          class: he(["vf-item-" + x(T), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          p("div", ra, [
            p("div", sa, [
              O.type == "dir" ? (_(), C("svg", oa, ia)) : (_(), C("svg", aa, ca)),
              p("span", ua, M(O.basename), 1)
            ]),
            p("div", da, M(O.file_size ? x(us)(O.file_size) : ""), 1),
            p("div", ha, M(x(ds)(O.last_modified)), 1)
          ])
        ], 42, ta))), 256)) : X("", !0),
        r.view == "grid" && !$.value.length ? (_(!0), C(le, { key: 2 }, we(G(!1), (O, ee) => (_(), C("div", {
          draggable: "true",
          onDblclick: (H) => k(O),
          onTouchstart: V[8] || (V[8] = (H) => F(H)),
          onTouchend: V[9] || (V[9] = (H) => N()),
          onContextmenu: We((H) => x(s).emit("vf-contextmenu-show", { event: H, area: l.value, items: te(), target: O }), ["prevent"]),
          onDragstart: (H) => ce(H),
          onDragover: (H) => pe(H, O),
          onDrop: (H) => ve(H, O),
          class: he(["vf-item-" + x(T), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          p("div", null, [
            p("div", pa, [
              O.type == "dir" ? (_(), C("svg", ga, va)) : (O.mime_type ?? "").startsWith("image") ? (_(), C("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(er)(x(i).value, O.path),
                alt: O.basename
              }, null, 8, ba)) : (_(), C("svg", ya, wa)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (_(), C("div", _a, M(d(O.extension)), 1)) : X("", !0)
            ]),
            p("span", xa, M(m(O.basename)), 1)
          ])
        ], 42, fa))), 256)) : X("", !0)
      ], 34),
      Ce($n)
    ]));
  }
}), Ca = "0.0.1", Ma = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ea = { class: "flex leading-5 items-center" }, Ta = ["aria-label"], $a = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ia = [
  $a
], Aa = ["value"], La = { class: "ml-3" }, Oa = { key: 0 }, Pa = { class: "ml-1" }, Na = { class: "flex leading-5 items-center" }, ja = {
  value: "",
  disabled: ""
}, Ra = /* @__PURE__ */ Po('<option value="en">English</option><option value="fr">French</option><option value="fa">Persian</option><option value="ru">Russian</option><option value="tr">Turkish</option><option value="tr">Hebrew</option>', 6), Va = ["aria-label"], Ba = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), za = [
  Ba
], Ha = {
  name: "VFStatusbar"
}, Ua = /* @__PURE__ */ Object.assign(Ha, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: o } = P("storage"), a = L(0), i = P("adapter"), { t: d, changeLocale: m } = P("i18n"), l = L(s("locale", "")), v = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), o("adapter", i.value);
    };
    e.on("vf-nodes-selected", (b) => {
      a.value = b.length;
    });
    const f = L("");
    return e.on("vf-search-query", ({ newQuery: b }) => {
      f.value = b;
    }), (b, S) => (_(), C("div", Ma, [
      p("div", Ea, [
        p("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ia, 8, Ta),
        Se(p("select", {
          "onUpdate:modelValue": S[0] || (S[0] = (T) => as(i) ? i.value = T : null),
          onChange: v,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (_(!0), C(le, null, we(r.data.storages, (T) => (_(), C("option", { value: T }, M(T), 9, Aa))), 256))
        ], 544), [
          [jr, x(i)]
        ]),
        p("div", La, [
          f.value.length ? (_(), C("span", Oa, M(r.data.files.length) + " items found. ", 1)) : X("", !0),
          p("span", Pa, M(a.value > 0 ? a.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      p("div", Na, [
        Se(p("select", {
          "onUpdate:modelValue": S[1] || (S[1] = (T) => l.value = T),
          onChange: S[2] || (S[2] = (T) => x(m)(T.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          p("option", ja, M(x(d)("Language")), 1),
          Ra
        ], 544), [
          [jr, l.value]
        ]),
        p("span", {
          class: "mr-1",
          "aria-label": x(d)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: S[3] || (S[3] = (T) => x(e).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(Ca), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, za, 8, Va)
      ])
    ]));
  }
}), Ka = (r, e = 0, s = !1) => {
  let o;
  return (...a) => {
    s && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, e);
  };
}, Ya = (r, e, s) => {
  const o = L(r);
  return No((i, d) => ({
    get() {
      return i(), o.value;
    },
    set: Ka(
      (m) => {
        o.value = m, d();
      },
      e,
      s
    )
  }));
}, Wa = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Xa = ["aria-label"], Za = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Fa = [
  Za
], qa = ["aria-label"], Ga = /* @__PURE__ */ p("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ja = [
  Ga
], Qa = ["aria-label"], el = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), tl = [
  el
], rl = ["onClick"], sl = /* @__PURE__ */ p("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), ol = [
  sl
], nl = { class: "flex leading-5" }, il = /* @__PURE__ */ p("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), al = ["title", "onClick"], ll = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, cl = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ul = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), dl = [
  cl,
  ul
], hl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, fl = /* @__PURE__ */ p("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), pl = /* @__PURE__ */ p("div", { class: "w-full" }, null, -1), gl = ["onKeydown", "placeholder"], ml = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), vl = [
  ml
], bl = {
  name: "VFBreadcrumb"
}, yl = /* @__PURE__ */ Object.assign(bl, {
  props: {
    data: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), a = L(null), i = L([]), d = L(!1), m = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let N = [], j = [];
      a.value = e.data.dirname ?? o.value + "://", a.value.length == 0 && (i.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(B) {
        N.push(B), N.join("/") != "" && j.push({
          basename: B,
          name: B,
          path: o.value + "://" + N.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), i.value = j;
    });
    const f = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      f();
    });
    const b = () => {
      d.value = !0, Vt(() => m.value.focus());
    }, S = Ya("", 400), T = () => v.value;
    Rt(S, (N) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: N });
    });
    const E = () => i.value.length && !d.value, I = (N) => {
      N.preventDefault();
      let j = JSON.parse(N.dataTransfer.getData("items"));
      if (j.find((B) => B.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: i.value[i.value.length - 2] ?? { path: o.value + "://" } }
      });
    }, $ = (N) => {
      N.preventDefault(), E() ? N.dataTransfer.dropEffect = "copy" : (N.dataTransfer.dropEffect = "none", N.dataTransfer.effectAllowed = "none");
    }, U = () => {
      S.value == "" && f();
    };
    return (N, j) => (_(), C("div", Wa, [
      p("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onDragover: j[0] || (j[0] = (B) => $(B)),
          onDrop: j[1] || (j[1] = (B) => I(B)),
          onClick: j[2] || (j[2] = (B) => {
            var F;
            return !E() || x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((F = i.value[i.value.length - 2]) == null ? void 0 : F.path) ?? x(o) + "://" } });
          }),
          class: he(["h-6 w-6 p-0.5 rounded", E() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa, 34))
      ], 8, Xa),
      T() ? (_(), C("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: j[4] || (j[4] = (B) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, tl))
      ], 8, Qa)) : (_(), C("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: j[3] || (j[3] = (B) => {
            x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ja))
      ], 8, qa)),
      d.value ? (_(), C("div", hl, [
        fl,
        pl,
        Se(p("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: ot(f, ["esc"]),
          onBlur: U,
          "onUpdate:modelValue": j[6] || (j[6] = (B) => as(S) ? S.value = B : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, gl), [
          [nt, x(S)]
        ]),
        (_(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, vl))
      ])) : (_(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (_(), C("svg", {
          onClick: j[5] || (j[5] = (B) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ol)),
        p("div", nl, [
          (_(!0), C(le, null, we(i.value, (B, F) => (_(), C("div", { key: F }, [
            il,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: B.path } })
            }, M(B.name), 9, al)
          ]))), 128))
        ]),
        T() ? (_(), C("svg", ll, dl)) : X("", !0)
      ], 8, rl))
    ]));
  }
}), Sl = ["onClick"], wl = /* @__PURE__ */ p("span", { class: "px-1" }, null, -1), _l = {
  name: "VFContextMenu"
}, xl = /* @__PURE__ */ Object.assign(_l, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), o = L(null), { apiUrl: a } = Ae(), i = Lt({
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
          const S = a.value + "?" + Fe({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
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
    }, f = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      f.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: T, items: E, target: I = null }) => {
      if (i.items = [], f.value)
        if (I)
          i.items.push(l.openDir), s.emit("vf-context-selected", [I]);
        else
          return;
      else
        !I && !f.value ? (i.items.push(l.refresh), i.items.push(l.newfolder), s.emit("vf-context-selected", [])) : E.length > 1 && E.some(($) => $.path === I.path) ? (i.items.push(l.refresh), i.items.push(l.archive), i.items.push(l.delete), s.emit("vf-context-selected", E)) : (I.type == "dir" ? i.items.push(l.open) : (i.items.push(l.preview), i.items.push(l.download)), i.items.push(l.rename), I.mime_type == "application/zip" ? i.items.push(l.unarchive) : i.items.push(l.archive), i.items.push(l.delete), s.emit("vf-context-selected", [I]));
      b(S, T);
    }), s.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const b = (S, T) => {
      i.active = !0, Vt(() => {
        let E = T.getBoundingClientRect(), I = S.pageX, $ = S.pageY, U = o.value.offsetHeight, N = o.value.offsetWidth;
        I = E.right - S.pageX + window.scrollX < N ? I - N : I, $ = E.bottom - S.pageY + window.scrollY < U ? $ - U : $, i.positions = {
          left: I + "px",
          top: $ + "px"
        };
      });
    };
    return (S, T) => i.active ? (_(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: ls(i.positions)
    }, [
      (_(!0), C(le, null, we(i.items, (E) => (_(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: E.title,
        onClick: (I) => v(E)
      }, [
        wl,
        p("span", null, M(E.title()), 1)
      ], 8, Sl))), 128))
    ], 4)) : X("", !0);
  }
}), kl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function Dl(r) {
  const e = await kl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function Cl(r, e, s) {
  const { getStore: o, setStore: a } = Qt(r), i = L({}), d = (v) => {
    Dl(v).then((f) => {
      i.value = f, a("locale", v), a("translations", f), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((f) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? i.value = o("translations") : d(e);
  const m = (v, ...f) => f.length ? m(v = v.replace("%s", f.shift()), ...f) : v;
  function l(v, ...f) {
    return i.value.hasOwnProperty(v) ? m(i.value[v], ...f) : m(v, ...f);
  }
  return { t: l, changeLocale: d };
}
const Ml = { class: "vuefinder" }, El = /* @__PURE__ */ p("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Tl = {
  name: "VueFinder"
}, $l = /* @__PURE__ */ Object.assign(Tl, {
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
    const s = r, o = Ro(), { setStore: a, getStore: i } = Qt(s.id), d = L(i("adapter"));
    Ue("emitter", o), Ue("storage", Qt(s.id)), Ue("postData", s.postData), Ue("adapter", d), Ue("maxFileSize", s.maxFileSize);
    const m = Cl(s.id, s.locale, o);
    Ue("i18n", m);
    const { apiUrl: l, setApiUrl: v } = Ae();
    v(s.url);
    const f = Lt({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = L(i("viewport", "grid")), S = L(i("darkMode", s.dark));
    o.on("vf-darkMode-toggle", () => {
      S.value = !S.value, a("darkMode", S.value);
    });
    const T = L(!1);
    Ue("loadingState", T);
    const E = L(i("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      E.value = !E.value, a("full-screen", E.value);
    }), o.on("vf-view-toggle", (N) => {
      b.value = N;
    });
    const I = Lt({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      I.active = !1;
    }), o.on("vf-modal-show", (N) => {
      I.active = !0, I.type = N.type, I.data = N;
    }), o.on("delete-button", (N) => {
      console.log("emit delete"), e("deleteButton");
    }), o.on("file-moved", (N) => {
      console.log("emit file moved"), console.log(N), e("fileMoved", N);
    });
    const $ = (N) => {
      Object.assign(f, N), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let U;
    return o.on("vf-fetch-abort", () => {
      U.abort(), T.value = !1;
    }), o.on("vf-fetch", ({ params: N, onSuccess: j = null, onError: B = null }) => {
      ["index", "search"].includes(N.q) && (U && U.abort(), T.value = !0), U = new AbortController();
      const F = U.signal;
      Pt(l.value, { params: N, signal: F }).then((k) => {
        d.value = k.adapter, ["index", "search"].includes(N.q) && (T.value = !1), o.emit("vf-modal-close"), $(k), j(k);
      }).catch((k) => {
        B && B(k);
      }).finally(() => {
      });
    }), o.on("vf-download", (N) => {
      document.getElementById("download_frame").src = N, o.emit("vf-modal-close");
    }), Me(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), (N, j) => (_(), C("div", Ml, [
      p("div", {
        class: he(S.value ? "dark" : "")
      }, [
        p("div", {
          class: he([E.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: ls(E.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: j[0] || (j[0] = (B) => x(o).emit("vf-contextmenu-hide")),
          onTouchstart: j[1] || (j[1] = (B) => x(o).emit("vf-contextmenu-hide"))
        }, [
          Ce(mn, { data: f }, null, 8, ["data"]),
          Ce(yl, { data: f }, null, 8, ["data"]),
          Ce(Da, {
            view: b.value,
            data: f
          }, null, 8, ["view", "data"]),
          Ce(Ua, { data: f }, null, 8, ["data"])
        ], 38),
        I.active ? (_(), q(jo("v-f-modal-" + I.type), {
          key: 0,
          selection: I.data,
          current: f
        }, null, 8, ["selection", "current"])) : X("", !0),
        Ce(xl, { current: f }, null, 8, ["current"]),
        El
      ], 2)
    ]));
  }
}), Il = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Al = { class: "fixed z-10 inset-0 overflow-hidden" }, Ll = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Ol = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Pl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Le = {
  __name: "ModalLayout",
  setup(r) {
    const e = P("emitter");
    return Me(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (_(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = ot((a) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Il,
      p("div", Al, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((a) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", Ll, [
            p("div", Ol, [
              Jt(s.$slots, "default")
            ]),
            p("div", Pl, [
              Jt(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Nl = ["aria-label"], jl = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Rl = [
  jl
], Vl = {
  name: "Message"
}, Oe = /* @__PURE__ */ Object.assign(Vl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var m;
    const { t: s } = P("i18n"), o = L(!1), a = L(null), i = L((m = a.value) == null ? void 0 : m.strMessage);
    Rt(i, () => o.value = !1);
    const d = () => {
      e("hidden"), o.value = !0;
    };
    return (l, v) => (_(), C("div", null, [
      o.value ? X("", !0) : (_(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: he(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Jt(l.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Rl, 8, Nl)
      ], 2))
    ]));
  }
}), Bl = { class: "sm:flex sm:items-start" }, zl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Hl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ul = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Kl = { class: "mt-2" }, Yl = { class: "text-sm text-gray-500" }, Wl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Xl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Zl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fl = [
  Zl
], ql = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Jl = [
  Gl
], Ql = { class: "ml-1.5" }, ec = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, tc = {
  name: "VFModalDelete"
}, rc = /* @__PURE__ */ Object.assign(tc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), i = L(e.selection.items), d = L(""), m = () => {
      i.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(i.value.map(({ path: l, type: v }) => ({ path: l, type: v })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1),
        p("div", ec, M(x(a)("This action cannot be undone.")), 1)
      ]),
      default: Z(() => [
        p("div", Bl, [
          zl,
          p("div", Hl, [
            p("h3", Ul, M(x(a)("Delete files")), 1),
            p("div", Kl, [
              p("p", Yl, M(x(a)("Are you sure you want to delete these files?")), 1),
              (_(!0), C(le, null, we(i.value, (f) => (_(), C("p", Wl, [
                f.type == "dir" ? (_(), C("svg", Xl, Fl)) : (_(), C("svg", ql, Jl)),
                p("span", Ql, M(f.basename), 1)
              ]))), 256)),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sc = { class: "sm:flex sm:items-start" }, oc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), nc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ic = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ac = { class: "mt-2" }, lc = { class: "text-sm text-gray-500" }, cc = {
  name: "VFModalMessage"
}, uc = /* @__PURE__ */ Object.assign(cc, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = P("emitter"), { t: s } = P("i18n");
    return (o, a) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: a[0] || (a[0] = (i) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Close")), 1)
      ]),
      default: Z(() => {
        var i, d;
        return [
          p("div", sc, [
            oc,
            p("div", nc, [
              p("h3", ic, M(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              p("div", ac, [
                p("p", lc, M(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), dc = { class: "sm:flex sm:items-start" }, hc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), fc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, pc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, gc = { class: "mt-2" }, mc = { class: "text-sm text-gray-500" }, vc = ["onKeyup", "placeholder"], bc = {
  name: "VFModalNewFolder"
}, yc = /* @__PURE__ */ Object.assign(bc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = () => {
      i.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: e.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", dc, [
          hc,
          p("div", fc, [
            p("h3", pc, M(x(a)("New Folder")), 1),
            p("div", gc, [
              p("p", mc, M(x(a)("Create a new folder")), 1),
              Se(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, vc), [
                [nt, i.value]
              ]),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Sc = { class: "sm:flex sm:items-start" }, wc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), _c = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, xc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, kc = { class: "mt-2" }, Dc = { class: "text-sm text-gray-500" }, Cc = ["onKeyup", "placeholder"], Mc = {
  name: "VFModalNewFile"
}, Ec = /* @__PURE__ */ Object.assign(Mc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = () => {
      i.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: e.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Sc, [
          wc,
          p("div", _c, [
            p("h3", xc, M(x(a)("New File")), 1),
            p("div", kc, [
              p("p", Dc, M(x(a)("Create a new file")), 1),
              Se(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: ot(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, Cc), [
                [nt, i.value]
              ]),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Tc = { class: "flex" }, $c = ["aria-label"], Ic = { class: "ml-auto mb-2" }, Ac = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Lc = { key: 1 }, Oc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, o = L(""), a = L(""), i = L(null), d = L(!1), { apiUrl: m } = Ae(), l = L(""), v = L(!1), { t: f } = P("i18n");
    Me(() => {
      Pt(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((E) => {
        o.value = E, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = o.value, d.value == !0 && Vt(() => {
        i.value.focus();
      });
    }, S = P("postData"), T = () => {
      l.value = "", v.value = !1, Pt(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((E) => {
        l.value = f("Updated."), o.value = E, e("load"), d.value = !d.value;
      }).catch((E) => {
        l.value = f(E.message), v.value = !0;
      });
    };
    return (E, I) => (_(), C(le, null, [
      p("div", Tc, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, $c),
        p("div", Ic, [
          d.value ? (_(), C("button", {
            key: 0,
            onClick: T,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, M(x(f)("Save")), 1)) : X("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: I[0] || (I[0] = ($) => b())
          }, M(d.value ? x(f)("Cancel") : x(f)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        d.value ? (_(), C("div", Lc, [
          Se(p("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": I[1] || (I[1] = ($) => a.value = $),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [nt, a.value]
          ])
        ])) : (_(), C("pre", Ac, M(o.value), 1)),
        l.value.length ? (_(), q(Oe, {
          key: 2,
          onHidden: I[2] || (I[2] = ($) => l.value = ""),
          error: v.value
        }, {
          default: Z(() => [
            se(M(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : X("", !0)
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
function Kr(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    e && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Bs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kr(Object(s), !0).forEach(function(o) {
      jc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Kr(Object(s)).forEach(function(o) {
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
function Pc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Nc(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function jc(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function zs(r) {
  return Rc(r) || Vc(r) || Bc(r) || zc();
}
function Rc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Vc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Bc(r, e) {
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
function zc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Kt = typeof window < "u" && typeof window.document < "u", Ie = Kt ? window : {}, xr = Kt && Ie.document.documentElement ? "ontouchstart" in Ie.document.documentElement : !1, kr = Kt ? "PointerEvent" in Ie : !1, J = "cropper", Dr = "all", Hs = "crop", Us = "move", Ks = "zoom", Ke = "e", Ye = "w", Je = "s", je = "n", ht = "ne", ft = "nw", pt = "se", gt = "sw", or = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), de = "".concat(J, "-hidden"), Xr = "".concat(J, "-hide"), Hc = "".concat(J, "-invisible"), jt = "".concat(J, "-modal"), nr = "".concat(J, "-move"), bt = "".concat(J, "Action"), It = "".concat(J, "Preview"), Cr = "crop", Ys = "move", Ws = "none", ir = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Zr = "dblclick", Uc = xr ? "touchstart" : "mousedown", Kc = xr ? "touchmove" : "mousemove", Yc = xr ? "touchend touchcancel" : "mouseup", Fr = kr ? "pointerdown" : Uc, qr = kr ? "pointermove" : Kc, Gr = kr ? "pointerup pointercancel" : Yc, Jr = "ready", Qr = "resize", es = "wheel", ur = "zoom", ts = "image/jpeg", Wc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Xc = /^data:/, Zc = /^data:image\/jpeg;base64,/, Fc = /^img|canvas$/i, Xs = 200, Zs = 100, rs = {
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
  minContainerWidth: Xs,
  minContainerHeight: Zs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, qc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Gc = Number.isNaN || Ie.isNaN;
function K(r) {
  return typeof r == "number" && !Gc(r);
}
var ss = function(e) {
  return e > 0 && e < 1 / 0;
};
function Ft(r) {
  return typeof r > "u";
}
function Ze(r) {
  return rr(r) === "object" && r !== null;
}
var Jc = Object.prototype.hasOwnProperty;
function Qe(r) {
  if (!Ze(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && Jc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ue(r) {
  return typeof r == "function";
}
var Qc = Array.prototype.slice;
function Fs(r) {
  return Array.from ? Array.from(r) : Qc.call(r);
}
function re(r, e) {
  return r && ue(e) && (Array.isArray(r) || K(r.length) ? Fs(r).forEach(function(s, o) {
    e.call(r, s, o, r);
  }) : Ze(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(e) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    o[a - 1] = arguments[a];
  return Ze(e) && o.length > 0 && o.forEach(function(i) {
    Ze(i) && Object.keys(i).forEach(function(d) {
      e[d] = i[d];
    });
  }), e;
}, eu = /\.\d*(?:0|9){12}\d*$/;
function tt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return eu.test(r) ? Math.round(r * e) / e : r;
}
var tu = /^width|height|left|top|marginLeft|marginTop$/;
function Re(r, e) {
  var s = r.style;
  re(e, function(o, a) {
    tu.test(a) && K(o) && (o = "".concat(o, "px")), s[a] = o;
  });
}
function ru(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function ae(r, e) {
  if (e) {
    if (K(r.length)) {
      re(r, function(o) {
        ae(o, e);
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
    if (K(r.length)) {
      re(r, function(s) {
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
function et(r, e, s) {
  if (e) {
    if (K(r.length)) {
      re(r, function(o) {
        et(o, e, s);
      });
      return;
    }
    s ? ae(r, e) : $e(r, e);
  }
}
var su = /([a-z\d])([A-Z])/g;
function Mr(r) {
  return r.replace(su, "$1-$2").toLowerCase();
}
function dr(r, e) {
  return Ze(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Mr(e)));
}
function yt(r, e, s) {
  Ze(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Mr(e)), s);
}
function ou(r, e) {
  if (Ze(r[e]))
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
    r.removeAttribute("data-".concat(Mr(e)));
}
var qs = /\s\s*/, Gs = function() {
  var r = !1;
  if (Kt) {
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
      set: function(i) {
        e = i;
      }
    });
    Ie.addEventListener("test", s, o), Ie.removeEventListener("test", s, o);
  }
  return r;
}();
function De(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(qs).forEach(function(i) {
    if (!Gs) {
      var d = r.listeners;
      d && d[i] && d[i][s] && (a = d[i][s], delete d[i][s], Object.keys(d[i]).length === 0 && delete d[i], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, a, o);
  });
}
function ye(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(qs).forEach(function(i) {
    if (o.once && !Gs) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      a = function() {
        delete m[i][s], r.removeEventListener(i, a, o);
        for (var v = arguments.length, f = new Array(v), b = 0; b < v; b++)
          f[b] = arguments[b];
        s.apply(r, f);
      }, m[i] || (m[i] = {}), m[i][s] && r.removeEventListener(i, m[i][s], o), m[i][s] = a, r.listeners = m;
    }
    r.addEventListener(i, a, o);
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
function Js(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var qt = Ie.location, nu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var e = r.match(nu);
  return e !== null && (e[1] !== qt.protocol || e[2] !== qt.hostname || e[3] !== qt.port);
}
function ns(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function mt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, a = r.translateX, i = r.translateY, d = [];
  K(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), K(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), K(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function iu(r) {
  var e = Bs({}, r), s = 0;
  return re(r, function(o, a) {
    delete e[a], re(e, function(i) {
      var d = Math.abs(o.startX - i.startX), m = Math.abs(o.startY - i.startY), l = Math.abs(o.endX - i.endX), v = Math.abs(o.endY - i.endY), f = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - f) / f;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function At(r, e) {
  var s = r.pageX, o = r.pageY, a = {
    endX: s,
    endY: o
  };
  return e ? a : Bs({
    startX: s,
    startY: o
  }, a);
}
function au(r) {
  var e = 0, s = 0, o = 0;
  return re(r, function(a) {
    var i = a.startX, d = a.startY;
    e += i, s += d, o += 1;
  }), e /= o, s /= o, {
    pageX: e,
    pageY: s
  };
}
function Ve(r) {
  var e = r.aspectRatio, s = r.height, o = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = ss(o), d = ss(s);
  if (i && d) {
    var m = s * e;
    a === "contain" && m > o || a === "cover" && m < o ? s = o / e : o = s * e;
  } else
    i ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function lu(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var a = o % 90 * Math.PI / 180, i = Math.sin(a), d = Math.cos(a), m = e * d + s * i, l = e * i + s * d;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function cu(r, e, s, o) {
  var a = e.aspectRatio, i = e.naturalWidth, d = e.naturalHeight, m = e.rotate, l = m === void 0 ? 0 : m, v = e.scaleX, f = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, T = s.aspectRatio, E = s.naturalWidth, I = s.naturalHeight, $ = o.fillColor, U = $ === void 0 ? "transparent" : $, N = o.imageSmoothingEnabled, j = N === void 0 ? !0 : N, B = o.imageSmoothingQuality, F = B === void 0 ? "low" : B, k = o.maxWidth, R = k === void 0 ? 1 / 0 : k, G = o.maxHeight, oe = G === void 0 ? 1 / 0 : G, te = o.minWidth, ce = te === void 0 ? 0 : te, ve = o.minHeight, pe = ve === void 0 ? 0 : ve, ge = document.createElement("canvas"), A = ge.getContext("2d"), V = Ve({
    aspectRatio: T,
    width: R,
    height: oe
  }), O = Ve({
    aspectRatio: T,
    width: ce,
    height: pe
  }, "cover"), ee = Math.min(V.width, Math.max(O.width, E)), H = Math.min(V.height, Math.max(O.height, I)), _e = Ve({
    aspectRatio: a,
    width: R,
    height: oe
  }), be = Ve({
    aspectRatio: a,
    width: ce,
    height: pe
  }, "cover"), xt = Math.min(_e.width, Math.max(be.width, i)), kt = Math.min(_e.height, Math.max(be.height, d)), Yt = [-xt / 2, -kt / 2, xt, kt];
  return ge.width = tt(ee), ge.height = tt(H), A.fillStyle = U, A.fillRect(0, 0, ee, H), A.save(), A.translate(ee / 2, H / 2), A.rotate(l * Math.PI / 180), A.scale(f, S), A.imageSmoothingEnabled = j, A.imageSmoothingQuality = F, A.drawImage.apply(A, [r].concat(zs(Yt.map(function(Dt) {
    return Math.floor(tt(Dt));
  })))), A.restore(), ge;
}
var Qs = String.fromCharCode;
function uu(r, e, s) {
  var o = "";
  s += e;
  for (var a = e; a < s; a += 1)
    o += Qs(r.getUint8(a));
  return o;
}
var du = /^data:.*,/;
function hu(r) {
  var e = r.replace(du, ""), s = atob(e), o = new ArrayBuffer(s.length), a = new Uint8Array(o);
  return re(a, function(i, d) {
    a[d] = s.charCodeAt(d);
  }), o;
}
function fu(r, e) {
  for (var s = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(Qs.apply(null, Fs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function pu(r) {
  var e = new DataView(r), s;
  try {
    var o, a, i;
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
      if (uu(e, l, 4) === "Exif") {
        var f = e.getUint16(v);
        if (o = f === 18761, (o || f === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (i = v + b);
        }
      }
    }
    if (i) {
      var S = e.getUint16(i, o), T, E;
      for (E = 0; E < S; E += 1)
        if (T = i + E * 12 + 2, e.getUint16(T, o) === 274) {
          T += 8, s = e.getUint16(T, o), e.setUint16(T, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function gu(r) {
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
var mu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, a = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    ae(a, de), $e(e, de);
    var m = {
      width: Math.max(o.offsetWidth, i >= 0 ? i : Xs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Zs)
    };
    this.containerData = m, Re(a, {
      width: m.width,
      height: m.height
    }), ae(e, de), $e(a, de);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, i = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, m = i / d, l = e.width, v = e.height;
    e.height * m > e.width ? o === 3 ? l = e.height * m : v = e.width / m : o === 3 ? v = e.width / m : l = e.height * m;
    var f = {
      aspectRatio: m,
      naturalWidth: i,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = f, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (e.width - f.width) / 2, f.top = (e.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(e, s) {
    var o = this.options, a = this.containerData, i = this.canvasData, d = this.cropBoxData, m = o.viewMode, l = i.aspectRatio, v = this.cropped && d;
    if (e) {
      var f = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (f = Math.max(f, a.width), b = Math.max(b, a.height), m === 3 && (b * l > f ? f = b * l : b = f / l)) : m > 0 && (f ? f = Math.max(f, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (f = d.width, b = d.height, b * l > f ? f = b * l : b = f / l));
      var S = Ve({
        aspectRatio: l,
        width: f,
        height: b
      });
      f = S.width, b = S.height, i.minWidth = f, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var T = a.width - i.width, E = a.height - i.height;
        i.minLeft = Math.min(0, T), i.minTop = Math.min(0, E), i.maxLeft = Math.max(0, T), i.maxTop = Math.max(0, E), v && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, m === 2 && (i.width >= a.width && (i.minLeft = Math.min(0, T), i.maxLeft = Math.max(0, T)), i.height >= a.height && (i.minTop = Math.min(0, E), i.maxTop = Math.max(0, E))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = a.width, i.maxTop = a.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, a = this.imageData;
    if (s) {
      var i = lu({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = i.width, m = i.height, l = o.width * (d / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Re(this.canvas, Q({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, o = this.imageData, a = o.naturalWidth * (s.width / s.naturalWidth), i = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: a,
      height: i,
      left: (s.width - a) / 2,
      top: (s.height - i) / 2
    }), Re(this.image, Q({
      width: o.width,
      height: o.height
    }, mt(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, i = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? i.height = i.width / o : i.width = i.height * o), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * a), i.height = Math.max(i.minHeight, i.height * a), i.left = s.left + (s.width - i.width) / 2, i.top = s.top + (s.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(e, s) {
    var o = this.options, a = this.containerData, i = this.canvasData, d = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (e) {
      var v = Number(o.minCropBoxWidth) || 0, f = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(a.width, i.width, i.width + i.left, a.width - i.left) : a.width, S = m ? Math.min(a.height, i.height, i.height + i.top, a.height - i.top) : a.height;
      v = Math.min(v, a.width), f = Math.min(f, a.height), l && (v && f ? f * l > v ? f = v / l : v = f * l : v ? f = v / l : f && (v = f * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(f, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(a.width, i.left + i.width) - d.width, d.maxTop = Math.min(a.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && yt(this.face, bt, o.width >= s.width && o.height >= s.height ? Us : Dr), Re(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, ir, this.getData());
  }
}, vu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, a = s ? this.crossOriginUrl : this.url, i = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = e.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, re(m, function(l) {
        var v = document.createElement("img");
        yt(l, It, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = i, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    re(this.previews, function(e) {
      var s = dr(e, It);
      Re(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, ou(e, It);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, a = o.width, i = o.height, d = e.width, m = e.height, l = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (Re(this.viewBoxImage, Q({
      width: d,
      height: m
    }, mt(Q({
      translateX: -l,
      translateY: -v
    }, e)))), re(this.previews, function(f) {
      var b = dr(f, It), S = b.width, T = b.height, E = S, I = T, $ = 1;
      a && ($ = S / a, I = i * $), i && I > T && ($ = T / i, E = a * $, I = T), Re(f, {
        width: E,
        height: I
      }), Re(f.getElementsByTagName("img")[0], Q({
        width: d * $,
        height: m * $
      }, mt(Q({
        translateX: -l * $,
        translateY: -v * $
      }, e))));
    }));
  }
}, bu = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && ye(e, cr, s.cropstart), ue(s.cropmove) && ye(e, lr, s.cropmove), ue(s.cropend) && ye(e, ar, s.cropend), ue(s.crop) && ye(e, ir, s.crop), ue(s.zoom) && ye(e, ur, s.zoom), ye(o, Fr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && ye(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && ye(o, Zr, this.onDblclick = this.dblclick.bind(this)), ye(e.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), ye(e.ownerDocument, Gr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && ye(window, Qr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && De(e, cr, s.cropstart), ue(s.cropmove) && De(e, lr, s.cropmove), ue(s.cropend) && De(e, ar, s.cropend), ue(s.crop) && De(e, ir, s.crop), ue(s.zoom) && De(e, ur, s.zoom), De(o, Fr, this.onCropStart), s.zoomable && s.zoomOnWheel && De(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && De(o, Zr, this.onDblclick), De(e.ownerDocument, qr, this.onCropMove), De(e.ownerDocument, Gr, this.onCropEnd), s.responsive && De(window, Qr, this.onResize);
  }
}, yu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, a = s.offsetWidth / o.width, i = s.offsetHeight / o.height, d = Math.abs(a - 1) > Math.abs(i - 1) ? a : i;
      if (d !== 1) {
        var m, l;
        e.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(re(m, function(v, f) {
          m[f] = v * d;
        })), this.setCropBoxData(re(l, function(v, f) {
          l[f] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ws || this.setDragMode(ru(this.dragBox, or) ? Ys : Cr);
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
    (K(s) && s !== 1 || K(o) && o !== 0 || e.ctrlKey))) {
      var a = this.options, i = this.pointers, d;
      e.changedTouches ? re(e.changedTouches, function(m) {
        i[m.identifier] = At(m);
      }) : i[e.pointerId || 0] = At(e), Object.keys(i).length > 1 && a.zoomable && a.zoomOnTouch ? d = Ks : d = dr(e.target, bt), Wc.test(d) && rt(this.element, cr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Hs && (this.cropping = !0, ae(this.dragBox, jt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), rt(this.element, lr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? re(e.changedTouches, function(a) {
        Q(o[a.identifier] || {}, At(a, !0));
      }) : Q(o[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? re(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, jt, this.cropped && this.options.modal)), rt(this.element, ar, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, Su = {
  change: function(e) {
    var s = this.options, o = this.canvasData, a = this.containerData, i = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = i.left, f = i.top, b = i.width, S = i.height, T = v + b, E = f + S, I = 0, $ = 0, U = a.width, N = a.height, j = !0, B;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && (I = i.minLeft, $ = i.minTop, U = I + Math.min(a.width, o.width, o.left + o.width), N = $ + Math.min(a.height, o.height, o.top + o.height));
    var F = d[Object.keys(d)[0]], k = {
      x: F.endX - F.startX,
      y: F.endY - F.startY
    }, R = function(oe) {
      switch (oe) {
        case Ke:
          T + k.x > U && (k.x = U - T);
          break;
        case Ye:
          v + k.x < I && (k.x = I - v);
          break;
        case je:
          f + k.y < $ && (k.y = $ - f);
          break;
        case Je:
          E + k.y > N && (k.y = N - E);
          break;
      }
    };
    switch (m) {
      case Dr:
        v += k.x, f += k.y;
        break;
      case Ke:
        if (k.x >= 0 && (T >= U || l && (f <= $ || E >= N))) {
          j = !1;
          break;
        }
        R(Ke), b += k.x, b < 0 && (m = Ye, b = -b, v -= b), l && (S = b / l, f += (i.height - S) / 2);
        break;
      case je:
        if (k.y <= 0 && (f <= $ || l && (v <= I || T >= U))) {
          j = !1;
          break;
        }
        R(je), S -= k.y, f += k.y, S < 0 && (m = Je, S = -S, f -= S), l && (b = S * l, v += (i.width - b) / 2);
        break;
      case Ye:
        if (k.x <= 0 && (v <= I || l && (f <= $ || E >= N))) {
          j = !1;
          break;
        }
        R(Ye), b -= k.x, v += k.x, b < 0 && (m = Ke, b = -b, v -= b), l && (S = b / l, f += (i.height - S) / 2);
        break;
      case Je:
        if (k.y >= 0 && (E >= N || l && (v <= I || T >= U))) {
          j = !1;
          break;
        }
        R(Je), S += k.y, S < 0 && (m = je, S = -S, f -= S), l && (b = S * l, v += (i.width - b) / 2);
        break;
      case ht:
        if (l) {
          if (k.y <= 0 && (f <= $ || T >= U)) {
            j = !1;
            break;
          }
          R(je), S -= k.y, f += k.y, b = S * l;
        } else
          R(je), R(Ke), k.x >= 0 ? T < U ? b += k.x : k.y <= 0 && f <= $ && (j = !1) : b += k.x, k.y <= 0 ? f > $ && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = gt, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ft, b = -b, v -= b) : S < 0 && (m = pt, S = -S, f -= S);
        break;
      case ft:
        if (l) {
          if (k.y <= 0 && (f <= $ || v <= I)) {
            j = !1;
            break;
          }
          R(je), S -= k.y, f += k.y, b = S * l, v += i.width - b;
        } else
          R(je), R(Ye), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y <= 0 && f <= $ && (j = !1) : (b -= k.x, v += k.x), k.y <= 0 ? f > $ && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = pt, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ht, b = -b, v -= b) : S < 0 && (m = gt, S = -S, f -= S);
        break;
      case gt:
        if (l) {
          if (k.x <= 0 && (v <= I || E >= N)) {
            j = !1;
            break;
          }
          R(Ye), b -= k.x, v += k.x, S = b / l;
        } else
          R(Je), R(Ye), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y >= 0 && E >= N && (j = !1) : (b -= k.x, v += k.x), k.y >= 0 ? E < N && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = ht, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = pt, b = -b, v -= b) : S < 0 && (m = ft, S = -S, f -= S);
        break;
      case pt:
        if (l) {
          if (k.x >= 0 && (T >= U || E >= N)) {
            j = !1;
            break;
          }
          R(Ke), b += k.x, S = b / l;
        } else
          R(Je), R(Ke), k.x >= 0 ? T < U ? b += k.x : k.y >= 0 && E >= N && (j = !1) : b += k.x, k.y >= 0 ? E < N && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = ft, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = gt, b = -b, v -= b) : S < 0 && (m = ht, S = -S, f -= S);
        break;
      case Us:
        this.move(k.x, k.y), j = !1;
        break;
      case Ks:
        this.zoom(iu(d), e), j = !1;
        break;
      case Hs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        B = Js(this.cropper), v = F.startX - B.left, f = F.startY - B.top, b = i.minWidth, S = i.minHeight, k.x > 0 ? m = k.y > 0 ? pt : ht : k.x < 0 && (v -= b, m = k.y > 0 ? gt : ft), k.y < 0 && (f -= S), this.cropped || ($e(this.cropBox, de), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (i.width = b, i.height = S, i.left = v, i.top = f, this.action = m, this.renderCropBox()), re(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, wu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ae(this.dragBox, jt), $e(this.cropBox, de), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $e(this.dragBox, jt), ae(this.cropBox, de)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, re(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, $e(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ae(this.cropper, Wr)), this;
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
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = o.left, i = o.top;
    return this.moveTo(Ft(e) ? e : a + Number(e), Ft(s) ? s : i + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(e) && (o.left = e, a = !0), K(s) && (o.top = s, a = !0), a && this.renderCanvas(!0)), this;
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
    var a = this.options, i = this.canvasData, d = i.width, m = i.height, l = i.naturalWidth, v = i.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var f = l * e, b = v * e;
      if (rt(this.element, ur, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, T = Js(this.cropper), E = S && Object.keys(S).length ? au(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        i.left -= (f - d) * ((E.pageX - T.left - i.left) / d), i.top -= (b - m) * ((E.pageY - T.top - i.top) / m);
      } else
        Qe(s) && K(s.x) && K(s.y) ? (i.left -= (f - d) * ((s.x - i.left) / d), i.top -= (b - m) * ((s.y - i.top) / m)) : (i.left -= (f - d) / 2, i.top -= (b - m) / 2);
      i.width = f, i.height = b, this.renderCanvas(!0);
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
    return e = Number(e), K(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(e) && (o.scaleX = e, a = !0), K(s) && (o.scaleY = s, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, a = this.canvasData, i = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: i.left - a.left,
        y: i.top - a.top,
        width: i.width,
        height: i.height
      };
      var m = o.width / o.naturalWidth;
      if (re(d, function(f, b) {
        d[b] = f / m;
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
    var s = this.options, o = this.imageData, a = this.canvasData, i = {};
    if (this.ready && !this.disabled && Qe(e)) {
      var d = !1;
      s.rotatable && K(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, d = !0), s.scalable && (K(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, d = !0), K(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = o.width / o.naturalWidth;
      K(e.x) && (i.left = e.x * m + a.left), K(e.y) && (i.top = e.y * m + a.top), K(e.width) && (i.width = e.width * m), K(e.height) && (i.height = e.height * m), this.setCropBoxData(i);
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
    var e = this.canvasData, s = {};
    return this.ready && re(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
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
    return this.ready && !this.disabled && Qe(e) && (K(e.left) && (s.left = e.left), K(e.top) && (s.top = e.top), K(e.width) ? (s.width = e.width, s.height = e.width / o) : K(e.height) && (s.height = e.height, s.width = e.height * o), this.renderCanvas(!0)), this;
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
    var s = this.cropBoxData, o = this.options.aspectRatio, a, i;
    return this.ready && this.cropped && !this.disabled && Qe(e) && (K(e.left) && (s.left = e.left), K(e.top) && (s.top = e.top), K(e.width) && e.width !== s.width && (a = !0, s.width = e.width), K(e.height) && e.height !== s.height && (i = !0, s.height = e.height), o && (a ? s.height = s.width / o : i && (s.width = s.height * o)), this.renderCropBox()), this;
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
    var s = this.canvasData, o = cu(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), i = a.x, d = a.y, m = a.width, l = a.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (i *= v, d *= v, m *= v, l *= v);
    var f = m / l, b = Ve({
      aspectRatio: f,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Ve({
      aspectRatio: f,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), T = Ve({
      aspectRatio: f,
      width: e.width || (v !== 1 ? o.width : m),
      height: e.height || (v !== 1 ? o.height : l)
    }), E = T.width, I = T.height;
    E = Math.min(b.width, Math.max(S.width, E)), I = Math.min(b.height, Math.max(S.height, I));
    var $ = document.createElement("canvas"), U = $.getContext("2d");
    $.width = tt(E), $.height = tt(I), U.fillStyle = e.fillColor || "transparent", U.fillRect(0, 0, E, I);
    var N = e.imageSmoothingEnabled, j = N === void 0 ? !0 : N, B = e.imageSmoothingQuality;
    U.imageSmoothingEnabled = j, B && (U.imageSmoothingQuality = B);
    var F = o.width, k = o.height, R = i, G = d, oe, te, ce, ve, pe, ge;
    R <= -m || R > F ? (R = 0, oe = 0, ce = 0, pe = 0) : R <= 0 ? (ce = -R, R = 0, oe = Math.min(F, m + R), pe = oe) : R <= F && (ce = 0, oe = Math.min(m, F - R), pe = oe), oe <= 0 || G <= -l || G > k ? (G = 0, te = 0, ve = 0, ge = 0) : G <= 0 ? (ve = -G, G = 0, te = Math.min(k, l + G), ge = te) : G <= k && (ve = 0, te = Math.min(l, k - G), ge = te);
    var A = [R, G, oe, te];
    if (pe > 0 && ge > 0) {
      var V = E / m;
      A.push(ce * V, ve * V, pe * V, ge * V);
    }
    return U.drawImage.apply(U, [o].concat(zs(A.map(function(O) {
      return Math.floor(tt(O));
    })))), $;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(e) {
    var s = this.options;
    return !this.disabled && !Ft(e) && (s.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(e) {
    var s = this.options, o = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var i = e === Cr, d = s.movable && e === Ys;
      e = i || d ? e : Ws, s.dragMode = e, yt(o, bt, e), et(o, or, i), et(o, nr, d), s.cropBoxMovable || (yt(a, bt, e), et(a, or, i), et(a, nr, d));
    }
    return this;
  }
}, _u = Ie.Cropper, eo = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Pc(this, r), !e || !Fc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = Q({}, rs, Qe(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Nc(r, [{
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
        var a = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Xc.test(s)) {
          Zc.test(s) ? this.read(hu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, i.checkCrossOrigin && os(s) && a.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = a.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, a = this.imageData, i = pu(s), d = 0, m = 1, l = 1;
      if (i > 1) {
        this.url = fu(s, ts);
        var v = gu(i);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (a.rotate = d), o.scalable && (a.scaleX = m, a.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, a = s.crossOrigin, i = o;
      this.options.checkCrossOrigin && os(o) && (a || (a = "anonymous"), i = ns(o)), this.crossOrigin = a, this.crossOriginUrl = i;
      var d = document.createElement("img");
      a && (d.crossOrigin = a), d.src = i || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), ae(d, Xr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Ie.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ie.navigator.userAgent), i = function(v, f) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: f,
          aspectRatio: v / f
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !a) {
        i(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), a || m.removeChild(d);
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
        var s = this.element, o = this.options, a = this.image, i = s.parentNode, d = document.createElement("div");
        d.innerHTML = qc;
        var m = d.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), f = m.querySelector(".".concat(J, "-crop-box")), b = f.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = f, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), ae(s, de), i.insertBefore(m, s.nextSibling), $e(a, Xr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, ae(f, de), o.guides || ae(f.getElementsByClassName("".concat(J, "-dashed")), de), o.center || ae(f.getElementsByClassName("".concat(J, "-center")), de), o.background && ae(m, "".concat(J, "-bg")), o.highlight || ae(b, Hc), o.cropBoxMovable && (ae(b, nr), yt(b, bt, Dr)), o.cropBoxResizable || (ae(f.getElementsByClassName("".concat(J, "-line")), de), ae(f.getElementsByClassName("".concat(J, "-point")), de)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ue(o.ready) && ye(s, Jr, o.ready, {
          once: !0
        }), rt(s, Jr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), $e(this.element, de);
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
      return window.Cropper = _u, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(rs, Qe(s) && s);
    }
  }]), r;
}();
Q(eo.prototype, mu, vu, bu, yu, Su, wu);
const xu = { class: "flex" }, ku = ["aria-label"], Du = { class: "ml-auto mb-2" }, Cu = { class: "w-full flex justify-center" }, Mu = ["src"], Eu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: a } = Ae(), i = L(null), d = L(null), m = L(!1), l = L(""), v = L(!1), f = () => {
      m.value = !m.value, m.value ? d.value = new eo(i.value, {
        crop(T) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (T) => {
          l.value = "", v.value = !1, Pt(a.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: T
            }),
            name: s.selection.item.basename,
            json: !1
          }).then((E) => {
            l.value = o("Updated."), i.value.src = er(s.selection.adapter, s.selection.item.path), f(), e("load");
          }).catch((E) => {
            l.value = o(E.message), v.value = !0;
          });
        }
      );
    };
    return Me(() => {
      e("load");
    }), (T, E) => (_(), C(le, null, [
      p("div", xu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, ku),
        p("div", Du, [
          m.value ? (_(), C("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, M(x(o)("Crop")), 1)) : X("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: E[0] || (E[0] = (I) => f())
          }, M(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      p("div", Cu, [
        p("img", {
          ref_key: "image",
          ref: i,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(er)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Mu)
      ]),
      l.value.length ? (_(), q(Oe, {
        key: 0,
        onHidden: E[1] || (E[1] = (I) => l.value = ""),
        error: v.value
      }, {
        default: Z(() => [
          se(M(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : X("", !0)
    ], 64));
  }
}, Tu = { class: "flex" }, $u = ["aria-label"], Iu = /* @__PURE__ */ p("div", null, null, -1), Au = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return Me(() => {
      e("load");
    }), (s, o) => (_(), C(le, null, [
      p("div", Tu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, $u)
      ]),
      Iu
    ], 64));
  }
}, Lu = ["aria-label"], Ou = {
  class: "w-full",
  preload: "",
  controls: ""
}, Pu = ["src"], Nu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (i, d) => (_(), C(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, Lu),
      p("div", null, [
        p("video", Ou, [
          p("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Pu),
          se(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, ju = ["aria-label"], Ru = {
  class: "w-full",
  controls: ""
}, Vu = ["src"], Bu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (i, d) => (_(), C(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, ju),
      p("div", null, [
        p("audio", Ru, [
          p("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Vu),
          se(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, zu = ["aria-label"], Hu = ["data"], Uu = ["src"], Ku = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), a = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (i, d) => (_(), C(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, zu),
      p("div", null, [
        p("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          p("iframe", {
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
        `, 8, Uu)
        ], 8, Hu)
      ])
    ], 64));
  }
}, Yu = { class: "sm:flex sm:items-start" }, Wu = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Xu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Zu = {
  key: 0,
  class: "flex leading-5"
}, Fu = /* @__PURE__ */ p("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ p("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ p("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), qu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Gu = { class: "font-bold pl-2" }, Ju = { class: "font-bold pl-2" }, Qu = {
  name: "VFModalPreview"
}, ed = /* @__PURE__ */ Object.assign(Qu, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Ae(), o = P("emitter"), { t: a } = P("i18n"), i = L(!1), d = (v) => i.value = v, m = (v) => (e.selection.item.mime_type ?? "").startsWith(v), l = () => {
      const v = s.value + "?" + Fe({ q: "download", adapter: e.selection.adapter, path: e.selection.item.path });
      o.emit("vf-download", v);
    };
    return (v, f) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: f[6] || (f[6] = (b) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Close")), 1),
        p("button", {
          type: "button",
          onClick: f[7] || (f[7] = (b) => l()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Download")), 1)
      ]),
      default: Z(() => [
        p("div", Yu, [
          p("div", Wu, [
            p("div", null, [
              m("text") ? (_(), q(Oc, {
                key: 0,
                selection: r.selection,
                onLoad: f[0] || (f[0] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("image") ? (_(), q(Eu, {
                key: 1,
                selection: r.selection,
                onLoad: f[1] || (f[1] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("video") ? (_(), q(Nu, {
                key: 2,
                selection: r.selection,
                onLoad: f[2] || (f[2] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("audio") ? (_(), q(Bu, {
                key: 3,
                selection: r.selection,
                onLoad: f[3] || (f[3] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("application/pdf") ? (_(), q(Ku, {
                key: 4,
                selection: r.selection,
                onLoad: f[4] || (f[4] = (b) => d(!0))
              }, null, 8, ["selection"])) : (_(), q(Au, {
                key: 5,
                selection: r.selection,
                onLoad: f[5] || (f[5] = (b) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", Xu, [
              i.value == !1 ? (_(), C("div", Zu, [
                Fu,
                p("span", null, M(x(a)("Loading")), 1)
              ])) : X("", !0)
            ])
          ])
        ]),
        p("div", qu, [
          p("div", null, [
            p("span", Gu, M(x(a)("File Size")) + ": ", 1),
            se(M(x(us)(r.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", Ju, M(x(a)("Last Modified")) + ": ", 1),
            se(" " + M(x(ds)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), td = { class: "sm:flex sm:items-start" }, rd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), sd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, od = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nd = { class: "mt-2" }, id = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, ad = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ld = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), cd = [
  ld
], ud = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), hd = [
  dd
], fd = { class: "ml-1.5" }, pd = ["onKeyup"], gd = {
  name: "VFModalRename"
}, md = /* @__PURE__ */ Object.assign(gd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), i = L(e.selection.items[0]), d = L(e.selection.items[0].basename), m = L(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: e.current.dirname,
          item: i.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is renamed.", d.value) });
        },
        onError: (v) => {
          m.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", td, [
          rd,
          p("div", sd, [
            p("h3", od, M(x(a)("Rename")), 1),
            p("div", nd, [
              p("p", id, [
                i.value.type == "dir" ? (_(), C("svg", ad, cd)) : (_(), C("svg", ud, hd)),
                p("span", fd, M(i.value.basename), 1)
              ]),
              Se(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => d.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, pd), [
                [nt, d.value]
              ]),
              m.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(m.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vd = { class: "sm:flex sm:items-start" }, bd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), yd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wd = { class: "mt-2" }, _d = { class: "text-gray-500 mb-1" }, xd = ["id"], kd = {
  key: 0,
  class: "py-2"
}, Dd = ["disabled", "onClick"], Cd = {
  name: "VFModalUpload"
}, Md = /* @__PURE__ */ Object.assign(Cd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { apiUrl: o } = Ae(), { t: a } = P("i18n"), i = P("maxFileSize"), d = L(null), m = L(null), l = L(null), v = L([]), f = L(""), b = L(!0), S = () => {
      f.value = "", d.value.start();
    }, T = P("postData");
    return Me(() => {
      d.value = new dt.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: i,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Fe(Object.assign(T, { q: "upload", adapter: e.current.adapter, path: e.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Ot && { "X-CSRF-Token": Ot }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(E, I) {
            b.value = !1, dt.each(I, function($) {
              v.value.push({
                id: $.id,
                name: $.name,
                size: dt.formatSize($.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(E, I) {
            v.value[v.value.findIndex(($) => $.id == I.id)].percent = I.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
          },
          Error: function(E, I) {
            d.value.stop(), I.code == dt.HTTP_ERROR ? f.value = a(JSON.parse(I.response).message) : I.code == dt.FILE_SIZE_ERROR ? f.value = a("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [i]) : f.value = a(I.message);
          }
        }
      }), d.value.init();
    }), (E, I) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          disabled: b.value,
          onClick: We(S, ["prevent"]),
          type: "button",
          class: he([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, M(x(a)("Upload")), 11, Dd),
        p("button", {
          type: "button",
          onClick: I[1] || (I[1] = ($) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", vd, [
          bd,
          p("div", yd, [
            p("h3", Sd, M(x(a)("Upload files")), 1),
            p("div", wd, [
              p("div", _d, [
                (_(!0), C(le, null, we(v.value, ($) => (_(), C("div", null, [
                  p("div", {
                    id: $.id
                  }, [
                    se(M($.name) + " ( " + M($.size) + ") ", 1),
                    p("b", null, M($.percent), 1)
                  ], 8, xd)
                ]))), 256)),
                v.value.length ? X("", !0) : (_(), C("div", kd, M(x(a)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, M(x(a)("Select Files")), 513)
              ], 512),
              f.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: I[0] || (I[0] = ($) => f.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(f.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ed = { class: "sm:flex sm:items-start" }, Td = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), $d = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Id = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ad = { class: "mt-2" }, Ld = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Od = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Pd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Nd = [
  Pd
], jd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Rd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Vd = [
  Rd
], Bd = { class: "ml-1.5" }, zd = ["onKeyup", "placeholder"], Hd = {
  name: "VFModalArchive"
}, Ud = /* @__PURE__ */ Object.assign(Hd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = L(e.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(m.value.map(({ path: v, type: f }) => ({ path: v, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Ed, [
          Td,
          p("div", $d, [
            p("h3", Id, M(x(a)("Archive the files")), 1),
            p("div", Ad, [
              (_(!0), C(le, null, we(m.value, (b) => (_(), C("p", Ld, [
                b.type == "dir" ? (_(), C("svg", Od, Nd)) : (_(), C("svg", jd, Vd)),
                p("span", Bd, M(b.basename), 1)
              ]))), 256)),
              Se(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => i.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, zd), [
                [nt, i.value]
              ]),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Kd = { class: "sm:flex sm:items-start" }, Yd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Wd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Xd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Zd = { class: "mt-2" }, Fd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, qd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Jd = [
  Gd
], Qd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, eh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), th = [
  eh
], rh = { class: "ml-1.5" }, sh = { class: "my-1 text-sm text-gray-500" }, oh = {
  name: "VFModalUnarchive"
}, nh = /* @__PURE__ */ Object.assign(oh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n");
    L("");
    const i = L(e.selection.items[0]), d = L(""), m = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: e.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: f[1] || (f[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Kd, [
          Yd,
          p("div", Wd, [
            p("h3", Xd, M(x(a)("Unarchive")), 1),
            p("div", Zd, [
              (_(!0), C(le, null, we(m.value, (b) => (_(), C("p", Fd, [
                b.type == "dir" ? (_(), C("svg", qd, Jd)) : (_(), C("svg", Qd, th)),
                p("span", rh, M(b.basename), 1)
              ]))), 256)),
              p("p", sh, M(x(a)("The archive will be unarchived at")) + " (" + M(r.current.dirname) + ")", 1),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: f[0] || (f[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ih = { class: "sm:flex sm:items-start" }, ah = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), lh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ch = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, uh = { class: "mt-2" }, dh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, hh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, fh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ph = [
  fh
], gh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, mh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), vh = [
  mh
], bh = { class: "ml-1.5" }, yh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Sh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, wh = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), _h = { class: "ml-1.5 overflow-auto" }, xh = {
  name: "VFModalMove"
}, kh = /* @__PURE__ */ Object.assign(xh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const a = P("adapter"), i = L(e.selection.items.from), d = L(""), m = () => {
      i.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: e.current.dirname,
          items: JSON.stringify(i.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("file-moved", {
            from: e.current.dirname,
            to: e.selection.items.to.path,
            files: i.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          }), s.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, v) => (_(), q(Le, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", ih, [
          ah,
          p("div", lh, [
            p("h3", ch, M(x(o)("Move files")), 1),
            p("div", uh, [
              (_(!0), C(le, null, we(i.value, (f) => (_(), C("p", dh, [
                f.type == "dir" ? (_(), C("svg", hh, ph)) : (_(), C("svg", gh, vh)),
                p("span", bh, M(f.path), 1)
              ]))), 256)),
              p("p", yh, M(x(o)("Are you sure you want to move these files?")), 1),
              p("p", Sh, [
                wh,
                p("span", _h, M(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (_(), q(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: Ud,
  ModalDelete: rc,
  ModalMessage: uc,
  ModalMove: kh,
  ModalNewFile: Ec,
  ModalNewFolder: yc,
  ModalPreview: ed,
  ModalRename: md,
  ModalUnarchive: nh,
  ModalUpload: Md
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  VueFinder: $l,
  ...Dh
};
const Eh = {
  install(r) {
    for (const e in Gt)
      if (Gt.hasOwnProperty(e)) {
        const s = Gt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Eh as default
};
