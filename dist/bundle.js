(() => { var n = { 311: function (n, r, t) { n.exports = function () { var n = "1.13.1", r = "object" == typeof self && self.self === self && self || "object" == typeof t.g && t.g.global === t.g && t.g || Function("return this")() || {}, e = Array.prototype, u = Object.prototype, o = "undefined" != typeof Symbol ? Symbol.prototype : null, i = e.push, a = e.slice, f = u.toString, c = u.hasOwnProperty, l = "undefined" != typeof ArrayBuffer, s = "undefined" != typeof DataView, p = Array.isArray, v = Object.keys, h = Object.create, y = l && ArrayBuffer.isView, d = isNaN, g = isFinite, m = !{ toString: null }.propertyIsEnumerable("toString"), b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], w = Math.pow(2, 53) - 1; function j(n, r) { return r = null == r ? n.length - 1 : +r, function () { for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; u < t; u++)e[u] = arguments[u + r]; switch (r) { case 0: return n.call(this, e); case 1: return n.call(this, arguments[0], e); case 2: return n.call(this, arguments[0], arguments[1], e) }var o = Array(r + 1); for (u = 0; u < r; u++)o[u] = arguments[u]; return o[r] = e, n.apply(this, o) } } function _(n) { var r = typeof n; return "function" === r || "object" === r && !!n } function x(n) { return void 0 === n } function A(n) { return !0 === n || !1 === n || "[object Boolean]" === f.call(n) } function S(n) { var r = "[object " + n + "]"; return function (n) { return f.call(n) === r } } var E = S("String"), O = S("Number"), M = S("Date"), B = S("RegExp"), k = S("Error"), I = S("Symbol"), T = S("ArrayBuffer"), N = S("Function"), F = r.document && r.document.childNodes; "object" != typeof Int8Array && "function" != typeof F && (N = function (n) { return "function" == typeof n || !1 }); var V = N, D = S("Object"), R = s && D(new DataView(new ArrayBuffer(8))), L = "undefined" != typeof Map && D(new Map), P = S("DataView"), q = R ? function (n) { return null != n && V(n.getInt8) && T(n.buffer) } : P, U = p || S("Array"); function W(n, r) { return null != n && c.call(n, r) } var z = S("Arguments"); !function () { z(arguments) || (z = function (n) { return W(n, "callee") }) }(); var $ = z; function H(n) { return O(n) && d(n) } function K(n) { return function () { return n } } function C(n) { return function (r) { var t = n(r); return "number" == typeof t && t >= 0 && t <= w } } function J(n) { return function (r) { return null == r ? void 0 : r[n] } } var G = J("byteLength"), Q = C(G), X = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/, Y = l ? function (n) { return y ? y(n) && !q(n) : Q(n) && X.test(f.call(n)) } : K(!1), Z = J("length"); function nn(n, r) { r = function (n) { for (var r = {}, t = n.length, e = 0; e < t; ++e)r[n[e]] = !0; return { contains: function (n) { return r[n] }, push: function (t) { return r[t] = !0, n.push(t) } } }(r); var t = b.length, e = n.constructor, o = V(e) && e.prototype || u, i = "constructor"; for (W(n, i) && !r.contains(i) && r.push(i); t--;)(i = b[t]) in n && n[i] !== o[i] && !r.contains(i) && r.push(i) } function rn(n) { if (!_(n)) return []; if (v) return v(n); var r = []; for (var t in n) W(n, t) && r.push(t); return m && nn(n, r), r } function tn(n, r) { var t = rn(r), e = t.length; if (null == n) return !e; for (var u = Object(n), o = 0; o < e; o++) { var i = t[o]; if (r[i] !== u[i] || !(i in u)) return !1 } return !0 } function en(n) { return n instanceof en ? n : this instanceof en ? void (this._wrapped = n) : new en(n) } function un(n) { return new Uint8Array(n.buffer || n, n.byteOffset || 0, G(n)) } en.VERSION = n, en.prototype.value = function () { return this._wrapped }, en.prototype.valueOf = en.prototype.toJSON = en.prototype.value, en.prototype.toString = function () { return String(this._wrapped) }; var on = "[object DataView]"; function an(n, r, t, e) { if (n === r) return 0 !== n || 1 / n == 1 / r; if (null == n || null == r) return !1; if (n != n) return r != r; var u = typeof n; return ("function" === u || "object" === u || "object" == typeof r) && function n(r, t, e, u) { r instanceof en && (r = r._wrapped), t instanceof en && (t = t._wrapped); var i = f.call(r); if (i !== f.call(t)) return !1; if (R && "[object Object]" == i && q(r)) { if (!q(t)) return !1; i = on } switch (i) { case "[object RegExp]": case "[object String]": return "" + r == "" + t; case "[object Number]": return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t; case "[object Date]": case "[object Boolean]": return +r == +t; case "[object Symbol]": return o.valueOf.call(r) === o.valueOf.call(t); case "[object ArrayBuffer]": case on: return n(un(r), un(t), e, u) }var a = "[object Array]" === i; if (!a && Y(r)) { if (G(r) !== G(t)) return !1; if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0; a = !0 } if (!a) { if ("object" != typeof r || "object" != typeof t) return !1; var c = r.constructor, l = t.constructor; if (c !== l && !(V(c) && c instanceof c && V(l) && l instanceof l) && "constructor" in r && "constructor" in t) return !1 } u = u || []; for (var s = (e = e || []).length; s--;)if (e[s] === r) return u[s] === t; if (e.push(r), u.push(t), a) { if ((s = r.length) !== t.length) return !1; for (; s--;)if (!an(r[s], t[s], e, u)) return !1 } else { var p, v = rn(r); if (s = v.length, rn(t).length !== s) return !1; for (; s--;)if (!W(t, p = v[s]) || !an(r[p], t[p], e, u)) return !1 } return e.pop(), u.pop(), !0 }(n, r, t, e) } function fn(n) { if (!_(n)) return []; var r = []; for (var t in n) r.push(t); return m && nn(n, r), r } function cn(n) { var r = Z(n); return function (t) { if (null == t) return !1; var e = fn(t); if (Z(e)) return !1; for (var u = 0; u < r; u++)if (!V(t[n[u]])) return !1; return n !== hn || !V(t[ln]) } } var ln = "forEach", sn = ["clear", "delete"], pn = ["get", "has", "set"], vn = sn.concat(ln, pn), hn = sn.concat(pn), yn = ["add"].concat(sn, ln, "has"), dn = L ? cn(vn) : S("Map"), gn = L ? cn(hn) : S("WeakMap"), mn = L ? cn(yn) : S("Set"), bn = S("WeakSet"); function wn(n) { for (var r = rn(n), t = r.length, e = Array(t), u = 0; u < t; u++)e[u] = n[r[u]]; return e } function jn(n) { for (var r = {}, t = rn(n), e = 0, u = t.length; e < u; e++)r[n[t[e]]] = t[e]; return r } function _n(n) { var r = []; for (var t in n) V(n[t]) && r.push(t); return r.sort() } function xn(n, r) { return function (t) { var e = arguments.length; if (r && (t = Object(t)), e < 2 || null == t) return t; for (var u = 1; u < e; u++)for (var o = arguments[u], i = n(o), a = i.length, f = 0; f < a; f++) { var c = i[f]; r && void 0 !== t[c] || (t[c] = o[c]) } return t } } var An = xn(fn), Sn = xn(rn), En = xn(fn, !0); function On(n) { if (!_(n)) return {}; if (h) return h(n); var r = function () { }; r.prototype = n; var t = new r; return r.prototype = null, t } function Mn(n) { return _(n) ? U(n) ? n.slice() : An({}, n) : n } function Bn(n) { return U(n) ? n : [n] } function kn(n) { return en.toPath(n) } function In(n, r) { for (var t = r.length, e = 0; e < t; e++) { if (null == n) return; n = n[r[e]] } return t ? n : void 0 } function Tn(n, r, t) { var e = In(n, kn(r)); return x(e) ? t : e } function Nn(n) { return n } function Fn(n) { return n = Sn({}, n), function (r) { return tn(r, n) } } function Vn(n) { return n = kn(n), function (r) { return In(r, n) } } function Dn(n, r, t) { if (void 0 === r) return n; switch (null == t ? 3 : t) { case 1: return function (t) { return n.call(r, t) }; case 3: return function (t, e, u) { return n.call(r, t, e, u) }; case 4: return function (t, e, u, o) { return n.call(r, t, e, u, o) } }return function () { return n.apply(r, arguments) } } function Rn(n, r, t) { return null == n ? Nn : V(n) ? Dn(n, r, t) : _(n) && !U(n) ? Fn(n) : Vn(n) } function Ln(n, r) { return Rn(n, r, 1 / 0) } function Pn(n, r, t) { return en.iteratee !== Ln ? en.iteratee(n, r) : Rn(n, r, t) } function qn() { } function Un(n, r) { return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1)) } en.toPath = Bn, en.iteratee = Ln; var Wn = Date.now || function () { return (new Date).getTime() }; function zn(n) { var r = function (r) { return n[r] }, t = "(?:" + rn(n).join("|") + ")", e = RegExp(t), u = RegExp(t, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n } } var $n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, Hn = zn($n), Kn = zn(jn($n)), Cn = en.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, Jn = /(.)^/, Gn = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, Qn = /\\|'|\r|\n|\u2028|\u2029/g; function Xn(n) { return "\\" + Gn[n] } var Yn = /^\s*(\w|\$)+\s*$/, Zn = 0; function nr(n, r, t, e, u) { if (!(e instanceof r)) return n.apply(t, u); var o = On(n.prototype), i = n.apply(o, u); return _(i) ? i : o } var rr = j((function (n, r) { var t = rr.placeholder, e = function () { for (var u = 0, o = r.length, i = Array(o), a = 0; a < o; a++)i[a] = r[a] === t ? arguments[u++] : r[a]; for (; u < arguments.length;)i.push(arguments[u++]); return nr(n, e, this, this, i) }; return e })); rr.placeholder = en; var tr = j((function (n, r, t) { if (!V(n)) throw new TypeError("Bind must be called on a function"); var e = j((function (u) { return nr(n, e, r, this, t.concat(u)) })); return e })), er = C(Z); function ur(n, r, t, e) { if (e = e || [], r || 0 === r) { if (r <= 0) return e.concat(n) } else r = 1 / 0; for (var u = e.length, o = 0, i = Z(n); o < i; o++) { var a = n[o]; if (er(a) && (U(a) || $(a))) if (r > 1) ur(a, r - 1, t, e), u = e.length; else for (var f = 0, c = a.length; f < c;)e[u++] = a[f++]; else t || (e[u++] = a) } return e } var or = j((function (n, r) { var t = (r = ur(r, !1, !1)).length; if (t < 1) throw new Error("bindAll must be passed function names"); for (; t--;) { var e = r[t]; n[e] = tr(n[e], n) } return n })), ir = j((function (n, r, t) { return setTimeout((function () { return n.apply(null, t) }), r) })), ar = rr(ir, en, 1); function fr(n) { return function () { return !n.apply(this, arguments) } } function cr(n, r) { var t; return function () { return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t } } var lr = rr(cr, 2); function sr(n, r, t) { r = Pn(r, t); for (var e, u = rn(n), o = 0, i = u.length; o < i; o++)if (r(n[e = u[o]], e, n)) return e } function pr(n) { return function (r, t, e) { t = Pn(t, e); for (var u = Z(r), o = n > 0 ? 0 : u - 1; o >= 0 && o < u; o += n)if (t(r[o], o, r)) return o; return -1 } } var vr = pr(1), hr = pr(-1); function yr(n, r, t, e) { for (var u = (t = Pn(t, e, 1))(r), o = 0, i = Z(n); o < i;) { var a = Math.floor((o + i) / 2); t(n[a]) < u ? o = a + 1 : i = a } return o } function dr(n, r, t) { return function (e, u, o) { var i = 0, f = Z(e); if ("number" == typeof o) n > 0 ? i = o >= 0 ? o : Math.max(o + f, i) : f = o >= 0 ? Math.min(o + 1, f) : o + f + 1; else if (t && o && f) return e[o = t(e, u)] === u ? o : -1; if (u != u) return (o = r(a.call(e, i, f), H)) >= 0 ? o + i : -1; for (o = n > 0 ? i : f - 1; o >= 0 && o < f; o += n)if (e[o] === u) return o; return -1 } } var gr = dr(1, vr, yr), mr = dr(-1, hr); function br(n, r, t) { var e = (er(n) ? vr : sr)(n, r, t); if (void 0 !== e && -1 !== e) return n[e] } function wr(n, r, t) { var e, u; if (r = Dn(r, t), er(n)) for (e = 0, u = n.length; e < u; e++)r(n[e], e, n); else { var o = rn(n); for (e = 0, u = o.length; e < u; e++)r(n[o[e]], o[e], n) } return n } function jr(n, r, t) { r = Pn(r, t); for (var e = !er(n) && rn(n), u = (e || n).length, o = Array(u), i = 0; i < u; i++) { var a = e ? e[i] : i; o[i] = r(n[a], a, n) } return o } function _r(n) { var r = function (r, t, e, u) { var o = !er(r) && rn(r), i = (o || r).length, a = n > 0 ? 0 : i - 1; for (u || (e = r[o ? o[a] : a], a += n); a >= 0 && a < i; a += n) { var f = o ? o[a] : a; e = t(e, r[f], f, r) } return e }; return function (n, t, e, u) { var o = arguments.length >= 3; return r(n, Dn(t, u, 4), e, o) } } var xr = _r(1), Ar = _r(-1); function Sr(n, r, t) { var e = []; return r = Pn(r, t), wr(n, (function (n, t, u) { r(n, t, u) && e.push(n) })), e } function Er(n, r, t) { r = Pn(r, t); for (var e = !er(n) && rn(n), u = (e || n).length, o = 0; o < u; o++) { var i = e ? e[o] : o; if (!r(n[i], i, n)) return !1 } return !0 } function Or(n, r, t) { r = Pn(r, t); for (var e = !er(n) && rn(n), u = (e || n).length, o = 0; o < u; o++) { var i = e ? e[o] : o; if (r(n[i], i, n)) return !0 } return !1 } function Mr(n, r, t, e) { return er(n) || (n = wn(n)), ("number" != typeof t || e) && (t = 0), gr(n, r, t) >= 0 } var Br = j((function (n, r, t) { var e, u; return V(r) ? u = r : (r = kn(r), e = r.slice(0, -1), r = r[r.length - 1]), jr(n, (function (n) { var o = u; if (!o) { if (e && e.length && (n = In(n, e)), null == n) return; o = n[r] } return null == o ? o : o.apply(n, t) })) })); function kr(n, r) { return jr(n, Vn(r)) } function Ir(n, r, t) { var e, u, o = -1 / 0, i = -1 / 0; if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n) for (var a = 0, f = (n = er(n) ? n : wn(n)).length; a < f; a++)null != (e = n[a]) && e > o && (o = e); else r = Pn(r, t), wr(n, (function (n, t, e) { ((u = r(n, t, e)) > i || u === -1 / 0 && o === -1 / 0) && (o = n, i = u) })); return o } function Tr(n, r, t) { if (null == r || t) return er(n) || (n = wn(n)), n[Un(n.length - 1)]; var e = er(n) ? Mn(n) : wn(n), u = Z(e); r = Math.max(Math.min(r, u), 0); for (var o = u - 1, i = 0; i < r; i++) { var a = Un(i, o), f = e[i]; e[i] = e[a], e[a] = f } return e.slice(0, r) } function Nr(n, r) { return function (t, e, u) { var o = r ? [[], []] : {}; return e = Pn(e, u), wr(t, (function (r, u) { var i = e(r, u, t); n(o, r, i) })), o } } var Fr = Nr((function (n, r, t) { W(n, t) ? n[t].push(r) : n[t] = [r] })), Vr = Nr((function (n, r, t) { n[t] = r })), Dr = Nr((function (n, r, t) { W(n, t) ? n[t]++ : n[t] = 1 })), Rr = Nr((function (n, r, t) { n[t ? 0 : 1].push(r) }), !0), Lr = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g; function Pr(n, r, t) { return r in t } var qr = j((function (n, r) { var t = {}, e = r[0]; if (null == n) return t; V(e) ? (r.length > 1 && (e = Dn(e, r[1])), r = fn(n)) : (e = Pr, r = ur(r, !1, !1), n = Object(n)); for (var u = 0, o = r.length; u < o; u++) { var i = r[u], a = n[i]; e(a, i, n) && (t[i] = a) } return t })), Ur = j((function (n, r) { var t, e = r[0]; return V(e) ? (e = fr(e), r.length > 1 && (t = r[1])) : (r = jr(ur(r, !1, !1), String), e = function (n, t) { return !Mr(r, t) }), qr(n, e, t) })); function Wr(n, r, t) { return a.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r))) } function zr(n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[0] : Wr(n, n.length - r) } function $r(n, r, t) { return a.call(n, null == r || t ? 1 : r) } var Hr = j((function (n, r) { return r = ur(r, !0, !0), Sr(n, (function (n) { return !Mr(r, n) })) })), Kr = j((function (n, r) { return Hr(n, r) })); function Cr(n, r, t, e) { A(r) || (e = t, t = r, r = !1), null != t && (t = Pn(t, e)); for (var u = [], o = [], i = 0, a = Z(n); i < a; i++) { var f = n[i], c = t ? t(f, i, n) : f; r && !t ? (i && o === c || u.push(f), o = c) : t ? Mr(o, c) || (o.push(c), u.push(f)) : Mr(u, f) || u.push(f) } return u } var Jr = j((function (n) { return Cr(ur(n, !0, !0)) })); function Gr(n) { for (var r = n && Ir(n, Z).length || 0, t = Array(r), e = 0; e < r; e++)t[e] = kr(n, e); return t } var Qr = j(Gr); function Xr(n, r) { return n._chain ? en(r).chain() : r } function Yr(n) { return wr(_n(n), (function (r) { var t = en[r] = n[r]; en.prototype[r] = function () { var n = [this._wrapped]; return i.apply(n, arguments), Xr(this, t.apply(en, n)) } })), en } wr(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function (n) { var r = e[n]; en.prototype[n] = function () { var t = this._wrapped; return null != t && (r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0]), Xr(this, t) } })), wr(["concat", "join", "slice"], (function (n) { var r = e[n]; en.prototype[n] = function () { var n = this._wrapped; return null != n && (n = r.apply(n, arguments)), Xr(this, n) } })); var Zr = Yr({ __proto__: null, VERSION: n, restArguments: j, isObject: _, isNull: function (n) { return null === n }, isUndefined: x, isBoolean: A, isElement: function (n) { return !(!n || 1 !== n.nodeType) }, isString: E, isNumber: O, isDate: M, isRegExp: B, isError: k, isSymbol: I, isArrayBuffer: T, isDataView: q, isArray: U, isFunction: V, isArguments: $, isFinite: function (n) { return !I(n) && g(n) && !isNaN(parseFloat(n)) }, isNaN: H, isTypedArray: Y, isEmpty: function (n) { if (null == n) return !0; var r = Z(n); return "number" == typeof r && (U(n) || E(n) || $(n)) ? 0 === r : 0 === Z(rn(n)) }, isMatch: tn, isEqual: function (n, r) { return an(n, r) }, isMap: dn, isWeakMap: gn, isSet: mn, isWeakSet: bn, keys: rn, allKeys: fn, values: wn, pairs: function (n) { for (var r = rn(n), t = r.length, e = Array(t), u = 0; u < t; u++)e[u] = [r[u], n[r[u]]]; return e }, invert: jn, functions: _n, methods: _n, extend: An, extendOwn: Sn, assign: Sn, defaults: En, create: function (n, r) { var t = On(n); return r && Sn(t, r), t }, clone: Mn, tap: function (n, r) { return r(n), n }, get: Tn, has: function (n, r) { for (var t = (r = kn(r)).length, e = 0; e < t; e++) { var u = r[e]; if (!W(n, u)) return !1; n = n[u] } return !!t }, mapObject: function (n, r, t) { r = Pn(r, t); for (var e = rn(n), u = e.length, o = {}, i = 0; i < u; i++) { var a = e[i]; o[a] = r(n[a], a, n) } return o }, identity: Nn, constant: K, noop: qn, toPath: Bn, property: Vn, propertyOf: function (n) { return null == n ? qn : function (r) { return Tn(n, r) } }, matcher: Fn, matches: Fn, times: function (n, r, t) { var e = Array(Math.max(0, n)); r = Dn(r, t, 1); for (var u = 0; u < n; u++)e[u] = r(u); return e }, random: Un, now: Wn, escape: Hn, unescape: Kn, templateSettings: Cn, template: function (n, r, t) { !r && t && (r = t), r = En({}, r, en.templateSettings); var e = RegExp([(r.escape || Jn).source, (r.interpolate || Jn).source, (r.evaluate || Jn).source].join("|") + "|$", "g"), u = 0, o = "__p+='"; n.replace(e, (function (r, t, e, i, a) { return o += n.slice(u, a).replace(Qn, Xn), u = a + r.length, t ? o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? o += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : i && (o += "';\n" + i + "\n__p+='"), r })), o += "';\n"; var i, a = r.variable; if (a) { if (!Yn.test(a)) throw new Error("variable is not a bare identifier: " + a) } else o = "with(obj||{}){\n" + o + "}\n", a = "obj"; o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n"; try { i = new Function(a, "_", o) } catch (n) { throw n.source = o, n } var f = function (n) { return i.call(this, n, en) }; return f.source = "function(" + a + "){\n" + o + "}", f }, result: function (n, r, t) { var e = (r = kn(r)).length; if (!e) return V(t) ? t.call(n) : t; for (var u = 0; u < e; u++) { var o = null == n ? void 0 : n[r[u]]; void 0 === o && (o = t, u = e), n = V(o) ? o.call(n) : o } return n }, uniqueId: function (n) { var r = ++Zn + ""; return n ? n + r : r }, chain: function (n) { var r = en(n); return r._chain = !0, r }, iteratee: Ln, partial: rr, bind: tr, bindAll: or, memoize: function (n, r) { var t = function (e) { var u = t.cache, o = "" + (r ? r.apply(this, arguments) : e); return W(u, o) || (u[o] = n.apply(this, arguments)), u[o] }; return t.cache = {}, t }, delay: ir, defer: ar, throttle: function (n, r, t) { var e, u, o, i, a = 0; t || (t = {}); var f = function () { a = !1 === t.leading ? 0 : Wn(), e = null, i = n.apply(u, o), e || (u = o = null) }, c = function () { var c = Wn(); a || !1 !== t.leading || (a = c); var l = r - (c - a); return u = this, o = arguments, l <= 0 || l > r ? (e && (clearTimeout(e), e = null), a = c, i = n.apply(u, o), e || (u = o = null)) : e || !1 === t.trailing || (e = setTimeout(f, l)), i }; return c.cancel = function () { clearTimeout(e), a = 0, e = u = o = null }, c }, debounce: function (n, r, t) { var e, u, o, i, a, f = function () { var c = Wn() - u; r > c ? e = setTimeout(f, r - c) : (e = null, t || (i = n.apply(a, o)), e || (o = a = null)) }, c = j((function (c) { return a = this, o = c, u = Wn(), e || (e = setTimeout(f, r), t && (i = n.apply(a, o))), i })); return c.cancel = function () { clearTimeout(e), e = o = a = null }, c }, wrap: function (n, r) { return rr(r, n) }, negate: fr, compose: function () { var n = arguments, r = n.length - 1; return function () { for (var t = r, e = n[r].apply(this, arguments); t--;)e = n[t].call(this, e); return e } }, after: function (n, r) { return function () { if (--n < 1) return r.apply(this, arguments) } }, before: cr, once: lr, findKey: sr, findIndex: vr, findLastIndex: hr, sortedIndex: yr, indexOf: gr, lastIndexOf: mr, find: br, detect: br, findWhere: function (n, r) { return br(n, Fn(r)) }, each: wr, forEach: wr, map: jr, collect: jr, reduce: xr, foldl: xr, inject: xr, reduceRight: Ar, foldr: Ar, filter: Sr, select: Sr, reject: function (n, r, t) { return Sr(n, fr(Pn(r)), t) }, every: Er, all: Er, some: Or, any: Or, contains: Mr, includes: Mr, include: Mr, invoke: Br, pluck: kr, where: function (n, r) { return Sr(n, Fn(r)) }, max: Ir, min: function (n, r, t) { var e, u, o = 1 / 0, i = 1 / 0; if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n) for (var a = 0, f = (n = er(n) ? n : wn(n)).length; a < f; a++)null != (e = n[a]) && e < o && (o = e); else r = Pn(r, t), wr(n, (function (n, t, e) { ((u = r(n, t, e)) < i || u === 1 / 0 && o === 1 / 0) && (o = n, i = u) })); return o }, shuffle: function (n) { return Tr(n, 1 / 0) }, sample: Tr, sortBy: function (n, r, t) { var e = 0; return r = Pn(r, t), kr(jr(n, (function (n, t, u) { return { value: n, index: e++, criteria: r(n, t, u) } })).sort((function (n, r) { var t = n.criteria, e = r.criteria; if (t !== e) { if (t > e || void 0 === t) return 1; if (t < e || void 0 === e) return -1 } return n.index - r.index })), "value") }, groupBy: Fr, indexBy: Vr, countBy: Dr, partition: Rr, toArray: function (n) { return n ? U(n) ? a.call(n) : E(n) ? n.match(Lr) : er(n) ? jr(n, Nn) : wn(n) : [] }, size: function (n) { return null == n ? 0 : er(n) ? n.length : rn(n).length }, pick: qr, omit: Ur, first: zr, head: zr, take: zr, initial: Wr, last: function (n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[n.length - 1] : $r(n, Math.max(0, n.length - r)) }, rest: $r, tail: $r, drop: $r, compact: function (n) { return Sr(n, Boolean) }, flatten: function (n, r) { return ur(n, r, !1) }, without: Kr, uniq: Cr, unique: Cr, union: Jr, intersection: function (n) { for (var r = [], t = arguments.length, e = 0, u = Z(n); e < u; e++) { var o = n[e]; if (!Mr(r, o)) { var i; for (i = 1; i < t && Mr(arguments[i], o); i++); i === t && r.push(o) } } return r }, difference: Hr, unzip: Gr, transpose: Gr, zip: Qr, object: function (n, r) { for (var t = {}, e = 0, u = Z(n); e < u; e++)r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1]; return t }, range: function (n, r, t) { null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1); for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0; o < e; o++, n += t)u[o] = n; return u }, chunk: function (n, r) { if (null == r || r < 1) return []; for (var t = [], e = 0, u = n.length; e < u;)t.push(a.call(n, e, e += r)); return t }, mixin: Yr, default: en }); return Zr._ = Zr, Zr }() }, 647: (n, r, t) => { var e = t(311); let u = []; r.VF = function (n) { u.push(n) }, r.Sw = function () { return u.pop() }, r.fj = function () { return e.last(u) } } }, r = {}; function t(e) { var u = r[e]; if (void 0 !== u) return u.exports; var o = r[e] = { exports: {} }; return n[e].call(o.exports, o, o.exports, t), o.exports } t.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (n) { if ("object" == typeof window) return window } }(), (() => { "use strict"; var n = t(647); window.onload = function () { console.log("done"); var r = document.getElementById("pop"), t = document.getElementById("push"), e = document.getElementById("peek"), u = document.getElementById("top_of_stack"); r.addEventListener("click", (function () { var r = "Tog bort " + n.Sw(); alert(r) })), t.addEventListener("click", (function () { var r = prompt("Vad ska vi lägga på stacken?"); n.VF(r), u.innerHTML = r })), e.addEventListener("click", (function () { u.innerHTML = n.fj() })) } })() })();