// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {
  };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Place any jQuery/helper plugins in here.

/*! jquery.cookie v1.4.1 | MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function (a) {
  function b(a) {
    return h.raw ? a : encodeURIComponent(a)
  }

  function c(a) {
    return h.raw ? a : decodeURIComponent(a)
  }

  function d(a) {
    return b(h.json ? JSON.stringify(a) : String(a))
  }

  function e(a) {
    0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
    } catch (b) {
    }
  }

  function f(b, c) {
    var d = h.raw ? b : e(b);
    return a.isFunction(c) ? c(d) : d
  }

  var g = /\+/g, h = a.cookie = function (e, g, i) {
    if (void 0 !== g && !a.isFunction(g)) {
      if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
        var j = i.expires, k = i.expires = new Date;
        k.setTime(+k + 864e5 * j)
      }
      return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
    }
    for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
      var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
      if (e && e === q) {
        l = f(r, g);
        break
      }
      e || void 0 === (r = f(r)) || (l[q] = r)
    }
    return l
  };
  h.defaults = {}, a.removeCookie = function (b, c) {
    return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
  }
});

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.submit(function (b) {
        function d() {
          var d, e;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    }, valid: function () {
      var b, c;
      return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b
      })), b
    }, removeAttrs: function (b) {
      var c = {}, d = this;
      return a.each(b.split(/\s/), function (a, b) {
        c[b] = d.attr(b), d.removeAttr(b)
      }), c
    }, rules: function (b, c) {
      var d, e, f, g, h, i, j = this[0];
      if (b)switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case"add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;
        case"remove":
          return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
          }), i) : (delete e[j.name], f)
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val())
    }, filled: function (b) {
      return !!a.trim("" + a(b).val())
    }, unchecked: function (b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function (a, b) {
        (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
          e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      }, form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      }, checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
        return this.valid()
      }, element: function (b) {
        var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      }, showErrors: function (b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];
          for (var c in b)this.errorList.push({message: b[c], element: this.findByName(c)[0]});
          this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      }, resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
      }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      }, objectLength: function (a) {
        var b, c = 0;
        for (b in a)c++;
        return c
      }, hideErrors: function () {
        this.hideThese(this.toHide)
      }, hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      }, valid: function () {
        return 0 === this.size()
      }, size: function () {
        return this.errorList.length
      }, focusInvalid: function () {
        if (this.settings.focusInvalid)try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {
        }
      }, findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
            return a.element.name === b.name
          }).length && b
      }, elements: function () {
        var b = this, c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function () {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
      }, clean: function (b) {
        return a(b)[0]
      }, errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
      }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      }, prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a)
      }, elementValue: function (b) {
        var c, d = a(b), e = b.type;
        return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
      }, check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
          return b
        }).length, h = !1, i = this.elementValue(b);
        for (d in f) {
          e = {method: d, parameters: f[d]};
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c)return void(this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c)return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
          }
        }
        if (!h)return this.objectLength(f) && this.successList.push(b), !0
      }, customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      }, customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      }, findDefined: function () {
        for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a];
        return void 0
      }, defaultMessage: function (b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
      }, formatAndAdd: function (b, c) {
        var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
      }, addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      }, defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++)c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
        if (this.settings.unhighlight)for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
      }, invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element
        })
      }, showLabel: function (b, c) {
        var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
          c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
      }, errorsFor: function (b) {
        var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
      }, idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      }, validationTargetFor: function (b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
      }, checkable: function (a) {
        return /radio|checkbox/i.test(a.type)
      }, findByName: function (b) {
        return a(this.currentForm).find("[name='" + b + "']")
      }, getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case"select":
            return a("option:selected", c).length;
          case"input":
            if (this.checkable(c))return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      }, depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      }, dependTypes: {
        "boolean": function (a) {
          return a
        }, string: function (b, c) {
          return !!a(b, c.form).length
        }, "function": function (a, b) {
          return a(b)
        }
      }, optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      }, startRequest: function (a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
      }, stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      }, previousValue: function (b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(b, "remote")
          })
      }
    },
    classRuleSettings: {
      required: {required: !0},
      email: {email: !0},
      url: {url: !0},
      date: {date: !0},
      dateISO: {dateISO: !0},
      number: {number: !0},
      digits: {digits: !0},
      creditcard: {creditcard: !0}
    },
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function (b) {
      var c = {}, d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    attributeRules: function (b) {
      var c, d, e = {}, f = a(b), g = b.getAttribute("type");
      for (c in a.validator.methods)"required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function (b) {
      var c, d, e = {}, f = a(b);
      for (c in a.validator.methods)d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
      return e
    },
    staticRules: function (b) {
      var c = {}, d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1)return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case"string":
              f = !!a(e.depends, c.form).length;
              break;
            case"function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) ? e(c) : e
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c))return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
      }, email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      }, url: function (a, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
      }, date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      }, dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      }, number: function (a, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      }, digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      }, creditcard: function (a, b) {
        if (this.optional(b))return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a))return !1;
        var c, d, e = 0, f = 0, g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19)return !1;
        for (c = a.length - 1; c >= 0; c--)d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
      }, minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d
      }, maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e
      }, rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      }, min: function (a, b, c) {
        return this.optional(b) || a >= c
      }, max: function (a, b, c) {
        return this.optional(b) || c >= a
      }, range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      }, equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          a(c).valid()
        }), b === e.val()
      }, remote: function (b, c, d) {
        if (this.optional(c))return "dependency-mismatch";
        var e, f, g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          url: d,
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function (d) {
            var f, h, i, j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  }), a.format = function () {
    throw"$.format has been deprecated. Please use $.validator.format instead."
  };
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  }), a.extend(a.fn, {
    validateDelegate: function (b, c, d) {
      return this.bind(c, function (c) {
        var e = a(c.target);
        return e.is(b) ? d.apply(e, arguments) : void 0
      })
    }
  })
});

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
  "use strict";
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
  }

  function r(t) {
    var r = t.target, a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length)return;
      r = n[0]
    }
    var i = this;
    if (i.clk = r, "image" == r.type)if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
      var o = a.offset();
      i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
    } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null
    }, 100)
  }

  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
    }
  }

  var n = {};
  n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
  var i = !!e.fn.prop;
  e.fn.attr2 = function () {
    if (!i)return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
  }, e.fn.ajaxSubmit = function (t) {
    function r(r) {
      var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
      for (a = 0; o > a; a++)i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
      return s
    }

    function o(a) {
      for (var n = new FormData, i = 0; i < a.length; i++)n.append(a[i].name, a[i].value);
      if (t.extraData) {
        var o = r(t.extraData);
        for (i = 0; i < o.length; i++)o[i] && n.append(o[i][0], o[i][1])
      }
      t.data = null;
      var s = e.extend(!0, {}, e.ajaxSettings, t, {contentType: !1, processData: !1, cache: !1, type: u || "POST"});
      t.uploadProgress && (s.xhr = function () {
        var r = e.ajaxSettings.xhr();
        return r.upload && r.upload.addEventListener("progress", function (e) {
          var r = 0, a = e.loaded || e.position, n = e.total;
          e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
        }, !1), r
      }), s.data = null;
      var c = s.beforeSend;
      return s.beforeSend = function (e, r) {
        r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
      }, e.ajax(s)
    }

    function s(r) {
      function n(e) {
        var t = null;
        try {
          e.contentWindow && (t = e.contentWindow.document)
        } catch (r) {
          a("cannot get iframe.contentWindow document: " + r)
        }
        if (t)return t;
        try {
          t = e.contentDocument ? e.contentDocument : e.document
        } catch (r) {
          a("cannot get iframe.contentDocument: " + r), t = e.document
        }
        return t
      }

      function o() {
        function t() {
          try {
            var e = n(g).readyState;
            a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
          } catch (r) {
            a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
          }
        }

        var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
        w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), m.timeout && (j = setTimeout(function () {
          T = !0, s(D)
        }, m.timeout));
        var l = [];
        try {
          if (m.extraData)for (var d in m.extraData)m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
          m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
          try {
            w.submit()
          } catch (h) {
            var x = document.createElement("form").submit;
            x.apply(w)
          }
        } finally {
          w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
        }
      }

      function s(t) {
        if (!x.aborted && !F) {
          if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)return x.abort("timeout"), void S.reject(x, "timeout");
          if (t == k && x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
          if (M && M.location.href != m.iframeSrc || T) {
            g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
            var r, i = "success";
            try {
              if (T)throw"timeout";
              var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
              if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
              var u = M.body ? M.body : M.documentElement;
              x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                var t = {"content-type": m.dataType};
                return t[e.toLowerCase()]
              }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
              var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
              if (l || m.textarea) {
                var f = M.getElementsByTagName("textarea")[0];
                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                  var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                  p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                }
              } else"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
              try {
                E = _(x, c, m)
              } catch (y) {
                i = "parsererror", x.error = r = y || i
              }
            } catch (y) {
              a("error caught: ", y), i = "error", x.error = r = y || i
            }
            x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
              m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
            }, 100)
          }
        }
      }

      var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
      if (S.abort = function (e) {
          x.abort(e)
        }, r)for (l = 0; l < h.length; l++)c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
      if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
          position: "absolute",
          top: "-1000px",
          left: "-1000px"
        })), g = v[0], x = {
          aborted: 0,
          responseText: null,
          responseXML: null,
          status: 0,
          statusText: "n/a",
          getAllResponseHeaders: function () {
          },
          getResponseHeader: function () {
          },
          setRequestHeader: function () {
          },
          abort: function (t) {
            var r = "timeout" === t ? "timeout" : "aborted";
            a("aborting upload... " + r), this.aborted = 1;
            try {
              g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
            } catch (n) {
            }
            v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
          }
        }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)return m.global && e.active--, S.reject(), S;
      if (x.aborted)return S.reject(), S;
      y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
      var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
      L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
      var E, M, F, O = 50, X = e.parseXML || function (e, t) {
          return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
        }, C = e.parseJSON || function (e) {
          return window.eval("(" + e + ")")
        }, _ = function (t, r, a) {
        var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0, o = i ? t.responseXML : t.responseText;
        return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
      };
      return S
    }

    if (!this.length)return a("ajaxSubmit: skipping submit process - no element selected"), this;
    var u, c, l, f = this;
    "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
      url: l,
      success: e.ajaxSettings.success,
      type: u || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, t);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var d = t.traditional;
    void 0 === d && (d = e.ajaxSettings.traditional);
    var p, h = [], v = this.formToArray(t.semantic, h);
    if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var g = e.param(v, d);
    p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
    var x = [];
    if (t.resetForm && x.push(function () {
        f.resetForm()
      }), t.clearForm && x.push(function () {
        f.clearForm(t.includeHidden)
      }), !t.dataType && t.target) {
      var y = t.success || function () {
        };
      x.push(function (r) {
        var a = t.replaceTarget ? "replaceWith" : "html";
        e(t.target)[a](r).each(y, arguments)
      })
    } else t.success && x.push(t.success);
    if (t.success = function (e, r, a) {
        for (var n = t.context || this, i = 0, o = x.length; o > i; i++)x[i].apply(n, [e, r, a || f, f])
      }, t.error) {
      var b = t.error;
      t.error = function (e, r, a) {
        var n = t.context || this;
        b.apply(n, [e, r, a, f])
      }
    }
    if (t.complete) {
      var T = t.complete;
      t.complete = function (e, r) {
        var a = t.context || this;
        T.apply(a, [e, r, f])
      }
    }
    var j = e("input[type=file]:enabled", this).filter(function () {
      return "" !== e(this).val()
    }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
    a("fileAPI :" + k);
    var A, L = (w || D) && !k;
    t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      A = s(v)
    }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
    for (var E = 0; E < h.length; E++)h[E] = null;
    return this.trigger("form-submit-notify", [this, t]), this
  }, e.fn.ajaxForm = function (n) {
    if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var i = {s: this.selector, c: this.context};
      return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
        e(i.s, i.c).ajaxForm(n)
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
    }
    return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
  }, e.fn.ajaxFormUnbind = function () {
    return this.unbind("submit.form-plugin click.form-plugin")
  }, e.fn.formToArray = function (t, r) {
    var a = [];
    if (0 === this.length)return a;
    var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)return a;
    var c, l, f, m, d, p, h;
    for (c = 0, p = u.length; p > c; c++)if (d = u[c], f = d.name, f && !d.disabled)if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
      name: f,
      value: e(d).val(),
      type: d.type
    }), a.push({name: f + ".x", value: o.clk_x}, {
      name: f + ".y",
      value: o.clk_y
    })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array)for (r && r.push(d), l = 0, h = m.length; h > l; l++)a.push({
      name: f,
      value: m[l]
    }); else if (n.fileapi && "file" == d.type) {
      r && r.push(d);
      var v = d.files;
      if (v.length)for (l = 0; l < v.length; l++)a.push({name: f, value: v[l], type: d.type}); else a.push({
        name: f,
        value: "",
        type: d.type
      })
    } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
      name: f,
      value: m,
      type: d.type,
      required: d.required
    }));
    if (!t && o.clk) {
      var g = e(o.clk), x = g[0];
      f = x.name, f && !x.disabled && "image" == x.type && (a.push({name: f, value: g.val()}), a.push({
        name: f + ".x",
        value: o.clk_x
      }, {name: f + ".y", value: o.clk_y}))
    }
    return a
  }, e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t))
  }, e.fn.fieldSerialize = function (t) {
    var r = [];
    return this.each(function () {
      var a = this.name;
      if (a) {
        var n = e.fieldValue(this, t);
        if (n && n.constructor == Array)for (var i = 0, o = n.length; o > i; i++)r.push({
          name: a,
          value: n[i]
        }); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
      }
    }), e.param(r)
  }, e.fn.fieldValue = function (t) {
    for (var r = [], a = 0, n = this.length; n > a; a++) {
      var i = this[a], o = e.fieldValue(i, t);
      null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
    }
    return r
  }, e.fieldValue = function (t, r) {
    var a = t.name, n = t.type, i = t.tagName.toLowerCase();
    if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))return null;
    if ("select" == i) {
      var o = t.selectedIndex;
      if (0 > o)return null;
      for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];
        if (m.selected) {
          var d = m.value;
          if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)return d;
          s.push(d)
        }
      }
      return s
    }
    return e(t).val()
  }, e.fn.clearForm = function (t) {
    return this.each(function () {
      e("input,select,textarea", this).clearFields(t)
    })
  }, e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var a = this.type, n = this.tagName.toLowerCase();
      r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
    })
  }, e.fn.resetForm = function () {
    return this.each(function () {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
    })
  }, e.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e
    })
  }, e.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var r = this.type;
      if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
        var a = e(this).parent("select");
        t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
      }
    })
  }, e.fn.ajaxSubmit.debug = !1
});

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function (e) {
  var t, i, n, o, a, r, s, l, c, u, $, C, j, d = 0, f = {}, p = [], h = 0, m = {}, v = [], b = null, g = new Image, w = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, _ = /[^\.]\.(swf)\s*$/i, y = 1, x = 0, k = "", q = !1, T = e.extend(e("<div/>")[0], {prop: 0}), I = navigator.userAgent.match(/msie [6]/i) && !window.XMLHttpRequest, S = function () {
    i.hide(), g.onerror = g.onload = null, b && b.abort(), t.empty()
  }, F = function () {
    return !1 === f.onError(p, d, f) ? (i.hide(), void(q = !1)) : (f.titleShow = !1, f.width = "auto", f.height = "auto", t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), void R())
  }, P = function () {
    var o, a, s, l, c, u, n = p[d];
    if (S(), f = e.extend({}, e.fn.fancybox.defaults, "undefined" == typeof e(n).data("fancybox") ? f : e(n).data("fancybox")), u = f.onStart(p, d, f), u === !1)return void(q = !1);
    if ("object" == typeof u && (f = e.extend(f, u)), s = f.title || (n.nodeName ? e(n).attr("title") : n.title) || "", n.nodeName && !f.orig && (f.orig = e(n).children("img:first").length ? e(n).children("img:first") : e(n)), "" === s && f.orig && f.titleFromAlt && (s = f.orig.attr("alt")), o = f.href || (n.nodeName ? e(n).attr("href") : n.href) || null, (/^(?:javascript)/i.test(o) || "#" == o) && (o = null), f.type ? (a = f.type, o || (o = f.content)) : f.content ? a = "html" : o && (a = o.match(w) ? "image" : o.match(_) ? "swf" : e(n).hasClass("iframe") ? "iframe" : 0 === o.indexOf("#") ? "inline" : "ajax"), !a)return void F();
    switch ("inline" == a && (n = o.substr(o.indexOf("#")), a = e(n).length > 0 ? "inline" : "ajax"), f.type = a, f.href = o, f.title = s, f.autoDimensions && ("html" == f.type || "inline" == f.type || "ajax" == f.type ? (f.width = "auto", f.height = "auto") : f.autoDimensions = !1), f.modal && (f.overlayShow = !0, f.hideOnOverlayClick = !1, f.hideOnContentClick = !1, f.enableEscapeButton = !1, f.showCloseButton = !1), f.padding = parseInt(f.padding, 10), f.margin = parseInt(f.margin, 10), t.css("padding", f.padding + f.margin), e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
      e(this).replaceWith(r.children())
    }), a) {
      case"html":
        t.html(f.content), R();
        break;
      case"inline":
        if (e(n).parent().is("#fancybox-content") === !0)return void(q = !1);
        e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(n)).bind("fancybox-cleanup", function () {
          e(this).replaceWith(r.children())
        }).bind("fancybox-cancel", function () {
          e(this).replaceWith(t.children())
        }), e(n).appendTo(t), R();
        break;
      case"image":
        q = !1, e.fancybox.showActivity(), g = new Image, g.onerror = function () {
          F()
        }, g.onload = function () {
          q = !0, g.onerror = g.onload = null, E()
        }, g.src = o;
        break;
      case"swf":
        f.scrolling = "no", l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + f.width + '" height="' + f.height + '"><param name="movie" value="' + o + '"></param>', c = "", e.each(f.swf, function (e, t) {
          l += '<param name="' + e + '" value="' + t + '"></param>', c += " " + e + '="' + t + '"'
        }), l += '<embed src="' + o + '" type="application/x-shockwave-flash" width="' + f.width + '" height="' + f.height + '"' + c + "></embed></object>", t.html(l), R();
        break;
      case"ajax":
        q = !1, e.fancybox.showActivity(), f.ajax.win = f.ajax.success, b = e.ajax(e.extend({}, f.ajax, {
          url: o,
          data: f.ajax.data || {},
          error: function (e) {
            e.status > 0 && F()
          },
          success: function (e, n, a) {
            var r = "object" == typeof a ? a : b;
            if (200 == r.status) {
              if ("function" == typeof f.ajax.win) {
                if (u = f.ajax.win(o, e, n, a), u === !1)return void i.hide();
                ("string" == typeof u || "object" == typeof u) && (e = u)
              }
              t.html(e), R()
            }
          }
        }));
        break;
      case"iframe":
        A()
    }
  }, R = function () {
    var i = f.width, n = f.height;
    i = i.toString().indexOf("%") > -1 ? parseInt((e(window).width() - 2 * f.margin) * parseFloat(i) / 100, 10) + "px" : "auto" == i ? "auto" : i + "px", n = n.toString().indexOf("%") > -1 ? parseInt((e(window).height() - 2 * f.margin) * parseFloat(n) / 100, 10) + "px" : "auto" == n ? "auto" : n + "px", t.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == f.scrolling ? "auto" : "yes" == f.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'), f.width = t.width(), f.height = t.height(), A()
  }, E = function () {
    f.width = g.width, f.height = g.height, e("<img />").attr({
      id: "fancybox-img",
      src: g.src,
      alt: f.title
    }).appendTo(t), A()
  }, A = function () {
    var a, b;
    return i.hide(), o.is(":visible") && !1 === m.onCleanup(v, h, m) ? (e(".fancybox-inline-tmp").trigger("fancybox-cancel"), void(q = !1)) : (q = !0, e(r.add(n)).unbind(), e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), o.is(":visible") && "outside" !== m.titlePosition && o.css("height", o.height()), v = p, h = d, m = f, m.overlayShow ? (n.css({
      "background-color": m.overlayColor,
      opacity: m.overlayOpacity,
      cursor: m.hideOnOverlayClick ? "pointer" : "auto",
      height: e(document).height()
    }), n.is(":visible") || (I && e("select:not(#fancybox-tmp select)").filter(function () {
      return "hidden" !== this.style.visibility
    }).css({visibility: "hidden"}).one("fancybox-cleanup", function () {
      this.style.visibility = "inherit"
    }), n.show())) : n.hide(), j = z(), O(), o.is(":visible") ? (e(s.add(c).add(u)).hide(), a = o.position(), C = {
      top: a.top,
      left: a.left,
      width: o.width(),
      height: o.height()
    }, b = C.width == j.width && C.height == j.height, void r.fadeTo(m.changeFade, .3, function () {
      var i = function () {
        r.html(t.contents()).fadeTo(m.changeFade, 1, B)
      };
      e(".fancybox-inline-tmp").trigger("fancybox-change"), r.empty().removeAttr("filter").css({
        "border-width": m.padding,
        width: j.width - 2 * m.padding,
        height: f.autoDimensions ? "auto" : j.height - x - 2 * m.padding
      }), b ? i() : (T.prop = 0, e(T).animate({prop: 1}, {
        duration: m.changeSpeed,
        easing: m.easingChange,
        step: U,
        complete: i
      }))
    })) : (o.removeAttr("style"), r.css("border-width", m.padding), "elastic" == m.transitionIn ? (C = Q(), r.html(t.contents()), o.show(), m.opacity && (j.opacity = 0), T.prop = 0, void e(T).animate({prop: 1}, {
      duration: m.speedIn,
      easing: m.easingIn,
      step: U,
      complete: B
    })) : ("inside" == m.titlePosition && x > 0 && l.show(), r.css({
      width: j.width - 2 * m.padding,
      height: f.autoDimensions ? "auto" : j.height - x - 2 * m.padding
    }).html(t.contents()), void o.css(j).fadeIn("none" == m.transitionIn ? 0 : m.speedIn, B))))
  }, M = function (e) {
    return e && e.length ? "float" == m.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + e + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + m.titlePosition + '">' + e + "</div>" : !1
  }, O = function () {
    if (k = m.title || "", x = 0, l.empty().removeAttr("style").removeClass(), m.titleShow === !1)return void l.hide();
    if (k = e.isFunction(m.titleFormat) ? m.titleFormat(k, v, h, m) : M(k), !k || "" === k)return void l.hide();
    switch (l.addClass("fancybox-title-" + m.titlePosition).html(k).appendTo("body").show(), m.titlePosition) {
      case"inside":
        l.css({
          width: j.width - 2 * m.padding,
          marginLeft: m.padding,
          marginRight: m.padding
        }), x = l.outerHeight(!0), l.appendTo(a), j.height += x;
        break;
      case"over":
        l.css({marginLeft: m.padding, width: j.width - 2 * m.padding, bottom: m.padding}).appendTo(a);
        break;
      case"float":
        l.css("left", -1 * parseInt((l.width() - j.width - 40) / 2, 10)).appendTo(o);
        break;
      default:
        l.css({width: j.width - 2 * m.padding, paddingLeft: m.padding, paddingRight: m.padding}).appendTo(o)
    }
    l.hide()
  }, N = function () {
    return (m.enableEscapeButton || m.enableKeyboardNav) && e(document).bind("keydown.fb", function (t) {
      27 == t.keyCode && m.enableEscapeButton ? (t.preventDefault(), e.fancybox.close()) : 37 != t.keyCode && 39 != t.keyCode || !m.enableKeyboardNav || "INPUT" === t.target.tagName || "TEXTAREA" === t.target.tagName || "SELECT" === t.target.tagName || (t.preventDefault(), e.fancybox[37 == t.keyCode ? "prev" : "next"]())
    }), m.showNavArrows ? ((m.cyclic && v.length > 1 || 0 !== h) && c.show(), void((m.cyclic && v.length > 1 || h != v.length - 1) && u.show())) : (c.hide(), void u.hide())
  }, B = function () {
    e.support.opacity || (r.get(0).style.removeAttribute("filter"), o.get(0).style.removeAttribute("filter")), f.autoDimensions && r.css("height", "auto"), o.css("height", "auto"), k && k.length && l.show(), m.showCloseButton && s.show(), N(), m.hideOnContentClick && r.bind("click", e.fancybox.close), m.hideOnOverlayClick && n.bind("click", e.fancybox.close), e(window).bind("resize.fb", e.fancybox.resize), m.centerOnScroll && e(window).bind("scroll.fb", e.fancybox.center), "iframe" == m.type && e('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (navigator.userAgent.match(/msie [6]/i) ? 'allowtransparency="true""' : "") + ' scrolling="' + f.scrolling + '" src="' + m.href + '"></iframe>').appendTo(r), o.show(), q = !1, e.fancybox.center(), m.onComplete(v, h, m), D()
  }, D = function () {
    var e, t;
    v.length - 1 > h && (e = v[h + 1].href, "undefined" != typeof e && e.match(w) && (t = new Image, t.src = e)), h > 0 && (e = v[h - 1].href, "undefined" != typeof e && e.match(w) && (t = new Image, t.src = e))
  }, U = function (e) {
    var t = {
      width: parseInt(C.width + (j.width - C.width) * e, 10),
      height: parseInt(C.height + (j.height - C.height) * e, 10),
      top: parseInt(C.top + (j.top - C.top) * e, 10),
      left: parseInt(C.left + (j.left - C.left) * e, 10)
    };
    "undefined" != typeof j.opacity && (t.opacity = .5 > e ? .5 : e), o.css(t), r.css({
      width: t.width - 2 * m.padding,
      height: t.height - x * e - 2 * m.padding
    })
  }, H = function () {
    return [e(window).width() - 2 * m.margin, e(window).height() - 2 * m.margin, e(document).scrollLeft() + m.margin, e(document).scrollTop() + m.margin]
  }, z = function () {
    var o, e = H(), t = {}, i = m.autoScale, n = 2 * m.padding;
    return t.width = m.width.toString().indexOf("%") > -1 ? parseInt(e[0] * parseFloat(m.width) / 100, 10) : m.width + n, t.height = m.height.toString().indexOf("%") > -1 ? parseInt(e[1] * parseFloat(m.height) / 100, 10) : m.height + n, i && (t.width > e[0] || t.height > e[1]) && ("image" == f.type || "swf" == f.type ? (o = m.width / m.height, t.width > e[0] && (t.width = e[0], t.height = parseInt((t.width - n) / o + n, 10)), t.height > e[1] && (t.height = e[1], t.width = parseInt((t.height - n) * o + n, 10))) : (t.width = Math.min(t.width, e[0]), t.height = Math.min(t.height, e[1]))), t.top = parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - t.height - 40)), 10), t.left = parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - t.width - 40)), 10), t
  }, L = function (e) {
    var t = e.offset();
    return t.top += parseInt(e.css("paddingTop"), 10) || 0, t.left += parseInt(e.css("paddingLeft"), 10) || 0, t.top += parseInt(e.css("border-top-width"), 10) || 0, t.left += parseInt(e.css("border-left-width"), 10) || 0, t.width = e.width(), t.height = e.height(), t
  }, Q = function () {
    var n, o, t = f.orig ? e(f.orig) : !1, i = {};
    return t && t.length ? (n = L(t), i = {
      width: n.width + 2 * m.padding,
      height: n.height + 2 * m.padding,
      top: n.top - m.padding - 20,
      left: n.left - m.padding - 20
    }) : (o = H(), i = {
      width: 2 * m.padding,
      height: 2 * m.padding,
      top: parseInt(o[3] + .5 * o[1], 10),
      left: parseInt(o[2] + .5 * o[0], 10)
    }), i
  }, W = function () {
    return i.is(":visible") ? (e("div", i).css("top", -40 * y + "px"), void(y = (y + 1) % 12)) : void clearInterval($)
  };
  e.fn.fancybox = function (t) {
    return e(this).length ? (e(this).data("fancybox", e.extend({}, t, e.metadata ? e(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (t) {
      if (t.preventDefault(), !q) {
        q = !0, e(this).blur(), p = [], d = 0;
        var i = e(this).attr("rel") || "";
        i && "" != i && "nofollow" !== i ? (p = e("a[rel=" + i + "], area[rel=" + i + "]"), d = p.index(this)) : p.push(this), P()
      }
    }), this) : this
  }, e.fancybox = function (t) {
    var i;
    if (!q) {
      if (q = !0, i = "undefined" != typeof arguments[1] ? arguments[1] : {}, p = [], d = parseInt(i.index, 10) || 0, e.isArray(t)) {
        for (var n = 0, o = t.length; o > n; n++)"object" == typeof t[n] ? e(t[n]).data("fancybox", e.extend({}, i, t[n])) : t[n] = e({}).data("fancybox", e.extend({content: t[n]}, i));
        p = jQuery.merge(p, t)
      } else"object" == typeof t ? e(t).data("fancybox", e.extend({}, i, t)) : t = e({}).data("fancybox", e.extend({content: t}, i)), p.push(t);
      (d > p.length || 0 > d) && (d = 0), P()
    }
  }, e.fancybox.showActivity = function () {
    clearInterval($), i.show(), $ = setInterval(W, 66)
  }, e.fancybox.hideActivity = function () {
    i.hide()
  }, e.fancybox.next = function () {
    return e.fancybox.pos(h + 1)
  }, e.fancybox.prev = function () {
    return e.fancybox.pos(h - 1)
  }, e.fancybox.pos = function (e) {
    q || (e = parseInt(e), p = v, e > -1 && e < v.length ? (d = e, P()) : m.cyclic && v.length > 1 && (d = e >= v.length ? 0 : v.length - 1, P()))
  }, e.fancybox.cancel = function () {
    q || (q = !0, e(".fancybox-inline-tmp").trigger("fancybox-cancel"), S(), f.onCancel(p, d, f), q = !1)
  }, e.fancybox.close = function () {
    function t() {
      n.fadeOut("fast"), l.empty().hide(), o.hide(), e(".fancybox-inline-tmp, select:not(#fancybox-tmp select)").trigger("fancybox-cleanup"), r.empty(), m.onClosed(v, h, m), v = f = [], h = d = 0, m = f = {}, q = !1
    }

    if (!q && !o.is(":hidden")) {
      if (q = !0, m && !1 === m.onCleanup(v, h, m))return void(q = !1);
      if (S(), e(s.add(c).add(u)).hide(), e(r.add(n)).unbind(), e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), r.find("iframe").attr("src", I && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), "inside" !== m.titlePosition && l.empty(), o.stop(), "elastic" == m.transitionOut) {
        C = Q();
        var i = o.position();
        j = {
          top: i.top,
          left: i.left,
          width: o.width(),
          height: o.height()
        }, m.opacity && (j.opacity = 1), l.empty().hide(), T.prop = 1, e(T).animate({prop: 0}, {
          duration: m.speedOut,
          easing: m.easingOut,
          step: U,
          complete: t
        })
      } else o.fadeOut("none" == m.transitionOut ? 0 : m.speedOut, t)
    }
  }, e.fancybox.resize = function () {
    n.is(":visible") && n.css("height", e(document).height()), e.fancybox.center(!0)
  }, e.fancybox.center = function () {
    var e, t;
    q || (t = arguments[0] === !0 ? 1 : 0, e = H(), (t || !(o.width() > e[0] || o.height() > e[1])) && o.stop().animate({
      top: parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - r.height() - 40) - m.padding)),
      left: parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - r.width() - 40) - m.padding))
    }, "number" == typeof arguments[0] ? arguments[0] : 200))
  }, e.fancybox.init = function () {
    e("#fancybox-wrap").length || (e("body").append(t = e('<div id="fancybox-tmp"></div>'), i = e('<div id="fancybox-loading"><div></div></div>'), n = e('<div id="fancybox-overlay"></div>'), o = e('<div id="fancybox-wrap"></div>')), a = e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(o), a.append(r = e('<div id="fancybox-content"></div>'), s = e('<a id="fancybox-close"></a>'), l = e('<div id="fancybox-title"></div>'), c = e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), u = e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), s.click(e.fancybox.close), i.click(e.fancybox.cancel), c.click(function (t) {
      t.preventDefault(), e.fancybox.prev()
    }), u.click(function (t) {
      t.preventDefault(), e.fancybox.next()
    }), e.fn.mousewheel && o.bind("mousewheel.fb", function (t, i) {
      q ? t.preventDefault() : (0 == e(t.target).get(0).clientHeight || e(t.target).get(0).scrollHeight === e(t.target).get(0).clientHeight) && (t.preventDefault(), e.fancybox[i > 0 ? "prev" : "next"]())
    }), e.support.opacity || o.addClass("fancybox-ie"), I && (i.addClass("fancybox-ie6"), o.addClass("fancybox-ie6"), e('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(a)))
  }, e.fn.fancybox.defaults = {
    padding: 10,
    margin: 40,
    opacity: !1,
    modal: !1,
    cyclic: !1,
    scrolling: "auto",
    width: 560,
    height: 340,
    autoScale: !0,
    autoDimensions: !0,
    centerOnScroll: !1,
    ajax: {},
    swf: {wmode: "transparent"},
    hideOnOverlayClick: !0,
    hideOnContentClick: !1,
    overlayShow: !0,
    overlayOpacity: .7,
    overlayColor: "#777",
    titleShow: !0,
    titlePosition: "float",
    titleFormat: null,
    titleFromAlt: !1,
    transitionIn: "fade",
    transitionOut: "fade",
    speedIn: 300,
    speedOut: 300,
    changeSpeed: 300,
    changeFade: "fast",
    easingIn: "swing",
    easingOut: "swing",
    showCloseButton: !0,
    showNavArrows: !0,
    enableEscapeButton: !0,
    enableKeyboardNav: !0,
    onStart: function () {
    },
    onCancel: function () {
    },
    onComplete: function () {
    },
    onCleanup: function () {
    },
    onClosed: function () {
    },
    onError: function () {
    }
  }, e(document).ready(function () {
    e.fancybox.init()
  })
}(jQuery);

/* jQuery.qrcode 0.12.0 - http://larsjung.de/jquery-qrcode/ - uses //github.com/kazuhikoarase/qrcode-generator (MIT) */
!function (r) {
  "use strict";
  function t(t, e, n, o) {
    function i(r, t) {
      return r -= o, t -= o, 0 > r || r >= u || 0 > t || t >= u ? !1 : a.isDark(r, t)
    }

    var a = r(n, e);
    a.addData(t), a.make(), o = o || 0;
    var u = a.getModuleCount(), f = a.getModuleCount() + 2 * o, c = function (r, t, e, n) {
      var o = this.isDark, i = 1 / f;
      this.isDark = function (a, u) {
        var f = u * i, c = a * i, l = f + i, g = c + i;
        return o(a, u) && (r > l || f > e || t > g || c > n)
      }
    };
    this.text = t, this.level = e, this.version = n, this.moduleCount = f, this.isDark = i, this.addBlank = c
  }

  function e(r, e, n, o, i) {
    n = Math.max(1, n || 1), o = Math.min(40, o || 40);
    for (var a = n; o >= a; a += 1)try {
      return new t(r, e, a, i)
    } catch (u) {
    }
  }

  function n(r, t, e) {
    var n = e.size, o = "bold " + e.mSize * n + "px " + e.fontname, i = w("<canvas/>")[0].getContext("2d");
    i.font = o;
    var a = i.measureText(e.label).width, u = e.mSize, f = a / n, c = (1 - f) * e.mPosX, l = (1 - u) * e.mPosY, g = c + f, s = l + u, h = .01;
    1 === e.mode ? r.addBlank(0, l - h, n, s + h) : r.addBlank(c - h, l - h, g + h, s + h), t.fillStyle = e.fontcolor, t.font = o, t.fillText(e.label, c * n, l * n + .75 * e.mSize * n)
  }

  function o(r, t, e) {
    var n = e.size, o = e.image.naturalWidth || 1, i = e.image.naturalHeight || 1, a = e.mSize, u = a * o / i, f = (1 - u) * e.mPosX, c = (1 - a) * e.mPosY, l = f + u, g = c + a, s = .01;
    3 === e.mode ? r.addBlank(0, c - s, n, g + s) : r.addBlank(f - s, c - s, l + s, g + s), t.drawImage(e.image, f * n, c * n, u * n, a * n)
  }

  function i(r, t, e) {
    w(e.background).is("img") ? t.drawImage(e.background, 0, 0, e.size, e.size) : e.background && (t.fillStyle = e.background, t.fillRect(e.left, e.top, e.size, e.size));
    var i = e.mode;
    1 === i || 2 === i ? n(r, t, e) : (3 === i || 4 === i) && o(r, t, e)
  }

  function a(r, t, e, n, o, i, a, u) {
    r.isDark(a, u) && t.rect(n, o, i, i)
  }

  function u(r, t, e, n, o, i, a, u, f, c) {
    a ? r.moveTo(t + i, e) : r.moveTo(t, e), u ? (r.lineTo(n - i, e), r.arcTo(n, e, n, o, i)) : r.lineTo(n, e), f ? (r.lineTo(n, o - i), r.arcTo(n, o, t, o, i)) : r.lineTo(n, o), c ? (r.lineTo(t + i, o), r.arcTo(t, o, t, e, i)) : r.lineTo(t, o), a ? (r.lineTo(t, e + i), r.arcTo(t, e, n, e, i)) : r.lineTo(t, e)
  }

  function f(r, t, e, n, o, i, a, u, f, c) {
    a && (r.moveTo(t + i, e), r.lineTo(t, e), r.lineTo(t, e + i), r.arcTo(t, e, t + i, e, i)), u && (r.moveTo(n - i, e), r.lineTo(n, e), r.lineTo(n, e + i), r.arcTo(n, e, n - i, e, i)), f && (r.moveTo(n - i, o), r.lineTo(n, o), r.lineTo(n, o - i), r.arcTo(n, o, n - i, o, i)), c && (r.moveTo(t + i, o), r.lineTo(t, o), r.lineTo(t, o - i), r.arcTo(t, o, t + i, o, i))
  }

  function c(r, t, e, n, o, i, a, c) {
    var l = r.isDark, g = n + i, s = o + i, h = e.radius * i, v = a - 1, d = a + 1, w = c - 1, m = c + 1, p = l(a, c), y = l(v, w), T = l(v, c), B = l(v, m), A = l(a, m), E = l(d, m), k = l(d, c), M = l(d, w), C = l(a, w);
    p ? u(t, n, o, g, s, h, !T && !C, !T && !A, !k && !A, !k && !C) : f(t, n, o, g, s, h, T && C && y, T && A && B, k && A && E, k && C && M)
  }

  function l(r, t, e) {
    var n, o, i = r.moduleCount, u = e.size / i, f = a;
    for (p && e.radius > 0 && e.radius <= .5 && (f = c), t.beginPath(), n = 0; i > n; n += 1)for (o = 0; i > o; o += 1) {
      var l = e.left + o * u, g = e.top + n * u, s = u;
      f(r, t, e, l, g, s, n, o)
    }
    if (w(e.fill).is("img")) {
      t.strokeStyle = "rgba(0,0,0,0.5)", t.lineWidth = 2, t.stroke();
      var h = t.globalCompositeOperation;
      t.globalCompositeOperation = "destination-out", t.fill(), t.globalCompositeOperation = h, t.clip(), t.drawImage(e.fill, 0, 0, e.size, e.size), t.restore()
    } else t.fillStyle = e.fill, t.fill()
  }

  function g(r, t) {
    var n = e(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
    if (!n)return null;
    var o = w(r).data("qrcode", n), a = o[0].getContext("2d");
    return i(n, a, t), l(n, a, t), o
  }

  function s(r) {
    var t = w("<canvas/>").attr("width", r.size).attr("height", r.size);
    return g(t, r)
  }

  function h(r) {
    return w("<img/>").attr("src", s(r)[0].toDataURL("image/png"))
  }

  function v(r) {
    var t = e(r.text, r.ecLevel, r.minVersion, r.maxVersion, r.quiet);
    if (!t)return null;
    var n, o, i = r.size, a = r.background, u = Math.floor, f = t.moduleCount, c = u(i / f), l = u(.5 * (i - c * f)), g = {
      position: "relative",
      left: 0,
      top: 0,
      padding: 0,
      margin: 0,
      width: i,
      height: i
    }, s = {
      position: "absolute",
      padding: 0,
      margin: 0,
      width: c,
      height: c,
      "background-color": r.fill
    }, h = w("<div/>").data("qrcode", t).css(g);
    for (a && h.css("background-color", a), n = 0; f > n; n += 1)for (o = 0; f > o; o += 1)t.isDark(n, o) && w("<div/>").css(s).css({
      left: l + o * c,
      top: l + n * c
    }).appendTo(h);
    return h
  }

  function d(r) {
    return m && "canvas" === r.render ? s(r) : m && "image" === r.render ? h(r) : v(r)
  }

  var w = jQuery, m = function () {
    var r = document.createElement("canvas");
    return Boolean(r.getContext && r.getContext("2d"))
  }(), p = "[object Opera]" !== Object.prototype.toString.call(window.opera), y = {
    render: "canvas",
    minVersion: 1,
    maxVersion: 40,
    ecLevel: "L",
    left: 0,
    top: 0,
    size: 200,
    fill: "#000",
    background: null,
    text: "no text",
    radius: 0,
    quiet: 0,
    mode: 0,
    mSize: .1,
    mPosX: .5,
    mPosY: .5,
    label: "no label",
    fontname: "sans",
    fontcolor: "#000",
    image: null
  };
  w.fn.qrcode = function (r) {
    var t = w.extend({}, y, r);
    return this.each(function () {
      "canvas" === this.nodeName.toLowerCase() ? g(this, t) : w(this).append(d(t))
    })
  }
}(function () {
  var r = function () {
    function r(t, e) {
      if ("undefined" == typeof t.length)throw new Error(t.length + "/" + e);
      var n = function () {
        for (var r = 0; r < t.length && 0 == t[r];)r += 1;
        for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1)n[o] = t[o + r];
        return n
      }(), o = {};
      return o.getAt = function (r) {
        return n[r]
      }, o.getLength = function () {
        return n.length
      }, o.multiply = function (t) {
        for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1)for (var i = 0; i < t.getLength(); i += 1)e[n + i] ^= a.gexp(a.glog(o.getAt(n)) + a.glog(t.getAt(i)));
        return r(e, 0)
      }, o.mod = function (t) {
        if (o.getLength() - t.getLength() < 0)return o;
        for (var e = a.glog(o.getAt(0)) - a.glog(t.getAt(0)), n = new Array(o.getLength()), i = 0; i < o.getLength(); i += 1)n[i] = o.getAt(i);
        for (var i = 0; i < t.getLength(); i += 1)n[i] ^= a.gexp(a.glog(t.getAt(i)) + e);
        return r(n, 0).mod(t)
      }, o
    }

    var t = function (t, e) {
      var o = 236, a = 17, l = t, g = n[e], s = null, h = 0, d = null, w = new Array, m = {}, p = function (r, t) {
        h = 4 * l + 17, s = function (r) {
          for (var t = new Array(r), e = 0; r > e; e += 1) {
            t[e] = new Array(r);
            for (var n = 0; r > n; n += 1)t[e][n] = null
          }
          return t
        }(h), y(0, 0), y(h - 7, 0), y(0, h - 7), A(), B(), k(r, t), l >= 7 && E(r), null == d && (d = D(l, g, w)), M(d, t)
      }, y = function (r, t) {
        for (var e = -1; 7 >= e; e += 1)if (!(-1 >= r + e || r + e >= h))for (var n = -1; 7 >= n; n += 1)-1 >= t + n || t + n >= h || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? s[r + e][t + n] = !0 : s[r + e][t + n] = !1)
      }, T = function () {
        for (var r = 0, t = 0, e = 0; 8 > e; e += 1) {
          p(!0, e);
          var n = i.getLostPoint(m);
          (0 == e || r > n) && (r = n, t = e)
        }
        return t
      }, B = function () {
        for (var r = 8; h - 8 > r; r += 1)null == s[r][6] && (s[r][6] = r % 2 == 0);
        for (var t = 8; h - 8 > t; t += 1)null == s[6][t] && (s[6][t] = t % 2 == 0)
      }, A = function () {
        for (var r = i.getPatternPosition(l), t = 0; t < r.length; t += 1)for (var e = 0; e < r.length; e += 1) {
          var n = r[t], o = r[e];
          if (null == s[n][o])for (var a = -2; 2 >= a; a += 1)for (var u = -2; 2 >= u; u += 1)-2 == a || 2 == a || -2 == u || 2 == u || 0 == a && 0 == u ? s[n + a][o + u] = !0 : s[n + a][o + u] = !1
        }
      }, E = function (r) {
        for (var t = i.getBCHTypeNumber(l), e = 0; 18 > e; e += 1) {
          var n = !r && 1 == (t >> e & 1);
          s[Math.floor(e / 3)][e % 3 + h - 8 - 3] = n
        }
        for (var e = 0; 18 > e; e += 1) {
          var n = !r && 1 == (t >> e & 1);
          s[e % 3 + h - 8 - 3][Math.floor(e / 3)] = n
        }
      }, k = function (r, t) {
        for (var e = g << 3 | t, n = i.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
          var a = !r && 1 == (n >> o & 1);
          6 > o ? s[o][8] = a : 8 > o ? s[o + 1][8] = a : s[h - 15 + o][8] = a
        }
        for (var o = 0; 15 > o; o += 1) {
          var a = !r && 1 == (n >> o & 1);
          8 > o ? s[8][h - o - 1] = a : 9 > o ? s[8][15 - o - 1 + 1] = a : s[8][15 - o - 1] = a
        }
        s[h - 8][8] = !r
      }, M = function (r, t) {
        for (var e = -1, n = h - 1, o = 7, a = 0, u = i.getMaskFunction(t), f = h - 1; f > 0; f -= 2)for (6 == f && (f -= 1); ;) {
          for (var c = 0; 2 > c; c += 1)if (null == s[n][f - c]) {
            var l = !1;
            a < r.length && (l = 1 == (r[a] >>> o & 1));
            var g = u(n, f - c);
            g && (l = !l), s[n][f - c] = l, o -= 1, -1 == o && (a += 1, o = 7)
          }
          if (n += e, 0 > n || n >= h) {
            n -= e, e = -e;
            break
          }
        }
      }, C = function (t, e) {
        for (var n = 0, o = 0, a = 0, u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
          var l = e[c].dataCount, g = e[c].totalCount - l;
          o = Math.max(o, l), a = Math.max(a, g), u[c] = new Array(l);
          for (var s = 0; s < u[c].length; s += 1)u[c][s] = 255 & t.getBuffer()[s + n];
          n += l;
          var h = i.getErrorCorrectPolynomial(g), v = r(u[c], h.getLength() - 1), d = v.mod(h);
          f[c] = new Array(h.getLength() - 1);
          for (var s = 0; s < f[c].length; s += 1) {
            var w = s + d.getLength() - f[c].length;
            f[c][s] = w >= 0 ? d.getAt(w) : 0
          }
        }
        for (var m = 0, s = 0; s < e.length; s += 1)m += e[s].totalCount;
        for (var p = new Array(m), y = 0, s = 0; o > s; s += 1)for (var c = 0; c < e.length; c += 1)s < u[c].length && (p[y] = u[c][s], y += 1);
        for (var s = 0; a > s; s += 1)for (var c = 0; c < e.length; c += 1)s < f[c].length && (p[y] = f[c][s], y += 1);
        return p
      }, D = function (r, t, e) {
        for (var n = u.getRSBlocks(r, t), c = f(), l = 0; l < e.length; l += 1) {
          var g = e[l];
          c.put(g.getMode(), 4), c.put(g.getLength(), i.getLengthInBits(g.getMode(), r)), g.write(c)
        }
        for (var s = 0, l = 0; l < n.length; l += 1)s += n[l].dataCount;
        if (c.getLengthInBits() > 8 * s)throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * s + ")");
        for (c.getLengthInBits() + 4 <= 8 * s && c.put(0, 4); c.getLengthInBits() % 8 != 0;)c.putBit(!1);
        for (; ;) {
          if (c.getLengthInBits() >= 8 * s)break;
          if (c.put(o, 8), c.getLengthInBits() >= 8 * s)break;
          c.put(a, 8)
        }
        return C(c, n)
      };
      return m.addData = function (r) {
        var t = c(r);
        w.push(t), d = null
      }, m.isDark = function (r, t) {
        if (0 > r || r >= h || 0 > t || t >= h)throw new Error(r + "," + t);
        return s[r][t]
      }, m.getModuleCount = function () {
        return h
      }, m.make = function () {
        p(!1, T())
      }, m.createTableTag = function (r, t) {
        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
        var e = "";
        e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + t + "px;", e += '">', e += "<tbody>";
        for (var n = 0; n < m.getModuleCount(); n += 1) {
          e += "<tr>";
          for (var o = 0; o < m.getModuleCount(); o += 1)e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + r + "px;", e += " height: " + r + "px;", e += " background-color: ", e += m.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
          e += "</tr>"
        }
        return e += "</tbody>", e += "</table>"
      }, m.createImgTag = function (r, t) {
        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
        var e = m.getModuleCount() * r + 2 * t, n = t, o = e - t;
        return v(e, e, function (t, e) {
          if (t >= n && o > t && e >= n && o > e) {
            var i = Math.floor((t - n) / r), a = Math.floor((e - n) / r);
            return m.isDark(a, i) ? 0 : 1
          }
          return 1
        })
      }, m
    };
    t.stringToBytes = function (r) {
      for (var t = new Array, e = 0; e < r.length; e += 1) {
        var n = r.charCodeAt(e);
        t.push(255 & n)
      }
      return t
    }, t.createStringToBytes = function (r, t) {
      var e = function () {
        for (var e = s(r), n = function () {
          var r = e.read();
          if (-1 == r)throw new Error;
          return r
        }, o = 0, i = {}; ;) {
          var a = e.read();
          if (-1 == a)break;
          var u = n(), f = n(), c = n(), l = String.fromCharCode(a << 8 | u), g = f << 8 | c;
          i[l] = g, o += 1
        }
        if (o != t)throw new Error(o + " != " + t);
        return i
      }(), n = "?".charCodeAt(0);
      return function (r) {
        for (var t = new Array, o = 0; o < r.length; o += 1) {
          var i = r.charCodeAt(o);
          if (128 > i) t.push(i); else {
            var a = e[r.charAt(o)];
            "number" == typeof a ? (255 & a) == a ? t.push(a) : (t.push(a >>> 8), t.push(255 & a)) : t.push(n)
          }
        }
        return t
      }
    };
    var e = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, n = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, o = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, i = function () {
      var t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], n = 1335, i = 7973, u = 21522, f = {}, c = function (r) {
        for (var t = 0; 0 != r;)t += 1, r >>>= 1;
        return t
      };
      return f.getBCHTypeInfo = function (r) {
        for (var t = r << 10; c(t) - c(n) >= 0;)t ^= n << c(t) - c(n);
        return (r << 10 | t) ^ u
      }, f.getBCHTypeNumber = function (r) {
        for (var t = r << 12; c(t) - c(i) >= 0;)t ^= i << c(t) - c(i);
        return r << 12 | t
      }, f.getPatternPosition = function (r) {
        return t[r - 1]
      }, f.getMaskFunction = function (r) {
        switch (r) {
          case o.PATTERN000:
            return function (r, t) {
              return (r + t) % 2 == 0
            };
          case o.PATTERN001:
            return function (r, t) {
              return r % 2 == 0
            };
          case o.PATTERN010:
            return function (r, t) {
              return t % 3 == 0
            };
          case o.PATTERN011:
            return function (r, t) {
              return (r + t) % 3 == 0
            };
          case o.PATTERN100:
            return function (r, t) {
              return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
            };
          case o.PATTERN101:
            return function (r, t) {
              return r * t % 2 + r * t % 3 == 0
            };
          case o.PATTERN110:
            return function (r, t) {
              return (r * t % 2 + r * t % 3) % 2 == 0
            };
          case o.PATTERN111:
            return function (r, t) {
              return (r * t % 3 + (r + t) % 2) % 2 == 0
            };
          default:
            throw new Error("bad maskPattern:" + r)
        }
      }, f.getErrorCorrectPolynomial = function (t) {
        for (var e = r([1], 0), n = 0; t > n; n += 1)e = e.multiply(r([1, a.gexp(n)], 0));
        return e
      }, f.getLengthInBits = function (r, t) {
        if (t >= 1 && 10 > t)switch (r) {
          case e.MODE_NUMBER:
            return 10;
          case e.MODE_ALPHA_NUM:
            return 9;
          case e.MODE_8BIT_BYTE:
            return 8;
          case e.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + r)
        } else if (27 > t)switch (r) {
          case e.MODE_NUMBER:
            return 12;
          case e.MODE_ALPHA_NUM:
            return 11;
          case e.MODE_8BIT_BYTE:
            return 16;
          case e.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + r)
        } else {
          if (!(41 > t))throw new Error("type:" + t);
          switch (r) {
            case e.MODE_NUMBER:
              return 14;
            case e.MODE_ALPHA_NUM:
              return 13;
            case e.MODE_8BIT_BYTE:
              return 16;
            case e.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + r)
          }
        }
      }, f.getLostPoint = function (r) {
        for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1)for (var o = 0; t > o; o += 1) {
          for (var i = 0, a = r.isDark(n, o), u = -1; 1 >= u; u += 1)if (!(0 > n + u || n + u >= t))for (var f = -1; 1 >= f; f += 1)0 > o + f || o + f >= t || (0 != u || 0 != f) && a == r.isDark(n + u, o + f) && (i += 1);
          i > 5 && (e += 3 + i - 5)
        }
        for (var n = 0; t - 1 > n; n += 1)for (var o = 0; t - 1 > o; o += 1) {
          var c = 0;
          r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r.isDark(n + 1, o + 1) && (c += 1), (0 == c || 4 == c) && (e += 3)
        }
        for (var n = 0; t > n; n += 1)for (var o = 0; t - 6 > o; o += 1)r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
        for (var o = 0; t > o; o += 1)for (var n = 0; t - 6 > n; n += 1)r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
        for (var l = 0, o = 0; t > o; o += 1)for (var n = 0; t > n; n += 1)r.isDark(n, o) && (l += 1);
        var g = Math.abs(100 * l / t / t - 50) / 5;
        return e += 10 * g
      }, f
    }(), a = function () {
      for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1)r[e] = 1 << e;
      for (var e = 8; 256 > e; e += 1)r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
      for (var e = 0; 255 > e; e += 1)t[r[e]] = e;
      var n = {};
      return n.glog = function (r) {
        if (1 > r)throw new Error("glog(" + r + ")");
        return t[r]
      }, n.gexp = function (t) {
        for (; 0 > t;)t += 255;
        for (; t >= 256;)t -= 255;
        return r[t]
      }, n
    }(), u = function () {
      var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], t = function (r, t) {
        var e = {};
        return e.totalCount = r, e.dataCount = t, e
      }, e = {}, o = function (t, e) {
        switch (e) {
          case n.L:
            return r[4 * (t - 1) + 0];
          case n.M:
            return r[4 * (t - 1) + 1];
          case n.Q:
            return r[4 * (t - 1) + 2];
          case n.H:
            return r[4 * (t - 1) + 3];
          default:
            return void 0
        }
      };
      return e.getRSBlocks = function (r, e) {
        var n = o(r, e);
        if ("undefined" == typeof n)throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);
        for (var i = n.length / 3, a = new Array, u = 0; i > u; u += 1)for (var f = n[3 * u + 0], c = n[3 * u + 1], l = n[3 * u + 2], g = 0; f > g; g += 1)a.push(t(c, l));
        return a
      }, e
    }(), f = function () {
      var r = new Array, t = 0, e = {};
      return e.getBuffer = function () {
        return r
      }, e.getAt = function (t) {
        var e = Math.floor(t / 8);
        return 1 == (r[e] >>> 7 - t % 8 & 1)
      }, e.put = function (r, t) {
        for (var n = 0; t > n; n += 1)e.putBit(1 == (r >>> t - n - 1 & 1))
      }, e.getLengthInBits = function () {
        return t
      }, e.putBit = function (e) {
        var n = Math.floor(t / 8);
        r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1
      }, e
    }, c = function (r) {
      var n = e.MODE_8BIT_BYTE, o = t.stringToBytes(r), i = {};
      return i.getMode = function () {
        return n
      }, i.getLength = function (r) {
        return o.length
      }, i.write = function (r) {
        for (var t = 0; t < o.length; t += 1)r.put(o[t], 8)
      }, i
    }, l = function () {
      var r = new Array, t = {};
      return t.writeByte = function (t) {
        r.push(255 & t)
      }, t.writeShort = function (r) {
        t.writeByte(r), t.writeByte(r >>> 8)
      }, t.writeBytes = function (r, e, n) {
        e = e || 0, n = n || r.length;
        for (var o = 0; n > o; o += 1)t.writeByte(r[o + e])
      }, t.writeString = function (r) {
        for (var e = 0; e < r.length; e += 1)t.writeByte(r.charCodeAt(e))
      }, t.toByteArray = function () {
        return r
      }, t.toString = function () {
        var t = "";
        t += "[";
        for (var e = 0; e < r.length; e += 1)e > 0 && (t += ","), t += r[e];
        return t += "]"
      }, t
    }, g = function () {
      var r = 0, t = 0, e = 0, n = "", o = {}, i = function (r) {
        n += String.fromCharCode(a(63 & r))
      }, a = function (r) {
        if (0 > r); else {
          if (26 > r)return 65 + r;
          if (52 > r)return 97 + (r - 26);
          if (62 > r)return 48 + (r - 52);
          if (62 == r)return 43;
          if (63 == r)return 47
        }
        throw new Error("n:" + r)
      };
      return o.writeByte = function (n) {
        for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;)i(r >>> t - 6), t -= 6
      }, o.flush = function () {
        if (t > 0 && (i(r << 6 - t), r = 0, t = 0), e % 3 != 0)for (var o = 3 - e % 3, a = 0; o > a; a += 1)n += "="
      }, o.toString = function () {
        return n
      }, o
    }, s = function (r) {
      var t = r, e = 0, n = 0, o = 0, i = {};
      i.read = function () {
        for (; 8 > o;) {
          if (e >= t.length) {
            if (0 == o)return -1;
            throw new Error("unexpected end of file./" + o)
          }
          var r = t.charAt(e);
          if (e += 1, "=" == r)return o = 0, -1;
          r.match(/^\s$/) || (n = n << 6 | a(r.charCodeAt(0)), o += 6)
        }
        var i = n >>> o - 8 & 255;
        return o -= 8, i
      };
      var a = function (r) {
        if (r >= 65 && 90 >= r)return r - 65;
        if (r >= 97 && 122 >= r)return r - 97 + 26;
        if (r >= 48 && 57 >= r)return r - 48 + 52;
        if (43 == r)return 62;
        if (47 == r)return 63;
        throw new Error("c:" + r)
      };
      return i
    }, h = function (r, t) {
      var e = r, n = t, o = new Array(r * t), i = {};
      i.setPixel = function (r, t, n) {
        o[t * e + r] = n
      }, i.write = function (r) {
        r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r.writeShort(n), r.writeByte(0);
        var t = 2, o = u(t);
        r.writeByte(t);
        for (var i = 0; o.length - i > 255;)r.writeByte(255), r.writeBytes(o, i, 255), i += 255;
        r.writeByte(o.length - i), r.writeBytes(o, i, o.length - i), r.writeByte(0), r.writeString(";")
      };
      var a = function (r) {
        var t = r, e = 0, n = 0, o = {};
        return o.write = function (r, o) {
          if (r >>> o != 0)throw new Error("length over");
          for (; e + o >= 8;)t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
          n = r << e | n, e += o
        }, o.flush = function () {
          e > 0 && t.writeByte(n)
        }, o
      }, u = function (r) {
        for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, i = f(), u = 0; t > u; u += 1)i.add(String.fromCharCode(u));
        i.add(String.fromCharCode(t)), i.add(String.fromCharCode(e));
        var c = l(), g = a(c);
        g.write(t, n);
        var s = 0, h = String.fromCharCode(o[s]);
        for (s += 1; s < o.length;) {
          var v = String.fromCharCode(o[s]);
          s += 1, i.contains(h + v) ? h += v : (g.write(i.indexOf(h), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(h + v)), h = v)
        }
        return g.write(i.indexOf(h), n), g.write(e, n), g.flush(), c.toByteArray()
      }, f = function () {
        var r = {}, t = 0, e = {};
        return e.add = function (n) {
          if (e.contains(n))throw new Error("dup key:" + n);
          r[n] = t, t += 1
        }, e.size = function () {
          return t
        }, e.indexOf = function (t) {
          return r[t]
        }, e.contains = function (t) {
          return "undefined" != typeof r[t]
        }, e
      };
      return i
    }, v = function (r, t, e, n) {
      for (var o = h(r, t), i = 0; t > i; i += 1)for (var a = 0; r > a; a += 1)o.setPixel(a, i, e(a, i));
      var u = l();
      o.write(u);
      for (var f = g(), c = u.toByteArray(), s = 0; s < c.length; s += 1)f.writeByte(c[s]);
      f.flush();
      var v = "";
      return v += "<img", v += ' src="', v += "data:image/gif;base64,", v += f, v += '"', v += ' width="', v += r, v += '"', v += ' height="', v += t, v += '"', n && (v += ' alt="', v += n, v += '"'), v += "/>"
    };
    return t
  }();
  return function (r) {
    "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports && (module.exports = r())
  }(function () {
    return r
  }), !function (r) {
    r.stringToBytes = function (r) {
      function t(r) {
        for (var t = [], e = 0; e < r.length; e++) {
          var n = r.charCodeAt(e);
          128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(e)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
        }
        return t
      }

      return t(r)
    }
  }(r), r
}());

