/*! (c) Andrea Giammarchi - ISC */
/* eslint-disable */
var self = this || {};
try {
  !(function(t, n) {
    if (
      new t('q=%2B').get('q') !== n ||
      new t({ q: n }).get('q') !== n ||
      new t([['q', n]]).get('q') !== n ||
      'q=%0A' !== new t('q=\n').toString() ||
      'q=+%26' !== new t({ q: ' &' }).toString()
    )
      throw t;
    self.URLSearchParams = t;
  })(URLSearchParams, '+');
} catch (t) {
  !(function(t, a, o) {
    'use strict';
    var u = t.create,
      h = t.defineProperty,
      n = /[!'\(\)~]|%20|%00/g,
      e = /\+/g,
      r = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0'
      },
      i = {
        append: function(t, n) {
          l(this._ungap, t, n);
        },
        delete: function(t) {
          delete this._ungap[t];
        },
        get: function(t) {
          return this.has(t) ? this._ungap[t][0] : null;
        },
        getAll: function(t) {
          return this.has(t) ? this._ungap[t].slice(0) : [];
        },
        has: function(t) {
          return t in this._ungap;
        },
        set: function(t, n) {
          this._ungap[t] = [a(n)];
        },
        forEach: function(n, e) {
          var r = this;
          for (var i in r._ungap) r._ungap[i].forEach(t, i);
          function t(t) {
            n.call(e, t, a(i), r);
          }
        },
        toJSON: function() {
          return {};
        },
        toString: function() {
          var t = [];
          for (var n in this._ungap)
            for (var e = g(n), r = 0, i = this._ungap[n]; r < i.length; r++)
              t.push(e + '=' + g(i[r]));
          return t.join('&');
        }
      };
    for (var s in i)
      h(c.prototype, s, { configurable: !0, writable: !0, value: i[s] });
    function c(t) {
      var n = u(null);
      switch ((h(this, '_ungap', { value: n }), !0)) {
        case !t:
          break;
        case 'string' == typeof t:
          '?' === t.charAt(0) && (t = t.slice(1));
          for (var e = t.split('&'), r = 0, i = e.length; r < i; r++) {
            var a = (s = e[r]).indexOf('=');
            -1 < a
              ? l(n, p(s.slice(0, a)), p(s.slice(a + 1)))
              : s.length && l(n, p(s), '');
          }
          break;
        case o(t):
          for (r = 0, i = t.length; r < i; r++) {
            var s;
            l(n, (s = t[r])[0], s[1]);
          }
          break;
        case 'forEach' in t:
          t.forEach(f, n);
          break;
        default:
          for (var c in t) l(n, c, t[c]);
      }
    }
    function f(t, n) {
      l(this, n, t);
    }
    function l(t, n, e) {
      var r = o(e) ? e.join(',') : e;
      n in t ? t[n].push(r) : (t[n] = [r]);
    }
    function p(t) {
      return decodeURIComponent(t.replace(e, ' '));
    }
    function g(t) {
      return encodeURIComponent(t).replace(n, v);
    }
    function v(t) {
      return r[t];
    }
    self.URLSearchParams = c;
  })(Object, String, Array.isArray);
}
!(function(l) {
  var r = !1;
  try {
    r = !!Symbol.iterator;
  } catch (t) {}
  function t(t, n) {
    var e = [];
    return (
      t.forEach(n, e),
      r
        ? e[Symbol.iterator]()
        : {
            next: function() {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            }
          }
    );
  }
  'forEach' in l ||
    (l.forEach = function(e, r) {
      var i = this,
        t = Object.create(null);
      this.toString()
        .replace(/=[\s\S]*?(?:&|$)/g, '=')
        .split('=')
        .forEach(function(n) {
          !n.length ||
            n in t ||
            (t[n] = i.getAll(n)).forEach(function(t) {
              e.call(r, t, n, i);
            });
        });
    }),
    'keys' in l ||
      (l.keys = function() {
        return t(this, function(t, n) {
          this.push(n);
        });
      }),
    'values' in l ||
      (l.values = function() {
        return t(this, function(t, n) {
          this.push(t);
        });
      }),
    'entries' in l ||
      (l.entries = function() {
        return t(this, function(t, n) {
          this.push([n, t]);
        });
      }),
    !r || Symbol.iterator in l || (l[Symbol.iterator] = l.entries),
    'sort' in l ||
      (l.sort = function() {
        for (
          var t,
            n,
            e,
            r = this.entries(),
            i = r.next(),
            a = i.done,
            s = [],
            c = Object.create(null);
          !a;

        )
          (n = (e = i.value)[0]),
            s.push(n),
            n in c || (c[n] = []),
            c[n].push(e[1]),
            (a = (i = r.next()).done);
        for (s.sort(), t = 0; t < s.length; t++) this.delete(s[t]);
        for (t = 0; t < s.length; t++) (n = s[t]), this.append(n, c[n].shift());
      }),
    (function(c) {
      var o = c.defineProperty,
        u = c.getOwnPropertyDescriptor,
        h = function(t) {
          var n = t.append;
          (t.append = l.append),
            URLSearchParams.call(t, t._usp.search.slice(1)),
            (t.append = n);
        },
        f = function(t, n) {
          if (!(t instanceof n))
            throw new TypeError(
              "'searchParams' accessed on an object that does not implement interface " +
                n.name
            );
        },
        t = function(n) {
          var e,
            r,
            t = n.prototype,
            i = u(t, 'searchParams'),
            a = u(t, 'href'),
            s = u(t, 'search');
          !i &&
            s &&
            s.set &&
            ((r = (function(e) {
              function r(t, n) {
                l.append.call(this, t, n),
                  (t = this.toString()),
                  e.set.call(this._usp, t ? '?' + t : '');
              }
              function i(t) {
                l.delete.call(this, t),
                  (t = this.toString()),
                  e.set.call(this._usp, t ? '?' + t : '');
              }
              function a(t, n) {
                l.set.call(this, t, n),
                  (t = this.toString()),
                  e.set.call(this._usp, t ? '?' + t : '');
              }
              return function(t, n) {
                return (
                  (t.append = r),
                  (t.delete = i),
                  (t.set = a),
                  o(t, '_usp', { configurable: !0, writable: !0, value: n })
                );
              };
            })(s)),
            (e = function(t, n) {
              return (
                o(t, '_searchParams', {
                  configurable: !0,
                  writable: !0,
                  value: r(n, t)
                }),
                n
              );
            }),
            c.defineProperties(t, {
              href: {
                get: function() {
                  return a.get.call(this);
                },
                set: function(t) {
                  var n = this._searchParams;
                  a.set.call(this, t), n && h(n);
                }
              },
              search: {
                get: function() {
                  return s.get.call(this);
                },
                set: function(t) {
                  var n = this._searchParams;
                  s.set.call(this, t), n && h(n);
                }
              },
              searchParams: {
                get: function() {
                  return (
                    f(this, n),
                    this._searchParams ||
                      e(this, new URLSearchParams(this.search.slice(1)))
                  );
                },
                set: function(t) {
                  f(this, n), e(this, t);
                }
              }
            }));
        };
      try {
        t(HTMLAnchorElement),
          /^function|object$/.test(typeof URL) && URL.prototype && t(URL);
      } catch (t) {}
    })(Object);
})(self.URLSearchParams.prototype, Object);
