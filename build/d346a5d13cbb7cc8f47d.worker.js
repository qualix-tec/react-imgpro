!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
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
    r((r.s = 1));
})([
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
    var n = r(0),
      o = n.ALIGN_MODES,
      i = n.RESIZE_MODES,
      a = function(e, t, r) {
        var n = t.resize,
          a = t.quality,
          c = t.greyscale,
          u = t.contain,
          _ = t.cover,
          s = t.normalize,
          p = t.invert,
          l = t.opaque,
          f = t.sepia,
          g = t.dither565,
          m = t.scale,
          I = t.scaleToFit,
          d = t.flip,
          h = t.rotate,
          v = t.brightness,
          y = t.contrast,
          E = t.fade,
          b = t.opacity,
          O = t.blur,
          R = t.posterize,
          T = t.crop,
          A = t.background;
        function L(e, t, n) {
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
        var N = r.AUTO,
          S = function(e, t) {
            return void 0 !== e ? e : t;
          };
        function z(t, r, n) {
          return t ? r[n]() : e.pass(r);
        }
        function j(t, n, i) {
          return void 0 !== t && Object.keys(t).length > 0
            ? n[i](t.width, t.height, L(t, o, r.HORIZONTAL_ALIGN_CENTER))
            : e.pass(e);
        }
        function C(t, r, n) {
          return void 0 !== t ? r[n](t) : e.pass(r);
        }
        return (
          (e.__proto__.pass = function(e) {
            return e;
          }),
          (e.__proto__.resizeAnImage = function(e, t) {
            return void 0 !== t && Object.keys(t).length > 0
              ? e.resize(
                  S(t.width, N),
                  S(t.height, N),
                  L(t, i, r.RESIZE_BILINEAR)
                )
              : e.pass(e);
          }),
          (e.__proto__.cropImage = function(e, t) {
            return void 0 !== t
              ? e.crop(S(t.x, N), S(t.y, N), S(t.width, 0), S(t.height, 0))
              : e.pass(e);
          }),
          (e.__proto__.changeImageQuality = function(e, t) {
            return C(t, e, 'quality');
          }),
          (e.__proto__.applyGreyscale = function(e, t) {
            return z(t, e, 'greyscale');
          }),
          (e.__proto__.normalizeImage = function(e, t) {
            return z(t, e, 'normalize');
          }),
          (e.__proto__.invertImage = function(e, t) {
            return z(t, e, 'invert');
          }),
          (e.__proto__.opaqueImage = function(e, t) {
            return z(t, e, 'opaque');
          }),
          (e.__proto__.sepiaFilter = function(e, t) {
            return z(t, e, 'sepia');
          }),
          (e.__proto__.ditherFilter = function(e, t) {
            return z(t, e, 'dither565');
          }),
          (e.__proto__.scaleImage = function(e, t) {
            return C(t, e, 'scale');
          }),
          (e.__proto__.scaleToFitImage = function(e, t) {
            return void 0 !== t
              ? e.scaleToFit(S(t.width, N), S(t.height, N))
              : e.pass(e);
          }),
          (e.__proto__.flipImage = function(e, t) {
            return void 0 !== t
              ? e.flip(S(t.horizontal, !1), S(t.vertical, !1))
              : e.pass(e);
          }),
          (e.__proto__.rotateImage = function(e, t) {
            return void 0 !== t
              ? e.rotate(S(t.degree, 0), L(t, i, !1))
              : e.pass(e);
          }),
          (e.__proto__.applyBackground = function(e, t) {
            return void 0 !== t ? e.background(t) : e.pass(e);
          }),
          (e.__proto__.changeBrightness = function(e, t) {
            return C(t, e, 'brightness');
          }),
          (e.__proto__.changeContrast = function(e, t) {
            return C(t, e, 'contrast');
          }),
          (e.__proto__.fadeImage = function(e, t) {
            return C(t, e, 'fade');
          }),
          (e.__proto__.changeOpacity = function(e, t) {
            return C(t, e, 'opacity');
          }),
          (e.__proto__.blurImage = function(e, t) {
            return C(t, e, 'blur');
          }),
          (e.__proto__.posterizeImage = function(e, t) {
            return C(t, e, 'posterize');
          }),
          (e.__proto__.containImage = function(e, t) {
            return j(t, e, 'contain');
          }),
          (e.__proto__.coverImage = function(e, t) {
            return j(t, e, 'cover');
          }),
          e
            .clone()
            .applyBackground(e, A)
            .resizeAnImage(e, n)
            .changeImageQuality(e, a)
            .applyGreyscale(e, c)
            .normalizeImage(e, s)
            .invertImage(e, p)
            .opaqueImage(e, l)
            .sepiaFilter(e, f)
            .ditherFilter(e, g)
            .scaleImage(e, m)
            .scaleToFitImage(e, I)
            .flipImage(e, d)
            .rotateImage(e, h)
            .cropImage(e, T)
            .changeBrightness(e, v)
            .changeContrast(e, y)
            .fadeImage(e, E)
            .changeOpacity(e, b)
            .blurImage(e, O)
            .posterizeImage(e, R)
            .coverImage(e, _)
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
            .containImage(e, u)
        );
      };
    r.d(t, 'process', function() {
      return u;
    });
    var c = 'https://unpkg.com/jimp@0.6.0/browser/lib/jimp.min.js';
    function u(e) {
      return new Promise(function(t) {
        try {
          Jimp;
        } catch (t) {
          var r = e.customCdn;
          importScripts(r || c);
        }
        Jimp.read(e.image).then(function(r) {
          a(r, e.props, Jimp).getBase64(Jimp.AUTO, function(e, r) {
            t({ src: r, err: e });
          });
        });
      });
    }
    addEventListener('message', function(e) {
      var r,
        n = e.data,
        o = n.type,
        i = n.method,
        a = n.id,
        c = n.params;
      'RPC' === o &&
        i &&
        ((r = t[i])
          ? Promise.resolve().then(function() {
              return r.apply(t, c);
            })
          : Promise.reject('No such method')
        )
          .then(function(e) {
            postMessage({ type: 'RPC', id: a, result: e });
          })
          .catch(function(e) {
            var t = { message: e };
            e.stack &&
              ((t.message = e.message), (t.stack = e.stack), (t.name = e.name)),
              postMessage({ type: 'RPC', id: a, error: t });
          });
    }),
      postMessage({ type: 'RPC', method: 'ready' });
  }
]);