/*! jQuery Placeholder Enhanced 1.6.4 | @tdecs | under the MIT license */
(function (a, h) {
  var f = "placeholder" in h.createElement("input") && "placeholder" in h.createElement("textarea"), e = {
    cssClass: "placeholder",
    normalize: !0
  }, g = a.fn.val;
  f ? f && e.normalize && (a.fn.val = function () {
    var a = this[0];
    if (a) {
      if (arguments.length) !arguments[0] && this.attr("placeholder") && this.attr("placeholder", a._placeholder); else return a.value;
      this.toggleClass(e.cssClass, !arguments[0]);
      return g.apply(this, arguments)
    }
  }) : a.fn.val = function () {
    var b = this[0];
    if (b) {
      if (!arguments.length && (a.nodeName(b, "input") || a.nodeName(b, "textarea")))return b.value === this.attr("placeholder") ? "" : b.value;
      if (!arguments[0] && this.attr("placeholder"))return b.value = this.addClass(e.cssClass).attr("placeholder"), this;
      this.removeClass(e.cssClass);
      return g.apply(this, arguments)
    }
  };
  a.fn.placeholderEnhanced = function (b) {
    function h(n) {
      var d = {}, b = ["placeholder", "name", "id"];
      a.each(n.attributes, function (n, c) {
        c.specified && 0 > a.inArray(c.name, b) && (d[c.name] = c.value)
      });
      return d
    }

    function l(a) {
      a.css({position: "", left: ""})
    }

    function p(a) {
      a.css({position: "absolute", left: "-9999em"})
    }

    var c = a.extend(e, b);
    if (this.length && (!f || c.normalize))return "destroy" === b ? this.filter(function () {
      return a.data(this, "placeholderEnhanced")
    }).removeClass(c.cssClass).each(function () {
      var c = a(this).unbind(".placeholder"), d = "password" === this.type, b = c.attr("placeholder");
      f ? delete this._placeholder : (this.value = this.value === b ? "" : this.value, d && (l(c), c.prev().unbind(".placeholder").remove()));
      a.fn.val = g;
      a.removeData(this, "placeholderEnhanced")
    }) : this.each(function () {
      if (!a.data(this, "placeholderEnhanced")) {
        var b = this, d = a(b), e = d.attr("placeholder"), g = "password" === b.type, k, j, m;
        f && c.normalize ? (k = function () {
          b.value || d.addClass(c.cssClass).attr("placeholder", e)
        }, j = function () {
          b._placeholder = e;
          d.removeAttr("placeholder").removeClass(c.cssClass)
        }) : f || (k = function () {
          d.val() || (g ? (l(m), p(d)) : d.val(e).addClass(c.cssClass))
        }, g ? (j = function () {
          l(d);
          p(m)
        }, m = a("<input>", a.extend(h(b), {
          type: "text",
          value: e,
          tabindex: -1
        })).addClass(c.cssClass).bind("focus.placeholder", function () {
          d.trigger("focus.placeholder")
        }).insertBefore(d)) : j = function () {
          d.hasClass(c.cssClass) && (b.value = "", d.removeClass(c.cssClass))
        });
        d.bind("blur.placeholder", k).bind("focus.placeholder", j).trigger("blur.placeholder");
        a.data(b, "placeholderEnhanced", !0)
      }
    })
  };
  a(function () {
    a("input[placeholder], textarea[placeholder]").placeholderEnhanced()
  })
})(jQuery, document);

