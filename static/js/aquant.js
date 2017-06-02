/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
 */
window.__qc = function (b) {
  if (b.__qc)return b.__qc;
  var r = b.document, y = b.navigator, N = "4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d".split(" "), G = !1, F = 0, A = [], t = [], g = [], h = {
    tcYgbCswcTSeq: 1,
    "01-0VIaSjnOLg": 1,
    aD1qr93XuF6aC: 1,
    "56WJ0KtIxWJ_2": 1,
    T1nhLcmCjVzQS: 1,
    zddNYNtUkUhdQ: 1,
    "59TntzuqummDw": 1,
    P7x87XHnVfbWr: 1,
    HGAVM7nQJ_sep: 1,
    "w9vzus-GKCA0U": 1,
    "00TsOkvHvnsZU": 1,
    effSsmMYCbAck: 1,
    PFW5FesqXn206: 1,
    "0dYLvhSGGqUWo": 1,
    c1rF4kxgLUzNc: 1,
    "5brKQLtleyIQU": 1,
    "mEzuYq24VEJ-3": 1,
    "57OGVHgSOoedo": 1,
    "e7wR0qsM6-pDa": 1,
    "8tgFhCTDYhV2V": 1,
    "82MbSinIaQJw2": 1,
    buQ2dAnrdTGCS: 1,
    "49SVsgIZlUqPk": 1,
    eeFYJkotb1rUU: 1,
    EzVU5HfAMVqEV: 1,
    "45nh8QKbsf2Xk": 1,
    sLJ2v5QaN4z2Y: 1,
    "5cvC4NOeGmtNA": 1,
    "573scDfDoUH6o": 1,
    "915Y6SMHQQJHI": 1,
    z0zMG4nCgXzzj: 1,
    "124BfeS-bwiSE": 1,
    "ZzStSGgW6hG-4": 1,
    KUMT4fYgcdEeg: 1,
    d9vfr8QTWnv1E: 1,
    fug7wP0GuN1h6: 1,
    cd12aNCzw_ZaB: 1,
    "51zXP5Cc9sxvQ": 1,
    "4dIM5nVs2rFio": 1,
    "8fZNjMQsH1Ews": 1,
    C6W3aFrWFMS7m: 1,
    N7ekbgK3G3jrt: 1,
    dfQGRefil9mes: 1,
    "9axVJDmh4EHIM": 1,
    NPcfSf1E0V1T1: 1,
    "72V4-XKpaKDrE": 1,
    "8cV3w6ZJH0sXI": 1,
    sHwqAaPHqVjee: 1,
    b15U9CAASyBMc: 1
  }, f = [], s = {}, H = 0, I = [], B = null, X = {}, x = {}, ia = null, u, Y = [].slice, ja, Z, O, p, D, $, P, ka, la, ma, J, aa, Q, R, na, K, oa, pa, qa, ra, q, sa, E, S, ta, ba, ua, va, ca, v, wa, da, T, U, xa, ya, V, za, ea, fa, Aa, ga, C, L, M, W, ha, w = function (a) {
    try {
      return {
        init: R, hash: Q, rules: xa, hasRules: V, defaults: Aa, __qc: function () {
          return !0
        }
      }[a].apply(null, Y.call(arguments, 1))
    } catch (c) {
      return !1
    }
  };
  w.evts = 0;
  w.v = 2;
  w.SD = N;
  w.qpixelsent = [];
  U = function (a) {
    var c = a ? a.length ||
    0 : 0, d;
    for (d = 0; d < c; d++)if (!a[d])return !1;
    return !0
  };
  fa = function (a) {
    (a = a || b._qacct) && (ca(f, a) || f.push(a))
  };
  ca = function (a, c) {
    var d = a.length, b;
    for (b = 0; b < d; b++)if (a[b] === c)return !0;
    return !1
  };
  da = function (a) {
    return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  };
  T = function (a) {
    var c, d;
    c = da(a);
    if ("array" === c)return a.slice(0);
    if ("object" === c) {
      c = {};
      for (d in a)a.hasOwnProperty(d) && (c[d] = a[d]);
      return c
    }
    return "string" === c ? "" + a : a
  };
  V = function (a) {
    return ca(g, a)
  };
  Aa = function (a, c) {
    var d;
    a && ((d = X[a]) && (c =
      W(c, d)), c.qacct && delete c.qacct, X[a] = c)
  };
  ga = function (a) {
    var c, d;
    if (p(a))for (c in a)if ("string" == typeof a[c]) {
      c = a.event || "load";
      d = a.media || "webpage";
      "rule" !== c && "load" !== c || "webpage" !== d && "ad" !== d ? q(a) : (d = a.qacct || b._qacct, a.qacct = d, c = (c = x[d]) ? W(c, a) : a, x[d] = c);
      fa(a.qacct);
      break
    } else"object" == typeof a[c] && null != a[c] && ga(a[c])
  };
  W = function (a, c) {
    var d = {};
    d.qacct = a.qacct || c.qacct;
    d.event = "load" === a.event || "load" === c.event ? "load" : a.event && c.event ? a.event || c.event : null;
    d.media = null;
    d.media = "webpage" === a.media ||
    "webpage" === c.media ? "webpage" : "ad" === a.media || "ad" === c.media ? "ad" : a.media || c.media;
    ba(d, a, c);
    ba(d, c, a);
    d.event || delete d.event;
    d.media || delete d.media;
    return d
  };
  ba = function (a, c, d) {
    var b, l, z, g, f, m;
    for (b in c)c.hasOwnProperty(b) && !a.hasOwnProperty(b) && (l = c[b], z = d[b], g = "", f = !!l && "string" == typeof l, m = !!z && "string" == typeof z, f && (g = l), f && m && (g += ","), m && (g += z), a[b] = g)
  };
  C = function () {
    var a = [], c, d;
    if (!(0 < H)) {
      wa();
      for (c in x)x.hasOwnProperty(c) && x[c] && (d = x[c], a.push(d), delete x[c]);
      1 == a.length && q(a[0]);
      1 < a.length &&
      q(a)
    }
  };
  L = function (a) {
    var c = [], d, b;
    for (d = 0; d < a.length; d++)b = a[d], h.hasOwnProperty(b.substring(2)) ? s[b] = 5 : V(b) || c.push(b);
    if (0 === c.length) C(); else for (d = 0; d < c.length; d++)b = c[d], g.push(b), ua(b)
  };
  va = function () {
    for (var a; I[0] && ("loaded" == I[0].readyState || "complete" == I[0].readyState);)a = I.shift(), a.onreadystatechange = null, B.parentNode.insertBefore(a, B), M()
  };
  ua = function (a) {
    var c, d;
    c = ("https:" === r.location.protocol ? "https://" : "http://") + "rules.quantcount.com/rules-" + a + ".js";
    B = B || r.scripts[0];
    H++;
    d = r.createElement("script");
    "async" in d ? (d.src = c, d.async = !1, d.onload = function () {
      s[a] = 0;
      M()
    }, d.onerror = function () {
      s[a] = 1;
      M()
    }, B.parentNode.insertBefore(d, B)) : d.readyState ? (s[a] = 2, I.push(d), d.onreadystatechange = va, d.src = c) : (s[a] = 4, M())
  };
  M = function () {
    H -= 0 < H ? 1 : 0;
    C()
  };
  xa = function () {
    var a = !0, c, d, b;
    if (arguments.length) {
      b = function (c) {
        a ? ga(c) : q(c, !0)
      };
      for (c = 0; c < arguments.length; c++)d = Y.call(arguments[c], 0), d.splice(1, 0, b), ya.apply(null, d);
      a = !1;
      G && C()
    }
  };
  ya = function (a, c) {
    var d = [], b = [], l = c || q, z, f, h, m, n;
    if ((z = Y.call(arguments, 2)) && z.length) {
      f =
        z[0] || U;
      h = z[1];
      m = z[2];
      z = m.length;
      for (n = 0; n < z; n++)d.push(!1), b.push(null);
      d = {p: a, f: d, r: f, c: m, a: h, v: b};
      V(a) || g.push(a);
      t.push(d);
      za(d, l)
    }
  };
  za = function (a, c) {
    var d = a ? a.c ? a.c.length : 0 : 0, b;
    for (b = 0; b < d; b++)(function (d) {
      var b, e;
      try {
        b = a.c[d][0], e = a.c[d].slice(1), e.splice(0, 0, function (b) {
          a.f[d] = !0;
          a.v[d] = b;
          ea(a, c)
        }), b.apply(null, e)
      } catch (g) {
        a.f[d] = !0, a.v[d] = !1, ea(a, c)
      }
    })(b)
  };
  ea = function (a, c) {
    var d = a.a, b = a.v, l = a.r || U, g, f, h, m, n, k;
    (g = U(a.f)) && (g = g && l(b));
    if (g)for (b = 0; b < d.length; b++)try {
      f = d[b][0];
      h = 1 < d[b].length ?
        d[b].slice(1) : [];
      h = h.concat(a.v);
      m = f.apply(null, h);
      n = {qacct: a.p, event: "rule"};
      for (k in m)m.hasOwnProperty(k) && "qacct" !== k && (n[k] = m[k]);
      c(n)
    } catch (p) {
    }
  };
  ja = function () {
    return Z(0) !== Z(6) ? 1 : 0
  };
  Z = function (a) {
    a = new Date(2E3, a, 1, 0, 0, 0, 0);
    var c = a.toGMTString(), c = new Date(c.substring(0, c.lastIndexOf(" ") - 1));
    return a - c
  };
  O = function (a) {
    return a.replace(/\./g, "%2E").replace(/,/g, "%2C")
  };
  D = "function" === typeof encodeURIComponent ? encodeURIComponent : O;
  p = function (a) {
    return "undefined" != typeof a && null != a
  };
  $ = function () {
    return Math.round(2147483647 *
      Math.random())
  };
  P = function (a) {
    var c = "", b = r.cookie, e;
    if (!b)return c;
    e = b.indexOf(a + "\x3d");
    a = e + a.length + 1;
    -1 < e && (c = b.indexOf(";", a), 0 > c && (c = b.length), c = b.substring(a, c));
    return c
  };
  ka = function () {
    var a = "", c = J(), b, e, l;
    if (1 === F)return ";fpan\x3du;fpa\x3d";
    b = Q(c);
    for (e = 0; e < N.length; e++)if (N[e] === b)return ";fpan\x3du;fpa\x3d";
    b = new Date;
    e = P("__qca");
    if (0 < e.length) {
      try {
        l = +e.split("-")[2], 338688E5 < b - l && (r.cookie = ["__qca\x3d", e, "; expires\x3d", (new Date(l + 338688E5)).toGMTString(), "; path\x3d/; domain\x3d", c].join(""))
      } catch (g) {
      }
      a +=
        ";fpan\x3d0;fpa\x3d" + e
    }
    0 === P("__qca").length && (e = "P0-" + $() + "-" + b.getTime(), r.cookie = ["__qca\x3d", e, "; expires\x3d", (new Date(b.getTime() + 338688E5)).toGMTString(), "; path\x3d/; domain\x3d", c].join(""), e = P("__qca"), a = 0 < e.length ? a + (";fpan\x3d1;fpa\x3d" + e) : a + ";fpan\x3du;fpa\x3d");
    return a
  };
  la = function (a) {
    r.cookie = a + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; path\x3d/; domain\x3d" + J()
  };
  J = function () {
    var a, c, b, e;
    a = r.domain;
    "www." === a.substring(0, 4) && (a = a.substring(4, a.length));
    c = a.split(".");
    e = c.length;
    if (3 > e)return a;
    b = c[e - 1];
    return 3 > b.length ? a : a = c[e - 2] + "." + b
  };
  aa = function (a, c) {
    var b;
    for (b = 0; b < c.length; b++)a ^= c.charCodeAt(b), a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
    return a
  };
  Q = function (a) {
    var c;
    c = aa(2166136261, a);
    a = aa(3386659096, a);
    return Math.round(Math.abs(c * a) / 65536).toString(16)
  };
  S = function (a, c, d) {
    var e = "", l = b._qacct, g = null, f = "webpage", h = "load", m = {}, n, k, l = c ? c.qacct || b._qacct : b._qacct;
    n = x[l];
    c ? n && (c = W(c, n)) : c = n;
    l && delete x[l];
    if (null != c)for (k in c)m[k] = !0, c.hasOwnProperty(k) && "string" === typeof k &&
    "string" === typeof c[k] && ("uid" === k || "uh" === k ? (na() || (g = Q(c[k])), delete c[k]) : "qacct" !== k && (0 < c[k].length ? e += ";" + k + a + "\x3d" + D(c[k]) : m[k] = !1, "media" === k && (f = c[k]), "event" === k && (h = c[k])));
    if ("string" !== typeof l) {
      if (!p(b._qacct) || 0 === b._qacct.length)return "";
      l = b._qacct
    }
    if (l && (n = X[l]))for (k in n)"string" === typeof k && n.hasOwnProperty(k) && !m[k] && (e += ";" + k + a + "\x3d" + D(n[k]), "media" === k && (f = n[k]), "event" === k && (h = n[k]));
    m = s[l];
    p(m) || (m = 3);
    e += ";rf" + a + "\x3d" + m;
    "string" === typeof g && (c.uh = g, e += ";uh" + a + "\x3d" + D(g));
    if ("webpage" === f && "load" === h) {
      for (c = 0; c < w.qpixelsent.length; c++)if (w.qpixelsent[c] === l && !d)return "";
      w.qpixelsent.push(l)
    }
    "ad" === f && (F = 1);
    return ";a" + a + "\x3d" + l + e
  };
  ta = function () {
    var a = r.getElementsByTagName("meta"), c = "", b, e, g, f;
    for (b = 0; b < a.length; b++) {
      g = a[b];
      if (1E3 <= c.length)return c;
      p(g) && p(g.attributes) && p(g.attributes.property) && p(g.attributes.property.value) && p(g.content) && (e = g.attributes.property.value, g = g.content, 3 < e.length && "og:" === e.substring(0, 3) && (0 < c.length && (c += ","), f = 80 < g.length ? 80 : g.length,
        c += O(e.substring(3, e.length)) + "." + O(g.substring(0, f))))
    }
    return D(c)
  };
  ma = function (a) {
    return "object" === typeof a ? ["p", "approved" === a.consent ? "a" : "d", "asserted" === a.source ? "e" : "i"].join("") : ""
  };
  na = function () {
    var a = !1;
    p(b.external) && (a = b.external, a = "function" === typeof a.InPrivateFilteringEnabled && !0 === a.InPrivateFilteringEnabled());
    return a || "1" == y.doNotTrack || "yes" === y.doNotTrack || "1" == y.msDoNotTrack
  };
  q = function (a, c) {
    var d = "function" === typeof encodeURIComponent ? "n" : "s", g = $(), f = "", h = "", s = "", v = "", m = "",
      n = "u", k = "1", t = 0, u = [], q, x, B, C;
    F = 0;
    p(w.qpixelsent) || (w.qpixelsent = []);
    if (p(a))for (q in a)if ("string" == typeof a[q]) {
      h = S("", a, c);
      break
    } else"object" == typeof a[q] && null != a[q] && (++t, h += S("." + t, a[q], c)); else"string" === typeof _qacct && (h = S("", null, c));
    0 !== h.length && (t = y.cookieEnabled ? "1" : "0", "undefined" != typeof y.javaEnabled && (n = y.javaEnabled() ? "1" : "0"), p(b._qmeta) && (s = ";m\x3d" + D(b._qmeta), b._qmeta = null), self.screen && (f = screen.width + "x" + screen.height + "x" + screen.colorDepth), x = new Date, B = ja(), C = ka(), b.location &&
    b.location.href && (v = D(b.location.href)), r && r.referrer && (m = D(r.referrer)), b.self === b.top && (k = "0"), q = ta(), u.push("/pixel;r\x3d" + g + h + C + ";ns\x3d" + k + ";ce\x3d" + t), u.push(";je\x3d" + n + ";sr\x3d" + f + ";enc\x3d" + d + ";dst\x3d" + B + ";et\x3d" + x.getTime() + ";tzo\x3d" + x.getTimezoneOffset() + s + ";ref\x3d" + m + ";url\x3d" + v + ";ogl\x3d" + q), A.push(u), E())
  };
  sa = function (a) {
    var c = new Image;
    a = [b.location.protocol, "//pixel.", oa(u) ? "quantserve.com" : "quantcount.com", a[0], ";cm\x3d", ma(u), a[1]].join("");
    c.alt = "";
    c.src = a;
    c.onload = function () {
      c &&
      "number" == typeof c.width && 3 === c.width && la("__qca")
    }
  };
  E = function () {
    if (u)for (; A.length;)sa(A.shift()); else ra()
  };
  oa = function (a) {
    return !0 === a || 1 === a || 1 === a || p(a) && "approved" === a.consent ? !0 : !1
  };
  ra = function () {
    if (!p(u)) {
      if (b.top === b.self) {
        if ("object" === typeof PrivacyManagerAPI && "function" === typeof PrivacyManagerAPI.callApi) {
          pa("getConsent", "advertising");
          return
        }
      } else if (b.postMessage && "object" === typeof JSON) {
        qa("getConsent", "advertising");
        return
      }
      u = 1
    }
    E()
  };
  pa = function (a, c) {
    u = PrivacyManagerAPI.callApi(a, "quantserve.com",
      J(), "truste.com", c);
    E()
  };
  qa = function (a, c) {
    var d = {
      PrivacyManagerAPI: {
        timestamp: (new Date).getTime(),
        action: a,
        self: "quantserve.com",
        domain: J(),
        authority: "truste.com",
        type: c
      }
    };
    if (b.addEventListener) b.addEventListener("message", K, !1); else if (b.attachEvent) b.attachEvent("onmessage", K); else {
      u = !0;
      E();
      return
    }
    try {
      b.top.postMessage(JSON.stringify(d), "*")
    } catch (g) {
    }
    ia = setTimeout(function () {
      p(u) || (u = !0, E())
    }, 25)
  };
  K = function (a) {
    var c = null;
    if (a.source === window.top) {
      try {
        c = "object" === typeof JSON && JSON.parse(a.data)
      } catch (d) {
      }
      c &&
      "object" === typeof c.PrivacyManagerAPI && (clearTimeout(ia), b.removeEventListener ? window.removeEventListener("message", K, !1) : b.detachEvent && window.detachEvent("onmessage", K), u = c.PrivacyManagerAPI, E())
    }
  };
  ha = function () {
    var a = arguments, c, b;
    v([].slice.call(a));
    for (b = 0; b < a.length; b++)c = a[b], q(c);
    f.length ? L(f.slice(0)) : C()
  };
  v = function (a) {
    var c = da(a);
    if ("array" === c)for (c = 0; c < a.length; c++)v(a[c]); else"object" === c && fa(a.qacct || b._qacct)
  };
  wa = function () {
    var a;
    b._qevents.length || b.ezt.length || "undefined" === typeof _qacct ||
    q({qacct: b._qacct});
    if (!w.evts) {
      for (a in b._qevents)b._qevents.hasOwnProperty(a) && q(b._qevents[a]);
      for (a in b.ezt)b.ezt.hasOwnProperty(a) && q(b.ezt[a]);
      b._qevents = {push: ha};
      b.ezt.push = function () {
        var a = arguments, d;
        if (p(b.queueManager))for (d = 0; d < a.length; d++)b.queueManager.push(a[d]); else ha.apply(this, arguments)
      };
      w.evts = 1
    }
  };
  R = function () {
    var a;
    p(b._qevents) || (b._qevents = []);
    p(b.ezt) || (b.ezt = []);
    b._qoptions && (a = T(b._qoptions), v(b._qoptions), b._qevents.push(a), b._qoptions = null);
    b.qcdata && (a = T(b.qcdata),
      v(b.qcdata), b._qevents.push(a), b.qcdata = null);
    b.smarttagdata && (a = T(b.smarttagdata), v(b.smarttagdata), b._qevents.push(a), b.smarttagdata = null);
    w.evts || (b._qevents.push = function () {
      v([].slice.call(arguments));
      L(f.slice(0));
      return [].push.apply(b._qevents, arguments)
    }, b.ezt.push = function () {
      v([].slice.call(arguments));
      L(f.slice(0));
      return [].push.apply(b.ezt, arguments)
    });
    v(b.ezt);
    v(b._qevents);
    v({qacct: b._qacct});
    b._qoptions = null;
    f.length ? L(f.slice(0)) : C();
    G = !0
  };
  b.quantserve = b.quantserve || R;
  w.quantserve = R;
  return w
}(window);
try {
  __qc("hasRules", "p-umLX_G7g1JnG8") || function (b, r, y) {
    try {
      __qc("defaults", b, {labels: "_fp.event.Default"})
    } catch (N) {
    }
    var G = function (b, h, f) {
      return b ? "nc" === b ? !h || !f || 0 > h.indexOf(f) : "eq" === b ? h === f : "sw" === b ? 0 === h.indexOf(f) : "ew" === b ? (b = h.length - f.length, h = h.lastIndexOf(f, b), -1 !== h && h === b) : "c" === b ? 0 <= h.indexOf(f) : !1 : !1
    }, F = function (b) {
      var h = y.createElement("a");
      h.href = b;
      return h
    }, A = function (b, h, f) {
      var s;
      s = r.top === r.self ? y.location.href : F(y.referrer).href;
      G(h, s, f) ? b(s) : b(!1)
    }, t = function (b) {
      return "array" === {}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase() ?
        {labels: b.join(",")} : {labels: "" + b}
    };
    __qc("rules", [b, null, [[t, "_fp.event.Better Connected World"]], [[A, "c", "better-connected-world/"]]], [b, null, [[t, "_fp.event.LGU"]], [[A, "c", "/lgu"]]], [b, null, [[t, "_fp.event.Telecom"]], [[A, "c", "/telecom"]]], [b, null, [[t, "_fp.event.Trends"]], [[A, "c", "trends"]]], [b, null, [[t, "_fp.event.Chinamerchants"]], [[A, "c", "chinamerchants"]]], [b, null, [[t, "_fp.event.Phoenix"]], [[A, "c", "phoenix"]]], [b, null, [[t, "_fp.event.Railway"]], [[A, "c", "railway"]]], [b, null, [[t, "_fp.event.Homepage"]],
      [[function (b, h, f) {
        var s;
        s = r.top === r.self ? y.location.pathname : F(y.referrer).pathname;
        G(h, s, f) ? b(s) : b(!1)
      }, "eq", "/"]]])
  }("p-umLX_G7g1JnG8", window, document)
} catch (nfe$$4) {
}
quantserve();
try {
  window.smarttagdata && window._qevents.push(window.smarttagdata), window.qcdata && window._qevents.push(window.qcdata)
} catch (nfe$$5) {
}
;