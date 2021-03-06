!(function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(
      require('prop-types'),
      require('window-or-global'),
      require('react'),
      require('react-progressive-image'),
      require('browser-image-size')
    );
  else if ('function' == typeof define && define.amd)
    define([
      'prop-types',
      'window-or-global',
      'react',
      'react-progressive-image',
      'browser-image-size'
    ], t);
  else {
    var r =
      'object' == typeof exports
        ? t(
            require('prop-types'),
            require('window-or-global'),
            require('react'),
            require('react-progressive-image'),
            require('browser-image-size')
          )
        : t(
            e['prop-types'],
            e['window-or-global'],
            e.react,
            e['react-progressive-image'],
            e['browser-image-size']
          );
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n];
  }
})(this, function(e, t, r, n, o) {
  return (function(e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = '/'),
      r((r.s = 12))
    );
  })([
    function(t, r) {
      t.exports = e;
    },
    function(e, r) {
      e.exports = t;
    },
    function(e, t) {
      e.exports = r;
    },
    function(e, t, r) {
      e.exports = r(7);
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t) {
      e.exports = o;
    },
    function(e, t, r) {
      var n = r(10),
        o = ['process'];
      e.exports = function() {
        var e = new Worker(
          URL.createObjectURL(
            new Blob([
              '!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(e,t){e.exports={ALIGN_MODES:{horizontal_left:"HORIZONTAL_ALIGN_LEFT",horizontal_center:"HORIZONTAL_ALIGN_CENTER",horizontal_right:"HORIZONTAL_ALIGN_RIGHT",vertical_top:"VERTICAL_ALIGN_TOP",vertical_middle:"VERTICAL_ALIGN_MIDDLE",vertical_bottom:"VERTICAL_ALIGN_BOTTOM"},RESIZE_MODES:{neighbor:"RESIZE_NEAREST_NEIGHBOR",bilinear:"RESIZE_BILINEAR",bicubic:"RESIZE_BICUBIC",hermite:"RESIZE_HERMITE",bezier:"RESIZE_BEZIER"}}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=n.ALIGN_MODES,i=n.RESIZE_MODES,a=function(e,t,r){var n=t.resize,a=t.quality,c=t.greyscale,u=t.contain,_=t.cover,s=t.normalize,p=t.invert,l=t.opaque,f=t.sepia,g=t.dither565,m=t.scale,I=t.scaleToFit,d=t.flip,h=t.rotate,v=t.brightness,y=t.contrast,E=t.fade,b=t.opacity,O=t.blur,R=t.posterize,T=t.crop,A=t.background;function L(e,t,n){return function(e){return r[e]}(function(e,t){return void 0!==e?t[e.mode]:null}(e,t))||n}var N=r.AUTO,S=function(e,t){return void 0!==e?e:t};function z(t,r,n){return t?r[n]():e.pass(r)}function j(t,n,i){return void 0!==t&&Object.keys(t).length>0?n[i](t.width,t.height,L(t,o,r.HORIZONTAL_ALIGN_CENTER)):e.pass(e)}function C(t,r,n){return void 0!==t?r[n](t):e.pass(r)}return e.__proto__.pass=function(e){return e},e.__proto__.resizeAnImage=function(e,t){return void 0!==t&&Object.keys(t).length>0?e.resize(S(t.width,N),S(t.height,N),L(t,i,r.RESIZE_BILINEAR)):e.pass(e)},e.__proto__.cropImage=function(e,t){return void 0!==t?e.crop(S(t.x,N),S(t.y,N),S(t.width,0),S(t.height,0)):e.pass(e)},e.__proto__.changeImageQuality=function(e,t){return C(t,e,"quality")},e.__proto__.applyGreyscale=function(e,t){return z(t,e,"greyscale")},e.__proto__.normalizeImage=function(e,t){return z(t,e,"normalize")},e.__proto__.invertImage=function(e,t){return z(t,e,"invert")},e.__proto__.opaqueImage=function(e,t){return z(t,e,"opaque")},e.__proto__.sepiaFilter=function(e,t){return z(t,e,"sepia")},e.__proto__.ditherFilter=function(e,t){return z(t,e,"dither565")},e.__proto__.scaleImage=function(e,t){return C(t,e,"scale")},e.__proto__.scaleToFitImage=function(e,t){return void 0!==t?e.scaleToFit(S(t.width,N),S(t.height,N)):e.pass(e)},e.__proto__.flipImage=function(e,t){return void 0!==t?e.flip(S(t.horizontal,!1),S(t.vertical,!1)):e.pass(e)},e.__proto__.rotateImage=function(e,t){return void 0!==t?e.rotate(S(t.degree,0),L(t,i,!1)):e.pass(e)},e.__proto__.applyBackground=function(e,t){return void 0!==t?e.background(t):e.pass(e)},e.__proto__.changeBrightness=function(e,t){return C(t,e,"brightness")},e.__proto__.changeContrast=function(e,t){return C(t,e,"contrast")},e.__proto__.fadeImage=function(e,t){return C(t,e,"fade")},e.__proto__.changeOpacity=function(e,t){return C(t,e,"opacity")},e.__proto__.blurImage=function(e,t){return C(t,e,"blur")},e.__proto__.posterizeImage=function(e,t){return C(t,e,"posterize")},e.__proto__.containImage=function(e,t){return j(t,e,"contain")},e.__proto__.coverImage=function(e,t){return j(t,e,"cover")},e.clone().applyBackground(e,A).resizeAnImage(e,n).changeImageQuality(e,a).applyGreyscale(e,c).normalizeImage(e,s).invertImage(e,p).opaqueImage(e,l).sepiaFilter(e,f).ditherFilter(e,g).scaleImage(e,m).scaleToFitImage(e,I).flipImage(e,d).rotateImage(e,h).cropImage(e,T).changeBrightness(e,v).changeContrast(e,y).fadeImage(e,E).changeOpacity(e,b).blurImage(e,O).posterizeImage(e,R).coverImage(e,_).color(function(e){var t=[];return void 0!==e.colors?(Object.keys(e.colors).forEach(function(r){if(["mix","xor"].includes(r)){var n={apply:r,params:[e.colors[r].color,e.colors[r].amount]};t.push(n)}var o={apply:r,params:[e.colors[r]]};t.push(o)}),t):[]}(t)).containImage(e,u)};r.d(t,"process",function(){return u});var c="https://unpkg.com/jimp@0.6.0/browser/lib/jimp.min.js";function u(e){return new Promise(function(t){try{Jimp}catch(t){var r=e.customCdn;importScripts(r||c)}Jimp.read(e.image).then(function(r){a(r,e.props,Jimp).getBase64(Jimp.AUTO,function(e,r){t({src:r,err:e})})})})}addEventListener("message",function(e){var r,n=e.data,o=n.type,i=n.method,a=n.id,c=n.params;"RPC"===o&&i&&((r=t[i])?Promise.resolve().then(function(){return r.apply(t,c)}):Promise.reject("No such method")).then(function(e){postMessage({type:"RPC",id:a,result:e})}).catch(function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:a,error:t})})}),postMessage({type:"RPC",method:"ready"})}]);'
            ])
          ),
          { name: '[hash].worker.js' }
        );
        return n(e, o), e;
      };
    },
    function(e, t, r) {
      var n =
          (function() {
            return this;
          })() || Function('return this')(),
        o =
          n.regeneratorRuntime &&
          Object.getOwnPropertyNames(n).indexOf('regeneratorRuntime') >= 0,
        i = o && n.regeneratorRuntime;
      if (((n.regeneratorRuntime = void 0), (e.exports = r(8)), o))
        n.regeneratorRuntime = i;
      else
        try {
          delete n.regeneratorRuntime;
        } catch (e) {
          n.regeneratorRuntime = void 0;
        }
    },
    function(e, t) {
      !(function(t) {
        'use strict';
        var r,
          n = Object.prototype,
          o = n.hasOwnProperty,
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag',
          s = 'object' == typeof e,
          l = t.regeneratorRuntime;
        if (l) s && (e.exports = l);
        else {
          (l = t.regeneratorRuntime = s ? e.exports : {}).wrap = b;
          var p = 'suspendedStart',
            f = 'suspendedYield',
            h = 'executing',
            g = 'completed',
            m = {},
            d = {};
          d[a] = function() {
            return this;
          };
          var _ = Object.getPrototypeOf,
            y = _ && _(_(z([])));
          y && y !== n && o.call(y, a) && (d = y);
          var v = (O.prototype = w.prototype = Object.create(d));
          (E.prototype = v.constructor = O),
            (O.constructor = E),
            (O[u] = E.displayName = 'GeneratorFunction'),
            (l.isGeneratorFunction = function(e) {
              var t = 'function' == typeof e && e.constructor;
              return (
                !!t &&
                (t === E || 'GeneratorFunction' === (t.displayName || t.name))
              );
            }),
            (l.mark = function(e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, O)
                  : ((e.__proto__ = O), u in e || (e[u] = 'GeneratorFunction')),
                (e.prototype = Object.create(v)),
                e
              );
            }),
            (l.awrap = function(e) {
              return { __await: e };
            }),
            S(L.prototype),
            (L.prototype[c] = function() {
              return this;
            }),
            (l.AsyncIterator = L),
            (l.async = function(e, t, r, n) {
              var o = new L(b(e, t, r, n));
              return l.isGeneratorFunction(t)
                ? o
                : o.next().then(function(e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            S(v),
            (v[u] = 'Generator'),
            (v[a] = function() {
              return this;
            }),
            (v.toString = function() {
              return '[object Generator]';
            }),
            (l.keys = function(e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (l.values = z),
            (k.prototype = {
              constructor: k,
              reset: function(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = r),
                  this.tryEntries.forEach(T),
                  !e)
                )
                  for (var t in this)
                    't' === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = r);
              },
              stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(n, o) {
                  return (
                    (c.type = 'throw'),
                    (c.arg = e),
                    (t.next = n),
                    o && ((t.method = 'next'), (t.arg = r)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ('root' === a.tryLoc) return n('end');
                  if (a.tryLoc <= this.prev) {
                    var u = o.call(a, 'catchLoc'),
                      s = o.call(a, 'finallyLoc');
                    if (u && s) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, 'finallyLoc') &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ('break' === e || 'continue' === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), m)
                    : this.complete(a)
                );
              },
              complete: function(e, t) {
                if ('throw' === e.type) throw e.arg;
                return (
                  'break' === e.type || 'continue' === e.type
                    ? (this.next = e.arg)
                    : 'return' === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === e.type && t && (this.next = t),
                  m
                );
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), T(r), m;
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      T(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function(e, t, n) {
                return (
                  (this.delegate = {
                    iterator: z(e),
                    resultName: t,
                    nextLoc: n
                  }),
                  'next' === this.method && (this.arg = r),
                  m
                );
              }
            });
        }
        function b(e, t, r, n) {
          var o = t && t.prototype instanceof w ? t : w,
            i = Object.create(o.prototype),
            a = new k(n || []);
          return (
            (i._invoke = (function(e, t, r) {
              var n = p;
              return function(o, i) {
                if (n === h) throw new Error('Generator is already running');
                if (n === g) {
                  if ('throw' === o) throw i;
                  return j();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = R(a, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (n === p) throw ((n = g), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = h;
                  var u = I(e, t, r);
                  if ('normal' === u.type) {
                    if (((n = r.done ? g : f), u.arg === m)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  'throw' === u.type &&
                    ((n = g), (r.method = 'throw'), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            i
          );
        }
        function I(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        function w() {}
        function E() {}
        function O() {}
        function S(e) {
          ['next', 'throw', 'return'].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function L(e) {
          var t;
          this._invoke = function(r, n) {
            function i() {
              return new Promise(function(t, i) {
                !(function t(r, n, i, a) {
                  var c = I(e[r], e, n);
                  if ('throw' !== c.type) {
                    var u = c.arg,
                      s = u.value;
                    return s && 'object' == typeof s && o.call(s, '__await')
                      ? Promise.resolve(s.__await).then(
                          function(e) {
                            t('next', e, i, a);
                          },
                          function(e) {
                            t('throw', e, i, a);
                          }
                        )
                      : Promise.resolve(s).then(function(e) {
                          (u.value = e), i(u);
                        }, a);
                  }
                  a(c.arg);
                })(r, n, t, i);
              });
            }
            return (t = t ? t.then(i, i) : i());
          };
        }
        function R(e, t) {
          var n = e.iterator[t.method];
          if (n === r) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = r),
                R(e, t),
                'throw' === t.method)
              )
                return m;
              (t.method = 'throw'),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var o = I(n, e.iterator, t.arg);
          if ('throw' === o.type)
            return (
              (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), m
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
                (t.delegate = null),
                m)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              m);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function k(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function z(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = r), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: r, done: !0 };
        }
      })(
        (function() {
          return this;
        })() || Function('return this')()
      );
    },
    function(e, t, r) {
      function n(e) {
        var t = [],
          r = e.toString(),
          n = r.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
        if (!n) return t;
        for (
          var o,
            i = n[1],
            a = new RegExp(
              '(\\\\n|\\W)' +
                (i + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&') +
                '\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\w|/|@]+).*?\\)',
              'g'
            );
          (o = a.exec(r));

        )
          t.push(o[3]);
        return t;
      }
      e.exports = function(e, t) {
        t = t || {};
        var o = r.m,
          i = t.all
            ? Object.keys(o)
            : (function(e, t) {
                for (var r = [t], o = [], i = {}; r.length; ) {
                  var a = r.pop();
                  if (!i[a] && e[a]) {
                    (i[a] = !0), o.push(a);
                    var c = n(e[a]);
                    r = r.concat(c);
                  }
                }
                return o;
              })(o, e),
          a =
            '(' +
            function(e) {
              var t = {};
              function r(n) {
                if (t[n]) return t[n].exports;
                var o = (t[n] = { i: n, l: !1, exports: {} });
                return (
                  e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
                );
              }
              (r.m = e),
                (r.c = t),
                (r.i = function(e) {
                  return e;
                }),
                (r.d = function(e, t, n) {
                  r.o(e, t) ||
                    Object.defineProperty(e, t, {
                      configurable: !1,
                      enumerable: !0,
                      get: n
                    });
                }),
                (r.n = function(e) {
                  var t =
                    e && e.__esModule
                      ? function() {
                          return e.default;
                        }
                      : function() {
                          return e;
                        };
                  return r.d(t, 'a', t), t;
                }),
                (r.o = function(e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (r.p = '/'),
                (r.oe = function(e) {
                  throw (console.error(e), e);
                });
              var n = r((r.s = ENTRY_MODULE));
              return n.default || n;
            }
              .toString()
              .replace('ENTRY_MODULE', JSON.stringify(e)) +
            ')({' +
            i
              .map(function(e) {
                return JSON.stringify(e) + ': ' + o[e].toString();
              })
              .join(',') +
            '})(self);',
          c = new window.Blob([a], { type: 'text/javascript' });
        if (t.bare) return c;
        var u = (
            window.URL ||
            window.webkitURL ||
            window.mozURL ||
            window.msURL
          ).createObjectURL(c),
          s = new window.Worker(u);
        return (s.objectURL = u), s;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        var r = 0,
          n = {};
        e.addEventListener('message', function(t) {
          var r = t.data;
          if ('RPC' === r.type)
            if (r.id) {
              var o = n[r.id];
              o &&
                (delete n[r.id],
                r.error
                  ? o[1](Object.assign(Error(r.error.message), r.error))
                  : o[0](r.result));
            } else {
              var i = document.createEvent('Event');
              i.initEvent(r.method, !1, !1),
                (i.data = r.params),
                e.dispatchEvent(i);
            }
        }),
          t.forEach(function(t) {
            e[t] = function() {
              for (var o = [], i = arguments.length; i--; ) o[i] = arguments[i];
              return new Promise(function(i, a) {
                var c = ++r;
                (n[c] = [i, a]),
                  e.postMessage({ type: 'RPC', id: c, method: t, params: o });
              });
            };
          });
      };
    },
    function(e, t) {
      e.exports = {
        ALIGN_MODES: {
          horizontal_left: 'HORIZONTAL_ALIGN_LEFT',
          horizontal_center: 'HORIZONTAL_ALIGN_CENTER',
          horizontal_right: 'HORIZONTAL_ALIGN_RIGHT',
          vertical_top: 'VERTICAL_ALIGN_TOP',
          vertical_middle: 'VERTICAL_ALIGN_MIDDLE',
          vertical_bottom: 'VERTICAL_ALIGN_BOTTOM'
        },
        RESIZE_MODES: {
          neighbor: 'RESIZE_NEAREST_NEIGHBOR',
          bilinear: 'RESIZE_BILINEAR',
          bicubic: 'RESIZE_BICUBIC',
          hermite: 'RESIZE_HERMITE',
          bezier: 'RESIZE_BEZIER'
        }
      };
    },
    function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r(3),
        o = r.n(n),
        i = r(2),
        a = r.n(i),
        c = r(4),
        u = r.n(c),
        s = r(5),
        l = r.n(s),
        p = (r(9), r(1)),
        f = r.n(p),
        h = function(e) {
          var t = e.resize,
            r = e.quality,
            n = e.greyscale,
            o = e.contain,
            i = e.cover,
            a = e.normalize,
            c = e.invert,
            u = e.opaque,
            s = e.sepia,
            l = e.dither565,
            p = e.scale;
          return {
            resize: t,
            quality: r,
            greyscale: n,
            contain: o,
            cover: i,
            crop: e.crop,
            normalize: a,
            invert: c,
            opaque: u,
            sepia: s,
            dither565: l,
            scale: p,
            scaleToFit: e.scaleToFit,
            flip: e.flip,
            rotate: e.rotate,
            brightness: e.brightness,
            contrast: e.contrast,
            fade: e.fade,
            opacity: e.opacity,
            blur: e.blur,
            posterize: e.posterize,
            colors: e.colors,
            background: e.background
          };
        },
        g = function(e, t, r) {
          return void 0 !== e.resize
            ? e.resize[r]
            : void 0 !== e.crop
              ? e.crop[r]
              : void 0 !== e.contain
                ? e.contain[r]
                : void 0 !== e.cover
                  ? e.cover[r]
                  : void 0 !== e.scaleToFit
                    ? e.scaleToFit[r]
                    : void 0 !== e.style
                      ? e.style[r]
                      : void 0 !== e[r] ? parseInt(e[r], 10) : t;
        },
        m =
          'Browser build for Jimp not found. Place this in your index.html file and restart the server - \n<script src="https://unpkg.com/jimp@0.5.6/browser/lib/jimp.min.js"></script>\n',
        d =
          'For better performance, set disableWebWorker to false. This will keep your UI responsive as the image will be processed in a web worker.',
        _ = function(e, t, r) {
          return null !== r ? r.setItem(e, t) : null;
        },
        y = function(e, t) {
          return null !== t ? t.getItem(e) : null;
        },
        v = function(e, t) {
          return null !== t ? t.removeItem(e) : null;
        },
        b =
          void 0 !== f.a.Jimp && 'function' == typeof f.a.Jimp
            ? f.a.Jimp
            : void 0,
        I = r(0),
        w = r.n(I),
        E = (w.a.shape({
          width: w.a.number,
          height: w.a.number,
          mode: w.a.string
        }),
        w.a.shape({ width: w.a.number, height: w.a.number, mode: w.a.string }),
        w.a.shape({ width: w.a.number, height: w.a.number, mode: w.a.string }),
        w.a.shape({ width: w.a.number, height: w.a.number }),
        w.a.shape({ horizontal: w.a.bool, vertical: w.a.bool }),
        w.a.shape({ degree: w.a.number, mode: w.a.string }),
        w.a.shape({
          x: w.a.number,
          y: w.a.number,
          w: w.a.number,
          h: w.a.number
        }),
        w.a.shape({ color: w.a.string, amount: w.a.number })),
        O = w.a.shape({ color: w.a.string, amount: w.a.number }),
        S = (w.a.shape({
          lighten: w.a.number,
          brighten: w.a.number,
          darken: w.a.number,
          desaturate: w.a.number,
          saturate: w.a.number,
          greyscale: w.a.number,
          spin: w.a.number,
          mix: E,
          tint: w.a.number,
          shade: w.a.number,
          xor: O,
          red: w.a.number,
          green: w.a.number,
          blue: w.a.number
        }),
        w.a.number,
        w.a.number,
        w.a.number,
        w.a.bool,
        w.a.number,
        w.a.bool,
        w.a.bool,
        w.a.any.isRequired,
        w.a.bool,
        w.a.number,
        w.a.number,
        w.a.func,
        w.a.bool,
        w.a.number,
        w.a.bool,
        w.a.number,
        w.a.bool,
        w.a.string,
        w.a.func,
        w.a.func,
        r(6)),
        L = r.n(S),
        R = r(11),
        x = R.ALIGN_MODES,
        T = R.RESIZE_MODES,
        k = function(e, t, r) {
          var n = t.resize,
            o = t.quality,
            i = t.greyscale,
            a = t.contain,
            c = t.cover,
            u = t.normalize,
            s = t.invert,
            l = t.opaque,
            p = t.sepia,
            f = t.dither565,
            h = t.scale,
            g = t.scaleToFit,
            m = t.flip,
            d = t.rotate,
            _ = t.brightness,
            y = t.contrast,
            v = t.fade,
            b = t.opacity,
            I = t.blur,
            w = t.posterize,
            E = t.crop,
            O = t.background;
          function S(e, t, n) {
            return (
              (function(e) {
                return r[e];
              })(
                (function(e, t) {
                  return void 0 !== e ? t[e.mode] : null;
                })(e, t)
              ) || n
            );
          }
          var L = r.AUTO,
            R = function(e, t) {
              return void 0 !== e ? e : t;
            };
          function k(t, r, n) {
            return t ? r[n]() : e.pass(r);
          }
          function z(t, n, o) {
            return void 0 !== t && Object.keys(t).length > 0
              ? n[o](t.width, t.height, S(t, x, r.HORIZONTAL_ALIGN_CENTER))
              : e.pass(e);
          }
          function j(t, r, n) {
            return void 0 !== t ? r[n](t) : e.pass(r);
          }
          return (
            (e.__proto__.pass = function(e) {
              return e;
            }),
            (e.__proto__.resizeAnImage = function(e, t) {
              return void 0 !== t && Object.keys(t).length > 0
                ? e.resize(
                    R(t.width, L),
                    R(t.height, L),
                    S(t, T, r.RESIZE_BILINEAR)
                  )
                : e.pass(e);
            }),
            (e.__proto__.cropImage = function(e, t) {
              return void 0 !== t
                ? e.crop(R(t.x, L), R(t.y, L), R(t.width, 0), R(t.height, 0))
                : e.pass(e);
            }),
            (e.__proto__.changeImageQuality = function(e, t) {
              return j(t, e, 'quality');
            }),
            (e.__proto__.applyGreyscale = function(e, t) {
              return k(t, e, 'greyscale');
            }),
            (e.__proto__.normalizeImage = function(e, t) {
              return k(t, e, 'normalize');
            }),
            (e.__proto__.invertImage = function(e, t) {
              return k(t, e, 'invert');
            }),
            (e.__proto__.opaqueImage = function(e, t) {
              return k(t, e, 'opaque');
            }),
            (e.__proto__.sepiaFilter = function(e, t) {
              return k(t, e, 'sepia');
            }),
            (e.__proto__.ditherFilter = function(e, t) {
              return k(t, e, 'dither565');
            }),
            (e.__proto__.scaleImage = function(e, t) {
              return j(t, e, 'scale');
            }),
            (e.__proto__.scaleToFitImage = function(e, t) {
              return void 0 !== t
                ? e.scaleToFit(R(t.width, L), R(t.height, L))
                : e.pass(e);
            }),
            (e.__proto__.flipImage = function(e, t) {
              return void 0 !== t
                ? e.flip(R(t.horizontal, !1), R(t.vertical, !1))
                : e.pass(e);
            }),
            (e.__proto__.rotateImage = function(e, t) {
              return void 0 !== t
                ? e.rotate(R(t.degree, 0), S(t, T, !1))
                : e.pass(e);
            }),
            (e.__proto__.applyBackground = function(e, t) {
              return void 0 !== t ? e.background(t) : e.pass(e);
            }),
            (e.__proto__.changeBrightness = function(e, t) {
              return j(t, e, 'brightness');
            }),
            (e.__proto__.changeContrast = function(e, t) {
              return j(t, e, 'contrast');
            }),
            (e.__proto__.fadeImage = function(e, t) {
              return j(t, e, 'fade');
            }),
            (e.__proto__.changeOpacity = function(e, t) {
              return j(t, e, 'opacity');
            }),
            (e.__proto__.blurImage = function(e, t) {
              return j(t, e, 'blur');
            }),
            (e.__proto__.posterizeImage = function(e, t) {
              return j(t, e, 'posterize');
            }),
            (e.__proto__.containImage = function(e, t) {
              return z(t, e, 'contain');
            }),
            (e.__proto__.coverImage = function(e, t) {
              return z(t, e, 'cover');
            }),
            e
              .clone()
              .applyBackground(e, O)
              .resizeAnImage(e, n)
              .changeImageQuality(e, o)
              .applyGreyscale(e, i)
              .normalizeImage(e, u)
              .invertImage(e, s)
              .opaqueImage(e, l)
              .sepiaFilter(e, p)
              .ditherFilter(e, f)
              .scaleImage(e, h)
              .scaleToFitImage(e, g)
              .flipImage(e, m)
              .rotateImage(e, d)
              .cropImage(e, E)
              .changeBrightness(e, _)
              .changeContrast(e, y)
              .fadeImage(e, v)
              .changeOpacity(e, b)
              .blurImage(e, I)
              .posterizeImage(e, w)
              .coverImage(e, c)
              .color(
                (function(e) {
                  var t = [];
                  return void 0 !== e.colors
                    ? (Object.keys(e.colors).forEach(function(r) {
                        if (['mix', 'xor'].includes(r)) {
                          var n = {
                            apply: r,
                            params: [e.colors[r].color, e.colors[r].amount]
                          };
                          t.push(n);
                        }
                        var o = { apply: r, params: [e.colors[r]] };
                        t.push(o);
                      }),
                      t)
                    : [];
                })(t)
              )
              .containImage(e, a)
          );
        };
      function z(e) {
        return (z =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function j(e, t) {
        return (j =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function N(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function P(e, t) {
        return !t || ('object' !== z(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function A(e) {
        return (A =
          Object.getPrototypeOf ||
          function(e) {
            return e.__proto__;
          })(e);
      }
      var C = (function(e) {
        function t() {
          var e, r, n;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++)
            c[s] = arguments[s];
          return P(
            n,
            ((r = n = P(this, (e = A(t)).call.apply(e, [this].concat(c)))),
            (n.state = { src: '', err: '', height: null, width: null }),
            (n.componentWillMount = function() {
              n.checkStorageSupport(),
                'undefined' == typeof Worker ||
                  n.props.disableWebWorker ||
                  (n.worker = L()());
            }),
            (n.componentDidMount = function() {
              n.getOriginalImageSize(n.props),
                n.processInMainThreadOrInWebWorker(
                  n.worker,
                  n.props,
                  n.myStorage
                );
            }),
            (n.componentDidUpdate = function() {
              n.props.image &&
                !n.props.disableRerender &&
                n.processInMainThreadOrInWebWorker(
                  n.worker,
                  n.props,
                  n.myStorage
                );
            }),
            (n.componentWillUnmount = function() {
              null !== n.worker && n.worker.terminate(),
                v('placeholder', n.myStorage);
            }),
            (n.checkStorageSupport = function() {
              return 'undefined' != typeof Storage && n.props.storage
                ? (n.myStorage = f.a.localStorage)
                : n.props.storage || 'undefined' == typeof Storage
                  ? (n.myStorage = null)
                  : (n.clearStorage(), (n.myStorage = null));
            }),
            (n.passPropsToParent = function(e, t, r) {
              return void 0 !== e.processedImage
                ? e.processedImage(t, r)
                : null;
            }),
            (n.processInMainThreadOrInWebWorker = function(e, t, r) {
              return 'undefined' == typeof Worker || t.disableWebWorker
                ? void 0 !== b && t.disableWebWorker
                  ? (console.info(d), n.processInMainThread(t))
                  : console.error(m)
                : n.processInWebWorker(e, t, r);
            }),
            (n.clearStorage = function() {
              return f.a.localStorage.removeItem('placeholder');
            }),
            (n.getOriginalImageSize = function(e) {
              l()(e.image).then(function(e) {
                return n.setState({ height: e.height, width: e.width });
              });
            }),
            (n.getDefaultImageSize = function(e) {
              var t = n.state,
                r = t.height,
                o = t.width;
              return { height: g(e, r, 'height'), width: g(e, o, 'width') };
            }),
            (n.myStorage = null),
            (n.processInMainThread = function(e) {
              b.read(e.image).then(function(t) {
                k(t, e, b).getBase64(b.AUTO, function(t, r) {
                  (n.state.src === r && n.state.err === t) ||
                    (n.setState({ src: r, err: t }),
                    n.passPropsToParent(e, r, t),
                    'function' == typeof e.onProcessFinish &&
                      e.onProcessFinish());
                });
              });
            }),
            (n.processInWebWorker = (function() {
              var e = (function(e) {
                return function() {
                  var t = this,
                    r = arguments;
                  return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e, t) {
                      try {
                        var r = i[e](t),
                          a = r.value;
                      } catch (e) {
                        return void o(e);
                      }
                      r.done ? n(a) : Promise.resolve(a).then(c, u);
                    }
                    function c(e) {
                      a('next', e);
                    }
                    function u(e) {
                      a('throw', e);
                    }
                    c();
                  });
                };
              })(
                o.a.mark(function e(t, r, i) {
                  var a;
                  return o.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null === t) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (e.next = 3),
                              t.process({ props: h(r), image: r.image })
                            );
                          case 3:
                            ((a = e.sent).src === n.state.src &&
                              a.err === n.state.err) ||
                              (n.setState({ src: a.src, err: a.err }),
                              _('placeholder', a.src, i),
                              n.passPropsToParent(r, a.src, a.err),
                              'function' == typeof r.onProcessFinish &&
                                r.onProcessFinish());
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
              return function(t, r, n) {
                return e.apply(this, arguments);
              };
            })()),
            (n.worker = null),
            (n.processedImage = function(e, t, r, n, o) {
              return a.a.createElement(
                'img',
                Object.assign({ src: e }, t, {
                  style: r,
                  ref: n,
                  crossOrigin: o
                })
              );
            }),
            (n.placeholderImage = function(e) {
              return null === y('placeholder', n.myStorage)
                ? e
                : y('placeholder', n.myStorage);
            }),
            (n.showImage = function(e, t, r) {
              return a.a.createElement(
                u.a,
                { src: e, placeholder: n.placeholderImage(t.image) },
                function(e) {
                  return n.processedImage(
                    e,
                    r,
                    n.getDefaultImageSize(t),
                    t.getImageRef,
                    t.crossOrigin
                  );
                }
              );
            }),
            r)
          );
        }
        return (
          (function(e, t, r) {
            t && N(e.prototype, t);
          })(t, [
            {
              key: 'render',
              value: function() {
                var e = this.state.src,
                  t = (function(e) {
                    return (
                      e.image,
                      e.resize,
                      e.quality,
                      e.greyscale,
                      e.contain,
                      e.cover,
                      e.normalize,
                      e.invert,
                      e.opaque,
                      e.sepia,
                      e.dither565,
                      e.scale,
                      e.scaleToFit,
                      e.flip,
                      e.rotate,
                      e.crop,
                      e.brightness,
                      e.contrast,
                      e.fade,
                      e.opacity,
                      e.blur,
                      e.posterize,
                      e.colors,
                      e.placeholder,
                      e.processedImage,
                      e.storage,
                      e.disableWebWorker,
                      e.disableRerender,
                      e.customCdn,
                      e.onProcessFinish,
                      e.background,
                      e.getImageRef,
                      (function(e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          o = {},
                          i = Object.keys(e);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++)
                            (r = a[n]),
                              t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  r
                                ) &&
                                  (o[r] = e[r]));
                        }
                        return o;
                      })(e, [
                        'image',
                        'resize',
                        'quality',
                        'greyscale',
                        'contain',
                        'cover',
                        'normalize',
                        'invert',
                        'opaque',
                        'sepia',
                        'dither565',
                        'scale',
                        'scaleToFit',
                        'flip',
                        'rotate',
                        'crop',
                        'brightness',
                        'contrast',
                        'fade',
                        'opacity',
                        'blur',
                        'posterize',
                        'colors',
                        'placeholder',
                        'processedImage',
                        'storage',
                        'disableWebWorker',
                        'disableRerender',
                        'customCdn',
                        'onProcessFinish',
                        'background',
                        'getImageRef'
                      ])
                    );
                  })(this.props);
                return this.showImage(e, this.props, t);
              }
            }
          ]),
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            j(e.prototype, t && t.prototype), t && j(e, t);
          })(t, e),
          t
        );
      })(i.Component);
      C.defaultProps = {
        storage: !0,
        greyscale: !1,
        normalize: !1,
        invert: !1,
        opaque: !1,
        sepia: !1,
        dither565: !1,
        disableWebWorker: !1,
        crossOrigin: 'use-credentials'
      };
      var F = C;
      t.default = F;
    }
  ]);
});