/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
 */

var Swiper = function (a, b) {
  "use strict";
  function c(a, b) {
    return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
  }

  function d(a) {
    return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
  }

  function e() {
    var a = G - J;
    return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
  }

  function f() {
    function a(a) {
      var c, d, e = function () {
        "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)))
      };
      a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image, c.onload = e, c.onerror = e, c.src = d) : e())
    }

    var d = D.h.addEventListener, e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
    if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
      if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent)try {
        new WheelEvent("wheel"), D._wheelEvent = "wheel"
      } catch (f) {
      }
      D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j)
    }
    if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
      D.imagesToLoad = c("img", D.container);
      for (var h = 0; h < D.imagesToLoad.length; h++)a(D.imagesToLoad[h])
    }
  }

  function g() {
    var a, d = D.h.addEventListener;
    if (b.preventLinks) {
      var e = c("a", D.container);
      for (a = 0; a < e.length; a++)d(e[a], "click", n)
    }
    if (b.releaseFormElements) {
      var f = c("input, textarea, select", D.container);
      for (a = 0; a < f.length; a++)d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0)
    }
    if (b.onSlideClick)for (a = 0; a < D.slides.length; a++)d(D.slides[a], "click", k);
    if (b.onSlideTouch)for (a = 0; a < D.slides.length; a++)d(D.slides[a], D.touchEvents.touchStart, l)
  }

  function h() {
    var a, d = D.h.removeEventListener;
    if (b.onSlideClick)for (a = 0; a < D.slides.length; a++)d(D.slides[a], "click", k);
    if (b.onSlideTouch)for (a = 0; a < D.slides.length; a++)d(D.slides[a], D.touchEvents.touchStart, l);
    if (b.releaseFormElements) {
      var e = c("input, textarea, select", D.container);
      for (a = 0; a < e.length; a++)d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0)
    }
    if (b.preventLinks) {
      var f = c("a", D.container);
      for (a = 0; a < f.length; a++)d(f[a], "click", n)
    }
  }

  function i(a) {
    var b = a.keyCode || a.charCode;
    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
      if (37 === b || 39 === b || 38 === b || 40 === b) {
        for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
          var k = i[j];
          k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
        }
        if (!c)return
      }
      N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev())
    }
  }

  function j(a) {
    var c = D._wheelEvent, d = 0;
    if (a.detail) d = -a.detail; else if ("mousewheel" === c)if (b.mousewheelControlForceToAxis)if (N) {
      if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)))return;
      d = a.wheelDeltaX
    } else {
      if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)))return;
      d = a.wheelDeltaY
    } else d = a.wheelDelta; else if ("DOMMouseScroll" === c) d = -a.detail; else if ("wheel" === c)if (b.mousewheelControlForceToAxis)if (N) {
      if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY)))return;
      d = -a.deltaX
    } else {
      if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX)))return;
      d = -a.deltaY
    } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
    if (b.freeMode) {
      var f = D.getWrapperTranslate() + d;
      if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e())return
    } else(new Date).getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = (new Date).getTime();
    return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
  }

  function k(a) {
    D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a))
  }

  function l(a) {
    m(a), D.fireCallback(b.onSlideTouch, D, a)
  }

  function m(a) {
    if (a.currentTarget) D.clickedSlide = a.currentTarget; else {
      var c = a.srcElement;
      do {
        if (c.className.indexOf(b.slideClass) > -1)break;
        c = c.parentNode
      } while (c);
      D.clickedSlide = c
    }
    D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0)
  }

  function n(a) {
    return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1)
  }

  function o(a) {
    return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
  }

  function p(a) {
    if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal)return !1;
    var c = a.target || a.srcElement;
    document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
    var d = "input select textarea".split(" ");
    if (b.noSwiping && c && t(c))return !1;
    if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which)return D.isTouched = !1, !1;
    if (!$ || 1 === a.targetTouches.length) {
      D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
      var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX, f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
      D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = (new Date).getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd")
    }
  }

  function q(a) {
    if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
      var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX, d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
      if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I)return void(D.isTouched = !1);
      if (N) {
        if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX)return
      } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY)return;
      if (a.assignedToSwiper)return void(D.isTouched = !1);
      if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
        if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
          var f;
          if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
            var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
            f = (J + g) / J;
            var h = D.positions.current - g * (1 - f) / 2, i = -e() - J / 2;
            D.positions.current = i > h || 0 >= f ? i : h
          }
        }
        if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger)return;
        if (b.moveStartThreshold)if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
          if (!X)return X = !0, void(D.touches.start = D.touches.current);
          D.setWrapperTranslate(D.positions.current)
        } else D.positions.current = D.positions.start; else D.setWrapperTranslate(D.positions.current);
        return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = (new Date).getTime()), D.velocity = (D.touches.current - Y) / ((new Date).getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = (new Date).getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1
      }
    }
  }

  function r(a) {
    if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
      D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = (new Date).getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);
      var c = D.positions.diff, d = D.positions.abs, f = D.times.end - D.times.start;
      5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
        "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0))
      }, 100);
      var g = e();
      if (!D.isMoved && b.freeMode)return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
      if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g)return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
      if (D.isMoved = !1, b.freeMode) {
        if (b.freeModeFluid) {
          var h, i = 1e3 * b.momentumRatio, j = D.velocity * i, k = D.positions.current + j, l = !1, m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;
          -g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
            _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300))
          }), D.updateActiveSlide(k)
        }
        return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd")
      }
      H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
      var n = 0;
      if ("auto" === b.slidesPerView) {
        for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++)if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
          n = o;
          break
        }
        n > J && (n = J)
      } else n = F * b.slidesPerView;
      "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd")
    }
  }

  function s(a, b) {
    return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1
  }

  function t(a) {
    var c = !1;
    do s(a, b.noSwipingClass) && (c = !0), a = a.parentElement; while (!c && a.parentElement && !s(a, b.wrapperClass));
    return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c
  }

  function u(a, b) {
    var c, d = document.createElement("div");
    return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
  }

  function v(a, c, d) {
    function e() {
      var f = +new Date, l = f - g;
      h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
        e()
      }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1)
    }

    var f = "to" === c && d.speed >= 0 ? d.speed : b.speed, g = +new Date;
    if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f); else {
      var h = D.getWrapperTranslate(), i = Math.ceil((a - h) / f * (1e3 / 60)), j = h > a ? "toNext" : "toPrev", k = "toNext" === j ? h > a : a > h;
      if (D._DOMAnimating)return;
      e()
    }
    D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c)
  }

  function w(a) {
    if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)if (b.queueStartCallbacks && D.support.transitions) {
      if (D._queueStartCallbacks)return;
      D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
        D._queueStartCallbacks = !1
      })
    } else D.fireCallback(b.onSlideChangeStart, D, a);
    if (b.onSlideChangeEnd)if (D.support.transitions)if (b.queueEndCallbacks) {
      if (D._queueEndCallbacks)return;
      D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
        D.fireCallback(b.onSlideChangeEnd, c, a)
      })
    } else D.wrapperTransitionEnd(function (c) {
      D.fireCallback(b.onSlideChangeEnd, c, a)
    }); else b.DOMAnimation || setTimeout(function () {
      D.fireCallback(b.onSlideChangeEnd, D, a)
    }, 10)
  }

  function x() {
    var a = D.paginationButtons;
    if (a)for (var b = 0; b < a.length; b++)D.h.removeEventListener(a[b], "click", z)
  }

  function y() {
    var a = D.paginationButtons;
    if (a)for (var b = 0; b < a.length; b++)D.h.addEventListener(a[b], "click", z)
  }

  function z(a) {
    for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++)d === e[f] && (c = f);
    b.autoplay && D.stopAutoplay(!0), D.swipeTo(c)
  }

  function A() {
    ab = setTimeout(function () {
      b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
        "undefined" != typeof ab && A()
      })
    }, b.autoplay)
  }

  function B() {
    D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated")
  }

  if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
    var C = HTMLElement.prototype;
    C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
      return (new XMLSerializer).serializeToString(this)
    })
  }
  if (window.getComputedStyle || (window.getComputedStyle = function (a) {
      return this.el = a, this.getPropertyValue = function (b) {
        var c = /(\-([a-z]){1})/g;
        return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
          return arguments[2].toUpperCase()
        })), a.currentStyle[b] ? a.currentStyle[b] : null
      }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
      for (var c = b || 0, d = this.length; d > c; c++)if (this[c] === a)return c;
      return -1
    }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
    var D = this;
    D.touches = {
      start: 0,
      startX: 0,
      startY: 0,
      current: 0,
      currentX: 0,
      currentY: 0,
      diff: 0,
      abs: 0
    }, D.positions = {start: 0, abs: 0, diff: 0, current: 0}, D.times = {
      start: 0,
      end: 0
    }, D.id = (new Date).getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
    var E, F, G, H, I, J, K = {
      eventTarget: "wrapper",
      mode: "horizontal",
      touchRatio: 1,
      speed: 300,
      freeMode: !1,
      freeModeFluid: !1,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerViewFit: !0,
      simulateTouch: !0,
      followFinger: !0,
      shortSwipes: !0,
      longSwipesRatio: .5,
      moveStartThreshold: !1,
      onlyExternal: !1,
      createPagination: !0,
      pagination: !1,
      paginationElement: "span",
      paginationClickable: !1,
      paginationAsRange: !0,
      resistance: !0,
      scrollContainer: !1,
      preventLinks: !0,
      preventLinksPropagation: !1,
      noSwiping: !1,
      noSwipingClass: "swiper-no-swiping",
      initialSlide: 0,
      keyboardControl: !1,
      mousewheelControl: !1,
      mousewheelControlForceToAxis: !1,
      useCSS3Transforms: !0,
      autoplay: !1,
      autoplayDisableOnInteraction: !0,
      autoplayStopOnLast: !1,
      loop: !1,
      loopAdditionalSlides: 0,
      roundLengths: !1,
      calculateHeight: !1,
      cssWidthAndHeight: !1,
      updateOnImagesReady: !0,
      releaseFormElements: !0,
      watchActiveIndex: !1,
      visibilityFullFit: !1,
      offsetPxBefore: 0,
      offsetPxAfter: 0,
      offsetSlidesBefore: 0,
      offsetSlidesAfter: 0,
      centeredSlides: !1,
      queueStartCallbacks: !1,
      queueEndCallbacks: !1,
      autoResize: !0,
      resizeReInit: !1,
      DOMAnimation: !0,
      loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
      swipeToPrev: !0,
      swipeToNext: !0,
      slideElement: "div",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      wrapperClass: "swiper-wrapper",
      paginationElementClass: "swiper-pagination-switch",
      paginationActiveClass: "swiper-active-switch",
      paginationVisibleClass: "swiper-visible-switch"
    };
    b = b || {};
    for (var L in K)if (L in b && "object" == typeof b[L])for (var M in K[L])M in b[L] || (b[L][M] = K[L][M]); else L in b || (b[L] = K[L]);
    D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
    var N = "horizontal" === b.mode, O = ["mousedown", "mousemove", "mouseup"];
    D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = {
      touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0],
      touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1],
      touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]
    };
    for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
      if (D.container.childNodes[P].className) {
        if (D.container.childNodes[P].className == "scLooseFrameZone scEnabledChrome") {
          for (var J = D.container.childNodes[P].childNodes.length - 1; J >= 0; J--) {
            if (D.container.childNodes[P].childNodes[J].className) {
              for (var H = D.container.childNodes[P].childNodes[J].className.split(/\s+/), Y = 0; Y < H.length; Y++) {
                H[Y] === b.wrapperClass && (E = D.container.childNodes[P].childNodes[J]);
              }
            }
          }
        }
        for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
          Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
        }
      }
    }
    D.wrapper = E, D._extendSwiperSlide = function (a) {
      return a.append = function () {
        return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a
      }, a.prepend = function () {
        return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a
      }, a.insertAfter = function (c) {
        if ("undefined" == typeof c)return !1;
        var d;
        return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a
      }, a.clone = function () {
        return D._extendSwiperSlide(a.cloneNode(!0))
      }, a.remove = function () {
        D.wrapper.removeChild(a), D.reInit()
      }, a.html = function (b) {
        return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
      }, a.index = function () {
        for (var b, c = D.slides.length - 1; c >= 0; c--)a === D.slides[c] && (b = c);
        return b
      }, a.isActive = function () {
        return a.index() === D.activeIndex ? !0 : !1
      }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
        return a.swiperSlideDataStorage[b]
      }, a.setData = function (b, c) {
        return a.swiperSlideDataStorage[b] = c, a
      }, a.data = function (b, c) {
        return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
      }, a.getWidth = function (b, c) {
        return D.h.getWidth(a, b, c)
      }, a.getHeight = function (b, c) {
        return D.h.getHeight(a, b, c)
      }, a.getOffset = function () {
        return D.h.getOffset(a)
      }, a
    }, D.calcSlides = function (a) {
      var c = D.slides ? D.slides.length : !1;
      D.slides = [], D.displaySlides = [];
      for (var d = 0; d < D.wrapper.childNodes.length; d++)if (D.wrapper.childNodes[d].className)for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++)f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
      for (d = D.slides.length - 1; d >= 0; d--)D._extendSwiperSlide(D.slides[d]);
      c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"))
    }, D.createSlide = function (a, c, d) {
      c = c || D.params.slideClass, d = d || b.slideElement;
      var e = document.createElement(d);
      return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e)
    }, D.appendSlide = function (a, b, c) {
      return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0
    }, D.prependSlide = function (a, b, c) {
      return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0
    }, D.insertSlideAfter = function (a, b, c, d) {
      return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a)
    }, D.removeSlide = function (a) {
      if (D.slides[a]) {
        if (b.loop) {
          if (!D.slides[a + D.loopedSlides])return !1;
          D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()
        } else D.slides[a].remove();
        return !0
      }
      return !1
    }, D.removeLastSlide = function () {
      return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1
    }, D.removeAllSlides = function () {
      for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--)D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0)
    }, D.getSlide = function (a) {
      return D.slides[a]
    }, D.getLastSlide = function () {
      return D.slides[D.slides.length - 1]
    }, D.getFirstSlide = function () {
      return D.slides[0]
    }, D.activeSlide = function () {
      return D.slides[D.activeIndex]
    }, D.fireCallback = function () {
      var a = arguments[0];
      if ("[object Array]" === Object.prototype.toString.call(a))for (var c = 0; c < a.length; c++)"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); else"[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    }, D.addCallback = function (a, b) {
      var c, e = this;
      return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
    }, D.removeCallbacks = function (a) {
      D.params["on" + a] && (D.params["on" + a] = null)
    };
    var S = [];
    for (var T in D.plugins)if (b[T]) {
      var U = D.plugins[T](D, b[T]);
      U && S.push(U)
    }
    D.callPlugins = function (a, b) {
      b || (b = {});
      for (var c = 0; c < S.length; c++)a in S[c] && S[c][a](b)
    }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
      var d = D.h.getWidth(D.container, !1, b.roundLengths), e = D.h.getHeight(D.container, !1, b.roundLengths);
      if (d !== D.width || e !== D.height || a) {
        D.width = d, D.height = e;
        var f, g, h, i, j, k, l;
        J = N ? d : e;
        var m = D.wrapper;
        if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
          var n = 0, o = 0;
          b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;
          var p = 0;
          for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
            f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
            var q = N ? f : g;
            if (b.centeredSlides) {
              var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths), s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths), t = N ? r : s;
              if (q > J) {
                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft); else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++)D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
                D.slidesGrid.push(k + D.wrapperLeft)
              } else D.snapGrid.push(p), D.slidesGrid.push(p);
              p += q / 2 + t / 2
            } else {
              if (q > J)if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J); else if (0 !== J)for (var v = 0; v <= Math.floor(q / J); v++)D.snapGrid.push(k + J * v); else D.snapGrid.push(k); else D.snapGrid.push(k);
              D.slidesGrid.push(k)
            }
            k += q, n += f, o += g
          }
          b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom)
        } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j; else {
          if (b.calculateHeight) {
            for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++)D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
            g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px")
          } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;
          for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++)D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px")
        }
        D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0
      }
    }, D.reInit = function (a) {
      D.init(!0, a)
    }, D.resizeFix = function (a) {
      D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix")
    }, D.destroy = function (a) {
      var c = D.h.removeEventListener, d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
      if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
        D.wrapper.removeAttribute("style");
        for (var e = 0; e < D.slides.length; e++)D.slides[e].removeAttribute("style")
      }
      D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null
    }, D.disableKeyboardControl = function () {
      b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i)
    }, D.enableKeyboardControl = function () {
      b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i)
    };
    var V = (new Date).getTime();
    if (D.disableMousewheelControl = function () {
        return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1
      }, D.enableMousewheelControl = function () {
        return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1
      }, b.grabCursor) {
      var W = D.container.style;
      W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab"
    }
    D.allowSlideClick = !0, D.allowLinks = !0;
    var X, Y, Z, $ = !1, _ = !0;
    D.swipeNext = function (a, c) {
      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");
      var d = D.getWrapperTranslate().toFixed(2), f = d;
      if ("auto" === b.slidesPerView) {
        for (var g = 0; g < D.snapGrid.length; g++)if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
          f = -D.snapGrid[g + 1];
          break
        }
      } else {
        var h = F * b.slidesPerGroup;
        f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h)
      }
      return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", {runCallbacks: a}), !0)
    }, D.swipePrev = function (a, c) {
      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");
      var d, e = Math.ceil(D.getWrapperTranslate());
      if ("auto" === b.slidesPerView) {
        d = 0;
        for (var f = 1; f < D.snapGrid.length; f++) {
          if (-e === D.snapGrid[f]) {
            d = -D.snapGrid[f - 1];
            break
          }
          if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
            d = -D.snapGrid[f];
            break
          }
        }
      } else {
        var g = F * b.slidesPerGroup;
        d = -(Math.ceil(-e / g) - 1) * g
      }
      return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", {runCallbacks: a}), !0)
    }, D.swipeReset = function (a) {
      "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");
      {
        var c, d = D.getWrapperTranslate(), f = F * b.slidesPerGroup;
        -e()
      }
      if ("auto" === b.slidesPerView) {
        c = 0;
        for (var g = 0; g < D.snapGrid.length; g++) {
          if (-d === D.snapGrid[g])return;
          if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
            c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
            break
          }
        }
        -d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e())
      } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());
      return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", {runCallbacks: a}), !0)
    }, D.swipeTo = function (a, c, d) {
      a = parseInt(a, 10), D.callPlugins("onSwipeTo", {index: a, speed: c}), b.loop && (a += D.loopedSlides);
      var f = D.getWrapperTranslate();
      if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
        var g;
        return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", {
          index: a,
          speed: c,
          runCallbacks: d
        }), !0)
      }
    }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
      if (D.initialized && 0 !== D.slides.length) {
        D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);
        var c;
        if ("auto" === b.slidesPerView) {
          if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
            for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++);
            var d = Math.abs(D.slidesGrid[c] + a), e = Math.abs(D.slidesGrid[c + 1] + a);
            D.activeIndex = e >= d ? c : c + 1
          }
        } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
        if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
          if (D.calcVisibleSlides(a), D.support.classList) {
            var f;
            for (c = 0; c < D.slides.length; c++)f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
            D.slides[D.activeIndex].classList.add(b.slideActiveClass)
          } else {
            var g = new RegExp("\\s*" + b.slideActiveClass), h = new RegExp("\\s*" + b.slideVisibleClass);
            for (c = 0; c < D.slides.length; c++)D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
            D.slides[D.activeIndex].className += " " + b.slideActiveClass
          }
          if (b.loop) {
            var i = D.loopedSlides;
            D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0)
          } else D.activeLoopIndex = D.activeIndex;
          b.pagination && D.updatePagination(a)
        }
      }
    }, D.createPagination = function (a) {
      if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
        var d = "", e = D.slides.length, f = e;
        b.loop && (f -= 2 * D.loopedSlides);
        for (var g = 0; f > g; g++)d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
        D.paginationContainer.innerHTML = d
      }
      D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y()
    }, D.updatePagination = function (a) {
      if (b.pagination && !(D.slides.length < 1)) {
        var d = c("." + b.paginationActiveClass, D.paginationContainer);
        if (d) {
          var e = D.paginationButtons;
          if (0 !== e.length) {
            for (var f = 0; f < e.length; f++)e[f].className = b.paginationElementClass;
            var g = b.loop ? D.loopedSlides : 0;
            if (b.paginationAsRange) {
              D.visibleSlides || D.calcVisibleSlides(a);
              var h, i = [];
              for (h = 0; h < D.visibleSlides.length; h++) {
                var j = D.slides.indexOf(D.visibleSlides[h]) - g;
                b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j)
              }
              for (h = 0; h < i.length; h++)e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
              b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass)
            } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass)
          }
        }
      }
    }, D.calcVisibleSlides = function (a) {
      var c = [], d = 0, e = 0, f = 0;
      N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);
      for (var g = 0; g < D.slides.length; g++) {
        d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;
        var h = !1;
        b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g])
      }
      0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c
    };
    var ab, bb;
    D.startAutoplay = function () {
      if (D.support.transitions) {
        if ("undefined" != typeof ab)return !1;
        if (!b.autoplay)return;
        D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A()
      } else {
        if ("undefined" != typeof bb)return !1;
        if (!b.autoplay)return;
        D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
          b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0))
        }, b.autoplay)
      }
    }, D.stopAutoplay = function (a) {
      if (D.support.transitions) {
        if (!ab)return;
        ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
          A()
        }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
      } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
    }, D.loopCreated = !1, D.removeLoopedSlides = function () {
      if (D.loopCreated)for (var a = 0; a < D.slides.length; a++)D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a])
    }, D.createLoop = function () {
      if (0 !== D.slides.length) {
        D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
        var a, c = "", d = "", e = "", f = D.slides.length, g = Math.floor(D.loopedSlides / f), h = D.loopedSlides % f;
        for (a = 0; g * f > a; a++) {
          var i = a;
          if (a >= f) {
            var j = Math.floor(a / f);
            i = a - f * j
          }
          e += D.slides[i].outerHTML
        }
        for (a = 0; h > a; a++)d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
        for (a = f - h; f > a; a++)c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
        var k = c + e + E.innerHTML + e + d;
        for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++)(a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
        D.callPlugins("onCreateLoop")
      }
    }, D.fixLoop = function () {
      var a;
      D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1))
    }, D.loadSlides = function () {
      var a = "";
      D.activeLoaderIndex = 0;
      for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++)a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
      D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0)
    }, D.reloadSlides = function () {
      var a = b.loader.slides, c = parseInt(D.activeSlide().data("swiperindex"), 10);
      if (!(0 > c || c > a.length - 1)) {
        D.activeLoaderIndex = c;
        var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups), e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
        if (c > 0) {
          var f = -F * (c - d);
          D.setWrapperTranslate(f), D.setWrapperTransition(0)
        }
        var g;
        if ("reload" === b.loader.logic) {
          D.wrapper.innerHTML = "";
          var h = "";
          for (g = d; e >= g; g++)h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
          D.wrapper.innerHTML = h
        } else {
          var i = 1e3, j = 0;
          for (g = 0; g < D.slides.length; g++) {
            var k = D.slides[g].data("swiperindex");
            d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
          }
          for (g = d; e >= g; g++) {
            var l;
            i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l))
          }
        }
        D.reInit(!0)
      }
    }, B()
  }
};
Swiper.prototype = {
  plugins: {}, wrapperTransitionEnd: function (a, b) {
    "use strict";
    function c(h) {
      if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b))for (d = 0; d < g.length; d++)e.h.removeEventListener(f, g[d], c)
    }

    var d, e = this, f = e.wrapper, g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
    if (a)for (d = 0; d < g.length; d++)e.h.addEventListener(f, g[d], c)
  }, getWrapperTranslate: function (a) {
    "use strict";
    var b, c, d, e, f = this.wrapper;
    return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
  }, setWrapperTranslate: function (a, b, c) {
    "use strict";
    var d, e = this.wrapper.style, f = {x: 0, y: 0, z: 0};
    3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
  }, setWrapperTransition: function (a) {
    "use strict";
    var b = this.wrapper.style;
    b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {duration: a}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
  }, h: {
    getWidth: function (a, b, c) {
      "use strict";
      var d = window.getComputedStyle(a, null).getPropertyValue("width"), e = parseFloat(d);
      return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e
    }, getHeight: function (a, b, c) {
      "use strict";
      if (b)return a.offsetHeight;
      var d = window.getComputedStyle(a, null).getPropertyValue("height"), e = parseFloat(d);
      return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e
    }, getOffset: function (a) {
      "use strict";
      var b = a.getBoundingClientRect(), c = document.body, d = a.clientTop || c.clientTop || 0, e = a.clientLeft || c.clientLeft || 0, f = window.pageYOffset || a.scrollTop, g = window.pageXOffset || a.scrollLeft;
      return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
        top: b.top + f - d,
        left: b.left + g - e
      }
    }, windowWidth: function () {
      "use strict";
      return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
    }, windowHeight: function () {
      "use strict";
      return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
    }, windowScroll: function () {
      "use strict";
      return "undefined" != typeof pageYOffset ? {
        left: window.pageXOffset,
        top: window.pageYOffset
      } : document.documentElement ? {
        left: document.documentElement.scrollLeft,
        top: document.documentElement.scrollTop
      } : void 0
    }, addEventListener: function (a, b, c, d) {
      "use strict";
      "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, removeEventListener: function (a, b, c, d) {
      "use strict";
      "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
  }, setTransform: function (a, b) {
    "use strict";
    var c = a.style;
    c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
  }, setTranslate: function (a, b) {
    "use strict";
    var c = a.style, d = {
      x: b.x || 0,
      y: b.y || 0,
      z: b.z || 0
    }, e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
    c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
  }, setTransition: function (a, b) {
    "use strict";
    var c = a.style;
    c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
  }, support: {
    touch: window.Modernizr && Modernizr.touch === !0 || function () {
      "use strict";
      return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
    }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
      "use strict";
      var a = document.createElement("div").style;
      return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
    }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
      "use strict";
      var a = document.createElement("div").style;
      return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
    }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
      "use strict";
      var a = document.createElement("div").style;
      return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
    }(), classList: function () {
      "use strict";
      var a = document.createElement("div");
      return "classList" in a
    }()
  }, browser: {
    ie8: function () {
      "use strict";
      var a = -1;
      if ("Microsoft Internet Explorer" === navigator.appName) {
        var b = navigator.userAgent, c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
        null !== c.exec(b) && (a = parseFloat(RegExp.$1))
      }
      return -1 !== a && 9 > a
    }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled
  }
}, (window.jQuery || window.Zepto) && !function (a) {
  "use strict";
  a.fn.swiper = function (b) {
    var c;
    return this.each(function (d) {
      var e = a(this), f = new Swiper(e[0], b);
      d || (c = f), e.data("swiper", f)
    }), c
  }
}(window.jQuery || window.Zepto), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return Swiper
});

