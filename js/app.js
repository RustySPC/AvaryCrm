(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            l = t && "IntersectionObserver" in window,
            a = t && "classList" in document.createElement("p"),
            n = t && window.devicePixelRatio > 1,
            c = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
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
            },
            i = function (t) {
              return e({}, c, t);
            },
            o = function (e, t) {
              var s,
                l = "LazyLoad::Initialized",
                a = new e(t);
              try {
                s = new CustomEvent(l, { detail: { instance: a } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  l,
                  !1,
                  !1,
                  { instance: a }
                );
              }
              window.dispatchEvent(s);
            },
            r = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            S = "data-",
            _ = "ll-status",
            E = function (e, t) {
              return e.getAttribute(S + t);
            },
            A = function (e) {
              return E(e, _);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var l = "data-ll-status";
                null !== s ? e.setAttribute(l, s) : e.removeAttribute(l);
              })(e, 0, t);
            },
            L = function (e) {
              return C(e, null);
            },
            w = function (e) {
              return null === A(e);
            },
            x = function (e) {
              return A(e) === y;
            },
            k = [m, g, v, b],
            q = function (e, t, s, l) {
              e &&
                (void 0 === l ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, l));
            },
            $ = function (e, t) {
              a
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            O = function (e, t) {
              a
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            T = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            P = function (e, t) {
              e && (e.loadingCount += t);
            },
            W = function (e, t) {
              e && (e.toLoadCount = t);
            },
            M = function (e) {
              for (var t, s = [], l = 0; (t = e.children[l]); l += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            D = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && M(s).forEach(t);
            },
            B = function (e, t) {
              M(e).forEach(t);
            },
            R = [r],
            F = [r, h],
            j = [r, d, u],
            z = [f],
            N = function (e) {
              return !!e[p];
            },
            H = function (e) {
              return e[p];
            },
            V = function (e) {
              return delete e[p];
            },
            U = function (e, t) {
              if (!N(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            Z = function (e, t) {
              if (N(e)) {
                var s = H(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            G = function (e, t, s) {
              $(e, t.class_loading),
                C(e, m),
                s && (P(s, 1), q(t.callback_loading, e, s));
            },
            Q = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            J = function (e, t) {
              Q(e, u, E(e, t.data_sizes)),
                Q(e, d, E(e, t.data_srcset)),
                Q(e, r, E(e, t.data_src));
            },
            X = {
              IMG: function (e, t) {
                D(e, function (e) {
                  U(e, j), J(e, t);
                }),
                  U(e, j),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                U(e, R), Q(e, r, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  U(e, R), Q(e, r, E(e, t.data_src));
                }),
                  U(e, F),
                  Q(e, h, E(e, t.data_poster)),
                  Q(e, r, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                U(e, z), Q(e, f, E(e, t.data_src));
              },
            },
            Y = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            K = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                q(e.callback_finish, t);
            },
            ee = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            te = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            le = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var l = t[s];
                  te(e, s, l);
                }
                delete e.llEvLisnrs;
              }
            },
            ae = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                P(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                O(e, t.class_loading),
                t.unobserve_completed && T(e, s);
            },
            ne = function (e, t, s) {
              var l = I(e) || e;
              se(l) ||
                (function (e, t, s) {
                  se(e) || (e.llEvLisnrs = {});
                  var l = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  ee(e, l, t), ee(e, "error", s);
                })(
                  l,
                  function (a) {
                    !(function (e, t, s, l) {
                      var a = x(t);
                      ae(t, s, l),
                        $(t, s.class_loaded),
                        C(t, g),
                        q(s.callback_loaded, t, l),
                        a || K(s, l);
                    })(0, e, t, s),
                      le(l);
                  },
                  function (a) {
                    !(function (e, t, s, l) {
                      var a = x(t);
                      ae(t, s, l),
                        $(t, s.class_error),
                        C(t, b),
                        q(s.callback_error, t, l),
                        a || K(s, l);
                    })(0, e, t, s),
                      le(l);
                  }
                );
            },
            ce = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ne(e, t, s),
                (function (e) {
                  N(e) || (e[p] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var l = E(e, t.data_bg),
                    a = E(e, t.data_bg_hidpi),
                    c = n && a ? a : l;
                  c &&
                    ((e.style.backgroundImage = 'url("'.concat(c, '")')),
                    I(e).setAttribute(r, c),
                    G(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var l = E(e, t.data_bg_multi),
                    a = E(e, t.data_bg_multi_hidpi),
                    c = n && a ? a : l;
                  c &&
                    ((e.style.backgroundImage = c),
                    (function (e, t, s) {
                      $(e, t.class_applied),
                        C(e, v),
                        s &&
                          (t.unobserve_completed && T(e, t),
                          q(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            ie = function (e, t, s) {
              !(function (e) {
                return Y.indexOf(e.tagName) > -1;
              })(e)
                ? ce(e, t, s)
                : (function (e, t, s) {
                    ne(e, t, s),
                      (function (e, t, s) {
                        var l = X[e.tagName];
                        l && (l(e, t), G(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(r), e.removeAttribute(d), e.removeAttribute(u);
            },
            re = function (e) {
              D(e, function (e) {
                Z(e, j);
              }),
                Z(e, j);
            },
            de = {
              IMG: re,
              IFRAME: function (e) {
                Z(e, R);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  Z(e, R);
                }),
                  Z(e, F),
                  e.load();
              },
              OBJECT: function (e) {
                Z(e, z);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (N(e)) {
                        var t = H(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  w(e) ||
                    x(e) ||
                    (O(e, t.class_entered),
                    O(e, t.class_exited),
                    O(e, t.class_applied),
                    O(e, t.class_loading),
                    O(e, t.class_loaded),
                    O(e, t.class_error));
                })(e, t),
                L(e),
                V(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, l) {
                      var a = (function (e) {
                        return k.indexOf(A(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        $(e, s.class_entered),
                        O(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && T(e, s);
                        })(e, s, l),
                        q(s.callback_enter, e, t, l),
                        a || ie(e, s, l);
                    })(e.target, e, t, s)
                  : (function (e, t, s, l) {
                      w(e) ||
                        ($(e, s.class_exited),
                        (function (e, t, s, l) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return A(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (le(e),
                            (function (e) {
                              D(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            re(e),
                            O(e, s.class_loading),
                            P(l, -1),
                            L(e),
                            q(s.callback_cancel, e, t, l));
                        })(e, t, s, l),
                        q(s.callback_exit, e, t, l));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return A(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(w);
              })(e || ge(t));
            },
            ye = function (e, s) {
              var a = i(e);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (e, t) {
                  l &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(a, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), me(s).filter(ve)).forEach(function (t) {
                          O(t, e.class_error), L(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(a, this),
                this.update(s);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  a,
                  n = this._settings,
                  c = be(e, n);
                W(this, c.length),
                  !s && l
                    ? pe(n)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ne(e, t, s),
                                  (function (e, t) {
                                    var s = X[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, s);
                          }),
                            W(s, 0);
                        })(c, n, this)
                      : ((a = c),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, a))
                    : this.loadAll(c);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ge(this._settings).forEach(function (e) {
                    V(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  T(e, t), ie(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var s = i(t);
              ie(e, s);
            }),
            (ye.resetStatus = function (e) {
              L(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, l = 0; (s = t[l]); l += 1) o(e, s);
                  else o(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function s(l) {
    var a = t[l];
    if (void 0 !== a) return a.exports;
    var n = (t[l] = { exports: {} });
    return e[l].call(n.exports, n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      l = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let l = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = l + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      a = (e, s = 500) => (e.hidden ? l(e, s) : t(e, s)),
      n = !0,
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      },
      i = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function r(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function d(e, t) {
      const s = Array.from(e).filter(function (e, s, l) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const l = {},
            a = s.dataset[t].split(",");
          (l.value = a[0]),
            (l.type = a[1] ? a[1].trim() : "max"),
            (l.item = s),
            e.push(l);
        });
        let l = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        l = r(l);
        const a = [];
        if (l.length)
          return (
            l.forEach((t) => {
              const s = t.split(","),
                l = s[1],
                n = s[2],
                c = window.matchMedia(s[0]),
                i = e.filter(function (e) {
                  if (e.value === l && e.type === n) return !0;
                });
              a.push({ itemsArray: i, matchMedia: c });
            }),
            a
          );
      }
    }
    let u = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                u.removeError(t);
            }
            let l = t.querySelectorAll(".checkbox__input");
            if (l.length > 0)
              for (let e = 0; e < l.length; e++) {
                l[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const l = s[t].querySelector("select");
                  e.select.selectBuild(l);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
            : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let l = document.createElement("div");
        if (
          (l.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(l, e),
          l.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          l.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            l,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const l = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            a = this.getSelectElement(l).originalSelect;
          if ("click" === s) {
            if (!a.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(l, a, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(l);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(l, a, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? l.classList.add(this.selectClasses.classSelectFocus)
                  : l.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selects??lose();
        } else this.selects??lose();
      }
      selects??lose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          a(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          l = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        l && l.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let l = "";
        return (
          (l += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (l += t ? s : ""),
          (l += t ? "</span>" : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (l += e.textContent),
          (l += t ? "</span>" : ""),
          (l += t ? "</span>" : ""),
          l
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          l = Array.from(e.options);
        if (l.length > 0) {
          let a = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (l = l.filter((e) => e.value)),
            (a += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            l.forEach((t) => {
              a += this.getOption(t, e);
            }),
            (a += t ? "</div>" : ""),
            a
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          l =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          a = e.dataset.class ? ` ${e.dataset.class}` : "",
          n = !!e.dataset.href && e.dataset.href,
          c = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let i = "";
        return (
          (i += n
            ? `<a ${c} ${l} href="${n}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
            : `<button ${l} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
          (i += this.getSelectElementContent(e)),
          (i += n ? "</a>" : "</button>"),
          i
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && u.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          l = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          a = this;
        t.addEventListener("input", function () {
          l.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && a.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && o(`[select]: ${e}`);
      }
    })({});
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
          ),
            r(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                l = { root: s[0], margin: s[1], threshold: s[2] },
                a = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    a = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === l.root &&
                    String(s) === l.margin &&
                    String(a) === l.threshold
                  )
                    return e;
                }),
                n = this.getScrollWatcherConfig(l);
              this.scrollWatcherInit(a, n);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && o(`[??????????????????????]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let h = !1;
    function p(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (h) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (p.prototype.init = function () {
        const e = this;
        (this.??bjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            l = {};
          (l.element = t),
            (l.parent = t.parentNode),
            (l.destination = document.querySelector(s[0].trim())),
            (l.breakpoint = s[1] ? s[1].trim() : "767"),
            (l.place = s[2] ? s[2].trim() : "last"),
            (l.index = this.indexInParent(l.parent, l.element)),
            this.??bjects.push(l);
        }
        this.arraySort(this.??bjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.??bjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            l = String.prototype.split.call(s, ","),
            a = window.matchMedia(l[0]),
            n = l[1],
            c = Array.prototype.filter.call(this.??bjects, function (e) {
              return e.breakpoint === n;
            });
          a.addListener(function () {
            e.mediaHandler(a, c);
          }),
            this.mediaHandler(a, c);
        }
      }),
      (p.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (p.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (p.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (p.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (p.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new p("max").init();
    let f = document.querySelectorAll("[data-inputchange]");
    if (f)
      for (let e = 0; e < f.length; e++) {
        let t = f[e].querySelectorAll("[data-inputchange-item]");
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          let l = s.querySelector("[data-inputchange-btns]"),
            a = s.querySelectorAll("input, select");
          if (l) {
            let e = s.querySelector(".btns-disabled"),
              t = s.querySelector(".btns-active"),
              n = l.querySelector(".btns-change button"),
              c = l.querySelector(".btns-no button"),
              i = l.querySelector(".btns-ok button");
            n.addEventListener("click", function (l) {
              e.classList.add("_active"), t.classList.add("_active");
              let n = [];
              for (let e = 0; e < a.length; e++) {
                const t = a[e];
                n.push(t.value);
              }
              for (let e = 0; e < a.length; e++) {
                const t = a[e];
                (t.value = ""),
                  (t.disabled = !1),
                  a[0].focus(),
                  t.classList.add("_active");
              }
              i.addEventListener("click", function (l) {
                e.classList.remove("_active"),
                  t.classList.remove("_active"),
                  s.setAttribute("value", s.value);
                for (let e = 0; e < a.length; e++) {
                  const t = a[e];
                  (t.disabled = !0), t.classList.remove("_active");
                }
              }),
                c.addEventListener("click", function (s) {
                  e.classList.remove("_active"), t.classList.remove("_active");
                  for (let e = 0; e < a.length; e++) {
                    const t = a[e];
                    (t.value = n[e]),
                      (t.disabled = !0),
                      t.classList.remove("_active");
                  }
                });
            });
          }
        }
      }
    let m = document.querySelectorAll("[data-paste]");
    if (m)
      for (let e = 0; e < m.length; e++) {
        const t = m[e];
        let s = t.querySelector("[data-paste-btn]"),
          l = t.querySelector("[data-paste-item]");
        s.addEventListener("click", function (e) {
          navigator.clipboard.readText().then(
            (e) => (l.value = l.value + e),
            (e) => console.log(e)
          );
        });
      }
    let g = document.querySelectorAll("[data-tublers]");
    if (g)
      for (let e = 0; e < g.length; e++) {
        let t = g[e].querySelectorAll("[data-tublers-item]");
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          let l = s.querySelector("[data-tublers-btn]"),
            a = s.querySelector("[data-tublers-txta]");
          l.addEventListener("click", function (e) {
            l.classList.toggle("_active"), a.toggleAttribute("disabled");
          });
        }
      }
    let v = document.querySelectorAll(".mainpage-tabs__content");
    if (v)
      for (let e = 0; e < v.length; e++) {
        let t = v[e].querySelectorAll(".paymant-types__btns");
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          s.addEventListener("click", function (e) {
            if (s.classList.contains("active")) s.classList.remove("active");
            else {
              for (let e = 0; e < t.length; e++) {
                t[e].classList.remove("active");
              }
              s.classList.add("active");
            }
          });
        }
      }
    document.querySelector("#char1") &&
      new Chart(document.getElementById("char1"), {
        type: "line",
        data: {
          labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "9",
          ],
          datasets: [
            {
              data: [
                20, 21, 22, 23, 24, 20, 18, 17, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 20, 18, 17, 15, 16, 17, 18, 19,
              ],
              label: "Africa",
              borderColor: "#00AEEF",
              fill: !1,
              boxWidth: 100,
              pointColor: "#00AEEF",
              pointHighlightFill: "#00AEEF",
              pointBorderColor: "#00AEEF",
              pointBackgroundColor: "#00AEEF",
            },
          ],
        },
        options: {
          scales: { x: { grid: { display: !1 } }, y: {} },
          plugins: {
            legend: { display: !1, labels: { color: "rgb(255, 99, 132)" } },
          },
          title: {
            display: !0,
            text: "World population per region (in millions)",
          },
        },
      }),
      document.querySelector("#char2") &&
        new Chart(document.getElementById("char2"), {
          type: "line",
          data: {
            labels: ["01", "02", "03", "04", "05", "06", "07"],
            datasets: [
              {
                data: [20, 21, 22, 23, 24, 20, 18, 17, 15, 16],
                label: "Africa",
                borderColor: "#00AEEF",
                fill: !1,
                boxWidth: 100,
                pointColor: "#00AEEF",
                pointHighlightFill: "#00AEEF",
                pointBorderColor: "#00AEEF",
                pointBackgroundColor: "#00AEEF",
              },
            ],
          },
          options: {
            scales: { x: { grid: { display: !1 } }, y: {} },
            plugins: {
              legend: { display: !1, labels: { color: "rgb(255, 99, 132)" } },
            },
            title: {
              display: !0,
              text: "World population per region (in millions)",
            },
          },
        }),
      window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll(".tel"), function (e) {
          var t;
          function s(e) {
            e.keyCode && (t = e.keyCode),
              this.selectionStart < 3 && e.preventDefault();
            var s = "+375 (__) __ __ ___",
              l = 0,
              a = s.replace(/\D/g, ""),
              n = this.value.replace(/\D/g, ""),
              c = s.replace(/[_\d]/g, function (e) {
                return l < n.length ? n.charAt(l++) || a.charAt(l) : e;
              });
            -1 != (l = c.indexOf("_")) &&
              (l < 5 && (l = 3), (c = c.slice(0, l)));
            var i = s
              .substr(0, this.value.length)
              .replace(/_+/g, function (e) {
                return "\\d{1," + e.length + "}";
              })
              .replace(/[+()]/g, "\\$&");
            (!(i = new RegExp("^" + i + "$")).test(this.value) ||
              this.value.length < 5 ||
              (t > 47 && t < 58)) &&
              (this.value = c),
              "blur" == e.type && this.value.length < 5 && (this.value = "");
          }
          e.addEventListener("input", s, !1),
            e.addEventListener("focus", s, !1),
            e.addEventListener("blur", s, !1),
            e.addEventListener("keydown", s, !1);
        });
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            n &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? c(e)
                  : i(e);
              })(),
              document.querySelector(".menu").classList.toggle("menu-open"),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && n(s);
          let l = d(e, "spollers");
          function n(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    c(e),
                    e.addEventListener("click", i))
                  : (e.classList.remove("_spoller-init"),
                    c(e, !1),
                    e.removeEventListener("click", i));
            });
          }
          function c(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.parentElement.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.parentElement.nextElementSibling.hidden = !1));
              }));
          }
          function i(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                l = s.closest("[data-spollers]"),
                n = !!l.hasAttribute("data-one-spoller");
              l.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && o(l),
                s.classList.toggle("_spoller-active"),
                a(s.parentElement.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function o(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.parentElement.nextElementSibling, 500));
          }
          l &&
            l.length &&
            l.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let s = [];
        if (e.length > 0) {
          const t = (function () {
            if (location.hash) return location.hash.replace("#", "");
          })();
          t && t.startsWith("tab-") && (s = t.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", c),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    l = e.querySelectorAll("[data-tabs-body]>*");
                  const a = e.dataset.tabsIndex,
                    n = s[0] == a;
                  if (n) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  l.length &&
                    ((l = Array.from(l).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    l.forEach((e, l) => {
                      t[l].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        n && l == s[1] && t[l].classList.add("_tab-active"),
                        (e.hidden = !t[l].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let l = d(e, "tabs");
          l &&
            l.length &&
            l.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                a(e.itemsArray, e.matchMedia);
              }),
                a(e.itemsArray, e.matchMedia);
            });
        }
        function a(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              l = e.querySelectorAll("[data-tabs-title]"),
              a = e.querySelector("[data-tabs-body]"),
              n = e.querySelectorAll("[data-tabs-item]");
            (l = Array.from(l).filter((t) => t.closest("[data-tabs]") === e)),
              (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              n.forEach((n, c) => {
                t.matches
                  ? (a.append(l[c]),
                    a.append(n),
                    e.classList.add("_tab-spoller"))
                  : (s.append(l[c]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function n(e) {
          let s = e.querySelectorAll("[data-tabs-title]"),
            a = e.querySelectorAll("[data-tabs-item]");
          const n = e.dataset.tabsIndex;
          const c = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (a.length > 0) {
            const i = e.hasAttribute("data-tabs-hash");
            (a = Array.from(a).filter((t) => t.closest("[data-tabs]") === e)),
              (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              a.forEach((e, a) => {
                var o;
                s[a].classList.contains("_tab-active")
                  ? (c ? l(e, c) : (e.hidden = !1),
                    i &&
                      !e.closest(".popup") &&
                      ((o = (o = `tab-${n}-${a}`)
                        ? `#${o}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", o)))
                  : c
                  ? t(e, c)
                  : (e.hidden = !0);
              });
          }
        }
        function c(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              l = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !l.querySelector("._slide")
            ) {
              let e = l.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === l
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                n(l);
            }
            e.preventDefault();
          }
        }
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      });
  })();
})();
