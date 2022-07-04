/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/framework/uikit-3.14.3/js/uikit.min.js":
/*!*******************************************************!*\
  !*** ./assets/framework/uikit-3.14.3/js/uikit.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! UIkit 3.14.3 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
(function (fe, pe) {
  ( false ? 0 : _typeof(exports)) == "object" && ( false ? 0 : _typeof(module)) < "u" ? module.exports = pe() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (pe),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  "use strict";

  var _events, _events2;

  var _Object$prototype = Object.prototype,
      fe = _Object$prototype.hasOwnProperty,
      pe = _Object$prototype.toString;

  function Ot(t, e) {
    return fe.call(t, e);
  }

  var Un = /\B([A-Z])/g,
      Mt = nt(function (t) {
    return t.replace(Un, "-$1").toLowerCase();
  }),
      tr = /-(\w)/g,
      Yt = nt(function (t) {
    return t.replace(tr, as);
  }),
      bt = nt(function (t) {
    return t.length ? as(null, t.charAt(0)) + t.slice(1) : "";
  });

  function as(t, e) {
    return e ? e.toUpperCase() : "";
  }

  function lt(t, e) {
    return t == null || t.startsWith == null ? void 0 : t.startsWith(e);
  }

  function Gt(t, e) {
    return t == null || t.endsWith == null ? void 0 : t.endsWith(e);
  }

  function g(t, e) {
    return t == null || t.includes == null ? void 0 : t.includes(e);
  }

  function xt(t, e) {
    return t == null || t.findIndex == null ? void 0 : t.findIndex(e);
  }

  var st = Array.isArray,
      bi = Array.from,
      yt = Object.assign;

  function dt(t) {
    return typeof t == "function";
  }

  function At(t) {
    return t !== null && _typeof(t) == "object";
  }

  function Pt(t) {
    return pe.call(t) === "[object Object]";
  }

  function Xt(t) {
    return At(t) && t === t.window;
  }

  function ge(t) {
    return yi(t) === 9;
  }

  function xi(t) {
    return yi(t) >= 1;
  }

  function Jt(t) {
    return yi(t) === 1;
  }

  function yi(t) {
    return !Xt(t) && At(t) && t.nodeType;
  }

  function He(t) {
    return typeof t == "boolean";
  }

  function O(t) {
    return typeof t == "string";
  }

  function Kt(t) {
    return typeof t == "number";
  }

  function Nt(t) {
    return Kt(t) || O(t) && !isNaN(t - parseFloat(t));
  }

  function me(t) {
    return !(st(t) ? t.length : At(t) ? Object.keys(t).length : !1);
  }

  function Y(t) {
    return t === void 0;
  }

  function $i(t) {
    return He(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
  }

  function Et(t) {
    var e = Number(t);
    return isNaN(e) ? !1 : e;
  }

  function y(t) {
    return parseFloat(t) || 0;
  }

  function j(t) {
    return x(t)[0];
  }

  function x(t) {
    return t && (xi(t) ? [t] : Array.from(t).filter(xi)) || [];
  }

  function Zt(t) {
    var e;
    if (Xt(t)) return t;
    t = j(t);
    var i = ge(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
    return (i == null ? void 0 : i.defaultView) || window;
  }

  function ve(t, e) {
    return t === e || At(t) && At(e) && Object.keys(t).length === Object.keys(e).length && $t(t, function (i, s) {
      return i === e[s];
    });
  }

  function ki(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), function (s) {
      return s === e ? i : e;
    });
  }

  function we(t) {
    return t[t.length - 1];
  }

  function $t(t, e) {
    for (var i in t) {
      if (e(t[i], i) === !1) return !1;
    }

    return !0;
  }

  function Fe(t, e) {
    return t.slice().sort(function (i, s) {
      var _i$e = i[e],
          n = _i$e === void 0 ? 0 : _i$e,
          _s$e = s[e],
          r = _s$e === void 0 ? 0 : _s$e;
      return n > r ? 1 : r > n ? -1 : 0;
    });
  }

  function ls(t, e) {
    var i = new Set();
    return t.filter(function (s) {
      var n = s[e];
      return i.has(n) ? !1 : i.add(n);
    });
  }

  function U(t, e, i) {
    return e === void 0 && (e = 0), i === void 0 && (i = 1), Math.min(Math.max(Et(t) || 0, e), i);
  }

  function A() {}

  function Si() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return [["bottom", "top"], ["right", "left"]].every(function (s) {
      var _s2 = _slicedToArray(s, 2),
          n = _s2[0],
          r = _s2[1];

      return Math.min.apply(Math, _toConsumableArray(e.map(function (o) {
        var a = o[n];
        return a;
      }))) - Math.max.apply(Math, _toConsumableArray(e.map(function (o) {
        var a = o[r];
        return a;
      }))) > 0;
    });
  }

  function Le(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }

  function Ti(t, e, i) {
    var _ref;

    var s = e === "width" ? "height" : "width";
    return _ref = {}, _defineProperty(_ref, s, t[e] ? Math.round(i * t[s] / t[e]) : t[s]), _defineProperty(_ref, e, i), _ref;
  }

  function hs(t, e) {
    t = _objectSpread({}, t);

    for (var i in t) {
      t = t[i] > e[i] ? Ti(t, i, e[i]) : t;
    }

    return t;
  }

  function er(t, e) {
    t = hs(t, e);

    for (var i in t) {
      t = t[i] < e[i] ? Ti(t, i, e[i]) : t;
    }

    return t;
  }

  var We = {
    ratio: Ti,
    contain: hs,
    cover: er
  };

  function Qt(t, e, i, s) {
    i === void 0 && (i = 0), s === void 0 && (s = !1), e = x(e);
    var _e2 = e,
        n = _e2.length;
    return n ? (t = Nt(t) ? Et(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(j(t)), s ? U(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
  }

  function nt(t) {
    var e = Object.create(null);
    return function (i) {
      return e[i] || (e[i] = t(i));
    };
  }

  var je = /*#__PURE__*/_createClass(function je() {
    var _this = this;

    _classCallCheck(this, je);

    this.promise = new Promise(function (e, i) {
      _this.reject = i, _this.resolve = e;
    });
  });

  function k(t, e, i) {
    if (At(e)) {
      for (var n in e) {
        k(t, n, e[n]);
      }

      return;
    }

    if (Y(i)) {
      var s;
      return (s = j(t)) == null ? void 0 : s.getAttribute(e);
    } else {
      var _iterator = _createForOfIteratorHelper(x(t)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _n2 = _step.value;
          dt(i) && (i = i.call(_n2, k(_n2, e))), i === null ? be(_n2, e) : _n2.setAttribute(e, i);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  function Bt(t, e) {
    return x(t).some(function (i) {
      return i.hasAttribute(e);
    });
  }

  function be(t, e) {
    var i = x(t);

    var _iterator2 = _createForOfIteratorHelper(e.split(" ")),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var s = _step2.value;

        var _iterator3 = _createForOfIteratorHelper(i),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var n = _step3.value;
            n.removeAttribute(s);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  function rt(t, e) {
    for (var _i2 = 0, _arr2 = [e, "data-" + e]; _i2 < _arr2.length; _i2++) {
      var i = _arr2[_i2];
      if (Bt(t, i)) return k(t, i);
    }
  }

  var ir = {
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
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };

  function Ci(t) {
    return x(t).some(function (e) {
      return ir[e.tagName.toLowerCase()];
    });
  }

  function R(t) {
    return x(t).some(function (e) {
      return e.offsetWidth || e.offsetHeight || e.getClientRects().length;
    });
  }

  var xe = "input,select,textarea,button";

  function Ii(t) {
    return x(t).some(function (e) {
      return D(e, xe);
    });
  }

  var Re = xe + ",a[href],[tabindex]";

  function qe(t) {
    return D(t, Re);
  }

  function P(t) {
    var e;
    return (e = j(t)) == null ? void 0 : e.parentElement;
  }

  function ye(t, e) {
    return x(t).filter(function (i) {
      return D(i, e);
    });
  }

  function D(t, e) {
    return x(t).some(function (i) {
      return i.matches(e);
    });
  }

  function ot(t, e) {
    return lt(e, ">") && (e = e.slice(1)), Jt(t) ? t.closest(e) : x(t).map(function (i) {
      return ot(i, e);
    }).filter(Boolean);
  }

  function z(t, e) {
    return O(e) ? D(t, e) || !!ot(t, e) : t === e || j(e).contains(j(t));
  }

  function $e(t, e) {
    var i = [];

    for (; t = P(t);) {
      (!e || D(t, e)) && i.push(t);
    }

    return i;
  }

  function N(t, e) {
    t = j(t);
    var i = t ? x(t.children) : [];
    return e ? ye(i, e) : i;
  }

  function Ut(t, e) {
    return e ? x(t).indexOf(j(e)) : N(P(t)).indexOf(t);
  }

  function kt(t, e) {
    return Ai(t, us(t, e));
  }

  function ke(t, e) {
    return Se(t, us(t, e));
  }

  function Ai(t, e) {
    return j(ds(t, e, "querySelector"));
  }

  function Se(t, e) {
    return x(ds(t, e, "querySelectorAll"));
  }

  var sr = /(^|[^\\],)\s*[!>+~-]/,
      cs = nt(function (t) {
    return t.match(sr);
  });

  function us(t, e) {
    return e === void 0 && (e = document), O(t) && cs(t) || ge(e) ? e : e.ownerDocument;
  }

  var nr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
      rr = nt(function (t) {
    return t.replace(nr, "$1 *");
  });

  function ds(t, e, i) {
    if (e === void 0 && (e = document), !t || !O(t)) return t;

    if (t = rr(t), cs(t)) {
      var s = ar(t);
      t = "";

      var _iterator4 = _createForOfIteratorHelper(s),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var n = _step4.value;
          var r = e;

          if (n[0] === "!") {
            var o = n.substr(1).trim().split(" ");
            if (r = ot(P(e), o[0]), n = o.slice(1).join(" ").trim(), !n.length && s.length === 1) return r;
          }

          if (n[0] === "-") {
            var _o2 = n.substr(1).trim().split(" "),
                a = (r || e).previousElementSibling;

            r = D(a, n.substr(1)) ? a : null, n = _o2.slice(1).join(" ");
          }

          r && (t += (t ? "," : "") + lr(r) + " " + n);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      e = document;
    }

    try {
      return e[i](t);
    } catch (_unused) {
      return null;
    }
  }

  var or = /.*?[^\\](?:,|$)/g,
      ar = nt(function (t) {
    return t.match(or).map(function (e) {
      return e.replace(/,$/, "").trim();
    });
  });

  function lr(t) {
    var e = [];

    for (; t.parentNode;) {
      var i = k(t, "id");

      if (i) {
        e.unshift("#" + Pi(i));
        break;
      } else {
        var _t2 = t,
            s = _t2.tagName;
        s !== "HTML" && (s += ":nth-child(" + (Ut(t) + 1) + ")"), e.unshift(s), t = t.parentNode;
      }
    }

    return e.join(" > ");
  }

  function Pi(t) {
    return O(t) ? CSS.escape(t) : "";
  }

  function T() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    var _Ei = Ei(e),
        _Ei2 = _slicedToArray(_Ei, 5),
        s = _Ei2[0],
        n = _Ei2[1],
        r = _Ei2[2],
        o = _Ei2[3],
        _Ei2$ = _Ei2[4],
        a = _Ei2$ === void 0 ? !1 : _Ei2$;

    o.length > 1 && (o = cr(o)), a != null && a.self && (o = ur(o)), r && (o = hr(r, o));

    var _iterator5 = _createForOfIteratorHelper(n),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var l = _step5.value;

        var _iterator6 = _createForOfIteratorHelper(s),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var h = _step6.value;
            h.addEventListener(l, o, a);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return function () {
      return te(s, n, o, a);
    };
  }

  function te() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    var _Ei3 = Ei(e),
        _Ei4 = _slicedToArray(_Ei3, 5),
        s = _Ei4[0],
        n = _Ei4[1],
        r = _Ei4[3],
        _Ei4$ = _Ei4[4],
        o = _Ei4$ === void 0 ? !1 : _Ei4$;

    var _iterator7 = _createForOfIteratorHelper(n),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var a = _step7.value;

        var _iterator8 = _createForOfIteratorHelper(s),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var l = _step8.value;
            l.removeEventListener(a, r, o);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  function L() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    var _Ei5 = Ei(e),
        _Ei6 = _slicedToArray(_Ei5, 6),
        s = _Ei6[0],
        n = _Ei6[1],
        r = _Ei6[2],
        o = _Ei6[3],
        _Ei6$ = _Ei6[4],
        a = _Ei6$ === void 0 ? !1 : _Ei6$,
        l = _Ei6[5],
        h = T(s, n, r, function (c) {
      var d = !l || l(c);
      d && (h(), o(c, d));
    }, a);

    return h;
  }

  function p(t, e, i) {
    return _i(t).every(function (s) {
      return s.dispatchEvent(Dt(e, !0, !0, i));
    });
  }

  function Dt(t, e, i, s) {
    return e === void 0 && (e = !0), i === void 0 && (i = !1), O(t) && (t = new CustomEvent(t, {
      bubbles: e,
      cancelable: i,
      detail: s
    })), t;
  }

  function Ei(t) {
    return t[0] = _i(t[0]), O(t[1]) && (t[1] = t[1].split(" ")), dt(t[2]) && t.splice(2, 0, !1), t;
  }

  function hr(t, e) {
    var _this2 = this;

    return function (i) {
      var s = t[0] === ">" ? Se(t, i.currentTarget).reverse().filter(function (n) {
        return z(i.target, n);
      })[0] : ot(i.target, t);
      s && (i.current = s, e.call(_this2, i));
    };
  }

  function cr(t) {
    return function (e) {
      return st(e.detail) ? t.apply(void 0, [e].concat(_toConsumableArray(e.detail))) : t(e);
    };
  }

  function ur(t) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
    };
  }

  function fs(t) {
    return t && "addEventListener" in t;
  }

  function dr(t) {
    return fs(t) ? t : j(t);
  }

  function _i(t) {
    return st(t) ? t.map(dr).filter(Boolean) : O(t) ? Se(t) : fs(t) ? [t] : x(t);
  }

  function St(t) {
    return t.pointerType === "touch" || !!t.touches;
  }

  function ee(t) {
    var e, i;

    var _ref2 = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t,
        s = _ref2.clientX,
        n = _ref2.clientY;

    return {
      x: s,
      y: n
    };
  }

  function ps(t, e) {
    var i = _objectSpread({
      data: null,
      method: "GET",
      headers: {},
      xhr: new XMLHttpRequest(),
      beforeSend: A,
      responseType: ""
    }, e);

    return Promise.resolve().then(function () {
      return i.beforeSend(i);
    }).then(function () {
      return fr(t, i);
    });
  }

  function fr(t, e) {
    return new Promise(function (i, s) {
      var n = e.xhr;

      for (var r in e) {
        if (r in n) try {
          n[r] = e[r];
        } catch (_unused2) {}
      }

      n.open(e.method.toUpperCase(), t);

      for (var _r2 in e.headers) {
        n.setRequestHeader(_r2, e.headers[_r2]);
      }

      T(n, "load", function () {
        n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(yt(Error(n.statusText), {
          xhr: n,
          status: n.status
        }));
      }), T(n, "error", function () {
        return s(yt(Error("Network Error"), {
          xhr: n
        }));
      }), T(n, "timeout", function () {
        return s(yt(Error("Network Timeout"), {
          xhr: n
        }));
      }), n.send(e.data);
    });
  }

  function gs(t, e, i) {
    return new Promise(function (s, n) {
      var r = new Image();
      r.onerror = function (o) {
        n(o);
      }, r.onload = function () {
        s(r);
      }, i && (r.sizes = i), e && (r.srcset = e), r.src = t;
    });
  }

  var pr = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0
  };

  function u(t, e, i, s) {
    s === void 0 && (s = "");
    var n = x(t);

    var _iterator9 = _createForOfIteratorHelper(n),
        _step9;

    try {
      var _loop = function _loop() {
        var r = _step9.value;

        if (O(e)) {
          if (e = Oi(e), Y(i)) return {
            v: getComputedStyle(r).getPropertyValue(e)
          };
          r.style.setProperty(e, Nt(i) && !pr[e] ? i + "px" : i || Kt(i) ? i : "", s);
        } else if (st(e)) {
          var o = {};

          var _iterator10 = _createForOfIteratorHelper(e),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var a = _step10.value;
              o[a] = u(r, a);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          return {
            v: o
          };
        } else At(e) && (s = i, $t(e, function (o, a) {
          return u(r, a, o, s);
        }));
      };

      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _ret = _loop();

        if (_typeof(_ret) === "object") return _ret.v;
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    return n[0];
  }

  var gr = /^\s*(["'])?(.*?)\1\s*$/;

  function zt(t, e) {
    return e === void 0 && (e = document.documentElement), u(e, "--uk-" + t).replace(gr, "$2");
  }

  var Oi = nt(function (t) {
    return mr(t);
  }),
      ms = ["webkit", "moz"];

  function mr(t) {
    if (t[0] === "-") return t;
    t = Mt(t);
    var e = document.documentElement.style;
    if (t in e) return t;
    var i = ms.length,
        s;

    for (; i--;) {
      if (s = "-" + ms[i] + "-" + t, s in e) return s;
    }
  }

  function w(t) {
    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) {
      i[s - 1] = arguments[s];
    }

    vs(t, i, "add");
  }

  function E(t) {
    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) {
      i[s - 1] = arguments[s];
    }

    vs(t, i, "remove");
  }

  function Mi(t, e) {
    k(t, "class", function (i) {
      return (i || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }

  function Ni(t) {
    !(arguments.length <= 1) && arguments[1] && E(t, arguments.length <= 1 ? void 0 : arguments[1]), !(arguments.length <= 2) && arguments[2] && w(t, arguments.length <= 2 ? void 0 : arguments[2]);
  }

  function S(t, e) {
    var _Bi, _Bi2;

    return (_Bi = Bi(e), _Bi2 = _slicedToArray(_Bi, 1), e = _Bi2[0]), !!e && x(t).some(function (i) {
      return i.classList.contains(e);
    });
  }

  function W(t, e, i) {
    var s = Bi(e);
    Y(i) || (i = !!i);

    var _iterator11 = _createForOfIteratorHelper(x(t)),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var n = _step11.value;

        var _iterator12 = _createForOfIteratorHelper(s),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var r = _step12.value;
            n.classList.toggle(r, i);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  function vs(t, e, i) {
    e = e.reduce(function (s, n) {
      return s.concat(Bi(n));
    }, []);

    var _iterator13 = _createForOfIteratorHelper(x(t)),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _s$classList;

        var s = _step13.value;

        (_s$classList = s.classList)[i].apply(_s$classList, _toConsumableArray(e));
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
  }

  function Bi(t) {
    return String(t).split(/\s|,/).filter(Boolean);
  }

  function ws(t, e, i, s) {
    return i === void 0 && (i = 400), s === void 0 && (s = "linear"), Promise.all(x(t).map(function (n) {
      return new Promise(function (r, o) {
        for (var l in e) {
          var h = u(n, l);
          h === "" && u(n, l, h);
        }

        var a = setTimeout(function () {
          return p(n, "transitionend");
        }, i);
        L(n, "transitionend transitioncanceled", function (l) {
          var h = l.type;
          clearTimeout(a), E(n, "uk-transition"), u(n, {
            transitionProperty: "",
            transitionDuration: "",
            transitionTimingFunction: ""
          }), h === "transitioncanceled" ? o() : r(n);
        }, {
          self: !0
        }), w(n, "uk-transition"), u(n, _objectSpread({
          transitionProperty: Object.keys(e).map(Oi).join(","),
          transitionDuration: i + "ms",
          transitionTimingFunction: s
        }, e));
      });
    }));
  }

  var C = {
    start: ws,
    stop: function stop(t) {
      return p(t, "transitionend"), Promise.resolve();
    },
    cancel: function cancel(t) {
      p(t, "transitioncanceled");
    },
    inProgress: function inProgress(t) {
      return S(t, "uk-transition");
    }
  },
      Te = "uk-animation-";

  function Di(t, e, i, s, n) {
    return i === void 0 && (i = 200), Promise.all(x(t).map(function (r) {
      return new Promise(function (o, a) {
        p(r, "animationcanceled");
        var l = setTimeout(function () {
          return p(r, "animationend");
        }, i);
        L(r, "animationend animationcanceled", function (h) {
          var c = h.type;
          clearTimeout(l), c === "animationcanceled" ? a() : o(r), u(r, "animationDuration", ""), Mi(r, Te + "\\S*");
        }, {
          self: !0
        }), u(r, "animationDuration", i + "ms"), w(r, e, Te + (n ? "leave" : "enter")), lt(e, Te) && (s && w(r, "uk-transform-origin-" + s), n && w(r, Te + "reverse"));
      });
    }));
  }

  var vr = new RegExp(Te + "(enter|leave)"),
      ut = {
    "in": Di,
    out: function out(t, e, i, s) {
      return Di(t, e, i, s, !0);
    },
    inProgress: function inProgress(t) {
      return vr.test(k(t, "class"));
    },
    cancel: function cancel(t) {
      p(t, "animationcanceled");
    }
  },
      Ht = {
    width: ["left", "right"],
    height: ["top", "bottom"]
  };

  function $(t) {
    var e = Jt(t) ? j(t).getBoundingClientRect() : {
      height: H(t),
      width: Ie(t),
      top: 0,
      left: 0
    };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width
    };
  }

  function I(t, e) {
    var i = $(t);

    if (t) {
      var _Zt = Zt(t),
          n = _Zt.scrollY,
          r = _Zt.scrollX,
          o = {
        height: n,
        width: r
      };

      for (var a in Ht) {
        var _iterator14 = _createForOfIteratorHelper(Ht[a]),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var l = _step14.value;
            i[l] += o[a];
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }

    if (!e) return i;
    var s = u(t, "position");
    $t(u(t, ["left", "top"]), function (n, r) {
      return u(t, r, e[r] - i[r] + y(s === "absolute" && n === "auto" ? Ve(t)[r] : n));
    });
  }

  function Ve(t) {
    var _I = I(t),
        e = _I.top,
        i = _I.left;

    var _j = j(t),
        _j$ownerDocument = _j.ownerDocument,
        s = _j$ownerDocument.body,
        n = _j$ownerDocument.documentElement,
        r = _j.offsetParent;

    var o = r || n;

    for (; o && (o === s || o === n) && u(o, "position") === "static";) {
      o = o.parentNode;
    }

    if (Jt(o)) {
      var a = I(o);
      e -= a.top + y(u(o, "borderTopWidth")), i -= a.left + y(u(o, "borderLeftWidth"));
    }

    return {
      top: e - y(u(t, "marginTop")),
      left: i - y(u(t, "marginLeft"))
    };
  }

  function Ce(t) {
    var e = [0, 0];
    t = j(t);

    do {
      if (e[0] += t.offsetTop, e[1] += t.offsetLeft, u(t, "position") === "fixed") {
        var i = Zt(t);
        return e[0] += i.scrollY, e[1] += i.scrollX, e;
      }
    } while (t = t.offsetParent);

    return e;
  }

  var H = bs("height"),
      Ie = bs("width");

  function bs(t) {
    var e = bt(t);
    return function (i, s) {
      if (Y(s)) {
        if (Xt(i)) return i["inner" + e];

        if (ge(i)) {
          var n = i.documentElement;
          return Math.max(n["offset" + e], n["scroll" + e]);
        }

        return i = j(i), s = u(i, t), s = s === "auto" ? i["offset" + e] : y(s) || 0, s - ie(i, t);
      } else return u(i, t, !s && s !== 0 ? "" : +s + ie(i, t) + "px");
    };
  }

  function ie(t, e, i) {
    return i === void 0 && (i = "border-box"), u(t, "boxSizing") === i ? Ht[e].map(bt).reduce(function (s, n) {
      return s + y(u(t, "padding" + n)) + y(u(t, "border" + n + "Width"));
    }, 0) : 0;
  }

  function Ye(t) {
    for (var e in Ht) {
      for (var i in Ht[e]) {
        if (Ht[e][i] === t) return Ht[e][1 - i];
      }
    }

    return t;
  }

  function J(t, e, i, s) {
    return e === void 0 && (e = "width"), i === void 0 && (i = window), s === void 0 && (s = !1), O(t) ? br(t).reduce(function (n, r) {
      var o = yr(r);
      return o && (r = $r(o === "vh" ? H(Zt(i)) : o === "vw" ? Ie(Zt(i)) : s ? i["offset" + bt(e)] : $(i)[e], r)), n + y(r);
    }, 0) : y(t);
  }

  var wr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
      br = nt(function (t) {
    return t.toString().replace(/\s/g, "").match(wr) || [];
  }),
      xr = /(?:v[hw]|%)$/,
      yr = nt(function (t) {
    return (t.match(xr) || [])[0];
  });

  function $r(t, e) {
    return t * y(e) / 100;
  }

  function zi(t) {
    if (document.readyState !== "loading") {
      t();
      return;
    }

    L(document, "DOMContentLoaded", t);
  }

  function ft(t, e) {
    var i;
    return (t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) === e.toLowerCase();
  }

  function xs(t) {
    return t = m(t), t.innerHTML = "", t;
  }

  function _t(t, e) {
    return Y(e) ? m(t).innerHTML : q(xs(t), e);
  }

  var kr = Xe("prepend"),
      q = Xe("append"),
      Hi = Xe("before"),
      Ge = Xe("after");

  function Xe(t) {
    return function (e, i) {
      var _s3;

      var s;
      var n = x(O(i) ? Ft(i) : i);
      return (s = m(e)) == null || (_s3 = s)[t].apply(_s3, _toConsumableArray(n)), $s(n);
    };
  }

  function ht(t) {
    x(t).forEach(function (e) {
      return e.remove();
    });
  }

  function Je(t, e) {
    for (e = j(Hi(t, e)); e.firstChild;) {
      e = e.firstChild;
    }

    return q(e, t), e;
  }

  function ys(t, e) {
    return x(x(t).map(function (i) {
      return i.hasChildNodes() ? Je(x(i.childNodes), e) : q(i, e);
    }));
  }

  function Ke(t) {
    x(t).map(P).filter(function (e, i, s) {
      return s.indexOf(e) === i;
    }).forEach(function (e) {
      return e.replaceWith.apply(e, _toConsumableArray(e.childNodes));
    });
  }

  var Sr = /^\s*<(\w+|!)[^>]*>/,
      Tr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function Ft(t) {
    var e = Tr.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return Sr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, $s(i.childNodes);
  }

  function $s(t) {
    return t.length > 1 ? t : t[0];
  }

  function Tt(t, e) {
    if (!!Jt(t)) for (e(t), t = t.firstElementChild; t;) {
      var i = t.nextElementSibling;
      Tt(t, e), t = i;
    }
  }

  function m(t, e) {
    return ks(t) ? j(Ft(t)) : Ai(t, e);
  }

  function M(t, e) {
    return ks(t) ? x(Ft(t)) : Se(t, e);
  }

  function ks(t) {
    return O(t) && lt(t.trim(), "<");
  }

  var Lt = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u",
      K = Lt && k(document.documentElement, "dir") === "rtl",
      Wt = Lt && "ontouchstart" in window,
      se = Lt && window.PointerEvent,
      ct = se ? "pointerdown" : Wt ? "touchstart" : "mousedown",
      ne = se ? "pointermove" : Wt ? "touchmove" : "mousemove",
      pt = se ? "pointerup" : Wt ? "touchend" : "mouseup",
      jt = se ? "pointerenter" : Wt ? "" : "mouseenter",
      re = se ? "pointerleave" : Wt ? "" : "mouseleave",
      oe = se ? "pointercancel" : "touchcancel",
      B = {
    reads: [],
    writes: [],
    read: function read(t) {
      return this.reads.push(t), Li(), t;
    },
    write: function write(t) {
      return this.writes.push(t), Li(), t;
    },
    clear: function clear(t) {
      Ts(this.reads, t), Ts(this.writes, t);
    },
    flush: Fi
  };

  function Fi(t) {
    Ss(B.reads), Ss(B.writes.splice(0)), B.scheduled = !1, (B.reads.length || B.writes.length) && Li(t + 1);
  }

  var Cr = 4;

  function Li(t) {
    B.scheduled || (B.scheduled = !0, t && t < Cr ? Promise.resolve().then(function () {
      return Fi(t);
    }) : requestAnimationFrame(function () {
      return Fi(1);
    }));
  }

  function Ss(t) {
    var e;

    for (; e = t.shift();) {
      try {
        e();
      } catch (i) {
        console.error(i);
      }
    }
  }

  function Ts(t, e) {
    var i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }

  function Wi() {}

  Wi.prototype = {
    positions: [],
    init: function init() {
      var _this3 = this;

      this.positions = [];
      var t;
      this.unbind = T(document, "mousemove", function (e) {
        return t = ee(e);
      }), this.interval = setInterval(function () {
        !t || (_this3.positions.push(t), _this3.positions.length > 5 && _this3.positions.shift());
      }, 50);
    },
    cancel: function cancel() {
      var t;
      (t = this.unbind) == null || t.call(this), this.interval && clearInterval(this.interval);
    },
    movesTo: function movesTo(t) {
      if (this.positions.length < 2) return !1;

      var e = t.getBoundingClientRect(),
          i = e.left,
          s = e.right,
          n = e.top,
          r = e.bottom,
          _this$positions = _slicedToArray(this.positions, 1),
          o = _this$positions[0],
          a = we(this.positions),
          l = [o, a];

      return Le(a, e) ? !1 : [[{
        x: i,
        y: n
      }, {
        x: s,
        y: r
      }], [{
        x: i,
        y: r
      }, {
        x: s,
        y: n
      }]].some(function (c) {
        var d = Ir(l, c);
        return d && Le(d, e);
      });
    }
  };

  function Ir(t, e) {
    var _t3 = _slicedToArray(t, 2),
        _t3$ = _t3[0],
        i = _t3$.x,
        s = _t3$.y,
        _t3$2 = _t3[1],
        n = _t3$2.x,
        r = _t3$2.y,
        _e3 = _slicedToArray(e, 2),
        _e3$ = _e3[0],
        o = _e3$.x,
        a = _e3$.y,
        _e3$2 = _e3[1],
        l = _e3$2.x,
        h = _e3$2.y;

    var c = (h - a) * (n - i) - (l - o) * (r - s);
    if (c === 0) return !1;
    var d = ((l - o) * (s - a) - (h - a) * (i - o)) / c;
    return d < 0 ? !1 : {
      x: i + d * (n - i),
      y: s + d * (r - s)
    };
  }

  function ae(t, e, i, s) {
    s === void 0 && (s = !0);
    var n = new IntersectionObserver(s ? function (r, o) {
      r.some(function (a) {
        return a.isIntersecting;
      }) && e(r, o);
    } : e, i);

    var _iterator15 = _createForOfIteratorHelper(x(t)),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var r = _step15.value;
        n.observe(r);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    return n;
  }

  var Ar = Lt && window.ResizeObserver;

  function Ze(t, e, i) {
    return i === void 0 && (i = {
      box: "border-box"
    }), Ar ? Is(ResizeObserver, t, e, i) : (Pr(), Ae.add(e), {
      disconnect: function disconnect() {
        Ae["delete"](e);
      }
    });
  }

  var Ae;

  function Pr() {
    if (Ae) return;
    Ae = new Set();
    var t;

    var e = function e() {
      if (!t) {
        t = !0, B.read(function () {
          return t = !1;
        });

        var _iterator16 = _createForOfIteratorHelper(Ae),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var i = _step16.value;
            i();
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
    };

    T(window, "load resize", e), T(document, "loadedmetadata load", e, !0);
  }

  function Cs(t, e, i) {
    return Is(MutationObserver, t, e, i);
  }

  function Is(t, e, i, s) {
    var n = new t(i);

    var _iterator17 = _createForOfIteratorHelper(x(e)),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var r = _step17.value;
        n.observe(r, s);
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }

    return n;
  }

  var Q = {};
  Q.events = Q.created = Q.beforeConnect = Q.connected = Q.beforeDisconnect = Q.disconnected = Q.destroy = ji, Q.args = function (t, e) {
    return e !== !1 && ji(e || t);
  }, Q.update = function (t, e) {
    return Fe(ji(t, dt(e) ? {
      read: e
    } : e), "order");
  }, Q.props = function (t, e) {
    if (st(e)) {
      var i = {};

      var _iterator18 = _createForOfIteratorHelper(e),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var s = _step18.value;
          i[s] = String;
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      e = i;
    }

    return Q.methods(t, e);
  }, Q.computed = Q.methods = function (t, e) {
    return e ? t ? _objectSpread(_objectSpread({}, t), e) : e : t;
  }, Q.data = function (t, e, i) {
    return i ? As(t, e, i) : e ? t ? function (s) {
      return As(t, e, s);
    } : e : t;
  };

  function As(t, e, i) {
    return Q.computed(dt(t) ? t.call(i, i) : t, dt(e) ? e.call(i, i) : e);
  }

  function ji(t, e) {
    return t = t && !st(t) ? [t] : t, e ? t ? t.concat(e) : st(e) ? e : [e] : t;
  }

  function Er(t, e) {
    return Y(e) ? t : e;
  }

  function le(t, e, i) {
    var s = {};

    if (dt(e) && (e = e.options), e["extends"] && (t = le(t, e["extends"], i)), e.mixins) {
      var _iterator19 = _createForOfIteratorHelper(e.mixins),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var r = _step19.value;
          t = le(t, r, i);
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }

    for (var _r3 in t) {
      n(_r3);
    }

    for (var _r4 in e) {
      Ot(t, _r4) || n(_r4);
    }

    function n(r) {
      s[r] = (Q[r] || Er)(t[r], e[r], i);
    }

    return s;
  }

  function Pe(t, e) {
    e === void 0 && (e = []);

    try {
      return t ? lt(t, "{") ? JSON.parse(t) : e.length && !g(t, ":") ? _defineProperty({}, e[0], t) : t.split(";").reduce(function (i, s) {
        var _s$split = s.split(/:(.*)/),
            _s$split2 = _slicedToArray(_s$split, 2),
            n = _s$split2[0],
            r = _s$split2[1];

        return n && !Y(r) && (i[n.trim()] = r.trim()), i;
      }, {}) : {};
    } catch (_unused3) {
      return {};
    }
  }

  function Ps(t) {
    if (Ue(t) && Ri(t, {
      func: "playVideo",
      method: "play"
    }), Qe(t)) try {
      t.play()["catch"](A);
    } catch (_unused4) {}
  }

  function Es(t) {
    Ue(t) && Ri(t, {
      func: "pauseVideo",
      method: "pause"
    }), Qe(t) && t.pause();
  }

  function _s(t) {
    Ue(t) && Ri(t, {
      func: "mute",
      method: "setVolume",
      value: 0
    }), Qe(t) && (t.muted = !0);
  }

  function Os(t) {
    return Qe(t) || Ue(t);
  }

  function Qe(t) {
    return ft(t, "video");
  }

  function Ue(t) {
    return ft(t, "iframe") && (Ms(t) || Ns(t));
  }

  function Ms(t) {
    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }

  function Ns(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }

  function Ri(_x, _x2) {
    return _Ri.apply(this, arguments);
  }

  function _Ri() {
    _Ri = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(t, e) {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return Or(t);

            case 2:
              Bs(t, e);

            case 3:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));
    return _Ri.apply(this, arguments);
  }

  function Bs(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify(_objectSpread({
        event: "command"
      }, e)), "*");
    } catch (_unused5) {}
  }

  var qi = "_ukPlayer";
  var _r = 0;

  function Or(t) {
    if (t[qi]) return t[qi];
    var e = Ms(t),
        i = Ns(t),
        s = ++_r;
    var n;
    return t[qi] = new Promise(function (r) {
      e && L(t, "load", function () {
        var o = function o() {
          return Bs(t, {
            event: "listening",
            id: s
          });
        };

        n = setInterval(o, 100), o();
      }), L(window, "message", r, !1, function (o) {
        var a = o.data;

        try {
          return a = JSON.parse(a), a && (e && a.id === s && a.event === "onReady" || i && Number(a.player_id) === s);
        } catch (_unused6) {}
      }), t.src = "" + t.src + (g(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + s);
    }).then(function () {
      return clearInterval(n);
    });
  }

  function ti(t, e, i) {
    return e === void 0 && (e = 0), i === void 0 && (i = 0), R(t) ? Si.apply(void 0, _toConsumableArray(Ct(t).map(function (s) {
      var _gt = gt(s),
          n = _gt.top,
          r = _gt.left,
          o = _gt.bottom,
          a = _gt.right;

      return {
        top: n - e,
        left: r - i,
        bottom: o + e,
        right: a + i
      };
    }).concat(I(t)))) : !1;
  }

  function Rt(t, e) {
    if (Xt(t) || ge(t) ? t = Gi(t) : t = j(t), Y(e)) return t.scrollTop;
    t.scrollTop = e;
  }

  function Vi(t, e) {
    var _ref4 = e === void 0 ? {} : e,
        _ref4$offset = _ref4.offset,
        i = _ref4$offset === void 0 ? 0 : _ref4$offset;

    var s = R(t) ? Ct(t) : [];
    return s.reduce(function (a, l, h) {
      var c = l.scrollTop,
          d = l.scrollHeight,
          f = l.offsetHeight,
          v = gt(l),
          _ = d - v.height,
          _ref5 = s[h - 1] ? gt(s[h - 1]) : I(t),
          b = _ref5.height,
          Z = _ref5.top;

      var X = Math.ceil(Z - v.top - i + c);
      return i > 0 && f < b + i ? X += i : i = 0, X > _ ? (i -= X - _, X = _) : X < 0 && (i -= X, X = 0), function () {
        return n(l, X - c).then(a);
      };
    }, function () {
      return Promise.resolve();
    })();

    function n(a, l) {
      return new Promise(function (h) {
        var c = a.scrollTop,
            d = r(Math.abs(l)),
            f = Date.now();

        (function v() {
          var _ = o(U((Date.now() - f) / d));

          Rt(a, c + l * _), _ === 1 ? h() : requestAnimationFrame(v);
        })();
      });
    }

    function r(a) {
      return 40 * Math.pow(a, .375);
    }

    function o(a) {
      return .5 * (1 - Math.cos(Math.PI * a));
    }
  }

  function Yi(t, e, i) {
    if (e === void 0 && (e = 0), i === void 0 && (i = 0), !R(t)) return 0;

    var _Ct = Ct(t, /auto|scroll/, !0),
        _Ct2 = _slicedToArray(_Ct, 1),
        s = _Ct2[0],
        n = s.scrollHeight,
        r = s.scrollTop,
        _gt2 = gt(s),
        o = _gt2.height,
        a = n - o,
        l = Ce(t)[0] - Ce(s)[0],
        h = Math.max(0, l - o + e),
        c = Math.min(a, l + t.offsetHeight - i);

    return U((r - h) / (c - h));
  }

  function Ct(t, e, i) {
    e === void 0 && (e = /auto|scroll|hidden/), i === void 0 && (i = !1);
    var s = Gi(t);
    var n = $e(t).reverse();
    n = n.slice(n.indexOf(s) + 1);
    var r = xt(n, function (o) {
      return u(o, "position") === "fixed";
    });
    return ~r && (n = n.slice(r)), [s].concat(n.filter(function (o) {
      return e.test(u(o, "overflow")) && (!i || o.scrollHeight > gt(o).height);
    })).reverse();
  }

  function gt(t) {
    var e = Mr(t),
        i = I(e);

    for (var _i3 = 0, _arr3 = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]; _i3 < _arr3.length; _i3++) {
      var _arr3$_i = _slicedToArray(_arr3[_i3], 4),
          s = _arr3$_i[0],
          n = _arr3$_i[1],
          r = _arr3$_i[2],
          o = _arr3$_i[3];

      Xt(e) ? e = e.document.documentElement : i[r] += y(u(e, "border" + bt(r) + "Width")), i[s] = i[n] = e["client" + bt(s)], i[o] = i[s] + i[r];
    }

    return i;
  }

  function Gi(t) {
    return Zt(t).document.scrollingElement;
  }

  function Mr(t) {
    return t === Gi(t) ? window : t;
  }

  var mt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];

  function Ds(t, e, i) {
    i = _objectSpread({
      attach: _objectSpread({
        element: ["left", "top"],
        target: ["left", "top"]
      }, i.attach),
      offset: [0, 0]
    }, i);
    var s = i.flip ? Fs(t, e, i) : zs(t, e, i);
    I(t, s);
  }

  function zs(t, e, i) {
    var _attach$offset$i = _objectSpread({
      attach: _objectSpread({
        element: ["left", "top"],
        target: ["left", "top"]
      }, i.attach),
      offset: [0, 0]
    }, i),
        s = _attach$offset$i.attach,
        n = _attach$offset$i.offset;

    var r = I(t),
        o = I(e);

    for (var _i4 = 0, _Object$entries = Object.entries(mt); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          a = _Object$entries$_i[0],
          _Object$entries$_i$ = _slicedToArray(_Object$entries$_i[1], 4),
          l = _Object$entries$_i$[0],
          h = _Object$entries$_i$[1],
          c = _Object$entries$_i$[2],
          d = _Object$entries$_i$[3];

      r[c] = r[h] = o[c] + Hs(s.target[a], d, o[l]) - Hs(s.element[a], d, r[l]) + +n[a], r[d] = r[c] + r[l];
    }

    return r;
  }

  function Hs(t, e, i) {
    return t === "center" ? i / 2 : t === e ? i : 0;
  }

  function Fs(t, e, i) {
    var s = zs(t, e, i),
        n = I(e);
    var r = i.flip,
        _i$attach = i.attach,
        o = _i$attach.element,
        a = _i$attach.target,
        l = i.offset,
        h = i.boundary,
        c = i.viewport,
        d = i.viewportOffset,
        f = Ct(t);
    h === e && (f = f.filter(function (b) {
      return b !== h;
    }));

    var _f = f,
        _f2 = _slicedToArray(_f, 1),
        v = _f2[0];

    f.push(c);

    var _ = _objectSpread({}, s);

    for (var _i5 = 0, _Object$entries2 = Object.entries(mt); _i5 < _Object$entries2.length; _i5++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          b = _Object$entries2$_i[0],
          _Object$entries2$_i$ = _slicedToArray(_Object$entries2$_i[1], 4),
          Z = _Object$entries2$_i$[0],
          X = _Object$entries2$_i$[1],
          V = _Object$entries2$_i$[2],
          at = _Object$entries2$_i$[3];

      if (r !== !0 && !g(r, X)) continue;
      var Kn = !Ws(s, n, b) && Ws(s, n, 1 - b);
      c = Ls.apply(void 0, _toConsumableArray(f.filter(Boolean).map(gt))), d && (c[V] += d, c[at] -= d), h && !Kn && s[Z] <= I(h)[Z] && (c = Ls(c, I(h)));
      var Zn = s[V] >= c[V],
          Qn = s[at] <= c[at];
      if (Zn && Qn) continue;
      var de = void 0;

      if (Kn) {
        var _objectSpread2;

        if (o[b] === at && Zn || o[b] === V && Qn) continue;

        if (de = (o[b] === V ? -s[Z] : o[b] === at ? s[Z] : 0) + (a[b] === V ? n[Z] : a[b] === at ? -n[Z] : 0) - l[b] * 2, !Xi(_objectSpread(_objectSpread({}, s), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, V, s[V] + de), _defineProperty(_objectSpread2, at, s[at] + de), _objectSpread2)), v, b)) {
          if (Xi(s, v, b)) continue;
          if (i.recursion) return !1;

          if (r === !0 || g(r, mt[1 - b][1])) {
            var os = Fs(t, e, _objectSpread(_objectSpread({}, i), {}, {
              attach: {
                element: o.map(js).reverse(),
                target: a.map(js).reverse()
              },
              offset: l.reverse(),
              flip: r === !0 ? r : [].concat(_toConsumableArray(r), [mt[1 - b][1]]),
              recursion: !0
            }));
            if (os && Xi(os, v, 1 - b)) return os;
          }
        }
      } else de = U(U(s[V], c[V], c[at] - s[Z]), n[V] - s[Z] + l[b], n[at] - l[b]) - s[V];

      _[V] = s[X] = s[V] + de, _[at] += de;
    }

    return _;
  }

  function Ls() {
    var t = {};

    for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++) {
      i[s] = arguments[s];
    }

    for (var _i7 = 0, _i6 = i; _i7 < _i6.length; _i7++) {
      var n = _i6[_i7];

      var _iterator20 = _createForOfIteratorHelper(mt),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var _step20$value = _slicedToArray(_step20.value, 4),
              r = _step20$value[2],
              o = _step20$value[3];

          t[r] = Math.max(t[r] || 0, n[r]), t[o] = Math.min.apply(Math, _toConsumableArray([t[o], n[o]].filter(Boolean)));
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }

    return t;
  }

  function Xi(t, e, i) {
    var s = gt(e),
        _mt$i = _slicedToArray(mt[i], 4),
        n = _mt$i[0],
        r = _mt$i[2],
        o = _mt$i[3];

    return s[r] -= e["scroll" + bt(r)], s[o] = s[r] + e["scroll" + bt(n)], t[r] >= s[r] && t[o] <= s[o];
  }

  function Ws(t, e, i) {
    var _mt$i2 = _slicedToArray(mt[i], 4),
        s = _mt$i2[2],
        n = _mt$i2[3];

    return t[n] > e[s] && e[n] > t[s];
  }

  function js(t) {
    for (var e = 0; e < mt.length; e++) {
      var i = mt[e].indexOf(t);
      if (~i) return mt[1 - e][i % 2 + 2];
    }
  }

  var Nr = Object.freeze({
    __proto__: null,
    ajax: ps,
    getImage: gs,
    transition: ws,
    Transition: C,
    animate: Di,
    Animation: ut,
    attr: k,
    hasAttr: Bt,
    removeAttr: be,
    data: rt,
    addClass: w,
    removeClass: E,
    removeClasses: Mi,
    replaceClass: Ni,
    hasClass: S,
    toggleClass: W,
    dimensions: $,
    offset: I,
    position: Ve,
    offsetPosition: Ce,
    height: H,
    width: Ie,
    boxModelAdjust: ie,
    flipPosition: Ye,
    toPx: J,
    ready: zi,
    isTag: ft,
    empty: xs,
    html: _t,
    prepend: kr,
    append: q,
    before: Hi,
    after: Ge,
    remove: ht,
    wrapAll: Je,
    wrapInner: ys,
    unwrap: Ke,
    fragment: Ft,
    apply: Tt,
    $: m,
    $$: M,
    inBrowser: Lt,
    isRtl: K,
    hasTouch: Wt,
    pointerDown: ct,
    pointerMove: ne,
    pointerUp: pt,
    pointerEnter: jt,
    pointerLeave: re,
    pointerCancel: oe,
    on: T,
    off: te,
    once: L,
    trigger: p,
    createEvent: Dt,
    toEventTargets: _i,
    isTouch: St,
    getEventPos: ee,
    fastdom: B,
    isVoidElement: Ci,
    isVisible: R,
    selInput: xe,
    isInput: Ii,
    selFocusable: Re,
    isFocusable: qe,
    parent: P,
    filter: ye,
    matches: D,
    closest: ot,
    within: z,
    parents: $e,
    children: N,
    index: Ut,
    hasOwn: Ot,
    hyphenate: Mt,
    camelize: Yt,
    ucfirst: bt,
    startsWith: lt,
    endsWith: Gt,
    includes: g,
    findIndex: xt,
    isArray: st,
    toArray: bi,
    assign: yt,
    isFunction: dt,
    isObject: At,
    isPlainObject: Pt,
    isWindow: Xt,
    isDocument: ge,
    isNode: xi,
    isElement: Jt,
    isBoolean: He,
    isString: O,
    isNumber: Kt,
    isNumeric: Nt,
    isEmpty: me,
    isUndefined: Y,
    toBoolean: $i,
    toNumber: Et,
    toFloat: y,
    toNode: j,
    toNodes: x,
    toWindow: Zt,
    isEqual: ve,
    swap: ki,
    last: we,
    each: $t,
    sortBy: Fe,
    uniqueBy: ls,
    clamp: U,
    noop: A,
    intersectRect: Si,
    pointInRect: Le,
    Dimensions: We,
    getIndex: Qt,
    memoize: nt,
    Deferred: je,
    MouseTracker: Wi,
    observeIntersection: ae,
    observeResize: Ze,
    observeMutation: Cs,
    mergeOptions: le,
    parseOptions: Pe,
    play: Ps,
    pause: Es,
    mute: _s,
    isVideo: Os,
    positionAt: Ds,
    query: kt,
    queryAll: ke,
    find: Ai,
    findAll: Se,
    escape: Pi,
    css: u,
    getCssVar: zt,
    propName: Oi,
    isInView: ti,
    scrollTop: Rt,
    scrollIntoView: Vi,
    scrolledOver: Yi,
    scrollParents: Ct,
    offsetViewport: gt
  });

  function Br(t) {
    var e = t.data;
    t.use = function (n) {
      if (!n.installed) return n.call(null, this), n.installed = !0, this;
    }, t.mixin = function (n, r) {
      r = (O(r) ? t.component(r) : r) || this, r.options = le(r.options, n);
    }, t.extend = function (n) {
      n = n || {};

      var r = this,
          o = function o(l) {
        this._init(l);
      };

      return o.prototype = Object.create(r.prototype), o.prototype.constructor = o, o.options = le(r.options, n), o["super"] = r, o.extend = r.extend, o;
    }, t.update = function (n, r) {
      n = n ? j(n) : document.body;

      var _iterator21 = _createForOfIteratorHelper($e(n).reverse()),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var o = _step21.value;
          s(o[e], r);
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      Tt(n, function (o) {
        return s(o[e], r);
      });
    };
    var i;
    Object.defineProperty(t, "container", {
      get: function get() {
        return i || document.body;
      },
      set: function set(n) {
        i = m(n);
      }
    });

    function s(n, r) {
      if (!!n) for (var o in n) {
        n[o]._connected && n[o]._callUpdate(r);
      }
    }
  }

  function Dr(t) {
    t.prototype._callHook = function (s) {
      var _this4 = this;

      var n;
      (n = this.$options[s]) == null || n.forEach(function (r) {
        return r.call(_this4);
      });
    }, t.prototype._callConnected = function () {
      this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate());
    }, t.prototype._callDisconnected = function () {
      !this._connected || (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch);
    }, t.prototype._callUpdate = function (s) {
      var _this5 = this;

      s === void 0 && (s = "update"), this._connected && ((s === "update" || s === "resize") && this._callWatches(), this.$options.update && (this._updates || (this._updates = new Set(), B.read(function () {
        _this5._connected && e.call(_this5, _this5._updates), delete _this5._updates;
      })), this._updates.add(s.type || s)));
    }, t.prototype._callWatches = function () {
      var _this6 = this;

      if (this._watch) return;
      var s = !Ot(this, "_watch");
      this._watch = B.read(function () {
        _this6._connected && i.call(_this6, s), _this6._watch = null;
      });
    };

    function e(s) {
      var _this7 = this;

      var _iterator22 = _createForOfIteratorHelper(this.$options.update),
          _step22;

      try {
        var _loop2 = function _loop2() {
          var _step22$value = _step22.value,
              n = _step22$value.read,
              r = _step22$value.write,
              _step22$value$events = _step22$value.events,
              o = _step22$value$events === void 0 ? [] : _step22$value$events;
          if (!s.has("update") && !o.some(function (l) {
            return s.has(l);
          })) return "continue";
          var a = void 0;
          n && (a = n.call(_this7, _this7._data, s), a && Pt(a) && yt(_this7._data, a)), r && a !== !1 && B.write(function () {
            return r.call(_this7, _this7._data, s);
          });
        };

        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _ret2 = _loop2();

          if (_ret2 === "continue") continue;
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }

    function i(s) {
      var n = this.$options.computed,
          r = _objectSpread({}, this._computed);

      this._computed = {};

      for (var o in n) {
        var _n$o = n[o],
            a = _n$o.watch,
            l = _n$o.immediate;
        a && (s && l || Ot(r, o) && !ve(r[o], this[o])) && a.call(this, this[o], r[o]);
      }
    }
  }

  function zr(t) {
    var e = 0;
    t.prototype._init = function (i) {
      i = i || {}, i.data = Wr(i, this.constructor.options), this.$options = le(this.constructor.options, i, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), i.el && this.$mount(i.el);
    }, t.prototype._initData = function () {
      var _this$$options$data = this.$options.data,
          i = _this$$options$data === void 0 ? {} : _this$$options$data;

      for (var s in i) {
        this.$props[s] = this[s] = i[s];
      }
    }, t.prototype._initMethods = function () {
      var i = this.$options.methods;
      if (i) for (var s in i) {
        this[s] = i[s].bind(this);
      }
    }, t.prototype._initComputeds = function () {
      var i = this.$options.computed;
      if (this._computed = {}, i) for (var s in i) {
        Hr(this, s, i[s]);
      }
    }, t.prototype._initProps = function (i) {
      var s;
      i = i || Rs(this.$options, this.$name);

      for (s in i) {
        Y(i[s]) || (this.$props[s] = i[s]);
      }

      var n = [this.$options.computed, this.$options.methods];

      for (s in this.$props) {
        s in i && Fr(n, s) && (this[s] = this.$props[s]);
      }
    }, t.prototype._initEvents = function () {
      this._events = [];

      var _iterator23 = _createForOfIteratorHelper(this.$options.events || []),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var i = _step23.value;
          if (Ot(i, "handler")) ei(this, i);else for (var s in i) {
            ei(this, i[s], s);
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }, t.prototype._unbindEvents = function () {
      this._events.forEach(function (i) {
        return i();
      }), delete this._events;
    }, t.prototype._initObservers = function () {
      this._observers = [Rr(this)], this.$options.computed && this.registerObserver(jr(this));
    }, t.prototype.registerObserver = function (i) {
      this._observers.push(i);
    }, t.prototype._disconnectObservers = function () {
      this._observers.forEach(function (i) {
        return i == null ? void 0 : i.disconnect();
      });
    };
  }

  function Rs(t, e) {
    var i = {},
        _t$args = t.args,
        s = _t$args === void 0 ? [] : _t$args,
        _t$props = t.props,
        n = _t$props === void 0 ? {} : _t$props,
        r = t.el;
    if (!n) return i;

    for (var a in n) {
      var l = Mt(a);
      var h = rt(r, l);
      Y(h) || (h = n[a] === Boolean && h === "" ? !0 : Ji(n[a], h), !(l === "target" && (!h || lt(h, "_"))) && (i[a] = h));
    }

    var o = Pe(rt(r, e), s);

    for (var _a2 in o) {
      var _l = Yt(_a2);

      n[_l] !== void 0 && (i[_l] = Ji(n[_l], o[_a2]));
    }

    return i;
  }

  function Hr(t, e, i) {
    Object.defineProperty(t, e, {
      enumerable: !0,
      get: function get() {
        var s = t._computed,
            n = t.$props,
            r = t.$el;
        return Ot(s, e) || (s[e] = (i.get || i).call(t, n, r)), s[e];
      },
      set: function set(s) {
        var n = t._computed;
        n[e] = i.set ? i.set.call(t, s) : s, Y(n[e]) && delete n[e];
      }
    });
  }

  function ei(t, e, i) {
    Pt(e) || (e = {
      name: i,
      handler: e
    });
    var _e4 = e,
        s = _e4.name,
        n = _e4.el,
        r = _e4.handler,
        o = _e4.capture,
        a = _e4.passive,
        l = _e4.delegate,
        h = _e4.filter,
        c = _e4.self;

    if (n = dt(n) ? n.call(t) : n || t.$el, st(n)) {
      n.forEach(function (d) {
        return ei(t, _objectSpread(_objectSpread({}, e), {}, {
          el: d
        }), i);
      });
      return;
    }

    !n || h && !h.call(t) || t._events.push(T(n, s, l ? O(l) ? l : l.call(t) : null, O(r) ? t[r] : r.bind(t), {
      passive: a,
      capture: o,
      self: c
    }));
  }

  function Fr(t, e) {
    return t.every(function (i) {
      return !i || !Ot(i, e);
    });
  }

  function Ji(t, e) {
    return t === Boolean ? $i(e) : t === Number ? Et(e) : t === "list" ? Lr(e) : t ? t(e) : e;
  }

  function Lr(t) {
    return st(t) ? t : O(t) ? t.split(/,(?![^(]*\))/).map(function (e) {
      return Nt(e) ? Et(e) : $i(e.trim());
    }) : [t];
  }

  function Wr(t, e) {
    var _t$data = t.data,
        i = _t$data === void 0 ? {} : _t$data,
        _e$args = e.args,
        s = _e$args === void 0 ? [] : _e$args,
        _e$props = e.props,
        n = _e$props === void 0 ? {} : _e$props;
    st(i) && (i = i.slice(0, s.length).reduce(function (r, o, a) {
      return Pt(o) ? yt(r, o) : r[s[a]] = o, r;
    }, {}));

    for (var r in i) {
      Y(i[r]) ? delete i[r] : n[r] && (i[r] = Ji(n[r], i[r]));
    }

    return i;
  }

  function jr(t) {
    var e = t.$options.el,
        i = new MutationObserver(function () {
      return t.$emit();
    });
    return i.observe(e, {
      childList: !0,
      subtree: !0
    }), i;
  }

  function Rr(t) {
    var e = t.$name,
        i = t.$options,
        s = t.$props,
        n = i.attrs,
        r = i.props,
        o = i.el;
    if (!r || n === !1) return;
    var a = st(n) ? n : Object.keys(r),
        l = a.map(function (c) {
      return Mt(c);
    }).concat(e),
        h = new MutationObserver(function (c) {
      var d = Rs(i, e);
      c.some(function (f) {
        var v = f.attributeName;

        var _ = v.replace("data-", "");

        return (_ === e ? a : [Yt(_), Yt(v)]).some(function (b) {
          return !Y(d[b]) && d[b] !== s[b];
        });
      }) && t.$reset();
    });
    return h.observe(o, {
      attributes: !0,
      attributeFilter: l.concat(l.map(function (c) {
        return "data-" + c;
      }))
    }), h;
  }

  function qr(t) {
    var e = t.data;
    t.prototype.$create = function (s, n, r) {
      return t[s](n, r);
    }, t.prototype.$mount = function (s) {
      var n = this.$options.name;
      s[e] || (s[e] = {}), !s[e][n] && (s[e][n] = this, this.$el = this.$options.el = this.$options.el || s, z(s, document) && this._callConnected());
    }, t.prototype.$reset = function () {
      this._callDisconnected(), this._callConnected();
    }, t.prototype.$destroy = function (s) {
      s === void 0 && (s = !1);
      var _this$$options = this.$options,
          n = _this$$options.el,
          r = _this$$options.name;
      n && this._callDisconnected(), this._callHook("destroy"), n != null && n[e] && (delete n[e][r], me(n[e]) || delete n[e], s && ht(this.$el));
    }, t.prototype.$emit = function (s) {
      this._callUpdate(s);
    }, t.prototype.$update = function (s, n) {
      s === void 0 && (s = this.$el), t.update(s, n);
    }, t.prototype.$getComponent = t.getComponent;
    var i = nt(function (s) {
      return t.prefix + Mt(s);
    });
    Object.defineProperties(t.prototype, {
      $container: Object.getOwnPropertyDescriptor(t, "container"),
      $name: {
        get: function get() {
          return i(this.$options.name);
        }
      }
    });
  }

  function Vr(t) {
    var e = t.data,
        i = {};
    t.component = function (s, n) {
      var r = Mt(s);
      if (s = Yt(r), !n) return Pt(i[s]) && (i[s] = t.extend(i[s])), i[s];

      t[s] = function (a, l) {
        var h = t.component(s);
        return h.options.functional ? new h({
          data: Pt(a) ? a : Array.prototype.slice.call(arguments)
        }) : a ? M(a).map(c)[0] : c();

        function c(d) {
          var f = t.getComponent(d, s);
          if (f) if (l) f.$destroy();else return f;
          return new h({
            el: d,
            data: l
          });
        }
      };

      var o = Pt(n) ? _objectSpread({}, n) : n.options;
      return o.name = s, o.install == null || o.install(t, o, s), t._initialized && !o.functional && B.read(function () {
        return t[s]("[uk-" + r + "],[data-uk-" + r + "]");
      }), i[s] = Pt(n) ? o : n;
    }, t.getComponents = function (s) {
      return (s == null ? void 0 : s[e]) || {};
    }, t.getComponent = function (s, n) {
      return t.getComponents(s)[n];
    }, t.connect = function (s) {
      if (s[e]) for (var n in s[e]) {
        s[e][n]._callConnected();
      }

      var _iterator24 = _createForOfIteratorHelper(s.attributes),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _n3 = _step24.value;
          var r = qs(_n3.name);
          r && r in i && t[r](s);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }, t.disconnect = function (s) {
      for (var n in s[e]) {
        s[e][n]._callDisconnected();
      }
    };
  }

  var qs = nt(function (t) {
    return lt(t, "uk-") || lt(t, "data-uk-") ? Yt(t.replace("data-uk-", "").replace("uk-", "")) : !1;
  }),
      tt = function tt(t) {
    this._init(t);
  };

  tt.util = Nr, tt.data = "__uikit__", tt.prefix = "uk-", tt.options = {}, tt.version = "3.14.3", Br(tt), Dr(tt), zr(tt), Vr(tt), qr(tt);

  function Yr(t) {
    var e = t.connect,
        i = t.disconnect;
    if (!Lt || !window.MutationObserver) return;
    B.read(function () {
      document.body && Tt(document.body, e), new MutationObserver(function (r) {
        return r.forEach(s);
      }).observe(document, {
        childList: !0,
        subtree: !0
      }), new MutationObserver(function (r) {
        return r.forEach(n);
      }).observe(document, {
        attributes: !0,
        subtree: !0
      }), t._initialized = !0;
    });

    function s(r) {
      var o = r.addedNodes,
          a = r.removedNodes;

      var _iterator25 = _createForOfIteratorHelper(o),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var l = _step25.value;
          Tt(l, e);
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      var _iterator26 = _createForOfIteratorHelper(a),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var _l2 = _step26.value;
          Tt(_l2, i);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }

    function n(r) {
      var o;
      var a = r.target,
          l = r.attributeName;
      var h = qs(l);

      if (!(!h || !(h in t))) {
        if (Bt(a, l)) {
          t[h](a);
          return;
        }

        (o = t.getComponent(a, h)) == null || o.$destroy();
      }
    }
  }

  var et = {
    connected: function connected() {
      !S(this.$el, this.$name) && w(this.$el, this.$name);
    }
  },
      Ee = {
    methods: {
      lazyload: function lazyload(t, e) {
        t === void 0 && (t = this.$el), e === void 0 && (e = this.$el), this.registerObserver(ae(t, function (i, s) {
          var _iterator27 = _createForOfIteratorHelper(x(dt(e) ? e() : e)),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var n = _step27.value;
              M('[loading="lazy"]', n).forEach(function (r) {
                return be(r, "loading");
              });
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          var _iterator28 = _createForOfIteratorHelper(i.filter(function (r) {
            var o = r.isIntersecting;
            return o;
          }).map(function (r) {
            var o = r.target;
            return o;
          })),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _n4 = _step28.value;
              s.unobserve(_n4);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
        }));
      }
    }
  },
      It = {
    props: {
      cls: Boolean,
      animation: "list",
      duration: Number,
      velocity: Number,
      origin: String,
      transition: String
    },
    data: {
      cls: !1,
      animation: [!1],
      duration: 200,
      velocity: .2,
      origin: !1,
      transition: "ease",
      clsEnter: "uk-togglabe-enter",
      clsLeave: "uk-togglabe-leave",
      initProps: {
        overflow: "",
        height: "",
        paddingTop: "",
        paddingBottom: "",
        marginTop: "",
        marginBottom: "",
        boxShadow: ""
      },
      hideProps: {
        overflow: "hidden",
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
        boxShadow: "none"
      }
    },
    computed: {
      hasAnimation: function hasAnimation(t) {
        var e = t.animation;
        return !!e[0];
      },
      hasTransition: function hasTransition(t) {
        var e = t.animation;
        return this.hasAnimation && e[0] === !0;
      }
    },
    methods: {
      toggleElement: function toggleElement(t, e, i) {
        var _this8 = this;

        return new Promise(function (s) {
          return Promise.all(x(t).map(function (n) {
            var r = He(e) ? e : !_this8.isToggled(n);
            if (!p(n, "before" + (r ? "show" : "hide"), [_this8])) return Promise.reject();
            i || (ut.cancel(n), C.cancel(n));
            var o = (dt(i) ? i : i === !1 || !_this8.hasAnimation ? _this8._toggle : _this8.hasTransition ? Vs(_this8) : Gr(_this8))(n, r),
                a = r ? _this8.clsEnter : _this8.clsLeave;
            w(n, a), p(n, r ? "show" : "hide", [_this8]);

            var l = function l() {
              E(n, a), p(n, r ? "shown" : "hidden", [_this8]), _this8.$update(n);
            };

            return o ? o.then(l, function () {
              return E(n, a), Promise.reject();
            }) : l();
          })).then(s, A);
        });
      },
      isToggled: function isToggled(t) {
        var _x3, _x4;

        return t === void 0 && (t = this.$el), (_x3 = x(t), _x4 = _slicedToArray(_x3, 1), t = _x4[0]), S(t, this.clsEnter) ? !0 : S(t, this.clsLeave) ? !1 : this.cls ? S(t, this.cls.split(" ")[0]) : R(t);
      },
      _toggle: function _toggle(t, e) {
        if (!t) return;
        e = Boolean(e);
        var i;
        this.cls ? (i = g(this.cls, " ") || e !== S(t, this.cls), i && W(t, this.cls, g(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), M("[autofocus]", t).some(function (s) {
          return R(s) ? s.focus() || !0 : s.blur();
        }), i && (p(t, "toggled", [e, this]), this.$update(t));
      }
    }
  };

  function Vs(t) {
    var e = t.isToggled,
        i = t.duration,
        s = t.velocity,
        n = t.initProps,
        r = t.hideProps,
        o = t.transition,
        a = t._toggle;
    return function (l, h) {
      var c = C.inProgress(l),
          d = l.hasChildNodes() ? y(u(l.firstElementChild, "marginTop")) + y(u(l.lastElementChild, "marginBottom")) : 0,
          f = R(l) ? H(l) + (c ? 0 : d) : 0;
      C.cancel(l), e(l) || a(l, !0), H(l, ""), B.flush();
      var v = H(l) + (c ? 0 : d);
      return i = s * l.offsetHeight + i, H(l, f), (h ? C.start(l, _objectSpread(_objectSpread({}, n), {}, {
        overflow: "hidden",
        height: v
      }), Math.round(i * (1 - f / v)), o) : C.start(l, r, Math.round(i * (f / v)), o).then(function () {
        return a(l, !1);
      })).then(function () {
        return u(l, n);
      });
    };
  }

  function Gr(t) {
    return function (e, i) {
      ut.cancel(e);
      var s = t.animation,
          n = t.duration,
          r = t._toggle;
      return i ? (r(e, !0), ut["in"](e, s[0], n, t.origin)) : ut.out(e, s[1] || s[0], n, t.origin).then(function () {
        return r(e, !1);
      });
    };
  }

  var Ys = {
    mixins: [et, Ee, It],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      offset: Number
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      offset: 0
    },
    computed: {
      items: {
        get: function get(t, e) {
          var i = t.targets;
          return M(i, e);
        },
        watch: function watch(t, e) {
          if (e || S(t, this.clsOpen)) return;
          var i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          i && this.toggle(i, !1);
        },
        immediate: !0
      },
      toggles: function toggles(t) {
        var e = t.toggle;
        return this.items.map(function (i) {
          return m(e, i);
        });
      },
      contents: {
        get: function get(t) {
          var e = t.content;
          return this.items.map(function (i) {
            return m(e, i);
          });
        },
        watch: function watch(t) {
          var _this9 = this;

          var _iterator29 = _createForOfIteratorHelper(t),
              _step29;

          try {
            var _loop3 = function _loop3() {
              var e = _step29.value;
              ii(e, !S(_this9.items.find(function (i) {
                return i.contains(e);
              }), _this9.clsOpen));
            };

            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
        },
        immediate: !0
      }
    },
    connected: function connected() {
      this.lazyload();
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function handler(t) {
        t.preventDefault(), this.toggle(Ut(this.toggles, t.current));
      }
    }],
    methods: {
      toggle: function toggle(t, e) {
        var _this10 = this;

        var i = [this.items[Qt(t, this.items)]];
        var s = ye(this.items, "." + this.clsOpen);

        if (!this.multiple && !g(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && !ye(i, ":not(." + this.clsOpen + ")").length)) {
          var _iterator30 = _createForOfIteratorHelper(i),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var n = _step30.value;
              this.toggleElement(n, !S(n, this.clsOpen), /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(r, o) {
                  var a, l;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          W(r, _this10.clsOpen, o), k(m(_this10.$props.toggle, r), "aria-expanded", o);
                          a = m((r._wrapper ? "> * " : "") + _this10.content, r);

                          if (!(e === !1 || !_this10.hasTransition)) {
                            _context.next = 5;
                            break;
                          }

                          ii(a, !o);
                          return _context.abrupt("return");

                        case 5:
                          r._wrapper || (r._wrapper = Je(a, "<div" + (o ? " hidden" : "") + ">"));
                          ii(a, !1);
                          _context.next = 9;
                          return Vs(_this10)(r._wrapper, o);

                        case 9:
                          ii(a, !o);
                          delete r._wrapper;
                          Ke(a);

                          if (!o) {
                            _context.next = 15;
                            break;
                          }

                          l = m(_this10.$props.toggle, r);
                          B.read(function () {
                            ti(l) || Vi(l, {
                              offset: _this10.offset
                            });
                          });

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x5, _x6) {
                  return _ref6.apply(this, arguments);
                };
              }());
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }
      }
    }
  };

  function ii(t, e) {
    t && (t.hidden = e);
  }

  var Xr = {
    mixins: [et, It],
    args: "animation",
    props: {
      close: String
    },
    data: {
      animation: [!0],
      selClose: ".uk-alert-close",
      duration: 150,
      hideProps: _objectSpread({
        opacity: 0
      }, It.data.hideProps)
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(t) {
        t.preventDefault(), this.close();
      }
    }],
    methods: {
      close: function close() {
        var _this11 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this11.toggleElement(_this11.$el);

                case 2:
                  _this11.$destroy(!0);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    }
  },
      Gs = {
    args: "autoplay",
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: !1,
      autoplay: !0
    },
    connected: function connected() {
      var _this12 = this;

      this.inView = this.autoplay === "inview", this.inView && !Bt(this.$el, "preload") && (this.$el.preload = "none"), this.automute && _s(this.$el), this.registerObserver(ae(this.$el, function () {
        return _this12.$emit();
      }, {}, !1));
    },
    update: {
      read: function read() {
        return Os(this.$el) ? {
          visible: R(this.$el) && u(this.$el, "visibility") !== "hidden",
          inView: this.inView && ti(this.$el)
        } : !1;
      },
      write: function write(t) {
        var e = t.visible,
            i = t.inView;
        !e || this.inView && !i ? Es(this.$el) : (this.autoplay === !0 || this.inView && i) && Ps(this.$el);
      }
    }
  },
      vt = {
    connected: function connected() {
      var _this13 = this;

      var t;
      this.registerObserver(Ze(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, function () {
        return _this13.$emit("resize");
      }));
    }
  },
      Jr = {
    mixins: [vt, Gs],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: !0
    },
    events: {
      "load loadedmetadata": function loadLoadedmetadata() {
        this.$emit("resize");
      }
    },
    resizeTargets: function resizeTargets() {
      return [this.$el, P(this.$el)];
    },
    update: {
      read: function read() {
        var t = We.ratio,
            e = We.cover,
            i = this.$el,
            s = this.width,
            n = this.height;
        var r = {
          width: s,
          height: n
        };

        if (!r.width || !r.height) {
          var h = {
            width: i.naturalWidth || i.videoWidth || i.clientWidth,
            height: i.naturalHeight || i.videoHeight || i.clientHeight
          };
          r.width ? r = t(h, "width", r.width) : n ? r = t(h, "height", r.height) : r = h;
        }

        var _ref7 = Kr(i) || P(i),
            o = _ref7.offsetHeight,
            a = _ref7.offsetWidth,
            l = e(r, {
          width: a + (a % 2 ? 1 : 0),
          height: o + (o % 2 ? 1 : 0)
        });

        return !l.width || !l.height ? !1 : l;
      },
      write: function write(t) {
        var e = t.height,
            i = t.width;
        u(this.$el, {
          height: e,
          width: i
        });
      },
      events: ["resize"]
    }
  };

  function Kr(t) {
    for (; t = P(t);) {
      if (u(t, "position") !== "static") return t;
    }
  }

  var he = {
    props: {
      container: Boolean
    },
    data: {
      container: !0
    },
    computed: {
      container: function container(t) {
        var e = t.container;
        return e === !0 && this.$container || e && m(e);
      }
    }
  },
      Xs = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean
    },
    data: {
      pos: "bottom-" + (K ? "right" : "left"),
      flip: !0,
      offset: !1
    },
    connected: function connected() {
      this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), this.axis = g(["top", "bottom"], this.pos[0]) ? "y" : "x";
    },
    methods: {
      positionAt: function positionAt(t, e, i) {
        var _this$pos = _slicedToArray(this.pos, 2),
            s = _this$pos[0],
            n = _this$pos[1];

        var r = J(this.offset === !1 ? zt("position-offset", t) : this.offset, this.axis === "x" ? "width" : "height", t);
        r = [g(["left", "top"], s) ? -r : +r, 0];
        var o = {
          element: [Ye(s), n],
          target: [s, n]
        };

        if (this.axis === "y") {
          for (var a in o) {
            o[a] = o[a].reverse();
          }

          r = r.reverse();
        }

        Ds(t, e, {
          attach: o,
          offset: r,
          boundary: i,
          flip: this.flip,
          viewportOffset: J(zt("position-viewport-offset", t))
        });
      }
    }
  };
  var G;
  var Js = {
    mixins: [he, Ee, Xs, It],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      display: String,
      clsDrop: String
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: !0,
      boundaryAlign: !1,
      delayShow: 0,
      delayHide: 800,
      display: null,
      clsDrop: !1,
      animation: ["uk-animation-fade"],
      cls: "uk-open",
      container: !1
    },
    created: function created() {
      this.tracker = new Wi();
    },
    beforeConnect: function beforeConnect() {
      this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
    },
    connected: function connected() {
      w(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", kt(this.toggle, this.$el), {
        target: this.$el,
        mode: this.mode
      }).$el, k(this.target, "aria-haspopup", !0), this.lazyload(this.target));
    },
    disconnected: function disconnected() {
      this.isActive() && (G = null);
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return "." + this.clsDrop + "-close";
      },
      handler: function handler(t) {
        t.preventDefault(), this.hide(!1);
      }
    }, {
      name: "click",
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(t) {
        var e = t.defaultPrevented,
            i = t.current.hash;
        !e && i && !z(i, this.$el) && this.hide(!1);
      }
    }, {
      name: "beforescroll",
      handler: function handler() {
        this.hide(!1);
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
      }
    }, {
      name: "toggleshow",
      self: !0,
      handler: function handler(t, e) {
        t.preventDefault(), this.show(e == null ? void 0 : e.$el);
      }
    }, {
      name: "togglehide",
      self: !0,
      handler: function handler(t) {
        t.preventDefault(), D(this.$el, ":focus,:hover") || this.hide();
      }
    }, {
      name: jt + " focusin",
      filter: function filter() {
        return g(this.mode, "hover");
      },
      handler: function handler(t) {
        St(t) || this.clearTimers();
      }
    }, {
      name: re + " focusout",
      filter: function filter() {
        return g(this.mode, "hover");
      },
      handler: function handler(t) {
        !St(t) && t.relatedTarget && this.hide();
      }
    }, {
      name: "toggled",
      self: !0,
      handler: function handler(t, e) {
        !e || (this.clearTimers(), this.position());
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        var _this14 = this;

        G = this, this.tracker.init();

        for (var _i8 = 0, _arr4 = [T(document, ct, function (e) {
          var i = e.target;
          return !z(i, _this14.$el) && L(document, pt + " " + oe + " scroll", function (s) {
            var n = s.defaultPrevented,
                r = s.type,
                o = s.target;
            !n && r === pt && i === o && !(_this14.target && z(i, _this14.target)) && _this14.hide(!1);
          }, !0);
        }), T(document, "keydown", function (e) {
          e.keyCode === 27 && _this14.hide(!1);
        })].concat(_toConsumableArray(this.display === "static" ? [] : function () {
          var e = function e() {
            return _this14.$emit();
          };

          return [T(window, "resize", e), T(document, "scroll", e, !0), function () {
            var i = Ze(Ct(_this14.$el), e);
            return function () {
              return i.disconnect();
            };
          }()];
        }())); _i8 < _arr4.length; _i8++) {
          var t = _arr4[_i8];
          L(this.$el, "hide", t, {
            self: !0
          });
        }
      }
    }, {
      name: "beforehide",
      self: !0,
      handler: function handler() {
        this.clearTimers();
      }
    }, {
      name: "hide",
      handler: function handler(t) {
        var e = t.target;

        if (this.$el !== e) {
          G = G === null && z(e, this.$el) && this.isToggled() ? this : G;
          return;
        }

        G = this.isActive() ? null : G, this.tracker.cancel();
      }
    }],
    update: {
      write: function write() {
        this.isToggled() && !S(this.$el, this.clsEnter) && this.position();
      }
    },
    methods: {
      show: function show(t, e) {
        var _this15 = this;

        if (t === void 0 && (t = this.target), e === void 0 && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), this.target = t, this.clearTimers(), !this.isActive()) {
          if (G) {
            if (e && G.isDelaying) {
              this.showTimer = setTimeout(function () {
                return D(t, ":hover") && _this15.show();
              }, 10);
              return;
            }

            var i;

            for (; G && i !== G && !z(this.$el, G.$el);) {
              i = G, G.hide(!1);
            }
          }

          this.container && P(this.$el) !== this.container && q(this.container, this.$el), this.showTimer = setTimeout(function () {
            return _this15.toggleElement(_this15.$el, !0);
          }, e && this.delayShow || 0);
        }
      },
      hide: function hide(t) {
        var _this16 = this;

        t === void 0 && (t = !0);

        var e = function e() {
          return _this16.toggleElement(_this16.$el, !1, !1);
        };

        this.clearTimers(), this.isDelaying = Zr(this.$el).some(function (i) {
          return _this16.tracker.movesTo(i);
        }), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(e, this.delayHide) : e();
      },
      clearTimers: function clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
      },
      isActive: function isActive() {
        return G === this;
      },
      position: function position() {
        E(this.$el, this.clsDrop + "-stack"), W(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var t = kt(this.boundary, this.$el),
            e = I(Ct(t && this.boundaryAlign ? t : this.$el)[0]),
            i = t ? I(t) : e;
        u(this.$el, "maxWidth", "");
        var s = e.width - 2 * J(zt("position-viewport-offset", this.$el));

        if (this.pos[1] === "justify") {
          var n = this.axis === "y" ? "width" : "height";
          u(this.$el, n, Math.min((t ? i : I(this.target))[n], e[n] - 2 * J(zt("position-viewport-offset", this.$el))));
        } else this.$el.offsetWidth > s && w(this.$el, this.clsDrop + "-stack");

        u(this.$el, "maxWidth", s), this.positionAt(this.$el, t && this.boundaryAlign ? t : this.target, t);
      }
    }
  };

  function Zr(t) {
    var e = [];
    return Tt(t, function (i) {
      return u(i, "position") !== "static" && e.push(i);
    }), e;
  }

  var Qr = {
    mixins: [et],
    args: "target",
    props: {
      target: Boolean
    },
    data: {
      target: !1
    },
    computed: {
      input: function input(t, e) {
        return m(xe, e);
      },
      state: function state() {
        return this.input.nextElementSibling;
      },
      target: function target(t, e) {
        var i = t.target;
        return i && (i === !0 && P(this.input) === e && this.input.nextElementSibling || m(i, e));
      }
    },
    update: function update() {
      var t;
      var e = this.target,
          i = this.input;
      if (!e) return;
      var s;
      var n = Ii(e) ? "value" : "textContent",
          r = e[n],
          o = (t = i.files) != null && t[0] ? i.files[0].name : D(i, "select") && (s = M("option", i).filter(function (a) {
        return a.selected;
      })[0]) ? s.textContent : i.value;
      r !== o && (e[n] = o);
    },
    events: [{
      name: "change",
      handler: function handler() {
        this.$emit();
      }
    }, {
      name: "reset",
      el: function el() {
        return ot(this.$el, "form");
      },
      handler: function handler() {
        this.$emit();
      }
    }]
  },
      Ks = {
    mixins: [vt],
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: "uk-margin-small-top",
      firstColumn: "uk-first-column"
    },
    resizeTargets: function resizeTargets() {
      return [this.$el].concat(_toConsumableArray(bi(this.$el.children)));
    },
    connected: function connected() {
      var _this17 = this;

      this.registerObserver(Cs(this.$el, function () {
        return _this17.$reset();
      }, {
        childList: !0
      }));
    },
    update: {
      read: function read() {
        var t = Ki(this.$el.children);
        return {
          rows: t,
          columns: Ur(t)
        };
      },
      write: function write(t) {
        var e = t.columns,
            i = t.rows;

        var _iterator31 = _createForOfIteratorHelper(i),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var s = _step31.value;

            var _iterator32 = _createForOfIteratorHelper(s),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var n = _step32.value;
                W(n, this.margin, i[0] !== s), W(n, this.firstColumn, e[0].includes(n));
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      },
      events: ["resize"]
    }
  };

  function Ki(t) {
    return Zs(t, "top", "bottom");
  }

  function Ur(t) {
    var e = [];

    var _iterator33 = _createForOfIteratorHelper(t),
        _step33;

    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var i = _step33.value;
        var s = Zs(i, "left", "right");

        for (var n = 0; n < s.length; n++) {
          e[n] = e[n] ? e[n].concat(s[n]) : s[n];
        }
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }

    return K ? e.reverse() : e;
  }

  function Zs(t, e, i) {
    var s = [[]];

    var _iterator34 = _createForOfIteratorHelper(t),
        _step34;

    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var n = _step34.value;
        if (!R(n)) continue;
        var r = si(n);

        for (var o = s.length - 1; o >= 0; o--) {
          var a = s[o];

          if (!a[0]) {
            a.push(n);
            break;
          }

          var l = void 0;

          if (a[0].offsetParent === n.offsetParent ? l = si(a[0]) : (r = si(n, !0), l = si(a[0], !0)), r[e] >= l[i] - 1 && r[e] !== l[e]) {
            s.push([n]);
            break;
          }

          if (r[i] - 1 > l[e] || r[e] === l[e]) {
            a.push(n);
            break;
          }

          if (o === 0) {
            s.unshift([n]);
            break;
          }
        }
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }

    return s;
  }

  function si(t, e) {
    var _Ce, _Ce2;

    e === void 0 && (e = !1);
    var i = t.offsetTop,
        s = t.offsetLeft,
        n = t.offsetHeight,
        r = t.offsetWidth;
    return e && (_Ce = Ce(t), _Ce2 = _slicedToArray(_Ce, 2), i = _Ce2[0], s = _Ce2[1], _Ce), {
      top: i,
      left: s,
      bottom: i + n,
      right: s + r
    };
  }

  var _e = {
    connected: function connected() {
      var _this18 = this;

      to(this._uid, function () {
        return _this18.$emit("scroll");
      });
    },
    disconnected: function disconnected() {
      eo(this._uid);
    }
  };
  var ni = new Map();
  var Oe;

  function to(t, e) {
    Oe = Oe || T(window, "scroll", function () {
      return ni.forEach(function (i) {
        return i();
      });
    }, {
      passive: !0,
      capture: !0
    }), ni.set(t, e);
  }

  function eo(t) {
    ni["delete"](t), Oe && !ni.size && (Oe(), Oe = null);
  }

  var io = {
    "extends": Ks,
    mixins: [et, _e],
    name: "grid",
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0
    },
    connected: function connected() {
      this.masonry && w(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [{
      write: function write(t) {
        var e = t.columns;
        W(this.$el, this.clsStack, e.length < 2);
      },
      events: ["resize"]
    }, {
      read: function read(t) {
        var e = t.columns,
            i = t.rows;
        if (!e.length || !this.masonry && !this.parallax || Qs(this.$el)) return t.translates = !1, !1;
        var s = !1;
        var n = N(this.$el),
            r = ro(e),
            o = no(n, this.margin) * (i.length - 1),
            a = Math.max.apply(Math, _toConsumableArray(r)) + o;
        this.masonry && (e = e.map(function (h) {
          return Fe(h, "offsetTop");
        }), s = so(i, e));
        var l = Math.abs(this.parallax);
        return l && (l = r.reduce(function (h, c, d) {
          return Math.max(h, c + o + (d % 2 ? l : l / 8) - a);
        }, 0)), {
          padding: l,
          columns: e,
          translates: s,
          height: s ? a : ""
        };
      },
      write: function write(t) {
        var e = t.height,
            i = t.padding;
        u(this.$el, "paddingBottom", i || ""), e !== !1 && u(this.$el, "height", e);
      },
      events: ["resize"]
    }, {
      read: function read() {
        return this.parallax && Qs(this.$el) ? !1 : {
          scrolled: this.parallax ? Yi(this.$el) * Math.abs(this.parallax) : !1
        };
      },
      write: function write(t) {
        var e = t.columns,
            i = t.scrolled,
            s = t.translates;
        i === !1 && !s || e.forEach(function (n, r) {
          return n.forEach(function (o, a) {
            return u(o, "transform", !i && !s ? "" : "translateY(" + ((s && -s[r][a]) + (i ? r % 2 ? i : i / 8 : 0)) + "px)");
          });
        });
      },
      events: ["scroll", "resize"]
    }]
  };

  function Qs(t) {
    return N(t).some(function (e) {
      return u(e, "position") === "absolute";
    });
  }

  function so(t, e) {
    var i = t.map(function (s) {
      return Math.max.apply(Math, _toConsumableArray(s.map(function (n) {
        return n.offsetHeight;
      })));
    });
    return e.map(function (s) {
      var n = 0;
      return s.map(function (r, o) {
        return n += o ? i[o - 1] - s[o - 1].offsetHeight : 0;
      });
    });
  }

  function no(t, e) {
    var _t$filter = t.filter(function (s) {
      return S(s, e);
    }),
        _t$filter2 = _slicedToArray(_t$filter, 1),
        i = _t$filter2[0];

    return y(i ? u(i, "marginTop") : u(t[0], "paddingLeft"));
  }

  function ro(t) {
    return t.map(function (e) {
      return e.reduce(function (i, s) {
        return i + s.offsetHeight;
      }, 0);
    });
  }

  var oo = {
    mixins: [vt],
    args: "target",
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: "> *",
      row: !0
    },
    computed: {
      elements: {
        get: function get(t, e) {
          var i = t.target;
          return M(i, e);
        },
        watch: function watch() {
          this.$reset();
        }
      }
    },
    resizeTargets: function resizeTargets() {
      return [this.$el].concat(_toConsumableArray(this.elements));
    },
    update: {
      read: function read() {
        return {
          rows: (this.row ? Ki(this.elements) : [this.elements]).map(ao)
        };
      },
      write: function write(t) {
        var e = t.rows;

        var _iterator35 = _createForOfIteratorHelper(e),
            _step35;

        try {
          var _loop4 = function _loop4() {
            var _step35$value = _step35.value,
                i = _step35$value.heights,
                s = _step35$value.elements;
            s.forEach(function (n, r) {
              return u(n, "minHeight", i[r]);
            });
          };

          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            _loop4();
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }
      },
      events: ["resize"]
    }
  };

  function ao(t) {
    if (t.length < 2) return {
      heights: [""],
      elements: t
    };
    u(t, "minHeight", "");
    var e = t.map(lo);
    var i = Math.max.apply(Math, _toConsumableArray(e));
    return {
      heights: t.map(function (s, n) {
        return e[n].toFixed(2) === i.toFixed(2) ? "" : i;
      }),
      elements: t
    };
  }

  function lo(t) {
    var e = !1;
    R(t) || (e = t.style.display, u(t, "display", "block", "important"));
    var i = $(t).height - ie(t, "height", "content-box");
    return e !== !1 && u(t, "display", e), i;
  }

  var ho = {
    mixins: [vt],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: !1,
      offsetTop: !1,
      offsetBottom: !1,
      minHeight: 0
    },
    resizeTargets: function resizeTargets() {
      return [this.$el, document.documentElement];
    },
    update: {
      read: function read(t) {
        var e = t.minHeight;
        if (!R(this.$el)) return !1;
        var i = "";
        var s = ie(this.$el, "height", "content-box");
        if (this.expand) i = Math.max(H(window) - ($(document.documentElement).height - $(this.$el).height) - s, 0);else {
          if (i = "calc(100vh", this.offsetTop) {
            var _I2 = I(this.$el),
                n = _I2.top;

            i += n > 0 && n < H(window) / 2 ? " - " + n + "px" : "";
          }

          this.offsetBottom === !0 ? i += " - " + $(this.$el.nextElementSibling).height + "px" : Nt(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && Gt(this.offsetBottom, "px") ? i += " - " + y(this.offsetBottom) + "px" : O(this.offsetBottom) && (i += " - " + $(kt(this.offsetBottom, this.$el)).height + "px"), i += (s ? " - " + s + "px" : "") + ")";
        }
        return {
          minHeight: i,
          prev: e
        };
      },
      write: function write(t) {
        var e = t.minHeight;
        u(this.$el, {
          minHeight: e
        }), this.minHeight && y(u(this.$el, "minHeight")) < this.minHeight && u(this.$el, "minHeight", this.minHeight);
      },
      events: ["resize"]
    }
  },
      Us = {
    args: "src",
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      "class": String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      attributes: "list"
    },
    data: {
      ratio: 1,
      include: ["style", "class", "focusable"],
      "class": "",
      strokeAnimation: !1
    },
    beforeConnect: function beforeConnect() {
      this["class"] += " uk-svg";
    },
    connected: function connected() {
      var _this$src$split,
          _this$src$split2,
          _this19 = this;

      !this.icon && g(this.src, "#") && (_this$src$split = this.src.split("#"), _this$src$split2 = _slicedToArray(_this$src$split, 2), this.src = _this$src$split2[0], this.icon = _this$src$split2[1], _this$src$split), this.svg = this.getSvg().then(function (t) {
        if (_this19._connected) {
          var e = po(t, _this19.$el);
          return _this19.svgEl && e !== _this19.svgEl && ht(_this19.svgEl), _this19.applyAttributes(e, t), _this19.svgEl = e;
        }
      }, A), this.strokeAnimation && this.svg.then(function (t) {
        _this19._connected && (en(t), _this19.registerObserver(ae(t, function (e, i) {
          en(t), i.disconnect();
        })));
      });
    },
    disconnected: function disconnected() {
      var _this20 = this;

      this.svg.then(function (t) {
        _this20._connected || (Ci(_this20.$el) && (_this20.$el.hidden = !1), ht(t), _this20.svgEl = null);
      }), this.svg = null;
    },
    methods: {
      getSvg: function getSvg() {
        var _this21 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(ft(_this21.$el, "img") && !_this21.$el.complete && _this21.$el.loading === "lazy")) {
                    _context3.next = 4;
                    break;
                  }

                  _context3.t0 = new Promise(function (t) {
                    return L(_this21.$el, "load", function () {
                      return t(_this21.getSvg());
                    });
                  });
                  _context3.next = 13;
                  break;

                case 4:
                  _context3.t2 = uo;
                  _context3.next = 7;
                  return co(_this21.src);

                case 7:
                  _context3.t3 = _context3.sent;
                  _context3.t4 = _this21.icon;
                  _context3.t1 = (0, _context3.t2)(_context3.t3, _context3.t4);

                  if (_context3.t1) {
                    _context3.next = 12;
                    break;
                  }

                  _context3.t1 = Promise.reject("SVG not found.");

                case 12:
                  _context3.t0 = _context3.t1;

                case 13:
                  return _context3.abrupt("return", _context3.t0);

                case 14:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      applyAttributes: function applyAttributes(t, e) {
        var _this22 = this;

        for (var r in this.$options.props) {
          g(this.include, r) && r in this && k(t, r, this[r]);
        }

        for (var _r5 in this.attributes) {
          var _this$attributes$_r5$ = this.attributes[_r5].split(":", 2),
              _this$attributes$_r5$2 = _slicedToArray(_this$attributes$_r5$, 2),
              o = _this$attributes$_r5$2[0],
              a = _this$attributes$_r5$2[1];

          k(t, o, a);
        }

        this.id || be(t, "id");
        var i = ["width", "height"];
        var s = i.map(function (r) {
          return _this22[r];
        });
        s.some(function (r) {
          return r;
        }) || (s = i.map(function (r) {
          return k(e, r);
        }));
        var n = k(e, "viewBox");
        n && !s.some(function (r) {
          return r;
        }) && (s = n.split(" ").slice(2)), s.forEach(function (r, o) {
          return k(t, i[o], y(r) * _this22.ratio || null);
        });
      }
    }
  };
  var co = nt( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(t) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!t) {
                _context4.next = 11;
                break;
              }

              if (!lt(t, "data:")) {
                _context4.next = 5;
                break;
              }

              _context4.t1 = decodeURIComponent(t.split(",")[1]);
              _context4.next = 8;
              break;

            case 5:
              _context4.next = 7;
              return fetch(t);

            case 7:
              _context4.t1 = _context4.sent.text();

            case 8:
              _context4.t0 = _context4.t1;
              _context4.next = 12;
              break;

            case 11:
              _context4.t0 = Promise.reject();

            case 12:
              return _context4.abrupt("return", _context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7) {
      return _ref8.apply(this, arguments);
    };
  }());

  function uo(t, e) {
    var i;
    return e && g(t, "<symbol") && (t = fo(t, e) || t), t = m(t.substr(t.indexOf("<svg"))), ((i = t) == null ? void 0 : i.hasChildNodes()) && t;
  }

  var tn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
      ri = {};

  function fo(t, e) {
    if (!ri[t]) {
      ri[t] = {}, tn.lastIndex = 0;
      var i;

      for (; i = tn.exec(t);) {
        ri[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
      }
    }

    return ri[t][e];
  }

  function en(t) {
    var e = sn(t);
    e && t.style.setProperty("--uk-animation-stroke", e);
  }

  function sn(t) {
    return Math.ceil(Math.max.apply(Math, [0].concat(_toConsumableArray(M("[stroke]", t).map(function (e) {
      try {
        return e.getTotalLength();
      } catch (_unused7) {
        return 0;
      }
    })))));
  }

  function po(t, e) {
    if (Ci(e) || ft(e, "canvas")) {
      e.hidden = !0;
      var s = e.nextElementSibling;
      return nn(t, s) ? s : Ge(e, t);
    }

    var i = e.lastElementChild;
    return nn(t, i) ? i : q(e, t);
  }

  function nn(t, e) {
    return ft(t, "svg") && ft(e, "svg") && rn(t) === rn(e);
  }

  function rn(t) {
    return (t.innerHTML || new XMLSerializer().serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "");
  }

  var go = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      mo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      vo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      wo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
      bo = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      xo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      yo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      $o = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      ko = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      So = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      To = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
      Co = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
      Io = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
      Ao = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
      Po = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      Eo = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
  var oi = {
    spinner: Po,
    totop: Eo,
    marker: vo,
    "close-icon": go,
    "close-large": mo,
    "navbar-toggle-icon": wo,
    "overlay-icon": bo,
    "pagination-next": xo,
    "pagination-previous": yo,
    "search-icon": $o,
    "search-large": ko,
    "search-navbar": So,
    "slidenav-next": To,
    "slidenav-next-large": Co,
    "slidenav-previous": Io,
    "slidenav-previous-large": Ao
  },
      Zi = {
    install: No,
    "extends": Us,
    args: "icon",
    props: ["icon"],
    data: {
      include: ["focusable"]
    },
    isIcon: !0,
    beforeConnect: function beforeConnect() {
      w(this.$el, "uk-icon");
    },
    methods: {
      getSvg: function getSvg() {
        var _this23 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var t;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  t = Bo(_this23.icon);

                  if (t) {
                    _context5.next = 3;
                    break;
                  }

                  throw "Icon not found.";

                case 3:
                  return _context5.abrupt("return", t);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))();
      }
    }
  },
      wt = {
    args: !1,
    "extends": Zi,
    data: function data(t) {
      return {
        icon: Mt(t.constructor.options.name)
      };
    },
    beforeConnect: function beforeConnect() {
      w(this.$el, this.$name);
    }
  },
      on = {
    "extends": wt,
    beforeConnect: function beforeConnect() {
      w(this.$el, "uk-slidenav");
      var t = this.$props.icon;
      this.icon = S(this.$el, "uk-slidenav-large") ? t + "-large" : t;
    }
  },
      _o = {
    "extends": wt,
    beforeConnect: function beforeConnect() {
      this.icon = S(this.$el, "uk-search-icon") && $e(this.$el, ".uk-search-large").length ? "search-large" : $e(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon;
    }
  },
      Oo = {
    "extends": wt,
    beforeConnect: function beforeConnect() {
      this.icon = "close-" + (S(this.$el, "uk-close-large") ? "large" : "icon");
    }
  },
      Mo = {
    "extends": wt,
    methods: {
      getSvg: function getSvg() {
        var _this24 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var t;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Zi.methods.getSvg.call(_this24);

                case 2:
                  t = _context6.sent;
                  return _context6.abrupt("return", (_this24.ratio !== 1 && u(m("circle", t), "strokeWidth", 1 / _this24.ratio), t));

                case 4:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }))();
      }
    }
  },
      ai = {};

  function No(t) {
    t.icon.add = function (e, i) {
      var s = O(e) ? _defineProperty({}, e, i) : e;
      $t(s, function (n, r) {
        oi[r] = n, delete ai[r];
      }), t._initialized && Tt(document.body, function (n) {
        return $t(t.getComponents(n), function (r) {
          r.$options.isIcon && r.icon in s && r.$reset();
        });
      });
    };
  }

  function Bo(t) {
    return oi[t] ? (ai[t] || (ai[t] = m((oi[Do(t)] || oi[t]).trim())), ai[t].cloneNode(!0)) : null;
  }

  function Do(t) {
    return K ? ki(ki(t, "left", "right"), "previous", "next") : t;
  }

  var zo = Lt && "loading" in HTMLImageElement.prototype;
  var Ho = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      sources: String,
      offsetTop: String,
      offsetLeft: String,
      target: String,
      loading: String
    },
    data: {
      dataSrc: "",
      sources: !1,
      offsetTop: "50vh",
      offsetLeft: "50vw",
      target: !1,
      loading: "lazy"
    },
    connected: function connected() {
      var _this25 = this;

      if (this.loading !== "lazy") {
        this.load();
        return;
      }

      var t = [this.$el].concat(_toConsumableArray(ke(this.$props.target, this.$el)));
      zo && li(this.$el) && (this.$el.loading = "lazy", Qi(this.$el), t.length === 1) || (Ro(this.$el), this.registerObserver(ae(t, function (e, i) {
        _this25.load(), i.disconnect();
      }, {
        rootMargin: J(this.offsetTop, "height") + "px " + J(this.offsetLeft, "width") + "px"
      })));
    },
    disconnected: function disconnected() {
      this._data.image && (this._data.image.onload = "");
    },
    methods: {
      load: function load() {
        if (this._data.image) return this._data.image;
        var t = li(this.$el) ? this.$el : Lo(this.$el, this.dataSrc, this.sources);
        return be(t, "loading"), Qi(this.$el, t.currentSrc), this._data.image = t;
      }
    }
  };

  function Qi(t, e) {
    if (li(t)) {
      var i = P(t);
      (qo(i) ? N(i) : [t]).forEach(function (n) {
        return an(n, n);
      });
    } else e && !g(t.style.backgroundImage, e) && (u(t, "backgroundImage", "url(" + Pi(e) + ")"), p(t, Dt("load", !1)));
  }

  var Fo = ["data-src", "data-srcset", "sizes"];

  function an(t, e) {
    Fo.forEach(function (i) {
      var s = rt(t, i);
      s && k(e, i.replace(/^(data-)+/, ""), s);
    });
  }

  function Lo(t, e, i) {
    var s = new Image();
    return Wo(s, i), an(t, s), s.onload = function () {
      Qi(t, s.currentSrc);
    }, k(s, "src", e), s;
  }

  function Wo(t, e) {
    if (e = jo(e), e.length) {
      var i = Ft("<picture>");

      var _iterator36 = _createForOfIteratorHelper(e),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var s = _step36.value;
          var n = Ft("<source>");
          k(n, s), q(i, n);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }

      q(i, t);
    }
  }

  function jo(t) {
    if (!t) return [];
    if (lt(t, "[")) try {
      t = JSON.parse(t);
    } catch (_unused8) {
      t = [];
    } else t = Pe(t);
    return st(t) || (t = [t]), t.filter(function (e) {
      return !me(e);
    });
  }

  function Ro(t) {
    li(t) && !Bt(t, "src") && k(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
  }

  function qo(t) {
    return ft(t, "picture");
  }

  function li(t) {
    return ft(t, "img");
  }

  var hi = {
    props: {
      media: Boolean
    },
    data: {
      media: !1
    },
    connected: function connected() {
      var _this26 = this;

      var t = Vo(this.media);

      if (this.matchMedia = !0, t) {
        this.mediaObj = window.matchMedia(t);

        var e = function e() {
          _this26.matchMedia = _this26.mediaObj.matches, p(_this26.$el, Dt("mediachange", !1, !0, [_this26.mediaObj]));
        };

        this.offMediaObj = T(this.mediaObj, "change", function () {
          e(), _this26.$emit("resize");
        }), e();
      }
    },
    disconnected: function disconnected() {
      var t;
      (t = this.offMediaObj) == null || t.call(this);
    }
  };

  function Vo(t) {
    if (O(t)) {
      if (lt(t, "@")) {
        var e = "breakpoint-" + t.substr(1);
        t = y(zt(e));
      } else if (isNaN(t)) return t;
    }

    return t && Nt(t) ? "(min-width: " + t + "px)" : "";
  }

  var Yo = {
    mixins: [et, hi, vt],
    props: {
      fill: String
    },
    data: {
      fill: "",
      clsWrapper: "uk-leader-fill",
      clsHide: "uk-leader-hide",
      attrFill: "data-fill"
    },
    computed: {
      fill: function fill(t) {
        var e = t.fill;
        return e || zt("leader-fill-content");
      }
    },
    connected: function connected() {
      var _ys = ys(this.$el, '<span class="' + this.clsWrapper + '">');

      var _ys2 = _slicedToArray(_ys, 1);

      this.wrapper = _ys2[0];
    },
    disconnected: function disconnected() {
      Ke(this.wrapper.childNodes);
    },
    update: {
      read: function read() {
        return {
          width: Math.trunc(this.$el.offsetWidth / 2),
          fill: this.fill,
          hide: !this.matchMedia
        };
      },
      write: function write(t) {
        var e = t.width,
            i = t.fill,
            s = t.hide;
        W(this.wrapper, this.clsHide, s), k(this.wrapper, this.attrFill, new Array(e).join(i));
      },
      events: ["resize"]
    }
  };
  var it = [];
  var Ui = {
    mixins: [et, he, It],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: "uk-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1
    },
    computed: {
      panel: function panel(t, e) {
        var i = t.selPanel;
        return m(i, e);
      },
      transitionElement: function transitionElement() {
        return this.panel;
      },
      bgClose: function bgClose(t) {
        var e = t.bgClose;
        return e && this.panel;
      }
    },
    beforeDisconnect: function beforeDisconnect() {
      g(it, this) && this.toggleElement(this.$el, !1, !1);
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(t) {
        t.preventDefault(), this.hide();
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === g(it, this) && this.toggle());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler: function handler(t) {
        if (g(it, this)) return !1;
        !this.stack && it.length ? (Promise.all(it.map(function (e) {
          return e.hide();
        })).then(this.show), t.preventDefault()) : it.push(this);
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        var _this27 = this;

        var t = document.documentElement;
        Ie(window) > t.clientWidth && this.overlay && u(document.body, "overflowY", "scroll"), this.stack && u(this.$el, "zIndex", y(u(this.$el, "zIndex")) + it.length), w(t, this.clsPage), this.bgClose && L(this.$el, "hide", T(document, ct, function (e) {
          var i = e.target;
          we(it) !== _this27 || _this27.overlay && !z(i, _this27.$el) || z(i, _this27.panel) || L(document, pt + " " + oe + " scroll", function (s) {
            var n = s.defaultPrevented,
                r = s.type,
                o = s.target;
            !n && r === pt && i === o && _this27.hide();
          }, !0);
        }), {
          self: !0
        }), this.escClose && L(this.$el, "hide", T(document, "keydown", function (e) {
          e.keyCode === 27 && we(it) === _this27 && _this27.hide();
        }), {
          self: !0
        });
      }
    }, {
      name: "shown",
      self: !0,
      handler: function handler() {
        qe(this.$el) || k(this.$el, "tabindex", "-1"), m(":focus", this.$el) || this.$el.focus();
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        var _this28 = this;

        g(it, this) && it.splice(it.indexOf(this), 1), it.length || u(document.body, "overflowY", ""), u(this.$el, "zIndex", ""), it.some(function (t) {
          return t.clsPage === _this28.clsPage;
        }) || E(document.documentElement, this.clsPage);
      }
    }],
    methods: {
      toggle: function toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function show() {
        var _this29 = this;

        return this.container && P(this.$el) !== this.container ? (q(this.container, this.$el), new Promise(function (t) {
          return requestAnimationFrame(function () {
            return _this29.show().then(t);
          });
        })) : this.toggleElement(this.$el, !0, ln(this));
      },
      hide: function hide() {
        return this.toggleElement(this.$el, !1, ln(this));
      }
    }
  };

  function ln(t) {
    var e = t.transitionElement,
        i = t._toggle;
    return function (s, n) {
      return new Promise(function (r, o) {
        return L(s, "show hide", function () {
          s._reject == null || s._reject(), s._reject = o, i(s, n);
          var a = L(e, "transitionstart", function () {
            L(e, "transitionend transitioncancel", r, {
              self: !0
            }), clearTimeout(l);
          }, {
            self: !0
          }),
              l = setTimeout(function () {
            a(), r();
          }, Go(u(e, "transitionDuration")));
        });
      }).then(function () {
        return delete s._reject;
      });
    };
  }

  function Go(t) {
    return t ? Gt(t, "ms") ? y(t) : y(t) * 1e3 : 0;
  }

  var Xo = {
    install: Jo,
    mixins: [Ui],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
    },
    events: [{
      name: "show",
      self: !0,
      handler: function handler() {
        S(this.panel, "uk-margin-auto-vertical") ? w(this.$el, "uk-flex") : u(this.$el, "display", "block"), H(this.$el);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        u(this.$el, "display", ""), E(this.$el, "uk-flex");
      }
    }]
  };

  function Jo(t) {
    var e = t.modal;
    e.dialog = function (s, n) {
      var r = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + s + "</div> </div>", n);
      return r.show(), T(r.$el, "hidden", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Promise.resolve();

              case 2:
                r.$destroy(!0);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      })), {
        self: !0
      }), r;
    }, e.alert = function (s, n) {
      return i(function (r) {
        var o = r.labels;
        return '<div class="uk-modal-body">' + (O(s) ? s : _t(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + o.ok + "</button> </div>";
      }, n, function (r) {
        return r.resolve();
      });
    }, e.confirm = function (s, n) {
      return i(function (r) {
        var o = r.labels;
        return '<form> <div class="uk-modal-body">' + (O(s) ? s : _t(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.ok + "</button> </div> </form>";
      }, n, function (r) {
        return r.reject();
      });
    }, e.prompt = function (s, n, r) {
      return i(function (o) {
        var a = o.labels;
        return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (O(s) ? s : _t(s)) + '</label> <input class="uk-input" value="' + (n || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + a.cancel + '</button> <button class="uk-button uk-button-primary">' + a.ok + "</button> </div> </form>";
      }, r, function (o) {
        return o.resolve(null);
      }, function (o) {
        return m("input", o.$el).value;
      });
    }, e.labels = {
      ok: "Ok",
      cancel: "Cancel"
    };

    function i(s, n, r, o) {
      n = _objectSpread({
        bgClose: !1,
        escClose: !0,
        labels: e.labels
      }, n);
      var a = e.dialog(s(n), n),
          l = new je();
      var h = !1;
      return T(a.$el, "submit", "form", function (c) {
        c.preventDefault(), l.resolve(o == null ? void 0 : o(a)), h = !0, a.hide();
      }), T(a.$el, "hide", function () {
        return !h && r(l);
      }), l.promise.dialog = a, l.promise;
    }
  }

  var Ko = {
    "extends": Ys,
    data: {
      targets: "> .uk-parent",
      toggle: "> a",
      content: "> ul"
    }
  },
      Zo = {
    mixins: [et, he],
    props: {
      dropdown: String,
      mode: "list",
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
      align: K ? "right" : "left",
      clsDrop: "uk-navbar-dropdown",
      mode: void 0,
      offset: void 0,
      delayShow: void 0,
      delayHide: void 0,
      boundaryAlign: void 0,
      flip: "x",
      boundary: !0,
      dropbar: !1,
      dropbarAnchor: !1,
      duration: 200,
      container: !1
    },
    computed: {
      boundary: function boundary(t, e) {
        var i = t.boundary;
        return i === !0 ? e : i;
      },
      dropbarAnchor: function dropbarAnchor(t, e) {
        var i = t.dropbarAnchor;
        return kt(i, e);
      },
      pos: function pos(t) {
        var e = t.align;
        return "bottom-" + e;
      },
      dropbar: {
        get: function get(t) {
          var e = t.dropbar;
          return e ? (e = this._dropbar || kt(e, this.$el) || m("+ .uk-navbar-dropbar", this.$el), e || (this._dropbar = m("<div></div>"))) : null;
        },
        watch: function watch(t) {
          w(t, "uk-navbar-dropbar");
        },
        immediate: !0
      },
      dropContainer: function dropContainer(t, e) {
        return this.container || e;
      },
      dropdowns: {
        get: function get(t, e) {
          var i = t.clsDrop;
          var s = M("." + i, e);

          if (this.dropContainer !== e) {
            var _iterator37 = _createForOfIteratorHelper(M("." + i, this.dropContainer)),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var r = _step37.value;
                var n;
                var o = (n = this.getDropdown(r)) == null ? void 0 : n.target;
                !g(s, r) && o && z(o, this.$el) && s.push(r);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
          }

          return s;
        },
        watch: function watch(t) {
          var _this30 = this;

          this.$create("drop", t.filter(function (e) {
            return !_this30.getDropdown(e);
          }), _objectSpread(_objectSpread({}, this.$props), {}, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: !0
      },
      toggles: {
        get: function get(t, e) {
          var i = t.dropdown;
          return M(i, e);
        },
        watch: function watch() {
          var t = S(this.$el, "uk-navbar-justify");

          var _iterator38 = _createForOfIteratorHelper(M(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el)),
              _step38;

          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
              var e = _step38.value;
              u(e, "flexGrow", t ? M(this.dropdown, e).length : "");
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }
        },
        immediate: !0
      }
    },
    disconnected: function disconnected() {
      this.dropbar && ht(this.dropbar), delete this._dropbar;
    },
    events: [{
      name: "mouseover focusin",
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(t) {
        var e = t.current;
        var i = this.getActive();
        i && g(i.mode, "hover") && i.target && !z(i.target, e) && !i.isDelaying && i.hide(!1);
      }
    }, {
      name: "keydown",
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(t) {
        var e = t.current,
            i = t.keyCode,
            s = this.getActive();
        i === qt.DOWN && Bt(e, "aria-expanded") && (t.preventDefault(), !s || s.target !== e ? (e.click(), L(this.dropContainer, "show", function (n) {
          var r = n.target;
          return cn(r);
        })) : cn(s.$el)), hn(t, this.toggles, s);
      }
    }, {
      name: "keydown",
      el: function el() {
        return this.dropContainer;
      },
      delegate: function delegate() {
        return "." + this.clsDrop;
      },
      handler: function handler(t) {
        var e = t.current,
            i = t.keyCode;
        if (!g(this.dropdowns, e)) return;
        var s = this.getActive(),
            n = M(Re, e),
            r = xt(n, function (a) {
          return D(a, ":focus");
        });

        if (i === qt.UP && (t.preventDefault(), r > 0 && n[r - 1].focus()), i === qt.DOWN && (t.preventDefault(), r < n.length - 1 && n[r + 1].focus()), i === qt.ESC) {
          var o;
          s == null || (o = s.target) == null || o.focus();
        }

        hn(t, this.toggles, s);
      }
    }, {
      name: "mouseleave",
      el: function el() {
        return this.dropbar;
      },
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler() {
        var t = this.getActive();
        t && g(t.mode, "hover") && !this.dropdowns.some(function (e) {
          return D(e, ":hover");
        }) && t.hide();
      }
    }, {
      name: "beforeshow",
      el: function el() {
        return this.dropContainer;
      },
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el;
        !S(i, this.clsDrop) || (P(this.dropbar) || Ge(this.dropbarAnchor || this.$el, this.dropbar), w(i, this.clsDrop + "-dropbar"));
      }
    }, {
      name: "show",
      el: function el() {
        return this.dropContainer;
      },
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var _this31 = this;

        var i = e.$el;
        !S(i, this.clsDrop) || (this._observer = Ze(i, function () {
          return _this31.transitionTo(I(i).bottom - I(_this31.dropbar).top + y(u(i, "marginBottom")), i);
        }));
      }
    }, {
      name: "beforehide",
      el: function el() {
        return this.dropContainer;
      },
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el;
        var s = this.getActive();
        D(this.dropbar, ":hover") && (s == null ? void 0 : s.$el) === i && !this.toggles.some(function (n) {
          return s.target !== n && D(n, ":focus");
        }) && t.preventDefault();
      }
    }, {
      name: "hide",
      el: function el() {
        return this.dropContainer;
      },
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el;
        if (!S(i, this.clsDrop)) return;

        this._observer.disconnect();

        var s = this.getActive();
        (!s || (s == null ? void 0 : s.$el) === i) && this.transitionTo(0);
      }
    }],
    methods: {
      getActive: function getActive() {
        return G && z(G.target, this.$el) && G;
      },
      transitionTo: function transitionTo(t, e) {
        var i = this.dropbar,
            s = H(i);
        e = s < t && e, u(e, "clip", "rect(0," + e.offsetWidth + "px," + s + "px,0)"), H(i, s), C.cancel([e, i]), Promise.all([C.start(i, {
          height: t
        }, this.duration), C.start(e, {
          clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
        }, this.duration)])["catch"](A).then(function () {
          return u(e, {
            clip: ""
          });
        });
      },
      getDropdown: function getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }
    }
  };

  function hn(t, e, i) {
    var s = t.current,
        n = t.keyCode,
        r = (i == null ? void 0 : i.target) || s,
        o = e.indexOf(r);
    n === qt.LEFT && o > 0 && (i == null || i.hide(!1), e[o - 1].focus()), n === qt.RIGHT && o < e.length - 1 && (i == null || i.hide(!1), e[o + 1].focus()), n === qt.TAB && (r.focus(), i == null || i.hide(!1));
  }

  function cn(t) {
    if (!m(":focus", t)) {
      var e;
      (e = m(Re, t)) == null || e.focus();
    }
  }

  var qt = {
    TAB: 9,
    ESC: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  var un = {
    props: {
      swiping: Boolean
    },
    data: {
      swiping: !0
    },
    computed: {
      swipeTarget: function swipeTarget(t, e) {
        return e;
      }
    },
    connected: function connected() {
      !this.swiping || ei(this, {
        el: this.swipeTarget,
        name: ct,
        passive: !0,
        handler: function handler(t) {
          if (!St(t)) return;
          var e = ee(t),
              i = "tagName" in t.target ? t.target : P(t.target);
          L(document, pt + " " + oe + " scroll", function (s) {
            var _ee = ee(s),
                n = _ee.x,
                r = _ee.y;

            (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || r && Math.abs(e.y - r) > 100) && setTimeout(function () {
              p(i, "swipe"), p(i, "swipe" + Qo(e.x, e.y, n, r));
            });
          });
        }
      });
    }
  };

  function Qo(t, e, i, s) {
    return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
  }

  var Uo = {
    mixins: [Ui, un],
    args: "mode",
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: "slide",
      flip: !1,
      overlay: !1,
      clsPage: "uk-offcanvas-page",
      clsContainer: "uk-offcanvas-container",
      selPanel: ".uk-offcanvas-bar",
      clsFlip: "uk-offcanvas-flip",
      clsContainerAnimation: "uk-offcanvas-container-animation",
      clsSidebarAnimation: "uk-offcanvas-bar-animation",
      clsMode: "uk-offcanvas",
      clsOverlay: "uk-offcanvas-overlay",
      selClose: ".uk-offcanvas-close",
      container: !1
    },
    computed: {
      clsFlip: function clsFlip(t) {
        var e = t.flip,
            i = t.clsFlip;
        return e ? i : "";
      },
      clsOverlay: function clsOverlay(t) {
        var e = t.overlay,
            i = t.clsOverlay;
        return e ? i : "";
      },
      clsMode: function clsMode(t) {
        var e = t.mode,
            i = t.clsMode;
        return i + "-" + e;
      },
      clsSidebarAnimation: function clsSidebarAnimation(t) {
        var e = t.mode,
            i = t.clsSidebarAnimation;
        return e === "none" || e === "reveal" ? "" : i;
      },
      clsContainerAnimation: function clsContainerAnimation(t) {
        var e = t.mode,
            i = t.clsContainerAnimation;
        return e !== "push" && e !== "reveal" ? "" : i;
      },
      transitionElement: function transitionElement(t) {
        var e = t.mode;
        return e === "reveal" ? P(this.panel) : this.panel;
      }
    },
    update: {
      read: function read() {
        this.isToggled() && !R(this.$el) && this.hide();
      },
      events: ["resize"]
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(t) {
        var e = t.current.hash,
            i = t.defaultPrevented;
        !i && e && m(e, document.body) && this.hide();
      }
    }, {
      name: "touchstart",
      passive: !0,
      el: function el() {
        return this.panel;
      },
      handler: function handler(t) {
        var e = t.targetTouches;
        e.length === 1 && (this.clientY = e[0].clientY);
      }
    }, {
      name: "touchmove",
      self: !0,
      passive: !1,
      filter: function filter() {
        return this.overlay;
      },
      handler: function handler(t) {
        t.cancelable && t.preventDefault();
      }
    }, {
      name: "touchmove",
      passive: !1,
      el: function el() {
        return this.panel;
      },
      handler: function handler(t) {
        if (t.targetTouches.length !== 1) return;
        var e = t.targetTouches[0].clientY - this.clientY,
            _this$panel = this.panel,
            i = _this$panel.scrollTop,
            s = _this$panel.scrollHeight,
            n = _this$panel.clientHeight;
        (n >= s || i === 0 && e > 0 || s - i <= n && e < 0) && t.cancelable && t.preventDefault();
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        this.mode === "reveal" && !S(P(this.panel), this.clsMode) && (Je(this.panel, "<div>"), w(P(this.panel), this.clsMode)), u(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), w(document.body, this.clsContainer, this.clsFlip), u(document.body, "touch-action", "pan-y pinch-zoom"), u(this.$el, "display", "block"), w(this.$el, this.clsOverlay), w(this.panel, this.clsSidebarAnimation, this.mode !== "reveal" ? this.clsMode : ""), H(document.body), w(document.body, this.clsContainerAnimation), this.clsContainerAnimation && ta();
      }
    }, {
      name: "hide",
      self: !0,
      handler: function handler() {
        E(document.body, this.clsContainerAnimation), u(document.body, "touch-action", "");
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        this.clsContainerAnimation && ea(), this.mode === "reveal" && Ke(this.panel), E(this.panel, this.clsSidebarAnimation, this.clsMode), E(this.$el, this.clsOverlay), u(this.$el, "display", ""), E(document.body, this.clsContainer, this.clsFlip), u(document.documentElement, "overflowY", "");
      }
    }, {
      name: "swipeLeft swipeRight",
      handler: function handler(t) {
        this.isToggled() && Gt(t.type, "Left") ^ this.flip && this.hide();
      }
    }]
  };

  function ta() {
    dn().content += ",user-scalable=0";
  }

  function ea() {
    var t = dn();
    t.content = t.content.replace(/,user-scalable=0$/, "");
  }

  function dn() {
    return m('meta[name="viewport"]', document.head) || q(document.head, '<meta name="viewport">');
  }

  var ia = {
    mixins: [et, vt],
    props: {
      selContainer: String,
      selContent: String,
      minHeight: Number
    },
    data: {
      selContainer: ".uk-modal",
      selContent: ".uk-modal-dialog",
      minHeight: 150
    },
    computed: {
      container: function container(t, e) {
        var i = t.selContainer;
        return ot(e, i);
      },
      content: function content(t, e) {
        var i = t.selContent;
        return ot(e, i);
      }
    },
    resizeTargets: function resizeTargets() {
      return [this.container, this.content];
    },
    update: {
      read: function read() {
        return !this.content || !this.container || !R(this.$el) ? !1 : {
          max: Math.max(this.minHeight, H(this.container) - ($(this.content).height - H(this.$el)))
        };
      },
      write: function write(t) {
        var e = t.max;
        u(this.$el, {
          minHeight: this.minHeight,
          maxHeight: e
        });
      },
      events: ["resize"]
    }
  },
      sa = {
    mixins: [vt],
    props: ["width", "height"],
    resizeTargets: function resizeTargets() {
      return [this.$el, P(this.$el)];
    },
    connected: function connected() {
      w(this.$el, "uk-responsive-width");
    },
    update: {
      read: function read() {
        return R(this.$el) && this.width && this.height ? {
          width: Ie(P(this.$el)),
          height: this.height
        } : !1;
      },
      write: function write(t) {
        H(this.$el, We.contain({
          height: this.height,
          width: this.width
        }, t).height);
      },
      events: ["resize"]
    }
  },
      na = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function scrollTo(t) {
        var _this32 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  t = t && m(t) || document.body;
                  _context8.t0 = p(_this32.$el, "beforescroll", [_this32, t]);

                  if (!_context8.t0) {
                    _context8.next = 6;
                    break;
                  }

                  _context8.next = 5;
                  return Vi(t, {
                    offset: _this32.offset
                  });

                case 5:
                  p(_this32.$el, "scrolled", [_this32, t]);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }))();
      }
    },
    events: {
      click: function click(t) {
        t.defaultPrevented || (t.preventDefault(), this.scrollTo(fn(this.$el)));
      }
    }
  };

  function fn(t) {
    return document.getElementById(decodeURIComponent(t.hash).substring(1));
  }

  var ra = {
    mixins: [_e],
    args: "cls",
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function data() {
      return {
        cls: "",
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      };
    },
    computed: {
      elements: {
        get: function get(t, e) {
          var i = t.target;
          return i ? M(i, e) : [e];
        },
        watch: function watch(t, e) {
          this.hidden && u(ye(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden"), ve(t, e) || this.$reset();
        },
        immediate: !0
      }
    },
    connected: function connected() {
      var _this33 = this;

      this._data.elements = new Map(), this.registerObserver(ae(this.elements, function (t) {
        var e = _this33._data.elements;

        var _iterator39 = _createForOfIteratorHelper(t),
            _step39;

        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            var _step39$value = _step39.value,
                i = _step39$value.target,
                s = _step39$value.isIntersecting;
            e.has(i) || e.set(i, {
              cls: rt(i, "uk-scrollspy-class") || _this33.cls
            });
            var n = e.get(i);
            !_this33.repeat && n.show || (n.show = s);
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }

        _this33.$emit();
      }, {
        rootMargin: J(this.offsetTop, "height") - 1 + "px " + (J(this.offsetLeft, "width") - 1) + "px"
      }, !1));
    },
    disconnected: function disconnected() {
      var _iterator40 = _createForOfIteratorHelper(this._data.elements.entries()),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _step40$value = _slicedToArray(_step40.value, 2),
              t = _step40$value[0],
              e = _step40$value[1];

          E(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    },
    update: [{
      write: function write(t) {
        var _this34 = this;

        var _iterator41 = _createForOfIteratorHelper(t.elements.entries()),
            _step41;

        try {
          var _loop5 = function _loop5() {
            var _step41$value = _slicedToArray(_step41.value, 2),
                e = _step41$value[0],
                i = _step41$value[1];

            i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(function () {
              return new Promise(function (s) {
                return setTimeout(s, _this34.delay);
              });
            }).then(function () {
              _this34.toggle(e, !0), setTimeout(function () {
                i.queued = !1, _this34.$emit();
              }, 300);
            })) : !i.show && i.inview && !i.queued && _this34.repeat && _this34.toggle(e, !1);
          };

          for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
            _loop5();
          }
        } catch (err) {
          _iterator41.e(err);
        } finally {
          _iterator41.f();
        }
      }
    }],
    methods: {
      toggle: function toggle(t, e) {
        var i = this._data.elements.get(t);

        if (!!i) {
          if (i.off == null || i.off(), u(t, "visibility", !e && this.hidden ? "hidden" : ""), W(t, this.inViewClass, e), W(t, i.cls), /\buk-animation-/.test(i.cls)) {
            var s = function s() {
              return Mi(t, "uk-animation-[\\w-]+");
            };

            e ? i.off = L(t, "animationcancel animationend", s) : s();
          }

          p(t, e ? "inview" : "outview"), i.inview = e, this.$update(t);
        }
      }
    }
  },
      oa = {
    mixins: [_e],
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: "uk-active",
      closest: !1,
      scroll: !1,
      overflow: !0,
      offset: 0
    },
    computed: {
      links: {
        get: function get(t, e) {
          return M('a[href^="#"]', e).filter(function (i) {
            return i.hash;
          });
        },
        watch: function watch(t) {
          this.scroll && this.$create("scroll", t, {
            offset: this.offset || 0
          });
        },
        immediate: !0
      },
      elements: function elements(t) {
        var e = t.closest;
        return ot(this.links, e || "*");
      }
    },
    update: [{
      read: function read() {
        var t = this.links.map(fn).filter(Boolean),
            e = t.length;
        if (!e || !R(this.$el)) return !1;

        var _Ct3 = Ct(t, /auto|scroll/, !0),
            _Ct4 = _slicedToArray(_Ct3, 1),
            i = _Ct4[0],
            s = i.scrollTop,
            n = i.scrollHeight,
            r = gt(i),
            o = n - r.height;

        var a = !1;
        if (s === o) a = e - 1;else {
          for (var l = 0; l < t.length && !(I(t[l]).top - r.top - this.offset > 0); l++) {
            a = +l;
          }

          a === !1 && this.overflow && (a = 0);
        }
        return {
          active: a
        };
      },
      write: function write(t) {
        var e = t.active;
        var i = e !== !1 && !S(this.elements[e], this.cls);
        this.links.forEach(function (s) {
          return s.blur();
        });

        for (var s = 0; s < this.elements.length; s++) {
          W(this.elements[s], this.cls, +s === e);
        }

        i && p(this.$el, "active", [e, this.elements[e]]);
      },
      events: ["scroll", "resize"]
    }]
  },
      aa = {
    mixins: [et, hi, vt, _e],
    props: {
      position: String,
      top: null,
      bottom: null,
      start: null,
      end: null,
      offset: String,
      overflowFlip: Boolean,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      position: "top",
      top: !1,
      bottom: !1,
      start: !1,
      end: !1,
      offset: 0,
      overflowFlip: !1,
      animation: "",
      clsActive: "uk-active",
      clsInactive: "",
      clsFixed: "uk-sticky-fixed",
      clsBelow: "uk-sticky-below",
      selTarget: "",
      showOnUp: !1,
      targetOffset: !1
    },
    computed: {
      selTarget: function selTarget(t, e) {
        var i = t.selTarget;
        return i && m(i, e) || e;
      }
    },
    resizeTargets: function resizeTargets() {
      return document.documentElement;
    },
    connected: function connected() {
      this.start = gn(this.start || this.top), this.end = gn(this.end || this.bottom), this.placeholder = m("+ .uk-sticky-placeholder", this.$el) || m('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
    },
    disconnected: function disconnected() {
      this.isFixed && (this.hide(), E(this.selTarget, this.clsInactive)), ht(this.placeholder), this.placeholder = null;
    },
    events: [{
      name: "resize",
      el: function el() {
        return window;
      },
      handler: function handler() {
        this.$emit("resize");
      }
    }, {
      name: "load hashchange popstate",
      el: function el() {
        return window;
      },
      filter: function filter() {
        return this.targetOffset !== !1;
      },
      handler: function handler() {
        var _this35 = this;

        !location.hash || Rt(window) === 0 || setTimeout(function () {
          var t = I(m(location.hash)),
              e = I(_this35.$el);
          _this35.isFixed && Si(t, e) && Rt(window, t.top - e.height - J(_this35.targetOffset, "height", _this35.placeholder) - J(_this35.offset, "height", _this35.placeholder));
        });
      }
    }],
    update: [{
      read: function read(t, e) {
        var _this36 = this;

        var i = t.height,
            s = t.margin;
        if (this.inactive = !this.matchMedia || !R(this.$el), this.inactive) return !1;
        var n = this.active && e.has("resize");
        n && (u(this.selTarget, "transition", "0s"), this.hide()), this.active || (i = I(this.$el).height, s = u(this.$el, "margin")), n && (this.show(), requestAnimationFrame(function () {
          return u(_this36.selTarget, "transition", "");
        }));
        var r = this.isFixed ? this.placeholder : this.$el,
            o = H(window);
        var a = this.position;
        this.overflowFlip && i > o && (a = a === "top" ? "bottom" : "top");
        var l = J(this.offset, "height", r);
        a === "bottom" && (i < o || this.overflowFlip) && (l += o - i);
        var h = this.overflowFlip ? 0 : Math.max(0, i + l - o),
            c = I(r).top,
            d = (this.start === !1 ? c : pn(this.start, this.$el, c)) - l,
            f = this.end === !1 ? document.scrollingElement.scrollHeight - o : pn(this.end, this.$el, c + i, !0) - I(this.$el).height + h - l;
        return {
          start: d,
          end: f,
          offset: l,
          overflow: h,
          topOffset: c,
          height: i,
          margin: s,
          width: $(r).width,
          top: Ce(r)[0]
        };
      },
      write: function write(t) {
        var e = t.height,
            i = t.margin;
        var s = this.placeholder;
        u(s, {
          height: e,
          margin: i
        }), z(s, document) || (Ge(this.$el, s), s.hidden = !0);
      },
      events: ["resize"]
    }, {
      read: function read(t) {
        var _t$scroll = t.scroll,
            e = _t$scroll === void 0 ? 0 : _t$scroll,
            _t$dir = t.dir,
            i = _t$dir === void 0 ? "down" : _t$dir,
            s = t.overflow,
            _t$overflowScroll = t.overflowScroll,
            n = _t$overflowScroll === void 0 ? 0 : _t$overflowScroll,
            r = t.start,
            o = t.end;
        var a = Rt(window);
        return {
          dir: e <= a ? "down" : "up",
          prevDir: i,
          scroll: a,
          prevScroll: e,
          offsetParentTop: I((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
          overflowScroll: U(n + U(a, r, o) - U(e, r, o), 0, s)
        };
      },
      write: function write(t, e) {
        var _this37 = this;

        var i = e.has("scroll"),
            _t$initTimestamp = t.initTimestamp,
            s = _t$initTimestamp === void 0 ? 0 : _t$initTimestamp,
            n = t.dir,
            r = t.prevDir,
            o = t.scroll,
            _t$prevScroll = t.prevScroll,
            a = _t$prevScroll === void 0 ? 0 : _t$prevScroll,
            l = t.top,
            h = t.start,
            c = t.topOffset,
            d = t.height;
        if (o < 0 || o === a && i || this.showOnUp && !i && !this.isFixed) return;
        var f = Date.now();
        if ((f - s > 300 || n !== r) && (t.initScroll = o, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - o) <= 30 && Math.abs(a - o) <= 10)) if (this.inactive || o < h || this.showOnUp && (o <= h || n === "down" && i || n === "up" && !this.isFixed && o <= c + d)) {
          if (!this.isFixed) {
            ut.inProgress(this.$el) && l > o && (ut.cancel(this.$el), this.hide());
            return;
          }

          this.isFixed = !1, this.animation && o > c ? (ut.cancel(this.$el), ut.out(this.$el, this.animation).then(function () {
            return _this37.hide();
          }, A)) : this.hide();
        } else this.isFixed ? this.update() : this.animation && o > c ? (ut.cancel(this.$el), this.show(), ut["in"](this.$el, this.animation)["catch"](A)) : this.show();
      },
      events: ["resize", "scroll"]
    }],
    methods: {
      show: function show() {
        this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
      },
      hide: function hide() {
        this.setActive(!1), E(this.$el, this.clsFixed, this.clsBelow), u(this.$el, {
          position: "",
          top: "",
          width: ""
        }), this.placeholder.hidden = !0;
      },
      update: function update() {
        var _this$_data = this._data,
            t = _this$_data.width,
            _this$_data$scroll = _this$_data.scroll,
            e = _this$_data$scroll === void 0 ? 0 : _this$_data$scroll,
            i = _this$_data.overflow,
            _this$_data$overflowS = _this$_data.overflowScroll,
            s = _this$_data$overflowS === void 0 ? 0 : _this$_data$overflowS,
            n = _this$_data.start,
            r = _this$_data.end,
            o = _this$_data.offset,
            a = _this$_data.topOffset,
            l = _this$_data.height,
            h = _this$_data.offsetParentTop;
        var c = n !== 0 || e > n;
        var d = "fixed";
        e > r && (o += r - h, d = "absolute"), i && (o -= s), u(this.$el, {
          position: d,
          top: o + "px",
          width: t
        }), this.setActive(c), W(this.$el, this.clsBelow, e > a + l), w(this.$el, this.clsFixed);
      },
      setActive: function setActive(t) {
        var e = this.active;
        this.active = t, t ? (Ni(this.selTarget, this.clsInactive, this.clsActive), e !== t && p(this.$el, "active")) : (Ni(this.selTarget, this.clsActive, this.clsInactive), e !== t && p(this.$el, "inactive"));
      }
    }
  };

  function pn(t, e, i, s) {
    if (!t) return 0;
    if (Nt(t) || O(t) && t.match(/^-?\d/)) return i + J(t, "height", e, !0);
    {
      var n = t === !0 ? P(e) : kt(t, e);
      return I(n).bottom - (s && n && z(e, n) ? y(u(n, "paddingBottom")) : 0);
    }
  }

  function gn(t) {
    return t === "true" ? !0 : t === "false" ? !1 : t;
  }

  var mn = {
    mixins: [Ee, un, It],
    args: "connect",
    props: {
      connect: String,
      toggle: String,
      itemNav: String,
      active: Number
    },
    data: {
      connect: "~.uk-switcher",
      toggle: "> * > :first-child",
      itemNav: !1,
      active: 0,
      cls: "uk-active",
      attrItem: "uk-switcher-item"
    },
    computed: {
      connects: {
        get: function get(t, e) {
          var i = t.connect;
          return ke(i, e);
        },
        watch: function watch(t) {
          var _this38 = this;

          this.swiping && u(t, "touch-action", "pan-y pinch-zoom");
          var e = this.index();
          this.connects.forEach(function (i) {
            return N(i).forEach(function (s, n) {
              return W(s, _this38.cls, n === e);
            });
          });
        },
        immediate: !0
      },
      toggles: {
        get: function get(t, e) {
          var i = t.toggle;
          return M(i, e).filter(function (s) {
            return !D(s, ".uk-disabled *, .uk-disabled, [disabled]");
          });
        },
        watch: function watch(t) {
          var e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        },
        immediate: !0
      },
      children: function children() {
        var _this39 = this;

        return N(this.$el).filter(function (t) {
          return _this39.toggles.some(function (e) {
            return z(e, t);
          });
        });
      },
      swipeTarget: function swipeTarget() {
        return this.connects;
      }
    },
    connected: function connected() {
      var _this40 = this;

      this.lazyload(this.$el, this.connects), zi(function () {
        return _this40.$emit();
      });
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.toggle;
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(t.current);
      }
    }, {
      name: "click",
      el: function el() {
        return this.connects.concat(this.itemNav ? ke(this.itemNav, this.$el) : []);
      },
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(rt(t.current, this.attrItem));
      }
    }, {
      name: "swipeRight swipeLeft",
      filter: function filter() {
        return this.swiping;
      },
      el: function el() {
        return this.connects;
      },
      handler: function handler(t) {
        var e = t.type;
        this.show(Gt(e, "Left") ? "next" : "previous");
      }
    }],
    methods: {
      index: function index() {
        var _this41 = this;

        return xt(this.children, function (t) {
          return S(t, _this41.cls);
        });
      },
      show: function show(t) {
        var _this42 = this;

        var e = this.index(),
            i = Qt(t, this.toggles, e),
            s = Qt(this.children[i], N(this.$el));
        N(this.$el).forEach(function (r, o) {
          W(r, _this42.cls, s === o), k(_this42.toggles[o], "aria-expanded", s === o);
        });
        var n = e >= 0 && e !== i;
        this.connects.forEach( /*#__PURE__*/function () {
          var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(r) {
            var o;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    o = r.children;
                    _context9.next = 3;
                    return _this42.toggleElement(x(o).filter(function (a) {
                      return S(a, _this42.cls);
                    }), !1, n);

                  case 3:
                    _context9.next = 5;
                    return _this42.toggleElement(o[s], !0, n);

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          return function (_x8) {
            return _ref11.apply(this, arguments);
          };
        }());
      }
    }
  },
      la = {
    mixins: [et],
    "extends": mn,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: "uk-tab-item"
    },
    connected: function connected() {
      var t = S(this.$el, "uk-tab-left") ? "uk-tab-left" : S(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
      t && this.$create("toggle", this.$el, {
        cls: t,
        mode: "media",
        media: this.media
      });
    }
  };
  var ha = 32;
  var ca = {
    mixins: [Ee, hi, It],
    args: "target",
    props: {
      href: String,
      target: null,
      mode: "list",
      queued: Boolean
    },
    data: {
      href: !1,
      target: !1,
      mode: "click",
      queued: !0
    },
    computed: {
      target: {
        get: function get(t, e) {
          var i = t.href,
              s = t.target;
          return s = ke(s || i, e), s.length && s || [e];
        },
        watch: function watch() {
          this.updateAria();
        },
        immediate: !0
      }
    },
    connected: function connected() {
      var _this43 = this;

      !g(this.mode, "media") && !qe(this.$el) && k(this.$el, "tabindex", "0"), this.lazyload(this.$el, this.target), zi(function () {
        return _this43.$emit();
      });
    },
    events: [{
      name: ct,
      filter: function filter() {
        return g(this.mode, "hover");
      },
      handler: function handler(t) {
        var _this44 = this;

        this._preventClick = null, !(!St(t) || this._showState) && (p(this.$el, "focus"), L(document, ct, function () {
          return p(_this44.$el, "blur");
        }, !0, function (e) {
          return !z(e.target, _this44.$el);
        }), g(this.mode, "click") && (this._preventClick = !0));
      }
    }, {
      name: jt + " " + re + " focus blur",
      filter: function filter() {
        return g(this.mode, "hover");
      },
      handler: function handler(t) {
        if (St(t)) return;
        var e = g([jt, "focus"], t.type),
            i = k(this.$el, "aria-expanded");

        if (!(!e && (t.type === re && D(this.$el, ":focus") || t.type === "blur" && D(this.$el, ":hover")))) {
          if (this._showState && e && i !== this._showState) {
            e || (this._showState = null);
            return;
          }

          this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide"));
        }
      }
    }, {
      name: "keydown",
      filter: function filter() {
        return g(this.mode, "click") && !ft(this.$el, "input");
      },
      handler: function handler(t) {
        t.keyCode === ha && (t.preventDefault(), this.$el.click());
      }
    }, {
      name: "click",
      filter: function filter() {
        var _this45 = this;

        return ["click", "hover"].some(function (t) {
          return g(_this45.mode, t);
        });
      },
      handler: function handler(t) {
        var e;
        (this._preventClick || ot(t.target, 'a[href="#"], a[href=""]') || (e = ot(t.target, "a[href]")) && (k(this.$el, "aria-expanded") !== "true" || e.hash && D(this.target, e.hash))) && t.preventDefault(), !this._preventClick && g(this.mode, "click") && this.toggle();
      }
    }, {
      name: "toggled",
      self: !0,
      el: function el() {
        return this.target;
      },
      handler: function handler(t, e) {
        t.target === this.target[0] && this.updateAria(e);
      }
    }, {
      name: "mediachange",
      filter: function filter() {
        return g(this.mode, "media");
      },
      el: function el() {
        return this.target;
      },
      handler: function handler(t, e) {
        e.matches ^ this.isToggled(this.target) && this.toggle();
      }
    }],
    methods: {
      toggle: function toggle(t) {
        var _this46 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          var e, _iterator42, _step42, s, n, i;

          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (p(_this46.target, t || "toggle", [_this46])) {
                    _context10.next = 2;
                    break;
                  }

                  return _context10.abrupt("return");

                case 2:
                  if (_this46.queued) {
                    _context10.next = 4;
                    break;
                  }

                  return _context10.abrupt("return", _this46.toggleElement(_this46.target));

                case 4:
                  e = _this46.target.filter(function (s) {
                    return S(s, _this46.clsLeave);
                  });

                  if (!e.length) {
                    _context10.next = 9;
                    break;
                  }

                  _iterator42 = _createForOfIteratorHelper(_this46.target);

                  try {
                    for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                      s = _step42.value;
                      n = g(e, s);

                      _this46.toggleElement(s, n, n);
                    }
                  } catch (err) {
                    _iterator42.e(err);
                  } finally {
                    _iterator42.f();
                  }

                  return _context10.abrupt("return");

                case 9:
                  i = _this46.target.filter(_this46.isToggled);
                  _context10.next = 12;
                  return _this46.toggleElement(i, !1);

                case 12:
                  _context10.next = 14;
                  return _this46.toggleElement(_this46.target.filter(function (s) {
                    return !g(i, s);
                  }), !0);

                case 14:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }))();
      },
      updateAria: function updateAria(t) {
        g(this.mode, "media") || k(this.$el, "aria-expanded", He(t) ? t : this.isToggled(this.target));
      }
    }
  },
      ua = Object.freeze({
    __proto__: null,
    Accordion: Ys,
    Alert: Xr,
    Cover: Jr,
    Drop: Js,
    Dropdown: Js,
    FormCustom: Qr,
    Grid: io,
    HeightMatch: oo,
    HeightViewport: ho,
    Icon: Zi,
    Img: Ho,
    Leader: Yo,
    Margin: Ks,
    Modal: Xo,
    Nav: Ko,
    Navbar: Zo,
    Offcanvas: Uo,
    OverflowAuto: ia,
    Responsive: sa,
    Scroll: na,
    Scrollspy: ra,
    ScrollspyNav: oa,
    Sticky: aa,
    Svg: Us,
    Switcher: mn,
    Tab: la,
    Toggle: ca,
    Video: Gs,
    Close: Oo,
    Spinner: Mo,
    SlidenavNext: on,
    SlidenavPrevious: on,
    SearchIcon: _o,
    Marker: wt,
    NavbarToggleIcon: wt,
    OverlayIcon: wt,
    PaginationNext: wt,
    PaginationPrevious: wt,
    Totop: wt
  });
  $t(ua, function (t, e) {
    return tt.component(e, t);
  }), Yr(tt);
  var da = ["days", "hours", "minutes", "seconds"];
  var fa = {
    mixins: [et],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: "",
      clsWrapper: ".uk-countdown-%unit%"
    },
    connected: function connected() {
      this.date = Date.parse(this.$props.date), this.start();
    },
    disconnected: function disconnected() {
      this.stop();
    },
    events: [{
      name: "visibilitychange",
      el: function el() {
        return document;
      },
      handler: function handler() {
        document.hidden ? this.stop() : this.start();
      }
    }],
    methods: {
      start: function start() {
        this.stop(), this.update(), this.timer = setInterval(this.update, 1e3);
      },
      stop: function stop() {
        clearInterval(this.timer);
      },
      update: function update() {
        var _this47 = this;

        var t = pa(this.date);
        (!this.date || t.total <= 0) && (this.stop(), t.days = t.hours = t.minutes = t.seconds = 0);

        var _iterator43 = _createForOfIteratorHelper(da),
            _step43;

        try {
          var _loop6 = function _loop6() {
            var e = _step43.value;
            var i = m(_this47.clsWrapper.replace("%unit%", e), _this47.$el);
            if (!i) return "continue";
            var s = String(Math.trunc(t[e]));
            s = s.length < 2 ? "0" + s : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && _t(i, s.map(function () {
              return "<span></span>";
            }).join("")), s.forEach(function (n, r) {
              return i.children[r].textContent = n;
            }));
          };

          for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
            var _ret3 = _loop6();

            if (_ret3 === "continue") continue;
          }
        } catch (err) {
          _iterator43.e(err);
        } finally {
          _iterator43.f();
        }
      }
    }
  };

  function pa(t) {
    var e = t - Date.now();
    return {
      total: e,
      seconds: e / 1e3 % 60,
      minutes: e / 1e3 / 60 % 60,
      hours: e / 1e3 / 60 / 60 % 24,
      days: e / 1e3 / 60 / 60 / 24
    };
  }

  var ts = "uk-transition-leave",
      es = "uk-transition-enter";

  function vn(t, e, i, s) {
    s === void 0 && (s = 0);

    var n = ci(e, !0),
        r = {
      opacity: 1
    },
        o = {
      opacity: 0
    },
        a = function a(c) {
      return function () {
        return n === ci(e) ? c() : Promise.reject();
      };
    },
        l = a(function () {
      return w(e, ts), Promise.all(bn(e).map(function (c, d) {
        return new Promise(function (f) {
          return setTimeout(function () {
            return C.start(c, o, i / 2, "ease").then(f);
          }, d * s);
        });
      })).then(function () {
        return E(e, ts);
      });
    }),
        h = a(function () {
      var c = H(e);
      return w(e, es), t(), u(N(e), {
        opacity: 0
      }), new Promise(function (d) {
        return requestAnimationFrame(function () {
          var f = N(e),
              v = H(e);
          u(e, "alignContent", "flex-start"), H(e, c);

          var _ = bn(e);

          u(f, o);

          var b = _.map(function (Z, X) {
            return new Promise(function (V) {
              return setTimeout(function () {
                return C.start(Z, r, i / 2, "ease").then(V);
              }, X * s);
            });
          });

          c !== v && b.push(C.start(e, {
            height: v
          }, i / 2 + _.length * s, "ease")), Promise.all(b).then(function () {
            E(e, es), n === ci(e) && (u(e, {
              height: "",
              alignContent: ""
            }), u(f, {
              opacity: ""
            }), delete e.dataset.transition), d();
          });
        });
      });
    });

    return S(e, ts) ? wn(e).then(h) : S(e, es) ? wn(e).then(l).then(h) : l().then(h);
  }

  function ci(t, e) {
    return e && (t.dataset.transition = 1 + ci(t)), Et(t.dataset.transition) || 0;
  }

  function wn(t) {
    return Promise.all(N(t).filter(C.inProgress).map(function (e) {
      return new Promise(function (i) {
        return L(e, "transitionend transitioncanceled", i);
      });
    }));
  }

  function bn(t) {
    return Ki(N(t)).reduce(function (e, i) {
      return e.concat(Fe(i.filter(function (s) {
        return ti(s);
      }), "offsetLeft"));
    }, []);
  }

  function ga(t, e, i) {
    return new Promise(function (s) {
      return requestAnimationFrame(function () {
        var n = N(e);
        var r = n.map(function (a) {
          return xn(a, !0);
        }),
            o = u(e, ["height", "padding"]);
        C.cancel(e), n.forEach(C.cancel), yn(e), t(), n = n.concat(N(e).filter(function (a) {
          return !g(n, a);
        })), Promise.resolve().then(function () {
          B.flush();

          var a = u(e, ["height", "padding"]),
              _ma = ma(e, n, r),
              _ma2 = _slicedToArray(_ma, 2),
              l = _ma2[0],
              h = _ma2[1];

          n.forEach(function (c, d) {
            return h[d] && u(c, h[d]);
          }), u(e, _objectSpread({
            display: "block"
          }, o)), requestAnimationFrame(function () {
            var c = n.map(function (d, f) {
              return P(d) === e && C.start(d, l[f], i, "ease");
            }).concat(C.start(e, a, i, "ease"));
            Promise.all(c).then(function () {
              n.forEach(function (d, f) {
                return P(d) === e && u(d, "display", l[f].opacity === 0 ? "none" : "");
              }), yn(e);
            }, A).then(s);
          });
        });
      });
    });
  }

  function xn(t, e) {
    var i = u(t, "zIndex");
    return R(t) ? _objectSpread({
      display: "",
      opacity: e ? u(t, "opacity") : "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: i === "auto" ? Ut(t) : i
    }, $n(t)) : !1;
  }

  function ma(t, e, i) {
    var s = e.map(function (r, o) {
      return P(r) && o in i ? i[o] ? R(r) ? $n(r) : {
        opacity: 0
      } : {
        opacity: R(r) ? 1 : 0
      } : !1;
    }),
        n = s.map(function (r, o) {
      var a = P(e[o]) === t && (i[o] || xn(e[o]));
      if (!a) return !1;
      if (!r) delete a.opacity;else if (!("opacity" in r)) {
        var l = a.opacity;
        l % 1 ? r.opacity = 1 : delete a.opacity;
      }
      return a;
    });
    return [s, n];
  }

  function yn(t) {
    u(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      marginTop: "",
      marginLeft: "",
      transform: "",
      width: "",
      zIndex: ""
    }), u(t, {
      height: "",
      display: "",
      padding: ""
    });
  }

  function $n(t) {
    var _I3 = I(t),
        e = _I3.height,
        i = _I3.width,
        _Ve = Ve(t),
        s = _Ve.top,
        n = _Ve.left,
        _u = u(t, ["marginTop", "marginLeft"]),
        r = _u.marginLeft,
        o = _u.marginTop;

    return {
      top: s,
      left: n,
      height: e,
      width: i,
      marginLeft: r,
      marginTop: o,
      transform: ""
    };
  }

  var kn = {
    props: {
      duration: Number,
      animation: Boolean
    },
    data: {
      duration: 150,
      animation: "slide"
    },
    methods: {
      animate: function animate(t, e) {
        var _this48 = this;

        e === void 0 && (e = this.$el);
        var i = this.animation;
        return (i === "fade" ? vn : i === "delayed-fade" ? function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
            r[o] = arguments[o];
          }

          return vn.apply(void 0, r.concat([40]));
        } : i ? ga : function () {
          return t(), Promise.resolve();
        })(t, e, this.duration).then(function () {
          return _this48.$update(e, "resize");
        }, A);
      }
    }
  },
      va = {
    mixins: [kn],
    args: "target",
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      duration: 250
    },
    computed: {
      toggles: {
        get: function get(t, e) {
          var i = t.attrItem;
          return M("[" + i + "],[data-" + i + "]", e);
        },
        watch: function watch() {
          var _this49 = this;

          if (this.updateState(), this.selActive !== !1) {
            var t = M(this.selActive, this.$el);
            this.toggles.forEach(function (e) {
              return W(e, _this49.cls, g(t, e));
            });
          }
        },
        immediate: !0
      },
      children: {
        get: function get(t, e) {
          var i = t.target;
          return M(i + " > *", e);
        },
        watch: function watch(t, e) {
          e && !ya(t, e) && this.updateState();
        },
        immediate: !0
      }
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(t) {
        t.preventDefault(), this.apply(t.current);
      }
    }],
    methods: {
      apply: function apply(t) {
        var e = this.getState(),
            i = Tn(t, this.attrItem, this.getState());
        wa(e, i) || this.setState(i);
      },
      getState: function getState() {
        var _this50 = this;

        return this.toggles.filter(function (t) {
          return S(t, _this50.cls);
        }).reduce(function (t, e) {
          return Tn(e, _this50.attrItem, t);
        }, {
          filter: {
            "": ""
          },
          sort: []
        });
      },
      setState: function setState(t, e) {
        var _this51 = this;

        e === void 0 && (e = !0), t = _objectSpread({
          filter: {
            "": ""
          },
          sort: []
        }, t), p(this.$el, "beforeFilter", [this, t]), this.toggles.forEach(function (i) {
          return W(i, _this51.cls, !!xa(i, _this51.attrItem, t));
        }), Promise.all(M(this.target, this.$el).map(function (i) {
          var s = function s() {
            ba(t, i, N(i)), _this51.$update(_this51.$el);
          };

          return e ? _this51.animate(s, i) : s();
        })).then(function () {
          return p(_this51.$el, "afterFilter", [_this51]);
        });
      },
      updateState: function updateState() {
        var _this52 = this;

        B.write(function () {
          return _this52.setState(_this52.getState(), !1);
        });
      }
    }
  };

  function Sn(t, e) {
    return Pe(rt(t, e), ["filter"]);
  }

  function wa(t, e) {
    return ["filter", "sort"].every(function (i) {
      return ve(t[i], e[i]);
    });
  }

  function ba(t, e, i) {
    var s = $a(t);
    i.forEach(function (o) {
      return u(o, "display", s && !D(o, s) ? "none" : "");
    });

    var _t$sort = _slicedToArray(t.sort, 2),
        n = _t$sort[0],
        r = _t$sort[1];

    if (n) {
      var o = ka(i, n, r);
      ve(o, i) || q(e, o);
    }
  }

  function Tn(t, e, i) {
    var s = Sn(t, e),
        n = s.filter,
        r = s.group,
        o = s.sort,
        _s$order = s.order,
        a = _s$order === void 0 ? "asc" : _s$order;
    return (n || Y(o)) && (r ? n ? (delete i.filter[""], i.filter[r] = n) : (delete i.filter[r], (me(i.filter) || "" in i.filter) && (i.filter = {
      "": n || ""
    })) : i.filter = {
      "": n || ""
    }), Y(o) || (i.sort = [o, a]), i;
  }

  function xa(t, e, i) {
    var _i$filter = i.filter,
        s = _i$filter === void 0 ? {
      "": ""
    } : _i$filter,
        _i$sort = _slicedToArray(i.sort, 2),
        n = _i$sort[0],
        r = _i$sort[1];

    var _Sn = Sn(t, e),
        _Sn$filter = _Sn.filter,
        o = _Sn$filter === void 0 ? "" : _Sn$filter,
        _Sn$group = _Sn.group,
        a = _Sn$group === void 0 ? "" : _Sn$group,
        l = _Sn.sort,
        _Sn$order = _Sn.order,
        h = _Sn$order === void 0 ? "asc" : _Sn$order;

    return Y(l) ? a in s && o === s[a] || !o && a && !(a in s) && !s[""] : n === l && r === h;
  }

  function ya(t, e) {
    return t.length === e.length && t.every(function (i) {
      return e.includes(i);
    });
  }

  function $a(t) {
    var e = t.filter,
        i = "";
    return $t(e, function (s) {
      return i += s || "";
    }), i;
  }

  function ka(t, e, i) {
    return _toConsumableArray(t).sort(function (s, n) {
      return rt(s, e).localeCompare(rt(n, e), void 0, {
        numeric: !0
      }) * (i === "asc" || -1);
    });
  }

  var is = {
    slide: {
      show: function show(t) {
        return [{
          transform: F(t * -100)
        }, {
          transform: F()
        }];
      },
      percent: function percent(t) {
        return Me(t);
      },
      translate: function translate(t, e) {
        return [{
          transform: F(e * -100 * t)
        }, {
          transform: F(e * 100 * (1 - t))
        }];
      }
    }
  };

  function Me(t) {
    return Math.abs(u(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }

  function F(t, e) {
    return t === void 0 && (t = 0), e === void 0 && (e = "%"), t += t ? e : "", "translate3d(" + t + ", 0, 0)";
  }

  function ce(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }

  var Cn = _objectSpread(_objectSpread({}, is), {}, {
    fade: {
      show: function show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function percent(t) {
        return 1 - u(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t
        }, {
          opacity: t
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: ce(1 - .2)
        }, {
          opacity: 1,
          transform: ce(1)
        }];
      },
      percent: function percent(t) {
        return 1 - u(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          transform: ce(1 - .2 * t)
        }, {
          opacity: t,
          transform: ce(1 - .2 + .2 * t)
        }];
      }
    }
  });

  function Sa(t, e, i, s) {
    var n = s.animation,
        r = s.easing;
    var o = n.percent,
        a = n.translate,
        _n$show = n.show,
        l = _n$show === void 0 ? A : _n$show,
        h = l(i),
        c = new je();
    return {
      dir: i,
      show: function show(d, f, v) {
        var _this53 = this;

        f === void 0 && (f = 0);

        var _ = v ? "linear" : r;

        return d -= Math.round(d * U(f, -1, 1)), this.translate(f), ui(e, "itemin", {
          percent: f,
          duration: d,
          timing: _,
          dir: i
        }), ui(t, "itemout", {
          percent: 1 - f,
          duration: d,
          timing: _,
          dir: i
        }), Promise.all([C.start(e, h[1], d, _), C.start(t, h[0], d, _)]).then(function () {
          _this53.reset(), c.resolve();
        }, A), c.promise;
      },
      cancel: function cancel() {
        C.cancel([e, t]);
      },
      reset: function reset() {
        for (var d in h[0]) {
          u([e, t], d, "");
        }
      },
      forward: function forward(d, f) {
        return f === void 0 && (f = this.percent()), C.cancel([e, t]), this.show(d, f, !0);
      },
      translate: function translate(d) {
        this.reset();
        var f = a(d, i);
        u(e, f[1]), u(t, f[0]), ui(e, "itemtranslatein", {
          percent: d,
          dir: i
        }), ui(t, "itemtranslateout", {
          percent: 1 - d,
          dir: i
        });
      },
      percent: function percent() {
        return o(t || e, e, i);
      },
      getDistance: function getDistance() {
        return t == null ? void 0 : t.offsetWidth;
      }
    };
  }

  function ui(t, e, i) {
    p(t, Dt(e, !1, !1, i));
  }

  var Ta = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean
    },
    data: {
      autoplay: !1,
      autoplayInterval: 7e3,
      pauseOnHover: !0
    },
    connected: function connected() {
      this.autoplay && this.startAutoplay();
    },
    disconnected: function disconnected() {
      this.stopAutoplay();
    },
    update: function update() {
      k(this.slides, "tabindex", "-1");
    },
    events: [{
      name: "visibilitychange",
      el: function el() {
        return document;
      },
      filter: function filter() {
        return this.autoplay;
      },
      handler: function handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      }
    }],
    methods: {
      startAutoplay: function startAutoplay() {
        var _this54 = this;

        this.stopAutoplay(), this.interval = setInterval(function () {
          return (!_this54.draggable || !m(":focus", _this54.$el)) && (!_this54.pauseOnHover || !D(_this54.$el, ":hover")) && !_this54.stack.length && _this54.show("next");
        }, this.autoplayInterval);
      },
      stopAutoplay: function stopAutoplay() {
        this.interval && clearInterval(this.interval);
      }
    }
  },
      Ca = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: !0,
      threshold: 10
    },
    created: function created() {
      var _this55 = this;

      var _loop7 = function _loop7() {
        var t = _arr5[_i9];
        var e = _this55[t];

        _this55[t] = function (i) {
          var s = ee(i).x * (K ? -1 : 1);
          _this55.prevPos = s === _this55.pos ? _this55.prevPos : _this55.pos, _this55.pos = s, e(i);
        };
      };

      for (var _i9 = 0, _arr5 = ["start", "move", "end"]; _i9 < _arr5.length; _i9++) {
        _loop7();
      }
    },
    events: [{
      name: ct,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(t) {
        !this.draggable || !St(t) && Ia(t.target) || ot(t.target, xe) || t.button > 0 || this.length < 2 || this.start(t);
      }
    }, {
      name: "dragstart",
      handler: function handler(t) {
        t.preventDefault();
      }
    }],
    methods: {
      start: function start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, T(document, ne, this.move, {
          passive: !1
        }), T(document, pt + " " + oe + " input", this.end, !0), u(this.list, "userSelect", "none");
      },
      move: function move(t) {
        var _this56 = this;

        var e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
        u(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
        var i = this.slides;
        var s = this.prevIndex,
            n = Math.abs(e),
            r = this.getIndex(s + this.dir, s),
            o = this._getDistance(s, r) || i[s].offsetWidth;

        for (; r !== s && n > o;) {
          this.drag -= o * this.dir, s = r, n -= o, r = this.getIndex(s + this.dir, s), o = this._getDistance(s, r) || i[s].offsetWidth;
        }

        this.percent = n / o;
        var a = i[s],
            l = i[r],
            h = this.index !== r,
            c = s === r;
        var d;
        [this.index, this.prevIndex].filter(function (f) {
          return !g([r, s], f);
        }).forEach(function (f) {
          p(i[f], "itemhidden", [_this56]), c && (d = !0, _this56.prevIndex = s);
        }), (this.index === s && this.prevIndex !== s || d) && p(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = r, !c && p(a, "beforeitemhide", [this]), p(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !c && l), h && (!c && p(a, "itemhide", [this]), p(l, "itemshow", [this]));
      },
      end: function end() {
        if (te(document, ne, this.move, {
          passive: !1
        }), te(document, pt + " " + oe + " input", this.end, !0), this.dragging) if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;else {
          var t = (K ? this.dir * (K ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
          this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0);
        }
        u(this.list, {
          userSelect: "",
          pointerEvents: ""
        }), this.drag = this.percent = null;
      }
    }
  };

  function Ia(t) {
    return !t.children.length && t.childNodes.length;
  }

  var Aa = {
    data: {
      selNav: !1
    },
    computed: {
      nav: function nav(t, e) {
        var i = t.selNav;
        return m(i, e);
      },
      selNavItem: function selNavItem(t) {
        var e = t.attrItem;
        return "[" + e + "],[data-" + e + "]";
      },
      navItems: function navItems(t, e) {
        return M(this.selNavItem, e);
      }
    },
    update: {
      write: function write() {
        var _this57 = this;

        this.nav && this.length !== this.nav.children.length && _t(this.nav, this.slides.map(function (t, e) {
          return "<li " + _this57.attrItem + '="' + e + '"><a href></a></li>';
        }).join("")), this.navItems.concat(this.nav).forEach(function (t) {
          return t && (t.hidden = !_this57.maxIndex);
        }), this.updateNav();
      },
      events: ["resize"]
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.selNavItem;
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(rt(t.current, this.attrItem));
      }
    }, {
      name: "itemshow",
      handler: "updateNav"
    }],
    methods: {
      updateNav: function updateNav() {
        var t = this.getValidIndex();

        var _iterator44 = _createForOfIteratorHelper(this.navItems),
            _step44;

        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
            var e = _step44.value;
            var i = rt(e, this.attrItem);
            W(e, this.clsActive, Et(i) === t), W(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }
      }
    }
  },
      In = {
    mixins: [Ta, Ca, Aa, vt],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function data() {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      };
    },
    connected: function connected() {
      this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
    },
    disconnected: function disconnected() {
      E(this.slides, this.clsActive);
    },
    computed: {
      duration: function duration(t, e) {
        var i = t.velocity;
        return An(e.offsetWidth / i);
      },
      list: function list(t, e) {
        var i = t.selList;
        return m(i, e);
      },
      maxIndex: function maxIndex() {
        return this.length - 1;
      },
      selSlides: function selSlides(t) {
        var e = t.selList,
            i = t.selSlides;
        return e + " " + (i || "> *");
      },
      slides: {
        get: function get() {
          return M(this.selSlides, this.$el);
        },
        watch: function watch() {
          this.$reset();
        }
      },
      length: function length() {
        return this.slides.length;
      }
    },
    methods: {
      show: function show(t, e) {
        var _this58 = this;

        if (e === void 0 && (e = !1), this.dragging || !this.length) return;

        var i = this.stack,
            s = e ? 0 : i.length,
            n = function n() {
          i.splice(s, 1), i.length && _this58.show(i.shift(), !0);
        };

        if (i[e ? "unshift" : "push"](t), !e && i.length > 1) {
          i.length === 2 && this._transitioner.forward(Math.min(this.duration, 200));
          return;
        }

        var r = this.getIndex(this.index),
            o = S(this.slides, this.clsActive) && this.slides[r],
            a = this.getIndex(t, this.index),
            l = this.slides[a];

        if (o === l) {
          n();
          return;
        }

        if (this.dir = Pa(t, r), this.prevIndex = r, this.index = a, o && !p(o, "beforeitemhide", [this]) || !p(l, "beforeitemshow", [this, o])) {
          this.index = this.prevIndex, n();
          return;
        }

        var h = this._show(o, l, e).then(function () {
          return o && p(o, "itemhidden", [_this58]), p(l, "itemshown", [_this58]), new Promise(function (c) {
            B.write(function () {
              i.shift(), i.length ? _this58.show(i.shift(), !0) : _this58._transitioner = null, c();
            });
          });
        });

        return o && p(o, "itemhide", [this]), p(l, "itemshow", [this]), h;
      },
      getIndex: function getIndex(t, e) {
        return t === void 0 && (t = this.index), e === void 0 && (e = this.index), U(Qt(t, this.slides, e, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function getValidIndex(t, e) {
        return t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), this.getIndex(t, e);
      },
      _show: function _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, _objectSpread({
          easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
        }, this.transitionOptions)), !i && !t) return this._translate(1), Promise.resolve();
        var s = this.stack.length;
        return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
      },
      _getDistance: function _getDistance(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function _translate(t, e, i) {
        e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index);

        var s = this._getTransitioner(e !== i ? e : !1, i);

        return s.translate(t), s;
      },
      _getTransitioner: function _getTransitioner(t, e, i, s) {
        return t === void 0 && (t = this.prevIndex), e === void 0 && (e = this.index), i === void 0 && (i = this.dir || 1), s === void 0 && (s = this.transitionOptions), new this.Transitioner(Kt(t) ? this.slides[t] : t, Kt(e) ? this.slides[e] : e, i * (K ? -1 : 1), s);
      }
    }
  };

  function Pa(t, e) {
    return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
  }

  function An(t) {
    return .5 * t + 300;
  }

  var Pn = {
    mixins: [In],
    props: {
      animation: String
    },
    data: {
      animation: "slide",
      clsActivated: "uk-transition-active",
      Animations: is,
      Transitioner: Sa
    },
    computed: {
      animation: function animation(t) {
        var e = t.animation,
            i = t.Animations;
        return _objectSpread(_objectSpread({}, i[e] || i.slide), {}, {
          name: e
        });
      },
      transitionOptions: function transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      beforeitemshow: function beforeitemshow(t) {
        var e = t.target;
        w(e, this.clsActive);
      },
      itemshown: function itemshown(t) {
        var e = t.target;
        w(e, this.clsActivated);
      },
      itemhidden: function itemhidden(t) {
        var e = t.target;
        E(e, this.clsActive, this.clsActivated);
      }
    }
  },
      En = {
    mixins: [he, Ui, It, Pn],
    functional: !0,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function data() {
      return {
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Cn,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      };
    },
    created: function created() {
      var t = m(this.template),
          e = m(this.selList, t);
      this.items.forEach(function () {
        return q(e, "<li>");
      }), this.$mount(q(this.container, t));
    },
    computed: {
      caption: function caption(t, e) {
        var i = t.selCaption;
        return m(i, e);
      }
    },
    events: [{
      name: ne + " " + ct + " keydown",
      handler: "showControls"
    }, {
      name: "click",
      self: !0,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(t) {
        t.defaultPrevented || this.hide();
      }
    }, {
      name: "shown",
      self: !0,
      handler: function handler() {
        this.showControls();
      }
    }, {
      name: "hide",
      self: !0,
      handler: function handler() {
        this.hideControls(), E(this.slides, this.clsActive), C.stop(this.slides);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        this.$destroy(!0);
      }
    }, {
      name: "keyup",
      el: function el() {
        return document;
      },
      handler: function handler(t) {
        if (!(!this.isToggled(this.$el) || !this.draggable)) switch (t.keyCode) {
          case 37:
            this.show("previous");
            break;

          case 39:
            this.show("next");
            break;
        }
      }
    }, {
      name: "beforeitemshow",
      handler: function handler(t) {
        this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Cn.scale, E(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      }
    }, {
      name: "itemshow",
      handler: function handler() {
        _t(this.caption, this.getItem().caption || "");

        for (var t = -this.preload; t <= this.preload; t++) {
          this.loadItem(this.index + t);
        }
      }
    }, {
      name: "itemshown",
      handler: function handler() {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: "itemload",
      handler: function handler(t, e) {
        var _this59 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          var i, s, _e$alt, n, r, _e$attrs, o, a, l, _yield$gs, h, c, _h, _yield$yield$fetch$js, _h2, _c;

          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  i = e.source, s = e.type, _e$alt = e.alt, n = _e$alt === void 0 ? "" : _e$alt, r = e.poster, _e$attrs = e.attrs, o = _e$attrs === void 0 ? {} : _e$attrs;

                  if (!(_this59.setItem(e, "<span uk-spinner></span>"), !i)) {
                    _context11.next = 3;
                    break;
                  }

                  return _context11.abrupt("return");

                case 3:
                  l = {
                    frameborder: "0",
                    allow: "autoplay",
                    allowfullscreen: "",
                    style: "max-width: 100%; box-sizing: border-box;",
                    "uk-responsive": "",
                    "uk-video": "" + _this59.videoAutoplay
                  };

                  if (!(s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))) {
                    _context11.next = 19;
                    break;
                  }

                  _context11.prev = 5;
                  _context11.next = 8;
                  return gs(i, o.srcset, o.size);

                case 8:
                  _yield$gs = _context11.sent;
                  h = _yield$gs.width;
                  c = _yield$gs.height;

                  _this59.setItem(e, Ne("img", _objectSpread({
                    src: i,
                    width: h,
                    height: c,
                    alt: n
                  }, o)));

                  _context11.next = 17;
                  break;

                case 14:
                  _context11.prev = 14;
                  _context11.t0 = _context11["catch"](5);

                  _this59.setError(e);

                case 17:
                  _context11.next = 47;
                  break;

                case 19:
                  if (!(s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i))) {
                    _context11.next = 24;
                    break;
                  }

                  _h = Ne("video", _objectSpread({
                    src: i,
                    poster: r,
                    controls: "",
                    playsinline: "",
                    "uk-video": "" + _this59.videoAutoplay
                  }, o));
                  T(_h, "loadedmetadata", function () {
                    k(_h, {
                      width: _h.videoWidth,
                      height: _h.videoHeight
                    }), _this59.setItem(e, _h);
                  }), T(_h, "error", function () {
                    return _this59.setError(e);
                  });
                  _context11.next = 47;
                  break;

                case 24:
                  if (!(s === "iframe" || i.match(/\.(html|php)($|\?)/i))) {
                    _context11.next = 28;
                    break;
                  }

                  _this59.setItem(e, Ne("iframe", _objectSpread({
                    src: i,
                    frameborder: "0",
                    allowfullscreen: "",
                    "class": "uk-lightbox-iframe"
                  }, o)));

                  _context11.next = 47;
                  break;

                case 28:
                  if (!(a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))) {
                    _context11.next = 32;
                    break;
                  }

                  _this59.setItem(e, Ne("iframe", _objectSpread(_objectSpread({
                    src: "https://www.youtube" + (a[1] || "") + ".com/embed/" + a[2] + (a[3] ? "?" + a[3] : ""),
                    width: 1920,
                    height: 1080
                  }, l), o)));

                  _context11.next = 47;
                  break;

                case 32:
                  if (!(a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))) {
                    _context11.next = 47;
                    break;
                  }

                  _context11.prev = 33;
                  _context11.next = 36;
                  return fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), {
                    credentials: "omit"
                  });

                case 36:
                  _context11.next = 38;
                  return _context11.sent.json();

                case 38:
                  _yield$yield$fetch$js = _context11.sent;
                  _h2 = _yield$yield$fetch$js.height;
                  _c = _yield$yield$fetch$js.width;

                  _this59.setItem(e, Ne("iframe", _objectSpread(_objectSpread({
                    src: "https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""),
                    width: _c,
                    height: _h2
                  }, l), o)));

                  _context11.next = 47;
                  break;

                case 44:
                  _context11.prev = 44;
                  _context11.t1 = _context11["catch"](33);

                  _this59.setError(e);

                case 47:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, null, [[5, 14], [33, 44]]);
        }))();
      }
    }],
    methods: {
      loadItem: function loadItem(t) {
        t === void 0 && (t = this.index);
        var e = this.getItem(t);
        this.getSlide(e).childElementCount || p(this.$el, "itemload", [e]);
      },
      getItem: function getItem(t) {
        return t === void 0 && (t = this.index), this.items[Qt(t, this.slides)];
      },
      setItem: function setItem(t, e) {
        p(this.$el, "itemloaded", [this, _t(this.getSlide(t), e)]);
      },
      getSlide: function getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      },
      setError: function setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), w(this.$el, "uk-active", "uk-transition-active");
      },
      hideControls: function hideControls() {
        E(this.$el, "uk-active", "uk-transition-active");
      }
    }
  };

  function Ne(t, e) {
    var i = Ft("<" + t + ">");
    return k(i, e), i;
  }

  var Ea = {
    install: _a,
    props: {
      toggle: String
    },
    data: {
      toggle: "a"
    },
    computed: {
      toggles: {
        get: function get(t, e) {
          var i = t.toggle;
          return M(i, e);
        },
        watch: function watch() {
          this.hide();
        }
      }
    },
    disconnected: function disconnected() {
      this.hide();
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(t.current);
      }
    }],
    methods: {
      show: function show(t) {
        var _this60 = this;

        var e = ls(this.toggles.map(_n), "source");

        if (Jt(t)) {
          var _n5 = _n(t),
              i = _n5.source;

          t = xt(e, function (s) {
            var n = s.source;
            return i === n;
          });
        }

        return this.panel = this.panel || this.$create("lightboxPanel", _objectSpread(_objectSpread({}, this.$props), {}, {
          items: e
        })), T(this.panel.$el, "hidden", function () {
          return _this60.panel = !1;
        }), this.panel.show(t);
      },
      hide: function hide() {
        var t;
        return (t = this.panel) == null ? void 0 : t.hide();
      }
    }
  };

  function _a(t, e) {
    t.lightboxPanel || t.component("lightboxPanel", En), yt(e.props, t.component("lightboxPanel").options.props);
  }

  function _n(t) {
    var e = {};

    for (var _i10 = 0, _arr6 = ["href", "caption", "type", "poster", "alt", "attrs"]; _i10 < _arr6.length; _i10++) {
      var i = _arr6[_i10];
      e[i === "href" ? "source" : i] = rt(t, i);
    }

    return e.attrs = Pe(e.attrs), e;
  }

  var Oa = {
    mixins: [he],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message"
    },
    install: Ma,
    computed: {
      marginProp: function marginProp(t) {
        var e = t.pos;
        return "margin" + (lt(e, "top") ? "Top" : "Bottom");
      },
      startProps: function startProps() {
        return _defineProperty({
          opacity: 0
        }, this.marginProp, -this.$el.offsetHeight);
      }
    },
    created: function created() {
      var t = m("." + this.clsContainer + "-" + this.pos, this.container) || q(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
      this.$mount(q(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
    },
    connected: function connected() {
      var _this61 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var t;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                t = y(u(_this61.$el, _this61.marginProp));
                _context12.next = 3;
                return C.start(u(_this61.$el, _this61.startProps), _defineProperty({
                  opacity: 1
                }, _this61.marginProp, t));

              case 3:
                _this61.timeout && (_this61.timer = setTimeout(_this61.close, _this61.timeout));

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    events: (_events = {
      click: function click(t) {
        ot(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }
    }, _defineProperty(_events, jt, function () {
      this.timer && clearTimeout(this.timer);
    }), _defineProperty(_events, re, function () {
      this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    }), _events),
    methods: {
      close: function close(t) {
        var _this62 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
          var e;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  e = function e(i) {
                    var s = P(i);
                    p(i, "close", [_this62]), ht(i), s != null && s.hasChildNodes() || ht(s);
                  };

                  _this62.timer && clearTimeout(_this62.timer);
                  _context13.t0 = t;

                  if (_context13.t0) {
                    _context13.next = 6;
                    break;
                  }

                  _context13.next = 6;
                  return C.start(_this62.$el, _this62.startProps);

                case 6:
                  e(_this62.$el);

                case 7:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }))();
      }
    }
  };

  function Ma(t) {
    t.notification.closeAll = function (e, i) {
      Tt(document.body, function (s) {
        var n = t.getComponent(s, "notification");
        n && (!e || e === n.group) && n.close(i);
      });
    };
  }

  var di = {
    x: fi,
    y: fi,
    rotate: fi,
    scale: fi,
    color: ss,
    backgroundColor: ss,
    borderColor: ss,
    blur: Vt,
    hue: Vt,
    fopacity: Vt,
    grayscale: Vt,
    invert: Vt,
    saturate: Vt,
    sepia: Vt,
    opacity: Ba,
    stroke: Da,
    bgx: Nn,
    bgy: Nn
  },
      On = Object.keys;
  var Mn = {
    mixins: [hi],
    props: Hn(On(di), "list"),
    data: Hn(On(di), void 0),
    computed: {
      props: function props(t, e) {
        var i = {};

        for (var n in t) {
          n in di && !Y(t[n]) && (i[n] = t[n].slice());
        }

        var s = {};

        for (var _n6 in i) {
          s[_n6] = di[_n6](_n6, e, i[_n6], i);
        }

        return s;
      }
    },
    events: {
      load: function load() {
        this.$emit();
      }
    },
    methods: {
      reset: function reset() {
        for (var t in this.getCss(0)) {
          u(this.$el, t, "");
        }
      },
      getCss: function getCss(t) {
        var e = {
          transform: "",
          filter: ""
        };

        for (var i in this.props) {
          this.props[i](e, t);
        }

        return e;
      }
    }
  };

  function fi(t, e, i) {
    var s = gi(i) || {
      x: "px",
      y: "px",
      rotate: "deg"
    }[t] || "",
        n;
    return t === "x" || t === "y" ? (t = "translate" + bt(t), n = function n(r) {
      return y(y(r).toFixed(s === "px" ? 0 : 6));
    }) : t === "scale" && (s = "", n = function n(r) {
      return gi([r]) ? J(r, "width", e, !0) / e.offsetWidth : r;
    }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ue(i, n), function (r, o) {
      r.transform += " " + t + "(" + Be(i, o) + s + ")";
    };
  }

  function ss(t, e, i) {
    return i.length === 1 && i.unshift(De(e, t, "")), i = ue(i, function (s) {
      return Na(e, s);
    }), function (s, n) {
      var _zn = zn(i, n),
          _zn2 = _slicedToArray(_zn, 3),
          r = _zn2[0],
          o = _zn2[1],
          a = _zn2[2],
          l = r.map(function (h, c) {
        return h += a * (o[c] - h), c === 3 ? y(h) : parseInt(h, 10);
      }).join(",");

      s[t] = "rgba(" + l + ")";
    };
  }

  function Na(t, e) {
    return De(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(y);
  }

  function Vt(t, e, i) {
    i.length === 1 && i.unshift(0);
    var s = gi(i) || {
      blur: "px",
      hue: "deg"
    }[t] || "%";
    return t = {
      fopacity: "opacity",
      hue: "hue-rotate"
    }[t] || t, i = ue(i), function (n, r) {
      var o = Be(i, r);
      n.filter += " " + t + "(" + (o + s) + ")";
    };
  }

  function Ba(t, e, i) {
    return i.length === 1 && i.unshift(De(e, t, "")), i = ue(i), function (s, n) {
      s[t] = Be(i, n);
    };
  }

  function Da(t, e, i) {
    i.length === 1 && i.unshift(0);
    var s = gi(i),
        n = sn(e);
    return i = ue(i.reverse(), function (r) {
      return r = y(r), s === "%" ? r * n / 100 : r;
    }), i.some(function (r) {
      var _r6 = _slicedToArray(r, 1),
          o = _r6[0];

      return o;
    }) ? (u(e, "strokeDasharray", n), function (r, o) {
      r.strokeDashoffset = Be(i, o);
    }) : A;
  }

  function Nn(t, e, i, s) {
    i.length === 1 && i.unshift(0);
    var n = t === "bgy" ? "height" : "width";
    s[t] = ue(i, function (a) {
      return J(a, n, e);
    });
    var r = ["bgx", "bgy"].filter(function (a) {
      return a in s;
    });
    if (r.length === 2 && t === "bgx") return A;
    if (De(e, "backgroundSize", "") === "cover") return za(t, e, i, s);
    var o = {};

    var _iterator45 = _createForOfIteratorHelper(r),
        _step45;

    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var a = _step45.value;
        o[a] = Bn(e, a);
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }

    return Dn(r, o, s);
  }

  function za(t, e, i, s) {
    var n = Ha(e);
    if (!n.width) return A;
    var r = {
      width: e.offsetWidth,
      height: e.offsetHeight
    },
        o = ["bgx", "bgy"].filter(function (c) {
      return c in s;
    }),
        a = {};

    var _iterator46 = _createForOfIteratorHelper(o),
        _step46;

    try {
      for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
        var c = _step46.value;

        var d = s[c].map(function (Z) {
          var _Z = _slicedToArray(Z, 1),
              X = _Z[0];

          return X;
        }),
            f = Math.min.apply(Math, _toConsumableArray(d)),
            v = Math.max.apply(Math, _toConsumableArray(d)),
            _ = d.indexOf(f) < d.indexOf(v),
            b = v - f;

        a[c] = (_ ? -b : 0) - (_ ? f : v) + "px", r[c === "bgy" ? "height" : "width"] += b;
      }
    } catch (err) {
      _iterator46.e(err);
    } finally {
      _iterator46.f();
    }

    var l = We.cover(n, r);

    var _iterator47 = _createForOfIteratorHelper(o),
        _step47;

    try {
      for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
        var _c2 = _step47.value;

        var _d2 = _c2 === "bgy" ? "height" : "width",
            _f3 = l[_d2] - r[_d2];

        a[_c2] = "max(" + Bn(e, _c2) + ",-" + _f3 + "px) + " + a[_c2];
      }
    } catch (err) {
      _iterator47.e(err);
    } finally {
      _iterator47.f();
    }

    var h = Dn(o, a, s);
    return function (c, d) {
      h(c, d), c.backgroundSize = l.width + "px " + l.height + "px", c.backgroundRepeat = "no-repeat";
    };
  }

  function Bn(t, e) {
    return De(t, "background-position-" + e.substr(-1), "");
  }

  function Dn(t, e, i) {
    return function (s, n) {
      var _iterator48 = _createForOfIteratorHelper(t),
          _step48;

      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var r = _step48.value;
          var o = Be(i[r], n);
          s["background-position-" + r.substr(-1)] = "calc(" + e[r] + " + " + o + "px)";
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }
    };
  }

  var pi = {};

  function Ha(t) {
    var e = u(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
    if (pi[e]) return pi[e];
    var i = new Image();
    return e && (i.src = e, !i.naturalWidth) ? (i.onload = function () {
      pi[e] = ns(i), p(t, Dt("load", !1));
    }, ns(i)) : pi[e] = ns(i);
  }

  function ns(t) {
    return {
      width: t.naturalWidth,
      height: t.naturalHeight
    };
  }

  function ue(t, e) {
    e === void 0 && (e = y);
    var i = [],
        s = t.length;
    var n = 0;

    for (var r = 0; r < s; r++) {
      var _ref13 = O(t[r]) ? t[r].trim().split(" ") : [t[r]],
          _ref14 = _slicedToArray(_ref13, 2),
          o = _ref14[0],
          a = _ref14[1];

      if (o = e(o), a = a ? y(a) / 100 : null, r === 0 ? a === null ? a = 0 : a && i.push([o, 0]) : r === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([o, a]), a = 1)), i.push([o, a]), a === null) n++;else if (n) {
        var l = i[r - n - 1][1],
            h = (a - l) / (n + 1);

        for (var c = n; c > 0; c--) {
          i[r - c][1] = l + h * (n - c + 1);
        }

        n = 0;
      }
    }

    return i;
  }

  function zn(t, e) {
    var i = xt(t.slice(1), function (s) {
      var _s4 = _slicedToArray(s, 2),
          n = _s4[1];

      return e <= n;
    }) + 1;
    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
  }

  function Be(t, e) {
    var _zn3 = zn(t, e),
        _zn4 = _slicedToArray(_zn3, 3),
        i = _zn4[0],
        s = _zn4[1],
        n = _zn4[2];

    return Kt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
  }

  var Fa = /^-?\d+(\S*)/;

  function gi(t, e) {
    var _iterator49 = _createForOfIteratorHelper(t),
        _step49;

    try {
      for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
        var i = _step49.value;
        var s = i.match == null ? void 0 : i.match(Fa);
        if (s) return s[1];
      }
    } catch (err) {
      _iterator49.e(err);
    } finally {
      _iterator49.f();
    }

    return e;
  }

  function De(t, e, i) {
    var s = t.style[e],
        n = u(u(t, e, i), e);
    return t.style[e] = s, n;
  }

  function Hn(t, e) {
    return t.reduce(function (i, s) {
      return i[s] = e, i;
    }, {});
  }

  var La = {
    mixins: [Mn, vt, _e],
    props: {
      target: String,
      viewport: Number,
      easing: Number,
      start: String,
      end: String
    },
    data: {
      target: !1,
      viewport: 1,
      easing: 1,
      start: 0,
      end: 0
    },
    computed: {
      target: function target(t, e) {
        var i = t.target;
        return Fn(i && kt(i, e) || e);
      },
      start: function start(t) {
        var e = t.start;
        return J(e, "height", this.target, !0);
      },
      end: function end(t) {
        var e = t.end,
            i = t.viewport;
        return J(e || (i = (1 - i) * 100) && i + "vh+" + i + "%", "height", this.target, !0);
      }
    },
    update: {
      read: function read(t, e) {
        var i = t.percent;
        if (e.has("scroll") || (i = !1), !this.matchMedia) return;
        var s = i;
        return i = Wa(Yi(this.target, this.start, this.end), this.easing), {
          percent: i,
          style: s === i ? !1 : this.getCss(i)
        };
      },
      write: function write(t) {
        var e = t.style;

        if (!this.matchMedia) {
          this.reset();
          return;
        }

        e && u(this.$el, e);
      },
      events: ["scroll", "resize"]
    }
  };

  function Wa(t, e) {
    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
  }

  function Fn(t) {
    return t ? "offsetTop" in t ? t : Fn(P(t)) : document.documentElement;
  }

  var Ln = {
    update: {
      write: function write() {
        if (this.stack.length || this.dragging) return;
        var t = this.getValidIndex(this.index);
        (!~this.prevIndex || this.index !== t) && this.show(t);
      },
      events: ["resize"]
    }
  },
      Wn = {
    mixins: [Ee],
    connected: function connected() {
      this.lazyload(this.slides, this.getAdjacentSlides);
    }
  };

  function ja(t, e, i, s) {
    var n = s.center,
        r = s.easing,
        o = s.list;
    var a = new je(),
        l = t ? ze(t, o, n) : ze(e, o, n) + $(e).width * i,
        h = e ? ze(e, o, n) : l + $(t).width * i * (K ? -1 : 1);
    return {
      dir: i,
      show: function show(c, d, f) {
        d === void 0 && (d = 0);
        var v = f ? "linear" : r;
        return c -= Math.round(c * U(d, -1, 1)), this.translate(d), d = t ? d : U(d, 0, 1), rs(this.getItemIn(), "itemin", {
          percent: d,
          duration: c,
          timing: v,
          dir: i
        }), t && rs(this.getItemIn(!0), "itemout", {
          percent: 1 - d,
          duration: c,
          timing: v,
          dir: i
        }), C.start(o, {
          transform: F(-h * (K ? -1 : 1), "px")
        }, c, v).then(a.resolve, A), a.promise;
      },
      cancel: function cancel() {
        C.cancel(o);
      },
      reset: function reset() {
        u(o, "transform", "");
      },
      forward: function forward(c, d) {
        return d === void 0 && (d = this.percent()), C.cancel(o), this.show(c, d, !0);
      },
      translate: function translate(c) {
        var d = this.getDistance() * i * (K ? -1 : 1);
        u(o, "transform", F(U(-h + (d - d * c), -mi(o), $(o).width) * (K ? -1 : 1), "px"));

        var f = this.getActives(),
            v = this.getItemIn(),
            _ = this.getItemIn(!0);

        c = t ? U(c, -1, 1) : 0;

        var _iterator50 = _createForOfIteratorHelper(N(o)),
            _step50;

        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
            var b = _step50.value;
            var Z = g(f, b),
                X = b === v,
                V = b === _,
                at = X || !V && (Z || i * (K ? -1 : 1) === -1 ^ vi(b, o) > vi(t || e));
            rs(b, "itemtranslate" + (at ? "in" : "out"), {
              dir: i,
              percent: V ? 1 - c : X ? c : Z ? 1 : 0
            });
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }
      },
      percent: function percent() {
        return Math.abs((u(o, "transform").split(",")[4] * (K ? -1 : 1) + l) / (h - l));
      },
      getDistance: function getDistance() {
        return Math.abs(h - l);
      },
      getItemIn: function getItemIn(c) {
        c === void 0 && (c = !1);
        var d = this.getActives(),
            f = Rn(o, ze(e || t, o, n));

        if (c) {
          var v = d;
          d = f, f = v;
        }

        return f[xt(f, function (v) {
          return !g(d, v);
        })];
      },
      getActives: function getActives() {
        return Rn(o, ze(t || e, o, n));
      }
    };
  }

  function ze(t, e, i) {
    var s = vi(t, e);
    return i ? s - Ra(t, e) : Math.min(s, jn(e));
  }

  function jn(t) {
    return Math.max(0, mi(t) - $(t).width);
  }

  function mi(t) {
    return N(t).reduce(function (e, i) {
      return $(i).width + e;
    }, 0);
  }

  function Ra(t, e) {
    return $(e).width / 2 - $(t).width / 2;
  }

  function vi(t, e) {
    return t && (Ve(t).left + (K ? $(t).width - $(e).width : 0)) * (K ? -1 : 1) || 0;
  }

  function Rn(t, e) {
    e -= 1;
    var i = $(t).width,
        s = e + i + 2;
    return N(t).filter(function (n) {
      var r = vi(n, t),
          o = r + Math.min($(n).width, i);
      return r >= e && o <= s;
    });
  }

  function rs(t, e, i) {
    p(t, Dt(e, !1, !1, i));
  }

  var qa = {
    mixins: [et, In, Ln, Wn],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: ja
    },
    computed: {
      avgWidth: function avgWidth() {
        return mi(this.list) / this.length;
      },
      finite: function finite(t) {
        var e = t.finite;
        return e || Math.ceil(mi(this.list)) < Math.trunc($(this.list).width + Va(this.list) + this.center);
      },
      maxIndex: function maxIndex() {
        if (!this.finite || this.center && !this.sets) return this.length - 1;
        if (this.center) return we(this.sets);
        var t = 0;
        var e = jn(this.list),
            i = xt(this.slides, function (s) {
          if (t >= e) return !0;
          t += $(s).width;
        });
        return ~i ? i : this.length - 1;
      },
      sets: function sets(t) {
        var e = t.sets;
        if (!e) return;
        var i = 0;
        var s = [],
            n = $(this.list).width;

        for (var r = 0; r < this.slides.length; r++) {
          var o = $(this.slides[r]).width;
          i + o > n && (i = 0), this.center ? i < n / 2 && i + o + $(this.slides[+r + 1]).width / 2 > n / 2 && (s.push(+r), i = n / 2 - o / 2) : i === 0 && s.push(Math.min(+r, this.maxIndex)), i += o;
        }

        if (s.length) return s;
      },
      transitionOptions: function transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function connected() {
      W(this.$el, this.clsContainer, !m("." + this.clsContainer, this.$el));
    },
    update: {
      write: function write() {
        var _iterator51 = _createForOfIteratorHelper(this.navItems),
            _step51;

        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var t = _step51.value;
            var e = Et(rt(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !g(this.sets, e));
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }

        this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
      },
      events: ["resize"]
    },
    events: {
      beforeitemshow: function beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !g(this.sets, this.index) && (this.index = this.getValidIndex());
        var e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && e > 1) {
          for (var s = 0; s < e; s++) {
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          }

          t.preventDefault();
          return;
        }

        var i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
        this.duration = An(this.avgWidth / this.velocity) * ($(this.slides[i]).width / this.avgWidth), this.reorder();
      },
      itemshow: function itemshow() {
        ~this.prevIndex && w(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown: function itemshown() {
        this.updateActiveClasses();
      }
    },
    methods: {
      reorder: function reorder() {
        var _this63 = this;

        if (this.finite) {
          u(this.slides, "order", "");
          return;
        }

        var t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach(function (n, r) {
          return u(n, "order", _this63.dir > 0 && r < t ? 1 : _this63.dir < 0 && r >= _this63.index ? -1 : "");
        }), !this.center) return;
        var e = this.slides[t];
        var i = $(this.list).width / 2 - $(e).width / 2,
            s = 0;

        for (; i > 0;) {
          var n = this.getIndex(--s + t, t),
              r = this.slides[n];
          u(r, "order", n > t ? -2 : -1), i -= $(r).width;
        }
      },
      updateActiveClasses: function updateActiveClasses() {
        var t = this._getTransitioner(this.index).getActives(),
            e = [this.clsActive, (!this.sets || g(this.sets, y(this.index))) && this.clsActivated || ""];

        var _iterator52 = _createForOfIteratorHelper(this.slides),
            _step52;

        try {
          for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
            var i = _step52.value;
            W(i, e, g(t, i));
          }
        } catch (err) {
          _iterator52.e(err);
        } finally {
          _iterator52.f();
        }
      },
      getValidIndex: function getValidIndex(t, e) {
        if (t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
        var i;

        do {
          if (g(this.sets, t)) return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);

        return t;
      },
      getAdjacentSlides: function getAdjacentSlides() {
        var _$ = $(this.list),
            t = _$.width,
            e = -t,
            i = t * 2,
            s = $(this.slides[this.index]).width,
            n = this.center ? t / 2 - s / 2 : 0,
            r = new Set();

        for (var _i11 = 0, _arr7 = [-1, 1]; _i11 < _arr7.length; _i11++) {
          var o = _arr7[_i11];
          var a = n + (o > 0 ? s : 0),
              l = 0;

          do {
            var h = this.slides[this.getIndex(this.index + o + l++ * o)];
            a += $(h).width * o, r.add(h);
          } while (this.slides.length > l && a > e && a < i);
        }

        return Array.from(r);
      }
    }
  };

  function Va(t) {
    return Math.max.apply(Math, [0].concat(_toConsumableArray(N(t).map(function (e) {
      return $(e).width;
    }))));
  }

  var qn = {
    mixins: [Mn],
    data: {
      selItem: "!li"
    },
    beforeConnect: function beforeConnect() {
      this.item = kt(this.selItem, this.$el);
    },
    disconnected: function disconnected() {
      this.item = null;
    },
    events: [{
      name: "itemin itemout",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler(t) {
        var _this64 = this;

        var e = t.type,
            _t$detail = t.detail,
            i = _t$detail.percent,
            s = _t$detail.duration,
            n = _t$detail.timing,
            r = _t$detail.dir;
        B.read(function () {
          var o = _this64.getCss(Yn(e, r, i)),
              a = _this64.getCss(Vn(e) ? .5 : r > 0 ? 1 : 0);

          B.write(function () {
            u(_this64.$el, o), C.start(_this64.$el, a, s, n)["catch"](A);
          });
        });
      }
    }, {
      name: "transitioncanceled transitionend",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        C.cancel(this.$el);
      }
    }, {
      name: "itemtranslatein itemtranslateout",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler(t) {
        var _this65 = this;

        var e = t.type,
            _t$detail2 = t.detail,
            i = _t$detail2.percent,
            s = _t$detail2.dir;
        B.read(function () {
          var n = _this65.getCss(Yn(e, s, i));

          B.write(function () {
            return u(_this65.$el, n);
          });
        });
      }
    }]
  };

  function Vn(t) {
    return Gt(t, "in");
  }

  function Yn(t, e, i) {
    return i /= 2, Vn(t) ^ e < 0 ? i : 1 - i;
  }

  var Ya = _objectSpread(_objectSpread({}, is), {}, {
    fade: {
      show: function show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(t) {
        return 1 - u(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: ce(1 + .5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(t) {
        return 1 - u(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          transform: ce(1 + .5 * t),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function show(t) {
        return t < 0 ? [{
          transform: F(30),
          zIndex: -1
        }, {
          transform: F(),
          zIndex: 0
        }] : [{
          transform: F(-100),
          zIndex: 0
        }, {
          transform: F(),
          zIndex: -1
        }];
      },
      percent: function percent(t, e, i) {
        return i < 0 ? 1 - Me(e) : Me(t);
      },
      translate: function translate(t, e) {
        return e < 0 ? [{
          transform: F(30 * t),
          zIndex: -1
        }, {
          transform: F(-100 * (1 - t)),
          zIndex: 0
        }] : [{
          transform: F(-t * 100),
          zIndex: 0
        }, {
          transform: F(30 * (1 - t)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function show(t) {
        return t < 0 ? [{
          transform: F(100),
          zIndex: 0
        }, {
          transform: F(),
          zIndex: -1
        }] : [{
          transform: F(-30),
          zIndex: -1
        }, {
          transform: F(),
          zIndex: 0
        }];
      },
      percent: function percent(t, e, i) {
        return i > 0 ? 1 - Me(e) : Me(t);
      },
      translate: function translate(t, e) {
        return e < 0 ? [{
          transform: F(t * 100),
          zIndex: 0
        }, {
          transform: F(-30 * (1 - t)),
          zIndex: -1
        }] : [{
          transform: F(-30 * t),
          zIndex: -1
        }, {
          transform: F(100 * (1 - t)),
          zIndex: 0
        }];
      }
    }
  }),
      Ga = {
    mixins: [et, Pn, Ln, Wn],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".uk-slideshow-items",
      attrItem: "uk-slideshow-item",
      selNav: ".uk-slideshow-nav",
      Animations: Ya
    },
    update: {
      read: function read() {
        if (!this.list) return !1;

        var _this$ratio$split$map = this.ratio.split(":").map(Number),
            _this$ratio$split$map2 = _slicedToArray(_this$ratio$split$map, 2),
            t = _this$ratio$split$map2[0],
            e = _this$ratio$split$map2[1];

        return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
          height: e - ie(this.list, "height", "content-box")
        };
      },
      write: function write(t) {
        var e = t.height;
        e > 0 && u(this.list, "minHeight", e);
      },
      events: ["resize"]
    },
    methods: {
      getAdjacentSlides: function getAdjacentSlides() {
        var _this66 = this;

        return [1, -1].map(function (t) {
          return _this66.slides[_this66.getIndex(_this66.index + t)];
        });
      }
    }
  },
      Xa = {
    mixins: [et, kn],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: !1,
      threshold: 5,
      clsItem: "uk-sortable-item",
      clsPlaceholder: "uk-sortable-placeholder",
      clsDrag: "uk-sortable-drag",
      clsDragState: "uk-drag",
      clsBase: "uk-sortable",
      clsNoDrag: "uk-sortable-nodrag",
      clsEmpty: "uk-sortable-empty",
      clsCustom: "",
      handle: !1,
      pos: {}
    },
    created: function created() {
      var _this67 = this;

      var _loop8 = function _loop8() {
        var t = _arr8[_i12];
        var e = _this67[t];

        _this67[t] = function (i) {
          yt(_this67.pos, ee(i)), e(i);
        };
      };

      for (var _i12 = 0, _arr8 = ["init", "start", "move", "end"]; _i12 < _arr8.length; _i12++) {
        _loop8();
      }
    },
    events: {
      name: ct,
      passive: !1,
      handler: "init"
    },
    computed: {
      target: function target() {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function items() {
        return N(this.target);
      },
      isEmpty: {
        get: function get() {
          return me(this.items);
        },
        watch: function watch(t) {
          W(this.target, this.clsEmpty, t);
        },
        immediate: !0
      },
      handles: {
        get: function get(t, e) {
          var i = t.handle;
          return i ? M(i, e) : this.items;
        },
        watch: function watch(t, e) {
          u(e, {
            touchAction: "",
            userSelect: ""
          }), u(t, {
            touchAction: Wt ? "none" : "",
            userSelect: "none"
          });
        },
        immediate: !0
      }
    },
    update: {
      write: function write(t) {
        if (!this.drag || !P(this.placeholder)) return;
        var _this$pos2 = this.pos,
            e = _this$pos2.x,
            i = _this$pos2.y,
            _this$origin = this.origin,
            s = _this$origin.offsetTop,
            n = _this$origin.offsetLeft,
            r = this.placeholder;
        u(this.drag, {
          top: i - s,
          left: e - n
        });
        var o = this.getSortable(document.elementFromPoint(e, i));
        if (!o) return;
        var a = o.items;
        if (a.some(C.inProgress)) return;
        var l = Qa(a, {
          x: e,
          y: i
        });
        if (a.length && (!l || l === r)) return;
        var h = this.getSortable(r),
            c = Ua(o.target, l, r, e, i, o === h && t.moved !== l);
        c !== !1 && (c && r === c || (o !== h ? (h.remove(r), t.moved = l) : delete t.moved, o.insert(r, c), this.touched.add(o)));
      },
      events: ["move"]
    },
    methods: {
      init: function init(t) {
        var e = t.target,
            i = t.button,
            s = t.defaultPrevented,
            _this$items$filter = this.items.filter(function (r) {
          return z(e, r);
        }),
            _this$items$filter2 = _slicedToArray(_this$items$filter, 1),
            n = _this$items$filter2[0];

        !n || s || i > 0 || Ii(e) || z(e, "." + this.clsNoDrag) || this.handle && !z(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = n, this.origin = _objectSpread({
          target: e,
          index: Ut(n)
        }, this.pos), T(document, ne, this.move), T(document, pt, this.end), this.threshold || this.start(t));
      },
      start: function start(t) {
        this.drag = Za(this.$container, this.placeholder);

        var _this$placeholder$get = this.placeholder.getBoundingClientRect(),
            e = _this$placeholder$get.left,
            i = _this$placeholder$get.top;

        yt(this.origin, {
          offsetLeft: this.pos.x - e,
          offsetTop: this.pos.y - i
        }), w(this.drag, this.clsDrag, this.clsCustom), w(this.placeholder, this.clsPlaceholder), w(this.items, this.clsItem), w(document.documentElement, this.clsDragState), p(this.$el, "start", [this, this.placeholder]), Ja(this.pos), this.move(t);
      },
      move: function move(t) {
        this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
      },
      end: function end() {
        if (te(document, ne, this.move), te(document, pt, this.end), !this.drag) return;
        Ka();
        var t = this.getSortable(this.placeholder);
        this === t ? this.origin.index !== Ut(this.placeholder) && p(this.$el, "moved", [this, this.placeholder]) : (p(t.$el, "added", [t, this.placeholder]), p(this.$el, "removed", [this, this.placeholder])), p(this.$el, "stop", [this, this.placeholder]), ht(this.drag), this.drag = null;

        var _iterator53 = _createForOfIteratorHelper(this.touched),
            _step53;

        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
            var _step53$value = _step53.value,
                e = _step53$value.clsPlaceholder,
                i = _step53$value.clsItem;

            var _iterator54 = _createForOfIteratorHelper(this.touched),
                _step54;

            try {
              for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                var s = _step54.value;
                E(s.items, e, i);
              }
            } catch (err) {
              _iterator54.e(err);
            } finally {
              _iterator54.f();
            }
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }

        this.touched = null, E(document.documentElement, this.clsDragState);
      },
      insert: function insert(t, e) {
        var _this68 = this;

        w(this.items, this.clsItem);

        var i = function i() {
          return e ? Hi(e, t) : q(_this68.target, t);
        };

        this.animate(i);
      },
      remove: function remove(t) {
        !z(t, this.target) || this.animate(function () {
          return ht(t);
        });
      },
      getSortable: function getSortable(t) {
        do {
          var e = this.$getComponent(t, "sortable");
          if (e && (e === this || this.group !== !1 && e.group === this.group)) return e;
        } while (t = P(t));
      }
    }
  };

  var Gn;

  function Ja(t) {
    var e = Date.now();
    Gn = setInterval(function () {
      var i = t.x,
          s = t.y;
      s += Rt(window);
      var n = (Date.now() - e) * .3;
      e = Date.now(), Ct(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some(function (r) {
        var o = r.scrollTop,
            a = r.scrollHeight;

        var _gt3 = gt(r),
            l = _gt3.top,
            h = _gt3.bottom,
            c = _gt3.height;

        if (l < s && l + 35 > s) o -= n;else if (h > s && h - 35 < s) o += n;else return;
        if (o > 0 && o < a - c) return Rt(r, o), !0;
      });
    }, 15);
  }

  function Ka() {
    clearInterval(Gn);
  }

  function Za(t, e) {
    var i = q(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
    return u(i, "margin", "0", "important"), u(i, {
      boxSizing: "border-box",
      width: e.offsetWidth,
      height: e.offsetHeight,
      padding: u(e, "padding")
    }), H(i.firstElementChild, H(e.firstElementChild)), i;
  }

  function Qa(t, e) {
    return t[xt(t, function (i) {
      return Le(e, i.getBoundingClientRect());
    })];
  }

  function Ua(t, e, i, s, n, r) {
    if (!N(t).length) return;
    var o = e.getBoundingClientRect();
    if (!r) return tl(t, i) || n < o.top + o.height / 2 ? e : e.nextElementSibling;
    var a = i.getBoundingClientRect(),
        l = Xn([o.top, o.bottom], [a.top, a.bottom]),
        h = l ? s : n,
        c = l ? "width" : "height",
        d = l ? "left" : "top",
        f = l ? "right" : "bottom",
        v = a[c] < o[c] ? o[c] - a[c] : 0;
    return a[d] < o[d] ? v && h < o[d] + v ? !1 : e.nextElementSibling : v && h > o[f] - v ? !1 : e;
  }

  function tl(t, e) {
    var i = N(t).length === 1;
    i && q(t, e);
    var s = N(t),
        n = s.some(function (r, o) {
      var a = r.getBoundingClientRect();
      return s.slice(o + 1).some(function (l) {
        var h = l.getBoundingClientRect();
        return !Xn([a.left, a.right], [h.left, h.right]);
      });
    });
    return i && ht(e), n;
  }

  function Xn(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }

  var el = {
    mixins: [he, It, Xs],
    args: "title",
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active"
    },
    beforeConnect: function beforeConnect() {
      this._hasTitle = Bt(this.$el, "title"), k(this.$el, "title", ""), this.updateAria(!1), il(this.$el);
    },
    disconnected: function disconnected() {
      this.hide(), k(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show: function show() {
        var _this69 = this;

        this.isToggled(this.tooltip || null) || !this.title || (this._unbind = L(document, "show keydown " + ct, this.hide, !1, function (t) {
          return t.type === ct && !z(t.target, _this69.$el) || t.type === "keydown" && t.keyCode === 27 || t.type === "show" && t.detail[0] !== _this69 && t.detail[0].$name === _this69.$name;
        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
      },
      hide: function hide() {
        var _this70 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.t0 = D(_this70.$el, "input:focus");

                  if (_context14.t0) {
                    _context14.next = 10;
                    break;
                  }

                  clearTimeout(_this70.showTimer);
                  _context14.t1 = _this70.isToggled(_this70.tooltip || null);

                  if (!_context14.t1) {
                    _context14.next = 10;
                    break;
                  }

                  _context14.next = 7;
                  return _this70.toggleElement(_this70.tooltip, !1, !1);

                case 7:
                  ht(_this70.tooltip);
                  _this70.tooltip = null;

                  _this70._unbind();

                case 10:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }))();
      },
      _show: function _show() {
        var _this71 = this;

        this.tooltip = q(this.container, '<div class="uk-' + this.$options.name + '"> <div class="uk-' + this.$options.name + '-inner">' + this.title + "</div> </div>"), T(this.tooltip, "toggled", function (t, e) {
          if (_this71.updateAria(e), !e) return;

          _this71.positionAt(_this71.tooltip, _this71.$el);

          var _sl = sl(_this71.tooltip, _this71.$el, _this71.pos),
              _sl2 = _slicedToArray(_sl, 2),
              i = _sl2[0],
              s = _sl2[1];

          _this71.origin = _this71.axis === "y" ? Ye(i) + "-" + s : s + "-" + Ye(i);
        }), this.toggleElement(this.tooltip, !0);
      },
      updateAria: function updateAria(t) {
        k(this.$el, "aria-expanded", t);
      }
    },
    events: (_events2 = {
      focus: "show",
      blur: "hide"
    }, _defineProperty(_events2, jt + " " + re, function (t) {
      St(t) || this[t.type === jt ? "show" : "hide"]();
    }), _defineProperty(_events2, ct, function (t) {
      St(t) && this.show();
    }), _events2)
  };

  function il(t) {
    qe(t) || k(t, "tabindex", "0");
  }

  function sl(t, e, i) {
    var _i13 = _slicedToArray(i, 2),
        s = _i13[0],
        n = _i13[1];

    var r = I(t),
        o = I(e),
        a = [["left", "right"], ["top", "bottom"]];

    for (var _i14 = 0, _a3 = a; _i14 < _a3.length; _i14++) {
      var h = _a3[_i14];

      if (r[h[0]] >= o[h[1]]) {
        s = h[1];
        break;
      }

      if (r[h[1]] <= o[h[0]]) {
        s = h[0];
        break;
      }
    }

    var l = g(a[0], s) ? a[1] : a[0];
    return r[l[0]] === o[l[0]] ? n = l[0] : r[l[1]] === o[l[1]] ? n = l[1] : n = "center", [s, n];
  }

  var nl = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: A,
      beforeAll: A,
      beforeSend: A,
      complete: A,
      completeAll: A,
      error: A,
      fail: A,
      load: A,
      loadEnd: A,
      loadStart: A,
      progress: A
    },
    events: {
      change: function change(t) {
        !D(t.target, 'input[type="file"]') || (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      },
      drop: function drop(t) {
        wi(t);
        var e = t.dataTransfer;
        !(e != null && e.files) || (E(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter: function dragenter(t) {
        wi(t);
      },
      dragover: function dragover(t) {
        wi(t), w(this.$el, this.clsDragover);
      },
      dragleave: function dragleave(t) {
        wi(t), E(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function upload(t) {
        var _this72 = this;

        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
          var _iterator55, _step55, s, e, i;

          return _regeneratorRuntime().wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  if (!(t = bi(t), !t.length)) {
                    _context16.next = 2;
                    break;
                  }

                  return _context16.abrupt("return");

                case 2:
                  p(_this72.$el, "upload", [t]);
                  _iterator55 = _createForOfIteratorHelper(t);
                  _context16.prev = 4;

                  _iterator55.s();

                case 6:
                  if ((_step55 = _iterator55.n()).done) {
                    _context16.next = 19;
                    break;
                  }

                  s = _step55.value;

                  if (!(_this72.maxSize && _this72.maxSize * 1e3 < s.size)) {
                    _context16.next = 11;
                    break;
                  }

                  _this72.fail(_this72.msgInvalidSize.replace("%s", _this72.maxSize));

                  return _context16.abrupt("return");

                case 11:
                  if (!(_this72.allow && !Jn(_this72.allow, s.name))) {
                    _context16.next = 14;
                    break;
                  }

                  _this72.fail(_this72.msgInvalidName.replace("%s", _this72.allow));

                  return _context16.abrupt("return");

                case 14:
                  if (!(_this72.mime && !Jn(_this72.mime, s.type))) {
                    _context16.next = 17;
                    break;
                  }

                  _this72.fail(_this72.msgInvalidMime.replace("%s", _this72.mime));

                  return _context16.abrupt("return");

                case 17:
                  _context16.next = 6;
                  break;

                case 19:
                  _context16.next = 24;
                  break;

                case 21:
                  _context16.prev = 21;
                  _context16.t0 = _context16["catch"](4);

                  _iterator55.e(_context16.t0);

                case 24:
                  _context16.prev = 24;

                  _iterator55.f();

                  return _context16.finish(24);

                case 27:
                  _this72.multiple || (t = t.slice(0, 1)), _this72.beforeAll(_this72, t);
                  e = rl(t, _this72.concurrent), i = /*#__PURE__*/function () {
                    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(s) {
                      var n, r, _r7;

                      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                        while (1) {
                          switch (_context15.prev = _context15.next) {
                            case 0:
                              n = new FormData();
                              s.forEach(function (r) {
                                return n.append(_this72.name, r);
                              });

                              for (r in _this72.params) {
                                n.append(r, _this72.params[r]);
                              }

                              _context15.prev = 3;
                              _context15.next = 6;
                              return ps(_this72.url, {
                                data: n,
                                method: _this72.method,
                                responseType: _this72.type,
                                beforeSend: function beforeSend(o) {
                                  var a = o.xhr;
                                  a.upload && T(a.upload, "progress", _this72.progress);

                                  for (var _i15 = 0, _arr9 = ["loadStart", "load", "loadEnd", "abort"]; _i15 < _arr9.length; _i15++) {
                                    var l = _arr9[_i15];
                                    T(a, l.toLowerCase(), _this72[l]);
                                  }

                                  return _this72.beforeSend(o);
                                }
                              });

                            case 6:
                              _r7 = _context15.sent;

                              _this72.complete(_r7);

                              if (!e.length) {
                                _context15.next = 13;
                                break;
                              }

                              _context15.next = 11;
                              return i(e.shift());

                            case 11:
                              _context15.next = 14;
                              break;

                            case 13:
                              _this72.completeAll(_r7);

                            case 14:
                              _context15.next = 19;
                              break;

                            case 16:
                              _context15.prev = 16;
                              _context15.t0 = _context15["catch"](3);

                              _this72.error(_context15.t0);

                            case 19:
                            case "end":
                              return _context15.stop();
                          }
                        }
                      }, _callee15, null, [[3, 16]]);
                    }));

                    return function i(_x9) {
                      return _ref15.apply(this, arguments);
                    };
                  }();
                  _context16.next = 31;
                  return i(e.shift());

                case 31:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, null, [[4, 21, 24, 27]]);
        }))();
      }
    }
  };

  function Jn(t, e) {
    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
  }

  function rl(t, e) {
    var i = [];

    for (var s = 0; s < t.length; s += e) {
      i.push(t.slice(s, s + e));
    }

    return i;
  }

  function wi(t) {
    t.preventDefault(), t.stopPropagation();
  }

  var ol = Object.freeze({
    __proto__: null,
    Countdown: fa,
    Filter: va,
    Lightbox: Ea,
    LightboxPanel: En,
    Notification: Oa,
    Parallax: La,
    Slider: qa,
    SliderParallax: qn,
    Slideshow: Ga,
    SlideshowParallax: qn,
    Sortable: Xa,
    Tooltip: el,
    Upload: nl
  });
  return $t(ol, function (t, e) {
    return tt.component(e, t);
  }), tt;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/framework/uikit-3.14.3/js/uikit.min.js");
/******/ 	
/******/ })()
;