/*集团网首页*/
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev, $el, s, cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) {
      $el.off(s.event, track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX;
      ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX;
      delete s.pY;
      return cfg.over.apply($el[0], [ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX;
      s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout(function () {
        compare(ev, $el, s, cfg);
      }, cfg.interval);
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev, $el, s, out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0], [ev]);
  };

  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ($.isPlainObject(handlerIn)) {
      cfg = $.extend(cfg, handlerIn);
      if (!$.isFunction(cfg.out)) {
        cfg.out = cfg.over;
      }
    } else if ($.isFunction(handlerOut)) {
      cfg = $.extend(cfg, {over: handlerIn, out: handlerOut, selector: selector});
    } else {
      cfg = $.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut});
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({}, e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) {
        $el.data('hoverIntent', (hoverIntentData = {}));
      }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) {
        hoverIntentData[instanceId] = state = {id: instanceId};
      }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) {
        state.timeoutId = clearTimeout(state.timeoutId);
      }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) {
          return;
        }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX;
        state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove, track).on(mousemove, track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout(function () {
          compare(ev, $el, state, cfg);
        }, cfg.interval);
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) {
          return;
        }
        // unbind expensive mousemove event
        $el.off(mousemove, track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout(function () {
          delay(ev, $el, state, cfg.out);
        }, cfg.timeout);
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent': handleHover, 'mouseleave.hoverIntent': handleHover}, cfg.selector);
  };
});


