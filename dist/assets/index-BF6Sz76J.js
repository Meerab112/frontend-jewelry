function mp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(r, s);
          l &&
            Object.defineProperty(
              e,
              s,
              l.get ? l : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = n(s);
    fetch(s.href, l);
  }
})();
function gp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var uu = { exports: {} },
  fl = {},
  du = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  xp = Symbol.for("react.portal"),
  yp = Symbol.for("react.fragment"),
  vp = Symbol.for("react.strict_mode"),
  wp = Symbol.for("react.profiler"),
  jp = Symbol.for("react.provider"),
  Np = Symbol.for("react.context"),
  Sp = Symbol.for("react.forward_ref"),
  kp = Symbol.for("react.suspense"),
  Ep = Symbol.for("react.memo"),
  Cp = Symbol.for("react.lazy"),
  Eo = Symbol.iterator;
function bp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eo && e[Eo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pu = Object.assign,
  hu = {};
function Kn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || fu));
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mu() {}
mu.prototype = Kn.prototype;
function pa(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || fu));
}
var ha = (pa.prototype = new mu());
ha.constructor = pa;
pu(ha, Kn.prototype);
ha.isPureReactComponent = !0;
var Co = Array.isArray,
  gu = Object.prototype.hasOwnProperty,
  ma = { current: null },
  xu = { key: !0, ref: !0, __self: !0, __source: !0 };
