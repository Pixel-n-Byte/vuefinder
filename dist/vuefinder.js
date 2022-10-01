import { ref as I, watch as vt, inject as z, openBlock as y, createElementBlock as D, createElementVNode as d, unref as _, normalizeClass as de, createTextVNode as le, toDisplayString as T, createCommentVNode as G, createVNode as we, TransitionGroup as Pi, withCtx as J, Fragment as ce, renderList as be, reactive as ft, onMounted as xe, onUpdated as Ii, withDirectives as ve, vShow as lt, withModifiers as Pe, nextTick as bt, vModelSelect as ur, customRef as Li, withKeys as Ye, isRef as Ni, vModelText as We, normalizeStyle as Er, provide as Ge, createBlock as Z, resolveDynamicComponent as ji, renderSlot as Mt } from "vue";
import kt from "plupload";
var $r;
const mt = ($r = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : $r.getAttribute("content"), pt = (n, { method: e = "get", params: t = {}, json: i = !0, signal: a = null }) => {
  const o = { method: e };
  if (o.signal = a, e == "get")
    n += "?" + new URLSearchParams(t);
  else {
    o.headers = {}, mt && (o.headers["X-CSRF-Token"] = mt);
    let s = new FormData();
    for (const [f, p] of Object.entries(t))
      s.append(f, p);
    o.body = s;
  }
  return fetch(n, o).then((s) => s.ok ? i ? s.json() : s.text() : s.json().then(Promise.reject.bind(Promise)));
};
function Vi(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(e, t) {
    var i = n.get(e);
    i ? i.push(t) : n.set(e, [t]);
  }, off: function(e, t) {
    var i = n.get(e);
    i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []));
  }, emit: function(e, t) {
    var i = n.get(e);
    i && i.slice().map(function(a) {
      a(t);
    }), (i = n.get("*")) && i.slice().map(function(a) {
      a(e, t);
    });
  } };
}
function $t(n) {
  let e = localStorage.getItem(n + "_storage");
  const t = I(JSON.parse(e));
  vt(t, i);
  function i() {
    t.value === null || t.value === "" ? localStorage.removeItem(n + "_storage") : localStorage.setItem(n + "_storage", JSON.stringify(t.value));
  }
  function a(f, p) {
    t.value = Object.assign({ ...t.value }, { [f]: p });
  }
  function o() {
    t.value = null;
  }
  return { getStore: (f, p = null) => t.value === null || t.value === "" ? p : t.value.hasOwnProperty(f) ? t.value[f] : p, setStore: a, clearStore: o };
}
const dr = I("");
function Se() {
  function n(e) {
    dr.value = e;
  }
  return { apiUrl: dr, setApiUrl: n };
}
const zi = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Bi = {
  key: 0,
  class: "flex text-center"
}, Ri = ["aria-label"], Hi = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Ui = [
  Hi
], Ki = ["aria-label"], Yi = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Wi = [
  Yi
], Xi = ["aria-label"], Fi = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), qi = [
  Fi
], Gi = ["aria-label"], Ji = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Zi = [
  Ji
], Qi = ["aria-label"], eo = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), to = [
  eo
], ro = ["aria-label"], io = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), oo = [
  io
], no = ["aria-label"], ao = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), so = [
  ao
], lo = {
  key: 1,
  class: "flex text-center"
}, co = { class: "pl-2" }, uo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, ho = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, fo = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), mo = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), po = [
  fo,
  mo
], go = { class: "flex text-center items-center justify-end" }, vo = ["aria-label"], bo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), yo = [
  bo
], wo = ["aria-label"], xo = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, _o = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, ko = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, So = ["aria-label"], Do = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, Co = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, Mo = {
  name: "VFToolbar"
}, $o = /* @__PURE__ */ Object.assign(Mo, {
  props: {
    data: Object
  },
  setup(n) {
    const e = z("emitter"), { getStore: t, setStore: i } = z("storage"), { t: a } = z("i18n"), o = I(t("viewport", "grid")), s = I([]), f = I(t("full-screen", !1)), p = I("");
    e.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    });
    const m = z("loadingState"), h = () => m.value, v = () => {
      f.value = !f.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (b) => {
      s.value = b;
    }), e.on("vf-view-toggle", (b) => {
      i("viewport", b), o.value = b;
    }), (b, E) => (y(), D("div", zi, [
      p.value.length ? (y(), D("div", lo, [
        d("div", co, [
          le(T(_(a)("Search results for")) + " ", 1),
          d("span", uo, T(p.value), 1)
        ]),
        h() ? (y(), D("svg", ho, po)) : G("", !0)
      ])) : (y(), D("div", Bi, [
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: E[0] || (E[0] = (k) => _(e).emit("vf-modal-show", { type: "new-folder", items: s.value }))
        }, Ui, 8, Ri),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[1] || (E[1] = (k) => _(e).emit("vf-modal-show", { type: "new-file", items: s.value }))
        }, Wi, 8, Ki),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[2] || (E[2] = (k) => s.value.length != 1 || _(e).emit("vf-modal-show", { type: "rename", items: s.value }))
        }, [
          (y(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: de([s.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, qi, 2))
        ], 8, Xi),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[3] || (E[3] = (k) => !s.value.length || _(e).emit("vf-modal-show", { type: "delete", items: s.value }))
        }, [
          (y(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: de([s.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Zi, 2))
        ], 8, Gi),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[4] || (E[4] = (k) => _(e).emit("vf-modal-show", { type: "upload", items: s.value }))
        }, to, 8, Qi),
        s.value.length == 1 && s.value[0].mime_type == "application/zip" ? (y(), D("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": _(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[5] || (E[5] = (k) => !s.value.length || _(e).emit("vf-modal-show", { type: "unarchive", items: s.value }))
        }, [
          (y(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: de([s.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, oo, 2))
        ], 8, ro)) : (y(), D("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": _(a)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: E[6] || (E[6] = (k) => !s.value.length || _(e).emit("vf-modal-show", { type: "archive", items: s.value }))
        }, [
          (y(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: de([s.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, so, 2))
        ], 8, no))
      ])),
      d("div", go, [
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (y(), D("svg", {
            onClick: E[7] || (E[7] = (k) => _(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, yo))
        ], 8, vo),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v
        }, [
          (y(), D("svg", xo, [
            f.value ? (y(), D("path", _o)) : (y(), D("path", ko))
          ]))
        ], 8, wo),
        d("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: E[8] || (E[8] = (k) => p.value.length || _(e).emit("vf-view-toggle", o.value == "list" ? "grid" : "list"))
        }, [
          (y(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: de([p.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            o.value == "grid" ? (y(), D("path", Do)) : G("", !0),
            o.value == "list" ? (y(), D("path", Co)) : G("", !0)
          ], 2))
        ], 8, So)
      ])
    ]));
  }
});
var Eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tr = { exports: {} };
(function(n, e) {
  (function(t, i) {
    n.exports = i();
  })(Eo, function() {
    function t(u, l) {
      if (!(u instanceof l))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(u, l) {
      for (var r = 0; r < l.length; r++) {
        var g = l[r];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(u, g.key, g);
      }
    }
    function a(u, l, r) {
      return l && i(u.prototype, l), r && i(u, r), u;
    }
    function o(u, l, r) {
      return l in u ? Object.defineProperty(u, l, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : u[l] = r, u;
    }
    function s(u, l) {
      var r = Object.keys(u);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(u);
        l && (g = g.filter(function(c) {
          return Object.getOwnPropertyDescriptor(u, c).enumerable;
        })), r.push.apply(r, g);
      }
      return r;
    }
    function f(u) {
      for (var l = 1; l < arguments.length; l++) {
        var r = arguments[l] != null ? arguments[l] : {};
        l % 2 ? s(Object(r), !0).forEach(function(g) {
          o(u, g, r[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(g) {
          Object.defineProperty(u, g, Object.getOwnPropertyDescriptor(r, g));
        });
      }
      return u;
    }
    function p(u, l) {
      if (typeof l != "function" && l !== null)
        throw new TypeError("Super expression must either be null or a function");
      u.prototype = Object.create(l && l.prototype, {
        constructor: {
          value: u,
          writable: !0,
          configurable: !0
        }
      }), l && h(u, l);
    }
    function m(u) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, m(u);
    }
    function h(u, l) {
      return h = Object.setPrototypeOf || function(g, c) {
        return g.__proto__ = c, g;
      }, h(u, l);
    }
    function v() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function b(u, l, r) {
      return v() ? b = Reflect.construct : b = function(c, w, x) {
        var S = [null];
        S.push.apply(S, w);
        var $ = Function.bind.apply(c, S), P = new $();
        return x && h(P, x.prototype), P;
      }, b.apply(null, arguments);
    }
    function E(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function k(u) {
      var l = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return k = function(g) {
        if (g === null || !E(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof l < "u") {
          if (l.has(g))
            return l.get(g);
          l.set(g, c);
        }
        function c() {
          return b(g, arguments, m(this).constructor);
        }
        return c.prototype = Object.create(g.prototype, {
          constructor: {
            value: c,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h(c, g);
      }, k(u);
    }
    function M(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function N(u, l) {
      return l && (typeof l == "object" || typeof l == "function") ? l : M(u);
    }
    function Y(u) {
      var l = v();
      return function() {
        var g = m(u), c;
        if (l) {
          var w = m(this).constructor;
          c = Reflect.construct(g, arguments, w);
        } else
          c = g.apply(this, arguments);
        return N(this, c);
      };
    }
    function R(u, l) {
      for (; !Object.prototype.hasOwnProperty.call(u, l) && (u = m(u), u !== null); )
        ;
      return u;
    }
    function A(u, l, r) {
      return typeof Reflect < "u" && Reflect.get ? A = Reflect.get : A = function(c, w, x) {
        var S = R(c, w);
        if (!!S) {
          var $ = Object.getOwnPropertyDescriptor(S, w);
          return $.get ? $.get.call(x) : $.value;
        }
      }, A(u, l, r || u);
    }
    function U(u, l) {
      return q(u) || ue(u, l) || me(u, l) || j();
    }
    function F(u) {
      return C(u) || ee(u) || me(u) || B();
    }
    function C(u) {
      if (Array.isArray(u))
        return L(u);
    }
    function q(u) {
      if (Array.isArray(u))
        return u;
    }
    function ee(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function ue(u, l) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var r = [], g = !0, c = !1, w = void 0;
        try {
          for (var x = u[Symbol.iterator](), S; !(g = (S = x.next()).done) && (r.push(S.value), !(l && r.length === l)); g = !0)
            ;
        } catch ($) {
          c = !0, w = $;
        } finally {
          try {
            !g && x.return != null && x.return();
          } finally {
            if (c)
              throw w;
          }
        }
        return r;
      }
    }
    function me(u, l) {
      if (!!u) {
        if (typeof u == "string")
          return L(u, l);
        var r = Object.prototype.toString.call(u).slice(8, -1);
        if (r === "Object" && u.constructor && (r = u.constructor.name), r === "Map" || r === "Set")
          return Array.from(u);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return L(u, l);
      }
    }
    function L(u, l) {
      (l == null || l > u.length) && (l = u.length);
      for (var r = 0, g = new Array(l); r < l; r++)
        g[r] = u[r];
      return g;
    }
    function B() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function j() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var W = function(l, r, g) {
      var c = l.x, w = l.y, x = g.x, S = g.y, $ = {
        "+": {
          x: c + x,
          y: w + S
        },
        "-": {
          x: c - x,
          y: w - S
        },
        "*": {
          x: c * x,
          y: w * S
        },
        "/": {
          x: c / x,
          y: w / S
        }
      };
      return $[r];
    }, H = function(l) {
      return {
        x: l.left,
        y: l.top
      };
    }, oe = function(l) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: l.x,
        top: l.y,
        right: l.x,
        bottom: l.y,
        width: r,
        height: r
      };
    }, Q = function(l) {
      return {
        x: l,
        y: l
      };
    }, Xe = function(u, l, r) {
      window.addEventListener("resize", l), window.addEventListener("scroll", l), u.forEach(function(g, c) {
        r.observe(g, {
          childList: c !== 0,
          attributes: !0
        });
      });
    }, Fe = function(u) {
      var l = je(u);
      return l.x || l.y ? !0 : u instanceof HTMLDocument ? u.body ? !!(u.body.scrollTop = 1) : !!(u.documentElement.scrollTop = 1) : !!(u.scrollTop = 1);
    }, ot = function(u) {
      var l = document.createElement("div");
      return l.style.position = "fixed", l.style.overflow = "hidden", l.style.pointerEvents = "none", l.style.zIndex = "999999999999999999", l.classList.add(u), l;
    }, nt = function(u) {
      var l = document.createElement("div");
      return l.style.position = "absolute", u || (l.style.background = "rgba(0, 0, 255, 0.1)", l.style.border = "1px solid rgba(0, 0, 255, 0.45)", l.style.display = "none", l.style.pointerEvents = "none"), l;
    }, at = function(u, l) {
      var r;
      return function() {
        for (var g = arguments.length, c = new Array(g), w = 0; w < g; w++)
          c[w] = arguments[w];
        var x = function() {
          r = null, u.apply(void 0, c);
        };
        clearTimeout(r), r = setTimeout(x, l);
      };
    }, Ne = function() {
      var u, l, r, g;
      return {
        y: ((u = document.body) === null || u === void 0 ? void 0 : u.scrollTop) || ((l = document.documentElement) === null || l === void 0 ? void 0 : l.scrollTop) || 0,
        x: ((r = document.body) === null || r === void 0 ? void 0 : r.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, wt = function(u, l) {
      if (u instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var r = u.getBoundingClientRect();
      return {
        top: r.top,
        left: r.left,
        bottom: r.bottom,
        right: r.right,
        width: (u.clientWidth || r.width) * l,
        height: (u.clientHeight || r.height) * l
      };
    }, je = function(u) {
      return !u || u instanceof Document ? Ne() : {
        x: u.scrollLeft >= 0 ? u.scrollLeft : Ne().x,
        y: u.scrollTop >= 0 ? u.scrollTop : Ne().y
      };
    }, Kt = function(u) {
      var l = u.elementRect, r = u.containerRect, g = u.tolerance, c = g === void 0 ? {
        x: 0,
        y: 0
      } : g, w = [];
      return l.top - c.y < r.top && w.push("top"), l.left - c.x < r.left && w.push("left"), l.bottom + c.y > r.bottom && w.push("bottom"), l.right + c.y > r.right && w.push("right"), w;
    }, Wr = function(u) {
      var l = u.event;
      return {
        x: l.clientX,
        y: l.clientY
      };
    }, Xr = function(u) {
      var l = u.scrollAmount, r = u.initialPointerPos, g = u.pointerPos, c = {};
      return g.x > r.x - l.x ? (c.left = r.x - l.x, c.width = g.x - r.x + l.x) : (c.left = g.x, c.width = r.x - g.x - l.x), g.y > r.y - l.y ? (c.top = r.y - l.y, c.height = g.y - r.y + l.y) : (c.top = g.y, c.height = r.y - g.y - l.y), c;
    }, Yt = function(l) {
      var r = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(l);
      if (!g.transform || g.transform === "none")
        return r;
      if (g.transform.indexOf("3d") >= 0) {
        var c = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (c && c.length) {
          var w, x = (w = c[1]) === null || w === void 0 ? void 0 : w.split(",");
          r.x = parseInt(x[12]) || 0, r.y = parseInt(x[13]) || 0;
        }
        return r;
      } else {
        var S = g.transform.trim().match(/matrix\((.*?)\)/);
        if (S && S.length) {
          var $, P = ($ = S[1]) === null || $ === void 0 ? void 0 : $.split(",");
          r.x = parseInt(P[4]) || 0, r.y = parseInt(P[5]) || 0;
        }
        return r;
      }
    }, Fr = function(l) {
      var r = l.style.transform;
      if (!r || r.indexOf("translate") < 0)
        return Yt(l);
      var g = {
        x: 0,
        y: 0
      }, c = r.trim().match(/translate[3dD]*?\(.*?\)/);
      if (c) {
        var w, x = (w = c[0]) === null || w === void 0 ? void 0 : w.split("(");
        if (x) {
          var S, $ = (S = x[1]) === null || S === void 0 ? void 0 : S.split(",");
          g.x = parseInt($[0]) || 0, g.y = parseInt($[1]) || 0;
        }
      }
      return !g.x && !g.x ? Yt(l) : g;
    }, qr = function(l) {
      var r = l.style, g = {
        x: parseInt(r.left) || 0,
        y: parseInt(r.top) || 0
      };
      if (!g.x && !g.x) {
        var c = window.getComputedStyle(l);
        return {
          x: parseInt(c.left) || 0,
          y: parseInt(c.top) || 0
        };
      }
      return g;
    }, Gr = function(u, l) {
      return l ? Fr(u) : qr(u);
    }, Jr = function(u) {
      var l = u.element, r = u.edges, g = u.elementRect, c = u.containerRect, w = u.elementPos, x = u.useTransform;
      r.includes("top") && qe(l, {
        y: w.y + c.top - g.top,
        x: w.x
      }, x), r.includes("left") && qe(l, {
        y: w.y,
        x: w.x + c.left - g.left
      }, x), r.includes("bottom") && qe(l, {
        y: w.y + c.bottom - g.bottom,
        x: w.x
      }, x), r.includes("right") && qe(l, {
        y: w.y,
        x: w.x + c.right - g.right
      }, x);
    }, Wt = function(u) {
      var l = u.computedStyle, r = u.node, g = l.position, c = g === "absolute" || g === "relative" || g === "fixed";
      !(r instanceof HTMLDocument) && !c && (r.style.position = "relative");
    }, Zr = function(u) {
      var l = u.shiftKey, r = u.keyboardDragSpeed, g = u.zoom, c = u.key, w = u.dragKeys, x = u.scrollDiff, S = u.canScroll, $ = u.scrollCallback, P = {
        x: 0,
        y: 0
      }, O = l ? r * 4 * g : r * g;
      return w.left.includes(c) && (P.x = x.x || -O, !l && !x.x && S && $(["left"], r)), w.right.includes(c) && (P.x = x.x || O, !l && !x.x && S && $(["right"], r)), w.up.includes(c) && (P.y = x.y || -O, !l && !x.y && S && $(["top"], r)), w.down.includes(c) && (P.y = x.y || O, !l && !x.y && S && $(["bottom"], r)), P;
    }, Qr = function(u) {
      var l = u.element, r = u.force, g = u.multiSelectionToggle, c = u.SelectedSet, w = u.hoverClassName;
      l.classList.contains(w) && !r || (c.has(l) ? g && c.delete(l) : c.add(l), l.classList.add(w));
    }, ei = function(u) {
      var l = u.element, r = u.force, g = u.SelectedSet, c = u.PrevSelectedSet, w = u.hoverClassName;
      if (!l.classList.contains(w) && !r)
        return !1;
      var x = g.has(l), S = c.has(l);
      x && !S ? g.delete(l) : !x && S && g.add(l), l.classList.remove(w);
    }, xt = function(u, l) {
      return u.left < l.right && u.right > l.left && u.top < l.bottom && u.bottom > l.top;
    }, Xt = function(u) {
      var l = u.element, r = u.posDirection, g = u.containerRect, c = u.useTransform, w = Gr(l, c), x = W(w, "+", r);
      qe(l, x, c);
      var S = l.getBoundingClientRect(), $ = Kt({
        elementRect: S,
        containerRect: g
      });
      Jr({
        element: l,
        edges: $,
        elementRect: S,
        containerRect: g,
        elementPos: x,
        useTransform: c
      });
    }, ti = function(u, l) {
      window.removeEventListener("resize", l), window.removeEventListener("scroll", l), u.disconnect();
    }, ri = function(u, l, r) {
      if (!!l.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, c = u instanceof HTMLDocument ? g || document.body : u, w = l.includes("top") && c.scrollTop > 0, x = l.includes("bottom") && c.scrollTop < c.scrollHeight, S = l.includes("left") && c.scrollLeft > 0, $ = l.includes("right") && c.scrollLeft < c.scrollWidth;
        w && (c.scrollTop -= 1 * r), x && (c.scrollTop += 1 * r), S && (c.scrollLeft -= 1 * r), $ && (c.scrollLeft += 1 * r);
      }
    }, qe = function(u, l, r) {
      if (r) {
        var g = u.style.transform;
        u.style.transform = "translate3d(".concat(l.x, "px,").concat(l.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        u.style.left = "".concat(l.x, "px"), u.style.top = "".concat(l.y, "px");
      return u;
    }, ii = function(u) {
      for (var l = u.subscribe, r = u.publish, g = u.Interaction, c = u.SelectedSet, w = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        "Interaction:start": [{
          name: "dragstart"
        }],
        "Interaction:update": [{
          name: "dragmove",
          condition: function(O) {
            return O.event;
          }
        }],
        "Interaction:end": [{
          name: "callback"
        }]
      }, x = function() {
        var O = U($[S], 2), V = O[0], K = O[1];
        ["pre", !1].forEach(function(ie) {
          return l(ie ? "".concat(V, ":").concat(ie) : V, function(pe) {
            return K.forEach(function(ne) {
              return (!ne.condition || ne.condition(pe)) && r(ie ? "".concat(ie).concat(ne.name) : ne.name, f({
                items: c.elements,
                isDragging: g.isDragging
              }, pe));
            });
          });
        });
      }, S = 0, $ = Object.entries(w); S < $.length; S++)
        x();
    }, Ve = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : F(u) : [];
    }, Ft = function(u, l) {
      u.style.left = "".concat(l.left, "px"), u.style.top = "".concat(l.top, "px"), u.style.width = "".concat(l.width, "px"), u.style.height = "".concat(l.height, "px");
    }, oi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.area, c = l.PS, w = l.zoom;
        t(this, u), o(this, "_modificationCallback", void 0), o(this, "_modificationObserver", void 0), o(this, "_zoom", void 0), o(this, "_node", void 0), o(this, "_parentNodes", void 0), o(this, "_computedStyle", void 0), o(this, "_computedBorder", void 0), o(this, "_rect", void 0), o(this, "setArea", function(x) {
          r._node = x, Wt({
            computedStyle: r.computedStyle,
            node: r._node
          }), setTimeout(function() {
            r.PubSub.publish("Area:modified:pre", {
              item: r
            }), r.reset(), r.PubSub.publish("Area:modified", {
              item: r
            });
          });
        }), o(this, "start", function() {
          Xe(r.parentNodes, r._modificationCallback, r._modificationObserver);
        }), o(this, "reset", function() {
          r._computedStyle = void 0, r._rect = void 0, r._computedBorder = void 0, r._parentNodes = void 0;
        }), o(this, "stop", function() {
          ti(r._modificationObserver, r._modificationCallback), r.reset();
        }), o(this, "scroll", function(x, S) {
          var $ = {
            scroll_directions: x,
            scroll_multiplier: S
          };
          r.PubSub.publish("Area:scroll:pre", $), ri(r._node, x, S), r.PubSub.publish("Area:scroll", $);
        }), this._zoom = w, this.PubSub = c, this.setArea(g), this._modificationCallback = at(function(x) {
          r.PubSub.publish("Area:modified:pre", {
            event: x,
            item: r
          }), r.reset(), r.PubSub.publish("Area:modified", {
            event: x,
            item: r
          });
        }, 60), this._modificationObserver = new MutationObserver(this._modificationCallback), this.PubSub.subscribe("Interaction:init", this.start), this.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(u, [{
        key: "HTMLNode",
        get: function() {
          return this._node;
        }
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
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof HTMLDocument ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = wt(this.HTMLNode, this._zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          if (this._parentNodes)
            return this._parentNodes;
          var r = function g(c) {
            var w, x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, S = (w = c[x]) === null || w === void 0 ? void 0 : w.parentNode;
            return S ? (c.push(S), x++, g(c, x)) : c;
          };
          return this._parentNodes = r([this.HTMLNode]), this._parentNodes;
        }
      }]), u;
    }(), ni = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.dragKeys, w = l.draggability, x = l.keyboardDrag, S = l.keyboardDragSpeed, $ = l.useTransform, P = l.zoom;
        t(this, u), o(this, "_useTransform", void 0), o(this, "_prevCursorPos", void 0), o(this, "_prevScrollPos", void 0), o(this, "_elements", []), o(this, "_draggability", void 0), o(this, "_dragKeys", void 0), o(this, "_dragKeysFlat", void 0), o(this, "_keyboardDrag", void 0), o(this, "_keyboardDragSpeed", void 0), o(this, "_zoom", void 0), o(this, "keyboardDrag", function(O) {
          var V = O.event, K = O.key;
          if (!(!r._keyboardDrag || !r._dragKeysFlat.includes(K) || !r.DS.SelectedSet.size || !r._draggability || r.DS.continue)) {
            var ie = {
              event: V,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            r.DS.publish(["Interaction:start:pre", "Interaction:start"], ie), r._elements = r.DS.getSelection(), r.handleZIndex(!0);
            var pe = Zr({
              shiftKey: r.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: r._keyboardDragSpeed,
              zoom: r._zoom,
              key: K,
              scrollCallback: r.DS.Area.scroll,
              scrollDiff: r._scrollDiff,
              canScroll: r.DS.stores.ScrollStore.canScroll,
              dragKeys: r._dragKeys
            });
            r._elements.forEach(function(ne) {
              return Xt({
                element: ne,
                posDirection: pe,
                containerRect: r.DS.SelectorArea.rect,
                useTransform: r._useTransform
              });
            }), r.DS.publish(["Interaction:update:pre", "Interaction:update"], ie);
          }
        }), o(this, "keyboardEnd", function(O) {
          var V = O.event, K = O.key;
          if (!(!r._keyboardDrag || !r._dragKeysFlat.includes(K) || !r.DS.SelectedSet.size || !r._draggability)) {
            var ie = {
              event: V,
              isDragging: r._draggability,
              isDraggingKeyboard: !0
            };
            r.DS.publish(["Interaction:end:pre", "Interaction:end"], ie);
          }
        }), o(this, "start", function(O) {
          var V = O.isDragging, K = O.isDraggingKeyboard;
          !V || K || (r._prevCursorPos = null, r._prevScrollPos = null, r._elements = r.DS.getSelection(), r.handleZIndex(!0));
        }), o(this, "stop", function(O) {
          O != null && O.isKeyboard || (r._prevCursorPos = null, r._prevScrollPos = null, r.handleZIndex(!1), r._elements = []);
        }), o(this, "update", function(O) {
          var V = O.isDragging, K = O.isDraggingKeyboard;
          if (!(!V || !r._elements.length || K || r.DS.continue)) {
            var ie = W(r._cursorDiff, "+", r._scrollDiff);
            r._elements.forEach(function(pe) {
              return Xt({
                element: pe,
                posDirection: ie,
                containerRect: r.DS.SelectorArea.rect,
                useTransform: r._useTransform
              });
            });
          }
        }), o(this, "handleZIndex", function(O) {
          r._elements.forEach(function(V) {
            return V.style.zIndex = "".concat((parseInt(V.style.zIndex) || 0) + O ? 9999 : -9998);
          });
        }), this.DS = g, this._useTransform = $, this._keyboardDragSpeed = S, this._keyboardDrag = x, this._zoom = P, this._draggability = w, this._dragKeys = {
          up: c.up.map(function(O) {
            return O.toLowerCase();
          }),
          down: c.down.map(function(O) {
            return O.toLowerCase();
          }),
          left: c.left.map(function(O) {
            return O.toLowerCase();
          }),
          right: c.right.map(function(O) {
            return O.toLowerCase();
          })
        }, this._dragKeysFlat = [].concat(F(this._dragKeys.up), F(this._dragKeys.down), F(this._dragKeys.left), F(this._dragKeys.right)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(u, [{
        key: "_cursorDiff",
        get: function() {
          var r = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? W(r, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = r, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var r = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? W(r, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = r, g;
        }
      }]), u;
    }(), ai = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.areaElement, w = l.draggability, x = l.immediateDrag, S = l.selectableClass;
        t(this, u), o(this, "_areaElement", void 0), o(this, "_draggability", void 0), o(this, "_immediateDrag", void 0), o(this, "_selectableClass", void 0), o(this, "isInteracting", void 0), o(this, "isDragging", void 0), o(this, "init", function() {
          return r.DS.publish("Interaction:init:pre", {});
        }), o(this, "_init", function() {
          r.stop(), r._areaElement.addEventListener("mousedown", r.start), r._areaElement.addEventListener("touchstart", r.start, {
            passive: !1
          }), r.DS.publish("Interaction:init", {});
        }), o(this, "start", function($) {
          return r.DS.publish("Interaction:start:pre", {
            event: $,
            isDragging: r.isDragging
          });
        }), o(this, "_start", function($) {
          $.type === "touchstart" && $.preventDefault(), r._canInteract($) && (r.isInteracting = !0, r.isDragging = r.isDragEvent($), r.DS.publish("Interaction:start", {
            event: $,
            isDragging: r.isDragging
          }), document.addEventListener("mouseup", r.reset), document.addEventListener("touchend", r.reset));
        }), o(this, "isDragEvent", function($) {
          var P = $.target.closest(".".concat(r._selectableClass));
          return !r._draggability || r.DS.stores.KeyStore.isMultiSelectKeyPressed($) || !P ? !1 : (r._immediateDrag && (r.DS.SelectedSet.size ? r.DS.SelectedSet.has(P) || (r.DS.SelectedSet.clear(), r.DS.SelectedSet.add(
            P
          )) : r.DS.SelectedSet.add(
            P
          )), !!r.DS.SelectedSet.has(P));
        }), o(this, "onClick", function($) {
          var P = $.event;
          if (!!r._canInteract(P) && !(P.detail > 0)) {
            var O = r.DS, V = O.stores, K = V.PointerStore, ie = V.KeyStore, pe = O.SelectableSet, ne = O.SelectedSet;
            K.start(P);
            var ze = P.target;
            !pe.has(ze) || (ie.isMultiSelectKeyPressed(P) || ne.clear(), ne.toggle(ze), r.reset());
          }
        }), o(this, "stop", function() {
          r.isInteracting = !1, r.isDragging = !1, r._areaElement.removeEventListener("mousedown", r.start), r._areaElement.removeEventListener("touchstart", r.start, {
            passive: !1
          }), document.removeEventListener("mouseup", r.reset), document.removeEventListener("touchend", r.reset);
        }), o(this, "update", function($) {
          var P = $.event, O = $.scroll_directions, V = $.scroll_multiplier;
          r.isInteracting && r.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: P,
            scroll_directions: O,
            scroll_multiplier: V,
            isDragging: r.isDragging
          });
        }), o(this, "reset", function($) {
          return r.DS.publish("Interaction:end:pre", {
            event: $,
            isDragging: r.isDragging
          });
        }), o(this, "_reset", function($) {
          var P = r.isDragging;
          r.stop(), r.init(), r.DS.publish("Interaction:end", {
            event: $,
            isDragging: P
          });
        }), this._areaElement = c, this._draggability = w, this._immediateDrag = x, this._selectableClass = S, this.DS = g, this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function($) {
          var P = $.event;
          return r.start(P);
        }), this.DS.subscribe("Interaction:start:pre", function($) {
          var P = $.event;
          return r._start(P);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function($) {
          var P = $.event;
          return r._reset(P);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return a(u, [{
        key: "_canInteract",
        value: function(r) {
          var g = r.clientX === 0 && r.clientY === 0 && r.detail === 0 && r.target;
          return !(r.button === 2 || this.isInteracting || r.target && !this.DS.SelectorArea.isInside(
            r.target
          ) || !g && !this.DS.SelectorArea.isClicked(r));
        }
      }]), u;
    }(), si = function u(l) {
      var r = this, g = l.DS;
      t(this, u), o(this, "subscribers", {}), o(this, "subscribe", function(c, w) {
        return Array.isArray(r.subscribers[c]) || (r.subscribers[c] = []), r.subscribers[c].push(w), r.subscribers[c].length - 1;
      }), o(this, "unsubscribe", function(c, w, x) {
        x >= 0 ? r.subscribers[c].splice(x, 1) : w && (r.subscribers[c] = r.subscribers[c].filter(function(S) {
          return S !== w;
        }));
      }), o(this, "publish", function(c, w) {
        Array.isArray(c) ? c.forEach(function(x) {
          return r._publish(x, w);
        }) : r._publish(c, w);
      }), o(this, "_publish", function(c, w) {
        var x = r.subscribers[c];
        !Array.isArray(x) || (c.includes(":pre") ? r._handlePrePublish(x, w) : r._handlePublish(x, w));
      }), o(this, "_handlePublish", function(c, w) {
        for (var x = 0, S = c.length; x < S; x++) {
          if (r.DS.stopped)
            return;
          c[x](w);
        }
      }), o(this, "_handlePrePublish", function(c, w) {
        for (var x = c.length; x--; ) {
          if (r.DS.stopped)
            return;
          c[x](w);
        }
      }), this.DS = g;
    }, li = /* @__PURE__ */ function(u) {
      p(r, u);
      var l = Y(r);
      function r(g) {
        var c, w = g.elements, x = g.className, S = g.hoverClassName, $ = g.draggability, P = g.useTransform, O = g.DS;
        return t(this, r), c = l.call(this), o(M(c), "_initElements", void 0), o(M(c), "_className", void 0), o(M(c), "_hoverClassName", void 0), o(M(c), "_useTransform", void 0), o(M(c), "_draggability", void 0), o(M(c), "init", function() {
          return c._initElements.forEach(function(V) {
            return c.add(V);
          });
        }), o(M(c), "clear", function() {
          return c.forEach(function(V) {
            return c.delete(V);
          });
        }), o(M(c), "_onClick", function(V) {
          return c.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: V
          });
        }), o(M(c), "_onPointer", function(V) {
          return c.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: V
          });
        }), o(M(c), "addAll", function(V) {
          return V.forEach(function(K) {
            return c.add(K);
          });
        }), o(M(c), "deleteAll", function(V) {
          return V.forEach(function(K) {
            return c.delete(K);
          });
        }), c.DS = O, c._initElements = Ve(w), c._className = x, c._hoverClassName = S, c._useTransform = P, c._draggability = $, c.DS.subscribe("Interaction:init", c.init), c;
      }
      return a(r, [{
        key: "add",
        value: function(c) {
          return c.classList.add(this._className), c.addEventListener("click", this._onClick), c.addEventListener("mousedown", this._onPointer), c.addEventListener("touchstart", this._onPointer, {
            passive: !1
          }), this._draggability && !this._useTransform && Wt({
            computedStyle: window.getComputedStyle(c),
            node: c
          }), A(m(r.prototype), "add", this).call(this, c);
        }
      }, {
        key: "delete",
        value: function(c) {
          return c.classList.remove(this._className), c.classList.remove(this._hoverClassName), c.removeEventListener("click", this._onClick), c.removeEventListener("mousedown", this._onPointer), c.removeEventListener("touchstart", this._onPointer, {
            passive: !1
          }), A(m(r.prototype), "delete", this).call(this, c);
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), r;
    }(/* @__PURE__ */ k(Set)), ci = /* @__PURE__ */ function(u) {
      p(r, u);
      var l = Y(r);
      function r(g) {
        var c, w = g.className, x = g.DS;
        return t(this, r), c = l.call(this), o(M(c), "_className", void 0), o(M(c), "clear", function() {
          return c.forEach(function(S) {
            return c.delete(S);
          });
        }), o(M(c), "addAll", function(S) {
          return S.forEach(function($) {
            return c.add($);
          });
        }), o(M(c), "deleteAll", function(S) {
          return S.forEach(function($) {
            return c.delete($);
          });
        }), c.DS = x, c._className = w, c;
      }
      return a(r, [{
        key: "add",
        value: function(c) {
          if (!A(m(r.prototype), "has", this).call(this, c)) {
            var w = {
              items: this.elements,
              item: c
            };
            return this.DS.publish("Selected:added:pre", w), A(m(r.prototype), "add", this).call(this, c), c.classList.add(this._className), c.style.zIndex = "".concat((parseInt(c.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", w), this;
          }
        }
      }, {
        key: "delete",
        value: function(c) {
          if (!!A(m(r.prototype), "has", this).call(this, c)) {
            var w = {
              items: this.elements,
              item: c
            };
            this.DS.publish("Selected:removed:pre", w);
            var x = A(m(r.prototype), "delete", this).call(this, c);
            return c.classList.remove(this._className), c.style.zIndex = "".concat((parseInt(c.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", w), x;
          }
        }
      }, {
        key: "toggle",
        value: function(c) {
          return this.has(c) ? this.delete(c) : this.add(c), c;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), r;
    }(/* @__PURE__ */ k(Set)), ui = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.hoverClassName, w = l.multiSelectToggling;
        t(this, u), o(this, "_prevSelectedSet", void 0), o(this, "_hoverClassName", void 0), o(this, "_multiSelectToggling", void 0), o(this, "start", function(x) {
          var S = x.event, $ = x.isDragging;
          $ || (r._storePrevious(S), r._handleInsideSelection(!0, S));
        }), o(this, "update", function(x) {
          var S = x.isDragging;
          S || r.DS.continue || r._handleInsideSelection();
        }), o(this, "_handleInsideSelection", function(x, S) {
          for (var $ = r.DS, P = $.SelectableSet, O = $.SelectorArea, V = $.Selector, K = P.elements.map(function(Me) {
            return [Me, Me.getBoundingClientRect()];
          }), ie = [], pe = [], ne = 0, ze = K.length; ne < ze; ne++)
            !O.isInside(K[ne][0], K[ne][1]) || (xt(K[ne][1], V.rect) ? ie.push(K[ne][0]) : pe.push(K[ne][0]));
          var st = r.DS.stores.KeyStore.isMultiSelectKeyPressed(S) && r._multiSelectToggling;
          r.DS.continue || (ie.forEach(function(Me) {
            return Qr({
              element: Me,
              force: x,
              multiSelectionToggle: st,
              SelectedSet: r.DS.SelectedSet,
              hoverClassName: r._hoverClassName
            });
          }), pe.forEach(function(Me) {
            return ei({
              element: Me,
              force: x,
              SelectedSet: r.DS.SelectedSet,
              hoverClassName: r._hoverClassName,
              PrevSelectedSet: r._prevSelectedSet
            });
          }));
        }), this._hoverClassName = c, this._multiSelectToggling = w, this.DS = g, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(u, [{
        key: "_storePrevious",
        value: function(r) {
          var g = this.DS, c = g.stores.KeyStore, w = g.SelectedSet;
          c.isMultiSelectKeyPressed(r) ? this._prevSelectedSet = new Set(w) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), u;
    }(), di = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.selector, w = l.selectorClass, x = l.customStyles;
        t(this, u), o(this, "_rect", void 0), o(this, "start", function(S) {
          var $ = S.isDragging;
          if (!$) {
            var P = r.DS.stores.PointerStore, O = P.initialValArea;
            Ft(r.HTMLNode, oe(O, 1)), r.HTMLNode.style.display = "block", r._rect = null;
          }
        }), o(this, "stop", function() {
          r.HTMLNode.style.width = "0", r.HTMLNode.style.height = "0", r.HTMLNode.style.display = "none";
        }), o(this, "update", function(S) {
          var $ = S.isDragging;
          if (!($ || r.DS.continue)) {
            var P = r.DS.stores, O = P.ScrollStore, V = P.PointerStore, K = Xr({
              scrollAmount: O.scrollAmount,
              initialPointerPos: V.initialValArea,
              pointerPos: V.currentValArea
            });
            Ft(r.HTMLNode, K), r._rect = null;
          }
        }), this.DS = g, this.HTMLNode = c || nt(x), this.HTMLNode.classList.add(w), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(u, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), hi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.selectorAreaClass, w = l.autoScrollSpeed, x = l.overflowTolerance;
        t(this, u), o(this, "_autoScrollSpeed", void 0), o(this, "_scrollInterval", void 0), o(this, "_rect", void 0), o(this, "currentEdges", []), o(this, "_overflowTolerance", void 0), o(this, "start", function() {
          return r.applyElements("append");
        }), o(this, "applyElements", function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", $ = document.body ? "body" : "documentElement", P = "".concat(S, "Child");
          r.HTMLNode[P](r.DS.Selector.HTMLNode), document[$][P](r.HTMLNode);
        }), o(this, "updatePos", function() {
          r._rect = null;
          var S = r.DS.Area.rect, $ = r.DS.Area.computedBorder, P = r.HTMLNode.style, O = "".concat(S.top + $.top, "px"), V = "".concat(S.left + $.left, "px"), K = "".concat(S.width, "px"), ie = "".concat(S.height, "px");
          P.top !== O && (P.top = O), P.left !== V && (P.left = V), P.width !== K && (P.width = K), P.height !== ie && (P.height = ie);
        }), o(this, "stop", function(S) {
          r.stopAutoScroll(), S && r.applyElements("remove");
        }), o(this, "startAutoScroll", function() {
          r.currentEdges = [], r._scrollInterval = setInterval(function() {
            return r.handleAutoScroll();
          }, 16);
        }), o(this, "handleAutoScroll", function() {
          if (!r.DS.continue) {
            var S = r.DS, $ = S.stores.PointerStore, P = S.Area;
            r.currentEdges = Kt({
              elementRect: oe($.currentVal),
              containerRect: r.rect,
              tolerance: r._overflowTolerance
            }), r.currentEdges.length && P.scroll(r.currentEdges, r._autoScrollSpeed);
          }
        }), o(this, "stopAutoScroll", function() {
          r.currentEdges = [], clearInterval(r._scrollInterval);
        }), o(this, "isInside", function(S, $) {
          return r.DS.Area.HTMLNode.contains(S) && r.DS.stores.ScrollStore.canScroll ? !0 : xt(r.rect, $ || S.getBoundingClientRect());
        }), this._autoScrollSpeed = w, this._overflowTolerance = x, this.DS = g, this.HTMLNode = ot(c), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          r.updatePos(), r.stopAutoScroll();
        });
      }
      return a(u, [{
        key: "isClicked",
        value: function(r) {
          var g = this.DS.stores.PointerStore, c = r ? g.getPointerPosition(r) : g.initialVal;
          return xt({
            left: c.x,
            top: c.y,
            right: c.x,
            bottom: c.y
          }, this.rect);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), fi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.multiSelectKeys, w = l.multiSelectMode;
        t(this, u), o(this, "_multiSelectMode", void 0), o(this, "_multiSelectKeys", void 0), o(this, "_currentValues", /* @__PURE__ */ new Set()), o(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), o(this, "init", function() {
          document.addEventListener("keydown", r.keydown), document.addEventListener("keyup", r.keyup), window.addEventListener("blur", r.reset);
        }), o(this, "keydown", function(x) {
          var S = x.key.toLowerCase();
          r.DS.publish("KeyStore:down:pre", {
            event: x,
            key: S
          }), r._currentValues.add(S), r.DS.publish("KeyStore:down", {
            event: x,
            key: S
          });
        }), o(this, "keyup", function(x) {
          var S = x.key.toLowerCase();
          r.DS.publish("KeyStore:up:pre", {
            event: x,
            key: S
          }), r._currentValues.delete(S), r.DS.publish("KeyStore:up", {
            event: x,
            key: S
          });
        }), o(this, "stop", function() {
          document.removeEventListener("keydown", r.keydown), document.removeEventListener("keyup", r.reset), window.removeEventListener("blur", r.reset), r.reset();
        }), o(this, "reset", function() {
          return r._currentValues.clear();
        }), this.DS = g, this._multiSelectMode = w, this._multiSelectKeys = c.map(function(x) {
          var S = {
            ctrlKey: "Control",
            shiftKey: "Shift",
            metaKey: "Meta"
          }, $ = S[x];
          return $ ? (console.warn("[DragSelect] ".concat(x, ' is deprecated. Use "').concat($, '" instead. Act Now!. See docs for more info')), $.toLowerCase()) : x.toLowerCase();
        }), this.DS.subscribe("Interaction:init", this.init);
      }
      return a(u, [{
        key: "isMultiSelectKeyPressed",
        value: function(r) {
          var g = this;
          return !!(this._multiSelectMode || this.currentValues.some(function(c) {
            return g._multiSelectKeys.includes(c);
          }) || r && this._multiSelectKeys.some(function(c) {
            return r[g._keyMapping[c]];
          }));
        }
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), u;
    }(), mi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS;
        t(this, u), o(this, "_isMouseInteraction", !1), o(this, "_initialValArea", void 0), o(this, "_currentValArea", void 0), o(this, "_lastValArea", void 0), o(this, "_initialVal", void 0), o(this, "_currentVal", void 0), o(this, "_lastVal", void 0), o(this, "_lastTouch", void 0), o(this, "init", function() {
          document.addEventListener("mousemove", r.update), document.addEventListener("touchmove", r.update, {
            passive: !1
          });
        }), o(this, "getPointerPosition", function(c) {
          return Wr({
            event: r._normalizedEvent(c)
          });
        }), o(this, "update", function(c) {
          !c || (r.DS.publish("PointerStore:updated:pre", {
            event: c
          }), r.currentVal = r.getPointerPosition(c), r._isMouseInteraction && r.DS.publish("PointerStore:updated", {
            event: c
          }));
        }), o(this, "stop", function() {
          document.removeEventListener("mousemove", r.update), document.removeEventListener("touchmove", r.update, {
            passive: !1
          }), setTimeout(function() {
            return r._isMouseInteraction = !1;
          }, 100);
        }), o(this, "reset", function(c) {
          !c || (r.currentVal = r.lastVal = r.getPointerPosition(c), r.stop(), r.init());
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(c) {
          var w = c.event;
          return r.start(w);
        }), this.DS.subscribe("Interaction:end", function(c) {
          var w = c.event;
          return r.reset(w);
        });
      }
      return a(u, [{
        key: "start",
        value: function(r) {
          !r || (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(r));
        }
      }, {
        key: "_normalizedEvent",
        value: function(r) {
          return "touches" in r && r.type !== "touchend" && (this._lastTouch = r), "touches" in r ? this._lastTouch.touches[0] : r;
        }
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(r) {
          this._initialVal = r, this._initialValArea = r && W(r, "-", W(H(this.DS.Area.rect), "+", H(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(r) {
          this._currentVal = r, this._currentValArea = r && W(r, "-", W(H(this.DS.Area.rect), "+", H(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(r) {
          this._lastVal = r, this._lastValArea = r && W(r, "-", W(H(this.DS.Area.rect), "+", H(this.DS.Area.computedBorder)));
        }
      }]), u;
    }(), pi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.DS, c = l.areaElement, w = l.zoom;
        t(this, u), o(this, "_initialVal", void 0), o(this, "_currentVal", void 0), o(this, "_areaElement", void 0), o(this, "_canScroll", void 0), o(this, "init", function() {
          return r._areaElement.addEventListener("scroll", r.update);
        }), o(this, "start", function() {
          r._currentVal = r._initialVal = je(r._areaElement), r._areaElement.addEventListener("scroll", r.update);
        }), o(this, "update", function() {
          return r._currentVal = je(r._areaElement);
        }), o(this, "stop", function() {
          r._areaElement.removeEventListener("scroll", r.update), r._initialVal = {
            x: 0,
            y: 0
          }, r._canScroll = null;
        }), o(this, "reset", function() {
          r.stop(), r.start();
        }), this._areaElement = c, this.DS = g, this.zoom = w, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return r.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return r.reset();
        });
      }
      return a(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = Fe(this._areaElement);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var r = W(this.currentVal, "-", this.initialVal), g = Q(this.zoom), c = W(W(r, "*", g), "-", r);
          return {
            x: r.x + c.x,
            y: r.y + c.y
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
          return this._currentVal || (this._currentVal = je(this._areaElement)), this._currentVal;
        }
      }]), u;
    }(), gi = /* @__PURE__ */ function() {
      function u(l) {
        var r = this, g = l.area, c = g === void 0 ? document : g, w = l.selectables, x = w === void 0 ? [] : w, S = l.autoScrollSpeed, $ = S === void 0 ? 5 : S, P = l.overflowTolerance, O = P === void 0 ? {
          x: 25,
          y: 25
        } : P, V = l.zoom, K = V === void 0 ? 1 : V, ie = l.customStyles, pe = ie === void 0 ? !1 : ie, ne = l.multiSelectMode, ze = ne === void 0 ? !1 : ne, st = l.multiSelectToggling, Me = st === void 0 ? !0 : st, qt = l.multiSelectKeys, vi = qt === void 0 ? ["Control", "Shift", "Meta"] : qt, Gt = l.selector, bi = Gt === void 0 ? void 0 : Gt, Jt = l.draggability, _t = Jt === void 0 ? !0 : Jt, Zt = l.immediateDrag, yi = Zt === void 0 ? !0 : Zt, Qt = l.keyboardDrag, wi = Qt === void 0 ? !0 : Qt, xi = l.dragKeys, er = l.keyboardDragSpeed, _i = er === void 0 ? 10 : er, tr = l.useTransform, rr = tr === void 0 ? !0 : tr, ir = l.hoverClass, or = ir === void 0 ? "ds-hover" : ir, nr = l.selectableClass, ar = nr === void 0 ? "ds-selectable" : nr, sr = l.selectedClass, ki = sr === void 0 ? "ds-selected" : sr, lr = l.selectorClass, Si = lr === void 0 ? "ds-selector" : lr, cr = l.selectorAreaClass, Di = cr === void 0 ? "ds-selector-area" : cr, Ci = l.callback, Mi = l.onDragMove, $i = l.onDragStartBegin, Ei = l.onDragStart, Ti = l.onElementSelect, Ai = l.onElementUnselect;
        t(this, u), o(this, "continue", !1), o(this, "start", function() {
          r.stopped = !1, r.Interaction.init();
        }), o(this, "break", function() {
          return r.continue = !0;
        }), o(this, "getSelection", function() {
          return r.SelectedSet.elements;
        }), o(this, "getSelectables", function() {
          return r.SelectableSet.elements;
        }), o(this, "getInitialCursorPosition", function() {
          return r.stores.PointerStore.initialVal;
        }), o(this, "getCurrentCursorPosition", function() {
          return r.stores.PointerStore.currentVal;
        }), o(this, "getPreviousCursorPosition", function() {
          return r.stores.PointerStore.lastVal;
        }), o(this, "getInitialCursorPositionArea", function() {
          return r.stores.PointerStore.initialValArea;
        }), o(this, "getCurrentCursorPositionArea", function() {
          return r.stores.PointerStore.currentValArea;
        }), o(this, "getPreviousCursorPositionArea", function() {
          return r.stores.PointerStore.lastValArea;
        }), o(this, "isMultiSelect", function(Oi) {
          return r.stores.KeyStore.isMultiSelectKeyPressed(Oi);
        }), o(this, "isDragging", function() {
          return r.Interaction.isDragging;
        }), this.PubSub = new si({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this._callbacksTemp({
          callback: Ci,
          onDragMove: Mi,
          onDragStart: Ei,
          onDragStartBegin: $i,
          onElementSelect: Ti,
          onElementUnselect: Ai
        }), this.stores = {
          PointerStore: new mi({
            DS: this
          }),
          ScrollStore: new pi({
            DS: this,
            areaElement: c,
            zoom: K
          }),
          KeyStore: new fi({
            DS: this,
            multiSelectKeys: vi,
            multiSelectMode: ze
          })
        }, this.Area = new oi({
          area: c,
          PS: this.PubSub,
          zoom: K
        }), this.Selector = new di({
          DS: this,
          selector: bi,
          selectorClass: Si,
          customStyles: pe
        }), this.SelectorArea = new hi({
          DS: this,
          selectorAreaClass: Di,
          autoScrollSpeed: $,
          overflowTolerance: O
        }), this.SelectableSet = new li({
          elements: x,
          DS: this,
          className: ar,
          hoverClassName: or,
          useTransform: rr,
          draggability: _t
        }), this.SelectedSet = new ci({
          DS: this,
          className: ki
        }), this.Selection = new ui({
          DS: this,
          hoverClassName: or,
          multiSelectToggling: Me
        }), this.Drag = new ni({
          DS: this,
          draggability: _t,
          useTransform: rr,
          keyboardDrag: wi,
          dragKeys: Object.assign({
            up: ["ArrowUp"],
            down: ["ArrowDown"],
            left: ["ArrowLeft"],
            right: ["ArrowRight"]
          }, xi),
          zoom: K,
          keyboardDragSpeed: _i
        }), this.Interaction = new ai({
          areaElement: c,
          DS: this,
          draggability: _t,
          immediateDrag: yi,
          selectableClass: ar
        }), ii({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction
        }), this.subscribe("Interaction:end", function() {
          return r.continue = !1;
        }), this.start();
      }
      return a(u, [{
        key: "_callbacksTemp",
        value: function(r) {
          var g = r.callback, c = r.onDragMove, w = r.onDragStart, x = r.onDragStartBegin, S = r.onElementSelect, $ = r.onElementUnselect, P = function(V, K) {
            return console.warn("[DragSelect] ".concat(V, ' is deprecated. Use DragSelect.subscribe("').concat(K, '", (callbackObject) => {}) instead. Act Now! See docs for more info'));
          };
          g && (P("callback", "callback"), this.subscribe("callback", function(O) {
            var V = O.items;
            O.item;
            var K = O.event;
            return g(V, K);
          })), c && (P("onDragMove", "dragmove"), this.subscribe("dragmove", function(O) {
            O.items, O.item;
            var V = O.event;
            return c(V);
          })), w && (P("onDragStart", "dragstart"), this.subscribe("dragstart", function(O) {
            O.items, O.item;
            var V = O.event;
            return w(V);
          })), x && (P("onDragStartBegin", "dragstart"), this.subscribe("dragstart", function(O) {
            O.items, O.item;
            var V = O.event;
            return x(V);
          })), S && (P("onElementSelect", "elementselect"), this.subscribe("elementselect", function(O) {
            O.items;
            var V = O.item, K = O.event;
            return S(V, K);
          })), $ && (P("onElementUnselect", "elementunselect"), this.subscribe("elementunselect", function(O) {
            O.items;
            var V = O.item, K = O.event;
            return $(V, K);
          }));
        }
      }, {
        key: "stop",
        value: function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          c && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(r), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), r && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Ve(r)), c || this.addSelectables(r), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ve(r)), c && this.removeSelectables(r), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(r) {
          var g = this, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ve(r).forEach(function(x) {
            return g.SelectedSet.has(x) ? g.removeSelection(r, c, w) : g.addSelection(r, c, w);
          }), c && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(r, g, c), this.getSelection();
        }
      }, {
        key: "clearSelection",
        value: function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), r && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "addSelectables",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = Ve(r);
          return this.SelectableSet.addAll(c), g && this.SelectedSet.addAll(c), r;
        }
      }, {
        key: "setSelectables",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.removeSelectables(r, g), this.addSelectables(r, c);
        }
      }, {
        key: "removeSelectables",
        value: function(r) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return this.SelectableSet.deleteAll(Ve(r)), g && this.removeSelection(r), r;
        }
      }, {
        key: "getCursorPositionDifference",
        value: function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          console.warn("[DragSelect] Using .getCursorPositionDifference is deprecated. Calculate yourself instead. i.e. `.getCurrentCursorPosition().x - .getInitialCursorPosition().x`");
          var c = g ? this.getCurrentCursorPositionArea() : this.getCurrentCursorPosition(), w = r ? g ? this.getPreviousCursorPositionArea() : this.getPreviousCursorPosition() : g ? this.getInitialCursorPositionArea() : this.getInitialCursorPosition();
          return W(c, "-", w);
        }
      }]), u;
    }();
    return gi;
  });
})(Tr);
const To = Tr.exports, Ao = (n, e, t, i, a) => (e = Math, t = e.log, i = 1024, a = t(n) / t(i) | 0, n / e.pow(i, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), Oo = (n, e = "en-US") => new Date(n * 1e3).toLocaleString(e), Po = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Io = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Lo = [
  Io
], No = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, jo = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Vo = [
  jo
], zo = {
  name: "VFSortIcon"
}, ct = /* @__PURE__ */ Object.assign(zo, {
  props: { direction: String },
  setup(n) {
    return (e, t) => (y(), D("div", null, [
      n.direction == "down" ? (y(), D("svg", Po, Lo)) : G("", !0),
      n.direction == "up" ? (y(), D("svg", No, Vo)) : G("", !0)
    ]));
  }
}), Bo = ["onClick"], Ro = {
  name: "VFToast.vue"
}, Ho = /* @__PURE__ */ Object.assign(Ro, {
  setup(n) {
    const e = z("emitter"), { getStore: t } = z("storage"), i = I(t("full-screen", !1)), a = (p) => p == "error" ? "text-red-400 border-red-400" : "text-lime-600 border-lime-600", o = I([]), s = (p) => {
      o.value.splice(p, 1);
    }, f = (p) => {
      let m = o.value.findIndex((h) => h.id === p);
      m !== -1 && s(m);
    };
    return e.on("vf-toast-clear", () => {
      o.value = [];
    }), e.on("vf-toast-push", (p) => {
      let m = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      p.id = m, o.value.push(p), setTimeout(() => {
        f(m);
      }, 5e3);
    }), (p, m) => (y(), D("div", {
      class: de([i.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      we(Pi, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: J(() => [
          (y(!0), D(ce, null, be(o.value, (h, v) => (y(), D("div", {
            onClick: (b) => s(v),
            key: h,
            class: de([a(h.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 border text-xs rounded cursor-pointer"])
          }, T(h.label), 11, Bo))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Le = (n) => Object.entries(n).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Uo } = Se(), Et = (n, e) => Uo.value + "?" + Le({ q: "preview", adapter: n, path: e }), Ko = { class: "relative flex-auto flex flex-col overflow-hidden" }, Yo = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Wo = { class: "absolute" }, Xo = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Fo = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, qo = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Go = { class: "grid grid-cols-12 items-center" }, Jo = { class: "flex col-span-7 items-center" }, Zo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), en = [
  Qo
], tn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, rn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), on = [
  rn
], nn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, an = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, sn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ln = { class: "grid grid-cols-12 items-center" }, cn = { class: "flex col-span-7 items-center" }, un = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), hn = [
  dn
], fn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, mn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), pn = [
  mn
], gn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, vn = { class: "col-span-2 text-center" }, bn = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, yn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], wn = { class: "relative" }, xn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _n = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), kn = [
  _n
], Sn = ["src"], Dn = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Cn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Mn = [
  Cn
], $n = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, En = { class: "break-all" }, Tn = {
  name: "VFExplorer"
}, An = /* @__PURE__ */ Object.assign(Tn, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { setStore: i, getStore: a } = z("storage"), o = (L) => L == null ? void 0 : L.substring(0, 3), s = (L) => L.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), f = I(null), p = I(null), m = I(0), h = I(null), { t: v } = z("i18n"), b = Math.floor(Math.random() * 2 ** 32), E = I(a("full-screen", !1));
    t.on("vf-fullscreen-toggle", () => {
      E.value = !E.value, i("full-screen", E.value);
    });
    const k = I("");
    t.on("vf-search-query", ({ newQuery: L }) => {
      k.value = L, L ? t.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: L
        },
        onSuccess: (B) => {
          B.files.length || t.emit("vf-toast-push", { label: v("No search result found.") });
        }
      }) : t.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let M = null;
    const N = () => {
      M && clearTimeout(M);
    }, Y = (L) => {
      M = setTimeout(() => {
        const B = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: L.target.getBoundingClientRect().x,
          clientY: L.target.getBoundingClientRect().y
        });
        L.target.dispatchEvent(B);
      }, 500);
    }, R = (L) => {
      L.type == "dir" ? (t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: L.path } })) : t.emit("vf-modal-show", { type: "preview", adapter: e.data.adapter, item: L });
    }, A = ft({ active: !1, column: "", order: "" }), U = (L = !0) => {
      let B = [...e.data.files], j = A.column, W = A.order == "asc" ? 1 : -1;
      if (!L)
        return B;
      const H = (oe, Q) => typeof oe == "string" && typeof Q == "string" ? oe.toLowerCase().localeCompare(Q.toLowerCase()) : oe < Q ? -1 : oe > Q ? 1 : 0;
      return A.active && (B = B.slice().sort((oe, Q) => H(oe[j], Q[j]) * W)), B;
    }, F = (L) => {
      A.active && A.column == L ? (A.active = A.order == "asc", A.column = L, A.order = "desc") : (A.active = !0, A.column = L, A.order = "asc");
    }, C = () => h.value.getSelection().map((L) => JSON.parse(L.dataset.item)), q = (L, B) => {
      if (L.altKey || L.ctrlKey || L.metaKey)
        return L.preventDefault(), !1;
      L.dataTransfer.setDragImage(p.value, 0, 15), L.dataTransfer.effectAllowed = "all", L.dataTransfer.dropEffect = "copy", L.dataTransfer.setData("items", JSON.stringify(C()));
    }, ee = (L, B) => {
      L.preventDefault();
      let j = JSON.parse(L.dataTransfer.getData("items"));
      if (j.find((W) => W.storage != a("adapter", "local"))) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", { type: "move", items: { from: j, to: B } });
    }, ue = (L, B) => {
      L.preventDefault(), !B || B.type !== "dir" || h.value.getSelection().find((j) => j == L.currentTarget) ? (L.dataTransfer.dropEffect = "none", L.dataTransfer.effectAllowed = "none") : L.dataTransfer.dropEffect = "copy";
    };
    return xe(() => {
      h.value = new To({
        area: f.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), t.on("vf-explorer-update", () => bt(() => {
        h.value.clearSelection(), h.value.setSelectables(document.getElementsByClassName("vf-item-" + b));
      })), h.value.subscribe("predragstart", ({ event: L, isDragging: B }) => {
        if (B)
          m.value = h.value.getSelection().length, h.value.break();
        else {
          const j = L.target.offsetWidth - L.offsetX, W = L.target.offsetHeight - L.offsetY;
          j < 15 && W < 15 && (h.value.clearSelection(), h.value.break());
        }
      }), h.value.subscribe("predragmove", ({ isDragging: L }) => {
        L && h.value.break();
      }), h.value.subscribe("callback", ({ items: L, event: B, isDragging: j }) => {
        t.emit("vf-nodes-selected", C()), m.value = h.value.getSelection().length;
      });
    }), Ii(() => {
      h.value.setSelection(h.value.getSelection());
    }), xe(() => {
      vt(() => e.view, () => t.emit("vf-explorer-update"));
    }), (L, B) => (y(), D("div", Ko, [
      n.view == "list" || k.value.length ? (y(), D("div", Yo, [
        d("div", {
          onClick: B[0] || (B[0] = (j) => F("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          le(T(_(v)("Name")) + " ", 1),
          ve(we(ct, {
            direction: A.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [lt, A.active && A.column == "basename"]
          ])
        ]),
        k.value.length ? G("", !0) : (y(), D("div", {
          key: 0,
          onClick: B[1] || (B[1] = (j) => F("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          le(T(_(v)("Size")) + " ", 1),
          ve(we(ct, {
            direction: A.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [lt, A.active && A.column == "file_size"]
          ])
        ])),
        k.value.length ? G("", !0) : (y(), D("div", {
          key: 1,
          onClick: B[2] || (B[2] = (j) => F("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          le(T(_(v)("Date")) + " ", 1),
          ve(we(ct, {
            direction: A.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [lt, A.active && A.column == "last_modified"]
          ])
        ])),
        k.value.length ? (y(), D("div", {
          key: 2,
          onClick: B[3] || (B[3] = (j) => F("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          le(T(_(v)("Filepath")) + " ", 1),
          ve(we(ct, {
            direction: A.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [lt, A.active && A.column == "path"]
          ])
        ])) : G("", !0)
      ])) : G("", !0),
      d("div", Wo, [
        d("div", {
          ref_key: "dragImage",
          ref: p,
          class: "absolute -z-50 -top-96"
        }, [
          Xo,
          d("div", Fo, T(m.value), 1)
        ], 512)
      ]),
      d("div", {
        onContextmenu: B[10] || (B[10] = Pe((j) => _(t).emit("vf-contextmenu-show", { event: j, area: f.value, items: C() }), ["self", "prevent"])),
        class: de([E.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: f
      }, [
        k.value.length ? (y(!0), D(ce, { key: 0 }, be(U(), (j, W) => (y(), D("div", {
          onDblclick: (H) => R(j),
          onTouchstart: B[4] || (B[4] = (H) => Y(H)),
          onTouchend: B[5] || (B[5] = (H) => N()),
          onContextmenu: Pe((H) => _(t).emit("vf-contextmenu-show", { event: H, area: f.value, items: C(), target: j }), ["prevent"]),
          class: de(["vf-item-" + _(b), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": W
        }, [
          d("div", Go, [
            d("div", Jo, [
              j.type == "dir" ? (y(), D("svg", Zo, en)) : (y(), D("svg", tn, on)),
              d("span", nn, T(j.basename), 1)
            ]),
            d("div", an, T(j.path), 1)
          ])
        ], 42, qo))), 256)) : G("", !0),
        n.view == "list" && !k.value.length ? (y(!0), D(ce, { key: 1 }, be(U(), (j, W) => (y(), D("div", {
          draggable: "true",
          onDblclick: (H) => R(j),
          onTouchstart: B[6] || (B[6] = (H) => Y(H)),
          onTouchend: B[7] || (B[7] = (H) => N()),
          onContextmenu: Pe((H) => _(t).emit("vf-contextmenu-show", { event: H, area: f.value, items: C(), target: j }), ["prevent"]),
          onDragstart: (H) => q(H),
          onDragover: (H) => ue(H, j),
          onDrop: (H) => ee(H, j),
          class: de(["vf-item-" + _(b), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": W
        }, [
          d("div", ln, [
            d("div", cn, [
              j.type == "dir" ? (y(), D("svg", un, hn)) : (y(), D("svg", fn, pn)),
              d("span", gn, T(j.basename), 1)
            ]),
            d("div", vn, T(j.file_size ? _(Ao)(j.file_size) : ""), 1),
            d("div", bn, T(_(Oo)(j.last_modified)), 1)
          ])
        ], 42, sn))), 256)) : G("", !0),
        n.view == "grid" && !k.value.length ? (y(!0), D(ce, { key: 2 }, be(U(!1), (j, W) => {
          var H, oe;
          return y(), D("div", {
            draggable: "true",
            onDblclick: (Q) => R(j),
            onTouchstart: B[8] || (B[8] = (Q) => Y(Q)),
            onTouchend: B[9] || (B[9] = (Q) => N()),
            onContextmenu: Pe((Q) => _(t).emit("vf-contextmenu-show", { event: Q, area: f.value, items: C(), target: j }), ["prevent"]),
            onDragstart: (Q) => q(Q),
            onDragover: (Q) => ue(Q, j),
            onDrop: (Q) => ee(Q, j),
            class: de(["vf-item-" + _(b), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": j.type,
            "data-item": JSON.stringify(j),
            "data-index": W
          }, [
            d("div", null, [
              d("div", wn, [
                j.type == "dir" ? (y(), D("svg", xn, kn)) : ((H = j.mime_type) != null ? H : "").startsWith("image") ? (y(), D("img", {
                  key: 1,
                  class: "h-10 md:h-12 m-auto",
                  src: _(Et)(_(a)("adapter", e.data.adapter), j.path),
                  alt: ""
                }, null, 8, Sn)) : (y(), D("svg", Dn, Mn)),
                ((oe = j.mime_type) != null ? oe : "").startsWith("image") ? G("", !0) : (y(), D("div", $n, T(o(j.extension)), 1))
              ]),
              d("span", En, T(s(j.basename)), 1)
            ])
          ], 42, yn);
        }), 256)) : G("", !0)
      ], 34),
      we(Ho)
    ]));
  }
}), On = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Pn = { class: "flex leading-5 items-center" }, In = ["aria-label"], Ln = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Nn = [
  Ln
], jn = ["value"], Vn = { class: "ml-3" }, zn = { key: 0 }, Bn = { class: "ml-1" }, Rn = { class: "flex leading-5 items-center" }, Hn = {
  value: "",
  disabled: ""
}, Un = /* @__PURE__ */ d("option", { value: "tr" }, "Turkish", -1), Kn = /* @__PURE__ */ d("option", { value: "en" }, "English", -1), Yn = /* @__PURE__ */ d("option", { value: "fr" }, "French", -1), Wn = ["aria-label"], Xn = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Fn = [
  Xn
], qn = {
  name: "VFStatusbar"
}, Gn = /* @__PURE__ */ Object.assign(qn, {
  props: {
    data: Object
  },
  setup(n) {
    var b;
    const e = n, t = z("emitter"), { getStore: i, setStore: a } = z("storage"), o = I(0), s = I((b = i("adapter")) != null ? b : e.data.adapter), { t: f, changeLocale: p } = z("i18n"), m = I(i("locale", "")), h = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: s.value } }), a("adapter", s.value);
    };
    t.on("vf-nodes-selected", (E) => {
      o.value = E.length;
    });
    const v = I("");
    return t.on("vf-search-query", ({ newQuery: E }) => {
      v.value = E;
    }), (E, k) => (y(), D("div", On, [
      d("div", Pn, [
        d("div", {
          class: "mx-2",
          "aria-label": _(f)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Nn, 8, In),
        ve(d("select", {
          "onUpdate:modelValue": k[0] || (k[0] = (M) => s.value = M),
          onChange: h,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (y(!0), D(ce, null, be(n.data.storages, (M) => (y(), D("option", { value: M }, T(M), 9, jn))), 256))
        ], 544), [
          [ur, s.value]
        ]),
        d("div", Vn, [
          v.value.length ? (y(), D("span", zn, T(n.data.files.length) + " items found. ", 1)) : G("", !0),
          d("span", Bn, T(o.value > 0 ? o.value + " " + _(f)("item(s) selected.") : ""), 1)
        ])
      ]),
      d("div", Rn, [
        ve(d("select", {
          "onUpdate:modelValue": k[1] || (k[1] = (M) => m.value = M),
          onChange: k[2] || (k[2] = (M) => _(p)(M.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          d("option", Hn, T(_(f)("Language")), 1),
          Un,
          Kn,
          Yn
        ], 544), [
          [ur, m.value]
        ]),
        d("span", {
          "aria-label": _(f)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: k[3] || (k[3] = (M) => _(t).emit("vf-modal-show", { type: "message", title: "Vuefinder 1.0", message: _(f)("Vuefinder is a file manager component for vue 3.") }))
        }, Fn, 8, Wn)
      ])
    ]));
  }
}), Jn = (n, e = 0, t = !1) => {
  let i;
  return (...a) => {
    t && !i && n(...a), clearTimeout(i), i = setTimeout(() => {
      n(...a);
    }, e);
  };
}, Zn = (n, e, t) => {
  const i = I(n);
  return Li((o, s) => ({
    get() {
      return o(), i.value;
    },
    set: Jn(
      (f) => {
        i.value = f, s();
      },
      e,
      t
    )
  }));
}, Qn = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, ea = ["aria-label"], ta = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), ra = [
  ta
], ia = ["aria-label"], oa = /* @__PURE__ */ d("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), na = [
  oa
], aa = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, sa = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), la = [
  sa
], ca = ["onClick"], ua = /* @__PURE__ */ d("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), da = [
  ua
], ha = { class: "flex leading-5" }, fa = /* @__PURE__ */ d("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), ma = ["title", "onClick"], pa = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ga = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), va = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ba = [
  ga,
  va
], ya = {
  key: 3,
  class: "flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, wa = /* @__PURE__ */ d("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), xa = ["onKeydown", "placeholder"], _a = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), ka = [
  _a
], Sa = {
  name: "VFBreadcrumb"
}, Da = /* @__PURE__ */ Object.assign(Sa, {
  props: {
    data: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), a = I(null), o = I([]), s = I(!1), f = I(null), { t: p } = z("i18n"), m = z("loadingState");
    t.on("vf-explorer-update", () => {
      var U;
      let R = [], A = [];
      a.value = (U = e.data.dirname) != null ? U : i("adapter", "local") + "://", a.value.length == 0 && (o.value = []), a.value.replace(i("adapter", "local") + "://", "").split("/").forEach(function(F) {
        R.push(F), R.join("/") != "" && A.push({
          basename: F,
          name: F,
          path: i("adapter", "local") + "://" + R.join("/"),
          type: "dir"
        });
      }), A.length > 4 && (A = A.slice(-5), A[0].name = ".."), o.value = A;
    });
    const h = () => {
      s.value = !1, b.value = "";
    };
    t.on("vf-search-exit", () => {
      h();
    });
    const v = () => {
      s.value = !0, bt(() => f.value.focus());
    }, b = Zn("", 400), E = () => m.value;
    vt(b, (R) => {
      t.emit("vf-toast-clear"), t.emit("vf-search-query", { newQuery: R });
    });
    const k = () => o.value.length && !s.value, M = (R) => {
      var U;
      R.preventDefault();
      let A = JSON.parse(R.dataTransfer.getData("items"));
      if (A.find((F) => F.storage != i("adapter", "local"))) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", {
        type: "move",
        items: { from: A, to: (U = o.value[o.value.length - 2]) != null ? U : { path: i("adapter", "local") + "://" } }
      });
    }, N = (R) => {
      R.preventDefault(), k() ? R.dataTransfer.dropEffect = "copy" : (R.dataTransfer.dropEffect = "none", R.dataTransfer.effectAllowed = "none");
    }, Y = () => {
      b.value == "" && h();
    };
    return (R, A) => (y(), D("div", Qn, [
      d("span", {
        "aria-label": _(p)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (y(), D("svg", {
          onDragover: A[0] || (A[0] = (U) => N(U)),
          onDrop: A[1] || (A[1] = (U) => M(U)),
          onClick: A[2] || (A[2] = (U) => {
            var F, C;
            return !k() || _(t).emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: (C = (F = o.value[o.value.length - 2]) == null ? void 0 : F.path) != null ? C : _(i)("adapter", "local") + "://" } });
          }),
          class: de(["h-6 w-6 p-0.5 rounded", k() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ra, 34))
      ], 8, ea),
      E() ? (y(), D("span", aa, [
        (y(), D("svg", {
          onClick: A[4] || (A[4] = (U) => _(t).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, la))
      ])) : (y(), D("span", {
        key: 0,
        "aria-label": _(p)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (y(), D("svg", {
          onClick: A[3] || (A[3] = (U) => {
            _(t).emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: n.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, na))
      ], 8, ia)),
      s.value ? (y(), D("div", ya, [
        wa,
        ve(d("input", {
          ref_key: "searchInput",
          ref: f,
          onKeydown: Ye(h, ["esc"]),
          onBlur: Y,
          "onUpdate:modelValue": A[6] || (A[6] = (U) => Ni(b) ? b.value = U : null),
          placeholder: _(p)("Search anything.."),
          class: "py-0 px-2 w-full border-0 ring-0 outline-0 text-sm text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, xa), [
          [We, _(b)]
        ]),
        (y(), D("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: h,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, ka))
      ])) : (y(), D("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Pe(v, ["self"])
      }, [
        (y(), D("svg", {
          onClick: A[5] || (A[5] = (U) => _(t).emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, da)),
        d("div", ha, [
          (y(!0), D(ce, null, be(o.value, (U, F) => (y(), D("div", { key: F }, [
            fa,
            d("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: U.basename,
              onClick: (C) => _(t).emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: U.path } })
            }, T(U.name), 9, ma)
          ]))), 128))
        ]),
        E() ? (y(), D("svg", pa, ba)) : G("", !0)
      ], 8, ca))
    ]));
  }
}), Ca = ["onClick"], Ma = /* @__PURE__ */ d("span", { class: "px-1" }, null, -1), $a = {
  name: "VFContextMenu"
}, Ea = /* @__PURE__ */ Object.assign($a, {
  props: {
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), i = I(null), { apiUrl: a } = Se(), o = ft({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), s = I([]);
    t.on("vf-context-selected", (b) => {
      s.value = b;
    });
    const { t: f } = z("i18n"), p = {
      newfolder: {
        title: () => f("New Folder"),
        action: () => {
          t.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => f("Delete"),
        action: () => {
          t.emit("vf-modal-show", { type: "delete", items: s });
        }
      },
      refresh: {
        title: () => f("Refresh"),
        action: () => {
          t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => f("Preview"),
        action: () => {
          t.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: s.value[0] });
        }
      },
      open: {
        title: () => f("Open"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: s.value[0].path } });
        }
      },
      openDir: {
        title: () => f("Open containing folder"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: s.value[0].dir } });
        }
      },
      download: {
        title: () => f("Download"),
        action: () => {
          const b = a.value + "?" + Le({ q: "download", adapter: e.current.adapter, path: s.value[0].path });
          t.emit("vf-download", b);
        }
      },
      archive: {
        title: () => f("Archive"),
        action: () => {
          t.emit("vf-modal-show", { type: "archive", items: s });
        }
      },
      unarchive: {
        title: () => f("Unarchive"),
        action: () => {
          t.emit("vf-modal-show", { type: "unarchive", items: s });
        }
      },
      rename: {
        title: () => f("Rename"),
        action: () => {
          t.emit("vf-modal-show", { type: "rename", items: s });
        }
      }
    }, m = (b) => {
      t.emit("vf-contextmenu-hide"), b.action();
    }, h = I("");
    t.on("vf-search-query", ({ newQuery: b }) => {
      h.value = b;
    }), t.on("vf-contextmenu-show", ({ event: b, area: E, items: k, target: M = null }) => {
      if (o.items = [], h.value)
        if (M)
          o.items.push(p.openDir), t.emit("vf-context-selected", [M]), console.log("search item selected");
        else
          return;
      else
        !M && !h.value ? (o.items.push(p.refresh), o.items.push(p.newfolder), t.emit("vf-context-selected", []), console.log("no files selected")) : k.length > 1 && k.some((N) => N.path === M.path) ? (o.items.push(p.refresh), o.items.push(p.archive), o.items.push(p.delete), t.emit("vf-context-selected", k), console.log(k.length + " selected (more than 1 item.)")) : (M.type == "dir" ? o.items.push(p.open) : (o.items.push(p.preview), o.items.push(p.download)), o.items.push(p.rename), M.mime_type == "application/zip" ? o.items.push(p.unarchive) : o.items.push(p.archive), o.items.push(p.delete), t.emit("vf-context-selected", [M]), console.log(M.type + " is selected"));
      v(b, E);
    }), t.on("vf-contextmenu-hide", () => {
      o.active = !1;
    });
    const v = (b, E) => {
      o.active = !0, bt(() => {
        let k = E.getBoundingClientRect(), M = b.pageX, N = b.pageY, Y = i.value.offsetHeight, R = i.value.offsetWidth;
        M = k.right - b.pageX + window.scrollX < R ? M - R : M, N = k.bottom - b.pageY + window.scrollY < Y ? N - Y : N, o.positions = {
          left: M + "px",
          top: N + "px"
        };
      });
    };
    return (b, E) => o.active ? (y(), D("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: i,
      style: Er(o.positions)
    }, [
      (y(!0), D(ce, null, be(o.items, (k) => (y(), D("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: k.title,
        onClick: (M) => m(k)
      }, [
        Ma,
        d("span", null, T(k.title()), 1)
      ], 8, Ca))), 128))
    ], 4)) : G("", !0);
  }
}), Ta = (n, e) => {
  const t = n[e];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function Aa(n) {
  const e = await Ta(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.c102e439.js"), "../locales/tr.json": () => import("./tr.78c5046b.js") }), `../locales/${n}.json`);
  return JSON.parse(e.default);
}
function Oa(n, e) {
  const { getStore: t, setStore: i } = $t(n), a = ["en", "tr"], o = I({}), s = (m) => {
    a.includes(m) || (console.log("The selected locale is not yet supported. The fallback language is set as 'en'"), m = "en"), Aa(m).then((h) => {
      o.value = h, i("locale", m), i("translations", h), console.log(m + " is loaded.");
    });
  };
  t("locale") ? o.value = t("translations") : s(e);
  const f = (m, ...h) => h.length ? f(m = m.replace("%s", h.shift()), ...h) : m;
  function p(m, ...h) {
    return o.value.hasOwnProperty(m) ? f(o.value[m], ...h) : m;
  }
  return { t: p, support_locales: a, changeLocale: s };
}
const Pa = /* @__PURE__ */ d("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Ia = {
  name: "VueFinder"
}, La = /* @__PURE__ */ Object.assign(Ia, {
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
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(n) {
    const e = n, t = Vi(), { setStore: i, getStore: a } = $t(e.id);
    Ge("emitter", t), Ge("storage", $t(e.id)), Ge("postData", e.postData);
    const o = Oa(e.id, e.locale);
    Ge("i18n", o);
    const { apiUrl: s, setApiUrl: f } = Se();
    f(e.url);
    const p = ft({ adapter: "local", storages: [], dirname: ".", files: [] }), m = I(a("viewport", "grid")), h = I(a("darkMode", e.dark));
    t.on("vf-darkMode-toggle", () => {
      h.value = !h.value, i("darkMode", h.value);
    });
    const v = I(!1);
    Ge("loadingState", v);
    const b = I(a("full-screen", !1));
    t.on("vf-fullscreen-toggle", () => {
      b.value = !b.value, i("full-screen", b.value);
    }), t.on("vf-view-toggle", (N) => {
      m.value = N;
    });
    const E = ft({
      active: !1,
      type: "delete",
      data: {}
    });
    t.on("vf-modal-close", () => {
      E.active = !1;
    }), t.on("vf-modal-show", (N) => {
      E.active = !0, E.type = N.type, E.data = N;
    });
    const k = (N) => {
      Object.assign(p, N), t.emit("vf-nodes-selected", {}), t.emit("vf-explorer-update");
    };
    let M;
    return t.on("vf-fetch-abort", () => {
      M.abort(), v.value = !1;
    }), t.on("vf-fetch", ({ params: N, onSuccess: Y = null, onError: R = null }) => {
      ["index", "search"].includes(N.q) && (M && M.abort(), v.value = !0), M = new AbortController();
      const A = M.signal;
      pt(s.value, { params: N, signal: A }).then((U) => {
        ["index", "search"].includes(N.q) && (v.value = !1), t.emit("vf-modal-close"), k(U), Y(U);
      }).catch((U) => {
        R && R(U);
      }).finally(() => {
      });
    }), t.on("vf-download", (N) => {
      document.getElementById("download_frame").src = N, t.emit("vf-modal-close");
    }), xe(() => {
      t.emit("vf-fetch", { params: { q: "index", adapter: a("adapter", p.adapter) } });
    }), (N, Y) => (y(), D("div", {
      class: de(["vuefinder", h.value ? "dark" : ""])
    }, [
      d("div", {
        class: de([b.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
        style: Er(b.value ? "" : "max-height: " + n.maxHeight),
        onMousedown: Y[0] || (Y[0] = (R) => _(t).emit("vf-contextmenu-hide")),
        onTouchstart: Y[1] || (Y[1] = (R) => _(t).emit("vf-contextmenu-hide"))
      }, [
        we($o, { data: p }, null, 8, ["data"]),
        we(Da, { data: p }, null, 8, ["data"]),
        we(An, {
          view: m.value,
          data: p
        }, null, 8, ["view", "data"]),
        we(Gn, { data: p }, null, 8, ["data"])
      ], 38),
      E.active ? (y(), Z(ji("v-f-modal-" + E.type), {
        key: 0,
        selection: E.data,
        current: p
      }, null, 8, ["selection", "current"])) : G("", !0),
      we(Ea, { current: p }, null, 8, ["current"]),
      Pa
    ], 2));
  }
}), Na = /* @__PURE__ */ d("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), ja = { class: "fixed z-10 inset-0 overflow-y-auto w-screen h-screen" }, Va = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, za = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Ba = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, De = {
  __name: "ModalLayout",
  setup(n) {
    const e = z("emitter");
    return xe(() => {
      const t = document.querySelector(".v-f-modal input");
      t && t.focus();
    }), (t, i) => (y(), D("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: i[1] || (i[1] = Ye((a) => _(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Na,
      d("div", ja, [
        d("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: i[0] || (i[0] = Pe((a) => _(e).emit("vf-modal-close"), ["self"]))
        }, [
          d("div", Va, [
            d("div", za, [
              Mt(t.$slots, "default")
            ]),
            d("div", Ba, [
              Mt(t.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Ra = ["aria-label"], Ha = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ua = [
  Ha
], Ka = {
  name: "Message"
}, Ce = /* @__PURE__ */ Object.assign(Ka, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    var s;
    const { t: e } = z("i18n"), t = I(!1), i = I(null), a = I((s = i.value) == null ? void 0 : s.strMessage);
    vt(a, () => t.value = !1);
    const o = () => t.value = !0;
    return (f, p) => (y(), D("div", null, [
      t.value ? G("", !0) : (y(), D("div", {
        key: 0,
        ref_key: "strMessage",
        ref: i,
        class: de(["flex mt-1 p-1 px-2 rounded text-sm", n.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Mt(f.$slots, "default"),
        d("div", {
          class: "ml-auto cursor-pointer",
          onClick: o,
          "aria-label": _(e)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Ua, 8, Ra)
      ], 2))
    ]));
  }
}), Ya = { class: "sm:flex sm:items-start" }, Wa = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Xa = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, Fa = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, qa = { class: "mt-2" }, Ga = { class: "text-sm text-gray-500" }, Ja = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Za = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qa = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), es = [
  Qa
], ts = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, rs = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), is = [
  rs
], os = { class: "ml-1.5" }, ns = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, as = {
  name: "VFModalDelete"
}, ss = /* @__PURE__ */ Object.assign(as, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n"), o = I(e.selection.items), s = I(""), f = () => {
      o.value.length && t.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          items: JSON.stringify(o.value.map(({ path: p, type: m }) => ({ path: p, type: m })))
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (p) => {
          s.value = a(p.message);
        }
      });
    };
    return (p, m) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Yes, Delete!")), 1),
        d("button", {
          type: "button",
          onClick: m[0] || (m[0] = (h) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1),
        d("div", ns, T(_(a)("This action cannot be undone.")), 1)
      ]),
      default: J(() => [
        d("div", Ya, [
          Wa,
          d("div", Xa, [
            d("h3", Fa, T(_(a)("Delete files")), 1),
            d("div", qa, [
              d("p", Ga, T(_(a)("Are you sure you want to delete these files?")), 1),
              (y(!0), D(ce, null, be(o.value, (h) => (y(), D("p", Ja, [
                h.type == "dir" ? (y(), D("svg", Za, es)) : (y(), D("svg", ts, is)),
                d("span", os, T(h.basename), 1)
              ]))), 256)),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ls = { class: "sm:flex sm:items-start" }, cs = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), us = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, ds = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, hs = { class: "mt-2" }, fs = { class: "text-sm text-gray-500" }, ms = {
  name: "VFModalMessage"
}, ps = /* @__PURE__ */ Object.assign(ms, {
  props: {
    selection: Object
  },
  setup(n) {
    const e = z("emitter"), { t } = z("i18n");
    return (i, a) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: a[0] || (a[0] = (o) => _(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(t)("Close")), 1)
      ]),
      default: J(() => {
        var o, s, f, p;
        return [
          d("div", ls, [
            cs,
            d("div", us, [
              d("h3", ds, T((s = (o = n.selection) == null ? void 0 : o.title) != null ? s : "Title"), 1),
              d("div", hs, [
                d("p", fs, T((p = (f = n.selection) == null ? void 0 : f.message) != null ? p : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), gs = { class: "sm:flex sm:items-start" }, vs = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), bs = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ys = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ws = { class: "mt-2" }, xs = { class: "text-sm text-gray-500" }, _s = ["onKeyup", "placeholder"], ks = {
  name: "VFModalNewFolder"
}, Ss = /* @__PURE__ */ Object.assign(ks, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n"), o = I(""), s = I(""), f = () => {
      o.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          name: o.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is created.", o.value) });
        },
        onError: (p) => {
          s.value = a(p.message);
        }
      });
    };
    return (p, m) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: m[1] || (m[1] = (h) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", gs, [
          vs,
          d("div", bs, [
            d("h3", ys, T(_(a)("New Folder")), 1),
            d("div", ws, [
              d("p", xs, T(_(a)("Create a new folder")), 1),
              ve(d("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (h) => o.value = h),
                onKeyup: Ye(f, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-500 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("Folder Name"),
                type: "text"
              }, null, 40, _s), [
                [We, o.value]
              ]),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ds = { class: "sm:flex sm:items-start" }, Cs = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Ms = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, $s = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Es = { class: "mt-2" }, Ts = { class: "text-sm text-gray-500" }, As = ["onKeyup", "placeholder"], Os = {
  name: "VFModalNewFile"
}, Ps = /* @__PURE__ */ Object.assign(Os, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n"), o = I(""), s = I(""), f = () => {
      o.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          name: o.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is created.", o.value) });
        },
        onError: (p) => {
          s.value = a(p.message);
        }
      });
    };
    return (p, m) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, "Create!"),
        d("button", {
          type: "button",
          onClick: m[1] || (m[1] = (h) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, "Cancel")
      ]),
      default: J(() => [
        d("div", Ds, [
          Cs,
          d("div", Ms, [
            d("h3", $s, T(_(a)("New File")), 1),
            d("div", Es, [
              d("p", Ts, T(_(a)("Create a new file")), 1),
              ve(d("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (h) => o.value = h),
                onKeyup: Ye(f, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-500 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("File Name"),
                type: "text"
              }, null, 40, As), [
                [We, o.value]
              ]),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Is = { class: "flex" }, Ls = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ns = { class: "ml-auto mb-2" }, js = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Vs = { key: 1 }, zs = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    const t = n, i = I(""), a = I(""), o = I(null), s = I(!1), { apiUrl: f } = Se(), p = I(""), m = I(!1), { t: h } = z("i18n");
    xe(() => {
      pt(f.value, {
        params: { q: "preview", adapter: t.selection.adapter, path: t.selection.item.path },
        json: !1
      }).then((k) => {
        i.value = k, e("load");
      });
    });
    const v = () => {
      s.value = !s.value, a.value = i.value, s.value == !0 && bt(() => {
        o.value.focus();
      });
    }, b = z("postData"), E = () => {
      p.value = "", m.value = !1, pt(f.value, {
        method: "POST",
        params: Object.assign(b, {
          q: "save",
          adapter: t.selection.adapter,
          path: t.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((k) => {
        p.value = h("Updated."), i.value = k, e("load"), s.value = !s.value;
      }).catch((k) => {
        p.value = h(k.message), m.value = !0;
      });
    };
    return (k, M) => (y(), D(ce, null, [
      d("div", Is, [
        d("div", Ls, T(n.selection.item.basename), 1),
        d("div", Ns, [
          s.value ? (y(), D("button", {
            key: 0,
            onClick: E,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, T(_(h)("Save")), 1)) : G("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (N) => v())
          }, T(s.value ? _(h)("Cancel") : _(h)("Edit")), 1)
        ])
      ]),
      d("div", null, [
        s.value ? (y(), D("div", Vs, [
          ve(d("textarea", {
            ref_key: "editInput",
            ref: o,
            "onUpdate:modelValue": M[1] || (M[1] = (N) => a.value = N),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [We, a.value]
          ])
        ])) : (y(), D("pre", js, T(i.value), 1)),
        p.value.length ? (y(), Z(Ce, {
          key: 2,
          error: m.value
        }, {
          default: J(() => [
            le(T(p.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : G("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
function hr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Ar(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hr(Object(t), !0).forEach(function(i) {
      Hs(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : hr(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function ht(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ht = function(e) {
    return typeof e;
  } : ht = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ht(n);
}
function Bs(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fr(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);
  }
}
function Rs(n, e, t) {
  return e && fr(n.prototype, e), t && fr(n, t), n;
}
function Hs(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Or(n) {
  return Us(n) || Ks(n) || Ys(n) || Ws();
}
function Us(n) {
  if (Array.isArray(n))
    return Tt(n);
}
function Ks(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function Ys(n, e) {
  if (!!n) {
    if (typeof n == "string")
      return Tt(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Tt(n, e);
  }
}
function Tt(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, i = new Array(e); t < e; t++)
    i[t] = n[t];
  return i;
}
function Ws() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yt = typeof window < "u" && typeof window.document < "u", ke = yt ? window : {}, zt = yt && ke.document.documentElement ? "ontouchstart" in ke.document.documentElement : !1, Bt = yt ? "PointerEvent" in ke : !1, te = "cropper", Rt = "all", Pr = "crop", Ir = "move", Lr = "zoom", Ae = "e", Oe = "w", Be = "s", $e = "n", Je = "ne", Ze = "nw", Qe = "se", et = "sw", At = "".concat(te, "-crop"), mr = "".concat(te, "-disabled"), fe = "".concat(te, "-hidden"), pr = "".concat(te, "-hide"), Xs = "".concat(te, "-invisible"), gt = "".concat(te, "-modal"), Ot = "".concat(te, "-move"), rt = "".concat(te, "Action"), ut = "".concat(te, "Preview"), Ht = "crop", Nr = "move", jr = "none", Pt = "crop", It = "cropend", Lt = "cropmove", Nt = "cropstart", gr = "dblclick", Fs = zt ? "touchstart" : "mousedown", qs = zt ? "touchmove" : "mousemove", Gs = zt ? "touchend touchcancel" : "mouseup", vr = Bt ? "pointerdown" : Fs, br = Bt ? "pointermove" : qs, yr = Bt ? "pointerup pointercancel" : Gs, wr = "ready", xr = "resize", _r = "wheel", jt = "zoom", kr = "image/jpeg", Js = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Zs = /^data:/, Qs = /^data:image\/jpeg;base64,/, el = /^img|canvas$/i, Vr = 200, zr = 100, Sr = {
  viewMode: 0,
  dragMode: Ht,
  initialAspectRatio: NaN,
  aspectRatio: NaN,
  data: null,
  preview: "",
  responsive: !0,
  restore: !0,
  checkCrossOrigin: !0,
  checkOrientation: !0,
  modal: !0,
  guides: !0,
  center: !0,
  highlight: !0,
  background: !0,
  autoCrop: !0,
  autoCropArea: 0.8,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  wheelZoomRatio: 0.1,
  cropBoxMovable: !0,
  cropBoxResizable: !0,
  toggleDragModeOnDblclick: !0,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Vr,
  minContainerHeight: zr,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, tl = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', rl = Number.isNaN || ke.isNaN;
function X(n) {
  return typeof n == "number" && !rl(n);
}
var Dr = function(e) {
  return e > 0 && e < 1 / 0;
};
function St(n) {
  return typeof n > "u";
}
function Ie(n) {
  return ht(n) === "object" && n !== null;
}
var il = Object.prototype.hasOwnProperty;
function Re(n) {
  if (!Ie(n))
    return !1;
  try {
    var e = n.constructor, t = e.prototype;
    return e && t && il.call(t, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function he(n) {
  return typeof n == "function";
}
var ol = Array.prototype.slice;
function Br(n) {
  return Array.from ? Array.from(n) : ol.call(n);
}
function ae(n, e) {
  return n && he(e) && (Array.isArray(n) || X(n.length) ? Br(n).forEach(function(t, i) {
    e.call(n, t, i, n);
  }) : Ie(n) && Object.keys(n).forEach(function(t) {
    e.call(n, n[t], t, n);
  })), n;
}
var re = Object.assign || function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    i[a - 1] = arguments[a];
  return Ie(e) && i.length > 0 && i.forEach(function(o) {
    Ie(o) && Object.keys(o).forEach(function(s) {
      e[s] = o[s];
    });
  }), e;
}, nl = /\.\d*(?:0|9){12}\d*$/;
function Ue(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return nl.test(n) ? Math.round(n * e) / e : n;
}
var al = /^width|height|left|top|marginLeft|marginTop$/;
function Ee(n, e) {
  var t = n.style;
  ae(e, function(i, a) {
    al.test(a) && X(i) && (i = "".concat(i, "px")), t[a] = i;
  });
}
function sl(n, e) {
  return n.classList ? n.classList.contains(e) : n.className.indexOf(e) > -1;
}
function se(n, e) {
  if (!!e) {
    if (X(n.length)) {
      ae(n, function(i) {
        se(i, e);
      });
      return;
    }
    if (n.classList) {
      n.classList.add(e);
      return;
    }
    var t = n.className.trim();
    t ? t.indexOf(e) < 0 && (n.className = "".concat(t, " ").concat(e)) : n.className = e;
  }
}
function _e(n, e) {
  if (!!e) {
    if (X(n.length)) {
      ae(n, function(t) {
        _e(t, e);
      });
      return;
    }
    if (n.classList) {
      n.classList.remove(e);
      return;
    }
    n.className.indexOf(e) >= 0 && (n.className = n.className.replace(e, ""));
  }
}
function He(n, e, t) {
  if (!!e) {
    if (X(n.length)) {
      ae(n, function(i) {
        He(i, e, t);
      });
      return;
    }
    t ? se(n, e) : _e(n, e);
  }
}
var ll = /([a-z\d])([A-Z])/g;
function Ut(n) {
  return n.replace(ll, "$1-$2").toLowerCase();
}
function Vt(n, e) {
  return Ie(n[e]) ? n[e] : n.dataset ? n.dataset[e] : n.getAttribute("data-".concat(Ut(e)));
}
function it(n, e, t) {
  Ie(t) ? n[e] = t : n.dataset ? n.dataset[e] = t : n.setAttribute("data-".concat(Ut(e)), t);
}
function cl(n, e) {
  if (Ie(n[e]))
    try {
      delete n[e];
    } catch {
      n[e] = void 0;
    }
  else if (n.dataset)
    try {
      delete n.dataset[e];
    } catch {
      n.dataset[e] = void 0;
    }
  else
    n.removeAttribute("data-".concat(Ut(e)));
}
var Rr = /\s\s*/, Hr = function() {
  var n = !1;
  if (yt) {
    var e = !1, t = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return n = !0, e;
      },
      set: function(o) {
        e = o;
      }
    });
    ke.addEventListener("test", t, i), ke.removeEventListener("test", t, i);
  }
  return n;
}();
function ye(n, e, t) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = t;
  e.trim().split(Rr).forEach(function(o) {
    if (!Hr) {
      var s = n.listeners;
      s && s[o] && s[o][t] && (a = s[o][t], delete s[o][t], Object.keys(s[o]).length === 0 && delete s[o], Object.keys(s).length === 0 && delete n.listeners);
    }
    n.removeEventListener(o, a, i);
  });
}
function ge(n, e, t) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = t;
  e.trim().split(Rr).forEach(function(o) {
    if (i.once && !Hr) {
      var s = n.listeners, f = s === void 0 ? {} : s;
      a = function() {
        delete f[o][t], n.removeEventListener(o, a, i);
        for (var m = arguments.length, h = new Array(m), v = 0; v < m; v++)
          h[v] = arguments[v];
        t.apply(n, h);
      }, f[o] || (f[o] = {}), f[o][t] && n.removeEventListener(o, f[o][t], i), f[o][t] = a, n.listeners = f;
    }
    n.addEventListener(o, a, i);
  });
}
function Ke(n, e, t) {
  var i;
  return he(Event) && he(CustomEvent) ? i = new CustomEvent(e, {
    detail: t,
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, !0, !0, t)), n.dispatchEvent(i);
}
function Ur(n) {
  var e = n.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Dt = ke.location, ul = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Cr(n) {
  var e = n.match(ul);
  return e !== null && (e[1] !== Dt.protocol || e[2] !== Dt.hostname || e[3] !== Dt.port);
}
function Mr(n) {
  var e = "timestamp=".concat(new Date().getTime());
  return n + (n.indexOf("?") === -1 ? "?" : "&") + e;
}
function tt(n) {
  var e = n.rotate, t = n.scaleX, i = n.scaleY, a = n.translateX, o = n.translateY, s = [];
  X(a) && a !== 0 && s.push("translateX(".concat(a, "px)")), X(o) && o !== 0 && s.push("translateY(".concat(o, "px)")), X(e) && e !== 0 && s.push("rotate(".concat(e, "deg)")), X(t) && t !== 1 && s.push("scaleX(".concat(t, ")")), X(i) && i !== 1 && s.push("scaleY(".concat(i, ")"));
  var f = s.length ? s.join(" ") : "none";
  return {
    WebkitTransform: f,
    msTransform: f,
    transform: f
  };
}
function dl(n) {
  var e = Ar({}, n), t = 0;
  return ae(n, function(i, a) {
    delete e[a], ae(e, function(o) {
      var s = Math.abs(i.startX - o.startX), f = Math.abs(i.startY - o.startY), p = Math.abs(i.endX - o.endX), m = Math.abs(i.endY - o.endY), h = Math.sqrt(s * s + f * f), v = Math.sqrt(p * p + m * m), b = (v - h) / h;
      Math.abs(b) > Math.abs(t) && (t = b);
    });
  }), t;
}
function dt(n, e) {
  var t = n.pageX, i = n.pageY, a = {
    endX: t,
    endY: i
  };
  return e ? a : Ar({
    startX: t,
    startY: i
  }, a);
}
function hl(n) {
  var e = 0, t = 0, i = 0;
  return ae(n, function(a) {
    var o = a.startX, s = a.startY;
    e += o, t += s, i += 1;
  }), e /= i, t /= i, {
    pageX: e,
    pageY: t
  };
}
function Te(n) {
  var e = n.aspectRatio, t = n.height, i = n.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", o = Dr(i), s = Dr(t);
  if (o && s) {
    var f = t * e;
    a === "contain" && f > i || a === "cover" && f < i ? t = i / e : i = t * e;
  } else
    o ? t = i / e : s && (i = t * e);
  return {
    width: i,
    height: t
  };
}
function fl(n) {
  var e = n.width, t = n.height, i = n.degree;
  if (i = Math.abs(i) % 180, i === 90)
    return {
      width: t,
      height: e
    };
  var a = i % 90 * Math.PI / 180, o = Math.sin(a), s = Math.cos(a), f = e * s + t * o, p = e * o + t * s;
  return i > 90 ? {
    width: p,
    height: f
  } : {
    width: f,
    height: p
  };
}
function ml(n, e, t, i) {
  var a = e.aspectRatio, o = e.naturalWidth, s = e.naturalHeight, f = e.rotate, p = f === void 0 ? 0 : f, m = e.scaleX, h = m === void 0 ? 1 : m, v = e.scaleY, b = v === void 0 ? 1 : v, E = t.aspectRatio, k = t.naturalWidth, M = t.naturalHeight, N = i.fillColor, Y = N === void 0 ? "transparent" : N, R = i.imageSmoothingEnabled, A = R === void 0 ? !0 : R, U = i.imageSmoothingQuality, F = U === void 0 ? "low" : U, C = i.maxWidth, q = C === void 0 ? 1 / 0 : C, ee = i.maxHeight, ue = ee === void 0 ? 1 / 0 : ee, me = i.minWidth, L = me === void 0 ? 0 : me, B = i.minHeight, j = B === void 0 ? 0 : B, W = document.createElement("canvas"), H = W.getContext("2d"), oe = Te({
    aspectRatio: E,
    width: q,
    height: ue
  }), Q = Te({
    aspectRatio: E,
    width: L,
    height: j
  }, "cover"), Xe = Math.min(oe.width, Math.max(Q.width, k)), Fe = Math.min(oe.height, Math.max(Q.height, M)), ot = Te({
    aspectRatio: a,
    width: q,
    height: ue
  }), nt = Te({
    aspectRatio: a,
    width: L,
    height: j
  }, "cover"), at = Math.min(ot.width, Math.max(nt.width, o)), Ne = Math.min(ot.height, Math.max(nt.height, s)), wt = [-at / 2, -Ne / 2, at, Ne];
  return W.width = Ue(Xe), W.height = Ue(Fe), H.fillStyle = Y, H.fillRect(0, 0, Xe, Fe), H.save(), H.translate(Xe / 2, Fe / 2), H.rotate(p * Math.PI / 180), H.scale(h, b), H.imageSmoothingEnabled = A, H.imageSmoothingQuality = F, H.drawImage.apply(H, [n].concat(Or(wt.map(function(je) {
    return Math.floor(Ue(je));
  })))), H.restore(), W;
}
var Kr = String.fromCharCode;
function pl(n, e, t) {
  var i = "";
  t += e;
  for (var a = e; a < t; a += 1)
    i += Kr(n.getUint8(a));
  return i;
}
var gl = /^data:.*,/;
function vl(n) {
  var e = n.replace(gl, ""), t = atob(e), i = new ArrayBuffer(t.length), a = new Uint8Array(i);
  return ae(a, function(o, s) {
    a[s] = t.charCodeAt(s);
  }), i;
}
function bl(n, e) {
  for (var t = [], i = 8192, a = new Uint8Array(n); a.length > 0; )
    t.push(Kr.apply(null, Br(a.subarray(0, i)))), a = a.subarray(i);
  return "data:".concat(e, ";base64,").concat(btoa(t.join("")));
}
function yl(n) {
  var e = new DataView(n), t;
  try {
    var i, a, o;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var s = e.byteLength, f = 2; f + 1 < s; ) {
        if (e.getUint8(f) === 255 && e.getUint8(f + 1) === 225) {
          a = f;
          break;
        }
        f += 1;
      }
    if (a) {
      var p = a + 4, m = a + 10;
      if (pl(e, p, 4) === "Exif") {
        var h = e.getUint16(m);
        if (i = h === 18761, (i || h === 19789) && e.getUint16(m + 2, i) === 42) {
          var v = e.getUint32(m + 4, i);
          v >= 8 && (o = m + v);
        }
      }
    }
    if (o) {
      var b = e.getUint16(o, i), E, k;
      for (k = 0; k < b; k += 1)
        if (E = o + k * 12 + 2, e.getUint16(E, i) === 274) {
          E += 8, t = e.getUint16(E, i), e.setUint16(E, 1, i);
          break;
        }
    }
  } catch {
    t = 1;
  }
  return t;
}
function wl(n) {
  var e = 0, t = 1, i = 1;
  switch (n) {
    case 2:
      t = -1;
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
      e = 90, t = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: t,
    scaleY: i
  };
}
var xl = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, t = this.options, i = this.container, a = this.cropper, o = Number(t.minContainerWidth), s = Number(t.minContainerHeight);
    se(a, fe), _e(e, fe);
    var f = {
      width: Math.max(i.offsetWidth, o >= 0 ? o : Vr),
      height: Math.max(i.offsetHeight, s >= 0 ? s : zr)
    };
    this.containerData = f, Ee(a, {
      width: f.width,
      height: f.height
    }), se(e, fe), _e(a, fe);
  },
  initCanvas: function() {
    var e = this.containerData, t = this.imageData, i = this.options.viewMode, a = Math.abs(t.rotate) % 180 === 90, o = a ? t.naturalHeight : t.naturalWidth, s = a ? t.naturalWidth : t.naturalHeight, f = o / s, p = e.width, m = e.height;
    e.height * f > e.width ? i === 3 ? p = e.height * f : m = e.width / f : i === 3 ? m = e.width / f : p = e.height * f;
    var h = {
      aspectRatio: f,
      naturalWidth: o,
      naturalHeight: s,
      width: p,
      height: m
    };
    this.canvasData = h, this.limited = i === 1 || i === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (e.width - h.width) / 2, h.top = (e.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = re({}, h);
  },
  limitCanvas: function(e, t) {
    var i = this.options, a = this.containerData, o = this.canvasData, s = this.cropBoxData, f = i.viewMode, p = o.aspectRatio, m = this.cropped && s;
    if (e) {
      var h = Number(i.minCanvasWidth) || 0, v = Number(i.minCanvasHeight) || 0;
      f > 1 ? (h = Math.max(h, a.width), v = Math.max(v, a.height), f === 3 && (v * p > h ? h = v * p : v = h / p)) : f > 0 && (h ? h = Math.max(h, m ? s.width : 0) : v ? v = Math.max(v, m ? s.height : 0) : m && (h = s.width, v = s.height, v * p > h ? h = v * p : v = h / p));
      var b = Te({
        aspectRatio: p,
        width: h,
        height: v
      });
      h = b.width, v = b.height, o.minWidth = h, o.minHeight = v, o.maxWidth = 1 / 0, o.maxHeight = 1 / 0;
    }
    if (t)
      if (f > (m ? 0 : 1)) {
        var E = a.width - o.width, k = a.height - o.height;
        o.minLeft = Math.min(0, E), o.minTop = Math.min(0, k), o.maxLeft = Math.max(0, E), o.maxTop = Math.max(0, k), m && this.limited && (o.minLeft = Math.min(s.left, s.left + (s.width - o.width)), o.minTop = Math.min(s.top, s.top + (s.height - o.height)), o.maxLeft = s.left, o.maxTop = s.top, f === 2 && (o.width >= a.width && (o.minLeft = Math.min(0, E), o.maxLeft = Math.max(0, E)), o.height >= a.height && (o.minTop = Math.min(0, k), o.maxTop = Math.max(0, k))));
      } else
        o.minLeft = -o.width, o.minTop = -o.height, o.maxLeft = a.width, o.maxTop = a.height;
  },
  renderCanvas: function(e, t) {
    var i = this.canvasData, a = this.imageData;
    if (t) {
      var o = fl({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), s = o.width, f = o.height, p = i.width * (s / i.naturalWidth), m = i.height * (f / i.naturalHeight);
      i.left -= (p - i.width) / 2, i.top -= (m - i.height) / 2, i.width = p, i.height = m, i.aspectRatio = s / f, i.naturalWidth = s, i.naturalHeight = f, this.limitCanvas(!0, !1);
    }
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, Ee(this.canvas, re({
      width: i.width,
      height: i.height
    }, tt({
      translateX: i.left,
      translateY: i.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var t = this.canvasData, i = this.imageData, a = i.naturalWidth * (t.width / t.naturalWidth), o = i.naturalHeight * (t.height / t.naturalHeight);
    re(i, {
      width: a,
      height: o,
      left: (t.width - a) / 2,
      top: (t.height - o) / 2
    }), Ee(this.image, re({
      width: i.width,
      height: i.height
    }, tt(re({
      translateX: i.left,
      translateY: i.top
    }, i)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, t = this.canvasData, i = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, o = {
      width: t.width,
      height: t.height
    };
    i && (t.height * i > t.width ? o.height = o.width / i : o.width = o.height * i), this.cropBoxData = o, this.limitCropBox(!0, !0), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), o.width = Math.max(o.minWidth, o.width * a), o.height = Math.max(o.minHeight, o.height * a), o.left = t.left + (t.width - o.width) / 2, o.top = t.top + (t.height - o.height) / 2, o.oldLeft = o.left, o.oldTop = o.top, this.initialCropBoxData = re({}, o);
  },
  limitCropBox: function(e, t) {
    var i = this.options, a = this.containerData, o = this.canvasData, s = this.cropBoxData, f = this.limited, p = i.aspectRatio;
    if (e) {
      var m = Number(i.minCropBoxWidth) || 0, h = Number(i.minCropBoxHeight) || 0, v = f ? Math.min(a.width, o.width, o.width + o.left, a.width - o.left) : a.width, b = f ? Math.min(a.height, o.height, o.height + o.top, a.height - o.top) : a.height;
      m = Math.min(m, a.width), h = Math.min(h, a.height), p && (m && h ? h * p > m ? h = m / p : m = h * p : m ? h = m / p : h && (m = h * p), b * p > v ? b = v / p : v = b * p), s.minWidth = Math.min(m, v), s.minHeight = Math.min(h, b), s.maxWidth = v, s.maxHeight = b;
    }
    t && (f ? (s.minLeft = Math.max(0, o.left), s.minTop = Math.max(0, o.top), s.maxLeft = Math.min(a.width, o.left + o.width) - s.width, s.maxTop = Math.min(a.height, o.top + o.height) - s.height) : (s.minLeft = 0, s.minTop = 0, s.maxLeft = a.width - s.width, s.maxTop = a.height - s.height));
  },
  renderCropBox: function() {
    var e = this.options, t = this.containerData, i = this.cropBoxData;
    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, e.movable && e.cropBoxMovable && it(this.face, rt, i.width >= t.width && i.height >= t.height ? Ir : Rt), Ee(this.cropBox, re({
      width: i.width,
      height: i.height
    }, tt({
      translateX: i.left,
      translateY: i.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), Ke(this.element, Pt, this.getData());
  }
}, _l = {
  initPreview: function() {
    var e = this.element, t = this.crossOrigin, i = this.options.preview, a = t ? this.crossOriginUrl : this.url, o = e.alt || "The image to preview", s = document.createElement("img");
    if (t && (s.crossOrigin = t), s.src = a, s.alt = o, this.viewBox.appendChild(s), this.viewBoxImage = s, !!i) {
      var f = i;
      typeof i == "string" ? f = e.ownerDocument.querySelectorAll(i) : i.querySelector && (f = [i]), this.previews = f, ae(f, function(p) {
        var m = document.createElement("img");
        it(p, ut, {
          width: p.offsetWidth,
          height: p.offsetHeight,
          html: p.innerHTML
        }), t && (m.crossOrigin = t), m.src = a, m.alt = o, m.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', p.innerHTML = "", p.appendChild(m);
      });
    }
  },
  resetPreview: function() {
    ae(this.previews, function(e) {
      var t = Vt(e, ut);
      Ee(e, {
        width: t.width,
        height: t.height
      }), e.innerHTML = t.html, cl(e, ut);
    });
  },
  preview: function() {
    var e = this.imageData, t = this.canvasData, i = this.cropBoxData, a = i.width, o = i.height, s = e.width, f = e.height, p = i.left - t.left - e.left, m = i.top - t.top - e.top;
    !this.cropped || this.disabled || (Ee(this.viewBoxImage, re({
      width: s,
      height: f
    }, tt(re({
      translateX: -p,
      translateY: -m
    }, e)))), ae(this.previews, function(h) {
      var v = Vt(h, ut), b = v.width, E = v.height, k = b, M = E, N = 1;
      a && (N = b / a, M = o * N), o && M > E && (N = E / o, k = a * N, M = E), Ee(h, {
        width: k,
        height: M
      }), Ee(h.getElementsByTagName("img")[0], re({
        width: s * N,
        height: f * N
      }, tt(re({
        translateX: -p * N,
        translateY: -m * N
      }, e))));
    }));
  }
}, kl = {
  bind: function() {
    var e = this.element, t = this.options, i = this.cropper;
    he(t.cropstart) && ge(e, Nt, t.cropstart), he(t.cropmove) && ge(e, Lt, t.cropmove), he(t.cropend) && ge(e, It, t.cropend), he(t.crop) && ge(e, Pt, t.crop), he(t.zoom) && ge(e, jt, t.zoom), ge(i, vr, this.onCropStart = this.cropStart.bind(this)), t.zoomable && t.zoomOnWheel && ge(i, _r, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), t.toggleDragModeOnDblclick && ge(i, gr, this.onDblclick = this.dblclick.bind(this)), ge(e.ownerDocument, br, this.onCropMove = this.cropMove.bind(this)), ge(e.ownerDocument, yr, this.onCropEnd = this.cropEnd.bind(this)), t.responsive && ge(window, xr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, t = this.options, i = this.cropper;
    he(t.cropstart) && ye(e, Nt, t.cropstart), he(t.cropmove) && ye(e, Lt, t.cropmove), he(t.cropend) && ye(e, It, t.cropend), he(t.crop) && ye(e, Pt, t.crop), he(t.zoom) && ye(e, jt, t.zoom), ye(i, vr, this.onCropStart), t.zoomable && t.zoomOnWheel && ye(i, _r, this.onWheel, {
      passive: !1,
      capture: !0
    }), t.toggleDragModeOnDblclick && ye(i, gr, this.onDblclick), ye(e.ownerDocument, br, this.onCropMove), ye(e.ownerDocument, yr, this.onCropEnd), t.responsive && ye(window, xr, this.onResize);
  }
}, Sl = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, t = this.container, i = this.containerData, a = t.offsetWidth / i.width, o = t.offsetHeight / i.height, s = Math.abs(a - 1) > Math.abs(o - 1) ? a : o;
      if (s !== 1) {
        var f, p;
        e.restore && (f = this.getCanvasData(), p = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(ae(f, function(m, h) {
          f[h] = m * s;
        })), this.setCropBoxData(ae(p, function(m, h) {
          p[h] = m * s;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === jr || this.setDragMode(sl(this.dragBox, At) ? Nr : Ht);
  },
  wheel: function(e) {
    var t = this, i = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      t.wheeling = !1;
    }, 50), e.deltaY ? a = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? a = -e.wheelDelta / 120 : e.detail && (a = e.detail > 0 ? 1 : -1), this.zoom(-a * i, e)));
  },
  cropStart: function(e) {
    var t = e.buttons, i = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && (X(t) && t !== 1 || X(i) && i !== 0 || e.ctrlKey))) {
      var a = this.options, o = this.pointers, s;
      e.changedTouches ? ae(e.changedTouches, function(f) {
        o[f.identifier] = dt(f);
      }) : o[e.pointerId || 0] = dt(e), Object.keys(o).length > 1 && a.zoomable && a.zoomOnTouch ? s = Lr : s = Vt(e.target, rt), !!Js.test(s) && Ke(this.element, Nt, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.preventDefault(), this.action = s, this.cropping = !1, s === Pr && (this.cropping = !0, se(this.dragBox, gt)));
    }
  },
  cropMove: function(e) {
    var t = this.action;
    if (!(this.disabled || !t)) {
      var i = this.pointers;
      e.preventDefault(), Ke(this.element, Lt, {
        originalEvent: e,
        action: t
      }) !== !1 && (e.changedTouches ? ae(e.changedTouches, function(a) {
        re(i[a.identifier] || {}, dt(a, !0));
      }) : re(i[e.pointerId || 0] || {}, dt(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var t = this.action, i = this.pointers;
      e.changedTouches ? ae(e.changedTouches, function(a) {
        delete i[a.identifier];
      }) : delete i[e.pointerId || 0], t && (e.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, He(this.dragBox, gt, this.cropped && this.options.modal)), Ke(this.element, It, {
        originalEvent: e,
        action: t
      }));
    }
  }
}, Dl = {
  change: function(e) {
    var t = this.options, i = this.canvasData, a = this.containerData, o = this.cropBoxData, s = this.pointers, f = this.action, p = t.aspectRatio, m = o.left, h = o.top, v = o.width, b = o.height, E = m + v, k = h + b, M = 0, N = 0, Y = a.width, R = a.height, A = !0, U;
    !p && e.shiftKey && (p = v && b ? v / b : 1), this.limited && (M = o.minLeft, N = o.minTop, Y = M + Math.min(a.width, i.width, i.left + i.width), R = N + Math.min(a.height, i.height, i.top + i.height));
    var F = s[Object.keys(s)[0]], C = {
      x: F.endX - F.startX,
      y: F.endY - F.startY
    }, q = function(ue) {
      switch (ue) {
        case Ae:
          E + C.x > Y && (C.x = Y - E);
          break;
        case Oe:
          m + C.x < M && (C.x = M - m);
          break;
        case $e:
          h + C.y < N && (C.y = N - h);
          break;
        case Be:
          k + C.y > R && (C.y = R - k);
          break;
      }
    };
    switch (f) {
      case Rt:
        m += C.x, h += C.y;
        break;
      case Ae:
        if (C.x >= 0 && (E >= Y || p && (h <= N || k >= R))) {
          A = !1;
          break;
        }
        q(Ae), v += C.x, v < 0 && (f = Oe, v = -v, m -= v), p && (b = v / p, h += (o.height - b) / 2);
        break;
      case $e:
        if (C.y <= 0 && (h <= N || p && (m <= M || E >= Y))) {
          A = !1;
          break;
        }
        q($e), b -= C.y, h += C.y, b < 0 && (f = Be, b = -b, h -= b), p && (v = b * p, m += (o.width - v) / 2);
        break;
      case Oe:
        if (C.x <= 0 && (m <= M || p && (h <= N || k >= R))) {
          A = !1;
          break;
        }
        q(Oe), v -= C.x, m += C.x, v < 0 && (f = Ae, v = -v, m -= v), p && (b = v / p, h += (o.height - b) / 2);
        break;
      case Be:
        if (C.y >= 0 && (k >= R || p && (m <= M || E >= Y))) {
          A = !1;
          break;
        }
        q(Be), b += C.y, b < 0 && (f = $e, b = -b, h -= b), p && (v = b * p, m += (o.width - v) / 2);
        break;
      case Je:
        if (p) {
          if (C.y <= 0 && (h <= N || E >= Y)) {
            A = !1;
            break;
          }
          q($e), b -= C.y, h += C.y, v = b * p;
        } else
          q($e), q(Ae), C.x >= 0 ? E < Y ? v += C.x : C.y <= 0 && h <= N && (A = !1) : v += C.x, C.y <= 0 ? h > N && (b -= C.y, h += C.y) : (b -= C.y, h += C.y);
        v < 0 && b < 0 ? (f = et, b = -b, v = -v, h -= b, m -= v) : v < 0 ? (f = Ze, v = -v, m -= v) : b < 0 && (f = Qe, b = -b, h -= b);
        break;
      case Ze:
        if (p) {
          if (C.y <= 0 && (h <= N || m <= M)) {
            A = !1;
            break;
          }
          q($e), b -= C.y, h += C.y, v = b * p, m += o.width - v;
        } else
          q($e), q(Oe), C.x <= 0 ? m > M ? (v -= C.x, m += C.x) : C.y <= 0 && h <= N && (A = !1) : (v -= C.x, m += C.x), C.y <= 0 ? h > N && (b -= C.y, h += C.y) : (b -= C.y, h += C.y);
        v < 0 && b < 0 ? (f = Qe, b = -b, v = -v, h -= b, m -= v) : v < 0 ? (f = Je, v = -v, m -= v) : b < 0 && (f = et, b = -b, h -= b);
        break;
      case et:
        if (p) {
          if (C.x <= 0 && (m <= M || k >= R)) {
            A = !1;
            break;
          }
          q(Oe), v -= C.x, m += C.x, b = v / p;
        } else
          q(Be), q(Oe), C.x <= 0 ? m > M ? (v -= C.x, m += C.x) : C.y >= 0 && k >= R && (A = !1) : (v -= C.x, m += C.x), C.y >= 0 ? k < R && (b += C.y) : b += C.y;
        v < 0 && b < 0 ? (f = Je, b = -b, v = -v, h -= b, m -= v) : v < 0 ? (f = Qe, v = -v, m -= v) : b < 0 && (f = Ze, b = -b, h -= b);
        break;
      case Qe:
        if (p) {
          if (C.x >= 0 && (E >= Y || k >= R)) {
            A = !1;
            break;
          }
          q(Ae), v += C.x, b = v / p;
        } else
          q(Be), q(Ae), C.x >= 0 ? E < Y ? v += C.x : C.y >= 0 && k >= R && (A = !1) : v += C.x, C.y >= 0 ? k < R && (b += C.y) : b += C.y;
        v < 0 && b < 0 ? (f = Ze, b = -b, v = -v, h -= b, m -= v) : v < 0 ? (f = et, v = -v, m -= v) : b < 0 && (f = Je, b = -b, h -= b);
        break;
      case Ir:
        this.move(C.x, C.y), A = !1;
        break;
      case Lr:
        this.zoom(dl(s), e), A = !1;
        break;
      case Pr:
        if (!C.x || !C.y) {
          A = !1;
          break;
        }
        U = Ur(this.cropper), m = F.startX - U.left, h = F.startY - U.top, v = o.minWidth, b = o.minHeight, C.x > 0 ? f = C.y > 0 ? Qe : Je : C.x < 0 && (m -= v, f = C.y > 0 ? et : Ze), C.y < 0 && (h -= b), this.cropped || (_e(this.cropBox, fe), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    A && (o.width = v, o.height = b, o.left = m, o.top = h, this.action = f, this.renderCropBox()), ae(s, function(ee) {
      ee.startX = ee.endX, ee.startY = ee.endY;
    });
  }
}, Cl = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && se(this.dragBox, gt), _e(this.cropBox, fe), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = re({}, this.initialImageData), this.canvasData = re({}, this.initialCanvasData), this.cropBoxData = re({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (re(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), _e(this.dragBox, gt), se(this.cropBox, fe)), this;
  },
  replace: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, ae(this.previews, function(i) {
      i.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, _e(this.cropper, mr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, se(this.cropper, mr)), this;
  },
  destroy: function() {
    var e = this.element;
    return e[te] ? (e[te] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, a = i.left, o = i.top;
    return this.moveTo(St(e) ? e : a + Number(e), St(t) ? t : o + Number(t));
  },
  moveTo: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.canvasData, a = !1;
    return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.movable && (X(e) && (i.left = e, a = !0), X(t) && (i.top = t, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(e, t) {
    var i = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(i.width * e / i.naturalWidth, null, t);
  },
  zoomTo: function(e, t, i) {
    var a = this.options, o = this.canvasData, s = o.width, f = o.height, p = o.naturalWidth, m = o.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var h = p * e, v = m * e;
      if (Ke(this.element, jt, {
        ratio: e,
        oldRatio: s / p,
        originalEvent: i
      }) === !1)
        return this;
      if (i) {
        var b = this.pointers, E = Ur(this.cropper), k = b && Object.keys(b).length ? hl(b) : {
          pageX: i.pageX,
          pageY: i.pageY
        };
        o.left -= (h - s) * ((k.pageX - E.left - o.left) / s), o.top -= (v - f) * ((k.pageY - E.top - o.top) / f);
      } else
        Re(t) && X(t.x) && X(t.y) ? (o.left -= (h - s) * ((t.x - o.left) / s), o.top -= (v - f) * ((t.y - o.top) / f)) : (o.left -= (h - s) / 2, o.top -= (v - f) / 2);
      o.width = h, o.height = v, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  rotateTo: function(e) {
    return e = Number(e), X(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(e) {
    var t = this.imageData.scaleY;
    return this.scale(e, X(t) ? t : 1);
  },
  scaleY: function(e) {
    var t = this.imageData.scaleX;
    return this.scale(X(t) ? t : 1, e);
  },
  scale: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.imageData, a = !1;
    return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.scalable && (X(e) && (i.scaleX = e, a = !0), X(t) && (i.scaleY = t, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.options, i = this.imageData, a = this.canvasData, o = this.cropBoxData, s;
    if (this.ready && this.cropped) {
      s = {
        x: o.left - a.left,
        y: o.top - a.top,
        width: o.width,
        height: o.height
      };
      var f = i.width / i.naturalWidth;
      if (ae(s, function(h, v) {
        s[v] = h / f;
      }), e) {
        var p = Math.round(s.y + s.height), m = Math.round(s.x + s.width);
        s.x = Math.round(s.x), s.y = Math.round(s.y), s.width = m - s.x, s.height = p - s.y;
      }
    } else
      s = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return t.rotatable && (s.rotate = i.rotate || 0), t.scalable && (s.scaleX = i.scaleX || 1, s.scaleY = i.scaleY || 1), s;
  },
  setData: function(e) {
    var t = this.options, i = this.imageData, a = this.canvasData, o = {};
    if (this.ready && !this.disabled && Re(e)) {
      var s = !1;
      t.rotatable && X(e.rotate) && e.rotate !== i.rotate && (i.rotate = e.rotate, s = !0), t.scalable && (X(e.scaleX) && e.scaleX !== i.scaleX && (i.scaleX = e.scaleX, s = !0), X(e.scaleY) && e.scaleY !== i.scaleY && (i.scaleY = e.scaleY, s = !0)), s && this.renderCanvas(!0, !0);
      var f = i.width / i.naturalWidth;
      X(e.x) && (o.left = e.x * f + a.left), X(e.y) && (o.top = e.y * f + a.top), X(e.width) && (o.width = e.width * f), X(e.height) && (o.height = e.height * f), this.setCropBoxData(o);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? re({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? re({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var e = this.canvasData, t = {};
    return this.ready && ae(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(i) {
      t[i] = e[i];
    }), t;
  },
  setCanvasData: function(e) {
    var t = this.canvasData, i = t.aspectRatio;
    return this.ready && !this.disabled && Re(e) && (X(e.left) && (t.left = e.left), X(e.top) && (t.top = e.top), X(e.width) ? (t.width = e.width, t.height = e.width / i) : X(e.height) && (t.height = e.height, t.width = e.height * i), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var e = this.cropBoxData, t;
    return this.ready && this.cropped && (t = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), t || {};
  },
  setCropBoxData: function(e) {
    var t = this.cropBoxData, i = this.options.aspectRatio, a, o;
    return this.ready && this.cropped && !this.disabled && Re(e) && (X(e.left) && (t.left = e.left), X(e.top) && (t.top = e.top), X(e.width) && e.width !== t.width && (a = !0, t.width = e.width), X(e.height) && e.height !== t.height && (o = !0, t.height = e.height), i && (a ? t.height = t.width / i : o && (t.width = t.height * i)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var t = this.canvasData, i = ml(this.image, this.imageData, t, e);
    if (!this.cropped)
      return i;
    var a = this.getData(), o = a.x, s = a.y, f = a.width, p = a.height, m = i.width / Math.floor(t.naturalWidth);
    m !== 1 && (o *= m, s *= m, f *= m, p *= m);
    var h = f / p, v = Te({
      aspectRatio: h,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), b = Te({
      aspectRatio: h,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), E = Te({
      aspectRatio: h,
      width: e.width || (m !== 1 ? i.width : f),
      height: e.height || (m !== 1 ? i.height : p)
    }), k = E.width, M = E.height;
    k = Math.min(v.width, Math.max(b.width, k)), M = Math.min(v.height, Math.max(b.height, M));
    var N = document.createElement("canvas"), Y = N.getContext("2d");
    N.width = Ue(k), N.height = Ue(M), Y.fillStyle = e.fillColor || "transparent", Y.fillRect(0, 0, k, M);
    var R = e.imageSmoothingEnabled, A = R === void 0 ? !0 : R, U = e.imageSmoothingQuality;
    Y.imageSmoothingEnabled = A, U && (Y.imageSmoothingQuality = U);
    var F = i.width, C = i.height, q = o, ee = s, ue, me, L, B, j, W;
    q <= -f || q > F ? (q = 0, ue = 0, L = 0, j = 0) : q <= 0 ? (L = -q, q = 0, ue = Math.min(F, f + q), j = ue) : q <= F && (L = 0, ue = Math.min(f, F - q), j = ue), ue <= 0 || ee <= -p || ee > C ? (ee = 0, me = 0, B = 0, W = 0) : ee <= 0 ? (B = -ee, ee = 0, me = Math.min(C, p + ee), W = me) : ee <= C && (B = 0, me = Math.min(p, C - ee), W = me);
    var H = [q, ee, ue, me];
    if (j > 0 && W > 0) {
      var oe = k / f;
      H.push(L * oe, B * oe, j * oe, W * oe);
    }
    return Y.drawImage.apply(Y, [i].concat(Or(H.map(function(Q) {
      return Math.floor(Ue(Q));
    })))), N;
  },
  setAspectRatio: function(e) {
    var t = this.options;
    return !this.disabled && !St(e) && (t.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(e) {
    var t = this.options, i = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var o = e === Ht, s = t.movable && e === Nr;
      e = o || s ? e : jr, t.dragMode = e, it(i, rt, e), He(i, At, o), He(i, Ot, s), t.cropBoxMovable || (it(a, rt, e), He(a, At, o), He(a, Ot, s));
    }
    return this;
  }
}, Ml = ke.Cropper, Yr = /* @__PURE__ */ function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Bs(this, n), !e || !el.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = re({}, Sr, Re(t) && t), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Rs(n, [{
    key: "init",
    value: function() {
      var t = this.element, i = t.tagName.toLowerCase(), a;
      if (!t[te]) {
        if (t[te] = this, i === "img") {
          if (this.isImg = !0, a = t.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = t.src;
        } else
          i === "canvas" && window.HTMLCanvasElement && (a = t.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(t) {
      var i = this;
      if (!!t) {
        this.url = t, this.imageData = {};
        var a = this.element, o = this.options;
        if (!o.rotatable && !o.scalable && (o.checkOrientation = !1), !o.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Zs.test(t)) {
          Qs.test(t) ? this.read(vl(t)) : this.clone();
          return;
        }
        var s = new XMLHttpRequest(), f = this.clone.bind(this);
        this.reloading = !0, this.xhr = s, s.onabort = f, s.onerror = f, s.ontimeout = f, s.onprogress = function() {
          s.getResponseHeader("content-type") !== kr && s.abort();
        }, s.onload = function() {
          i.read(s.response);
        }, s.onloadend = function() {
          i.reloading = !1, i.xhr = null;
        }, o.checkCrossOrigin && Cr(t) && a.crossOrigin && (t = Mr(t)), s.open("GET", t, !0), s.responseType = "arraybuffer", s.withCredentials = a.crossOrigin === "use-credentials", s.send();
      }
    }
  }, {
    key: "read",
    value: function(t) {
      var i = this.options, a = this.imageData, o = yl(t), s = 0, f = 1, p = 1;
      if (o > 1) {
        this.url = bl(t, kr);
        var m = wl(o);
        s = m.rotate, f = m.scaleX, p = m.scaleY;
      }
      i.rotatable && (a.rotate = s), i.scalable && (a.scaleX = f, a.scaleY = p), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var t = this.element, i = this.url, a = t.crossOrigin, o = i;
      this.options.checkCrossOrigin && Cr(i) && (a || (a = "anonymous"), o = Mr(i)), this.crossOrigin = a, this.crossOriginUrl = o;
      var s = document.createElement("img");
      a && (s.crossOrigin = a), s.src = o || i, s.alt = t.alt || "The image to crop", this.image = s, s.onload = this.start.bind(this), s.onerror = this.stop.bind(this), se(s, pr), t.parentNode.insertBefore(s, t.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var t = this, i = this.image;
      i.onload = null, i.onerror = null, this.sizing = !0;
      var a = ke.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ke.navigator.userAgent), o = function(m, h) {
        re(t.imageData, {
          naturalWidth: m,
          naturalHeight: h,
          aspectRatio: m / h
        }), t.initialImageData = re({}, t.imageData), t.sizing = !1, t.sized = !0, t.build();
      };
      if (i.naturalWidth && !a) {
        o(i.naturalWidth, i.naturalHeight);
        return;
      }
      var s = document.createElement("img"), f = document.body || document.documentElement;
      this.sizingImage = s, s.onload = function() {
        o(s.width, s.height), a || f.removeChild(s);
      }, s.src = i.src, a || (s.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", f.appendChild(s));
    }
  }, {
    key: "stop",
    value: function() {
      var t = this.image;
      t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var t = this.element, i = this.options, a = this.image, o = t.parentNode, s = document.createElement("div");
        s.innerHTML = tl;
        var f = s.querySelector(".".concat(te, "-container")), p = f.querySelector(".".concat(te, "-canvas")), m = f.querySelector(".".concat(te, "-drag-box")), h = f.querySelector(".".concat(te, "-crop-box")), v = h.querySelector(".".concat(te, "-face"));
        this.container = o, this.cropper = f, this.canvas = p, this.dragBox = m, this.cropBox = h, this.viewBox = f.querySelector(".".concat(te, "-view-box")), this.face = v, p.appendChild(a), se(t, fe), o.insertBefore(f, t.nextSibling), this.isImg || _e(a, pr), this.initPreview(), this.bind(), i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN, i.aspectRatio = Math.max(0, i.aspectRatio) || NaN, i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0, se(h, fe), i.guides || se(h.getElementsByClassName("".concat(te, "-dashed")), fe), i.center || se(h.getElementsByClassName("".concat(te, "-center")), fe), i.background && se(f, "".concat(te, "-bg")), i.highlight || se(v, Xs), i.cropBoxMovable && (se(v, Ot), it(v, rt, Rt)), i.cropBoxResizable || (se(h.getElementsByClassName("".concat(te, "-line")), fe), se(h.getElementsByClassName("".concat(te, "-point")), fe)), this.render(), this.ready = !0, this.setDragMode(i.dragMode), i.autoCrop && this.crop(), this.setData(i.data), he(i.ready) && ge(t, wr, i.ready, {
          once: !0
        }), Ke(t, wr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), _e(this.element, fe));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Ml, n;
    }
  }, {
    key: "setDefaults",
    value: function(t) {
      re(Sr, Re(t) && t);
    }
  }]), n;
}();
re(Yr.prototype, xl, _l, kl, Sl, Dl, Cl);
const $l = { class: "flex" }, El = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Tl = { class: "ml-auto mb-2" }, Al = { class: "w-full flex justify-center" }, Ol = ["src"], Pl = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    const t = n, { t: i } = z("i18n"), { apiUrl: a } = Se(), o = I(null), s = I(null), f = I(!1), p = I(""), m = I(!1), h = () => {
      f.value = !f.value, f.value ? s.value = new Yr(o.value, {
        crop(E) {
        }
      }) : s.value.destroy();
    }, v = z("postData"), b = () => {
      s.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (E) => {
          p.value = "", m.value = !1, pt(a.value, {
            method: "POST",
            params: Object.assign(v, {
              q: "upload",
              adapter: t.selection.adapter,
              path: t.selection.item.path,
              file: E
            }),
            name: t.selection.item.basename,
            json: !1
          }).then((k) => {
            p.value = i("Updated."), o.value.src = Et(t.selection.adapter, t.selection.item.path), h(), e("load");
          }).catch((k) => {
            p.value = i(k.message), m.value = !0;
          });
        }
      );
    };
    return xe(() => {
      e("load");
    }), (E, k) => (y(), D(ce, null, [
      d("div", $l, [
        d("h3", El, T(n.selection.item.basename), 1),
        d("div", Tl, [
          f.value ? (y(), D("button", {
            key: 0,
            onClick: b,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, T(_(i)("Crop")), 1)) : G("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: k[0] || (k[0] = (M) => h())
          }, T(f.value ? _(i)("Cancel") : _(i)("Edit")), 1)
        ])
      ]),
      d("div", Al, [
        d("img", {
          ref_key: "image",
          ref: o,
          class: "max-w-[60vh] max-h-[60vh]",
          src: _(Et)(t.selection.adapter, t.selection.item.path),
          alt: ""
        }, null, 8, Ol)
      ]),
      p.value.length ? (y(), Z(Ce, {
        key: 0,
        error: m.value
      }, {
        default: J(() => [
          le(T(p.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : G("", !0)
    ], 64));
  }
}, Il = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ll = /* @__PURE__ */ d("div", null, " Default view.. ", -1), Nl = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    return xe(() => {
      e("load");
    }), (t, i) => (y(), D(ce, null, [
      d("h3", Il, T(n.selection.item.basename), 1),
      Ll
    ], 64));
  }
}, jl = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Vl = {
  class: "w-full",
  preload: "",
  controls: ""
}, zl = ["src"], Bl = /* @__PURE__ */ le(" Your browser does not support the video tag. "), Rl = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    const t = n, { apiUrl: i } = Se(), a = () => i.value + "?" + Le({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return xe(() => {
      e("load");
    }), (o, s) => (y(), D(ce, null, [
      d("h3", jl, T(n.selection.item.basename), 1),
      d("div", null, [
        d("video", Vl, [
          d("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, zl),
          Bl
        ])
      ])
    ], 64));
  }
}, Hl = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ul = {
  class: "w-full",
  controls: ""
}, Kl = ["src"], Yl = /* @__PURE__ */ le(" Your browser does not support the audio element. "), Wl = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    const t = n, { apiUrl: i } = Se(), a = () => i.value + "?" + Le({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return xe(() => {
      e("load");
    }), (o, s) => (y(), D(ce, null, [
      d("h3", Hl, T(n.selection.item.basename), 1),
      d("div", null, [
        d("audio", Ul, [
          d("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Kl),
          Yl
        ])
      ])
    ], 64));
  }
}, Xl = {
  class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Fl = ["data"], ql = ["src"], Gl = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(n, { emit: e }) {
    const t = n, { apiUrl: i } = Se(), a = () => i.value + "?" + Le({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return xe(() => {
      e("load");
    }), (o, s) => (y(), D(ce, null, [
      d("h3", Xl, T(n.selection.item.basename), 1),
      d("div", null, [
        d("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          d("iframe", {
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
        `, 8, ql)
        ], 8, Fl)
      ])
    ], 64));
  }
}, Jl = { class: "sm:flex sm:items-start" }, Zl = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Ql = { class: "text-gray-700 dark:text-gray-200 text-sm" }, ec = {
  key: 0,
  class: "flex leading-5"
}, tc = /* @__PURE__ */ d("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ d("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), rc = {
  name: "VFModalPreview"
}, ic = /* @__PURE__ */ Object.assign(rc, {
  props: {
    selection: Object
  },
  setup(n) {
    const e = n, { apiUrl: t } = Se(), i = z("emitter"), { t: a } = z("i18n"), o = I(!1), s = (m) => o.value = m, f = (m) => {
      var h;
      return ((h = e.selection.item.mime_type) != null ? h : "").startsWith(m);
    }, p = () => {
      const m = t.value + "?" + Le({ q: "download", adapter: e.selection.adapter, path: e.selection.item.path });
      i.emit("vf-download", m);
    };
    return (m, h) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: h[6] || (h[6] = (v) => _(i).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Close")), 1),
        d("button", {
          type: "button",
          onClick: h[7] || (h[7] = (v) => p()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Download")), 1)
      ]),
      default: J(() => [
        d("div", Jl, [
          d("div", Zl, [
            d("div", null, [
              f("text") ? (y(), Z(zs, {
                key: 0,
                selection: n.selection,
                onLoad: h[0] || (h[0] = (v) => s(!0))
              }, null, 8, ["selection"])) : f("image") ? (y(), Z(Pl, {
                key: 1,
                selection: n.selection,
                onLoad: h[1] || (h[1] = (v) => s(!0))
              }, null, 8, ["selection"])) : f("video") ? (y(), Z(Rl, {
                key: 2,
                selection: n.selection,
                onLoad: h[2] || (h[2] = (v) => s(!0))
              }, null, 8, ["selection"])) : f("audio") ? (y(), Z(Wl, {
                key: 3,
                selection: n.selection,
                onLoad: h[3] || (h[3] = (v) => s(!0))
              }, null, 8, ["selection"])) : f("application/pdf") ? (y(), Z(Gl, {
                key: 4,
                selection: n.selection,
                onLoad: h[4] || (h[4] = (v) => s(!0))
              }, null, 8, ["selection"])) : (y(), Z(Nl, {
                key: 5,
                selection: n.selection,
                onLoad: h[5] || (h[5] = (v) => s(!0))
              }, null, 8, ["selection"]))
            ]),
            d("div", Ql, [
              d("p", null, T(n.selection.item.path), 1),
              d("p", null, "mime_type: " + T(n.selection.item.mime_type), 1),
              o.value == !1 ? (y(), D("div", ec, [
                tc,
                d("span", null, T(_(a)("Loading")), 1)
              ])) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), oc = { class: "sm:flex sm:items-start" }, nc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), ac = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, lc = { class: "mt-2" }, cc = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, uc = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dc = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), hc = [
  dc
], fc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, mc = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), pc = [
  mc
], gc = { class: "ml-1.5" }, vc = ["onKeyup"], bc = {
  name: "VFModalRename"
}, yc = /* @__PURE__ */ Object.assign(bc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n"), o = I(e.selection.items[0]), s = I(e.selection.items[0].basename), f = I(""), p = () => {
      s.value != "" && t.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          item: o.value.path,
          name: s.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is renamed.", s.value) });
        },
        onError: (m) => {
          f.value = a(m.message);
        }
      });
    };
    return (m, h) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Rename")), 1),
        d("button", {
          type: "button",
          onClick: h[1] || (h[1] = (v) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", oc, [
          nc,
          d("div", ac, [
            d("h3", sc, T(_(a)("Rename")), 1),
            d("div", lc, [
              d("p", cc, [
                o.value.type == "dir" ? (y(), D("svg", uc, hc)) : (y(), D("svg", fc, pc)),
                d("span", gc, T(o.value.basename), 1)
              ]),
              ve(d("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (v) => s.value = v),
                onKeyup: Ye(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-500 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, vc), [
                [We, s.value]
              ]),
              f.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(f.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wc = { class: "sm:flex sm:items-start" }, xc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), _c = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, kc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Sc = { class: "mt-2" }, Dc = { class: "text-gray-500 mb-1" }, Cc = ["id"], Mc = {
  key: 0,
  class: "py-2"
}, $c = ["disabled", "onClick"], Ec = {
  name: "VFModalUpload"
}, Tc = /* @__PURE__ */ Object.assign(Ec, {
  props: {
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { apiUrl: i } = Se(), { t: a } = z("i18n"), o = I(null), s = I(null), f = I(null), p = I([]), m = I(""), h = I(!0), v = () => {
      m.value = "", o.value.start();
    }, b = z("postData");
    return xe(() => {
      o.value = new kt.Uploader({
        runtimes: "html5",
        browse_button: f.value,
        container: s.value,
        max_file_size: "10mb",
        multiple_queues: !0,
        file_data_name: "file",
        url: i.value + "?" + Le(Object.assign(b, { q: "upload", adapter: e.current.adapter, path: e.current.dirname })),
        headers: {
          ...mt && { "X-CSRF-Token": mt }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(E, k) {
            h.value = !1, kt.each(k, function(M) {
              p.value.push({
                id: M.id,
                name: M.name,
                size: kt.formatSize(M.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(E, k) {
            p.value[p.value.findIndex((M) => M.id == k.id)].percent = k.percent + "%";
          },
          UploadComplete: function() {
            h.value = !0, t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
          },
          Error: function(E, k) {
            o.value.stop(), m.value = a(JSON.parse(k.response).message);
          }
        }
      }), o.value.init();
    }), (E, k) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          disabled: h.value,
          onClick: Pe(v, ["prevent"]),
          type: "button",
          class: de([h.value ? "bg-red-200 hover:bg-red-200" : "bg-red-600 hover:bg-red-700", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, T(_(a)("Upload")), 11, $c),
        d("button", {
          type: "button",
          onClick: k[0] || (k[0] = (M) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", wc, [
          xc,
          d("div", _c, [
            d("h3", kc, T(_(a)("Upload files")), 1),
            d("div", Sc, [
              d("div", Dc, [
                (y(!0), D(ce, null, be(p.value, (M) => (y(), D("div", null, [
                  d("div", {
                    id: M.id
                  }, [
                    le(T(M.name) + " ( " + T(M.size) + ") ", 1),
                    d("b", null, T(M.percent), 1)
                  ], 8, Cc)
                ]))), 256)),
                p.value.length ? G("", !0) : (y(), D("div", Mc, T(_(a)("No files selected!")), 1))
              ]),
              d("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: s
              }, [
                d("button", {
                  ref_key: "pickFiles",
                  ref: f,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, T(_(a)("Select Files")), 513)
              ], 512),
              m.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(m.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ac = { class: "sm:flex sm:items-start" }, Oc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ic = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Lc = { class: "mt-2" }, Nc = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, jc = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vc = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), zc = [
  Vc
], Bc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Rc = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Hc = [
  Rc
], Uc = { class: "ml-1.5" }, Kc = ["onKeyup", "placeholder"], Yc = {
  name: "VFModalArchive"
}, Wc = /* @__PURE__ */ Object.assign(Yc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n"), o = I(""), s = I(""), f = I(e.selection.items), p = () => {
      f.value.length && t.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          items: JSON.stringify(f.value.map(({ path: m, type: h }) => ({ path: m, type: h }))),
          name: o.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (m) => {
          s.value = a(m.message);
        }
      });
    };
    return (m, h) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Archive")), 1),
        d("button", {
          type: "button",
          onClick: h[1] || (h[1] = (v) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", Ac, [
          Oc,
          d("div", Pc, [
            d("h3", Ic, T(_(a)("Archive the files")), 1),
            d("div", Lc, [
              (y(!0), D(ce, null, be(f.value, (v) => (y(), D("p", Nc, [
                v.type == "dir" ? (y(), D("svg", jc, zc)) : (y(), D("svg", Bc, Hc)),
                d("span", Uc, T(v.basename), 1)
              ]))), 256)),
              ve(d("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (v) => o.value = v),
                onKeyup: Ye(p, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-500 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Kc), [
                [We, o.value]
              ]),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xc = { class: "sm:flex sm:items-start" }, Fc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), qc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Gc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Jc = { class: "mt-2" }, Zc = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Qc = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, eu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), tu = [
  eu
], ru = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, iu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ou = [
  iu
], nu = { class: "ml-1.5" }, au = { class: "my-1 text-sm text-gray-500" }, su = {
  name: "VFModalUnarchive"
}, lu = /* @__PURE__ */ Object.assign(su, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { getStore: i } = z("storage"), { t: a } = z("i18n");
    I("");
    const o = I(e.selection.items[0]), s = I(""), f = I([]), p = () => {
      t.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: i("adapter", "local"),
          path: e.current.dirname,
          item: o.value.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (m) => {
          s.value = a(m.message);
        }
      });
    };
    return (m, h) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: p,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Unarchive")), 1),
        d("button", {
          type: "button",
          onClick: h[0] || (h[0] = (v) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(a)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", Xc, [
          Fc,
          d("div", qc, [
            d("h3", Gc, T(_(a)("Unarchive")), 1),
            d("div", Jc, [
              (y(!0), D(ce, null, be(f.value, (v) => (y(), D("p", Zc, [
                v.type == "dir" ? (y(), D("svg", Qc, tu)) : (y(), D("svg", ru, ou)),
                d("span", nu, T(v.basename), 1)
              ]))), 256)),
              d("p", au, T(_(a)("The archive will be unarchived at")) + " (" + T(n.current.dirname) + ")", 1),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), cu = { class: "sm:flex sm:items-start" }, uu = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), du = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, hu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, fu = { class: "mt-2" }, mu = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, pu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, gu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), vu = [
  gu
], bu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, yu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), wu = [
  yu
], xu = { class: "ml-1.5" }, _u = { class: "text-sm text-gray-500 pb-1 pt-3" }, ku = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Su = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Du = { class: "ml-1.5 overflow-auto" }, Cu = {
  name: "VFModalMove"
}, Mu = /* @__PURE__ */ Object.assign(Cu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(n) {
    const e = n, t = z("emitter"), { t: i } = z("i18n"), { getStore: a } = z("storage"), o = I(e.selection.items.from), s = I(""), f = () => {
      o.value.length && t.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a("adapter", "local"),
          path: e.current.dirname,
          items: JSON.stringify(o.value.map(({ path: p, type: m }) => ({ path: p, type: m }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: i("Files moved.", e.selection.items.to.name) });
        },
        onError: (p) => {
          s.value = i(p.message);
        }
      });
    };
    return (p, m) => (y(), Z(De, null, {
      buttons: J(() => [
        d("button", {
          type: "button",
          onClick: f,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(i)("Yes, Move!")), 1),
        d("button", {
          type: "button",
          onClick: m[0] || (m[0] = (h) => _(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, T(_(i)("Cancel")), 1)
      ]),
      default: J(() => [
        d("div", cu, [
          uu,
          d("div", du, [
            d("h3", hu, T(_(i)("Move files")), 1),
            d("div", fu, [
              (y(!0), D(ce, null, be(o.value, (h) => (y(), D("p", mu, [
                h.type == "dir" ? (y(), D("svg", pu, vu)) : (y(), D("svg", bu, wu)),
                d("span", xu, T(h.path), 1)
              ]))), 256)),
              d("p", _u, T(_(i)("Are you sure you want to move these files?")), 1),
              d("p", ku, [
                Su,
                d("span", Du, T(n.selection.items.to.path), 1)
              ]),
              s.value.length ? (y(), Z(Ce, {
                key: 0,
                error: ""
              }, {
                default: J(() => [
                  le(T(s.value), 1)
                ]),
                _: 1
              })) : G("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: ss,
  ModalMessage: ps,
  ModalNewFolder: Ss,
  ModalNewFile: Ps,
  ModalPreview: ic,
  ModalRename: yc,
  ModalUpload: Tc,
  ModalArchive: Wc,
  ModalUnarchive: lu,
  ModalMove: Mu
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  VueFinder: La,
  ...$u
};
const Au = {
  install(n) {
    for (const e in Ct)
      if (Ct.hasOwnProperty(e)) {
        const t = Ct[e];
        n.component(t.name, t);
      }
  }
};
export {
  Au as default
};