/*dropdown.js*/
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this = $(this)
      var $parent = getParent($this)
      var relatedTarget = {relatedTarget: this}

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = {relatedTarget: this}
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0) index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index) index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
      e.stopPropagation()
    })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


/*lazyload.js*/
/*!
 * An jQuery | zepto plugin for lazy loading images.
 * author -> jieyou
 * see https://github.com/jieyou/lazyload
 * use some tuupola's code https://github.com/tuupola/jquery_lazyload (BSD)
 * use component's throttle https://github.com/component/throttle (MIT)
 */
//; (function (factory) {
//    if (typeof define === 'function' && define.amd) { // AMD
//        // you may need to change `define([------>'jquery'<------], factory)` 
//        // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
//        define(['jquery'], factory)
//        // define(['zepto'], factory)
//    } else { // Global
//        factory(window.jQuery || window.Zepto)
//    }
//})(function ($, undefined) {
//    var w = window,
//        $window = $(w),
//        defaultOptions = {
//            threshold: 0,
//            failure_limit: 0,
//            event: 'scroll',
//            effect: 'show',
//            effect_params: null,
//            container: w,
//            data_attribute: 'original',
//            data_srcset_attribute: 'original-srcset',
//            skip_invisible: true,
//            appear: emptyFn,
//            load: emptyFn,
//            vertical_only: false,
//            check_appear_throttle_time: 300,
//            url_rewriter_fn: emptyFn,
//            no_fake_img_loader: false,
//            placeholder_data_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
//            // for IE6\7 that does not support data image
//            placeholder_real_img: 'http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png'
//            // todo : 灏嗘煇浜涘睘鎬х敤global鏉ラ厤缃紝鑰屼笉鏄瘡娆″湪$(selector).lazyload({})鍐呴厤缃�
//        },
//        type // function

