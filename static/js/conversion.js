(function () {
  var h = this, m = function (a) {
    return "string" == typeof a
  };
  var p = function (a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a
  };
  var q = p("0.20"), t = p("0.01");
  var u = /^true$/.test("true") ? !0 : !1;
  var v = Array.prototype.indexOf ? function (a, b, c) {
    return Array.prototype.indexOf.call(a, b, c)
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (m(a))return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return -1
  }, w = Array.prototype.filter ? function (a, b, c) {
    return Array.prototype.filter.call(a, b, c)
  } : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = m(a) ? a.split("") : a, k = 0; k < d; k++)if (k in g) {
      var l = g[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
    return e
  }, aa = Array.prototype.map ?
    function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
  }, ba = function (a) {
    return Array.prototype.concat.apply([], arguments)
  };
  var x = function (a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
  };
  var y = function (a) {
    y[" "](a);
    return a
  };
  y[" "] = function () {
  };
  var z = function (a, b) {
    for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
  };
  var ca = function () {
    this.h = {};
    this.a = {};
    for (var a = [2, 3], b = 0, c = a.length; b < c; ++b)this.a[a[b]] = ""
  }, A = function () {
    try {
      var a = h.top.location.hash;
      if (a) {
        var b = a.match(/\bdeid=([\d,]+)/);
        return b && b[1] || ""
      }
    } catch (c) {
    }
    return ""
  }, D = function (a, b, c) {
    var d = C;
    if (c ? d.a.hasOwnProperty(c) && "" == d.a[c] : 1) {
      var e;
      if (e = (e = A().match(new RegExp("\\b(" + a.join("|") + ")\\b"))) && e[0] || null) a = e; else a:{
        if (!(1E-4 > Math.random()) && (e = Math.random(), e < b)) {
          try {
            var f = new Uint32Array(1);
            h.crypto.getRandomValues(f);
            e = f[0] / 65536 / 65536
          } catch (g) {
            e =
              Math.random()
          }
          a = a[Math.floor(e * a.length)];
          break a
        }
        a = null
      }
      a && "" != a && (c ? d.a.hasOwnProperty(c) && (d.a[c] = a) : d.h[a] = !0)
    }
  }, E = function (a) {
    var b = C;
    return b.a.hasOwnProperty(a) ? b.a[a] : ""
  }, da = function () {
    var a = C, b = [];
    z(a.h, function (a, d) {
      b.push(d)
    });
    z(a.a, function (a) {
      "" != a && b.push(a)
    });
    return b
  };
  var F = {g: {c: "27391101", b: "27391102"}, f: {c: "376635470", b: "376635471"}}, C = null, ea = function () {
    var a = ba.apply([], aa(x(F), function (a) {
      return x(a)
    }, void 0)), b = w(A().split(","), function (b) {
      return "" != b && !(0 <= v(a, b))
    });
    return 0 < b.length ? "&debug_experiment_id=" + b.join(",") : ""
  };
  var G = function (a, b, c) {
    for (; 0 <= (b = a.indexOf("fmt", b)) && b < c;) {
      var d = a.charCodeAt(b - 1);
      if (38 == d || 63 == d)if (d = a.charCodeAt(b + 3), !d || 61 == d || 38 == d || 35 == d)return b;
      b += 4
    }
    return -1
  }, H = /#|$/, fa = /[?&]($|#)/;
  var I = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),
    J = ["google_conversion_first_time", "google_conversion_snippets"], K = function (a) {
      return null != a ? encodeURIComponent(a.toString()) : ""
    }, L = function (a) {
      return null != a ? a.toString().substring(0, 512) : ""
    }, M = function (a, b) {
      b = K(b);
      return "" != b && (a = K(a), "" != a) ? "&".concat(a, "=", b) : ""
    }, N = function (a) {
      var b = typeof a;
      return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }, ga = function (a) {
      if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
        var b =
          [];
        for (g in a)if (Object.prototype.hasOwnProperty.call(a, g)) {
          var c = a[g];
          if (c && "function" == typeof c.join) {
            for (var d = [], e = 0; e < c.length; ++e) {
              var f = N(c[e]);
              null != f && d.push(f)
            }
            c = d.length ? d.join(",") : null
          } else c = N(c);
          (d = N(g)) && null != c && b.push(d + "=" + c)
        }
        var g = b.join(";")
      } else g = "";
      return "" == g ? "" : "&".concat("data=", encodeURIComponent(g))
    };

  function O(a) {
    return "number" != typeof a && "string" != typeof a ? "" : K(a.toString())
  }

  var ha = function (a) {
    if (!a)return "";
    a = a.google_conversion_items;
    if (!a)return "";
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      var e = a[c], f = [];
      e && (f.push(O(e.value)), f.push(O(e.quantity)), f.push(O(e.item_id)), f.push(O(e.adwords_grouping)), f.push(O(e.sku)), b.push("(" + f.join("*") + ")"))
    }
    return 0 < b.length ? "&item=" + b.join("") : ""
  }, ia = function (a, b, c) {
    var d = [];
    if (a) {
      var e = a.screen;
      e && (d.push(M("u_h", e.height)), d.push(M("u_w", e.width)), d.push(M("u_ah", e.availHeight)), d.push(M("u_aw", e.availWidth)), d.push(M("u_cd", e.colorDepth)));
      a.history && d.push(M("u_his", a.history.length))
    }
    c && "function" == typeof c.getTimezoneOffset && d.push(M("u_tz", -c.getTimezoneOffset()));
    b && ("function" == typeof b.javaEnabled && d.push(M("u_java", b.javaEnabled())), b.plugins && d.push(M("u_nplug", b.plugins.length)), b.mimeTypes && d.push(M("u_nmime", b.mimeTypes.length)));
    return d.join("")
  };

  function ja(a) {
    a = a ? a.title : "";
    if (void 0 == a || "" == a)return "";
    var b = function (a) {
      try {
        return decodeURIComponent(a), !0
      } catch (e) {
        return !1
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; !b(a.substr(0, c));)c--;
    return "&tiba=" + a.substr(0, c)
  }

  var R = function (a, b, c, d) {
    var e = "";
    if (b) {
      if (a.top == a)var f = 0; else {
        var g = a.location.ancestorOrigins;
        if (g) f = g[g.length - 1] == a.location.origin ? 1 : 2; else {
          g = a.top;
          try {
            var k;
            if (k = !!g && null != g.location.href)c:{
              try {
                y(g.foo);
                k = !0;
                break c
              } catch (l) {
              }
              k = !1
            }
            f = k
          } catch (l) {
            f = !1
          }
          f = f ? 1 : 2
        }
      }
      a = c ? c : 1 == f ? a.top.location.href : a.location.href;
      e += M("frm", f);
      e += M("url", L(a));
      e += M("ref", L(d || b.referrer))
    }
    return e
  }, S = function (a, b) {
    return !(u || b && ka.test(navigator.userAgent)) || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ?
      "https:" : "http:"
  }, T = function (a, b, c) {
    c = c.google_remarketing_only ? "googleads.g.doubleclick.net" : c.google_conversion_domain || "www.googleadservices.com";
    return S(a, /www[.]googleadservices[.]com/i.test(c)) + "//" + c + "/pagead/" + b
  }, la = function (a, b, c, d) {
    var e = "/?";
    "landing" == d.google_conversion_type && (e = "/extclk?");
    var e = T(a, [d.google_remarketing_only ? "viewthroughconversion/" : "conversion/", K(d.google_conversion_id), e, "random=", K(d.google_conversion_time)].join(""), d);
    a:{
      var f = d.google_conversion_language;
      if (null !=
        f) {
        f = f.toString();
        if (2 == f.length) {
          f = M("hl", f);
          break a
        }
        if (5 == f.length) {
          f = M("hl", f.substring(0, 2)) + M("gl", f.substring(3, 5));
          break a
        }
      }
      f = ""
    }
    a = [M("cv", d.google_conversion_js_version), M("fst", d.google_conversion_first_time), M("num", d.google_conversion_snippets), M("fmt", d.google_conversion_format), M("value", d.google_conversion_value), M("currency_code", d.google_conversion_currency), M("label", d.google_conversion_label), M("oid", d.google_conversion_order_id), M("bg", d.google_conversion_color), f, M("guid", "ON"),
        M("disvt", d.google_disable_viewthrough), M("eid", da().join()), ha(d), ia(a, b, d.google_conversion_date), ga(d), R(a, c, d.google_conversion_page_url, d.google_conversion_referrer_url), d.google_remarketing_for_search && !d.google_conversion_domain ? "&srr=n" : "", ja(c)].join("") + ea();
    return e + a
  }, U = function (a, b, c, d, e, f) {
    return '<iframe name="' + a + '" title="' + b + '" width="' + d + '" height="' + e + '" src="' + c + '" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' :
        "") + ' scrolling="no"></iframe>'
  }, ma = function (a) {
    return {
      ar: 1,
      bg: 1,
      cs: 1,
      da: 1,
      de: 1,
      el: 1,
      en_AU: 1,
      en_US: 1,
      en_GB: 1,
      es: 1,
      et: 1,
      fi: 1,
      fr: 1,
      hi: 1,
      hr: 1,
      hu: 1,
      id: 1,
      is: 1,
      it: 1,
      iw: 1,
      ja: 1,
      ko: 1,
      lt: 1,
      nl: 1,
      no: 1,
      pl: 1,
      pt_BR: 1,
      pt_PT: 1,
      ro: 1,
      ru: 1,
      sk: 1,
      sl: 1,
      sr: 1,
      sv: 1,
      th: 1,
      tl: 1,
      tr: 1,
      vi: 1,
      zh_CN: 1,
      zh_TW: 1
    }[a] ? a + ".html" : "en_US.html"
  }, ka = /Android ([01]\.|2\.[01])/i, na = function (a, b) {
    if (!b.google_remarketing_only || !b.google_enable_display_cookie_match || (C ? E(2) : "") != F.f.b)return "";
    a = S(a, !1) + "//bid.g.doubleclick.net/xbbe/pixel?d=KAE";
    return U("google_cookie_match_frame", "Google cookie match frame", a, 1, 1, !0)
  }, V = function (a, b, c, d) {
    var e = "";
    d.google_remarketing_only && d.google_enable_display_cookie_match && (C && D([F.f.c, F.f.b], q, 2), e = na(a, d));
    3 != d.google_conversion_format || d.google_remarketing_only || d.google_conversion_domain || C && D([F.g.c, F.g.b], t, 3);
    b = la(a, b, c, d);
    var f = function (a, b, c, d) {
      return '<img height="' + c + '" width="' + b + '" border="0" alt="" src="' + a + '"' + (d ? ' style="display:none"' : "") + " />"
    };
    return 0 == d.google_conversion_format &&
    null == d.google_conversion_domain ? '<a href="' + (S(a, !1) + "//services.google.com/sitestats/" + ma(d.google_conversion_language) + "?cid=" + K(d.google_conversion_id)) + '" target="_blank">' + f(b, 135, 27, !1) + "</a>" + e : 1 < d.google_conversion_snippets || 3 == d.google_conversion_format ? oa(c, b) ? e : f(b, 1, 1, !0) + e : U("google_conversion_frame", "Google conversion frame", b, 2 == d.google_conversion_format ? 200 : 300, 2 == d.google_conversion_format ? 26 : 13, !1) + e
  };

  function pa() {
    return new Image
  }

  function oa(a, b) {
    if ((C ? E(3) : "") == F.g.b)try {
      var c = b.search(H), d = G(b, 0, c);
      if (0 > d)var e = null; else {
        var f = b.indexOf("&", d);
        if (0 > f || f > c) f = c;
        d += 4;
        e = decodeURIComponent(b.substr(d, f - d).replace(/\+/g, " "))
      }
      if (3 != e)var g = !1; else {
        var k = b.search(H);
        e = 0;
        for (var l, c = []; 0 <= (l = G(b, e, k));)c.push(b.substring(e, l)), e = Math.min(b.indexOf("&", l) + 1 || k, k);
        c.push(b.substr(e));
        var n = [c.join("").replace(fa, "$1"), "&", "fmt"];
        n.push("=", encodeURIComponent("4"));
        if (n[1]) {
          var r = n[0], B = r.indexOf("#");
          0 <= B && (n.push(r.substr(B)), n[0] =
            r = r.substr(0, B));
          var P = r.indexOf("?");
          0 > P ? n[1] = "?" : P == r.length - 1 && (n[1] = void 0)
        }
        var Q = a.createElement("script");
        Q.src = n.join("");
        a.getElementsByTagName("script")[0].parentElement.appendChild(Q);
        g = !0
      }
      return g
    } catch (za) {
    }
    return !1
  }

  var qa = function (a, b) {
    var c = a.opt_image_generator && a.opt_image_generator.call;
    b += M("async", "1");
    var d = pa;
    c && (d = a.opt_image_generator);
    a = d();
    a.src = b;
    a.onload = function () {
    }
  }, W = function (a, b, c) {
    var d = [K(c.google_conversion_id), "/?random=", Math.floor(1E9 * Math.random())].join("");
    d = S(a, !1) + "//www.google.com/ads/user-lists/" + d;
    d += [M("label", c.google_conversion_label), M("fmt", "3"), R(a, b, c.google_conversion_page_url, c.google_conversion_referrer_url)].join("");
    qa(c, d)
  }, ra = function (a, b) {
    for (var c = document.createElement("iframe"),
           d = [], e = [], f = 0; f < b.google_conversion_items.length; f++) {
      var g = b.google_conversion_items[f];
      g && g.quantity && g.sku && (d.push(g.sku), e.push(g.quantity))
    }
    a = S(a, !1) + "//www.google.com/ads/mrc";
    c.src = a + "?sku=" + d.join(",") + "&qty=" + e.join(",") + "&oid=" + b.google_conversion_order_id + "&mcid=" + b.google_conversion_merchant_id;
    c.style.width = "1px";
    c.style.height = "1px";
    c.style.display = "none";
    return c
  }, sa = function (a) {
    if ("landing" == a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough)return !1;
    a.google_conversion_date = new Date;
    a.google_conversion_time = a.google_conversion_date.getTime();
    a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
    "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
    a.google_conversion_js_version = "8";
    0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format =
      1);
    !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
    C = new ca;
    return !0
  }, ta = function (a) {
    for (var b = 0; b < I.length; b++)a[I[b]] = null
  }, ua = function (a) {
    for (var b = {}, c = 0; c < I.length; c++)b[I[c]] = a[I[c]];
    for (c = 0; c < J.length; c++)b[J[c]] = a[J[c]];
    return b
  }, va = function (a) {
    var b = document.getElementsByTagName("head")[0];
    b || (b = document.createElement("head"), document.getElementsByTagName("html")[0].insertBefore(b, document.getElementsByTagName("body")[0]));
    var c = document.createElement("script");
    c.src = T(window, "conversion_debug_overlay.js", a);
    b.appendChild(c)
  };
  var X = function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0
        }
      });
      h.addEventListener("test", null, b)
    } catch (c) {
    }
    return a
  }(), wa = function (a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, X ? void 0 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
  };
  var Y = function (a) {
    return {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
      }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
  }, xa = function (a) {
    var b;
    a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
    return b
  }, Z = function (a, b) {
    if (3 == Y(b))return !1;
    a();
    return !0
  }, ya = function (a, b) {
    if (!Z(a, b)) {
      var c = !1, d = xa(b), e = function () {
        if (!c && Z(a, b)) {
          c = !0;
          var f = e;
          b.removeEventListener ? b.removeEventListener(d, f, X ? void 0 :
            !1) : b.detachEvent && b.detachEvent("on" + d, f)
        }
      };
      d && wa(b, d, e)
    }
  };
  (function (a, b, c) {
    if (a)if (/[\?&;]google_debug/.exec(document.URL)) va(a); else {
      try {
        if (sa(a))if (3 == Y(c)) {
          var d = ua(a), e = "google_conversion_" + Math.floor(1E9 * Math.random());
          c.write('<span id="' + e + '"></span>');
          ya(function () {
            try {
              var f = c.getElementById(e);
              f && (f.innerHTML = V(a, b, c, d), d.google_remarketing_for_search && !d.google_conversion_domain && W(a, c, d))
            } catch (g) {
            }
          }, c)
        } else c.write(V(a, b, c, a)), a.google_remarketing_for_search && !a.google_conversion_domain && W(a, c, a);
        a.google_conversion_merchant_id && a.google_conversion_order_id &&
        a.google_conversion_items && c.documentElement.appendChild(ra(a, a))
      } catch (f) {
      }
      ta(a)
    }
  })(window, navigator, document);
}).call(this);
