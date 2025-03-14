import x from "zdog";
import V, { useRef as $, useState as U, useEffect as q, useContext as ee, useMemo as Ge, useImperativeHandle as et, useLayoutEffect as Q, useCallback as tt } from "react";
var Ee = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function rt() {
  if (Ye)
    return Z;
  Ye = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(i, o, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      u = {};
      for (var f in o)
        f !== "key" && (u[f] = o[f]);
    } else
      u = o;
    return o = u.ref, {
      $$typeof: t,
      type: i,
      key: h,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Z.Fragment = r, Z.jsx = n, Z.jsxs = n, Z;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function nt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Ze ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case de:
          return "Portal";
        case ne:
          return "Profiler";
        case H:
          return "StrictMode";
        case P:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case g:
            return (e.displayName || "Context") + ".Provider";
          case oe:
            return (e._context.displayName || "Context") + ".Consumer";
          case O:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case C:
            return s = e.displayName || null, s !== null ? s : t(e.type) || "Memo";
          case M:
            s = e._payload, e = e._init;
            try {
              return t(e(s));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function n(e) {
      try {
        r(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var a = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), r(e);
      }
    }
    function i() {
    }
    function o() {
      if (J === 0) {
        Re = console.log, Oe = console.info, Ce = console.warn, Me = console.error, Te = console.group, Se = console.groupCollapsed, Ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      J++;
    }
    function u() {
      if (J--, J === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: F({}, e, { value: Re }),
          info: F({}, e, { value: Oe }),
          warn: F({}, e, { value: Ce }),
          error: F({}, e, { value: Me }),
          group: F({}, e, { value: Te }),
          groupCollapsed: F({}, e, { value: Se }),
          groupEnd: F({}, e, { value: Ae })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function h(e) {
      if (pe === void 0)
        try {
          throw Error();
        } catch (a) {
          var s = a.stack.trim().match(/\n( *(at )?)/);
          pe = s && s[1] || "", ke = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pe + e + ke;
    }
    function f(e, s) {
      if (!e || be)
        return "";
      var a = me.get(e);
      if (a !== void 0)
        return a;
      be = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = W.H, W.H = null, o();
      try {
        var y = {
          DetermineComponentFrameRoot: function() {
            try {
              if (s) {
                var N = function() {
                  throw Error();
                };
                if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(N, []);
                  } catch (k) {
                    var ie = k;
                  }
                  Reflect.construct(e, [], N);
                } else {
                  try {
                    N.call();
                  } catch (k) {
                    ie = k;
                  }
                  e.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (k) {
                  ie = k;
                }
                (N = e()) && typeof N.catch == "function" && N.catch(function() {
                });
              }
            } catch (k) {
              if (k && ie && typeof k.stack == "string")
                return [k.stack, ie.stack];
            }
            return [null, null];
          }
        };
        y.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var v = Object.getOwnPropertyDescriptor(
          y.DetermineComponentFrameRoot,
          "name"
        );
        v && v.configurable && Object.defineProperty(
          y.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var l = y.DetermineComponentFrameRoot(), A = l[0], L = l[1];
        if (A && L) {
          var w = A.split(`
`), I = L.split(`
`);
          for (l = v = 0; v < w.length && !w[v].includes(
            "DetermineComponentFrameRoot"
          ); )
            v++;
          for (; l < I.length && !I[l].includes(
            "DetermineComponentFrameRoot"
          ); )
            l++;
          if (v === w.length || l === I.length)
            for (v = w.length - 1, l = I.length - 1; 1 <= v && 0 <= l && w[v] !== I[l]; )
              l--;
          for (; 1 <= v && 0 <= l; v--, l--)
            if (w[v] !== I[l]) {
              if (v !== 1 || l !== 1)
                do
                  if (v--, l--, 0 > l || w[v] !== I[l]) {
                    var X = `
` + w[v].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && me.set(e, X), X;
                  }
                while (1 <= v && 0 <= l);
              break;
            }
        }
      } finally {
        be = !1, W.H = d, u(), Error.prepareStackTrace = a;
      }
      return w = (w = e ? e.displayName || e.name : "") ? h(w) : "", typeof e == "function" && me.set(e, w), w;
    }
    function b(e) {
      if (e == null)
        return "";
      if (typeof e == "function") {
        var s = e.prototype;
        return f(
          e,
          !(!s || !s.isReactComponent)
        );
      }
      if (typeof e == "string")
        return h(e);
      switch (e) {
        case P:
          return h("Suspense");
        case E:
          return h("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            return e = f(e.render, !1), e;
          case C:
            return b(e.type);
          case M:
            s = e._payload, e = e._init;
            try {
              return b(e(s));
            } catch {
            }
        }
      return "";
    }
    function m() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function p(e) {
      if (xe.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function j(e, s) {
      function a() {
        je || (je = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function S() {
      var e = t(this.type);
      return Pe[e] || (Pe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, s, a, d, y, v) {
      return a = v.ref, e = {
        $$typeof: c,
        type: e,
        key: s,
        props: v,
        _owner: y
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, s, a, d, y, v) {
      if (typeof e == "string" || typeof e == "function" || e === R || e === ne || e === H || e === P || e === E || e === he || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === C || e.$$typeof === g || e.$$typeof === oe || e.$$typeof === O || e.$$typeof === Ke || e.getModuleId !== void 0)) {
        var l = s.children;
        if (l !== void 0)
          if (d)
            if (ve(l)) {
              for (d = 0; d < l.length; d++)
                Y(l[d], e);
              Object.freeze && Object.freeze(l);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            Y(l, e);
      } else
        l = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? d = "null" : ve(e) ? d = "array" : e !== void 0 && e.$$typeof === c ? (d = "<" + (t(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          d,
          l
        );
      if (xe.call(s, "key")) {
        l = t(e);
        var A = Object.keys(s).filter(function(w) {
          return w !== "key";
        });
        d = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", Ne[l + d] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          l,
          A,
          l
        ), Ne[l + d] = !0);
      }
      if (l = null, a !== void 0 && (n(a), l = "" + a), p(s) && (n(s.key), l = "" + s.key), "key" in s) {
        a = {};
        for (var L in s)
          L !== "key" && (a[L] = s[L]);
      } else
        a = s;
      return l && j(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(e, l, v, y, m(), a);
    }
    function Y(e, s) {
      if (typeof e == "object" && e && e.$$typeof !== Qe) {
        if (ve(e))
          for (var a = 0; a < e.length; a++) {
            var d = e[a];
            _(d) && te(d, s);
          }
        else if (_(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? a = null : (a = we && e[we] || e["@@iterator"], a = typeof a == "function" ? a : null), typeof a == "function" && a !== e.entries && (a = a.call(e), a !== e))
          for (; !(e = a.next()).done; )
            _(e.value) && te(e.value, s);
      }
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function te(e, s) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, s = re(s), !ze[s])) {
        ze[s] = !0;
        var a = "";
        e && e._owner != null && e._owner !== m() && (a = null, typeof e._owner.tag == "number" ? a = t(e._owner.type) : typeof e._owner.name == "string" && (a = e._owner.name), a = " It was passed a child from " + a + ".");
        var d = W.getCurrentStack;
        W.getCurrentStack = function() {
          var y = b(e.type);
          return d && (y += d() || ""), y;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          s,
          a
        ), W.getCurrentStack = d;
      }
    }
    function re(e) {
      var s = "", a = m();
      return a && (a = t(a.type)) && (s = `

Check the render method of \`` + a + "`."), s || (e = t(e)) && (s = `

Check the top-level render call using <` + e + ">."), s;
    }
    var fe = V, c = Symbol.for("react.transitional.element"), de = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), g = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), we = Symbol.iterator, Ze = Symbol.for("react.client.reference"), W = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe = Object.prototype.hasOwnProperty, F = Object.assign, Ke = Symbol.for("react.client.reference"), ve = Array.isArray, J = 0, Re, Oe, Ce, Me, Te, Se, Ae;
    i.__reactDisabledLog = !0;
    var pe, ke, be = !1, me = new (typeof WeakMap == "function" ? WeakMap : Map)(), Qe = Symbol.for("react.client.reference"), je, Pe = {}, Ne = {}, ze = {};
    K.Fragment = R, K.jsx = function(e, s, a, d, y) {
      return G(e, s, a, !1, d, y);
    }, K.jsxs = function(e, s, a, d, y) {
      return G(e, s, a, !0, d, y);
    };
  }()), K;
}
process.env.NODE_ENV === "production" ? Ee.exports = rt() : Ee.exports = nt();
var z = Ee.exports, Ue = function() {
  if (typeof Map < "u")
    return Map;
  function t(r, n) {
    var i = -1;
    return r.some(function(o, u) {
      return o[0] === n ? (i = u, !0) : !1;
    }), i;
  }
  return (
    /** @class */
    function() {
      function r() {
        this.__entries__ = [];
      }
      return Object.defineProperty(r.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.get = function(n) {
        var i = t(this.__entries__, n), o = this.__entries__[i];
        return o && o[1];
      }, r.prototype.set = function(n, i) {
        var o = t(this.__entries__, n);
        ~o ? this.__entries__[o][1] = i : this.__entries__.push([n, i]);
      }, r.prototype.delete = function(n) {
        var i = this.__entries__, o = t(i, n);
        ~o && i.splice(o, 1);
      }, r.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(n, i) {
        i === void 0 && (i = null);
        for (var o = 0, u = this.__entries__; o < u.length; o++) {
          var h = u[o];
          n.call(i, h[1], h[0]);
        }
      }, r;
    }()
  );
}(), _e = typeof window < "u" && typeof document < "u" && window.document === document, se = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ot = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(se) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), it = 2;
function st(t, r) {
  var n = !1, i = !1, o = 0;
  function u() {
    n && (n = !1, t()), i && f();
  }
  function h() {
    ot(u);
  }
  function f() {
    var b = Date.now();
    if (n) {
      if (b - o < it)
        return;
      i = !0;
    } else
      n = !0, i = !1, setTimeout(h, r);
    o = b;
  }
  return f;
}
var at = 20, ut = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ct = typeof MutationObserver < "u", lt = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = st(this.refresh.bind(this), at);
    }
    return t.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(r) {
      var n = this.observers_, i = n.indexOf(r);
      ~i && n.splice(i, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var r = this.updateObservers_();
      r && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var r = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return r.forEach(function(n) {
        return n.broadcastActive();
      }), r.length > 0;
    }, t.prototype.connect_ = function() {
      !_e || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ct ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !_e || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(r) {
      var n = r.propertyName, i = n === void 0 ? "" : n, o = ut.some(function(u) {
        return !!~i.indexOf(u);
      });
      o && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), qe = function(t, r) {
  for (var n = 0, i = Object.keys(r); n < i.length; n++) {
    var o = i[n];
    Object.defineProperty(t, o, {
      value: r[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, B = function(t) {
  var r = t && t.ownerDocument && t.ownerDocument.defaultView;
  return r || se;
}, Be = ce(0, 0, 0, 0);
function ae(t) {
  return parseFloat(t) || 0;
}
function Fe(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  return r.reduce(function(i, o) {
    var u = t["border-" + o + "-width"];
    return i + ae(u);
  }, 0);
}
function ft(t) {
  for (var r = ["top", "right", "bottom", "left"], n = {}, i = 0, o = r; i < o.length; i++) {
    var u = o[i], h = t["padding-" + u];
    n[u] = ae(h);
  }
  return n;
}
function dt(t) {
  var r = t.getBBox();
  return ce(0, 0, r.width, r.height);
}
function ht(t) {
  var r = t.clientWidth, n = t.clientHeight;
  if (!r && !n)
    return Be;
  var i = B(t).getComputedStyle(t), o = ft(i), u = o.left + o.right, h = o.top + o.bottom, f = ae(i.width), b = ae(i.height);
  if (i.boxSizing === "border-box" && (Math.round(f + u) !== r && (f -= Fe(i, "left", "right") + u), Math.round(b + h) !== n && (b -= Fe(i, "top", "bottom") + h)), !pt(t)) {
    var m = Math.round(f + u) - r, p = Math.round(b + h) - n;
    Math.abs(m) !== 1 && (f -= m), Math.abs(p) !== 1 && (b -= p);
  }
  return ce(o.left, o.top, f, b);
}
var vt = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof B(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof B(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function pt(t) {
  return t === B(t).document.documentElement;
}
function bt(t) {
  return _e ? vt(t) ? dt(t) : ht(t) : Be;
}
function mt(t) {
  var r = t.x, n = t.y, i = t.width, o = t.height, u = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, h = Object.create(u.prototype);
  return qe(h, {
    x: r,
    y: n,
    width: i,
    height: o,
    top: n,
    right: r + i,
    bottom: o + n,
    left: r
  }), h;
}
function ce(t, r, n, i) {
  return { x: t, y: r, width: n, height: i };
}
var gt = (
  /** @class */
  function() {
    function t(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ce(0, 0, 0, 0), this.target = r;
    }
    return t.prototype.isActive = function() {
      var r = bt(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, t;
  }()
), Et = (
  /** @class */
  function() {
    function t(r, n) {
      var i = mt(n);
      qe(this, { target: r, contentRect: i });
    }
    return t;
  }()
), _t = (
  /** @class */
  function() {
    function t(r, n, i) {
      if (this.activeObservations_ = [], this.observations_ = new Ue(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = n, this.callbackCtx_ = i;
    }
    return t.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof B(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(r) || (n.set(r, new gt(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof B(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(r) && (n.delete(r), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var r = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && r.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var r = this.callbackCtx_, n = this.activeObservations_.map(function(i) {
          return new Et(i.target, i.broadcastRect());
        });
        this.callback_.call(r, n, r), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Ve = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ue(), De = (
  /** @class */
  function() {
    function t(r) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = lt.getInstance(), i = new _t(r, n, this);
      Ve.set(this, i);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  De.prototype[t] = function() {
    var r;
    return (r = Ve.get(this))[t].apply(r, arguments);
  };
});
var yt = function() {
  return typeof se.ResizeObserver < "u" ? se.ResizeObserver : De;
}();
function ue(t, r) {
  x.extend(t, r);
}
const T = (t) => V.forwardRef(({ children: r, ...n }, i) => Xe(t, r, n, i)[0]);
function Je() {
  const r = Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
  return "#" + r.padStart(6, "0") === "#000000" ? Je() : "#" + r.padStart(6, "0");
}
const ge = (t) => {
  let r = t.toString(16);
  return r.length == 1 ? "0" + r : r;
}, wt = (t, r, n) => "#" + ge(t) + ge(r) + ge(n);
function ye(t, r, n) {
  return new Proxy(t, {
    set(i, o, u) {
      return typeof u == "object" && u !== null && (u = ye(u, r)), r(i, o, u, n), i[o] = u, !0;
    },
    get(i, o) {
      return typeof i[o] == "object" && i[o] !== null ? ye(i[o], r, o) : i[o];
    }
  });
}
const Ie = (t, r, n) => {
  const i = t.getBoundingClientRect();
  return {
    x: (r.clientX - i.left) / (i.right - i.left) * n.width,
    y: (r.clientY - i.top) / (i.bottom - i.top) * n.height
  };
}, He = ({ x: t, y: r, canvasContext: n }) => {
  let o = n.getImageData(t, r, 1, 1).data;
  return wt(o[0], o[1], o[2]);
}, le = V.createContext(), Le = V.createContext(), $e = V.createContext();
function xt() {
  const t = $(), [r, n] = U({ left: 0, top: 0, width: 0, height: 0 }), [i] = U(() => new yt(([o]) => n(o.contentRect)));
  return q(() => (t.current && i.observe(t.current), () => i.disconnect()), [t.current]), [{ ref: t }, r];
}
function Mt(t, r = []) {
  const n = ee(le);
  q(() => {
    const i = n.current.subscribe(t);
    return () => i();
  }, r);
}
function Rt() {
  return ee(le).current;
}
function Xe(t, r, n, i) {
  const o = ee(le), u = ee(Le), h = ee($e), f = Ge(() => Je(), []), b = Ge(() => ({
    stroke: !1,
    ...n,
    color: f,
    leftFace: f,
    rightFace: f,
    topFace: f,
    bottomFace: f
  }), [f, n]), [m] = U(() => new t(n)), [p] = U(() => new t(b)), j = (D, G, Y, _) => {
    _ ? p[_][G] = Y : p[G] = Y, o.current.illu.updateRenderGraph();
  }, [S] = U(() => ye(m, j));
  return et(i, () => S), Q(() => {
    ue(m, n), u && o.current.illu.updateRenderGraph();
  }, [n]), Q(() => {
    ue(p, b);
  }, [b]), Q(() => {
    if (u)
      return u.addChild(m), o.current.illu.updateGraph(), () => {
        u.removeChild(m), u.updateFlatGraph(), o.current.illu.updateGraph();
      };
  }, [u]), q(() => {
    if (u)
      return o.current.itemMap[f] = m, n.onClick && (o.current.clickEventMap[f] = n.onClick), n.onPointerMove && (o.current.pointerMoveEventMap[f] = n.onPointerMove), n.onPointerEnter && (o.current.pointerEnterEventMap[f] = n.onPointerEnter), n.onPointerLeave && (o.current.pointerLeaveEventMap[f] = n.onPointerLeave), () => {
        delete o.current.itemMap[f], delete o.current.clickEventMap[f], delete o.current.pointerMoveEventMap[f], delete o.current.pointerEnterEventMap[f], delete o.current.pointerLeaveEventMap[f];
      };
  }, [n]), Q(() => {
    if (h)
      return h.addChild(p), o.current.illu_ghost.updateGraph(), () => {
        h.removeChild(p), h.updateFlatGraph(), o.current.illu_ghost.updateGraph();
      };
  }, [h]), [
    /* @__PURE__ */ z.jsx($e.Provider, { value: p, children: /* @__PURE__ */ z.jsx(Le.Provider, { value: m, children: r }) }, f),
    m,
    p
  ];
}
function Tt() {
  const t = Rt();
  return tt(() => t.illu.updateRenderGraph(), [t]);
}
const St = V.memo(
  ({
    children: t,
    style: r,
    resize: n,
    element: i = "svg",
    frameloop: o = "always",
    dragRotate: u,
    onDragMove: h = () => {
    },
    onDragStart: f = () => {
    },
    onDragEnd: b = () => {
    },
    pointerEvents: m = !1,
    ...p
  }) => {
    const j = $(), S = $(), [D, G] = U(null);
    q(() => {
      G(S.current.getContext("2d", { willReadFrequently: !0 }));
    }, []);
    const [Y, _] = xt(), [te, re, fe] = Xe(x.Anchor, t), c = $({
      scene: re,
      illu: void 0,
      size: {},
      subscribers: [],
      subscribe: (g) => (c.current.subscribers.push(g), () => c.current.subscribers = c.current.subscribers.filter((O) => O !== g)),
      illu_ghost: void 0,
      itemMap: {},
      clickEventMap: {},
      pointerMoveEventMap: {},
      pointerEnterEventMap: {},
      pointerLeaveEventMap: {},
      pointerEvents: m
    });
    q(() => {
      c.current.size = _, c.current.illu && (c.current.illu.setSize(_.width, _.height), c.current.illu_ghost.setSize(_.width, _.height), o === "demand" && (c.current.illu.updateRenderGraph(), c.current.illu_ghost.updateRenderGraph()));
    }, [_]), q(() => {
      c.current.illu = new x.Illustration({
        element: j.current,
        dragRotate: u,
        onDragMove: () => {
          c.current.illu_ghost.rotate = {
            x: c.current.illu.rotate.x,
            y: c.current.illu.rotate.y,
            z: c.current.illu.rotate.z
          }, h();
        },
        onDragStart: f,
        onDragEnd: b,
        ...p
      }), c.current.illu.addChild(re), c.current.illu.updateGraph(), c.current.illu_ghost = new x.Illustration({
        element: S.current,
        ...p
      }), c.current.illu_ghost.addChild(fe), c.current.illu_ghost.updateGraph();
      let g, O = !0;
      function P(E) {
        const { size: C, subscribers: M } = c.current;
        C.width && C.height && (M.forEach((he) => he(E)), o !== "demand" && c.current.illu.updateRenderGraph()), O && o !== "demand" && (g = requestAnimationFrame(P));
      }
      return P(), () => {
        O = !1, cancelAnimationFrame(g);
      };
    }, [o]), Q(() => {
      c.current.illu && ue(c.current.illu, p), c.current.illu_ghost && ue(c.current.illu_ghost, p);
    }, [p]);
    const de = (g) => {
      if (!m)
        return;
      c.current.illu_ghost && c.current.illu_ghost.updateRenderGraph();
      const O = Ie(j.current, g, S.current), E = He({ ...O, canvasContext: D }).toUpperCase(), C = c.current.clickEventMap[E];
      C && C(g, c.current.itemMap[E]);
    }, R = $(null), H = $(null), ne = (g) => {
      H.current = g;
    }, oe = (g) => {
      if (!m)
        return;
      c.current.illu_ghost && c.current.illu_ghost.updateRenderGraph();
      const O = Ie(j.current, g, S.current), E = He({ ...O, canvasContext: D }).toUpperCase();
      if (E !== "#000000" && R.current !== E && H.current !== E) {
        const M = c.current.pointerEnterEventMap[E];
        M && M(g, c.current.itemMap[E]), ne(R.current);
      }
      if (R.current && R.current !== "#000000" && R.current !== E && H.current) {
        const M = c.current.pointerLeaveEventMap[R.current];
        M && M(g, c.current.itemMap[R.current]);
      }
      const C = c.current.pointerMoveEventMap[E];
      C && C(g, c.current.itemMap[E]), R.current = E;
    };
    return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      /* @__PURE__ */ z.jsxs(
        "div",
        {
          ref: Y.ref,
          ...p,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            ...r
          },
          children: [
            /* @__PURE__ */ z.jsx(
              i,
              {
                ref: j,
                style: { display: "block", boxSizing: "border-box" },
                width: _.width,
                height: _.height,
                onClick: de,
                onPointerMove: oe
              }
            ),
            c.current.illu && /* @__PURE__ */ z.jsx(le.Provider, { value: c, children: te })
          ]
        }
      ),
      /* @__PURE__ */ z.jsx(
        "canvas",
        {
          ref: S,
          style: {
            display: "block",
            boxSizing: "border-box",
            opacity: "0",
            position: "fixed",
            zIndex: "1000",
            pointerEvents: "none",
            background: "black"
          },
          width: _.width,
          height: _.height
        }
      )
    ] });
  }
), At = T(x.Anchor), kt = T(x.Shape), jt = T(x.Group), Pt = T(x.Rect), Nt = T(x.RoundedRect), zt = T(x.Ellipse), Gt = T(x.Polygon), Yt = T(x.Hemisphere), Wt = T(x.Cylinder), Ft = T(x.Cone), It = T(x.Box);
export {
  At as Anchor,
  It as Box,
  Ft as Cone,
  Wt as Cylinder,
  zt as Ellipse,
  jt as Group,
  Yt as Hemisphere,
  St as Illustration,
  Gt as Polygon,
  Pt as Rect,
  Nt as RoundedRect,
  kt as Shape,
  Tt as useInvalidate,
  Mt as useRender,
  Rt as useZdog
};