//    function emptyFn() { }

//    type = (function () {
//        var object_prototype_toString = Object.prototype.toString
//        return function (obj) {
//            // todo: compare the speeds of replace string twice or replace a regExp
//            return object_prototype_toString.call(obj).replace('[object ', '').replace(']', '')
//        }
//    })()

//    function belowthefold($element, options) {
//        var fold
//        if (options._$container == $window) {
//            fold = ('innerHeight' in w ? w.innerHeight : $window.height()) + $window.scrollTop()
//        } else {
//            fold = options._$container.offset().top + options._$container.height()
//        }
//        return fold <= $element.offset().top - options.threshold
//    }

//    function rightoffold($element, options) {
//        var fold
//        if (options._$container == $window) {
//            // Zepto do not support `$window.scrollLeft()` yet.
//            fold = $window.width() + ($.fn.scrollLeft ? $window.scrollLeft() : w.pageXOffset)
//        } else {
//            fold = options._$container.offset().left + options._$container.width()
//        }
//        return fold <= $element.offset().left - options.threshold
//    }

//    function abovethetop($element, options) {
//        var fold
//        if (options._$container == $window) {
//            fold = $window.scrollTop()
//        } else {
//            fold = options._$container.offset().top
//        }
//        // console.log('abovethetop fold '+ fold)
//        // console.log('abovethetop $element.height() '+ $element.height())
//        return fold >= $element.offset().top + options.threshold + $element.height()
//    }

