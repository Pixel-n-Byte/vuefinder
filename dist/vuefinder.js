import { ref as L, watch as zt, inject as P, openBlock as w, createElementBlock as M, unref as x, createCommentVNode as W, normalizeClass as ce, createElementVNode as h, createTextVNode as te, toDisplayString as I, createVNode as Me, TransitionGroup as Ni, withCtx as G, Fragment as ne, renderList as ve, reactive as $t, onMounted as we, onUpdated as Oi, withDirectives as Ee, vShow as Et, withModifiers as We, nextTick as Rt, customRef as ji, withKeys as it, isRef as Pi, vModelText as ot, normalizeStyle as as, provide as Ue, createBlock as q, resolveDynamicComponent as zi, renderSlot as Qt } from "vue";
import dt from "plupload";
var ns;
const Nt = (ns = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : ns.getAttribute("content"), Ot = (r, { method: e = "get", params: s = {}, json: i = !0, signal: a = null }) => {
  const n = { method: e };
  if (n.signal = a, e == "get")
    r += "?" + new URLSearchParams(s);
  else {
    n.headers = {}, Nt && (n.headers["X-CSRF-Token"] = Nt);
    let d = new FormData();
    for (const [p, l] of Object.entries(s))
      d.append(p, l);
    n.body = d;
  }
  return fetch(r, n).then((d) => d.ok ? i ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
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
    i && i.slice().map(function(a) {
      a(s);
    }), (i = r.get("*")) && i.slice().map(function(a) {
      a(e, s);
    });
  } };
}
function Jt(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(e));
  zt(s, i);
  function i() {
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
const Bi = { class: "border-neutral-300 flex justify-end items-center py-1 text-sm relative" }, Vi = {
  key: 0,
  class: "flex text-center"
}, Hi = ["aria-label"], Ui = /* @__PURE__ */ h("svg", {
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
], -1), Zi = [
  Ui
], Yi = ["aria-label"], Wi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Fi = [
  Wi
], Ki = ["aria-label"], Gi = ["aria-label"], Xi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), qi = [
  Xi
], Qi = {
  key: 1,
  class: "flex text-center"
}, Ji = { class: "pl-2" }, eo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, to = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ro = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), so = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), io = [
  ro,
  so
], oo = { class: "flex text-center items-center justify-end" }, no = ["aria-label"], ao = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), lo = [
  ao
], co = ["aria-label"], uo = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, ho = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, fo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, po = ["aria-label"], go = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, mo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, vo = {
  name: "VFToolbar"
}, bo = /* @__PURE__ */ Object.assign(vo, {
  props: {
    data: Object,
    type: String
  },
  setup(r) {
    const e = r, s = P("emitter"), { getStore: i, setStore: a } = P("storage"), { t: n } = P("i18n"), d = L(i("viewport", "grid")), p = L([]), l = L(i("full-screen", !1)), v = L("");
    s.on("vf-search-query", ({ newQuery: E }) => {
      v.value = E;
    });
    const g = P("loadingState"), b = () => g.value, S = () => {
      l.value = !l.value, s.emit("vf-fullscreen-toggle");
    };
    return s.on("vf-nodes-selected", (E) => {
      p.value = E;
    }), s.on("vf-view-toggle", (E) => {
      a("viewport", E), d.value = E;
    }), (E, k) => (w(), M("div", Bi, [
      v.value.length ? (w(), M("div", Qi, [
        h("div", Ji, [
          te(I(x(n)("Search results for")) + " ", 1),
          h("span", eo, I(v.value), 1)
        ]),
        b() ? (w(), M("svg", to, io)) : W("", !0)
      ])) : (w(), M("div", Vi, [
        e.type !== "standalone" ? (w(), M("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: k[0] || (k[0] = (j) => x(s).emit("vf-modal-show", {
            type: "new-folder",
            items: p.value
          }))
        }, Zi, 8, Hi)) : W("", !0),
        e.type !== "standalone" ? (w(), M("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[1] || (k[1] = (j) => !p.value.length || x(s).emit("vf-modal-show", { type: "delete", items: p.value }))
        }, [
          (w(), M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([
              p.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Fi, 2))
        ], 8, Yi)) : W("", !0),
        h("div", {
          class: ce(`mx-1.5 absolute ${e.type == "standalone" ? "standalone-upload-button-div" : "custom-upload-button-div"}`),
          "aria-label": x(n)("Upload"),
          "data-microtip-position": "bottom",
          onClick: k[2] || (k[2] = (j) => x(s).emit("custom-modal-show", {
            type: "upload",
            items: p.value
          }))
        }, [
          h("a", {
            type: "button",
            class: ce(`${e.type == "standalone" ? "standalone-upload-button" : "custom-upload-button"}`)
          }, "Upload", 2)
        ], 10, Ki),
        p.value.length == 1 && p.value[0].mime_type == "application/zip" ? (w(), M("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": x(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[3] || (k[3] = (j) => !p.value.length || x(s).emit("vf-modal-show", {
            type: "unarchive",
            items: p.value
          }))
        }, [
          (w(), M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([
              p.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, qi, 2))
        ], 8, Gi)) : W("", !0)
      ])),
      h("div", oo, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), M("svg", {
            onClick: k[4] || (k[4] = (j) => x(s).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, lo))
        ], 8, no),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: S
        }, [
          (w(), M("svg", uo, [
            l.value ? (w(), M("path", ho)) : (w(), M("path", fo))
          ]))
        ], 8, co),
        e.type !== "standalone" ? (w(), M("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: k[5] || (k[5] = (j) => v.value.length || x(s).emit("vf-view-toggle", d.value == "list" ? "grid" : "list"))
        }, [
          (w(), M("svg", {
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
            d.value == "grid" ? (w(), M("path", go)) : W("", !0),
            d.value == "list" ? (w(), M("path", mo)) : W("", !0)
          ], 2))
        ], 8, po)) : W("", !0)
      ])
    ]));
  }
}), hr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NS4zMDIiIGhlaWdodD0iNDEuNDc3IiB2aWV3Qm94PSIwIDAgNTUuMzAyIDQxLjQ3NyI+CiAgPGcgaWQ9Ik9wZW5fRm9sZGVyIiBkYXRhLW5hbWU9Ik9wZW4gRm9sZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMjEiIGRhdGEtbmFtZT0iUGF0aCAyMjEiIGQ9Ik01MC41NjEsOEgxMS4zODhhNC42MDksNC42MDksMCwwLDAtNC40NywzLjVMLjE2NywzNC4yOTJhMS4xNTIsMS4xNTIsMCwwLDAsMCwuNzYsNC42MDksNC42MDksMCwwLDAsNC4zMDksMi45SDQzLjY0OGE0LjYwOSw0LjYwOSwwLDAsMCw0LjQyNC0zLjM0MWw2LjkxMy0yMC41MDhhMS4xMjgsMS4xMjgsMCwwLDAsMC0uMjA3LDQuNDcsNC40NywwLDAsMCwuMTg0LTEuMjlBNC42MDksNC42MDksMCwwLDAsNTAuNTYxLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjEzMyA2LjUyMSkiIGZpbGw9IiM4MDhkOTMiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzIyMiIgZGF0YS1uYW1lPSJQYXRoIDIyMiIgZD0iTTEuMTUyLDI2LjkxOEExLjE1MiwxLjE1MiwwLDAsMCwyLjMsMjYuMDQzbDIuNTEyLTguNjE4YTYuOTEzLDYuOTEzLDAsMCwxLDYuNzA1LTUuMjA4SDQ3LjAzYTEuMTUyLDEuMTUyLDAsMCwwLDEuMDgzLTEuNTQ0LDQuNjA5LDQuNjA5LDAsMCwwLTQuMzMyLTMuMDY1SDIyLjM3NEwxOC4wODgsMy4zNDZBMS4xNTIsMS4xNTIsMCwwLDAsMTcuMjgyLDNINC42MDlBNC42MDksNC42MDksMCwwLDAsMCw3LjYwOVYyNS43NjZBMS4xNTIsMS4xNTIsMCwwLDAsLjk5MSwyNi45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iIzgwOGQ5MyIvPgogIDwvZz4KPC9zdmc+Cg==";
var yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function So(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, e) {
  (function(s, i) {
    r.exports = i();
  })(yo, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var m, o, f, y, _ = [], C = !0, H = !1;
        try {
          if (f = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (m = f.call(t)).done) && (_.push(m.value), _.length !== u); C = !0)
              ;
        } catch (K) {
          H = !0, o = K;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (H)
              throw o;
          }
        }
        return _;
      }
    }
    function i(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(o) {
          return Object.getOwnPropertyDescriptor(c, o).enumerable;
        })), t.push.apply(t, m);
      }
      return t;
    }
    function a(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? i(Object(t), !0).forEach(function(m) {
          l(c, m, t[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(m) {
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
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, o) {
        return m.__proto__ = o, m;
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
    function E(c, u, t) {
      return S() ? E = Reflect.construct.bind() : E = function(o, f, y) {
        var _ = [null];
        _.push.apply(_, f);
        var C = Function.bind.apply(o, _), H = new C();
        return y && b(H, y.prototype), H;
      }, E.apply(null, arguments);
    }
    function k(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function j(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return j = function(m) {
        if (m === null || !k(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, o);
        }
        function o() {
          return E(m, arguments, g(this).constructor);
        }
        return o.prototype = Object.create(m.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(o, m);
      }, j(c);
    }
    function A(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function U(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return A(c);
    }
    function N(c) {
      var u = S();
      return function() {
        var m = g(c), o;
        if (u) {
          var f = g(this).constructor;
          o = Reflect.construct(m, arguments, f);
        } else
          o = m.apply(this, arguments);
        return U(this, o);
      };
    }
    function $(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = g(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, t, m) {
        var o = $(u, t);
        if (o) {
          var f = Object.getOwnPropertyDescriptor(o, t);
          return f.get ? f.get.call(arguments.length < 3 ? u : m) : f.value;
        }
      }, B.apply(this, arguments);
    }
    function V(c, u) {
      return X(c) || s(c, u) || se(c, u) || pe();
    }
    function D(c) {
      return z(c) || Q(c) || se(c) || be();
    }
    function z(c) {
      if (Array.isArray(c))
        return ue(c);
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
        if (Array.isArray(c) || (t = se(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var m = 0, o = function() {
          };
          return {
            s: o,
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
    function T(c, u) {
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
      var u = T(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, t, m) {
      var o = u.x, f = u.y, y = m.x, _ = m.y, C = {
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
    }, re = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, Z = function(u) {
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
      var o = function() {
        return pi(m, t);
      };
      return {
        observer: m,
        callback: t,
        cleanup: o
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
        for (var m = arguments.length, o = new Array(m), f = 0; f < m; f++)
          o[f] = arguments[f];
        var y = function() {
          t = null, c.apply(void 0, o);
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
        var o, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (o = m[f]) === null || o === void 0 ? void 0 : o.parentNode;
        return y ? (m.push(y), f++, t(m, f)) : m;
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
      return je(c).forEach(function(m) {
        var o = u.getRect(m);
        t.top = Math.min(t.top, o.top), t.left = Math.min(t.left, o.left), t.bottom = Math.max(t.bottom, o.bottom), t.right = Math.max(t.right, o.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Mt = function(c) {
      return !c || c instanceof Document ? Wt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Wt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Wt().y
      };
    }, Lr = function(c) {
      var u = c.elementRect, t = c.containerRect, m = c.tolerance, o = m === void 0 ? {
        x: 0,
        y: 0
      } : m, f = [];
      return u.top - o.y < t.top && f.push("top"), u.left - o.x < t.left && f.push("left"), u.bottom + o.y > t.bottom && f.push("bottom"), u.right + o.y > t.right && f.push("right"), /** @type {DSEdges} */
      f;
    }, ii = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, oi = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, m = c.pointerPos, o = {};
      return m.x > t.x - u.x ? (o.left = t.x - u.x, o.width = m.x - t.x + u.x) : (o.left = m.x, o.width = t.x - m.x - u.x), m.y > t.y - u.y ? (o.top = t.y - u.y, o.height = m.y - t.y + u.y) : (o.top = m.y, o.height = t.y - m.y - u.y), o;
    }, Ar = function(u) {
      var t = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return t;
      if (m.transform.indexOf("3d") >= 0) {
        var o = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (o && o.length) {
          var f, y = (f = o[1]) === null || f === void 0 ? void 0 : f.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = m.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, H = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(H[4]) || 0, t.y = parseInt(H[5]) || 0;
      }
      return t;
    }, ni = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Ar(u);
      var m = {
        x: 0,
        y: 0
      }, o = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (o) {
        var f, y = (f = o[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          m.x = parseInt(C[0]) || 0, m.y = parseInt(C[1]) || 0;
        }
      }
      return !m.x && !m.x ? Ar(u) : m;
    }, ai = function(u) {
      var t = u.style, m = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!m.x && !m.x) {
        var o = window.getComputedStyle(u);
        return {
          x: parseInt(o.left) || 0,
          y: parseInt(o.top) || 0
        };
      }
      return m;
    }, li = function(c, u) {
      return u ? ni(c) : ai(c);
    }, ci = function(c) {
      var u = c.element, t = c.edges, m = c.elementRect, o = c.containerRect, f = c.elementPos, y = c.useTransform;
      t.includes("top") && lt(u, {
        y: f.y + o.top - m.top,
        x: f.x
      }, y), t.includes("left") && lt(u, {
        y: f.y,
        x: f.x + o.left - m.left
      }, y), t.includes("bottom") && lt(u, {
        y: f.y + o.bottom - m.bottom,
        x: f.x
      }, y), t.includes("right") && lt(u, {
        y: f.y,
        x: f.x + o.right - m.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, t = c.node, m = u.position, o = m === "absolute" || m === "relative" || m === "fixed";
      !(t instanceof Document) && !o && (t.style.position = "relative");
    }, ui = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, m = c.zoom, o = c.key, f = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, H = {
        x: 0,
        y: 0
      }, K = u ? t * 4 * m : t * m;
      return f.left.includes(o) && (H.x = y.x || -K, !u && !y.x && _ && C(["left"], t)), f.right.includes(o) && (H.x = y.x || K, !u && !y.x && _ && C(["right"], t)), f.up.includes(o) && (H.y = y.y || -K, !u && !y.y && _ && C(["top"], t)), f.down.includes(o) && (H.y = y.y || K, !u && !y.y && _ && C(["bottom"], t)), H;
    }, di = function(c) {
      var u = c.element, t = c.force, m = c.multiSelectionToggle, o = c.SelectedSet, f = c.hoverClassName;
      u.classList.contains(f) && !t || (o.has(u) ? m && o.delete(u) : o.add(u), u.classList.add(f));
    }, hi = function(c) {
      var u = c.element, t = c.force, m = c.SelectedSet, o = c.PrevSelectedSet, f = c.hoverClassName;
      if (!u.classList.contains(f) && !t)
        return !1;
      var y = m.has(u), _ = o.has(u);
      y && !_ ? m.delete(u) : !y && _ && m.add(u), u.classList.remove(f);
    }, at = function(u, t, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, F = function(u, t, m, o) {
      if (t === void 0)
        return m ? l({}, u, o) : {};
      if (t === null)
        return l({}, u, null);
      var f = !0, y = !1, _ = typeof o == "string";
      _ && (f = typeof t == "string" || t instanceof String), _ && !f && (y = !0, at(u, "string"));
      var C = !Number.isNaN(o) && typeof o == "number";
      C && (f = !Number.isNaN(t) && typeof t == "number"), C && !f && (y = !0, at(u, "number"));
      var H = Object.prototype.toString.call(o) === "[object Object]";
      H && (f = Object.prototype.toString.call(t) === "[object Object]"), H && !f && (y = !0, at(u, "object"));
      var K = typeof o == "boolean";
      K && (f = typeof t == "boolean"), K && !f && (y = !0, at(u, "boolean"));
      var ae = Array.isArray(o);
      ae && (f = Array.isArray(t)), ae && !f && (y = !0, at(u, "array"));
      var xe = y || m;
      return u === "dragKeys" && f ? l({}, u, Object.assign(o, t)) : u === "dragKeys" && !f ? xe ? l({}, u, o) : {} : (u === "dropZones" && f && new Set(t.map(function(De) {
        return De.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? l({}, u, t) : xe ? l({}, u, o) : {});
    }, fi = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, F("area", c.area, u, document)), F("selectables", c.selectables, u, null)), F("autoScrollSpeed", c.autoScrollSpeed, u, 5)), F("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), F("zoom", c.zoom, u, 1)), F("customStyles", c.customStyles, u, !1)), F("multiSelectMode", c.multiSelectMode, u, !1)), F("multiSelectToggling", c.multiSelectToggling, u, !0)), F("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), F("selector", c.selector, u, null)), F("selectionThreshold", c.selectionThreshold, u, 0)), F("draggability", c.draggability, u, !0)), F("immediateDrag", c.immediateDrag, u, !0)), F("keyboardDrag", c.keyboardDrag, u, !0)), F("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), F("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), F("useTransform", c.useTransform, u, !0)), F("refreshMemoryRate", c.refreshMemoryRate, u, 80)), F("dropZones", c.dropZones, u, [])), F("dropInsideThreshold", c.dropInsideThreshold, u, 1)), F("dropTargetThreshold", c.dropTargetThreshold, u, 0)), F("usePointerEvents", c.usePointerEvents, u, !1)), F("hoverClass", c.hoverClass, u, "ds-hover")), F("selectableClass", c.selectableClass, u, "ds-selectable")), F("selectedClass", c.selectedClass, u, "ds-selected")), F("selectorClass", c.selectorClass, u, "ds-selector")), F("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), F("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), F("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), F("droppableClass", c.droppableClass, u, "ds-droppable")), F("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), F("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), F("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), F("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), F("dragAsBlock", c.dragAsBlock, u, !1));
    }, qe = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (t > 0) {
        var o = (c.right - c.left) * t, f = (c.bottom - c.top) * t;
        m = {
          left: c.left + o,
          right: c.right - o,
          top: c.top + f,
          bottom: c.bottom - f
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, Nr = function(c) {
      var u = c.element, t = c.posDirection, m = c.containerRect, o = c.useTransform, f = li(u, o), y = O(f, "+", t);
      lt(u, y, o);
      var _ = u.getBoundingClientRect(), C = Lr({
        elementRect: _,
        containerRect: m
      });
      ci({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: m,
        elementPos: y,
        useTransform: o
      });
    }, pi = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, gi = function(c, u, t) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, o = c instanceof Document ? m || document.body : c, f = u.includes("top") && o.scrollTop > 0, y = u.includes("bottom") && o.scrollTop < o.scrollHeight, _ = u.includes("left") && o.scrollLeft > 0, C = u.includes("right") && o.scrollLeft < o.scrollWidth;
        f && (o.scrollTop -= 1 * t), y && (o.scrollTop += 1 * t), _ && (o.scrollLeft -= 1 * t), C && (o.scrollLeft += 1 * t);
      }
    }, lt = function(c, u, t) {
      if (t) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, mi = function(c) {
      for (var u = c.subscribe, t = c.publish, m = c.Interaction, o = c.SelectedSet, f = c.DropZones, y = {
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
        var ae = V(H[C], 2), xe = ae[0], De = ae[1];
        ["pre", !1].forEach(function(Ce) {
          return u(Ce ? "".concat(xe, ":").concat(Ce) : xe, function(oe) {
            return De.forEach(function(me) {
              return (!me.condition || me.condition(oe)) && t(Ce ? "".concat(Ce).concat(me.name) : me.name, a(a({
                items: o.elements,
                isDragging: m.isDragging
              }, oe), me.extraData ? me.extraData(oe) : {}));
            });
          });
        });
      }, C = 0, H = Object.entries(y); C < H.length; C++)
        _();
    }, je = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, vi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(o) {
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
          t._observers = ye(t.parentNodes, kt(function(o) {
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
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(o) {
          var f = o.settings;
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
        var t = this, m = u.DS;
        n(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
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
            var H = ui({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (H = t.limitDirection(H)), t._elements.forEach(function(K) {
              return Nr({
                element: K,
                posDirection: H,
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
            var _ = O(t._cursorDiff, "+", t._scrollDiff);
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
    }(), yi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS, o = u.id, f = u.element, y = u.droppables;
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
          t.isDestroyed || (t._itemsDropped = D(new Set([].concat(D(t._itemsDropped), D((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(K) {
            return t.DS.SelectedSet.has(K);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(K) {
            K.classList.add("".concat(t.Settings.droppedTargetClass)), K.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
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
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = o, this.element = f, y && (this.droppables = je(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = ye(this.parentNodes, kt(function() {
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
    }(), Si = /* @__PURE__ */ p(
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
        n(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(o) {
          var f = o.dropZones;
          f && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = f.map(function(y) {
            return new yi(a({
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
          for (var y = f.x, _ = f.y, C = 0, H = o.length; C < H; C++) {
            var K = t._zoneByElement.get(o[C]);
            if (K && qe(K.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return K;
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
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(o) {
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
        var t = this, m = u.DS;
        n(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
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
            var y = t.DS, _ = y.stores, C = _.PointerStore, H = _.KeyStore, K = y.SelectableSet, ae = y.SelectedSet;
            C.start(f);
            var xe = (
              /** @type {any} */
              f.target
            );
            K.has(xe) && (H.isMultiSelectKeyPressed(f) || ae.clear(), ae.toggle(xe), t.reset());
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
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(o) {
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
    }(), _i = /* @__PURE__ */ p(
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(o, f) {
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
    ), xi = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = N(t);
      function t(m) {
        var o, f = m.DS;
        return n(this, t), o = u.call(this), l(A(o), "_rects", void 0), l(A(o), "_timeout", void 0), l(A(o), "init", function() {
          return je(o.Settings.selectables).forEach(function(y) {
            return o.add(y);
          });
        }), l(A(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l(A(o), "_onClick", function(y) {
          return o.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(A(o), "_onPointer", function(y) {
          return o.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(A(o), "addAll", function(y) {
          return y.forEach(function(_) {
            return o.add(_);
          });
        }), l(A(o), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return o.delete(_);
          });
        }), l(A(o), "getRect", function(y) {
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
      return p(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(o) {
            if (B(g(t.prototype), "has", this).call(this, o))
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
            }), B(g(t.prototype), "add", this).call(this, o), this.DS.publish("Selectable:added", f), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!B(g(t.prototype), "has", this).call(this, o))
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
          }), B(g(t.prototype), "delete", this).call(this, o), this.DS.publish("Selectable:removed", f), !0;
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
    }(/* @__PURE__ */ j(Set)), Di = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = N(t);
      function t(m) {
        var o, f = m.DS;
        return n(this, t), o = u.call(this), l(A(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l(A(o), "addAll", function(y) {
          return y.forEach(function(_) {
            return o.add(_);
          });
        }), l(A(o), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return o.delete(_);
          });
        }), o.DS = f, o;
      }
      return p(t, [{
        key: "add",
        value: function(o) {
          if (B(g(t.prototype), "has", this).call(this, o))
            return this;
          var f = {
            items: this.elements,
            item: o
          };
          return this.DS.publish("Selected:added:pre", f), B(g(t.prototype), "add", this).call(this, o), o.classList.add(this.DS.stores.SettingsStore.s.selectedClass), o.style.zIndex = "".concat((parseInt(o.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!B(g(t.prototype), "has", this).call(this, o))
            return !0;
          var f = {
            items: this.elements,
            item: o
          };
          this.DS.publish("Selected:removed:pre", f);
          var y = B(g(t.prototype), "delete", this).call(this, o);
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
    }(/* @__PURE__ */ j(Set)), ki = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(o) {
          var f = o.event, y = o.isDragging;
          y || (t._storePrevious(f), t._handleInsideSelection(!0, f));
        }), l(this, "update", function(o) {
          var f = o.isDragging;
          f || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(o, f) {
          var y = t.DS, _ = y.SelectableSet, C = y.SelectorArea, H = y.Selector, K = t.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && t.Settings.multiSelectToggling, ae = t.Settings.selectionThreshold, xe = _.rects, De = H.rect, Ce = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), me = ge(xe), ct;
          try {
            for (me.s(); !(ct = me.n()).done; ) {
              var Ct = V(ct.value, 2), ut = Ct[0], It = Ct[1];
              C.isInside(ut, It) && (qe(It, De, ae) ? Ce.set(ut, It) : oe.set(ut, It));
            }
          } catch (Ft) {
            me.e(Ft);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var Pr = t.filterSelected({
              select: Ce,
              unselect: oe,
              selectorRect: De
            }), Ai = Pr.select, $i = Pr.unselect;
            Ai.forEach(function(Ft, Kt) {
              return di({
                element: Kt,
                force: o,
                multiSelectionToggle: K,
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
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return p(c, [{
        key: "_storePrevious",
        value: function(t) {
          var m = this.DS, o = m.stores.KeyStore, f = m.SelectedSet;
          o.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Mi = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var o, f;
          t.HTMLNode && (o = t.DS.SelectorArea) !== null && o !== void 0 && o.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Yt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (f = t.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(o) {
          var f = o.isDragging;
          if (!f) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Or(t.HTMLNode, Z(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(o) {
          var f = o.isDragging;
          if (!(f || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, C = y.PointerStore, H = oi({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Or(t.HTMLNode, H), t._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(o) {
          var f = o.settings;
          t.HTMLNode.classList.remove(f["selectorClass:pre"]), t.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return p(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Ci = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        n(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(o, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[f][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var o = t.DS.Area.rect, f = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(o.top + f.top, "px"), C = "".concat(o.left + f.left, "px"), H = "".concat(o.width, "px"), K = "".concat(o.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== H && (y.width = H), y.height !== K && (y.height = K);
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
              elementRect: Z(f.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(o, f) {
          return t.DS.Area.HTMLNode.contains(o) && t.DS.stores.ScrollStore.canScroll ? !0 : qe(t.rect, f || o.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = Dt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(o) {
          var f = o.settings;
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
            var m = this.DS.stores.PointerStore, o = t ? m.getPointerPosition(t) : m.initialVal;
            return qe({
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
        var t = this, m = u.DS;
        n(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
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
            var o = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
              return f.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(f) {
              return o.includes(f.toLocaleLowerCase());
            }) || t && o.some(function(f) {
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
    }(), Ei = /* @__PURE__ */ function() {
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
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(o) {
          var f = o.event;
          return t.start(f);
        }), this.DS.subscribe("Interaction:end", function(o) {
          var f = o.event;
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
    }(), Ti = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
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
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return p(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = O(this.currentVal, "-", this.initialVal), m = _e(this.DS.stores.SettingsStore.s.zoom), o = O(O(t, "*", m), "-", t);
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
    }(), Li = /* @__PURE__ */ p(
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
        var t = this, m = u.DS, o = u.settings;
        n(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(f) {
          var y = f.settings, _ = f.init;
          return t.DS.publish("Settings:updated:pre", a({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(f) {
          for (var y = f.settings, _ = f.init, C = fi(y, _), H = function() {
            var De, Ce = V(ae[K], 2), oe = Ce[0], me = Ce[1];
            oe in t._settings || Object.defineProperty(t.s, oe, {
              get: function() {
                return t._settings[oe];
              },
              set: function(ut) {
                return t.update({
                  settings: l({}, oe, ut)
                });
              }
            }), t._settings["".concat(oe, ":pre")] = t._settings[oe], t._settings[oe] = me;
            var ct = {
              settings: (De = {}, l(De, oe, t._settings[oe]), l(De, "".concat(oe, ":pre"), t._settings["".concat(oe, ":pre")]), De)
            };
            t.DS.publish("Settings:updated", ct), t.DS.publish("Settings:updated:".concat(oe), ct);
          }, K = 0, ae = Object.entries(C); K < ae.length; K++)
            H();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: o,
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
          var o;
          return (o = t.DropZones.getTarget(m)) === null || o === void 0 ? void 0 : o.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(m) {
          return t.DropZones.getItemsDroppedById(m);
        }), l(this, "getItemsInsideByZoneId", function(m, o) {
          return t.DropZones.getItemsInsideById(m, o);
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
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            o && this.publish("callback", {
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
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(je(t)), o || this.addSelectables(t), m && this.PubSub.publish("callback", {
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
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(je(t)), o && this.removeSelectables(t), m && this.PubSub.publish("callback", {
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
          var m = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return je(t).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(t, o, f) : m.addSelection(t, o, f);
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
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, m, o), this.getSelection();
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
        value: function(t, m, o) {
          var f = je(t);
          return this.SelectableSet.addAll(f), m && this.SelectedSet.addAll(f), o && this.PubSub.publish("callback", {
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
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, m), this.addSelectables(t, o);
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
        value: function(t, m, o) {
          return this.SelectableSet.deleteAll(je(t)), m && this.removeSelection(t), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return jr.isCollision = qe, jr;
  });
})(ls);
var wo = ls.exports;
const _o = /* @__PURE__ */ So(wo), cs = (r, e, s, i, a) => (e = Math, s = e.log, i = 1024, a = s(r) / s(i) | 0, r / e.pow(i, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), us = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), xo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Do = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), ko = [
  Do
], Mo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Co = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Io = [
  Co
], Eo = {
  name: "VFSortIcon"
}, Tt = /* @__PURE__ */ Object.assign(Eo, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), M("div", null, [
      r.direction == "down" ? (w(), M("svg", xo, ko)) : W("", !0),
      r.direction == "up" ? (w(), M("svg", Mo, Io)) : W("", !0)
    ]));
  }
}), To = ["onClick"], Lo = {
  name: "VFToast.vue"
}, Ao = /* @__PURE__ */ Object.assign(Lo, {
  setup(r) {
    const e = P("emitter"), { getStore: s } = P("storage"), i = L(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = L([]), d = (l) => {
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
    }), (l, v) => (w(), M("div", {
      class: ce([i.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Me(Ni, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          (w(!0), M(ne, null, ve(n.value, (g, b) => (w(), M("div", {
            onClick: (S) => d(b),
            key: g,
            class: ce([a(g.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, I(g.label), 11, To))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ge = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: $o } = Ae(), er = (r, e) => $o.value + "?" + Ge({ q: "preview", adapter: r, path: e }), Ve = typeof window < "u", ds = Ve && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = Ve && "IntersectionObserver" in window, fs = Ve && "classList" in document.createElement("p"), ps = Ve && window.devicePixelRatio > 1, No = {
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
}, gs = (r) => Object.assign({}, No, r), Rr = function(r, e) {
  let s;
  const i = "LazyLoad::Initialized", a = new r(e);
  try {
    s = new CustomEvent(i, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(i, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, Oo = (r, e) => {
  if (e)
    if (!e.length)
      Rr(r, e);
    else
      for (let s = 0, i; i = e[s]; s += 1)
        Rr(r, i);
}, Oe = "src", fr = "srcset", pr = "sizes", ms = "poster", St = "llOriginalAttrs", vs = "data", gr = "loading", bs = "loaded", ys = "applied", jo = "entered", mr = "error", Ss = "native", ws = "data-", _s = "ll-status", fe = (r, e) => r.getAttribute(ws + e), Po = (r, e, s) => {
  var i = ws + e;
  if (s === null) {
    r.removeAttribute(i);
    return;
  }
  r.setAttribute(i, s);
}, wt = (r) => fe(r, _s), Xe = (r, e) => Po(r, _s, e), Bt = (r) => Xe(r, null), vr = (r) => wt(r) === null, zo = (r) => wt(r) === gr, Ro = (r) => wt(r) === mr, br = (r) => wt(r) === Ss, Bo = [gr, bs, ys, mr], Vo = (r) => Bo.indexOf(wt(r)) >= 0, He = (r, e, s, i) => {
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
}, Ho = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Uo = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, Vt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Zo = (r) => {
  r.disconnect();
}, Yo = (r, e, s) => {
  e.unobserve_entered && Vt(r, s);
}, yr = (r, e) => {
  r && (r.loadingCount += e);
}, Wo = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, Fo = (r) => r.loadingCount > 0, Ko = (r) => r.toLoadCount > 0, ks = (r) => {
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
}, Ht = [Oe], Cs = [Oe, ms], vt = [Oe, fr, pr], Is = [vs], Ut = (r) => !!r[St], Es = (r) => r[St], Ts = (r) => delete r[St], st = (r, e) => {
  if (Ut(r))
    return;
  const s = {};
  e.forEach((i) => {
    s[i] = r.getAttribute(i);
  }), r[St] = s;
}, Go = (r) => {
  Ut(r) || (r[St] = { backgroundImage: r.style.backgroundImage });
}, Xo = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Fe = (r, e) => {
  if (!Ut(r))
    return;
  const s = Es(r);
  e.forEach((i) => {
    Xo(r, i, s[i]);
  });
}, qo = (r) => {
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
}, Qo = (r, e) => {
  Sr(r, (s) => {
    st(s, vt), Br(s, e);
  }), st(r, vt), Br(r, e);
}, Jo = (r, e) => {
  st(r, Ht), Be(r, Oe, fe(r, e.data_src));
}, en = (r, e) => {
  Ms(r, (s) => {
    st(s, Ht), Be(s, Oe, fe(s, e.data_src));
  }), st(r, Cs), Be(r, ms, fe(r, e.data_poster)), Be(r, Oe, fe(r, e.data_src)), r.load();
}, tn = (r, e) => {
  st(r, Is), Be(r, vs, fe(r, e.data_src));
}, rn = (r, e, s) => {
  const i = fe(r, e.data_bg), a = fe(r, e.data_bg_hidpi), n = ps && a ? a : i;
  n && (r.style.backgroundImage = `url("${n}")`, xs(r).setAttribute(Oe, n), As(r, e, s));
}, sn = (r, e, s) => {
  const i = fe(r, e.data_bg_multi), a = fe(r, e.data_bg_multi_hidpi), n = ps && a ? a : i;
  n && (r.style.backgroundImage = n, Ls(r, e, s));
}, on = (r, e, s) => {
  const i = fe(r, e.data_bg_set);
  if (!i)
    return;
  const a = i.split("|");
  let n = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = n.join(), r.style.backgroundImage === "" && (n = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = n.join()), Ls(r, e, s);
}, $s = {
  IMG: Qo,
  IFRAME: Jo,
  VIDEO: en,
  OBJECT: tn
}, nn = (r, e) => {
  const s = $s[r.tagName];
  s && s(r, e);
}, an = (r, e, s) => {
  const i = $s[r.tagName];
  i && (i(r, e), As(r, e, s));
}, ln = ["IMG", "IFRAME", "VIDEO", "OBJECT"], cn = (r) => ln.indexOf(r.tagName) > -1, Ns = (r, e) => {
  e && !Fo(e) && !Ko(e) && He(r.callback_finish, e);
}, Vr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, un = (r, e, s) => {
  r.removeEventListener(e, s);
}, wr = (r) => !!r.llEvLisnrs, dn = (r, e, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const i = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Vr(r, i, e), Vr(r, "error", s);
}, tr = (r) => {
  if (!wr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const i = e[s];
    un(r, s, i);
  }
  delete r.llEvLisnrs;
}, Os = (r, e, s) => {
  Uo(r), yr(s, -1), Wo(s), Ie(r, e.class_loading), e.unobserve_completed && Vt(r, s);
}, hn = (r, e, s, i) => {
  const a = br(e);
  Os(e, s, i), nt(e, s.class_loaded), Xe(e, bs), He(s.callback_loaded, e, i), a || Ns(s, i);
}, fn = (r, e, s, i) => {
  const a = br(e);
  Os(e, s, i), nt(e, s.class_error), Xe(e, mr), He(s.callback_error, e, i), s.restore_on_error && Fe(e, vt), a || Ns(s, i);
}, _r = (r, e, s) => {
  const i = xs(r) || r;
  if (wr(i))
    return;
  dn(i, (d) => {
    hn(d, r, e, s), tr(i);
  }, (d) => {
    fn(d, r, e, s), tr(i);
  });
}, pn = (r, e, s) => {
  Ho(r), _r(r, e, s), Go(r), rn(r, e, s), sn(r, e, s), on(r, e, s);
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
    Fe(e, vt);
  }), Fe(r, vt);
}, bn = (r) => {
  Ms(r, (e) => {
    Fe(e, Ht);
  }), Fe(r, Cs), r.load();
}, yn = (r) => {
  Fe(r, Ht);
}, Sn = (r) => {
  Fe(r, Is);
}, wn = {
  IMG: js,
  IFRAME: yn,
  VIDEO: bn,
  OBJECT: Sn
}, _n = (r) => {
  const e = wn[r.tagName];
  if (!e) {
    qo(r);
    return;
  }
  e(r);
}, xn = (r, e) => {
  vr(r) || br(r) || (Ie(r, e.class_entered), Ie(r, e.class_exited), Ie(r, e.class_applied), Ie(r, e.class_loading), Ie(r, e.class_loaded), Ie(r, e.class_error));
}, Dn = (r, e) => {
  _n(r), xn(r, e), Bt(r), Ts(r);
}, kn = (r, e, s, i) => {
  s.cancel_on_exit && zo(r) && r.tagName === "IMG" && (tr(r), vn(r), js(r), Ie(r, s.class_loading), yr(i, -1), Bt(r), He(s.callback_cancel, r, e, i));
}, Mn = (r, e, s, i) => {
  const a = Vo(r);
  Xe(r, jo), nt(r, s.class_entered), Ie(r, s.class_exited), Yo(r, s, i), He(s.callback_enter, r, e, i), !a && xr(r, s, i);
}, Cn = (r, e, s, i) => {
  vr(r) || (nt(r, s.class_exited), kn(r, e, s, i), He(s.callback_exit, r, e, i));
}, In = ["IMG", "IFRAME", "VIDEO"], Ps = (r) => r.use_native && "loading" in HTMLImageElement.prototype, En = (r, e, s) => {
  r.forEach((i) => {
    In.indexOf(i.tagName) !== -1 && mn(i, e, s);
  }), Ds(s, 0);
}, Tn = (r) => r.isIntersecting || r.intersectionRatio > 0, Ln = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), An = (r, e, s) => {
  r.forEach(
    (i) => Tn(i) ? Mn(i.target, i, e, s) : Cn(i.target, i, e, s)
  );
}, $n = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, Nn = (r, e) => {
  Zo(r), $n(r, e);
}, On = (r, e) => {
  !hs || Ps(r) || (e._observer = new IntersectionObserver((s) => {
    An(s, r, e);
  }, Ln(r)));
}, zs = (r) => Array.prototype.slice.call(r), jt = (r) => r.container.querySelectorAll(r.elements_selector), jn = (r) => zs(r).filter(vr), Pn = (r) => Ro(r), zn = (r) => zs(r).filter(Pn), Ur = (r, e) => jn(r || jt(e)), Rn = (r, e) => {
  zn(jt(r)).forEach((i) => {
    Ie(i, r.class_error), Bt(i);
  }), e.update();
}, Bn = (r, e) => {
  Ve && (e._onlineHandler = () => {
    Rn(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Vn = (r) => {
  Ve && window.removeEventListener("online", r._onlineHandler);
}, _t = function(r, e) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, On(s, this), Bn(s, this), this.update(e);
};
_t.prototype = {
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
    this._observer && this._observer.disconnect(), Vn(this), jt(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Ur(r, e).forEach((i) => {
      Vt(i, this), xr(i, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    jt(r).forEach((e) => {
      Dn(e, r);
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
Ve && Oo(_t, window.lazyLoadOptions);
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
], ea = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], sa = { class: "grid grid-cols-12 items-center" }, ia = { class: "flex col-span-7 items-center" }, oa = {
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
    const e = r, s = P("emitter"), { setStore: i, getStore: a } = P("storage"), n = P("adapter"), d = (T) => T == null ? void 0 : T.substring(0, 3), p = (T) => T.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), g = L(0), b = L(null), { t: S } = P("i18n"), E = Math.floor(Math.random() * 2 ** 32), k = L(a("full-screen", !1)), j = new _t();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, k.value = !k.value, i("full-screen", k.value);
    });
    const A = L("");
    s.on("vf-search-query", ({ newQuery: T }) => {
      A.value = T, T ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: T
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
    let U = null;
    const N = () => {
      U && clearTimeout(U);
    }, $ = L(!0), B = (T) => {
      T.touches.length > 1 && ($.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), $.value = !$.value);
    }, V = (T) => {
      U = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: T.target.getBoundingClientRect().x,
          clientY: T.target.getBoundingClientRect().y
        });
        T.target.dispatchEvent(R);
      }, 500);
    }, D = (T) => {
      T.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", {
        params: { q: "index", adapter: e.data.adapter, path: T.path }
      })) : T.type !== "dir" && e.type !== "standalone" ? s.emit("custom-modal-show", {
        type: "preview",
        adapter: e.data.adapter,
        item: T
      }) : T.type !== "dir" && e.type === "standalone" && s.emit("custom-v-f-insert", { type: "insert", item: T });
    }, z = $t({ active: !1, column: "", order: "" }), X = (T = !0) => {
      let R = [...e.data.files], O = z.column, re = z.order == "asc" ? 1 : -1;
      if (!T)
        return R;
      const Z = (_e, ye) => typeof _e == "string" && typeof ye == "string" ? _e.toLowerCase().localeCompare(ye.toLowerCase()) : _e < ye ? -1 : _e > ye ? 1 : 0;
      return z.active && (R = R.slice().sort((_e, ye) => Z(_e[O], ye[O]) * re)), R;
    }, Q = (T) => {
      z.active && z.column == T ? (z.active = z.order == "asc", z.column = T, z.order = "desc") : (z.active = !0, z.column = T, z.order = "asc");
    }, se = () => b.value.getSelection().map((T) => JSON.parse(T.dataset.item)), ue = (T, R) => {
      if (T.altKey || T.ctrlKey || T.metaKey)
        return T.preventDefault(), !1;
      T.dataTransfer.setDragImage(v.value, 0, 15), T.dataTransfer.effectAllowed = "all", T.dataTransfer.dropEffect = "copy", T.dataTransfer.setData("items", JSON.stringify(se()));
    }, be = (T, R) => {
      T.preventDefault();
      let O = JSON.parse(T.dataTransfer.getData("items"));
      if (O.find((re) => re.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: O, to: R }
      });
    }, pe = (T, R) => {
      T.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == T.currentTarget) ? (T.dataTransfer.dropEffect = "none", T.dataTransfer.effectAllowed = "none") : T.dataTransfer.dropEffect = "copy";
    };
    return we(() => {
      b.value = new _o({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on(
        "vf-explorer-update",
        () => Rt(() => {
          b.value.clearSelection(), b.value.setSelectables(
            document.getElementsByClassName("vf-item-" + E)
          );
        })
      ), b.value.subscribe("predragstart", ({ event: T, isDragging: R }) => {
        if (R)
          g.value = b.value.getSelection().length, b.value.break();
        else {
          const O = T.target.offsetWidth - T.offsetX, re = T.target.offsetHeight - T.offsetY;
          O < 15 && re < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: T }) => {
        T && b.value.break();
      }), b.value.subscribe("callback", ({ items: T, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", se()), g.value = b.value.getSelection().length;
      });
    }), Oi(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), j.update();
    }), we(() => {
      zt(
        () => e.view,
        () => s.emit("vf-explorer-update")
      );
    }), (T, R) => (w(), M("div", Hn, [
      r.view == "list" || A.value.length ? (w(), M("div", Un, [
        h("div", {
          onClick: R[0] || (R[0] = (O) => Q("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          te(I(x(S)("Name")) + " ", 1),
          Ee(Me(Tt, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "basename"]
          ])
        ]),
        A.value.length ? W("", !0) : (w(), M("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => Q("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          te(I(x(S)("Size")) + " ", 1),
          Ee(Me(Tt, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "file_size"]
          ])
        ])),
        A.value.length ? W("", !0) : (w(), M("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => Q("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          te(I(x(S)("Date")) + " ", 1),
          Ee(Me(Tt, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "last_modified"]
          ])
        ])),
        A.value.length ? (w(), M("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => Q("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          te(I(x(S)("Filepath")) + " ", 1),
          Ee(Me(Tt, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "path"]
          ])
        ])) : W("", !0)
      ])) : W("", !0),
      h("div", Zn, [
        h("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Yn,
          h("div", Wn, I(g.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: B,
        onContextmenu: R[10] || (R[10] = We((O) => x(s).emit("vf-contextmenu-show", {
          event: O,
          area: l.value,
          items: se()
        }), ["self", "prevent"])),
        class: ce(`h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto ${e.type == "standalone" ? "standalone-grid-div" : ""}`),
        ref_key: "selectorArea",
        ref: l
      }, [
        A.value.length ? (w(!0), M(ne, { key: 0 }, ve(X(), (O, re) => (w(), M("div", {
          onDblclick: (Z) => D(O),
          onTouchstart: R[4] || (R[4] = (Z) => V(Z)),
          onTouchend: R[5] || (R[5] = (Z) => N()),
          onContextmenu: We((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: se(),
            target: O
          }), ["prevent"]),
          class: ce(["vf-item-" + x(E), "custom-grid-search-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", Kn, [
            h("div", Gn, [
              O.type == "dir" ? (w(), M("img", Xn)) : (w(), M("svg", qn, Jn)),
              h("span", ea, I(O.basename), 1)
            ]),
            h("div", ta, I(O.path), 1)
          ])
        ], 42, Fn))), 256)) : W("", !0),
        r.view == "list" && !A.value.length ? (w(!0), M(ne, { key: 1 }, ve(X(), (O, re) => (w(), M("div", {
          draggable: "true",
          onDblclick: (Z) => D(O),
          onTouchstart: R[6] || (R[6] = (Z) => V(Z)),
          onTouchend: R[7] || (R[7] = (Z) => N()),
          onContextmenu: We((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: se(),
            target: O
          }), ["prevent"]),
          onDragstart: (Z) => ue(Z),
          onDragover: (Z) => pe(Z, O),
          onDrop: (Z) => be(Z, O),
          class: ce(["vf-item-" + x(E), "custom-list-item grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", sa, [
            h("div", ia, [
              O.type == "dir" ? (w(), M("img", oa)) : (w(), M("svg", na, la)),
              h("span", ca, I(O.basename), 1)
            ]),
            h("div", ua, I(O.file_size ? x(cs)(O.file_size) : ""), 1),
            h("div", da, I(x(us)(O.last_modified)), 1)
          ])
        ], 42, ra))), 256)) : W("", !0),
        r.view == "grid" && !A.value.length ? (w(!0), M(ne, { key: 2 }, ve(X(!1), (O, re) => (w(), M("div", {
          draggable: "true",
          onDblclick: (Z) => D(O),
          onTouchstart: R[8] || (R[8] = (Z) => V(Z)),
          onTouchend: R[9] || (R[9] = (Z) => N()),
          onContextmenu: We((Z) => x(s).emit("vf-contextmenu-show", {
            event: Z,
            area: l.value,
            items: se(),
            target: O
          }), ["prevent"]),
          onDragstart: (Z) => ue(Z),
          onDragover: (Z) => pe(Z, O),
          onDrop: (Z) => be(Z, O),
          class: ce(["vf-item-" + x(E), "custom-grid-item border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": re
        }, [
          h("div", fa, [
            h("div", pa, [
              O.type == "dir" ? (w(), M("img", ga)) : (O.mime_type ?? "").startsWith("image") ? (w(), M("img", {
                key: 1,
                class: "custom-grid-item-file lazy",
                "data-src": x(er)(x(n).value, O.path),
                alt: O.basename
              }, null, 8, ma)) : (w(), M("svg", va, ya)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), M("div", Sa, I(d(O.extension)), 1)) : W("", !0)
            ]),
            h("span", wa, I(p(O.basename)), 1)
          ])
        ], 42, ha))), 256)) : W("", !0)
      ], 34),
      Me(Ao)
    ]));
  }
}), Da = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, ka = { class: "flex leading-5 items-center" }, Ma = { class: "ml-3" }, Ca = { key: 0 }, Ia = { class: "ml-1" }, Ea = {
  name: "VFStatusbar"
}, Ta = /* @__PURE__ */ Object.assign(Ea, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: i } = P("storage"), a = L(0);
    P("adapter");
    const { t: n, changeLocale: d } = P("i18n");
    L(s("locale", "")), e.on("vf-nodes-selected", (l) => {
      a.value = l.length;
    });
    const p = L("");
    return e.on("vf-search-query", ({ newQuery: l }) => {
      p.value = l;
    }), (l, v) => (w(), M("div", Da, [
      h("div", ka, [
        h("div", Ma, [
          p.value.length ? (w(), M("span", Ca, I(r.data.files.length) + " items found. ", 1)) : W("", !0),
          h("span", Ia, I(a.value > 0 ? a.value + " " + x(n)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), La = (r, e = 0, s = !1) => {
  let i;
  return (...a) => {
    s && !i && r(...a), clearTimeout(i), i = setTimeout(() => {
      r(...a);
    }, e);
  };
}, Aa = (r, e, s) => {
  const i = L(r);
  return ji((n, d) => ({
    get() {
      return n(), i.value;
    },
    set: La(
      (p) => {
        i.value = p, d();
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
}, null, -1), il = [
  sl
], ol = {
  name: "VFBreadcrumb"
}, nl = /* @__PURE__ */ Object.assign(ol, {
  props: {
    data: Object,
    type: String
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), a = L(null), n = L([]), d = L(!1), p = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let N = [], $ = [];
      a.value = e.data.dirname ?? i.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(i.value + "://", "").split("/").forEach(function(B) {
        N.push(B), N.join("/") != "" && $.push({
          basename: B,
          name: B,
          path: i.value + "://" + N.join("/"),
          type: "dir"
        });
      }), $.length > 4 && ($ = $.slice(-5), $[0].name = ".."), n.value = $;
    });
    const g = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      g();
    });
    const b = () => {
      d.value = !0, Rt(() => p.value.focus());
    }, S = Aa("", 400), E = () => v.value;
    zt(S, (N) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: N });
    });
    const k = () => n.value.length && !d.value, j = (N) => {
      N.preventDefault();
      let $ = JSON.parse(N.dataTransfer.getData("items"));
      if ($.find((B) => B.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: {
          from: $,
          to: n.value[n.value.length - 2] ?? {
            path: i.value + "://"
          }
        }
      });
    }, A = (N) => {
      N.preventDefault(), k() ? N.dataTransfer.dropEffect = "copy" : (N.dataTransfer.dropEffect = "none", N.dataTransfer.effectAllowed = "none");
    }, U = () => {
      S.value == "" && g();
    };
    return (N, $) => (w(), M("div", $a, [
      h("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), M("svg", {
          onDragover: $[0] || ($[0] = (B) => A(B)),
          onDrop: $[1] || ($[1] = (B) => j(B)),
          onClick: $[2] || ($[2] = (B) => {
            var V;
            return !k() || x(s).emit("vf-fetch", {
              params: {
                q: "index",
                adapter: r.data.adapter,
                path: ((V = n.value[n.value.length - 2]) == null ? void 0 : V.path) ?? x(i) + "://"
              }
            });
          }),
          class: ce([
            "h-6 w-6 p-0.5 rounded",
            k() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"
          ]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ja, 34))
      ], 8, Na),
      E() ? (w(), M("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), M("svg", {
          onClick: $[4] || ($[4] = (B) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ha))
      ], 8, Ba)) : (w(), M("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), M("svg", {
          onClick: $[3] || ($[3] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter, path: r.data.dirname }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ra))
      ], 8, Pa)),
      d.value ? (w(), M("div", Ja, [
        el,
        tl,
        Ee(h("input", {
          ref_key: "searchInput",
          ref: p,
          onKeydown: it(g, ["esc"]),
          onBlur: U,
          "onUpdate:modelValue": $[6] || ($[6] = (B) => Pi(S) ? S.value = B : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, rl), [
          [ot, x(S)]
        ]),
        (w(), M("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: g,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, il))
      ])) : (w(), M("div", {
        key: 2,
        class: "custom-search-bar group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (w(), M("svg", {
          onClick: $[5] || ($[5] = (B) => x(s).emit("vf-fetch", {
            params: { q: "index", adapter: r.data.adapter }
          })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ya)),
        h("div", Wa, [
          (w(!0), M(ne, null, ve(n.value, (B, V) => (w(), M("div", { key: V }, [
            Fa,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (D) => x(s).emit("vf-fetch", {
                params: { q: "index", adapter: r.data.adapter, path: B.path }
              })
            }, I(B.name), 9, Ka)
          ]))), 128))
        ]),
        E() ? (w(), M("svg", Ga, Qa)) : W("", !0)
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
    const e = r, s = P("emitter"), i = L(null), { apiUrl: a } = Ae(), n = $t({
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
          const S = a.value + "?" + Ge({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, g = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      g.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: E, items: k, target: j = null }) => {
      if (n.items = [], g.value)
        if (j)
          n.items.push(l.openDir), s.emit("vf-context-selected", [j]);
        else
          return;
      else
        !j && !g.value ? (n.items.push(l.refresh), n.items.push(l.newfolder), s.emit("vf-context-selected", [])) : k.length > 1 && k.some((A) => A.path === j.path) ? (n.items.push(l.refresh), n.items.push(l.delete), s.emit("vf-context-selected", k)) : (j.type == "dir" ? n.items.push(l.open) : j.type == "file" && e.current.type == "regular" ? n.items.push(l.download) : j.type == "file" && e.current.type == "standalone" && (n.items.push(l.insert), n.items.push(l.download)), n.items.push(l.delete), s.emit("vf-context-selected", [j]));
      b(S, E);
    }), s.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (S, E) => {
      n.active = !0, Rt(() => {
        let k = E.getBoundingClientRect(), j = S.pageX, A = S.pageY, U = i.value.offsetHeight, N = i.value.offsetWidth;
        j = k.right - S.pageX + window.scrollX < N ? j - N : j, A = k.bottom - S.pageY + window.scrollY < U ? A - U : A, n.positions = {
          left: j + "px",
          top: A + "px"
        };
      });
    };
    return (S, E) => n.active ? (w(), M("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: i,
      style: as(n.positions)
    }, [
      (w(!0), M(ne, null, ve(n.items, (k) => (w(), M("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: k.title,
        onClick: (j) => v(k)
      }, [
        ll,
        h("span", null, I(k.title()), 1)
      ], 8, al))), 128))
    ], 4)) : W("", !0);
  }
}), dl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((i, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function hl(r) {
  const e = await dl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function fl(r, e, s) {
  const { getStore: i, setStore: a } = Jt(r), n = L({}), d = (v) => {
    hl(v).then((g) => {
      n.value = g, a("locale", v), a("translations", g), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((g) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  i("locale") ? n.value = i("translations") : d(e);
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
    }
  },
  emits: ["deleteButton", "fileMoved", "fileUploaded"],
  setup(r, { expose: e, emit: s }) {
    const i = r;
    e({
      performAction: j
    });
    let a = L();
    const n = Ri(), { setStore: d, getStore: p } = Jt(i.id), l = L(p("adapter"));
    Ue("emitter", n), Ue("storage", Jt(i.id)), Ue("postData", i.postData), Ue("adapter", l), Ue("maxFileSize", i.maxFileSize);
    const v = fl(i.id, i.locale, n);
    Ue("i18n", v);
    const { apiUrl: g, setApiUrl: b } = Ae();
    b(i.url);
    const S = $t({
      adapter: l.value,
      storages: [],
      dirname: ".",
      files: [],
      type: i.vueFinderType,
      url: i.vueFinderUploadUrl
    }), E = L(p("viewport", "grid")), k = L(p("darkMode", i.dark));
    n.on("vf-darkMode-toggle", () => {
      k.value = !k.value, d("darkMode", k.value);
    });
    function j() {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }
    const A = L(!1);
    Ue("loadingState", A);
    const U = L(p("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      U.value = !U.value, d("full-screen", U.value);
    }), n.on("vf-view-toggle", (V) => {
      E.value = V;
    });
    const N = $t({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      N.active = !1;
    }), n.on("vf-modal-show", (V) => {
      N.active = !0, N.type = V.type, N.data = V;
    }), n.on("custom-modal-show", (V) => {
      s("customUploadItem", V, S);
    }), n.on("custom-v-f-insert", (V) => {
      s("customInsertItem", V);
    }), s("fileUploaded", () => {
      console.log("here Emmit uploaded");
    }), n.on("file-moved", (V) => {
      s("fileMoved", V);
    });
    const $ = (V) => {
      Object.assign(S, V), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let B;
    return n.on("vf-fetch-abort", () => {
      B.abort(), A.value = !1;
    }), n.on("vf-fetch", ({ params: V, onSuccess: D = null, onError: z = null }) => {
      ["index", "search"].includes(V.q) && (B && B.abort(), A.value = !0), a = V.path, s("customUpdateVariable", a), B = new AbortController();
      const X = B.signal;
      Ot(g.value, { params: V, signal: X }).then((Q) => {
        l.value = Q.adapter, ["index", "search"].includes(V.q) && (A.value = !1), n.emit("vf-modal-close"), $(Q), D(Q);
      }).catch((Q) => {
        z && z(Q);
      }).finally(() => {
      });
    }), n.on("vf-download", (V) => {
      document.getElementById("download_frame").src = V, n.emit("vf-modal-close");
    }), we(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), (V, D) => (w(), M("div", pl, [
      h("div", {
        class: ce(`${k.value ? "dark" : ""} vuefinder-custom-div`)
      }, [
        h("div", {
          class: ce([
            U.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md",
            "custom-vuefinder-explorer-container border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
          ]),
          style: as(U.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: D[0] || (D[0] = (z) => x(n).emit("vf-contextmenu-hide")),
          onTouchstart: D[1] || (D[1] = (z) => x(n).emit("vf-contextmenu-hide"))
        }, [
          Me(bo, {
            data: S,
            type: i.vueFinderType
          }, null, 8, ["data", "type"]),
          Me(nl, {
            data: S,
            type: i.vueFinderType
          }, null, 8, ["data", "type"]),
          Me(xa, {
            view: E.value,
            data: S,
            type: i.vueFinderType
          }, null, 8, ["view", "data", "type"]),
          Me(Ta, { data: S }, null, 8, ["data"])
        ], 38),
        N.active ? (w(), q(zi("v-f-modal-" + N.type), {
          key: 0,
          selection: N.data,
          current: S
        }, null, 8, ["selection", "current"])) : W("", !0),
        Me(ul, {
          current: S,
          testProp: "hi_there"
        }, null, 8, ["current"]),
        gl
      ], 2)
    ]));
  }
}), bl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background" }, null, -1), yl = { class: "fixed z-10 inset-0 overflow-hidden" }, Sl = { class: "custom-popup-layout transition-all" }, wl = { class: "bg-white dark:bg-gray-800 custom-layout-pop-window" }, _l = { class: "custom-layout-button-slot" }, $e = {
  __name: "ModalLayout",
  setup(r) {
    const e = P("emitter");
    return we(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, i) => (w(), M("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: i[1] || (i[1] = it((a) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      bl,
      h("div", yl, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: i[0] || (i[0] = We((a) => x(e).emit("vf-modal-close"), ["self"]))
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
    const { t: s } = P("i18n"), i = L(!1), a = L(null), n = L((p = a.value) == null ? void 0 : p.strMessage);
    zt(n, () => i.value = !1);
    const d = () => {
      e("hidden"), i.value = !0;
    };
    return (l, v) => (w(), M("div", null, [
      i.value ? W("", !0) : (w(), M("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ce(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(l.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, kl, 8, xl)
      ], 2))
    ]));
  }
}), Cl = { class: "sm:flex custom-new-folder-popup delete-modal-container" }, Il = { class: "custom-file-picker-title" }, El = { class: "file-picker-title-img" }, Tl = /* @__PURE__ */ h("svg", {
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
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n"), n = L(e.selection.items), d = L(""), p = () => {
      n.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: i.value,
          path: e.current.dirname,
          items: JSON.stringify(
            n.value.map(({ path: l, type: v }) => ({ path: l, type: v }))
          )
        },
        onSuccess: () => {
          console.log("success deleting"), s.emit("vf-toast-push", { label: a("Files deleted.") }), s.emit("delete-button", { files: n.value });
        },
        onError: (l) => {
          console.log("unsuccessful"), d.value = a(l.message);
        }
      });
    };
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (g) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Cl, [
          h("div", Il, [
            h("div", El, [
              Tl,
              h("h3", Ll, I(x(a)("Delete files")), 1)
            ]),
            Al
          ]),
          h("div", $l, [
            h("h3", Nl, I(x(a)("Delete files")), 1),
            h("div", Ol, [
              h("p", jl, I(x(a)("Are you sure you want to delete these files?")), 1),
              (w(!0), M(ne, null, ve(n.value, (g) => (w(), M("p", Pl, [
                g.type == "dir" ? (w(), M("svg", zl, Bl)) : (w(), M("svg", Vl, Ul)),
                h("span", Zl, I(g.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[0] || (v[0] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
    const e = P("emitter"), { t: s } = P("i18n");
    return (i, a) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(s)("Close")), 1)
      ]),
      default: G(() => {
        var n, d;
        return [
          h("div", Fl, [
            Kl,
            h("div", Gl, [
              h("h3", Xl, I(((n = r.selection) == null ? void 0 : n.title) ?? "Title"), 1),
              h("div", ql, [
                h("p", Ql, I(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), tc = { class: "sm:flex custom-new-folder-popup" }, rc = { class: "custom-file-picker-title" }, sc = { class: "file-picker-title-img" }, ic = /* @__PURE__ */ h("svg", {
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
}, nc = /* @__PURE__ */ h("hr", null, null, -1), ac = { class: "mt-3 text-center w-full p-4 h-full" }, lc = { class: "mt-2 create-folder-form" }, cc = { class: "text-sm text-gray-500" }, uc = ["onKeyup", "placeholder"], dc = {
  name: "VFModalNewFolder"
}, hc = /* @__PURE__ */ Object.assign(dc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: i.value,
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
        }, I(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", tc, [
          h("div", rc, [
            h("div", sc, [
              ic,
              h("h3", oc, I(x(a)("New Folder")), 1)
            ]),
            nc
          ]),
          h("div", ac, [
            h("div", lc, [
              h("p", cc, I(x(a)("Create a new folder")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: it(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, uc), [
                [ot, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[1] || (v[1] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = () => {
      n.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: i.value,
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
        }, I(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: v[2] || (v[2] = (g) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", fc, [
          pc,
          h("div", gc, [
            h("h3", mc, I(x(a)("New File")), 1),
            h("div", vc, [
              h("p", bc, I(x(a)("Create a new file")), 1),
              Ee(h("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (g) => n.value = g),
                onKeyup: it(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, yc), [
                [ot, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[1] || (v[1] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
}, Mc = { key: 1 }, Cc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, i = L(""), a = L(""), n = L(null), d = L(!1), { apiUrl: p } = Ae(), l = L(""), v = L(!1), { t: g } = P("i18n");
    we(() => {
      Ot(p.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((k) => {
        i.value = k, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = i.value, d.value == !0 && Rt(() => {
        n.value.focus();
      });
    }, S = P("postData"), E = () => {
      l.value = "", v.value = !1, Ot(p.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((k) => {
        l.value = g("Updated."), i.value = k, e("load"), d.value = !d.value;
      }).catch((k) => {
        l.value = g(k.message), v.value = !0;
      });
    };
    return (k, j) => (w(), M(ne, null, [
      h("div", _c, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, I(r.selection.item.basename), 9, xc),
        h("div", Dc, [
          d.value ? (w(), M("button", {
            key: 0,
            onClick: E,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, I(x(g)("Save")), 1)) : W("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: j[0] || (j[0] = (A) => b())
          }, I(d.value ? x(g)("Cancel") : x(g)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        d.value ? (w(), M("div", Mc, [
          Ee(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": j[1] || (j[1] = (A) => a.value = A),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ot, a.value]
          ])
        ])) : (w(), M("pre", kc, I(i.value), 1)),
        l.value.length ? (w(), q(Ne, {
          key: 2,
          onHidden: j[2] || (j[2] = (A) => l.value = ""),
          error: v.value
        }, {
          default: G(() => [
            te(I(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : W("", !0)
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
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function Hs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zr(Object(s), !0).forEach(function(i) {
      Tc(r, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Zr(Object(s)).forEach(function(i) {
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
function Ic(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var i = e[s];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
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
  for (var s = 0, i = new Array(e); s < e; s++)
    i[s] = r[s];
  return i;
}
function Nc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Zt = typeof window < "u" && typeof window.document < "u", Le = Zt ? window : {}, Dr = Zt && Le.document.documentElement ? "ontouchstart" in Le.document.documentElement : !1, kr = Zt ? "PointerEvent" in Le : !1, J = "cropper", Mr = "all", Zs = "crop", Ys = "move", Ws = "zoom", Ze = "e", Ye = "w", Qe = "s", Pe = "n", ht = "ne", ft = "nw", pt = "se", gt = "sw", ir = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), he = "".concat(J, "-hidden"), Fr = "".concat(J, "-hide"), Oc = "".concat(J, "-invisible"), Pt = "".concat(J, "-modal"), or = "".concat(J, "-move"), bt = "".concat(J, "Action"), Lt = "".concat(J, "Preview"), Cr = "crop", Fs = "move", Ks = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Kr = "dblclick", jc = Dr ? "touchstart" : "mousedown", Pc = Dr ? "touchmove" : "mousemove", zc = Dr ? "touchend touchcancel" : "mouseup", Gr = kr ? "pointerdown" : jc, Xr = kr ? "pointermove" : Pc, qr = kr ? "pointerup pointercancel" : zc, Qr = "ready", Jr = "resize", es = "wheel", ur = "zoom", ts = "image/jpeg", Rc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Bc = /^data:/, Vc = /^data:image\/jpeg;base64,/, Hc = /^img|canvas$/i, Gs = 200, Xs = 100, rs = {
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
}, Uc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Zc = Number.isNaN || Le.isNaN;
function Y(r) {
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
function ie(r, e) {
  return r && de(e) && (Array.isArray(r) || Y(r.length) ? qs(r).forEach(function(s, i) {
    e.call(r, s, i, r);
  }) : Ke(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var ee = Object.assign || function(e) {
  for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    i[a - 1] = arguments[a];
  return Ke(e) && i.length > 0 && i.forEach(function(n) {
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
  ie(e, function(i, a) {
    Kc.test(a) && Y(i) && (i = "".concat(i, "px")), s[a] = i;
  });
}
function Gc(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function le(r, e) {
  if (e) {
    if (Y(r.length)) {
      ie(r, function(i) {
        le(i, e);
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
    if (Y(r.length)) {
      ie(r, function(s) {
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
    if (Y(r.length)) {
      ie(r, function(i) {
        et(i, e, s);
      });
      return;
    }
    s ? le(r, e) : Te(r, e);
  }
}
var Xc = /([a-z\d])([A-Z])/g;
function Ir(r) {
  return r.replace(Xc, "$1-$2").toLowerCase();
}
function dr(r, e) {
  return Ke(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Ir(e)));
}
function yt(r, e, s) {
  Ke(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Ir(e)), s);
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
    r.removeAttribute("data-".concat(Ir(e)));
}
var Qs = /\s\s*/, Js = function() {
  var r = !1;
  if (Zt) {
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
      set: function(n) {
        e = n;
      }
    });
    Le.addEventListener("test", s, i), Le.removeEventListener("test", s, i);
  }
  return r;
}();
function ke(r, e, s) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(Qs).forEach(function(n) {
    if (!Js) {
      var d = r.listeners;
      d && d[n] && d[n][s] && (a = d[n][s], delete d[n][s], Object.keys(d[n]).length === 0 && delete d[n], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, a, i);
  });
}
function Se(r, e, s) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  e.trim().split(Qs).forEach(function(n) {
    if (i.once && !Js) {
      var d = r.listeners, p = d === void 0 ? {} : d;
      a = function() {
        delete p[n][s], r.removeEventListener(n, a, i);
        for (var v = arguments.length, g = new Array(v), b = 0; b < v; b++)
          g[b] = arguments[b];
        s.apply(r, g);
      }, p[n] || (p[n] = {}), p[n][s] && r.removeEventListener(n, p[n][s], i), p[n][s] = a, r.listeners = p;
    }
    r.addEventListener(n, a, i);
  });
}
function rt(r, e, s) {
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
var Xt = Le.location, Qc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function is(r) {
  var e = r.match(Qc);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function os(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function mt(r) {
  var e = r.rotate, s = r.scaleX, i = r.scaleY, a = r.translateX, n = r.translateY, d = [];
  Y(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), Y(n) && n !== 0 && d.push("translateY(".concat(n, "px)")), Y(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Y(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Y(i) && i !== 1 && d.push("scaleY(".concat(i, ")"));
  var p = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: p,
    msTransform: p,
    transform: p
  };
}
function Jc(r) {
  var e = Hs({}, r), s = 0;
  return ie(r, function(i, a) {
    delete e[a], ie(e, function(n) {
      var d = Math.abs(i.startX - n.startX), p = Math.abs(i.startY - n.startY), l = Math.abs(i.endX - n.endX), v = Math.abs(i.endY - n.endY), g = Math.sqrt(d * d + p * p), b = Math.sqrt(l * l + v * v), S = (b - g) / g;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function At(r, e) {
  var s = r.pageX, i = r.pageY, a = {
    endX: s,
    endY: i
  };
  return e ? a : Hs({
    startX: s,
    startY: i
  }, a);
}
function eu(r) {
  var e = 0, s = 0, i = 0;
  return ie(r, function(a) {
    var n = a.startX, d = a.startY;
    e += n, s += d, i += 1;
  }), e /= i, s /= i, {
    pageX: e,
    pageY: s
  };
}
function Re(r) {
  var e = r.aspectRatio, s = r.height, i = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = ss(i), d = ss(s);
  if (n && d) {
    var p = s * e;
    a === "contain" && p > i || a === "cover" && p < i ? s = i / e : i = s * e;
  } else
    n ? s = i / e : d && (i = s * e);
  return {
    width: i,
    height: s
  };
}
function tu(r) {
  var e = r.width, s = r.height, i = r.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: s,
      height: e
    };
  var a = i % 90 * Math.PI / 180, n = Math.sin(a), d = Math.cos(a), p = e * d + s * n, l = e * n + s * d;
  return i > 90 ? {
    width: l,
    height: p
  } : {
    width: p,
    height: l
  };
}
function ru(r, e, s, i) {
  var a = e.aspectRatio, n = e.naturalWidth, d = e.naturalHeight, p = e.rotate, l = p === void 0 ? 0 : p, v = e.scaleX, g = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, E = s.aspectRatio, k = s.naturalWidth, j = s.naturalHeight, A = i.fillColor, U = A === void 0 ? "transparent" : A, N = i.imageSmoothingEnabled, $ = N === void 0 ? !0 : N, B = i.imageSmoothingQuality, V = B === void 0 ? "low" : B, D = i.maxWidth, z = D === void 0 ? 1 / 0 : D, X = i.maxHeight, Q = X === void 0 ? 1 / 0 : X, se = i.minWidth, ue = se === void 0 ? 0 : se, be = i.minHeight, pe = be === void 0 ? 0 : be, ge = document.createElement("canvas"), T = ge.getContext("2d"), R = Re({
    aspectRatio: E,
    width: z,
    height: Q
  }), O = Re({
    aspectRatio: E,
    width: ue,
    height: pe
  }, "cover"), re = Math.min(R.width, Math.max(O.width, k)), Z = Math.min(R.height, Math.max(O.height, j)), _e = Re({
    aspectRatio: a,
    width: z,
    height: Q
  }), ye = Re({
    aspectRatio: a,
    width: ue,
    height: pe
  }, "cover"), xt = Math.min(_e.width, Math.max(ye.width, n)), Dt = Math.min(_e.height, Math.max(ye.height, d)), Yt = [-xt / 2, -Dt / 2, xt, Dt];
  return ge.width = tt(re), ge.height = tt(Z), T.fillStyle = U, T.fillRect(0, 0, re, Z), T.save(), T.translate(re / 2, Z / 2), T.rotate(l * Math.PI / 180), T.scale(g, S), T.imageSmoothingEnabled = $, T.imageSmoothingQuality = V, T.drawImage.apply(T, [r].concat(Us(Yt.map(function(kt) {
    return Math.floor(tt(kt));
  })))), T.restore(), ge;
}
var ti = String.fromCharCode;
function su(r, e, s) {
  var i = "";
  s += e;
  for (var a = e; a < s; a += 1)
    i += ti(r.getUint8(a));
  return i;
}
var iu = /^data:.*,/;
function ou(r) {
  var e = r.replace(iu, ""), s = atob(e), i = new ArrayBuffer(s.length), a = new Uint8Array(i);
  return ie(a, function(n, d) {
    a[d] = s.charCodeAt(d);
  }), i;
}
function nu(r, e) {
  for (var s = [], i = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(ti.apply(null, qs(a.subarray(0, i)))), a = a.subarray(i);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function au(r) {
  var e = new DataView(r), s;
  try {
    var i, a, n;
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
        if (i = g === 18761, (i || g === 19789) && e.getUint16(v + 2, i) === 42) {
          var b = e.getUint32(v + 4, i);
          b >= 8 && (n = v + b);
        }
      }
    }
    if (n) {
      var S = e.getUint16(n, i), E, k;
      for (k = 0; k < S; k += 1)
        if (E = n + k * 12 + 2, e.getUint16(E, i) === 274) {
          E += 8, s = e.getUint16(E, i), e.setUint16(E, 1, i);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function lu(r) {
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
var cu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, i = this.container, a = this.cropper, n = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    le(a, he), Te(e, he);
    var p = {
      width: Math.max(i.offsetWidth, n >= 0 ? n : Gs),
      height: Math.max(i.offsetHeight, d >= 0 ? d : Xs)
    };
    this.containerData = p, ze(a, {
      width: p.width,
      height: p.height
    }), le(e, he), Te(a, he);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, i = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, n = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, p = n / d, l = e.width, v = e.height;
    e.height * p > e.width ? i === 3 ? l = e.height * p : v = e.width / p : i === 3 ? v = e.width / p : l = e.height * p;
    var g = {
      aspectRatio: p,
      naturalWidth: n,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = g, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), g.width = Math.min(Math.max(g.width, g.minWidth), g.maxWidth), g.height = Math.min(Math.max(g.height, g.minHeight), g.maxHeight), g.left = (e.width - g.width) / 2, g.top = (e.height - g.height) / 2, g.oldLeft = g.left, g.oldTop = g.top, this.initialCanvasData = ee({}, g);
  },
  limitCanvas: function(e, s) {
    var i = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, p = i.viewMode, l = n.aspectRatio, v = this.cropped && d;
    if (e) {
      var g = Number(i.minCanvasWidth) || 0, b = Number(i.minCanvasHeight) || 0;
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
        var E = a.width - n.width, k = a.height - n.height;
        n.minLeft = Math.min(0, E), n.minTop = Math.min(0, k), n.maxLeft = Math.max(0, E), n.maxTop = Math.max(0, k), v && this.limited && (n.minLeft = Math.min(d.left, d.left + (d.width - n.width)), n.minTop = Math.min(d.top, d.top + (d.height - n.height)), n.maxLeft = d.left, n.maxTop = d.top, p === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, E), n.maxLeft = Math.max(0, E)), n.height >= a.height && (n.minTop = Math.min(0, k), n.maxTop = Math.max(0, k))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, s) {
    var i = this.canvasData, a = this.imageData;
    if (s) {
      var n = tu({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = n.width, p = n.height, l = i.width * (d / i.naturalWidth), v = i.height * (p / i.naturalHeight);
      i.left -= (l - i.width) / 2, i.top -= (v - i.height) / 2, i.width = l, i.height = v, i.aspectRatio = d / p, i.naturalWidth = d, i.naturalHeight = p, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, ze(this.canvas, ee({
      width: i.width,
      height: i.height
    }, mt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, i = this.imageData, a = i.naturalWidth * (s.width / s.naturalWidth), n = i.naturalHeight * (s.height / s.naturalHeight);
    ee(i, {
      width: a,
      height: n,
      left: (s.width - a) / 2,
      top: (s.height - n) / 2
    }), ze(this.image, ee({
      width: i.width,
      height: i.height
    }, mt(ee({
      translateX: i.left,
      translateY: i.top
    }, i)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, i = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, n = {
      width: s.width,
      height: s.height
    };
    i && (s.height * i > s.width ? n.height = n.width / i : n.width = n.height * i), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = s.left + (s.width - n.width) / 2, n.top = s.top + (s.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = ee({}, n);
  },
  limitCropBox: function(e, s) {
    var i = this.options, a = this.containerData, n = this.canvasData, d = this.cropBoxData, p = this.limited, l = i.aspectRatio;
    if (e) {
      var v = Number(i.minCropBoxWidth) || 0, g = Number(i.minCropBoxHeight) || 0, b = p ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, S = p ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      v = Math.min(v, a.width), g = Math.min(g, a.height), l && (v && g ? g * l > v ? g = v / l : v = g * l : v ? g = v / l : g && (v = g * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(g, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (p ? (d.minLeft = Math.max(0, n.left), d.minTop = Math.max(0, n.top), d.maxLeft = Math.min(a.width, n.left + n.width) - d.width, d.maxTop = Math.min(a.height, n.top + n.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, e.movable && e.cropBoxMovable && yt(this.face, bt, i.width >= s.width && i.height >= s.height ? Ys : Mr), ze(this.cropBox, ee({
      width: i.width,
      height: i.height
    }, mt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, nr, this.getData());
  }
}, uu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, i = this.options.preview, a = s ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = n, this.viewBox.appendChild(d), this.viewBoxImage = d, !!i) {
      var p = i;
      typeof i == "string" ? p = e.ownerDocument.querySelectorAll(i) : i.querySelector && (p = [i]), this.previews = p, ie(p, function(l) {
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
    ie(this.previews, function(e) {
      var s = dr(e, Lt);
      ze(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, qc(e, Lt);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, i = this.cropBoxData, a = i.width, n = i.height, d = e.width, p = e.height, l = i.left - s.left - e.left, v = i.top - s.top - e.top;
    !this.cropped || this.disabled || (ze(this.viewBoxImage, ee({
      width: d,
      height: p
    }, mt(ee({
      translateX: -l,
      translateY: -v
    }, e)))), ie(this.previews, function(g) {
      var b = dr(g, Lt), S = b.width, E = b.height, k = S, j = E, A = 1;
      a && (A = S / a, j = n * A), n && j > E && (A = E / n, k = a * A, j = E), ze(g, {
        width: k,
        height: j
      }), ze(g.getElementsByTagName("img")[0], ee({
        width: d * A,
        height: p * A
      }, mt(ee({
        translateX: -l * A,
        translateY: -v * A
      }, e))));
    }));
  }
}, du = {
  bind: function() {
    var e = this.element, s = this.options, i = this.cropper;
    de(s.cropstart) && Se(e, cr, s.cropstart), de(s.cropmove) && Se(e, lr, s.cropmove), de(s.cropend) && Se(e, ar, s.cropend), de(s.crop) && Se(e, nr, s.crop), de(s.zoom) && Se(e, ur, s.zoom), Se(i, Gr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && Se(i, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Se(i, Kr, this.onDblclick = this.dblclick.bind(this)), Se(e.ownerDocument, Xr, this.onCropMove = this.cropMove.bind(this)), Se(e.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && Se(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, i = this.cropper;
    de(s.cropstart) && ke(e, cr, s.cropstart), de(s.cropmove) && ke(e, lr, s.cropmove), de(s.cropend) && ke(e, ar, s.cropend), de(s.crop) && ke(e, nr, s.crop), de(s.zoom) && ke(e, ur, s.zoom), ke(i, Gr, this.onCropStart), s.zoomable && s.zoomOnWheel && ke(i, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && ke(i, Kr, this.onDblclick), ke(e.ownerDocument, Xr, this.onCropMove), ke(e.ownerDocument, qr, this.onCropEnd), s.responsive && ke(window, Jr, this.onResize);
  }
}, hu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, i = this.containerData, a = s.offsetWidth / i.width, n = s.offsetHeight / i.height, d = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (d !== 1) {
        var p, l;
        e.restore && (p = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(ie(p, function(v, g) {
          p[g] = v * d;
        })), this.setCropBoxData(ie(l, function(v, g) {
          l[g] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(Gc(this.dragBox, ir) ? Fs : Cr);
  },
  wheel: function(e) {
    var s = this, i = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), e.deltaY ? a = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? a = -e.wheelDelta / 120 : e.detail && (a = e.detail > 0 ? 1 : -1), this.zoom(-a * i, e)));
  },
  cropStart: function(e) {
    var s = e.buttons, i = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (Y(s) && s !== 1 || Y(i) && i !== 0 || e.ctrlKey))) {
      var a = this.options, n = this.pointers, d;
      e.changedTouches ? ie(e.changedTouches, function(p) {
        n[p.identifier] = At(p);
      }) : n[e.pointerId || 0] = At(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? d = Ws : d = dr(e.target, bt), Rc.test(d) && rt(this.element, cr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Zs && (this.cropping = !0, le(this.dragBox, Pt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var i = this.pointers;
      e.preventDefault(), rt(this.element, lr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? ie(e.changedTouches, function(a) {
        ee(i[a.identifier] || {}, At(a, !0));
      }) : ee(i[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, i = this.pointers;
      e.changedTouches ? ie(e.changedTouches, function(a) {
        delete i[a.identifier];
      }) : delete i[e.pointerId || 0], s && (e.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, Pt, this.cropped && this.options.modal)), rt(this.element, ar, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, fu = {
  change: function(e) {
    var s = this.options, i = this.canvasData, a = this.containerData, n = this.cropBoxData, d = this.pointers, p = this.action, l = s.aspectRatio, v = n.left, g = n.top, b = n.width, S = n.height, E = v + b, k = g + S, j = 0, A = 0, U = a.width, N = a.height, $ = !0, B;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && (j = n.minLeft, A = n.minTop, U = j + Math.min(a.width, i.width, i.left + i.width), N = A + Math.min(a.height, i.height, i.top + i.height));
    var V = d[Object.keys(d)[0]], D = {
      x: V.endX - V.startX,
      y: V.endY - V.startY
    }, z = function(Q) {
      switch (Q) {
        case Ze:
          E + D.x > U && (D.x = U - E);
          break;
        case Ye:
          v + D.x < j && (D.x = j - v);
          break;
        case Pe:
          g + D.y < A && (D.y = A - g);
          break;
        case Qe:
          k + D.y > N && (D.y = N - k);
          break;
      }
    };
    switch (p) {
      case Mr:
        v += D.x, g += D.y;
        break;
      case Ze:
        if (D.x >= 0 && (E >= U || l && (g <= A || k >= N))) {
          $ = !1;
          break;
        }
        z(Ze), b += D.x, b < 0 && (p = Ye, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case Pe:
        if (D.y <= 0 && (g <= A || l && (v <= j || E >= U))) {
          $ = !1;
          break;
        }
        z(Pe), S -= D.y, g += D.y, S < 0 && (p = Qe, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case Ye:
        if (D.x <= 0 && (v <= j || l && (g <= A || k >= N))) {
          $ = !1;
          break;
        }
        z(Ye), b -= D.x, v += D.x, b < 0 && (p = Ze, b = -b, v -= b), l && (S = b / l, g += (n.height - S) / 2);
        break;
      case Qe:
        if (D.y >= 0 && (k >= N || l && (v <= j || E >= U))) {
          $ = !1;
          break;
        }
        z(Qe), S += D.y, S < 0 && (p = Pe, S = -S, g -= S), l && (b = S * l, v += (n.width - b) / 2);
        break;
      case ht:
        if (l) {
          if (D.y <= 0 && (g <= A || E >= U)) {
            $ = !1;
            break;
          }
          z(Pe), S -= D.y, g += D.y, b = S * l;
        } else
          z(Pe), z(Ze), D.x >= 0 ? E < U ? b += D.x : D.y <= 0 && g <= A && ($ = !1) : b += D.x, D.y <= 0 ? g > A && (S -= D.y, g += D.y) : (S -= D.y, g += D.y);
        b < 0 && S < 0 ? (p = gt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = ft, b = -b, v -= b) : S < 0 && (p = pt, S = -S, g -= S);
        break;
      case ft:
        if (l) {
          if (D.y <= 0 && (g <= A || v <= j)) {
            $ = !1;
            break;
          }
          z(Pe), S -= D.y, g += D.y, b = S * l, v += n.width - b;
        } else
          z(Pe), z(Ye), D.x <= 0 ? v > j ? (b -= D.x, v += D.x) : D.y <= 0 && g <= A && ($ = !1) : (b -= D.x, v += D.x), D.y <= 0 ? g > A && (S -= D.y, g += D.y) : (S -= D.y, g += D.y);
        b < 0 && S < 0 ? (p = pt, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = ht, b = -b, v -= b) : S < 0 && (p = gt, S = -S, g -= S);
        break;
      case gt:
        if (l) {
          if (D.x <= 0 && (v <= j || k >= N)) {
            $ = !1;
            break;
          }
          z(Ye), b -= D.x, v += D.x, S = b / l;
        } else
          z(Qe), z(Ye), D.x <= 0 ? v > j ? (b -= D.x, v += D.x) : D.y >= 0 && k >= N && ($ = !1) : (b -= D.x, v += D.x), D.y >= 0 ? k < N && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (p = ht, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = pt, b = -b, v -= b) : S < 0 && (p = ft, S = -S, g -= S);
        break;
      case pt:
        if (l) {
          if (D.x >= 0 && (E >= U || k >= N)) {
            $ = !1;
            break;
          }
          z(Ze), b += D.x, S = b / l;
        } else
          z(Qe), z(Ze), D.x >= 0 ? E < U ? b += D.x : D.y >= 0 && k >= N && ($ = !1) : b += D.x, D.y >= 0 ? k < N && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (p = ft, S = -S, b = -b, g -= S, v -= b) : b < 0 ? (p = gt, b = -b, v -= b) : S < 0 && (p = ht, S = -S, g -= S);
        break;
      case Ys:
        this.move(D.x, D.y), $ = !1;
        break;
      case Ws:
        this.zoom(Jc(d), e), $ = !1;
        break;
      case Zs:
        if (!D.x || !D.y) {
          $ = !1;
          break;
        }
        B = ei(this.cropper), v = V.startX - B.left, g = V.startY - B.top, b = n.minWidth, S = n.minHeight, D.x > 0 ? p = D.y > 0 ? pt : ht : D.x < 0 && (v -= b, p = D.y > 0 ? gt : ft), D.y < 0 && (g -= S), this.cropped || (Te(this.cropBox, he), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    $ && (n.width = b, n.height = S, n.left = v, n.top = g, this.action = p, this.renderCropBox()), ie(d, function(X) {
      X.startX = X.endX, X.startY = X.endY;
    });
  }
}, pu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && le(this.dragBox, Pt), Te(this.cropBox, he), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Te(this.dragBox, Pt), le(this.cropBox, he)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, ie(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = e;
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
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, a = i.left, n = i.top;
    return this.moveTo(Gt(e) ? e : a + Number(e), Gt(s) ? s : n + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (Y(e) && (i.left = e, a = !0), Y(s) && (i.top = s, a = !0), a && this.renderCanvas(!0)), this;
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
    var a = this.options, n = this.canvasData, d = n.width, p = n.height, l = n.naturalWidth, v = n.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var g = l * e, b = v * e;
      if (rt(this.element, ur, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var S = this.pointers, E = ei(this.cropper), k = S && Object.keys(S).length ? eu(S) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        n.left -= (g - d) * ((k.pageX - E.left - n.left) / d), n.top -= (b - p) * ((k.pageY - E.top - n.top) / p);
      } else
        Je(s) && Y(s.x) && Y(s.y) ? (n.left -= (g - d) * ((s.x - n.left) / d), n.top -= (b - p) * ((s.y - n.top) / p)) : (n.left -= (g - d) / 2, n.top -= (b - p) / 2);
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
    return e = Number(e), Y(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, Y(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(Y(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.imageData, a = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (Y(e) && (i.scaleX = e, a = !0), Y(s) && (i.scaleY = s, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, i = this.imageData, a = this.canvasData, n = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: n.left - a.left,
        y: n.top - a.top,
        width: n.width,
        height: n.height
      };
      var p = i.width / i.naturalWidth;
      if (ie(d, function(g, b) {
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
    return s.rotatable && (d.rotate = i.rotate || 0), s.scalable && (d.scaleX = i.scaleX || 1, d.scaleY = i.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(e) {
    var s = this.options, i = this.imageData, a = this.canvasData, n = {};
    if (this.ready && !this.disabled && Je(e)) {
      var d = !1;
      s.rotatable && Y(e.rotate) && e.rotate !== i.rotate && (i.rotate = e.rotate, d = !0), s.scalable && (Y(e.scaleX) && e.scaleX !== i.scaleX && (i.scaleX = e.scaleX, d = !0), Y(e.scaleY) && e.scaleY !== i.scaleY && (i.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var p = i.width / i.naturalWidth;
      Y(e.x) && (n.left = e.x * p + a.left), Y(e.y) && (n.top = e.y * p + a.top), Y(e.width) && (n.width = e.width * p), Y(e.height) && (n.height = e.height * p), this.setCropBoxData(n);
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
    return this.ready && ie(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
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
    return this.ready && !this.disabled && Je(e) && (Y(e.left) && (s.left = e.left), Y(e.top) && (s.top = e.top), Y(e.width) ? (s.width = e.width, s.height = e.width / i) : Y(e.height) && (s.height = e.height, s.width = e.height * i), this.renderCanvas(!0)), this;
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
    var s = this.cropBoxData, i = this.options.aspectRatio, a, n;
    return this.ready && this.cropped && !this.disabled && Je(e) && (Y(e.left) && (s.left = e.left), Y(e.top) && (s.top = e.top), Y(e.width) && e.width !== s.width && (a = !0, s.width = e.width), Y(e.height) && e.height !== s.height && (n = !0, s.height = e.height), i && (a ? s.height = s.width / i : n && (s.width = s.height * i)), this.renderCropBox()), this;
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
    var s = this.canvasData, i = ru(this.image, this.imageData, s, e);
    if (!this.cropped)
      return i;
    var a = this.getData(), n = a.x, d = a.y, p = a.width, l = a.height, v = i.width / Math.floor(s.naturalWidth);
    v !== 1 && (n *= v, d *= v, p *= v, l *= v);
    var g = p / l, b = Re({
      aspectRatio: g,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Re({
      aspectRatio: g,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), E = Re({
      aspectRatio: g,
      width: e.width || (v !== 1 ? i.width : p),
      height: e.height || (v !== 1 ? i.height : l)
    }), k = E.width, j = E.height;
    k = Math.min(b.width, Math.max(S.width, k)), j = Math.min(b.height, Math.max(S.height, j));
    var A = document.createElement("canvas"), U = A.getContext("2d");
    A.width = tt(k), A.height = tt(j), U.fillStyle = e.fillColor || "transparent", U.fillRect(0, 0, k, j);
    var N = e.imageSmoothingEnabled, $ = N === void 0 ? !0 : N, B = e.imageSmoothingQuality;
    U.imageSmoothingEnabled = $, B && (U.imageSmoothingQuality = B);
    var V = i.width, D = i.height, z = n, X = d, Q, se, ue, be, pe, ge;
    z <= -p || z > V ? (z = 0, Q = 0, ue = 0, pe = 0) : z <= 0 ? (ue = -z, z = 0, Q = Math.min(V, p + z), pe = Q) : z <= V && (ue = 0, Q = Math.min(p, V - z), pe = Q), Q <= 0 || X <= -l || X > D ? (X = 0, se = 0, be = 0, ge = 0) : X <= 0 ? (be = -X, X = 0, se = Math.min(D, l + X), ge = se) : X <= D && (be = 0, se = Math.min(l, D - X), ge = se);
    var T = [z, X, Q, se];
    if (pe > 0 && ge > 0) {
      var R = k / p;
      T.push(ue * R, be * R, pe * R, ge * R);
    }
    return U.drawImage.apply(U, [i].concat(Us(T.map(function(O) {
      return Math.floor(tt(O));
    })))), A;
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
    var s = this.options, i = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var n = e === Cr, d = s.movable && e === Fs;
      e = n || d ? e : Ks, s.dragMode = e, yt(i, bt, e), et(i, ir, n), et(i, or, d), s.cropBoxMovable || (yt(a, bt, e), et(a, ir, n), et(a, or, d));
    }
    return this;
  }
}, gu = Le.Cropper, ri = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Ic(this, r), !e || !Hc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = ee({}, rs, Je(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Ec(r, [{
    key: "init",
    value: function() {
      var s = this.element, i = s.tagName.toLowerCase(), a;
      if (!s[J]) {
        if (s[J] = this, i === "img") {
          if (this.isImg = !0, a = s.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = s.src;
        } else
          i === "canvas" && window.HTMLCanvasElement && (a = s.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var i = this;
      if (s) {
        this.url = s, this.imageData = {};
        var a = this.element, n = this.options;
        if (!n.rotatable && !n.scalable && (n.checkOrientation = !1), !n.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Bc.test(s)) {
          Vc.test(s) ? this.read(ou(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), p = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = p, d.onerror = p, d.ontimeout = p, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          i.read(d.response);
        }, d.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, n.checkCrossOrigin && is(s) && a.crossOrigin && (s = os(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = a.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var i = this.options, a = this.imageData, n = au(s), d = 0, p = 1, l = 1;
      if (n > 1) {
        this.url = nu(s, ts);
        var v = lu(n);
        d = v.rotate, p = v.scaleX, l = v.scaleY;
      }
      i.rotatable && (a.rotate = d), i.scalable && (a.scaleX = p, a.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, i = this.url, a = s.crossOrigin, n = i;
      this.options.checkCrossOrigin && is(i) && (a || (a = "anonymous"), n = os(i)), this.crossOrigin = a, this.crossOriginUrl = n;
      var d = document.createElement("img");
      a && (d.crossOrigin = a), d.src = n || i, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), le(d, Fr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var a = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent), n = function(v, g) {
        ee(s.imageData, {
          naturalWidth: v,
          naturalHeight: g,
          aspectRatio: v / g
        }), s.initialImageData = ee({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (i.naturalWidth && !a) {
        n(i.naturalWidth, i.naturalHeight);
        return;
      }
      var d = document.createElement("img"), p = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        n(d.width, d.height), a || p.removeChild(d);
      }, d.src = i.src, a || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", p.appendChild(d));
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
        var s = this.element, i = this.options, a = this.image, n = s.parentNode, d = document.createElement("div");
        d.innerHTML = Uc;
        var p = d.querySelector(".".concat(J, "-container")), l = p.querySelector(".".concat(J, "-canvas")), v = p.querySelector(".".concat(J, "-drag-box")), g = p.querySelector(".".concat(J, "-crop-box")), b = g.querySelector(".".concat(J, "-face"));
        this.container = n, this.cropper = p, this.canvas = l, this.dragBox = v, this.cropBox = g, this.viewBox = p.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), le(s, he), n.insertBefore(p, s.nextSibling), Te(a, Fr), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, le(g, he), i.guides || le(g.getElementsByClassName("".concat(J, "-dashed")), he), i.center || le(g.getElementsByClassName("".concat(J, "-center")), he), i.background && le(p, "".concat(J, "-bg")), i.highlight || le(b, Oc), i.cropBoxMovable && (le(b, or), yt(b, bt, Mr)), i.cropBoxResizable || (le(g.getElementsByClassName("".concat(J, "-line")), he), le(g.getElementsByClassName("".concat(J, "-point")), he)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), de(i.ready) && Se(s, Qr, i.ready, {
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
ee(ri.prototype, cu, uu, du, hu, fu, pu);
const mu = { class: "flex" }, vu = ["aria-label"], bu = { class: "ml-auto mb-2" }, yu = { class: "w-full flex justify-center" }, Su = ["src"], wu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: i } = P("i18n"), { apiUrl: a } = Ae(), n = L(null), d = L(null), p = L(!1), l = L(""), v = L(!1), g = () => {
      p.value = !p.value, p.value ? d.value = new ri(n.value, {
        crop(E) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob((E) => {
        l.value = "", v.value = !1, Ot(a.value, {
          method: "POST",
          params: Object.assign(b, {
            q: "upload",
            adapter: s.selection.adapter,
            path: s.selection.item.path,
            file: E
          }),
          name: s.selection.item.basename,
          json: !1
        }).then((k) => {
          l.value = i("Updated."), n.value.src = er(
            s.selection.adapter,
            s.selection.item.path
          ), g(), e("load");
        }).catch((k) => {
          l.value = i(k.message), v.value = !0;
        });
      });
    };
    return we(() => {
      e("load");
    }), (E, k) => (w(), M(ne, null, [
      h("div", mu, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, I(r.selection.item.basename), 9, vu),
        h("div", bu, [
          p.value ? (w(), M("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, I(x(i)("Crop")), 1)) : W("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
            onClick: k[0] || (k[0] = (j) => g())
          }, I(p.value ? x(i)("Cancel") : x(i)("Edit")), 1)
        ])
      ]),
      h("div", yu, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(er)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Su)
      ]),
      l.value.length ? (w(), q(Ne, {
        key: 0,
        onHidden: k[1] || (k[1] = (j) => l.value = ""),
        error: v.value
      }, {
        default: G(() => [
          te(I(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : W("", !0)
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
    }), (s, i) => (w(), M(ne, null, [
      h("div", _u, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, I(r.selection.item.basename), 9, xu)
      ]),
      Du
    ], 64));
  }
}, Mu = ["aria-label"], Cu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Iu = ["src"], Eu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: i } = Ae(), a = () => i.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), M(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, I(r.selection.item.basename), 9, Mu),
      h("div", null, [
        h("video", Cu, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Iu),
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
    const s = r, { apiUrl: i } = Ae(), a = () => i.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), M(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, I(r.selection.item.basename), 9, Tu),
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
    const s = r, { apiUrl: i } = Ae(), a = () => i.value + "?" + Ge({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return we(() => {
      e("load");
    }), (n, d) => (w(), M(ne, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, I(r.selection.item.basename), 9, Nu),
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
], -1), id = { class: "bg-white custom-file-picker-action" }, od = {
  name: "VFModalPreview"
}, nd = /* @__PURE__ */ Object.assign(od, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Ae(), i = P("emitter"), { t: a } = P("i18n"), n = L(!1), d = (S) => n.value = S;
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
      i.emit("vf-download", S);
    };
    function g() {
      let S = document.querySelector("#search-terms-file-picker");
      S.addEventListener("keypress", (E) => {
        E.key === "Enter" && (p.value.push({
          tag_id: p.value.length + 1,
          tag_name: E.target.value
        }), S.value = "");
      });
    }
    function b(S) {
      const E = p.value.findIndex((k) => k.tag_id === S);
      p.value.splice(E, 1);
    }
    return (S, E) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", qu, [
          Qu,
          Ju,
          ed,
          h("div", td, [
            (w(!0), M(ne, null, ve(x(p), (k) => (w(), M("span", {
              key: k.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (j) => b(k.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, rd),
              h("p", null, I(k.tag_name), 1)
            ]))), 128))
          ])
        ]),
        sd,
        h("div", id, [
          h("button", {
            type: "button",
            onClick: E[6] || (E[6] = (k) => x(i).emit("vf-modal-close")),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, I(x(a)("Close")), 1),
          h("button", {
            type: "button",
            onClick: E[7] || (E[7] = (k) => v()),
            class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, I(x(a)("Download")), 1)
        ])
      ]),
      default: G(() => [
        h("div", zu, [
          h("div", Ru, [
            h("div", Bu, [
              Vu,
              h("h3", Hu, I(x(a)("Edit")), 1)
            ]),
            Uu
          ]),
          h("div", Zu, [
            h("div", null, [
              l("text") ? (w(), q(Cc, {
                key: 0,
                selection: r.selection,
                onLoad: E[0] || (E[0] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), q(wu, {
                key: 1,
                selection: r.selection,
                onLoad: E[1] || (E[1] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), q(Eu, {
                key: 2,
                selection: r.selection,
                onLoad: E[2] || (E[2] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), q($u, {
                key: 3,
                selection: r.selection,
                onLoad: E[3] || (E[3] = (k) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), q(Pu, {
                key: 4,
                selection: r.selection,
                onLoad: E[4] || (E[4] = (k) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(ku, {
                key: 5,
                selection: r.selection,
                onLoad: E[5] || (E[5] = (k) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Yu, [
              n.value == !1 ? (w(), M("div", Wu, [
                Fu,
                h("span", null, I(x(a)("Loading")), 1)
              ])) : W("", !0)
            ])
          ])
        ]),
        h("div", Ku, [
          h("div", null, [
            h("span", Gu, I(x(a)("File Size")) + ": ", 1),
            te(I(x(cs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Xu, I(x(a)("Last Modified")) + ": ", 1),
            te(" " + I(x(us)(r.selection.item.last_modified)), 1)
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
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n"), n = L(e.selection.items[0]), d = L(e.selection.items[0].basename), p = L(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: i.value,
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
        }, I(x(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", ad, [
          h("div", ld, [
            h("div", cd, [
              ud,
              h("h3", dd, I(x(a)("Rename")), 1)
            ]),
            hd
          ]),
          h("div", fd, [
            h("div", pd, [
              h("p", gd, [
                n.value.type == "dir" ? (w(), M("svg", md, bd)) : (w(), M("svg", yd, wd)),
                h("span", _d, I(n.value.basename), 1)
              ]),
              Ee(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => d.value = b),
                onKeyup: it(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, xd), [
                [ot, d.value]
              ]),
              p.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: g[1] || (g[1] = (b) => p.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(p.value), 1)
                ]),
                _: 1
              })) : W("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Md = { class: "flex flex-col h-full items-center" }, Cd = { class: "custom-file-picker-title" }, Id = { class: "file-picker-title-img" }, Ed = /* @__PURE__ */ h("svg", {
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
    const e = r, s = P("emitter"), { apiUrl: i } = Ae(), { t: a } = P("i18n"), n = P("maxFileSize"), d = L(null), p = L(null), l = L(null), v = L([]), g = L("");
    let b = L([]);
    const S = L(!0), E = () => {
      g.value = "", d.value.start();
    }, k = P("postData");
    we(() => {
      d.value = new dt.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: p.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: i.value + "?" + Ge(
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
          FilesAdded: function(U, N) {
            S.value = !1, dt.each(N, function($) {
              v.value.push({
                id: $.id,
                name: $.name,
                size: dt.formatSize($.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(U, N) {
            v.value[v.value.findIndex(($) => $.id == N.id)].percent = N.percent + "%";
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
          Error: function(U, N) {
            d.value.stop(), N.code == dt.HTTP_ERROR ? g.value = a(JSON.parse(N.response).message) : N.code == dt.FILE_SIZE_ERROR ? g.value = a(
              "The selected file exceeds the maximum file size. You cannot upload files greater than %s",
              [n]
            ) : g.value = a(N.message);
          }
        }
      }), d.value.init(), j();
    });
    function j() {
      let U = document.querySelector("#search-terms-file-picker");
      U.addEventListener("keypress", (N) => {
        N.key === "Enter" && (b.value.push({
          tag_id: b.value.length + 1,
          tag_name: N.target.value
        }), U.value = "");
      });
    }
    function A(U) {
      const N = b.value.findIndex(($) => $.tag_id === U);
      b.value.splice(N, 1);
    }
    return (U, N) => (w(), q($e, null, {
      buttons: G(() => [
        h("div", Pd, [
          zd,
          Rd,
          Bd,
          h("div", Vd, [
            (w(!0), M(ne, null, ve(x(b), ($) => (w(), M("span", {
              key: $.id,
              class: "img-tag"
            }, [
              h("img", {
                onClick: (B) => A($.tag_id),
                src: Bs,
                alt: "delete tag",
                class: "delete-tag-x"
              }, null, 8, Hd),
              h("p", null, I($.tag_name), 1)
            ]))), 128))
          ])
        ]),
        Ud,
        h("div", Zd, [
          h("button", {
            disabled: S.value,
            onClick: We(E, ["prevent"]),
            type: "button",
            class: ce([
              S.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500",
              "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ])
          }, I(x(a)("Upload")), 11, Yd),
          h("button", {
            type: "button",
            onClick: N[1] || (N[1] = ($) => x(s).emit("vf-modal-close")),
            class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          }, I(x(a)("Cancel")), 1)
        ])
      ]),
      default: G(() => [
        h("div", Md, [
          h("div", Cd, [
            h("div", Id, [
              Ed,
              h("h3", Td, I(x(a)("Upload files")), 1)
            ]),
            Ld
          ]),
          h("div", Ad, [
            h("div", $d, [
              h("div", Nd, [
                (w(!0), M(ne, null, ve(v.value, ($) => (w(), M("div", null, [
                  h("div", {
                    id: $.id
                  }, [
                    te(I($.name) + " ( " + I($.size) + ") ", 1),
                    h("b", null, I($.percent), 1)
                  ], 8, Od)
                ]))), 256)),
                v.value.length ? W("", !0) : (w(), M("div", jd, I(x(a)("No files selected!")), 1))
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
                }, I(x(a)("Select Files")), 513)
              ], 512),
              g.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: N[0] || (N[0] = ($) => g.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(g.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
}, ih = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), oh = [
  ih
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
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n"), n = L(""), d = L(""), p = L(e.selection.items), l = () => {
      p.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: i.value,
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
        }, I(x(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (b) => x(s).emit("vf-modal-close")),
          class: "new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Kd, [
          h("div", Gd, [
            h("div", Xd, [
              qd,
              h("h3", Qd, I(x(a)("Archive the files")), 1)
            ]),
            Jd
          ]),
          h("div", eh, [
            h("div", th, [
              (w(!0), M(ne, null, ve(p.value, (b) => (w(), M("p", rh, [
                b.type == "dir" ? (w(), M("svg", sh, oh)) : (w(), M("svg", nh, lh)),
                h("span", ch, I(b.basename), 1)
              ]))), 256)),
              Ee(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (b) => n.value = b),
                onKeyup: it(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, uh), [
                [ot, n.value]
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: g[1] || (g[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
], kh = { class: "ml-1.5" }, Mh = { class: "my-1 text-sm text-gray-500" }, Ch = {
  name: "VFModalUnarchive"
}, Ih = /* @__PURE__ */ Object.assign(Ch, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const i = P("adapter"), { t: a } = P("i18n");
    L("");
    const n = L(e.selection.items[0]), d = L(""), p = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: i.value,
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
        }, I(x(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: g[1] || (g[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(a)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", fh, [
          ph,
          h("div", gh, [
            h("h3", mh, I(x(a)("Unarchive")), 1),
            h("div", vh, [
              (w(!0), M(ne, null, ve(p.value, (b) => (w(), M("p", bh, [
                b.type == "dir" ? (w(), M("svg", yh, wh)) : (w(), M("svg", _h, Dh)),
                h("span", kh, I(b.basename), 1)
              ]))), 256)),
              h("p", Mh, I(x(a)("The archive will be unarchived at")) + " (" + I(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: g[0] || (g[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { t: i } = P("i18n");
    P("storage");
    const a = P("adapter"), n = L(e.selection.items.from), d = L(""), p = () => {
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
          }), s.emit("vf-toast-push", { label: i("Files moved.", e.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, v) => (w(), q($e, null, {
      buttons: G(() => [
        h("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(i)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: v[1] || (v[1] = (g) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, I(x(i)("Cancel")), 1)
      ]),
      default: G(() => [
        h("div", Eh, [
          Th,
          h("div", Lh, [
            h("h3", Ah, I(x(i)("Move files")), 1),
            h("div", $h, [
              (w(!0), M(ne, null, ve(n.value, (g) => (w(), M("p", Nh, [
                g.type == "dir" ? (w(), M("svg", Oh, Ph)) : (w(), M("svg", zh, Bh)),
                h("span", Vh, I(g.path), 1)
              ]))), 256)),
              h("p", Hh, I(x(i)("Are you sure you want to move these files?")), 1),
              h("p", Uh, [
                Zh,
                h("span", Yh, I(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Ne, {
                key: 0,
                onHidden: v[0] || (v[0] = (g) => d.value = ""),
                error: ""
              }, {
                default: G(() => [
                  te(I(d.value), 1)
                ]),
                _: 1
              })) : W("", !0)
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
  ModalUnarchive: Ih,
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
