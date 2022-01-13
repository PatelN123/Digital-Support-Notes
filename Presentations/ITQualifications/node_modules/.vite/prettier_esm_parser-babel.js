import "./chunk-AW43RHKU.js";

// node_modules/prettier/esm/parser-babel.mjs
var t = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function e(t7) {
  return t7 && Object.prototype.hasOwnProperty.call(t7, "default") ? t7.default : t7;
}
var s = function(t7) {
  return t7 && t7.Math == Math && t7;
};
var r = s(typeof globalThis == "object" && globalThis) || s(typeof window == "object" && window) || s(typeof self == "object" && self) || s(typeof t == "object" && t) || function() {
  return this;
}() || Function("return this")();
var i = {};
var n = function(t7) {
  try {
    return !!t7();
  } catch (t8) {
    return true;
  }
};
var a = !n(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var o = Function.prototype.call;
var u = o.bind ? o.bind(o) : function() {
  return o.apply(o, arguments);
};
var h = {};
var p = {}.propertyIsEnumerable;
var c = Object.getOwnPropertyDescriptor;
var l = c && !p.call({ 1: 2 }, 1);
h.f = l ? function(t7) {
  var e2 = c(this, t7);
  return !!e2 && e2.enumerable;
} : p;
var d;
var D;
var m = function(t7, e2) {
  return { enumerable: !(1 & t7), configurable: !(2 & t7), writable: !(4 & t7), value: e2 };
};
var f = Function.prototype;
var y = f.bind;
var E = f.call;
var A = y && y.bind(E);
var C = y ? function(t7) {
  return t7 && A(E, t7);
} : function(t7) {
  return t7 && function() {
    return E.apply(t7, arguments);
  };
};
var x = C;
var F = x({}.toString);
var g = x("".slice);
var P = function(t7) {
  return g(F(t7), 8, -1);
};
var T = C;
var b = n;
var S = P;
var w = r.Object;
var B = T("".split);
var N = b(function() {
  return !w("z").propertyIsEnumerable(0);
}) ? function(t7) {
  return S(t7) == "String" ? B(t7, "") : w(t7);
} : w;
var I = r.TypeError;
var v = function(t7) {
  if (t7 == null)
    throw I("Can't call method on " + t7);
  return t7;
};
var k = N;
var L = v;
var O = function(t7) {
  return k(L(t7));
};
var M = function(t7) {
  return typeof t7 == "function";
};
var R = M;
var j = function(t7) {
  return typeof t7 == "object" ? t7 !== null : R(t7);
};
var U = r;
var _ = M;
var z = function(t7) {
  return _(t7) ? t7 : void 0;
};
var H = function(t7, e2) {
  return arguments.length < 2 ? z(U[t7]) : U[t7] && U[t7][e2];
};
var V = C({}.isPrototypeOf);
var q = H("navigator", "userAgent") || "";
var G = r;
var W = q;
var K = G.process;
var X = G.Deno;
var J = K && K.versions || X && X.version;
var $ = J && J.v8;
$ && (D = (d = $.split("."))[0] > 0 && d[0] < 4 ? 1 : +(d[0] + d[1])), !D && W && (!(d = W.match(/Edge\/(\d+)/)) || d[1] >= 74) && (d = W.match(/Chrome\/(\d+)/)) && (D = +d[1]);
var Y = D;
var Q = Y;
var Z = n;
var tt = !!Object.getOwnPropertySymbols && !Z(function() {
  var t7 = Symbol();
  return !String(t7) || !(Object(t7) instanceof Symbol) || !Symbol.sham && Q && Q < 41;
});
var et = tt && !Symbol.sham && typeof Symbol.iterator == "symbol";
var st = H;
var rt = M;
var it = V;
var nt = et;
var at = r.Object;
var ot = nt ? function(t7) {
  return typeof t7 == "symbol";
} : function(t7) {
  var e2 = st("Symbol");
  return rt(e2) && it(e2.prototype, at(t7));
};
var ut = r.String;
var ht = function(t7) {
  try {
    return ut(t7);
  } catch (t8) {
    return "Object";
  }
};
var pt = M;
var ct = ht;
var lt = r.TypeError;
var dt = function(t7) {
  if (pt(t7))
    return t7;
  throw lt(ct(t7) + " is not a function");
};
var Dt = dt;
var mt = function(t7, e2) {
  var s2 = t7[e2];
  return s2 == null ? void 0 : Dt(s2);
};
var ft = u;
var yt = M;
var Et = j;
var At = r.TypeError;
var Ct = { exports: {} };
var xt = r;
var Ft = Object.defineProperty;
var gt = function(t7, e2) {
  try {
    Ft(xt, t7, { value: e2, configurable: true, writable: true });
  } catch (s2) {
    xt[t7] = e2;
  }
  return e2;
};
var Pt = gt;
var Tt = r["__core-js_shared__"] || Pt("__core-js_shared__", {});
var bt = Tt;
(Ct.exports = function(t7, e2) {
  return bt[t7] || (bt[t7] = e2 !== void 0 ? e2 : {});
})("versions", []).push({ version: "3.19.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var St = v;
var wt = r.Object;
var Bt = function(t7) {
  return wt(St(t7));
};
var Nt = Bt;
var It = C({}.hasOwnProperty);
var vt = Object.hasOwn || function(t7, e2) {
  return It(Nt(t7), e2);
};
var kt = C;
var Lt = 0;
var Ot = Math.random();
var Mt = kt(1 .toString);
var Rt = function(t7) {
  return "Symbol(" + (t7 === void 0 ? "" : t7) + ")_" + Mt(++Lt + Ot, 36);
};
var jt = r;
var Ut = Ct.exports;
var _t = vt;
var zt = Rt;
var Ht = tt;
var Vt = et;
var qt = Ut("wks");
var Gt = jt.Symbol;
var Wt = Gt && Gt.for;
var Kt = Vt ? Gt : Gt && Gt.withoutSetter || zt;
var Xt = function(t7) {
  if (!_t(qt, t7) || !Ht && typeof qt[t7] != "string") {
    var e2 = "Symbol." + t7;
    Ht && _t(Gt, t7) ? qt[t7] = Gt[t7] : qt[t7] = Vt && Wt ? Wt(e2) : Kt(e2);
  }
  return qt[t7];
};
var Jt = u;
var $t = j;
var Yt = ot;
var Qt = mt;
var Zt = function(t7, e2) {
  var s2, r2;
  if (e2 === "string" && yt(s2 = t7.toString) && !Et(r2 = ft(s2, t7)))
    return r2;
  if (yt(s2 = t7.valueOf) && !Et(r2 = ft(s2, t7)))
    return r2;
  if (e2 !== "string" && yt(s2 = t7.toString) && !Et(r2 = ft(s2, t7)))
    return r2;
  throw At("Can't convert object to primitive value");
};
var te = Xt;
var ee = r.TypeError;
var se = te("toPrimitive");
var re = function(t7, e2) {
  if (!$t(t7) || Yt(t7))
    return t7;
  var s2, r2 = Qt(t7, se);
  if (r2) {
    if (e2 === void 0 && (e2 = "default"), s2 = Jt(r2, t7, e2), !$t(s2) || Yt(s2))
      return s2;
    throw ee("Can't convert object to primitive value");
  }
  return e2 === void 0 && (e2 = "number"), Zt(t7, e2);
};
var ie = ot;
var ne = function(t7) {
  var e2 = re(t7, "string");
  return ie(e2) ? e2 : e2 + "";
};
var ae = j;
var oe = r.document;
var ue = ae(oe) && ae(oe.createElement);
var he = function(t7) {
  return ue ? oe.createElement(t7) : {};
};
var pe = !a && !n(function() {
  return Object.defineProperty(he("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var ce = a;
var le = u;
var de = h;
var De = m;
var me = O;
var fe = ne;
var ye = vt;
var Ee = pe;
var Ae = Object.getOwnPropertyDescriptor;
i.f = ce ? Ae : function(t7, e2) {
  if (t7 = me(t7), e2 = fe(e2), Ee)
    try {
      return Ae(t7, e2);
    } catch (t8) {
    }
  if (ye(t7, e2))
    return De(!le(de.f, t7, e2), t7[e2]);
};
var Ce = {};
var xe = r;
var Fe = j;
var ge = xe.String;
var Pe = xe.TypeError;
var Te = function(t7) {
  if (Fe(t7))
    return t7;
  throw Pe(ge(t7) + " is not an object");
};
var be = a;
var Se = pe;
var we = Te;
var Be = ne;
var Ne = r.TypeError;
var Ie = Object.defineProperty;
Ce.f = be ? Ie : function(t7, e2, s2) {
  if (we(t7), e2 = Be(e2), we(s2), Se)
    try {
      return Ie(t7, e2, s2);
    } catch (t8) {
    }
  if ("get" in s2 || "set" in s2)
    throw Ne("Accessors not supported");
  return "value" in s2 && (t7[e2] = s2.value), t7;
};
var ve = Ce;
var ke = m;
var Le = a ? function(t7, e2, s2) {
  return ve.f(t7, e2, ke(1, s2));
} : function(t7, e2, s2) {
  return t7[e2] = s2, t7;
};
var Oe = { exports: {} };
var Me = M;
var Re = Tt;
var je = C(Function.toString);
Me(Re.inspectSource) || (Re.inspectSource = function(t7) {
  return je(t7);
});
var Ue;
var _e;
var ze;
var He = Re.inspectSource;
var Ve = M;
var qe = He;
var Ge = r.WeakMap;
var We = Ve(Ge) && /native code/.test(qe(Ge));
var Ke = Ct.exports;
var Xe = Rt;
var Je = Ke("keys");
var $e = {};
var Ye = We;
var Qe = r;
var Ze = C;
var ts = j;
var es = Le;
var ss = vt;
var rs = Tt;
var is = function(t7) {
  return Je[t7] || (Je[t7] = Xe(t7));
};
var ns = $e;
var as = Qe.TypeError;
var os = Qe.WeakMap;
if (Ye || rs.state) {
  us = rs.state || (rs.state = new os()), hs = Ze(us.get), ps = Ze(us.has), cs = Ze(us.set);
  Ue = function(t7, e2) {
    if (ps(us, t7))
      throw new as("Object already initialized");
    return e2.facade = t7, cs(us, t7, e2), e2;
  }, _e = function(t7) {
    return hs(us, t7) || {};
  }, ze = function(t7) {
    return ps(us, t7);
  };
} else {
  ls = is("state");
  ns[ls] = true, Ue = function(t7, e2) {
    if (ss(t7, ls))
      throw new as("Object already initialized");
    return e2.facade = t7, es(t7, ls, e2), e2;
  }, _e = function(t7) {
    return ss(t7, ls) ? t7[ls] : {};
  }, ze = function(t7) {
    return ss(t7, ls);
  };
}
var us;
var hs;
var ps;
var cs;
var ls;
var ds = { set: Ue, get: _e, has: ze, enforce: function(t7) {
  return ze(t7) ? _e(t7) : Ue(t7, {});
}, getterFor: function(t7) {
  return function(e2) {
    var s2;
    if (!ts(e2) || (s2 = _e(e2)).type !== t7)
      throw as("Incompatible receiver, " + t7 + " required");
    return s2;
  };
} };
var Ds = a;
var ms = vt;
var fs = Function.prototype;
var ys = Ds && Object.getOwnPropertyDescriptor;
var Es = ms(fs, "name");
var As = Es && function() {
}.name === "something";
var Cs = Es && (!Ds || Ds && ys(fs, "name").configurable);
var xs = r;
var Fs = M;
var gs = vt;
var Ps = Le;
var Ts = gt;
var bs = He;
var Ss = { EXISTS: Es, PROPER: As, CONFIGURABLE: Cs }.CONFIGURABLE;
var ws = ds.get;
var Bs = ds.enforce;
var Ns = String(String).split("String");
(Oe.exports = function(t7, e2, s2, r2) {
  var i2, n2 = !!r2 && !!r2.unsafe, a2 = !!r2 && !!r2.enumerable, o2 = !!r2 && !!r2.noTargetGet, u2 = r2 && r2.name !== void 0 ? r2.name : e2;
  Fs(s2) && (String(u2).slice(0, 7) === "Symbol(" && (u2 = "[" + String(u2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!gs(s2, "name") || Ss && s2.name !== u2) && Ps(s2, "name", u2), (i2 = Bs(s2)).source || (i2.source = Ns.join(typeof u2 == "string" ? u2 : ""))), t7 !== xs ? (n2 ? !o2 && t7[e2] && (a2 = true) : delete t7[e2], a2 ? t7[e2] = s2 : Ps(t7, e2, s2)) : a2 ? t7[e2] = s2 : Ts(e2, s2);
})(Function.prototype, "toString", function() {
  return Fs(this) && ws(this).source || bs(this);
});
var Is = {};
var vs = Math.ceil;
var ks = Math.floor;
var Ls = function(t7) {
  var e2 = +t7;
  return e2 != e2 || e2 === 0 ? 0 : (e2 > 0 ? ks : vs)(e2);
};
var Os = Ls;
var Ms = Math.max;
var Rs = Math.min;
var js = Ls;
var Us = Math.min;
var _s = function(t7) {
  return t7 > 0 ? Us(js(t7), 9007199254740991) : 0;
};
var zs = function(t7) {
  return _s(t7.length);
};
var Hs = O;
var Vs = function(t7, e2) {
  var s2 = Os(t7);
  return s2 < 0 ? Ms(s2 + e2, 0) : Rs(s2, e2);
};
var qs = zs;
var Gs = function(t7) {
  return function(e2, s2, r2) {
    var i2, n2 = Hs(e2), a2 = qs(n2), o2 = Vs(r2, a2);
    if (t7 && s2 != s2) {
      for (; a2 > o2; )
        if ((i2 = n2[o2++]) != i2)
          return true;
    } else
      for (; a2 > o2; o2++)
        if ((t7 || o2 in n2) && n2[o2] === s2)
          return t7 || o2 || 0;
    return !t7 && -1;
  };
};
var Ws = { includes: Gs(true), indexOf: Gs(false) };
var Ks = vt;
var Xs = O;
var Js = Ws.indexOf;
var $s = $e;
var Ys = C([].push);
var Qs = function(t7, e2) {
  var s2, r2 = Xs(t7), i2 = 0, n2 = [];
  for (s2 in r2)
    !Ks($s, s2) && Ks(r2, s2) && Ys(n2, s2);
  for (; e2.length > i2; )
    Ks(r2, s2 = e2[i2++]) && (~Js(n2, s2) || Ys(n2, s2));
  return n2;
};
var Zs = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
Is.f = Object.getOwnPropertyNames || function(t7) {
  return Qs(t7, Zs);
};
var tr = {};
tr.f = Object.getOwnPropertySymbols;
var er = H;
var sr = Is;
var rr = tr;
var ir = Te;
var nr = C([].concat);
var ar = er("Reflect", "ownKeys") || function(t7) {
  var e2 = sr.f(ir(t7)), s2 = rr.f;
  return s2 ? nr(e2, s2(t7)) : e2;
};
var or = vt;
var ur = ar;
var hr = i;
var pr = Ce;
var cr = n;
var lr = M;
var dr = /#|\.prototype\./;
var Dr = function(t7, e2) {
  var s2 = fr[mr(t7)];
  return s2 == Er || s2 != yr && (lr(e2) ? cr(e2) : !!e2);
};
var mr = Dr.normalize = function(t7) {
  return String(t7).replace(dr, ".").toLowerCase();
};
var fr = Dr.data = {};
var yr = Dr.NATIVE = "N";
var Er = Dr.POLYFILL = "P";
var Ar = Dr;
var Cr = r;
var xr = i.f;
var Fr = Le;
var gr = Oe.exports;
var Pr = gt;
var Tr = function(t7, e2) {
  for (var s2 = ur(e2), r2 = pr.f, i2 = hr.f, n2 = 0; n2 < s2.length; n2++) {
    var a2 = s2[n2];
    or(t7, a2) || r2(t7, a2, i2(e2, a2));
  }
};
var br = Ar;
var Sr = function(t7, e2) {
  var s2, r2, i2, n2, a2, o2 = t7.target, u2 = t7.global, h2 = t7.stat;
  if (s2 = u2 ? Cr : h2 ? Cr[o2] || Pr(o2, {}) : (Cr[o2] || {}).prototype)
    for (r2 in e2) {
      if (n2 = e2[r2], i2 = t7.noTargetGet ? (a2 = xr(s2, r2)) && a2.value : s2[r2], !br(u2 ? r2 : o2 + (h2 ? "." : "#") + r2, t7.forced) && i2 !== void 0) {
        if (typeof n2 == typeof i2)
          continue;
        Tr(n2, i2);
      }
      (t7.sham || i2 && i2.sham) && Fr(n2, "sham", true), gr(s2, r2, n2, t7);
    }
};
var wr = P;
var Br = Array.isArray || function(t7) {
  return wr(t7) == "Array";
};
var Nr = dt;
var Ir = C(C.bind);
var vr = function(t7, e2) {
  return Nr(t7), e2 === void 0 ? t7 : Ir ? Ir(t7, e2) : function() {
    return t7.apply(e2, arguments);
  };
};
var kr = Br;
var Lr = zs;
var Or = vr;
var Mr = r.TypeError;
var Rr = function(t7, e2, s2, r2, i2, n2, a2, o2) {
  for (var u2, h2, p2 = i2, c2 = 0, l2 = !!a2 && Or(a2, o2); c2 < r2; ) {
    if (c2 in s2) {
      if (u2 = l2 ? l2(s2[c2], c2, e2) : s2[c2], n2 > 0 && kr(u2))
        h2 = Lr(u2), p2 = Rr(t7, e2, u2, h2, p2, n2 - 1) - 1;
      else {
        if (p2 >= 9007199254740991)
          throw Mr("Exceed the acceptable array length");
        t7[p2] = u2;
      }
      p2++;
    }
    c2++;
  }
  return p2;
};
var jr = Rr;
var Ur = {};
Ur[Xt("toStringTag")] = "z";
var _r = r;
var zr = String(Ur) === "[object z]";
var Hr = M;
var Vr = P;
var qr = Xt("toStringTag");
var Gr = _r.Object;
var Wr = Vr(function() {
  return arguments;
}()) == "Arguments";
var Kr = zr ? Vr : function(t7) {
  var e2, s2, r2;
  return t7 === void 0 ? "Undefined" : t7 === null ? "Null" : typeof (s2 = function(t8, e3) {
    try {
      return t8[e3];
    } catch (t9) {
    }
  }(e2 = Gr(t7), qr)) == "string" ? s2 : Wr ? Vr(e2) : (r2 = Vr(e2)) == "Object" && Hr(e2.callee) ? "Arguments" : r2;
};
var Xr = C;
var Jr = n;
var $r = M;
var Yr = Kr;
var Qr = He;
var Zr = function() {
};
var ti = [];
var ei = H("Reflect", "construct");
var si = /^\s*(?:class|function)\b/;
var ri = Xr(si.exec);
var ii = !si.exec(Zr);
var ni = function(t7) {
  if (!$r(t7))
    return false;
  try {
    return ei(Zr, ti, t7), true;
  } catch (t8) {
    return false;
  }
};
var ai = !ei || Jr(function() {
  var t7;
  return ni(ni.call) || !ni(Object) || !ni(function() {
    t7 = true;
  }) || t7;
}) ? function(t7) {
  if (!$r(t7))
    return false;
  switch (Yr(t7)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  return ii || !!ri(si, Qr(t7));
} : ni;
var oi = r;
var ui = Br;
var hi = ai;
var pi = j;
var ci = Xt("species");
var li = oi.Array;
var di = function(t7) {
  var e2;
  return ui(t7) && (e2 = t7.constructor, (hi(e2) && (e2 === li || ui(e2.prototype)) || pi(e2) && (e2 = e2[ci]) === null) && (e2 = void 0)), e2 === void 0 ? li : e2;
};
var Di = jr;
var mi = dt;
var fi = Bt;
var yi = zs;
var Ei = function(t7, e2) {
  return new (di(t7))(e2 === 0 ? 0 : e2);
};
Sr({ target: "Array", proto: true }, { flatMap: function(t7) {
  var e2, s2 = fi(this), r2 = yi(s2);
  return mi(t7), (e2 = Ei(s2, 0)).length = Di(e2, s2, s2, r2, 0, 1, t7, arguments.length > 1 ? arguments[1] : void 0), e2;
} });
var Ai = function() {
  let t7;
  for (var e2 = arguments.length, s2 = new Array(e2), r2 = 0; r2 < e2; r2++)
    s2[r2] = arguments[r2];
  for (const [e3, r3] of s2.entries())
    try {
      return { result: r3() };
    } catch (s3) {
      e3 === 0 && (t7 = s3);
    }
  return { error: t7 };
};
var Ci = { exports: {} };
var xi = function() {
  let { onlyFirst: t7 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const e2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
  return new RegExp(e2, t7 ? void 0 : "g");
};
var Fi = { exports: {} };
var gi = (t7) => !Number.isNaN(t7) && (t7 >= 4352 && (t7 <= 4447 || t7 === 9001 || t7 === 9002 || 11904 <= t7 && t7 <= 12871 && t7 !== 12351 || 12880 <= t7 && t7 <= 19903 || 19968 <= t7 && t7 <= 42182 || 43360 <= t7 && t7 <= 43388 || 44032 <= t7 && t7 <= 55203 || 63744 <= t7 && t7 <= 64255 || 65040 <= t7 && t7 <= 65049 || 65072 <= t7 && t7 <= 65131 || 65281 <= t7 && t7 <= 65376 || 65504 <= t7 && t7 <= 65510 || 110592 <= t7 && t7 <= 110593 || 127488 <= t7 && t7 <= 127569 || 131072 <= t7 && t7 <= 262141));
Fi.exports = gi, Fi.exports.default = gi;
var Pi = (t7) => typeof t7 == "string" ? t7.replace(xi(), "") : t7;
var Ti = Fi.exports;
var bi = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
var Si = (t7) => {
  if (typeof t7 != "string" || t7.length === 0)
    return 0;
  if ((t7 = Pi(t7)).length === 0)
    return 0;
  t7 = t7.replace(bi(), "  ");
  let e2 = 0;
  for (let s2 = 0; s2 < t7.length; s2++) {
    const r2 = t7.codePointAt(s2);
    r2 <= 31 || r2 >= 127 && r2 <= 159 || (r2 >= 768 && r2 <= 879 || (r2 > 65535 && s2++, e2 += Ti(r2) ? 2 : 1));
  }
  return e2;
};
Ci.exports = Si, Ci.exports.default = Si;
var wi = (t7) => t7[t7.length - 1];
function Bi(t7, e2) {
  if (t7 == null)
    return {};
  var s2, r2, i2 = function(t8, e3) {
    if (t8 == null)
      return {};
    var s3, r3, i3 = {}, n3 = Object.keys(t8);
    for (r3 = 0; r3 < n3.length; r3++)
      s3 = n3[r3], e3.indexOf(s3) >= 0 || (i3[s3] = t8[s3]);
    return i3;
  }(t7, e2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(t7);
    for (r2 = 0; r2 < n2.length; r2++)
      s2 = n2[r2], e2.indexOf(s2) >= 0 || Object.prototype.propertyIsEnumerable.call(t7, s2) && (i2[s2] = t7[s2]);
  }
  return i2;
}
function Ni(t7, e2) {
  return e2 || (e2 = t7.slice(0)), Object.freeze(Object.defineProperties(t7, { raw: { value: Object.freeze(e2) } }));
}
var Ii = Kr;
var vi = r.String;
var ki = C([].slice);
var Li = Math.floor;
var Oi = function(t7, e2) {
  var s2 = t7.length, r2 = Li(s2 / 2);
  return s2 < 8 ? Mi(t7, e2) : Ri(t7, Oi(ki(t7, 0, r2), e2), Oi(ki(t7, r2), e2), e2);
};
var Mi = function(t7, e2) {
  for (var s2, r2, i2 = t7.length, n2 = 1; n2 < i2; ) {
    for (r2 = n2, s2 = t7[n2]; r2 && e2(t7[r2 - 1], s2) > 0; )
      t7[r2] = t7[--r2];
    r2 !== n2++ && (t7[r2] = s2);
  }
  return t7;
};
var Ri = function(t7, e2, s2, r2) {
  for (var i2 = e2.length, n2 = s2.length, a2 = 0, o2 = 0; a2 < i2 || o2 < n2; )
    t7[a2 + o2] = a2 < i2 && o2 < n2 ? r2(e2[a2], s2[o2]) <= 0 ? e2[a2++] : s2[o2++] : a2 < i2 ? e2[a2++] : s2[o2++];
  return t7;
};
var ji = Oi;
var Ui = n;
var _i = q.match(/firefox\/(\d+)/i);
var zi = !!_i && +_i[1];
var Hi = /MSIE|Trident/.test(q);
var Vi = q.match(/AppleWebKit\/(\d+)\./);
var qi = !!Vi && +Vi[1];
var Gi = Sr;
var Wi = C;
var Ki = dt;
var Xi = Bt;
var Ji = zs;
var $i = function(t7) {
  if (Ii(t7) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return vi(t7);
};
var Yi = n;
var Qi = ji;
var Zi = function(t7, e2) {
  var s2 = [][t7];
  return !!s2 && Ui(function() {
    s2.call(null, e2 || function() {
      throw 1;
    }, 1);
  });
};
var tn = zi;
var en = Hi;
var sn = Y;
var rn = qi;
var nn = [];
var an = Wi(nn.sort);
var on = Wi(nn.push);
var un = Yi(function() {
  nn.sort(void 0);
});
var hn = Yi(function() {
  nn.sort(null);
});
var pn = Zi("sort");
var cn = !Yi(function() {
  if (sn)
    return sn < 70;
  if (!(tn && tn > 3)) {
    if (en)
      return true;
    if (rn)
      return rn < 603;
    var t7, e2, s2, r2, i2 = "";
    for (t7 = 65; t7 < 76; t7++) {
      switch (e2 = String.fromCharCode(t7), t7) {
        case 66:
        case 69:
        case 70:
        case 72:
          s2 = 3;
          break;
        case 68:
        case 71:
          s2 = 4;
          break;
        default:
          s2 = 2;
      }
      for (r2 = 0; r2 < 47; r2++)
        nn.push({ k: e2 + r2, v: s2 });
    }
    for (nn.sort(function(t8, e3) {
      return e3.v - t8.v;
    }), r2 = 0; r2 < nn.length; r2++)
      e2 = nn[r2].k.charAt(0), i2.charAt(i2.length - 1) !== e2 && (i2 += e2);
    return i2 !== "DGBEFHACIJK";
  }
});
Gi({ target: "Array", proto: true, forced: un || !hn || !pn || !cn }, { sort: function(t7) {
  t7 !== void 0 && Ki(t7);
  var e2 = Xi(this);
  if (cn)
    return t7 === void 0 ? an(e2) : an(e2, t7);
  var s2, r2, i2 = [], n2 = Ji(e2);
  for (r2 = 0; r2 < n2; r2++)
    r2 in e2 && on(i2, e2[r2]);
  for (Qi(i2, function(t8) {
    return function(e3, s3) {
      return s3 === void 0 ? -1 : e3 === void 0 ? 1 : t8 !== void 0 ? +t8(e3, s3) || 0 : $i(e3) > $i(s3) ? 1 : -1;
    };
  }(t7)), s2 = i2.length, r2 = 0; r2 < s2; )
    e2[r2] = i2[r2++];
  for (; r2 < n2; )
    delete e2[r2++];
  return e2;
} });
var ln = {};
var dn = ln;
var Dn = Xt("iterator");
var mn = Array.prototype;
var fn = Kr;
var yn = mt;
var En = ln;
var An = Xt("iterator");
var Cn = function(t7) {
  if (t7 != null)
    return yn(t7, An) || yn(t7, "@@iterator") || En[fn(t7)];
};
var xn = u;
var Fn = dt;
var gn = Te;
var Pn = ht;
var Tn = Cn;
var bn = r.TypeError;
var Sn = u;
var wn = Te;
var Bn = mt;
var Nn = vr;
var In = u;
var vn = Te;
var kn = ht;
var Ln = function(t7) {
  return t7 !== void 0 && (dn.Array === t7 || mn[Dn] === t7);
};
var On = zs;
var Mn = V;
var Rn = function(t7, e2) {
  var s2 = arguments.length < 2 ? Tn(t7) : e2;
  if (Fn(s2))
    return gn(xn(s2, t7));
  throw bn(Pn(t7) + " is not iterable");
};
var jn = Cn;
var Un = function(t7, e2, s2) {
  var r2, i2;
  wn(t7);
  try {
    if (!(r2 = Bn(t7, "return"))) {
      if (e2 === "throw")
        throw s2;
      return s2;
    }
    r2 = Sn(r2, t7);
  } catch (t8) {
    i2 = true, r2 = t8;
  }
  if (e2 === "throw")
    throw s2;
  if (i2)
    throw r2;
  return wn(r2), s2;
};
var _n = r.TypeError;
var zn = function(t7, e2) {
  this.stopped = t7, this.result = e2;
};
var Hn = zn.prototype;
var Vn = ne;
var qn = Ce;
var Gn = m;
var Wn = function(t7, e2, s2) {
  var r2, i2, n2, a2, o2, u2, h2, p2 = s2 && s2.that, c2 = !(!s2 || !s2.AS_ENTRIES), l2 = !(!s2 || !s2.IS_ITERATOR), d2 = !(!s2 || !s2.INTERRUPTED), D2 = Nn(e2, p2), m2 = function(t8) {
    return r2 && Un(r2, "normal", t8), new zn(true, t8);
  }, f2 = function(t8) {
    return c2 ? (vn(t8), d2 ? D2(t8[0], t8[1], m2) : D2(t8[0], t8[1])) : d2 ? D2(t8, m2) : D2(t8);
  };
  if (l2)
    r2 = t7;
  else {
    if (!(i2 = jn(t7)))
      throw _n(kn(t7) + " is not iterable");
    if (Ln(i2)) {
      for (n2 = 0, a2 = On(t7); a2 > n2; n2++)
        if ((o2 = f2(t7[n2])) && Mn(Hn, o2))
          return o2;
      return new zn(false);
    }
    r2 = Rn(t7, i2);
  }
  for (u2 = r2.next; !(h2 = In(u2, r2)).done; ) {
    try {
      o2 = f2(h2.value);
    } catch (t8) {
      Un(r2, "throw", t8);
    }
    if (typeof o2 == "object" && o2 && Mn(Hn, o2))
      return o2;
  }
  return new zn(false);
};
var Kn = function(t7, e2, s2) {
  var r2 = Vn(e2);
  r2 in t7 ? qn.f(t7, r2, Gn(0, s2)) : t7[r2] = s2;
};
Sr({ target: "Object", stat: true }, { fromEntries: function(t7) {
  var e2 = {};
  return Wn(t7, function(t8, s2) {
    Kn(e2, t8, s2);
  }, { AS_ENTRIES: true }), e2;
} });
var Xn = Xn !== void 0 ? Xn : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
function Jn() {
  throw new Error("setTimeout has not been defined");
}
function $n() {
  throw new Error("clearTimeout has not been defined");
}
var Yn = Jn;
var Qn = $n;
function Zn(t7) {
  if (Yn === setTimeout)
    return setTimeout(t7, 0);
  if ((Yn === Jn || !Yn) && setTimeout)
    return Yn = setTimeout, setTimeout(t7, 0);
  try {
    return Yn(t7, 0);
  } catch (e2) {
    try {
      return Yn.call(null, t7, 0);
    } catch (e3) {
      return Yn.call(this, t7, 0);
    }
  }
}
typeof Xn.setTimeout == "function" && (Yn = setTimeout), typeof Xn.clearTimeout == "function" && (Qn = clearTimeout);
var ta;
var ea = [];
var sa = false;
var ra = -1;
function ia() {
  sa && ta && (sa = false, ta.length ? ea = ta.concat(ea) : ra = -1, ea.length && na());
}
function na() {
  if (!sa) {
    var t7 = Zn(ia);
    sa = true;
    for (var e2 = ea.length; e2; ) {
      for (ta = ea, ea = []; ++ra < e2; )
        ta && ta[ra].run();
      ra = -1, e2 = ea.length;
    }
    ta = null, sa = false, function(t8) {
      if (Qn === clearTimeout)
        return clearTimeout(t8);
      if ((Qn === $n || !Qn) && clearTimeout)
        return Qn = clearTimeout, clearTimeout(t8);
      try {
        Qn(t8);
      } catch (e3) {
        try {
          return Qn.call(null, t8);
        } catch (e4) {
          return Qn.call(this, t8);
        }
      }
    }(t7);
  }
}
function aa(t7, e2) {
  this.fun = t7, this.array = e2;
}
aa.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function oa() {
}
var ua = oa;
var ha = oa;
var pa = oa;
var ca = oa;
var la = oa;
var da = oa;
var Da = oa;
var ma = Xn.performance || {};
var fa = ma.now || ma.mozNow || ma.msNow || ma.oNow || ma.webkitNow || function() {
  return new Date().getTime();
};
var ya = new Date();
var Ea = { nextTick: function(t7) {
  var e2 = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var s2 = 1; s2 < arguments.length; s2++)
      e2[s2 - 1] = arguments[s2];
  ea.push(new aa(t7, e2)), ea.length !== 1 || sa || Zn(na);
}, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: ua, addListener: ha, once: pa, off: ca, removeListener: la, removeAllListeners: da, emit: Da, binding: function(t7) {
  throw new Error("process.binding is not supported");
}, cwd: function() {
  return "/";
}, chdir: function(t7) {
  throw new Error("process.chdir is not supported");
}, umask: function() {
  return 0;
}, hrtime: function(t7) {
  var e2 = 1e-3 * fa.call(ma), s2 = Math.floor(e2), r2 = Math.floor(e2 % 1 * 1e9);
  return t7 && (s2 -= t7[0], (r2 -= t7[1]) < 0 && (s2--, r2 += 1e9)), [s2, r2];
}, platform: "browser", release: {}, config: {}, uptime: function() {
  return (new Date() - ya) / 1e3;
} };
var Aa = typeof Ea == "object" && Ea.env && Ea.env.NODE_DEBUG && /\bsemver\b/i.test(Ea.env.NODE_DEBUG) ? function() {
  for (var t7 = arguments.length, e2 = new Array(t7), s2 = 0; s2 < t7; s2++)
    e2[s2] = arguments[s2];
  return console.error("SEMVER", ...e2);
} : () => {
};
var Ca = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 };
var xa = { exports: {} };
!function(t7, e2) {
  const { MAX_SAFE_COMPONENT_LENGTH: s2 } = Ca, r2 = Aa, i2 = (e2 = t7.exports = {}).re = [], n2 = e2.src = [], a2 = e2.t = {};
  let o2 = 0;
  const u2 = (t8, e3, s3) => {
    const u3 = o2++;
    r2(u3, e3), a2[t8] = u3, n2[u3] = e3, i2[u3] = new RegExp(e3, s3 ? "g" : void 0);
  };
  u2("NUMERICIDENTIFIER", "0|[1-9]\\d*"), u2("NUMERICIDENTIFIERLOOSE", "[0-9]+"), u2("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), u2("MAINVERSION", "(".concat(n2[a2.NUMERICIDENTIFIER], ")\\.") + "(".concat(n2[a2.NUMERICIDENTIFIER], ")\\.") + "(".concat(n2[a2.NUMERICIDENTIFIER], ")")), u2("MAINVERSIONLOOSE", "(".concat(n2[a2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(n2[a2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(n2[a2.NUMERICIDENTIFIERLOOSE], ")")), u2("PRERELEASEIDENTIFIER", "(?:".concat(n2[a2.NUMERICIDENTIFIER], "|").concat(n2[a2.NONNUMERICIDENTIFIER], ")")), u2("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(n2[a2.NUMERICIDENTIFIERLOOSE], "|").concat(n2[a2.NONNUMERICIDENTIFIER], ")")), u2("PRERELEASE", "(?:-(".concat(n2[a2.PRERELEASEIDENTIFIER], "(?:\\.").concat(n2[a2.PRERELEASEIDENTIFIER], ")*))")), u2("PRERELEASELOOSE", "(?:-?(".concat(n2[a2.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(n2[a2.PRERELEASEIDENTIFIERLOOSE], ")*))")), u2("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), u2("BUILD", "(?:\\+(".concat(n2[a2.BUILDIDENTIFIER], "(?:\\.").concat(n2[a2.BUILDIDENTIFIER], ")*))")), u2("FULLPLAIN", "v?".concat(n2[a2.MAINVERSION]).concat(n2[a2.PRERELEASE], "?").concat(n2[a2.BUILD], "?")), u2("FULL", "^".concat(n2[a2.FULLPLAIN], "$")), u2("LOOSEPLAIN", "[v=\\s]*".concat(n2[a2.MAINVERSIONLOOSE]).concat(n2[a2.PRERELEASELOOSE], "?").concat(n2[a2.BUILD], "?")), u2("LOOSE", "^".concat(n2[a2.LOOSEPLAIN], "$")), u2("GTLT", "((?:<|>)?=?)"), u2("XRANGEIDENTIFIERLOOSE", "".concat(n2[a2.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), u2("XRANGEIDENTIFIER", "".concat(n2[a2.NUMERICIDENTIFIER], "|x|X|\\*")), u2("XRANGEPLAIN", "[v=\\s]*(".concat(n2[a2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(n2[a2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(n2[a2.XRANGEIDENTIFIER], ")") + "(?:".concat(n2[a2.PRERELEASE], ")?").concat(n2[a2.BUILD], "?") + ")?)?"), u2("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(n2[a2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(n2[a2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(n2[a2.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(n2[a2.PRERELEASELOOSE], ")?").concat(n2[a2.BUILD], "?") + ")?)?"), u2("XRANGE", "^".concat(n2[a2.GTLT], "\\s*").concat(n2[a2.XRANGEPLAIN], "$")), u2("XRANGELOOSE", "^".concat(n2[a2.GTLT], "\\s*").concat(n2[a2.XRANGEPLAINLOOSE], "$")), u2("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(s2, "})") + "(?:\\.(\\d{1,".concat(s2, "}))?") + "(?:\\.(\\d{1,".concat(s2, "}))?") + "(?:$|[^\\d])"), u2("COERCERTL", n2[a2.COERCE], true), u2("LONETILDE", "(?:~>?)"), u2("TILDETRIM", "(\\s*)".concat(n2[a2.LONETILDE], "\\s+"), true), e2.tildeTrimReplace = "$1~", u2("TILDE", "^".concat(n2[a2.LONETILDE]).concat(n2[a2.XRANGEPLAIN], "$")), u2("TILDELOOSE", "^".concat(n2[a2.LONETILDE]).concat(n2[a2.XRANGEPLAINLOOSE], "$")), u2("LONECARET", "(?:\\^)"), u2("CARETTRIM", "(\\s*)".concat(n2[a2.LONECARET], "\\s+"), true), e2.caretTrimReplace = "$1^", u2("CARET", "^".concat(n2[a2.LONECARET]).concat(n2[a2.XRANGEPLAIN], "$")), u2("CARETLOOSE", "^".concat(n2[a2.LONECARET]).concat(n2[a2.XRANGEPLAINLOOSE], "$")), u2("COMPARATORLOOSE", "^".concat(n2[a2.GTLT], "\\s*(").concat(n2[a2.LOOSEPLAIN], ")$|^$")), u2("COMPARATOR", "^".concat(n2[a2.GTLT], "\\s*(").concat(n2[a2.FULLPLAIN], ")$|^$")), u2("COMPARATORTRIM", "(\\s*)".concat(n2[a2.GTLT], "\\s*(").concat(n2[a2.LOOSEPLAIN], "|").concat(n2[a2.XRANGEPLAIN], ")"), true), e2.comparatorTrimReplace = "$1$2$3", u2("HYPHENRANGE", "^\\s*(".concat(n2[a2.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(n2[a2.XRANGEPLAIN], ")") + "\\s*$"), u2("HYPHENRANGELOOSE", "^\\s*(".concat(n2[a2.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(n2[a2.XRANGEPLAINLOOSE], ")") + "\\s*$"), u2("STAR", "(<|>)?=?\\s*\\*"), u2("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), u2("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
}(xa, xa.exports);
var Fa = ["includePrerelease", "loose", "rtl"];
var ga = (t7) => t7 ? typeof t7 != "object" ? { loose: true } : Fa.filter((e2) => t7[e2]).reduce((t8, e2) => (t8[e2] = true, t8), {}) : {};
var Pa = /^[0-9]+$/;
var Ta = (t7, e2) => {
  const s2 = Pa.test(t7), r2 = Pa.test(e2);
  return s2 && r2 && (t7 = +t7, e2 = +e2), t7 === e2 ? 0 : s2 && !r2 ? -1 : r2 && !s2 ? 1 : t7 < e2 ? -1 : 1;
};
var ba = { compareIdentifiers: Ta, rcompareIdentifiers: (t7, e2) => Ta(e2, t7) };
var Sa = Aa;
var { MAX_LENGTH: wa, MAX_SAFE_INTEGER: Ba } = Ca;
var { re: Na, t: Ia } = xa.exports;
var va = ga;
var { compareIdentifiers: ka } = ba;
var La = class {
  constructor(t7, e2) {
    if (e2 = va(e2), t7 instanceof La) {
      if (t7.loose === !!e2.loose && t7.includePrerelease === !!e2.includePrerelease)
        return t7;
      t7 = t7.version;
    } else if (typeof t7 != "string")
      throw new TypeError("Invalid Version: ".concat(t7));
    if (t7.length > wa)
      throw new TypeError("version is longer than ".concat(wa, " characters"));
    Sa("SemVer", t7, e2), this.options = e2, this.loose = !!e2.loose, this.includePrerelease = !!e2.includePrerelease;
    const s2 = t7.trim().match(e2.loose ? Na[Ia.LOOSE] : Na[Ia.FULL]);
    if (!s2)
      throw new TypeError("Invalid Version: ".concat(t7));
    if (this.raw = t7, this.major = +s2[1], this.minor = +s2[2], this.patch = +s2[3], this.major > Ba || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Ba || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Ba || this.patch < 0)
      throw new TypeError("Invalid patch version");
    s2[4] ? this.prerelease = s2[4].split(".").map((t8) => {
      if (/^[0-9]+$/.test(t8)) {
        const e3 = +t8;
        if (e3 >= 0 && e3 < Ba)
          return e3;
      }
      return t8;
    }) : this.prerelease = [], this.build = s2[5] ? s2[5].split(".") : [], this.format();
  }
  format() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t7) {
    if (Sa("SemVer.compare", this.version, this.options, t7), !(t7 instanceof La)) {
      if (typeof t7 == "string" && t7 === this.version)
        return 0;
      t7 = new La(t7, this.options);
    }
    return t7.version === this.version ? 0 : this.compareMain(t7) || this.comparePre(t7);
  }
  compareMain(t7) {
    return t7 instanceof La || (t7 = new La(t7, this.options)), ka(this.major, t7.major) || ka(this.minor, t7.minor) || ka(this.patch, t7.patch);
  }
  comparePre(t7) {
    if (t7 instanceof La || (t7 = new La(t7, this.options)), this.prerelease.length && !t7.prerelease.length)
      return -1;
    if (!this.prerelease.length && t7.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t7.prerelease.length)
      return 0;
    let e2 = 0;
    do {
      const s2 = this.prerelease[e2], r2 = t7.prerelease[e2];
      if (Sa("prerelease compare", e2, s2, r2), s2 === void 0 && r2 === void 0)
        return 0;
      if (r2 === void 0)
        return 1;
      if (s2 === void 0)
        return -1;
      if (s2 !== r2)
        return ka(s2, r2);
    } while (++e2);
  }
  compareBuild(t7) {
    t7 instanceof La || (t7 = new La(t7, this.options));
    let e2 = 0;
    do {
      const s2 = this.build[e2], r2 = t7.build[e2];
      if (Sa("prerelease compare", e2, s2, r2), s2 === void 0 && r2 === void 0)
        return 0;
      if (r2 === void 0)
        return 1;
      if (s2 === void 0)
        return -1;
      if (s2 !== r2)
        return ka(s2, r2);
    } while (++e2);
  }
  inc(t7, e2) {
    switch (t7) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e2);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e2);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", e2), this.inc("pre", e2);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", e2), this.inc("pre", e2);
        break;
      case "major":
        this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0)
          this.prerelease = [0];
        else {
          let t8 = this.prerelease.length;
          for (; --t8 >= 0; )
            typeof this.prerelease[t8] == "number" && (this.prerelease[t8]++, t8 = -2);
          t8 === -1 && this.prerelease.push(0);
        }
        e2 && (this.prerelease[0] === e2 ? isNaN(this.prerelease[1]) && (this.prerelease = [e2, 0]) : this.prerelease = [e2, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(t7));
    }
    return this.format(), this.raw = this.version, this;
  }
};
var Oa = La;
var Ma = (t7, e2, s2) => new Oa(t7, s2).compare(new Oa(e2, s2));
var Ra = Ma;
var ja = (t7, e2, s2) => Ra(t7, e2, s2) < 0;
var Ua = Ma;
var _a;
var za;
var Ha;
var Va;
var qa;
var Ga;
var Wa = (t7, e2, s2) => Ua(t7, e2, s2) >= 0;
var Ka = { exports: {} };
!function(t7, e2) {
  function s2() {
    for (var t8 = [], e3 = 0; e3 < arguments.length; e3++)
      t8[e3] = arguments[e3];
  }
  function r2() {
    return typeof WeakMap != "undefined" ? new WeakMap() : { add: s2, delete: s2, get: s2, set: s2, has: function(t8) {
      return false;
    } };
  }
  Object.defineProperty(e2, "__esModule", { value: true }), e2.outdent = void 0;
  var i2 = Object.prototype.hasOwnProperty, n2 = function(t8, e3) {
    return i2.call(t8, e3);
  };
  function a2(t8, e3) {
    for (var s3 in e3)
      n2(e3, s3) && (t8[s3] = e3[s3]);
    return t8;
  }
  var o2 = /^[ \t]*(?:\r\n|\r|\n)/, u2 = /(?:\r\n|\r|\n)[ \t]*$/, h2 = /^(?:[\r\n]|$)/, p2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, c2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
  function l2(t8, e3, s3) {
    var r3 = 0, i3 = t8[0].match(p2);
    i3 && (r3 = i3[1].length);
    var n3 = new RegExp("(\\r\\n|\\r|\\n).{0," + r3 + "}", "g");
    e3 && (t8 = t8.slice(1));
    var a3 = s3.newline, h3 = s3.trimLeadingNewline, c3 = s3.trimTrailingNewline, l3 = typeof a3 == "string", d3 = t8.length;
    return t8.map(function(t9, e4) {
      return t9 = t9.replace(n3, "$1"), e4 === 0 && h3 && (t9 = t9.replace(o2, "")), e4 === d3 - 1 && c3 && (t9 = t9.replace(u2, "")), l3 && (t9 = t9.replace(/\r\n|\n|\r/g, function(t10) {
        return a3;
      })), t9;
    });
  }
  function d2(t8, e3) {
    for (var s3 = "", r3 = 0, i3 = t8.length; r3 < i3; r3++)
      s3 += t8[r3], r3 < i3 - 1 && (s3 += e3[r3]);
    return s3;
  }
  function D2(t8) {
    return n2(t8, "raw") && n2(t8, "length");
  }
  var m2 = function t8(e3) {
    var s3 = r2(), i3 = r2(), n3 = a2(function r3(n4) {
      for (var o3 = [], u3 = 1; u3 < arguments.length; u3++)
        o3[u3 - 1] = arguments[u3];
      if (D2(n4)) {
        var p3 = n4, f2 = (o3[0] === r3 || o3[0] === m2) && c2.test(p3[0]) && h2.test(p3[1]), y2 = f2 ? i3 : s3, E2 = y2.get(p3);
        if (E2 || (E2 = l2(p3, f2, e3), y2.set(p3, E2)), o3.length === 0)
          return E2[0];
        var A2 = d2(E2, f2 ? o3.slice(1) : o3);
        return A2;
      }
      return t8(a2(a2({}, e3), n4 || {}));
    }, { string: function(t9) {
      return l2([t9], false, e3)[0];
    } });
    return n3;
  }({ trimLeadingNewline: true, trimTrailingNewline: true });
  e2.outdent = m2, e2.default = m2;
  try {
    t7.exports = m2, Object.defineProperty(m2, "__esModule", { value: true }), m2.default = m2, m2.outdent = m2;
  } catch (t8) {
  }
}(Ka, Ka.exports);
var { outdent: Xa } = Ka.exports;
var Ja = { cursorOffset: { since: "1.4.0", category: "Special", type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: Xa(_a || (_a = Ni(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))), cliCategory: "Editor" }, endOfLine: { since: "1.15.0", category: "Global", type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: Xa(za || (za = Ni(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]))) }] }, filepath: { since: "1.4.0", category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { since: "0.0.10", category: "Global", type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (t7) => typeof t7 == "string" || typeof t7 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (t7) => typeof t7 == "string" || typeof t7 == "object", cliName: "plugin", cliCategory: "Config" }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: "Global", description: Xa(Ha || (Ha = Ni(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))), exception: (t7) => typeof t7 == "string" || typeof t7 == "object", cliName: "plugin-search-dir", cliCategory: "Config" }, printWidth: { since: "0.0.0", category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: "Special", type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Xa(Va || (Va = Ni(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: "Editor" }, rangeStart: { since: "1.4.0", category: "Special", type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Xa(qa || (qa = Ni(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: "Editor" }, requirePragma: { since: "1.7.0", category: "Special", type: "boolean", default: false, description: Xa(Ga || (Ga = Ni(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))), cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: "Global", type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
var $a = ["cliName", "cliCategory", "cliDescription"];
var Ya = { compare: Ma, lt: ja, gte: Wa };
var Qa = (t7, e2) => Object.entries(t7).map((t8) => {
  let [s2, r2] = t8;
  return Object.assign({ [e2]: s2 }, r2);
});
var Za = "2.5.1";
var to = { CATEGORY_CONFIG: "Config", CATEGORY_EDITOR: "Editor", CATEGORY_FORMAT: "Format", CATEGORY_OTHER: "Other", CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: "Global", CATEGORY_SPECIAL: "Special", options: Ja }.options;
function eo(t7, e2, s2) {
  const r2 = new Set(t7.choices.map((t8) => t8.value));
  for (const i2 of e2)
    if (i2.parsers) {
      for (const e3 of i2.parsers)
        if (!r2.has(e3)) {
          r2.add(e3);
          const n2 = s2.find((t8) => t8.parsers && t8.parsers[e3]);
          let a2 = i2.name;
          n2 && n2.name && (a2 += " (plugin: ".concat(n2.name, ")")), t7.choices.push({ value: e3, description: a2 });
        }
    }
}
var so = { getSupportInfo: function() {
  let { plugins: t7 = [], showUnreleased: e2 = false, showDeprecated: s2 = false, showInternal: r2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const i2 = Za.split("-", 1)[0], n2 = t7.flatMap((t8) => t8.languages || []).filter(o2), a2 = Qa(Object.assign({}, ...t7.map((t8) => {
    let { options: e3 } = t8;
    return e3;
  }), to), "name").filter((t8) => o2(t8) && u2(t8)).sort((t8, e3) => t8.name === e3.name ? 0 : t8.name < e3.name ? -1 : 1).map(h2).map((e3) => {
    e3 = Object.assign({}, e3), Array.isArray(e3.default) && (e3.default = e3.default.length === 1 ? e3.default[0].value : e3.default.filter(o2).sort((t8, e4) => Ya.compare(e4.since, t8.since))[0].value), Array.isArray(e3.choices) && (e3.choices = e3.choices.filter((t8) => o2(t8) && u2(t8)), e3.name === "parser" && eo(e3, n2, t7));
    const s3 = Object.fromEntries(t7.filter((t8) => t8.defaultOptions && t8.defaultOptions[e3.name] !== void 0).map((t8) => [t8.name, t8.defaultOptions[e3.name]]));
    return Object.assign(Object.assign({}, e3), {}, { pluginDefaults: s3 });
  });
  return { languages: n2, options: a2 };
  function o2(t8) {
    return e2 || !("since" in t8) || t8.since && Ya.gte(i2, t8.since);
  }
  function u2(t8) {
    return s2 || !("deprecated" in t8) || t8.deprecated && Ya.lt(i2, t8.deprecated);
  }
  function h2(t8) {
    if (r2)
      return t8;
    return Bi(t8, $a);
  }
} };
var ro = Ci.exports;
var io = (t7) => {
  if (typeof t7 != "string")
    throw new TypeError("Expected a string");
  return t7.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
var no = wi;
var { getSupportInfo: ao } = so;
var oo = /[^\x20-\x7F]/;
function uo(t7) {
  return (e2, s2, r2) => {
    const i2 = r2 && r2.backwards;
    if (s2 === false)
      return false;
    const { length: n2 } = e2;
    let a2 = s2;
    for (; a2 >= 0 && a2 < n2; ) {
      const s3 = e2.charAt(a2);
      if (t7 instanceof RegExp) {
        if (!t7.test(s3))
          return a2;
      } else if (!t7.includes(s3))
        return a2;
      i2 ? a2-- : a2++;
    }
    return (a2 === -1 || a2 === n2) && a2;
  };
}
var ho = uo(/\s/);
var po = uo(" 	");
var co = uo(",; 	");
var lo = uo(/[^\n\r]/);
function Do(t7, e2) {
  if (e2 === false)
    return false;
  if (t7.charAt(e2) === "/" && t7.charAt(e2 + 1) === "*") {
    for (let s2 = e2 + 2; s2 < t7.length; ++s2)
      if (t7.charAt(s2) === "*" && t7.charAt(s2 + 1) === "/")
        return s2 + 2;
  }
  return e2;
}
function mo(t7, e2) {
  return e2 !== false && (t7.charAt(e2) === "/" && t7.charAt(e2 + 1) === "/" ? lo(t7, e2) : e2);
}
function fo(t7, e2, s2) {
  const r2 = s2 && s2.backwards;
  if (e2 === false)
    return false;
  const i2 = t7.charAt(e2);
  if (r2) {
    if (t7.charAt(e2 - 1) === "\r" && i2 === "\n")
      return e2 - 2;
    if (i2 === "\n" || i2 === "\r" || i2 === "\u2028" || i2 === "\u2029")
      return e2 - 1;
  } else {
    if (i2 === "\r" && t7.charAt(e2 + 1) === "\n")
      return e2 + 2;
    if (i2 === "\n" || i2 === "\r" || i2 === "\u2028" || i2 === "\u2029")
      return e2 + 1;
  }
  return e2;
}
function yo(t7, e2) {
  let s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r2 = po(t7, s2.backwards ? e2 - 1 : e2, s2), i2 = fo(t7, r2, s2);
  return r2 !== i2;
}
function Eo(t7, e2) {
  let s2 = null, r2 = e2;
  for (; r2 !== s2; )
    s2 = r2, r2 = co(t7, r2), r2 = Do(t7, r2), r2 = po(t7, r2);
  return r2 = mo(t7, r2), r2 = fo(t7, r2), r2 !== false && yo(t7, r2);
}
function Ao(t7, e2) {
  let s2 = null, r2 = e2;
  for (; r2 !== s2; )
    s2 = r2, r2 = po(t7, r2), r2 = Do(t7, r2), r2 = mo(t7, r2), r2 = fo(t7, r2);
  return r2;
}
function Co(t7, e2, s2) {
  return Ao(t7, s2(e2));
}
function xo(t7, e2) {
  let s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r2 = 0;
  for (let i2 = s2; i2 < t7.length; ++i2)
    t7[i2] === "	" ? r2 = r2 + e2 - r2 % e2 : r2++;
  return r2;
}
function Fo(t7, e2) {
  const s2 = { quote: '"', regex: /"/g, escaped: "&quot;" }, r2 = { quote: "'", regex: /'/g, escaped: "&apos;" }, i2 = e2 === "'" ? r2 : s2, n2 = i2 === r2 ? s2 : r2;
  let a2 = i2;
  if (t7.includes(i2.quote) || t7.includes(n2.quote)) {
    a2 = (t7.match(i2.regex) || []).length > (t7.match(n2.regex) || []).length ? n2 : i2;
  }
  return a2;
}
function go(t7, e2, s2) {
  const r2 = e2 === '"' ? "'" : '"', i2 = t7.replace(/\\(.)|(["'])/gs, (t8, i3, n2) => i3 === r2 ? i3 : n2 === e2 ? "\\" + n2 : n2 || (s2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i3) ? i3 : "\\" + i3));
  return e2 + i2 + e2;
}
function Po(t7, e2) {
  (t7.comments || (t7.comments = [])).push(e2), e2.printed = false, e2.nodeDescription = function(t8) {
    const e3 = t8.type || t8.kind || "(unknown type)";
    let s2 = String(t8.name || t8.id && (typeof t8.id == "object" ? t8.id.name : t8.id) || t8.key && (typeof t8.key == "object" ? t8.key.name : t8.key) || t8.value && (typeof t8.value == "object" ? "" : String(t8.value)) || t8.operator || "");
    s2.length > 20 && (s2 = s2.slice(0, 19) + "\u2026");
    return e3 + (s2 ? " " + s2 : "");
  }(t7);
}
var To;
var bo = { inferParserByLanguage: function(t7, e2) {
  const { languages: s2 } = ao({ plugins: e2.plugins }), r2 = s2.find((e3) => {
    let { name: s3 } = e3;
    return s3.toLowerCase() === t7;
  }) || s2.find((e3) => {
    let { aliases: s3 } = e3;
    return Array.isArray(s3) && s3.includes(t7);
  }) || s2.find((e3) => {
    let { extensions: s3 } = e3;
    return Array.isArray(s3) && s3.includes(".".concat(t7));
  });
  return r2 && r2.parsers[0];
}, getStringWidth: function(t7) {
  return t7 ? oo.test(t7) ? ro(t7) : t7.length : 0;
}, getMaxContinuousCount: function(t7, e2) {
  const s2 = t7.match(new RegExp("(".concat(io(e2), ")+"), "g"));
  return s2 === null ? 0 : s2.reduce((t8, s3) => Math.max(t8, s3.length / e2.length), 0);
}, getMinNotPresentContinuousCount: function(t7, e2) {
  const s2 = t7.match(new RegExp("(".concat(io(e2), ")+"), "g"));
  if (s2 === null)
    return 0;
  const r2 = new Map();
  let i2 = 0;
  for (const t8 of s2) {
    const s3 = t8.length / e2.length;
    r2.set(s3, true), s3 > i2 && (i2 = s3);
  }
  for (let t8 = 1; t8 < i2; t8++)
    if (!r2.get(t8))
      return t8;
  return i2 + 1;
}, getPenultimate: (t7) => t7[t7.length - 2], getLast: no, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Ao, getNextNonSpaceNonCommentCharacterIndex: Co, getNextNonSpaceNonCommentCharacter: function(t7, e2, s2) {
  return t7.charAt(Co(t7, e2, s2));
}, skip: uo, skipWhitespace: ho, skipSpaces: po, skipToLineEnd: co, skipEverythingButNewLine: lo, skipInlineComment: Do, skipTrailingComment: mo, skipNewline: fo, isNextLineEmptyAfterIndex: Eo, isNextLineEmpty: function(t7, e2, s2) {
  return Eo(t7, s2(e2));
}, isPreviousLineEmpty: function(t7, e2, s2) {
  let r2 = s2(e2) - 1;
  return r2 = po(t7, r2, { backwards: true }), r2 = fo(t7, r2, { backwards: true }), r2 = po(t7, r2, { backwards: true }), r2 !== fo(t7, r2, { backwards: true });
}, hasNewline: yo, hasNewlineInRange: function(t7, e2, s2) {
  for (let r2 = e2; r2 < s2; ++r2)
    if (t7.charAt(r2) === "\n")
      return true;
  return false;
}, hasSpaces: function(t7, e2) {
  let s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r2 = po(t7, s2.backwards ? e2 - 1 : e2, s2);
  return r2 !== e2;
}, getAlignmentSize: xo, getIndentSize: function(t7, e2) {
  const s2 = t7.lastIndexOf("\n");
  return s2 === -1 ? 0 : xo(t7.slice(s2 + 1).match(/^[\t ]*/)[0], e2);
}, getPreferredQuote: Fo, printString: function(t7, e2) {
  const s2 = t7.slice(1, -1);
  return go(s2, e2.parser === "json" || e2.parser === "json5" && e2.quoteProps === "preserve" && !e2.singleQuote ? '"' : e2.__isInHtmlAttribute ? "'" : Fo(s2, e2.singleQuote ? "'" : '"').quote, !(e2.parser === "css" || e2.parser === "less" || e2.parser === "scss" || e2.__embeddedInHtml));
}, printNumber: function(t7) {
  return t7.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
}, makeString: go, addLeadingComment: function(t7, e2) {
  e2.leading = true, e2.trailing = false, Po(t7, e2);
}, addDanglingComment: function(t7, e2, s2) {
  e2.leading = false, e2.trailing = false, s2 && (e2.marker = s2), Po(t7, e2);
}, addTrailingComment: function(t7, e2) {
  e2.leading = false, e2.trailing = true, Po(t7, e2);
}, isFrontMatterNode: function(t7) {
  return t7 && t7.type === "front-matter";
}, getShebang: function(t7) {
  if (!t7.startsWith("#!"))
    return "";
  const e2 = t7.indexOf("\n");
  return e2 === -1 ? t7 : t7.slice(0, e2);
}, isNonEmptyArray: function(t7) {
  return Array.isArray(t7) && t7.length > 0;
}, createGroupIdMapper: function(t7) {
  const e2 = new WeakMap();
  return function(s2) {
    return e2.has(s2) || e2.set(s2, Symbol(t7)), e2.get(s2);
  };
} };
var So = {};
function wo() {
  if (To === void 0) {
    var t7 = new ArrayBuffer(2), e2 = new Uint8Array(t7), s2 = new Uint16Array(t7);
    if (e2[0] = 1, e2[1] = 2, s2[0] === 258)
      To = "BE";
    else {
      if (s2[0] !== 513)
        throw new Error("unable to figure out endianess");
      To = "LE";
    }
  }
  return To;
}
function Bo() {
  return Xn.location !== void 0 ? Xn.location.hostname : "";
}
function No() {
  return [];
}
function Io() {
  return 0;
}
function vo() {
  return Number.MAX_VALUE;
}
function ko() {
  return Number.MAX_VALUE;
}
function Lo() {
  return [];
}
function Oo() {
  return "Browser";
}
function Mo() {
  return Xn.navigator !== void 0 ? Xn.navigator.appVersion : "";
}
function Ro() {
}
function jo() {
}
function Uo() {
  return "javascript";
}
function _o() {
  return "browser";
}
function zo() {
  return "/tmp";
}
var Ho = zo;
var Vo = { EOL: "\n", arch: Uo, platform: _o, tmpdir: Ho, tmpDir: zo, networkInterfaces: Ro, getNetworkInterfaces: jo, release: Mo, type: Oo, cpus: Lo, totalmem: ko, freemem: vo, uptime: Io, loadavg: No, hostname: Bo, endianness: wo };
var qo = e(Object.freeze({ __proto__: null, endianness: wo, hostname: Bo, loadavg: No, uptime: Io, freemem: vo, totalmem: ko, cpus: Lo, type: Oo, release: Mo, networkInterfaces: Ro, getNetworkInterfaces: jo, arch: Uo, platform: _o, tmpDir: zo, tmpdir: Ho, EOL: "\n", default: Vo }));
var Go = { exports: {} };
var Wo = (t7) => {
  if (typeof t7 != "string")
    throw new TypeError("Expected a string");
  const e2 = t7.match(/(?:\r?\n)/g) || [];
  if (e2.length === 0)
    return;
  const s2 = e2.filter((t8) => t8 === "\r\n").length;
  return s2 > e2.length - s2 ? "\r\n" : "\n";
};
function Ko() {
  const t7 = qo;
  return Ko = function() {
    return t7;
  }, t7;
}
function Xo() {
  const t7 = (e2 = Go.exports) && e2.__esModule ? e2 : { default: e2 };
  var e2;
  return Xo = function() {
    return t7;
  }, t7;
}
Go.exports = Wo, Go.exports.graceful = (t7) => typeof t7 == "string" && Wo(t7) || "\n", Object.defineProperty(So, "__esModule", { value: true }), So.extract = function(t7) {
  const e2 = t7.match(Yo);
  return e2 ? e2[0].trimLeft() : "";
}, So.strip = function(t7) {
  const e2 = t7.match(Yo);
  return e2 && e2[0] ? t7.substring(e2[0].length) : t7;
}, So.parse = function(t7) {
  return iu(t7).pragmas;
}, So.parseWithComments = iu, So.print = function(t7) {
  let { comments: e2 = "", pragmas: s2 = {} } = t7;
  const r2 = (0, Xo().default)(e2) || Ko().EOL, i2 = " *", n2 = Object.keys(s2), a2 = n2.map((t8) => nu(t8, s2[t8])).reduce((t8, e3) => t8.concat(e3), []).map((t8) => " * " + t8 + r2).join("");
  if (!e2) {
    if (n2.length === 0)
      return "";
    if (n2.length === 1 && !Array.isArray(s2[n2[0]])) {
      const t8 = s2[n2[0]];
      return "".concat("/**", " ").concat(nu(n2[0], t8)[0]).concat(" */");
    }
  }
  const o2 = e2.split(r2).map((t8) => "".concat(i2, " ").concat(t8)).join(r2) + r2;
  return "/**" + r2 + (e2 ? o2 : "") + (e2 && n2.length ? i2 + r2 : "") + a2 + " */";
};
var Jo = /\*\/$/;
var $o = /^\/\*\*/;
var Yo = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
var Qo = /(^|\s+)\/\/([^\r\n]*)/g;
var Zo = /^(\r?\n)+/;
var tu = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
var eu = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
var su = /(\r?\n|^) *\* ?/g;
var ru = [];
function iu(t7) {
  const e2 = (0, Xo().default)(t7) || Ko().EOL;
  t7 = t7.replace($o, "").replace(Jo, "").replace(su, "$1");
  let s2 = "";
  for (; s2 !== t7; )
    s2 = t7, t7 = t7.replace(tu, "".concat(e2, "$1 $2").concat(e2));
  t7 = t7.replace(Zo, "").trimRight();
  const r2 = Object.create(null), i2 = t7.replace(eu, "").replace(Zo, "").trimRight();
  let n2;
  for (; n2 = eu.exec(t7); ) {
    const t8 = n2[2].replace(Qo, "");
    typeof r2[n2[1]] == "string" || Array.isArray(r2[n2[1]]) ? r2[n2[1]] = ru.concat(r2[n2[1]], t8) : r2[n2[1]] = t8;
  }
  return { comments: i2, pragmas: r2 };
}
function nu(t7, e2) {
  return ru.concat(e2).map((e3) => "@".concat(t7, " ").concat(e3).trim());
}
var au = { guessEndOfLine: function(t7) {
  const e2 = t7.indexOf("\r");
  return e2 >= 0 ? t7.charAt(e2 + 1) === "\n" ? "crlf" : "cr" : "lf";
}, convertEndOfLineToChars: function(t7) {
  switch (t7) {
    case "cr":
      return "\r";
    case "crlf":
      return "\r\n";
    default:
      return "\n";
  }
}, countEndOfLineChars: function(t7, e2) {
  let s2;
  if (e2 === "\n")
    s2 = /\n/g;
  else if (e2 === "\r")
    s2 = /\r/g;
  else {
    if (e2 !== "\r\n")
      throw new Error('Unexpected "eol" '.concat(JSON.stringify(e2), "."));
    s2 = /\r\n/g;
  }
  const r2 = t7.match(s2);
  return r2 ? r2.length : 0;
}, normalizeEndOfLine: function(t7) {
  return t7.replace(/\r\n?/g, "\n");
} };
var { parseWithComments: ou, strip: uu, extract: hu, print: pu } = So;
var { getShebang: cu } = bo;
var { normalizeEndOfLine: lu } = au;
function du(t7) {
  const e2 = cu(t7);
  e2 && (t7 = t7.slice(e2.length + 1));
  const s2 = hu(t7), { pragmas: r2, comments: i2 } = ou(s2);
  return { shebang: e2, text: t7, pragmas: r2, comments: i2 };
}
var Du = { hasPragma: function(t7) {
  const e2 = Object.keys(du(t7).pragmas);
  return e2.includes("prettier") || e2.includes("format");
}, insertPragma: function(t7) {
  const { shebang: e2, text: s2, pragmas: r2, comments: i2 } = du(t7), n2 = uu(s2), a2 = pu({ pragmas: Object.assign({ format: "" }, r2), comments: i2.trimStart() });
  return (e2 ? "".concat(e2, "\n") : "") + lu(a2) + (n2.startsWith("\n") ? "\n" : "\n\n") + n2;
} };
var { isNonEmptyArray: mu } = bo;
function fu(t7, e2) {
  const { ignoreDecorators: s2 } = e2 || {};
  if (!s2) {
    const e3 = t7.declaration && t7.declaration.decorators || t7.decorators;
    if (mu(e3))
      return fu(e3[0]);
  }
  return t7.range ? t7.range[0] : t7.start;
}
function yu(t7) {
  return t7.range ? t7.range[1] : t7.end;
}
function Eu(t7, e2) {
  return fu(t7) === fu(e2);
}
var Au = { locStart: fu, locEnd: yu, hasSameLocStart: Eu, hasSameLoc: function(t7, e2) {
  return Eu(t7, e2) && function(t8, e3) {
    return yu(t8) === yu(e3);
  }(t7, e2);
} };
var { hasPragma: Cu } = Du;
var { locStart: xu, locEnd: Fu } = Au;
var gu = function(t7) {
  return t7 = typeof t7 == "function" ? { parse: t7 } : t7, Object.assign({ astFormat: "estree", hasPragma: Cu, locStart: xu, locEnd: Fu }, t7);
};
var Pu = function(t7, e2) {
  const s2 = new SyntaxError(t7 + " (" + e2.start.line + ":" + e2.start.column + ")");
  return s2.loc = e2, s2;
};
var Tu = Pu;
var bu = function(t7) {
  const { message: e2, loc: s2 } = t7;
  return Tu(e2.replace(/ \(.*\)/, ""), { start: { line: s2 ? s2.line : 0, column: s2 ? s2.column + 1 : 0 } });
};
var Su = {};
var wu = { exports: {} };
!function() {
  function t7(t8) {
    if (t8 == null)
      return false;
    switch (t8.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return true;
    }
    return false;
  }
  function e2(t8) {
    switch (t8.type) {
      case "IfStatement":
        return t8.alternate != null ? t8.alternate : t8.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return t8.body;
    }
    return null;
  }
  wu.exports = { isExpression: function(t8) {
    if (t8 == null)
      return false;
    switch (t8.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return true;
    }
    return false;
  }, isStatement: t7, isIterationStatement: function(t8) {
    if (t8 == null)
      return false;
    switch (t8.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return true;
    }
    return false;
  }, isSourceElement: function(e3) {
    return t7(e3) || e3 != null && e3.type === "FunctionDeclaration";
  }, isProblematicIfStatement: function(t8) {
    var s2;
    if (t8.type !== "IfStatement")
      return false;
    if (t8.alternate == null)
      return false;
    s2 = t8.consequent;
    do {
      if (s2.type === "IfStatement" && s2.alternate == null)
        return true;
      s2 = e2(s2);
    } while (s2);
    return false;
  }, trailingStatement: e2 };
}();
var Bu = { exports: {} };
!function() {
  var t7, e2, s2, r2, i2, n2;
  function a2(t8) {
    return t8 <= 65535 ? String.fromCharCode(t8) : String.fromCharCode(Math.floor((t8 - 65536) / 1024) + 55296) + String.fromCharCode((t8 - 65536) % 1024 + 56320);
  }
  for (e2 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t7 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, s2 = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], r2 = new Array(128), n2 = 0; n2 < 128; ++n2)
    r2[n2] = n2 >= 97 && n2 <= 122 || n2 >= 65 && n2 <= 90 || n2 === 36 || n2 === 95;
  for (i2 = new Array(128), n2 = 0; n2 < 128; ++n2)
    i2[n2] = n2 >= 97 && n2 <= 122 || n2 >= 65 && n2 <= 90 || n2 >= 48 && n2 <= 57 || n2 === 36 || n2 === 95;
  Bu.exports = { isDecimalDigit: function(t8) {
    return 48 <= t8 && t8 <= 57;
  }, isHexDigit: function(t8) {
    return 48 <= t8 && t8 <= 57 || 97 <= t8 && t8 <= 102 || 65 <= t8 && t8 <= 70;
  }, isOctalDigit: function(t8) {
    return t8 >= 48 && t8 <= 55;
  }, isWhiteSpace: function(t8) {
    return t8 === 32 || t8 === 9 || t8 === 11 || t8 === 12 || t8 === 160 || t8 >= 5760 && s2.indexOf(t8) >= 0;
  }, isLineTerminator: function(t8) {
    return t8 === 10 || t8 === 13 || t8 === 8232 || t8 === 8233;
  }, isIdentifierStartES5: function(t8) {
    return t8 < 128 ? r2[t8] : e2.NonAsciiIdentifierStart.test(a2(t8));
  }, isIdentifierPartES5: function(t8) {
    return t8 < 128 ? i2[t8] : e2.NonAsciiIdentifierPart.test(a2(t8));
  }, isIdentifierStartES6: function(e3) {
    return e3 < 128 ? r2[e3] : t7.NonAsciiIdentifierStart.test(a2(e3));
  }, isIdentifierPartES6: function(e3) {
    return e3 < 128 ? i2[e3] : t7.NonAsciiIdentifierPart.test(a2(e3));
  } };
}();
var Nu = { exports: {} };
!function() {
  var t7 = Bu.exports;
  function e2(t8, e3) {
    return !(!e3 && t8 === "yield") && s2(t8, e3);
  }
  function s2(t8, e3) {
    if (e3 && function(t9) {
      switch (t9) {
        case "implements":
        case "interface":
        case "package":
        case "private":
        case "protected":
        case "public":
        case "static":
        case "let":
          return true;
        default:
          return false;
      }
    }(t8))
      return true;
    switch (t8.length) {
      case 2:
        return t8 === "if" || t8 === "in" || t8 === "do";
      case 3:
        return t8 === "var" || t8 === "for" || t8 === "new" || t8 === "try";
      case 4:
        return t8 === "this" || t8 === "else" || t8 === "case" || t8 === "void" || t8 === "with" || t8 === "enum";
      case 5:
        return t8 === "while" || t8 === "break" || t8 === "catch" || t8 === "throw" || t8 === "const" || t8 === "yield" || t8 === "class" || t8 === "super";
      case 6:
        return t8 === "return" || t8 === "typeof" || t8 === "delete" || t8 === "switch" || t8 === "export" || t8 === "import";
      case 7:
        return t8 === "default" || t8 === "finally" || t8 === "extends";
      case 8:
        return t8 === "function" || t8 === "continue" || t8 === "debugger";
      case 10:
        return t8 === "instanceof";
      default:
        return false;
    }
  }
  function r2(t8, s3) {
    return t8 === "null" || t8 === "true" || t8 === "false" || e2(t8, s3);
  }
  function i2(t8, e3) {
    return t8 === "null" || t8 === "true" || t8 === "false" || s2(t8, e3);
  }
  function n2(e3) {
    var s3, r3, i3;
    if (e3.length === 0)
      return false;
    if (i3 = e3.charCodeAt(0), !t7.isIdentifierStartES5(i3))
      return false;
    for (s3 = 1, r3 = e3.length; s3 < r3; ++s3)
      if (i3 = e3.charCodeAt(s3), !t7.isIdentifierPartES5(i3))
        return false;
    return true;
  }
  function a2(e3) {
    var s3, r3, i3, n3, a3;
    if (e3.length === 0)
      return false;
    for (a3 = t7.isIdentifierStartES6, s3 = 0, r3 = e3.length; s3 < r3; ++s3) {
      if (55296 <= (i3 = e3.charCodeAt(s3)) && i3 <= 56319) {
        if (++s3 >= r3)
          return false;
        if (!(56320 <= (n3 = e3.charCodeAt(s3)) && n3 <= 57343))
          return false;
        i3 = 1024 * (i3 - 55296) + (n3 - 56320) + 65536;
      }
      if (!a3(i3))
        return false;
      a3 = t7.isIdentifierPartES6;
    }
    return true;
  }
  Nu.exports = { isKeywordES5: e2, isKeywordES6: s2, isReservedWordES5: r2, isReservedWordES6: i2, isRestrictedWord: function(t8) {
    return t8 === "eval" || t8 === "arguments";
  }, isIdentifierNameES5: n2, isIdentifierNameES6: a2, isIdentifierES5: function(t8, e3) {
    return n2(t8) && !r2(t8, e3);
  }, isIdentifierES6: function(t8, e3) {
    return a2(t8) && !i2(t8, e3);
  } };
}(), Su.ast = wu.exports, Su.code = Bu.exports, Su.keyword = Nu.exports;
var Iu = Su.keyword.isIdentifierNameES5;
var { getLast: vu, hasNewline: ku, skipWhitespace: Lu, isNonEmptyArray: Ou, isNextLineEmptyAfterIndex: Mu, getStringWidth: Ru } = bo;
var { locStart: ju, locEnd: Uu, hasSameLocStart: _u } = Au;
var zu = new RegExp("^".concat("(?:(?=.)\\s)", "*:"));
var Hu = new RegExp("^".concat("(?:(?=.)\\s)", "*::"));
function Vu(t7) {
  return t7.type === "Block" || t7.type === "CommentBlock" || t7.type === "MultiLine";
}
function qu(t7) {
  return t7.type === "Line" || t7.type === "CommentLine" || t7.type === "SingleLine" || t7.type === "HashbangComment" || t7.type === "HTMLOpen" || t7.type === "HTMLClose";
}
var Gu = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
function Wu(t7) {
  return t7 && Gu.has(t7.type);
}
function Ku(t7) {
  return t7.type === "NumericLiteral" || t7.type === "Literal" && typeof t7.value == "number";
}
function Xu(t7) {
  return t7.type === "StringLiteral" || t7.type === "Literal" && typeof t7.value == "string";
}
function Ju(t7) {
  return t7.type === "FunctionExpression" || t7.type === "ArrowFunctionExpression";
}
function $u(t7) {
  return rh(t7) && t7.callee.type === "Identifier" && (t7.callee.name === "async" || t7.callee.name === "inject" || t7.callee.name === "fakeAsync");
}
function Yu(t7) {
  return t7.type === "JSXElement" || t7.type === "JSXFragment";
}
function Qu(t7) {
  return t7.kind === "get" || t7.kind === "set";
}
function Zu(t7) {
  return Qu(t7) || _u(t7, t7.value);
}
var th = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
var eh = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
var sh = /^(?:skip|[fx]?(?:it|describe|test))$/;
function rh(t7) {
  return t7 && (t7.type === "CallExpression" || t7.type === "OptionalCallExpression");
}
function ih(t7) {
  return t7 && (t7.type === "MemberExpression" || t7.type === "OptionalMemberExpression");
}
function nh(t7) {
  return /^(?:\d+|\d+\.\d+)$/.test(t7);
}
function ah(t7) {
  return t7.quasis.some((t8) => t8.value.raw.includes("\n"));
}
function oh(t7) {
  return t7.extra ? t7.extra.raw : t7.raw;
}
var uh = { "==": true, "!=": true, "===": true, "!==": true };
var hh = { "*": true, "/": true, "%": true };
var ph = { ">>": true, ">>>": true, "<<": true };
var ch = {};
for (const [t7, e2] of [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].entries())
  for (const s2 of e2)
    ch[s2] = t7;
function lh(t7) {
  return ch[t7];
}
var dh = new WeakMap();
function Dh(t7) {
  if (dh.has(t7))
    return dh.get(t7);
  const e2 = [];
  return t7.this && e2.push(t7.this), Array.isArray(t7.parameters) ? e2.push(...t7.parameters) : Array.isArray(t7.params) && e2.push(...t7.params), t7.rest && e2.push(t7.rest), dh.set(t7, e2), e2;
}
var mh = new WeakMap();
function fh(t7) {
  if (mh.has(t7))
    return mh.get(t7);
  let e2 = t7.arguments;
  return t7.type === "ImportExpression" && (e2 = [t7.source], t7.attributes && e2.push(t7.attributes)), mh.set(t7, e2), e2;
}
function yh(t7) {
  return t7.value.trim() === "prettier-ignore" && !t7.unignore;
}
function Eh(t7) {
  return t7 && (t7.prettierIgnore || xh(t7, Ah.PrettierIgnore));
}
var Ah = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 };
var Ch = (t7, e2) => {
  if (typeof t7 == "function" && (e2 = t7, t7 = 0), t7 || e2)
    return (s2, r2, i2) => !(t7 & Ah.Leading && !s2.leading || t7 & Ah.Trailing && !s2.trailing || t7 & Ah.Dangling && (s2.leading || s2.trailing) || t7 & Ah.Block && !Vu(s2) || t7 & Ah.Line && !qu(s2) || t7 & Ah.First && r2 !== 0 || t7 & Ah.Last && r2 !== i2.length - 1 || t7 & Ah.PrettierIgnore && !yh(s2) || e2 && !e2(s2));
};
function xh(t7, e2, s2) {
  if (!t7 || !Ou(t7.comments))
    return false;
  const r2 = Ch(e2, s2);
  return !r2 || t7.comments.some(r2);
}
function Fh(t7, e2, s2) {
  if (!t7 || !Array.isArray(t7.comments))
    return [];
  const r2 = Ch(e2, s2);
  return r2 ? t7.comments.filter(r2) : t7.comments;
}
function gh(t7) {
  return rh(t7) || t7.type === "NewExpression" || t7.type === "ImportExpression";
}
var Ph = { getFunctionParameters: Dh, iterateFunctionParametersPath: function(t7, e2) {
  const s2 = t7.getValue();
  let r2 = 0;
  const i2 = (t8) => e2(t8, r2++);
  s2.this && t7.call(i2, "this"), Array.isArray(s2.parameters) ? t7.each(i2, "parameters") : Array.isArray(s2.params) && t7.each(i2, "params"), s2.rest && t7.call(i2, "rest");
}, getCallArguments: fh, iterateCallArgumentsPath: function(t7, e2) {
  const s2 = t7.getValue();
  s2.type === "ImportExpression" ? (t7.call((t8) => e2(t8, 0), "source"), s2.attributes && t7.call((t8) => e2(t8, 1), "attributes")) : t7.each(e2, "arguments");
}, hasRestParameter: function(t7) {
  if (t7.rest)
    return true;
  const e2 = Dh(t7);
  return e2.length > 0 && vu(e2).type === "RestElement";
}, getLeftSide: function(t7) {
  return t7.expressions ? t7.expressions[0] : t7.left || t7.test || t7.callee || t7.object || t7.tag || t7.argument || t7.expression;
}, getLeftSidePathName: function(t7, e2) {
  if (e2.expressions)
    return ["expressions", 0];
  if (e2.left)
    return ["left"];
  if (e2.test)
    return ["test"];
  if (e2.object)
    return ["object"];
  if (e2.callee)
    return ["callee"];
  if (e2.tag)
    return ["tag"];
  if (e2.argument)
    return ["argument"];
  if (e2.expression)
    return ["expression"];
  throw new Error("Unexpected node has no left side.");
}, getParentExportDeclaration: function(t7) {
  const e2 = t7.getParentNode();
  return t7.getName() === "declaration" && Wu(e2) ? e2 : null;
}, getTypeScriptMappedTypeModifier: function(t7, e2) {
  return t7 === "+" ? "+" + e2 : t7 === "-" ? "-" + e2 : e2;
}, hasFlowAnnotationComment: function(t7) {
  return Ou(t7) && Vu(t7[0]) && Hu.test(t7[0].value);
}, hasFlowShorthandAnnotationComment: function(t7) {
  return t7.extra && t7.extra.parenthesized && Ou(t7.trailingComments) && Vu(t7.trailingComments[0]) && zu.test(t7.trailingComments[0].value);
}, hasLeadingOwnLineComment: function(t7, e2) {
  return Yu(e2) ? Eh(e2) : xh(e2, Ah.Leading, (e3) => ku(t7, Uu(e3)));
}, hasNakedLeftSide: function(t7) {
  return t7.type === "AssignmentExpression" || t7.type === "BinaryExpression" || t7.type === "LogicalExpression" || t7.type === "NGPipeExpression" || t7.type === "ConditionalExpression" || rh(t7) || ih(t7) || t7.type === "SequenceExpression" || t7.type === "TaggedTemplateExpression" || t7.type === "BindExpression" || t7.type === "UpdateExpression" && !t7.prefix || t7.type === "TSAsExpression" || t7.type === "TSNonNullExpression";
}, hasNode: function t2(e2, s2) {
  if (!e2 || typeof e2 != "object")
    return false;
  if (Array.isArray(e2))
    return e2.some((e3) => t2(e3, s2));
  const r2 = s2(e2);
  return typeof r2 == "boolean" ? r2 : Object.values(e2).some((e3) => t2(e3, s2));
}, hasIgnoreComment: function(t7) {
  return Eh(t7.getValue());
}, hasNodeIgnoreComment: Eh, identity: function(t7) {
  return t7;
}, isBinaryish: function(t7) {
  return th.has(t7.type);
}, isBlockComment: Vu, isCallLikeExpression: gh, isEnabledHackPipeline: function(t7) {
  return Boolean(t7.__isUsingHackPipeline);
}, isLineComment: qu, isPrettierIgnoreComment: yh, isCallExpression: rh, isMemberExpression: ih, isExportDeclaration: Wu, isFlowAnnotationComment: function(t7, e2) {
  const s2 = ju(e2), r2 = Lu(t7, Uu(e2));
  return r2 !== false && t7.slice(s2, s2 + 2) === "/*" && t7.slice(r2, r2 + 2) === "*/";
}, isFunctionCompositionArgs: function(t7) {
  if (t7.length <= 1)
    return false;
  let e2 = 0;
  for (const s2 of t7)
    if (Ju(s2)) {
      if (e2 += 1, e2 > 1)
        return true;
    } else if (rh(s2)) {
      for (const t8 of s2.arguments)
        if (Ju(t8))
          return true;
    }
  return false;
}, isFunctionNotation: Zu, isFunctionOrArrowExpression: Ju, isGetterOrSetter: Qu, isJestEachTemplateLiteral: function(t7, e2) {
  const s2 = /^[fx]?(?:describe|it|test)$/;
  return e2.type === "TaggedTemplateExpression" && e2.quasi === t7 && e2.tag.type === "MemberExpression" && e2.tag.property.type === "Identifier" && e2.tag.property.name === "each" && (e2.tag.object.type === "Identifier" && s2.test(e2.tag.object.name) || e2.tag.object.type === "MemberExpression" && e2.tag.object.property.type === "Identifier" && (e2.tag.object.property.name === "only" || e2.tag.object.property.name === "skip") && e2.tag.object.object.type === "Identifier" && s2.test(e2.tag.object.object.name));
}, isJsxNode: Yu, isLiteral: function(t7) {
  return t7.type === "BooleanLiteral" || t7.type === "DirectiveLiteral" || t7.type === "Literal" || t7.type === "NullLiteral" || t7.type === "NumericLiteral" || t7.type === "BigIntLiteral" || t7.type === "DecimalLiteral" || t7.type === "RegExpLiteral" || t7.type === "StringLiteral" || t7.type === "TemplateLiteral" || t7.type === "TSTypeLiteral" || t7.type === "JSXText";
}, isLongCurriedCallExpression: function(t7) {
  const e2 = t7.getValue(), s2 = t7.getParentNode();
  return rh(e2) && rh(s2) && s2.callee === e2 && e2.arguments.length > s2.arguments.length && s2.arguments.length > 0;
}, isSimpleCallArgument: function t3(e2, s2) {
  if (s2 >= 2)
    return false;
  const r2 = (e3) => t3(e3, s2 + 1), i2 = e2.type === "Literal" && "regex" in e2 && e2.regex.pattern || e2.type === "RegExpLiteral" && e2.pattern;
  return !(i2 && Ru(i2) > 5) && (e2.type === "Literal" || e2.type === "BigIntLiteral" || e2.type === "DecimalLiteral" || e2.type === "BooleanLiteral" || e2.type === "NullLiteral" || e2.type === "NumericLiteral" || e2.type === "RegExpLiteral" || e2.type === "StringLiteral" || e2.type === "Identifier" || e2.type === "ThisExpression" || e2.type === "Super" || e2.type === "PrivateName" || e2.type === "PrivateIdentifier" || e2.type === "ArgumentPlaceholder" || e2.type === "Import" || (e2.type === "TemplateLiteral" ? e2.quasis.every((t7) => !t7.value.raw.includes("\n")) && e2.expressions.every(r2) : e2.type === "ObjectExpression" ? e2.properties.every((t7) => !t7.computed && (t7.shorthand || t7.value && r2(t7.value))) : e2.type === "ArrayExpression" ? e2.elements.every((t7) => t7 === null || r2(t7)) : gh(e2) ? (e2.type === "ImportExpression" || t3(e2.callee, s2)) && fh(e2).every(r2) : ih(e2) ? t3(e2.object, s2) && t3(e2.property, s2) : e2.type !== "UnaryExpression" || e2.operator !== "!" && e2.operator !== "-" ? e2.type === "TSNonNullExpression" && t3(e2.expression, s2) : t3(e2.argument, s2)));
}, isMemberish: function(t7) {
  return ih(t7) || t7.type === "BindExpression" && Boolean(t7.object);
}, isNumericLiteral: Ku, isSignedNumericLiteral: function(t7) {
  return t7.type === "UnaryExpression" && (t7.operator === "+" || t7.operator === "-") && Ku(t7.argument);
}, isObjectProperty: function(t7) {
  return t7 && (t7.type === "ObjectProperty" || t7.type === "Property" && !t7.method && t7.kind === "init");
}, isObjectType: function(t7) {
  return t7.type === "ObjectTypeAnnotation" || t7.type === "TSTypeLiteral" || t7.type === "TSMappedType";
}, isObjectTypePropertyAFunction: function(t7) {
  return !(t7.type !== "ObjectTypeProperty" && t7.type !== "ObjectTypeInternalSlot" || t7.value.type !== "FunctionTypeAnnotation" || t7.static || Zu(t7));
}, isSimpleType: function(t7) {
  return !!t7 && (!(t7.type !== "GenericTypeAnnotation" && t7.type !== "TSTypeReference" || t7.typeParameters) || !!eh.has(t7.type));
}, isSimpleNumber: nh, isSimpleTemplateLiteral: function(t7) {
  let e2 = "expressions";
  t7.type === "TSTemplateLiteralType" && (e2 = "types");
  const s2 = t7[e2];
  return s2.length !== 0 && s2.every((t8) => {
    if (xh(t8))
      return false;
    if (t8.type === "Identifier" || t8.type === "ThisExpression")
      return true;
    if (ih(t8)) {
      let e3 = t8;
      for (; ih(e3); ) {
        if (e3.property.type !== "Identifier" && e3.property.type !== "Literal" && e3.property.type !== "StringLiteral" && e3.property.type !== "NumericLiteral")
          return false;
        if (e3 = e3.object, xh(e3))
          return false;
      }
      return e3.type === "Identifier" || e3.type === "ThisExpression";
    }
    return false;
  });
}, isStringLiteral: Xu, isStringPropSafeToUnquote: function(t7, e2) {
  return e2.parser !== "json" && Xu(t7.key) && oh(t7.key).slice(1, -1) === t7.key.value && (Iu(t7.key.value) && !(e2.parser === "babel-ts" && t7.type === "ClassProperty" || e2.parser === "typescript" && t7.type === "PropertyDefinition") || nh(t7.key.value) && String(Number(t7.key.value)) === t7.key.value && (e2.parser === "babel" || e2.parser === "espree" || e2.parser === "meriyah" || e2.parser === "__babel_estree"));
}, isTemplateOnItsOwnLine: function(t7, e2) {
  return (t7.type === "TemplateLiteral" && ah(t7) || t7.type === "TaggedTemplateExpression" && ah(t7.quasi)) && !ku(e2, ju(t7), { backwards: true });
}, isTestCall: function t4(e2, s2) {
  if (e2.type !== "CallExpression")
    return false;
  if (e2.arguments.length === 1) {
    if ($u(e2) && s2 && t4(s2))
      return Ju(e2.arguments[0]);
    if (function(t7) {
      return t7.callee.type === "Identifier" && /^(?:before|after)(?:Each|All)$/.test(t7.callee.name) && t7.arguments.length === 1;
    }(e2))
      return $u(e2.arguments[0]);
  } else if ((e2.arguments.length === 2 || e2.arguments.length === 3) && (e2.callee.type === "Identifier" && sh.test(e2.callee.name) || function(t7) {
    return ih(t7.callee) && t7.callee.object.type === "Identifier" && t7.callee.property.type === "Identifier" && sh.test(t7.callee.object.name) && (t7.callee.property.name === "only" || t7.callee.property.name === "skip");
  }(e2)) && (function(t7) {
    return t7.type === "TemplateLiteral";
  }(e2.arguments[0]) || Xu(e2.arguments[0])))
    return !(e2.arguments[2] && !Ku(e2.arguments[2])) && ((e2.arguments.length === 2 ? Ju(e2.arguments[1]) : function(t7) {
      return t7.type === "FunctionExpression" || t7.type === "ArrowFunctionExpression" && t7.body.type === "BlockStatement";
    }(e2.arguments[1]) && Dh(e2.arguments[1]).length <= 1) || $u(e2.arguments[1]));
  return false;
}, isTheOnlyJsxElementInMarkdown: function(t7, e2) {
  if (t7.parentParser !== "markdown" && t7.parentParser !== "mdx")
    return false;
  const s2 = e2.getNode();
  if (!s2.expression || !Yu(s2.expression))
    return false;
  const r2 = e2.getParentNode();
  return r2.type === "Program" && r2.body.length === 1;
}, isTSXFile: function(t7) {
  return t7.filepath && /\.tsx$/i.test(t7.filepath);
}, isTypeAnnotationAFunction: function(t7) {
  return !(t7.type !== "TypeAnnotation" && t7.type !== "TSTypeAnnotation" || t7.typeAnnotation.type !== "FunctionTypeAnnotation" || t7.static || _u(t7, t7.typeAnnotation));
}, isNextLineEmpty: (t7, e2) => {
  let { originalText: s2 } = e2;
  return Mu(s2, Uu(t7));
}, needsHardlineAfterDanglingComment: function(t7) {
  if (!xh(t7))
    return false;
  const e2 = vu(Fh(t7, Ah.Dangling));
  return e2 && !Vu(e2);
}, rawText: oh, shouldPrintComma: function(t7) {
  let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
  return t7.trailingComma === "es5" && e2 === "es5" || t7.trailingComma === "all" && (e2 === "all" || e2 === "es5");
}, isBitwiseOperator: function(t7) {
  return Boolean(ph[t7]) || t7 === "|" || t7 === "^" || t7 === "&";
}, shouldFlatten: function(t7, e2) {
  return lh(e2) === lh(t7) && (t7 !== "**" && ((!uh[t7] || !uh[e2]) && (!(e2 === "%" && hh[t7] || t7 === "%" && hh[e2]) && ((e2 === t7 || !hh[e2] || !hh[t7]) && (!ph[t7] || !ph[e2])))));
}, startsWithNoLookaheadToken: function t5(e2, s2) {
  switch ((e2 = function(t7) {
    for (; t7.left; )
      t7 = t7.left;
    return t7;
  }(e2)).type) {
    case "FunctionExpression":
    case "ClassExpression":
    case "DoExpression":
      return s2;
    case "ObjectExpression":
      return true;
    case "MemberExpression":
    case "OptionalMemberExpression":
      return t5(e2.object, s2);
    case "TaggedTemplateExpression":
      return e2.tag.type !== "FunctionExpression" && t5(e2.tag, s2);
    case "CallExpression":
    case "OptionalCallExpression":
      return e2.callee.type !== "FunctionExpression" && t5(e2.callee, s2);
    case "ConditionalExpression":
      return t5(e2.test, s2);
    case "UpdateExpression":
      return !e2.prefix && t5(e2.argument, s2);
    case "BindExpression":
      return e2.object && t5(e2.object, s2);
    case "SequenceExpression":
      return t5(e2.expressions[0], s2);
    case "TSAsExpression":
    case "TSNonNullExpression":
      return t5(e2.expression, s2);
    default:
      return false;
  }
}, getPrecedence: lh, hasComment: xh, getComments: Fh, CommentCheckFlags: Ah };
var { getLast: Th, hasNewline: bh, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Sh, getNextNonSpaceNonCommentCharacter: wh, hasNewlineInRange: Bh, addLeadingComment: Nh, addTrailingComment: Ih, addDanglingComment: vh, getNextNonSpaceNonCommentCharacterIndex: kh, isNonEmptyArray: Lh } = bo;
var { isBlockComment: Oh, getFunctionParameters: Mh, isPrettierIgnoreComment: Rh, isJsxNode: jh, hasFlowShorthandAnnotationComment: Uh, hasFlowAnnotationComment: _h, hasIgnoreComment: zh, isCallLikeExpression: Hh, getCallArguments: Vh, isCallExpression: qh, isMemberExpression: Gh, isObjectProperty: Wh, getComments: Kh, CommentCheckFlags: Xh } = Ph;
var { locStart: Jh, locEnd: $h } = Au;
function Yh(t7, e2) {
  const s2 = (t7.body || t7.properties).find((t8) => {
    let { type: e3 } = t8;
    return e3 !== "EmptyStatement";
  });
  s2 ? Nh(s2, e2) : vh(t7, e2);
}
function Qh(t7, e2) {
  t7.type === "BlockStatement" ? Yh(t7, e2) : Nh(t7, e2);
}
function Zh(t7) {
  let { comment: e2, followingNode: s2 } = t7;
  return !(!s2 || !wp(e2)) && (Nh(s2, e2), true);
}
function tp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2, text: n2 } = t7;
  if (!r2 || r2.type !== "IfStatement" || !i2)
    return false;
  return wh(n2, e2, $h) === ")" ? (Ih(s2, e2), true) : s2 === r2.consequent && i2 === r2.alternate ? (s2.type === "BlockStatement" ? Ih(s2, e2) : vh(r2, e2), true) : i2.type === "BlockStatement" ? (Yh(i2, e2), true) : i2.type === "IfStatement" ? (Qh(i2.consequent, e2), true) : r2.consequent === i2 && (Nh(i2, e2), true);
}
function ep(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2, text: n2 } = t7;
  if (!r2 || r2.type !== "WhileStatement" || !i2)
    return false;
  return wh(n2, e2, $h) === ")" ? (Ih(s2, e2), true) : i2.type === "BlockStatement" ? (Yh(i2, e2), true) : r2.body === i2 && (Nh(i2, e2), true);
}
function sp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2 } = t7;
  return !(!r2 || r2.type !== "TryStatement" && r2.type !== "CatchClause" || !i2) && (r2.type === "CatchClause" && s2 ? (Ih(s2, e2), true) : i2.type === "BlockStatement" ? (Yh(i2, e2), true) : i2.type === "TryStatement" ? (Qh(i2.finalizer, e2), true) : i2.type === "CatchClause" && (Qh(i2.body, e2), true));
}
function rp(t7) {
  let { comment: e2, enclosingNode: s2, followingNode: r2 } = t7;
  return !(!Gh(s2) || !r2 || r2.type !== "Identifier") && (Nh(s2, e2), true);
}
function ip(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2, text: n2 } = t7;
  const a2 = s2 && !Bh(n2, $h(s2), Jh(e2));
  return !(s2 && a2 || !r2 || r2.type !== "ConditionalExpression" && r2.type !== "TSConditionalType" || !i2) && (Nh(i2, e2), true);
}
function np(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2 } = t7;
  return !(!Wh(r2) || !r2.shorthand || r2.key !== s2 || r2.value.type !== "AssignmentPattern") && (Ih(r2.value.left, e2), true);
}
function ap(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2 } = t7;
  if (r2 && (r2.type === "ClassDeclaration" || r2.type === "ClassExpression" || r2.type === "DeclareClass" || r2.type === "DeclareInterface" || r2.type === "InterfaceDeclaration" || r2.type === "TSInterfaceDeclaration")) {
    if (Lh(r2.decorators) && (!i2 || i2.type !== "Decorator"))
      return Ih(Th(r2.decorators), e2), true;
    if (r2.body && i2 === r2.body)
      return Yh(r2.body, e2), true;
    if (i2) {
      for (const t8 of ["implements", "extends", "mixins"])
        if (r2[t8] && i2 === r2[t8][0])
          return !s2 || s2 !== r2.id && s2 !== r2.typeParameters && s2 !== r2.superClass ? vh(r2, e2, t8) : Ih(s2, e2), true;
    }
  }
  return false;
}
function op(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, text: i2 } = t7;
  return (r2 && s2 && (r2.type === "Property" || r2.type === "TSDeclareMethod" || r2.type === "TSAbstractMethodDefinition") && s2.type === "Identifier" && r2.key === s2 && wh(i2, s2, $h) !== ":" || !(!s2 || !r2 || s2.type !== "Decorator" || r2.type !== "ClassMethod" && r2.type !== "ClassProperty" && r2.type !== "PropertyDefinition" && r2.type !== "TSAbstractPropertyDefinition" && r2.type !== "TSAbstractMethodDefinition" && r2.type !== "TSDeclareMethod" && r2.type !== "MethodDefinition")) && (Ih(s2, e2), true);
}
function up(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, text: i2 } = t7;
  return wh(i2, e2, $h) === "(" && (!(!s2 || !r2 || r2.type !== "FunctionDeclaration" && r2.type !== "FunctionExpression" && r2.type !== "ClassMethod" && r2.type !== "MethodDefinition" && r2.type !== "ObjectMethod") && (Ih(s2, e2), true));
}
function hp(t7) {
  let { comment: e2, enclosingNode: s2, text: r2 } = t7;
  if (!s2 || s2.type !== "ArrowFunctionExpression")
    return false;
  const i2 = kh(r2, e2, $h);
  return i2 !== false && r2.slice(i2, i2 + 2) === "=>" && (vh(s2, e2), true);
}
function pp(t7) {
  let { comment: e2, enclosingNode: s2, text: r2 } = t7;
  return wh(r2, e2, $h) === ")" && (s2 && (Sp(s2) && Mh(s2).length === 0 || Hh(s2) && Vh(s2).length === 0) ? (vh(s2, e2), true) : !(!s2 || s2.type !== "MethodDefinition" && s2.type !== "TSAbstractMethodDefinition" || Mh(s2.value).length !== 0) && (vh(s2.value, e2), true));
}
function cp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2, text: n2 } = t7;
  if (s2 && s2.type === "FunctionTypeParam" && r2 && r2.type === "FunctionTypeAnnotation" && i2 && i2.type !== "FunctionTypeParam")
    return Ih(s2, e2), true;
  if (s2 && (s2.type === "Identifier" || s2.type === "AssignmentPattern") && r2 && Sp(r2) && wh(n2, e2, $h) === ")")
    return Ih(s2, e2), true;
  if (r2 && r2.type === "FunctionDeclaration" && i2 && i2.type === "BlockStatement") {
    const t8 = (() => {
      const t9 = Mh(r2);
      if (t9.length > 0)
        return Sh(n2, $h(Th(t9)));
      const e3 = Sh(n2, $h(r2.id));
      return e3 !== false && Sh(n2, e3 + 1);
    })();
    if (Jh(e2) > t8)
      return Yh(i2, e2), true;
  }
  return false;
}
function lp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "ImportSpecifier") && (Nh(s2, e2), true);
}
function dp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "LabeledStatement") && (Nh(s2, e2), true);
}
function Dp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "ContinueStatement" && s2.type !== "BreakStatement" || s2.label) && (Ih(s2, e2), true);
}
function mp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2 } = t7;
  return !!(qh(r2) && s2 && r2.callee === s2 && r2.arguments.length > 0) && (Nh(r2.arguments[0], e2), true);
}
function fp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2 } = t7;
  return !r2 || r2.type !== "UnionTypeAnnotation" && r2.type !== "TSUnionType" ? (i2 && (i2.type === "UnionTypeAnnotation" || i2.type === "TSUnionType") && Rh(e2) && (i2.types[0].prettierIgnore = true, e2.unignore = true), false) : (Rh(e2) && (i2.prettierIgnore = true, e2.unignore = true), !!s2 && (Ih(s2, e2), true));
}
function yp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !!Wh(s2) && (Nh(s2, e2), true);
}
function Ep(t7) {
  let { comment: e2, enclosingNode: s2, followingNode: r2, ast: i2, isLastComment: n2 } = t7;
  return i2 && i2.body && i2.body.length === 0 ? (n2 ? vh(i2, e2) : Nh(i2, e2), true) : s2 && s2.type === "Program" && s2.body.length === 0 && !Lh(s2.directives) ? (n2 ? vh(s2, e2) : Nh(s2, e2), true) : !(!r2 || r2.type !== "Program" || r2.body.length !== 0 || !s2 || s2.type !== "ModuleExpression") && (vh(r2, e2), true);
}
function Ap(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "ForInStatement" && s2.type !== "ForOfStatement") && (Nh(s2, e2), true);
}
function Cp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, text: i2 } = t7;
  return !!(s2 && s2.type === "ImportSpecifier" && r2 && r2.type === "ImportDeclaration" && bh(i2, $h(e2))) && (Ih(s2, e2), true);
}
function xp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "AssignmentPattern") && (Nh(s2, e2), true);
}
function Fp(t7) {
  let { comment: e2, enclosingNode: s2 } = t7;
  return !(!s2 || s2.type !== "TypeAlias") && (Nh(s2, e2), true);
}
function gp(t7) {
  let { comment: e2, enclosingNode: s2, followingNode: r2 } = t7;
  return !(!s2 || s2.type !== "VariableDeclarator" && s2.type !== "AssignmentExpression" || !r2 || r2.type !== "ObjectExpression" && r2.type !== "ArrayExpression" && r2.type !== "TemplateLiteral" && r2.type !== "TaggedTemplateExpression" && !Oh(e2)) && (Nh(r2, e2), true);
}
function Pp(t7) {
  let { comment: e2, enclosingNode: s2, followingNode: r2, text: i2 } = t7;
  return !(r2 || !s2 || s2.type !== "TSMethodSignature" && s2.type !== "TSDeclareFunction" && s2.type !== "TSAbstractMethodDefinition" || wh(i2, e2, $h) !== ";") && (Ih(s2, e2), true);
}
function Tp(t7) {
  let { comment: e2, enclosingNode: s2, followingNode: r2 } = t7;
  if (Rh(e2) && s2 && s2.type === "TSMappedType" && r2 && r2.type === "TSTypeParameter" && r2.constraint)
    return s2.prettierIgnore = true, e2.unignore = true, true;
}
function bp(t7) {
  let { comment: e2, precedingNode: s2, enclosingNode: r2, followingNode: i2 } = t7;
  return !(!r2 || r2.type !== "TSMappedType") && (i2 && i2.type === "TSTypeParameter" && i2.name ? (Nh(i2.name, e2), true) : !(!s2 || s2.type !== "TSTypeParameter" || !s2.constraint) && (Ih(s2.constraint, e2), true));
}
function Sp(t7) {
  return t7.type === "ArrowFunctionExpression" || t7.type === "FunctionExpression" || t7.type === "FunctionDeclaration" || t7.type === "ObjectMethod" || t7.type === "ClassMethod" || t7.type === "TSDeclareFunction" || t7.type === "TSCallSignatureDeclaration" || t7.type === "TSConstructSignatureDeclaration" || t7.type === "TSMethodSignature" || t7.type === "TSConstructorType" || t7.type === "TSFunctionType" || t7.type === "TSDeclareMethod";
}
function wp(t7) {
  return Oh(t7) && t7.value[0] === "*" && /@type\b/.test(t7.value);
}
var Bp = { handleOwnLineComment: function(t7) {
  return [Tp, cp, rp, tp, ep, sp, ap, lp, Ap, fp, Ep, Cp, xp, op, dp].some((e2) => e2(t7));
}, handleEndOfLineComment: function(t7) {
  return [Zh, cp, ip, lp, tp, ep, sp, ap, dp, mp, yp, Ep, Fp, gp].some((e2) => e2(t7));
}, handleRemainingComment: function(t7) {
  return [Tp, tp, ep, np, pp, op, Ep, hp, up, bp, Dp, Pp].some((e2) => e2(t7));
}, isTypeCastComment: wp, getCommentChildNodes: function(t7, e2) {
  if ((e2.parser === "typescript" || e2.parser === "flow" || e2.parser === "espree" || e2.parser === "meriyah" || e2.parser === "__babel_estree") && t7.type === "MethodDefinition" && t7.value && t7.value.type === "FunctionExpression" && Mh(t7.value).length === 0 && !t7.value.returnType && !Lh(t7.value.typeParameters) && t7.value.body)
    return [...t7.decorators || [], t7.key, t7.value.body];
}, willPrintOwnComments: function(t7) {
  const e2 = t7.getValue(), s2 = t7.getParentNode();
  return (e2 && (jh(e2) || Uh(e2) || qh(s2) && ((t8) => _h(Kh(t8, Xh.Leading)) || _h(Kh(t8, Xh.Trailing)))(e2)) || s2 && (s2.type === "JSXSpreadAttribute" || s2.type === "JSXSpreadChild" || s2.type === "UnionTypeAnnotation" || s2.type === "TSUnionType" || (s2.type === "ClassDeclaration" || s2.type === "ClassExpression") && s2.superClass === e2)) && (!zh(t7) || s2.type === "UnionTypeAnnotation" || s2.type === "TSUnionType");
} };
var Np = function t6(e2, s2) {
  let r2;
  if (Array.isArray(e2))
    r2 = e2.entries();
  else {
    if (!e2 || typeof e2 != "object" || typeof e2.type != "string")
      return e2;
    r2 = Object.entries(e2);
  }
  for (const [i2, n2] of r2)
    e2[i2] = t6(n2, s2);
  return Array.isArray(e2) ? e2 : s2(e2) || e2;
};
var Ip = Pu;
var vp = Np;
function kp(t7, e2) {
  const { start: s2, end: r2 } = t7.loc;
  throw Ip(e2, { start: { line: s2.line, column: s2.column + 1 }, end: { line: r2.line, column: r2.column + 1 } });
}
var Lp = { throwErrorForInvalidNodes: function(t7, e2) {
  const { esTreeNodeToTSNodeMap: s2, tsNodeToESTreeNodeMap: r2 } = e2.tsParseResult;
  t7 = vp(t7, (t8) => {
    const e3 = s2.get(t8);
    if (!e3)
      return;
    const i2 = r2.get(e3);
    i2 === t8 && (function(t9, e4, s3) {
      const r3 = t9.decorators;
      if (!Array.isArray(r3))
        return;
      const i3 = e4.decorators;
      Array.isArray(i3) && i3.length === r3.length && !r3.some((t10) => {
        const e5 = s3.get(t10);
        return !e5 || !i3.includes(e5);
      }) || kp(e4, "Leading decorators must be attached to a class declaration");
    }(e3, i2, r2), function(t9, e4) {
      t9.kind !== 166 || t9.modifiers && !t9.modifiers.some((t10) => t10.kind === 126) || t9.initializer && e4.value === null && kp(e4, "Abstract property cannot have an initializer");
    }(e3, i2));
  });
} };
var { getLast: Op } = bo;
var { locStart: Mp, locEnd: Rp } = Au;
var { isTypeCastComment: jp } = Bp;
var Up = Np;
var { throwErrorForInvalidNodes: _p } = Lp;
function zp(t7) {
  return t7.type === "CallExpression" ? (t7.type = "OptionalCallExpression", t7.callee = zp(t7.callee)) : t7.type === "MemberExpression" ? (t7.type = "OptionalMemberExpression", t7.object = zp(t7.object)) : t7.type === "TSNonNullExpression" && (t7.expression = zp(t7.expression)), t7;
}
function Hp(t7) {
  return t7.type === "LogicalExpression" && t7.right.type === "LogicalExpression" && t7.operator === t7.right.operator;
}
function Vp(t7) {
  return Hp(t7) ? Vp({ type: "LogicalExpression", operator: t7.operator, left: Vp({ type: "LogicalExpression", operator: t7.operator, left: t7.left, right: t7.right.left, range: [Mp(t7.left), Rp(t7.right.left)] }), right: t7.right.right, range: [Mp(t7), Rp(t7)] }) : t7;
}
var qp = function(t7, e2) {
  if (e2.parser === "typescript" && /@|abstract/.test(e2.originalText) && _p(t7, e2), e2.parser !== "typescript" && e2.parser !== "flow" && e2.parser !== "espree" && e2.parser !== "meriyah") {
    const e3 = new Set();
    t7 = Up(t7, (t8) => {
      t8.leadingComments && t8.leadingComments.some(jp) && e3.add(Mp(t8));
    }), t7 = Up(t7, (t8) => {
      if (t8.type === "ParenthesizedExpression") {
        const { expression: s2 } = t8;
        if (s2.type === "TypeCastExpression")
          return s2.range = t8.range, s2;
        const r2 = Mp(t8);
        if (!e3.has(r2))
          return s2.extra = Object.assign(Object.assign({}, s2.extra), {}, { parenthesized: true }), s2;
      }
    });
  }
  return t7 = Up(t7, (t8) => {
    switch (t8.type) {
      case "ChainExpression":
        return zp(t8.expression);
      case "LogicalExpression":
        if (Hp(t8))
          return Vp(t8);
        break;
      case "VariableDeclaration": {
        const s2 = Op(t8.declarations);
        s2 && s2.init && function(t9, s3) {
          if (e2.originalText[Rp(s3)] === ";")
            return;
          t9.range = [Mp(t9), Rp(s3)];
        }(t8, s2);
        break;
      }
      case "TSParenthesizedType":
        return t8.typeAnnotation.range = [Mp(t8), Rp(t8)], t8.typeAnnotation;
      case "TSTypeParameter":
        if (typeof t8.name == "string") {
          const e3 = Mp(t8);
          t8.name = { type: "Identifier", name: t8.name, range: [e3, e3 + t8.name.length] };
        }
        break;
      case "SequenceExpression": {
        const e3 = Op(t8.expressions);
        t8.range = [Mp(t8), Math.min(Rp(e3), Rp(t8))];
        break;
      }
      case "TopicReference":
        e2.__isUsingHackPipeline = true;
    }
  });
};
var Gp = {};
Object.defineProperty(Gp, "__esModule", { value: true });
var Wp = /\r\n?|[\n\u2028\u2029]/;
var Kp = new RegExp(Wp.source, "g");
function Xp(t7) {
  switch (t7) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;
    default:
      return false;
  }
}
var Jp = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var $p = new RegExp("(?=(" + /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
function Yp(t7) {
  switch (t7) {
    case 9:
    case 11:
    case 12:
    case 32:
    case 160:
    case 5760:
    case 8192:
    case 8193:
    case 8194:
    case 8195:
    case 8196:
    case 8197:
    case 8198:
    case 8199:
    case 8200:
    case 8201:
    case 8202:
    case 8239:
    case 8287:
    case 12288:
    case 65279:
      return true;
    default:
      return false;
  }
}
var Qp = class {
  constructor(t7, e2) {
    this.line = void 0, this.column = void 0, this.line = t7, this.column = e2;
  }
};
var Zp = class {
  constructor(t7, e2) {
    this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t7, this.end = e2;
  }
};
function tc(t7, e2) {
  t7.trailingComments === void 0 ? t7.trailingComments = e2 : t7.trailingComments.unshift(...e2);
}
function ec(t7, e2) {
  t7.innerComments === void 0 ? t7.innerComments = e2 : t7.innerComments.unshift(...e2);
}
function sc(t7, e2, s2) {
  let r2 = null, i2 = e2.length;
  for (; r2 === null && i2 > 0; )
    r2 = e2[--i2];
  r2 === null || r2.start > s2.start ? ec(t7, s2.comments) : tc(r2, s2.comments);
}
var rc = Object.freeze({ SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" });
var ic = oc({ AccessorIsGenerator: "A %0ter cannot be a generator.", ArgumentsInClass: "'arguments' is only allowed in functions and class methods.", AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.", AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.", AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.", AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.", AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncFunction: "'await' is only allowed within async functions.", BadGetterArity: "A 'get' accesor must not have any formal parameters.", BadSetterArity: "A 'set' accesor must have exactly one formal parameter.", BadSetterRestParameter: "A 'set' accesor function argument must not be a rest parameter.", ConstructorClassField: "Classes may not have a field named 'constructor'.", ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.", ConstructorIsAccessor: "Class constructor may not be an accessor.", ConstructorIsAsync: "Constructor can't be an async function.", ConstructorIsGenerator: "Constructor can't be a generator.", DeclarationMissingInitializer: "'%0' require an initialization value.", DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.", DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?", DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.", DecoratorSemicolon: "Decorators must not be followed by a semicolon.", DecoratorStaticBlock: "Decorators can't be used with a static block.", DeletePrivateField: "Deleting a private field is not allowed.", DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.", DuplicateConstructor: "Duplicate constructor in the same class.", DuplicateDefaultExport: "Only one default export allowed per module.", DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.", DuplicateProto: "Redefinition of __proto__ property.", DuplicateRegExpFlags: "Duplicate regular expression flag.", ElementAfterRest: "Rest element must be last element.", EscapedCharNotAnIdentifier: "Invalid Unicode escape.", ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?", ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.", ForInOfLoopInitializer: "'%0' loop variable declaration may not have an initializer.", ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.", ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.", GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.", IllegalBreakContinue: "Unsyntactic %0.", IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.", IllegalReturn: "'return' outside of function.", ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?', ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.", ImportCallArity: "`import()` requires exactly %0.", ImportCallNotNewExpression: "Cannot use new with import(...).", ImportCallSpreadArgument: "`...` is not allowed in `import()`.", InvalidBigIntLiteral: "Invalid BigIntLiteral.", InvalidCodePoint: "Code point out of bounds.", InvalidDecimal: "Invalid decimal.", InvalidDigit: "Expected number in radix %0.", InvalidEscapeSequence: "Bad character escape sequence.", InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.", InvalidEscapedReservedWord: "Escape sequence in keyword %0.", InvalidIdentifier: "Invalid identifier %0.", InvalidLhs: "Invalid left-hand side in %0.", InvalidLhsBinding: "Binding invalid left-hand side in %0.", InvalidNumber: "Invalid number.", InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.", InvalidOrUnexpectedToken: "Unexpected character '%0'.", InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.", InvalidPrivateFieldResolution: "Private name #%0 is not defined.", InvalidPropertyBindingPattern: "Binding member expression.", InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.", InvalidRestAssignmentPattern: "Invalid rest operator's argument.", LabelRedeclaration: "Label '%0' is already declared.", LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.", LineTerminatorBeforeArrow: "No line break is allowed before '=>'.", MalformedRegExpFlags: "Invalid regular expression flag.", MissingClassName: "A class name is required.", MissingEqInAssignment: "Only '=' operator can be used for specifying default value.", MissingSemicolon: "Missing semicolon.", MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.", MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.", ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.", ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.", ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes.', ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'.", ModuleExportUndefined: "Export '%0' is not defined.", MultipleDefaultsInSwitch: "Multiple default clauses.", NewlineAfterThrow: "Illegal newline after throw.", NoCatchOrFinally: "Missing catch or finally clause.", NumberIdentifier: "Identifier directly after number.", NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.", ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.", OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.", OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.", OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.", ParamDupe: "Argument name clash.", PatternHasAccessor: "Object pattern can't contain getter or setter.", PatternHasMethod: "Object pattern can't contain methods.", PipeBodyIsTighter: "Unexpected %0 after pipeline body; any %0 expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.", PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.", PipeTopicUnconfiguredToken: 'Invalid topic token %0. In order to use %0 as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "%0" }.', PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.", PipeUnparenthesizedBody: "Hack-style pipe body cannot be an unparenthesized %0 expression; please wrap it in parentheses.", PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.', PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.", PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.", PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.", PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.", PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`).", PrivateNameRedeclaration: "Duplicate private name #%0.", RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", RecordNoProto: "'__proto__' is not allowed in Record expressions.", RestTrailingComma: "Unexpected trailing comma after rest element.", SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.", StaticPrototype: "Classes may not have static property named prototype.", StrictDelete: "Deleting local variable in strict mode.", StrictEvalArguments: "Assigning to '%0' in strict mode.", StrictEvalArgumentsBinding: "Binding '%0' in strict mode.", StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.", StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.", StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.", StrictWith: "'with' in strict mode.", SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?", SuperPrivateField: "Private fields can't be accessed on super.", TrailingDecorator: "Decorators must be attached to a class element.", TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.", UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.', UnexpectedDigitAfterHash: "Unexpected digit after hash token.", UnexpectedImportExport: "'import' and 'export' may only appear at the top level.", UnexpectedKeyword: "Unexpected keyword '%0'.", UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.", UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.", UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.", UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.", UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).", UnexpectedReservedWord: "Unexpected reserved word '%0'.", UnexpectedSuper: "'super' is only allowed in object methods and classes.", UnexpectedToken: "Unexpected token '%0'.", UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.", UnsupportedBind: "Binding should be performed on object property.", UnsupportedDecoratorExport: "A decorated export must export a class declaration.", UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.", UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.", UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1.", UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.", UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.", UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).", UnterminatedComment: "Unterminated comment.", UnterminatedRegExp: "Unterminated regular expression.", UnterminatedString: "Unterminated string constant.", UnterminatedTemplate: "Unterminated template.", VarRedeclaration: "Identifier '%0' has already been declared.", YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.", YieldInParameter: "Yield expression is not allowed in formal parameters.", ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0." }, rc.SyntaxError);
var nc = oc({ ImportMetaOutsideModule: `import.meta may appear only with 'sourceType: "module"'`, ImportOutsideModule: `'import' and 'export' may appear only with 'sourceType: "module"'` }, rc.SourceTypeModuleError);
function ac(t7, e2) {
  return e2 === "flow" && t7 === "PatternIsOptional" ? "OptionalBindingPattern" : t7;
}
function oc(t7, e2, s2) {
  const r2 = {};
  return Object.keys(t7).forEach((i2) => {
    r2[i2] = Object.freeze({ code: e2, reasonCode: ac(i2, s2), template: t7[i2] });
  }), Object.freeze(r2);
}
var uc = class {
  constructor(t7, e2) {
    this.token = void 0, this.preserveSpace = void 0, this.token = t7, this.preserveSpace = !!e2;
  }
};
var hc = { brace: new uc("{"), template: new uc("`", true) };
var pc = class {
  constructor(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t7, this.keyword = e2.keyword, this.beforeExpr = !!e2.beforeExpr, this.startsExpr = !!e2.startsExpr, this.rightAssociative = !!e2.rightAssociative, this.isLoop = !!e2.isLoop, this.isAssign = !!e2.isAssign, this.prefix = !!e2.prefix, this.postfix = !!e2.postfix, this.binop = e2.binop != null ? e2.binop : null, this.updateContext = null;
  }
};
var cc = new Map();
function lc(t7) {
  let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  e2.keyword = t7;
  const s2 = xc(t7, e2);
  return cc.set(t7, s2), s2;
}
function dc(t7, e2) {
  return xc(t7, { beforeExpr: true, binop: e2 });
}
var Dc = -1;
var mc = [];
var fc = [];
var yc = [];
var Ec = [];
var Ac = [];
var Cc = [];
function xc(t7) {
  let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var s2, r2, i2, n2;
  return ++Dc, fc.push(t7), yc.push((s2 = e2.binop) != null ? s2 : -1), Ec.push((r2 = e2.beforeExpr) != null && r2), Ac.push((i2 = e2.startsExpr) != null && i2), Cc.push((n2 = e2.prefix) != null && n2), mc.push(new pc(t7, e2)), Dc;
}
function Fc(t7) {
  let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var s2, r2, i2, n2;
  return ++Dc, cc.set(t7, Dc), fc.push(t7), yc.push((s2 = e2.binop) != null ? s2 : -1), Ec.push((r2 = e2.beforeExpr) != null && r2), Ac.push((i2 = e2.startsExpr) != null && i2), Cc.push((n2 = e2.prefix) != null && n2), mc.push(new pc("name", e2)), Dc;
}
var gc = { bracketL: xc("[", { beforeExpr: true, startsExpr: true }), bracketHashL: xc("#[", { beforeExpr: true, startsExpr: true }), bracketBarL: xc("[|", { beforeExpr: true, startsExpr: true }), bracketR: xc("]"), bracketBarR: xc("|]"), braceL: xc("{", { beforeExpr: true, startsExpr: true }), braceBarL: xc("{|", { beforeExpr: true, startsExpr: true }), braceHashL: xc("#{", { beforeExpr: true, startsExpr: true }), braceR: xc("}", { beforeExpr: true }), braceBarR: xc("|}"), parenL: xc("(", { beforeExpr: true, startsExpr: true }), parenR: xc(")"), comma: xc(",", { beforeExpr: true }), semi: xc(";", { beforeExpr: true }), colon: xc(":", { beforeExpr: true }), doubleColon: xc("::", { beforeExpr: true }), dot: xc("."), question: xc("?", { beforeExpr: true }), questionDot: xc("?."), arrow: xc("=>", { beforeExpr: true }), template: xc("template"), ellipsis: xc("...", { beforeExpr: true }), backQuote: xc("`", { startsExpr: true }), dollarBraceL: xc("${", { beforeExpr: true, startsExpr: true }), at: xc("@"), hash: xc("#", { startsExpr: true }), interpreterDirective: xc("#!..."), eq: xc("=", { beforeExpr: true, isAssign: true }), assign: xc("_=", { beforeExpr: true, isAssign: true }), slashAssign: xc("_=", { beforeExpr: true, isAssign: true }), xorAssign: xc("_=", { beforeExpr: true, isAssign: true }), moduloAssign: xc("_=", { beforeExpr: true, isAssign: true }), incDec: xc("++/--", { prefix: true, postfix: true, startsExpr: true }), bang: xc("!", { beforeExpr: true, prefix: true, startsExpr: true }), tilde: xc("~", { beforeExpr: true, prefix: true, startsExpr: true }), pipeline: dc("|>", 0), nullishCoalescing: dc("??", 1), logicalOR: dc("||", 1), logicalAND: dc("&&", 2), bitwiseOR: dc("|", 3), bitwiseXOR: dc("^", 4), bitwiseAND: dc("&", 5), equality: dc("==/!=/===/!==", 6), lt: dc("</>/<=/>=", 7), gt: dc("</>/<=/>=", 7), relational: dc("</>/<=/>=", 7), bitShift: dc("<</>>/>>>", 8), plusMin: xc("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: xc("%", { binop: 10, startsExpr: true }), star: xc("*", { binop: 10 }), slash: dc("/", 10), exponent: xc("**", { beforeExpr: true, binop: 11, rightAssociative: true }), _in: lc("in", { beforeExpr: true, binop: 7 }), _instanceof: lc("instanceof", { beforeExpr: true, binop: 7 }), _break: lc("break"), _case: lc("case", { beforeExpr: true }), _catch: lc("catch"), _continue: lc("continue"), _debugger: lc("debugger"), _default: lc("default", { beforeExpr: true }), _else: lc("else", { beforeExpr: true }), _finally: lc("finally"), _function: lc("function", { startsExpr: true }), _if: lc("if"), _return: lc("return", { beforeExpr: true }), _switch: lc("switch"), _throw: lc("throw", { beforeExpr: true, prefix: true, startsExpr: true }), _try: lc("try"), _var: lc("var"), _const: lc("const"), _with: lc("with"), _new: lc("new", { beforeExpr: true, startsExpr: true }), _this: lc("this", { startsExpr: true }), _super: lc("super", { startsExpr: true }), _class: lc("class", { startsExpr: true }), _extends: lc("extends", { beforeExpr: true }), _export: lc("export"), _import: lc("import", { startsExpr: true }), _null: lc("null", { startsExpr: true }), _true: lc("true", { startsExpr: true }), _false: lc("false", { startsExpr: true }), _typeof: lc("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: lc("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: lc("delete", { beforeExpr: true, prefix: true, startsExpr: true }), _do: lc("do", { isLoop: true, beforeExpr: true }), _for: lc("for", { isLoop: true }), _while: lc("while", { isLoop: true }), _as: Fc("as", { startsExpr: true }), _assert: Fc("assert", { startsExpr: true }), _async: Fc("async", { startsExpr: true }), _await: Fc("await", { startsExpr: true }), _from: Fc("from", { startsExpr: true }), _get: Fc("get", { startsExpr: true }), _let: Fc("let", { startsExpr: true }), _meta: Fc("meta", { startsExpr: true }), _of: Fc("of", { startsExpr: true }), _sent: Fc("sent", { startsExpr: true }), _set: Fc("set", { startsExpr: true }), _static: Fc("static", { startsExpr: true }), _yield: Fc("yield", { startsExpr: true }), _asserts: Fc("asserts", { startsExpr: true }), _checks: Fc("checks", { startsExpr: true }), _exports: Fc("exports", { startsExpr: true }), _global: Fc("global", { startsExpr: true }), _implements: Fc("implements", { startsExpr: true }), _intrinsic: Fc("intrinsic", { startsExpr: true }), _infer: Fc("infer", { startsExpr: true }), _is: Fc("is", { startsExpr: true }), _mixins: Fc("mixins", { startsExpr: true }), _proto: Fc("proto", { startsExpr: true }), _require: Fc("require", { startsExpr: true }), _keyof: Fc("keyof", { startsExpr: true }), _readonly: Fc("readonly", { startsExpr: true }), _unique: Fc("unique", { startsExpr: true }), _abstract: Fc("abstract", { startsExpr: true }), _declare: Fc("declare", { startsExpr: true }), _enum: Fc("enum", { startsExpr: true }), _module: Fc("module", { startsExpr: true }), _namespace: Fc("namespace", { startsExpr: true }), _interface: Fc("interface", { startsExpr: true }), _type: Fc("type", { startsExpr: true }), _opaque: Fc("opaque", { startsExpr: true }), name: xc("name", { startsExpr: true }), string: xc("string", { startsExpr: true }), num: xc("num", { startsExpr: true }), bigint: xc("bigint", { startsExpr: true }), decimal: xc("decimal", { startsExpr: true }), regexp: xc("regexp", { startsExpr: true }), privateName: xc("#name", { startsExpr: true }), eof: xc("eof"), jsxName: xc("jsxName"), jsxText: xc("jsxText", { beforeExpr: true }), jsxTagStart: xc("jsxTagStart", { startsExpr: true }), jsxTagEnd: xc("jsxTagEnd"), placeholder: xc("%%", { startsExpr: true }) };
function Pc(t7) {
  return t7 >= 87 && t7 <= 122;
}
function Tc(t7) {
  return t7 >= 52 && t7 <= 122;
}
function bc(t7) {
  return t7 >= 52 && t7 <= 126;
}
function Sc(t7) {
  return Ac[t7];
}
function wc(t7) {
  return t7 >= 119 && t7 <= 121;
}
function Bc(t7) {
  return t7 >= 52 && t7 <= 86;
}
function Nc(t7) {
  return fc[t7];
}
function Ic(t7) {
  return yc[t7];
}
function vc(t7) {
  return mc[t7];
}
mc[8].updateContext = (t7) => {
  t7.pop();
}, mc[5].updateContext = mc[7].updateContext = mc[23].updateContext = (t7) => {
  t7.push(hc.brace);
}, mc[22].updateContext = (t7) => {
  t7[t7.length - 1] === hc.template ? t7.pop() : t7.push(hc.template);
}, mc[132].updateContext = (t7) => {
  t7.push(hc.j_expr, hc.j_oTag);
};
var kc = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var Lc = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var Oc = new RegExp("[" + kc + "]");
var Mc = new RegExp("[" + kc + Lc + "]");
kc = Lc = null;
var Rc = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var jc = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function Uc(t7, e2) {
  let s2 = 65536;
  for (let r2 = 0, i2 = e2.length; r2 < i2; r2 += 2) {
    if (s2 += e2[r2], s2 > t7)
      return false;
    if (s2 += e2[r2 + 1], s2 >= t7)
      return true;
  }
  return false;
}
function _c(t7) {
  return t7 < 65 ? t7 === 36 : t7 <= 90 || (t7 < 97 ? t7 === 95 : t7 <= 122 || (t7 <= 65535 ? t7 >= 170 && Oc.test(String.fromCharCode(t7)) : Uc(t7, Rc)));
}
function zc(t7) {
  return t7 < 48 ? t7 === 36 : t7 < 58 || !(t7 < 65) && (t7 <= 90 || (t7 < 97 ? t7 === 95 : t7 <= 122 || (t7 <= 65535 ? t7 >= 170 && Mc.test(String.fromCharCode(t7)) : Uc(t7, Rc) || Uc(t7, jc))));
}
var Hc = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"];
var Vc = ["eval", "arguments"];
var qc = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]);
var Gc = new Set(Hc);
var Wc = new Set(Vc);
function Kc(t7, e2) {
  return e2 && t7 === "await" || t7 === "enum";
}
function Xc(t7, e2) {
  return Kc(t7, e2) || Gc.has(t7);
}
function Jc(t7) {
  return Wc.has(t7);
}
function $c(t7, e2) {
  return Xc(t7, e2) || Jc(t7);
}
var Yc = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
var Qc = class {
  constructor(t7) {
    this.var = new Set(), this.lexical = new Set(), this.functions = new Set(), this.flags = t7;
  }
};
var Zc = class {
  constructor(t7, e2) {
    this.scopeStack = [], this.undefinedExports = new Map(), this.undefinedPrivateNames = new Map(), this.raise = t7, this.inModule = e2;
  }
  get inFunction() {
    return (2 & this.currentVarScopeFlags()) > 0;
  }
  get allowSuper() {
    return (16 & this.currentThisScopeFlags()) > 0;
  }
  get allowDirectSuper() {
    return (32 & this.currentThisScopeFlags()) > 0;
  }
  get inClass() {
    return (64 & this.currentThisScopeFlags()) > 0;
  }
  get inClassAndNotInNonArrowFunction() {
    const t7 = this.currentThisScopeFlags();
    return (64 & t7) > 0 && (2 & t7) == 0;
  }
  get inStaticBlock() {
    for (let t7 = this.scopeStack.length - 1; ; t7--) {
      const { flags: e2 } = this.scopeStack[t7];
      if (128 & e2)
        return true;
      if (323 & e2)
        return false;
    }
  }
  get inNonArrowFunction() {
    return (2 & this.currentThisScopeFlags()) > 0;
  }
  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }
  createScope(t7) {
    return new Qc(t7);
  }
  enter(t7) {
    this.scopeStack.push(this.createScope(t7));
  }
  exit() {
    this.scopeStack.pop();
  }
  treatFunctionsAsVarInScope(t7) {
    return !!(2 & t7.flags || !this.inModule && 1 & t7.flags);
  }
  declareName(t7, e2, s2) {
    let r2 = this.currentScope();
    if (8 & e2 || 16 & e2)
      this.checkRedeclarationInScope(r2, t7, e2, s2), 16 & e2 ? r2.functions.add(t7) : r2.lexical.add(t7), 8 & e2 && this.maybeExportDefined(r2, t7);
    else if (4 & e2)
      for (let i2 = this.scopeStack.length - 1; i2 >= 0 && (r2 = this.scopeStack[i2], this.checkRedeclarationInScope(r2, t7, e2, s2), r2.var.add(t7), this.maybeExportDefined(r2, t7), !(259 & r2.flags)); --i2)
        ;
    this.inModule && 1 & r2.flags && this.undefinedExports.delete(t7);
  }
  maybeExportDefined(t7, e2) {
    this.inModule && 1 & t7.flags && this.undefinedExports.delete(e2);
  }
  checkRedeclarationInScope(t7, e2, s2, r2) {
    this.isRedeclaredInScope(t7, e2, s2) && this.raise(r2, ic.VarRedeclaration, e2);
  }
  isRedeclaredInScope(t7, e2, s2) {
    return !!(1 & s2) && (8 & s2 ? t7.lexical.has(e2) || t7.functions.has(e2) || t7.var.has(e2) : 16 & s2 ? t7.lexical.has(e2) || !this.treatFunctionsAsVarInScope(t7) && t7.var.has(e2) : t7.lexical.has(e2) && !(8 & t7.flags && t7.lexical.values().next().value === e2) || !this.treatFunctionsAsVarInScope(t7) && t7.functions.has(e2));
  }
  checkLocalExport(t7) {
    const { name: e2 } = t7, s2 = this.scopeStack[0];
    s2.lexical.has(e2) || s2.var.has(e2) || s2.functions.has(e2) || this.undefinedExports.set(e2, t7.start);
  }
  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }
  currentVarScopeFlags() {
    for (let t7 = this.scopeStack.length - 1; ; t7--) {
      const { flags: e2 } = this.scopeStack[t7];
      if (259 & e2)
        return e2;
    }
  }
  currentThisScopeFlags() {
    for (let t7 = this.scopeStack.length - 1; ; t7--) {
      const { flags: e2 } = this.scopeStack[t7];
      if (323 & e2 && !(4 & e2))
        return e2;
    }
  }
};
var tl = class extends Qc {
  constructor() {
    super(...arguments), this.declareFunctions = new Set();
  }
};
var el = class extends Zc {
  createScope(t7) {
    return new tl(t7);
  }
  declareName(t7, e2, s2) {
    const r2 = this.currentScope();
    if (2048 & e2)
      return this.checkRedeclarationInScope(r2, t7, e2, s2), this.maybeExportDefined(r2, t7), void r2.declareFunctions.add(t7);
    super.declareName(...arguments);
  }
  isRedeclaredInScope(t7, e2, s2) {
    return !!super.isRedeclaredInScope(...arguments) || !!(2048 & s2) && (!t7.declareFunctions.has(e2) && (t7.lexical.has(e2) || t7.functions.has(e2)));
  }
  checkLocalExport(t7) {
    this.scopeStack[0].declareFunctions.has(t7.name) || super.checkLocalExport(t7);
  }
};
var sl = class {
  constructor() {
    this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.decoratorStack = [[]], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 129, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.lastTokEnd = 0, this.context = [hc.brace], this.canStartJSXElement = true, this.containsEsc = false, this.strictErrors = new Map(), this.tokensLength = 0;
  }
  init(t7) {
    let { strictMode: e2, sourceType: s2, startLine: r2, startColumn: i2 } = t7;
    this.strict = e2 !== false && (e2 === true || s2 === "module"), this.curLine = r2, this.lineStart = -i2, this.startLoc = this.endLoc = new Qp(r2, i2);
  }
  curPosition() {
    return new Qp(this.curLine, this.pos - this.lineStart);
  }
  clone(t7) {
    const e2 = new sl(), s2 = Object.keys(this);
    for (let r2 = 0, i2 = s2.length; r2 < i2; r2++) {
      const i3 = s2[r2];
      let n2 = this[i3];
      !t7 && Array.isArray(n2) && (n2 = n2.slice()), e2[i3] = n2;
    }
    return e2;
  }
};
var rl = function(t7) {
  return t7 >= 48 && t7 <= 57;
};
var il = new Set([103, 109, 115, 105, 121, 117, 100]);
var nl = { decBinOct: [46, 66, 69, 79, 95, 98, 101, 111], hex: [46, 88, 95, 120] };
var al = { bin: [48, 49] };
al.oct = [...al.bin, 50, 51, 52, 53, 54, 55], al.dec = [...al.oct, 56, 57], al.hex = [...al.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
var ol = class {
  constructor(t7) {
    this.type = t7.type, this.value = t7.value, this.start = t7.start, this.end = t7.end, this.loc = new Zp(t7.startLoc, t7.endLoc);
  }
};
var ul = class {
  constructor() {
    this.privateNames = new Set(), this.loneAccessors = new Map(), this.undefinedPrivateNames = new Map();
  }
};
var hl = class {
  constructor(t7) {
    this.stack = [], this.undefinedPrivateNames = new Map(), this.raise = t7;
  }
  current() {
    return this.stack[this.stack.length - 1];
  }
  enter() {
    this.stack.push(new ul());
  }
  exit() {
    const t7 = this.stack.pop(), e2 = this.current();
    for (const [s2, r2] of Array.from(t7.undefinedPrivateNames))
      e2 ? e2.undefinedPrivateNames.has(s2) || e2.undefinedPrivateNames.set(s2, r2) : this.raise(r2, ic.InvalidPrivateFieldResolution, s2);
  }
  declarePrivateName(t7, e2, s2) {
    const r2 = this.current();
    let i2 = r2.privateNames.has(t7);
    if (3 & e2) {
      const s3 = i2 && r2.loneAccessors.get(t7);
      if (s3) {
        const n2 = 4 & s3, a2 = 4 & e2;
        i2 = (3 & s3) === (3 & e2) || n2 !== a2, i2 || r2.loneAccessors.delete(t7);
      } else
        i2 || r2.loneAccessors.set(t7, e2);
    }
    i2 && this.raise(s2, ic.PrivateNameRedeclaration, t7), r2.privateNames.add(t7), r2.undefinedPrivateNames.delete(t7);
  }
  usePrivateName(t7, e2) {
    let s2;
    for (s2 of this.stack)
      if (s2.privateNames.has(t7))
        return;
    s2 ? s2.undefinedPrivateNames.set(t7, e2) : this.raise(e2, ic.InvalidPrivateFieldResolution, t7);
  }
};
var pl = class {
  constructor() {
    let t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.type = void 0, this.type = t7;
  }
  canBeArrowParameterDeclaration() {
    return this.type === 2 || this.type === 1;
  }
  isCertainlyParameterDeclaration() {
    return this.type === 3;
  }
};
var cl = class extends pl {
  constructor(t7) {
    super(t7), this.errors = new Map();
  }
  recordDeclarationError(t7, e2) {
    this.errors.set(t7, e2);
  }
  clearDeclarationError(t7) {
    this.errors.delete(t7);
  }
  iterateErrors(t7) {
    this.errors.forEach(t7);
  }
};
var ll = class {
  constructor(t7) {
    this.stack = [new pl()], this.raise = t7;
  }
  enter(t7) {
    this.stack.push(t7);
  }
  exit() {
    this.stack.pop();
  }
  recordParameterInitializerError(t7, e2) {
    const { stack: s2 } = this;
    let r2 = s2.length - 1, i2 = s2[r2];
    for (; !i2.isCertainlyParameterDeclaration(); ) {
      if (!i2.canBeArrowParameterDeclaration())
        return;
      i2.recordDeclarationError(t7, e2), i2 = s2[--r2];
    }
    this.raise(t7, e2);
  }
  recordParenthesizedIdentifierError(t7, e2) {
    const { stack: s2 } = this, r2 = s2[s2.length - 1];
    if (r2.isCertainlyParameterDeclaration())
      this.raise(t7, e2);
    else {
      if (!r2.canBeArrowParameterDeclaration())
        return;
      r2.recordDeclarationError(t7, e2);
    }
  }
  recordAsyncArrowParametersError(t7, e2) {
    const { stack: s2 } = this;
    let r2 = s2.length - 1, i2 = s2[r2];
    for (; i2.canBeArrowParameterDeclaration(); )
      i2.type === 2 && i2.recordDeclarationError(t7, e2), i2 = s2[--r2];
  }
  validateAsPattern() {
    const { stack: t7 } = this, e2 = t7[t7.length - 1];
    e2.canBeArrowParameterDeclaration() && e2.iterateErrors((e3, s2) => {
      this.raise(s2, e3);
      let r2 = t7.length - 2, i2 = t7[r2];
      for (; i2.canBeArrowParameterDeclaration(); )
        i2.clearDeclarationError(s2), i2 = t7[--r2];
    });
  }
};
function dl() {
  return new pl();
}
var Dl = class {
  constructor() {
    this.stacks = [];
  }
  enter(t7) {
    this.stacks.push(t7);
  }
  exit() {
    this.stacks.pop();
  }
  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }
  get hasAwait() {
    return (2 & this.currentFlags()) > 0;
  }
  get hasYield() {
    return (1 & this.currentFlags()) > 0;
  }
  get hasReturn() {
    return (4 & this.currentFlags()) > 0;
  }
  get hasIn() {
    return (8 & this.currentFlags()) > 0;
  }
};
function ml(t7, e2) {
  return (t7 ? 2 : 0) | (e2 ? 1 : 0);
}
var fl = class {
  constructor() {
    this.shorthandAssign = -1, this.doubleProto = -1, this.optionalParameters = -1;
  }
};
var yl = class {
  constructor(t7, e2, s2) {
    this.type = "", this.start = e2, this.end = 0, this.loc = new Zp(s2), t7 != null && t7.options.ranges && (this.range = [e2, 0]), t7 != null && t7.filename && (this.loc.filename = t7.filename);
  }
};
var El = yl.prototype;
function Al(t7) {
  const { type: e2, start: s2, end: r2, loc: i2, range: n2, extra: a2, name: o2 } = t7, u2 = Object.create(El);
  return u2.type = e2, u2.start = s2, u2.end = r2, u2.loc = i2, u2.range = n2, u2.extra = a2, u2.name = o2, e2 === "Placeholder" && (u2.expectedNode = t7.expectedNode), u2;
}
function Cl(t7) {
  const { type: e2, start: s2, end: r2, loc: i2, range: n2, extra: a2 } = t7;
  if (e2 === "Placeholder")
    return function(t8) {
      return Al(t8);
    }(t7);
  const o2 = Object.create(El);
  return o2.type = "StringLiteral", o2.start = s2, o2.end = r2, o2.loc = i2, o2.range = n2, o2.extra = a2, o2.value = t7.value, o2;
}
El.__clone = function() {
  const t7 = new yl(), e2 = Object.keys(this);
  for (let s2 = 0, r2 = e2.length; s2 < r2; s2++) {
    const r3 = e2[s2];
    r3 !== "leadingComments" && r3 !== "trailingComments" && r3 !== "innerComments" && (t7[r3] = this[r3]);
  }
  return t7;
};
var xl = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
var Fl = oc({ AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.", AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.", AssignReservedType: "Cannot overwrite reserved type %0.", DeclareClassElement: "The `declare` modifier can only appear on class fields.", DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.", DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.", EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.", EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.", EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.", EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.", EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.", EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.", EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.", EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.", EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.", EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.", EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.", GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.", ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.", InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.", InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.", InexactVariance: "Explicit inexact syntax cannot have variance.", InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.", MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.", NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.", NestedFlowComment: "Cannot have a flow comment inside another flow comment.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.", SpreadVariance: "Spread properties cannot have variance.", ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.", ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.", ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.", ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.", ThisParamNoDefault: "The `this` parameter may not have a default value.", TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.", UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.", UnexpectedReservedType: "Unexpected reserved type %0.", UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.", UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.", UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.", UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".', UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.", UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.", UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead.", UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.", UnterminatedFlowComment: "Unterminated flow-comment." }, rc.SyntaxError, "flow");
function gl(t7) {
  return t7.importKind === "type" || t7.importKind === "typeof";
}
function Pl(t7) {
  return Tc(t7) && t7 !== 91;
}
var Tl = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
var bl = /\*?\s*@((?:no)?flow)\b/;
var Sl = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: "\xA0", iexcl: "\xA1", cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", brvbar: "\xA6", sect: "\xA7", uml: "\xA8", copy: "\xA9", ordf: "\xAA", laquo: "\xAB", not: "\xAC", shy: "\xAD", reg: "\xAE", macr: "\xAF", deg: "\xB0", plusmn: "\xB1", sup2: "\xB2", sup3: "\xB3", acute: "\xB4", micro: "\xB5", para: "\xB6", middot: "\xB7", cedil: "\xB8", sup1: "\xB9", ordm: "\xBA", raquo: "\xBB", frac14: "\xBC", frac12: "\xBD", frac34: "\xBE", iquest: "\xBF", Agrave: "\xC0", Aacute: "\xC1", Acirc: "\xC2", Atilde: "\xC3", Auml: "\xC4", Aring: "\xC5", AElig: "\xC6", Ccedil: "\xC7", Egrave: "\xC8", Eacute: "\xC9", Ecirc: "\xCA", Euml: "\xCB", Igrave: "\xCC", Iacute: "\xCD", Icirc: "\xCE", Iuml: "\xCF", ETH: "\xD0", Ntilde: "\xD1", Ograve: "\xD2", Oacute: "\xD3", Ocirc: "\xD4", Otilde: "\xD5", Ouml: "\xD6", times: "\xD7", Oslash: "\xD8", Ugrave: "\xD9", Uacute: "\xDA", Ucirc: "\xDB", Uuml: "\xDC", Yacute: "\xDD", THORN: "\xDE", szlig: "\xDF", agrave: "\xE0", aacute: "\xE1", acirc: "\xE2", atilde: "\xE3", auml: "\xE4", aring: "\xE5", aelig: "\xE6", ccedil: "\xE7", egrave: "\xE8", eacute: "\xE9", ecirc: "\xEA", euml: "\xEB", igrave: "\xEC", iacute: "\xED", icirc: "\xEE", iuml: "\xEF", eth: "\xF0", ntilde: "\xF1", ograve: "\xF2", oacute: "\xF3", ocirc: "\xF4", otilde: "\xF5", ouml: "\xF6", divide: "\xF7", oslash: "\xF8", ugrave: "\xF9", uacute: "\xFA", ucirc: "\xFB", uuml: "\xFC", yacute: "\xFD", thorn: "\xFE", yuml: "\xFF", OElig: "\u0152", oelig: "\u0153", Scaron: "\u0160", scaron: "\u0161", Yuml: "\u0178", fnof: "\u0192", circ: "\u02C6", tilde: "\u02DC", Alpha: "\u0391", Beta: "\u0392", Gamma: "\u0393", Delta: "\u0394", Epsilon: "\u0395", Zeta: "\u0396", Eta: "\u0397", Theta: "\u0398", Iota: "\u0399", Kappa: "\u039A", Lambda: "\u039B", Mu: "\u039C", Nu: "\u039D", Xi: "\u039E", Omicron: "\u039F", Pi: "\u03A0", Rho: "\u03A1", Sigma: "\u03A3", Tau: "\u03A4", Upsilon: "\u03A5", Phi: "\u03A6", Chi: "\u03A7", Psi: "\u03A8", Omega: "\u03A9", alpha: "\u03B1", beta: "\u03B2", gamma: "\u03B3", delta: "\u03B4", epsilon: "\u03B5", zeta: "\u03B6", eta: "\u03B7", theta: "\u03B8", iota: "\u03B9", kappa: "\u03BA", lambda: "\u03BB", mu: "\u03BC", nu: "\u03BD", xi: "\u03BE", omicron: "\u03BF", pi: "\u03C0", rho: "\u03C1", sigmaf: "\u03C2", sigma: "\u03C3", tau: "\u03C4", upsilon: "\u03C5", phi: "\u03C6", chi: "\u03C7", psi: "\u03C8", omega: "\u03C9", thetasym: "\u03D1", upsih: "\u03D2", piv: "\u03D6", ensp: "\u2002", emsp: "\u2003", thinsp: "\u2009", zwnj: "\u200C", zwj: "\u200D", lrm: "\u200E", rlm: "\u200F", ndash: "\u2013", mdash: "\u2014", lsquo: "\u2018", rsquo: "\u2019", sbquo: "\u201A", ldquo: "\u201C", rdquo: "\u201D", bdquo: "\u201E", dagger: "\u2020", Dagger: "\u2021", bull: "\u2022", hellip: "\u2026", permil: "\u2030", prime: "\u2032", Prime: "\u2033", lsaquo: "\u2039", rsaquo: "\u203A", oline: "\u203E", frasl: "\u2044", euro: "\u20AC", image: "\u2111", weierp: "\u2118", real: "\u211C", trade: "\u2122", alefsym: "\u2135", larr: "\u2190", uarr: "\u2191", rarr: "\u2192", darr: "\u2193", harr: "\u2194", crarr: "\u21B5", lArr: "\u21D0", uArr: "\u21D1", rArr: "\u21D2", dArr: "\u21D3", hArr: "\u21D4", forall: "\u2200", part: "\u2202", exist: "\u2203", empty: "\u2205", nabla: "\u2207", isin: "\u2208", notin: "\u2209", ni: "\u220B", prod: "\u220F", sum: "\u2211", minus: "\u2212", lowast: "\u2217", radic: "\u221A", prop: "\u221D", infin: "\u221E", ang: "\u2220", and: "\u2227", or: "\u2228", cap: "\u2229", cup: "\u222A", int: "\u222B", there4: "\u2234", sim: "\u223C", cong: "\u2245", asymp: "\u2248", ne: "\u2260", equiv: "\u2261", le: "\u2264", ge: "\u2265", sub: "\u2282", sup: "\u2283", nsub: "\u2284", sube: "\u2286", supe: "\u2287", oplus: "\u2295", otimes: "\u2297", perp: "\u22A5", sdot: "\u22C5", lceil: "\u2308", rceil: "\u2309", lfloor: "\u230A", rfloor: "\u230B", lang: "\u2329", rang: "\u232A", loz: "\u25CA", spades: "\u2660", clubs: "\u2663", hearts: "\u2665", diams: "\u2666" };
var wl = /^[\da-fA-F]+$/;
var Bl = /^\d+$/;
var Nl = oc({ AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.", MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>.", MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.", UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?", UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.", UnterminatedJsxContent: "Unterminated JSX contents.", UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?" }, rc.SyntaxError, "jsx");
function Il(t7) {
  return !!t7 && (t7.type === "JSXOpeningFragment" || t7.type === "JSXClosingFragment");
}
function vl(t7) {
  if (t7.type === "JSXIdentifier")
    return t7.name;
  if (t7.type === "JSXNamespacedName")
    return t7.namespace.name + ":" + t7.name.name;
  if (t7.type === "JSXMemberExpression")
    return vl(t7.object) + "." + vl(t7.property);
  throw new Error("Node had unexpected type: " + t7.type);
}
hc.j_oTag = new uc("<tag"), hc.j_cTag = new uc("</tag"), hc.j_expr = new uc("<tag>...</tag>", true);
var kl = class extends Qc {
  constructor() {
    super(...arguments), this.types = new Set(), this.enums = new Set(), this.constEnums = new Set(), this.classes = new Set(), this.exportOnlyBindings = new Set();
  }
};
var Ll = class extends Zc {
  createScope(t7) {
    return new kl(t7);
  }
  declareName(t7, e2, s2) {
    const r2 = this.currentScope();
    if (1024 & e2)
      return this.maybeExportDefined(r2, t7), void r2.exportOnlyBindings.add(t7);
    super.declareName(...arguments), 2 & e2 && (1 & e2 || (this.checkRedeclarationInScope(r2, t7, e2, s2), this.maybeExportDefined(r2, t7)), r2.types.add(t7)), 256 & e2 && r2.enums.add(t7), 512 & e2 && r2.constEnums.add(t7), 128 & e2 && r2.classes.add(t7);
  }
  isRedeclaredInScope(t7, e2, s2) {
    if (t7.enums.has(e2)) {
      if (256 & s2) {
        return !!(512 & s2) !== t7.constEnums.has(e2);
      }
      return true;
    }
    return 128 & s2 && t7.classes.has(e2) ? !!t7.lexical.has(e2) && !!(1 & s2) : !!(2 & s2 && t7.types.has(e2)) || super.isRedeclaredInScope(...arguments);
  }
  checkLocalExport(t7) {
    const e2 = this.scopeStack[0], { name: s2 } = t7;
    e2.types.has(s2) || e2.exportOnlyBindings.has(s2) || super.checkLocalExport(t7);
  }
};
function Ol(t7) {
  if (!t7)
    throw new Error("Assert fail");
}
var Ml = oc({ AbstractMethodHasImplementation: "Method '%0' cannot have an implementation because it is marked abstract.", AbstractPropertyHasInitializer: "Property '%0' cannot have an initializer because it is marked abstract.", AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: "'declare' is not allowed in %0ters.", DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: "Accessibility modifier already seen.", DuplicateModifier: "Duplicate modifier: '%0'.", EmptyHeritageClauseType: "'%0' list cannot be empty.", EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", IncompatibleModifiers: "'%0' modifier cannot be used with '%1' modifier.", IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0').", IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.", InvalidModifiersOrder: "'%0' modifier must precede '%1' modifier.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0').", ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0." }, rc.SyntaxError, "typescript");
function Rl(t7) {
  return t7 === "private" || t7 === "public" || t7 === "protected";
}
var jl = oc({ ClassNameIsRequired: "A class name is required." }, rc.SyntaxError);
function Ul(t7, e2) {
  return t7.some((t8) => Array.isArray(t8) ? t8[0] === e2 : t8 === e2);
}
function _l(t7, e2, s2) {
  const r2 = t7.find((t8) => Array.isArray(t8) ? t8[0] === e2 : t8 === e2);
  return r2 && Array.isArray(r2) ? r2[1][s2] : null;
}
var zl = ["minimal", "fsharp", "hack", "smart"];
var Hl = ["^", "%", "#"];
var Vl = ["hash", "bar"];
var ql = { estree: (t7) => class extends t7 {
  parseRegExpLiteral(t8) {
    let { pattern: e2, flags: s2 } = t8, r2 = null;
    try {
      r2 = new RegExp(e2, s2);
    } catch (t9) {
    }
    const i2 = this.estreeParseLiteral(r2);
    return i2.regex = { pattern: e2, flags: s2 }, i2;
  }
  parseBigIntLiteral(t8) {
    let e2;
    try {
      e2 = BigInt(t8);
    } catch (t9) {
      e2 = null;
    }
    const s2 = this.estreeParseLiteral(e2);
    return s2.bigint = String(s2.value || t8), s2;
  }
  parseDecimalLiteral(t8) {
    const e2 = this.estreeParseLiteral(null);
    return e2.decimal = String(e2.value || t8), e2;
  }
  estreeParseLiteral(t8) {
    return this.parseLiteral(t8, "Literal");
  }
  parseStringLiteral(t8) {
    return this.estreeParseLiteral(t8);
  }
  parseNumericLiteral(t8) {
    return this.estreeParseLiteral(t8);
  }
  parseNullLiteral() {
    return this.estreeParseLiteral(null);
  }
  parseBooleanLiteral(t8) {
    return this.estreeParseLiteral(t8);
  }
  directiveToStmt(t8) {
    const e2 = t8.value, s2 = this.startNodeAt(t8.start, t8.loc.start), r2 = this.startNodeAt(e2.start, e2.loc.start);
    return r2.value = e2.extra.expressionValue, r2.raw = e2.extra.raw, s2.expression = this.finishNodeAt(r2, "Literal", e2.end, e2.loc.end), s2.directive = e2.extra.raw.slice(1, -1), this.finishNodeAt(s2, "ExpressionStatement", t8.end, t8.loc.end);
  }
  initFunction(t8, e2) {
    super.initFunction(t8, e2), t8.expression = false;
  }
  checkDeclaration(t8) {
    t8 != null && this.isObjectProperty(t8) ? this.checkDeclaration(t8.value) : super.checkDeclaration(t8);
  }
  getObjectOrClassMethodParams(t8) {
    return t8.value.params;
  }
  isValidDirective(t8) {
    var e2;
    return t8.type === "ExpressionStatement" && t8.expression.type === "Literal" && typeof t8.expression.value == "string" && !((e2 = t8.expression.extra) != null && e2.parenthesized);
  }
  parseBlockBody(t8) {
    for (var e2 = arguments.length, s2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++)
      s2[r2 - 1] = arguments[r2];
    super.parseBlockBody(t8, ...s2);
    const i2 = t8.directives.map((t9) => this.directiveToStmt(t9));
    t8.body = i2.concat(t8.body), delete t8.directives;
  }
  pushClassMethod(t8, e2, s2, r2, i2, n2) {
    this.parseMethod(e2, s2, r2, i2, n2, "ClassMethod", true), e2.typeParameters && (e2.value.typeParameters = e2.typeParameters, delete e2.typeParameters), t8.body.push(e2);
  }
  parsePrivateName() {
    const t8 = super.parsePrivateName();
    return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(t8) : t8;
  }
  convertPrivateNameToPrivateIdentifier(t8) {
    const e2 = super.getPrivateNameSV(t8);
    return delete (t8 = t8).id, t8.name = e2, t8.type = "PrivateIdentifier", t8;
  }
  isPrivateName(t8) {
    return this.getPluginOption("estree", "classFeatures") ? t8.type === "PrivateIdentifier" : super.isPrivateName(t8);
  }
  getPrivateNameSV(t8) {
    return this.getPluginOption("estree", "classFeatures") ? t8.name : super.getPrivateNameSV(t8);
  }
  parseLiteral(t8, e2) {
    const s2 = super.parseLiteral(t8, e2);
    return s2.raw = s2.extra.raw, delete s2.extra, s2;
  }
  parseFunctionBody(t8, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    super.parseFunctionBody(t8, e2, s2), t8.expression = t8.body.type !== "BlockStatement";
  }
  parseMethod(t8, e2, s2, r2, i2, n2) {
    let a2 = arguments.length > 6 && arguments[6] !== void 0 && arguments[6], o2 = this.startNode();
    return o2.kind = t8.kind, o2 = super.parseMethod(o2, e2, s2, r2, i2, n2, a2), o2.type = "FunctionExpression", delete o2.kind, t8.value = o2, n2 === "ClassPrivateMethod" && (t8.computed = false), n2 = "MethodDefinition", this.finishNode(t8, n2);
  }
  parseClassProperty() {
    const t8 = super.parseClassProperty(...arguments);
    return this.getPluginOption("estree", "classFeatures") ? (t8.type = "PropertyDefinition", t8) : t8;
  }
  parseClassPrivateProperty() {
    const t8 = super.parseClassPrivateProperty(...arguments);
    return this.getPluginOption("estree", "classFeatures") ? (t8.type = "PropertyDefinition", t8.computed = false, t8) : t8;
  }
  parseObjectMethod(t8, e2, s2, r2, i2) {
    const n2 = super.parseObjectMethod(t8, e2, s2, r2, i2);
    return n2 && (n2.type = "Property", n2.kind === "method" && (n2.kind = "init"), n2.shorthand = false), n2;
  }
  parseObjectProperty(t8, e2, s2, r2, i2) {
    const n2 = super.parseObjectProperty(t8, e2, s2, r2, i2);
    return n2 && (n2.kind = "init", n2.type = "Property"), n2;
  }
  isAssignable(t8, e2) {
    return t8 != null && this.isObjectProperty(t8) ? this.isAssignable(t8.value, e2) : super.isAssignable(t8, e2);
  }
  toAssignable(t8) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return t8 != null && this.isObjectProperty(t8) ? (this.toAssignable(t8.value, e2), t8) : super.toAssignable(t8, e2);
  }
  toAssignableObjectExpressionProp(t8) {
    if (t8.kind === "get" || t8.kind === "set")
      this.raise(t8.key.start, ic.PatternHasAccessor);
    else if (t8.method)
      this.raise(t8.key.start, ic.PatternHasMethod);
    else {
      for (var e2 = arguments.length, s2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++)
        s2[r2 - 1] = arguments[r2];
      super.toAssignableObjectExpressionProp(t8, ...s2);
    }
  }
  finishCallExpression(t8, e2) {
    if (super.finishCallExpression(t8, e2), t8.callee.type === "Import") {
      var s2;
      if (t8.type = "ImportExpression", t8.source = t8.arguments[0], this.hasPlugin("importAssertions"))
        t8.attributes = (s2 = t8.arguments[1]) != null ? s2 : null;
      delete t8.arguments, delete t8.callee;
    }
    return t8;
  }
  toReferencedArguments(t8) {
    t8.type !== "ImportExpression" && super.toReferencedArguments(t8);
  }
  parseExport(t8) {
    switch (super.parseExport(t8), t8.type) {
      case "ExportAllDeclaration":
        t8.exported = null;
        break;
      case "ExportNamedDeclaration":
        t8.specifiers.length === 1 && t8.specifiers[0].type === "ExportNamespaceSpecifier" && (t8.type = "ExportAllDeclaration", t8.exported = t8.specifiers[0].exported, delete t8.specifiers);
    }
    return t8;
  }
  parseSubscript(t8, e2, s2, r2, i2) {
    const n2 = super.parseSubscript(t8, e2, s2, r2, i2);
    if (i2.optionalChainMember) {
      if (n2.type !== "OptionalMemberExpression" && n2.type !== "OptionalCallExpression" || (n2.type = n2.type.substring(8)), i2.stop) {
        const t9 = this.startNodeAtNode(n2);
        return t9.expression = n2, this.finishNode(t9, "ChainExpression");
      }
    } else
      n2.type !== "MemberExpression" && n2.type !== "CallExpression" || (n2.optional = false);
    return n2;
  }
  hasPropertyAsPrivateName(t8) {
    return t8.type === "ChainExpression" && (t8 = t8.expression), super.hasPropertyAsPrivateName(t8);
  }
  isOptionalChain(t8) {
    return t8.type === "ChainExpression";
  }
  isObjectProperty(t8) {
    return t8.type === "Property" && t8.kind === "init" && !t8.method;
  }
  isObjectMethod(t8) {
    return t8.method || t8.kind === "get" || t8.kind === "set";
  }
}, jsx: (t7) => class extends t7 {
  jsxReadToken() {
    let t8 = "", e2 = this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, Nl.UnterminatedJsxContent);
      const s2 = this.input.charCodeAt(this.state.pos);
      switch (s2) {
        case 60:
        case 123:
          return this.state.pos === this.state.start ? s2 === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(132)) : super.getTokenFromCode(s2) : (t8 += this.input.slice(e2, this.state.pos), this.finishToken(131, t8));
        case 38:
          t8 += this.input.slice(e2, this.state.pos), t8 += this.jsxReadEntity(), e2 = this.state.pos;
          break;
        default:
          Xp(s2) ? (t8 += this.input.slice(e2, this.state.pos), t8 += this.jsxReadNewLine(true), e2 = this.state.pos) : ++this.state.pos;
      }
    }
  }
  jsxReadNewLine(t8) {
    const e2 = this.input.charCodeAt(this.state.pos);
    let s2;
    return ++this.state.pos, e2 === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, s2 = t8 ? "\n" : "\r\n") : s2 = String.fromCharCode(e2), ++this.state.curLine, this.state.lineStart = this.state.pos, s2;
  }
  jsxReadString(t8) {
    let e2 = "", s2 = ++this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, ic.UnterminatedString);
      const r2 = this.input.charCodeAt(this.state.pos);
      if (r2 === t8)
        break;
      r2 === 38 ? (e2 += this.input.slice(s2, this.state.pos), e2 += this.jsxReadEntity(), s2 = this.state.pos) : Xp(r2) ? (e2 += this.input.slice(s2, this.state.pos), e2 += this.jsxReadNewLine(false), s2 = this.state.pos) : ++this.state.pos;
    }
    return e2 += this.input.slice(s2, this.state.pos++), this.finishToken(123, e2);
  }
  jsxReadEntity() {
    let t8, e2 = "", s2 = 0, r2 = this.input[this.state.pos];
    const i2 = ++this.state.pos;
    for (; this.state.pos < this.length && s2++ < 10; ) {
      if (r2 = this.input[this.state.pos++], r2 === ";") {
        e2[0] === "#" ? e2[1] === "x" ? (e2 = e2.substr(2), wl.test(e2) && (t8 = String.fromCodePoint(parseInt(e2, 16)))) : (e2 = e2.substr(1), Bl.test(e2) && (t8 = String.fromCodePoint(parseInt(e2, 10)))) : t8 = Sl[e2];
        break;
      }
      e2 += r2;
    }
    return t8 || (this.state.pos = i2, "&");
  }
  jsxReadWord() {
    let t8;
    const e2 = this.state.pos;
    do {
      t8 = this.input.charCodeAt(++this.state.pos);
    } while (zc(t8) || t8 === 45);
    return this.finishToken(130, this.input.slice(e2, this.state.pos));
  }
  jsxParseIdentifier() {
    const t8 = this.startNode();
    return this.match(130) ? t8.name = this.state.value : Bc(this.state.type) ? t8.name = Nc(this.state.type) : this.unexpected(), this.next(), this.finishNode(t8, "JSXIdentifier");
  }
  jsxParseNamespacedName() {
    const t8 = this.state.start, e2 = this.state.startLoc, s2 = this.jsxParseIdentifier();
    if (!this.eat(14))
      return s2;
    const r2 = this.startNodeAt(t8, e2);
    return r2.namespace = s2, r2.name = this.jsxParseIdentifier(), this.finishNode(r2, "JSXNamespacedName");
  }
  jsxParseElementName() {
    const t8 = this.state.start, e2 = this.state.startLoc;
    let s2 = this.jsxParseNamespacedName();
    if (s2.type === "JSXNamespacedName")
      return s2;
    for (; this.eat(16); ) {
      const r2 = this.startNodeAt(t8, e2);
      r2.object = s2, r2.property = this.jsxParseIdentifier(), s2 = this.finishNode(r2, "JSXMemberExpression");
    }
    return s2;
  }
  jsxParseAttributeValue() {
    let t8;
    switch (this.state.type) {
      case 5:
        return t8 = this.startNode(), this.next(), t8 = this.jsxParseExpressionContainer(t8), t8.expression.type === "JSXEmptyExpression" && this.raise(t8.start, Nl.AttributeIsEmpty), t8;
      case 132:
      case 123:
        return this.parseExprAtom();
      default:
        throw this.raise(this.state.start, Nl.UnsupportedJsxValue);
    }
  }
  jsxParseEmptyExpression() {
    const t8 = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
    return this.finishNodeAt(t8, "JSXEmptyExpression", this.state.start, this.state.startLoc);
  }
  jsxParseSpreadChild(t8) {
    return this.next(), t8.expression = this.parseExpression(), this.expect(8), this.finishNode(t8, "JSXSpreadChild");
  }
  jsxParseExpressionContainer(t8) {
    if (this.match(8))
      t8.expression = this.jsxParseEmptyExpression();
    else {
      const e2 = this.parseExpression();
      t8.expression = e2;
    }
    return this.expect(8), this.finishNode(t8, "JSXExpressionContainer");
  }
  jsxParseAttribute() {
    const t8 = this.startNode();
    return this.eat(5) ? (this.expect(21), t8.argument = this.parseMaybeAssignAllowIn(), this.expect(8), this.finishNode(t8, "JSXSpreadAttribute")) : (t8.name = this.jsxParseNamespacedName(), t8.value = this.eat(27) ? this.jsxParseAttributeValue() : null, this.finishNode(t8, "JSXAttribute"));
  }
  jsxParseOpeningElementAt(t8, e2) {
    const s2 = this.startNodeAt(t8, e2);
    return this.match(133) ? (this.expect(133), this.finishNode(s2, "JSXOpeningFragment")) : (s2.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s2));
  }
  jsxParseOpeningElementAfterName(t8) {
    const e2 = [];
    for (; !this.match(50) && !this.match(133); )
      e2.push(this.jsxParseAttribute());
    return t8.attributes = e2, t8.selfClosing = this.eat(50), this.expect(133), this.finishNode(t8, "JSXOpeningElement");
  }
  jsxParseClosingElementAt(t8, e2) {
    const s2 = this.startNodeAt(t8, e2);
    return this.match(133) ? (this.expect(133), this.finishNode(s2, "JSXClosingFragment")) : (s2.name = this.jsxParseElementName(), this.expect(133), this.finishNode(s2, "JSXClosingElement"));
  }
  jsxParseElementAt(t8, e2) {
    const s2 = this.startNodeAt(t8, e2), r2 = [], i2 = this.jsxParseOpeningElementAt(t8, e2);
    let n2 = null;
    if (!i2.selfClosing) {
      t:
        for (; ; )
          switch (this.state.type) {
            case 132:
              if (t8 = this.state.start, e2 = this.state.startLoc, this.next(), this.eat(50)) {
                n2 = this.jsxParseClosingElementAt(t8, e2);
                break t;
              }
              r2.push(this.jsxParseElementAt(t8, e2));
              break;
            case 131:
              r2.push(this.parseExprAtom());
              break;
            case 5: {
              const t9 = this.startNode();
              this.next(), this.match(21) ? r2.push(this.jsxParseSpreadChild(t9)) : r2.push(this.jsxParseExpressionContainer(t9));
              break;
            }
            default:
              throw this.unexpected();
          }
      Il(i2) && !Il(n2) ? this.raise(n2.start, Nl.MissingClosingTagFragment) : !Il(i2) && Il(n2) ? this.raise(n2.start, Nl.MissingClosingTagElement, vl(i2.name)) : Il(i2) || Il(n2) || vl(n2.name) !== vl(i2.name) && this.raise(n2.start, Nl.MissingClosingTagElement, vl(i2.name));
    }
    if (Il(i2) ? (s2.openingFragment = i2, s2.closingFragment = n2) : (s2.openingElement = i2, s2.closingElement = n2), s2.children = r2, this.match(43))
      throw this.raise(this.state.start, Nl.UnwrappedAdjacentJSXElements);
    return Il(i2) ? this.finishNode(s2, "JSXFragment") : this.finishNode(s2, "JSXElement");
  }
  jsxParseElement() {
    const t8 = this.state.start, e2 = this.state.startLoc;
    return this.next(), this.jsxParseElementAt(t8, e2);
  }
  parseExprAtom(t8) {
    return this.match(131) ? this.parseLiteral(this.state.value, "JSXText") : this.match(132) ? this.jsxParseElement() : this.match(43) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(132), this.jsxParseElement()) : super.parseExprAtom(t8);
  }
  getTokenFromCode(t8) {
    const e2 = this.curContext();
    if (e2 === hc.j_expr)
      return this.jsxReadToken();
    if (e2 === hc.j_oTag || e2 === hc.j_cTag) {
      if (_c(t8))
        return this.jsxReadWord();
      if (t8 === 62)
        return ++this.state.pos, this.finishToken(133);
      if ((t8 === 34 || t8 === 39) && e2 === hc.j_oTag)
        return this.jsxReadString(t8);
    }
    return t8 === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(132)) : super.getTokenFromCode(t8);
  }
  updateContext(t8) {
    super.updateContext(t8);
    const { context: e2, type: s2 } = this.state;
    if (s2 === 50 && t8 === 132)
      e2.splice(-2, 2, hc.j_cTag), this.state.canStartJSXElement = false;
    else if (s2 === 132)
      e2.push(hc.j_expr, hc.j_oTag);
    else if (s2 === 133) {
      const s3 = e2.pop();
      s3 === hc.j_oTag && t8 === 50 || s3 === hc.j_cTag ? (e2.pop(), this.state.canStartJSXElement = e2[e2.length - 1] === hc.j_expr) : this.state.canStartJSXElement = true;
    } else
      this.state.canStartJSXElement = Ec[s2];
  }
}, flow: (t7) => class extends t7 {
  constructor() {
    super(...arguments), this.flowPragma = void 0;
  }
  getScopeHandler() {
    return el;
  }
  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }
  shouldParseEnums() {
    return !!this.getPluginOption("flow", "enums");
  }
  finishToken(t8, e2) {
    return t8 !== 123 && t8 !== 13 && t8 !== 26 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(t8, e2);
  }
  addComment(t8) {
    if (this.flowPragma === void 0) {
      const e2 = bl.exec(t8.value);
      if (e2)
        if (e2[1] === "flow")
          this.flowPragma = "flow";
        else {
          if (e2[1] !== "noflow")
            throw new Error("Unexpected flow pragma");
          this.flowPragma = "noflow";
        }
      else
        ;
    }
    return super.addComment(t8);
  }
  flowParseTypeInitialiser(t8) {
    const e2 = this.state.inType;
    this.state.inType = true, this.expect(t8 || 14);
    const s2 = this.flowParseType();
    return this.state.inType = e2, s2;
  }
  flowParsePredicate() {
    const t8 = this.startNode(), e2 = this.state.start;
    return this.next(), this.expectContextual(101), this.state.lastTokStart > e2 + 1 && this.raise(e2, Fl.UnexpectedSpaceBetweenModuloChecks), this.eat(10) ? (t8.value = this.parseExpression(), this.expect(11), this.finishNode(t8, "DeclaredPredicate")) : this.finishNode(t8, "InferredPredicate");
  }
  flowParseTypeAndPredicateInitialiser() {
    const t8 = this.state.inType;
    this.state.inType = true, this.expect(14);
    let e2 = null, s2 = null;
    return this.match(48) ? (this.state.inType = t8, s2 = this.flowParsePredicate()) : (e2 = this.flowParseType(), this.state.inType = t8, this.match(48) && (s2 = this.flowParsePredicate())), [e2, s2];
  }
  flowParseDeclareClass(t8) {
    return this.next(), this.flowParseInterfaceish(t8, true), this.finishNode(t8, "DeclareClass");
  }
  flowParseDeclareFunction(t8) {
    this.next();
    const e2 = t8.id = this.parseIdentifier(), s2 = this.startNode(), r2 = this.startNode();
    this.match(43) ? s2.typeParameters = this.flowParseTypeParameterDeclaration() : s2.typeParameters = null, this.expect(10);
    const i2 = this.flowParseFunctionTypeParams();
    return s2.params = i2.params, s2.rest = i2.rest, s2.this = i2._this, this.expect(11), [s2.returnType, t8.predicate] = this.flowParseTypeAndPredicateInitialiser(), r2.typeAnnotation = this.finishNode(s2, "FunctionTypeAnnotation"), e2.typeAnnotation = this.finishNode(r2, "TypeAnnotation"), this.resetEndLocation(e2), this.semicolon(), this.scope.declareName(t8.id.name, 2048, t8.id.start), this.finishNode(t8, "DeclareFunction");
  }
  flowParseDeclare(t8, e2) {
    if (this.match(74))
      return this.flowParseDeclareClass(t8);
    if (this.match(62))
      return this.flowParseDeclareFunction(t8);
    if (this.match(68))
      return this.flowParseDeclareVariable(t8);
    if (this.eatContextual(117))
      return this.match(16) ? this.flowParseDeclareModuleExports(t8) : (e2 && this.raise(this.state.lastTokStart, Fl.NestedDeclareModule), this.flowParseDeclareModule(t8));
    if (this.isContextual(120))
      return this.flowParseDeclareTypeAlias(t8);
    if (this.isContextual(121))
      return this.flowParseDeclareOpaqueType(t8);
    if (this.isContextual(119))
      return this.flowParseDeclareInterface(t8);
    if (this.match(76))
      return this.flowParseDeclareExportDeclaration(t8, e2);
    throw this.unexpected();
  }
  flowParseDeclareVariable(t8) {
    return this.next(), t8.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(t8.id.name, 5, t8.id.start), this.semicolon(), this.finishNode(t8, "DeclareVariable");
  }
  flowParseDeclareModule(t8) {
    this.scope.enter(0), this.match(123) ? t8.id = this.parseExprAtom() : t8.id = this.parseIdentifier();
    const e2 = t8.body = this.startNode(), s2 = e2.body = [];
    for (this.expect(5); !this.match(8); ) {
      let t9 = this.startNode();
      this.match(77) ? (this.next(), this.isContextual(120) || this.match(81) || this.raise(this.state.lastTokStart, Fl.InvalidNonTypeImportInDeclareModule), this.parseImport(t9)) : (this.expectContextual(115, Fl.UnsupportedStatementInDeclareModule), t9 = this.flowParseDeclare(t9, true)), s2.push(t9);
    }
    this.scope.exit(), this.expect(8), this.finishNode(e2, "BlockStatement");
    let r2 = null, i2 = false;
    return s2.forEach((t9) => {
      !function(t10) {
        return t10.type === "DeclareExportAllDeclaration" || t10.type === "DeclareExportDeclaration" && (!t10.declaration || t10.declaration.type !== "TypeAlias" && t10.declaration.type !== "InterfaceDeclaration");
      }(t9) ? t9.type === "DeclareModuleExports" && (i2 && this.raise(t9.start, Fl.DuplicateDeclareModuleExports), r2 === "ES" && this.raise(t9.start, Fl.AmbiguousDeclareModuleKind), r2 = "CommonJS", i2 = true) : (r2 === "CommonJS" && this.raise(t9.start, Fl.AmbiguousDeclareModuleKind), r2 = "ES");
    }), t8.kind = r2 || "CommonJS", this.finishNode(t8, "DeclareModule");
  }
  flowParseDeclareExportDeclaration(t8, e2) {
    if (this.expect(76), this.eat(59))
      return this.match(62) || this.match(74) ? t8.declaration = this.flowParseDeclare(this.startNode()) : (t8.declaration = this.flowParseType(), this.semicolon()), t8.default = true, this.finishNode(t8, "DeclareExportDeclaration");
    if (this.match(69) || this.isLet() || (this.isContextual(120) || this.isContextual(119)) && !e2) {
      const t9 = this.state.value, e3 = Tl[t9];
      throw this.raise(this.state.start, Fl.UnsupportedDeclareExportKind, t9, e3);
    }
    if (this.match(68) || this.match(62) || this.match(74) || this.isContextual(121))
      return t8.declaration = this.flowParseDeclare(this.startNode()), t8.default = false, this.finishNode(t8, "DeclareExportDeclaration");
    if (this.match(49) || this.match(5) || this.isContextual(119) || this.isContextual(120) || this.isContextual(121))
      return (t8 = this.parseExport(t8)).type === "ExportNamedDeclaration" && (t8.type = "ExportDeclaration", t8.default = false, delete t8.exportKind), t8.type = "Declare" + t8.type, t8;
    throw this.unexpected();
  }
  flowParseDeclareModuleExports(t8) {
    return this.next(), this.expectContextual(102), t8.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(t8, "DeclareModuleExports");
  }
  flowParseDeclareTypeAlias(t8) {
    return this.next(), this.flowParseTypeAlias(t8), t8.type = "DeclareTypeAlias", t8;
  }
  flowParseDeclareOpaqueType(t8) {
    return this.next(), this.flowParseOpaqueType(t8, true), t8.type = "DeclareOpaqueType", t8;
  }
  flowParseDeclareInterface(t8) {
    return this.next(), this.flowParseInterfaceish(t8), this.finishNode(t8, "DeclareInterface");
  }
  flowParseInterfaceish(t8) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (t8.id = this.flowParseRestrictedIdentifier(!e2, true), this.scope.declareName(t8.id.name, e2 ? 17 : 9, t8.id.start), this.match(43) ? t8.typeParameters = this.flowParseTypeParameterDeclaration() : t8.typeParameters = null, t8.extends = [], t8.implements = [], t8.mixins = [], this.eat(75))
      do {
        t8.extends.push(this.flowParseInterfaceExtends());
      } while (!e2 && this.eat(12));
    if (this.isContextual(108)) {
      this.next();
      do {
        t8.mixins.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }
    if (this.isContextual(104)) {
      this.next();
      do {
        t8.implements.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }
    t8.body = this.flowParseObjectType({ allowStatic: e2, allowExact: false, allowSpread: false, allowProto: e2, allowInexact: false });
  }
  flowParseInterfaceExtends() {
    const t8 = this.startNode();
    return t8.id = this.flowParseQualifiedTypeIdentifier(), this.match(43) ? t8.typeParameters = this.flowParseTypeParameterInstantiation() : t8.typeParameters = null, this.finishNode(t8, "InterfaceExtends");
  }
  flowParseInterface(t8) {
    return this.flowParseInterfaceish(t8), this.finishNode(t8, "InterfaceDeclaration");
  }
  checkNotUnderscore(t8) {
    t8 === "_" && this.raise(this.state.start, Fl.UnexpectedReservedUnderscore);
  }
  checkReservedType(t8, e2, s2) {
    xl.has(t8) && this.raise(e2, s2 ? Fl.AssignReservedType : Fl.UnexpectedReservedType, t8);
  }
  flowParseRestrictedIdentifier(t8, e2) {
    return this.checkReservedType(this.state.value, this.state.start, e2), this.parseIdentifier(t8);
  }
  flowParseTypeAlias(t8) {
    return t8.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(t8.id.name, 9, t8.id.start), this.match(43) ? t8.typeParameters = this.flowParseTypeParameterDeclaration() : t8.typeParameters = null, t8.right = this.flowParseTypeInitialiser(27), this.semicolon(), this.finishNode(t8, "TypeAlias");
  }
  flowParseOpaqueType(t8, e2) {
    return this.expectContextual(120), t8.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(t8.id.name, 9, t8.id.start), this.match(43) ? t8.typeParameters = this.flowParseTypeParameterDeclaration() : t8.typeParameters = null, t8.supertype = null, this.match(14) && (t8.supertype = this.flowParseTypeInitialiser(14)), t8.impltype = null, e2 || (t8.impltype = this.flowParseTypeInitialiser(27)), this.semicolon(), this.finishNode(t8, "OpaqueType");
  }
  flowParseTypeParameter() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const e2 = this.state.start, s2 = this.startNode(), r2 = this.flowParseVariance(), i2 = this.flowParseTypeAnnotatableIdentifier();
    return s2.name = i2.name, s2.variance = r2, s2.bound = i2.typeAnnotation, this.match(27) ? (this.eat(27), s2.default = this.flowParseType()) : t8 && this.raise(e2, Fl.MissingTypeParamDefault), this.finishNode(s2, "TypeParameter");
  }
  flowParseTypeParameterDeclaration() {
    const t8 = this.state.inType, e2 = this.startNode();
    e2.params = [], this.state.inType = true, this.match(43) || this.match(132) ? this.next() : this.unexpected();
    let s2 = false;
    do {
      const t9 = this.flowParseTypeParameter(s2);
      e2.params.push(t9), t9.default && (s2 = true), this.match(44) || this.expect(12);
    } while (!this.match(44));
    return this.expect(44), this.state.inType = t8, this.finishNode(e2, "TypeParameterDeclaration");
  }
  flowParseTypeParameterInstantiation() {
    const t8 = this.startNode(), e2 = this.state.inType;
    t8.params = [], this.state.inType = true, this.expect(43);
    const s2 = this.state.noAnonFunctionType;
    for (this.state.noAnonFunctionType = false; !this.match(44); )
      t8.params.push(this.flowParseType()), this.match(44) || this.expect(12);
    return this.state.noAnonFunctionType = s2, this.expect(44), this.state.inType = e2, this.finishNode(t8, "TypeParameterInstantiation");
  }
  flowParseTypeParameterInstantiationCallOrNew() {
    const t8 = this.startNode(), e2 = this.state.inType;
    for (t8.params = [], this.state.inType = true, this.expect(43); !this.match(44); )
      t8.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(44) || this.expect(12);
    return this.expect(44), this.state.inType = e2, this.finishNode(t8, "TypeParameterInstantiation");
  }
  flowParseInterfaceType() {
    const t8 = this.startNode();
    if (this.expectContextual(119), t8.extends = [], this.eat(75))
      do {
        t8.extends.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    return t8.body = this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: false, allowProto: false, allowInexact: false }), this.finishNode(t8, "InterfaceTypeAnnotation");
  }
  flowParseObjectPropertyKey() {
    return this.match(124) || this.match(123) ? this.parseExprAtom() : this.parseIdentifier(true);
  }
  flowParseObjectTypeIndexer(t8, e2, s2) {
    return t8.static = e2, this.lookahead().type === 14 ? (t8.id = this.flowParseObjectPropertyKey(), t8.key = this.flowParseTypeInitialiser()) : (t8.id = null, t8.key = this.flowParseType()), this.expect(3), t8.value = this.flowParseTypeInitialiser(), t8.variance = s2, this.finishNode(t8, "ObjectTypeIndexer");
  }
  flowParseObjectTypeInternalSlot(t8, e2) {
    return t8.static = e2, t8.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(43) || this.match(10) ? (t8.method = true, t8.optional = false, t8.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t8.start, t8.loc.start))) : (t8.method = false, this.eat(17) && (t8.optional = true), t8.value = this.flowParseTypeInitialiser()), this.finishNode(t8, "ObjectTypeInternalSlot");
  }
  flowParseObjectTypeMethodish(t8) {
    for (t8.params = [], t8.rest = null, t8.typeParameters = null, t8.this = null, this.match(43) && (t8.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(72) && (t8.this = this.flowParseFunctionTypeParam(true), t8.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
      t8.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
    return this.eat(21) && (t8.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), t8.returnType = this.flowParseTypeInitialiser(), this.finishNode(t8, "FunctionTypeAnnotation");
  }
  flowParseObjectTypeCallProperty(t8, e2) {
    const s2 = this.startNode();
    return t8.static = e2, t8.value = this.flowParseObjectTypeMethodish(s2), this.finishNode(t8, "ObjectTypeCallProperty");
  }
  flowParseObjectType(t8) {
    let { allowStatic: e2, allowExact: s2, allowSpread: r2, allowProto: i2, allowInexact: n2 } = t8;
    const a2 = this.state.inType;
    this.state.inType = true;
    const o2 = this.startNode();
    let u2, h2;
    o2.callProperties = [], o2.properties = [], o2.indexers = [], o2.internalSlots = [];
    let p2 = false;
    for (s2 && this.match(6) ? (this.expect(6), u2 = 9, h2 = true) : (this.expect(5), u2 = 8, h2 = false), o2.exact = h2; !this.match(u2); ) {
      let t9 = false, s3 = null, a3 = null;
      const u3 = this.startNode();
      if (i2 && this.isContextual(109)) {
        const t10 = this.lookahead();
        t10.type !== 14 && t10.type !== 17 && (this.next(), s3 = this.state.start, e2 = false);
      }
      if (e2 && this.isContextual(98)) {
        const e3 = this.lookahead();
        e3.type !== 14 && e3.type !== 17 && (this.next(), t9 = true);
      }
      const c3 = this.flowParseVariance();
      if (this.eat(0))
        s3 != null && this.unexpected(s3), this.eat(0) ? (c3 && this.unexpected(c3.start), o2.internalSlots.push(this.flowParseObjectTypeInternalSlot(u3, t9))) : o2.indexers.push(this.flowParseObjectTypeIndexer(u3, t9, c3));
      else if (this.match(10) || this.match(43))
        s3 != null && this.unexpected(s3), c3 && this.unexpected(c3.start), o2.callProperties.push(this.flowParseObjectTypeCallProperty(u3, t9));
      else {
        let e3 = "init";
        if (this.isContextual(92) || this.isContextual(97)) {
          bc(this.lookahead().type) && (e3 = this.state.value, this.next());
        }
        const i3 = this.flowParseObjectTypeProperty(u3, t9, s3, c3, e3, r2, n2 != null ? n2 : !h2);
        i3 === null ? (p2 = true, a3 = this.state.lastTokStart) : o2.properties.push(i3);
      }
      this.flowObjectTypeSemicolon(), !a3 || this.match(8) || this.match(9) || this.raise(a3, Fl.UnexpectedExplicitInexactInObject);
    }
    this.expect(u2), r2 && (o2.inexact = p2);
    const c2 = this.finishNode(o2, "ObjectTypeAnnotation");
    return this.state.inType = a2, c2;
  }
  flowParseObjectTypeProperty(t8, e2, s2, r2, i2, n2, a2) {
    if (this.eat(21)) {
      return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (n2 ? a2 || this.raise(this.state.lastTokStart, Fl.InexactInsideExact) : this.raise(this.state.lastTokStart, Fl.InexactInsideNonObject), r2 && this.raise(r2.start, Fl.InexactVariance), null) : (n2 || this.raise(this.state.lastTokStart, Fl.UnexpectedSpreadType), s2 != null && this.unexpected(s2), r2 && this.raise(r2.start, Fl.SpreadVariance), t8.argument = this.flowParseType(), this.finishNode(t8, "ObjectTypeSpreadProperty"));
    }
    {
      t8.key = this.flowParseObjectPropertyKey(), t8.static = e2, t8.proto = s2 != null, t8.kind = i2;
      let a3 = false;
      return this.match(43) || this.match(10) ? (t8.method = true, s2 != null && this.unexpected(s2), r2 && this.unexpected(r2.start), t8.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t8.start, t8.loc.start)), i2 !== "get" && i2 !== "set" || this.flowCheckGetterSetterParams(t8), !n2 && t8.key.name === "constructor" && t8.value.this && this.raise(t8.value.this.start, Fl.ThisParamBannedInConstructor)) : (i2 !== "init" && this.unexpected(), t8.method = false, this.eat(17) && (a3 = true), t8.value = this.flowParseTypeInitialiser(), t8.variance = r2), t8.optional = a3, this.finishNode(t8, "ObjectTypeProperty");
    }
  }
  flowCheckGetterSetterParams(t8) {
    const e2 = t8.kind === "get" ? 0 : 1, s2 = t8.start, r2 = t8.value.params.length + (t8.value.rest ? 1 : 0);
    t8.value.this && this.raise(t8.value.this.start, t8.kind === "get" ? Fl.GetterMayNotHaveThisParam : Fl.SetterMayNotHaveThisParam), r2 !== e2 && (t8.kind === "get" ? this.raise(s2, ic.BadGetterArity) : this.raise(s2, ic.BadSetterArity)), t8.kind === "set" && t8.value.rest && this.raise(s2, ic.BadSetterRestParameter);
  }
  flowObjectTypeSemicolon() {
    this.eat(13) || this.eat(12) || this.match(8) || this.match(9) || this.unexpected();
  }
  flowParseQualifiedTypeIdentifier(t8, e2, s2) {
    t8 = t8 || this.state.start, e2 = e2 || this.state.startLoc;
    let r2 = s2 || this.flowParseRestrictedIdentifier(true);
    for (; this.eat(16); ) {
      const s3 = this.startNodeAt(t8, e2);
      s3.qualification = r2, s3.id = this.flowParseRestrictedIdentifier(true), r2 = this.finishNode(s3, "QualifiedTypeIdentifier");
    }
    return r2;
  }
  flowParseGenericType(t8, e2, s2) {
    const r2 = this.startNodeAt(t8, e2);
    return r2.typeParameters = null, r2.id = this.flowParseQualifiedTypeIdentifier(t8, e2, s2), this.match(43) && (r2.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(r2, "GenericTypeAnnotation");
  }
  flowParseTypeofType() {
    const t8 = this.startNode();
    return this.expect(81), t8.argument = this.flowParsePrimaryType(), this.finishNode(t8, "TypeofTypeAnnotation");
  }
  flowParseTupleType() {
    const t8 = this.startNode();
    for (t8.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (t8.types.push(this.flowParseType()), !this.match(3)); )
      this.expect(12);
    return this.expect(3), this.finishNode(t8, "TupleTypeAnnotation");
  }
  flowParseFunctionTypeParam(t8) {
    let e2 = null, s2 = false, r2 = null;
    const i2 = this.startNode(), n2 = this.lookahead(), a2 = this.state.type === 72;
    return n2.type === 14 || n2.type === 17 ? (a2 && !t8 && this.raise(i2.start, Fl.ThisParamMustBeFirst), e2 = this.parseIdentifier(a2), this.eat(17) && (s2 = true, a2 && this.raise(i2.start, Fl.ThisParamMayNotBeOptional)), r2 = this.flowParseTypeInitialiser()) : r2 = this.flowParseType(), i2.name = e2, i2.optional = s2, i2.typeAnnotation = r2, this.finishNode(i2, "FunctionTypeParam");
  }
  reinterpretTypeAsFunctionTypeParam(t8) {
    const e2 = this.startNodeAt(t8.start, t8.loc.start);
    return e2.name = null, e2.optional = false, e2.typeAnnotation = t8, this.finishNode(e2, "FunctionTypeParam");
  }
  flowParseFunctionTypeParams() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e2 = null, s2 = null;
    for (this.match(72) && (s2 = this.flowParseFunctionTypeParam(true), s2.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
      t8.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
    return this.eat(21) && (e2 = this.flowParseFunctionTypeParam(false)), { params: t8, rest: e2, _this: s2 };
  }
  flowIdentToTypeAnnotation(t8, e2, s2, r2) {
    switch (r2.name) {
      case "any":
        return this.finishNode(s2, "AnyTypeAnnotation");
      case "bool":
      case "boolean":
        return this.finishNode(s2, "BooleanTypeAnnotation");
      case "mixed":
        return this.finishNode(s2, "MixedTypeAnnotation");
      case "empty":
        return this.finishNode(s2, "EmptyTypeAnnotation");
      case "number":
        return this.finishNode(s2, "NumberTypeAnnotation");
      case "string":
        return this.finishNode(s2, "StringTypeAnnotation");
      case "symbol":
        return this.finishNode(s2, "SymbolTypeAnnotation");
      default:
        return this.checkNotUnderscore(r2.name), this.flowParseGenericType(t8, e2, r2);
    }
  }
  flowParsePrimaryType() {
    const t8 = this.state.start, e2 = this.state.startLoc, s2 = this.startNode();
    let r2, i2, n2 = false;
    const a2 = this.state.noAnonFunctionType;
    switch (this.state.type) {
      case 5:
        return this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: true, allowProto: false, allowInexact: true });
      case 6:
        return this.flowParseObjectType({ allowStatic: false, allowExact: true, allowSpread: true, allowProto: false, allowInexact: false });
      case 0:
        return this.state.noAnonFunctionType = false, i2 = this.flowParseTupleType(), this.state.noAnonFunctionType = a2, i2;
      case 43:
        return s2.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), r2 = this.flowParseFunctionTypeParams(), s2.params = r2.params, s2.rest = r2.rest, s2.this = r2._this, this.expect(11), this.expect(19), s2.returnType = this.flowParseType(), this.finishNode(s2, "FunctionTypeAnnotation");
      case 10:
        if (this.next(), !this.match(11) && !this.match(21))
          if (Pc(this.state.type) || this.match(72)) {
            const t9 = this.lookahead().type;
            n2 = t9 !== 17 && t9 !== 14;
          } else
            n2 = true;
        if (n2) {
          if (this.state.noAnonFunctionType = false, i2 = this.flowParseType(), this.state.noAnonFunctionType = a2, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
            return this.expect(11), i2;
          this.eat(12);
        }
        return r2 = i2 ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(i2)]) : this.flowParseFunctionTypeParams(), s2.params = r2.params, s2.rest = r2.rest, s2.this = r2._this, this.expect(11), this.expect(19), s2.returnType = this.flowParseType(), s2.typeParameters = null, this.finishNode(s2, "FunctionTypeAnnotation");
      case 123:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
      case 79:
      case 80:
        return s2.value = this.match(79), this.next(), this.finishNode(s2, "BooleanLiteralTypeAnnotation");
      case 47:
        if (this.state.value === "-") {
          if (this.next(), this.match(124))
            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s2);
          if (this.match(125))
            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s2);
          throw this.raise(this.state.start, Fl.UnexpectedSubtractionOperand);
        }
        throw this.unexpected();
      case 124:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
      case 125:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
      case 82:
        return this.next(), this.finishNode(s2, "VoidTypeAnnotation");
      case 78:
        return this.next(), this.finishNode(s2, "NullLiteralTypeAnnotation");
      case 72:
        return this.next(), this.finishNode(s2, "ThisTypeAnnotation");
      case 49:
        return this.next(), this.finishNode(s2, "ExistsTypeAnnotation");
      case 81:
        return this.flowParseTypeofType();
      default:
        if (Bc(this.state.type)) {
          const t9 = Nc(this.state.type);
          return this.next(), super.createIdentifier(s2, t9);
        }
        if (Pc(this.state.type))
          return this.isContextual(119) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(t8, e2, s2, this.parseIdentifier());
    }
    throw this.unexpected();
  }
  flowParsePostfixType() {
    const t8 = this.state.start, e2 = this.state.startLoc;
    let s2 = this.flowParsePrimaryType(), r2 = false;
    for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
      const i2 = this.startNodeAt(t8, e2), n2 = this.eat(18);
      r2 = r2 || n2, this.expect(0), !n2 && this.match(3) ? (i2.elementType = s2, this.next(), s2 = this.finishNode(i2, "ArrayTypeAnnotation")) : (i2.objectType = s2, i2.indexType = this.flowParseType(), this.expect(3), r2 ? (i2.optional = n2, s2 = this.finishNode(i2, "OptionalIndexedAccessType")) : s2 = this.finishNode(i2, "IndexedAccessType"));
    }
    return s2;
  }
  flowParsePrefixType() {
    const t8 = this.startNode();
    return this.eat(17) ? (t8.typeAnnotation = this.flowParsePrefixType(), this.finishNode(t8, "NullableTypeAnnotation")) : this.flowParsePostfixType();
  }
  flowParseAnonFunctionWithoutParens() {
    const t8 = this.flowParsePrefixType();
    if (!this.state.noAnonFunctionType && this.eat(19)) {
      const e2 = this.startNodeAt(t8.start, t8.loc.start);
      return e2.params = [this.reinterpretTypeAsFunctionTypeParam(t8)], e2.rest = null, e2.this = null, e2.returnType = this.flowParseType(), e2.typeParameters = null, this.finishNode(e2, "FunctionTypeAnnotation");
    }
    return t8;
  }
  flowParseIntersectionType() {
    const t8 = this.startNode();
    this.eat(41);
    const e2 = this.flowParseAnonFunctionWithoutParens();
    for (t8.types = [e2]; this.eat(41); )
      t8.types.push(this.flowParseAnonFunctionWithoutParens());
    return t8.types.length === 1 ? e2 : this.finishNode(t8, "IntersectionTypeAnnotation");
  }
  flowParseUnionType() {
    const t8 = this.startNode();
    this.eat(39);
    const e2 = this.flowParseIntersectionType();
    for (t8.types = [e2]; this.eat(39); )
      t8.types.push(this.flowParseIntersectionType());
    return t8.types.length === 1 ? e2 : this.finishNode(t8, "UnionTypeAnnotation");
  }
  flowParseType() {
    const t8 = this.state.inType;
    this.state.inType = true;
    const e2 = this.flowParseUnionType();
    return this.state.inType = t8, e2;
  }
  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === 122 && this.state.value === "_") {
      const t8 = this.state.start, e2 = this.state.startLoc, s2 = this.parseIdentifier();
      return this.flowParseGenericType(t8, e2, s2);
    }
    return this.flowParseType();
  }
  flowParseTypeAnnotation() {
    const t8 = this.startNode();
    return t8.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(t8, "TypeAnnotation");
  }
  flowParseTypeAnnotatableIdentifier(t8) {
    const e2 = t8 ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
    return this.match(14) && (e2.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e2)), e2;
  }
  typeCastToParameter(t8) {
    return t8.expression.typeAnnotation = t8.typeAnnotation, this.resetEndLocation(t8.expression, t8.typeAnnotation.end, t8.typeAnnotation.loc.end), t8.expression;
  }
  flowParseVariance() {
    let t8 = null;
    return this.match(47) && (t8 = this.startNode(), this.state.value === "+" ? t8.kind = "plus" : t8.kind = "minus", this.next(), this.finishNode(t8, "Variance")), t8;
  }
  parseFunctionBody(t8, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return e2 ? this.forwardNoArrowParamsConversionAt(t8, () => super.parseFunctionBody(t8, true, s2)) : super.parseFunctionBody(t8, false, s2);
  }
  parseFunctionBodyAndFinish(t8, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (this.match(14)) {
      const e3 = this.startNode();
      [e3.typeAnnotation, t8.predicate] = this.flowParseTypeAndPredicateInitialiser(), t8.returnType = e3.typeAnnotation ? this.finishNode(e3, "TypeAnnotation") : null;
    }
    super.parseFunctionBodyAndFinish(t8, e2, s2);
  }
  parseStatement(t8, e2) {
    if (this.state.strict && this.isContextual(119)) {
      if (Tc(this.lookahead().type)) {
        const t9 = this.startNode();
        return this.next(), this.flowParseInterface(t9);
      }
    } else if (this.shouldParseEnums() && this.isContextual(116)) {
      const t9 = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(t9);
    }
    const s2 = super.parseStatement(t8, e2);
    return this.flowPragma !== void 0 || this.isValidDirective(s2) || (this.flowPragma = null), s2;
  }
  parseExpressionStatement(t8, e2) {
    if (e2.type === "Identifier") {
      if (e2.name === "declare") {
        if (this.match(74) || Pc(this.state.type) || this.match(62) || this.match(68) || this.match(76))
          return this.flowParseDeclare(t8);
      } else if (Pc(this.state.type)) {
        if (e2.name === "interface")
          return this.flowParseInterface(t8);
        if (e2.name === "type")
          return this.flowParseTypeAlias(t8);
        if (e2.name === "opaque")
          return this.flowParseOpaqueType(t8, false);
      }
    }
    return super.parseExpressionStatement(t8, e2);
  }
  shouldParseExportDeclaration() {
    const { type: t8 } = this.state;
    return wc(t8) || this.shouldParseEnums() && t8 === 116 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
  }
  isExportDefaultSpecifier() {
    const { type: t8 } = this.state;
    return wc(t8) || this.shouldParseEnums() && t8 === 116 ? this.state.containsEsc : super.isExportDefaultSpecifier();
  }
  parseExportDefaultExpression() {
    if (this.shouldParseEnums() && this.isContextual(116)) {
      const t8 = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(t8);
    }
    return super.parseExportDefaultExpression();
  }
  parseConditional(t8, e2, s2, r2) {
    if (!this.match(17))
      return t8;
    if (this.state.maybeInArrowParameters) {
      const e3 = this.lookaheadCharCode();
      if (e3 === 44 || e3 === 61 || e3 === 58 || e3 === 41)
        return this.setOptionalParametersError(r2), t8;
    }
    this.expect(17);
    const i2 = this.state.clone(), n2 = this.state.noArrowAt, a2 = this.startNodeAt(e2, s2);
    let { consequent: o2, failed: u2 } = this.tryParseConditionalConsequent(), [h2, p2] = this.getArrowLikeExpressions(o2);
    if (u2 || p2.length > 0) {
      const t9 = [...n2];
      if (p2.length > 0) {
        this.state = i2, this.state.noArrowAt = t9;
        for (let e3 = 0; e3 < p2.length; e3++)
          t9.push(p2[e3].start);
        ({ consequent: o2, failed: u2 } = this.tryParseConditionalConsequent()), [h2, p2] = this.getArrowLikeExpressions(o2);
      }
      u2 && h2.length > 1 && this.raise(i2.start, Fl.AmbiguousConditionalArrow), u2 && h2.length === 1 && (this.state = i2, t9.push(h2[0].start), this.state.noArrowAt = t9, { consequent: o2, failed: u2 } = this.tryParseConditionalConsequent());
    }
    return this.getArrowLikeExpressions(o2, true), this.state.noArrowAt = n2, this.expect(14), a2.test = t8, a2.consequent = o2, a2.alternate = this.forwardNoArrowParamsConversionAt(a2, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(a2, "ConditionalExpression");
  }
  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const t8 = this.parseMaybeAssignAllowIn(), e2 = !this.match(14);
    return this.state.noArrowParamsConversionAt.pop(), { consequent: t8, failed: e2 };
  }
  getArrowLikeExpressions(t8, e2) {
    const s2 = [t8], r2 = [];
    for (; s2.length !== 0; ) {
      const t9 = s2.pop();
      t9.type === "ArrowFunctionExpression" ? (t9.typeParameters || !t9.returnType ? this.finishArrowValidation(t9) : r2.push(t9), s2.push(t9.body)) : t9.type === "ConditionalExpression" && (s2.push(t9.consequent), s2.push(t9.alternate));
    }
    return e2 ? (r2.forEach((t9) => this.finishArrowValidation(t9)), [r2, []]) : function(t9, e3) {
      const s3 = [], r3 = [];
      for (let i2 = 0; i2 < t9.length; i2++)
        (e3(t9[i2], i2, t9) ? s3 : r3).push(t9[i2]);
      return [s3, r3];
    }(r2, (t9) => t9.params.every((t10) => this.isAssignable(t10, true)));
  }
  finishArrowValidation(t8) {
    var e2;
    this.toAssignableList(t8.params, (e2 = t8.extra) == null ? void 0 : e2.trailingComma, false), this.scope.enter(6), super.checkParams(t8, false, true), this.scope.exit();
  }
  forwardNoArrowParamsConversionAt(t8, e2) {
    let s2;
    return this.state.noArrowParamsConversionAt.indexOf(t8.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), s2 = e2(), this.state.noArrowParamsConversionAt.pop()) : s2 = e2(), s2;
  }
  parseParenItem(t8, e2, s2) {
    if (t8 = super.parseParenItem(t8, e2, s2), this.eat(17) && (t8.optional = true, this.resetEndLocation(t8)), this.match(14)) {
      const r2 = this.startNodeAt(e2, s2);
      return r2.expression = t8, r2.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r2, "TypeCastExpression");
    }
    return t8;
  }
  assertModuleNodeAllowed(t8) {
    t8.type === "ImportDeclaration" && (t8.importKind === "type" || t8.importKind === "typeof") || t8.type === "ExportNamedDeclaration" && t8.exportKind === "type" || t8.type === "ExportAllDeclaration" && t8.exportKind === "type" || super.assertModuleNodeAllowed(t8);
  }
  parseExport(t8) {
    const e2 = super.parseExport(t8);
    return e2.type !== "ExportNamedDeclaration" && e2.type !== "ExportAllDeclaration" || (e2.exportKind = e2.exportKind || "value"), e2;
  }
  parseExportDeclaration(t8) {
    if (this.isContextual(120)) {
      t8.exportKind = "type";
      const e2 = this.startNode();
      return this.next(), this.match(5) ? (t8.specifiers = this.parseExportSpecifiers(true), this.parseExportFrom(t8), null) : this.flowParseTypeAlias(e2);
    }
    if (this.isContextual(121)) {
      t8.exportKind = "type";
      const e2 = this.startNode();
      return this.next(), this.flowParseOpaqueType(e2, false);
    }
    if (this.isContextual(119)) {
      t8.exportKind = "type";
      const e2 = this.startNode();
      return this.next(), this.flowParseInterface(e2);
    }
    if (this.shouldParseEnums() && this.isContextual(116)) {
      t8.exportKind = "value";
      const e2 = this.startNode();
      return this.next(), this.flowParseEnumDeclaration(e2);
    }
    return super.parseExportDeclaration(t8);
  }
  eatExportStar(t8) {
    return !!super.eatExportStar(...arguments) || !(!this.isContextual(120) || this.lookahead().type !== 49) && (t8.exportKind = "type", this.next(), this.next(), true);
  }
  maybeParseExportNamespaceSpecifier(t8) {
    const e2 = this.state.start, s2 = super.maybeParseExportNamespaceSpecifier(t8);
    return s2 && t8.exportKind === "type" && this.unexpected(e2), s2;
  }
  parseClassId(t8, e2, s2) {
    super.parseClassId(t8, e2, s2), this.match(43) && (t8.typeParameters = this.flowParseTypeParameterDeclaration());
  }
  parseClassMember(t8, e2, s2) {
    const r2 = this.state.start;
    if (this.isContextual(115)) {
      if (this.parseClassMemberFromModifier(t8, e2))
        return;
      e2.declare = true;
    }
    super.parseClassMember(t8, e2, s2), e2.declare && (e2.type !== "ClassProperty" && e2.type !== "ClassPrivateProperty" && e2.type !== "PropertyDefinition" ? this.raise(r2, Fl.DeclareClassElement) : e2.value && this.raise(e2.value.start, Fl.DeclareClassFieldInitializer));
  }
  isIterator(t8) {
    return t8 === "iterator" || t8 === "asyncIterator";
  }
  readIterator() {
    const t8 = super.readWord1(), e2 = "@@" + t8;
    this.isIterator(t8) && this.state.inType || this.raise(this.state.pos, ic.InvalidIdentifier, e2), this.finishToken(122, e2);
  }
  getTokenFromCode(t8) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    return t8 === 123 && e2 === 124 ? this.finishOp(6, 2) : !this.state.inType || t8 !== 62 && t8 !== 60 ? this.state.inType && t8 === 63 ? e2 === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : function(t9, e3) {
      return t9 === 64 && e3 === 64;
    }(t8, e2) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(t8) : this.finishOp(t8 === 62 ? 44 : 43, 1);
  }
  isAssignable(t8, e2) {
    return t8.type === "TypeCastExpression" ? this.isAssignable(t8.expression, e2) : super.isAssignable(t8, e2);
  }
  toAssignable(t8) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return t8.type === "TypeCastExpression" ? super.toAssignable(this.typeCastToParameter(t8), e2) : super.toAssignable(t8, e2);
  }
  toAssignableList(t8, e2, s2) {
    for (let e3 = 0; e3 < t8.length; e3++) {
      const s3 = t8[e3];
      (s3 == null ? void 0 : s3.type) === "TypeCastExpression" && (t8[e3] = this.typeCastToParameter(s3));
    }
    return super.toAssignableList(t8, e2, s2);
  }
  toReferencedList(t8, e2) {
    for (let r2 = 0; r2 < t8.length; r2++) {
      var s2;
      const i2 = t8[r2];
      !i2 || i2.type !== "TypeCastExpression" || (s2 = i2.extra) != null && s2.parenthesized || !(t8.length > 1) && e2 || this.raise(i2.typeAnnotation.start, Fl.TypeCastInPattern);
    }
    return t8;
  }
  parseArrayLike(t8, e2, s2, r2) {
    const i2 = super.parseArrayLike(t8, e2, s2, r2);
    return e2 && !this.state.maybeInArrowParameters && this.toReferencedList(i2.elements), i2;
  }
  checkLVal(t8) {
    if (t8.type !== "TypeCastExpression") {
      for (var e2 = arguments.length, s2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++)
        s2[r2 - 1] = arguments[r2];
      return super.checkLVal(t8, ...s2);
    }
  }
  parseClassProperty(t8) {
    return this.match(14) && (t8.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(t8);
  }
  parseClassPrivateProperty(t8) {
    return this.match(14) && (t8.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(t8);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(14) || super.isClassProperty();
  }
  isNonstaticConstructor(t8) {
    return !this.match(14) && super.isNonstaticConstructor(t8);
  }
  pushClassMethod(t8, e2, s2, r2, i2, n2) {
    if (e2.variance && this.unexpected(e2.variance.start), delete e2.variance, this.match(43) && (e2.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(t8, e2, s2, r2, i2, n2), e2.params && i2) {
      const t9 = e2.params;
      t9.length > 0 && this.isThisParam(t9[0]) && this.raise(e2.start, Fl.ThisParamBannedInConstructor);
    } else if (e2.type === "MethodDefinition" && i2 && e2.value.params) {
      const t9 = e2.value.params;
      t9.length > 0 && this.isThisParam(t9[0]) && this.raise(e2.start, Fl.ThisParamBannedInConstructor);
    }
  }
  pushClassPrivateMethod(t8, e2, s2, r2) {
    e2.variance && this.unexpected(e2.variance.start), delete e2.variance, this.match(43) && (e2.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(t8, e2, s2, r2);
  }
  parseClassSuper(t8) {
    if (super.parseClassSuper(t8), t8.superClass && this.match(43) && (t8.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(104)) {
      this.next();
      const e2 = t8.implements = [];
      do {
        const t9 = this.startNode();
        t9.id = this.flowParseRestrictedIdentifier(true), this.match(43) ? t9.typeParameters = this.flowParseTypeParameterInstantiation() : t9.typeParameters = null, e2.push(this.finishNode(t9, "ClassImplements"));
      } while (this.eat(12));
    }
  }
  checkGetterSetterParams(t8) {
    super.checkGetterSetterParams(t8);
    const e2 = this.getObjectOrClassMethodParams(t8);
    if (e2.length > 0) {
      const s2 = e2[0];
      this.isThisParam(s2) && t8.kind === "get" ? this.raise(s2.start, Fl.GetterMayNotHaveThisParam) : this.isThisParam(s2) && this.raise(s2.start, Fl.SetterMayNotHaveThisParam);
    }
  }
  parsePropertyNamePrefixOperator(t8) {
    t8.variance = this.flowParseVariance();
  }
  parseObjPropValue(t8, e2, s2, r2, i2, n2, a2, o2) {
    let u2;
    t8.variance && this.unexpected(t8.variance.start), delete t8.variance, this.match(43) && !a2 && (u2 = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected()), super.parseObjPropValue(t8, e2, s2, r2, i2, n2, a2, o2), u2 && ((t8.value || t8).typeParameters = u2);
  }
  parseAssignableListItemTypes(t8) {
    return this.eat(17) && (t8.type !== "Identifier" && this.raise(t8.start, Fl.PatternIsOptional), this.isThisParam(t8) && this.raise(t8.start, Fl.ThisParamMayNotBeOptional), t8.optional = true), this.match(14) ? t8.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(t8) && this.raise(t8.start, Fl.ThisParamAnnotationRequired), this.match(27) && this.isThisParam(t8) && this.raise(t8.start, Fl.ThisParamNoDefault), this.resetEndLocation(t8), t8;
  }
  parseMaybeDefault(t8, e2, s2) {
    const r2 = super.parseMaybeDefault(t8, e2, s2);
    return r2.type === "AssignmentPattern" && r2.typeAnnotation && r2.right.start < r2.typeAnnotation.start && this.raise(r2.typeAnnotation.start, Fl.TypeBeforeInitializer), r2;
  }
  shouldParseDefaultImport(t8) {
    return gl(t8) ? Pl(this.state.type) : super.shouldParseDefaultImport(t8);
  }
  parseImportSpecifierLocal(t8, e2, s2, r2) {
    e2.local = gl(t8) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), this.checkLVal(e2.local, r2, 9), t8.specifiers.push(this.finishNode(e2, s2));
  }
  maybeParseDefaultImportSpecifier(t8) {
    t8.importKind = "value";
    let e2 = null;
    if (this.match(81) ? e2 = "typeof" : this.isContextual(120) && (e2 = "type"), e2) {
      const s2 = this.lookahead(), { type: r2 } = s2;
      e2 === "type" && r2 === 49 && this.unexpected(s2.start), (Pl(r2) || r2 === 5 || r2 === 49) && (this.next(), t8.importKind = e2);
    }
    return super.maybeParseDefaultImportSpecifier(t8);
  }
  parseImportSpecifier(t8, e2, s2, r2) {
    const i2 = t8.imported;
    let n2 = null;
    i2.type === "Identifier" && (i2.name === "type" ? n2 = "type" : i2.name === "typeof" && (n2 = "typeof"));
    let a2 = false;
    if (this.isContextual(87) && !this.isLookaheadContextual("as")) {
      const e3 = this.parseIdentifier(true);
      n2 === null || Tc(this.state.type) ? (t8.imported = i2, t8.importKind = null, t8.local = this.parseIdentifier()) : (t8.imported = e3, t8.importKind = n2, t8.local = Al(e3));
    } else {
      if (n2 !== null && Tc(this.state.type))
        t8.imported = this.parseIdentifier(true), t8.importKind = n2;
      else {
        if (e2)
          throw this.raise(t8.start, ic.ImportBindingIsString, i2.value);
        t8.imported = i2, t8.importKind = null;
      }
      this.eatContextual(87) ? t8.local = this.parseIdentifier() : (a2 = true, t8.local = Al(t8.imported));
    }
    const o2 = gl(t8);
    return s2 && o2 && this.raise(t8.start, Fl.ImportTypeShorthandOnlyInPureImport), (s2 || o2) && this.checkReservedType(t8.local.name, t8.local.start, true), !a2 || s2 || o2 || this.checkReservedWord(t8.local.name, t8.start, true, true), this.checkLVal(t8.local, "import specifier", 9), this.finishNode(t8, "ImportSpecifier");
  }
  parseBindingAtom() {
    return this.state.type === 72 ? this.parseIdentifier(true) : super.parseBindingAtom();
  }
  parseFunctionParams(t8, e2) {
    const s2 = t8.kind;
    s2 !== "get" && s2 !== "set" && this.match(43) && (t8.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(t8, e2);
  }
  parseVarId(t8, e2) {
    super.parseVarId(t8, e2), this.match(14) && (t8.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t8.id));
  }
  parseAsyncArrowFromCallExpression(t8, e2) {
    if (this.match(14)) {
      const e3 = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true, t8.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = e3;
    }
    return super.parseAsyncArrowFromCallExpression(t8, e2);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  parseMaybeAssign(t8, e2) {
    var s2;
    let r2, i2 = null;
    if (this.hasPlugin("jsx") && (this.match(132) || this.match(43))) {
      if (i2 = this.state.clone(), r2 = this.tryParse(() => super.parseMaybeAssign(t8, e2), i2), !r2.error)
        return r2.node;
      const { context: s3 } = this.state, n3 = s3[s3.length - 1];
      n3 === hc.j_oTag ? s3.length -= 2 : n3 === hc.j_expr && (s3.length -= 1);
    }
    if ((s2 = r2) != null && s2.error || this.match(43)) {
      var n2, a2;
      let s3;
      i2 = i2 || this.state.clone();
      const o2 = this.tryParse((r3) => {
        var i3;
        s3 = this.flowParseTypeParameterDeclaration();
        const n3 = this.forwardNoArrowParamsConversionAt(s3, () => {
          const r4 = super.parseMaybeAssign(t8, e2);
          return this.resetStartLocationFromNode(r4, s3), r4;
        });
        (i3 = n3.extra) != null && i3.parenthesized && r3();
        const a3 = this.maybeUnwrapTypeCastExpression(n3);
        return a3.type !== "ArrowFunctionExpression" && r3(), a3.typeParameters = s3, this.resetStartLocationFromNode(a3, s3), n3;
      }, i2);
      let u2 = null;
      if (o2.node && this.maybeUnwrapTypeCastExpression(o2.node).type === "ArrowFunctionExpression") {
        if (!o2.error && !o2.aborted)
          return o2.node.async && this.raise(s3.start, Fl.UnexpectedTypeParameterBeforeAsyncArrowFunction), o2.node;
        u2 = o2.node;
      }
      if ((n2 = r2) != null && n2.node)
        return this.state = r2.failState, r2.node;
      if (u2)
        return this.state = o2.failState, u2;
      if ((a2 = r2) != null && a2.thrown)
        throw r2.error;
      if (o2.thrown)
        throw o2.error;
      throw this.raise(s3.start, Fl.UnexpectedTokenAfterTypeParameter);
    }
    return super.parseMaybeAssign(t8, e2);
  }
  parseArrow(t8) {
    if (this.match(14)) {
      const e2 = this.tryParse(() => {
        const e3 = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const s2 = this.startNode();
        return [s2.typeAnnotation, t8.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = e3, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), s2;
      });
      if (e2.thrown)
        return null;
      e2.error && (this.state = e2.failState), t8.returnType = e2.node.typeAnnotation ? this.finishNode(e2.node, "TypeAnnotation") : null;
    }
    return super.parseArrow(t8);
  }
  shouldParseArrow(t8) {
    return this.match(14) || super.shouldParseArrow(t8);
  }
  setArrowFunctionParameters(t8, e2) {
    this.state.noArrowParamsConversionAt.indexOf(t8.start) !== -1 ? t8.params = e2 : super.setArrowFunctionParameters(t8, e2);
  }
  checkParams(t8, e2, s2) {
    if (!s2 || this.state.noArrowParamsConversionAt.indexOf(t8.start) === -1) {
      for (let e3 = 0; e3 < t8.params.length; e3++)
        this.isThisParam(t8.params[e3]) && e3 > 0 && this.raise(t8.params[e3].start, Fl.ThisParamMustBeFirst);
      return super.checkParams(...arguments);
    }
  }
  parseParenAndDistinguishExpression(t8) {
    return super.parseParenAndDistinguishExpression(t8 && this.state.noArrowAt.indexOf(this.state.start) === -1);
  }
  parseSubscripts(t8, e2, s2, r2) {
    if (t8.type === "Identifier" && t8.name === "async" && this.state.noArrowAt.indexOf(e2) !== -1) {
      this.next();
      const r3 = this.startNodeAt(e2, s2);
      r3.callee = t8, r3.arguments = this.parseCallExpressionArguments(11, false), t8 = this.finishNode(r3, "CallExpression");
    } else if (t8.type === "Identifier" && t8.name === "async" && this.match(43)) {
      const i2 = this.state.clone(), n2 = this.tryParse((t9) => this.parseAsyncArrowWithTypeParameters(e2, s2) || t9(), i2);
      if (!n2.error && !n2.aborted)
        return n2.node;
      const a2 = this.tryParse(() => super.parseSubscripts(t8, e2, s2, r2), i2);
      if (a2.node && !a2.error)
        return a2.node;
      if (n2.node)
        return this.state = n2.failState, n2.node;
      if (a2.node)
        return this.state = a2.failState, a2.node;
      throw n2.error || a2.error;
    }
    return super.parseSubscripts(t8, e2, s2, r2);
  }
  parseSubscript(t8, e2, s2, r2, i2) {
    if (this.match(18) && this.isLookaheadToken_lt()) {
      if (i2.optionalChainMember = true, r2)
        return i2.stop = true, t8;
      this.next();
      const n2 = this.startNodeAt(e2, s2);
      return n2.callee = t8, n2.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n2.arguments = this.parseCallExpressionArguments(11, false), n2.optional = true, this.finishCallExpression(n2, true);
    }
    if (!r2 && this.shouldParseTypes() && this.match(43)) {
      const r3 = this.startNodeAt(e2, s2);
      r3.callee = t8;
      const n2 = this.tryParse(() => (r3.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), r3.arguments = this.parseCallExpressionArguments(11, false), i2.optionalChainMember && (r3.optional = false), this.finishCallExpression(r3, i2.optionalChainMember)));
      if (n2.node)
        return n2.error && (this.state = n2.failState), n2.node;
    }
    return super.parseSubscript(t8, e2, s2, r2, i2);
  }
  parseNewArguments(t8) {
    let e2 = null;
    this.shouldParseTypes() && this.match(43) && (e2 = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), t8.typeArguments = e2, super.parseNewArguments(t8);
  }
  parseAsyncArrowWithTypeParameters(t8, e2) {
    const s2 = this.startNodeAt(t8, e2);
    if (this.parseFunctionParams(s2), this.parseArrow(s2))
      return this.parseArrowExpression(s2, void 0, true);
  }
  readToken_mult_modulo(t8) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    if (t8 === 42 && e2 === 47 && this.state.hasFlowComment)
      return this.state.hasFlowComment = false, this.state.pos += 2, void this.nextToken();
    super.readToken_mult_modulo(t8);
  }
  readToken_pipe_amp(t8) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    t8 !== 124 || e2 !== 125 ? super.readToken_pipe_amp(t8) : this.finishOp(9, 2);
  }
  parseTopLevel(t8, e2) {
    const s2 = super.parseTopLevel(t8, e2);
    return this.state.hasFlowComment && this.raise(this.state.pos, Fl.UnterminatedFlowComment), s2;
  }
  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment())
      return this.state.hasFlowComment && this.unexpected(null, Fl.NestedFlowComment), this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), void (this.state.hasFlowComment = true);
    if (!this.state.hasFlowComment)
      return super.skipBlockComment();
    {
      const t8 = this.input.indexOf("*-/", this.state.pos += 2);
      if (t8 === -1)
        throw this.raise(this.state.pos - 2, ic.UnterminatedComment);
      this.state.pos = t8 + 3;
    }
  }
  skipFlowComment() {
    const { pos: t8 } = this.state;
    let e2 = 2;
    for (; [32, 9].includes(this.input.charCodeAt(t8 + e2)); )
      e2++;
    const s2 = this.input.charCodeAt(e2 + t8), r2 = this.input.charCodeAt(e2 + t8 + 1);
    return s2 === 58 && r2 === 58 ? e2 + 2 : this.input.slice(e2 + t8, e2 + t8 + 12) === "flow-include" ? e2 + 12 : s2 === 58 && r2 !== 58 && e2;
  }
  hasFlowCommentCompletion() {
    if (this.input.indexOf("*/", this.state.pos) === -1)
      throw this.raise(this.state.pos, ic.UnterminatedComment);
  }
  flowEnumErrorBooleanMemberNotInitialized(t8, e2) {
    let { enumName: s2, memberName: r2 } = e2;
    this.raise(t8, Fl.EnumBooleanMemberNotInitialized, r2, s2);
  }
  flowEnumErrorInvalidMemberName(t8, e2) {
    let { enumName: s2, memberName: r2 } = e2;
    const i2 = r2[0].toUpperCase() + r2.slice(1);
    this.raise(t8, Fl.EnumInvalidMemberName, r2, i2, s2);
  }
  flowEnumErrorDuplicateMemberName(t8, e2) {
    let { enumName: s2, memberName: r2 } = e2;
    this.raise(t8, Fl.EnumDuplicateMemberName, r2, s2);
  }
  flowEnumErrorInconsistentMemberValues(t8, e2) {
    let { enumName: s2 } = e2;
    this.raise(t8, Fl.EnumInconsistentMemberValues, s2);
  }
  flowEnumErrorInvalidExplicitType(t8, e2) {
    let { enumName: s2, suppliedType: r2 } = e2;
    return this.raise(t8, r2 === null ? Fl.EnumInvalidExplicitTypeUnknownSupplied : Fl.EnumInvalidExplicitType, s2, r2);
  }
  flowEnumErrorInvalidMemberInitializer(t8, e2) {
    let { enumName: s2, explicitType: r2, memberName: i2 } = e2, n2 = null;
    switch (r2) {
      case "boolean":
      case "number":
      case "string":
        n2 = Fl.EnumInvalidMemberInitializerPrimaryType;
        break;
      case "symbol":
        n2 = Fl.EnumInvalidMemberInitializerSymbolType;
        break;
      default:
        n2 = Fl.EnumInvalidMemberInitializerUnknownType;
    }
    return this.raise(t8, n2, s2, i2, r2);
  }
  flowEnumErrorNumberMemberNotInitialized(t8, e2) {
    let { enumName: s2, memberName: r2 } = e2;
    this.raise(t8, Fl.EnumNumberMemberNotInitialized, s2, r2);
  }
  flowEnumErrorStringMemberInconsistentlyInitailized(t8, e2) {
    let { enumName: s2 } = e2;
    this.raise(t8, Fl.EnumStringMemberInconsistentlyInitailized, s2);
  }
  flowEnumMemberInit() {
    const t8 = this.state.start, e2 = () => this.match(12) || this.match(8);
    switch (this.state.type) {
      case 124: {
        const s2 = this.parseNumericLiteral(this.state.value);
        return e2() ? { type: "number", pos: s2.start, value: s2 } : { type: "invalid", pos: t8 };
      }
      case 123: {
        const s2 = this.parseStringLiteral(this.state.value);
        return e2() ? { type: "string", pos: s2.start, value: s2 } : { type: "invalid", pos: t8 };
      }
      case 79:
      case 80: {
        const s2 = this.parseBooleanLiteral(this.match(79));
        return e2() ? { type: "boolean", pos: s2.start, value: s2 } : { type: "invalid", pos: t8 };
      }
      default:
        return { type: "invalid", pos: t8 };
    }
  }
  flowEnumMemberRaw() {
    const t8 = this.state.start;
    return { id: this.parseIdentifier(true), init: this.eat(27) ? this.flowEnumMemberInit() : { type: "none", pos: t8 } };
  }
  flowEnumCheckExplicitTypeMismatch(t8, e2, s2) {
    const { explicitType: r2 } = e2;
    r2 !== null && r2 !== s2 && this.flowEnumErrorInvalidMemberInitializer(t8, e2);
  }
  flowEnumMembers(t8) {
    let { enumName: e2, explicitType: s2 } = t8;
    const r2 = new Set(), i2 = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] };
    let n2 = false;
    for (; !this.match(8); ) {
      if (this.eat(21)) {
        n2 = true;
        break;
      }
      const t9 = this.startNode(), { id: a2, init: o2 } = this.flowEnumMemberRaw(), u2 = a2.name;
      if (u2 === "")
        continue;
      /^[a-z]/.test(u2) && this.flowEnumErrorInvalidMemberName(a2.start, { enumName: e2, memberName: u2 }), r2.has(u2) && this.flowEnumErrorDuplicateMemberName(a2.start, { enumName: e2, memberName: u2 }), r2.add(u2);
      const h2 = { enumName: e2, explicitType: s2, memberName: u2 };
      switch (t9.id = a2, o2.type) {
        case "boolean":
          this.flowEnumCheckExplicitTypeMismatch(o2.pos, h2, "boolean"), t9.init = o2.value, i2.booleanMembers.push(this.finishNode(t9, "EnumBooleanMember"));
          break;
        case "number":
          this.flowEnumCheckExplicitTypeMismatch(o2.pos, h2, "number"), t9.init = o2.value, i2.numberMembers.push(this.finishNode(t9, "EnumNumberMember"));
          break;
        case "string":
          this.flowEnumCheckExplicitTypeMismatch(o2.pos, h2, "string"), t9.init = o2.value, i2.stringMembers.push(this.finishNode(t9, "EnumStringMember"));
          break;
        case "invalid":
          throw this.flowEnumErrorInvalidMemberInitializer(o2.pos, h2);
        case "none":
          switch (s2) {
            case "boolean":
              this.flowEnumErrorBooleanMemberNotInitialized(o2.pos, h2);
              break;
            case "number":
              this.flowEnumErrorNumberMemberNotInitialized(o2.pos, h2);
              break;
            default:
              i2.defaultedMembers.push(this.finishNode(t9, "EnumDefaultedMember"));
          }
      }
      this.match(8) || this.expect(12);
    }
    return { members: i2, hasUnknownMembers: n2 };
  }
  flowEnumStringMembers(t8, e2, s2) {
    let { enumName: r2 } = s2;
    if (t8.length === 0)
      return e2;
    if (e2.length === 0)
      return t8;
    if (e2.length > t8.length) {
      for (const e3 of t8)
        this.flowEnumErrorStringMemberInconsistentlyInitailized(e3.start, { enumName: r2 });
      return e2;
    }
    for (const t9 of e2)
      this.flowEnumErrorStringMemberInconsistentlyInitailized(t9.start, { enumName: r2 });
    return t8;
  }
  flowEnumParseExplicitType(t8) {
    let { enumName: e2 } = t8;
    if (this.eatContextual(95)) {
      if (!Pc(this.state.type))
        throw this.flowEnumErrorInvalidExplicitType(this.state.start, { enumName: e2, suppliedType: null });
      const { value: t9 } = this.state;
      return this.next(), t9 !== "boolean" && t9 !== "number" && t9 !== "string" && t9 !== "symbol" && this.flowEnumErrorInvalidExplicitType(this.state.start, { enumName: e2, suppliedType: t9 }), t9;
    }
    return null;
  }
  flowEnumBody(t8, e2) {
    let { enumName: s2, nameLoc: r2 } = e2;
    const i2 = this.flowEnumParseExplicitType({ enumName: s2 });
    this.expect(5);
    const { members: n2, hasUnknownMembers: a2 } = this.flowEnumMembers({ enumName: s2, explicitType: i2 });
    switch (t8.hasUnknownMembers = a2, i2) {
      case "boolean":
        return t8.explicitType = true, t8.members = n2.booleanMembers, this.expect(8), this.finishNode(t8, "EnumBooleanBody");
      case "number":
        return t8.explicitType = true, t8.members = n2.numberMembers, this.expect(8), this.finishNode(t8, "EnumNumberBody");
      case "string":
        return t8.explicitType = true, t8.members = this.flowEnumStringMembers(n2.stringMembers, n2.defaultedMembers, { enumName: s2 }), this.expect(8), this.finishNode(t8, "EnumStringBody");
      case "symbol":
        return t8.members = n2.defaultedMembers, this.expect(8), this.finishNode(t8, "EnumSymbolBody");
      default: {
        const e3 = () => (t8.members = [], this.expect(8), this.finishNode(t8, "EnumStringBody"));
        t8.explicitType = false;
        const i3 = n2.booleanMembers.length, a3 = n2.numberMembers.length, o2 = n2.stringMembers.length, u2 = n2.defaultedMembers.length;
        if (i3 || a3 || o2 || u2) {
          if (i3 || a3) {
            if (!a3 && !o2 && i3 >= u2) {
              for (const t9 of n2.defaultedMembers)
                this.flowEnumErrorBooleanMemberNotInitialized(t9.start, { enumName: s2, memberName: t9.id.name });
              return t8.members = n2.booleanMembers, this.expect(8), this.finishNode(t8, "EnumBooleanBody");
            }
            if (!i3 && !o2 && a3 >= u2) {
              for (const t9 of n2.defaultedMembers)
                this.flowEnumErrorNumberMemberNotInitialized(t9.start, { enumName: s2, memberName: t9.id.name });
              return t8.members = n2.numberMembers, this.expect(8), this.finishNode(t8, "EnumNumberBody");
            }
            return this.flowEnumErrorInconsistentMemberValues(r2, { enumName: s2 }), e3();
          }
          return t8.members = this.flowEnumStringMembers(n2.stringMembers, n2.defaultedMembers, { enumName: s2 }), this.expect(8), this.finishNode(t8, "EnumStringBody");
        }
        return e3();
      }
    }
  }
  flowParseEnumDeclaration(t8) {
    const e2 = this.parseIdentifier();
    return t8.id = e2, t8.body = this.flowEnumBody(this.startNode(), { enumName: e2.name, nameLoc: e2.start }), this.finishNode(t8, "EnumDeclaration");
  }
  isLookaheadToken_lt() {
    const t8 = this.nextTokenStart();
    if (this.input.charCodeAt(t8) === 60) {
      const e2 = this.input.charCodeAt(t8 + 1);
      return e2 !== 60 && e2 !== 61;
    }
    return false;
  }
  maybeUnwrapTypeCastExpression(t8) {
    return t8.type === "TypeCastExpression" ? t8.expression : t8;
  }
}, typescript: (t7) => class extends t7 {
  getScopeHandler() {
    return Ll;
  }
  tsIsIdentifier() {
    return Pc(this.state.type);
  }
  tsTokenCanFollowModifier() {
    return (this.match(0) || this.match(5) || this.match(49) || this.match(21) || this.match(128) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
  }
  tsNextTokenCanFollowModifier() {
    return this.next(), this.tsTokenCanFollowModifier();
  }
  tsParseModifier(t8, e2) {
    if (!Pc(this.state.type))
      return;
    const s2 = this.state.value;
    if (t8.indexOf(s2) !== -1) {
      if (e2 && this.tsIsStartOfStaticBlocks())
        return;
      if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
        return s2;
    }
  }
  tsParseModifiers(t8, e2, s2, r2, i2) {
    const n2 = (e3, s3, r3, i3) => {
      s3 === r3 && t8[i3] && this.raise(e3, Ml.InvalidModifiersOrder, r3, i3);
    }, a2 = (e3, s3, r3, i3) => {
      (t8[r3] && s3 === i3 || t8[i3] && s3 === r3) && this.raise(e3, Ml.IncompatibleModifiers, r3, i3);
    };
    for (; ; ) {
      const o2 = this.state.start, u2 = this.tsParseModifier(e2.concat(s2 != null ? s2 : []), i2);
      if (!u2)
        break;
      Rl(u2) ? t8.accessibility ? this.raise(o2, Ml.DuplicateAccessibilityModifier) : (n2(o2, u2, u2, "override"), n2(o2, u2, u2, "static"), n2(o2, u2, u2, "readonly"), t8.accessibility = u2) : (Object.hasOwnProperty.call(t8, u2) ? this.raise(o2, Ml.DuplicateModifier, u2) : (n2(o2, u2, "static", "readonly"), n2(o2, u2, "static", "override"), n2(o2, u2, "override", "readonly"), n2(o2, u2, "abstract", "override"), a2(o2, u2, "declare", "override"), a2(o2, u2, "static", "abstract")), t8[u2] = true), s2 != null && s2.includes(u2) && this.raise(o2, r2, u2);
    }
  }
  tsIsListTerminator(t8) {
    switch (t8) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(8);
      case "HeritageClauseElement":
        return this.match(5);
      case "TupleElementTypes":
        return this.match(3);
      case "TypeParametersOrArguments":
        return this.match(44);
    }
    throw new Error("Unreachable");
  }
  tsParseList(t8, e2) {
    const s2 = [];
    for (; !this.tsIsListTerminator(t8); )
      s2.push(e2());
    return s2;
  }
  tsParseDelimitedList(t8, e2, s2) {
    return function(t9) {
      if (t9 == null)
        throw new Error("Unexpected ".concat(t9, " value."));
      return t9;
    }(this.tsParseDelimitedListWorker(t8, e2, true, s2));
  }
  tsParseDelimitedListWorker(t8, e2, s2, r2) {
    const i2 = [];
    let n2 = -1;
    for (; !this.tsIsListTerminator(t8); ) {
      n2 = -1;
      const r3 = e2();
      if (r3 == null)
        return;
      if (i2.push(r3), !this.eat(12)) {
        if (this.tsIsListTerminator(t8))
          break;
        return void (s2 && this.expect(12));
      }
      n2 = this.state.lastTokStart;
    }
    return r2 && (r2.value = n2), i2;
  }
  tsParseBracketedList(t8, e2, s2, r2, i2) {
    r2 || (s2 ? this.expect(0) : this.expect(43));
    const n2 = this.tsParseDelimitedList(t8, e2, i2);
    return s2 ? this.expect(3) : this.expect(44), n2;
  }
  tsParseImportType() {
    const t8 = this.startNode();
    return this.expect(77), this.expect(10), this.match(123) || this.raise(this.state.start, Ml.UnsupportedImportTypeArgument), t8.argument = this.parseExprAtom(), this.expect(11), this.eat(16) && (t8.qualifier = this.tsParseEntityName(true)), this.match(43) && (t8.typeParameters = this.tsParseTypeArguments()), this.finishNode(t8, "TSImportType");
  }
  tsParseEntityName(t8) {
    let e2 = this.parseIdentifier();
    for (; this.eat(16); ) {
      const s2 = this.startNodeAtNode(e2);
      s2.left = e2, s2.right = this.parseIdentifier(t8), e2 = this.finishNode(s2, "TSQualifiedName");
    }
    return e2;
  }
  tsParseTypeReference() {
    const t8 = this.startNode();
    return t8.typeName = this.tsParseEntityName(false), !this.hasPrecedingLineBreak() && this.match(43) && (t8.typeParameters = this.tsParseTypeArguments()), this.finishNode(t8, "TSTypeReference");
  }
  tsParseThisTypePredicate(t8) {
    this.next();
    const e2 = this.startNodeAtNode(t8);
    return e2.parameterName = t8, e2.typeAnnotation = this.tsParseTypeAnnotation(false), e2.asserts = false, this.finishNode(e2, "TSTypePredicate");
  }
  tsParseThisTypeNode() {
    const t8 = this.startNode();
    return this.next(), this.finishNode(t8, "TSThisType");
  }
  tsParseTypeQuery() {
    const t8 = this.startNode();
    return this.expect(81), this.match(77) ? t8.exprName = this.tsParseImportType() : t8.exprName = this.tsParseEntityName(true), this.finishNode(t8, "TSTypeQuery");
  }
  tsParseTypeParameter() {
    const t8 = this.startNode();
    return t8.name = this.tsParseTypeParameterName(), t8.constraint = this.tsEatThenParseType(75), t8.default = this.tsEatThenParseType(27), this.finishNode(t8, "TSTypeParameter");
  }
  tsTryParseTypeParameters() {
    if (this.match(43))
      return this.tsParseTypeParameters();
  }
  tsParseTypeParameters() {
    const t8 = this.startNode();
    this.match(43) || this.match(132) ? this.next() : this.unexpected();
    const e2 = { value: -1 };
    return t8.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true, e2), t8.params.length === 0 && this.raise(t8.start, Ml.EmptyTypeParameters), e2.value !== -1 && this.addExtra(t8, "trailingComma", e2.value), this.finishNode(t8, "TSTypeParameterDeclaration");
  }
  tsTryNextParseConstantContext() {
    return this.lookahead().type === 69 ? (this.next(), this.tsParseTypeReference()) : null;
  }
  tsFillSignature(t8, e2) {
    const s2 = t8 === 19;
    e2.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), e2.parameters = this.tsParseBindingListForSignature(), (s2 || this.match(t8)) && (e2.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(t8));
  }
  tsParseBindingListForSignature() {
    return this.parseBindingList(11, 41).map((t8) => (t8.type !== "Identifier" && t8.type !== "RestElement" && t8.type !== "ObjectPattern" && t8.type !== "ArrayPattern" && this.raise(t8.start, Ml.UnsupportedSignatureParameterKind, t8.type), t8));
  }
  tsParseTypeMemberSemicolon() {
    this.eat(12) || this.isLineTerminator() || this.expect(13);
  }
  tsParseSignatureMember(t8, e2) {
    return this.tsFillSignature(14, e2), this.tsParseTypeMemberSemicolon(), this.finishNode(e2, t8);
  }
  tsIsUnambiguouslyIndexSignature() {
    return this.next(), !!Pc(this.state.type) && (this.next(), this.match(14));
  }
  tsTryParseIndexSignature(t8) {
    if (!this.match(0) || !this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))
      return;
    this.expect(0);
    const e2 = this.parseIdentifier();
    e2.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(e2), this.expect(3), t8.parameters = [e2];
    const s2 = this.tsTryParseTypeAnnotation();
    return s2 && (t8.typeAnnotation = s2), this.tsParseTypeMemberSemicolon(), this.finishNode(t8, "TSIndexSignature");
  }
  tsParsePropertyOrMethodSignature(t8, e2) {
    this.eat(17) && (t8.optional = true);
    const s2 = t8;
    if (this.match(10) || this.match(43)) {
      e2 && this.raise(t8.start, Ml.ReadonlyForMethodSignature);
      const r2 = s2;
      if (r2.kind && this.match(43) && this.raise(this.state.pos, Ml.AccesorCannotHaveTypeParameters), this.tsFillSignature(14, r2), this.tsParseTypeMemberSemicolon(), r2.kind === "get")
        r2.parameters.length > 0 && (this.raise(this.state.pos, ic.BadGetterArity), this.isThisParam(r2.parameters[0]) && this.raise(this.state.pos, Ml.AccesorCannotDeclareThisParameter));
      else if (r2.kind === "set") {
        if (r2.parameters.length !== 1)
          this.raise(this.state.pos, ic.BadSetterArity);
        else {
          const t9 = r2.parameters[0];
          this.isThisParam(t9) && this.raise(this.state.pos, Ml.AccesorCannotDeclareThisParameter), t9.type === "Identifier" && t9.optional && this.raise(this.state.pos, Ml.SetAccesorCannotHaveOptionalParameter), t9.type === "RestElement" && this.raise(this.state.pos, Ml.SetAccesorCannotHaveRestParameter);
        }
        r2.typeAnnotation && this.raise(r2.typeAnnotation.start, Ml.SetAccesorCannotHaveReturnType);
      } else
        r2.kind = "method";
      return this.finishNode(r2, "TSMethodSignature");
    }
    {
      const t9 = s2;
      e2 && (t9.readonly = true);
      const r2 = this.tsTryParseTypeAnnotation();
      return r2 && (t9.typeAnnotation = r2), this.tsParseTypeMemberSemicolon(), this.finishNode(t9, "TSPropertySignature");
    }
  }
  tsParseTypeMember() {
    const t8 = this.startNode();
    if (this.match(10) || this.match(43))
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", t8);
    if (this.match(71)) {
      const e3 = this.startNode();
      return this.next(), this.match(10) || this.match(43) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", t8) : (t8.key = this.createIdentifier(e3, "new"), this.tsParsePropertyOrMethodSignature(t8, false));
    }
    this.tsParseModifiers(t8, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static", "override"], Ml.InvalidModifierOnTypeMember);
    const e2 = this.tsTryParseIndexSignature(t8);
    return e2 || (this.parsePropertyName(t8), t8.computed || t8.key.type !== "Identifier" || t8.key.name !== "get" && t8.key.name !== "set" || !this.tsTokenCanFollowModifier() || (t8.kind = t8.key.name, this.parsePropertyName(t8)), this.tsParsePropertyOrMethodSignature(t8, !!t8.readonly));
  }
  tsParseTypeLiteral() {
    const t8 = this.startNode();
    return t8.members = this.tsParseObjectTypeMembers(), this.finishNode(t8, "TSTypeLiteral");
  }
  tsParseObjectTypeMembers() {
    this.expect(5);
    const t8 = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    return this.expect(8), t8;
  }
  tsIsStartOfMappedType() {
    return this.next(), this.eat(47) ? this.isContextual(112) : (this.isContextual(112) && this.next(), !!this.match(0) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(52))));
  }
  tsParseMappedTypeParameter() {
    const t8 = this.startNode();
    return t8.name = this.tsParseTypeParameterName(), t8.constraint = this.tsExpectThenParseType(52), this.finishNode(t8, "TSTypeParameter");
  }
  tsParseMappedType() {
    const t8 = this.startNode();
    return this.expect(5), this.match(47) ? (t8.readonly = this.state.value, this.next(), this.expectContextual(112)) : this.eatContextual(112) && (t8.readonly = true), this.expect(0), t8.typeParameter = this.tsParseMappedTypeParameter(), t8.nameType = this.eatContextual(87) ? this.tsParseType() : null, this.expect(3), this.match(47) ? (t8.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (t8.optional = true), t8.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(t8, "TSMappedType");
  }
  tsParseTupleType() {
    const t8 = this.startNode();
    t8.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let e2 = false, s2 = null;
    return t8.elementTypes.forEach((t9) => {
      var r2;
      let { type: i2 } = t9;
      !e2 || i2 === "TSRestType" || i2 === "TSOptionalType" || i2 === "TSNamedTupleMember" && t9.optional || this.raise(t9.start, Ml.OptionalTypeBeforeRequired), e2 = e2 || i2 === "TSNamedTupleMember" && t9.optional || i2 === "TSOptionalType", i2 === "TSRestType" && (i2 = (t9 = t9.typeAnnotation).type);
      const n2 = i2 === "TSNamedTupleMember";
      s2 = (r2 = s2) != null ? r2 : n2, s2 !== n2 && this.raise(t9.start, Ml.MixedLabeledAndUnlabeledElements);
    }), this.finishNode(t8, "TSTupleType");
  }
  tsParseTupleElementType() {
    const { start: t8, startLoc: e2 } = this.state, s2 = this.eat(21);
    let r2 = this.tsParseType();
    const i2 = this.eat(17);
    if (this.eat(14)) {
      const t9 = this.startNodeAtNode(r2);
      t9.optional = i2, r2.type !== "TSTypeReference" || r2.typeParameters || r2.typeName.type !== "Identifier" ? (this.raise(r2.start, Ml.InvalidTupleMemberLabel), t9.label = r2) : t9.label = r2.typeName, t9.elementType = this.tsParseType(), r2 = this.finishNode(t9, "TSNamedTupleMember");
    } else if (i2) {
      const t9 = this.startNodeAtNode(r2);
      t9.typeAnnotation = r2, r2 = this.finishNode(t9, "TSOptionalType");
    }
    if (s2) {
      const s3 = this.startNodeAt(t8, e2);
      s3.typeAnnotation = r2, r2 = this.finishNode(s3, "TSRestType");
    }
    return r2;
  }
  tsParseParenthesizedType() {
    const t8 = this.startNode();
    return this.expect(10), t8.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(t8, "TSParenthesizedType");
  }
  tsParseFunctionOrConstructorType(t8, e2) {
    const s2 = this.startNode();
    return t8 === "TSConstructorType" && (s2.abstract = !!e2, e2 && this.next(), this.next()), this.tsFillSignature(19, s2), this.finishNode(s2, t8);
  }
  tsParseLiteralTypeNode() {
    const t8 = this.startNode();
    return t8.literal = (() => {
      switch (this.state.type) {
        case 124:
        case 125:
        case 123:
        case 79:
        case 80:
          return this.parseExprAtom();
        default:
          throw this.unexpected();
      }
    })(), this.finishNode(t8, "TSLiteralType");
  }
  tsParseTemplateLiteralType() {
    const t8 = this.startNode();
    return t8.literal = this.parseTemplate(false), this.finishNode(t8, "TSLiteralType");
  }
  parseTemplateSubstitution() {
    return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
  }
  tsParseThisTypeOrThisTypePredicate() {
    const t8 = this.tsParseThisTypeNode();
    return this.isContextual(107) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(t8) : t8;
  }
  tsParseNonArrayType() {
    switch (this.state.type) {
      case 123:
      case 124:
      case 125:
      case 79:
      case 80:
        return this.tsParseLiteralTypeNode();
      case 47:
        if (this.state.value === "-") {
          const t8 = this.startNode(), e2 = this.lookahead();
          if (e2.type !== 124 && e2.type !== 125)
            throw this.unexpected();
          return t8.literal = this.parseMaybeUnary(), this.finishNode(t8, "TSLiteralType");
        }
        break;
      case 72:
        return this.tsParseThisTypeOrThisTypePredicate();
      case 81:
        return this.tsParseTypeQuery();
      case 77:
        return this.tsParseImportType();
      case 5:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
      case 0:
        return this.tsParseTupleType();
      case 10:
        return this.tsParseParenthesizedType();
      case 22:
        return this.tsParseTemplateLiteralType();
      default: {
        const { type: t8 } = this.state;
        if (Pc(t8) || t8 === 82 || t8 === 78) {
          const e2 = t8 === 82 ? "TSVoidKeyword" : t8 === 78 ? "TSNullKeyword" : function(t9) {
            switch (t9) {
              case "any":
                return "TSAnyKeyword";
              case "boolean":
                return "TSBooleanKeyword";
              case "bigint":
                return "TSBigIntKeyword";
              case "never":
                return "TSNeverKeyword";
              case "number":
                return "TSNumberKeyword";
              case "object":
                return "TSObjectKeyword";
              case "string":
                return "TSStringKeyword";
              case "symbol":
                return "TSSymbolKeyword";
              case "undefined":
                return "TSUndefinedKeyword";
              case "unknown":
                return "TSUnknownKeyword";
              default:
                return;
            }
          }(this.state.value);
          if (e2 !== void 0 && this.lookaheadCharCode() !== 46) {
            const t9 = this.startNode();
            return this.next(), this.finishNode(t9, e2);
          }
          return this.tsParseTypeReference();
        }
      }
    }
    throw this.unexpected();
  }
  tsParseArrayTypeOrHigher() {
    let t8 = this.tsParseNonArrayType();
    for (; !this.hasPrecedingLineBreak() && this.eat(0); )
      if (this.match(3)) {
        const e2 = this.startNodeAtNode(t8);
        e2.elementType = t8, this.expect(3), t8 = this.finishNode(e2, "TSArrayType");
      } else {
        const e2 = this.startNodeAtNode(t8);
        e2.objectType = t8, e2.indexType = this.tsParseType(), this.expect(3), t8 = this.finishNode(e2, "TSIndexedAccessType");
      }
    return t8;
  }
  tsParseTypeOperator() {
    const t8 = this.startNode(), e2 = this.state.value;
    return this.next(), t8.operator = e2, t8.typeAnnotation = this.tsParseTypeOperatorOrHigher(), e2 === "readonly" && this.tsCheckTypeAnnotationForReadOnly(t8), this.finishNode(t8, "TSTypeOperator");
  }
  tsCheckTypeAnnotationForReadOnly(t8) {
    switch (t8.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;
      default:
        this.raise(t8.start, Ml.UnexpectedReadonly);
    }
  }
  tsParseInferType() {
    const t8 = this.startNode();
    this.expectContextual(106);
    const e2 = this.startNode();
    return e2.name = this.tsParseTypeParameterName(), t8.typeParameter = this.finishNode(e2, "TSTypeParameter"), this.finishNode(t8, "TSInferType");
  }
  tsParseTypeOperatorOrHigher() {
    var t8;
    return (t8 = this.state.type) >= 111 && t8 <= 113 && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(106) ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
  }
  tsParseUnionOrIntersectionType(t8, e2, s2) {
    const r2 = this.startNode(), i2 = this.eat(s2), n2 = [];
    do {
      n2.push(e2());
    } while (this.eat(s2));
    return n2.length !== 1 || i2 ? (r2.types = n2, this.finishNode(r2, t8)) : n2[0];
  }
  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 41);
  }
  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 39);
  }
  tsIsStartOfFunctionType() {
    return !!this.match(43) || this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }
  tsSkipParameterStart() {
    if (Pc(this.state.type) || this.match(72))
      return this.next(), true;
    if (this.match(5)) {
      let t8 = 1;
      for (this.next(); t8 > 0; )
        this.match(5) ? ++t8 : this.match(8) && --t8, this.next();
      return true;
    }
    if (this.match(0)) {
      let t8 = 1;
      for (this.next(); t8 > 0; )
        this.match(0) ? ++t8 : this.match(3) && --t8, this.next();
      return true;
    }
    return false;
  }
  tsIsUnambiguouslyStartOfFunctionType() {
    if (this.next(), this.match(11) || this.match(21))
      return true;
    if (this.tsSkipParameterStart()) {
      if (this.match(14) || this.match(12) || this.match(17) || this.match(27))
        return true;
      if (this.match(11) && (this.next(), this.match(19)))
        return true;
    }
    return false;
  }
  tsParseTypeOrTypePredicateAnnotation(t8) {
    return this.tsInType(() => {
      const e2 = this.startNode();
      this.expect(t8);
      const s2 = this.startNode(), r2 = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
      if (r2 && this.match(72)) {
        let t9 = this.tsParseThisTypeOrThisTypePredicate();
        return t9.type === "TSThisType" ? (s2.parameterName = t9, s2.asserts = true, s2.typeAnnotation = null, t9 = this.finishNode(s2, "TSTypePredicate")) : (this.resetStartLocationFromNode(t9, s2), t9.asserts = true), e2.typeAnnotation = t9, this.finishNode(e2, "TSTypeAnnotation");
      }
      const i2 = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
      if (!i2)
        return r2 ? (s2.parameterName = this.parseIdentifier(), s2.asserts = r2, s2.typeAnnotation = null, e2.typeAnnotation = this.finishNode(s2, "TSTypePredicate"), this.finishNode(e2, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, e2);
      const n2 = this.tsParseTypeAnnotation(false);
      return s2.parameterName = i2, s2.typeAnnotation = n2, s2.asserts = r2, e2.typeAnnotation = this.finishNode(s2, "TSTypePredicate"), this.finishNode(e2, "TSTypeAnnotation");
    });
  }
  tsTryParseTypeOrTypePredicateAnnotation() {
    return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
  }
  tsTryParseTypeAnnotation() {
    return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
  }
  tsTryParseType() {
    return this.tsEatThenParseType(14);
  }
  tsParseTypePredicatePrefix() {
    const t8 = this.parseIdentifier();
    if (this.isContextual(107) && !this.hasPrecedingLineBreak())
      return this.next(), t8;
  }
  tsParseTypePredicateAsserts() {
    if (this.state.type !== 100)
      return false;
    const t8 = this.state.containsEsc;
    return this.next(), !(!Pc(this.state.type) && !this.match(72)) && (t8 && this.raise(this.state.lastTokStart, ic.InvalidEscapedReservedWord, "asserts"), true);
  }
  tsParseTypeAnnotation() {
    let t8 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startNode();
    return this.tsInType(() => {
      t8 && this.expect(14), e2.typeAnnotation = this.tsParseType();
    }), this.finishNode(e2, "TSTypeAnnotation");
  }
  tsParseType() {
    Ol(this.state.inType);
    const t8 = this.tsParseNonConditionalType();
    if (this.hasPrecedingLineBreak() || !this.eat(75))
      return t8;
    const e2 = this.startNodeAtNode(t8);
    return e2.checkType = t8, e2.extendsType = this.tsParseNonConditionalType(), this.expect(17), e2.trueType = this.tsParseType(), this.expect(14), e2.falseType = this.tsParseType(), this.finishNode(e2, "TSConditionalType");
  }
  isAbstractConstructorSignature() {
    return this.isContextual(114) && this.lookahead().type === 71;
  }
  tsParseNonConditionalType() {
    return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(71) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
  }
  tsParseTypeAssertion() {
    this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(this.state.start, Ml.ReservedTypeAssertion);
    const t8 = this.startNode(), e2 = this.tsTryNextParseConstantContext();
    return t8.typeAnnotation = e2 || this.tsNextThenParseType(), this.expect(44), t8.expression = this.parseMaybeUnary(), this.finishNode(t8, "TSTypeAssertion");
  }
  tsParseHeritageClause(t8) {
    const e2 = this.state.start, s2 = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
    return s2.length || this.raise(e2, Ml.EmptyHeritageClauseType, t8), s2;
  }
  tsParseExpressionWithTypeArguments() {
    const t8 = this.startNode();
    return t8.expression = this.tsParseEntityName(false), this.match(43) && (t8.typeParameters = this.tsParseTypeArguments()), this.finishNode(t8, "TSExpressionWithTypeArguments");
  }
  tsParseInterfaceDeclaration(t8) {
    Pc(this.state.type) ? (t8.id = this.parseIdentifier(), this.checkLVal(t8.id, "typescript interface declaration", 130)) : (t8.id = null, this.raise(this.state.start, Ml.MissingInterfaceName)), t8.typeParameters = this.tsTryParseTypeParameters(), this.eat(75) && (t8.extends = this.tsParseHeritageClause("extends"));
    const e2 = this.startNode();
    return e2.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), t8.body = this.finishNode(e2, "TSInterfaceBody"), this.finishNode(t8, "TSInterfaceDeclaration");
  }
  tsParseTypeAliasDeclaration(t8) {
    return t8.id = this.parseIdentifier(), this.checkLVal(t8.id, "typescript type alias", 2), t8.typeParameters = this.tsTryParseTypeParameters(), t8.typeAnnotation = this.tsInType(() => {
      if (this.expect(27), this.isContextual(105) && this.lookahead().type !== 16) {
        const t9 = this.startNode();
        return this.next(), this.finishNode(t9, "TSIntrinsicKeyword");
      }
      return this.tsParseType();
    }), this.semicolon(), this.finishNode(t8, "TSTypeAliasDeclaration");
  }
  tsInNoContext(t8) {
    const e2 = this.state.context;
    this.state.context = [e2[0]];
    try {
      return t8();
    } finally {
      this.state.context = e2;
    }
  }
  tsInType(t8) {
    const e2 = this.state.inType;
    this.state.inType = true;
    try {
      return t8();
    } finally {
      this.state.inType = e2;
    }
  }
  tsEatThenParseType(t8) {
    return this.match(t8) ? this.tsNextThenParseType() : void 0;
  }
  tsExpectThenParseType(t8) {
    return this.tsDoThenParseType(() => this.expect(t8));
  }
  tsNextThenParseType() {
    return this.tsDoThenParseType(() => this.next());
  }
  tsDoThenParseType(t8) {
    return this.tsInType(() => (t8(), this.tsParseType()));
  }
  tsParseEnumMember() {
    const t8 = this.startNode();
    return t8.id = this.match(123) ? this.parseExprAtom() : this.parseIdentifier(true), this.eat(27) && (t8.initializer = this.parseMaybeAssignAllowIn()), this.finishNode(t8, "TSEnumMember");
  }
  tsParseEnumDeclaration(t8, e2) {
    return e2 && (t8.const = true), t8.id = this.parseIdentifier(), this.checkLVal(t8.id, "typescript enum declaration", e2 ? 779 : 267), this.expect(5), t8.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(t8, "TSEnumDeclaration");
  }
  tsParseModuleBlock() {
    const t8 = this.startNode();
    return this.scope.enter(0), this.expect(5), this.parseBlockOrModuleBlockBody(t8.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(t8, "TSModuleBlock");
  }
  tsParseModuleOrNamespaceDeclaration(t8) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (t8.id = this.parseIdentifier(), e2 || this.checkLVal(t8.id, "module or namespace declaration", 1024), this.eat(16)) {
      const e3 = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(e3, true), t8.body = e3;
    } else
      this.scope.enter(256), this.prodParam.enter(0), t8.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
    return this.finishNode(t8, "TSModuleDeclaration");
  }
  tsParseAmbientExternalModuleDeclaration(t8) {
    return this.isContextual(103) ? (t8.global = true, t8.id = this.parseIdentifier()) : this.match(123) ? t8.id = this.parseExprAtom() : this.unexpected(), this.match(5) ? (this.scope.enter(256), this.prodParam.enter(0), t8.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(t8, "TSModuleDeclaration");
  }
  tsParseImportEqualsDeclaration(t8, e2) {
    t8.isExport = e2 || false, t8.id = this.parseIdentifier(), this.checkLVal(t8.id, "import equals declaration", 9), this.expect(27);
    const s2 = this.tsParseModuleReference();
    return t8.importKind === "type" && s2.type !== "TSExternalModuleReference" && this.raise(s2.start, Ml.ImportAliasHasImportType), t8.moduleReference = s2, this.semicolon(), this.finishNode(t8, "TSImportEqualsDeclaration");
  }
  tsIsExternalModuleReference() {
    return this.isContextual(110) && this.lookaheadCharCode() === 40;
  }
  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
  }
  tsParseExternalModuleReference() {
    const t8 = this.startNode();
    if (this.expectContextual(110), this.expect(10), !this.match(123))
      throw this.unexpected();
    return t8.expression = this.parseExprAtom(), this.expect(11), this.finishNode(t8, "TSExternalModuleReference");
  }
  tsLookAhead(t8) {
    const e2 = this.state.clone(), s2 = t8();
    return this.state = e2, s2;
  }
  tsTryParseAndCatch(t8) {
    const e2 = this.tryParse((e3) => t8() || e3());
    if (!e2.aborted && e2.node)
      return e2.error && (this.state = e2.failState), e2.node;
  }
  tsTryParse(t8) {
    const e2 = this.state.clone(), s2 = t8();
    return s2 !== void 0 && s2 !== false ? s2 : void (this.state = e2);
  }
  tsTryParseDeclare(t8) {
    if (this.isLineTerminator())
      return;
    let e2, s2 = this.state.type;
    return this.isContextual(93) && (s2 = 68, e2 = "let"), this.tsInAmbientContext(() => {
      switch (s2) {
        case 62:
          return t8.declare = true, this.parseFunctionStatement(t8, false, true);
        case 74:
          return t8.declare = true, this.parseClass(t8, true, false);
        case 69:
          if (this.match(69) && this.isLookaheadContextual("enum"))
            return this.expect(69), this.expectContextual(116), this.tsParseEnumDeclaration(t8, true);
        case 68:
          return e2 = e2 || this.state.value, this.parseVarStatement(t8, e2);
        case 103:
          return this.tsParseAmbientExternalModuleDeclaration(t8);
        default:
          if (Pc(s2))
            return this.tsParseDeclaration(t8, this.state.value, true);
      }
    });
  }
  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true);
  }
  tsParseExpressionStatement(t8, e2) {
    switch (e2.name) {
      case "declare": {
        const e3 = this.tsTryParseDeclare(t8);
        if (e3)
          return e3.declare = true, e3;
        break;
      }
      case "global":
        if (this.match(5)) {
          this.scope.enter(256), this.prodParam.enter(0);
          const s2 = t8;
          return s2.global = true, s2.id = e2, s2.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(s2, "TSModuleDeclaration");
        }
        break;
      default:
        return this.tsParseDeclaration(t8, e2.name, false);
    }
  }
  tsParseDeclaration(t8, e2, s2) {
    switch (e2) {
      case "abstract":
        if (this.tsCheckLineTerminator(s2) && (this.match(74) || Pc(this.state.type)))
          return this.tsParseAbstractDeclaration(t8);
        break;
      case "enum":
        if (s2 || Pc(this.state.type))
          return s2 && this.next(), this.tsParseEnumDeclaration(t8, false);
        break;
      case "interface":
        if (this.tsCheckLineTerminator(s2) && Pc(this.state.type))
          return this.tsParseInterfaceDeclaration(t8);
        break;
      case "module":
        if (this.tsCheckLineTerminator(s2)) {
          if (this.match(123))
            return this.tsParseAmbientExternalModuleDeclaration(t8);
          if (Pc(this.state.type))
            return this.tsParseModuleOrNamespaceDeclaration(t8);
        }
        break;
      case "namespace":
        if (this.tsCheckLineTerminator(s2) && Pc(this.state.type))
          return this.tsParseModuleOrNamespaceDeclaration(t8);
        break;
      case "type":
        if (this.tsCheckLineTerminator(s2) && Pc(this.state.type))
          return this.tsParseTypeAliasDeclaration(t8);
    }
  }
  tsCheckLineTerminator(t8) {
    return t8 ? !this.hasFollowingLineBreak() && (this.next(), true) : !this.isLineTerminator();
  }
  tsTryParseGenericAsyncArrowFunction(t8, e2) {
    if (!this.match(43))
      return;
    const s2 = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    const r2 = this.tsTryParseAndCatch(() => {
      const s3 = this.startNodeAt(t8, e2);
      return s3.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(s3), s3.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), s3;
    });
    return this.state.maybeInArrowParameters = s2, r2 ? this.parseArrowExpression(r2, null, true) : void 0;
  }
  tsParseTypeArguments() {
    const t8 = this.startNode();
    return t8.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(43), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), t8.params.length === 0 && this.raise(t8.start, Ml.EmptyTypeArguments), this.expect(44), this.finishNode(t8, "TSTypeParameterInstantiation");
  }
  tsIsDeclarationStart() {
    return (t8 = this.state.type) >= 114 && t8 <= 120;
    var t8;
  }
  isExportDefaultSpecifier() {
    return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier();
  }
  parseAssignableListItem(t8, e2) {
    const s2 = this.state.start, r2 = this.state.startLoc;
    let i2, n2 = false, a2 = false;
    if (t8 !== void 0) {
      const e3 = {};
      this.tsParseModifiers(e3, ["public", "private", "protected", "override", "readonly"]), i2 = e3.accessibility, a2 = e3.override, n2 = e3.readonly, t8 === false && (i2 || n2 || a2) && this.raise(s2, Ml.UnexpectedParameterModifier);
    }
    const o2 = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(o2);
    const u2 = this.parseMaybeDefault(o2.start, o2.loc.start, o2);
    if (i2 || n2 || a2) {
      const t9 = this.startNodeAt(s2, r2);
      return e2.length && (t9.decorators = e2), i2 && (t9.accessibility = i2), n2 && (t9.readonly = n2), a2 && (t9.override = a2), u2.type !== "Identifier" && u2.type !== "AssignmentPattern" && this.raise(t9.start, Ml.UnsupportedParameterPropertyKind), t9.parameter = u2, this.finishNode(t9, "TSParameterProperty");
    }
    return e2.length && (o2.decorators = e2), u2;
  }
  parseFunctionBodyAndFinish(t8, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    this.match(14) && (t8.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
    const r2 = e2 === "FunctionDeclaration" ? "TSDeclareFunction" : e2 === "ClassMethod" || e2 === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
    r2 && !this.match(5) && this.isLineTerminator() ? this.finishNode(t8, r2) : r2 === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(t8.start, Ml.DeclareFunctionHasImplementation), t8.declare) ? super.parseFunctionBodyAndFinish(t8, r2, s2) : super.parseFunctionBodyAndFinish(t8, e2, s2);
  }
  registerFunctionStatementId(t8) {
    !t8.body && t8.id ? this.checkLVal(t8.id, "function name", 1024) : super.registerFunctionStatementId(...arguments);
  }
  tsCheckForInvalidTypeCasts(t8) {
    t8.forEach((t9) => {
      (t9 == null ? void 0 : t9.type) === "TSTypeCastExpression" && this.raise(t9.typeAnnotation.start, Ml.UnexpectedTypeAnnotation);
    });
  }
  toReferencedList(t8, e2) {
    return this.tsCheckForInvalidTypeCasts(t8), t8;
  }
  parseArrayLike() {
    const t8 = super.parseArrayLike(...arguments);
    return t8.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(t8.elements), t8;
  }
  parseSubscript(t8, e2, s2, r2, i2) {
    if (!this.hasPrecedingLineBreak() && this.match(33)) {
      this.state.canStartJSXElement = false, this.next();
      const r3 = this.startNodeAt(e2, s2);
      return r3.expression = t8, this.finishNode(r3, "TSNonNullExpression");
    }
    let n2 = false;
    if (this.match(18) && this.lookaheadCharCode() === 60) {
      if (r2)
        return i2.stop = true, t8;
      i2.optionalChainMember = n2 = true, this.next();
    }
    if (this.match(43)) {
      let a2;
      const o2 = this.tsTryParseAndCatch(() => {
        if (!r2 && this.atPossibleAsyncArrow(t8)) {
          const t9 = this.tsTryParseGenericAsyncArrowFunction(e2, s2);
          if (t9)
            return t9;
        }
        const o3 = this.startNodeAt(e2, s2);
        o3.callee = t8;
        const u2 = this.tsParseTypeArguments();
        if (u2) {
          if (n2 && !this.match(10) && (a2 = this.state.pos, this.unexpected()), !r2 && this.eat(10))
            return o3.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(o3.arguments), o3.typeParameters = u2, i2.optionalChainMember && (o3.optional = n2), this.finishCallExpression(o3, i2.optionalChainMember);
          if (this.match(22)) {
            const r3 = this.parseTaggedTemplateExpression(t8, e2, s2, i2);
            return r3.typeParameters = u2, r3;
          }
        }
        this.unexpected();
      });
      if (a2 && this.unexpected(a2, 10), o2)
        return o2;
    }
    return super.parseSubscript(t8, e2, s2, r2, i2);
  }
  parseNewArguments(t8) {
    if (this.match(43)) {
      const e2 = this.tsTryParseAndCatch(() => {
        const t9 = this.tsParseTypeArguments();
        return this.match(10) || this.unexpected(), t9;
      });
      e2 && (t8.typeParameters = e2);
    }
    super.parseNewArguments(t8);
  }
  parseExprOp(t8, e2, s2, r2) {
    if (Ic(52) > r2 && !this.hasPrecedingLineBreak() && this.isContextual(87)) {
      const i2 = this.startNodeAt(e2, s2);
      i2.expression = t8;
      const n2 = this.tsTryNextParseConstantContext();
      return i2.typeAnnotation = n2 || this.tsNextThenParseType(), this.finishNode(i2, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(i2, e2, s2, r2);
    }
    return super.parseExprOp(t8, e2, s2, r2);
  }
  checkReservedWord(t8, e2, s2, r2) {
  }
  checkDuplicateExports() {
  }
  parseImport(t8) {
    if (t8.importKind = "value", Pc(this.state.type) || this.match(49) || this.match(5)) {
      let e3 = this.lookahead();
      if (this.isContextual(120) && e3.type !== 12 && e3.type !== 91 && e3.type !== 27 && (t8.importKind = "type", this.next(), e3 = this.lookahead()), Pc(this.state.type) && e3.type === 27)
        return this.tsParseImportEqualsDeclaration(t8);
    }
    const e2 = super.parseImport(t8);
    return e2.importKind === "type" && e2.specifiers.length > 1 && e2.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(e2.start, Ml.TypeImportCannotSpecifyDefaultAndNamed), e2;
  }
  parseExport(t8) {
    if (this.match(77))
      return this.next(), this.isContextual(120) && this.lookaheadCharCode() !== 61 ? (t8.importKind = "type", this.next()) : t8.importKind = "value", this.tsParseImportEqualsDeclaration(t8, true);
    if (this.eat(27)) {
      const e2 = t8;
      return e2.expression = this.parseExpression(), this.semicolon(), this.finishNode(e2, "TSExportAssignment");
    }
    if (this.eatContextual(87)) {
      const e2 = t8;
      return this.expectContextual(118), e2.id = this.parseIdentifier(), this.semicolon(), this.finishNode(e2, "TSNamespaceExportDeclaration");
    }
    return this.isContextual(120) && this.lookahead().type === 5 ? (this.next(), t8.exportKind = "type") : t8.exportKind = "value", super.parseExport(t8);
  }
  isAbstractClass() {
    return this.isContextual(114) && this.lookahead().type === 74;
  }
  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const t8 = this.startNode();
      return this.next(), t8.abstract = true, this.parseClass(t8, true, true), t8;
    }
    if (this.match(119)) {
      const t8 = this.startNode();
      this.next();
      const e2 = this.tsParseInterfaceDeclaration(t8);
      if (e2)
        return e2;
    }
    return super.parseExportDefaultExpression();
  }
  parseStatementContent(t8, e2) {
    if (this.state.type === 69) {
      if (this.lookahead().type === 116) {
        const t9 = this.startNode();
        return this.next(), this.expectContextual(116), this.tsParseEnumDeclaration(t9, true);
      }
    }
    return super.parseStatementContent(t8, e2);
  }
  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }
  tsHasSomeModifiers(t8, e2) {
    return e2.some((e3) => Rl(e3) ? t8.accessibility === e3 : !!t8[e3]);
  }
  tsIsStartOfStaticBlocks() {
    return this.isContextual(98) && this.lookaheadCharCode() === 123;
  }
  parseClassMember(t8, e2, s2) {
    const r2 = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
    this.tsParseModifiers(e2, r2, void 0, void 0, true);
    const i2 = () => {
      this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(e2, r2) && this.raise(this.state.pos, Ml.StaticBlockCannotHaveModifier), this.parseClassStaticBlock(t8, e2)) : this.parseClassMemberWithIsStatic(t8, e2, s2, !!e2.static);
    };
    e2.declare ? this.tsInAmbientContext(i2) : i2();
  }
  parseClassMemberWithIsStatic(t8, e2, s2, r2) {
    const i2 = this.tsTryParseIndexSignature(e2);
    if (i2)
      return t8.body.push(i2), e2.abstract && this.raise(e2.start, Ml.IndexSignatureHasAbstract), e2.accessibility && this.raise(e2.start, Ml.IndexSignatureHasAccessibility, e2.accessibility), e2.declare && this.raise(e2.start, Ml.IndexSignatureHasDeclare), void (e2.override && this.raise(e2.start, Ml.IndexSignatureHasOverride));
    !this.state.inAbstractClass && e2.abstract && this.raise(e2.start, Ml.NonAbstractClassHasAbstractMethod), e2.override && (s2.hadSuperClass || this.raise(e2.start, Ml.OverrideNotInSubClass)), super.parseClassMemberWithIsStatic(t8, e2, s2, r2);
  }
  parsePostMemberNameModifiers(t8) {
    this.eat(17) && (t8.optional = true), t8.readonly && this.match(10) && this.raise(t8.start, Ml.ClassMethodHasReadonly), t8.declare && this.match(10) && this.raise(t8.start, Ml.ClassMethodHasDeclare);
  }
  parseExpressionStatement(t8, e2) {
    return (e2.type === "Identifier" ? this.tsParseExpressionStatement(t8, e2) : void 0) || super.parseExpressionStatement(t8, e2);
  }
  shouldParseExportDeclaration() {
    return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration();
  }
  parseConditional(t8, e2, s2, r2) {
    if (!this.state.maybeInArrowParameters || !this.match(17))
      return super.parseConditional(t8, e2, s2, r2);
    const i2 = this.tryParse(() => super.parseConditional(t8, e2, s2));
    return i2.node ? (i2.error && (this.state = i2.failState), i2.node) : (i2.error && super.setOptionalParametersError(r2, i2.error), t8);
  }
  parseParenItem(t8, e2, s2) {
    if (t8 = super.parseParenItem(t8, e2, s2), this.eat(17) && (t8.optional = true, this.resetEndLocation(t8)), this.match(14)) {
      const r2 = this.startNodeAt(e2, s2);
      return r2.expression = t8, r2.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r2, "TSTypeCastExpression");
    }
    return t8;
  }
  parseExportDeclaration(t8) {
    const e2 = this.state.start, s2 = this.state.startLoc, r2 = this.eatContextual(115);
    if (r2 && (this.isContextual(115) || !this.shouldParseExportDeclaration()))
      throw this.raise(this.state.start, Ml.ExpectedAmbientAfterExportDeclare);
    let i2;
    return Pc(this.state.type) && (i2 = this.tsTryParseExportDeclaration()), i2 || (i2 = super.parseExportDeclaration(t8)), i2 && (i2.type === "TSInterfaceDeclaration" || i2.type === "TSTypeAliasDeclaration" || r2) && (t8.exportKind = "type"), i2 && r2 && (this.resetStartLocation(i2, e2, s2), i2.declare = true), i2;
  }
  parseClassId(t8, e2, s2) {
    if ((!e2 || s2) && this.isContextual(104))
      return;
    super.parseClassId(t8, e2, s2, t8.declare ? 1024 : 139);
    const r2 = this.tsTryParseTypeParameters();
    r2 && (t8.typeParameters = r2);
  }
  parseClassPropertyAnnotation(t8) {
    !t8.optional && this.eat(33) && (t8.definite = true);
    const e2 = this.tsTryParseTypeAnnotation();
    e2 && (t8.typeAnnotation = e2);
  }
  parseClassProperty(t8) {
    if (this.parseClassPropertyAnnotation(t8), this.state.isAmbientContext && this.match(27) && this.raise(this.state.start, Ml.DeclareClassFieldHasInitializer), t8.abstract && this.match(27)) {
      const { key: e2 } = t8;
      this.raise(this.state.start, Ml.AbstractPropertyHasInitializer, e2.type !== "Identifier" || t8.computed ? "[".concat(this.input.slice(e2.start, e2.end), "]") : e2.name);
    }
    return super.parseClassProperty(t8);
  }
  parseClassPrivateProperty(t8) {
    return t8.abstract && this.raise(t8.start, Ml.PrivateElementHasAbstract), t8.accessibility && this.raise(t8.start, Ml.PrivateElementHasAccessibility, t8.accessibility), this.parseClassPropertyAnnotation(t8), super.parseClassPrivateProperty(t8);
  }
  pushClassMethod(t8, e2, s2, r2, i2, n2) {
    const a2 = this.tsTryParseTypeParameters();
    a2 && i2 && this.raise(a2.start, Ml.ConstructorHasTypeParameters), !e2.declare || e2.kind !== "get" && e2.kind !== "set" || this.raise(e2.start, Ml.DeclareAccessor, e2.kind), a2 && (e2.typeParameters = a2), super.pushClassMethod(t8, e2, s2, r2, i2, n2);
  }
  pushClassPrivateMethod(t8, e2, s2, r2) {
    const i2 = this.tsTryParseTypeParameters();
    i2 && (e2.typeParameters = i2), super.pushClassPrivateMethod(t8, e2, s2, r2);
  }
  declareClassPrivateMethodInScope(t8, e2) {
    t8.type !== "TSDeclareMethod" && (t8.type !== "MethodDefinition" || t8.value.body) && super.declareClassPrivateMethodInScope(t8, e2);
  }
  parseClassSuper(t8) {
    super.parseClassSuper(t8), t8.superClass && this.match(43) && (t8.superTypeParameters = this.tsParseTypeArguments()), this.eatContextual(104) && (t8.implements = this.tsParseHeritageClause("implements"));
  }
  parseObjPropValue(t8) {
    const e2 = this.tsTryParseTypeParameters();
    e2 && (t8.typeParameters = e2);
    for (var s2 = arguments.length, r2 = new Array(s2 > 1 ? s2 - 1 : 0), i2 = 1; i2 < s2; i2++)
      r2[i2 - 1] = arguments[i2];
    super.parseObjPropValue(t8, ...r2);
  }
  parseFunctionParams(t8, e2) {
    const s2 = this.tsTryParseTypeParameters();
    s2 && (t8.typeParameters = s2), super.parseFunctionParams(t8, e2);
  }
  parseVarId(t8, e2) {
    super.parseVarId(t8, e2), t8.id.type === "Identifier" && this.eat(33) && (t8.definite = true);
    const s2 = this.tsTryParseTypeAnnotation();
    s2 && (t8.id.typeAnnotation = s2, this.resetEndLocation(t8.id));
  }
  parseAsyncArrowFromCallExpression(t8, e2) {
    return this.match(14) && (t8.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(t8, e2);
  }
  parseMaybeAssign() {
    for (var t8 = arguments.length, e2 = new Array(t8), s2 = 0; s2 < t8; s2++)
      e2[s2] = arguments[s2];
    var r2, i2, n2, a2, o2, u2, h2;
    let p2, c2, l2, d2;
    if (this.hasPlugin("jsx") && (this.match(132) || this.match(43))) {
      if (p2 = this.state.clone(), c2 = this.tryParse(() => super.parseMaybeAssign(...e2), p2), !c2.error)
        return c2.node;
      const { context: t9 } = this.state;
      t9[t9.length - 1] === hc.j_oTag ? t9.length -= 2 : t9[t9.length - 1] === hc.j_expr && (t9.length -= 1);
    }
    if (!((r2 = c2) != null && r2.error || this.match(43)))
      return super.parseMaybeAssign(...e2);
    p2 = p2 || this.state.clone();
    const D2 = this.tryParse((t9) => {
      var s3, r3;
      d2 = this.tsParseTypeParameters();
      const i3 = super.parseMaybeAssign(...e2);
      return (i3.type !== "ArrowFunctionExpression" || (s3 = i3.extra) != null && s3.parenthesized) && t9(), ((r3 = d2) == null ? void 0 : r3.params.length) !== 0 && this.resetStartLocationFromNode(i3, d2), i3.typeParameters = d2, i3;
    }, p2);
    if (!D2.error && !D2.aborted)
      return d2 && this.reportReservedArrowTypeParam(d2), D2.node;
    if (!c2 && (Ol(!this.hasPlugin("jsx")), l2 = this.tryParse(() => super.parseMaybeAssign(...e2), p2), !l2.error))
      return l2.node;
    if ((i2 = c2) != null && i2.node)
      return this.state = c2.failState, c2.node;
    if (D2.node)
      return this.state = D2.failState, d2 && this.reportReservedArrowTypeParam(d2), D2.node;
    if ((n2 = l2) != null && n2.node)
      return this.state = l2.failState, l2.node;
    if ((a2 = c2) != null && a2.thrown)
      throw c2.error;
    if (D2.thrown)
      throw D2.error;
    if ((o2 = l2) != null && o2.thrown)
      throw l2.error;
    throw ((u2 = c2) == null ? void 0 : u2.error) || D2.error || ((h2 = l2) == null ? void 0 : h2.error);
  }
  reportReservedArrowTypeParam(t8) {
    var e2;
    t8.params.length !== 1 || (e2 = t8.extra) != null && e2.trailingComma || !this.getPluginOption("typescript", "disallowAmbiguousJSXLike") || this.raise(t8.start, Ml.ReservedArrowTypeParam);
  }
  parseMaybeUnary(t8) {
    return !this.hasPlugin("jsx") && this.match(43) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(t8);
  }
  parseArrow(t8) {
    if (this.match(14)) {
      const e2 = this.tryParse((t9) => {
        const e3 = this.tsParseTypeOrTypePredicateAnnotation(14);
        return !this.canInsertSemicolon() && this.match(19) || t9(), e3;
      });
      if (e2.aborted)
        return;
      e2.thrown || (e2.error && (this.state = e2.failState), t8.returnType = e2.node);
    }
    return super.parseArrow(t8);
  }
  parseAssignableListItemTypes(t8) {
    this.eat(17) && (t8.type === "Identifier" || this.state.isAmbientContext || this.state.inType || this.raise(t8.start, Ml.PatternIsOptional), t8.optional = true);
    const e2 = this.tsTryParseTypeAnnotation();
    return e2 && (t8.typeAnnotation = e2), this.resetEndLocation(t8), t8;
  }
  isAssignable(t8, e2) {
    switch (t8.type) {
      case "TSTypeCastExpression":
        return this.isAssignable(t8.expression, e2);
      case "TSParameterProperty":
        return true;
      default:
        return super.isAssignable(t8, e2);
    }
  }
  toAssignable(t8) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    switch (t8.type) {
      case "TSTypeCastExpression":
        return super.toAssignable(this.typeCastToParameter(t8), e2);
      case "TSParameterProperty":
      default:
        return super.toAssignable(t8, e2);
      case "ParenthesizedExpression":
        return this.toAssignableParenthesizedExpression(t8, e2);
      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        return t8.expression = this.toAssignable(t8.expression, e2), t8;
    }
  }
  toAssignableParenthesizedExpression(t8, e2) {
    switch (t8.expression.type) {
      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
      case "ParenthesizedExpression":
        return t8.expression = this.toAssignable(t8.expression, e2), t8;
      default:
        return super.toAssignable(t8, e2);
    }
  }
  checkLVal(t8, e2) {
    for (var s2, r2 = arguments.length, i2 = new Array(r2 > 2 ? r2 - 2 : 0), n2 = 2; n2 < r2; n2++)
      i2[n2 - 2] = arguments[n2];
    switch (t8.type) {
      case "TSTypeCastExpression":
        return;
      case "TSParameterProperty":
        return void this.checkLVal(t8.parameter, "parameter property", ...i2);
      case "TSAsExpression":
      case "TSTypeAssertion":
        if (!(i2[0] || e2 === "parenthesized expression" || (s2 = t8.extra) != null && s2.parenthesized)) {
          this.raise(t8.start, ic.InvalidLhs, e2);
          break;
        }
        return void this.checkLVal(t8.expression, "parenthesized expression", ...i2);
      case "TSNonNullExpression":
        return void this.checkLVal(t8.expression, e2, ...i2);
      default:
        return void super.checkLVal(t8, e2, ...i2);
    }
  }
  parseBindingAtom() {
    return this.state.type === 72 ? this.parseIdentifier(true) : super.parseBindingAtom();
  }
  parseMaybeDecoratorArguments(t8) {
    if (this.match(43)) {
      const e2 = this.tsParseTypeArguments();
      if (this.match(10)) {
        const s2 = super.parseMaybeDecoratorArguments(t8);
        return s2.typeParameters = e2, s2;
      }
      this.unexpected(this.state.start, 10);
    }
    return super.parseMaybeDecoratorArguments(t8);
  }
  checkCommaAfterRest(t8) {
    this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === t8 ? this.next() : super.checkCommaAfterRest(t8);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(33) || this.match(14) || super.isClassProperty();
  }
  parseMaybeDefault() {
    const t8 = super.parseMaybeDefault(...arguments);
    return t8.type === "AssignmentPattern" && t8.typeAnnotation && t8.right.start < t8.typeAnnotation.start && this.raise(t8.typeAnnotation.start, Ml.TypeAnnotationAfterAssign), t8;
  }
  getTokenFromCode(t8) {
    if (this.state.inType) {
      if (t8 === 62)
        return this.finishOp(44, 1);
      if (t8 === 60)
        return this.finishOp(43, 1);
    }
    return super.getTokenFromCode(t8);
  }
  reScan_lt_gt() {
    const { type: t8 } = this.state;
    t8 === 43 ? (this.state.pos -= 1, this.readToken_lt()) : t8 === 44 && (this.state.pos -= 1, this.readToken_gt());
  }
  toAssignableList(t8) {
    for (let e2 = 0; e2 < t8.length; e2++) {
      const s2 = t8[e2];
      if (s2)
        switch (s2.type) {
          case "TSTypeCastExpression":
            t8[e2] = this.typeCastToParameter(s2);
            break;
          case "TSAsExpression":
          case "TSTypeAssertion":
            this.state.maybeInArrowParameters ? this.raise(s2.start, Ml.UnexpectedTypeCastInParameter) : t8[e2] = this.typeCastToParameter(s2);
        }
    }
    return super.toAssignableList(...arguments);
  }
  typeCastToParameter(t8) {
    return t8.expression.typeAnnotation = t8.typeAnnotation, this.resetEndLocation(t8.expression, t8.typeAnnotation.end, t8.typeAnnotation.loc.end), t8.expression;
  }
  shouldParseArrow(t8) {
    return this.match(14) ? t8.every((t9) => this.isAssignable(t9, true)) : super.shouldParseArrow(t8);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }
  jsxParseOpeningElementAfterName(t8) {
    if (this.match(43)) {
      const e2 = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
      e2 && (t8.typeParameters = e2);
    }
    return super.jsxParseOpeningElementAfterName(t8);
  }
  getGetterSetterExpectedParamCount(t8) {
    const e2 = super.getGetterSetterExpectedParamCount(t8), s2 = this.getObjectOrClassMethodParams(t8)[0];
    return s2 && this.isThisParam(s2) ? e2 + 1 : e2;
  }
  parseCatchClauseParam() {
    const t8 = super.parseCatchClauseParam(), e2 = this.tsTryParseTypeAnnotation();
    return e2 && (t8.typeAnnotation = e2, this.resetEndLocation(t8)), t8;
  }
  tsInAmbientContext(t8) {
    const e2 = this.state.isAmbientContext;
    this.state.isAmbientContext = true;
    try {
      return t8();
    } finally {
      this.state.isAmbientContext = e2;
    }
  }
  parseClass(t8) {
    const e2 = this.state.inAbstractClass;
    this.state.inAbstractClass = !!t8.abstract;
    try {
      for (var s2 = arguments.length, r2 = new Array(s2 > 1 ? s2 - 1 : 0), i2 = 1; i2 < s2; i2++)
        r2[i2 - 1] = arguments[i2];
      return super.parseClass(t8, ...r2);
    } finally {
      this.state.inAbstractClass = e2;
    }
  }
  tsParseAbstractDeclaration(t8) {
    if (this.match(74))
      return t8.abstract = true, this.parseClass(t8, true, false);
    if (this.isContextual(119)) {
      if (!this.hasFollowingLineBreak())
        return t8.abstract = true, this.raise(t8.start, Ml.NonClassMethodPropertyHasAbstractModifer), this.next(), this.tsParseInterfaceDeclaration(t8);
    } else
      this.unexpected(null, 74);
  }
  parseMethod() {
    const t8 = super.parseMethod(...arguments);
    if (t8.abstract) {
      if (this.hasPlugin("estree") ? !!t8.value.body : !!t8.body) {
        const { key: e2 } = t8;
        this.raise(t8.start, Ml.AbstractMethodHasImplementation, e2.type !== "Identifier" || t8.computed ? "[".concat(this.input.slice(e2.start, e2.end), "]") : e2.name);
      }
    }
    return t8;
  }
  tsParseTypeParameterName() {
    return this.parseIdentifier().name;
  }
  shouldParseAsAmbientContext() {
    return !!this.getPluginOption("typescript", "dts");
  }
  parse() {
    return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
  }
  getExpression() {
    return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
  }
  parseExportSpecifier(t8, e2, s2, r2) {
    return !e2 && r2 ? (this.parseTypeOnlyImportExportSpecifier(t8, false, s2), this.finishNode(t8, "ExportSpecifier")) : (t8.exportKind = "value", super.parseExportSpecifier(t8, e2, s2, r2));
  }
  parseImportSpecifier(t8, e2, s2, r2) {
    return !e2 && r2 ? (this.parseTypeOnlyImportExportSpecifier(t8, true, s2), this.finishNode(t8, "ImportSpecifier")) : (t8.importKind = "value", super.parseImportSpecifier(t8, e2, s2, r2));
  }
  parseTypeOnlyImportExportSpecifier(t8, e2, s2) {
    const r2 = e2 ? "imported" : "local", i2 = e2 ? "local" : "exported";
    let n2, a2 = t8[r2], o2 = false, u2 = true;
    const h2 = a2.start;
    if (this.isContextual(87)) {
      const t9 = this.parseIdentifier();
      if (this.isContextual(87)) {
        const e3 = this.parseIdentifier();
        Tc(this.state.type) ? (o2 = true, a2 = t9, n2 = this.parseIdentifier(), u2 = false) : (n2 = e3, u2 = false);
      } else
        Tc(this.state.type) ? (u2 = false, n2 = this.parseIdentifier()) : (o2 = true, a2 = t9);
    } else
      Tc(this.state.type) && (o2 = true, a2 = this.parseIdentifier());
    o2 && s2 && this.raise(h2, e2 ? Ml.TypeModifierIsUsedInTypeImports : Ml.TypeModifierIsUsedInTypeExports), t8[r2] = a2, t8[i2] = n2;
    t8[e2 ? "importKind" : "exportKind"] = o2 ? "type" : "value", u2 && this.eatContextual(87) && (t8[i2] = e2 ? this.parseIdentifier() : this.parseModuleExportName()), t8[i2] || (t8[i2] = Al(t8[r2])), e2 && this.checkLVal(t8[i2], "import specifier", 9);
  }
}, v8intrinsic: (t7) => class extends t7 {
  parseV8Intrinsic() {
    if (this.match(48)) {
      const t8 = this.state.start, e2 = this.startNode();
      if (this.next(), Pc(this.state.type)) {
        const t9 = this.parseIdentifierName(this.state.start), s2 = this.createIdentifier(e2, t9);
        if (s2.type = "V8IntrinsicIdentifier", this.match(10))
          return s2;
      }
      this.unexpected(t8);
    }
  }
  parseExprAtom() {
    return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
  }
}, placeholders: (t7) => class extends t7 {
  parsePlaceholder(t8) {
    if (this.match(134)) {
      const e2 = this.startNode();
      return this.next(), this.assertNoSpace("Unexpected space in placeholder."), e2.name = super.parseIdentifier(true), this.assertNoSpace("Unexpected space in placeholder."), this.expect(134), this.finishPlaceholder(e2, t8);
    }
  }
  finishPlaceholder(t8, e2) {
    const s2 = !(!t8.expectedNode || t8.type !== "Placeholder");
    return t8.expectedNode = e2, s2 ? t8 : this.finishNode(t8, "Placeholder");
  }
  getTokenFromCode(t8) {
    return t8 === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(134, 2) : super.getTokenFromCode(...arguments);
  }
  parseExprAtom() {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
  }
  parseIdentifier() {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
  }
  checkReservedWord(t8) {
    t8 !== void 0 && super.checkReservedWord(...arguments);
  }
  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
  }
  checkLVal(t8) {
    t8.type !== "Placeholder" && super.checkLVal(...arguments);
  }
  toAssignable(t8) {
    return t8 && t8.type === "Placeholder" && t8.expectedNode === "Expression" ? (t8.expectedNode = "Pattern", t8) : super.toAssignable(...arguments);
  }
  isLet(t8) {
    if (super.isLet(t8))
      return true;
    if (!this.isContextual(93))
      return false;
    if (t8)
      return false;
    return this.lookahead().type === 134;
  }
  verifyBreakContinue(t8) {
    t8.label && t8.label.type === "Placeholder" || super.verifyBreakContinue(...arguments);
  }
  parseExpressionStatement(t8, e2) {
    if (e2.type !== "Placeholder" || e2.extra && e2.extra.parenthesized)
      return super.parseExpressionStatement(...arguments);
    if (this.match(14)) {
      const s2 = t8;
      return s2.label = this.finishPlaceholder(e2, "Identifier"), this.next(), s2.body = this.parseStatement("label"), this.finishNode(s2, "LabeledStatement");
    }
    return this.semicolon(), t8.name = e2.name, this.finishPlaceholder(t8, "Statement");
  }
  parseBlock() {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
  }
  parseFunctionId() {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
  }
  parseClass(t8, e2, s2) {
    const r2 = e2 ? "ClassDeclaration" : "ClassExpression";
    this.next(), this.takeDecorators(t8);
    const i2 = this.state.strict, n2 = this.parsePlaceholder("Identifier");
    if (n2)
      if (this.match(75) || this.match(134) || this.match(5))
        t8.id = n2;
      else {
        if (s2 || !e2)
          return t8.id = null, t8.body = this.finishPlaceholder(n2, "ClassBody"), this.finishNode(t8, r2);
        this.unexpected(null, jl.ClassNameIsRequired);
      }
    else
      this.parseClassId(t8, e2, s2);
    return this.parseClassSuper(t8), t8.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!t8.superClass, i2), this.finishNode(t8, r2);
  }
  parseExport(t8) {
    const e2 = this.parsePlaceholder("Identifier");
    if (!e2)
      return super.parseExport(...arguments);
    if (!this.isContextual(91) && !this.match(12))
      return t8.specifiers = [], t8.source = null, t8.declaration = this.finishPlaceholder(e2, "Declaration"), this.finishNode(t8, "ExportNamedDeclaration");
    this.expectPlugin("exportDefaultFrom");
    const s2 = this.startNode();
    return s2.exported = e2, t8.specifiers = [this.finishNode(s2, "ExportDefaultSpecifier")], super.parseExport(t8);
  }
  isExportDefaultSpecifier() {
    if (this.match(59)) {
      const t8 = this.nextTokenStart();
      if (this.isUnparsedContextual(t8, "from") && this.input.startsWith(Nc(134), this.nextTokenStartSince(t8 + 4)))
        return true;
    }
    return super.isExportDefaultSpecifier();
  }
  maybeParseExportDefaultSpecifier(t8) {
    return !!(t8.specifiers && t8.specifiers.length > 0) || super.maybeParseExportDefaultSpecifier(...arguments);
  }
  checkExport(t8) {
    const { specifiers: e2 } = t8;
    e2 != null && e2.length && (t8.specifiers = e2.filter((t9) => t9.exported.type === "Placeholder")), super.checkExport(t8), t8.specifiers = e2;
  }
  parseImport(t8) {
    const e2 = this.parsePlaceholder("Identifier");
    if (!e2)
      return super.parseImport(...arguments);
    if (t8.specifiers = [], !this.isContextual(91) && !this.match(12))
      return t8.source = this.finishPlaceholder(e2, "StringLiteral"), this.semicolon(), this.finishNode(t8, "ImportDeclaration");
    const s2 = this.startNodeAtNode(e2);
    if (s2.local = e2, this.finishNode(s2, "ImportDefaultSpecifier"), t8.specifiers.push(s2), this.eat(12)) {
      this.maybeParseStarImportSpecifier(t8) || this.parseNamedImportSpecifiers(t8);
    }
    return this.expectContextual(91), t8.source = this.parseImportSource(), this.semicolon(), this.finishNode(t8, "ImportDeclaration");
  }
  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
  }
} };
var Gl = Object.keys(ql);
var Wl = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: false, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowSuperOutsideMethod: false, allowUndeclaredExports: false, plugins: [], strictMode: null, ranges: false, tokens: false, createParenthesizedExpressions: false, errorRecovery: false, attachComment: true };
var Kl = (t7) => t7.type === "ParenthesizedExpression" ? Kl(t7.expression) : t7;
var Xl = new Map([["ArrowFunctionExpression", "arrow function"], ["AssignmentExpression", "assignment"], ["ConditionalExpression", "conditional"], ["YieldExpression", "yield"]]);
var Jl = { kind: "loop" };
var $l = { kind: "switch" };
var Yl = /[\uD800-\uDFFF]/u;
var Ql = /in(?:stanceof)?/y;
var Zl = class extends class extends class extends class extends class extends class extends class extends class extends class extends class {
  constructor() {
    this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
  }
  hasPlugin(t7) {
    return this.plugins.has(t7);
  }
  getPluginOption(t7, e2) {
    if (this.hasPlugin(t7))
      return this.plugins.get(t7)[e2];
  }
} {
  addComment(t7) {
    this.filename && (t7.loc.filename = this.filename), this.state.comments.push(t7);
  }
  processComment(t7) {
    const { commentStack: e2 } = this.state, s2 = e2.length;
    if (s2 === 0)
      return;
    let r2 = s2 - 1;
    const i2 = e2[r2];
    i2.start === t7.end && (i2.leadingNode = t7, r2--);
    const { start: n2 } = t7;
    for (; r2 >= 0; r2--) {
      const s3 = e2[r2], i3 = s3.end;
      if (!(i3 > n2)) {
        i3 === n2 && (s3.trailingNode = t7);
        break;
      }
      s3.containingNode = t7, this.finalizeComment(s3), e2.splice(r2, 1);
    }
  }
  finalizeComment(t7) {
    const { comments: e2 } = t7;
    if (t7.leadingNode !== null || t7.trailingNode !== null)
      t7.leadingNode !== null && tc(t7.leadingNode, e2), t7.trailingNode !== null && function(t8, e3) {
        t8.leadingComments === void 0 ? t8.leadingComments = e3 : t8.leadingComments.unshift(...e3);
      }(t7.trailingNode, e2);
    else {
      const { containingNode: s2, start: r2 } = t7;
      if (this.input.charCodeAt(r2 - 1) === 44)
        switch (s2.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            sc(s2, s2.properties, t7);
            break;
          case "CallExpression":
          case "OptionalCallExpression":
            sc(s2, s2.arguments, t7);
            break;
          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            sc(s2, s2.params, t7);
            break;
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            sc(s2, s2.elements, t7);
            break;
          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            sc(s2, s2.specifiers, t7);
            break;
          default:
            ec(s2, e2);
        }
      else
        ec(s2, e2);
    }
  }
  finalizeRemainingComments() {
    const { commentStack: t7 } = this.state;
    for (let e2 = t7.length - 1; e2 >= 0; e2--)
      this.finalizeComment(t7[e2]);
    this.state.commentStack = [];
  }
  resetPreviousNodeTrailingComments(t7) {
    const { commentStack: e2 } = this.state, { length: s2 } = e2;
    if (s2 === 0)
      return;
    const r2 = e2[s2 - 1];
    r2.leadingNode === t7 && (r2.leadingNode = null);
  }
  takeSurroundingComments(t7, e2, s2) {
    const { commentStack: r2 } = this.state, i2 = r2.length;
    if (i2 === 0)
      return;
    let n2 = i2 - 1;
    for (; n2 >= 0; n2--) {
      const i3 = r2[n2], a2 = i3.end;
      if (i3.start === s2)
        i3.leadingNode = t7;
      else if (a2 === e2)
        i3.trailingNode = t7;
      else if (a2 < e2)
        break;
    }
  }
} {
  getLocationForPosition(t7) {
    let e2;
    return e2 = t7 === this.state.start ? this.state.startLoc : t7 === this.state.lastTokStart ? this.state.lastTokStartLoc : t7 === this.state.end ? this.state.endLoc : t7 === this.state.lastTokEnd ? this.state.lastTokEndLoc : function(t8, e3) {
      let s2, r2 = 1, i2 = 0;
      for (Kp.lastIndex = 0; (s2 = Kp.exec(t8)) && s2.index < e3; )
        r2++, i2 = Kp.lastIndex;
      return new Qp(r2, e3 - i2);
    }(this.input, t7), e2;
  }
  raise(t7, e2) {
    let { code: s2, reasonCode: r2, template: i2 } = e2;
    for (var n2 = arguments.length, a2 = new Array(n2 > 2 ? n2 - 2 : 0), o2 = 2; o2 < n2; o2++)
      a2[o2 - 2] = arguments[o2];
    return this.raiseWithData(t7, { code: s2, reasonCode: r2 }, i2, ...a2);
  }
  raiseOverwrite(t7, e2) {
    let { code: s2, template: r2 } = e2;
    for (var i2 = arguments.length, n2 = new Array(i2 > 2 ? i2 - 2 : 0), a2 = 2; a2 < i2; a2++)
      n2[a2 - 2] = arguments[a2];
    const o2 = this.getLocationForPosition(t7), u2 = r2.replace(/%(\d+)/g, (t8, e3) => n2[e3]) + " (".concat(o2.line, ":").concat(o2.column, ")");
    if (this.options.errorRecovery) {
      const e3 = this.state.errors;
      for (let s3 = e3.length - 1; s3 >= 0; s3--) {
        const r3 = e3[s3];
        if (r3.pos === t7)
          return Object.assign(r3, { message: u2 });
        if (r3.pos < t7)
          break;
      }
    }
    return this._raise({ code: s2, loc: o2, pos: t7 }, u2);
  }
  raiseWithData(t7, e2, s2) {
    for (var r2 = arguments.length, i2 = new Array(r2 > 3 ? r2 - 3 : 0), n2 = 3; n2 < r2; n2++)
      i2[n2 - 3] = arguments[n2];
    const a2 = this.getLocationForPosition(t7), o2 = s2.replace(/%(\d+)/g, (t8, e3) => i2[e3]) + " (".concat(a2.line, ":").concat(a2.column, ")");
    return this._raise(Object.assign({ loc: a2, pos: t7 }, e2), o2);
  }
  _raise(t7, e2) {
    const s2 = new SyntaxError(e2);
    if (Object.assign(s2, t7), this.options.errorRecovery)
      return this.isLookahead || this.state.errors.push(s2), s2;
    throw s2;
  }
} {
  constructor(t7, e2) {
    super(), this.isLookahead = void 0, this.tokens = [], this.state = new sl(), this.state.init(t7), this.input = e2, this.length = e2.length, this.isLookahead = false;
  }
  pushToken(t7) {
    this.tokens.length = this.state.tokensLength, this.tokens.push(t7), ++this.state.tokensLength;
  }
  next() {
    this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new ol(this.state)), this.state.lastTokEnd = this.state.end, this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
  }
  eat(t7) {
    return !!this.match(t7) && (this.next(), true);
  }
  match(t7) {
    return this.state.type === t7;
  }
  createLookaheadState(t7) {
    return { pos: t7.pos, value: null, type: t7.type, start: t7.start, end: t7.end, lastTokEnd: t7.end, context: [this.curContext()], inType: t7.inType };
  }
  lookahead() {
    const t7 = this.state;
    this.state = this.createLookaheadState(t7), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
    const e2 = this.state;
    return this.state = t7, e2;
  }
  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }
  nextTokenStartSince(t7) {
    return Jp.lastIndex = t7, Jp.test(this.input) ? Jp.lastIndex : t7;
  }
  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }
  codePointAtPos(t7) {
    let e2 = this.input.charCodeAt(t7);
    if ((64512 & e2) == 55296 && ++t7 < this.input.length) {
      const s2 = this.input.charCodeAt(t7);
      (64512 & s2) == 56320 && (e2 = 65536 + ((1023 & e2) << 10) + (1023 & s2));
    }
    return e2;
  }
  setStrict(t7) {
    this.state.strict = t7, t7 && (this.state.strictErrors.forEach((t8, e2) => this.raise(e2, t8)), this.state.strictErrors.clear());
  }
  curContext() {
    return this.state.context[this.state.context.length - 1];
  }
  nextToken() {
    const t7 = this.curContext();
    t7.preserveSpace || this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length ? this.finishToken(129) : t7 === hc.template ? this.readTmplToken() : this.getTokenFromCode(this.codePointAtPos(this.state.pos));
  }
  skipBlockComment() {
    let t7;
    this.isLookahead || (t7 = this.state.curPosition());
    const e2 = this.state.pos, s2 = this.input.indexOf("*/", e2 + 2);
    if (s2 === -1)
      throw this.raise(e2, ic.UnterminatedComment);
    for (this.state.pos = s2 + 2, Kp.lastIndex = e2 + 2; Kp.test(this.input) && Kp.lastIndex <= s2; )
      ++this.state.curLine, this.state.lineStart = Kp.lastIndex;
    if (this.isLookahead)
      return;
    const r2 = { type: "CommentBlock", value: this.input.slice(e2 + 2, s2), start: e2, end: s2 + 2, loc: new Zp(t7, this.state.curPosition()) };
    return this.options.tokens && this.pushToken(r2), r2;
  }
  skipLineComment(t7) {
    const e2 = this.state.pos;
    let s2;
    this.isLookahead || (s2 = this.state.curPosition());
    let r2 = this.input.charCodeAt(this.state.pos += t7);
    if (this.state.pos < this.length)
      for (; !Xp(r2) && ++this.state.pos < this.length; )
        r2 = this.input.charCodeAt(this.state.pos);
    if (this.isLookahead)
      return;
    const i2 = this.state.pos, n2 = { type: "CommentLine", value: this.input.slice(e2 + t7, i2), start: e2, end: i2, loc: new Zp(s2, this.state.curPosition()) };
    return this.options.tokens && this.pushToken(n2), n2;
  }
  skipSpace() {
    const t7 = this.state.pos, e2 = [];
    t:
      for (; this.state.pos < this.length; ) {
        const s2 = this.input.charCodeAt(this.state.pos);
        switch (s2) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const t8 = this.skipBlockComment();
                t8 !== void 0 && (this.addComment(t8), this.options.attachComment && e2.push(t8));
                break;
              }
              case 47: {
                const t8 = this.skipLineComment(2);
                t8 !== void 0 && (this.addComment(t8), this.options.attachComment && e2.push(t8));
                break;
              }
              default:
                break t;
            }
            break;
          default:
            if (Yp(s2))
              ++this.state.pos;
            else if (s2 !== 45 || this.inModule) {
              if (s2 !== 60 || this.inModule)
                break t;
              {
                const t8 = this.state.pos;
                if (this.input.charCodeAt(t8 + 1) !== 33 || this.input.charCodeAt(t8 + 2) !== 45 || this.input.charCodeAt(t8 + 3) !== 45)
                  break t;
                {
                  const t9 = this.skipLineComment(4);
                  t9 !== void 0 && (this.addComment(t9), this.options.attachComment && e2.push(t9));
                }
              }
            } else {
              const s3 = this.state.pos;
              if (this.input.charCodeAt(s3 + 1) !== 45 || this.input.charCodeAt(s3 + 2) !== 62 || !(t7 === 0 || this.state.lineStart > t7))
                break t;
              {
                const t8 = this.skipLineComment(3);
                t8 !== void 0 && (this.addComment(t8), this.options.attachComment && e2.push(t8));
              }
            }
        }
      }
    if (e2.length > 0) {
      const s2 = { start: t7, end: this.state.pos, comments: e2, leadingNode: null, trailingNode: null, containingNode: null };
      this.state.commentStack.push(s2);
    }
  }
  finishToken(t7, e2) {
    this.state.end = this.state.pos;
    const s2 = this.state.type;
    this.state.type = t7, this.state.value = e2, this.isLookahead || (this.state.endLoc = this.state.curPosition(), this.updateContext(s2));
  }
  replaceToken(t7) {
    this.state.type = t7, this.updateContext();
  }
  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter())
      return;
    const t7 = this.state.pos + 1, e2 = this.codePointAtPos(t7);
    if (e2 >= 48 && e2 <= 57)
      throw this.raise(this.state.pos, ic.UnexpectedDigitAfterHash);
    if (e2 === 123 || e2 === 91 && this.hasPlugin("recordAndTuple")) {
      if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") !== "hash")
        throw this.raise(this.state.pos, e2 === 123 ? ic.RecordExpressionHashIncorrectStartSyntaxType : ic.TupleExpressionHashIncorrectStartSyntaxType);
      this.state.pos += 2, e2 === 123 ? this.finishToken(7) : this.finishToken(1);
    } else
      _c(e2) ? (++this.state.pos, this.finishToken(128, this.readWord1(e2))) : e2 === 92 ? (++this.state.pos, this.finishToken(128, this.readWord1())) : this.finishOp(25, 1);
  }
  readToken_dot() {
    const t7 = this.input.charCodeAt(this.state.pos + 1);
    t7 >= 48 && t7 <= 57 ? this.readNumber(true) : t7 === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
  }
  readToken_slash() {
    this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(29, 2) : this.finishOp(50, 1);
  }
  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2)
      return false;
    let t7 = this.input.charCodeAt(this.state.pos + 1);
    if (t7 !== 33)
      return false;
    const e2 = this.state.pos;
    for (this.state.pos += 1; !Xp(t7) && ++this.state.pos < this.length; )
      t7 = this.input.charCodeAt(this.state.pos);
    const s2 = this.input.slice(e2 + 2, this.state.pos);
    return this.finishToken(26, s2), true;
  }
  readToken_mult_modulo(t7) {
    let e2 = t7 === 42 ? 49 : 48, s2 = 1, r2 = this.input.charCodeAt(this.state.pos + 1);
    t7 === 42 && r2 === 42 && (s2++, r2 = this.input.charCodeAt(this.state.pos + 2), e2 = 51), r2 !== 61 || this.state.inType || (s2++, e2 = t7 === 37 ? 31 : 28), this.finishOp(e2, s2);
  }
  readToken_pipe_amp(t7) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    if (e2 !== t7) {
      if (t7 === 124) {
        if (e2 === 62)
          return void this.finishOp(35, 2);
        if (this.hasPlugin("recordAndTuple") && e2 === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, ic.RecordExpressionBarIncorrectEndSyntaxType);
          return this.state.pos += 2, void this.finishToken(9);
        }
        if (this.hasPlugin("recordAndTuple") && e2 === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, ic.TupleExpressionBarIncorrectEndSyntaxType);
          return this.state.pos += 2, void this.finishToken(4);
        }
      }
      e2 !== 61 ? this.finishOp(t7 === 124 ? 39 : 41, 1) : this.finishOp(28, 2);
    } else
      this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(28, 3) : this.finishOp(t7 === 124 ? 37 : 38, 2);
  }
  readToken_caret() {
    this.input.charCodeAt(this.state.pos + 1) !== 61 || this.state.inType ? this.finishOp(40, 1) : this.finishOp(30, 2);
  }
  readToken_plus_min(t7) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    e2 !== t7 ? e2 === 61 ? this.finishOp(28, 2) : this.finishOp(47, 1) : this.finishOp(32, 2);
  }
  readToken_lt() {
    const { pos: t7 } = this.state, e2 = this.input.charCodeAt(t7 + 1);
    if (e2 === 60)
      return this.input.charCodeAt(t7 + 2) === 61 ? void this.finishOp(28, 3) : void this.finishOp(46, 2);
    e2 !== 61 ? this.finishOp(43, 1) : this.finishOp(45, 2);
  }
  readToken_gt() {
    const { pos: t7 } = this.state, e2 = this.input.charCodeAt(t7 + 1);
    if (e2 === 62) {
      const e3 = this.input.charCodeAt(t7 + 2) === 62 ? 3 : 2;
      return this.input.charCodeAt(t7 + e3) === 61 ? void this.finishOp(28, e3 + 1) : void this.finishOp(46, e3);
    }
    e2 !== 61 ? this.finishOp(44, 1) : this.finishOp(45, 2);
  }
  readToken_eq_excl(t7) {
    const e2 = this.input.charCodeAt(this.state.pos + 1);
    if (e2 !== 61)
      return t7 === 61 && e2 === 62 ? (this.state.pos += 2, void this.finishToken(19)) : void this.finishOp(t7 === 61 ? 27 : 33, 1);
    this.finishOp(42, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
  }
  readToken_question() {
    const t7 = this.input.charCodeAt(this.state.pos + 1), e2 = this.input.charCodeAt(this.state.pos + 2);
    t7 === 63 ? e2 === 61 ? this.finishOp(28, 3) : this.finishOp(36, 2) : t7 !== 46 || e2 >= 48 && e2 <= 57 ? (++this.state.pos, this.finishToken(17)) : (this.state.pos += 2, this.finishToken(18));
  }
  getTokenFromCode(t7) {
    switch (t7) {
      case 46:
        return void this.readToken_dot();
      case 40:
        return ++this.state.pos, void this.finishToken(10);
      case 41:
        return ++this.state.pos, void this.finishToken(11);
      case 59:
        return ++this.state.pos, void this.finishToken(13);
      case 44:
        return ++this.state.pos, void this.finishToken(12);
      case 91:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, ic.TupleExpressionBarIncorrectStartSyntaxType);
          this.state.pos += 2, this.finishToken(2);
        } else
          ++this.state.pos, this.finishToken(0);
        return;
      case 93:
        return ++this.state.pos, void this.finishToken(3);
      case 123:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(this.state.pos, ic.RecordExpressionBarIncorrectStartSyntaxType);
          this.state.pos += 2, this.finishToken(6);
        } else
          ++this.state.pos, this.finishToken(5);
        return;
      case 125:
        return ++this.state.pos, void this.finishToken(8);
      case 58:
        return void (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14)));
      case 63:
        return void this.readToken_question();
      case 96:
        return ++this.state.pos, void this.finishToken(22);
      case 48: {
        const t8 = this.input.charCodeAt(this.state.pos + 1);
        if (t8 === 120 || t8 === 88)
          return void this.readRadixNumber(16);
        if (t8 === 111 || t8 === 79)
          return void this.readRadixNumber(8);
        if (t8 === 98 || t8 === 66)
          return void this.readRadixNumber(2);
      }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return void this.readNumber(false);
      case 34:
      case 39:
        return void this.readString(t7);
      case 47:
        return void this.readToken_slash();
      case 37:
      case 42:
        return void this.readToken_mult_modulo(t7);
      case 124:
      case 38:
        return void this.readToken_pipe_amp(t7);
      case 94:
        return void this.readToken_caret();
      case 43:
      case 45:
        return void this.readToken_plus_min(t7);
      case 60:
        return void this.readToken_lt();
      case 62:
        return void this.readToken_gt();
      case 61:
      case 33:
        return void this.readToken_eq_excl(t7);
      case 126:
        return void this.finishOp(34, 1);
      case 64:
        return ++this.state.pos, void this.finishToken(24);
      case 35:
        return void this.readToken_numberSign();
      case 92:
        return void this.readWord();
      default:
        if (_c(t7))
          return void this.readWord(t7);
    }
    throw this.raise(this.state.pos, ic.InvalidOrUnexpectedToken, String.fromCodePoint(t7));
  }
  finishOp(t7, e2) {
    const s2 = this.input.slice(this.state.pos, this.state.pos + e2);
    this.state.pos += e2, this.finishToken(t7, s2);
  }
  readRegexp() {
    const t7 = this.state.start + 1;
    let e2, s2, { pos: r2 } = this.state;
    for (; ; ++r2) {
      if (r2 >= this.length)
        throw this.raise(t7, ic.UnterminatedRegExp);
      const i3 = this.input.charCodeAt(r2);
      if (Xp(i3))
        throw this.raise(t7, ic.UnterminatedRegExp);
      if (e2)
        e2 = false;
      else {
        if (i3 === 91)
          s2 = true;
        else if (i3 === 93 && s2)
          s2 = false;
        else if (i3 === 47 && !s2)
          break;
        e2 = i3 === 92;
      }
    }
    const i2 = this.input.slice(t7, r2);
    ++r2;
    let n2 = "";
    for (; r2 < this.length; ) {
      const t8 = this.codePointAtPos(r2), e3 = String.fromCharCode(t8);
      if (il.has(t8))
        n2.includes(e3) && this.raise(r2 + 1, ic.DuplicateRegExpFlags);
      else {
        if (!zc(t8) && t8 !== 92)
          break;
        this.raise(r2 + 1, ic.MalformedRegExpFlags);
      }
      ++r2, n2 += e3;
    }
    this.state.pos = r2, this.finishToken(127, { pattern: i2, flags: n2 });
  }
  readInt(t7, e2, s2) {
    let r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
    const i2 = this.state.pos, n2 = t7 === 16 ? nl.hex : nl.decBinOct, a2 = t7 === 16 ? al.hex : t7 === 10 ? al.dec : t7 === 8 ? al.oct : al.bin;
    let o2 = false, u2 = 0;
    for (let i3 = 0, h2 = e2 == null ? 1 / 0 : e2; i3 < h2; ++i3) {
      const e3 = this.input.charCodeAt(this.state.pos);
      let h3;
      if (e3 !== 95) {
        if (h3 = e3 >= 97 ? e3 - 97 + 10 : e3 >= 65 ? e3 - 65 + 10 : rl(e3) ? e3 - 48 : 1 / 0, h3 >= t7)
          if (this.options.errorRecovery && h3 <= 9)
            h3 = 0, this.raise(this.state.start + i3 + 2, ic.InvalidDigit, t7);
          else {
            if (!s2)
              break;
            h3 = 0, o2 = true;
          }
        ++this.state.pos, u2 = u2 * t7 + h3;
      } else {
        const t8 = this.input.charCodeAt(this.state.pos - 1), e4 = this.input.charCodeAt(this.state.pos + 1);
        (a2.indexOf(e4) === -1 || n2.indexOf(t8) > -1 || n2.indexOf(e4) > -1 || Number.isNaN(e4)) && this.raise(this.state.pos, ic.UnexpectedNumericSeparator), r2 || this.raise(this.state.pos, ic.NumericSeparatorInEscapeSequence), ++this.state.pos;
      }
    }
    return this.state.pos === i2 || e2 != null && this.state.pos - i2 !== e2 || o2 ? null : u2;
  }
  readRadixNumber(t7) {
    const e2 = this.state.pos;
    let s2 = false;
    this.state.pos += 2;
    const r2 = this.readInt(t7);
    r2 == null && this.raise(this.state.start + 2, ic.InvalidDigit, t7);
    const i2 = this.input.charCodeAt(this.state.pos);
    if (i2 === 110)
      ++this.state.pos, s2 = true;
    else if (i2 === 109)
      throw this.raise(e2, ic.InvalidDecimal);
    if (_c(this.codePointAtPos(this.state.pos)))
      throw this.raise(this.state.pos, ic.NumberIdentifier);
    if (s2) {
      const t8 = this.input.slice(e2, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(125, t8);
    } else
      this.finishToken(124, r2);
  }
  readNumber(t7) {
    const e2 = this.state.pos;
    let s2 = false, r2 = false, i2 = false, n2 = false, a2 = false;
    t7 || this.readInt(10) !== null || this.raise(e2, ic.InvalidNumber);
    const o2 = this.state.pos - e2 >= 2 && this.input.charCodeAt(e2) === 48;
    if (o2) {
      const t8 = this.input.slice(e2, this.state.pos);
      if (this.recordStrictModeErrors(e2, ic.StrictOctalLiteral), !this.state.strict) {
        const s3 = t8.indexOf("_");
        s3 > 0 && this.raise(s3 + e2, ic.ZeroDigitNumericSeparator);
      }
      a2 = o2 && !/[89]/.test(t8);
    }
    let u2 = this.input.charCodeAt(this.state.pos);
    if (u2 !== 46 || a2 || (++this.state.pos, this.readInt(10), s2 = true, u2 = this.input.charCodeAt(this.state.pos)), u2 !== 69 && u2 !== 101 || a2 || (u2 = this.input.charCodeAt(++this.state.pos), u2 !== 43 && u2 !== 45 || ++this.state.pos, this.readInt(10) === null && this.raise(e2, ic.InvalidOrMissingExponent), s2 = true, n2 = true, u2 = this.input.charCodeAt(this.state.pos)), u2 === 110 && ((s2 || o2) && this.raise(e2, ic.InvalidBigIntLiteral), ++this.state.pos, r2 = true), u2 === 109 && (this.expectPlugin("decimal", this.state.pos), (n2 || o2) && this.raise(e2, ic.InvalidDecimal), ++this.state.pos, i2 = true), _c(this.codePointAtPos(this.state.pos)))
      throw this.raise(this.state.pos, ic.NumberIdentifier);
    const h2 = this.input.slice(e2, this.state.pos).replace(/[_mn]/g, "");
    if (r2)
      return void this.finishToken(125, h2);
    if (i2)
      return void this.finishToken(126, h2);
    const p2 = a2 ? parseInt(h2, 8) : parseFloat(h2);
    this.finishToken(124, p2);
  }
  readCodePoint(t7) {
    let e2;
    if (this.input.charCodeAt(this.state.pos) === 123) {
      const s2 = ++this.state.pos;
      if (e2 = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, t7), ++this.state.pos, e2 !== null && e2 > 1114111) {
        if (!t7)
          return null;
        this.raise(s2, ic.InvalidCodePoint);
      }
    } else
      e2 = this.readHexChar(4, false, t7);
    return e2;
  }
  readString(t7) {
    let e2 = "", s2 = ++this.state.pos;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, ic.UnterminatedString);
      const r2 = this.input.charCodeAt(this.state.pos);
      if (r2 === t7)
        break;
      if (r2 === 92)
        e2 += this.input.slice(s2, this.state.pos), e2 += this.readEscapedChar(false), s2 = this.state.pos;
      else if (r2 === 8232 || r2 === 8233)
        ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
      else {
        if (Xp(r2))
          throw this.raise(this.state.start, ic.UnterminatedString);
        ++this.state.pos;
      }
    }
    e2 += this.input.slice(s2, this.state.pos++), this.finishToken(123, e2);
  }
  readTmplToken() {
    let t7 = "", e2 = this.state.pos, s2 = false;
    for (; ; ) {
      if (this.state.pos >= this.length)
        throw this.raise(this.state.start, ic.UnterminatedTemplate);
      const r2 = this.input.charCodeAt(this.state.pos);
      if (r2 === 96 || r2 === 36 && this.input.charCodeAt(this.state.pos + 1) === 123)
        return this.state.pos === this.state.start && this.match(20) ? r2 === 36 ? (this.state.pos += 2, void this.finishToken(23)) : (++this.state.pos, void this.finishToken(22)) : (t7 += this.input.slice(e2, this.state.pos), void this.finishToken(20, s2 ? null : t7));
      if (r2 === 92) {
        t7 += this.input.slice(e2, this.state.pos);
        const r3 = this.readEscapedChar(true);
        r3 === null ? s2 = true : t7 += r3, e2 = this.state.pos;
      } else if (Xp(r2)) {
        switch (t7 += this.input.slice(e2, this.state.pos), ++this.state.pos, r2) {
          case 13:
            this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
          case 10:
            t7 += "\n";
            break;
          default:
            t7 += String.fromCharCode(r2);
        }
        ++this.state.curLine, this.state.lineStart = this.state.pos, e2 = this.state.pos;
      } else
        ++this.state.pos;
    }
  }
  recordStrictModeErrors(t7, e2) {
    this.state.strict && !this.state.strictErrors.has(t7) ? this.raise(t7, e2) : this.state.strictErrors.set(t7, e2);
  }
  readEscapedChar(t7) {
    const e2 = !t7, s2 = this.input.charCodeAt(++this.state.pos);
    switch (++this.state.pos, s2) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120: {
        const t8 = this.readHexChar(2, false, e2);
        return t8 === null ? null : String.fromCharCode(t8);
      }
      case 117: {
        const t8 = this.readCodePoint(e2);
        return t8 === null ? null : String.fromCodePoint(t8);
      }
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
      case 10:
        this.state.lineStart = this.state.pos, ++this.state.curLine;
      case 8232:
      case 8233:
        return "";
      case 56:
      case 57:
        if (t7)
          return null;
        this.recordStrictModeErrors(this.state.pos - 1, ic.StrictNumericEscape);
      default:
        if (s2 >= 48 && s2 <= 55) {
          const e3 = this.state.pos - 1;
          let s3 = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0], r2 = parseInt(s3, 8);
          r2 > 255 && (s3 = s3.slice(0, -1), r2 = parseInt(s3, 8)), this.state.pos += s3.length - 1;
          const i2 = this.input.charCodeAt(this.state.pos);
          if (s3 !== "0" || i2 === 56 || i2 === 57) {
            if (t7)
              return null;
            this.recordStrictModeErrors(e3, ic.StrictNumericEscape);
          }
          return String.fromCharCode(r2);
        }
        return String.fromCharCode(s2);
    }
  }
  readHexChar(t7, e2, s2) {
    const r2 = this.state.pos, i2 = this.readInt(16, t7, e2, false);
    return i2 === null && (s2 ? this.raise(r2, ic.InvalidEscapeSequence) : this.state.pos = r2 - 1), i2;
  }
  readWord1(t7) {
    this.state.containsEsc = false;
    let e2 = "";
    const s2 = this.state.pos;
    let r2 = this.state.pos;
    for (t7 !== void 0 && (this.state.pos += t7 <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
      const t8 = this.codePointAtPos(this.state.pos);
      if (zc(t8))
        this.state.pos += t8 <= 65535 ? 1 : 2;
      else {
        if (t8 !== 92)
          break;
        {
          this.state.containsEsc = true, e2 += this.input.slice(r2, this.state.pos);
          const t9 = this.state.pos, i2 = this.state.pos === s2 ? _c : zc;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(this.state.pos, ic.MissingUnicodeEscape), r2 = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const n2 = this.readCodePoint(true);
          n2 !== null && (i2(n2) || this.raise(t9, ic.EscapedCharNotAnIdentifier), e2 += String.fromCodePoint(n2)), r2 = this.state.pos;
        }
      }
    }
    return e2 + this.input.slice(r2, this.state.pos);
  }
  readWord(t7) {
    const e2 = this.readWord1(t7), s2 = cc.get(e2);
    s2 !== void 0 ? this.finishToken(s2, Nc(s2)) : this.finishToken(122, e2);
  }
  checkKeywordEscapes() {
    const { type: t7 } = this.state;
    Bc(t7) && this.state.containsEsc && this.raise(this.state.start, ic.InvalidEscapedReservedWord, Nc(t7));
  }
  updateContext(t7) {
    const { context: e2, type: s2 } = this.state;
    switch (s2) {
      case 8:
        e2.pop();
        break;
      case 5:
      case 7:
      case 23:
        e2.push(hc.brace);
        break;
      case 22:
        e2[e2.length - 1] === hc.template ? e2.pop() : e2.push(hc.template);
    }
  }
} {
  addExtra(t7, e2, s2) {
    if (!t7)
      return;
    (t7.extra = t7.extra || {})[e2] = s2;
  }
  isContextual(t7) {
    return this.state.type === t7 && !this.state.containsEsc;
  }
  isUnparsedContextual(t7, e2) {
    const s2 = t7 + e2.length;
    if (this.input.slice(t7, s2) === e2) {
      const t8 = this.input.charCodeAt(s2);
      return !(zc(t8) || (64512 & t8) == 55296);
    }
    return false;
  }
  isLookaheadContextual(t7) {
    const e2 = this.nextTokenStart();
    return this.isUnparsedContextual(e2, t7);
  }
  eatContextual(t7) {
    return !!this.isContextual(t7) && (this.next(), true);
  }
  expectContextual(t7, e2) {
    this.eatContextual(t7) || this.unexpected(null, e2);
  }
  canInsertSemicolon() {
    return this.match(129) || this.match(8) || this.hasPrecedingLineBreak();
  }
  hasPrecedingLineBreak() {
    return Wp.test(this.input.slice(this.state.lastTokEnd, this.state.start));
  }
  hasFollowingLineBreak() {
    return $p.lastIndex = this.state.end, $p.test(this.input);
  }
  isLineTerminator() {
    return this.eat(13) || this.canInsertSemicolon();
  }
  semicolon() {
    (!(arguments.length > 0 && arguments[0] !== void 0) || arguments[0] ? this.isLineTerminator() : this.eat(13)) || this.raise(this.state.lastTokEnd, ic.MissingSemicolon);
  }
  expect(t7, e2) {
    this.eat(t7) || this.unexpected(e2, t7);
  }
  assertNoSpace() {
    let t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Unexpected space.";
    this.state.start > this.state.lastTokEnd && this.raise(this.state.lastTokEnd, { code: rc.SyntaxError, reasonCode: "UnexpectedSpace", template: t7 });
  }
  unexpected(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { code: rc.SyntaxError, reasonCode: "UnexpectedToken", template: "Unexpected token" };
    throw typeof e2 == "number" && (e2 = { code: rc.SyntaxError, reasonCode: "UnexpectedToken", template: 'Unexpected token, expected "'.concat(Nc(e2), '"') }), this.raise(t7 != null ? t7 : this.state.start, e2);
  }
  expectPlugin(t7, e2) {
    if (!this.hasPlugin(t7))
      throw this.raiseWithData(e2 != null ? e2 : this.state.start, { missingPlugin: [t7] }, "This experimental syntax requires enabling the parser plugin: '".concat(t7, "'"));
    return true;
  }
  expectOnePlugin(t7, e2) {
    if (!t7.some((t8) => this.hasPlugin(t8)))
      throw this.raiseWithData(e2 != null ? e2 : this.state.start, { missingPlugin: t7 }, "This experimental syntax requires enabling one of the following parser plugin(s): '".concat(t7.join(", "), "'"));
  }
  tryParse(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.clone();
    const s2 = { node: null };
    try {
      const r2 = t7(function() {
        let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        throw s2.node = t8, s2;
      });
      if (this.state.errors.length > e2.errors.length) {
        const t8 = this.state;
        return this.state = e2, this.state.tokensLength = t8.tokensLength, { node: r2, error: t8.errors[e2.errors.length], thrown: false, aborted: false, failState: t8 };
      }
      return { node: r2, error: null, thrown: false, aborted: false, failState: null };
    } catch (t8) {
      const r2 = this.state;
      if (this.state = e2, t8 instanceof SyntaxError)
        return { node: null, error: t8, thrown: true, aborted: false, failState: r2 };
      if (t8 === s2)
        return { node: s2.node, error: null, thrown: false, aborted: true, failState: r2 };
      throw t8;
    }
  }
  checkExpressionErrors(t7, e2) {
    if (!t7)
      return false;
    const { shorthandAssign: s2, doubleProto: r2, optionalParameters: i2 } = t7, n2 = s2 + r2 + i2 > -3;
    if (!e2)
      return n2;
    n2 && (s2 >= 0 && this.unexpected(s2), r2 >= 0 && this.raise(r2, ic.DuplicateProto), i2 >= 0 && this.unexpected(i2));
  }
  isLiteralPropertyName() {
    return bc(this.state.type);
  }
  isPrivateName(t7) {
    return t7.type === "PrivateName";
  }
  getPrivateNameSV(t7) {
    return t7.id.name;
  }
  hasPropertyAsPrivateName(t7) {
    return (t7.type === "MemberExpression" || t7.type === "OptionalMemberExpression") && this.isPrivateName(t7.property);
  }
  isOptionalChain(t7) {
    return t7.type === "OptionalMemberExpression" || t7.type === "OptionalCallExpression";
  }
  isObjectProperty(t7) {
    return t7.type === "ObjectProperty";
  }
  isObjectMethod(t7) {
    return t7.type === "ObjectMethod";
  }
  initializeScopes() {
    let t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.sourceType === "module";
    const e2 = this.state.labels;
    this.state.labels = [];
    const s2 = this.exportedIdentifiers;
    this.exportedIdentifiers = new Set();
    const r2 = this.inModule;
    this.inModule = t7;
    const i2 = this.scope, n2 = this.getScopeHandler();
    this.scope = new n2(this.raise.bind(this), this.inModule);
    const a2 = this.prodParam;
    this.prodParam = new Dl();
    const o2 = this.classScope;
    this.classScope = new hl(this.raise.bind(this));
    const u2 = this.expressionScope;
    return this.expressionScope = new ll(this.raise.bind(this)), () => {
      this.state.labels = e2, this.exportedIdentifiers = s2, this.inModule = r2, this.scope = i2, this.prodParam = a2, this.classScope = o2, this.expressionScope = u2;
    };
  }
  enterInitialScopes() {
    let t7 = 0;
    this.inModule && (t7 |= 2), this.scope.enter(1), this.prodParam.enter(t7);
  }
} {
  startNode() {
    return new yl(this, this.state.start, this.state.startLoc);
  }
  startNodeAt(t7, e2) {
    return new yl(this, t7, e2);
  }
  startNodeAtNode(t7) {
    return this.startNodeAt(t7.start, t7.loc.start);
  }
  finishNode(t7, e2) {
    return this.finishNodeAt(t7, e2, this.state.lastTokEnd, this.state.lastTokEndLoc);
  }
  finishNodeAt(t7, e2, s2, r2) {
    return t7.type = e2, t7.end = s2, t7.loc.end = r2, this.options.ranges && (t7.range[1] = s2), this.options.attachComment && this.processComment(t7), t7;
  }
  resetStartLocation(t7, e2, s2) {
    t7.start = e2, t7.loc.start = s2, this.options.ranges && (t7.range[0] = e2);
  }
  resetEndLocation(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEnd, s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.state.lastTokEndLoc;
    t7.end = e2, t7.loc.end = s2, this.options.ranges && (t7.range[1] = e2);
  }
  resetStartLocationFromNode(t7, e2) {
    this.resetStartLocation(t7, e2.start, e2.loc.start);
  }
} {
  toAssignable(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    var s2, r2;
    let i2;
    switch ((t7.type === "ParenthesizedExpression" || (s2 = t7.extra) != null && s2.parenthesized) && (i2 = Kl(t7), e2 ? i2.type === "Identifier" ? this.expressionScope.recordParenthesizedIdentifierError(t7.start, ic.InvalidParenthesizedAssignment) : i2.type !== "MemberExpression" && this.raise(t7.start, ic.InvalidParenthesizedAssignment) : this.raise(t7.start, ic.InvalidParenthesizedAssignment)), t7.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        t7.type = "ObjectPattern";
        for (let s3 = 0, r3 = t7.properties.length, i3 = r3 - 1; s3 < r3; s3++) {
          var n2;
          const r4 = t7.properties[s3], a2 = s3 === i3;
          this.toAssignableObjectExpressionProp(r4, a2, e2), a2 && r4.type === "RestElement" && (n2 = t7.extra) != null && n2.trailingComma && this.raiseRestNotLast(t7.extra.trailingComma);
        }
        break;
      case "ObjectProperty":
        this.toAssignable(t7.value, e2);
        break;
      case "SpreadElement": {
        this.checkToRestConversion(t7), t7.type = "RestElement";
        const s3 = t7.argument;
        this.toAssignable(s3, e2);
        break;
      }
      case "ArrayExpression":
        t7.type = "ArrayPattern", this.toAssignableList(t7.elements, (r2 = t7.extra) == null ? void 0 : r2.trailingComma, e2);
        break;
      case "AssignmentExpression":
        t7.operator !== "=" && this.raise(t7.left.end, ic.MissingEqInAssignment), t7.type = "AssignmentPattern", delete t7.operator, this.toAssignable(t7.left, e2);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(i2, e2);
    }
    return t7;
  }
  toAssignableObjectExpressionProp(t7, e2, s2) {
    if (t7.type === "ObjectMethod") {
      const e3 = t7.kind === "get" || t7.kind === "set" ? ic.PatternHasAccessor : ic.PatternHasMethod;
      this.raise(t7.key.start, e3);
    } else
      t7.type !== "SpreadElement" || e2 ? this.toAssignable(t7, s2) : this.raiseRestNotLast(t7.start);
  }
  toAssignableList(t7, e2, s2) {
    let r2 = t7.length;
    if (r2) {
      const i2 = t7[r2 - 1];
      if ((i2 == null ? void 0 : i2.type) === "RestElement")
        --r2;
      else if ((i2 == null ? void 0 : i2.type) === "SpreadElement") {
        i2.type = "RestElement";
        let t8 = i2.argument;
        this.toAssignable(t8, s2), t8 = Kl(t8), t8.type !== "Identifier" && t8.type !== "MemberExpression" && t8.type !== "ArrayPattern" && t8.type !== "ObjectPattern" && this.unexpected(t8.start), e2 && this.raiseTrailingCommaAfterRest(e2), --r2;
      }
    }
    for (let e3 = 0; e3 < r2; e3++) {
      const r3 = t7[e3];
      r3 && (this.toAssignable(r3, s2), r3.type === "RestElement" && this.raiseRestNotLast(r3.start));
    }
    return t7;
  }
  isAssignable(t7, e2) {
    switch (t7.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        return true;
      case "ObjectExpression": {
        const e3 = t7.properties.length - 1;
        return t7.properties.every((t8, s2) => t8.type !== "ObjectMethod" && (s2 === e3 || t8.type !== "SpreadElement") && this.isAssignable(t8));
      }
      case "ObjectProperty":
        return this.isAssignable(t7.value);
      case "SpreadElement":
        return this.isAssignable(t7.argument);
      case "ArrayExpression":
        return t7.elements.every((t8) => t8 === null || this.isAssignable(t8));
      case "AssignmentExpression":
        return t7.operator === "=";
      case "ParenthesizedExpression":
        return this.isAssignable(t7.expression);
      case "MemberExpression":
      case "OptionalMemberExpression":
        return !e2;
      default:
        return false;
    }
  }
  toReferencedList(t7, e2) {
    return t7;
  }
  toReferencedListDeep(t7, e2) {
    this.toReferencedList(t7, e2);
    for (const e3 of t7)
      (e3 == null ? void 0 : e3.type) === "ArrayExpression" && this.toReferencedListDeep(e3.elements);
  }
  parseSpread(t7, e2) {
    const s2 = this.startNode();
    return this.next(), s2.argument = this.parseMaybeAssignAllowIn(t7, void 0, e2), this.finishNode(s2, "SpreadElement");
  }
  parseRestBinding() {
    const t7 = this.startNode();
    return this.next(), t7.argument = this.parseBindingAtom(), this.finishNode(t7, "RestElement");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 0: {
        const t7 = this.startNode();
        return this.next(), t7.elements = this.parseBindingList(3, 93, true), this.finishNode(t7, "ArrayPattern");
      }
      case 5:
        return this.parseObjectLike(8, true);
    }
    return this.parseIdentifier();
  }
  parseBindingList(t7, e2, s2, r2) {
    const i2 = [];
    let n2 = true;
    for (; !this.eat(t7); )
      if (n2 ? n2 = false : this.expect(12), s2 && this.match(12))
        i2.push(null);
      else {
        if (this.eat(t7))
          break;
        if (this.match(21)) {
          i2.push(this.parseAssignableListItemTypes(this.parseRestBinding())), this.checkCommaAfterRest(e2), this.expect(t7);
          break;
        }
        {
          const t8 = [];
          for (this.match(24) && this.hasPlugin("decorators") && this.raise(this.state.start, ic.UnsupportedParameterDecorator); this.match(24); )
            t8.push(this.parseDecorator());
          i2.push(this.parseAssignableListItem(r2, t8));
        }
      }
    return i2;
  }
  parseBindingRestProperty(t7) {
    return this.next(), t7.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t7, "RestElement");
  }
  parseBindingProperty() {
    const t7 = this.startNode(), { type: e2, start: s2, startLoc: r2 } = this.state;
    return e2 === 21 ? this.parseBindingRestProperty(t7) : (this.parsePropertyName(t7), t7.method = false, this.parseObjPropValue(t7, s2, r2, false, false, true, false), t7);
  }
  parseAssignableListItem(t7, e2) {
    const s2 = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(s2);
    const r2 = this.parseMaybeDefault(s2.start, s2.loc.start, s2);
    return e2.length && (s2.decorators = e2), r2;
  }
  parseAssignableListItemTypes(t7) {
    return t7;
  }
  parseMaybeDefault(t7, e2, s2) {
    var r2, i2, n2;
    if (e2 = (r2 = e2) != null ? r2 : this.state.startLoc, t7 = (i2 = t7) != null ? i2 : this.state.start, s2 = (n2 = s2) != null ? n2 : this.parseBindingAtom(), !this.eat(27))
      return s2;
    const a2 = this.startNodeAt(t7, e2);
    return a2.left = s2, a2.right = this.parseMaybeAssignAllowIn(), this.finishNode(a2, "AssignmentPattern");
  }
  checkLVal(t7, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 64, r2 = arguments.length > 3 ? arguments[3] : void 0, i2 = arguments.length > 4 ? arguments[4] : void 0, n2 = arguments.length > 5 && arguments[5] !== void 0 && arguments[5];
    switch (t7.type) {
      case "Identifier": {
        const { name: e3 } = t7;
        this.state.strict && (n2 ? $c(e3, this.inModule) : Jc(e3)) && this.raise(t7.start, s2 === 64 ? ic.StrictEvalArguments : ic.StrictEvalArgumentsBinding, e3), r2 && (r2.has(e3) ? this.raise(t7.start, ic.ParamDupe) : r2.add(e3)), i2 && e3 === "let" && this.raise(t7.start, ic.LetInLexicalBinding), 64 & s2 || this.scope.declareName(e3, s2, t7.start);
        break;
      }
      case "MemberExpression":
        s2 !== 64 && this.raise(t7.start, ic.InvalidPropertyBindingPattern);
        break;
      case "ObjectPattern":
        for (let e3 of t7.properties) {
          if (this.isObjectProperty(e3))
            e3 = e3.value;
          else if (this.isObjectMethod(e3))
            continue;
          this.checkLVal(e3, "object destructuring pattern", s2, r2, i2);
        }
        break;
      case "ArrayPattern":
        for (const e3 of t7.elements)
          e3 && this.checkLVal(e3, "array destructuring pattern", s2, r2, i2);
        break;
      case "AssignmentPattern":
        this.checkLVal(t7.left, "assignment pattern", s2, r2);
        break;
      case "RestElement":
        this.checkLVal(t7.argument, "rest element", s2, r2);
        break;
      case "ParenthesizedExpression":
        this.checkLVal(t7.expression, "parenthesized expression", s2, r2);
        break;
      default:
        this.raise(t7.start, s2 === 64 ? ic.InvalidLhs : ic.InvalidLhsBinding, e2);
    }
  }
  checkToRestConversion(t7) {
    t7.argument.type !== "Identifier" && t7.argument.type !== "MemberExpression" && this.raise(t7.argument.start, ic.InvalidRestAssignmentPattern);
  }
  checkCommaAfterRest(t7) {
    this.match(12) && (this.lookaheadCharCode() === t7 ? this.raiseTrailingCommaAfterRest(this.state.start) : this.raiseRestNotLast(this.state.start));
  }
  raiseRestNotLast(t7) {
    throw this.raise(t7, ic.ElementAfterRest);
  }
  raiseTrailingCommaAfterRest(t7) {
    this.raise(t7, ic.RestTrailingComma);
  }
} {
  checkProto(t7, e2, s2, r2) {
    if (t7.type === "SpreadElement" || this.isObjectMethod(t7) || t7.computed || t7.shorthand)
      return;
    const i2 = t7.key;
    if ((i2.type === "Identifier" ? i2.name : i2.value) === "__proto__") {
      if (e2)
        return void this.raise(i2.start, ic.RecordNoProto);
      s2.used && (r2 ? r2.doubleProto === -1 && (r2.doubleProto = i2.start) : this.raise(i2.start, ic.DuplicateProto)), s2.used = true;
    }
  }
  shouldExitDescending(t7, e2) {
    return t7.type === "ArrowFunctionExpression" && t7.start === e2;
  }
  getExpression() {
    this.enterInitialScopes(), this.nextToken();
    const t7 = this.parseExpression();
    return this.match(129) || this.unexpected(), this.finalizeRemainingComments(), t7.comments = this.state.comments, t7.errors = this.state.errors, this.options.tokens && (t7.tokens = this.tokens), t7;
  }
  parseExpression(t7, e2) {
    return t7 ? this.disallowInAnd(() => this.parseExpressionBase(e2)) : this.allowInAnd(() => this.parseExpressionBase(e2));
  }
  parseExpressionBase(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc, r2 = this.parseMaybeAssign(t7);
    if (this.match(12)) {
      const i2 = this.startNodeAt(e2, s2);
      for (i2.expressions = [r2]; this.eat(12); )
        i2.expressions.push(this.parseMaybeAssign(t7));
      return this.toReferencedList(i2.expressions), this.finishNode(i2, "SequenceExpression");
    }
    return r2;
  }
  parseMaybeAssignDisallowIn(t7, e2) {
    return this.disallowInAnd(() => this.parseMaybeAssign(t7, e2));
  }
  parseMaybeAssignAllowIn(t7, e2) {
    return this.allowInAnd(() => this.parseMaybeAssign(t7, e2));
  }
  setOptionalParametersError(t7, e2) {
    var s2;
    t7.optionalParameters = (s2 = e2 == null ? void 0 : e2.pos) != null ? s2 : this.state.start;
  }
  parseMaybeAssign(t7, e2) {
    const s2 = this.state.start, r2 = this.state.startLoc;
    if (this.isContextual(99) && this.prodParam.hasYield) {
      let t8 = this.parseYield();
      return e2 && (t8 = e2.call(this, t8, s2, r2)), t8;
    }
    let i2;
    t7 ? i2 = false : (t7 = new fl(), i2 = true);
    const { type: n2 } = this.state;
    (n2 === 10 || Pc(n2)) && (this.state.potentialArrowAt = this.state.start);
    let a2 = this.parseMaybeConditional(t7);
    if (e2 && (a2 = e2.call(this, a2, s2, r2)), (o2 = this.state.type) >= 27 && o2 <= 31) {
      const e3 = this.startNodeAt(s2, r2), i3 = this.state.value;
      return e3.operator = i3, this.match(27) ? (e3.left = this.toAssignable(a2, true), t7.doubleProto >= s2 && (t7.doubleProto = -1), t7.shorthandAssign >= s2 && (t7.shorthandAssign = -1)) : e3.left = a2, this.checkLVal(a2, "assignment expression"), this.next(), e3.right = this.parseMaybeAssign(), this.finishNode(e3, "AssignmentExpression");
    }
    var o2;
    return i2 && this.checkExpressionErrors(t7, true), a2;
  }
  parseMaybeConditional(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc, r2 = this.state.potentialArrowAt, i2 = this.parseExprOps(t7);
    return this.shouldExitDescending(i2, r2) ? i2 : this.parseConditional(i2, e2, s2, t7);
  }
  parseConditional(t7, e2, s2, r2) {
    if (this.eat(17)) {
      const r3 = this.startNodeAt(e2, s2);
      return r3.test = t7, r3.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), r3.alternate = this.parseMaybeAssign(), this.finishNode(r3, "ConditionalExpression");
    }
    return t7;
  }
  parseMaybeUnaryOrPrivate(t7) {
    return this.match(128) ? this.parsePrivateName() : this.parseMaybeUnary(t7);
  }
  parseExprOps(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc, r2 = this.state.potentialArrowAt, i2 = this.parseMaybeUnaryOrPrivate(t7);
    return this.shouldExitDescending(i2, r2) ? i2 : this.parseExprOp(i2, e2, s2, -1);
  }
  parseExprOp(t7, e2, s2, r2) {
    if (this.isPrivateName(t7)) {
      const e3 = this.getPrivateNameSV(t7), { start: s3 } = t7;
      (r2 >= Ic(52) || !this.prodParam.hasIn || !this.match(52)) && this.raise(s3, ic.PrivateInExpectedIn, e3), this.classScope.usePrivateName(e3, s3);
    }
    const i2 = this.state.type;
    if ((n2 = i2) >= 35 && n2 <= 53 && (this.prodParam.hasIn || !this.match(52))) {
      let n3 = Ic(i2);
      if (n3 > r2) {
        if (i2 === 35) {
          if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
            return t7;
          this.checkPipelineAtInfixOperator(t7, e2);
        }
        const a2 = this.startNodeAt(e2, s2);
        a2.left = t7, a2.operator = this.state.value;
        const o2 = i2 === 37 || i2 === 38, u2 = i2 === 36;
        if (u2 && (n3 = Ic(38)), this.next(), i2 === 35 && this.getPluginOption("pipelineOperator", "proposal") === "minimal" && this.state.type === 90 && this.prodParam.hasAwait)
          throw this.raise(this.state.start, ic.UnexpectedAwaitAfterPipelineBody);
        a2.right = this.parseExprOpRightExpr(i2, n3), this.finishNode(a2, o2 || u2 ? "LogicalExpression" : "BinaryExpression");
        const h2 = this.state.type;
        if (u2 && (h2 === 37 || h2 === 38) || o2 && h2 === 36)
          throw this.raise(this.state.start, ic.MixingCoalesceWithLogical);
        return this.parseExprOp(a2, e2, s2, r2);
      }
    }
    var n2;
    return t7;
  }
  parseExprOpRightExpr(t7, e2) {
    const s2 = this.state.start, r2 = this.state.startLoc;
    if (t7 === 35)
      switch (this.getPluginOption("pipelineOperator", "proposal")) {
        case "hack":
          return this.withTopicBindingContext(() => this.parseHackPipeBody());
        case "smart":
          return this.withTopicBindingContext(() => {
            if (this.prodParam.hasYield && this.isContextual(99))
              throw this.raise(this.state.start, ic.PipeBodyIsTighter, this.state.value);
            return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t7, e2), s2, r2);
          });
        case "fsharp":
          return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e2));
      }
    return this.parseExprOpBaseRightExpr(t7, e2);
  }
  parseExprOpBaseRightExpr(t7, e2) {
    const s2 = this.state.start, r2 = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s2, r2, t7 === 51 ? e2 - 1 : e2);
  }
  parseHackPipeBody() {
    var t7;
    const { start: e2 } = this.state, s2 = this.parseMaybeAssign();
    return !Xl.has(s2.type) || (t7 = s2.extra) != null && t7.parenthesized || this.raise(e2, ic.PipeUnparenthesizedBody, Xl.get(s2.type)), this.topicReferenceWasUsedInCurrentContext() || this.raise(e2, ic.PipeTopicUnused), s2;
  }
  checkExponentialAfterUnary(t7) {
    this.match(51) && this.raise(t7.argument.start, ic.UnexpectedTokenUnaryExponentiation);
  }
  parseMaybeUnary(t7, e2) {
    const s2 = this.state.start, r2 = this.state.startLoc, i2 = this.isContextual(90);
    if (i2 && this.isAwaitAllowed()) {
      this.next();
      const t8 = this.parseAwait(s2, r2);
      return e2 || this.checkExponentialAfterUnary(t8), t8;
    }
    const n2 = this.match(32), a2 = this.startNode();
    if (o2 = this.state.type, Cc[o2]) {
      a2.operator = this.state.value, a2.prefix = true, this.match(66) && this.expectPlugin("throwExpressions");
      const s3 = this.match(83);
      if (this.next(), a2.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(t7, true), this.state.strict && s3) {
        const t8 = a2.argument;
        t8.type === "Identifier" ? this.raise(a2.start, ic.StrictDelete) : this.hasPropertyAsPrivateName(t8) && this.raise(a2.start, ic.DeletePrivateField);
      }
      if (!n2)
        return e2 || this.checkExponentialAfterUnary(a2), this.finishNode(a2, "UnaryExpression");
    }
    var o2;
    const u2 = this.parseUpdate(a2, n2, t7);
    if (i2) {
      const { type: t8 } = this.state;
      if ((this.hasPlugin("v8intrinsic") ? Sc(t8) : Sc(t8) && !this.match(48)) && !this.isAmbiguousAwait())
        return this.raiseOverwrite(s2, ic.AwaitNotInAsyncContext), this.parseAwait(s2, r2);
    }
    return u2;
  }
  parseUpdate(t7, e2, s2) {
    if (e2)
      return this.checkLVal(t7.argument, "prefix operation"), this.finishNode(t7, "UpdateExpression");
    const r2 = this.state.start, i2 = this.state.startLoc;
    let n2 = this.parseExprSubscripts(s2);
    if (this.checkExpressionErrors(s2, false))
      return n2;
    for (; this.state.type === 32 && !this.canInsertSemicolon(); ) {
      const t8 = this.startNodeAt(r2, i2);
      t8.operator = this.state.value, t8.prefix = false, t8.argument = n2, this.checkLVal(n2, "postfix operation"), this.next(), n2 = this.finishNode(t8, "UpdateExpression");
    }
    return n2;
  }
  parseExprSubscripts(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc, r2 = this.state.potentialArrowAt, i2 = this.parseExprAtom(t7);
    return this.shouldExitDescending(i2, r2) ? i2 : this.parseSubscripts(i2, e2, s2);
  }
  parseSubscripts(t7, e2, s2, r2) {
    const i2 = { optionalChainMember: false, maybeAsyncArrow: this.atPossibleAsyncArrow(t7), stop: false };
    do {
      t7 = this.parseSubscript(t7, e2, s2, r2, i2), i2.maybeAsyncArrow = false;
    } while (!i2.stop);
    return t7;
  }
  parseSubscript(t7, e2, s2, r2, i2) {
    if (!r2 && this.eat(15))
      return this.parseBind(t7, e2, s2, r2, i2);
    if (this.match(22))
      return this.parseTaggedTemplateExpression(t7, e2, s2, i2);
    let n2 = false;
    if (this.match(18)) {
      if (r2 && this.lookaheadCharCode() === 40)
        return i2.stop = true, t7;
      i2.optionalChainMember = n2 = true, this.next();
    }
    if (!r2 && this.match(10))
      return this.parseCoverCallAndAsyncArrowHead(t7, e2, s2, i2, n2);
    {
      const r3 = this.eat(0);
      return r3 || n2 || this.eat(16) ? this.parseMember(t7, e2, s2, i2, r3, n2) : (i2.stop = true, t7);
    }
  }
  parseMember(t7, e2, s2, r2, i2, n2) {
    const a2 = this.startNodeAt(e2, s2);
    a2.object = t7, a2.computed = i2;
    const o2 = !i2 && this.match(128) && this.state.value, u2 = i2 ? this.parseExpression() : o2 ? this.parsePrivateName() : this.parseIdentifier(true);
    return o2 !== false && (a2.object.type === "Super" && this.raise(e2, ic.SuperPrivateField), this.classScope.usePrivateName(o2, u2.start)), a2.property = u2, i2 && this.expect(3), r2.optionalChainMember ? (a2.optional = n2, this.finishNode(a2, "OptionalMemberExpression")) : this.finishNode(a2, "MemberExpression");
  }
  parseBind(t7, e2, s2, r2, i2) {
    const n2 = this.startNodeAt(e2, s2);
    return n2.object = t7, n2.callee = this.parseNoCallExpr(), i2.stop = true, this.parseSubscripts(this.finishNode(n2, "BindExpression"), e2, s2, r2);
  }
  parseCoverCallAndAsyncArrowHead(t7, e2, s2, r2, i2) {
    const n2 = this.state.maybeInArrowParameters;
    let a2 = null;
    this.state.maybeInArrowParameters = true, this.next();
    let o2 = this.startNodeAt(e2, s2);
    return o2.callee = t7, r2.maybeAsyncArrow && (this.expressionScope.enter(new cl(2)), a2 = new fl()), r2.optionalChainMember && (o2.optional = i2), o2.arguments = i2 ? this.parseCallExpressionArguments(11) : this.parseCallExpressionArguments(11, t7.type === "Import", t7.type !== "Super", o2, a2), this.finishCallExpression(o2, r2.optionalChainMember), r2.maybeAsyncArrow && this.shouldParseAsyncArrow() && !i2 ? (r2.stop = true, this.expressionScope.validateAsPattern(), this.expressionScope.exit(), o2 = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e2, s2), o2)) : (r2.maybeAsyncArrow && (this.checkExpressionErrors(a2, true), this.expressionScope.exit()), this.toReferencedArguments(o2)), this.state.maybeInArrowParameters = n2, o2;
  }
  toReferencedArguments(t7, e2) {
    this.toReferencedListDeep(t7.arguments, e2);
  }
  parseTaggedTemplateExpression(t7, e2, s2, r2) {
    const i2 = this.startNodeAt(e2, s2);
    return i2.tag = t7, i2.quasi = this.parseTemplate(true), r2.optionalChainMember && this.raise(e2, ic.OptionalChainingNoTemplate), this.finishNode(i2, "TaggedTemplateExpression");
  }
  atPossibleAsyncArrow(t7) {
    return t7.type === "Identifier" && t7.name === "async" && this.state.lastTokEnd === t7.end && !this.canInsertSemicolon() && t7.end - t7.start == 5 && t7.start === this.state.potentialArrowAt;
  }
  finishCallExpression(t7, e2) {
    if (t7.callee.type === "Import")
      if (t7.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t7.arguments.length === 0 || t7.arguments.length > 2)
        this.raise(t7.start, ic.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
      else
        for (const e3 of t7.arguments)
          e3.type === "SpreadElement" && this.raise(e3.start, ic.ImportCallSpreadArgument);
    return this.finishNode(t7, e2 ? "OptionalCallExpression" : "CallExpression");
  }
  parseCallExpressionArguments(t7, e2, s2, r2, i2) {
    const n2 = [];
    let a2 = true;
    const o2 = this.state.inFSharpPipelineDirectBody;
    for (this.state.inFSharpPipelineDirectBody = false; !this.eat(t7); ) {
      if (a2)
        a2 = false;
      else if (this.expect(12), this.match(t7)) {
        !e2 || this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") || this.raise(this.state.lastTokStart, ic.ImportCallArgumentTrailingComma), r2 && this.addExtra(r2, "trailingComma", this.state.lastTokStart), this.next();
        break;
      }
      n2.push(this.parseExprListItem(false, i2, s2));
    }
    return this.state.inFSharpPipelineDirectBody = o2, n2;
  }
  shouldParseAsyncArrow() {
    return this.match(19) && !this.canInsertSemicolon();
  }
  parseAsyncArrowFromCallExpression(t7, e2) {
    var s2;
    return this.resetPreviousNodeTrailingComments(e2), this.expect(19), this.parseArrowExpression(t7, e2.arguments, true, (s2 = e2.extra) == null ? void 0 : s2.trailingComma), e2.innerComments && ec(t7, e2.innerComments), e2.callee.trailingComments && ec(t7, e2.callee.trailingComments), t7;
  }
  parseNoCallExpr() {
    const t7 = this.state.start, e2 = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), t7, e2, true);
  }
  parseExprAtom(t7) {
    let e2;
    const { type: s2 } = this.state;
    switch (s2) {
      case 73:
        return this.parseSuper();
      case 77:
        return e2 = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e2) : (this.match(10) || this.raise(this.state.lastTokStart, ic.UnsupportedImport), this.finishNode(e2, "Import"));
      case 72:
        return e2 = this.startNode(), this.next(), this.finishNode(e2, "ThisExpression");
      case 84:
        return this.parseDo(this.startNode(), false);
      case 50:
      case 29:
        return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
      case 124:
        return this.parseNumericLiteral(this.state.value);
      case 125:
        return this.parseBigIntLiteral(this.state.value);
      case 126:
        return this.parseDecimalLiteral(this.state.value);
      case 123:
        return this.parseStringLiteral(this.state.value);
      case 78:
        return this.parseNullLiteral();
      case 79:
        return this.parseBooleanLiteral(true);
      case 80:
        return this.parseBooleanLiteral(false);
      case 10: {
        const t8 = this.state.potentialArrowAt === this.state.start;
        return this.parseParenAndDistinguishExpression(t8);
      }
      case 2:
      case 1:
        return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
      case 0:
        return this.parseArrayLike(3, true, false, t7);
      case 6:
      case 7:
        return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
      case 5:
        return this.parseObjectLike(8, false, false, t7);
      case 62:
        return this.parseFunctionOrFunctionSent();
      case 24:
        this.parseDecorators();
      case 74:
        return e2 = this.startNode(), this.takeDecorators(e2), this.parseClass(e2, false);
      case 71:
        return this.parseNewOrNewTarget();
      case 22:
        return this.parseTemplate(false);
      case 15: {
        e2 = this.startNode(), this.next(), e2.object = null;
        const t8 = e2.callee = this.parseNoCallExpr();
        if (t8.type === "MemberExpression")
          return this.finishNode(e2, "BindExpression");
        throw this.raise(t8.start, ic.UnsupportedBind);
      }
      case 128:
        return this.raise(this.state.start, ic.PrivateInExpectedIn, this.state.value), this.parsePrivateName();
      case 31:
        return this.parseTopicReferenceThenEqualsSign(48, "%");
      case 30:
        return this.parseTopicReferenceThenEqualsSign(40, "^");
      case 40:
      case 48:
      case 25: {
        const t8 = this.getPluginOption("pipelineOperator", "proposal");
        if (t8)
          return this.parseTopicReference(t8);
        throw this.unexpected();
      }
      case 43: {
        const t8 = this.input.codePointAt(this.nextTokenStart());
        if (_c(t8) || t8 === 62) {
          this.expectOnePlugin(["jsx", "flow", "typescript"]);
          break;
        }
        throw this.unexpected();
      }
      default:
        if (Pc(s2)) {
          if (this.isContextual(117) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
            return this.parseModuleExpression();
          const t8 = this.state.potentialArrowAt === this.state.start, e3 = this.state.containsEsc, s3 = this.parseIdentifier();
          if (!e3 && s3.name === "async" && !this.canInsertSemicolon()) {
            const { type: t9 } = this.state;
            if (t9 === 62)
              return this.resetPreviousNodeTrailingComments(s3), this.next(), this.parseFunction(this.startNodeAtNode(s3), void 0, true);
            if (Pc(t9))
              return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(s3)) : s3;
            if (t9 === 84)
              return this.resetPreviousNodeTrailingComments(s3), this.parseDo(this.startNodeAtNode(s3), true);
          }
          return t8 && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(s3), [s3], false)) : s3;
        }
        throw this.unexpected();
    }
  }
  parseTopicReferenceThenEqualsSign(t7, e2) {
    const s2 = this.getPluginOption("pipelineOperator", "proposal");
    if (s2)
      return this.state.type = t7, this.state.value = e2, this.state.pos--, this.state.end--, this.state.endLoc.column--, this.parseTopicReference(s2);
    throw this.unexpected();
  }
  parseTopicReference(t7) {
    const e2 = this.startNode(), s2 = this.state.start, r2 = this.state.type;
    return this.next(), this.finishTopicReference(e2, s2, t7, r2);
  }
  finishTopicReference(t7, e2, s2, r2) {
    if (this.testTopicReferenceConfiguration(s2, e2, r2)) {
      let r3;
      return r3 = s2 === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference", this.topicReferenceIsAllowedInCurrentContext() || (s2 === "smart" ? this.raise(e2, ic.PrimaryTopicNotAllowed) : this.raise(e2, ic.PipeTopicUnbound)), this.registerTopicReference(), this.finishNode(t7, r3);
    }
    throw this.raise(e2, ic.PipeTopicUnconfiguredToken, Nc(r2));
  }
  testTopicReferenceConfiguration(t7, e2, s2) {
    switch (t7) {
      case "hack": {
        const t8 = this.getPluginOption("pipelineOperator", "topicToken");
        return Nc(s2) === t8;
      }
      case "smart":
        return s2 === 25;
      default:
        throw this.raise(e2, ic.PipeTopicRequiresHackPipes);
    }
  }
  parseAsyncArrowUnaryFunction(t7) {
    this.prodParam.enter(ml(true, this.prodParam.hasYield));
    const e2 = [this.parseIdentifier()];
    return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(this.state.pos, ic.LineTerminatorBeforeArrow), this.expect(19), this.parseArrowExpression(t7, e2, true), t7;
  }
  parseDo(t7, e2) {
    this.expectPlugin("doExpressions"), e2 && this.expectPlugin("asyncDoExpressions"), t7.async = e2, this.next();
    const s2 = this.state.labels;
    return this.state.labels = [], e2 ? (this.prodParam.enter(2), t7.body = this.parseBlock(), this.prodParam.exit()) : t7.body = this.parseBlock(), this.state.labels = s2, this.finishNode(t7, "DoExpression");
  }
  parseSuper() {
    const t7 = this.startNode();
    return this.next(), !this.match(10) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod ? this.scope.allowSuper || this.options.allowSuperOutsideMethod || this.raise(t7.start, ic.UnexpectedSuper) : this.raise(t7.start, ic.SuperNotAllowed), this.match(10) || this.match(0) || this.match(16) || this.raise(t7.start, ic.UnsupportedSuper), this.finishNode(t7, "Super");
  }
  parsePrivateName() {
    const t7 = this.startNode(), e2 = this.startNodeAt(this.state.start + 1, new Qp(this.state.curLine, this.state.start + 1 - this.state.lineStart)), s2 = this.state.value;
    return this.next(), t7.id = this.createIdentifier(e2, s2), this.finishNode(t7, "PrivateName");
  }
  parseFunctionOrFunctionSent() {
    const t7 = this.startNode();
    if (this.next(), this.prodParam.hasYield && this.match(16)) {
      const e2 = this.createIdentifier(this.startNodeAtNode(t7), "function");
      return this.next(), this.match(96) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t7, e2, "sent");
    }
    return this.parseFunction(t7);
  }
  parseMetaProperty(t7, e2, s2) {
    t7.meta = e2;
    const r2 = this.state.containsEsc;
    return t7.property = this.parseIdentifier(true), (t7.property.name !== s2 || r2) && this.raise(t7.property.start, ic.UnsupportedMetaProperty, e2.name, s2), this.finishNode(t7, "MetaProperty");
  }
  parseImportMetaProperty(t7) {
    const e2 = this.createIdentifier(this.startNodeAtNode(t7), "import");
    return this.next(), this.isContextual(94) && (this.inModule || this.raise(e2.start, nc.ImportMetaOutsideModule), this.sawUnambiguousESM = true), this.parseMetaProperty(t7, e2, "meta");
  }
  parseLiteralAtNode(t7, e2, s2) {
    return this.addExtra(s2, "rawValue", t7), this.addExtra(s2, "raw", this.input.slice(s2.start, this.state.end)), s2.value = t7, this.next(), this.finishNode(s2, e2);
  }
  parseLiteral(t7, e2) {
    const s2 = this.startNode();
    return this.parseLiteralAtNode(t7, e2, s2);
  }
  parseStringLiteral(t7) {
    return this.parseLiteral(t7, "StringLiteral");
  }
  parseNumericLiteral(t7) {
    return this.parseLiteral(t7, "NumericLiteral");
  }
  parseBigIntLiteral(t7) {
    return this.parseLiteral(t7, "BigIntLiteral");
  }
  parseDecimalLiteral(t7) {
    return this.parseLiteral(t7, "DecimalLiteral");
  }
  parseRegExpLiteral(t7) {
    const e2 = this.parseLiteral(t7.value, "RegExpLiteral");
    return e2.pattern = t7.pattern, e2.flags = t7.flags, e2;
  }
  parseBooleanLiteral(t7) {
    const e2 = this.startNode();
    return e2.value = t7, this.next(), this.finishNode(e2, "BooleanLiteral");
  }
  parseNullLiteral() {
    const t7 = this.startNode();
    return this.next(), this.finishNode(t7, "NullLiteral");
  }
  parseParenAndDistinguishExpression(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc;
    let r2;
    this.next(), this.expressionScope.enter(new cl(1));
    const i2 = this.state.maybeInArrowParameters, n2 = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
    const a2 = this.state.start, o2 = this.state.startLoc, u2 = [], h2 = new fl();
    let p2, c2, l2 = true;
    for (; !this.match(11); ) {
      if (l2)
        l2 = false;
      else if (this.expect(12, h2.optionalParameters === -1 ? null : h2.optionalParameters), this.match(11)) {
        c2 = this.state.start;
        break;
      }
      if (this.match(21)) {
        const t8 = this.state.start, e3 = this.state.startLoc;
        p2 = this.state.start, u2.push(this.parseParenItem(this.parseRestBinding(), t8, e3)), this.checkCommaAfterRest(41);
        break;
      }
      u2.push(this.parseMaybeAssignAllowIn(h2, this.parseParenItem));
    }
    const d2 = this.state.lastTokEnd, D2 = this.state.lastTokEndLoc;
    this.expect(11), this.state.maybeInArrowParameters = i2, this.state.inFSharpPipelineDirectBody = n2;
    let m2 = this.startNodeAt(e2, s2);
    if (t7 && this.shouldParseArrow(u2) && (m2 = this.parseArrow(m2)))
      return this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(m2, u2, false), m2;
    if (this.expressionScope.exit(), u2.length || this.unexpected(this.state.lastTokStart), c2 && this.unexpected(c2), p2 && this.unexpected(p2), this.checkExpressionErrors(h2, true), this.toReferencedListDeep(u2, true), u2.length > 1 ? (r2 = this.startNodeAt(a2, o2), r2.expressions = u2, this.finishNode(r2, "SequenceExpression"), this.resetEndLocation(r2, d2, D2)) : r2 = u2[0], !this.options.createParenthesizedExpressions)
      return this.addExtra(r2, "parenthesized", true), this.addExtra(r2, "parenStart", e2), this.takeSurroundingComments(r2, e2, this.state.lastTokEnd), r2;
    const f2 = this.startNodeAt(e2, s2);
    return f2.expression = r2, this.finishNode(f2, "ParenthesizedExpression"), f2;
  }
  shouldParseArrow(t7) {
    return !this.canInsertSemicolon();
  }
  parseArrow(t7) {
    if (this.eat(19))
      return t7;
  }
  parseParenItem(t7, e2, s2) {
    return t7;
  }
  parseNewOrNewTarget() {
    const t7 = this.startNode();
    if (this.next(), this.match(16)) {
      const e2 = this.createIdentifier(this.startNodeAtNode(t7), "new");
      this.next();
      const s2 = this.parseMetaProperty(t7, e2, "target");
      return this.scope.inNonArrowFunction || this.scope.inClass || this.raise(s2.start, ic.UnexpectedNewTarget), s2;
    }
    return this.parseNew(t7);
  }
  parseNew(t7) {
    return t7.callee = this.parseNoCallExpr(), t7.callee.type === "Import" ? this.raise(t7.callee.start, ic.ImportCallNotNewExpression) : this.isOptionalChain(t7.callee) ? this.raise(this.state.lastTokEnd, ic.OptionalChainingNoNew) : this.eat(18) && this.raise(this.state.start, ic.OptionalChainingNoNew), this.parseNewArguments(t7), this.finishNode(t7, "NewExpression");
  }
  parseNewArguments(t7) {
    if (this.eat(10)) {
      const e2 = this.parseExprList(11);
      this.toReferencedList(e2), t7.arguments = e2;
    } else
      t7.arguments = [];
  }
  parseTemplateElement(t7) {
    const e2 = this.startNode();
    return this.state.value === null && (t7 || this.raise(this.state.start + 1, ic.InvalidEscapeSequenceTemplate)), e2.value = { raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"), cooked: this.state.value }, this.next(), e2.tail = this.match(22), this.finishNode(e2, "TemplateElement");
  }
  parseTemplate(t7) {
    const e2 = this.startNode();
    this.next(), e2.expressions = [];
    let s2 = this.parseTemplateElement(t7);
    for (e2.quasis = [s2]; !s2.tail; )
      this.expect(23), e2.expressions.push(this.parseTemplateSubstitution()), this.expect(8), e2.quasis.push(s2 = this.parseTemplateElement(t7));
    return this.next(), this.finishNode(e2, "TemplateLiteral");
  }
  parseTemplateSubstitution() {
    return this.parseExpression();
  }
  parseObjectLike(t7, e2, s2, r2) {
    s2 && this.expectPlugin("recordAndTuple");
    const i2 = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const n2 = Object.create(null);
    let a2 = true;
    const o2 = this.startNode();
    for (o2.properties = [], this.next(); !this.match(t7); ) {
      if (a2)
        a2 = false;
      else if (this.expect(12), this.match(t7)) {
        this.addExtra(o2, "trailingComma", this.state.lastTokStart);
        break;
      }
      let i3;
      e2 ? i3 = this.parseBindingProperty() : (i3 = this.parsePropertyDefinition(r2), this.checkProto(i3, s2, n2, r2)), s2 && !this.isObjectProperty(i3) && i3.type !== "SpreadElement" && this.raise(i3.start, ic.InvalidRecordProperty), i3.shorthand && this.addExtra(i3, "shorthand", true), o2.properties.push(i3);
    }
    this.next(), this.state.inFSharpPipelineDirectBody = i2;
    let u2 = "ObjectExpression";
    return e2 ? u2 = "ObjectPattern" : s2 && (u2 = "RecordExpression"), this.finishNode(o2, u2);
  }
  maybeAsyncOrAccessorProp(t7) {
    return !t7.computed && t7.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(49));
  }
  parsePropertyDefinition(t7) {
    let e2 = [];
    if (this.match(24))
      for (this.hasPlugin("decorators") && this.raise(this.state.start, ic.UnsupportedPropertyDecorator); this.match(24); )
        e2.push(this.parseDecorator());
    const s2 = this.startNode();
    let r2, i2, n2 = false, a2 = false;
    if (this.match(21))
      return e2.length && this.unexpected(), this.parseSpread();
    e2.length && (s2.decorators = e2, e2 = []), s2.method = false, t7 && (r2 = this.state.start, i2 = this.state.startLoc);
    let o2 = this.eat(49);
    this.parsePropertyNamePrefixOperator(s2);
    const u2 = this.state.containsEsc, h2 = this.parsePropertyName(s2);
    if (!o2 && !u2 && this.maybeAsyncOrAccessorProp(s2)) {
      const t8 = h2.name;
      t8 !== "async" || this.hasPrecedingLineBreak() || (n2 = true, this.resetPreviousNodeTrailingComments(h2), o2 = this.eat(49), this.parsePropertyName(s2)), t8 !== "get" && t8 !== "set" || (a2 = true, this.resetPreviousNodeTrailingComments(h2), s2.kind = t8, this.match(49) && (o2 = true, this.raise(this.state.pos, ic.AccessorIsGenerator, t8), this.next()), this.parsePropertyName(s2));
    }
    return this.parseObjPropValue(s2, r2, i2, o2, n2, false, a2, t7), s2;
  }
  getGetterSetterExpectedParamCount(t7) {
    return t7.kind === "get" ? 0 : 1;
  }
  getObjectOrClassMethodParams(t7) {
    return t7.params;
  }
  checkGetterSetterParams(t7) {
    var e2;
    const s2 = this.getGetterSetterExpectedParamCount(t7), r2 = this.getObjectOrClassMethodParams(t7), i2 = t7.start;
    r2.length !== s2 && (t7.kind === "get" ? this.raise(i2, ic.BadGetterArity) : this.raise(i2, ic.BadSetterArity)), t7.kind === "set" && ((e2 = r2[r2.length - 1]) == null ? void 0 : e2.type) === "RestElement" && this.raise(i2, ic.BadSetterRestParameter);
  }
  parseObjectMethod(t7, e2, s2, r2, i2) {
    return i2 ? (this.parseMethod(t7, e2, false, false, false, "ObjectMethod"), this.checkGetterSetterParams(t7), t7) : s2 || e2 || this.match(10) ? (r2 && this.unexpected(), t7.kind = "method", t7.method = true, this.parseMethod(t7, e2, s2, false, false, "ObjectMethod")) : void 0;
  }
  parseObjectProperty(t7, e2, s2, r2, i2) {
    return t7.shorthand = false, this.eat(14) ? (t7.value = r2 ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(i2), this.finishNode(t7, "ObjectProperty")) : t7.computed || t7.key.type !== "Identifier" ? void 0 : (this.checkReservedWord(t7.key.name, t7.key.start, true, false), r2 ? t7.value = this.parseMaybeDefault(e2, s2, Al(t7.key)) : this.match(27) && i2 ? (i2.shorthandAssign === -1 && (i2.shorthandAssign = this.state.start), t7.value = this.parseMaybeDefault(e2, s2, Al(t7.key))) : t7.value = Al(t7.key), t7.shorthand = true, this.finishNode(t7, "ObjectProperty"));
  }
  parseObjPropValue(t7, e2, s2, r2, i2, n2, a2, o2) {
    const u2 = this.parseObjectMethod(t7, r2, i2, n2, a2) || this.parseObjectProperty(t7, e2, s2, n2, o2);
    return u2 || this.unexpected(), u2;
  }
  parsePropertyName(t7) {
    if (this.eat(0))
      t7.computed = true, t7.key = this.parseMaybeAssignAllowIn(), this.expect(3);
    else {
      const { type: e2, value: s2 } = this.state;
      let r2;
      if (Tc(e2))
        r2 = this.parseIdentifier(true);
      else
        switch (e2) {
          case 124:
            r2 = this.parseNumericLiteral(s2);
            break;
          case 123:
            r2 = this.parseStringLiteral(s2);
            break;
          case 125:
            r2 = this.parseBigIntLiteral(s2);
            break;
          case 126:
            r2 = this.parseDecimalLiteral(s2);
            break;
          case 128: {
            const t8 = this.state.start + 1;
            this.raise(t8, ic.UnexpectedPrivateField), r2 = this.parsePrivateName();
            break;
          }
          default:
            throw this.unexpected();
        }
      t7.key = r2, e2 !== 128 && (t7.computed = false);
    }
    return t7.key;
  }
  initFunction(t7, e2) {
    t7.id = null, t7.generator = false, t7.async = !!e2;
  }
  parseMethod(t7, e2, s2, r2, i2, n2) {
    let a2 = arguments.length > 6 && arguments[6] !== void 0 && arguments[6];
    this.initFunction(t7, s2), t7.generator = !!e2;
    const o2 = r2;
    return this.scope.enter(18 | (a2 ? 64 : 0) | (i2 ? 32 : 0)), this.prodParam.enter(ml(s2, t7.generator)), this.parseFunctionParams(t7, o2), this.parseFunctionBodyAndFinish(t7, n2, true), this.prodParam.exit(), this.scope.exit(), t7;
  }
  parseArrayLike(t7, e2, s2, r2) {
    s2 && this.expectPlugin("recordAndTuple");
    const i2 = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const n2 = this.startNode();
    return this.next(), n2.elements = this.parseExprList(t7, !s2, r2, n2), this.state.inFSharpPipelineDirectBody = i2, this.finishNode(n2, s2 ? "TupleExpression" : "ArrayExpression");
  }
  parseArrowExpression(t7, e2, s2, r2) {
    this.scope.enter(6);
    let i2 = ml(s2, false);
    !this.match(0) && this.prodParam.hasIn && (i2 |= 8), this.prodParam.enter(i2), this.initFunction(t7, s2);
    const n2 = this.state.maybeInArrowParameters;
    return e2 && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(t7, e2, r2)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(t7, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n2, this.finishNode(t7, "ArrowFunctionExpression");
  }
  setArrowFunctionParameters(t7, e2, s2) {
    t7.params = this.toAssignableList(e2, s2, false);
  }
  parseFunctionBodyAndFinish(t7, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    this.parseFunctionBody(t7, false, s2), this.finishNode(t7, e2);
  }
  parseFunctionBody(t7, e2) {
    let s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const r2 = e2 && !this.match(5);
    if (this.expressionScope.enter(dl()), r2)
      t7.body = this.parseMaybeAssign(), this.checkParams(t7, false, e2, false);
    else {
      const r3 = this.state.strict, i2 = this.state.labels;
      this.state.labels = [], this.prodParam.enter(4 | this.prodParam.currentFlags()), t7.body = this.parseBlock(true, false, (i3) => {
        const n2 = !this.isSimpleParamList(t7.params);
        if (i3 && n2) {
          const e3 = t7.kind !== "method" && t7.kind !== "constructor" || !t7.key ? t7.start : t7.key.end;
          this.raise(e3, ic.IllegalLanguageModeDirective);
        }
        const a2 = !r3 && this.state.strict;
        this.checkParams(t7, !(this.state.strict || e2 || s2 || n2), e2, a2), this.state.strict && t7.id && this.checkLVal(t7.id, "function name", 65, void 0, void 0, a2);
      }), this.prodParam.exit(), this.state.labels = i2;
    }
    this.expressionScope.exit();
  }
  isSimpleParamList(t7) {
    for (let e2 = 0, s2 = t7.length; e2 < s2; e2++)
      if (t7[e2].type !== "Identifier")
        return false;
    return true;
  }
  checkParams(t7, e2, s2) {
    let r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
    const i2 = new Set();
    for (const s3 of t7.params)
      this.checkLVal(s3, "function parameter list", 5, e2 ? null : i2, void 0, r2);
  }
  parseExprList(t7, e2, s2, r2) {
    const i2 = [];
    let n2 = true;
    for (; !this.eat(t7); ) {
      if (n2)
        n2 = false;
      else if (this.expect(12), this.match(t7)) {
        r2 && this.addExtra(r2, "trailingComma", this.state.lastTokStart), this.next();
        break;
      }
      i2.push(this.parseExprListItem(e2, s2));
    }
    return i2;
  }
  parseExprListItem(t7, e2, s2) {
    let r2;
    if (this.match(12))
      t7 || this.raise(this.state.pos, ic.UnexpectedToken, ","), r2 = null;
    else if (this.match(21)) {
      const t8 = this.state.start, s3 = this.state.startLoc;
      r2 = this.parseParenItem(this.parseSpread(e2), t8, s3);
    } else if (this.match(17)) {
      this.expectPlugin("partialApplication"), s2 || this.raise(this.state.start, ic.UnexpectedArgumentPlaceholder);
      const t8 = this.startNode();
      this.next(), r2 = this.finishNode(t8, "ArgumentPlaceholder");
    } else
      r2 = this.parseMaybeAssignAllowIn(e2, this.parseParenItem);
    return r2;
  }
  parseIdentifier(t7) {
    const e2 = this.startNode(), s2 = this.parseIdentifierName(e2.start, t7);
    return this.createIdentifier(e2, s2);
  }
  createIdentifier(t7, e2) {
    return t7.name = e2, t7.loc.identifierName = e2, this.finishNode(t7, "Identifier");
  }
  parseIdentifierName(t7, e2) {
    let s2;
    const { start: r2, type: i2 } = this.state;
    if (!Tc(i2))
      throw this.unexpected();
    s2 = this.state.value;
    const n2 = i2 <= 86;
    return e2 ? n2 && this.replaceToken(122) : this.checkReservedWord(s2, r2, n2, false), this.next(), s2;
  }
  checkReservedWord(t7, e2, s2, r2) {
    if (t7.length > 10)
      return;
    if (!function(t8) {
      return Yc.has(t8);
    }(t7))
      return;
    if (t7 === "yield") {
      if (this.prodParam.hasYield)
        return void this.raise(e2, ic.YieldBindingIdentifier);
    } else if (t7 === "await") {
      if (this.prodParam.hasAwait)
        return void this.raise(e2, ic.AwaitBindingIdentifier);
      if (this.scope.inStaticBlock)
        return void this.raise(e2, ic.AwaitBindingIdentifierInStaticBlock);
      this.expressionScope.recordAsyncArrowParametersError(e2, ic.AwaitBindingIdentifier);
    } else if (t7 === "arguments" && this.scope.inClassAndNotInNonArrowFunction)
      return void this.raise(e2, ic.ArgumentsInClass);
    if (s2 && function(t8) {
      return qc.has(t8);
    }(t7))
      return void this.raise(e2, ic.UnexpectedKeyword, t7);
    (this.state.strict ? r2 ? $c : Xc : Kc)(t7, this.inModule) && this.raise(e2, ic.UnexpectedReservedWord, t7);
  }
  isAwaitAllowed() {
    return !!this.prodParam.hasAwait || !(!this.options.allowAwaitOutsideFunction || this.scope.inFunction);
  }
  parseAwait(t7, e2) {
    const s2 = this.startNodeAt(t7, e2);
    return this.expressionScope.recordParameterInitializerError(s2.start, ic.AwaitExpressionFormalParameter), this.eat(49) && this.raise(s2.start, ic.ObsoleteAwaitStar), this.scope.inFunction || this.options.allowAwaitOutsideFunction || (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (s2.argument = this.parseMaybeUnary(null, true)), this.finishNode(s2, "AwaitExpression");
  }
  isAmbiguousAwait() {
    return this.hasPrecedingLineBreak() || this.match(47) || this.match(10) || this.match(0) || this.match(22) || this.match(127) || this.match(50) || this.hasPlugin("v8intrinsic") && this.match(48);
  }
  parseYield() {
    const t7 = this.startNode();
    this.expressionScope.recordParameterInitializerError(t7.start, ic.YieldInParameter), this.next();
    let e2 = false, s2 = null;
    if (!this.hasPrecedingLineBreak())
      switch (e2 = this.eat(49), this.state.type) {
        case 13:
        case 129:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!e2)
            break;
        default:
          s2 = this.parseMaybeAssign();
      }
    return t7.delegate = e2, t7.argument = s2, this.finishNode(t7, "YieldExpression");
  }
  checkPipelineAtInfixOperator(t7, e2) {
    this.getPluginOption("pipelineOperator", "proposal") === "smart" && t7.type === "SequenceExpression" && this.raise(e2, ic.PipelineHeadSequenceExpression);
  }
  checkHackPipeBodyEarlyErrors(t7) {
    this.topicReferenceWasUsedInCurrentContext() || this.raise(t7, ic.PipeTopicUnused);
  }
  parseSmartPipelineBodyInStyle(t7, e2, s2) {
    const r2 = this.startNodeAt(e2, s2);
    return this.isSimpleReference(t7) ? (r2.callee = t7, this.finishNode(r2, "PipelineBareFunction")) : (this.checkSmartPipeTopicBodyEarlyErrors(e2), r2.expression = t7, this.finishNode(r2, "PipelineTopicExpression"));
  }
  isSimpleReference(t7) {
    switch (t7.type) {
      case "MemberExpression":
        return !t7.computed && this.isSimpleReference(t7.object);
      case "Identifier":
        return true;
      default:
        return false;
    }
  }
  checkSmartPipeTopicBodyEarlyErrors(t7) {
    if (this.match(19))
      throw this.raise(this.state.start, ic.PipelineBodyNoArrow);
    this.topicReferenceWasUsedInCurrentContext() || this.raise(t7, ic.PipelineTopicUnused);
  }
  withTopicBindingContext(t7) {
    const e2 = this.state.topicContext;
    this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
    try {
      return t7();
    } finally {
      this.state.topicContext = e2;
    }
  }
  withSmartMixTopicForbiddingContext(t7) {
    if (this.getPluginOption("pipelineOperator", "proposal") !== "smart")
      return t7();
    {
      const e2 = this.state.topicContext;
      this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
      try {
        return t7();
      } finally {
        this.state.topicContext = e2;
      }
    }
  }
  withSoloAwaitPermittingContext(t7) {
    const e2 = this.state.soloAwait;
    this.state.soloAwait = true;
    try {
      return t7();
    } finally {
      this.state.soloAwait = e2;
    }
  }
  allowInAnd(t7) {
    const e2 = this.prodParam.currentFlags();
    if (8 & ~e2) {
      this.prodParam.enter(8 | e2);
      try {
        return t7();
      } finally {
        this.prodParam.exit();
      }
    }
    return t7();
  }
  disallowInAnd(t7) {
    const e2 = this.prodParam.currentFlags();
    if (8 & e2) {
      this.prodParam.enter(-9 & e2);
      try {
        return t7();
      } finally {
        this.prodParam.exit();
      }
    }
    return t7();
  }
  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }
  topicReferenceIsAllowedInCurrentContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }
  topicReferenceWasUsedInCurrentContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }
  parseFSharpPipelineBody(t7) {
    const e2 = this.state.start, s2 = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const r2 = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const i2 = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e2, s2, t7);
    return this.state.inFSharpPipelineDirectBody = r2, i2;
  }
  parseModuleExpression() {
    this.expectPlugin("moduleBlocks");
    const t7 = this.startNode();
    this.next(), this.eat(5);
    const e2 = this.initializeScopes(true);
    this.enterInitialScopes();
    const s2 = this.startNode();
    try {
      t7.body = this.parseProgram(s2, 8, "module");
    } finally {
      e2();
    }
    return this.eat(8), this.finishNode(t7, "ModuleExpression");
  }
  parsePropertyNamePrefixOperator(t7) {
  }
} {
  parseTopLevel(t7, e2) {
    return t7.program = this.parseProgram(e2), t7.comments = this.state.comments, this.options.tokens && (t7.tokens = function(t8) {
      for (let e3 = 0; e3 < t8.length; e3++) {
        const s2 = t8[e3], { type: r2 } = s2;
        if (r2 !== 128)
          typeof r2 == "number" && (s2.type = vc(r2));
        else {
          const { loc: r3, start: i2, value: n2, end: a2 } = s2, o2 = i2 + 1, u2 = new Qp(r3.start.line, r3.start.column + 1);
          t8.splice(e3, 1, new ol({ type: vc(25), value: "#", start: i2, end: o2, startLoc: r3.start, endLoc: u2 }), new ol({ type: vc(122), value: n2, start: o2, end: a2, startLoc: u2, endLoc: r3.end })), e3++;
        }
      }
      return t8;
    }(this.tokens)), this.finishNode(t7, "File");
  }
  parseProgram(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 129, s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options.sourceType;
    if (t7.sourceType = s2, t7.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t7, true, true, e2), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
      for (const [t8] of Array.from(this.scope.undefinedExports)) {
        const e3 = this.scope.undefinedExports.get(t8);
        this.raise(e3, ic.ModuleExportUndefined, t8);
      }
    return this.finishNode(t7, "Program");
  }
  stmtToDirective(t7) {
    const e2 = t7;
    e2.type = "Directive", e2.value = e2.expression, delete e2.expression;
    const s2 = e2.value, r2 = s2.value, i2 = this.input.slice(s2.start, s2.end), n2 = s2.value = i2.slice(1, -1);
    return this.addExtra(s2, "raw", i2), this.addExtra(s2, "rawValue", n2), this.addExtra(s2, "expressionValue", r2), s2.type = "DirectiveLiteral", e2;
  }
  parseInterpreterDirective() {
    if (!this.match(26))
      return null;
    const t7 = this.startNode();
    return t7.value = this.state.value, this.next(), this.finishNode(t7, "InterpreterDirective");
  }
  isLet(t7) {
    return !!this.isContextual(93) && this.isLetKeyword(t7);
  }
  isLetKeyword(t7) {
    const e2 = this.nextTokenStart(), s2 = this.codePointAtPos(e2);
    if (s2 === 92 || s2 === 91)
      return true;
    if (t7)
      return false;
    if (s2 === 123)
      return true;
    if (_c(s2)) {
      if (Ql.lastIndex = e2, Ql.test(this.input)) {
        const t8 = this.codePointAtPos(Ql.lastIndex);
        if (!zc(t8) && t8 !== 92)
          return false;
      }
      return true;
    }
    return false;
  }
  parseStatement(t7, e2) {
    return this.match(24) && this.parseDecorators(true), this.parseStatementContent(t7, e2);
  }
  parseStatementContent(t7, e2) {
    let s2 = this.state.type;
    const r2 = this.startNode();
    let i2;
    switch (this.isLet(t7) && (s2 = 68, i2 = "let"), s2) {
      case 54:
        return this.parseBreakContinueStatement(r2, true);
      case 57:
        return this.parseBreakContinueStatement(r2, false);
      case 58:
        return this.parseDebuggerStatement(r2);
      case 84:
        return this.parseDoStatement(r2);
      case 85:
        return this.parseForStatement(r2);
      case 62:
        if (this.lookaheadCharCode() === 46)
          break;
        return t7 && (this.state.strict ? this.raise(this.state.start, ic.StrictFunction) : t7 !== "if" && t7 !== "label" && this.raise(this.state.start, ic.SloppyFunction)), this.parseFunctionStatement(r2, false, !t7);
      case 74:
        return t7 && this.unexpected(), this.parseClass(r2, true);
      case 63:
        return this.parseIfStatement(r2);
      case 64:
        return this.parseReturnStatement(r2);
      case 65:
        return this.parseSwitchStatement(r2);
      case 66:
        return this.parseThrowStatement(r2);
      case 67:
        return this.parseTryStatement(r2);
      case 69:
      case 68:
        return i2 = i2 || this.state.value, t7 && i2 !== "var" && this.raise(this.state.start, ic.UnexpectedLexicalDeclaration), this.parseVarStatement(r2, i2);
      case 86:
        return this.parseWhileStatement(r2);
      case 70:
        return this.parseWithStatement(r2);
      case 5:
        return this.parseBlock();
      case 13:
        return this.parseEmptyStatement(r2);
      case 77: {
        const t8 = this.lookaheadCharCode();
        if (t8 === 40 || t8 === 46)
          break;
      }
      case 76: {
        let t8;
        return this.options.allowImportExportEverywhere || e2 || this.raise(this.state.start, ic.UnexpectedImportExport), this.next(), s2 === 77 ? (t8 = this.parseImport(r2), t8.type !== "ImportDeclaration" || t8.importKind && t8.importKind !== "value" || (this.sawUnambiguousESM = true)) : (t8 = this.parseExport(r2), (t8.type !== "ExportNamedDeclaration" || t8.exportKind && t8.exportKind !== "value") && (t8.type !== "ExportAllDeclaration" || t8.exportKind && t8.exportKind !== "value") && t8.type !== "ExportDefaultDeclaration" || (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(r2), t8;
      }
      default:
        if (this.isAsyncFunction())
          return t7 && this.raise(this.state.start, ic.AsyncFunctionInSingleStatementContext), this.next(), this.parseFunctionStatement(r2, true, !t7);
    }
    const n2 = this.state.value, a2 = this.parseExpression();
    return Pc(s2) && a2.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(r2, n2, a2, t7) : this.parseExpressionStatement(r2, a2);
  }
  assertModuleNodeAllowed(t7) {
    this.options.allowImportExportEverywhere || this.inModule || this.raise(t7.start, nc.ImportOutsideModule);
  }
  takeDecorators(t7) {
    const e2 = this.state.decoratorStack[this.state.decoratorStack.length - 1];
    e2.length && (t7.decorators = e2, this.resetStartLocationFromNode(t7, e2[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
  }
  canHaveLeadingDecorator() {
    return this.match(74);
  }
  parseDecorators(t7) {
    const e2 = this.state.decoratorStack[this.state.decoratorStack.length - 1];
    for (; this.match(24); ) {
      const t8 = this.parseDecorator();
      e2.push(t8);
    }
    if (this.match(76))
      t7 || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, ic.DecoratorExportClass);
    else if (!this.canHaveLeadingDecorator())
      throw this.raise(this.state.start, ic.UnexpectedLeadingDecorator);
  }
  parseDecorator() {
    this.expectOnePlugin(["decorators-legacy", "decorators"]);
    const t7 = this.startNode();
    if (this.next(), this.hasPlugin("decorators")) {
      this.state.decoratorStack.push([]);
      const e2 = this.state.start, s2 = this.state.startLoc;
      let r2;
      if (this.eat(10))
        r2 = this.parseExpression(), this.expect(11);
      else
        for (r2 = this.parseIdentifier(false); this.eat(16); ) {
          const t8 = this.startNodeAt(e2, s2);
          t8.object = r2, t8.property = this.parseIdentifier(true), t8.computed = false, r2 = this.finishNode(t8, "MemberExpression");
        }
      t7.expression = this.parseMaybeDecoratorArguments(r2), this.state.decoratorStack.pop();
    } else
      t7.expression = this.parseExprSubscripts();
    return this.finishNode(t7, "Decorator");
  }
  parseMaybeDecoratorArguments(t7) {
    if (this.eat(10)) {
      const e2 = this.startNodeAtNode(t7);
      return e2.callee = t7, e2.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(e2.arguments), this.finishNode(e2, "CallExpression");
    }
    return t7;
  }
  parseBreakContinueStatement(t7, e2) {
    return this.next(), this.isLineTerminator() ? t7.label = null : (t7.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t7, e2), this.finishNode(t7, e2 ? "BreakStatement" : "ContinueStatement");
  }
  verifyBreakContinue(t7, e2) {
    let s2;
    for (s2 = 0; s2 < this.state.labels.length; ++s2) {
      const r2 = this.state.labels[s2];
      if (t7.label == null || r2.name === t7.label.name) {
        if (r2.kind != null && (e2 || r2.kind === "loop"))
          break;
        if (t7.label && e2)
          break;
      }
    }
    s2 === this.state.labels.length && this.raise(t7.start, ic.IllegalBreakContinue, e2 ? "break" : "continue");
  }
  parseDebuggerStatement(t7) {
    return this.next(), this.semicolon(), this.finishNode(t7, "DebuggerStatement");
  }
  parseHeaderExpression() {
    this.expect(10);
    const t7 = this.parseExpression();
    return this.expect(11), t7;
  }
  parseDoStatement(t7) {
    return this.next(), this.state.labels.push(Jl), t7.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(86), t7.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t7, "DoWhileStatement");
  }
  parseForStatement(t7) {
    this.next(), this.state.labels.push(Jl);
    let e2 = -1;
    if (this.isAwaitAllowed() && this.eatContextual(90) && (e2 = this.state.lastTokStart), this.scope.enter(0), this.expect(10), this.match(13))
      return e2 > -1 && this.unexpected(e2), this.parseFor(t7, null);
    const s2 = this.isContextual(93), r2 = s2 && this.isLetKeyword();
    if (this.match(68) || this.match(69) || r2) {
      const s3 = this.startNode(), i3 = r2 ? "let" : this.state.value;
      return this.next(), this.parseVar(s3, true, i3), this.finishNode(s3, "VariableDeclaration"), (this.match(52) || this.isContextual(95)) && s3.declarations.length === 1 ? this.parseForIn(t7, s3, e2) : (e2 > -1 && this.unexpected(e2), this.parseFor(t7, s3));
    }
    const i2 = this.isContextual(89), n2 = new fl(), a2 = this.parseExpression(true, n2), o2 = this.isContextual(95);
    if (o2 && (s2 ? this.raise(a2.start, ic.ForOfLet) : e2 === -1 && i2 && a2.type === "Identifier" && this.raise(a2.start, ic.ForOfAsync)), o2 || this.match(52)) {
      this.toAssignable(a2, true);
      const s3 = o2 ? "for-of statement" : "for-in statement";
      return this.checkLVal(a2, s3), this.parseForIn(t7, a2, e2);
    }
    return this.checkExpressionErrors(n2, true), e2 > -1 && this.unexpected(e2), this.parseFor(t7, a2);
  }
  parseFunctionStatement(t7, e2, s2) {
    return this.next(), this.parseFunction(t7, 1 | (s2 ? 0 : 2), e2);
  }
  parseIfStatement(t7) {
    return this.next(), t7.test = this.parseHeaderExpression(), t7.consequent = this.parseStatement("if"), t7.alternate = this.eat(60) ? this.parseStatement("if") : null, this.finishNode(t7, "IfStatement");
  }
  parseReturnStatement(t7) {
    return this.prodParam.hasReturn || this.options.allowReturnOutsideFunction || this.raise(this.state.start, ic.IllegalReturn), this.next(), this.isLineTerminator() ? t7.argument = null : (t7.argument = this.parseExpression(), this.semicolon()), this.finishNode(t7, "ReturnStatement");
  }
  parseSwitchStatement(t7) {
    this.next(), t7.discriminant = this.parseHeaderExpression();
    const e2 = t7.cases = [];
    let s2, r2;
    for (this.expect(5), this.state.labels.push($l), this.scope.enter(0); !this.match(8); )
      if (this.match(55) || this.match(59)) {
        const t8 = this.match(55);
        s2 && this.finishNode(s2, "SwitchCase"), e2.push(s2 = this.startNode()), s2.consequent = [], this.next(), t8 ? s2.test = this.parseExpression() : (r2 && this.raise(this.state.lastTokStart, ic.MultipleDefaultsInSwitch), r2 = true, s2.test = null), this.expect(14);
      } else
        s2 ? s2.consequent.push(this.parseStatement(null)) : this.unexpected();
    return this.scope.exit(), s2 && this.finishNode(s2, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t7, "SwitchStatement");
  }
  parseThrowStatement(t7) {
    return this.next(), this.hasPrecedingLineBreak() && this.raise(this.state.lastTokEnd, ic.NewlineAfterThrow), t7.argument = this.parseExpression(), this.semicolon(), this.finishNode(t7, "ThrowStatement");
  }
  parseCatchClauseParam() {
    const t7 = this.parseBindingAtom(), e2 = t7.type === "Identifier";
    return this.scope.enter(e2 ? 8 : 0), this.checkLVal(t7, "catch clause", 9), t7;
  }
  parseTryStatement(t7) {
    if (this.next(), t7.block = this.parseBlock(), t7.handler = null, this.match(56)) {
      const e2 = this.startNode();
      this.next(), this.match(10) ? (this.expect(10), e2.param = this.parseCatchClauseParam(), this.expect(11)) : (e2.param = null, this.scope.enter(0)), e2.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), t7.handler = this.finishNode(e2, "CatchClause");
    }
    return t7.finalizer = this.eat(61) ? this.parseBlock() : null, t7.handler || t7.finalizer || this.raise(t7.start, ic.NoCatchOrFinally), this.finishNode(t7, "TryStatement");
  }
  parseVarStatement(t7, e2) {
    return this.next(), this.parseVar(t7, false, e2), this.semicolon(), this.finishNode(t7, "VariableDeclaration");
  }
  parseWhileStatement(t7) {
    return this.next(), t7.test = this.parseHeaderExpression(), this.state.labels.push(Jl), t7.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(t7, "WhileStatement");
  }
  parseWithStatement(t7) {
    return this.state.strict && this.raise(this.state.start, ic.StrictWith), this.next(), t7.object = this.parseHeaderExpression(), t7.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(t7, "WithStatement");
  }
  parseEmptyStatement(t7) {
    return this.next(), this.finishNode(t7, "EmptyStatement");
  }
  parseLabeledStatement(t7, e2, s2, r2) {
    for (const t8 of this.state.labels)
      t8.name === e2 && this.raise(s2.start, ic.LabelRedeclaration, e2);
    const i2 = (n2 = this.state.type) >= 84 && n2 <= 86 ? "loop" : this.match(65) ? "switch" : null;
    var n2;
    for (let e3 = this.state.labels.length - 1; e3 >= 0; e3--) {
      const s3 = this.state.labels[e3];
      if (s3.statementStart !== t7.start)
        break;
      s3.statementStart = this.state.start, s3.kind = i2;
    }
    return this.state.labels.push({ name: e2, kind: i2, statementStart: this.state.start }), t7.body = this.parseStatement(r2 ? r2.indexOf("label") === -1 ? r2 + "label" : r2 : "label"), this.state.labels.pop(), t7.label = s2, this.finishNode(t7, "LabeledStatement");
  }
  parseExpressionStatement(t7, e2) {
    return t7.expression = e2, this.semicolon(), this.finishNode(t7, "ExpressionStatement");
  }
  parseBlock() {
    let t7 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], s2 = arguments.length > 2 ? arguments[2] : void 0;
    const r2 = this.startNode();
    return t7 && this.state.strictErrors.clear(), this.expect(5), e2 && this.scope.enter(0), this.parseBlockBody(r2, t7, false, 8, s2), e2 && this.scope.exit(), this.finishNode(r2, "BlockStatement");
  }
  isValidDirective(t7) {
    return t7.type === "ExpressionStatement" && t7.expression.type === "StringLiteral" && !t7.expression.extra.parenthesized;
  }
  parseBlockBody(t7, e2, s2, r2, i2) {
    const n2 = t7.body = [], a2 = t7.directives = [];
    this.parseBlockOrModuleBlockBody(n2, e2 ? a2 : void 0, s2, r2, i2);
  }
  parseBlockOrModuleBlockBody(t7, e2, s2, r2, i2) {
    const n2 = this.state.strict;
    let a2 = false, o2 = false;
    for (; !this.match(r2); ) {
      const r3 = this.parseStatement(null, s2);
      if (e2 && !o2) {
        if (this.isValidDirective(r3)) {
          const t8 = this.stmtToDirective(r3);
          e2.push(t8), a2 || t8.value.value !== "use strict" || (a2 = true, this.setStrict(true));
          continue;
        }
        o2 = true, this.state.strictErrors.clear();
      }
      t7.push(r3);
    }
    i2 && i2.call(this, a2), n2 || this.setStrict(false), this.next();
  }
  parseFor(t7, e2) {
    return t7.init = e2, this.semicolon(false), t7.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), t7.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t7.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t7, "ForStatement");
  }
  parseForIn(t7, e2, s2) {
    const r2 = this.match(52);
    return this.next(), r2 ? s2 > -1 && this.unexpected(s2) : t7.await = s2 > -1, e2.type !== "VariableDeclaration" || e2.declarations[0].init == null || r2 && !this.state.strict && e2.kind === "var" && e2.declarations[0].id.type === "Identifier" ? e2.type === "AssignmentPattern" && this.raise(e2.start, ic.InvalidLhs, "for-loop") : this.raise(e2.start, ic.ForInOfLoopInitializer, r2 ? "for-in" : "for-of"), t7.left = e2, t7.right = r2 ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t7.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t7, r2 ? "ForInStatement" : "ForOfStatement");
  }
  parseVar(t7, e2, s2) {
    const r2 = t7.declarations = [], i2 = this.hasPlugin("typescript");
    for (t7.kind = s2; ; ) {
      const t8 = this.startNode();
      if (this.parseVarId(t8, s2), this.eat(27) ? t8.init = e2 ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : (s2 !== "const" || this.match(52) || this.isContextual(95) ? t8.id.type === "Identifier" || e2 && (this.match(52) || this.isContextual(95)) || this.raise(this.state.lastTokEnd, ic.DeclarationMissingInitializer, "Complex binding patterns") : i2 || this.raise(this.state.lastTokEnd, ic.DeclarationMissingInitializer, "Const declarations"), t8.init = null), r2.push(this.finishNode(t8, "VariableDeclarator")), !this.eat(12))
        break;
    }
    return t7;
  }
  parseVarId(t7, e2) {
    t7.id = this.parseBindingAtom(), this.checkLVal(t7.id, "variable declaration", e2 === "var" ? 5 : 9, void 0, e2 !== "var");
  }
  parseFunction(t7) {
    let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const r2 = 1 & e2, i2 = 2 & e2, n2 = !(!r2 || 4 & e2);
    this.initFunction(t7, s2), this.match(49) && i2 && this.raise(this.state.start, ic.GeneratorInSingleStatementContext), t7.generator = this.eat(49), r2 && (t7.id = this.parseFunctionId(n2));
    const a2 = this.state.maybeInArrowParameters;
    return this.state.maybeInArrowParameters = false, this.scope.enter(2), this.prodParam.enter(ml(s2, t7.generator)), r2 || (t7.id = this.parseFunctionId()), this.parseFunctionParams(t7, false), this.withSmartMixTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(t7, r2 ? "FunctionDeclaration" : "FunctionExpression");
    }), this.prodParam.exit(), this.scope.exit(), r2 && !i2 && this.registerFunctionStatementId(t7), this.state.maybeInArrowParameters = a2, t7;
  }
  parseFunctionId(t7) {
    return t7 || Pc(this.state.type) ? this.parseIdentifier() : null;
  }
  parseFunctionParams(t7, e2) {
    this.expect(10), this.expressionScope.enter(new pl(3)), t7.params = this.parseBindingList(11, 41, false, e2), this.expressionScope.exit();
  }
  registerFunctionStatementId(t7) {
    t7.id && this.scope.declareName(t7.id.name, this.state.strict || t7.generator || t7.async ? this.scope.treatFunctionsAsVar ? 5 : 9 : 17, t7.id.start);
  }
  parseClass(t7, e2, s2) {
    this.next(), this.takeDecorators(t7);
    const r2 = this.state.strict;
    return this.state.strict = true, this.parseClassId(t7, e2, s2), this.parseClassSuper(t7), t7.body = this.parseClassBody(!!t7.superClass, r2), this.finishNode(t7, e2 ? "ClassDeclaration" : "ClassExpression");
  }
  isClassProperty() {
    return this.match(27) || this.match(13) || this.match(8);
  }
  isClassMethod() {
    return this.match(10);
  }
  isNonstaticConstructor(t7) {
    return !(t7.computed || t7.static || t7.key.name !== "constructor" && t7.key.value !== "constructor");
  }
  parseClassBody(t7, e2) {
    this.classScope.enter();
    const s2 = { hadConstructor: false, hadSuperClass: t7 };
    let r2 = [];
    const i2 = this.startNode();
    if (i2.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
      for (; !this.match(8); ) {
        if (this.eat(13)) {
          if (r2.length > 0)
            throw this.raise(this.state.lastTokEnd, ic.DecoratorSemicolon);
          continue;
        }
        if (this.match(24)) {
          r2.push(this.parseDecorator());
          continue;
        }
        const t8 = this.startNode();
        r2.length && (t8.decorators = r2, this.resetStartLocationFromNode(t8, r2[0]), r2 = []), this.parseClassMember(i2, t8, s2), t8.kind === "constructor" && t8.decorators && t8.decorators.length > 0 && this.raise(t8.start, ic.DecoratorConstructor);
      }
    }), this.state.strict = e2, this.next(), r2.length)
      throw this.raise(this.state.start, ic.TrailingDecorator);
    return this.classScope.exit(), this.finishNode(i2, "ClassBody");
  }
  parseClassMemberFromModifier(t7, e2) {
    const s2 = this.parseIdentifier(true);
    if (this.isClassMethod()) {
      const r2 = e2;
      return r2.kind = "method", r2.computed = false, r2.key = s2, r2.static = false, this.pushClassMethod(t7, r2, false, false, false, false), true;
    }
    if (this.isClassProperty()) {
      const r2 = e2;
      return r2.computed = false, r2.key = s2, r2.static = false, t7.body.push(this.parseClassProperty(r2)), true;
    }
    return this.resetPreviousNodeTrailingComments(s2), false;
  }
  parseClassMember(t7, e2, s2) {
    const r2 = this.isContextual(98);
    if (r2) {
      if (this.parseClassMemberFromModifier(t7, e2))
        return;
      if (this.eat(5))
        return void this.parseClassStaticBlock(t7, e2);
    }
    this.parseClassMemberWithIsStatic(t7, e2, s2, r2);
  }
  parseClassMemberWithIsStatic(t7, e2, s2, r2) {
    const i2 = e2, n2 = e2, a2 = e2, o2 = e2, u2 = i2, h2 = i2;
    if (e2.static = r2, this.parsePropertyNamePrefixOperator(e2), this.eat(49)) {
      u2.kind = "method";
      const e3 = this.match(128);
      return this.parseClassElementName(u2), e3 ? void this.pushClassPrivateMethod(t7, n2, true, false) : (this.isNonstaticConstructor(i2) && this.raise(i2.key.start, ic.ConstructorIsGenerator), void this.pushClassMethod(t7, i2, true, false, false, false));
    }
    const p2 = Pc(this.state.type) && !this.state.containsEsc, c2 = this.match(128), l2 = this.parseClassElementName(e2), d2 = this.state.start;
    if (this.parsePostMemberNameModifiers(h2), this.isClassMethod()) {
      if (u2.kind = "method", c2)
        return void this.pushClassPrivateMethod(t7, n2, false, false);
      const r3 = this.isNonstaticConstructor(i2);
      let a3 = false;
      r3 && (i2.kind = "constructor", s2.hadConstructor && !this.hasPlugin("typescript") && this.raise(l2.start, ic.DuplicateConstructor), r3 && this.hasPlugin("typescript") && e2.override && this.raise(l2.start, ic.OverrideOnConstructor), s2.hadConstructor = true, a3 = s2.hadSuperClass), this.pushClassMethod(t7, i2, false, false, r3, a3);
    } else if (this.isClassProperty())
      c2 ? this.pushClassPrivateProperty(t7, o2) : this.pushClassProperty(t7, a2);
    else if (p2 && l2.name === "async" && !this.isLineTerminator()) {
      this.resetPreviousNodeTrailingComments(l2);
      const e3 = this.eat(49);
      h2.optional && this.unexpected(d2), u2.kind = "method";
      const s3 = this.match(128);
      this.parseClassElementName(u2), this.parsePostMemberNameModifiers(h2), s3 ? this.pushClassPrivateMethod(t7, n2, e3, true) : (this.isNonstaticConstructor(i2) && this.raise(i2.key.start, ic.ConstructorIsAsync), this.pushClassMethod(t7, i2, e3, true, false, false));
    } else if (!p2 || l2.name !== "get" && l2.name !== "set" || this.match(49) && this.isLineTerminator())
      this.isLineTerminator() ? c2 ? this.pushClassPrivateProperty(t7, o2) : this.pushClassProperty(t7, a2) : this.unexpected();
    else {
      this.resetPreviousNodeTrailingComments(l2), u2.kind = l2.name;
      const e3 = this.match(128);
      this.parseClassElementName(i2), e3 ? this.pushClassPrivateMethod(t7, n2, false, false) : (this.isNonstaticConstructor(i2) && this.raise(i2.key.start, ic.ConstructorIsAccessor), this.pushClassMethod(t7, i2, false, false, false, false)), this.checkGetterSetterParams(i2);
    }
  }
  parseClassElementName(t7) {
    const { type: e2, value: s2, start: r2 } = this.state;
    if (e2 !== 122 && e2 !== 123 || !t7.static || s2 !== "prototype" || this.raise(r2, ic.StaticPrototype), e2 === 128) {
      s2 === "constructor" && this.raise(r2, ic.ConstructorClassPrivateField);
      const e3 = this.parsePrivateName();
      return t7.key = e3, e3;
    }
    return this.parsePropertyName(t7);
  }
  parseClassStaticBlock(t7, e2) {
    var s2;
    this.scope.enter(208);
    const r2 = this.state.labels;
    this.state.labels = [], this.prodParam.enter(0);
    const i2 = e2.body = [];
    this.parseBlockOrModuleBlockBody(i2, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = r2, t7.body.push(this.finishNode(e2, "StaticBlock")), (s2 = e2.decorators) != null && s2.length && this.raise(e2.start, ic.DecoratorStaticBlock);
  }
  pushClassProperty(t7, e2) {
    e2.computed || e2.key.name !== "constructor" && e2.key.value !== "constructor" || this.raise(e2.key.start, ic.ConstructorClassField), t7.body.push(this.parseClassProperty(e2));
  }
  pushClassPrivateProperty(t7, e2) {
    const s2 = this.parseClassPrivateProperty(e2);
    t7.body.push(s2), this.classScope.declarePrivateName(this.getPrivateNameSV(s2.key), 0, s2.key.start);
  }
  pushClassMethod(t7, e2, s2, r2, i2, n2) {
    t7.body.push(this.parseMethod(e2, s2, r2, i2, n2, "ClassMethod", true));
  }
  pushClassPrivateMethod(t7, e2, s2, r2) {
    const i2 = this.parseMethod(e2, s2, r2, false, false, "ClassPrivateMethod", true);
    t7.body.push(i2);
    const n2 = i2.kind === "get" ? i2.static ? 6 : 2 : i2.kind === "set" ? i2.static ? 5 : 1 : 0;
    this.declareClassPrivateMethodInScope(i2, n2);
  }
  declareClassPrivateMethodInScope(t7, e2) {
    this.classScope.declarePrivateName(this.getPrivateNameSV(t7.key), e2, t7.key.start);
  }
  parsePostMemberNameModifiers(t7) {
  }
  parseClassPrivateProperty(t7) {
    return this.parseInitializer(t7), this.semicolon(), this.finishNode(t7, "ClassPrivateProperty");
  }
  parseClassProperty(t7) {
    return this.parseInitializer(t7), this.semicolon(), this.finishNode(t7, "ClassProperty");
  }
  parseInitializer(t7) {
    this.scope.enter(80), this.expressionScope.enter(dl()), this.prodParam.enter(0), t7.value = this.eat(27) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
  }
  parseClassId(t7, e2, s2) {
    let r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 139;
    Pc(this.state.type) ? (t7.id = this.parseIdentifier(), e2 && this.checkLVal(t7.id, "class name", r2)) : s2 || !e2 ? t7.id = null : this.unexpected(null, ic.MissingClassName);
  }
  parseClassSuper(t7) {
    t7.superClass = this.eat(75) ? this.parseExprSubscripts() : null;
  }
  parseExport(t7) {
    const e2 = this.maybeParseExportDefaultSpecifier(t7), s2 = !e2 || this.eat(12), r2 = s2 && this.eatExportStar(t7), i2 = r2 && this.maybeParseExportNamespaceSpecifier(t7), n2 = s2 && (!i2 || this.eat(12)), a2 = e2 || r2;
    if (r2 && !i2)
      return e2 && this.unexpected(), this.parseExportFrom(t7, true), this.finishNode(t7, "ExportAllDeclaration");
    const o2 = this.maybeParseExportNamedSpecifiers(t7);
    if (e2 && s2 && !r2 && !o2 || i2 && n2 && !o2)
      throw this.unexpected(null, 5);
    let u2;
    if (a2 || o2 ? (u2 = false, this.parseExportFrom(t7, a2)) : u2 = this.maybeParseExportDeclaration(t7), a2 || o2 || u2)
      return this.checkExport(t7, true, false, !!t7.source), this.finishNode(t7, "ExportNamedDeclaration");
    if (this.eat(59))
      return t7.declaration = this.parseExportDefaultExpression(), this.checkExport(t7, true, true), this.finishNode(t7, "ExportDefaultDeclaration");
    throw this.unexpected(null, 5);
  }
  eatExportStar(t7) {
    return this.eat(49);
  }
  maybeParseExportDefaultSpecifier(t7) {
    if (this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom");
      const e2 = this.startNode();
      return e2.exported = this.parseIdentifier(true), t7.specifiers = [this.finishNode(e2, "ExportDefaultSpecifier")], true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(t7) {
    if (this.isContextual(87)) {
      t7.specifiers || (t7.specifiers = []);
      const e2 = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      return this.next(), e2.exported = this.parseModuleExportName(), t7.specifiers.push(this.finishNode(e2, "ExportNamespaceSpecifier")), true;
    }
    return false;
  }
  maybeParseExportNamedSpecifiers(t7) {
    if (this.match(5)) {
      t7.specifiers || (t7.specifiers = []);
      const e2 = t7.exportKind === "type";
      return t7.specifiers.push(...this.parseExportSpecifiers(e2)), t7.source = null, t7.declaration = null, this.hasPlugin("importAssertions") && (t7.assertions = []), true;
    }
    return false;
  }
  maybeParseExportDeclaration(t7) {
    return !!this.shouldParseExportDeclaration() && (t7.specifiers = [], t7.source = null, this.hasPlugin("importAssertions") && (t7.assertions = []), t7.declaration = this.parseExportDeclaration(t7), true);
  }
  isAsyncFunction() {
    if (!this.isContextual(89))
      return false;
    const t7 = this.nextTokenStart();
    return !Wp.test(this.input.slice(this.state.pos, t7)) && this.isUnparsedContextual(t7, "function");
  }
  parseExportDefaultExpression() {
    const t7 = this.startNode(), e2 = this.isAsyncFunction();
    if (this.match(62) || e2)
      return this.next(), e2 && this.next(), this.parseFunction(t7, 5, e2);
    if (this.match(74))
      return this.parseClass(t7, true, true);
    if (this.match(24))
      return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, ic.DecoratorBeforeExport), this.parseDecorators(false), this.parseClass(t7, true, true);
    if (this.match(69) || this.match(68) || this.isLet())
      throw this.raise(this.state.start, ic.UnsupportedDefaultExport);
    {
      const t8 = this.parseMaybeAssignAllowIn();
      return this.semicolon(), t8;
    }
  }
  parseExportDeclaration(t7) {
    return this.parseStatement(null);
  }
  isExportDefaultSpecifier() {
    const { type: t7 } = this.state;
    if (Pc(t7)) {
      if (t7 === 89 && !this.state.containsEsc || t7 === 93)
        return false;
      if ((t7 === 120 || t7 === 119) && !this.state.containsEsc) {
        const { type: t8 } = this.lookahead();
        if (Pc(t8) && t8 !== 91 || t8 === 5)
          return this.expectOnePlugin(["flow", "typescript"]), false;
      }
    } else if (!this.match(59))
      return false;
    const e2 = this.nextTokenStart(), s2 = this.isUnparsedContextual(e2, "from");
    if (this.input.charCodeAt(e2) === 44 || Pc(this.state.type) && s2)
      return true;
    if (this.match(59) && s2) {
      const t8 = this.input.charCodeAt(this.nextTokenStartSince(e2 + 4));
      return t8 === 34 || t8 === 39;
    }
    return false;
  }
  parseExportFrom(t7, e2) {
    if (this.eatContextual(91)) {
      t7.source = this.parseImportSource(), this.checkExport(t7);
      const e3 = this.maybeParseImportAssertions();
      e3 && (t7.assertions = e3);
    } else
      e2 && this.unexpected();
    this.semicolon();
  }
  shouldParseExportDeclaration() {
    const { type: t7 } = this.state;
    if (t7 === 24 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
      if (!this.getPluginOption("decorators", "decoratorsBeforeExport"))
        return true;
      this.unexpected(this.state.start, ic.DecoratorBeforeExport);
    }
    return t7 === 68 || t7 === 69 || t7 === 62 || t7 === 74 || this.isLet() || this.isAsyncFunction();
  }
  checkExport(t7, e2, s2, r2) {
    if (e2) {
      if (s2) {
        if (this.checkDuplicateExports(t7, "default"), this.hasPlugin("exportDefaultFrom")) {
          var i2;
          const e3 = t7.declaration;
          e3.type !== "Identifier" || e3.name !== "from" || e3.end - e3.start != 4 || (i2 = e3.extra) != null && i2.parenthesized || this.raise(e3.start, ic.ExportDefaultFromAsIdentifier);
        }
      } else if (t7.specifiers && t7.specifiers.length)
        for (const e3 of t7.specifiers) {
          const { exported: t8 } = e3, s3 = t8.type === "Identifier" ? t8.name : t8.value;
          if (this.checkDuplicateExports(e3, s3), !r2 && e3.local) {
            const { local: t9 } = e3;
            t9.type !== "Identifier" ? this.raise(e3.start, ic.ExportBindingIsString, t9.value, s3) : (this.checkReservedWord(t9.name, t9.start, true, false), this.scope.checkLocalExport(t9));
          }
        }
      else if (t7.declaration) {
        if (t7.declaration.type === "FunctionDeclaration" || t7.declaration.type === "ClassDeclaration") {
          const e3 = t7.declaration.id;
          if (!e3)
            throw new Error("Assertion failure");
          this.checkDuplicateExports(t7, e3.name);
        } else if (t7.declaration.type === "VariableDeclaration")
          for (const e3 of t7.declaration.declarations)
            this.checkDeclaration(e3.id);
      }
    }
    if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length)
      throw this.raise(t7.start, ic.UnsupportedDecoratorExport);
  }
  checkDeclaration(t7) {
    if (t7.type === "Identifier")
      this.checkDuplicateExports(t7, t7.name);
    else if (t7.type === "ObjectPattern")
      for (const e2 of t7.properties)
        this.checkDeclaration(e2);
    else if (t7.type === "ArrayPattern")
      for (const e2 of t7.elements)
        e2 && this.checkDeclaration(e2);
    else
      t7.type === "ObjectProperty" ? this.checkDeclaration(t7.value) : t7.type === "RestElement" ? this.checkDeclaration(t7.argument) : t7.type === "AssignmentPattern" && this.checkDeclaration(t7.left);
  }
  checkDuplicateExports(t7, e2) {
    this.exportedIdentifiers.has(e2) && this.raise(t7.start, e2 === "default" ? ic.DuplicateDefaultExport : ic.DuplicateExport, e2), this.exportedIdentifiers.add(e2);
  }
  parseExportSpecifiers(t7) {
    const e2 = [];
    let s2 = true;
    for (this.expect(5); !this.eat(8); ) {
      if (s2)
        s2 = false;
      else if (this.expect(12), this.eat(8))
        break;
      const r2 = this.isContextual(120), i2 = this.match(123), n2 = this.startNode();
      n2.local = this.parseModuleExportName(), e2.push(this.parseExportSpecifier(n2, i2, t7, r2));
    }
    return e2;
  }
  parseExportSpecifier(t7, e2, s2, r2) {
    return this.eatContextual(87) ? t7.exported = this.parseModuleExportName() : e2 ? t7.exported = Cl(t7.local) : t7.exported || (t7.exported = Al(t7.local)), this.finishNode(t7, "ExportSpecifier");
  }
  parseModuleExportName() {
    if (this.match(123)) {
      const t7 = this.parseStringLiteral(this.state.value), e2 = t7.value.match(Yl);
      return e2 && this.raise(t7.start, ic.ModuleExportNameHasLoneSurrogate, e2[0].charCodeAt(0).toString(16)), t7;
    }
    return this.parseIdentifier(true);
  }
  parseImport(t7) {
    if (t7.specifiers = [], !this.match(123)) {
      const e3 = !this.maybeParseDefaultImportSpecifier(t7) || this.eat(12), s2 = e3 && this.maybeParseStarImportSpecifier(t7);
      e3 && !s2 && this.parseNamedImportSpecifiers(t7), this.expectContextual(91);
    }
    t7.source = this.parseImportSource();
    const e2 = this.maybeParseImportAssertions();
    if (e2)
      t7.assertions = e2;
    else {
      const e3 = this.maybeParseModuleAttributes();
      e3 && (t7.attributes = e3);
    }
    return this.semicolon(), this.finishNode(t7, "ImportDeclaration");
  }
  parseImportSource() {
    return this.match(123) || this.unexpected(), this.parseExprAtom();
  }
  shouldParseDefaultImport(t7) {
    return Pc(this.state.type);
  }
  parseImportSpecifierLocal(t7, e2, s2, r2) {
    e2.local = this.parseIdentifier(), this.checkLVal(e2.local, r2, 9), t7.specifiers.push(this.finishNode(e2, s2));
  }
  parseAssertEntries() {
    const t7 = [], e2 = new Set();
    do {
      if (this.match(8))
        break;
      const s2 = this.startNode(), r2 = this.state.value;
      if (e2.has(r2) && this.raise(this.state.start, ic.ModuleAttributesWithDuplicateKeys, r2), e2.add(r2), this.match(123) ? s2.key = this.parseStringLiteral(r2) : s2.key = this.parseIdentifier(true), this.expect(14), !this.match(123))
        throw this.unexpected(this.state.start, ic.ModuleAttributeInvalidValue);
      s2.value = this.parseStringLiteral(this.state.value), this.finishNode(s2, "ImportAttribute"), t7.push(s2);
    } while (this.eat(12));
    return t7;
  }
  maybeParseModuleAttributes() {
    if (!this.match(70) || this.hasPrecedingLineBreak())
      return this.hasPlugin("moduleAttributes") ? [] : null;
    this.expectPlugin("moduleAttributes"), this.next();
    const t7 = [], e2 = new Set();
    do {
      const s2 = this.startNode();
      if (s2.key = this.parseIdentifier(true), s2.key.name !== "type" && this.raise(s2.key.start, ic.ModuleAttributeDifferentFromType, s2.key.name), e2.has(s2.key.name) && this.raise(s2.key.start, ic.ModuleAttributesWithDuplicateKeys, s2.key.name), e2.add(s2.key.name), this.expect(14), !this.match(123))
        throw this.unexpected(this.state.start, ic.ModuleAttributeInvalidValue);
      s2.value = this.parseStringLiteral(this.state.value), this.finishNode(s2, "ImportAttribute"), t7.push(s2);
    } while (this.eat(12));
    return t7;
  }
  maybeParseImportAssertions() {
    if (!this.isContextual(88) || this.hasPrecedingLineBreak())
      return this.hasPlugin("importAssertions") ? [] : null;
    this.expectPlugin("importAssertions"), this.next(), this.eat(5);
    const t7 = this.parseAssertEntries();
    return this.eat(8), t7;
  }
  maybeParseDefaultImportSpecifier(t7) {
    return !!this.shouldParseDefaultImport(t7) && (this.parseImportSpecifierLocal(t7, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), true);
  }
  maybeParseStarImportSpecifier(t7) {
    if (this.match(49)) {
      const e2 = this.startNode();
      return this.next(), this.expectContextual(87), this.parseImportSpecifierLocal(t7, e2, "ImportNamespaceSpecifier", "import namespace specifier"), true;
    }
    return false;
  }
  parseNamedImportSpecifiers(t7) {
    let e2 = true;
    for (this.expect(5); !this.eat(8); ) {
      if (e2)
        e2 = false;
      else {
        if (this.eat(14))
          throw this.raise(this.state.start, ic.DestructureNamedImport);
        if (this.expect(12), this.eat(8))
          break;
      }
      const s2 = this.startNode(), r2 = this.match(123), i2 = this.isContextual(120);
      s2.imported = this.parseModuleExportName();
      const n2 = this.parseImportSpecifier(s2, r2, t7.importKind === "type" || t7.importKind === "typeof", i2);
      t7.specifiers.push(n2);
    }
  }
  parseImportSpecifier(t7, e2, s2, r2) {
    if (this.eatContextual(87))
      t7.local = this.parseIdentifier();
    else {
      const { imported: s3 } = t7;
      if (e2)
        throw this.raise(t7.start, ic.ImportBindingIsString, s3.value);
      this.checkReservedWord(s3.name, t7.start, true, true), t7.local || (t7.local = Al(s3));
    }
    return this.checkLVal(t7.local, "import specifier", 9), this.finishNode(t7, "ImportSpecifier");
  }
  isThisParam(t7) {
    return t7.type === "Identifier" && t7.name === "this";
  }
} {
  constructor(t7, e2) {
    t7 = function(t8) {
      const e3 = {};
      for (const s2 of Object.keys(Wl))
        e3[s2] = t8 && t8[s2] != null ? t8[s2] : Wl[s2];
      return e3;
    }(t7), super(t7, e2), this.options = t7, this.initializeScopes(), this.plugins = function(t8) {
      const e3 = new Map();
      for (const s2 of t8) {
        const [t9, r2] = Array.isArray(s2) ? s2 : [s2, {}];
        e3.has(t9) || e3.set(t9, r2 || {});
      }
      return e3;
    }(this.options.plugins), this.filename = t7.sourceFilename;
  }
  getScopeHandler() {
    return Zc;
  }
  parse() {
    this.enterInitialScopes();
    const t7 = this.startNode(), e2 = this.startNode();
    return this.nextToken(), t7.errors = null, this.parseTopLevel(t7, e2), t7.errors = this.state.errors, t7;
  }
};
var td = function(t7) {
  const e2 = {};
  for (const s2 of Object.keys(t7))
    e2[s2] = vc(t7[s2]);
  return e2;
}(gc);
function ed(t7, e2) {
  let s2 = Zl;
  return t7 != null && t7.plugins && (!function(t8) {
    if (Ul(t8, "decorators")) {
      if (Ul(t8, "decorators-legacy"))
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      const e3 = _l(t8, "decorators", "decoratorsBeforeExport");
      if (e3 == null)
        throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
      if (typeof e3 != "boolean")
        throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
    if (Ul(t8, "flow") && Ul(t8, "typescript"))
      throw new Error("Cannot combine flow and typescript plugins.");
    if (Ul(t8, "placeholders") && Ul(t8, "v8intrinsic"))
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    if (Ul(t8, "pipelineOperator")) {
      const e3 = _l(t8, "pipelineOperator", "proposal");
      if (!zl.includes(e3)) {
        const t9 = zl.map((t10) => '"'.concat(t10, '"')).join(", ");
        throw new Error('"pipelineOperator" requires "proposal" option whose value must be one of: '.concat(t9, "."));
      }
      const s3 = Ul(t8, "recordAndTuple") && _l(t8, "recordAndTuple", "syntaxType") === "hash";
      if (e3 === "hack") {
        if (Ul(t8, "placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (Ul(t8, "v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const e4 = _l(t8, "pipelineOperator", "topicToken");
        if (!Hl.includes(e4)) {
          const t9 = Hl.map((t10) => '"'.concat(t10, '"')).join(", ");
          throw new Error('"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: '.concat(t9, "."));
        }
        if (e4 === "#" && s3)
          throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      } else if (e3 === "smart" && s3)
        throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    }
    if (Ul(t8, "moduleAttributes")) {
      if (Ul(t8, "importAssertions"))
        throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      if (_l(t8, "moduleAttributes", "version") !== "may-2020")
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }
    if (Ul(t8, "recordAndTuple") && !Vl.includes(_l(t8, "recordAndTuple", "syntaxType")))
      throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + Vl.map((t9) => "'".concat(t9, "'")).join(", "));
    if (Ul(t8, "asyncDoExpressions") && !Ul(t8, "doExpressions")) {
      const t9 = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw t9.missingPlugins = "doExpressions", t9;
    }
  }(t7.plugins), s2 = function(t8) {
    const e3 = Gl.filter((e4) => Ul(t8, e4)), s3 = e3.join("/");
    let r2 = sd[s3];
    if (!r2) {
      r2 = Zl;
      for (const t9 of e3)
        r2 = ql[t9](r2);
      sd[s3] = r2;
    }
    return r2;
  }(t7.plugins)), new s2(t7, e2);
}
var sd = {};
Gp.parse = function(t7, e2) {
  var s2;
  if (((s2 = e2) == null ? void 0 : s2.sourceType) !== "unambiguous")
    return ed(e2, t7).parse();
  e2 = Object.assign({}, e2);
  try {
    e2.sourceType = "module";
    const s3 = ed(e2, t7), r2 = s3.parse();
    if (s3.sawUnambiguousESM)
      return r2;
    if (s3.ambiguousScriptDifferentAst)
      try {
        return e2.sourceType = "script", ed(e2, t7).parse();
      } catch (t8) {
      }
    else
      r2.program.sourceType = "script";
    return r2;
  } catch (s3) {
    try {
      return e2.sourceType = "script", ed(e2, t7).parse();
    } catch (t8) {
    }
    throw s3;
  }
}, Gp.parseExpression = function(t7, e2) {
  const s2 = ed(e2, t7);
  return s2.options.strictMode && (s2.state.strict = true), s2.getExpression();
}, Gp.tokTypes = td;
var { isNonEmptyArray: rd } = bo;
var id = Pu;
var nd = gu;
var ad = bu;
function od() {
  let t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { allowComments: e2 = true } = t7;
  return function(t8) {
    const { parseExpression: s2 } = Gp;
    let r2;
    try {
      r2 = s2(t8, { tokens: true, ranges: true });
    } catch (t9) {
      throw ad(t9);
    }
    if (!e2 && rd(r2.comments))
      throw ud(r2.comments[0], "Comment");
    return hd(r2), r2;
  };
}
function ud(t7, e2) {
  const [s2, r2] = [t7.loc.start, t7.loc.end].map((t8) => {
    let { line: e3, column: s3 } = t8;
    return { line: e3, column: s3 + 1 };
  });
  return id("".concat(e2, " is not allowed in JSON."), { start: s2, end: r2 });
}
function hd(t7) {
  switch (t7.type) {
    case "ArrayExpression":
      for (const e2 of t7.elements)
        e2 !== null && hd(e2);
      return;
    case "ObjectExpression":
      for (const e2 of t7.properties)
        hd(e2);
      return;
    case "ObjectProperty":
      if (t7.computed)
        throw ud(t7.key, "Computed key");
      if (t7.shorthand)
        throw ud(t7.key, "Shorthand property");
      return t7.key.type !== "Identifier" && hd(t7.key), void hd(t7.value);
    case "UnaryExpression": {
      const { operator: e2, argument: s2 } = t7;
      if (e2 !== "+" && e2 !== "-")
        throw ud(t7, "Operator '".concat(t7.operator, "'"));
      if (s2.type === "NumericLiteral" || s2.type === "Identifier" && (s2.name === "Infinity" || s2.name === "NaN"))
        return;
      throw ud(s2, "Operator '".concat(e2, "' before '").concat(s2.type, "'"));
    }
    case "Identifier":
      if (t7.name !== "Infinity" && t7.name !== "NaN" && t7.name !== "undefined")
        throw ud(t7, "Identifier '".concat(t7.name, "'"));
      return;
    case "TemplateLiteral":
      if (rd(t7.expressions))
        throw ud(t7.expressions[0], "'TemplateLiteral' with expression");
      for (const e2 of t7.quasis)
        hd(e2);
      return;
    case "NullLiteral":
    case "BooleanLiteral":
    case "NumericLiteral":
    case "StringLiteral":
    case "TemplateElement":
      return;
    default:
      throw ud(t7, "'".concat(t7.type, "'"));
  }
}
var pd = od();
var cd = { json: nd({ parse: pd, hasPragma: () => true }), json5: nd(pd), "json-stringify": nd({ parse: od({ allowComments: false }), astFormat: "estree-json" }) };
var ld = Ai;
var { getNextNonSpaceNonCommentCharacterIndexWithStartIndex: dd, getShebang: Dd } = bo;
var md = gu;
var fd = bu;
var yd = qp;
var Ed = cd;
var Ad = { sourceType: "module", allowImportExportEverywhere: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, errorRecovery: true, createParenthesizedExpressions: true, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", { decoratorsBeforeExport: false }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions"], tokens: true, ranges: true };
var Cd = ["recordAndTuple", { syntaxType: "hash" }];
var xd = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]];
var Fd = function(t7) {
  let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ad;
  return Object.assign(Object.assign({}, e2), {}, { plugins: [...e2.plugins, ...t7] });
};
var gd = /@(?:no)?flow\b/;
function Pd(t7, e2) {
  if (e2.filepath && e2.filepath.endsWith(".js.flow"))
    return true;
  const s2 = Dd(t7);
  s2 && (t7 = t7.slice(s2.length));
  const r2 = dd(t7, 0);
  return r2 !== false && (t7 = t7.slice(0, r2)), gd.test(t7);
}
function Td(t7, e2, s2) {
  const r2 = (0, Gp[t7])(e2, s2), i2 = r2.errors.find((t8) => !vd.has(t8.reasonCode));
  if (i2)
    throw i2;
  return r2;
}
function bd(t7) {
  for (var e2 = arguments.length, s2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++)
    s2[r2 - 1] = arguments[r2];
  return function(e3, r3) {
    let i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if ((i2.parser === "babel" || i2.parser === "__babel_estree") && Pd(e3, i2))
      return i2.parser = "babel-flow", wd(e3, r3, i2);
    let n2 = s2;
    i2.__babelSourceType === "script" && (n2 = n2.map((t8) => Object.assign(Object.assign({}, t8), {}, { sourceType: "script" }))), /#[[{]/.test(e3) && (n2 = n2.map((t8) => Fd([Cd], t8)));
    const a2 = /%[A-Z]/.test(e3);
    if (e3.includes("|>")) {
      const t8 = a2 ? [...xd, "v8intrinsic"] : xd;
      n2 = t8.flatMap((t9) => n2.map((e4) => Fd([t9], e4)));
    } else
      a2 && (n2 = n2.map((t8) => Fd(["v8intrinsic"], t8)));
    const { result: o2, error: u2 } = ld(...n2.map((s3) => () => Td(t7, e3, s3)));
    if (!o2)
      throw fd(u2);
    return i2.originalText = e3, yd(o2, i2);
  };
}
var Sd = bd("parse", Fd(["jsx", "flow"]));
var wd = bd("parse", Fd(["jsx", ["flow", { all: true, enums: true }]]));
var Bd = bd("parse", Fd(["jsx", "typescript"]), Fd(["typescript"]));
var Nd = bd("parse", Fd(["jsx", "flow", "estree"]));
var Id = bd("parseExpression", Fd(["jsx"]));
var vd = new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]);
var kd = md(Sd);
var Ld = md(Id);
var Od = { parsers: Object.assign(Object.assign({ babel: kd, "babel-flow": md(wd), "babel-ts": md(Bd) }, Ed), {}, { __js_expression: Ld, __vue_expression: Ld, __vue_event_binding: kd, __babel_estree: md(Nd) }) };

// dep:prettier_esm_parser-babel
var prettier_esm_parser_babel_default = Od;
export {
  prettier_esm_parser_babel_default as default
};
//# sourceMappingURL=prettier_esm_parser-babel.js.map