//    function leftofbegin($element, options) {
//        var fold
//        if (options._$container == $window) {
//            // Zepto do not support `$window.scrollLeft()` yet.
//            fold = $.fn.scrollLeft ? $window.scrollLeft() : w.pageXOffset
//        } else {
//            fold = options._$container.offset().left
//        }
//        return fold >= $element.offset().left + options.threshold + $element.width()
//    }

//    function checkAppear($elements, options) {
//        var counter = 0
//        $elements.each(function (i, e) {
//            var $element = $elements.eq(i)
//            if (($element.width() <= 0 && $element.height() <= 0) || $element.css('display') === 'none') {
//                return
//            }
//            function appear() {
//                $element.trigger('_lazyload_appear')
//                // if we found an image we'll load, reset the counter 
//                counter = 0
//            }
//            // If vertical_only is set to true, only check the vertical to decide appear or not
//            // In most situations, page can only scroll vertically, set vertical_only to true will improve performance
//            if (options.vertical_only) {
//                if (abovethetop($element, options)) {
//                    // Nothing. 
//                } else if (!belowthefold($element, options)) {
//                    appear()
//                } else {
//                    if (++counter > options.failure_limit) {
//                        return false
//                    }
//                }
//            } else {
//                if (abovethetop($element, options) || leftofbegin($element, options)) {
//                    // Nothing. 
//                } else if (!belowthefold($element, options) && !rightoffold($element, options)) {
//                    appear()
//                } else {
//                    if (++counter > options.failure_limit) {
//                        return false
//                    }
//                }
//            }
//        })
//    }