function yu(e, t, n) {
  var r,
    s = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      gu.call(t, r) && !xu.hasOwnProperty(r) && (s[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: l,
    ref: a,
    props: s,
    _owner: ma.current,
  };
}
function _p(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function Rp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bo = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rp("" + e.key)
    : t.toString(36);
}
function Ss(e, t, n, r, s) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case xp:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + Al(a, 0) : r),
      Co(s)
        ? ((n = ""),
          e != null && (n = e.replace(bo, "$&/") + "/"),
          Ss(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (ga(s) &&
            (s = _p(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(bo, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Co(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var c = r + Al(l, o);
      a += Ss(l, t, n, c, s);
    }
  else if (((c = bp(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(l = e.next()).done; )
      ((l = l.value), (c = r + Al(l, o++)), (a += Ss(l, t, n, c, s)));
  else if (l === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function rs(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Ss(e, r, "", "", function (l) {
      return t.call(n, l, s++);
    }),
    r
  );
}
function Pp(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  ks = { transition: null },
  Op = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: ks,
    ReactCurrentOwner: ma,
  };
function vu() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: rs,
  forEach: function (e, t, n) {
    rs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Kn;
F.Fragment = yp;
F.Profiler = wp;
F.PureComponent = pa;
F.StrictMode = vp;
F.Suspense = kp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op;
F.act = vu;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = pu({}, e.props),
    s = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ma.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      gu.call(t, c) &&
        !xu.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Vr, type: e.type, key: s, ref: l, props: r, _owner: a };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Np,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jp, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = yu;
F.createFactory = function (e) {
  var t = yu.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Sp, render: e };
};
F.isValidElement = ga;
F.lazy = function (e) {
  return { $$typeof: Cp, _payload: { _status: -1, _result: e }, _init: Pp };
};
F.memo = function (e, t) {
  return { $$typeof: Ep, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ks.transition;
  ks.transition = {};
  try {
    e();
  } finally {
    ks.transition = t;
  }
};
F.unstable_act = vu;
F.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ce.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
F.useId = function () {
  return Ce.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ce.current.useRef(e);
};
F.useState = function (e) {
  return Ce.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ce.current.useTransition();
};
F.version = "18.3.1";
du.exports = F;
var w = du.exports;
const wu = gp(w),
  Tp = mp({ __proto__: null, default: wu }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp = w,
  Ap = Symbol.for("react.element"),
  zp = Symbol.for("react.fragment"),
  Ip = Object.prototype.hasOwnProperty,
  Dp = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r,
    s = {},
    l = null,
    a = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Ip.call(t, r) && !Fp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Ap,
    type: e,
    key: l,
    ref: a,
    props: s,
    _owner: Dp.current,
  };
}
fl.Fragment = zp;
fl.jsx = ju;
fl.jsxs = ju;
uu.exports = fl;
var i = uu.exports,
  fi = {},
  Nu = { exports: {} },
  He = {},
  Su = { exports: {} },
  ku = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, _) {
    var R = E.length;
    E.push(_);
    e: for (; 0 < R; ) {
      var A = (R - 1) >>> 1,
        B = E[A];
      if (0 < s(B, _)) ((E[A] = _), (E[R] = B), (R = A));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var _ = E[0],
      R = E.pop();
    if (R !== _) {
      E[0] = R;
      e: for (var A = 0, B = E.length, oe = B >>> 1; A < oe; ) {
        var De = 2 * (A + 1) - 1,
          yn = E[De],
          U = De + 1,
          Pe = E[U];
        if (0 > s(yn, R))
          U < B && 0 > s(Pe, yn)
            ? ((E[A] = Pe), (E[U] = R), (A = U))
            : ((E[A] = yn), (E[De] = R), (A = De));
        else if (U < B && 0 > s(Pe, R)) ((E[A] = Pe), (E[U] = R), (A = U));
        else break e;
      }
    }
    return _;
  }
  function s(E, _) {
    var R = E.sortIndex - _.sortIndex;
    return R !== 0 ? R : E.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    u = [],
    p = 1,
    h = null,
    m = 3,
    x = !1,
    N = !1,
    j = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= E)
        (r(u), (_.sortIndex = _.expirationTime), t(c, _));
      else break;
      _ = n(u);
    }
  }
  function S(E) {
    if (((j = !1), g(E), !N))
      if (n(c) !== null) ((N = !0), Re(k));
      else {
        var _ = n(u);
        _ !== null && Ve(S, _.startTime - E);
      }
  }
  function k(E, _) {
    ((N = !1), j && ((j = !1), d(L), (L = -1)), (x = !0));
    var R = m;
    try {
      for (
        g(_), h = n(c);
        h !== null && (!(h.expirationTime > _) || (E && !I()));
      ) {
        var A = h.callback;
        if (typeof A == "function") {
          ((h.callback = null), (m = h.priorityLevel));
          var B = A(h.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof B == "function" ? (h.callback = B) : h === n(c) && r(c),
            g(_));
        } else r(c);
        h = n(c);
      }
      if (h !== null) var oe = !0;
      else {
        var De = n(u);
        (De !== null && Ve(S, De.startTime - _), (oe = !1));
      }
      return oe;
    } finally {
      ((h = null), (m = R), (x = !1));
    }
  }
  var b = !1,
    P = null,
    L = -1,
    V = 5,
    z = -1;
  function I() {
    return !(e.unstable_now() - z < V);
  }
  function M() {
    if (P !== null) {
      var E = e.unstable_now();
      z = E;
      var _ = !0;
      try {
        _ = P(!0, E);
      } finally {
        _ ? ae() : ((b = !1), (P = null));
      }
    } else b = !1;
  }
  var ae;
  if (typeof f == "function")
    ae = function () {
      f(M);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      dt = W.port2;
    ((W.port1.onmessage = M),
      (ae = function () {
        dt.postMessage(null);
      }));
  } else
    ae = function () {
      v(M, 0);
    };
  function Re(E) {
    ((P = E), b || ((b = !0), ae()));
  }
  function Ve(E, _) {
    L = v(function () {
      E(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      N || x || ((N = !0), Re(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var R = m;
      m = _;
      try {
        return E();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, _) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = m;
      m = E;
      try {
        return _();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, _, R) {
      var A = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? A + R : A))
          : (R = A),
        E)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = R + B),
        (E = {
          id: p++,
          callback: _,
          priorityLevel: E,
          startTime: R,
          expirationTime: B,
          sortIndex: -1,
        }),
        R > A
          ? ((E.sortIndex = R),
            t(u, E),
            n(c) === null &&
              E === n(u) &&
              (j ? (d(L), (L = -1)) : (j = !0), Ve(S, R - A)))
          : ((E.sortIndex = B), t(c, E), N || x || ((N = !0), Re(k))),
        E
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (E) {
      var _ = m;
      return function () {
        var R = m;
        m = _;
        try {
          return E.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    }));
})(ku);
Su.exports = ku;
var Mp = Su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up = w,
  $e = Mp;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Eu = new Set(),
  kr = {};
function mn(e, t) {
  (Mn(e, t), Mn(e + "Capture", t));
}
function Mn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) Eu.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pi = Object.prototype.hasOwnProperty,
  Bp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _o = {},
  Ro = {};
function $p(e) {
  return pi.call(Ro, e)
    ? !0
    : pi.call(_o, e)
      ? !1
      : Bp.test(e)
        ? (Ro[e] = !0)
        : ((_o[e] = !0), !1);
}
function Hp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wp(e, t, n, r) {
  if (t === null || typeof t > "u" || Hp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, s, l, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a));
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xa = /[\-:]([a-z])/g;
function ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    xe[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    xe[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xa, ya);
  xe[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function va(e, t, n, r) {
  var s = xe.hasOwnProperty(t) ? xe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wp(t, n, s, r) && (n = null),
    r || s === null
      ? $p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ss = Symbol.for("react.element"),
  jn = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  hi = Symbol.for("react.profiler"),
  Cu = Symbol.for("react.provider"),
  bu = Symbol.for("react.context"),
  ja = Symbol.for("react.forward_ref"),
  mi = Symbol.for("react.suspense"),
  gi = Symbol.for("react.suspense_list"),
  Na = Symbol.for("react.memo"),
  _t = Symbol.for("react.lazy"),
  _u = Symbol.for("react.offscreen"),
  Po = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Po && e[Po]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  zl;
function dr(e) {
  if (zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zl = (t && t[1]) || "";
    }
  return (
    `
` +
    zl +
    e
  );
}
var Il = !1;
function Dl(e, t) {
  if (!e || Il) return "";
  Il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          l = r.stack.split(`
`),
          a = s.length - 1,
          o = l.length - 1;
        1 <= a && 0 <= o && s[a] !== l[o];
      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (s[a] !== l[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || s[a] !== l[o])) {
                var c =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((Il = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Vp(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Dl(e.type, !1)), e);
    case 11:
      return ((e = Dl(e.type.render, !1)), e);
    case 1:
      return ((e = Dl(e.type, !0)), e);
    default:
      return "";
  }
}
function xi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case jn:
      return "Portal";
    case hi:
      return "Profiler";
    case wa:
      return "StrictMode";
    case mi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bu:
        return (e.displayName || "Context") + ".Consumer";
      case Cu:
        return (e._context.displayName || "Context") + ".Provider";
      case ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Na:
        return (
          (t = e.displayName || null),
          t !== null ? t : xi(e.type) || "Memo"
        );
      case _t:
        ((t = e._payload), (e = e._init));
        try {
          return xi(e(t));
        } catch {}
    }
  return null;
}
function qp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xi(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ru(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jp(e) {
  var t = Ru(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), l.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ls(e) {
  e._valueTracker || (e._valueTracker = Jp(e));
}
function Pu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ru(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Ou(e, t) {
  ((t = t.checked), t != null && va(e, "checked", t, !1));
}
function vi(e, t) {
  Ou(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? wi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wi(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function To(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function wi(e, t, n) {
  (t !== "number" || Fs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Wt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function Tu(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ao(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var is,
  Au = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        is = is || document.createElement("div"),
          is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = is.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qp = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Qp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]));
  });
});
function zu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Iu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = zu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Kp = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Si(e, t) {
  if (t) {
    if (Kp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ki(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ei = null;
function Sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ci = null,
  An = null,
  zn = null;
function zo(e) {
  if ((e = Qr(e))) {
    if (typeof Ci != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = xl(t)), Ci(e.stateNode, e.type, t));
  }
}
function Du(e) {
  An ? (zn ? zn.push(e) : (zn = [e])) : (An = e);
}
function Fu() {
  if (An) {
    var e = An,
      t = zn;
    if (((zn = An = null), zo(e), t)) for (e = 0; e < t.length; e++) zo(t[e]);
  }
}
function Mu(e, t) {
  return e(t);
}
function Uu() {}
var Fl = !1;
function Bu(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Mu(e, t, n);
  } finally {
    ((Fl = !1), (An !== null || zn !== null) && (Uu(), Fu()));
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var bi = !1;
if (wt)
  try {
    var rr = {};
    (Object.defineProperty(rr, "passive", {
      get: function () {
        bi = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr));
  } catch {
    bi = !1;
  }
function Gp(e, t, n, r, s, l, a, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var gr = !1,
  Ms = null,
  Us = !1,
  _i = null,
  Yp = {
    onError: function (e) {
      ((gr = !0), (Ms = e));
    },
  };
function Xp(e, t, n, r, s, l, a, o, c) {
  ((gr = !1), (Ms = null), Gp.apply(Yp, arguments));
}
function Zp(e, t, n, r, s, l, a, o, c) {
  if ((Xp.apply(this, arguments), gr)) {
    if (gr) {
      var u = Ms;
      ((gr = !1), (Ms = null));
    } else throw Error(C(198));
    Us || ((Us = !0), (_i = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $u(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Io(e) {
  if (gn(e) !== e) throw Error(C(188));
}
function eh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var l = s.alternate;
    if (l === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === l.child) {
      for (l = s.child; l; ) {
        if (l === n) return (Io(s), e);
        if (l === r) return (Io(s), t);
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = s), (r = l));
    else {
      for (var a = !1, o = s.child; o; ) {
        if (o === n) {
          ((a = !0), (n = s), (r = l));
          break;
        }
        if (o === r) {
          ((a = !0), (r = s), (n = l));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = l.child; o; ) {
          if (o === n) {
            ((a = !0), (n = l), (r = s));
            break;
          }
          if (o === r) {
            ((a = !0), (r = l), (n = s));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Hu(e) {
  return ((e = eh(e)), e !== null ? Wu(e) : null);
}
function Wu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vu = $e.unstable_scheduleCallback,
  Do = $e.unstable_cancelCallback,
  th = $e.unstable_shouldYield,
  nh = $e.unstable_requestPaint,
  se = $e.unstable_now,
  rh = $e.unstable_getCurrentPriorityLevel,
  ka = $e.unstable_ImmediatePriority,
  qu = $e.unstable_UserBlockingPriority,
  Bs = $e.unstable_NormalPriority,
  sh = $e.unstable_LowPriority,
  Ju = $e.unstable_IdlePriority,
  pl = null,
  ct = null;
function lh(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : oh,
  ih = Math.log,
  ah = Math.LN2;
function oh(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ih(e) / ah) | 0)) | 0);
}
var as = 64,
  os = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $s(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~s;
    o !== 0 ? (r = pr(o)) : ((l &= a), l !== 0 && (r = pr(l)));
  } else ((a = n & ~s), a !== 0 ? (r = pr(a)) : l !== 0 && (r = pr(l)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (l = t & -t), s >= l || (s === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - nt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function ch(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;
  ) {
    var a = 31 - nt(l),
      o = 1 << a,
      c = s[a];
    (c === -1
      ? (!(o & n) || o & r) && (s[a] = ch(o, t))
      : c <= t && (e.expiredLanes |= o),
      (l &= ~o));
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qu() {
  var e = as;
  return ((as <<= 1), !(as & 4194240) && (as = 64), e);
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n));
}
function dh(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - nt(n),
      l = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~l));
  }
}
function Ea(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var q = 0;
function Ku(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Gu,
  Ca,
  Yu,
  Xu,
  Zu,
  Pi = !1,
  cs = [],
  zt = null,
  It = null,
  Dt = null,
  br = new Map(),
  _r = new Map(),
  Pt = [],
  fh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function sr(e, t, n, r, s, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [s],
      }),
      t !== null && ((t = Qr(t)), t !== null && Ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function ph(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((zt = sr(zt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((It = sr(It, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Dt = sr(Dt, e, t, n, r, s)), !0);
    case "pointerover":
      var l = s.pointerId;
      return (br.set(l, sr(br.get(l) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (l = s.pointerId),
        _r.set(l, sr(_r.get(l) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function ed(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $u(n)), t !== null)) {
          ((e.blockedOn = t),
            Zu(e.priority, function () {
              Yu(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Es(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ei = r), n.target.dispatchEvent(r), (Ei = null));
    } else return ((t = Qr(n)), t !== null && Ca(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Mo(e, t, n) {
  Es(e) && n.delete(t);
}
function hh() {
  ((Pi = !1),
    zt !== null && Es(zt) && (zt = null),
    It !== null && Es(It) && (It = null),
    Dt !== null && Es(Dt) && (Dt = null),
    br.forEach(Mo),
    _r.forEach(Mo));
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Pi ||
      ((Pi = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, hh)));
}
function Rr(e) {
  function t(s) {
    return lr(s, e);
  }
  if (0 < cs.length) {
    lr(cs[0], e);
    for (var n = 1; n < cs.length; n++) {
      var r = cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && lr(zt, e),
      It !== null && lr(It, e),
      Dt !== null && lr(Dt, e),
      br.forEach(t),
      _r.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    ((r = Pt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    (ed(n), n.blockedOn === null && Pt.shift());
}
var In = kt.ReactCurrentBatchConfig,
  Hs = !0;
function mh(e, t, n, r) {
  var s = q,
    l = In.transition;
  In.transition = null;
  try {
    ((q = 1), ba(e, t, n, r));
  } finally {
    ((q = s), (In.transition = l));
  }
}
function gh(e, t, n, r) {
  var s = q,
    l = In.transition;
  In.transition = null;
  try {
    ((q = 4), ba(e, t, n, r));
  } finally {
    ((q = s), (In.transition = l));
  }
}
function ba(e, t, n, r) {
  if (Hs) {
    var s = Oi(e, t, n, r);
    if (s === null) (Kl(e, t, r, Ws, n), Fo(e, r));
    else if (ph(s, e, t, n, r)) r.stopPropagation();
    else if ((Fo(e, r), t & 4 && -1 < fh.indexOf(e))) {
      for (; s !== null; ) {
        var l = Qr(s);
        if (
          (l !== null && Gu(l),
          (l = Oi(e, t, n, r)),
          l === null && Kl(e, t, r, Ws, n),
          l === s)
        )
          break;
        s = l;
      }
      s !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var Ws = null;
function Oi(e, t, n, r) {
  if (((Ws = null), (e = Sa(r)), (e = en(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $u(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ws = e), null);
}
function td(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rh()) {
        case ka:
          return 1;
        case qu:
          return 4;
        case Bs:
        case sh:
          return 16;
        case Ju:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  _a = null,
  Cs = null;
function nd() {
  if (Cs) return Cs;
  var e,
    t = _a,
    n = t.length,
    r,
    s = "value" in Tt ? Tt.value : Tt.textContent,
    l = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[l - r]; r++);
  return (Cs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function bs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function us() {
  return !0;
}
function Uo() {
  return !1;
}
function We(e) {
  function t(n, r, s, l, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? us
        : Uo),
      (this.isPropagationStopped = Uo),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = us));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = us));
      },
      persist: function () {},
      isPersistent: us,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ra = We(Gn),
  Jr = te({}, Gn, { view: 0, detail: 0 }),
  xh = We(Jr),
  Ul,
  Bl,
  ir,
  hl = te({}, Jr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? ((Ul = e.screenX - ir.screenX), (Bl = e.screenY - ir.screenY))
              : (Bl = Ul = 0),
            (ir = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  Bo = We(hl),
  yh = te({}, hl, { dataTransfer: 0 }),
  vh = We(yh),
  wh = te({}, Jr, { relatedTarget: 0 }),
  $l = We(wh),
  jh = te({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nh = We(jh),
  Sh = te({}, Gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kh = We(Sh),
  Eh = te({}, Gn, { data: 0 }),
  $o = We(Eh),
  Ch = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  bh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _h = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _h[e]) ? !!t[e] : !1;
}
function Pa() {
  return Rh;
}
var Ph = te({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = Ch[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? bh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pa,
    charCode: function (e) {
      return e.type === "keypress" ? bs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Oh = We(Ph),
  Th = te({}, hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ho = We(Th),
  Lh = te({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa,
  }),
  Ah = We(Lh),
  zh = te({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ih = We(zh),
  Dh = te({}, hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fh = We(Dh),
  Mh = [9, 13, 27, 32],
  Oa = wt && "CompositionEvent" in window,
  xr = null;
wt && "documentMode" in document && (xr = document.documentMode);
var Uh = wt && "TextEvent" in window && !xr,
  rd = wt && (!Oa || (xr && 8 < xr && 11 >= xr)),
  Wo = " ",
  Vo = !1;
function sd(e, t) {
  switch (e) {
    case "keyup":
      return Mh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ld(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Sn = !1;
function Bh(e, t) {
  switch (e) {
    case "compositionend":
      return ld(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vo = !0), Wo);
    case "textInput":
      return ((e = t.data), e === Wo && Vo ? null : e);
    default:
      return null;
  }
}
function $h(e, t) {
  if (Sn)
    return e === "compositionend" || (!Oa && sd(e, t))
      ? ((e = nd()), (Cs = _a = Tt = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hh[e.type] : t === "textarea";
}
function id(e, t, n, r) {
  (Du(r),
    (t = Vs(t, "onChange")),
    0 < t.length &&
      ((n = new Ra("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var yr = null,
  Pr = null;
function Wh(e) {
  xd(e, 0);
}
function ml(e) {
  var t = Cn(e);
  if (Pu(t)) return e;
}
function Vh(e, t) {
  if (e === "change") return t;
}
var ad = !1;
if (wt) {
  var Hl;
  if (wt) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Jo = document.createElement("div");
      (Jo.setAttribute("oninput", "return;"),
        (Wl = typeof Jo.oninput == "function"));
    }
    Hl = Wl;
  } else Hl = !1;
  ad = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Qo() {
  yr && (yr.detachEvent("onpropertychange", od), (Pr = yr = null));
}
function od(e) {
  if (e.propertyName === "value" && ml(Pr)) {
    var t = [];
    (id(t, Pr, e, Sa(e)), Bu(Wh, t));
  }
}
function qh(e, t, n) {
  e === "focusin"
    ? (Qo(), (yr = t), (Pr = n), yr.attachEvent("onpropertychange", od))
    : e === "focusout" && Qo();
}
function Jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Pr);
}
function Qh(e, t) {
  if (e === "click") return ml(t);
}
function Kh(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function Gh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : Gh;
function Or(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!pi.call(t, s) || !st(e[s], t[s])) return !1;
  }
  return !0;
}
function Ko(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Go(e, t) {
  var n = Ko(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ko(n);
  }
}
function cd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? cd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ud() {
  for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fs(e.document);
  }
  return t;
}
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yh(e) {
  var t = ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ta(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          l = Math.min(r.start, s);
        ((r = r.end === void 0 ? l : Math.min(r.end, s)),
          !e.extend && l > r && ((s = r), (r = l), (l = s)),
          (s = Go(n, l)));
        var a = Go(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Xh = wt && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  Ti = null,
  vr = null,
  Li = !1;
function Yo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li ||
    kn == null ||
    kn !== Fs(r) ||
    ((r = kn),
    "selectionStart" in r && Ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && Or(vr, r)) ||
      ((vr = r),
      (r = Vs(Ti, "onSelect")),
      0 < r.length &&
        ((t = new Ra("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function ds(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: ds("Animation", "AnimationEnd"),
    animationiteration: ds("Animation", "AnimationIteration"),
    animationstart: ds("Animation", "AnimationStart"),
    transitionend: ds("Transition", "TransitionEnd"),
  },
  Vl = {},
  dd = {};
wt &&
  ((dd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function gl(e) {
  if (Vl[e]) return Vl[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dd) return (Vl[e] = t[n]);
  return e;
}
var fd = gl("animationend"),
  pd = gl("animationiteration"),
  hd = gl("animationstart"),
  md = gl("transitionend"),
  gd = new Map(),
  Xo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function qt(e, t) {
  (gd.set(e, t), mn(t, [e]));
}
for (var ql = 0; ql < Xo.length; ql++) {
  var Jl = Xo[ql],
    Zh = Jl.toLowerCase(),
    em = Jl[0].toUpperCase() + Jl.slice(1);
  qt(Zh, "on" + em);
}
qt(fd, "onAnimationEnd");
qt(pd, "onAnimationIteration");
qt(hd, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(md, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  tm = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Zo(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Zp(r, t, void 0, e), (e.currentTarget = null));
}
function xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== l && s.isPropagationStopped())) break e;
          (Zo(s, o, u), (l = c));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== l && s.isPropagationStopped())
          )
            break e;
          (Zo(s, o, u), (l = c));
        }
    }
  }
  if (Us) throw ((e = _i), (Us = !1), (_i = null), e);
}
function G(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yd(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
  var r = 0;
  (t && (r |= 4), yd(n, e, r, t));
}
var fs = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[fs]) {
    ((e[fs] = !0),
      Eu.forEach(function (n) {
        n !== "selectionchange" && (tm.has(n) || Ql(n, !1, e), Ql(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fs] || ((t[fs] = !0), Ql("selectionchange", !1, t));
  }
}
function yd(e, t, n, r) {
  switch (td(t)) {
    case 1:
      var s = mh;
      break;
    case 4:
      s = gh;
      break;
    default:
      s = ba;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !bi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Kl(e, t, n, r, s) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = en(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = l = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Bu(function () {
    var u = l,
      p = Sa(n),
      h = [];
    e: {
      var m = gd.get(e);
      if (m !== void 0) {
        var x = Ra,
          N = e;
        switch (e) {
          case "keypress":
            if (bs(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Oh;
            break;
          case "focusin":
            ((N = "focus"), (x = $l));
            break;
          case "focusout":
            ((N = "blur"), (x = $l));
            break;
          case "beforeblur":
          case "afterblur":
            x = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = vh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Ah;
            break;
          case fd:
          case pd:
          case hd:
            x = Nh;
            break;
          case md:
            x = Ih;
            break;
          case "scroll":
            x = xh;
            break;
          case "wheel":
            x = Fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = kh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ho;
        }
        var j = (t & 4) !== 0,
          v = !j && e === "scroll",
          d = j ? (m !== null ? m + "Capture" : null) : m;
        j = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              d !== null && ((S = Cr(f, d)), S != null && j.push(Lr(f, S, g)))),
            v)
          )
            break;
          f = f.return;
        }
        0 < j.length &&
          ((m = new x(m, N, null, n, p)), h.push({ event: m, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ei &&
            (N = n.relatedTarget || n.fromElement) &&
            (en(N) || N[jt]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          x
            ? ((N = n.relatedTarget || n.toElement),
              (x = u),
              (N = N ? en(N) : null),
              N !== null &&
                ((v = gn(N)), N !== v || (N.tag !== 5 && N.tag !== 6)) &&
                (N = null))
            : ((x = null), (N = u)),
          x !== N)
        ) {
          if (
            ((j = Bo),
            (S = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Ho),
              (S = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (v = x == null ? m : Cn(x)),
            (g = N == null ? m : Cn(N)),
            (m = new j(S, f + "leave", x, n, p)),
            (m.target = v),
            (m.relatedTarget = g),
            (S = null),
            en(p) === u &&
              ((j = new j(d, f + "enter", N, n, p)),
              (j.target = g),
              (j.relatedTarget = v),
              (S = j)),
            (v = S),
            x && N)
          )
            t: {
              for (j = x, d = N, f = 0, g = j; g; g = vn(g)) f++;
              for (g = 0, S = d; S; S = vn(S)) g++;
              for (; 0 < f - g; ) ((j = vn(j)), f--);
              for (; 0 < g - f; ) ((d = vn(d)), g--);
              for (; f--; ) {
                if (j === d || (d !== null && j === d.alternate)) break t;
                ((j = vn(j)), (d = vn(d)));
              }
              j = null;
            }
          else j = null;
          (x !== null && ec(h, m, x, j, !1),
            N !== null && v !== null && ec(h, v, N, j, !0));
        }
      }
      e: {
        if (
          ((m = u ? Cn(u) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var k = Vh;
        else if (qo(m))
          if (ad) k = Kh;
          else {
            k = Jh;
            var b = qh;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Qh);
        if (k && (k = k(e, u))) {
          id(h, k, n, p);
          break e;
        }
        (b && b(e, m, u),
          e === "focusout" &&
            (b = m._wrapperState) &&
            b.controlled &&
            m.type === "number" &&
            wi(m, "number", m.value));
      }
      switch (((b = u ? Cn(u) : window), e)) {
        case "focusin":
          (qo(b) || b.contentEditable === "true") &&
            ((kn = b), (Ti = u), (vr = null));
          break;
        case "focusout":
          vr = Ti = kn = null;
          break;
        case "mousedown":
          Li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Li = !1), Yo(h, n, p));
          break;
        case "selectionchange":
          if (Xh) break;
        case "keydown":
        case "keyup":
          Yo(h, n, p);
      }
      var P;
      if (Oa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Sn
          ? sd(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      (L &&
        (rd &&
          n.locale !== "ko" &&
          (Sn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Sn && (P = nd())
            : ((Tt = p),
              (_a = "value" in Tt ? Tt.value : Tt.textContent),
              (Sn = !0))),
        (b = Vs(u, L)),
        0 < b.length &&
          ((L = new $o(L, e, null, n, p)),
          h.push({ event: L, listeners: b }),
          P ? (L.data = P) : ((P = ld(n)), P !== null && (L.data = P)))),
        (P = Uh ? Bh(e, n) : $h(e, n)) &&
          ((u = Vs(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new $o("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: u }),
            (p.data = P))));
    }
    xd(h, t);
  });
}
function Lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      l = s.stateNode;
    (s.tag === 5 &&
      l !== null &&
      ((s = l),
      (l = Cr(e, n)),
      l != null && r.unshift(Lr(e, l, s)),
      (l = Cr(e, t)),
      l != null && r.push(Lr(e, l, s))),
      (e = e.return));
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, s) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === r) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      s
        ? ((c = Cr(n, l)), c != null && a.unshift(Lr(n, c, o)))
        : s || ((c = Cr(n, l)), c != null && a.push(Lr(n, c, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var nm = /\r\n?/g,
  rm = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nm,
      `
`,
    )
    .replace(rm, "");
}
function ps(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(C(425));
}
function qs() {}
var Ai = null,
  zi = null;
function Ii(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Di = typeof setTimeout == "function" ? setTimeout : void 0,
  sm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  lm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
        ? function (e) {
            return nc.resolve(null).then(e).catch(im);
          }
        : Di;
function im(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Rr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Rr(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yn = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + Yn,
  Ar = "__reactProps$" + Yn,
  jt = "__reactContainer$" + Yn,
  Fi = "__reactEvents$" + Yn,
  am = "__reactListeners$" + Yn,
  om = "__reactHandles$" + Yn;
function en(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = rc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Qr(e) {
  return (
    (e = e[ot] || e[jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function xl(e) {
  return e[Ar] || null;
}
var Mi = [],
  bn = -1;
function Jt(e) {
  return { current: e };
}
function Y(e) {
  0 > bn || ((e.current = Mi[bn]), (Mi[bn] = null), bn--);
}
function K(e, t) {
  (bn++, (Mi[bn] = e.current), (e.current = t));
}
var Vt = {},
  Se = Jt(Vt),
  Le = Jt(!1),
  on = Vt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    l;
  for (l in n) s[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Ae(e) {
  return ((e = e.childContextTypes), e != null);
}
function Js() {
  (Y(Le), Y(Se));
}
function sc(e, t, n) {
  if (Se.current !== Vt) throw Error(C(168));
  (K(Se, t), K(Le, n));
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(C(108, qp(e) || "Unknown", s));
  return te({}, n, r);
}
function Qs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (on = Se.current),
    K(Se, e),
    K(Le, Le.current),
    !0
  );
}
function lc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = vd(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Le),
      Y(Se),
      K(Se, e))
    : Y(Le),
    K(Le, n));
}
var mt = null,
  yl = !1,
  Yl = !1;
function wd(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function cm(e) {
  ((yl = !0), wd(e));
}
function Qt() {
  if (!Yl && mt !== null) {
    Yl = !0;
    var e = 0,
      t = q;
    try {
      var n = mt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((mt = null), (yl = !1));
    } catch (s) {
      throw (mt !== null && (mt = mt.slice(e + 1)), Vu(ka, Qt), s);
    } finally {
      ((q = t), (Yl = !1));
    }
  }
  return null;
}
var _n = [],
  Rn = 0,
  Ks = null,
  Gs = 0,
  qe = [],
  Je = 0,
  cn = null,
  gt = 1,
  xt = "";
function Xt(e, t) {
  ((_n[Rn++] = Gs), (_n[Rn++] = Ks), (Ks = e), (Gs = t));
}
function jd(e, t, n) {
  ((qe[Je++] = gt), (qe[Je++] = xt), (qe[Je++] = cn), (cn = e));
  var r = gt;
  e = xt;
  var s = 32 - nt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var l = 32 - nt(t) + s;
  if (30 < l) {
    var a = s - (s % 5);
    ((l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (gt = (1 << (32 - nt(t) + s)) | (n << s) | r),
      (xt = l + e));
  } else ((gt = (1 << l) | (n << s) | r), (xt = e));
}
function La(e) {
  e.return !== null && (Xt(e, 1), jd(e, 1, 0));
}
function Aa(e) {
  for (; e === Ks; )
    ((Ks = _n[--Rn]), (_n[Rn] = null), (Gs = _n[--Rn]), (_n[Rn] = null));
  for (; e === cn; )
    ((cn = qe[--Je]),
      (qe[Je] = null),
      (xt = qe[--Je]),
      (qe[Je] = null),
      (gt = qe[--Je]),
      (qe[Je] = null));
}
var Be = null,
  Ue = null,
  X = !1,
  tt = null;
function Nd(e, t) {
  var n = Qe(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ic(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ue = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: gt, overflow: xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ui(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bi(e) {
  if (X) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!ic(e, t)) {
        if (Ui(e)) throw Error(C(418));
        t = Ft(n.nextSibling);
        var r = Be;
        t && ic(e, t)
          ? Nd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Be = e));
      }
    } else {
      if (Ui(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (X = !1), (Be = e));
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function hs(e) {
  if (e !== Be) return !1;
  if (!X) return (ac(e), (X = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Ui(e)) throw (Sd(), Error(C(418)));
    for (; t; ) (Nd(e, t), (t = Ft(t.nextSibling)));
  }
  if ((ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Be ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Sd() {
  for (var e = Ue; e; ) e = Ft(e.nextSibling);
}
function Bn() {
  ((Ue = Be = null), (X = !1));
}
function za(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var um = kt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var s = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var o = s.refs;
            a === null ? delete o[l] : (o[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function ms(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function oc(e) {
  var t = e._init;
  return t(e._payload);
}
function kd(e) {
  function t(d, f) {
    if (e) {
      var g = d.deletions;
      g === null ? ((d.deletions = [f]), (d.flags |= 16)) : g.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) (t(d, f), (f = f.sibling));
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      (f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling));
    return d;
  }
  function s(d, f) {
    return ((d = $t(d, f)), (d.index = 0), (d.sibling = null), d);
  }
  function l(d, f, g) {
    return (
      (d.index = g),
      e
        ? ((g = d.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((d.flags |= 2), f) : g)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function a(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function o(d, f, g, S) {
    return f === null || f.tag !== 6
      ? ((f = si(g, d.mode, S)), (f.return = d), f)
      : ((f = s(f, g)), (f.return = d), f);
  }
  function c(d, f, g, S) {
    var k = g.type;
    return k === Nn
      ? p(d, f, g.props.children, S, g.key)
      : f !== null &&
          (f.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === _t &&
              oc(k) === f.type))
        ? ((S = s(f, g.props)), (S.ref = ar(d, f, g)), (S.return = d), S)
        : ((S = As(g.type, g.key, g.props, null, d.mode, S)),
          (S.ref = ar(d, f, g)),
          (S.return = d),
          S);
  }
  function u(d, f, g, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = li(g, d.mode, S)), (f.return = d), f)
      : ((f = s(f, g.children || [])), (f.return = d), f);
  }
  function p(d, f, g, S, k) {
    return f === null || f.tag !== 7
      ? ((f = ln(g, d.mode, S, k)), (f.return = d), f)
      : ((f = s(f, g)), (f.return = d), f);
  }
  function h(d, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = si("" + f, d.mode, g)), (f.return = d), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ss:
          return (
            (g = As(f.type, f.key, f.props, null, d.mode, g)),
            (g.ref = ar(d, null, f)),
            (g.return = d),
            g
          );
        case jn:
          return ((f = li(f, d.mode, g)), (f.return = d), f);
        case _t:
          var S = f._init;
          return h(d, S(f._payload), g);
      }
      if (fr(f) || nr(f))
        return ((f = ln(f, d.mode, g, null)), (f.return = d), f);
      ms(d, f);
    }
    return null;
  }
  function m(d, f, g, S) {
    var k = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : o(d, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ss:
          return g.key === k ? c(d, f, g, S) : null;
        case jn:
          return g.key === k ? u(d, f, g, S) : null;
        case _t:
          return ((k = g._init), m(d, f, k(g._payload), S));
      }
      if (fr(g) || nr(g)) return k !== null ? null : p(d, f, g, S, null);
      ms(d, g);
    }
    return null;
  }
  function x(d, f, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((d = d.get(g) || null), o(f, d, "" + S, k));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ss:
          return (
            (d = d.get(S.key === null ? g : S.key) || null),
            c(f, d, S, k)
          );
        case jn:
          return (
            (d = d.get(S.key === null ? g : S.key) || null),
            u(f, d, S, k)
          );
        case _t:
          var b = S._init;
          return x(d, f, g, b(S._payload), k);
      }
      if (fr(S) || nr(S)) return ((d = d.get(g) || null), p(f, d, S, k, null));
      ms(f, S);
    }
    return null;
  }
  function N(d, f, g, S) {
    for (
      var k = null, b = null, P = f, L = (f = 0), V = null;
      P !== null && L < g.length;
      L++
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var z = m(d, P, g[L], S);
      if (z === null) {
        P === null && (P = V);
        break;
      }
      (e && P && z.alternate === null && t(d, P),
        (f = l(z, f, L)),
        b === null ? (k = z) : (b.sibling = z),
        (b = z),
        (P = V));
    }
    if (L === g.length) return (n(d, P), X && Xt(d, L), k);
    if (P === null) {
      for (; L < g.length; L++)
        ((P = h(d, g[L], S)),
          P !== null &&
            ((f = l(P, f, L)),
            b === null ? (k = P) : (b.sibling = P),
            (b = P)));
      return (X && Xt(d, L), k);
    }
    for (P = r(d, P); L < g.length; L++)
      ((V = x(P, d, L, g[L], S)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? L : V.key),
          (f = l(V, f, L)),
          b === null ? (k = V) : (b.sibling = V),
          (b = V)));
    return (
      e &&
        P.forEach(function (I) {
          return t(d, I);
        }),
      X && Xt(d, L),
      k
    );
  }
  function j(d, f, g, S) {
    var k = nr(g);
    if (typeof k != "function") throw Error(C(150));
    if (((g = k.call(g)), g == null)) throw Error(C(151));
    for (
      var b = (k = null), P = f, L = (f = 0), V = null, z = g.next();
      P !== null && !z.done;
      L++, z = g.next()
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var I = m(d, P, z.value, S);
      if (I === null) {
        P === null && (P = V);
        break;
      }
      (e && P && I.alternate === null && t(d, P),
        (f = l(I, f, L)),
        b === null ? (k = I) : (b.sibling = I),
        (b = I),
        (P = V));
    }
    if (z.done) return (n(d, P), X && Xt(d, L), k);
    if (P === null) {
      for (; !z.done; L++, z = g.next())
        ((z = h(d, z.value, S)),
          z !== null &&
            ((f = l(z, f, L)),
            b === null ? (k = z) : (b.sibling = z),
            (b = z)));
      return (X && Xt(d, L), k);
    }
    for (P = r(d, P); !z.done; L++, z = g.next())
      ((z = x(P, d, L, z.value, S)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? L : z.key),
          (f = l(z, f, L)),
          b === null ? (k = z) : (b.sibling = z),
          (b = z)));
    return (
      e &&
        P.forEach(function (M) {
          return t(d, M);
        }),
      X && Xt(d, L),
      k
    );
  }
  function v(d, f, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Nn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ss:
          e: {
            for (var k = g.key, b = f; b !== null; ) {
              if (b.key === k) {
                if (((k = g.type), k === Nn)) {
                  if (b.tag === 7) {
                    (n(d, b.sibling),
                      (f = s(b, g.props.children)),
                      (f.return = d),
                      (d = f));
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === _t &&
                    oc(k) === b.type)
                ) {
                  (n(d, b.sibling),
                    (f = s(b, g.props)),
                    (f.ref = ar(d, b, g)),
                    (f.return = d),
                    (d = f));
                  break e;
                }
                n(d, b);
                break;
              } else t(d, b);
              b = b.sibling;
            }
            g.type === Nn
              ? ((f = ln(g.props.children, d.mode, S, g.key)),
                (f.return = d),
                (d = f))
              : ((S = As(g.type, g.key, g.props, null, d.mode, S)),
                (S.ref = ar(d, f, g)),
                (S.return = d),
                (d = S));
          }
          return a(d);
        case jn:
          e: {
            for (b = g.key; f !== null; ) {
              if (f.key === b)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  (n(d, f.sibling),
                    (f = s(f, g.children || [])),
                    (f.return = d),
                    (d = f));
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            ((f = li(g, d.mode, S)), (f.return = d), (d = f));
          }
          return a(d);
        case _t:
          return ((b = g._init), v(d, f, b(g._payload), S));
      }
      if (fr(g)) return N(d, f, g, S);
      if (nr(g)) return j(d, f, g, S);
      ms(d, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = s(f, g)), (f.return = d), (d = f))
          : (n(d, f), (f = si(g, d.mode, S)), (f.return = d), (d = f)),
        a(d))
      : n(d, f);
  }
  return v;
}
var $n = kd(!0),
  Ed = kd(!1),
  Ys = Jt(null),
  Xs = null,
  Pn = null,
  Ia = null;
function Da() {
  Ia = Pn = Xs = null;
}
function Fa(e) {
  var t = Ys.current;
  (Y(Ys), (e._currentValue = t));
}
function $i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  ((Xs = e),
    (Ia = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null)));
}
function Ge(e) {
  var t = e._currentValue;
  if (Ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (Xs === null) throw Error(C(308));
      ((Pn = e), (Xs.dependencies = { lanes: 0, firstContext: e }));
    } else Pn = Pn.next = e;
  return t;
}
var tn = null;
function Ma(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function Cd(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Ma(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function Ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Ma(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function _s(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ea(e, n));
  }
}
function cc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (l === null ? (s = l = a) : (l = l.next = a), (n = n.next));
      } while (n !== null);
      l === null ? (s = l = t) : (l = l.next = t);
    } else s = l = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Zs(e, t, n, r) {
  var s = e.updateQueue;
  Rt = !1;
  var l = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var c = o,
      u = c.next;
    ((c.next = null), a === null ? (l = u) : (a.next = u), (a = c));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (o = p.lastBaseUpdate),
      o !== a &&
        (o === null ? (p.firstBaseUpdate = u) : (o.next = u),
        (p.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var h = s.baseState;
    ((a = 0), (p = u = c = null), (o = l));
    do {
      var m = o.lane,
        x = o.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var N = e,
            j = o;
          switch (((m = t), (x = n), j.tag)) {
            case 1:
              if (((N = j.payload), typeof N == "function")) {
                h = N.call(x, h, m);
                break e;
              }
              h = N;
              break e;
            case 3:
              N.flags = (N.flags & -65537) | 128;
            case 0:
              if (
                ((N = j.payload),
                (m = typeof N == "function" ? N.call(x, h, m) : N),
                m == null)
              )
                break e;
              h = te({}, h, m);
              break e;
            case 2:
              Rt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = s.effects),
          m === null ? (s.effects = [o]) : m.push(o));
      } else
        ((x = {
          eventTime: x,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          p === null ? ((u = p = x), (c = h)) : (p = p.next = x),
          (a |= m));
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        ((m = o),
          (o = m.next),
          (m.next = null),
          (s.lastBaseUpdate = m),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (c = h),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = p),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((a |= s.lane), (s = s.next));
      while (s !== t);
    } else l === null && (s.shared.lanes = 0);
    ((dn |= a), (e.lanes = a), (e.memoizedState = h));
  }
}
function uc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(C(191, s));
        s.call(r);
      }
    }
}
var Kr = {},
  ut = Jt(Kr),
  zr = Jt(Kr),
  Ir = Jt(Kr);
function nn(e) {
  if (e === Kr) throw Error(C(174));
  return e;
}
function Ba(e, t) {
  switch ((K(Ir, t), K(zr, e), K(ut, Kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ni(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ni(t, e)));
  }
  (Y(ut), K(ut, t));
}
function Hn() {
  (Y(ut), Y(zr), Y(Ir));
}
function _d(e) {
  nn(Ir.current);
  var t = nn(ut.current),
    n = Ni(t, e.type);
  t !== n && (K(zr, e), K(ut, n));
}
function $a(e) {
  zr.current === e && (Y(ut), Y(zr));
}
var Z = Jt(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Xl = [];
function Ha() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Rs = kt.ReactCurrentDispatcher,
  Zl = kt.ReactCurrentBatchConfig,
  un = 0,
  ee = null,
  ce = null,
  de = null,
  tl = !1,
  wr = !1,
  Dr = 0,
  dm = 0;
function ye() {
  throw Error(C(321));
}
function Wa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Va(e, t, n, r, s, l) {
  if (
    ((un = l),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Rs.current = e === null || e.memoizedState === null ? mm : gm),
    (e = n(r, s)),
    wr)
  ) {
    l = 0;
    do {
      if (((wr = !1), (Dr = 0), 25 <= l)) throw Error(C(301));
      ((l += 1),
        (de = ce = null),
        (t.updateQueue = null),
        (Rs.current = xm),
        (e = n(r, s)));
    } while (wr);
  }
  if (
    ((Rs.current = nl),
    (t = ce !== null && ce.next !== null),
    (un = 0),
    (de = ce = ee = null),
    (tl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function qa() {
  var e = Dr !== 0;
  return ((Dr = 0), e);
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (ee.memoizedState = de = e) : (de = de.next = e), de);
}
function Ye() {
  if (ce === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = de === null ? ee.memoizedState : de.next;
  if (t !== null) ((de = t), (ce = e));
  else {
    if (e === null) throw Error(C(310));
    ((ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      de === null ? (ee.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ce,
    s = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = l.next), (l.next = a));
    }
    ((r.baseQueue = s = l), (n.pending = null));
  }
  if (s !== null) {
    ((l = s.next), (r = r.baseState));
    var o = (a = null),
      c = null,
      u = l;
    do {
      var p = u.lane;
      if ((un & p) === p)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var h = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((o = c = h), (a = r)) : (c = c.next = h),
          (ee.lanes |= p),
          (dn |= p));
      }
      u = u.next;
    } while (u !== null && u !== l);
    (c === null ? (a = r) : (c.next = o),
      st(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((l = s.lane), (ee.lanes |= l), (dn |= l), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    l = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((l = e(l, a.action)), (a = a.next));
    while (a !== s);
    (st(l, t.memoizedState) || (Te = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, r];
}
function Rd() {}
function Pd(e, t) {
  var n = ee,
    r = Ye(),
    s = t(),
    l = !st(r.memoizedState, s);
  if (
    (l && ((r.memoizedState = s), (Te = !0)),
    (r = r.queue),
    Ja(Ld.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Mr(9, Td.bind(null, n, r, s, t), void 0, null),
      fe === null)
    )
      throw Error(C(349));
    un & 30 || Od(n, t, s);
  }
  return s;
}
function Od(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Td(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ad(t) && zd(e));
}
function Ld(e, t, n) {
  return n(function () {
    Ad(t) && zd(e);
  });
}
function Ad(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function zd(e) {
  var t = Nt(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function dc(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hm.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Id() {
  return Ye().memoizedState;
}
function Ps(e, t, n, r) {
  var s = at();
  ((ee.flags |= e),
    (s.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function vl(e, t, n, r) {
  var s = Ye();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ce !== null) {
    var a = ce.memoizedState;
    if (((l = a.destroy), r !== null && Wa(r, a.deps))) {
      s.memoizedState = Mr(t, n, l, r);
      return;
    }
  }
  ((ee.flags |= e), (s.memoizedState = Mr(1 | t, n, l, r)));
}
function fc(e, t) {
  return Ps(8390656, 8, e, t);
}
function Ja(e, t) {
  return vl(2048, 8, e, t);
}
function Dd(e, t) {
  return vl(4, 2, e, t);
}
function Fd(e, t) {
  return vl(4, 4, e, t);
}
function Md(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ud(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    vl(4, 4, Md.bind(null, t, e), n)
  );
}
function Qa() {}
function Bd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $d(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hd(e, t, n) {
  return un & 21
    ? (st(n, t) || ((n = Qu()), (ee.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function fm(e, t) {
  var n = q;
  ((q = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Zl.transition;
  Zl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((q = n), (Zl.transition = r));
  }
}
function Wd() {
  return Ye().memoizedState;
}
function pm(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vd(e))
  )
    qd(t, n);
  else if (((n = Cd(e, t, n, r)), n !== null)) {
    var s = Ee();
    (rt(n, e, r, s), Jd(n, t, r));
  }
}
function hm(e, t, n) {
  var r = Bt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vd(e)) qd(t, s);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = l(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = o), st(o, a))) {
          var c = t.interleaved;
          (c === null
            ? ((s.next = s), Ma(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Cd(e, t, s, r)),
      n !== null && ((s = Ee()), rt(n, e, r, s), Jd(n, t, r)));
  }
}
function Vd(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function qd(e, t) {
  wr = tl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ea(e, n));
  }
}
var nl = {
    readContext: Ge,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: Ge,
    useCallback: function (e, t) {
      return ((at().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ge,
    useEffect: fc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ps(4194308, 4, Md.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = pm.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: dc,
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return ((e = fm.bind(null, e[1])), (at().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        s = at();
      if (X) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(C(349));
        un & 30 || Od(r, t, n);
      }
      s.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (s.queue = l),
        fc(Ld.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Mr(9, Td.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = fe.identifierPrefix;
      if (X) {
        var n = xt,
          r = gt;
        ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Dr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = dm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gm = {
    readContext: Ge,
    useCallback: Bd,
    useContext: Ge,
    useEffect: Ja,
    useImperativeHandle: Ud,
    useInsertionEffect: Dd,
    useLayoutEffect: Fd,
    useMemo: $d,
    useReducer: ei,
    useRef: Id,
    useState: function () {
      return ei(Fr);
    },
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      var t = Ye();
      return Hd(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Fr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Pd,
    useId: Wd,
    unstable_isNewReconciler: !1,
  },
  xm = {
    readContext: Ge,
    useCallback: Bd,
    useContext: Ge,
    useEffect: Ja,
    useImperativeHandle: Ud,
    useInsertionEffect: Dd,
    useLayoutEffect: Fd,
    useMemo: $d,
    useReducer: ti,
    useRef: Id,
    useState: function () {
      return ti(Fr);
    },
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      var t = Ye();
      return ce === null ? (t.memoizedState = e) : Hd(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Fr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Pd,
    useId: Wd,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    ((t = te({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var wl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      s = Bt(e),
      l = yt(r, s);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Mt(e, l, s)),
      t !== null && (rt(t, e, s, r), _s(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      s = Bt(e),
      l = yt(r, s);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Mt(e, l, s)),
      t !== null && (rt(t, e, s, r), _s(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Bt(e),
      s = yt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Mt(e, s, r)),
      t !== null && (rt(t, e, r, n), _s(t, e, r)));
  },
};
function pc(e, t, n, r, s, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Or(n, r) || !Or(s, l)
        : !0
  );
}
function Qd(e, t, n) {
  var r = !1,
    s = Vt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ge(l))
      : ((s = Ae(t) ? on : Se.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Un(e, s) : Vt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function hc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wl.enqueueReplaceState(t, t.state, null));
}
function Wi(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Ua(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (s.context = Ge(l))
    : ((l = Ae(t) ? on : Se.current), (s.context = Un(e, l))),
    (s.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Hi(e, t, l, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && wl.enqueueReplaceState(s, s.state, null),
      Zs(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Vp(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (l) {
    s =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ym = typeof WeakMap == "function" ? WeakMap : Map;
function Kd(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (sl || ((sl = !0), (ta = r)), Vi(e, t));
    }),
    n
  );
}
function Gd(e, t, n) {
  ((n = yt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Vi(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (Vi(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ym();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = Tm.bind(null, e, t, n)), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xc(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vm = kt.ReactCurrentOwner,
  Te = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Ed(t, null, n, r) : $n(t, e.child, n, r);
}
function yc(e, t, n, r, s) {
  n = n.render;
  var l = t.ref;
  return (
    Dn(t, s),
    (r = Va(e, t, n, r, l, s)),
    (n = qa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        St(e, t, s))
      : (X && n && La(t), (t.flags |= 1), ke(e, t, r, s), t.child)
  );
}
function vc(e, t, n, r, s) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !no(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Yd(e, t, l, r, s))
      : ((e = As(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & s))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Or), n(a, r) && e.ref === t.ref)
    )
      return St(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = $t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Yd(e, t, n, r, s) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Or(l, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = l), (e.lanes & s) !== 0))
        e.flags & 131072 && (Te = !0);
      else return ((t.lanes = e.lanes), St(e, t, s));
  }
  return qi(e, t, n, r, s);
}
function Xd(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Tn, Me),
        (Me |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Tn, Me),
          (Me |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        K(Tn, Me),
        (Me |= r));
    }
  else
    (l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Tn, Me),
      (Me |= r));
  return (ke(e, t, s, n), t.child);
}
function Zd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qi(e, t, n, r, s) {
  var l = Ae(n) ? on : Se.current;
  return (
    (l = Un(t, l)),
    Dn(t, s),
    (n = Va(e, t, n, r, l, s)),
    (r = qa()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        St(e, t, s))
      : (X && r && La(t), (t.flags |= 1), ke(e, t, n, s), t.child)
  );
}
function wc(e, t, n, r, s) {
  if (Ae(n)) {
    var l = !0;
    Qs(t);
  } else l = !1;
  if ((Dn(t, s), t.stateNode === null))
    (Os(e, t), Qd(t, n, r), Wi(t, n, r, s), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ge(u))
      : ((u = Ae(n) ? on : Se.current), (u = Un(t, u)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || c !== u) && hc(t, a, r, u)),
      (Rt = !1));
    var m = t.memoizedState;
    ((a.state = m),
      Zs(t, r, a, s),
      (c = t.memoizedState),
      o !== r || m !== c || Le.current || Rt
        ? (typeof p == "function" && (Hi(t, n, p, r), (c = t.memoizedState)),
          (o = Rt || pc(t, n, o, r, m, c, u))
            ? (h ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      bd(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ze(t.type, o)),
      (a.props = u),
      (h = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Ge(c))
        : ((c = Ae(n) ? on : Se.current), (c = Un(t, c))));
    var x = n.getDerivedStateFromProps;
    ((p =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== h || m !== c) && hc(t, a, r, c)),
      (Rt = !1),
      (m = t.memoizedState),
      (a.state = m),
      Zs(t, r, a, s));
    var N = t.memoizedState;
    o !== h || m !== N || Le.current || Rt
      ? (typeof x == "function" && (Hi(t, n, x, r), (N = t.memoizedState)),
        (u = Rt || pc(t, n, u, r, m, N, c) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, N, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, N, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = N)),
        (a.props = r),
        (a.state = N),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ji(e, t, n, r, l, s);
}
function Ji(e, t, n, r, s, l) {
  Zd(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (s && lc(t, n, !1), St(e, t, l));
  ((r = t.stateNode), (vm.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = $n(t, e.child, null, l)), (t.child = $n(t, null, o, l)))
      : ke(e, t, o, l),
    (t.memoizedState = r.state),
    s && lc(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    Ba(e, t.containerInfo));
}
function jc(e, t, n, r, s) {
  return (Bn(), za(s), (t.flags |= 256), ke(e, t, n, r), t.child);
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    s = Z.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    K(Z, s & 1),
    e === null)
  )
    return (
      Bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Sl(a, r, 0, null)),
              (e = ln(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ki(n)),
              (t.memoizedState = Qi),
              e)
            : Ka(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return wm(e, t, a, r, o, s, n);
  if (l) {
    ((l = r.fallback), (a = t.mode), (s = e.child), (o = s.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = $t(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (l = $t(o, l)) : ((l = ln(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ki(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qi),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = $t(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ka(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gs(e, t, n, r) {
  return (
    r !== null && za(r),
    $n(t, e.child, null, n),
    (e = Ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wm(e, t, n, r, s, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(C(422)))), gs(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (s = t.mode),
          (r = Sl({ mode: "visible", children: r.children }, s, 0, null)),
          (l = ln(l, s, a, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && $n(t, e.child, null, a),
          (t.child.memoizedState = Ki(a)),
          (t.memoizedState = Qi),
          l);
  if (!(t.mode & 1)) return gs(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (l = Error(C(419))),
      (r = ni(l, r, void 0)),
      gs(e, t, a, r)
    );
  }
  if (((o = (a & e.childLanes) !== 0), Te || o)) {
    if (((r = fe), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== l.retryLane &&
          ((l.retryLane = s), Nt(e, s), rt(r, e, s, -1)));
    }
    return (to(), (r = ni(Error(C(421)))), gs(e, t, a, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lm.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ue = Ft(s.nextSibling)),
      (Be = t),
      (X = !0),
      (tt = null),
      e !== null &&
        ((qe[Je++] = gt),
        (qe[Je++] = xt),
        (qe[Je++] = cn),
        (gt = e.id),
        (xt = e.overflow),
        (cn = t)),
      (t = Ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), $i(e.return, t, n));
}
function ri(e, t, n, r, s) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = s));
}
function nf(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    l = r.tail;
  if ((ke(e, t, r.children, n), (r = Z.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nc(e, n, t);
        else if (e.tag === 19) Nc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((K(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && el(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ri(t, !1, s, n, l));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && el(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        ri(t, !0, n, null, l);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Os(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = $t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function jm(e, t, n) {
  switch (t.tag) {
    case 3:
      (ef(t), Bn());
      break;
    case 5:
      _d(t);
      break;
    case 1:
      Ae(t.type) && Qs(t);
      break;
    case 4:
      Ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (K(Ys, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? tf(e, t, n)
            : (K(Z, Z.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      K(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        K(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Xd(e, t, n));
  }
  return St(e, t, n);
}
var rf, Gi, sf, lf;
rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Gi = function () {};
sf = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), nn(ut.current));
    var l = null;
    switch (n) {
      case "input":
        ((s = yi(e, s)), (r = yi(e, r)), (l = []));
        break;
      case "select":
        ((s = te({}, s, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((s = ji(e, s)), (r = ji(e, r)), (l = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qs);
    }
    Si(n, r);
    var a;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var o = s[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (kr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((o = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else (n || (l || (l = []), l.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (l = l || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (l = l || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (kr.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && G("scroll", e),
                    l || o === c || (l = []))
                  : (l = l || []).push(u, c));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
lf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Nm(e, t, n) {
  var r = t.pendingProps;
  switch ((Aa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ve(t), null);
    case 1:
      return (Ae(t.type) && Js(), ve(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        Y(Le),
        Y(Se),
        Ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (sa(tt), (tt = null)))),
        Gi(e, t),
        ve(t),
        null
      );
    case 5:
      $a(t);
      var s = nn(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (sf(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (ve(t), null);
        }
        if (((e = nn(ut.current)), hs(t))) {
          ((r = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((r[ot] = t), (r[Ar] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (G("cancel", r), G("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < hr.length; s++) G(hr[s], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (G("error", r), G("load", r));
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              (Oo(r, l), G("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!l.multiple }),
                G("invalid", r));
              break;
            case "textarea":
              (Lo(r, l), G("invalid", r));
          }
          (Si(n, l), (s = null));
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var o = l[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      ps(r.textContent, o, e),
                    (s = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      ps(r.textContent, o, e),
                    (s = ["children", "" + o]))
                : kr.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              (ls(r), To(r, l, !0));
              break;
            case "textarea":
              (ls(r), Ao(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = qs);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[ot] = t),
            (e[Ar] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = ki(n, r)), n)) {
              case "dialog":
                (G("cancel", e), G("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (G("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < hr.length; s++) G(hr[s], e);
                s = r;
                break;
              case "source":
                (G("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (G("error", e), G("load", e), (s = r));
                break;
              case "details":
                (G("toggle", e), (s = r));
                break;
              case "input":
                (Oo(e, r), (s = yi(e, r)), G("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = te({}, r, { value: void 0 })),
                  G("invalid", e));
                break;
              case "textarea":
                (Lo(e, r), (s = ji(e, r)), G("invalid", e));
                break;
              default:
                s = r;
            }
            (Si(n, s), (o = s));
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var c = o[l];
                l === "style"
                  ? Iu(e, c)
                  : l === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Au(e, c))
                    : l === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Er(e, c)
                        : typeof c == "number" && Er(e, "" + c)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (kr.hasOwnProperty(l)
                          ? c != null && l === "onScroll" && G("scroll", e)
                          : c != null && va(e, l, c, a));
              }
            switch (n) {
              case "input":
                (ls(e), To(e, r, !1));
                break;
              case "textarea":
                (ls(e), Ao(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Ln(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = qs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ve(t), null);
    case 6:
      if (e && t.stateNode != null) lf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = nn(Ir.current)), nn(ut.current), hs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (l = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r));
      }
      return (ve(t), null);
    case 13:
      if (
        (Y(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Ue !== null && t.mode & 1 && !(t.flags & 128))
          (Sd(), Bn(), (t.flags |= 98560), (l = !1));
        else if (((l = hs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(C(317));
            l[ot] = t;
          } else
            (Bn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ve(t), (l = !1));
        } else (tt !== null && (sa(tt), (tt = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : to())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        Hn(),
        Gi(e, t),
        e === null && Tr(t.stateNode.containerInfo),
        ve(t),
        null
      );
    case 10:
      return (Fa(t.type._context), ve(t), null);
    case 17:
      return (Ae(t.type) && Js(), ve(t), null);
    case 19:
      if ((Y(Z), (l = t.memoizedState), l === null)) return (ve(t), null);
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) or(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = el(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    or(l, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (K(Z, (Z.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            se() > Vn &&
            ((t.flags |= 128), (r = !0), or(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              or(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !X)
            )
              return (ve(t), null);
          } else
            2 * se() - l.renderingStartTime > Vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), or(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = se()),
          (t.sibling = null),
          (n = Z.current),
          K(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        eo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Sm(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        Y(Le),
        Y(Se),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ($a(t), null);
    case 13:
      if ((Y(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Bn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Y(Z), null);
    case 4:
      return (Hn(), null);
    case 10:
      return (Fa(t.type._context), null);
    case 22:
    case 23:
      return (eo(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1,
  je = !1,
  km = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Sc = !1;
function Em(e, t) {
  if (((Ai = Hs), (e = ud()), Ta(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, l.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            u = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (s !== 0 && h.nodeType !== 3) || (o = a + s),
                h !== l || (r !== 0 && h.nodeType !== 3) || (c = a + r),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (x = h.firstChild) !== null;
            )
              ((m = h), (h = x));
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++u === s && (o = a),
                m === l && ++p === r && (c = a),
                (x = h.nextSibling) !== null)
              )
                break;
              ((h = m), (m = h.parentNode));
            }
            h = x;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Hs = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (T = e));
    else
      for (; T !== null; ) {
        t = T;
        try {
          var N = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (N !== null) {
                  var j = N.memoizedProps,
                    v = N.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : Ze(t.type, j),
                      v,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          re(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (T = e));
          break;
        }
        T = t.return;
      }
  return ((N = Sc), (Sc = !1), N);
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.destroy;
        ((s.destroy = void 0), l !== void 0 && Yi(t, n, l));
      }
      s = s.next;
    } while (s !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function af(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), af(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[Ar], delete t[Fi], delete t[am], delete t[om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function of(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || of(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; )
      (Zi(e, t, n), (e = e.sibling));
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ea(e, t, n), e = e.sibling; e !== null; )
      (ea(e, t, n), (e = e.sibling));
}
var he = null,
  et = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) (cf(e, t, n), (n = n.sibling));
}
function cf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || On(n, t);
    case 6:
      var r = he,
        s = et;
      ((he = null),
        Ct(e, t, n),
        (he = r),
        (et = s),
        he !== null &&
          (et
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode)));
      break;
    case 18:
      he !== null &&
        (et
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            Rr(e))
          : Gl(he, n.stateNode));
      break;
    case 4:
      ((r = he),
        (s = et),
        (he = n.stateNode.containerInfo),
        (et = !0),
        Ct(e, t, n),
        (he = r),
        (et = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var l = s,
            a = l.destroy;
          ((l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && Yi(n, t, a),
            (s = s.next));
        } while (s !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          re(n, t, o);
        }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Ct(e, t, n), (je = r))
        : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function Ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new km()),
      t.forEach(function (r) {
        var s = Am.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var l = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((he = o.stateNode), (et = !1));
              break e;
            case 3:
              ((he = o.stateNode.containerInfo), (et = !0));
              break e;
            case 4:
              ((he = o.stateNode.containerInfo), (et = !0));
              break e;
          }
          o = o.return;
        }
        if (he === null) throw Error(C(160));
        (cf(l, a, s), (he = null), (et = !1));
        var c = s.alternate;
        (c !== null && (c.return = null), (s.return = null));
      } catch (u) {
        re(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (uf(t, e), (t = t.sibling));
}
function uf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), it(e), r & 4)) {
        try {
          (jr(3, e, e.return), jl(3, e));
        } catch (j) {
          re(e, e.return, j);
        }
        try {
          jr(5, e, e.return);
        } catch (j) {
          re(e, e.return, j);
        }
      }
      break;
    case 1:
      (Xe(t, e), it(e), r & 512 && n !== null && On(n, n.return));
      break;
    case 5:
      if (
        (Xe(t, e),
        it(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Er(s, "");
        } catch (j) {
          re(e, e.return, j);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (o === "input" && l.type === "radio" && l.name != null && Ou(s, l),
              ki(o, a));
            var u = ki(o, l);
            for (a = 0; a < c.length; a += 2) {
              var p = c[a],
                h = c[a + 1];
              p === "style"
                ? Iu(s, h)
                : p === "dangerouslySetInnerHTML"
                  ? Au(s, h)
                  : p === "children"
                    ? Er(s, h)
                    : va(s, p, h, u);
            }
            switch (o) {
              case "input":
                vi(s, l);
                break;
              case "textarea":
                Tu(s, l);
                break;
              case "select":
                var m = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Ln(s, !!l.multiple, x, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Ln(s, !!l.multiple, l.defaultValue, !0)
                      : Ln(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[Ar] = l;
          } catch (j) {
            re(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((s = e.stateNode), (l = e.memoizedProps));
        try {
          s.nodeValue = l;
        } catch (j) {
          re(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (j) {
          re(e, e.return, j);
        }
      break;
    case 4:
      (Xe(t, e), it(e));
      break;
    case 13:
      (Xe(t, e),
        it(e),
        (s = e.child),
        s.flags & 8192 &&
          ((l = s.memoizedState !== null),
          (s.stateNode.isHidden = l),
          !l ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Xa = se())),
        r & 4 && Ec(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || p), Xe(t, e), (je = u)) : Xe(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (T = e, p = e.child; p !== null; ) {
            for (h = T = p; T !== null; ) {
              switch (((m = T), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, m, m.return);
                  break;
                case 1:
                  On(m, m.return);
                  var N = m.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (N.props = t.memoizedProps),
                        (N.state = t.memoizedState),
                        N.componentWillUnmount());
                    } catch (j) {
                      re(r, n, j);
                    }
                  }
                  break;
                case 5:
                  On(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bc(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (T = x)) : bc(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                ((s = h.stateNode),
                  u
                    ? ((l = s.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((o = h.stateNode),
                      (c = h.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = zu("display", a))));
              } catch (j) {
                re(e, e.return, j);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (j) {
                re(e, e.return, j);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (p === h && (p = null), (h = h.return));
          }
          (p === h && (p = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Xe(t, e), it(e), r & 4 && Ec(e));
      break;
    case 21:
      break;
    default:
      (Xe(t, e), it(e));
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (of(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Er(s, ""), (r.flags &= -33));
          var l = kc(e);
          ea(e, l, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = kc(e);
          Zi(e, o, a);
          break;
        default:
          throw Error(C(161));
      }
    } catch (c) {
      re(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cm(e, t, n) {
  ((T = e), df(e));
}
function df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var s = T,
      l = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || xs;
      if (!a) {
        var o = s.alternate,
          c = (o !== null && o.memoizedState !== null) || je;
        o = xs;
        var u = je;
        if (((xs = a), (je = c) && !u))
          for (T = s; T !== null; )
            ((a = T),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? _c(s)
                : c !== null
                  ? ((c.return = a), (T = c))
                  : _c(s));
        for (; l !== null; ) ((T = l), df(l), (l = l.sibling));
        ((T = s), (xs = o), (je = u));
      }
      Cc(e);
    } else
      s.subtreeFlags & 8772 && l !== null ? ((l.return = s), (T = l)) : Cc(e);
  }
}
function Cc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && uc(t, l, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uc(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Rr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        je || (t.flags & 512 && Xi(t));
      } catch (m) {
        re(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (T = n));
      break;
    }
    T = t.return;
  }
}
function bc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (T = n));
      break;
    }
    T = t.return;
  }
}
function _c(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (c) {
            re(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              re(t, s, c);
            }
          }
          var l = t.return;
          try {
            Xi(t);
          } catch (c) {
            re(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Xi(t);
          } catch (c) {
            re(t, a, c);
          }
      }
    } catch (c) {
      re(t, t.return, c);
    }
    if (t === e) {
      T = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (T = o));
      break;
    }
    T = t.return;
  }
}
var bm = Math.ceil,
  rl = kt.ReactCurrentDispatcher,
  Ga = kt.ReactCurrentOwner,
  Ke = kt.ReactCurrentBatchConfig,
  H = 0,
  fe = null,
  le = null,
  ge = 0,
  Me = 0,
  Tn = Jt(0),
  ue = 0,
  Ur = null,
  dn = 0,
  Nl = 0,
  Ya = 0,
  Nr = null,
  Oe = null,
  Xa = 0,
  Vn = 1 / 0,
  ht = null,
  sl = !1,
  ta = null,
  Ut = null,
  ys = !1,
  Lt = null,
  ll = 0,
  Sr = 0,
  na = null,
  Ts = -1,
  Ls = 0;
function Ee() {
  return H & 6 ? se() : Ts !== -1 ? Ts : (Ts = se());
}
function Bt(e) {
  return e.mode & 1
    ? H & 2 && ge !== 0
      ? ge & -ge
      : um.transition !== null
        ? (Ls === 0 && (Ls = Qu()), Ls)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : td(e.type))),
          e)
    : 1;
}
function rt(e, t, n, r) {
  if (50 < Sr) throw ((Sr = 0), (na = null), Error(C(185)));
  (qr(e, n, r),
    (!(H & 2) || e !== fe) &&
      (e === fe && (!(H & 2) && (Nl |= n), ue === 4 && Ot(e, ge)),
      ze(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Vn = se() + 500), yl && Qt())));
}
function ze(e, t) {
  var n = e.callbackNode;
  uh(e, t);
  var r = $s(e, e === fe ? ge : 0);
  if (r === 0)
    (n !== null && Do(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Do(n), t === 1))
      (e.tag === 0 ? cm(Rc.bind(null, e)) : wd(Rc.bind(null, e)),
        lm(function () {
          !(H & 6) && Qt();
        }),
        (n = null));
    else {
      switch (Ku(r)) {
        case 1:
          n = ka;
          break;
        case 4:
          n = qu;
          break;
        case 16:
          n = Bs;
          break;
        case 536870912:
          n = Ju;
          break;
        default:
          n = Bs;
      }
      n = vf(n, ff.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ff(e, t) {
  if (((Ts = -1), (Ls = 0), H & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = $s(e, e === fe ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var s = H;
    H |= 2;
    var l = hf();
    (fe !== e || ge !== t) && ((ht = null), (Vn = se() + 500), sn(e, t));
    do
      try {
        Pm();
        break;
      } catch (o) {
        pf(e, o);
      }
    while (!0);
    (Da(),
      (rl.current = l),
      (H = s),
      le !== null ? (t = 0) : ((fe = null), (ge = 0), (t = ue)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Ri(e)), s !== 0 && ((r = s), (t = ra(e, s)))), t === 1)
    )
      throw ((n = Ur), sn(e, 0), Ot(e, r), ze(e, se()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !_m(s) &&
          ((t = il(e, r)),
          t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = ra(e, l)))),
          t === 1))
      )
        throw ((n = Ur), sn(e, 0), Ot(e, r), ze(e, se()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Zt(e, Oe, ht);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = Xa + 500 - se()), 10 < t))
          ) {
            if ($s(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ee(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Di(Zt.bind(null, e, Oe, ht), t);
            break;
          }
          Zt(e, Oe, ht);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - nt(r);
            ((l = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~l));
          }
          if (
            ((r = s),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * bm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Di(Zt.bind(null, e, Oe, ht), r);
            break;
          }
          Zt(e, Oe, ht);
          break;
        case 5:
          Zt(e, Oe, ht);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (ze(e, se()), e.callbackNode === n ? ff.bind(null, e) : null);
}
function ra(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && sa(t)),
    e
  );
}
function sa(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function _m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            l = s.getSnapshot;
          s = s.value;
          try {
            if (!st(l(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~Ya,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Rc(e) {
  if (H & 6) throw Error(C(327));
  Fn();
  var t = $s(e, 0);
  if (!(t & 1)) return (ze(e, se()), null);
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = ra(e, r)));
  }
  if (n === 1) throw ((n = Ur), sn(e, 0), Ot(e, t), ze(e, se()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Oe, ht),
    ze(e, se()),
    null
  );
}
function Za(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    ((H = n), H === 0 && ((Vn = se() + 500), yl && Qt()));
  }
}
function fn(e) {
  Lt !== null && Lt.tag === 0 && !(H & 6) && Fn();
  var t = H;
  H |= 1;
  var n = Ke.transition,
    r = q;
  try {
    if (((Ke.transition = null), (q = 1), e)) return e();
  } finally {
    ((q = r), (Ke.transition = n), (H = t), !(H & 6) && Qt());
  }
}
function eo() {
  ((Me = Tn.current), Y(Tn));
}
function sn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sm(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Aa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Js());
          break;
        case 3:
          (Hn(), Y(Le), Y(Se), Ha());
          break;
        case 5:
          $a(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          Fa(r.type._context);
          break;
        case 22:
        case 23:
          eo();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = $t(e.current, null)),
    (ge = Me = t),
    (ue = 0),
    (Ur = null),
    (Ya = Nl = dn = 0),
    (Oe = Nr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          ((l.next = s), (r.next = a));
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function pf(e, t) {
  do {
    var n = le;
    try {
      if ((Da(), (Rs.current = nl), tl)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        tl = !1;
      }
      if (
        ((un = 0),
        (de = ce = ee = null),
        (wr = !1),
        (Dr = 0),
        (Ga.current = null),
        n === null || n.return === null)
      ) {
        ((ue = 1), (Ur = t), (le = null));
        break;
      }
      e: {
        var l = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = ge),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            p = o,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = gc(a);
          if (x !== null) {
            ((x.flags &= -257),
              xc(x, a, o, l, t),
              x.mode & 1 && mc(l, u, t),
              (t = x),
              (c = u));
            var N = t.updateQueue;
            if (N === null) {
              var j = new Set();
              (j.add(c), (t.updateQueue = j));
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (mc(l, u, t), to());
              break e;
            }
            c = Error(C(426));
          }
        } else if (X && o.mode & 1) {
          var v = gc(a);
          if (v !== null) {
            (!(v.flags & 65536) && (v.flags |= 256),
              xc(v, a, o, l, t),
              za(Wn(c, o)));
            break e;
          }
        }
        ((l = c = Wn(c, o)),
          ue !== 4 && (ue = 2),
          Nr === null ? (Nr = [l]) : Nr.push(l),
          (l = a));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var d = Kd(l, c, t);
              cc(l, d);
              break e;
            case 1:
              o = c;
              var f = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(g))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var S = Gd(l, o, t);
                cc(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      gf(n);
    } catch (k) {
      ((t = k), le === n && n !== null && (le = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function hf() {
  var e = rl.current;
  return ((rl.current = nl), e === null ? nl : e);
}
function to() {
  ((ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(dn & 268435455) && !(Nl & 268435455)) || Ot(fe, ge));
}
function il(e, t) {
  var n = H;
  H |= 2;
  var r = hf();
  (fe !== e || ge !== t) && ((ht = null), sn(e, t));
  do
    try {
      Rm();
      break;
    } catch (s) {
      pf(e, s);
    }
  while (!0);
  if ((Da(), (H = n), (rl.current = r), le !== null)) throw Error(C(261));
  return ((fe = null), (ge = 0), ue);
}
function Rm() {
  for (; le !== null; ) mf(le);
}
function Pm() {
  for (; le !== null && !th(); ) mf(le);
}
function mf(e) {
  var t = yf(e.alternate, e, Me);
  ((e.memoizedProps = e.pendingProps),
    t === null ? gf(e) : (le = t),
    (Ga.current = null));
}
function gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sm(n, t)), n !== null)) {
        ((n.flags &= 32767), (le = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ue = 6), (le = null));
        return;
      }
    } else if (((n = Nm(n, t, Me)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Zt(e, t, n) {
  var r = q,
    s = Ke.transition;
  try {
    ((Ke.transition = null), (q = 1), Om(e, t, n, r));
  } finally {
    ((Ke.transition = s), (q = r));
  }
  return null;
}
function Om(e, t, n, r) {
  do Fn();
  while (Lt !== null);
  if (H & 6) throw Error(C(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (dh(e, l),
    e === fe && ((le = fe = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ys ||
      ((ys = !0),
      vf(Bs, function () {
        return (Fn(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Ke.transition), (Ke.transition = null));
    var a = q;
    q = 1;
    var o = H;
    ((H |= 4),
      (Ga.current = null),
      Em(e, n),
      uf(n, e),
      Yh(zi),
      (Hs = !!Ai),
      (zi = Ai = null),
      (e.current = n),
      Cm(n),
      nh(),
      (H = o),
      (q = a),
      (Ke.transition = l));
  } else e.current = n;
  if (
    (ys && ((ys = !1), (Lt = e), (ll = s)),
    (l = e.pendingLanes),
    l === 0 && (Ut = null),
    lh(n.stateNode),
    ze(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (sl) throw ((sl = !1), (e = ta), (ta = null), e);
  return (
    ll & 1 && e.tag !== 0 && Fn(),
    (l = e.pendingLanes),
    l & 1 ? (e === na ? Sr++ : ((Sr = 0), (na = e))) : (Sr = 0),
    Qt(),
    null
  );
}
function Fn() {
  if (Lt !== null) {
    var e = Ku(ll),
      t = Ke.transition,
      n = q;
    try {
      if (((Ke.transition = null), (q = 16 > e ? 16 : e), Lt === null))
        var r = !1;
      else {
        if (((e = Lt), (Lt = null), (ll = 0), H & 6)) throw Error(C(331));
        var s = H;
        for (H |= 4, T = e.current; T !== null; ) {
          var l = T,
            a = l.child;
          if (T.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (T = u; T !== null; ) {
                  var p = T;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, p, l);
                  }
                  var h = p.child;
                  if (h !== null) ((h.return = p), (T = h));
                  else
                    for (; T !== null; ) {
                      p = T;
                      var m = p.sibling,
                        x = p.return;
                      if ((af(p), p === u)) {
                        T = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = x), (T = m));
                        break;
                      }
                      T = x;
                    }
                }
              }
              var N = l.alternate;
              if (N !== null) {
                var j = N.child;
                if (j !== null) {
                  N.child = null;
                  do {
                    var v = j.sibling;
                    ((j.sibling = null), (j = v));
                  } while (j !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) ((a.return = l), (T = a));
          else
            e: for (; T !== null; ) {
              if (((l = T), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                ((d.return = l.return), (T = d));
                break e;
              }
              T = l.return;
            }
        }
        var f = e.current;
        for (T = f; T !== null; ) {
          a = T;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) ((g.return = a), (T = g));
          else
            e: for (a = f; T !== null; ) {
              if (((o = T), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, o);
                  }
                } catch (k) {
                  re(o, o.return, k);
                }
              if (o === a) {
                T = null;
                break e;
              }
              var S = o.sibling;
              if (S !== null) {
                ((S.return = o.return), (T = S));
                break e;
              }
              T = o.return;
            }
        }
        if (
          ((H = s), Qt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((q = n), (Ke.transition = t));
    }
  }
  return !1;
}
function Pc(e, t, n) {
  ((t = Wn(n, t)),
    (t = Kd(e, t, 1)),
    (e = Mt(e, t, 1)),
    (t = Ee()),
    e !== null && (qr(e, 1, t), ze(e, t)));
}
function re(e, t, n) {
  if (e.tag === 3) Pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          ((e = Wn(n, e)),
            (e = Gd(t, e, 1)),
            (t = Mt(t, e, 1)),
            (e = Ee()),
            t !== null && (qr(t, 1, e), ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Tm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ge & n) === n &&
      (ue === 4 || (ue === 3 && (ge & 130023424) === ge && 500 > se() - Xa)
        ? sn(e, 0)
        : (Ya |= n)),
    ze(e, t));
}
function xf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = os), (os <<= 1), !(os & 130023424) && (os = 4194304))
      : (t = 1));
  var n = Ee();
  ((e = Nt(e, t)), e !== null && (qr(e, t, n), ze(e, n)));
}
function Lm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), xf(e, n));
}
function Am(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), xf(e, n));
}
var yf;
yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Te = !1), jm(e, t, n));
      Te = !!(e.flags & 131072);
    }
  else ((Te = !1), X && t.flags & 1048576 && jd(t, Gs, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Os(e, t), (e = t.pendingProps));
      var s = Un(t, Se.current);
      (Dn(t, n), (s = Va(null, t, r, e, s, n)));
      var l = qa();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((l = !0), Qs(t)) : (l = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ua(t),
            (s.updater = wl),
            (t.stateNode = s),
            (s._reactInternals = t),
            Wi(t, r, e, n),
            (t = Ji(null, t, r, !0, l, n)))
          : ((t.tag = 0), X && l && La(t), ke(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Os(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Im(r)),
          (e = Ze(r, e)),
          s)
        ) {
          case 0:
            t = qi(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = vc(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ze(r, s)),
        qi(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ze(r, s)),
        wc(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (l = t.memoizedState),
          (s = l.element),
          bd(e, t),
          Zs(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ((s = Wn(Error(C(423)), t)), (t = jc(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Wn(Error(C(424)), t)), (t = jc(e, t, r, n, s)));
            break e;
          } else
            for (
              Ue = Ft(t.stateNode.containerInfo.firstChild),
                Be = t,
                X = !0,
                tt = null,
                n = Ed(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Bn(), r === s)) {
            t = St(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _d(t),
        e === null && Bi(t),
        (r = t.type),
        (s = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = s.children),
        Ii(r, s) ? (a = null) : l !== null && Ii(r, l) && (t.flags |= 32),
        Zd(e, t),
        ke(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Bi(t), null);
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        Ba(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ze(r, s)),
        yc(e, t, r, s, n)
      );
    case 7:
      return (ke(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (l = t.memoizedProps),
          (a = s.value),
          K(Ys, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (st(l.value, a)) {
            if (l.children === s.children && !Le.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                a = l.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (l.tag === 1) {
                      ((c = yt(-1, n & -n)), (c.tag = 2));
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        (p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      $i(l.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(C(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  $i(a, n, t),
                  (a = l.sibling));
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    ((l.return = a.return), (a = l));
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        (ke(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (s = Ge(s)),
        (r = r(s)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Ze(r, t.pendingProps)),
        (s = Ze(r.type, s)),
        vc(e, t, r, s, n)
      );
    case 15:
      return Yd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ze(r, s)),
        Os(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Qs(t)) : (e = !1),
        Dn(t, n),
        Qd(t, r, s),
        Wi(t, r, s, n),
        Ji(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return Xd(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function vf(e, t) {
  return Vu(e, t);
}
function zm(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Qe(e, t, n, r) {
  return new zm(e, t, n, r);
}
function no(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Im(e) {
  if (typeof e == "function") return no(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ja)) return 11;
    if (e === Na) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function As(e, t, n, r, s, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) no(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Nn:
        return ln(n.children, s, l, t);
      case wa:
        ((a = 8), (s |= 8));
        break;
      case hi:
        return (
          (e = Qe(12, n, t, s | 2)),
          (e.elementType = hi),
          (e.lanes = l),
          e
        );
      case mi:
        return ((e = Qe(13, n, t, s)), (e.elementType = mi), (e.lanes = l), e);
      case gi:
        return ((e = Qe(19, n, t, s)), (e.elementType = gi), (e.lanes = l), e);
      case _u:
        return Sl(n, s, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cu:
              a = 10;
              break e;
            case bu:
              a = 9;
              break e;
            case ja:
              a = 11;
              break e;
            case Na:
              a = 14;
              break e;
            case _t:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(a, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = l),
    t
  );
}
function ln(e, t, n, r) {
  return ((e = Qe(7, e, r, t)), (e.lanes = n), e);
}
function Sl(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = _u),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function si(e, t, n) {
  return ((e = Qe(6, e, null, t)), (e.lanes = n), e);
}
function li(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dm(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function ro(e, t, n, r, s, l, a, o, c) {
  return (
    (e = new Dm(e, t, n, o, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Qe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ua(l),
    e
  );
}
function Fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wf(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return vd(e, n, t);
  }
  return t;
}
function jf(e, t, n, r, s, l, a, o, c) {
  return (
    (e = ro(n, r, !0, e, s, l, a, o, c)),
    (e.context = wf(null)),
    (n = e.current),
    (r = Ee()),
    (s = Bt(n)),
    (l = yt(r, s)),
    (l.callback = t ?? null),
    Mt(n, l, s),
    (e.current.lanes = s),
    qr(e, s, r),
    ze(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var s = t.current,
    l = Ee(),
    a = Bt(s);
  return (
    (n = wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mt(s, t, a)),
    e !== null && (rt(e, s, a, l), _s(e, s, a)),
    a
  );
}
function al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function so(e, t) {
  (Oc(e, t), (e = e.alternate) && Oc(e, t));
}
function Mm() {
  return null;
}
var Nf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lo(e) {
  this._internalRoot = e;
}
El.prototype.render = lo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  kl(e, t, null, null);
};
El.prototype.unmount = lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (fn(function () {
      kl(null, e, null, null);
    }),
      (t[jt] = null));
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    (Pt.splice(n, 0, e), n === 0 && ed(e));
  }
};
function io(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function Um(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = al(a);
        l.call(u);
      };
    }
    var a = jf(t, r, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = a),
      (e[jt] = a.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = al(c);
      o.call(u);
    };
  }
  var c = ro(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = c),
    (e[jt] = c.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      kl(t, c, n, r);
    }),
    c
  );
}
function bl(e, t, n, r, s) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof s == "function") {
      var o = s;
      s = function () {
        var c = al(a);
        o.call(c);
      };
    }
    kl(t, a, e, s);
  } else a = Um(n, t, e, s, r);
  return al(a);
}
Gu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (Ea(t, n | 1), ze(t, se()), !(H & 6) && ((Vn = se() + 500), Qt()));
      }
      break;
    case 13:
      (fn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var s = Ee();
          rt(r, e, 1, s);
        }
      }),
        so(e, 1));
  }
};
Ca = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      rt(t, e, 134217728, n);
    }
    so(e, 134217728);
  }
};
Yu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Ee();
      rt(n, e, t, r);
    }
    so(e, t);
  }
};
Xu = function () {
  return q;
};
Zu = function (e, t) {
  var n = q;
  try {
    return ((q = e), t());
  } finally {
    q = n;
  }
};
Ci = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = xl(r);
            if (!s) throw Error(C(90));
            (Pu(r), vi(r, s));
          }
        }
      }
      break;
    case "textarea":
      Tu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ln(e, !!n.multiple, t, !1));
  }
};
Mu = Za;
Uu = fn;
var Bm = { usingClientEntryPoint: !1, Events: [Qr, Cn, xl, Du, Fu, Za] },
  cr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  $m = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Hu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Mm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vs.isDisabled && vs.supportsFiber)
    try {
      ((pl = vs.inject($m)), (ct = vs));
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!io(t)) throw Error(C(200));
  return Fm(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!io(e)) throw Error(C(299));
  var n = !1,
    r = "",
    s = Nf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = ro(e, 1, !1, null, null, n, !1, r, s)),
    (e[jt] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new lo(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = Hu(t)), (e = e === null ? null : e.stateNode), e);
};
He.flushSync = function (e) {
  return fn(e);
};
He.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(C(200));
  return bl(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!io(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    l = "",
    a = Nf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = jf(t, null, e, 1, n ?? null, s, !1, l, a)),
    (e[jt] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new El(t);
};
He.render = function (e, t, n) {
  if (!Cl(t)) throw Error(C(200));
  return bl(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (fn(function () {
        bl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[jt] = null));
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Za;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return bl(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Sf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sf);
    } catch (e) {
      console.error(e);
    }
}
(Sf(), (Nu.exports = He));
var Hm = Nu.exports,
  Lc = Hm;
((fi.createRoot = Lc.createRoot), (fi.hydrateRoot = Lc.hydrateRoot));
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Br() {
  return (
    (Br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Br.apply(null, arguments)
  );
}
var At;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(At || (At = {}));
const Ac = "popstate";
function Wm(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: l, search: a, hash: o } = r.location;
    return la(
      "",
      { pathname: l, search: a, hash: o },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : ol(s);
  }
  return qm(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ao(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vm() {
  return Math.random().toString(36).substr(2, 8);
}
function zc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function la(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Br(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xn(t) : t,
      { state: n, key: (t && t.key) || r || Vm() },
    )
  );
}
function ol(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function qm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: l = !1 } = r,
    a = s.history,
    o = At.Pop,
    c = null,
    u = p();
  u == null && ((u = 0), a.replaceState(Br({}, a.state, { idx: u }), ""));
  function p() {
    return (a.state || { idx: null }).idx;
  }
  function h() {
    o = At.Pop;
    let v = p(),
      d = v == null ? null : v - u;
    ((u = v), c && c({ action: o, location: j.location, delta: d }));
  }
  function m(v, d) {
    o = At.Push;
    let f = la(j.location, v, d);
    u = p() + 1;
    let g = zc(f, u),
      S = j.createHref(f);
    try {
      a.pushState(g, "", S);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      s.location.assign(S);
    }
    l && c && c({ action: o, location: j.location, delta: 1 });
  }
  function x(v, d) {
    o = At.Replace;
    let f = la(j.location, v, d);
    u = p();
    let g = zc(f, u),
      S = j.createHref(f);
    (a.replaceState(g, "", S),
      l && c && c({ action: o, location: j.location, delta: 0 }));
  }
  function N(v) {
    let d = s.location.origin !== "null" ? s.location.origin : s.location.href,
      f = typeof v == "string" ? v : ol(v);
    return (
      (f = f.replace(/ $/, "%20")),
      ie(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let j = {
    get action() {
      return o;
    },
    get location() {
      return e(s, a);
    },
    listen(v) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Ac, h),
        (c = v),
        () => {
          (s.removeEventListener(Ac, h), (c = null));
        }
      );
    },
    createHref(v) {
      return t(s, v);
    },
    createURL: N,
    encodeLocation(v) {
      let d = N(v);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: x,
    go(v) {
      return a.go(v);
    },
  };
  return j;
}
var Ic;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Ic || (Ic = {}));
function Jm(e, t, n) {
  return (n === void 0 && (n = "/"), Qm(e, t, n));
}
function Qm(e, t, n, r) {
  let s = typeof t == "string" ? Xn(t) : t,
    l = oo(s.pathname || "/", n);
  if (l == null) return null;
  let a = kf(e);
  Km(a);
  let o = null,
    c = ag(l);
  for (let u = 0; o == null && u < a.length; ++u) o = sg(a[u], c);
  return o;
}
function kf(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (l, a, o) => {
    let c = {
      relativePath: o === void 0 ? l.path || "" : o,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: a,
      route: l,
    };
    c.relativePath.startsWith("/") &&
      (ie(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Ht([r, c.relativePath]),
      p = n.concat(c);
    (l.children &&
      l.children.length > 0 &&
      (ie(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      kf(l.children, t, p, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: ng(u, l.index), routesMeta: p }));
  };
  return (
    e.forEach((l, a) => {
      var o;
      if (l.path === "" || !((o = l.path) != null && o.includes("?"))) s(l, a);
      else for (let c of Ef(l.path)) s(l, a, c);
    }),
    t
  );
}
function Ef(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [l, ""] : [l];
  let a = Ef(r.join("/")),
    o = [];
  return (
    o.push(...a.map((c) => (c === "" ? l : [l, c].join("/")))),
    s && o.push(...a),
    o.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function Km(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Gm = /^:[\w-]+$/,
  Ym = 3,
  Xm = 2,
  Zm = 1,
  eg = 10,
  tg = -2,
  Dc = (e) => e === "*";
function ng(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Dc) && (r += tg),
    t && (r += Xm),
    n
      .filter((s) => !Dc(s))
      .reduce((s, l) => s + (Gm.test(l) ? Ym : l === "" ? Zm : eg), r)
  );
}
function rg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sg(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    l = "/",
    a = [];
  for (let o = 0; o < r.length; ++o) {
    let c = r[o],
      u = o === r.length - 1,
      p = l === "/" ? t : t.slice(l.length) || "/",
      h = lg(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        p,
      ),
      m = c.route;
    if (!h) return null;
    (Object.assign(s, h.params),
      a.push({
        params: s,
        pathname: Ht([l, h.pathname]),
        pathnameBase: fg(Ht([l, h.pathnameBase])),
        route: m,
      }),
      h.pathnameBase !== "/" && (l = Ht([l, h.pathnameBase])));
  }
  return a;
}
function lg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ig(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let l = s[0],
    a = l.replace(/(.)\/+$/, "$1"),
    o = s.slice(1);
  return {
    params: r.reduce((u, p, h) => {
      let { paramName: m, isOptional: x } = p;
      if (m === "*") {
        let j = o[h] || "";
        a = l.slice(0, l.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const N = o[h];
      return (
        x && !N ? (u[m] = void 0) : (u[m] = (N || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: l,
    pathnameBase: a,
    pattern: e,
  };
}
function ig(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ao(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, o, c) => (
            r.push({ paramName: o, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function ag(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ao(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function oo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const og = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cg = (e) => og.test(e);
function ug(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? Xn(e) : e,
    l;
  if (n)
    if (cg(n)) l = n;
    else {
      if (n.includes("//")) {
        let a = n;
        ((n = _f(n)),
          ao(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (a + " -> " + n),
          ));
      }
      n.startsWith("/") ? (l = Fc(n.substring(1), "/")) : (l = Fc(n, t));
    }
  else l = t;
  return { pathname: l, search: pg(r), hash: hg(s) };
}
function Fc(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ii(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Cf(e, t) {
  let n = dg(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bf(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Xn(e))
    : ((s = Br({}, e)),
      ie(
        !s.pathname || !s.pathname.includes("?"),
        ii("?", "pathname", "search", s),
      ),
      ie(
        !s.pathname || !s.pathname.includes("#"),
        ii("#", "pathname", "hash", s),
      ),
      ie(!s.search || !s.search.includes("#"), ii("#", "search", "hash", s)));
  let l = e === "" || s.pathname === "",
    a = l ? "/" : s.pathname,
    o;
  if (a == null) o = n;
  else {
    let h = t.length - 1;
    if (!r && a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; ) (m.shift(), (h -= 1));
      s.pathname = m.join("/");
    }
    o = h >= 0 ? t[h] : "/";
  }
  let c = ug(s, o),
    u = a && a !== "/" && a.endsWith("/"),
    p = (l || a === ".") && n.endsWith("/");
  return (!c.pathname.endsWith("/") && (u || p) && (c.pathname += "/"), c);
}
const _f = (e) => e.replace(/\/\/+/g, "/"),
  Ht = (e) => _f(e.join("/")),
  fg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  hg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function mg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Rf = ["post", "put", "patch", "delete"];
new Set(Rf);
const gg = ["get", ...Rf];
new Set(gg);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
  return (
    ($r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $r.apply(null, arguments)
  );
}
const co = w.createContext(null),
  xg = w.createContext(null),
  xn = w.createContext(null),
  _l = w.createContext(null),
  Kt = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pf = w.createContext(null);
function yg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Gr() || ie(!1);
  let { basename: r, navigator: s } = w.useContext(xn),
    { hash: l, pathname: a, search: o } = Lf(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : Ht([r, a])),
    s.createHref({ pathname: c, search: o, hash: l })
  );
}
function Gr() {
  return w.useContext(_l) != null;
}
function Gt() {
  return (Gr() || ie(!1), w.useContext(_l).location);
}
function Of(e) {
  w.useContext(xn).static || w.useLayoutEffect(e);
}
function _e() {
  let { isDataRoute: e } = w.useContext(Kt);
  return e ? Og() : vg();
}
function vg() {
  Gr() || ie(!1);
  let e = w.useContext(co),
    { basename: t, future: n, navigator: r } = w.useContext(xn),
    { matches: s } = w.useContext(Kt),
    { pathname: l } = Gt(),
    a = JSON.stringify(Cf(s, n.v7_relativeSplatPath)),
    o = w.useRef(!1);
  return (
    Of(() => {
      o.current = !0;
    }),
    w.useCallback(
      function (u, p) {
        if ((p === void 0 && (p = {}), !o.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = bf(u, JSON.parse(a), l, p.relative === "path");
        (e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Ht([t, h.pathname])),
          (p.replace ? r.replace : r.push)(h, p.state, p));
      },
      [t, r, a, l, e],
    )
  );
}
function Tf() {
  let { matches: e } = w.useContext(Kt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Lf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(xn),
    { matches: s } = w.useContext(Kt),
    { pathname: l } = Gt(),
    a = JSON.stringify(Cf(s, r.v7_relativeSplatPath));
  return w.useMemo(() => bf(e, JSON.parse(a), l, n === "path"), [e, a, l, n]);
}
function wg(e, t) {
  return jg(e, t);
}
function jg(e, t, n, r) {
  Gr() || ie(!1);
  let { navigator: s } = w.useContext(xn),
    { matches: l } = w.useContext(Kt),
    a = l[l.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Gt(),
    p;
  if (t) {
    var h;
    let v = typeof t == "string" ? Xn(t) : t;
    (c === "/" || ((h = v.pathname) != null && h.startsWith(c)) || ie(!1),
      (p = v));
  } else p = u;
  let m = p.pathname || "/",
    x = m;
  if (c !== "/") {
    let v = c.replace(/^\//, "").split("/");
    x = "/" + m.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let N = Jm(e, { pathname: x }),
    j = Cg(
      N &&
        N.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: Ht([
              c,
              s.encodeLocation
                ? s.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? c
                : Ht([
                    c,
                    s.encodeLocation
                      ? s.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      r,
    );
  return t && j
    ? w.createElement(
        _l.Provider,
        {
          value: {
            location: $r(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p,
            ),
            navigationType: At.Pop,
          },
        },
        j,
      )
    : j;
}
function Ng() {
  let e = Pg(),
    t = mg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const Sg = w.createElement(Ng, null);
class kg extends w.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Kt.Provider,
          { value: this.props.routeContext },
          w.createElement(Pf.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Eg(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = w.useContext(co);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Kt.Provider, { value: t }, r)
  );
}
function Cg(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = (s = n) == null ? void 0 : s.errors;
  if (o != null) {
    let p = a.findIndex(
      (h) => h.route.id && (o == null ? void 0 : o[h.route.id]) !== void 0,
    );
    (p >= 0 || ie(!1), (a = a.slice(0, Math.min(a.length, p + 1))));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < a.length; p++) {
      let h = a[p];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = p),
        h.route.id)
      ) {
        let { loaderData: m, errors: x } = n,
          N =
            h.route.loader &&
            m[h.route.id] === void 0 &&
            (!x || x[h.route.id] === void 0);
        if (h.route.lazy || N) {
          ((c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((p, h, m) => {
    let x,
      N = !1,
      j = null,
      v = null;
    n &&
      ((x = o && h.route.id ? o[h.route.id] : void 0),
      (j = h.route.errorElement || Sg),
      c &&
        (u < 0 && m === 0
          ? (Tg("route-fallback"), (N = !0), (v = null))
          : u === m &&
            ((N = !0), (v = h.route.hydrateFallbackElement || null))));
    let d = t.concat(a.slice(0, m + 1)),
      f = () => {
        let g;
        return (
          x
            ? (g = j)
            : N
              ? (g = v)
              : h.route.Component
                ? (g = w.createElement(h.route.Component, null))
                : h.route.element
                  ? (g = h.route.element)
                  : (g = p),
          w.createElement(Eg, {
            match: h,
            routeContext: { outlet: p, matches: d, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? w.createElement(kg, {
          location: n.location,
          revalidation: n.revalidation,
          component: j,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Af = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Af || {}),
  zf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(zf || {});
function bg(e) {
  let t = w.useContext(co);
  return (t || ie(!1), t);
}
function _g(e) {
  let t = w.useContext(xg);
  return (t || ie(!1), t);
}
function Rg(e) {
  let t = w.useContext(Kt);
  return (t || ie(!1), t);
}
function If(e) {
  let t = Rg(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ie(!1), n.route.id);
}
function Pg() {
  var e;
  let t = w.useContext(Pf),
    n = _g(),
    r = If();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Og() {
  let { router: e } = bg(Af.UseNavigateStable),
    t = If(zf.UseNavigateStable),
    n = w.useRef(!1);
  return (
    Of(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (s, l) {
        (l === void 0 && (l = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, $r({ fromRouteId: t }, l))));
      },
      [e, t],
    )
  );
}
const Mc = {};
function Tg(e, t, n) {
  Mc[e] || (Mc[e] = !0);
}
function Lg(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function pe(e) {
  ie(!1);
}
function Ag(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = At.Pop,
    navigator: l,
    static: a = !1,
    future: o,
  } = e;
  Gr() && ie(!1);
  let c = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: c,
        navigator: l,
        static: a,
        future: $r({ v7_relativeSplatPath: !1 }, o),
      }),
      [c, o, l, a],
    );
  typeof r == "string" && (r = Xn(r));
  let {
      pathname: p = "/",
      search: h = "",
      hash: m = "",
      state: x = null,
      key: N = "default",
    } = r,
    j = w.useMemo(() => {
      let v = oo(p, c);
      return v == null
        ? null
        : {
            location: { pathname: v, search: h, hash: m, state: x, key: N },
            navigationType: s,
          };
    }, [c, p, h, m, x, N, s]);
  return j == null
    ? null
    : w.createElement(
        xn.Provider,
        { value: u },
        w.createElement(_l.Provider, { children: n, value: j }),
      );
}
function zg(e) {
  let { children: t, location: n } = e;
  return wg(ia(t), n);
}
new Promise(() => {});
function ia(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, s) => {
      if (!w.isValidElement(r)) return;
      let l = [...t, s];
      if (r.type === w.Fragment) {
        n.push.apply(n, ia(r.props.children, l));
        return;
      }
      (r.type !== pe && ie(!1), !r.props.index || !r.props.children || ie(!1));
      let a = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (a.children = ia(r.props.children, l)), n.push(a));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    aa.apply(null, arguments)
  );
}
function Ig(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Dg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Dg(e);
}
function oa(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((s) => [n, s]) : [[n, r]]);
          }, []),
    )
  );
}
function Mg(e, t) {
  let n = oa(e);
  return (
    t &&
      t.forEach((r, s) => {
        n.has(s) ||
          t.getAll(s).forEach((l) => {
            n.append(s, l);
          });
      }),
    n
  );
}
const Ug = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Bg = "6";
try {
  window.__reactRouterVersion = Bg;
} catch {}
const $g = "startTransition",
  Uc = Tp[$g];
function Hg(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    l = w.useRef();
  l.current == null && (l.current = Wm({ window: s, v5Compat: !0 }));
  let a = l.current,
    [o, c] = w.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    p = w.useCallback(
      (h) => {
        u && Uc ? Uc(() => c(h)) : c(h);
      },
      [c, u],
    );
  return (
    w.useLayoutEffect(() => a.listen(p), [a, p]),
    w.useEffect(() => Lg(r), [r]),
    w.createElement(Ag, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      future: r,
    })
  );
}
const Wg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $ = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: l,
        replace: a,
        state: o,
        target: c,
        to: u,
        preventScrollReset: p,
        viewTransition: h,
      } = t,
      m = Ig(t, Ug),
      { basename: x } = w.useContext(xn),
      N,
      j = !1;
    if (typeof u == "string" && Vg.test(u) && ((N = u), Wg))
      try {
        let g = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          k = oo(S.pathname, x);
        S.origin === g.origin && k != null
          ? (u = k + S.search + S.hash)
          : (j = !0);
      } catch {}
    let v = yg(u, { relative: s }),
      d = qg(u, {
        replace: a,
        state: o,
        target: c,
        preventScrollReset: p,
        relative: s,
        viewTransition: h,
      });
    function f(g) {
      (r && r(g), g.defaultPrevented || d(g));
    }
    return w.createElement(
      "a",
      aa({}, m, { href: N || v, onClick: j || l ? r : f, ref: n, target: c }),
    );
  });
var Bc;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Bc || (Bc = {}));
var $c;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})($c || ($c = {}));
function qg(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: l,
      relative: a,
      viewTransition: o,
    } = t === void 0 ? {} : t,
    c = _e(),
    u = Gt(),
    p = Lf(e, { relative: a });
  return w.useCallback(
    (h) => {
      if (Fg(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : ol(u) === ol(p);
        c(e, {
          replace: m,
          state: s,
          preventScrollReset: l,
          relative: a,
          viewTransition: o,
        });
      }
    },
    [u, c, p, r, s, n, e, l, a, o],
  );
}
function Jg(e) {
  let t = w.useRef(oa(e)),
    n = w.useRef(!1),
    r = Gt(),
    s = w.useMemo(() => Mg(r.search, n.current ? null : t.current), [r.search]),
    l = _e(),
    a = w.useCallback(
      (o, c) => {
        const u = oa(typeof o == "function" ? o(s) : o);
        ((n.current = !0), l("?" + u, c));
      },
      [l, s],
    );
  return [s, a];
}
var Qg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Kg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Gg = (e, t) => {
    const n = w.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          children: o,
          ...c
        },
        u,
      ) =>
        w.createElement(
          "svg",
          {
            ref: u,
            ...Qg,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: a ? (Number(l) * 24) / Number(s) : l,
            className: `lucide lucide-${Kg(e)}`,
            ...c,
          },
          [
            ...t.map(([p, h]) => w.createElement(p, h)),
            ...((Array.isArray(o) ? o : [o]) || []),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
var J = Gg;
const Yg = J("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]),
  Df = J("CheckCircle", [
    ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
    ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }],
  ]),
  Rl = J("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
  Xg = J("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]),
  Hr = J("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
  uo = J("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
  Zg = J("CreditCard", [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ]),
  ex = J("Eye", [
    [
      "path",
      { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  tx = J("Facebook", [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ]),
  nx = J("Filter", [
    [
      "polygon",
      { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
    ],
  ]),
  fo = J("Heart", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ]),
  rx = J("Instagram", [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ]),
  vt = J("Loader2", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]),
  Ff = J("Lock", [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ]),
  sx = J("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ]),
  lx = J("Mail", [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ]),
  ix = J("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ]),
  ax = J("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
  ox = J("Package", [
    ["path", { d: "M16.5 9.4 7.55 4.24", key: "10qotr" }],
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
        key: "yt0hxn",
      },
    ],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ]),
  cx = J("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]),
  ux = J("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  Mf = J("ShieldCheck", [
    [
      "path",
      { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", key: "3xmgem" },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]),
  po = J("ShoppingBag", [
    [
      "path",
      {
        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
        key: "hou9p0",
      },
    ],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ]),
  dx = J("Star", [
    [
      "polygon",
      {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6",
      },
    ],
  ]),
  fx = J("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]),
  Hc = J("Truck", [
    ["path", { d: "M10 17h4V5H2v12h3", key: "1jq12e" }],
    [
      "path",
      { d: "M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5", key: "1xb3ft" },
    ],
    ["path", { d: "M14 17h1", key: "nufu4t" }],
    ["circle", { cx: "7.5", cy: "17.5", r: "2.5", key: "a7aife" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }],
  ]),
  px = J("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  Uf = J("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  hx = J("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Bf = w.createContext();
function ai() {
  try {
    const e = JSON.parse(localStorage.getItem("user") || "{}");
    return (e == null ? void 0 : e.id) || null;
  } catch {
    return null;
  }
}
function mx({ children: e }) {
  const [t, n] = w.useState([]),
    [r, s] = w.useState(0),
    [l, a] = w.useState(!1),
    o = w.useCallback(async (m) => {
      const x = m || ai();
      if (x) {
        a(!0);
        try {
          const j = await (
              await fetch(
                `https://backend-jewelry-production.up.railway.appapi/cart/${x}`,
              )
            ).json(),
            v = Array.isArray(j) ? j : [];
          (n(v), s(v.reduce((d, f) => d + f.quantity, 0)));
        } catch (N) {
          (console.error("Error fetching cart:", N), n([]), s(0));
        } finally {
          a(!1);
        }
      }
    }, []),
    c = async (m, x = 1) => {
      const N = ai();
      if (!N) return { success: !1, error: "User not logged in" };
      try {
        const v = await (
          await fetch(
            "https://backend-jewelry-production.up.railway.app/api/cart/add",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ userId: N, productId: m, quantity: x }),
            },
          )
        ).json();
        return (v.success && (await o(N)), v);
      } catch (j) {
        return { success: !1, error: j.message };
      }
    },
    u = async (m) => {
      ai();
      const x = t,
        N = t.filter((j) => (j.cart_id || j.cartId) !== m);
      (n(N), s(N.reduce((j, v) => j + v.quantity, 0)));
      try {
        const v = await (
          await fetch(
            `https://backend-jewelry-production.up.railway.app/api/cart/remove/${m}`,
            { method: "DELETE" },
          )
        ).json();
        return v.success
          ? { success: !0 }
          : (n(x),
            s(x.reduce((d, f) => d + f.quantity, 0)),
            { success: !1, error: v.error });
      } catch (j) {
        return (
          n(x),
          s(x.reduce((v, d) => v + d.quantity, 0)),
          { success: !1, error: j.message }
        );
      }
    },
    p = async (m, x) => {
      if (x < 1) return u(m);
      const N = t,
        j = t.map((v) =>
          (v.cart_id || v.cartId) === m ? { ...v, quantity: x } : v,
        );
      (n(j), s(j.reduce((v, d) => v + d.quantity, 0)));
      try {
        const d = await (
          await fetch(
            `https://backend-jewelry-production.up.railway.app/api/cart/update`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ cartId: m, quantity: x }),
            },
          )
        ).json();
        return d.success
          ? { success: !0 }
          : (n(N),
            s(N.reduce((f, g) => f + g.quantity, 0)),
            { success: !1, error: d.error });
      } catch (v) {
        return (
          n(N),
          s(N.reduce((d, f) => d + f.quantity, 0)),
          { success: !1, error: v.message }
        );
      }
    },
    h = () => {
      (n([]), s(0));
    };
  return i.jsx(Bf.Provider, {
    value: {
      cartItems: t,
      cartCount: r,
      cartLoading: l,
      fetchCart: o,
      addToCart: c,
      removeFromCart: u,
      updateQuantity: p,
      clearCart: h,
    },
    children: e,
  });
}
function Yr() {
  return w.useContext(Bf);
}
const Wc = [
  { label: "High Jewelry", path: "/high-jewelry" },
  { label: "Jewelry", path: "/jewelry" },
  { label: "Love & Engagement", path: "/love-engagement" },
  { label: "Watches", path: "/watches" },
  { label: "Home", path: "/" },
  { label: "Accessories", path: "/accessories" },
  { label: "Gifts", path: "/gifts" },
  { label: "World of Lumière", path: "/world-of-brand" },
];
function gx() {
  const [e, t] = w.useState(!1),
    [n, r] = w.useState(!1),
    [s, l] = w.useState(null),
    a = Gt(),
    o = _e(),
    { cartCount: c } = Yr();
  (w.useEffect(() => {
    const p = () => t(window.scrollY > 40);
    return (
      window.addEventListener("scroll", p),
      () => window.removeEventListener("scroll", p)
    );
  }, []),
    w.useEffect(() => {
      r(!1);
    }, [a]),
    w.useEffect(() => {
      const p = localStorage.getItem("user");
      p && l(JSON.parse(p));
    }, [a]));
  const u = () => {
    (localStorage.removeItem("token"),
      localStorage.removeItem("user"),
      l(null),
      o("/login"));
  };
  return i.jsxs("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"}`,
    children: [
      i.jsx("div", {
        className: "text-center pb-3 border-b border-gray-100",
        children: i.jsxs($, {
          to: "/",
          className:
            "font-playfair text-2xl md:text-3xl font-light tracking-[0.25em] text-gray-900 hover:text-gray-600 transition-colors",
          children: [
            "LUMIÈRE ",
            i.jsx("span", { className: "text-gold", children: "&" }),
            " CO.",
          ],
        }),
      }),
      i.jsxs("div", {
        className: "relative flex items-center justify-between px-6 pt-3",
        children: [
          i.jsx("nav", {
            className:
              "hidden lg:flex items-center justify-center gap-6 xl:gap-8 w-full",
            children: Wc.map((p) =>
              i.jsx(
                $,
                {
                  to: p.path,
                  className: `text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 whitespace-nowrap
              ${a.pathname === p.path ? "text-gold border-b border-gold pb-0.5" : "text-gray-700 hover:text-gold"}`,
                  children: p.label,
                },
                p.path,
              ),
            ),
          }),
          i.jsxs("div", {
            className: "flex items-center gap-4 absolute right-6 top-0",
            children: [
              i.jsx("button", {
                className: "text-gray-700 hover:text-gold transition-colors",
                children: i.jsx(ux, { size: 18 }),
              }),
              i.jsx("button", {
                className: "text-gray-700 hover:text-gold transition-colors",
                children: i.jsx(fo, { size: 18 }),
              }),
              i.jsxs("button", {
                onClick: () => o("/cart"),
                className:
                  "text-gray-700 hover:text-gold transition-colors relative",
                children: [
                  i.jsx(po, { size: 18 }),
                  c > 0 &&
                    i.jsx("span", {
                      className:
                        "absolute -top-1.5 -right-1.5 bg-gold text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center",
                      children: c > 99 ? "99+" : c,
                    }),
                ],
              }),
              s
                ? i.jsxs("button", {
                    onClick: u,
                    className:
                      "flex items-center gap-1 text-gray-700 hover:text-red-600 transition-colors",
                    children: [
                      i.jsx(sx, { size: 18 }),
                      i.jsx("span", {
                        className: "hidden md:block text-xs",
                        children: "Logout",
                      }),
                    ],
                  })
                : i.jsxs("button", {
                    onClick: () => o("/login"),
                    className:
                      "flex items-center gap-1 text-gray-700 hover:text-gold transition-colors",
                    children: [
                      i.jsx(px, { size: 18 }),
                      i.jsx("span", {
                        className: "hidden md:block text-xs",
                        children: "Login",
                      }),
                    ],
                  }),
              i.jsx("button", {
                className:
                  "lg:hidden text-gray-700 hover:text-gold transition-colors ml-1",
                onClick: () => r(!n),
                children: n ? i.jsx(Uf, { size: 20 }) : i.jsx(ix, { size: 20 }),
              }),
            ],
          }),
        ],
      }),
      n &&
        i.jsxs("div", {
          className: "lg:hidden bg-white border-t border-gray-100 py-4",
          children: [
            Wc.map((p) =>
              i.jsx(
                $,
                {
                  to: p.path,
                  className:
                    "block px-6 py-3 text-[11px] tracking-[0.15em] uppercase font-medium text-gray-700 hover:text-gold hover:bg-gray-50 transition-colors",
                  children: p.label,
                },
                p.path,
              ),
            ),
            s
              ? i.jsx("button", {
                  onClick: u,
                  className:
                    "w-full text-left px-6 py-3 text-red-600 font-medium",
                  children: "Logout",
                })
              : i.jsx("button", {
                  onClick: () => o("/login"),
                  className:
                    "w-full text-left px-6 py-3 text-gray-700 font-medium",
                  children: "Login",
                }),
          ],
        }),
    ],
  });
}
function xx() {
  return i.jsx("footer", {
    className: "bg-gray-900 text-gray-300",
    children: i.jsxs("div", {
      className: "max-w-7xl mx-auto px-6 pt-16 pb-8",
      children: [
        i.jsxs("div", {
          className: "text-center mb-14 pb-14 border-b border-gray-700",
          children: [
            i.jsx("p", {
              className:
                "font-cormorant text-3xl font-light text-white mb-2 italic",
              children: "Join the World of Lumière",
            }),
            i.jsx("p", {
              className: "text-xs tracking-widest text-gray-400 mb-6 uppercase",
              children: "Exclusive collections, events, and private previews",
            }),
            i.jsxs("div", {
              className: "flex max-w-md mx-auto",
              children: [
                i.jsx("input", {
                  type: "email",
                  placeholder: "Your email address",
                  className:
                    "flex-1 bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold",
                }),
                i.jsx("button", {
                  className:
                    "bg-gold text-black px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-yellow-500 transition-colors",
                  children: "Subscribe",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("h4", {
                  className:
                    "text-white text-xs tracking-[0.2em] uppercase mb-4 font-medium",
                  children: "Company",
                }),
                ["About Us", "Careers", "Sustainability", "News"].map((e) =>
                  i.jsx(
                    "a",
                    {
                      href: "#",
                      className:
                        "block text-sm text-gray-400 hover:text-gold mb-2 transition-colors",
                      children: e,
                    },
                    e,
                  ),
                ),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("h4", {
                  className:
                    "text-white text-xs tracking-[0.2em] uppercase mb-4 font-medium",
                  children: "Customer Service",
                }),
                ["Contact Us", "FAQs", "Shipping", "Returns"].map((e) =>
                  i.jsx(
                    "a",
                    {
                      href: "#",
                      className:
                        "block text-sm text-gray-400 hover:text-gold mb-2 transition-colors",
                      children: e,
                    },
                    e,
                  ),
                ),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("h4", {
                  className:
                    "text-white text-xs tracking-[0.2em] uppercase mb-4 font-medium",
                  children: "Collections",
                }),
                ["High Jewelry", "Engagement", "Watches", "Accessories"].map(
                  (e) =>
                    i.jsx(
                      "a",
                      {
                        href: "#",
                        className:
                          "block text-sm text-gray-400 hover:text-gold mb-2 transition-colors",
                        children: e,
                      },
                      e,
                    ),
                ),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("h4", {
                  className:
                    "text-white text-xs tracking-[0.2em] uppercase mb-4 font-medium",
                  children: "Follow Us",
                }),
                i.jsxs("div", {
                  className: "flex gap-4 mb-4",
                  children: [
                    i.jsx("a", {
                      href: "#",
                      className:
                        "text-gray-400 hover:text-gold transition-colors",
                      children: i.jsx(rx, { size: 18 }),
                    }),
                    i.jsx("a", {
                      href: "#",
                      className:
                        "text-gray-400 hover:text-gold transition-colors",
                      children: i.jsx(tx, { size: 18 }),
                    }),
                    i.jsx("a", {
                      href: "#",
                      className:
                        "text-gray-400 hover:text-gold transition-colors",
                      children: i.jsx(hx, { size: 18 }),
                    }),
                  ],
                }),
                i.jsx("p", {
                  className: "text-xs text-gray-500 leading-relaxed",
                  children: "@lumiereandco",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3",
          children: [
            i.jsx("p", {
              className: "text-xs text-gray-500",
              children: "© 2024 Lumière & Co. All rights reserved.",
            }),
            i.jsx("div", {
              className: "flex gap-6",
              children: [
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
              ].map((e) =>
                i.jsx(
                  "a",
                  {
                    href: "#",
                    className:
                      "text-xs text-gray-500 hover:text-gold transition-colors",
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function $f(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: yx } = Object.prototype,
  { getPrototypeOf: qn } = Object,
  { iterator: Xr, toStringTag: Hf } = Symbol,
  cl = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Wr = (e, t) => {
    let n = e;
    const r = [];
    for (; n != null && n !== Object.prototype; ) {
      if (r.indexOf(n) !== -1) return !1;
      if ((r.push(n), cl(n, t))) return !0;
      n = qn(n);
    }
    return !1;
  },
  vx = (e, t) => (e != null && Wr(e, t) ? e[t] : void 0),
  ho = ((e) => (t) => {
    const n = yx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  lt = (e) => ((e = e.toLowerCase()), (t) => ho(t) === e),
  Pl = (e) => (t) => typeof t === e,
  { isArray: pn } = Array,
  Jn = Pl("undefined");
function Zn(e) {
  return (
    e !== null &&
    !Jn(e) &&
    e.constructor !== null &&
    !Jn(e.constructor) &&
    Ie(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Wf = lt("ArrayBuffer");
function wx(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Wf(e.buffer)),
    t
  );
}
const jx = Pl("string"),
  Ie = Pl("function"),
  Vf = Pl("number"),
  er = (e) => e !== null && typeof e == "object",
  Nx = (e) => e === !0 || e === !1,
  zs = (e) => {
    if (!er(e)) return !1;
    const t = qn(e);
    return (
      (t === null || t === Object.prototype || qn(t) === null) &&
      !Wr(e, Hf) &&
      !Wr(e, Xr)
    );
  },
  Sx = (e) => {
    if (!er(e) || Zn(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  kx = lt("Date"),
  Ex = lt("File"),
  Cx = (e) => !!(e && typeof e.uri < "u"),
  bx = (e) => e && typeof e.getParts < "u",
  _x = lt("Blob"),
  Rx = lt("FileList"),
  Px = (e) => er(e) && Ie(e.pipe);
function Ox() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const Vc = Ox(),
  qc = typeof Vc.FormData < "u" ? Vc.FormData : void 0,
  Tx = (e) => {
    if (!e) return !1;
    if (qc && e instanceof qc) return !0;
    const t = qn(e);
    if (!t || t === Object.prototype || !Ie(e.append)) return !1;
    const n = ho(e);
    return (
      n === "formdata" ||
      (n === "object" && Ie(e.toString) && e.toString() === "[object FormData]")
    );
  },
  Lx = lt("URLSearchParams"),
  [Ax, zx, Ix, Dx] = ["ReadableStream", "Request", "Response", "Headers"].map(
    lt,
  ),
  Fx = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), pn(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (Zn(e)) return;
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = l.length;
    let o;
    for (r = 0; r < a; r++) ((o = l[r]), t.call(null, e[o], o, e));
  }
}
function qf(e, t) {
  if (Zn(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const rn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Jf = (e) => !Jn(e) && e !== rn;
function ca(...e) {
  const { caseless: t, skipUndefined: n } = (Jf(this) && this) || {},
    r = {},
    s = (l, a) => {
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      const o = (t && typeof a == "string" && qf(r, a)) || a,
        c = cl(r, o) ? r[o] : void 0;
      zs(c) && zs(l)
        ? (r[o] = ca(c, l))
        : zs(l)
          ? (r[o] = ca({}, l))
          : pn(l)
            ? (r[o] = l.slice())
            : (!n || !Jn(l)) && (r[o] = l);
    };
  for (let l = 0, a = e.length; l < a; l++) {
    const o = e[l];
    if (!o || Zn(o) || (Zr(o, s), typeof o != "object" || pn(o))) continue;
    const c = Object.getOwnPropertySymbols(o);
    for (let u = 0; u < c.length; u++) {
      const p = c[u];
      Gx.call(o, p) && s(o[p], p);
    }
  }
  return r;
}
const Mx = (e, t, n, { allOwnKeys: r } = {}) => (
    Zr(
      t,
      (s, l) => {
        n && Ie(s)
          ? Object.defineProperty(e, l, {
              __proto__: null,
              value: $f(s, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, l, {
              __proto__: null,
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Ux = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Bx = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  $x = (e, t, n, r) => {
    let s, l, a;
    const o = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), l = s.length; l-- > 0; )
        ((a = s[l]),
          (!r || r(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0)));
      e = n !== !1 && qn(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Hx = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Wx = (e) => {
    if (!e) return null;
    if (pn(e)) return e;
    let t = e.length;
    if (!Vf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Vx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && qn(Uint8Array)),
  qx = (e, t) => {
    const r = (e && e[Xr]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const l = s.value;
      t.call(e, l[0], l[1]);
    }
  },
  Jx = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Qx = lt("HTMLFormElement"),
  Kx = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  { propertyIsEnumerable: Gx } = Object.prototype,
  Yx = lt("RegExp"),
  Qf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (Zr(n, (s, l) => {
      let a;
      (a = t(s, l, e)) !== !1 && (r[l] = a || s);
    }),
      Object.defineProperties(e, r));
  },
  Xx = (e) => {
    Qf(e, (t, n) => {
      if (Ie(e) && ["arguments", "caller", "callee"].includes(n)) return !1;
      const r = e[n];
      if (Ie(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Zx = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((l) => {
          n[l] = !0;
        });
      };
    return (pn(e) ? r(e) : r(String(e).split(t)), n);
  },
  e0 = () => {},
  t0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function n0(e) {
  return !!(e && Ie(e.append) && e[Hf] === "FormData" && e[Xr]);
}
const r0 = (e) => {
    const t = new WeakSet(),
      n = (r) => {
        if (er(r)) {
          if (t.has(r)) return;
          if (Zn(r)) return r;
          if (!("toJSON" in r)) {
            t.add(r);
            const s = pn(r) ? [] : {};
            return (
              Zr(r, (l, a) => {
                const o = n(l);
                !Jn(o) && (s[a] = o);
              }),
              t.delete(r),
              s
            );
          }
        }
        return r;
      };
    return n(e);
  },
  s0 = lt("AsyncFunction"),
  l0 = (e) => e && (er(e) || Ie(e)) && Ie(e.then) && Ie(e.catch),
  Kf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            rn.addEventListener(
              "message",
              ({ source: s, data: l }) => {
                s === rn && l === n && r.length && r.shift()();
              },
              !1,
            ),
            (s) => {
              (r.push(s), rn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ie(rn.postMessage),
  ),
  i0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(rn)
      : (typeof process < "u" && process.nextTick) || Kf,
  Gf = (e) => e != null && Ie(e[Xr]),
  a0 = (e) => e != null && Wr(e, Xr) && Gf(e),
  y = {
    isArray: pn,
    isArrayBuffer: Wf,
    isBuffer: Zn,
    isFormData: Tx,
    isArrayBufferView: wx,
    isString: jx,
    isNumber: Vf,
    isBoolean: Nx,
    isObject: er,
    isPlainObject: zs,
    isEmptyObject: Sx,
    isReadableStream: Ax,
    isRequest: zx,
    isResponse: Ix,
    isHeaders: Dx,
    isUndefined: Jn,
    isDate: kx,
    isFile: Ex,
    isReactNativeBlob: Cx,
    isReactNative: bx,
    isBlob: _x,
    isRegExp: Yx,
    isFunction: Ie,
    isStream: Px,
    isURLSearchParams: Lx,
    isTypedArray: Vx,
    isFileList: Rx,
    forEach: Zr,
    merge: ca,
    extend: Mx,
    trim: Fx,
    stripBOM: Ux,
    inherits: Bx,
    toFlatObject: $x,
    kindOf: ho,
    kindOfTest: lt,
    endsWith: Hx,
    toArray: Wx,
    forEachEntry: qx,
    matchAll: Jx,
    isHTMLForm: Qx,
    hasOwnProperty: cl,
    hasOwnProp: cl,
    hasOwnInPrototypeChain: Wr,
    getSafeProp: vx,
    reduceDescriptors: Qf,
    freezeMethods: Xx,
    toObjectSet: Zx,
    toCamelCase: Kx,
    noop: e0,
    toFiniteNumber: t0,
    findKey: qf,
    global: rn,
    isContextDefined: Jf,
    isSpecCompliantForm: n0,
    toJSONObject: r0,
    isAsyncFn: s0,
    isThenable: l0,
    setImmediate: Kf,
    asap: i0,
    isIterable: Gf,
    isSafeIterable: a0,
  },
  o0 = y.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  c0 = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (a) {
            ((s = a.indexOf(":")),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (t[n] && o0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  };
function u0(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32) break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const d0 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
  f0 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function mo(e, t) {
  return y.isArray(e) ? e.map((n) => mo(n, t)) : u0(String(e).replace(t, ""));
}
const p0 = (e) => mo(e, d0),
  h0 = (e) => mo(e, f0);
function Yf(e) {
  const t = Object.create(null);
  return (
    y.forEach(e.toJSON(), (n, r) => {
      t[r] = h0(n);
    }),
    t
  );
}
const Jc = Symbol("internals");
function ur(e) {
  return e && String(e).trim().toLowerCase();
}
function Is(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Is) : p0(String(e));
}
function m0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const g0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function oi(e, t, n, r, s) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function x0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function y0(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (s, l, a) {
        return this[r].call(this, t, s, l, a);
      },
      configurable: !0,
    });
  });
}
let Ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function l(o, c, u) {
      const p = ur(c);
      if (!p) return;
      const h = y.findKey(s, p);
      (!h || s[h] === void 0 || u === !0 || (u === void 0 && s[h] !== !1)) &&
        (s[h || c] = Is(o));
    }
    const a = (o, c) => y.forEach(o, (u, p) => l(u, p, c));
    if (y.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (y.isString(t) && (t = t.trim()) && !g0(t)) a(c0(t), n);
    else if (y.isObject(t) && y.isSafeIterable(t)) {
      let o = Object.create(null),
        c,
        u;
      for (const p of t) {
        if (!y.isArray(p))
          throw new TypeError("Object iterator must return a key-value pair");
        ((u = p[0]),
          y.hasOwnProp(o, u)
            ? ((c = o[u]), (o[u] = y.isArray(c) ? [...c, p[1]] : [c, p[1]]))
            : (o[u] = p[1]));
      }
      a(o, n);
    } else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ur(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return m0(s);
        if (y.isFunction(n)) return n.call(this, s, r);
        if (y.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ur(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || oi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function l(a) {
      if (((a = ur(a)), a)) {
        const o = y.findKey(r, a);
        o && (!n || oi(r, r[o], o, n)) && (delete r[o], (s = !0));
      }
    }
    return (y.isArray(t) ? t.forEach(l) : l(t), s);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || oi(this, this[l], l, t, !0)) && (delete this[l], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (s, l) => {
        const a = y.findKey(r, l);
        if (a) {
          ((n[a] = Is(s)), delete n[l]);
          return;
        }
        const o = t ? x0(l) : String(l).trim();
        (o !== l && delete n[l], (n[o] = Is(s)), (r[o] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && y.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((s) => r.set(s)), r);
  }
  static accessor(t) {
    const r = (this[Jc] = this[Jc] = { accessors: {} }).accessors,
      s = this.prototype;
    function l(a) {
      const o = ur(a);
      r[o] || (y0(s, a), (r[o] = !0));
    }
    return (y.isArray(t) ? t.forEach(l) : l(t), this);
  }
};
Ne.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(Ne);
const v0 = "[REDACTED ****]";
function w0(e) {
  if (y.hasOwnProp(e, "toJSON")) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (y.hasOwnProp(t, "toJSON")) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function j0(e, t) {
  const n = new Set(t.map((l) => String(l).toLowerCase())),
    r = [],
    s = (l) => {
      if (l === null || typeof l != "object" || y.isBuffer(l)) return l;
      if (r.indexOf(l) !== -1) return;
      (l instanceof Ne && (l = l.toJSON()), r.push(l));
      let a;
      if (y.isArray(l))
        ((a = []),
          l.forEach((o, c) => {
            const u = s(o);
            y.isUndefined(u) || (a[c] = u);
          }));
      else {
        if (!y.isPlainObject(l) && w0(l)) return (r.pop(), l);
        a = Object.create(null);
        for (const [o, c] of Object.entries(l)) {
          const u = n.has(o.toLowerCase()) ? v0 : s(c);
          y.isUndefined(u) || (a[o] = u);
        }
      }
      return (r.pop(), a);
    };
  return s(e);
}
let O = class Xf extends Error {
  static from(t, n, r, s, l, a) {
    const o = new Xf(t.message, n || t.code, r, s, l);
    return (
      (o.cause = t),
      (o.name = t.name),
      t.status != null && o.status == null && (o.status = t.status),
      a && Object.assign(o, a),
      o
    );
  }
  constructor(t, n, r, s, l) {
    (super(t),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      s && (this.request = s),
      l && ((this.response = l), (this.status = l.status)));
  }
  toJSON() {
    const t = this.config,
      n = t && y.hasOwnProp(t, "redact") ? t.redact : void 0,
      r = y.isArray(n) && n.length > 0 ? j0(t, n) : y.toJSONObject(t);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: r,
      code: this.code,
      status: this.status,
    };
  }
};
O.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
O.ERR_BAD_OPTION = "ERR_BAD_OPTION";
O.ECONNABORTED = "ECONNABORTED";
O.ETIMEDOUT = "ETIMEDOUT";
O.ECONNREFUSED = "ECONNREFUSED";
O.ERR_NETWORK = "ERR_NETWORK";
O.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
O.ERR_DEPRECATED = "ERR_DEPRECATED";
O.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
O.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
O.ERR_CANCELED = "ERR_CANCELED";
O.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
O.ERR_INVALID_URL = "ERR_INVALID_URL";
O.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const N0 = null,
  Zf = 100;
function ua(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function ep(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ci(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, l) {
          return ((s = ep(s)), !n && l ? "[" + s + "]" : s);
        })
        .join(n ? "." : "")
    : t;
}
function S0(e) {
  return y.isArray(e) && !e.some(ua);
}
const k0 = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ol(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (f, g) {
        return !y.isUndefined(g[f]);
      },
    )));
  const r = n.metaTokens,
    s = n.visitor || N,
    l = n.dots,
    a = n.indexes,
    o = n.Blob || (typeof Blob < "u" && Blob),
    c = n.maxDepth === void 0 ? Zf : n.maxDepth,
    u = o && y.isSpecCompliantForm(t),
    p = [];
  if (!y.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(d) {
    if (d === null) return "";
    if (y.isDate(d)) return d.toISOString();
    if (y.isBoolean(d)) return d.toString();
    if (!u && y.isBlob(d))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(d) || y.isTypedArray(d)
      ? u && typeof Blob == "function"
        ? new Blob([d])
        : Buffer.from(d)
      : d;
  }
  function m(d) {
    if (d > c)
      throw new O(
        "Object is too deeply nested (" + d + " levels). Max depth: " + c,
        O.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function x(d, f) {
    if (c === 1 / 0) return JSON.stringify(d);
    const g = [];
    return JSON.stringify(d, function (k, b) {
      if (!y.isObject(b)) return b;
      for (; g.length && g[g.length - 1] !== this; ) g.pop();
      return (g.push(b), m(f + g.length - 1), b);
    });
  }
  function N(d, f, g) {
    let S = d;
    if (y.isReactNative(t) && y.isReactNativeBlob(d))
      return (t.append(ci(g, f, l), h(d)), !1);
    if (d && !g && typeof d == "object") {
      if (y.endsWith(f, "{}")) ((f = r ? f : f.slice(0, -2)), (d = x(d, 1)));
      else if (
        (y.isArray(d) && S0(d)) ||
        ((y.isFileList(d) || y.endsWith(f, "[]")) && (S = y.toArray(d)))
      )
        return (
          (f = ep(f)),
          S.forEach(function (b, P) {
            !(y.isUndefined(b) || b === null) &&
              t.append(
                a === !0 ? ci([f], P, l) : a === null ? f : f + "[]",
                h(b),
              );
          }),
          !1
        );
    }
    return ua(d) ? !0 : (t.append(ci(g, f, l), h(d)), !1);
  }
  const j = Object.assign(k0, {
    defaultVisitor: N,
    convertValue: h,
    isVisitable: ua,
  });
  function v(d, f, g = 0) {
    if (!y.isUndefined(d)) {
      if ((m(g), p.indexOf(d) !== -1))
        throw new Error("Circular reference detected in " + f.join("."));
      (p.push(d),
        y.forEach(d, function (k, b) {
          (!(y.isUndefined(k) || k === null) &&
            s.call(t, k, y.isString(b) ? b.trim() : b, f, j)) === !0 &&
            v(k, f ? f.concat(b) : [b], g + 1);
        }),
        p.pop());
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return (v(e), t);
}
function Qc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (r) {
    return t[r];
  });
}
function go(e, t) {
  ((this._pairs = []), e && Ol(e, this, t));
}
const tp = go.prototype;
tp.append = function (t, n) {
  this._pairs.push([t, n]);
};
tp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Qc);
      }
    : Qc;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function E0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function np(e, t, n) {
  if (!t) return e;
  const r = y.isFunction(n) ? { serialize: n } : n,
    s = y.getSafeProp(r, "encode") || E0,
    l = y.getSafeProp(r, "serialize");
  let a;
  if (
    (l
      ? (a = l(t, r))
      : (a = y.isURLSearchParams(t) ? t.toString() : new go(t, r).toString(s)),
    a)
  ) {
    const o = e.indexOf("#");
    (o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a));
  }
  return e;
}
class Kc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const xo = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  C0 = typeof URLSearchParams < "u" ? URLSearchParams : go,
  b0 = typeof FormData < "u" ? FormData : null,
  _0 = typeof Blob < "u" ? Blob : null,
  R0 = {
    isBrowser: !0,
    classes: { URLSearchParams: C0, FormData: b0, Blob: _0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  yo = typeof window < "u" && typeof document < "u",
  da = (typeof navigator == "object" && navigator) || void 0,
  P0 =
    yo &&
    (!da || ["ReactNative", "NativeScript", "NS"].indexOf(da.product) < 0),
  O0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  T0 = (yo && window.location.href) || "http://localhost",
  L0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: yo,
        hasStandardBrowserEnv: P0,
        hasStandardBrowserWebWorkerEnv: O0,
        navigator: da,
        origin: T0,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  me = { ...L0, ...R0 };
function A0(e, t) {
  return Ol(e, new me.classes.URLSearchParams(), {
    visitor: function (n, r, s, l) {
      return me.isNode && y.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : l.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
const Gc = Zf;
function rp(e) {
  if (e > Gc)
    throw new O(
      "FormData field is too deeply nested (" +
        e +
        " levels). Max depth: " +
        Gc,
      O.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function z0(e) {
  const t = [],
    n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    (rp(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]));
  return t;
}
function I0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let l;
  for (r = 0; r < s; r++) ((l = n[r]), (t[l] = e[l]));
  return t;
}
function sp(e) {
  function t(n, r, s, l) {
    rp(l);
    let a = n[l++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a),
      c = l >= n.length;
    return (
      (a = !a && y.isArray(s) ? s.length : a),
      c
        ? (y.hasOwnProp(s, a)
            ? (s[a] = y.isArray(s[a]) ? s[a].concat(r) : [s[a], r])
            : (s[a] = r),
          !o)
        : ((!y.hasOwnProp(s, a) || !y.isObject(s[a])) && (s[a] = []),
          t(n, r, s[a], l) && y.isArray(s[a]) && (s[a] = I0(s[a])),
          !o)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, s) => {
        t(z0(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
const wn = (e, t) => (e != null && y.hasOwnProp(e, t) ? e[t] : void 0);
function D0(e, t, n) {
  if (y.isString(e))
    try {
      return ((t || JSON.parse)(e), y.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const es = {
  transitional: xo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        l = y.isObject(t);
      if ((l && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return s ? JSON.stringify(sp(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let o;
      if (l) {
        const c = wn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return A0(t, c).toString();
        if ((o = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = wn(this, "env"),
            p = u && u.FormData;
          return Ol(o ? { "files[]": t } : t, p && new p(), c);
        }
      }
      return l || s ? (n.setContentType("application/json", !1), D0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = wn(this, "transitional") || es.transitional,
        r = n && n.forcedJSONParsing,
        s = wn(this, "responseType"),
        l = s === "json";
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !s) || l)) {
        const o = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t, wn(this, "parseReviver"));
        } catch (c) {
          if (o)
            throw c.name === "SyntaxError"
              ? O.from(c, O.ERR_BAD_RESPONSE, this, null, wn(this, "response"))
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: me.classes.FormData, Blob: me.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
y.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  es.headers[e] = {};
});
function ui(e, t) {
  const n = this || es,
    r = t || n,
    s = Ne.from(r.headers);
  let l = r.data;
  return (
    y.forEach(e, function (o) {
      l = o.call(n, l, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    l
  );
}
function lp(e) {
  return !!(e && e.__CANCEL__);
}
let ts = class extends O {
  constructor(t, n, r) {
    (super(t ?? "canceled", O.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function ip(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new O(
          "Request failed with status code " + n.status,
          n.status >= 400 && n.status < 500
            ? O.ERR_BAD_REQUEST
            : O.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function F0(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || "";
}
function M0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    l = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        p = r[l];
      (a || (a = u), (n[s] = c), (r[s] = u));
      let h = l,
        m = 0;
      for (; h !== s; ) ((m += n[h++]), (h = h % e));
      if (((s = (s + 1) % e), s === l && (l = (l + 1) % e), u - a < t)) return;
      const x = p && u - p;
      return x ? Math.round((m * 1e3) / x) : void 0;
    }
  );
}
function U0(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    l;
  const a = (u, p = Date.now()) => {
    ((n = p), (s = null), l && (clearTimeout(l), (l = null)), e(...u));
  };
  return [
    (...u) => {
      const p = Date.now(),
        h = p - n;
      h >= r
        ? a(u, p)
        : ((s = u),
          l ||
            (l = setTimeout(() => {
              ((l = null), a(s));
            }, r - h)));
    },
    () => s && a(s),
  ];
}
const ul = (e, t, n = 3) => {
    let r = 0;
    const s = M0(50, 250);
    return U0((l) => {
      if (!l || typeof l.loaded != "number") return;
      const a = l.loaded,
        o = l.lengthComputable ? l.total : void 0,
        c = o != null ? Math.min(a, o) : a,
        u = Math.max(0, c - r),
        p = s(u);
      r = Math.max(r, c);
      const h = {
        loaded: c,
        total: o,
        progress: o ? c / o : void 0,
        bytes: u,
        rate: p || void 0,
        estimated: p && o ? (o - c) / p : void 0,
        event: l,
        lengthComputable: o != null,
        [t ? "download" : "upload"]: !0,
      };
      e(h);
    }, n);
  },
  Yc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Xc =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  B0 = me.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, me.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(me.origin),
        me.navigator && /(msie|trident)/i.test(me.navigator.userAgent),
      )
    : () => !0,
  $0 = me.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, l, a) {
          if (typeof document > "u") return;
          const o = [`${e}=${encodeURIComponent(t)}`];
          (y.isNumber(n) && o.push(`expires=${new Date(n).toUTCString()}`),
            y.isString(r) && o.push(`path=${r}`),
            y.isString(s) && o.push(`domain=${s}`),
            l === !0 && o.push("secure"),
            y.isString(a) && o.push(`SameSite=${a}`),
            (document.cookie = o.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.split(";");
          for (let n = 0; n < t.length; n++) {
            const r = t[n].replace(/^\s+/, ""),
              s = r.indexOf("=");
            if (s !== -1 && r.slice(0, s) === e)
              return decodeURIComponent(r.slice(s + 1));
          }
          return null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function H0(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function W0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const V0 = /^https?:(?!\/\/)/i,
  q0 = /[\t\n\r]/g;
function J0(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
  return e.slice(t);
}
function Q0(e) {
  return J0(e).replace(q0, "");
}
function Zc(e, t) {
  if (typeof e == "string" && V0.test(Q0(e)))
    throw new O(
      'Invalid URL: missing "//" after protocol',
      O.ERR_INVALID_URL,
      t,
    );
}
function ap(e, t, n, r) {
  Zc(t, r);
  let s = !H0(t);
  return e && (s || n === !1) ? (Zc(e, r), W0(e, t)) : t;
}
const eu = (e) => (e instanceof Ne ? { ...e } : e);
function hn(e, t) {
  t = t || {};
  const n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(p, h, m, x) {
    return y.isPlainObject(p) && y.isPlainObject(h)
      ? y.merge.call({ caseless: x }, p, h)
      : y.isPlainObject(h)
        ? y.merge({}, h)
        : y.isArray(h)
          ? h.slice()
          : h;
  }
  function s(p, h, m, x) {
    if (y.isUndefined(h)) {
      if (!y.isUndefined(p)) return r(void 0, p, m, x);
    } else return r(p, h, m, x);
  }
  function l(p, h) {
    if (!y.isUndefined(h)) return r(void 0, h);
  }
  function a(p, h) {
    if (y.isUndefined(h)) {
      if (!y.isUndefined(p)) return r(void 0, p);
    } else return r(void 0, h);
  }
  function o(p) {
    const h = y.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!y.isUndefined(h))
      if (y.isPlainObject(h)) {
        if (y.hasOwnProp(h, p)) return h[p];
      } else return;
    const m = y.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (y.isPlainObject(m) && y.hasOwnProp(m, p)) return m[p];
  }
  function c(p, h, m) {
    if (y.hasOwnProp(t, m)) return r(p, h);
    if (y.hasOwnProp(e, m)) return r(void 0, p);
  }
  const u = {
    url: l,
    method: l,
    data: l,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    allowedSocketPaths: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (p, h, m) => s(eu(p), eu(h), m, !0),
  };
  return (
    y.forEach(Object.keys({ ...e, ...t }), function (h) {
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      const m = y.hasOwnProp(u, h) ? u[h] : s,
        x = y.hasOwnProp(e, h) ? e[h] : void 0,
        N = y.hasOwnProp(t, h) ? t[h] : void 0,
        j = m(x, N, h);
      (y.isUndefined(j) && m !== c) || (n[h] = j);
    }),
    y.hasOwnProp(t, "validateStatus") &&
      y.isUndefined(t.validateStatus) &&
      o("validateStatusUndefinedResolves") === !1 &&
      (y.hasOwnProp(e, "validateStatus")
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
const K0 = ["content-type", "content-length"];
function G0(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    K0.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const Y0 = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
    String.fromCharCode(parseInt(n, 16)),
  );
function op(e) {
  const t = hn({}, e),
    n = (m) => (y.hasOwnProp(t, m) ? t[m] : void 0),
    r = n("data");
  let s = n("withXSRFToken");
  const l = n("xsrfHeaderName"),
    a = n("xsrfCookieName");
  let o = n("headers");
  const c = n("auth"),
    u = n("baseURL"),
    p = n("allowAbsoluteUrls"),
    h = n("url");
  if (
    ((t.headers = o = Ne.from(o)),
    (t.url = np(ap(u, h, p, t), n("params"), n("paramsSerializer"))),
    c)
  ) {
    const m = y.getSafeProp(c, "username") || "",
      x = y.getSafeProp(c, "password") || "";
    o.set("Authorization", "Basic " + btoa(m + ":" + (x ? Y0(x) : "")));
  }
  if (
    (y.isFormData(r) &&
      (me.hasStandardBrowserEnv ||
      me.hasStandardBrowserWebWorkerEnv ||
      y.isReactNative(r)
        ? o.setContentType(void 0)
        : y.isFunction(r.getHeaders) &&
          G0(o, r.getHeaders(), n("formDataHeaderPolicy"))),
    me.hasStandardBrowserEnv &&
      (y.isFunction(s) && (s = s(t)), s === !0 || (s == null && B0(t.url))))
  ) {
    const x = l && a && $0.read(a);
    x && o.set(l, x);
  }
  return t;
}
const X0 = typeof XMLHttpRequest < "u",
  Z0 =
    X0 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = op(e);
        let l = s.data;
        const a = Ne.from(s.headers).normalize();
        let { responseType: o, onUploadProgress: c, onDownloadProgress: u } = s,
          p,
          h,
          m,
          x,
          N;
        function j() {
          (x && x(),
            N && N(),
            s.cancelToken && s.cancelToken.unsubscribe(p),
            s.signal && s.signal.removeEventListener("abort", p));
        }
        let v = new XMLHttpRequest();
        (v.open(s.method.toUpperCase(), s.url, !0), (v.timeout = s.timeout));
        function d() {
          if (!v) return;
          const g = Ne.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders(),
            ),
            k = {
              data:
                !o || o === "text" || o === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: g,
              config: e,
              request: v,
            };
          (ip(
            function (P) {
              (n(P), j());
            },
            function (P) {
              (r(P), j());
            },
            k,
          ),
            (v = null));
        }
        ("onloadend" in v
          ? (v.onloadend = d)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.startsWith("file:"))) ||
                setTimeout(d);
            }),
          (v.onabort = function () {
            v &&
              (r(new O("Request aborted", O.ECONNABORTED, e, v)),
              j(),
              (v = null));
          }),
          (v.onerror = function (S) {
            const k = S && S.message ? S.message : "Network Error",
              b = new O(k, O.ERR_NETWORK, e, v);
            ((b.event = S || null), r(b), j(), (v = null));
          }),
          (v.ontimeout = function () {
            let S = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = s.transitional || xo;
            (s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(
                new O(
                  S,
                  k.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  e,
                  v,
                ),
              ),
              j(),
              (v = null));
          }),
          l === void 0 && a.setContentType(null),
          "setRequestHeader" in v &&
            y.forEach(Yf(a), function (S, k) {
              v.setRequestHeader(k, S);
            }),
          y.isUndefined(s.withCredentials) ||
            (v.withCredentials = !!s.withCredentials),
          o && o !== "json" && (v.responseType = s.responseType),
          u && (([m, N] = ul(u, !0)), v.addEventListener("progress", m)),
          c &&
            v.upload &&
            (([h, x] = ul(c)),
            v.upload.addEventListener("progress", h),
            v.upload.addEventListener("loadend", x)),
          (s.cancelToken || s.signal) &&
            ((p = (g) => {
              v &&
                (r(!g || g.type ? new ts(null, e, v) : g),
                v.abort(),
                j(),
                (v = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(p),
            s.signal &&
              (s.signal.aborted
                ? p()
                : s.signal.addEventListener("abort", p))));
        const f = F0(s.url);
        if (f && !me.protocols.includes(f)) {
          r(new O("Unsupported protocol " + f + ":", O.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(l || null);
      });
    },
  ey = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    const n = new AbortController();
    let r = !1;
    const s = function (c) {
      if (!r) {
        ((r = !0), a());
        const u = c instanceof Error ? c : this.reason;
        n.abort(
          u instanceof O ? u : new ts(u instanceof Error ? u.message : u),
        );
      }
    };
    let l =
      t &&
      setTimeout(() => {
        ((l = null), s(new O(`timeout of ${t}ms exceeded`, O.ETIMEDOUT)));
      }, t);
    const a = () => {
      e &&
        (l && clearTimeout(l),
        (l = null),
        e.forEach((c) => {
          c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
        }),
        (e = null));
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: o } = n;
    return ((o.unsubscribe = () => y.asap(a)), o);
  },
  ty = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) ((s = r + t), yield e.slice(r, s), (r = s));
  },
  ny = async function* (e, t) {
    for await (const n of ry(e)) yield* ty(n, t);
  },
  ry = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  tu = (e, t, n, r) => {
    const s = ny(e, t);
    let l = 0,
      a,
      o = (c) => {
        a || ((a = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: u, value: p } = await s.next();
            if (u) {
              (o(), c.close());
              return;
            }
            let h = p.byteLength;
            if (n) {
              let m = (l += h);
              n(m);
            }
            c.enqueue(new Uint8Array(p));
          } catch (u) {
            throw (o(u), u);
          }
        },
        cancel(c) {
          return (o(c), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  dl = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  sy = (e, t, n) =>
    t + 2 < n && dl(e.charCodeAt(t + 1)) && dl(e.charCodeAt(t + 2));
function ly(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const o = r.length;
    for (let x = 0; x < o; x++)
      if (r.charCodeAt(x) === 37 && x + 2 < o) {
        const N = r.charCodeAt(x + 1),
          j = r.charCodeAt(x + 2);
        dl(N) && dl(j) && ((a -= 2), (x += 2));
      }
    let c = 0,
      u = o - 1;
    const p = (x) =>
      x >= 2 &&
      r.charCodeAt(x - 2) === 37 &&
      r.charCodeAt(x - 1) === 51 &&
      (r.charCodeAt(x) === 68 || r.charCodeAt(x) === 100);
    (u >= 0 && (r.charCodeAt(u) === 61 ? (c++, u--) : p(u) && (c++, (u -= 3))),
      c === 1 && u >= 0 && (r.charCodeAt(u) === 61 || p(u)) && c++);
    const m = Math.floor(a / 4) * 3 - (c || 0);
    return m > 0 ? m : 0;
  }
  let l = 0;
  for (let a = 0, o = r.length; a < o; a++) {
    const c = r.charCodeAt(a);
    if (c === 37 && sy(r, a, o)) ((l += 1), (a += 2));
    else if (c < 128) l += 1;
    else if (c < 2048) l += 2;
    else if (c >= 55296 && c <= 56319 && a + 1 < o) {
      const u = r.charCodeAt(a + 1);
      u >= 56320 && u <= 57343 ? ((l += 4), a++) : (l += 3);
    } else l += 3;
  }
  return l;
}
const vo = "1.18.0",
  nu = 64 * 1024,
  { isFunction: ws } = y,
  iy = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
      String.fromCharCode(parseInt(n, 16)),
    ),
  ru = (e) => {
    if (!y.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  su = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ay = (e) => {
    const t = e.indexOf("://");
    let n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes("@") || n.includes(":")
    );
  },
  oy = (e) => {
    const t = y.global !== void 0 && y.global !== null ? y.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = y.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    const { fetch: s, Request: l, Response: a } = e,
      o = s ? ws(s) : typeof fetch == "function",
      c = ws(l),
      u = ws(a);
    if (!o) return !1;
    const p = o && ws(n),
      h =
        o &&
        (typeof r == "function"
          ? (
              (d) => (f) =>
                d.encode(f)
            )(new r())
          : async (d) => new Uint8Array(await new l(d).arrayBuffer())),
      m =
        c &&
        p &&
        su(() => {
          let d = !1;
          const f = new l(me.origin, {
              body: new n(),
              method: "POST",
              get duplex() {
                return ((d = !0), "half");
              },
            }),
            g = f.headers.has("Content-Type");
          return (f.body != null && f.body.cancel(), d && !g);
        }),
      x = u && p && su(() => y.isReadableStream(new a("").body)),
      N = { stream: x && ((d) => d.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
        !N[d] &&
          (N[d] = (f, g) => {
            let S = f && f[d];
            if (S) return S.call(f);
            throw new O(
              `Response type '${d}' is not supported`,
              O.ERR_NOT_SUPPORT,
              g,
            );
          });
      });
    const j = async (d) => {
        if (d == null) return 0;
        if (y.isBlob(d)) return d.size;
        if (y.isSpecCompliantForm(d))
          return (
            await new l(me.origin, { method: "POST", body: d }).arrayBuffer()
          ).byteLength;
        if (y.isArrayBufferView(d) || y.isArrayBuffer(d)) return d.byteLength;
        if ((y.isURLSearchParams(d) && (d = d + ""), y.isString(d)))
          return (await h(d)).byteLength;
      },
      v = async (d, f) => {
        const g = y.toFiniteNumber(d.getContentLength());
        return g ?? j(f);
      };
    return async (d) => {
      let {
        url: f,
        method: g,
        data: S,
        signal: k,
        cancelToken: b,
        timeout: P,
        onDownloadProgress: L,
        onUploadProgress: V,
        responseType: z,
        headers: I,
        withCredentials: M = "same-origin",
        fetchOptions: ae,
        maxContentLength: W,
        maxBodyLength: dt,
      } = op(d);
      const Re = y.isNumber(W) && W > -1,
        Ve = y.isNumber(dt) && dt > -1,
        E = (U) => (y.hasOwnProp(d, U) ? d[U] : void 0);
      let _ = s || fetch;
      z = z ? (z + "").toLowerCase() : "text";
      let R = ey([k, b && b.toAbortSignal()], P),
        A = null;
      const B =
        R &&
        R.unsubscribe &&
        (() => {
          R.unsubscribe();
        });
      let oe,
        De = null;
      const yn = () =>
        new O(
          "Request body larger than maxBodyLength limit",
          O.ERR_BAD_REQUEST,
          d,
          A,
        );
      try {
        let U;
        const Pe = E("auth");
        if (Pe) {
          const D = y.getSafeProp(Pe, "username") || "",
            Fe = y.getSafeProp(Pe, "password") || "";
          U = { username: D, password: Fe };
        }
        if (ay(f)) {
          const D = new URL(f, me.origin);
          if (!U && (D.username || D.password)) {
            const Fe = ru(D.username),
              Et = ru(D.password);
            U = { username: Fe, password: Et };
          }
          (D.username || D.password) &&
            ((D.username = ""), (D.password = ""), (f = D.href));
        }
        if (
          (U &&
            (I.delete("authorization"),
            I.set(
              "Authorization",
              "Basic " +
                btoa(iy((U.username || "") + ":" + (U.password || ""))),
            )),
          Re && typeof f == "string" && f.startsWith("data:") && ly(f) > W)
        )
          throw new O(
            "maxContentLength size of " + W + " exceeded",
            O.ERR_BAD_RESPONSE,
            d,
            A,
          );
        if (Ve && g !== "get" && g !== "head") {
          const D = await j(S);
          if (typeof D == "number" && isFinite(D) && ((oe = D), D > dt))
            throw yn();
        }
        const ns = Ve && (y.isReadableStream(S) || y.isStream(S)),
          jo = (D, Fe, Et) =>
            tu(
              D,
              nu,
              (Yt) => {
                if (Ve && Yt > dt) throw (De = yn());
                Fe && Fe(Yt);
              },
              Et,
            );
        if (m && g !== "get" && g !== "head" && (V || ns)) {
          if (((oe = oe ?? (await v(I, S))), oe !== 0 || ns)) {
            let D = new l(f, { method: "POST", body: S, duplex: "half" }),
              Fe;
            if (
              (y.isFormData(S) &&
                (Fe = D.headers.get("content-type")) &&
                I.setContentType(Fe),
              D.body)
            ) {
              const [Et, Yt] = (V && Yc(oe, ul(Xc(V)))) || [];
              S = jo(D.body, Et, Yt);
            }
          }
        } else if (ns && !c && p && g !== "get" && g !== "head") S = jo(S);
        else if (ns && c && !m && g !== "get" && g !== "head")
          throw new O(
            "Stream request bodies are not supported by the current fetch implementation",
            O.ERR_NOT_SUPPORT,
            d,
            A,
          );
        y.isString(M) || (M = M ? "include" : "omit");
        const pp = c && "credentials" in l.prototype;
        if (y.isFormData(S)) {
          const D = I.getContentType();
          D &&
            /^multipart\/form-data/i.test(D) &&
            !/boundary=/i.test(D) &&
            I.delete("content-type");
        }
        I.set("User-Agent", "axios/" + vo, !1);
        const No = {
          ...ae,
          signal: R,
          method: g.toUpperCase(),
          headers: Yf(I.normalize()),
          body: S,
          duplex: "half",
          credentials: pp ? M : void 0,
        };
        A = c && new l(f, No);
        let ft = await (c ? _(A, ae) : _(f, No));
        const So = Ne.from(ft.headers);
        if (Re) {
          const D = y.toFiniteNumber(So.getContentLength());
          if (D != null && D > W)
            throw new O(
              "maxContentLength size of " + W + " exceeded",
              O.ERR_BAD_RESPONSE,
              d,
              A,
            );
        }
        const Ll = x && (z === "stream" || z === "response");
        if (x && ft.body && (L || Re || (Ll && B))) {
          const D = {};
          ["status", "statusText", "headers"].forEach((tr) => {
            D[tr] = ft[tr];
          });
          const Fe = y.toFiniteNumber(So.getContentLength()),
            [Et, Yt] = (L && Yc(Fe, ul(Xc(L), !0))) || [];
          let ko = 0;
          const hp = (tr) => {
            if (Re && ((ko = tr), ko > W))
              throw new O(
                "maxContentLength size of " + W + " exceeded",
                O.ERR_BAD_RESPONSE,
                d,
                A,
              );
            Et && Et(tr);
          };
          ft = new a(
            tu(ft.body, nu, hp, () => {
              (Yt && Yt(), B && B());
            }),
            D,
          );
        }
        z = z || "text";
        let pt = await N[y.findKey(N, z) || "text"](ft, d);
        if (Re && !x && !Ll) {
          let D;
          if (
            (pt != null &&
              (typeof pt.byteLength == "number"
                ? (D = pt.byteLength)
                : typeof pt.size == "number"
                  ? (D = pt.size)
                  : typeof pt == "string" &&
                    (D =
                      typeof r == "function"
                        ? new r().encode(pt).byteLength
                        : pt.length)),
            typeof D == "number" && D > W)
          )
            throw new O(
              "maxContentLength size of " + W + " exceeded",
              O.ERR_BAD_RESPONSE,
              d,
              A,
            );
        }
        return (
          !Ll && B && B(),
          await new Promise((D, Fe) => {
            ip(D, Fe, {
              data: pt,
              headers: Ne.from(ft.headers),
              status: ft.status,
              statusText: ft.statusText,
              config: d,
              request: A,
            });
          })
        );
      } catch (U) {
        if ((B && B(), R && R.aborted && R.reason instanceof O)) {
          const Pe = R.reason;
          throw (
            (Pe.config = d),
            A && (Pe.request = A),
            U !== Pe && (Pe.cause = U),
            Pe
          );
        }
        throw De
          ? (A && !De.request && (De.request = A), De)
          : U instanceof O
            ? (A && !U.request && (U.request = A), U)
            : U &&
                U.name === "TypeError" &&
                /Load failed|fetch/i.test(U.message)
              ? Object.assign(
                  new O("Network Error", O.ERR_NETWORK, d, A, U && U.response),
                  { cause: U.cause || U },
                )
              : O.from(U, U && U.code, d, A, U && U.response);
      }
    };
  },
  cy = new Map(),
  cp = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: s } = t,
      l = [r, s, n];
    let a = l.length,
      o = a,
      c,
      u,
      p = cy;
    for (; o--; )
      ((c = l[o]),
        (u = p.get(c)),
        u === void 0 && p.set(c, (u = o ? new Map() : oy(t))),
        (p = u));
    return u;
  };
cp();
const wo = { http: N0, xhr: Z0, fetch: { get: cp } };
y.forEach(wo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const lu = (e) => `- ${e}`,
  uy = (e) => y.isFunction(e) || e === null || e === !1;
function dy(e, t) {
  e = y.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const l = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let o;
    if (
      ((s = r),
      !uy(r) && ((s = wo[(o = String(r)).toLowerCase()]), s === void 0))
    )
      throw new O(`Unknown adapter '${o}'`);
    if (s && (y.isFunction(s) || (s = s.get(t)))) break;
    l[o || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(l).map(
      ([c, u]) =>
        `adapter ${c} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let o = n
      ? a.length > 1
        ? `since :
` +
          a.map(lu).join(`
`)
        : " " + lu(a[0])
      : "as no adapter specified";
    throw new O(
      "There is no suitable adapter to dispatch the request " + o,
      "ERR_NOT_SUPPORT",
    );
  }
  return s;
}
const up = { getAdapter: dy, adapters: wo };
function di(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ts(null, e);
}
function iu(e) {
  return (
    di(e),
    (e.headers = Ne.from(e.headers)),
    (e.data = ui.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    up
      .getAdapter(
        e.adapter || es.adapter,
        e,
      )(e)
      .then(
        function (r) {
          (di(e), (e.response = r));
          try {
            r.data = ui.call(e, e.transformResponse, r);
          } finally {
            delete e.response;
          }
          return ((r.headers = Ne.from(r.headers)), r);
        },
        function (r) {
          if (!lp(r) && (di(e), r && r.response)) {
            e.response = r.response;
            try {
              r.response.data = ui.call(e, e.transformResponse, r.response);
            } finally {
              delete e.response;
            }
            r.response.headers = Ne.from(r.response.headers);
          }
          return Promise.reject(r);
        },
      )
  );
}
const Tl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Tl[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const au = {};
Tl.transitional = function (t, n, r) {
  function s(l, a) {
    return (
      "[Axios v" +
      vo +
      "] Transitional option '" +
      l +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (l, a, o) => {
    if (t === !1)
      throw new O(
        s(a, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED,
      );
    return (
      n &&
        !au[a] &&
        ((au[a] = !0),
        console.warn(
          s(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, a, o) : !0
    );
  };
};
Tl.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function fy(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const l = r[s],
      a = Object.prototype.hasOwnProperty.call(t, l) ? t[l] : void 0;
    if (a) {
      const o = e[l],
        c = o === void 0 || a(o, l, e);
      if (c !== !0)
        throw new O("option " + l + " must be " + c, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new O("Unknown option " + l, O.ERR_BAD_OPTION);
  }
}
const Ds = { assertOptions: fy, validators: Tl },
  we = Ds.validators;
let an = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Kc(), response: new Kc() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const l = (() => {
          if (!s.stack) return "";
          const a = s.stack.indexOf(`
`);
          return a === -1 ? "" : s.stack.slice(a + 1);
        })();
        try {
          if (!r.stack) r.stack = l;
          else if (l) {
            const a = l.indexOf(`
`),
              o =
                a === -1
                  ? -1
                  : l.indexOf(
                      `
`,
                      a + 1,
                    ),
              c = o === -1 ? "" : l.slice(o + 1);
            String(r.stack).endsWith(c) ||
              (r.stack +=
                `
` + l);
          }
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hn(this.defaults, n)));
    const { transitional: r, paramsSerializer: s, headers: l } = n;
    (r !== void 0 &&
      Ds.assertOptions(
        r,
        {
          silentJSONParsing: we.transitional(we.boolean),
          forcedJSONParsing: we.transitional(we.boolean),
          clarifyTimeoutError: we.transitional(we.boolean),
          legacyInterceptorReqResOrdering: we.transitional(we.boolean),
          advertiseZstdAcceptEncoding: we.transitional(we.boolean),
          validateStatusUndefinedResolves: we.transitional(we.boolean),
        },
        !1,
      ),
      s != null &&
        (y.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Ds.assertOptions(
              s,
              { encode: we.function, serialize: we.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Ds.assertOptions(
        n,
        {
          baseUrl: we.spelling("baseURL"),
          withXsrfToken: we.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let a = l && y.merge(l.common, l[n.method]);
    (l &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "query", "common"],
        (N) => {
          delete l[N];
        },
      ),
      (n.headers = Ne.concat(a, l)));
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function (j) {
      if (typeof j.runWhen == "function" && j.runWhen(n) === !1) return;
      c = c && j.synchronous;
      const v = n.transitional || xo;
      v && v.legacyInterceptorReqResOrdering
        ? o.unshift(j.fulfilled, j.rejected)
        : o.push(j.fulfilled, j.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (j) {
      u.push(j.fulfilled, j.rejected);
    });
    let p,
      h = 0,
      m;
    if (!c) {
      const N = [iu.bind(this), void 0];
      for (
        N.unshift(...o), N.push(...u), m = N.length, p = Promise.resolve(n);
        h < m;
      )
        p = p.then(N[h++], N[h++]);
      return p;
    }
    m = o.length;
    let x = n;
    for (; h < m; ) {
      const N = o[h++],
        j = o[h++];
      try {
        x = N(x);
      } catch (v) {
        j.call(this, v);
        break;
      }
    }
    try {
      p = iu.call(this, x);
    } catch (N) {
      return Promise.reject(N);
    }
    for (h = 0, m = u.length; h < m; ) p = p.then(u[h++], u[h++]);
    return p;
  }
  getUri(t) {
    t = hn(this.defaults, t);
    const n = ap(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return np(n, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function (t) {
  an.prototype[t] = function (n, r) {
    return this.request(
      hn(r || {}, {
        method: t,
        url: n,
        data: r && y.hasOwnProp(r, "data") ? r.data : void 0,
      }),
    );
  };
});
y.forEach(["post", "put", "patch", "query"], function (t) {
  function n(r) {
    return function (l, a, o) {
      return this.request(
        hn(o || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: a,
        }),
      );
    };
  }
  ((an.prototype[t] = n()),
    t !== "query" && (an.prototype[t + "Form"] = n(!0)));
});
let py = class dp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    (this.promise.then((s) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let l;
        const a = new Promise((o) => {
          (r.subscribe(o), (l = o));
        }).then(s);
        return (
          (a.cancel = function () {
            r.unsubscribe(l);
          }),
          a
        );
      }),
      t(function (l, a, o) {
        r.reason || ((r.reason = new ts(l, a, o)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new dp(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function hy(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function my(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const fa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(fa).forEach(([e, t]) => {
  fa[t] = e;
});
function fp(e) {
  const t = new an(e),
    n = $f(an.prototype.request, t);
  return (
    y.extend(n, an.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return fp(hn(e, s));
    }),
    n
  );
}
const ne = fp(es);
ne.Axios = an;
ne.CanceledError = ts;
ne.CancelToken = py;
ne.isCancel = lp;
ne.VERSION = vo;
ne.toFormData = Ol;
ne.AxiosError = O;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = hy;
ne.isAxiosError = my;
ne.mergeConfig = hn;
ne.AxiosHeaders = Ne;
ne.formToJSON = (e) => sp(y.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = up.getAdapter;
ne.HttpStatusCode = fa;
ne.default = ne;
const {
  Axios: Zy,
  AxiosError: ev,
  CanceledError: tv,
  isCancel: nv,
  CancelToken: rv,
  VERSION: sv,
  all: lv,
  Cancel: iv,
  isAxiosError: av,
  spread: ov,
  toFormData: cv,
  AxiosHeaders: uv,
  HttpStatusCode: dv,
  formToJSON: fv,
  getAdapter: pv,
  mergeConfig: hv,
  create: mv,
} = ne;
function gy() {
  const e = _e(),
    [t, n] = w.useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
    }),
    [r, s] = w.useState(!1),
    l = (o) => {
      n({ ...t, [o.target.name]: o.target.value });
    },
    a = async (o) => {
      var c, u;
      o.preventDefault();
      try {
        s(!0);
        const p = await ne.post(
          `https://backend-jewelry-production.up.railway.app/api/auth/register`,
        );
        (localStorage.setItem("token", p.data.token),
          localStorage.setItem("user", JSON.stringify(p.data.user)),
          alert("Account Created Successfully"),
          e("/"));
      } catch (p) {
        alert(
          ((u = (c = p.response) == null ? void 0 : c.data) == null
            ? void 0
            : u.message) || "Registration failed",
        );
      } finally {
        s(!1);
      }
    };
  return i.jsx("div", {
    className:
      "min-h-screen bg-[#f7f7f5] flex items-center justify-center px-4 py-10",
    children: i.jsxs("div", {
      className: `\r
        w-full\r
        max-w-md\r
        rounded-3xl\r
        border\r
       border-[#e5e0d5]\r
        bg-white\r
        p-8\r
        shadow-x1\r
        `,
      children: [
        i.jsxs("div", {
          className: "text-center mb-8",
          children: [
            i.jsx("h1", {
              className: "text-4xl tracking-[8px] text-[#d6b45a] font-serif",
              children: "LUMIERE",
            }),
            i.jsx("p", {
              className: "text-xs tracking-[4px] text-[#9c8450] mt-2",
              children: "BEAUTY RETAIL SUITE",
            }),
          ],
        }),
        i.jsx("hr", { className: "border-[#2c2412] mb-8" }),
        i.jsx("h2", {
          className: "text-[#d6b45a] text-2xl font-serif mb-1",
          children: "Create your account",
        }),
        i.jsx("p", {
          className: "text-gray-500 text-sm mb-6",
          children: "Fill in your details to get started",
        }),
        i.jsxs("form", {
          onSubmit: a,
          className: "space-y-4",
          children: [
            i.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                i.jsx("input", {
                  type: "text",
                  name: "first_name",
                  placeholder: "First Name",
                  value: t.first_name,
                  onChange: l,
                  required: !0,
                  className:
                    "bg-[#fafafa] border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:border-[#d6b45a]",
                }),
                i.jsx("input", {
                  type: "text",
                  name: "last_name",
                  placeholder: "Last Name",
                  value: t.last_name,
                  onChange: l,
                  required: !0,
                  className:
                    "bg-[#fafafa] border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:border-[#d6b45a]",
                }),
              ],
            }),
            i.jsx("input", {
              type: "email",
              name: "email",
              placeholder: "Email Address",
              value: t.email,
              onChange: l,
              required: !0,
              className:
                "bg-[#fafafa] border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:border-[#d6b45a]",
            }),
            i.jsx("input", {
              type: "text",
              name: "phone",
              placeholder: "+92 300 0000000",
              value: t.phone,
              onChange: l,
              className:
                "bg-[#fafafa] border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:border-[#d6b45a]",
            }),
            i.jsx("input", {
              type: "password",
              name: "password",
              placeholder: "Password (min. 8 characters)",
              value: t.password,
              onChange: l,
              required: !0,
              className:
                "bg-[#fafafa] border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:border-[#d6b45a]",
            }),
            i.jsx("button", {
              type: "submit",
              disabled: r,
              className: `\r
            w-full\r
            bg-[#d6b45a]\r
            text-black\r
            font-semibold\r
            py-4\r
            rounded-lg\r
            hover:brightness-110\r
            `,
              children: r ? "Creating..." : "CREATE ACCOUNT",
            }),
          ],
        }),
        i.jsx("p", {
          className: "text-center text-xs text-gray-500 mt-5",
          children: "JWT secured session",
        }),
        i.jsxs("p", {
          className: "text-center text-gray-400 mt-5",
          children: [
            "Already have an account?",
            i.jsx($, {
              to: "/login",
              className: "text-[#d6b45a] ml-2",
              children: "Sign In",
            }),
          ],
        }),
      ],
    }),
  });
}
function Qn({ product: e, theme: t = "light" }) {
  const [n, r] = w.useState(!1),
    [s, l] = w.useState(!1),
    a = _e(),
    o = () => a(`/product/${e.id}`),
    c = t === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    u = t === "dark" ? "text-gray-400" : "text-gray-500",
    p = e.img_url || e.img || "",
    h = e.model_img_url || p;
  return i.jsxs("div", {
    className: `product-card ${c} group cursor-pointer`,
    onClick: o,
    onMouseEnter: () => l(!0),
    onMouseLeave: () => l(!1),
    children: [
      i.jsxs("div", {
        className: "relative overflow-hidden aspect-square bg-gray-100",
        children: [
          i.jsx("img", {
            src: p,
            alt: e.name,
            className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${s ? "opacity-0" : "opacity-100"}`,
            loading: "lazy",
          }),
          i.jsx("img", {
            src: h,
            alt: `${e.name} model`,
            className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${s ? "opacity-100" : "opacity-0"}`,
            loading: "lazy",
          }),
          i.jsx("div", {
            className:
              "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4",
            children: i.jsxs("button", {
              className:
                "bg-white text-gray-900 text-[10px] tracking-widest uppercase px-5 py-2.5 font-medium hover:bg-gold hover:text-white transition-colors flex items-center gap-2",
              children: [i.jsx(ex, { size: 12 }), " Quick View"],
            }),
          }),
          i.jsx("button", {
            className:
              "absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
            onClick: (m) => {
              (m.stopPropagation(), r(!n));
            },
            children: i.jsx(fo, {
              size: 14,
              className: n ? "fill-red-500 text-red-500" : "text-gray-600",
            }),
          }),
        ],
      }),
      i.jsxs("div", {
        className: "p-4",
        children: [
          e.category &&
            i.jsx("p", {
              className: `text-[10px] tracking-[0.15em] uppercase ${u} mb-1`,
              children: e.category,
            }),
          i.jsx("h3", {
            className: "font-playfair text-base font-light leading-snug mb-1",
            children: e.name,
          }),
          e.description &&
            i.jsx("p", {
              className: `text-xs ${u} mb-2 line-clamp-2`,
              children: e.description,
            }),
          i.jsxs("p", {
            className: "text-sm font-medium tracking-wide text-gold",
            children: ["PKR ", Number(e.price).toLocaleString()],
          }),
        ],
      }),
    ],
  });
}
const Q = {
    necklace: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    ],
    ring: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
    ],
    bracelet: [
      "https://images.unsplash.com/photo-1573408301185-9519f94816e5?w=600&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      "https://images.unsplash.com/photo-1614613535308-eb5fbd847f5a?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    ],
    earring: [
      "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    ],
    watch: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    ],
    model: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    ],
    luxury: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
    ],
  },
  xy = [
    { label: "Necklaces & Pendants", img: Q.necklace[0], path: "/jewelry" },
    { label: "Bracelets", img: Q.bracelet[0], path: "/jewelry" },
    { label: "Earrings", img: Q.earring[0], path: "/jewelry" },
    { label: "Rings", img: Q.ring[0], path: "/jewelry" },
    { label: "Watches", img: Q.watch[0], path: "/watches" },
  ],
  yy = [
    {
      title: "Book an Appointment",
      desc: "Meet with our jewelry specialists virtually or in-store for personalized recommendations.",
      link: "Book a Virtual Appointment",
      img: Q.luxury[0],
    },
    {
      title: "Customer Care",
      desc: "Receive expert assistance regarding orders, products, repairs, and services.",
      link: "Learn More",
      img: Q.luxury[1],
    },
    {
      title: "The Iconic Blue Box",
      desc: "Every Lumière purchase arrives beautifully packaged in our signature blue box.",
      link: "Learn More",
      img: Q.luxury[2],
    },
  ];
function vy() {
  const e = w.useRef(null),
    [t, n] = w.useState([]),
    [r, s] = w.useState(!0),
    l = (a) => {
      var o;
      (o = e.current) == null ||
        o.scrollBy({ left: a * 320, behavior: "smooth" });
    };
  return (
    w.useEffect(() => {
      (async () => {
        try {
          s(!0);
          const c = await (
            await fetch("http://localhost:5000/api/products")
          ).json();
          n(c);
        } catch (o) {
          console.error("Error fetching products:", o);
        } finally {
          s(!1);
        }
      })();
    }, []),
    i.jsxs("div", {
      className: "pt-24",
      children: [
        i.jsxs("section", {
          className: "relative h-[88vh] min-h-[600px] overflow-hidden",
          children: [
            i.jsx("img", {
              src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=80",
              alt: "Hero",
              className:
                "w-full h-full object-cover scale-105 animate-[slowZoom_8s_ease-out_forwards]",
            }),
            i.jsxs("div", {
              className:
                "absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6",
              children: [
                i.jsx("p", {
                  className:
                    "text-xs tracking-[0.4em] uppercase mb-4 opacity-80",
                  children: "New Collection 2024",
                }),
                i.jsxs("h1", {
                  className:
                    "font-playfair text-5xl md:text-7xl font-light mb-6 leading-tight",
                  children: [
                    "Timeless ",
                    i.jsx("br", {}),
                    i.jsx("em", { className: "italic", children: "Elegance" }),
                  ],
                }),
                i.jsx("p", {
                  className:
                    "text-sm tracking-widest uppercase opacity-75 mb-10 max-w-md",
                  children:
                    "Extraordinary jewelry crafted for life's most precious moments",
                }),
                i.jsxs("div", {
                  className: "flex gap-4 flex-wrap justify-center",
                  children: [
                    i.jsx($, {
                      to: "/jewelry",
                      className:
                        "border border-white text-white text-xs uppercase px-8 py-3.5 hover:bg-white hover:text-black transition",
                      children: "Shop Now",
                    }),
                    i.jsx($, {
                      to: "/high-jewelry",
                      className:
                        "bg-gold text-black text-xs uppercase px-8 py-3.5 hover:bg-yellow-400 transition",
                      children: "Explore Collection",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsxs("section", {
          className: "max-w-7xl mx-auto px-6 py-20",
          children: [
            i.jsx("h2", {
              className: "section-title font-playfair",
              children: "Shop by Category",
            }),
            i.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
              children: xy.map((a) =>
                i.jsxs(
                  $,
                  {
                    to: a.path,
                    className: "group block",
                    children: [
                      i.jsx("div", {
                        className:
                          "overflow-hidden aspect-[3/4] bg-gray-100 mb-3",
                        children: i.jsx("img", {
                          src: a.img,
                          alt: a.label,
                          className:
                            "w-full h-full object-cover group-hover:scale-105 transition duration-700",
                        }),
                      }),
                      i.jsx("p", {
                        className:
                          "text-center text-xs uppercase tracking-widest text-gray-700 group-hover:text-gold",
                        children: a.label,
                      }),
                    ],
                  },
                  a.label,
                ),
              ),
            }),
          ],
        }),
        i.jsx("section", {
          className: "pb-20 bg-luxury-light py-16",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "section-title font-playfair",
                children: "New Jewelry",
              }),
              i.jsxs("div", {
                className: "relative",
                children: [
                  i.jsx("button", {
                    onClick: () => l(-1),
                    className:
                      "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2",
                    children: i.jsx(Xg, {}),
                  }),
                  i.jsx("div", {
                    ref: e,
                    className: "flex gap-4 overflow-x-auto scroll-smooth pb-4",
                    children: r
                      ? i.jsx("p", {
                          className: "text-gray-500",
                          children: "Loading products...",
                        })
                      : t.map((a) =>
                          i.jsx(
                            "div",
                            {
                              className: "min-w-[260px] md:min-w-[280px]",
                              children: i.jsx(Qn, { product: a }),
                            },
                            a.id,
                          ),
                        ),
                  }),
                  i.jsx("button", {
                    onClick: () => l(1),
                    className:
                      "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2",
                    children: i.jsx(Hr, {}),
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsxs("section", {
          className: "max-w-7xl mx-auto px-6 pb-20",
          children: [
            i.jsx("h2", {
              className: "section-title font-playfair",
              children: "Our Collections",
            }),
            r
              ? i.jsx("p", {
                  className: "text-gray-500",
                  children: "Loading products...",
                })
              : i.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                  children: t.map((a) => i.jsx(Qn, { product: a }, a.id)),
                }),
          ],
        }),
        i.jsx("section", {
          className: "bg-gray-50 py-20",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "section-title font-playfair",
                children: "The Lumière Experience",
              }),
              i.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: yy.map((a, o) =>
                  i.jsxs(
                    "div",
                    {
                      className: "text-center",
                      children: [
                        i.jsx("img", {
                          src: a.img,
                          className: "aspect-square object-cover mb-6 w-full",
                          alt: a.title,
                        }),
                        i.jsx("h3", {
                          className: "font-playfair text-xl mb-3",
                          children: a.title,
                        }),
                        i.jsx("p", {
                          className: "text-sm text-gray-600 mb-4",
                          children: a.desc,
                        }),
                        i.jsx("a", {
                          href: "#",
                          className: "text-xs uppercase border-b",
                          children: a.link,
                        }),
                      ],
                    },
                    o,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const wy = [
  "Diamond Solitaire Ring",
  "Diamond Choker",
  "Tennis Bracelet Diamond",
  "Diamond Drop Earrings",
  "Emerald Cocktail Ring",
  "Sapphire Tennis Bracelet",
];
function jy() {
  var s, l;
  const [e, t] = w.useState([]),
    [n, r] = w.useState(!0);
  return (
    w.useEffect(() => {
      (async () => {
        try {
          r(!0);
          const u = (
            await (
              await fetch(
                "https://backend-jewelry-production.up.railway.app/api/products",
              )
            ).json()
          ).filter((p) => wy.includes(p.name));
          t(u);
        } catch (o) {
          console.error("High Jewelry fetch error:", o);
        } finally {
          r(!1);
        }
      })();
    }, []),
    i.jsxs("div", {
      className: "min-h-screen bg-white pt-24",
      children: [
        i.jsxs("section", {
          className: "relative h-screen overflow-hidden",
          children: [
            i.jsx($, {
              to: "/shop",
              children: i.jsx("img", {
                src: Q.luxury[0],
                className: "w-full h-full object-cover cursor-pointer",
                alt: "High Jewelry",
              }),
            }),
            i.jsx("div", {
              className:
                "absolute inset-0 bg-black/40 flex flex-col justify-end text-white pb-24 text-center px-6 pointer-events-none",
              children: i.jsxs("h1", {
                className: "text-5xl font-light",
                children: ["High ", i.jsx("em", { children: "Jewelry" })],
              }),
            }),
          ],
        }),
        i.jsxs("section", {
          className: "grid md:grid-cols-2 min-h-[85vh]",
          children: [
            i.jsx("div", {
              className:
                "flex items-center justify-center px-8 md:px-16 py-16 bg-white order-1",
              children: i.jsxs("div", {
                className: "max-w-sm",
                children: [
                  i.jsx("p", {
                    className:
                      "text-xs tracking-[0.2em] uppercase text-gray-400 mb-4",
                    children: "Blue Book 2026",
                  }),
                  i.jsxs("h2", {
                    className: "text-4xl font-light leading-snug mb-6",
                    children: [
                      "Introducing Our Newest ",
                      i.jsx("em", { children: "High Jewelry" }),
                      " Collection",
                    ],
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-600 leading-relaxed mb-8",
                    children:
                      "Hidden Garden captures nature's hidden treasures in extraordinary creations inspired by light, movement and transformation. Reinterpreting iconic flora and fauna motifs, the collection captures the poetry of an imagined garden where blossoms unfurl, wings take flight and gemstones radiate with colour and brilliance.",
                  }),
                  i.jsx($, {
                    to: "/shop",
                    className:
                      "text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition",
                    children: "Explore Blue Book 2026: Hidden Garden",
                  }),
                ],
              }),
            }),
            i.jsx($, {
              to: "/shop",
              className: "h-[60vh] md:h-auto order-2 block",
              children: i.jsx("img", {
                src: Q.luxury[1],
                alt: "Blue Book 2026 – Hidden Garden necklace",
                className: "w-full h-full object-cover cursor-pointer",
              }),
            }),
          ],
        }),
        i.jsxs("section", {
          className: "grid md:grid-cols-[1fr_1fr_1fr] min-h-[80vh]",
          children: [
            i.jsx($, {
              to: "/shop",
              className: "h-[50vh] md:h-auto overflow-hidden block",
              children: i.jsx("img", {
                src: Q.luxury[2],
                alt: "High jewelry model",
                className:
                  "w-full h-full object-cover object-top cursor-pointer",
              }),
            }),
            i.jsx($, {
              to: "/shop",
              className: "h-[50vh] md:h-auto overflow-hidden block",
              children: i.jsx("img", {
                src: Q.luxury[1],
                alt: "Bird on a Rock brooch detail",
                className: "w-full h-full object-cover cursor-pointer",
              }),
            }),
            i.jsx("div", {
              className:
                "flex items-center justify-center px-8 md:px-12 py-16 bg-white",
              children: i.jsxs("div", {
                className: "max-w-xs",
                children: [
                  i.jsx("h2", {
                    className: "text-3xl font-light mb-5",
                    children: "Inventive Artistry",
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-600 leading-relaxed mb-8",
                    children:
                      "Jean Schlumberger ushered in an unprecedented era of jewelry design when he began his legendary collaboration with our House. With his unique ability to balance jubilant opulence with tasteful restraint, he created transcendent jewels and wearable art, including the House's most emblematic creation: the Bird on a Rock.",
                  }),
                  i.jsx($, {
                    to: "/shop",
                    className:
                      "text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition",
                    children: "Discover More",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("section", {
          className: "max-w-5xl mx-auto px-6 py-16",
          children: i.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              i.jsxs($, {
                to: "/shop",
                className: "group overflow-hidden block",
                children: [
                  i.jsx("div", {
                    className: "overflow-hidden h-[55vh]",
                    children: i.jsx("img", {
                      src:
                        ((s = Q.rings) == null ? void 0 : s[0]) ?? Q.luxury[0],
                      alt: "Tiffany Diamonds",
                      className:
                        "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer",
                    }),
                  }),
                  i.jsx("p", {
                    className:
                      "mt-3 text-sm text-center tracking-widest uppercase text-gray-700",
                    children: "Tiffany Diamonds",
                  }),
                ],
              }),
              i.jsxs($, {
                to: "/shop",
                className: "group overflow-hidden block",
                children: [
                  i.jsx("div", {
                    className: "overflow-hidden h-[55vh]",
                    children: i.jsx("img", {
                      src:
                        ((l = Q.rings) == null ? void 0 : l[1]) ?? Q.luxury[1],
                      alt: "Tiffany Colored Gemstones",
                      className:
                        "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer",
                    }),
                  }),
                  i.jsx("p", {
                    className:
                      "mt-3 text-sm text-center tracking-widest uppercase text-gray-700",
                    children: "Tiffany Colored Gemstones",
                  }),
                ],
              }),
            ],
          }),
        }),
        i.jsxs("section", {
          className: "grid md:grid-cols-2 min-h-[85vh] bg-[#f5f5f3]",
          children: [
            i.jsx("div", {
              className:
                "flex items-center justify-center px-8 md:px-16 py-16 order-1",
              children: i.jsxs("div", {
                className: "max-w-sm",
                children: [
                  i.jsx("p", {
                    className:
                      "text-xs tracking-[0.2em] uppercase text-gray-400 mb-4",
                    children: "Gemological Wonders",
                  }),
                  i.jsxs("h2", {
                    className: "text-4xl font-light leading-snug mb-6",
                    children: [
                      "Legendary ",
                      i.jsx("em", { children: "Acquisitions" }),
                    ],
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-600 leading-relaxed mb-8",
                    children:
                      "Discover our latest gemological acquisition: an extraordinary 7,500-carat kunzite — one of the largest and most vivid examples of this rare pink gem ever unearthed. Nature's most breathtaking treasures, brought to light.",
                  }),
                  i.jsx($, {
                    to: "/shop",
                    className:
                      "text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition",
                    children: "Learn More",
                  }),
                ],
              }),
            }),
            i.jsx($, {
              to: "/shop",
              className: "h-[60vh] md:h-auto order-2 overflow-hidden block",
              children: i.jsx("img", {
                src: Q.luxury[2],
                alt: "Extraordinary 7,500-carat kunzite gemstone",
                className:
                  "w-full h-full object-cover object-center cursor-pointer",
              }),
            }),
          ],
        }),
        i.jsxs("section", {
          className: "max-w-3xl mx-auto text-center py-16 px-6",
          children: [
            i.jsx("h2", {
              className: "text-3xl font-light",
              children: "Masterpieces Born from Passion",
            }),
            i.jsx("p", {
              className: "mt-4 text-sm text-gray-500 leading-relaxed",
              children:
                "Every piece in our High Jewelry collection is a singular work of art, crafted by hand using the world's most extraordinary gemstones.",
            }),
          ],
        }),
        i.jsxs("section", {
          className: "grid md:grid-cols-2 min-h-screen",
          children: [
            i.jsx("div", {
              className:
                "flex items-center justify-center px-8 md:px-16 py-16 bg-white",
              children: i.jsxs("div", {
                className: "max-w-md",
                children: [
                  i.jsx("h2", {
                    className: "text-4xl font-light mb-6",
                    children: "Inventive Artistry",
                  }),
                  i.jsx("p", {
                    className: "text-gray-700 leading-relaxed mb-8",
                    children:
                      "Inspired by the world's most extraordinary gemstones, our High Jewelry creations celebrate exceptional craftsmanship and timeless elegance. Each masterpiece is meticulously handcrafted to transform rare stones into wearable works of art.",
                  }),
                  i.jsx($, {
                    to: "/shop",
                    className:
                      "text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-70 transition",
                    children: "Discover More",
                  }),
                ],
              }),
            }),
            i.jsx($, {
              to: "/shop",
              className: "h-[60vh] md:h-screen block",
              children: i.jsx("img", {
                src: Q.luxury[1],
                alt: "High Jewelry Artistry",
                className: "w-full h-full object-cover cursor-pointer",
              }),
            }),
          ],
        }),
        i.jsxs("section", {
          className: "max-w-7xl mx-auto px-6 py-20",
          children: [
            i.jsx("h2", {
              className: "text-2xl font-light text-center mb-10 tracking-wide",
              children: "The Collection",
            }),
            n
              ? i.jsx("p", {
                  className: "text-center text-gray-500",
                  children: "Loading...",
                })
              : e.length === 0
                ? i.jsx("p", {
                    className: "text-center text-gray-400",
                    children: "No high jewelry items found.",
                  })
                : i.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                    children: e.map((a) => i.jsx(Qn, { product: a }, a.id)),
                  }),
          ],
        }),
        i.jsxs("section", {
          className: "bg-gray-900 text-white py-24 text-center px-6",
          children: [
            i.jsx("p", {
              className:
                "text-xs tracking-[0.3em] uppercase text-gray-400 mb-3",
              children: "Our Promise",
            }),
            i.jsx("h2", {
              className: "text-3xl font-light",
              children: "Where Artistry Meets Excellence",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "text-center py-6 text-xs text-gray-400",
          children: [
            i.jsx($, {
              to: "/",
              className: "hover:underline",
              children: "Home",
            }),
            " ",
            "/",
            " ",
            i.jsx($, {
              to: "/shop",
              className: "hover:underline",
              children: "All Products",
            }),
            " ",
            "/ High Jewelry",
          ],
        }),
      ],
    })
  );
}
const Ny = {
  Category: ["Rings", "Necklaces", "Bracelets", "Earrings", "Brooches"],
  Price: [
    "Under Rs. 100,000",
    "Rs. 100,000–250,000",
    "Rs. 250,000–500,000",
    "Over Rs. 500,000",
  ],
  Material: [
    "18K Gold",
    "18K White Gold",
    "18K Rose Gold",
    "Platinum",
    "Sterling Silver",
  ],
  Collection: ["Classic", "Diamond", "Gemstone", "Pearl", "Wedding"],
};
function Sy({ label: e, options: t, selected: n, onChange: r }) {
  const [s, l] = w.useState(!1);
  return i.jsxs("div", {
    className: "border-b border-gray-200 py-3",
    children: [
      i.jsxs("button", {
        className:
          "flex justify-between w-full text-xs tracking-widest uppercase font-medium py-1",
        onClick: () => l(!s),
        children: [
          e,
          i.jsx(Rl, {
            size: 14,
            className: `transition-transform ${s ? "rotate-180" : ""}`,
          }),
        ],
      }),
      s &&
        i.jsx("div", {
          className: "mt-2 space-y-2",
          children: t.map((a) =>
            i.jsxs(
              "label",
              {
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  i.jsx("input", {
                    type: "checkbox",
                    className: "accent-gold",
                    checked: n.includes(a),
                    onChange: () => r(e, a),
                  }),
                  i.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: a,
                  }),
                ],
              },
              a,
            ),
          ),
        }),
    ],
  });
}
function ky() {
  const [e, t] = w.useState({}),
    [n, r] = w.useState("default"),
    [s, l] = w.useState(!1),
    [a, o] = w.useState([]),
    [c, u] = w.useState(!0);
  w.useEffect(() => {
    (async () => {
      var x;
      try {
        u(!0);
        const N = (x = e.Category) == null ? void 0 : x[0];
        let j =
          "https://backend-jewelry-production.up.railway.app/api/products";
        N && (j += `?category=${encodeURIComponent(N)}`);
        const d = await (await fetch(j)).json();
        o(d);
      } catch (N) {
        console.error("Error fetching products:", N);
      } finally {
        u(!1);
      }
    })();
  }, [e.Category]);
  const p = (m, x) => {
    t((N) => {
      const j = N[m] || [];
      return {
        ...N,
        [m]: j.includes(x) ? j.filter((v) => v !== x) : [...j, x],
      };
    });
  };
  let h = [...a];
  return (
    n === "price-asc" && h.sort((m, x) => Number(m.price) - Number(x.price)),
    n === "price-desc" && h.sort((m, x) => Number(x.price) - Number(m.price)),
    i.jsxs("div", {
      className: "min-h-screen bg-white pt-24",
      children: [
        i.jsxs("div", {
          className: "relative h-64 md:h-80 overflow-hidden",
          children: [
            i.jsx("img", {
              src: Q.necklace[0],
              alt: "Jewelry",
              className: "w-full h-full object-cover",
            }),
            i.jsxs("div", {
              className:
                "absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white",
              children: [
                i.jsx("p", {
                  className:
                    "text-xs tracking-[0.4em] uppercase mb-2 opacity-70",
                  children: "Lumière & Co.",
                }),
                i.jsx("h1", {
                  className: "font-playfair text-4xl md:text-5xl font-light",
                  children: "Jewelry",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wider",
          children: [i.jsx($, { to: "/", children: "Home" }), " / Jewelry"],
        }),
        i.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 py-6 flex gap-8",
          children: [
            i.jsxs("aside", {
              className: `w-56 flex-shrink-0 ${s ? "block" : "hidden"} lg:block`,
              children: [
                i.jsx("h3", {
                  className: "font-playfair text-lg mb-4",
                  children: "Filters",
                }),
                Object.entries(Ny).map(([m, x]) =>
                  i.jsx(
                    Sy,
                    { label: m, options: x, selected: e[m] || [], onChange: p },
                    m,
                  ),
                ),
              ],
            }),
            i.jsxs("div", {
              className: "flex-1",
              children: [
                i.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    i.jsxs("button", {
                      className:
                        "lg:hidden flex items-center gap-2 text-xs uppercase border px-3 py-2",
                      onClick: () => l(!s),
                      children: [i.jsx(nx, { size: 14 }), " Filters"],
                    }),
                    i.jsx("p", {
                      className: "text-sm text-gray-500",
                      children: c ? "Loading..." : `${h.length} products`,
                    }),
                    i.jsxs("select", {
                      value: n,
                      onChange: (m) => r(m.target.value),
                      className: "border px-3 py-2 text-xs uppercase",
                      children: [
                        i.jsx("option", {
                          value: "default",
                          children: "Sort By",
                        }),
                        i.jsx("option", {
                          value: "price-asc",
                          children: "Price: Low to High",
                        }),
                        i.jsx("option", {
                          value: "price-desc",
                          children: "Price: High to Low",
                        }),
                      ],
                    }),
                  ],
                }),
                c
                  ? i.jsx("p", { children: "Loading products..." })
                  : i.jsx("div", {
                      className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                      children: h.map((m) => i.jsx(Qn, { product: m }, m.id)),
                    }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Ey({ q: e, a: t }) {
  const [n, r] = w.useState(!1);
  return i.jsxs("div", {
    className: "border-b border-gray-200 py-4",
    children: [
      i.jsxs("button", {
        className:
          "flex justify-between w-full text-left text-sm font-medium text-gray-800",
        onClick: () => r(!n),
        children: [e, n ? i.jsx(uo, { size: 16 }) : i.jsx(Rl, { size: 16 })],
      }),
      n &&
        i.jsx("p", {
          className: "mt-3 text-sm text-gray-600 leading-relaxed",
          children: t,
        }),
    ],
  });
}
const Cy = [
    {
      title: "Explore Diamond Cuts",
      desc: "Learn about the unique cuts that maximize brilliance and sparkle.",
      img: Q.ring[0],
    },
    {
      title: "Explore Diamond Provenance",
      desc: "Discover the journey of every responsibly sourced diamond.",
      img: Q.ring[1],
    },
    {
      title: "Explore a Lifetime of Service",
      desc: "Enjoy expert care and complimentary services throughout your ownership.",
      img: Q.ring[2],
    },
  ],
  by = [
    {
      q: "What is Lumière Ring Studio?",
      a: "Designed by you. Crafted by Lumière. We invite you to create an engagement ring as extraordinary as your relationship.",
    },
    {
      q: "Can I customize my diamond?",
      a: "Yes. Our diamond experts will guide you through selection of cut, carat, color, clarity.",
    },
    { q: "How long does production take?", a: "Custom rings take 4–6 weeks." },
    {
      q: "Can I resize my ring?",
      a: "Complimentary lifetime resizing is included.",
    },
  ];
function _y({ ring: e, onClick: t }) {
  var a;
  const [n, r] = w.useState(!1),
    s = [
      e.img_url,
      e.model_img_url,
      e.image2,
      e.image3,
      e.image4,
      e.image5,
    ].filter(Boolean),
    l = n && s[1] ? s[1] : s[0];
  return i.jsxs("div", {
    className: "group cursor-pointer bg-white",
    onClick: t,
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    children: [
      i.jsxs("div", {
        className: "relative overflow-hidden aspect-square",
        children: [
          i.jsx("img", {
            src: l,
            alt: e.name,
            className: "w-full h-full object-cover transition duration-500",
            onError: (o) => {
              ((o.target.onerror = null),
                (o.target.src = "/images/jewelry/r1.webp"));
            },
          }),
          i.jsx("span", {
            className: `absolute top-2 left-2 bg-white/90 text-gray-700
                         text-[10px] px-2 py-0.5 rounded-full border border-gray-200`,
            children: e.material,
          }),
          s.length > 2 &&
            i.jsx("div", {
              className: `absolute bottom-2 left-0 right-0 flex justify-center
                          gap-1 opacity-0 group-hover:opacity-100 transition`,
              children: s.slice(0, 4).map((o, c) =>
                i.jsx(
                  "img",
                  {
                    src: o,
                    alt: `view ${c + 1}`,
                    className:
                      "w-7 h-7 object-cover rounded border-2 border-white",
                  },
                  c,
                ),
              ),
            }),
        ],
      }),
      i.jsxs("div", {
        className: "p-3 text-center",
        children: [
          i.jsx("p", {
            className: "font-playfair text-sm text-gray-800",
            children: e.name,
          }),
          e.specialization &&
            i.jsx("p", {
              className: "text-[11px] text-gray-400 mt-0.5",
              children:
                ((a = e.specialization
                  .split(
                    `
`,
                  )
                  .find((o) => o.startsWith("Stone"))) == null
                  ? void 0
                  : a.replace("Stone: ", "")) ?? "",
            }),
          i.jsxs("p", {
            className: "text-xs text-gold mt-1",
            children: ["Rs. ", e.price.toLocaleString()],
          }),
        ],
      }),
    ],
  });
}
function Ry() {
  const e = _e(),
    [t, n] = w.useState([]),
    [r, s] = w.useState([]),
    [l, a] = w.useState(!0);
  return (
    w.useEffect(() => {
      (async () => {
        try {
          a(!0);
          const [c, u] = await Promise.all([
            fetch(
              "https://backend-jewelry-production.up.railway.app/api/products?category=Rings",
            ),
            fetch(
              "https://backend-jewelry-production.up.railway.app/api/products?category=Bracelets",
            ),
          ]);
          (n(await c.json()), s(await u.json()));
        } catch (c) {
          console.error("Error fetching engagement page products:", c);
        } finally {
          a(!1);
        }
      })();
    }, []),
    i.jsxs("div", {
      className: "min-h-screen bg-white pt-24",
      children: [
        i.jsxs("section", {
          className: "relative h-screen overflow-hidden",
          children: [
            i.jsx("video", {
              className: "w-full h-full object-cover scale-105",
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              children: i.jsx("source", {
                src: "/videos/tifny2.mp4",
                type: "video/mp4",
              }),
            }),
            i.jsxs("div", {
              className: `absolute inset-0 bg-black/50 flex flex-col
                        items-center justify-center text-white text-center px-6`,
              children: [
                i.jsx("p", {
                  className:
                    "text-xs tracking-[0.5em] uppercase mb-4 opacity-70",
                  children: "Est. 1886",
                }),
                i.jsxs("h1", {
                  className:
                    "font-playfair text-5xl md:text-7xl font-light mb-6",
                  children: [
                    "Love & ",
                    i.jsx("em", { children: "Engagement" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsx("section", {
          className: "py-20 bg-white",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "text-center text-3xl mb-2 font-light",
                children: "Engagement Rings",
              }),
              i.jsx("p", {
                className: "text-center text-sm text-gray-400 mb-12",
                children: "Hover a card to preview · Click to explore",
              }),
              l
                ? i.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6",
                    children: [...Array(10)].map((o, c) =>
                      i.jsx(
                        "div",
                        {
                          className:
                            "animate-pulse bg-gray-100 aspect-square rounded",
                        },
                        c,
                      ),
                    ),
                  })
                : i.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                    children: t.map((o) =>
                      i.jsx(
                        _y,
                        { ring: o, onClick: () => e(`/product/${o.id}`) },
                        o.id,
                      ),
                    ),
                  }),
            ],
          }),
        }),
        i.jsx("section", {
          className: "bg-gray-50 py-20",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "text-center text-3xl mb-12 font-light",
                children: "Wedding Bands",
              }),
              l
                ? i.jsx("p", {
                    className: "text-center",
                    children: "Loading...",
                  })
                : i.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                    children: r.map((o) =>
                      i.jsxs(
                        "div",
                        {
                          className: "group cursor-pointer bg-white",
                          onClick: () => e(`/product/${o.id}`),
                          children: [
                            i.jsx("div", {
                              className:
                                "relative overflow-hidden aspect-square",
                              children: i.jsx("img", {
                                src: o.img_url,
                                alt: o.name,
                                className: `w-full h-full object-cover
                                 group-hover:scale-110 transition`,
                              }),
                            }),
                            i.jsxs("div", {
                              className: "p-4 text-center",
                              children: [
                                i.jsx("p", {
                                  className: "font-playfair text-base",
                                  children: o.name,
                                }),
                                i.jsxs("p", {
                                  className: "text-sm text-gold",
                                  children: ["Rs. ", o.price.toLocaleString()],
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      ),
                    ),
                  }),
            ],
          }),
        }),
        i.jsx("section", {
          className: "bg-gray-900 text-white py-20",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "text-center text-3xl mb-10",
                children: "The Difference",
              }),
              i.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: Cy.map((o, c) =>
                  i.jsxs(
                    "div",
                    {
                      className: "text-center",
                      children: [
                        i.jsx("img", {
                          src: o.img,
                          alt: o.title,
                          className: "mb-4 w-full aspect-square object-cover",
                        }),
                        i.jsx("h3", {
                          className: "text-lg",
                          children: o.title,
                        }),
                        i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: o.desc,
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
        }),
        i.jsxs("section", {
          className: "py-20 max-w-3xl mx-auto px-6",
          children: [
            i.jsx("h2", {
              className: "text-2xl mb-8 text-center",
              children: "FAQ",
            }),
            by.map((o, c) => i.jsx(Ey, { q: o.q, a: o.a }, c)),
          ],
        }),
        i.jsxs("div", {
          className: "text-center py-8 text-xs text-gray-400",
          children: [
            i.jsx($, { to: "/", children: "Home" }),
            " / Love & Engagement",
          ],
        }),
      ],
    })
  );
}
function Py({ title: e, content: t }) {
  const [n, r] = w.useState(!1);
  return i.jsxs("div", {
    className: "border-b border-gray-700 py-4",
    children: [
      i.jsxs("button", {
        className:
          "flex justify-between w-full text-left text-sm tracking-wider text-gray-300",
        onClick: () => r(!n),
        children: [
          e,
          n
            ? i.jsx(uo, { size: 16, className: "text-gold" })
            : i.jsx(Rl, { size: 16, className: "text-gold" }),
        ],
      }),
      n &&
        i.jsx("p", {
          className: "mt-3 text-sm text-gray-500 leading-relaxed",
          children: t,
        }),
    ],
  });
}
const Oy = [
  {
    title: "Complimentary Shipping & Returns",
    content:
      "All watch orders include complimentary shipping in our signature packaging. Returns accepted within 30 days.",
  },
  {
    title: "Ask a Client Advisor",
    content: "Our watch specialists are available to guide your selection.",
  },
];
function Ty() {
  const e = _e(),
    [t, n] = w.useState([]),
    [r, s] = w.useState(!0),
    [l, a] = w.useState(null),
    [o, c] = w.useState(!1);
  w.useEffect(() => {
    (async () => {
      try {
        s(!0);
        const x = await fetch(
          "https://backend-jewelry-production.up.railway.app/api/products?category=Watches",
        );
        if (!x.ok) throw new Error("Failed to fetch watches");
        const N = await x.json();
        n(N);
      } catch (x) {
        a(x.message);
      } finally {
        s(!1);
      }
    })();
  }, []);
  const u = t.slice(0, 3),
    p = t[3] || null,
    h = t;
  return i.jsxs("div", {
    className: "min-h-screen bg-white text-gray-900",
    children: [
      i.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 pt-28 pb-2 text-xs text-gray-500 tracking-wider",
        children: [
          i.jsx($, {
            to: "/",
            className: "hover:text-gold transition",
            children: "Home",
          }),
          i.jsx("span", { className: "mx-2 text-gray-700", children: "/" }),
          i.jsx("span", { className: "text-gray-400", children: "Watches" }),
        ],
      }),
      i.jsx("section", {
        className: "w-full py-10",
        children: i.jsxs("div", {
          className: "flex flex-col lg:flex-row bg-white",
          children: [
            i.jsx("div", {
              className: "w-full h-[220px] sm:h-[300px] lg:flex-1 lg:h-[450px]",
              children: i.jsx("video", {
                src: "/videos/watches.mp4",
                className: "w-full h-full object-cover",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
              }),
            }),
            i.jsx("div", {
              className:
                "w-full lg:w-[38%] flex items-center justify-center bg-white px-6 sm:px-8 lg:px-12 py-8 lg:py-10",
              children: i.jsxs("div", {
                className: "max-w-md",
                children: [
                  i.jsx("h1", {
                    className:
                      "font-playfair text-3xl sm:text-4xl lg:text-5xl font-light mb-6",
                    children: "Tiffany Watches",
                  }),
                  i.jsx("p", {
                    className: "text-base text-gray-700 leading-relaxed",
                    children:
                      "Discover exceptional Swiss-made timepieces exemplifying the House's legacy of extraordinary savoir faire and inventive artistry.",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      i.jsxs("section", {
        className: "max-w-7xl mx-auto px-6 py-16",
        children: [
          i.jsxs("div", {
            className: "text-center mb-12",
            children: [
              i.jsx("p", {
                className: "text-xs tracking-[0.4em] uppercase text-gold mb-3",
                children: "Curated Selection",
              }),
              i.jsx("h2", {
                className: "font-playfair text-3xl md:text-4xl font-light",
                children: "Featured Timepieces",
              }),
            ],
          }),
          r
            ? i.jsx("p", {
                className: "text-gray-400 text-center",
                children: "Loading...",
              })
            : i.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: u.map((m) =>
                  i.jsxs(
                    "div",
                    {
                      onClick: () => e(`/product/${m.id}`),
                      className:
                        "group cursor-pointer bg-white border border-gray-200 hover:border-gold transition duration-300 shadow-sm",
                      children: [
                        i.jsxs("div", {
                          className: "relative overflow-hidden aspect-[4/5]",
                          children: [
                            i.jsx("img", {
                              src: m.model_img_url || m.img_url,
                              alt: m.name,
                              className:
                                "w-full h-full object-cover group-hover:scale-105 transition duration-700",
                            }),
                            i.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300",
                            }),
                            i.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300",
                              children: i.jsx("button", {
                                className:
                                  "w-full border border-gold text-gold text-xs uppercase py-2 hover:bg-gold hover:text-black transition",
                                children: "View Details",
                              }),
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: "p-5",
                          children: [
                            i.jsx("h3", {
                              className:
                                "font-playfair text-lg font-light mb-1",
                              children: m.name,
                            }),
                            i.jsx("p", {
                              className:
                                "text-xs text-gray-400 mb-3 line-clamp-1",
                              children:
                                m.description ||
                                "Swiss-crafted luxury timepiece",
                            }),
                            i.jsxs("p", {
                              className: "text-gold text-sm tracking-wider",
                              children: ["$", m.price],
                            }),
                          ],
                        }),
                      ],
                    },
                    m.id,
                  ),
                ),
              }),
        ],
      }),
      p &&
        i.jsx("section", {
          className: "w-full py-10",
          children: i.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8",
            children: [
              i.jsx("div", {
                className: "w-full lg:w-[58%] overflow-hidden rounded-sm",
                style: { minHeight: "480px" },
                children: i.jsx("video", {
                  src: "/videos/tifny3.mp4",
                  className: "w-full h-full object-cover",
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                }),
              }),
              i.jsxs("div", {
                className:
                  "w-full lg:w-1/2 bg-white flex flex-col justify-center px-10 py-14 cursor-pointer group",
                onClick: () => e(`/product/${p.id}`),
                children: [
                  i.jsx("p", {
                    className:
                      "text-xs tracking-[0.4em] uppercase text-gold mb-4",
                    children: "Featured Piece",
                  }),
                  i.jsx("div", {
                    className:
                      "overflow-hidden mb-6 aspect-square w-full max-w-[220px] mx-auto lg:mx-0",
                    children: i.jsx("img", {
                      src: p.img_url,
                      alt: p.name,
                      className:
                        "w-full h-full object-cover group-hover:scale-105 transition duration-500",
                    }),
                  }),
                  i.jsx("h3", {
                    className: "font-playfair text-2xl font-light mb-3",
                    children: p.name,
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-400 leading-relaxed mb-4",
                    children:
                      p.description ||
                      "A masterpiece of Swiss precision and Tiffany design heritage.",
                  }),
                  i.jsxs("p", {
                    className: "text-gold text-xl mb-6",
                    children: ["$", p.price],
                  }),
                  i.jsx("button", {
                    className:
                      "self-start border border-gold text-gold text-xs uppercase px-8 py-3 hover:bg-gold hover:text-black transition tracking-widest",
                    children: "Shop Now",
                  }),
                ],
              }),
            ],
          }),
        }),
      i.jsxs("section", {
        className: "max-w-7xl mx-auto px-4 sm:px-6",
        children: [
          i.jsxs("div", {
            className: "text-center mb-12",
            children: [
              i.jsx("p", {
                className: "text-xs tracking-[0.4em] uppercase text-gold mb-3",
                children: "The Collection",
              }),
              i.jsx("h2", {
                className: "font-playfair text-3xl md:text-4xl font-light",
                children: "Watches Collection",
              }),
            ],
          }),
          r
            ? i.jsx("p", {
                className: "text-gray-400 text-center",
                children: "Loading watches...",
              })
            : l
              ? i.jsx("p", {
                  className: "text-red-500 text-center",
                  children: l,
                })
              : i.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: h.map((m) =>
                    i.jsxs(
                      "div",
                      {
                        onClick: () => e(`/product/${m.id}`),
                        className:
                          "group cursor-pointer bg-white border border-gray-200 hover:border-gold transition duration-300 shadow-sm",
                        children: [
                          i.jsx("div", {
                            className: "overflow-hidden aspect-square",
                            children: i.jsx("img", {
                              src: m.img_url,
                              alt: m.name,
                              className:
                                "w-full h-full object-cover group-hover:scale-110 transition duration-500",
                            }),
                          }),
                          i.jsxs("div", {
                            className: "p-5 border-t border-gray-100",
                            children: [
                              i.jsx("h3", {
                                className:
                                  "font-playfair text-base font-light mb-1",
                                children: m.name,
                              }),
                              i.jsx("p", {
                                className:
                                  "text-xs text-gray-400 mb-3 line-clamp-1",
                                children:
                                  m.description ||
                                  "Swiss-crafted luxury timepiece",
                              }),
                              i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  i.jsxs("p", {
                                    className: "text-gold text-sm",
                                    children: ["$", m.price],
                                  }),
                                  i.jsx("span", {
                                    className:
                                      "text-xs text-gray-400 uppercase tracking-widest group-hover:text-gold transition",
                                    children: "View →",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      m.id,
                    ),
                  ),
                }),
          !r &&
            t.length === 0 &&
            i.jsx("p", {
              className: "text-gray-500 text-center mt-6",
              children: "No watches found",
            }),
        ],
      }),
      i.jsx("section", {
        className: "py-20 bg-gray-50",
        children: i.jsxs("div", {
          className: "max-w-4xl mx-auto px-6",
          children: [
            i.jsx("h2", {
              className: "font-playfair text-2xl font-light text-center mb-10",
              children: "Client Services",
            }),
            Oy.map((m, x) =>
              i.jsx(Py, { title: m.title, content: m.content }, x),
            ),
          ],
        }),
      }),
    ],
  });
}
const Ly = ["All", "Rings", "Necklaces", "Bracelets", "Earrings", "Watches"];
function Ay() {
  const [e, t] = w.useState("All"),
    [n, r] = w.useState([]),
    [s, l] = w.useState(!0);
  w.useEffect(() => {
    (async () => {
      try {
        l(!0);
        const u = await (
          await fetch(
            "https://backend-jewelry-production.up.railway.app/api/products",
          )
        ).json();
        r(u);
      } catch (c) {
        console.error("Accessories fetch error:", c);
      } finally {
        l(!1);
      }
    })();
  }, []);
  const a = e === "All" ? n : n.filter((o) => o.category === e);
  return i.jsxs("div", {
    className: "min-h-screen bg-white pt-24",
    children: [
      i.jsxs("div", {
        className: "relative h-72 md:h-96 overflow-hidden",
        children: [
          i.jsx("img", {
            src: Q.model[2],
            alt: "Accessories",
            className: "w-full h-full object-cover",
          }),
          i.jsxs("div", {
            className:
              "absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white",
            children: [
              i.jsx("p", {
                className: "text-xs tracking-[0.4em] uppercase mb-2 opacity-70",
                children: "Lumière & Co.",
              }),
              i.jsx("h1", {
                className: "font-playfair text-5xl font-light",
                children: "Accessories",
              }),
              i.jsx("p", {
                className: "text-sm opacity-70 mt-3 tracking-widest",
                children: "Complete Your Look",
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wider",
        children: [
          i.jsx($, { to: "/", className: "hover:text-gold", children: "Home" }),
          i.jsx("span", { className: "mx-2", children: "/" }),
          i.jsx("span", {
            className: "text-gray-600",
            children: "Accessories",
          }),
        ],
      }),
      i.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 py-8",
        children: [
          i.jsx("div", {
            className:
              "flex gap-3 flex-wrap mb-10 border-b border-gray-100 pb-6",
            children: Ly.map((o) =>
              i.jsx(
                "button",
                {
                  onClick: () => t(o),
                  className: `text-[10px] tracking-[0.15em] uppercase px-5 py-2 border transition ${e === o ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600 hover:border-gold hover:text-gold"}`,
                  children: o,
                },
                o,
              ),
            ),
          }),
          i.jsxs("p", {
            className: "text-sm text-gray-500 mb-8",
            children: [a.length, " items"],
          }),
          s
            ? i.jsx("p", {
                className: "text-gray-500",
                children: "Loading accessories...",
              })
            : a.length === 0
              ? i.jsx("p", {
                  className: "text-gray-400",
                  children: "No items found for this category.",
                })
              : i.jsx("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                  children: a.map((o) => i.jsx(Qn, { product: o }, o.id)),
                }),
          i.jsxs("div", {
            className: "mt-20 grid grid-cols-1 md:grid-cols-2 gap-0",
            children: [
              i.jsxs("div", {
                className:
                  "bg-gray-900 text-white p-12 md:p-16 flex flex-col justify-center",
                children: [
                  i.jsx("p", {
                    className:
                      "text-xs tracking-[0.4em] uppercase text-gold mb-4",
                    children: "New Season",
                  }),
                  i.jsxs("h2", {
                    className: "font-playfair text-3xl font-light mb-4",
                    children: [
                      "Complete Your ",
                      i.jsx("em", { children: "Style" }),
                    ],
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-400 leading-relaxed mb-8",
                    children:
                      "From sunglasses to silk scarves, our accessories collection is designed to elevate every outfit with luxury.",
                  }),
                  i.jsx("button", {
                    className:
                      "self-start border border-gold text-gold text-xs uppercase px-8 py-3.5 hover:bg-gold hover:text-black transition",
                    children: "Shop All",
                  }),
                ],
              }),
              i.jsx("div", {
                className: "overflow-hidden aspect-[4/3] md:aspect-auto",
                children: i.jsx("img", {
                  src: Q.model[3],
                  alt: "Accessories",
                  className:
                    "w-full h-full object-cover hover:scale-105 transition",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const zy = [
    "All Gifts",
    "Anniversary",
    "Birthday",
    "Wedding",
    "Mother's Day",
    "Holiday",
    "Just Because",
  ],
  Iy = [
    "Under Rs. 100,000",
    "Rs. 100,000–250,000",
    "Rs. 250,000–500,000",
    "Over Rs. 500,000",
  ];
function Dy() {
  const [e, t] = w.useState("All Gifts"),
    [n, r] = w.useState([]),
    [s, l] = w.useState(!0);
  return (
    w.useEffect(() => {
      (async () => {
        try {
          l(!0);
          const c = await (
            await fetch(
              "https://backend-jewelry-production.up.railway.app/api/products",
            )
          ).json();
          r(c);
        } catch (o) {
          console.error("Error fetching gifts:", o);
        } finally {
          l(!1);
        }
      })();
    }, []),
    i.jsxs("div", {
      className: "min-h-screen bg-white pt-24",
      children: [
        i.jsxs("div", {
          className: "relative h-72 md:h-96 overflow-hidden",
          children: [
            i.jsx("img", {
              src: Q.model[4],
              alt: "Gifts",
              className: "w-full h-full object-cover",
            }),
            i.jsxs("div", {
              className:
                "absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white",
              children: [
                i.jsx("p", {
                  className:
                    "text-xs tracking-[0.4em] uppercase mb-2 opacity-70",
                  children: "For Someone Special",
                }),
                i.jsx("h1", {
                  className: "font-playfair text-5xl font-light",
                  children: "Gifts",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wider",
          children: [
            i.jsx($, {
              to: "/",
              className: "hover:text-gold",
              children: "Home",
            }),
            i.jsx("span", { className: "mx-2", children: "/" }),
            i.jsx("span", { className: "text-gray-600", children: "Gifts" }),
          ],
        }),
        i.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 py-10",
          children: [
            i.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-14",
              children: [
                i.jsxs("h2", {
                  className: "font-playfair text-3xl font-light mb-4",
                  children: [
                    "The Art of ",
                    i.jsx("em", { children: "Gifting" }),
                  ],
                }),
                i.jsx("p", {
                  className: "text-sm text-gray-600 leading-relaxed",
                  children:
                    "Every Lumière gift arrives in our signature packaging...",
                }),
              ],
            }),
            i.jsx("div", {
              className: "flex gap-3 flex-wrap justify-center mb-10",
              children: zy.map((a) =>
                i.jsx(
                  "button",
                  {
                    onClick: () => t(a),
                    className: `text-[10px] tracking-[0.15em] uppercase px-5 py-2 border transition ${e === a ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600 hover:border-gold hover:text-gold"}`,
                    children: a,
                  },
                  a,
                ),
              ),
            }),
            i.jsx("div", {
              className: "flex gap-3 flex-wrap justify-center mb-12",
              children: Iy.map((a) =>
                i.jsx(
                  "span",
                  {
                    className:
                      "text-[10px] tracking-wider text-gray-500 border border-gray-200 px-4 py-1.5 cursor-pointer hover:border-gold hover:text-gold transition",
                    children: a,
                  },
                  a,
                ),
              ),
            }),
            s
              ? i.jsx("p", {
                  className: "text-gray-500 text-center",
                  children: "Loading gifts...",
                })
              : n.length === 0
                ? i.jsx("p", {
                    className: "text-gray-400 text-center",
                    children: "No gifts found.",
                  })
                : i.jsx("div", {
                    className:
                      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                    children: n.map((a) => i.jsx(Qn, { product: a }, a.id)),
                  }),
            i.jsx("div", {
              className: "mt-20 bg-gray-50 p-12 md:p-20 text-center",
              children: i.jsxs("div", {
                className: "max-w-2xl mx-auto",
                children: [
                  i.jsx("p", {
                    className:
                      "text-xs tracking-[0.4em] uppercase text-gold mb-4",
                    children: "Signature Experience",
                  }),
                  i.jsx("h2", {
                    className: "font-playfair text-3xl font-light mb-6",
                    children: "The Iconic Blue Box",
                  }),
                  i.jsx("p", {
                    className: "text-sm text-gray-600 leading-relaxed mb-8",
                    children:
                      "Every Lumière purchase arrives beautifully packaged...",
                  }),
                  i.jsx($, {
                    to: "/jewelry",
                    className: "luxury-btn inline-block",
                    children: "Shop All Gifts",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Fy() {
  const [e, t] = w.useState([]),
    [n, r] = w.useState([]),
    [s, l] = w.useState([]),
    [a, o] = w.useState(!0),
    [c, u] = w.useState(null);
  return (
    w.useEffect(() => {
      (async () => {
        try {
          o(!0);
          const h = await fetch(
            "https://backend-jewelry-production.up.railway.app/api/brand-content",
          );
          if (!h.ok) throw new Error("Failed to fetch brand content");
          const m = await h.json();
          (t(m.stories || []), r(m.events || []), l(m.values || []));
        } catch (h) {
          u(h.message);
        } finally {
          o(!1);
        }
      })();
    }, []),
    i.jsxs("div", {
      className: "min-h-screen bg-white pt-24",
      children: [
        i.jsxs("section", {
          className: "relative h-screen overflow-hidden",
          children: [
            i.jsx("img", {
              src: Q.model[3],
              alt: "World of Lumière",
              className: "w-full h-full object-cover",
            }),
            i.jsx("div", {
              className:
                "absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6",
              children: i.jsxs("h1", {
                className: "font-playfair text-5xl md:text-7xl font-light",
                children: ["World of ", i.jsx("em", { children: "Lumière" })],
              }),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "text-center py-6",
          children: [
            a &&
              i.jsx("p", {
                className: "text-gray-500",
                children: "Loading brand content...",
              }),
            c && i.jsx("p", { className: "text-red-500", children: c }),
          ],
        }),
        i.jsxs("section", {
          className: "max-w-5xl mx-auto px-6 py-20 text-center",
          children: [
            i.jsxs("h2", {
              className: "font-playfair text-4xl font-light mb-8",
              children: [
                "A Legacy of ",
                i.jsx("em", { children: "Excellence" }),
              ],
            }),
            i.jsx("p", {
              className: "text-gray-600 leading-relaxed",
              children:
                "For over a century, Lumière & Co. has been synonymous with extraordinary beauty and craftsmanship.",
            }),
          ],
        }),
        i.jsx("section", {
          className: "bg-gray-50 py-20",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "text-center text-3xl font-light mb-12",
                children: "Our Stories",
              }),
              i.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: e.map((p, h) =>
                  i.jsxs(
                    "div",
                    {
                      className: "group",
                      children: [
                        i.jsx("div", {
                          className: "overflow-hidden aspect-video mb-5",
                          children: i.jsx("img", {
                            src: p.img,
                            alt: p.title,
                            className:
                              "w-full h-full object-cover group-hover:scale-110 transition",
                          }),
                        }),
                        i.jsx("h3", {
                          className: "text-xl font-light mb-2",
                          children: p.title,
                        }),
                        i.jsx("p", {
                          className: "text-sm text-gray-600 mb-3",
                          children: p.desc,
                        }),
                        i.jsxs($, {
                          to: p.link || "/",
                          className: "text-xs uppercase border-b",
                          children: ["Read More ", i.jsx(Yg, { size: 12 })],
                        }),
                      ],
                    },
                    h,
                  ),
                ),
              }),
            ],
          }),
        }),
        i.jsxs("section", {
          className: "py-20 max-w-7xl mx-auto px-6",
          children: [
            i.jsx("h2", {
              className: "text-center text-3xl font-light mb-12",
              children: "Upcoming Events",
            }),
            i.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: n.map((p, h) =>
                i.jsxs(
                  "div",
                  {
                    className: "border group",
                    children: [
                      i.jsx("div", {
                        className: "overflow-hidden aspect-[4/3]",
                        children: i.jsx("img", {
                          src: p.img,
                          className:
                            "w-full h-full object-cover group-hover:scale-110 transition",
                        }),
                      }),
                      i.jsxs("div", {
                        className: "p-6",
                        children: [
                          i.jsx("p", {
                            className: "text-xs text-gold",
                            children: p.date,
                          }),
                          i.jsx("h3", {
                            className: "text-lg font-light",
                            children: p.title,
                          }),
                          i.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: p.location,
                          }),
                        ],
                      }),
                    ],
                  },
                  h,
                ),
              ),
            }),
          ],
        }),
        i.jsx("section", {
          className: "bg-gray-900 text-white py-20",
          children: i.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              i.jsx("h2", {
                className: "text-center text-3xl font-light mb-14",
                children: "Our Values",
              }),
              i.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
                children: s.map((p, h) =>
                  i.jsxs(
                    "div",
                    {
                      children: [
                        i.jsx("h3", {
                          className: "text-xl font-light mb-4",
                          children: p.title,
                        }),
                        i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: p.desc,
                        }),
                      ],
                    },
                    h,
                  ),
                ),
              }),
            ],
          }),
        }),
        !a &&
          e.length === 0 &&
          i.jsx("p", {
            className: "text-center text-gray-400 py-10",
            children: "No brand content found",
          }),
        i.jsxs("div", {
          className: "text-center py-8 text-xs text-gray-400",
          children: [
            i.jsx($, { to: "/", children: "Home" }),
            " / World of Lumière",
          ],
        }),
      ],
    })
  );
}
function My({ product: e, onClose: t }) {
  const n = _e();
  return i.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-4",
    children: [
      i.jsx("div", {
        className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
        onClick: t,
      }),
      i.jsxs("div", {
        className:
          "relative bg-white w-full max-w-md p-8 shadow-2xl animate-[fadeInUp_0.3s_ease-out]",
        children: [
          i.jsx("button", {
            onClick: t,
            className: "absolute top-4 right-4 text-gray-400 hover:text-black",
            children: i.jsx(Uf, { size: 20 }),
          }),
          i.jsx("div", {
            className: "flex justify-center mb-4",
            children: i.jsx(Df, { size: 48, className: "text-green-500" }),
          }),
          i.jsx("h2", {
            className: "text-center font-playfair text-2xl font-light mb-1",
            children: "Added to Cart",
          }),
          i.jsxs("p", {
            className: "text-center text-sm text-gray-500 mb-6",
            children: [
              e == null ? void 0 : e.name,
              " has been added to your cart successfully.",
            ],
          }),
          (e == null ? void 0 : e.img_url) &&
            i.jsxs("div", {
              className: "flex gap-4 items-center bg-gray-50 p-3 mb-6",
              children: [
                i.jsx("img", {
                  src: e.img_url,
                  alt: e.name,
                  className: "w-16 h-16 object-cover",
                }),
                i.jsxs("div", {
                  children: [
                    i.jsx("p", {
                      className: "text-sm font-medium",
                      children: e.name,
                    }),
                    i.jsx("p", {
                      className: "text-xs text-gray-500",
                      children: e.category,
                    }),
                    i.jsxs("p", {
                      className: "text-sm text-gold",
                      children: ["$", e.price],
                    }),
                  ],
                }),
              ],
            }),
          i.jsxs("div", {
            className: "flex gap-3",
            children: [
              i.jsx("button", {
                onClick: t,
                className:
                  "flex-1 border border-black text-black text-xs uppercase py-3 hover:bg-black hover:text-white transition",
                children: "Continue Shopping",
              }),
              i.jsx("button", {
                onClick: () => {
                  (t(), n("/cart"));
                },
                className:
                  "flex-1 bg-black text-white text-xs uppercase py-3 hover:bg-gray-800 transition",
                children: "View Cart",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const ou = "https://backend-jewelry-production.up.railway.app";
function js({ title: e, children: t }) {
  const [n, r] = w.useState(!1);
  return i.jsxs("div", {
    className: "border-b border-gray-200 py-4",
    children: [
      i.jsxs("button", {
        className: "flex justify-between items-center w-full text-left",
        onClick: () => r(!n),
        children: [
          i.jsx("span", {
            className: "text-sm tracking-wider uppercase font-medium",
            children: e,
          }),
          n ? i.jsx(uo, { size: 16 }) : i.jsx(Rl, { size: 16 }),
        ],
      }),
      n &&
        i.jsx("div", {
          className: "mt-3 text-sm text-gray-600 leading-relaxed",
          children: t,
        }),
    ],
  });
}
function Uy() {
  var L, V, z;
  const { id: e } = Tf(),
    t = _e(),
    { addToCart: n } = Yr(),
    [r, s] = w.useState(null),
    [l, a] = w.useState([]),
    [o, c] = w.useState(0),
    [u, p] = w.useState(!1),
    [h, m] = w.useState(!0),
    [x, N] = w.useState(!1),
    [j, v] = w.useState(!1),
    [d, f] = w.useState("");
  w.useEffect(() => {
    (s(null),
      a([]),
      c(0),
      p(!1),
      f(""),
      v(!1),
      m(!0),
      window.scrollTo(0, 0),
      (async () => {
        try {
          const ae = await (await fetch(`${ou}/api/products/${e}`)).json(),
            W = Array.isArray(ae) ? ae[0] : ae;
          if (!W) {
            m(!1);
            return;
          }
          if ((s(W), W != null && W.category)) {
            const Re = await (
              await fetch(
                `${ou}/api/products?category=${encodeURIComponent(W.category)}`,
              )
            ).json();
            a(
              Array.isArray(Re)
                ? Re.filter((Ve) => String(Ve.id) !== String(e)).slice(0, 4)
                : [],
            );
          }
        } catch (M) {
          console.error(M);
        } finally {
          m(!1);
        }
      })());
  }, [e]);
  const g = async () => {
    if (!r) return;
    f("");
    const I = JSON.parse(localStorage.getItem("user") || "{}");
    if (!(I != null && I.id)) {
      t("/login");
      return;
    }
    N(!0);
    const M = await n(r.id, 1);
    (N(!1),
      M != null && M.success
        ? v(!0)
        : f(
            (M == null ? void 0 : M.error) ||
              "Failed to add to cart. Please try again.",
          ));
  };
  if (h)
    return i.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: i.jsx("p", {
        className: "text-sm text-gray-400 uppercase tracking-widest",
        children: "Loading...",
      }),
    });
  if (!r)
    return i.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: i.jsx("p", {
        className: "text-sm text-gray-400",
        children: "Product not found",
      }),
    });
  const S = [r.img_url, r.model_img_url, r.image2, r.image3, r.image4].filter(
      Boolean,
    ),
    k =
      ((L = r.description) == null
        ? void 0
        : L.split(
            `
`,
          ).filter(Boolean)) || [],
    b =
      ((V = r.specifications) == null
        ? void 0
        : V.split(
            `
`,
          ).filter(Boolean)) || [],
    P =
      ((z = r.specialization) == null
        ? void 0
        : z
            .split(
              `
`,
            )
            .filter(Boolean)) || [];
  return i.jsxs("div", {
    className: "min-h-screen bg-white pt-28",
    children: [
      j && i.jsx(My, { product: r, onClose: () => v(!1) }),
      i.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wider",
        children: [
          i.jsx($, { to: "/", className: "hover:text-gold", children: "Home" }),
          i.jsx("span", { className: "mx-2", children: "/" }),
          i.jsx($, {
            to: "/jewelry",
            className: "hover:text-gold",
            children: "Products",
          }),
          i.jsx("span", { className: "mx-2", children: "/" }),
          i.jsx("span", { className: "text-gray-600", children: r.name }),
        ],
      }),
      i.jsx("div", {
        className: "max-w-7xl mx-auto px-6 py-8",
        children: i.jsxs("div", {
          className: "flex flex-col lg:flex-row gap-12",
          children: [
            i.jsxs("div", {
              className: "w-full lg:w-1/2 space-y-4",
              children: [
                i.jsx("div", {
                  className: "aspect-square overflow-hidden bg-gray-50",
                  children: i.jsx("img", {
                    src: S[o],
                    alt: r.name,
                    className:
                      "w-full h-full object-cover transition-opacity duration-300",
                  }),
                }),
                i.jsx("div", {
                  className: "grid grid-cols-4 gap-2",
                  children: S.map((I, M) =>
                    i.jsx(
                      "button",
                      {
                        onClick: () => c(M),
                        className: `aspect-square border-2 transition ${o === M ? "border-gold" : "border-transparent hover:border-gray-300"}`,
                        children: i.jsx("img", {
                          src: I,
                          className: "w-full h-full object-cover",
                          alt: "",
                        }),
                      },
                      M,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "w-full lg:w-1/2",
              children: [
                i.jsx("p", {
                  className:
                    "text-xs uppercase text-gray-400 tracking-widest mb-1",
                  children: r.category,
                }),
                i.jsx("h1", {
                  className: "font-playfair text-3xl font-light mb-3",
                  children: r.name,
                }),
                i.jsx("div", {
                  className: "flex gap-1 mb-4",
                  children: [...Array(5)].map((I, M) =>
                    i.jsx(
                      dx,
                      { size: 14, className: "text-gold fill-gold" },
                      M,
                    ),
                  ),
                }),
                i.jsxs("p", {
                  className: "text-2xl text-gold mb-4",
                  children: ["PKR ", Number(r.price).toLocaleString()],
                }),
                i.jsxs("p", {
                  className: "text-sm text-gray-500 mb-4",
                  children: [
                    "Material:",
                    " ",
                    i.jsx("span", {
                      className: "text-gray-700 font-medium",
                      children: r.material,
                    }),
                  ],
                }),
                k.length > 0 &&
                  i.jsx("div", {
                    className: "mb-6 space-y-1",
                    children: k.map((I, M) =>
                      i.jsx(
                        "p",
                        {
                          className: "text-sm text-gray-500 leading-relaxed",
                          children: I,
                        },
                        M,
                      ),
                    ),
                  }),
                i.jsxs("div", {
                  className: "space-y-3 mb-8",
                  children: [
                    i.jsxs("button", {
                      onClick: g,
                      disabled: x,
                      className:
                        "w-full bg-black text-white py-3 flex justify-center items-center gap-2 hover:bg-gray-800 transition disabled:opacity-60",
                      children: [
                        i.jsx(po, { size: 16 }),
                        x ? "Adding..." : "Add to Cart",
                      ],
                    }),
                    d &&
                      i.jsx("p", {
                        className: "text-red-500 text-xs text-center",
                        children: d,
                      }),
                    i.jsxs("button", {
                      onClick: () => p(!u),
                      className:
                        "w-full border py-3 flex justify-center items-center gap-2 hover:border-gray-400 transition",
                      children: [
                        i.jsx(fo, {
                          size: 16,
                          className: u ? "text-red-500 fill-red-500" : "",
                        }),
                        "Wishlist",
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  children: [
                    i.jsx(js, {
                      title: "Specifications",
                      children:
                        b.length > 0
                          ? i.jsx("div", {
                              className: "space-y-1",
                              children: b.map((I, M) => {
                                const [ae, ...W] = I.split(":");
                                return W.length > 0
                                  ? i.jsxs(
                                      "div",
                                      {
                                        className: "flex gap-2",
                                        children: [
                                          i.jsxs("span", {
                                            className:
                                              "text-gray-400 min-w-[140px]",
                                            children: [ae, ":"],
                                          }),
                                          i.jsx("span", {
                                            className: "text-gray-700",
                                            children: W.join(":").trim(),
                                          }),
                                        ],
                                      },
                                      M,
                                    )
                                  : i.jsx("p", { children: I }, M);
                              }),
                            })
                          : i.jsxs("p", {
                              children: [
                                "Material: ",
                                r.material,
                                i.jsx("br", {}),
                                "Handmade luxury product",
                              ],
                            }),
                    }),
                    P.length > 0 &&
                      i.jsx(js, {
                        title: "Details",
                        children: i.jsx("div", {
                          className: "space-y-1",
                          children: P.map((I, M) => {
                            const [ae, ...W] = I.split(":");
                            return W.length > 0
                              ? i.jsxs(
                                  "div",
                                  {
                                    className: "flex gap-2",
                                    children: [
                                      i.jsxs("span", {
                                        className:
                                          "text-gray-400 min-w-[100px]",
                                        children: [ae, ":"],
                                      }),
                                      i.jsx("span", {
                                        className: "text-gray-700",
                                        children: W.join(":").trim(),
                                      }),
                                    ],
                                  },
                                  M,
                                )
                              : i.jsx("p", { children: I }, M);
                          }),
                        }),
                      }),
                    i.jsx(js, {
                      title: "Shipping",
                      children:
                        r.shipping || "Free shipping worldwide on all orders.",
                    }),
                    i.jsx(js, {
                      title: "Returns",
                      children: r.return_policy || "30-day return policy",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      l.length > 0 &&
        i.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 py-16 border-t",
          children: [
            i.jsx("h2", {
              className:
                "text-center text-xl mb-8 font-light tracking-wider uppercase",
              children: "You May Also Like",
            }),
            i.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6",
              children: l.map((I) =>
                i.jsxs(
                  "div",
                  {
                    onClick: () => {
                      (window.scrollTo(0, 0), t(`/product/${I.id}`));
                    },
                    className: "cursor-pointer group",
                    children: [
                      i.jsx("div", {
                        className: "aspect-square overflow-hidden bg-gray-50",
                        children: i.jsx("img", {
                          src: I.img_url,
                          alt: I.name,
                          className:
                            "w-full h-full object-cover group-hover:scale-105 transition duration-300",
                        }),
                      }),
                      i.jsx("p", {
                        className: "text-sm mt-2 font-light",
                        children: I.name,
                      }),
                      i.jsxs("p", {
                        className: "text-gold text-sm",
                        children: ["PKR ", Number(I.price).toLocaleString()],
                      }),
                    ],
                  },
                  I.id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function By() {
  const {
      cartItems: e,
      cartLoading: t,
      fetchCart: n,
      removeFromCart: r,
      updateQuantity: s,
    } = Yr(),
    l = _e(),
    [a, o] = w.useState(null),
    [c, u] = w.useState(null),
    [p, h] = w.useState(null),
    [m, x] = w.useState(!1);
  w.useEffect(() => {
    const f = JSON.parse(localStorage.getItem("user") || "{}"),
      g = (f == null ? void 0 : f.id) || null;
    g ? n(g).then(() => x(!0)) : x(!0);
  }, []);
  const N = e.reduce((f, g) => f + Number(g.price) * g.quantity, 0),
    j = () => {
      localStorage.getItem("token")
        ? l("/checkout")
        : (sessionStorage.setItem("redirectAfterLogin", "/checkout"),
          l("/login"));
    },
    v = async (f) => {
      (o(f), h(null));
      const g = await r(f);
      (g.success ||
        (h("Failed to remove item. Please try again."),
        console.error("Remove failed:", g.error)),
        o(null));
    },
    d = async (f, g, S) => {
      (u(f), h(null));
      const k = await s(f, g + S);
      (k.success ||
        (h("Failed to update quantity. Please try again."),
        console.error("Update failed:", k.error)),
        u(null));
    };
  return !m || t
    ? i.jsx("div", {
        className: "min-h-screen pt-32 flex items-center justify-center",
        children: i.jsx(vt, {
          size: 32,
          className: "animate-spin text-gray-400",
        }),
      })
    : e.length === 0
      ? i.jsxs("div", {
          className:
            "min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6",
          children: [
            i.jsx(po, { size: 48, className: "text-gray-300 mb-4" }),
            i.jsx("h2", {
              className: "font-playfair text-2xl font-light mb-2",
              children: "Your cart is empty",
            }),
            i.jsx("p", {
              className: "text-sm text-gray-500 mb-8",
              children: "Discover our collections and add something beautiful.",
            }),
            i.jsx($, {
              to: "/jewelry",
              className:
                "bg-black text-white text-xs uppercase px-8 py-3 hover:bg-gray-800 transition",
              children: "Continue Shopping",
            }),
          ],
        })
      : i.jsx("div", {
          className: "min-h-screen bg-white pt-28",
          children: i.jsxs("div", {
            className: "max-w-5xl mx-auto px-6 py-12",
            children: [
              i.jsxs("h1", {
                className:
                  "font-playfair text-3xl font-light mb-10 text-center",
                children: [
                  "Shopping Cart",
                  i.jsxs("span", {
                    className:
                      "ml-3 text-sm text-gray-400 font-sans font-normal",
                    children: [
                      "(",
                      e.length,
                      " ",
                      e.length === 1 ? "item" : "items",
                      ")",
                    ],
                  }),
                ],
              }),
              p &&
                i.jsx("div", {
                  className:
                    "mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm text-center rounded",
                  children: p,
                }),
              i.jsxs("div", {
                className: "grid lg:grid-cols-3 gap-10",
                children: [
                  i.jsx("div", {
                    className: "lg:col-span-2 space-y-6",
                    children: e.map((f) => {
                      const g = f.cartId || f.cart_id;
                      return i.jsxs(
                        "div",
                        {
                          className: `flex gap-5 border-b border-gray-100 pb-6 transition-opacity duration-300 ${a === g ? "opacity-40 pointer-events-none" : ""}`,
                          children: [
                            i.jsx("img", {
                              src: f.img_url,
                              alt: f.name,
                              className:
                                "w-24 h-24 object-cover bg-gray-50 flex-shrink-0",
                            }),
                            i.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                i.jsx("p", {
                                  className:
                                    "text-xs uppercase tracking-widest text-gray-400 mb-1",
                                  children: f.category,
                                }),
                                i.jsx("p", {
                                  className: "font-light text-base mb-1",
                                  children: f.name,
                                }),
                                i.jsxs("p", {
                                  className: "text-gold text-sm mb-3",
                                  children: ["$", Number(f.price).toFixed(2)],
                                }),
                                i.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    i.jsx("button", {
                                      onClick: () => d(g, f.quantity, -1),
                                      disabled: c === g || a === g,
                                      className:
                                        "w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-black transition disabled:opacity-40",
                                      children: i.jsx(ax, { size: 12 }),
                                    }),
                                    i.jsx("span", {
                                      className: "w-8 text-center text-sm",
                                      children:
                                        c === g
                                          ? i.jsx(vt, {
                                              size: 14,
                                              className: "animate-spin mx-auto",
                                            })
                                          : f.quantity,
                                    }),
                                    i.jsx("button", {
                                      onClick: () => d(g, f.quantity, 1),
                                      disabled: c === g || a === g,
                                      className:
                                        "w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-black transition disabled:opacity-40",
                                      children: i.jsx(cx, { size: 12 }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "flex flex-col items-end justify-between",
                              children: [
                                i.jsxs("p", {
                                  className: "font-light text-sm",
                                  children: [
                                    "$",
                                    (Number(f.price) * f.quantity).toFixed(2),
                                  ],
                                }),
                                i.jsxs("button", {
                                  onClick: () => v(g),
                                  disabled: a === g || c === g,
                                  className:
                                    "flex items-center gap-1 text-xs text-red-500 hover:text-red-700 transition disabled:opacity-40 mt-4",
                                  children: [
                                    a === g
                                      ? i.jsx(vt, {
                                          size: 13,
                                          className: "animate-spin",
                                        })
                                      : i.jsx(fx, { size: 13 }),
                                    "Remove",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        g,
                      );
                    }),
                  }),
                  i.jsxs("div", {
                    className: "bg-gray-50 p-6 h-fit sticky top-32",
                    children: [
                      i.jsx("h2", {
                        className:
                          "font-playfair text-lg font-light mb-6 border-b pb-4",
                        children: "Order Summary",
                      }),
                      i.jsxs("div", {
                        className: "space-y-3 text-sm mb-6",
                        children: [
                          e.map((f) => {
                            const g = f.cartId || f.cart_id;
                            return i.jsxs(
                              "div",
                              {
                                className: "flex justify-between text-gray-500",
                                children: [
                                  i.jsxs("span", {
                                    className: "truncate mr-2",
                                    children: [f.name, " × ", f.quantity],
                                  }),
                                  i.jsxs("span", {
                                    className: "flex-shrink-0",
                                    children: [
                                      "$",
                                      (Number(f.price) * f.quantity).toFixed(2),
                                    ],
                                  }),
                                ],
                              },
                              g,
                            );
                          }),
                          i.jsxs("div", {
                            className:
                              "flex justify-between border-t pt-3 mt-3",
                            children: [
                              i.jsx("span", {
                                className: "text-gray-500",
                                children: "Subtotal",
                              }),
                              i.jsxs("span", { children: ["$", N.toFixed(2)] }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              i.jsx("span", {
                                className: "text-gray-500",
                                children: "Shipping",
                              }),
                              i.jsx("span", {
                                className: "text-green-600",
                                children: "Free",
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className:
                              "flex justify-between font-medium border-t pt-3 mt-3 text-base",
                            children: [
                              i.jsx("span", { children: "Total" }),
                              i.jsxs("span", { children: ["$", N.toFixed(2)] }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: j,
                        className:
                          "w-full bg-black text-white text-xs uppercase py-3.5 hover:bg-gray-800 transition mb-3",
                        children: "Proceed to Checkout",
                      }),
                      i.jsx("button", {
                        onClick: () => l("/jewelry"),
                        className:
                          "w-full border border-black text-black text-xs uppercase py-3.5 hover:bg-black hover:text-white transition",
                        children: "Continue Shopping",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
}
function $y() {
  const e = _e(),
    [t, n] = w.useState({ email: "", password: "" }),
    [r, s] = w.useState(!1),
    [l, a] = w.useState(""),
    o = (u) => {
      (n({ ...t, [u.target.name]: u.target.value }), a(""));
    },
    c = async (u) => {
      var p, h;
      u.preventDefault();
      try {
        (s(!0), a(""));
        const m = await ne.post(
          "https://backend-jewelry-production.up.railway.app/api/auth/login",
          {
            email: t.email,
            password: t.password,
          },
        );
        (localStorage.setItem("token", m.data.token),
          localStorage.setItem("user", JSON.stringify(m.data.user)));
        const x = sessionStorage.getItem("redirectAfterLogin") || "/";
        (sessionStorage.removeItem("redirectAfterLogin"), e(x));
      } catch (m) {
        (console.error(m),
          a(
            ((h = (p = m.response) == null ? void 0 : p.data) == null
              ? void 0
              : h.message) || "Invalid email or password",
          ));
      } finally {
        s(!1);
      }
    };
  return i.jsx("div", {
    className:
      "min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4",
    children: i.jsxs("div", {
      className:
        "w-full max-w-md rounded-3xl bg-white border border-gray-200 p-10 shadow-lg",
      children: [
        i.jsxs("div", {
          className: "text-center mb-10",
          children: [
            i.jsx("h1", {
              className: "text-5xl tracking-[8px] text-[#d6b45a] font-serif",
              children: "LUMIERE",
            }),
            i.jsx("p", {
              className: "text-xs tracking-[4px] text-gray-500 mt-3",
              children: "BEAUTY RETAIL SUITE",
            }),
          ],
        }),
        l &&
          i.jsx("div", {
            className:
              "mb-5 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm text-center rounded-xl",
            children: l,
          }),
        i.jsxs("form", {
          onSubmit: c,
          className: "space-y-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className:
                    "block text-xs uppercase tracking-[2px] text-gray-600 mb-2",
                  children: "Email Address",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx(lx, {
                      size: 18,
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                    }),
                    i.jsx("input", {
                      type: "email",
                      name: "email",
                      value: t.email,
                      onChange: o,
                      placeholder: "you@example.com",
                      required: !0,
                      className:
                        "w-full pl-12 pr-4 py-4 rounded-xl bg-gray-100 border border-gray-300 text-black focus:outline-none focus:border-[#d6b45a]",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              children: [
                i.jsx("label", {
                  className:
                    "block text-xs uppercase tracking-[2px] text-gray-600 mb-2",
                  children: "Password",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx(Ff, {
                      size: 18,
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                    }),
                    i.jsx("input", {
                      type: "password",
                      name: "password",
                      value: t.password,
                      onChange: o,
                      placeholder: "••••••••",
                      required: !0,
                      className:
                        "w-full pl-12 pr-4 py-4 rounded-xl bg-gray-100 border border-gray-300 text-black focus:outline-none focus:border-[#d6b45a]",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("button", {
              type: "submit",
              disabled: r,
              className:
                "w-full py-4 rounded-xl bg-[#d6b45a] text-black font-semibold hover:brightness-110 transition disabled:opacity-60",
              children: r ? "Signing In..." : "Sign In",
            }),
            i.jsx("div", {
              children: i.jsx("button", {
                type: "button",
                onClick: () => {
                  window.location.href =
                    "https://backend-jewelry-production.up.railway.app/api/auth/google";
                },
                className:
                  "w-full py-4 rounded-xl border border-gray-300 bg-white text-black font-medium hover:bg-gray-50 transition",
                children: "Continue with Google",
              }),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "mt-8 text-center",
          children: [
            i.jsx("p", {
              className: "text-gray-500 text-sm",
              children: "JWT secured session",
            }),
            i.jsxs("p", {
              className: "mt-5 text-gray-700",
              children: [
                "Don't have an account?",
                i.jsx($, {
                  to: "/register",
                  className: "ml-2 text-[#d6b45a] font-medium",
                  children: "Sign Up",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Hy() {
  const [e] = Jg(),
    t = _e();
  return (
    w.useEffect(() => {
      const n = e.get("token");
      n
        ? (localStorage.setItem("token", n),
          ne
            .get(
              "https://backend-jewelry-production.up.railway.app/api/auth/profile",
              {
                headers: { Authorization: `Bearer ${n}` },
              },
            )
            .then((r) => {
              localStorage.setItem("user", JSON.stringify(r.data.user));
            })
            .catch(() => {})
            .finally(() => {
              const r = sessionStorage.getItem("redirectAfterLogin") || "/";
              (sessionStorage.removeItem("redirectAfterLogin"), t(r));
            }))
        : t("/login");
    }, [e, t]),
    i.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: i.jsx("p", {
        className:
          "text-gray-400 text-sm tracking-widest uppercase animate-pulse",
        children: "Signing you in…",
      }),
    })
  );
}
const cu = 500,
  Wy = 15,
  Vy = 0.08;
function qy() {
  const { cartItems: e, cartLoading: t, fetchCart: n } = Yr(),
    r = _e(),
    [s, l] = w.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
    }),
    [a, o] = w.useState({}),
    [c, u] = w.useState(!1);
  (w.useEffect(() => {
    const d = localStorage.getItem("user");
    if (d)
      try {
        const f = JSON.parse(d);
        l((g) => {
          var S, k;
          return {
            ...g,
            email: f.email || "",
            firstName:
              f.first_name ||
              ((S = f.name) == null ? void 0 : S.split(" ")[0]) ||
              "",
            lastName:
              f.last_name ||
              ((k = f.name) == null ? void 0 : k.split(" ")[1]) ||
              "",
          };
        });
      } catch {}
  }, []),
    w.useEffect(() => {
      if (!localStorage.getItem("token")) {
        (sessionStorage.setItem("redirectAfterLogin", "/checkout"),
          r("/login"));
        return;
      }
      const f = JSON.parse(localStorage.getItem("user") || "{}");
      f != null && f.id && n(f.id);
    }, []));
  const p = e.reduce((d, f) => d + Number(f.price) * f.quantity, 0),
    h = p >= cu ? 0 : Wy,
    m = p * Vy,
    x = p + h + m,
    N = () => {
      const d = {};
      return (
        s.firstName.trim() || (d.firstName = "First name is required."),
        s.lastName.trim() || (d.lastName = "Last name is required."),
        s.email.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email) ||
            (d.email = "Enter a valid email address.")
          : (d.email = "Email is required."),
        s.phone.trim()
          ? /^\+?[0-9\s\-().]{7,15}$/.test(s.phone) ||
            (d.phone = "Enter a valid phone number.")
          : (d.phone = "Phone number is required."),
        s.country.trim() || (d.country = "Country is required."),
        s.city.trim() || (d.city = "City is required."),
        s.address.trim() || (d.address = "Address is required."),
        s.postalCode.trim() || (d.postalCode = "Postal code is required."),
        d
      );
    },
    j = (d) => {
      (l({ ...s, [d.target.name]: d.target.value }),
        a[d.target.name] && o({ ...a, [d.target.name]: "" }));
    },
    v = () => {
      var f;
      const d = N();
      if (Object.keys(d).length > 0) {
        o(d);
        const g = Object.keys(d)[0];
        (f = document.getElementById(g)) == null ||
          f.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      (u(!0),
        sessionStorage.setItem(
          "shippingInfo",
          JSON.stringify({ ...s, subtotal: p, shipping: h, tax: m, grand: x }),
        ),
        r("/payment"));
    };
  return t
    ? i.jsx("div", {
        className: "min-h-screen pt-32 flex items-center justify-center",
        children: i.jsx(vt, {
          size: 32,
          className: "animate-spin text-gray-400",
        }),
      })
    : i.jsx("div", {
        className: "min-h-screen bg-white pt-28 pb-20",
        children: i.jsxs("div", {
          className: "max-w-6xl mx-auto px-6",
          children: [
            i.jsxs("div", {
              className:
                "flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-10",
              children: [
                i.jsx("span", {
                  onClick: () => r("/cart"),
                  className: "cursor-pointer hover:text-black transition",
                  children: "Cart",
                }),
                i.jsx(Hr, { size: 12 }),
                i.jsx("span", {
                  className: "text-black",
                  children: "Checkout",
                }),
                i.jsx(Hr, { size: 12 }),
                i.jsx("span", { children: "Payment" }),
              ],
            }),
            i.jsx("h1", {
              className: "font-playfair text-3xl font-light mb-10 text-center",
              children: "Checkout",
            }),
            i.jsxs("div", {
              className: "grid lg:grid-cols-5 gap-12",
              children: [
                i.jsxs("div", {
                  className: "lg:col-span-3 space-y-10",
                  children: [
                    i.jsxs("section", {
                      children: [
                        i.jsx("h2", {
                          className:
                            "font-playfair text-xl font-light mb-6 pb-3 border-b border-gray-200",
                          children: "Customer Information",
                        }),
                        i.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            i.jsx(bt, {
                              id: "firstName",
                              label: "First Name",
                              name: "firstName",
                              value: s.firstName,
                              onChange: j,
                              error: a.firstName,
                              placeholder: "Jane",
                            }),
                            i.jsx(bt, {
                              id: "lastName",
                              label: "Last Name",
                              name: "lastName",
                              value: s.lastName,
                              onChange: j,
                              error: a.lastName,
                              placeholder: "Doe",
                            }),
                            i.jsx("div", {
                              className: "col-span-2",
                              children: i.jsx(bt, {
                                id: "email",
                                label: "Email Address",
                                name: "email",
                                type: "email",
                                value: s.email,
                                onChange: j,
                                error: a.email,
                                placeholder: "jane@example.com",
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-span-2",
                              children: i.jsx(bt, {
                                id: "phone",
                                label: "Phone Number",
                                name: "phone",
                                type: "tel",
                                value: s.phone,
                                onChange: j,
                                error: a.phone,
                                placeholder: "+1 234 567 8900",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("section", {
                      children: [
                        i.jsx("h2", {
                          className:
                            "font-playfair text-xl font-light mb-6 pb-3 border-b border-gray-200",
                          children: "Shipping Information",
                        }),
                        i.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            i.jsx(bt, {
                              id: "country",
                              label: "Country",
                              name: "country",
                              value: s.country,
                              onChange: j,
                              error: a.country,
                              placeholder: "United States",
                            }),
                            i.jsx(bt, {
                              id: "city",
                              label: "City",
                              name: "city",
                              value: s.city,
                              onChange: j,
                              error: a.city,
                              placeholder: "New York",
                            }),
                            i.jsx("div", {
                              className: "col-span-2",
                              children: i.jsx(bt, {
                                id: "address",
                                label: "Complete Address",
                                name: "address",
                                value: s.address,
                                onChange: j,
                                error: a.address,
                                placeholder: "123 Fifth Avenue, Apt 4B",
                              }),
                            }),
                            i.jsx("div", {
                              className: "col-span-2 sm:col-span-1",
                              children: i.jsx(bt, {
                                id: "postalCode",
                                label: "Postal Code",
                                name: "postalCode",
                                value: s.postalCode,
                                onChange: j,
                                error: a.postalCode,
                                placeholder: "10001",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "flex items-center gap-2 text-xs text-gray-400 pt-2",
                      children: [
                        i.jsx(Mf, { size: 14, className: "text-green-500" }),
                        "Your information is encrypted and secure.",
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "lg:col-span-2",
                  children: i.jsxs("div", {
                    className: "bg-gray-50 p-7 sticky top-32",
                    children: [
                      i.jsx("h2", {
                        className:
                          "font-playfair text-xl font-light mb-6 pb-3 border-b border-gray-200",
                        children: "Order Summary",
                      }),
                      i.jsx("div", {
                        className: "space-y-4 mb-6",
                        children: e.map((d) =>
                          i.jsxs(
                            "div",
                            {
                              className: "flex gap-3 items-start",
                              children: [
                                i.jsxs("div", {
                                  className: "relative flex-shrink-0",
                                  children: [
                                    i.jsx("img", {
                                      src: d.img_url,
                                      alt: d.name,
                                      className:
                                        "w-14 h-14 object-cover bg-white",
                                    }),
                                    i.jsx("span", {
                                      className:
                                        "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center",
                                      children: d.quantity,
                                    }),
                                  ],
                                }),
                                i.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    i.jsx("p", {
                                      className:
                                        "text-sm font-light leading-tight truncate",
                                      children: d.name,
                                    }),
                                    i.jsxs("p", {
                                      className: "text-xs text-gray-400 mt-0.5",
                                      children: [
                                        "$",
                                        Number(d.price).toFixed(2),
                                        " each",
                                      ],
                                    }),
                                  ],
                                }),
                                i.jsxs("p", {
                                  className: "text-sm font-light flex-shrink-0",
                                  children: [
                                    "$",
                                    (Number(d.price) * d.quantity).toFixed(2),
                                  ],
                                }),
                              ],
                            },
                            d.cartId,
                          ),
                        ),
                      }),
                      i.jsxs("div", {
                        className:
                          "space-y-3 text-sm border-t border-gray-200 pt-4",
                        children: [
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Subtotal" }),
                              i.jsxs("span", { children: ["$", p.toFixed(2)] }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Shipping" }),
                              i.jsx("span", {
                                children:
                                  h === 0
                                    ? i.jsx("span", {
                                        className: "text-green-600",
                                        children: "Free",
                                      })
                                    : `$${h.toFixed(2)}`,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Tax (8%)" }),
                              i.jsxs("span", { children: ["$", m.toFixed(2)] }),
                            ],
                          }),
                          i.jsxs("div", {
                            className:
                              "flex justify-between font-medium text-base border-t border-gray-200 pt-3 mt-1",
                            children: [
                              i.jsx("span", { children: "Grand Total" }),
                              i.jsxs("span", { children: ["$", x.toFixed(2)] }),
                            ],
                          }),
                        ],
                      }),
                      h > 0 &&
                        i.jsxs("p", {
                          className: "text-xs text-gray-400 mt-3 text-center",
                          children: [
                            "Add $",
                            (cu - p).toFixed(2),
                            " more for free shipping.",
                          ],
                        }),
                      i.jsx("button", {
                        onClick: v,
                        disabled: c || e.length === 0,
                        className:
                          "w-full mt-7 bg-black text-white text-xs uppercase py-4 hover:bg-gray-800 transition disabled:opacity-50",
                        children: c
                          ? i.jsxs("span", {
                              className:
                                "flex items-center justify-center gap-2",
                              children: [
                                i.jsx(vt, {
                                  size: 14,
                                  className: "animate-spin",
                                }),
                                "Processing…",
                              ],
                            })
                          : "Continue to Payment",
                      }),
                      i.jsx("p", {
                        className: "text-center text-xs text-gray-400 mt-4",
                        children:
                          "By continuing you agree to our Terms & Privacy Policy.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
function bt({
  id: e,
  label: t,
  name: n,
  value: r,
  onChange: s,
  error: l,
  placeholder: a,
  type: o = "text",
}) {
  return i.jsxs("div", {
    id: e,
    children: [
      i.jsxs("label", {
        className:
          "block text-xs uppercase tracking-[1.5px] text-gray-500 mb-1.5",
        children: [
          t,
          " ",
          i.jsx("span", { className: "text-red-400", children: "*" }),
        ],
      }),
      i.jsx("input", {
        type: o,
        name: n,
        value: r,
        onChange: s,
        placeholder: a,
        className: `w-full px-4 py-3 text-sm border ${l ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"} focus:outline-none focus:border-black transition`,
      }),
      l && i.jsx("p", { className: "text-red-500 text-xs mt-1", children: l }),
    ],
  });
}
function Jy() {
  const { cartItems: e, clearCart: t, fetchCart: n, cartLoading: r } = Yr(),
    s = _e(),
    [l, a] = w.useState(null),
    [o, c] = w.useState("cod"),
    [u, p] = w.useState({
      cardNumber: "",
      cardHolder: "",
      expiry: "",
      cvv: "",
    }),
    [h, m] = w.useState({}),
    [x, N] = w.useState(!1),
    [j, v] = w.useState(""),
    [d, f] = w.useState(!1),
    [g, S] = w.useState(""),
    k = w.useRef([]);
  (w.useEffect(() => {
    k.current = e;
  }, [e]),
    w.useEffect(() => {
      const E = sessionStorage.getItem("shippingInfo");
      if (!E) {
        s("/checkout");
        return;
      }
      a(JSON.parse(E));
      let _ = {};
      try {
        _ = JSON.parse(localStorage.getItem("user") || "{}");
      } catch {}
      if (
        (console.log("[Payment] user from localStorage:", _),
        console.log("[Payment] user.id:", _ == null ? void 0 : _.id),
        !(_ != null && _.id))
      ) {
        s("/login");
        return;
      }
      fetch(
        `https://backend-jewelry-production.up.railway.app/api/cart/${_.id}`,
      )
        .then((R) => R.json())
        .then(
          (R) => (console.log("[Payment] raw cart API response:", R), n(_.id)),
        )
        .then(() => {
          (console.log("[Payment] cartItems after fetch:", k.current), f(!0));
        })
        .catch((R) => {
          (console.error("[Payment] cart fetch error:", R),
            S(
              "Could not load your cart. Please go back to cart and try again.",
            ),
            f(!0));
        });
    }, []));
  const b = k.current.reduce(
      (E, _) => E + Number(_.price) * Number(_.quantity),
      0,
    ),
    P = b > 0 ? (b >= 500 ? 0 : 15) : 0,
    L = b * 0.08,
    V = b + P + L,
    z = e.length > 0 ? b : Number((l == null ? void 0 : l.subtotal) ?? 0),
    I = e.length > 0 ? P : Number((l == null ? void 0 : l.shipping) ?? 0),
    M = e.length > 0 ? L : Number((l == null ? void 0 : l.tax) ?? 0),
    ae = e.length > 0 ? V : Number((l == null ? void 0 : l.grand) ?? 0),
    W = (E) => {
      let { name: _, value: R } = E.target;
      (_ === "cardNumber" &&
        ((R = R.replace(/\D/g, "").slice(0, 16)),
        (R = R.replace(/(.{4})/g, "$1 ").trim())),
        _ === "expiry" &&
          ((R = R.replace(/\D/g, "").slice(0, 4)),
          R.length >= 3 && (R = R.slice(0, 2) + "/" + R.slice(2))),
        _ === "cvv" && (R = R.replace(/\D/g, "").slice(0, 4)),
        p((A) => ({ ...A, [_]: R })),
        h[_] && m((A) => ({ ...A, [_]: "" })),
        v(""));
    },
    dt = () => {
      const E = {},
        _ = u.cardNumber.replace(/\s/g, "");
      return (
        (!_ || _.length < 13) && (E.cardNumber = "Enter a valid card number."),
        u.cardHolder.trim() || (E.cardHolder = "Cardholder name is required."),
        (!u.expiry || u.expiry.length < 5) &&
          (E.expiry = "Enter a valid expiry (MM/YY)."),
        (!u.cvv || u.cvv.length < 3) && (E.cvv = "Enter a valid CVV."),
        E
      );
    },
    Re = async () => {
      if ((v(""), r)) {
        v("Please wait, your cart is still loading…");
        return;
      }
      if (o === "card") {
        const _ = dt();
        if (Object.keys(_).length > 0) {
          m(_);
          return;
        }
      }
      const E = k.current;
      if (
        (console.log("[handlePlaceOrder] liveCart:", E), !E || E.length === 0)
      ) {
        const _ = JSON.parse(localStorage.getItem("user") || "{}");
        if (_ != null && _.id)
          try {
            const A = await (
              await fetch(
                `https://backend-jewelry-production.up.railway.app/api/cart/${_.id}`,
              )
            ).json();
            if (
              (console.log("[handlePlaceOrder] emergency re-fetch:", A),
              Array.isArray(A) && A.length > 0)
            ) {
              await Ve(A);
              return;
            }
          } catch {}
        v("Your cart is empty. Please go back to cart and add items.");
        return;
      }
      await Ve(E);
    },
    Ve = async (E) => {
      if (!l) {
        v("Shipping information missing. Please go back to checkout.");
        return;
      }
      const _ = localStorage.getItem("token");
      if (!_) {
        s("/login");
        return;
      }
      N(!0);
      try {
        const R = {
          cartItems: E.map((oe) => ({
            productId: oe.productId ?? oe.product_id ?? oe.id,
            name: oe.name,
            price: oe.price,
            quantity: oe.quantity,
            img_url: oe.img_url || "",
          })),
          shippingInfo: {
            firstName: l.firstName,
            lastName: l.lastName,
            email: l.email,
            phone: l.phone,
            country: l.country,
            city: l.city,
            address: l.address,
            postalCode: l.postalCode,
          },
          paymentMethod: o,
          paymentDetails:
            o === "card"
              ? {
                  cardNumber: u.cardNumber,
                  cardHolder: u.cardHolder,
                  expiry: u.expiry,
                  cvv: u.cvv,
                }
              : {},
        };
        console.log("[submitOrder] payload:", R);
        const A = await fetch(
            "https://backend-jewelry-production.up.railway.app/api/orders/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${_}`,
              },
              body: JSON.stringify(R),
            },
          ),
          B = await A.json();
        if ((console.log("[submitOrder] response:", B), !A.ok || !B.success)) {
          (v(B.message || "Something went wrong. Please try again."), N(!1));
          return;
        }
        (t(),
          sessionStorage.removeItem("shippingInfo"),
          s(`/order-confirmation/${B.orderNumber}`, {
            state: {
              orderId: B.orderId,
              orderNumber: B.orderNumber,
              grandTotal: B.grandTotal,
              paymentStatus: B.paymentStatus,
              paymentMethod: o,
              customerName: `${l.firstName} ${l.lastName}`,
              email: l.email,
            },
            replace: !0,
          }));
      } catch (R) {
        (console.error("Order error:", R),
          v("Network error. Please check your connection and try again."),
          N(!1));
      }
    };
  return !d || !l
    ? i.jsxs("div", {
        className:
          "min-h-screen flex flex-col items-center justify-center gap-4",
        children: [
          i.jsx(vt, { size: 32, className: "animate-spin text-gray-400" }),
          i.jsx("p", {
            className: "text-sm text-gray-400 uppercase tracking-widest",
            children: "Loading your order…",
          }),
        ],
      })
    : i.jsx("div", {
        className: "min-h-screen bg-white pt-28 pb-20",
        children: i.jsxs("div", {
          className: "max-w-6xl mx-auto px-6",
          children: [
            i.jsxs("div", {
              className:
                "flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-10",
              children: [
                i.jsx("span", {
                  onClick: () => s("/cart"),
                  className: "cursor-pointer hover:text-black transition",
                  children: "Cart",
                }),
                i.jsx(Hr, { size: 12 }),
                i.jsx("span", {
                  onClick: () => s("/checkout"),
                  className: "cursor-pointer hover:text-black transition",
                  children: "Checkout",
                }),
                i.jsx(Hr, { size: 12 }),
                i.jsx("span", { className: "text-black", children: "Payment" }),
              ],
            }),
            i.jsx("h1", {
              className: "font-playfair text-3xl font-light mb-10 text-center",
              children: "Payment",
            }),
            i.jsxs("div", {
              className: "grid lg:grid-cols-5 gap-12",
              children: [
                i.jsxs("div", {
                  className: "lg:col-span-3 space-y-6",
                  children: [
                    i.jsxs("div", {
                      className:
                        "border border-gray-200 px-5 py-4 flex items-start gap-4 bg-gray-50",
                      children: [
                        i.jsx(Hc, {
                          size: 16,
                          className: "text-gray-400 mt-0.5 flex-shrink-0",
                        }),
                        i.jsxs("div", {
                          className: "text-sm text-gray-600 leading-relaxed",
                          children: [
                            i.jsxs("span", {
                              className: "font-medium text-black",
                              children: [l.firstName, " ", l.lastName],
                            }),
                            " ",
                            "· ",
                            l.address,
                            ", ",
                            l.city,
                            ",",
                            " ",
                            l.country,
                            " ",
                            l.postalCode,
                            i.jsx("button", {
                              onClick: () => s("/checkout"),
                              className:
                                "ml-3 text-xs underline text-gray-400 hover:text-black transition",
                              children: "Edit",
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("h2", {
                          className:
                            "font-playfair text-xl font-light mb-5 pb-3 border-b border-gray-200",
                          children: "Select Payment Method",
                        }),
                        i.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            i.jsxs("label", {
                              className: `flex items-center gap-4 border px-5 py-4 cursor-pointer transition ${o === "cod" ? "border-black bg-black/[0.03]" : "border-gray-200 hover:border-gray-400"}`,
                              children: [
                                i.jsx("input", {
                                  type: "radio",
                                  name: "paymentMethod",
                                  value: "cod",
                                  checked: o === "cod",
                                  onChange: () => c("cod"),
                                  className: "accent-black",
                                }),
                                i.jsx(Hc, {
                                  size: 18,
                                  className: "text-gray-600 flex-shrink-0",
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("p", {
                                      className: "text-sm font-medium",
                                      children: "Cash on Delivery",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-gray-400 mt-0.5",
                                      children:
                                        "Pay in cash when your order arrives.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("label", {
                              className: `flex items-center gap-4 border px-5 py-4 cursor-pointer transition ${o === "card" ? "border-black bg-black/[0.03]" : "border-gray-200 hover:border-gray-400"}`,
                              children: [
                                i.jsx("input", {
                                  type: "radio",
                                  name: "paymentMethod",
                                  value: "card",
                                  checked: o === "card",
                                  onChange: () => c("card"),
                                  className: "accent-black",
                                }),
                                i.jsx(Zg, {
                                  size: 18,
                                  className: "text-gray-600 flex-shrink-0",
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("p", {
                                      className: "text-sm font-medium",
                                      children: "Credit / Debit Card",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-gray-400 mt-0.5",
                                      children:
                                        "Visa, Mastercard, American Express",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o === "card" &&
                      i.jsxs("div", {
                        className: "border border-gray-200 p-6 space-y-4",
                        children: [
                          i.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                              i.jsx(Ff, {
                                size: 13,
                                className: "text-gray-400",
                              }),
                              i.jsx("span", {
                                className:
                                  "text-xs text-gray-400 uppercase tracking-widest",
                                children: "Secure Card Entry",
                              }),
                            ],
                          }),
                          i.jsx(Ns, {
                            label: "Card Number",
                            name: "cardNumber",
                            value: u.cardNumber,
                            onChange: W,
                            error: h.cardNumber,
                            placeholder: "1234 5678 9012 3456",
                            inputMode: "numeric",
                          }),
                          i.jsx(Ns, {
                            label: "Cardholder Name",
                            name: "cardHolder",
                            value: u.cardHolder,
                            onChange: W,
                            error: h.cardHolder,
                            placeholder: "Jane Doe",
                          }),
                          i.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              i.jsx(Ns, {
                                label: "Expiry Date",
                                name: "expiry",
                                value: u.expiry,
                                onChange: W,
                                error: h.expiry,
                                placeholder: "MM/YY",
                                inputMode: "numeric",
                              }),
                              i.jsx(Ns, {
                                label: "CVV",
                                name: "cvv",
                                value: u.cvv,
                                onChange: W,
                                error: h.cvv,
                                placeholder: "123",
                                inputMode: "numeric",
                                type: "password",
                              }),
                            ],
                          }),
                        ],
                      }),
                    g &&
                      i.jsx("div", {
                        className:
                          "border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700",
                        children: g,
                      }),
                    j &&
                      i.jsx("div", {
                        className:
                          "border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600",
                        children: j,
                      }),
                    i.jsxs("div", {
                      className:
                        "flex items-center gap-2 text-xs text-gray-400 pt-2",
                      children: [
                        i.jsx(Mf, { size: 14, className: "text-green-500" }),
                        "All transactions are encrypted and secure.",
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "lg:col-span-2",
                  children: i.jsxs("div", {
                    className: "bg-gray-50 p-7 sticky top-32",
                    children: [
                      i.jsx("h2", {
                        className:
                          "font-playfair text-xl font-light mb-6 pb-3 border-b border-gray-200",
                        children: "Order Summary",
                      }),
                      i.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [
                          e.map((E) =>
                            i.jsxs(
                              "div",
                              {
                                className: "flex gap-3 items-start",
                                children: [
                                  i.jsxs("div", {
                                    className: "relative flex-shrink-0",
                                    children: [
                                      i.jsx("img", {
                                        src: E.img_url,
                                        alt: E.name,
                                        className:
                                          "w-14 h-14 object-cover bg-white",
                                      }),
                                      i.jsx("span", {
                                        className:
                                          "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center",
                                        children: E.quantity,
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      i.jsx("p", {
                                        className:
                                          "text-sm font-light leading-tight truncate",
                                        children: E.name,
                                      }),
                                      i.jsxs("p", {
                                        className:
                                          "text-xs text-gray-400 mt-0.5",
                                        children: [
                                          "$",
                                          Number(E.price).toFixed(2),
                                          " each",
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsxs("p", {
                                    className:
                                      "text-sm font-light flex-shrink-0",
                                    children: [
                                      "$",
                                      (Number(E.price) * E.quantity).toFixed(2),
                                    ],
                                  }),
                                ],
                              },
                              E.cart_id || E.cartId || E.id,
                            ),
                          ),
                          e.length === 0 &&
                            !r &&
                            i.jsx("p", {
                              className: "text-xs text-gray-400 italic",
                              children: "Items will appear once cart loads.",
                            }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "space-y-3 text-sm border-t border-gray-200 pt-4",
                        children: [
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Subtotal" }),
                              i.jsxs("span", { children: ["$", z.toFixed(2)] }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Shipping" }),
                              i.jsx("span", {
                                children:
                                  I === 0
                                    ? i.jsx("span", {
                                        className: "text-green-600",
                                        children: "Free",
                                      })
                                    : `$${I.toFixed(2)}`,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between text-gray-500",
                            children: [
                              i.jsx("span", { children: "Tax (8%)" }),
                              i.jsxs("span", { children: ["$", M.toFixed(2)] }),
                            ],
                          }),
                          i.jsxs("div", {
                            className:
                              "flex justify-between font-medium text-base border-t border-gray-200 pt-3 mt-1",
                            children: [
                              i.jsx("span", { children: "Grand Total" }),
                              i.jsxs("span", {
                                children: ["$", ae.toFixed(2)],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: Re,
                        disabled: x || r,
                        className:
                          "w-full mt-7 bg-black text-white text-xs uppercase py-4 hover:bg-gray-800 transition disabled:opacity-50 tracking-widest cursor-pointer",
                        children: x
                          ? i.jsxs("span", {
                              className:
                                "flex items-center justify-center gap-2",
                              children: [
                                i.jsx(vt, {
                                  size: 14,
                                  className: "animate-spin",
                                }),
                                "Placing Order…",
                              ],
                            })
                          : r
                            ? i.jsxs("span", {
                                className:
                                  "flex items-center justify-center gap-2",
                                children: [
                                  i.jsx(vt, {
                                    size: 14,
                                    className: "animate-spin",
                                  }),
                                  "Loading Cart…",
                                ],
                              })
                            : `Place Order · $${ae.toFixed(2)}`,
                      }),
                      i.jsx("p", {
                        className: "text-center text-xs text-gray-400 mt-4",
                        children:
                          "By placing your order you agree to our Terms & Privacy Policy.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
function Ns({
  label: e,
  name: t,
  value: n,
  onChange: r,
  error: s,
  placeholder: l,
  inputMode: a,
  type: o = "text",
}) {
  return i.jsxs("div", {
    children: [
      i.jsxs("label", {
        className:
          "block text-xs uppercase tracking-[1.5px] text-gray-500 mb-1.5",
        children: [
          e,
          " ",
          i.jsx("span", { className: "text-red-400", children: "*" }),
        ],
      }),
      i.jsx("input", {
        type: o,
        name: t,
        value: n,
        onChange: r,
        placeholder: l,
        inputMode: a,
        autoComplete: "off",
        className: `w-full px-4 py-3 text-sm border ${s ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"} focus:outline-none focus:border-black transition`,
      }),
      s && i.jsx("p", { className: "text-red-500 text-xs mt-1", children: s }),
    ],
  });
}
function Qy() {
  const { orderNumber: e } = Tf(),
    { state: t } = Gt(),
    n = _e(),
    [r, s] = w.useState(null),
    [l, a] = w.useState([]),
    [o, c] = w.useState(!0);
  if (
    (w.useEffect(() => {
      const v = localStorage.getItem("token");
      if (!v) {
        n("/login");
        return;
      }
      fetch(
        `https://backend-jewelry-production.up.railway.app/api/orders/by-number/${e}`,
        {
          headers: { Authorization: `Bearer ${v}` },
        },
      )
        .then((d) => d.json())
        .then((d) => {
          d.order && (s(d.order), a(d.items || []));
        })
        .catch(console.error)
        .finally(() => c(!1));
    }, [e]),
    o)
  )
    return i.jsxs("div", {
      className: "min-h-screen flex flex-col items-center justify-center gap-4",
      children: [
        i.jsx(vt, { size: 32, className: "animate-spin text-gray-400" }),
        i.jsx("p", {
          className: "text-sm text-gray-400 uppercase tracking-widest",
          children: "Loading your order…",
        }),
      ],
    });
  const u = r || {},
    p = l.length > 0 ? l : (t == null ? void 0 : t.cartItems) || [],
    h =
      (t == null ? void 0 : t.customerName) ||
      `${u.shipping_first_name || ""} ${u.shipping_last_name || ""}`.trim(),
    m = (t == null ? void 0 : t.email) || u.shipping_email || "",
    x = (t == null ? void 0 : t.grandTotal) || u.grand_total || "0.00",
    N = (t == null ? void 0 : t.paymentMethod) || u.payment_method || "cod",
    j = (t == null ? void 0 : t.paymentStatus) || u.payment_status || "pending";
  return i.jsx("div", {
    className: "min-h-screen bg-white pt-28 pb-20",
    children: i.jsxs("div", {
      className: "max-w-2xl mx-auto px-6 text-center",
      children: [
        i.jsx(Df, { size: 56, className: "text-green-500 mx-auto mb-6" }),
        i.jsx("h1", {
          className: "font-playfair text-3xl font-light mb-2",
          children: "Order Confirmed",
        }),
        i.jsxs("p", {
          className: "text-gray-500 text-sm mb-8",
          children: [
            "Thank you,",
            " ",
            i.jsx("span", { className: "font-medium text-black", children: h }),
            "! Your order has been placed successfully.",
          ],
        }),
        i.jsxs("div", {
          className: "border border-gray-200 p-7 text-left mb-8 bg-gray-50",
          children: [
            i.jsxs("div", {
              className:
                "flex items-center gap-3 mb-5 pb-4 border-b border-gray-200",
              children: [
                i.jsx(ox, { size: 18, className: "text-gray-400" }),
                i.jsx("span", {
                  className: "text-xs uppercase tracking-widest text-gray-500",
                  children: "Order Details",
                }),
              ],
            }),
            i.jsxs("div", {
              className: "space-y-3 text-sm",
              children: [
                i.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    i.jsx("span", {
                      className: "text-gray-500",
                      children: "Order Number",
                    }),
                    i.jsx("span", { className: "font-medium", children: e }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    i.jsx("span", {
                      className: "text-gray-500",
                      children: "Email",
                    }),
                    i.jsx("span", { children: m }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    i.jsx("span", {
                      className: "text-gray-500",
                      children: "Payment",
                    }),
                    i.jsx("span", {
                      className: "capitalize",
                      children:
                        N === "cod"
                          ? "Cash on Delivery"
                          : "Credit / Debit Card",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    i.jsx("span", {
                      className: "text-gray-500",
                      children: "Payment Status",
                    }),
                    i.jsx("span", {
                      className: `capitalize font-medium ${j === "paid" ? "text-green-600" : "text-amber-600"}`,
                      children: j === "paid" ? "Paid" : "Pay on Delivery",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className:
                    "flex justify-between font-medium text-base border-t border-gray-200 pt-3 mt-1",
                  children: [
                    i.jsx("span", { children: "Grand Total" }),
                    i.jsxs("span", { children: ["$", Number(x).toFixed(2)] }),
                  ],
                }),
              ],
            }),
          ],
        }),
        p.length > 0 &&
          i.jsxs("div", {
            className: "border border-gray-200 p-7 text-left mb-8",
            children: [
              i.jsx("h2", {
                className:
                  "font-playfair text-lg font-light mb-4 pb-3 border-b border-gray-200",
                children: "Items Ordered",
              }),
              i.jsx("div", {
                className: "space-y-4",
                children: p.map((v, d) =>
                  i.jsxs(
                    "div",
                    {
                      className: "flex gap-3 items-center",
                      children: [
                        (v.product_img || v.img_url) &&
                          i.jsx("img", {
                            src: v.product_img || v.img_url,
                            alt: v.product_name || v.name,
                            className:
                              "w-12 h-12 object-cover bg-gray-100 flex-shrink-0",
                          }),
                        i.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            i.jsx("p", {
                              className: "text-sm font-light truncate",
                              children: v.product_name || v.name,
                            }),
                            i.jsxs("p", {
                              className: "text-xs text-gray-400",
                              children: ["Qty: ", v.quantity],
                            }),
                          ],
                        }),
                        i.jsxs("p", {
                          className: "text-sm",
                          children: [
                            "$",
                            (
                              Number(v.unit_price || v.price) *
                              Number(v.quantity)
                            ).toFixed(2),
                          ],
                        }),
                      ],
                    },
                    v.id || d,
                  ),
                ),
              }),
            ],
          }),
        i.jsx("div", {
          className: "flex gap-4 justify-center",
          children: i.jsx("button", {
            onClick: () => n("/"),
            className:
              "px-8 py-3 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition",
            children: "Continue Shopping",
          }),
        }),
      ],
    }),
  });
}
function Ky() {
  const e = Gt(),
    t = e.pathname === "/login" || e.pathname === "/register";
  return i.jsx(mx, {
    children: i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        !t && i.jsx(gx, {}),
        i.jsx("main", {
          className: "flex-1",
          children: i.jsxs(zg, {
            children: [
              i.jsx(pe, { path: "/login", element: i.jsx($y, {}) }),
              i.jsx(pe, { path: "/register", element: i.jsx(gy, {}) }),
              i.jsx(pe, { path: "/login-success", element: i.jsx(Hy, {}) }),
              i.jsx(pe, { path: "/", element: i.jsx(vy, {}) }),
              i.jsx(pe, { path: "/high-jewelry", element: i.jsx(jy, {}) }),
              i.jsx(pe, { path: "/jewelry", element: i.jsx(ky, {}) }),
              i.jsx(pe, { path: "/love-engagement", element: i.jsx(Ry, {}) }),
              i.jsx(pe, { path: "/watches", element: i.jsx(Ty, {}) }),
              i.jsx(pe, { path: "/accessories", element: i.jsx(Ay, {}) }),
              i.jsx(pe, { path: "/gifts", element: i.jsx(Dy, {}) }),
              i.jsx(pe, { path: "/world-of-brand", element: i.jsx(Fy, {}) }),
              i.jsx(pe, { path: "/product/:id", element: i.jsx(Uy, {}) }),
              i.jsx(pe, { path: "/cart", element: i.jsx(By, {}) }),
              i.jsx(pe, { path: "/checkout", element: i.jsx(qy, {}) }),
              i.jsx(pe, { path: "/payment", element: i.jsx(Jy, {}) }),
              " ",
              i.jsx(pe, {
                path: "/order-confirmation/:orderNumber",
                element: i.jsx(Qy, {}),
              }),
            ],
          }),
        }),
        !t && i.jsx(xx, {}),
      ],
    }),
  });
}
fi.createRoot(document.getElementById("root")).render(
  i.jsx(wu.StrictMode, { children: i.jsx(Hg, { children: i.jsx(Ky, {}) }) }),
);