//    // Remove image from array so it is not looped next time. 
//    function getUnloadElements($elements) {
//        return $elements.filter(function (i, e) {
//            return !$elements.eq(i)._lazyload_loadStarted
//        })
//    }

//    // throttle : https://github.com/component/throttle , MIT License
//    function throttle(func, wait) {
//        var ctx, args, rtn, timeoutID // caching
//        var last = 0

//        return function throttled() {
//            ctx = this
//            args = arguments
//            var delta = new Date() - last
//            if (!timeoutID)
//                if (delta >= wait) call()
//                else timeoutID = setTimeout(call, wait - delta)
//            return rtn
//        }

//        function call() {
//            timeoutID = 0
//            last = +new Date()
//            rtn = func.apply(ctx, args)
//            ctx = null
//            args = null
//        }
//    }

//    if (!$.fn.hasOwnProperty('lazyload')) {

//        $.fn.lazyload = function (options) {
//            var $elements = this,
//                isScrollEvent,
//                isScrollTypeEvent,
//                throttleCheckAppear

//            if (!$.isPlainObject(options)) {
//                options = {}
//            }

//            $.each(defaultOptions, function (k, v) {
//                if ($.inArray(k, ['threshold', 'failure_limit', 'check_appear_throttle_time']) != -1) { // these params can be a string
//                    if (type(options[k]) == 'String') {
//                        options[k] = parseInt(options[k], 10)
//                    } else {
//                        options[k] = v
//                    }
//                } else if (k == 'container') { // options.container can be a seletor string \ dom \ jQuery object
//                    if (options.hasOwnProperty(k)) {
//                        if (options[k] == w || options[k] == document) {
//                            options._$container = $window
//                        } else {
//                            options._$container = $(options[k])
//                        }
//                    } else {
//                        options._$container = $window
//                    }
//                    delete options.container
//                } else if (defaultOptions.hasOwnProperty(k) && (!options.hasOwnProperty(k) || (type(options[k]) != type(defaultOptions[k])))) {
//                    options[k] = v
//                }
//            })

//            isScrollEvent = options.event == 'scroll'
//            throttleCheckAppear = options.check_appear_throttle_time == 0 ?
//                checkAppear
//                : throttle(checkAppear, options.check_appear_throttle_time)

//            // isScrollTypeEvent cantains custom scrollEvent . Such as 'scrollstart' & 'scrollstop'
//            // https://github.com/search?utf8=%E2%9C%93&q=scrollstart
//            isScrollTypeEvent = isScrollEvent || options.event == 'scrollstart' || options.event == 'scrollstop'

//            $elements.each(function (i, e) {
//                var element = this,
//                    $element = $elements.eq(i),
//                    placeholderSrc = $element.attr('src'),
//                    originalSrcInAttr = $element.attr('data-' + options.data_attribute), // `data-original` attribute value
//                    originalSrc = options.url_rewriter_fn == emptyFn ?
//                    originalSrcInAttr :
//                        options.url_rewriter_fn.call(element, $element, originalSrcInAttr),
//                    originalSrcset = $element.attr('data-' + options.data_srcset_attribute),
//                    isImg = $element.is('img')

//                if ($element._lazyload_loadStarted == true || placeholderSrc == originalSrc) {
//                    $element._lazyload_loadStarted = true
//                    $elements = getUnloadElements($elements)
//                    return
//                }

//                $element._lazyload_loadStarted = false

//                // If element is an img and no src attribute given, use placeholder. 
//                if (isImg && !placeholderSrc) {
//                    // For browsers that do not support data image.
//                    $element.one('error', function () { // `on` -> `one` : IE6 triggered twice error event sometimes
//                        $element.attr('src', options.placeholder_real_img)
//                    }).attr('src', options.placeholder_data_img)
//                }

//                // When appear is triggered load original image. 
//                $element.one('_lazyload_appear', function () {
//                    var effectParamsIsArray = $.isArray(options.effect_params),
//                        effectIsNotImmediacyShow
//                    function loadFunc() {
//                        // In most situations, the effect is immediacy show, at this time there is no need to hide element first
//                        // Hide this element may cause css reflow, call it as less as possible
//                        if (effectIsNotImmediacyShow) {
//                            // todo: opacity:0 for fadeIn effect
//                            $element.hide()
//                        }
//                        if (isImg) {
//                            // attr srcset first
//                            if (originalSrcset) {
//                                $element.attr('srcset', originalSrcset)
//                            }
//                            if (originalSrc) {
//                                $element.attr('src', originalSrc)
//                            }
//                        } else {
//                            $element.css('background-image', 'url("' + originalSrc + '")')
//                        }
//                        if (effectIsNotImmediacyShow) {
//                            $element[options.effect].apply($element, effectParamsIsArray ? options.effect_params : [])
//                        }
//                        $elements = getUnloadElements($elements)
//                    }
//                    if (!$element._lazyload_loadStarted) {
//                        effectIsNotImmediacyShow = (options.effect != 'show' && $.fn[options.effect] && (!options.effect_params || (effectParamsIsArray && options.effect_params.length == 0)))
//                        if (options.appear != emptyFn) {
//                            options.appear.call(element, $element, $elements.length, options)
//                        }
//                        $element._lazyload_loadStarted = true
//                        if (options.no_fake_img_loader || originalSrcset) {
//                            if (options.load != emptyFn) {
//                                $element.one('load', function () {
//                                    options.load.call(element, $element, $elements.length, options)
//                                })
//                            }
//                            loadFunc()
//                        } else {
//                            $('<img />').one('load', function () { // `on` -> `one` : IE6 triggered twice load event sometimes
//                                loadFunc()
//                                if (options.load != emptyFn) {
//                                    options.load.call(element, $element, $elements.length, options)
//                                }
//                            }).attr('src', originalSrc)
//                        }
//                    }
//                })

//                // When wanted event is triggered load original image 
//                // by triggering appear.                              
//                if (!isScrollTypeEvent) {
//                    $element.on(options.event, function () {
//                        if (!$element._lazyload_loadStarted) {
//                            $element.trigger('_lazyload_appear')
//                        }
//                    })
//                }
//            })

//            // Fire one scroll event per scroll. Not one scroll event per image. 
//            if (isScrollTypeEvent) {
//                options._$container.on(options.event, function () {
//                    throttleCheckAppear($elements, options)
//                })
//            }

//            // Check if something appears when window is resized. 
//            // Force initial check if images should appear when window is onload. 
//            $window.on('resize load', function () {
//                throttleCheckAppear($elements, options)
//            })

//            // Force initial check if images should appear. 
//            $(function () {
//                throttleCheckAppear($elements, options)
//            })

//            return this
//        }
//    }
//})
/*集团网首页end*/