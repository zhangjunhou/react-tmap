(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-tmap"] = factory(require("react"));
	else
		root["react-tmap"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./src/BaseComponent.js":
/*!******************************!*\
  !*** ./src/BaseComponent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */


var BaseComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  var _super = _createSuper(BaseComponent);

  function BaseComponent() {
    var _this;

    _classCallCheck(this, BaseComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "bindEvent", function (obj, events) {
      var self = _assertThisInitialized(_this);

      if (events.length) {
        events.forEach(function (event) {
          if (Object.prototype.toString.call(event) === '[object Array]' && event[1]) {
            // 绑定一次事件
            var eventName = event[0];
            qq.maps.event.addListenerOnce(obj, eventName, function (mouseEvent) {
              self.props.events && self.props.events[eventName] && self.props.events[eventName].call(self, obj, mouseEvent);
            });
          } else {
            qq.maps.event.addListener(obj, event, function (mouseEvent) {
              self.props.events && self.props.events[event] && self.props.events[event].call(self, obj, mouseEvent);
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindToggleMeghods", function (obj, toggleMethods) {
      for (var key in toggleMethods) {
        if (_this.props[key] !== undefined) {
          if (_this.props[key]) {
            obj[toggleMethods[key][0]]();
          } else {
            obj[toggleMethods[key][1]]();
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOptions", function (opts) {
      var result = {};
      opts.forEach(function (key) {
        if (_this.props[key] !== undefined) {
          result[key] = _this.props[key];
        }
      });
      return result;
    });

    return _this;
  }

  _createClass(BaseComponent, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _Graphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphy */ "./src/Graphy.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */




var Circle = /*#__PURE__*/function (_Graphy) {
  _inherits(Circle, _Graphy);

  var _super = _createSuper(Circle);

  function Circle() {
    var _this;

    _classCallCheck(this, Circle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
      var center = _this.props.center;

      var options = _this.getOptions(_this.options);

      options.center = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pointToLatLng"])(center);
      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "getOverlay", function () {
      var _this$props = _this.props,
          map = _this$props.map,
          visible = _this$props.visible;

      var _options = _this._getOptions();

      if (!map) return;
      if (_this.circle) _this.circle.setMap(null);
      _this.circle = new qq.maps.Circle(_options);
      visible ? _this.circle.setMap(map) : _this.circle.setMap(null);
      return _this.circle;
    });

    return _this;
  }

  _createClass(Circle, [{
    key: "events",
    get: function get() {
      return ['center_changed', 'map_changed', 'radius_changed', 'visible_changed', 'zindex_changed', 'click', 'dblclick', 'rightclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['center', 'clickable', 'cursor', 'fillColor', 'map', 'radius', 'strokeColor', 'strokeDashStyle', 'strokeWeight', 'visible', 'zIndex'];
    }
  }]);

  return Circle;
}(_Graphy__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Circle, "defaultProps", {
  center: {},
  radius: 10,
  visible: true
});

_defineProperty(Circle, "propTypes", {
  center: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
});



/***/ }),

/***/ "./src/Control.js":
/*!************************!*\
  !*** ./src/Control.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Control; });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ "./src/BaseComponent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Control = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Control, _BaseComponent);

  var _super = _createSuper(Control);

  function Control(props) {
    var _this;

    _classCallCheck(this, Control);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      var map = _this.props.map;
      if (!map) return;
      _this.control = _this.getControl();
    });

    _this.controlNode = undefined;
    return _this;
  }

  _createClass(Control, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "getControl",
    value: function getControl() {
      var _this$props = this.props,
          map = _this$props.map,
          position = _this$props.position;
      if (!map || !this.controlNode) return;
      var mapControls = map.controls[position];
      mapControls.push(this.controlNode);
      this.control = this.controlNode;
      this.control.index = mapControls.length;
      return this.control;
    }
  }]);

  return Control;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Control, "propTypes", {
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(_constants__WEBPACK_IMPORTED_MODULE_2__["ControlPosition"])
});



/***/ }),

/***/ "./src/ControlPosition.js":
/*!********************************!*\
  !*** ./src/ControlPosition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global qq */
/* harmony default export */ __webpack_exports__["default"] = ({
  TOP_LEFT: qq.maps.ControlPosition.TOP_LEFT,
  // 相对左上角对齐，向右排列。
  TOP_CENTER: qq.maps.ControlPosition.TOP_CENTER,
  // 相对上方中间位置对齐。
  TOP_RIGHT: qq.maps.ControlPosition.TOP_RIGHT,
  // 相对右上角对齐，向左排列。
  BOTTOM_LEFT: qq.maps.ControlPosition.BOTTOM_LEFT,
  // 相对左下角对齐，向右排列。
  BOTTOM_CENTER: qq.maps.ControlPosition.BOTTOM_CENTER,
  // 相对下方中间位置对齐。
  BOTTOM_RIGHT: qq.maps.ControlPosition.BOTTOM_RIGHT,
  // 相对右下角对齐，向左排列。
  LEFT_TOP: qq.maps.ControlPosition.LEFT_TOP,
  // 相对左上角对齐，向下排列。
  LEFT_CENTER: qq.maps.ControlPosition.LEFT_CENTER,
  // 相对左方中间位置对齐。
  LEFT_BOTTOM: qq.maps.ControlPosition.LEFT_BOTTOM,
  // 相对左下角对齐，向上排列。
  RIGHT_TOP: qq.maps.ControlPosition.RIGHT_TOP,
  // 相对右上角对齐，向下排列。
  RIGHT_CENTER: qq.maps.ControlPosition.RIGHT_CENTER,
  // 相对右方中间位置对齐。
  RIGHT_BOTTOM: qq.maps.ControlPosition.RIGHT_BOTTOM,
  // 相对右下角对齐，向上排列。
  CENTER: qq.maps.ControlPosition.CENTER // 中间位置对齐。

});

/***/ }),

/***/ "./src/Graphy.js":
/*!***********************!*\
  !*** ./src/Graphy.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graphy; });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ "./src/BaseComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Graphy = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Graphy, _BaseComponent);

  var _super = _createSuper(Graphy);

  function Graphy() {
    var _this;

    _classCallCheck(this, Graphy);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      var map = _this.props.map;
      if (!map) return;

      _this.destroy(); // getOverlay 由子类具体实现


      _this.overlay = _this.getOverlay();
      if (_this.overlay) _this.bindEvent(_this.overlay, _this.events);
    });

    _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
      return {};
    });

    return _this;
  }

  _createClass(Graphy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var receiveProps = this.options || [];

      var curOptions = this._getOptions();

      if (!this.overlay) return;
      receiveProps.forEach(function (key) {
        var fnName = "set".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["toPascal"])(key)); // 判断前后属性和 set 方法是否存在，如果存在，则执行对应的更新

        if (_this2.props[key] !== prevProps[key] && !!_this2.overlay[fnName]) {
          _this2.overlay[fnName](curOptions[key]);
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // 将当前覆盖物移出地图
      if (this.overlay) {
        this.overlay.setMap(null);
        this.overlay = null;
      }
    }
  }, {
    key: "getOverlay",
    value: function getOverlay() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Graphy;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/HeatMap.js":
/*!************************!*\
  !*** ./src/HeatMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeatMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq, QQMapPlugin */



var HeatMap = /*#__PURE__*/function (_React$Component) {
  _inherits(HeatMap, _React$Component);

  var _super = _createSuper(HeatMap);

  function HeatMap() {
    var _this;

    _classCallCheck(this, HeatMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initHeatMap", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          heatData = _this$props.heatData,
          map = _this$props.map;
      if (!map) return;
      qq.maps.event.addListenerOnce(map, 'idle', function () {
        _this.heatMap = new QQMapPlugin.HeatmapOverlay(map, options);

        _this.heatMap.setData(heatData);
      });
    });

    return _this;
  }

  _createClass(HeatMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initHeatMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.heatData.data !== this.props.heatData.data && this.heatMap) {
        this.heatMap.setData(this.props.heatData);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return HeatMap;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HeatMap, "defaultProps", {
  options: {
    radius: 1,
    maxOpacity: 0.8,
    useLocalExtrema: true,
    valueField: 'count'
  },
  heatData: {
    max: 100,
    data: []
  }
});

_defineProperty(HeatMap, "propTypes", {
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  heatData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  })
});



/***/ }),

/***/ "./src/Info.js":
/*!*********************!*\
  !*** ./src/Info.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/BaseComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */




var Info = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Info, _BaseComponent);

  var _super = _createSuper(Info);

  function Info() {
    var _this;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initInfo", function () {
      var _this$props = _this.props,
          map = _this$props.map,
          visible = _this$props.visible,
          _this$props$position = _this$props.position,
          lat = _this$props$position.lat,
          lng = _this$props$position.lng;
      var latLng = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pointToLatLng"])({
        lat: lat,
        lng: lng
      });

      var options = _this.getOptions(_this.options);

      options.position = latLng;
      if (!map) return;

      if (!_this.info) {
        _this.info = new qq.maps.InfoWindow(_objectSpread(_objectSpread({}, options), {}, {
          map: map
        }));

        _this.bindEvent(_this.info, _this.events);
      }

      var infoContent = "<div style=\"width: 100%;max-width: 300px;text-align:left;\">".concat(options.content, "</div>");

      _this.info.setPosition(latLng);

      _this.info.setContent(infoContent);

      visible ? _this.info.open() : _this.info.close();
    });

    return _this;
  }

  _createClass(Info, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initInfo();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.initInfo();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "events",
    get: function get() {
      return ['content_changed', 'position_changed', 'zindex_changed', 'domready', 'closeclick'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['content', 'position', 'zIndex', 'visible'];
    }
  }]);

  return Info;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(Info, "defaultProps", {
  visible: false,
  position: {},
  content: '测试'
});

_defineProperty(Info, "propTypes", {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }),
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
});



/***/ }),

/***/ "./src/Marker.js":
/*!***********************!*\
  !*** ./src/Marker.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marker; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _Graphy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graphy */ "./src/Graphy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */




var Marker = /*#__PURE__*/function (_Graphy) {
  _inherits(Marker, _Graphy);

  var _super = _createSuper(Marker);

  function Marker() {
    var _this;

    _classCallCheck(this, Marker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
      var _this$props = _this.props,
          decoration = _this$props.decoration,
          icon = _this$props.icon,
          color = _this$props.color;

      var options = _this.getOptions(_this.options);

      options.position = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["pointToLatLng"])(options.position);

      if (decoration) {
        options.decoration = new qq.maps.MarkerDecoration("<div style=\"color: ".concat(color, "\"><span class=\"content\">").concat(decoration, "</span></div>"), new qq.maps.Point(0, -5));
      }

      if (icon && !(icon instanceof qq.maps.MarkerImage)) {
        options.icon = new qq.maps.MarkerImage(icon);
      }

      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "getOverlay", function () {
      var _this$props2 = _this.props,
          map = _this$props2.map,
          visible = _this$props2.visible;
      if (!map) return null; // 记录副本

      var _options = _this._getOptions();

      if (!_this.marker) {
        _this.marker = new qq.maps.Marker(_options);
      }

      visible ? _this.marker.setMap(map) : _this.marker.setMap(null);
      return _this.marker;
    });

    return _this;
  }

  _createClass(Marker, [{
    key: "events",
    get: function get() {
      return ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'map_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed', 'click', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'dblclick', 'rightclick', 'dragstart', 'dragging', 'dragend', 'moving', 'moveend'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['animation', 'clickable', 'draggable', 'flat', 'cursor', 'icon', 'size', 'shadow', 'shape', 'title', 'visible', 'zIndex', 'map', 'color', 'position', 'rotation', 'autoRotation', 'decoration'];
    }
  }]);

  return Marker;
}(_Graphy__WEBPACK_IMPORTED_MODULE_2__["default"]);

_defineProperty(Marker, "defaultProps", {
  decoration: null,
  visible: true,
  color: '#fff'
});

_defineProperty(Marker, "propTypes", {
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })
});



/***/ }),

/***/ "./src/MarkerList.js":
/*!***************************!*\
  !*** ./src/MarkerList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkerList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marker */ "./src/Marker.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MarkerList = /*#__PURE__*/function (_React$Component) {
  _inherits(MarkerList, _React$Component);

  var _super = _createSuper(MarkerList);

  function MarkerList() {
    _classCallCheck(this, MarkerList);

    return _super.apply(this, arguments);
  }

  _createClass(MarkerList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          showDecoration = _this$props.showDecoration,
          rest = _objectWithoutProperties(_this$props, ["data", "showDecoration"]);

      return data.map(function (item, i) {
        var options = _objectSpread({}, rest);

        options.position = item;

        if (showDecoration) {
          options.decoration = item.decoration ? item.decoration : i + 1;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Marker__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
          key: i
        }, options));
      });
    }
  }]);

  return MarkerList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MarkerList, "defaultProps", {
  data: [],
  animation: _constants__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_DROP"],
  showDecoration: true
});

_defineProperty(MarkerList, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }))
});



/***/ }),

/***/ "./src/Polygon.js":
/*!************************!*\
  !*** ./src/Polygon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _Graphy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graphy */ "./src/Graphy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */




var Polygon = /*#__PURE__*/function (_Graphy) {
  _inherits(Polygon, _Graphy);

  var _super = _createSuper(Polygon);

  function Polygon() {
    var _this;

    _classCallCheck(this, Polygon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setPoints", function (points) {
      var path = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertorPointsToPath"])(points);
      if (!_this.polygon) return;

      _this.polygon.setPath(path);
    });

    _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
      var points = _this.props.points;
      var path = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertorPointsToPath"])(points);

      var options = _this.getOptions(_this.options);

      options.path = path;
      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "getOverlay", function () {
      var _this$props = _this.props,
          visible = _this$props.visible,
          map = _this$props.map;

      var options = _this._getOptions();

      if (!map) return;

      if (!_this.polygon) {
        _this.polygon = new qq.maps.Polygon(options); // 特殊处理额外自定义的事件

        _this.polygon.setPoints = _this.setPoints;
      }

      visible ? _this.polygon.setMap(map) : _this.polygon.setMap(null);
      return _this.polygon;
    });

    return _this;
  }

  _createClass(Polygon, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "events",
    get: function get() {
      return ['map_changed', 'visible_changed', 'zindex_changed', 'click', 'dblclick', 'rightclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'insertNode', 'removeNode', 'adjustNode'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['clickable', 'cursor', 'editable', 'fillColor', 'map', 'path', 'points', 'strokeColor', 'strokeDashStyle', 'strokeWeight', 'visible', 'zIndex', 'draggable'];
    }
  }]);

  return Polygon;
}(_Graphy__WEBPACK_IMPORTED_MODULE_2__["default"]);

_defineProperty(Polygon, "defaultProps", {
  points: [],
  visible: true
});

_defineProperty(Polygon, "propTypes", {
  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })),
  visible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});



/***/ }),

/***/ "./src/Polyline.js":
/*!*************************!*\
  !*** ./src/Polyline.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polyline; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _Graphy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graphy */ "./src/Graphy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */




var Polyline = /*#__PURE__*/function (_Graphy) {
  _inherits(Polyline, _Graphy);

  var _super = _createSuper(Polyline);

  function Polyline() {
    var _this;

    _classCallCheck(this, Polyline);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setPoints", function (points) {
      var path = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertorPointsToPath"])(points);
      if (!_this.polyline) return;

      _this.polyline.setPath(path);
    });

    _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
      var points = _this.props.points;
      var path = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertorPointsToPath"])(points);

      var options = _this.getOptions(_this.options);

      options.path = path;
      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "getOverlay", function () {
      var _this$props = _this.props,
          visible = _this$props.visible,
          map = _this$props.map;

      var options = _this._getOptions();

      if (!map) return;

      if (!_this.polyline) {
        _this.polyline = new qq.maps.Polyline(options);
        _this.polyline.setPoints = _this.setPoints;
      }

      visible ? _this.polyline.setMap(map) : _this.polyline.setMap(null);
      return _this.polyline;
    });

    return _this;
  }

  _createClass(Polyline, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "events",
    get: function get() {
      return ['map_changed', 'visible_changed', 'zindex_changed', 'click', 'dblclick', 'rightclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'insertNode', 'removeNode', 'adjustNode'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['clickable', 'cursor', 'editable', 'map', 'path', 'points', 'strokeColor', 'strokeDashStyle', 'strokeWeight', 'visible', 'zIndex'];
    }
  }]);

  return Polyline;
}(_Graphy__WEBPACK_IMPORTED_MODULE_2__["default"]);

_defineProperty(Polyline, "defaultProps", {
  points: [],
  visible: false
});

_defineProperty(Polyline, "propTypes", {
  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })),
  visible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});



/***/ }),

/***/ "./src/QMap.js":
/*!*********************!*\
  !*** ./src/QMap.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/BaseComponent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */





var QQMap = /*#__PURE__*/function (_BaseComponent) {
  _inherits(QQMap, _BaseComponent);

  var _super = _createSuper(QQMap);

  function QQMap() {
    var _this;

    _classCallCheck(this, QQMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "initMap", function () {
      var options = _this.getOptions(_this.options);

      options.center = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["pointToLatLng"])(options.center);
      _this.map = new qq.maps.Map(_this.mapNode, options);

      _this.bindEvent(_this.map, _this.events);
    });

    _defineProperty(_assertThisInitialized(_this), "onRender", function () {
      if (!_this.props.render || !_this.map) {
        return;
      }

      return _this.props.render(_this.map);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;
      if (!children || !_this.map) return;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        if (!child) return;
        if (typeof child === 'string') return child;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          map: _this.map
        });
      });
    });

    return _this;
  }

  _createClass(QQMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMap();
      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.map = null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var center = prevProps.center,
          zoom = prevProps.zoom;
      var curCenter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["pointToLatLng"])(this.props.center);

      if (zoom !== this.props.zoom) {
        this.map.zoomTo(this.props.zoom);
      }

      if (center !== this.props.center) {
        this.map.panTo(curCenter);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = this.props.style;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "qmap-container",
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.mapNode = node;
        },
        className: this.props.className,
        style: {
          height: '100%',
          width: '100%'
        }
      }, "\u52A0\u8F7D\u5730\u56FE\u4E2D...", this.renderChildren(), this.onRender()));
    }
  }, {
    key: "events",
    get: function get() {
      return ['click', 'dblclick', 'rightclick', 'mouseover', 'mouseout', 'mousemove', 'drag', 'dragstart', 'dragend', 'longpress', 'bounds_changed', 'center_changed', 'zoom_changed', 'maptypeid_changed', 'projection_changed', ['idle', true], 'tilesloaded', 'resize'];
    }
  }, {
    key: "options",
    get: function get() {
      return ['center', 'zoom', 'minZoom', 'maxZoom', 'mapZoomType', 'noClear', 'backgroundColor', 'boundary', 'draggableCursor', 'mapTypeId', 'draggable', 'scrollwheel', 'disableDoubleClickZoom', 'keyboardShortcuts', 'mapTypeControl', 'mapTypeControlOptions', 'panControl', 'panControlOptions', 'zoomControl', 'zoomControlOptions', 'scaleControl', 'scaleControlOptions'];
    }
  }]);

  return QQMap;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(QQMap, "defaultProps", {
  style: {
    height: '600px'
  }
});

_defineProperty(QQMap, "propTypes", {
  center: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })
});

/* harmony default export */ __webpack_exports__["default"] = (QQMap);

/***/ }),

/***/ "./src/canvas/path/simple.js":
/*!***********************************!*\
  !*** ./src/canvas/path/simple.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_DataSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/DataSet */ "./src/data/DataSet.js");
/* harmony import */ var _shape_honeycomb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shape/honeycomb */ "./src/canvas/shape/honeycomb.js");
/**
 * @author kyle / http://nikai.us/
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  drawDataSet: function drawDataSet(context, dataSet, options) {
    var data = dataSet instanceof _data_DataSet__WEBPACK_IMPORTED_MODULE_0__["default"] ? dataSet.get() : dataSet;

    for (var i = 0, len = data.length; i < len; i++) {
      var item = data[i];
      this.draw(context, item, options);
    }
  },
  draw: function draw(context, data, options) {
    var type = data.geometry.type;
    var coordinates = data.geometry._coordinates || data.geometry.coordinates;
    var symbol = options.symbol || 'circle';

    switch (type) {
      case 'Point':
        var size = data._size || data.size || options._size || options.size || 5;

        if (symbol === 'circle') {
          if (options.bigData === 'Point') {
            context.moveTo(coordinates[0], coordinates[1]);
          }

          context.arc(coordinates[0], coordinates[1], size, 0, Math.PI * 2);
        } else if (symbol === 'rect') {
          context.rect(coordinates[0] - size / 2, coordinates[1] - size / 2, size, size);
        } else if (symbol === 'honeycomb') {
          Object(_shape_honeycomb__WEBPACK_IMPORTED_MODULE_1__["draw"])(context, coordinates[0], coordinates[1], size);
        }

        break;

      case 'LineString':
        for (var j = 0; j < coordinates.length; j++) {
          var x = coordinates[j][0];
          var y = coordinates[j][1];

          if (j == 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        break;

      case 'Polygon':
        this.drawPolygon(context, coordinates);
        break;

      case 'MultiPolygon':
        for (var i = 0; i < coordinates.length; i++) {
          var polygon = coordinates[i];
          this.drawPolygon(context, polygon);

          if (options.multiPolygonDraw) {
            options.multiPolygonDraw();
          }
        }

        break;

      default:
        console.log('type' + type + 'is not support now!');
        break;
    }
  },
  drawPolygon: function drawPolygon(context, coordinates) {
    context.beginPath();

    for (var i = 0; i < coordinates.length; i++) {
      var coordinate = coordinates[i];
      context.moveTo(coordinate[0][0], coordinate[0][1]);

      for (var j = 1; j < coordinate.length; j++) {
        context.lineTo(coordinate[j][0], coordinate[j][1]);
      }

      context.lineTo(coordinate[0][0], coordinate[0][1]);
      context.closePath();
    }
  }
});

/***/ }),

/***/ "./src/canvas/shape/honeycomb.js":
/*!***************************************!*\
  !*** ./src/canvas/shape/honeycomb.js ***!
  \***************************************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
function hex_corner(center, size, i) {
  var angle_deg = 60 * i + 30;
  var angle_rad = Math.PI / 180 * angle_deg;
  return [center.x + size * Math.cos(angle_rad), center.y + size * Math.sin(angle_rad)];
}

function draw(context, x, y, size) {
  for (var j = 0; j < 6; j++) {
    var result = hex_corner({
      x: x,
      y: y
    }, size, j);
    context.lineTo(result[0], result[1]);
  }
}



/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradient", function() { return gradient; });
var gradient = [{
  key: 0.1,
  color: ['#cbe6ff', '#0e3ca1']
}, {
  key: 0.2,
  color: ['#add7ff', '#0e3ca1']
}, {
  key: 0.3,
  color: ['#87c1ff', '#0e3ca1']
}, {
  key: 0.4,
  color: ['#60a8ff', '#0e3ca1']
}, {
  key: 0.5,
  color: '#338bff'
}, {
  key: 0.6,
  color: '#0d6be3'
}, {
  key: 0.7,
  color: '#0752c9'
}, {
  key: 0.8,
  color: '#0e3ca1'
}, {
  key: 0.9,
  color: '#022277'
}, {
  key: 1,
  color: '#01164b'
}];


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ANIMATION_DROP, ANIMATION_BOUNCE, ANIMATION_DOWN, ANIMATION_UP, ControlPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DROP", function() { return ANIMATION_DROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_BOUNCE", function() { return ANIMATION_BOUNCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_DOWN", function() { return ANIMATION_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_UP", function() { return ANIMATION_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPosition", function() { return ControlPosition; });
/* global qq */
var ANIMATION_DROP = qq.maps.MarkerAnimation.DROP;
var ANIMATION_BOUNCE = qq.maps.MarkerAnimation.BOUNCE;
var ANIMATION_DOWN = qq.maps.MarkerAnimation.DOWN;
var ANIMATION_UP = qq.maps.MarkerAnimation.UP;
var ControlPosition = [qq.maps.ControlPosition.TOP_LEFT, // 相对左上角对齐，向右排列。
qq.maps.ControlPosition.TOP_CENTER, // 相对上方中间位置对齐。
qq.maps.ControlPosition.TOP_RIGHT, // 相对右上角对齐，向左排列。
qq.maps.ControlPosition.BOTTOM_LEFT, // 相对左下角对齐，向右排列。
qq.maps.ControlPosition.BOTTOM_CENTER, // 相对下方中间位置对齐。
qq.maps.ControlPosition.BOTTOM_RIGHT, // 相对右下角对齐，向左排列。
qq.maps.ControlPosition.LEFT_TOP, // 相对左上角对齐，向下排列。
qq.maps.ControlPosition.LEFT_CENTER, // 相对左方中间位置对齐。
qq.maps.ControlPosition.LEFT_BOTTOM, // 相对左下角对齐，向上排列。
qq.maps.ControlPosition.RIGHT_TOP, // 相对右上角对齐，向下排列。
qq.maps.ControlPosition.RIGHT_CENTER, // 相对右方中间位置对齐。
qq.maps.ControlPosition.RIGHT_BOTTOM, // 相对右下角对齐，向上排列。
qq.maps.ControlPosition.CENTER // 中间位置对齐。
];

/***/ }),

/***/ "./src/data/DataSet.js":
/*!*****************************!*\
  !*** ./src/data/DataSet.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Event */ "./src/utils/Event.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @author kyle / http://nikai.us/
 */

/* eslint-disable */
 // import cityCenter from "../utils/cityCenter";

/**
 * DataSet
 *
 * A data set can:
 * - add/remove/update data
 * - gives triggers upon changes in the data
 * - can  import/export data in various data formats
 * @param {Array} [data]    Optional array with initial data
 * the field geometry is like geojson, it can be:
 * {
 *     "type": "Point",
 *     "coordinates": [125.6, 10.1]
 * }
 * {
 *     "type": "LineString",
 *     "coordinates": [
 *         [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
 *     ]
 * }
 * {
 *     "type": "Polygon",
 *     "coordinates": [
 *         [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
 *           [100.0, 1.0], [100.0, 0.0] ]
 *     ]
 * }
 * @param {Object} [options]   Available options:
 * 
 */

function DataSet(data, options) {
  _utils_Event__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)();
  this._options = options || {};
  this._data = []; // map with data indexed by id
  // add initial data when provided

  if (data) {
    this.add(data);
  }
}

DataSet.prototype = _utils_Event__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;
/**
 * Add data.
 */

DataSet.prototype.add = function (data, senderId) {
  if (Array.isArray(data)) {
    // Array
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i].time && data[i].time.length == 14 && data[i].time.substr(0, 2) == '20') {
        var time = data[i].time;
        data[i].time = new Date(time.substr(0, 4) + '-' + time.substr(4, 2) + '-' + time.substr(6, 2) + ' ' + time.substr(8, 2) + ':' + time.substr(10, 2) + ':' + time.substr(12, 2)).getTime();
      }

      this._data.push(data[i]);
    }
  } else if (data instanceof Object) {
    // Single item
    this._data.push(data);
  } else {
    throw new Error('Unknown dataType');
  }

  this._dataCache = JSON.parse(JSON.stringify(this._data));
};

DataSet.prototype.reset = function () {
  this._data = JSON.parse(JSON.stringify(this._dataCache));
};
/**
 * get data.
 */


DataSet.prototype.get = function (args) {
  args = args || {}; //console.time('copy data time')

  var start = new Date(); // TODO: 不修改原始数据，在数据上挂载新的名称，每次修改数据直接修改新名称下的数据，可以省去deepCopy
  // var data = deepCopy(this._data);

  var data = this._data;
  var start = new Date();

  if (args.filter) {
    var newData = [];

    for (var i = 0; i < data.length; i++) {
      if (args.filter(data[i])) {
        newData.push(data[i]);
      }
    }

    data = newData;
  }

  if (args.transferCoordinate) {
    data = this.transferCoordinate(data, args.transferCoordinate, args.fromColumn, args.toColumn);
  } // console.timeEnd('transferCoordinate time')


  return data;
};
/**
 * set data.
 */


DataSet.prototype.set = function (data) {
  this._set(data);

  this._trigger('change');
};
/**
 * set data.
 */


DataSet.prototype._set = function (data) {
  this.clear();
  this.add(data);
};
/**
 * clear data.
 */


DataSet.prototype.clear = function (args) {
  this._data = []; // map with data indexed by id
};
/**
 * remove data.
 */


DataSet.prototype.remove = function (args) {};
/**
 * update data.
 */


DataSet.prototype.update = function (cbk, condition) {
  var data = this._data;
  var item = null;

  for (var i = 0; i < data.length; i++) {
    if (condition) {
      var flag = true;

      for (var key in condition) {
        if (data[i][key] != condition[key]) {
          flag = false;
        }
      }

      if (flag) {
        cbk && cbk(data[i]);
      }
    } else {
      cbk && cbk(data[i]);
    }
  }

  this._dataCache = JSON.parse(JSON.stringify(this._data));

  this._trigger('change');
};
/**
 * transfer coordinate.
 */


DataSet.prototype.transferCoordinate = function (data, transferFn, fromColumn, toColumnName) {
  toColumnName = toColumnName || '_coordinates';
  fromColumn = fromColumn || 'coordinates';

  for (var i = 0; i < data.length; i++) {
    var geometry = data[i].geometry;
    var coordinates = geometry[fromColumn];

    switch (geometry.type) {
      case 'Point':
        geometry[toColumnName] = transferFn(coordinates);
        break;

      case 'LineString':
        var newCoordinates = [];

        for (var j = 0; j < coordinates.length; j++) {
          newCoordinates.push(transferFn(coordinates[j]));
        }

        geometry[toColumnName] = newCoordinates;
        break;

      case 'Polygon':
        var newCoordinates = getPolygon(coordinates);
        geometry[toColumnName] = newCoordinates;
        break;

      case 'MultiPolygon':
        var newCoordinates = [];

        for (var c = 0; c < coordinates.length; c++) {
          var polygon = coordinates[c];
          var polygon = getPolygon(polygon);
          newCoordinates.push(polygon);
        }

        geometry[toColumnName] = newCoordinates;
        break;
    }
  }

  function getPolygon(coordinates) {
    var newCoordinates = [];

    for (var c = 0; c < coordinates.length; c++) {
      var coordinate = coordinates[c];
      var newcoordinate = [];

      for (var j = 0; j < coordinate.length; j++) {
        newcoordinate.push(transferFn(coordinate[j]));
      }

      newCoordinates.push(newcoordinate);
    }

    return newCoordinates;
  }

  return data;
};

DataSet.prototype.initGeometry = function (transferFn) {
  if (transferFn) {
    this._data.forEach(function (item) {
      item.geometry = transferFn(item);
    });
  } else {
    this._data.forEach(function (item) {
      if (!item.geometry) {
        if (item.lng && item.lat) {
          item.geometry = {
            type: 'Point',
            coordinates: [item.lng, item.lat]
          };
        } // else if (item.city) {
        //     var center = cityCenter.getCenterByCityName(item.city);
        //     if (center) {
        //         item.geometry = {
        //             type: 'Point',
        //             coordinates: [center.lng, center.lat]
        //         }
        //     }
        // }

      }
    });
  }
};
/**
 * 获取当前列的最大值
 */


DataSet.prototype.getMax = function (columnName) {
  var data = this._data;

  if (!data || data.length <= 0) {
    return;
  }

  var max = parseFloat(data[0][columnName]);

  for (var i = 1; i < data.length; i++) {
    var value = parseFloat(data[i][columnName]);

    if (value > max) {
      max = value;
    }
  }

  return max;
};
/**
 * 获取当前列的总和
 */


DataSet.prototype.getSum = function (columnName) {
  var data = this._data;

  if (!data || data.length <= 0) {
    return;
  }

  var sum = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i][columnName]) {
      sum += parseFloat(data[i][columnName]);
    }
  }

  return sum;
};
/**
 * 获取当前列的最小值
 */


DataSet.prototype.getMin = function (columnName) {
  var data = this._data;

  if (!data || data.length <= 0) {
    return;
  }

  var min = parseFloat(data[0][columnName]);

  for (var i = 1; i < data.length; i++) {
    var value = parseFloat(data[i][columnName]);

    if (value < min) {
      min = value;
    }
  }

  return min;
};
/**
 * 获取去重的数据
 */


DataSet.prototype.getUnique = function (columnName) {
  var data = this._data;

  if (!data || data.length <= 0) {
    return;
  }

  var maps = {};

  for (var i = 1; i < data.length; i++) {
    maps[data[i][columnName]] = true;
  }

  var data = [];

  for (var key in maps) {
    data.push(key);
  }

  return data;
};

function deepCopy(obj) {
  var newObj;

  if (_typeof(obj) == 'object') {
    newObj = obj instanceof Array ? [] : {};

    for (var i in obj) {
      newObj[i] = obj[i] instanceof HTMLElement ? obj[i] : deepCopy(obj[i]);
    }
  } else {
    newObj = obj;
  }

  return newObj;
}

/* harmony default export */ __webpack_exports__["default"] = (DataSet);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: QMap, HeatMap, Marker, MarkerList, Info, Polyline, utils, config, Polygon, Circle, Control, GridHeatmap, ControlPosition, Ruler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QMap */ "./src/QMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QMap", function() { return _QMap__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HeatMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeatMap */ "./src/HeatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatMap", function() { return _HeatMap__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marker */ "./src/Marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _Marker__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MarkerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkerList */ "./src/MarkerList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerList", function() { return _MarkerList__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info */ "./src/Info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _Info__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Circle */ "./src/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Polyline */ "./src/Polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Polygon */ "./src/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _Polygon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Control */ "./src/Control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return _Control__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ControlPosition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ControlPosition */ "./src/ControlPosition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPosition", function() { return _ControlPosition__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _constants__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins */ "./src/plugins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeatmap", function() { return _plugins__WEBPACK_IMPORTED_MODULE_12__["GridHeatmap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ruler", function() { return _plugins__WEBPACK_IMPORTED_MODULE_12__["Ruler"]; });
















/***/ }),

/***/ "./src/plugins/CanvasLayer.js":
/*!************************************!*\
  !*** ./src/plugins/CanvasLayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* global qq */


function CanvasLayer(map, options) {
  this.setMap(map);
  this.options = options || {};
  this.context = this.options.context || '2d';
  this.zIndex = this.options.zIndex || 0;
  qq.maps.Overlay.call(this);
}

var global = typeof window === 'undefined' ? {} : window;
CanvasLayer.prototype = new qq.maps.Overlay();

CanvasLayer.CSS_TRANSFORM = function () {
  var div = document.createElement('div');
  var props = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];

    if (div.style[prop] !== undefined) {
      return prop;
    }
  }

  return props[0];
}();

CanvasLayer.prototype.construct = function () {
  var _this = this;

  var mapSize = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMapSize"])(this.map);
  var canvas = this.canvas = document.createElement('canvas');
  canvas.style.cssText = "width: ".concat(mapSize.width, "px;height: ").concat(mapSize.height, "px;position: relative;z-index: ").concat(this.zIndex);
  this.resize();
  this.getPanes().overlayLayer.appendChild(canvas);
  qq.maps.event.addListener(this.map, 'bounds_changed', function () {
    _this.resize();

    _this.draw();
  });
  this.constructed = true;
};

CanvasLayer.prototype.destory = function () {
  this.canvas.parentElement.removeChild(this.canvas);

  if (this.changeHandler) {
    qq.maps.event.removeListener(this.changeHandler);
    this.changeHandler = null;
  }

  this.canvas = null;
};

CanvasLayer.prototype.repositionCanvas = function () {
  if (!this.map) return; // 返回当前地图的视野范围

  var bounds = this.map.getBounds(); // 地图视野范围内左上角坐标经纬度 LatLng

  var topLeft = new qq.maps.LatLng(bounds.getNorthEast().getLat(), bounds.getSouthWest().getLng()); // 返回覆盖物容器的相对像素坐标或是经纬度坐标

  var projection = this.getProjection(); // 左上角移动偏移量

  var offset = projection.fromLatLngToDivPixel(topLeft);
  this.canvas.style[CanvasLayer.CSS_TRANSFORM] = "translate(".concat(Math.round(offset.x), "px, ").concat(Math.round(offset.y), "px)");
};

CanvasLayer.prototype.draw = function () {
  this.options.update && this.options.update.call(this);
};

CanvasLayer.prototype.resize = function () {
  if (!this.map || !this.canvas) return;
  var size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMapSize"])(this.map);
  var width = size.width;
  var height = size.height;
  var canvas = this.canvas;
  var devicePixelRatio = this.devicePixelRatio = global.devicePixelRatio || 1;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;

  if (this.context === '2d') {
    canvas.getContext(this.context).scale(devicePixelRatio, devicePixelRatio);
  }

  if (width === this.width && height === this.height) {
    return;
  }

  canvas.style.width = "".concat(width, "px");
  canvas.style.height = "".concat(height, "px");
  this.repositionCanvas();
};

CanvasLayer.prototype.getContainer = function () {
  return this.canvas;
};

CanvasLayer.prototype.show = function () {
  this.canvas.style.display = '';
};

CanvasLayer.prototype.hide = function () {
  this.canvas.style.display = 'none';
};

CanvasLayer.prototype.setZIndex = function (zIndex) {
  this.zIndex = zIndex;
  this.canvas.style.zIndex = this.zIndex;
};

CanvasLayer.prototype.getZIndex = function () {
  return this.zIndex;
};

/* harmony default export */ __webpack_exports__["default"] = (CanvasLayer);

/***/ }),

/***/ "./src/plugins/gird-heatmap/BaseLayer.js":
/*!***********************************************!*\
  !*** ./src/plugins/gird-heatmap/BaseLayer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_DataSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/DataSet */ "./src/data/DataSet.js");
/* harmony import */ var _utils_Tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Tween */ "./src/utils/Tween.js");
/* harmony import */ var _utils_data_range_Intensity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data-range/Intensity */ "./src/utils/data-range/Intensity.js");
/* harmony import */ var _utils_data_range_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/data-range/Category */ "./src/utils/data-range/Category.js");
/* harmony import */ var _utils_data_range_Choropleth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/data-range/Choropleth */ "./src/utils/data-range/Choropleth.js");
/* harmony import */ var _utils_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/grid */ "./src/utils/grid.js");
/* harmony import */ var _canvas_path_simple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../canvas/path/simple */ "./src/canvas/path/simple.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global requestAnimationFrame */

/**
 * @author kyle / http://nikai.us/
 */








if (typeof window !== 'undefined') {
  requestAnimationFrame(animate);
}

function animate(time) {
  requestAnimationFrame(animate);
  _utils_Tween__WEBPACK_IMPORTED_MODULE_1__["default"].update(time);
}

var BaseLayer = /*#__PURE__*/function () {
  function BaseLayer(map, data, options) {
    _classCallCheck(this, BaseLayer);

    var _dataSet = data;

    if (!(_dataSet instanceof _data_DataSet__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      _dataSet = data.map(function (point, i) {
        return {
          geometry: {
            type: 'Point',
            coordinates: [point.lng, point.lat]
          },
          count: data[i][options.countField]
        };
      });
      _dataSet = new _data_DataSet__WEBPACK_IMPORTED_MODULE_0__["default"](_dataSet);
    }

    this.dataSet = _dataSet;
    this.map = map;
  }

  _createClass(BaseLayer, [{
    key: "getDefaultContextConfig",
    value: function getDefaultContextConfig() {
      return {
        globalAlpha: 1,
        globalCompositeOperation: 'source-over',
        imageSmoothingEnabled: true,
        strokeStyle: '#000000',
        fillStyle: '#000000',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: 'rgba(0, 0, 0, 0)',
        lineWidth: 1,
        lineCap: 'butt',
        lineJoin: 'miter',
        miterLimit: 10,
        lineDashOffset: 0,
        font: '10px sans-serif',
        textAlign: 'start',
        textBaseline: 'alphabetic'
      };
    }
  }, {
    key: "initDataRange",
    value: function initDataRange(options) {
      var self = this;
      self.intensity = new _utils_data_range_Intensity__WEBPACK_IMPORTED_MODULE_2__["default"]({
        maxSize: self.options.maxSize,
        minSize: self.options.minSize,
        gradient: self.options.gradient,
        max: self.options.max || this.dataSet.getMax('count')
      });
      self.category = new _utils_data_range_Category__WEBPACK_IMPORTED_MODULE_3__["default"](self.options.splitList);
      self.choropleth = new _utils_data_range_Choropleth__WEBPACK_IMPORTED_MODULE_4__["default"](self.options.splitList);

      if (self.options.splitList === undefined) {
        self.category.generateByDataSet(this.dataSet, self.options.color);
      }

      if (self.options.splitList === undefined) {
        var min = self.options.min || this.dataSet.getMin('count');
        var max = self.options.max || this.dataSet.getMax('count');
        self.choropleth.generateByMinMax(min, max, this.options.gradient);
      }
    }
  }, {
    key: "getLegend",
    value: function getLegend(options) {
      var self = this;

      if (self.options.draw === 'intensity' || self.options.draw === 'heatmap') {
        return this.intensity.getLegend(options);
      } else if (self.options.draw === 'category') {
        return this.category.getLegend(options);
      }
    }
  }, {
    key: "processData",
    value: function processData(data) {
      var self = this;
      var draw = self.options.draw;

      if (draw === 'bubble' || draw === 'intensity' || draw === 'category' || draw === 'choropleth' || draw === 'simple') {
        for (var i = 0; i < data.length; i++) {
          var item = data[i];

          if (self.options.draw === 'bubble') {
            data[i]._size = self.intensity.getSize(item.count);
          } else {
            data[i]._size = undefined;
          }

          var styleType = '_fillStyle';

          if (data[i].geometry.type === 'LineString' || self.options.styleType === 'stroke') {
            styleType = '_strokeStyle';
          }

          if (self.options.draw === 'intensity') {
            data[i][styleType] = self.intensity.getColor(item.count);
          } else if (self.options.draw === 'category') {
            data[i][styleType] = self.category.get(item.count);
          } else if (self.options.draw === 'choropleth') {
            data[i][styleType] = self.choropleth.get(item.count);
          }
        }
      }
    }
  }, {
    key: "isEnabledTime",
    value: function isEnabledTime() {
      var animationOptions = this.options.animation;
      var flag = animationOptions && !(animationOptions.enabled === false);
      return flag;
    }
  }, {
    key: "argCheck",
    value: function argCheck(options) {
      if (options.draw === 'heatmap') {
        if (options.strokeStyle) {
          console.warn('[heatmap] options.strokeStyle is discard, pleause use options.strength [eg: options.strength = 0.1]');
        }
      }
    }
  }, {
    key: "drawContext",
    value: function drawContext(context, dataSet, options, nwPixel) {
      var self = this;
      self.options.offset = {
        x: nwPixel.x,
        y: nwPixel.y
      };
      _utils_grid__WEBPACK_IMPORTED_MODULE_5__["default"].draw(context, dataSet, self.options);
    }
  }, {
    key: "isPointInPath",
    value: function isPointInPath(context, pixel) {
      this.canvasLayer.canvas.getContext(this.context);
      var data = this.dataSet.get();

      for (var i = 0; i < data.length; i++) {
        context.beginPath();
        _canvas_path_simple__WEBPACK_IMPORTED_MODULE_6__["default"].draw(context, data[i], this.options);
        var x = pixel.x * this.canvasLayer.devicePixelRatio;
        var y = pixel.y * this.canvasLayer.devicePixelRatio;
        var geoType = data[i].geometry && data[i].geometry.type;

        if (geoType.indexOf('Polygon') > -1) {
          if (context.isPointInPath(x, y)) {
            return data[i];
          }
        } else {
          if (context.isPointInStroke && context.isPointInStroke(x, y)) {
            return data[i];
          }
        }
      }
    }
  }, {
    key: "clickEvent",
    value: function clickEvent(pixel, e) {
      if (!this.options.methods) {
        return;
      }

      var dataItem = this.isPointInPath(this.getContext(), pixel);

      if (dataItem) {
        this.options.methods.click(dataItem, e);
      } else {
        this.options.methods.click(null, e);
      }
    }
  }, {
    key: "mousemoveEvent",
    value: function mousemoveEvent(pixel, e) {
      if (!this.options.methods) {
        return;
      }

      var dataItem = this.isPointInPath(this.getContext(), pixel);

      if (dataItem) {
        this.options.methods.mousemove(dataItem, e);
      } else {
        this.options.methods.mousemove(null, e);
      }
    }
    /**
       * obj.options
       */

  }, {
    key: "update",
    value: function update(obj, isDraw) {
      var self = this;
      var _options = obj.options;
      var options = self.options;

      for (var i in _options) {
        options[i] = _options[i];
      }

      self.init(options);

      if (isDraw !== false) {
        self.draw();
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var self = this;
      self.dataSet.reset();
      self.init(options);
      self.draw();
    }
  }, {
    key: "set",
    value: function set(obj) {
      var self = this;
      var ctx = this.getContext();
      var conf = this.getDefaultContextConfig();

      for (var i in conf) {
        ctx[i] = conf[i];
      }

      self.init(obj.options);
      self.draw();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindEvent();
      this.hide();
    }
  }, {
    key: "initAnimator",
    value: function initAnimator() {
      var self = this;
      var animationOptions = self.options.animation;

      if (self.options.draw === 'time' || self.isEnabledTime()) {
        if (!animationOptions.stepsRange) {
          animationOptions.stepsRange = {
            start: this.dataSet.getMin('time') || 0,
            end: this.dataSet.getMax('time') || 0
          };
        }

        this.steps = {
          step: animationOptions.stepsRange.start
        };
        self.animator = new _utils_Tween__WEBPACK_IMPORTED_MODULE_1__["default"].Tween(this.steps).onUpdate(function () {
          self._canvasUpdate(this.step);
        }).repeat(Infinity);
        this.addAnimatorEvent();
        var duration = animationOptions.duration * 1000 || 5000;
        self.animator.to({
          step: animationOptions.stepsRange.end
        }, duration);
        self.animator.start();
      } else {
        self.animator && self.animator.stop();
      }
    }
  }, {
    key: "addAnimatorEvent",
    value: function addAnimatorEvent() {}
  }, {
    key: "animatorMovestartEvent",
    value: function animatorMovestartEvent() {
      var animationOptions = this.options.animation;

      if (this.isEnabledTime() && this.animator) {
        this.steps.step = animationOptions.stepsRange.start;
        this.animator.stop();
      }
    }
  }, {
    key: "animatorMoveendEvent",
    value: function animatorMoveendEvent() {
      if (this.isEnabledTime() && this.animator) {
        this.animator.start();
      }
    }
  }]);

  return BaseLayer;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseLayer);

/***/ }),

/***/ "./src/plugins/gird-heatmap/index.js":
/*!*******************************************!*\
  !*** ./src/plugins/gird-heatmap/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayer */ "./src/plugins/gird-heatmap/BaseLayer.js");
/* harmony import */ var _CanvasLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasLayer */ "./src/plugins/CanvasLayer.js");
/* harmony import */ var _data_DataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/DataSet */ "./src/data/DataSet.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global qq */







var GridHeatmap = /*#__PURE__*/function (_BaseLayer) {
  _inherits(GridHeatmap, _BaseLayer);

  var _super = _createSuper(GridHeatmap);

  function GridHeatmap(map, data, options) {
    var _this;

    _classCallCheck(this, GridHeatmap);

    options = extend__WEBPACK_IMPORTED_MODULE_5___default()(true, {}, {
      gradient: _config__WEBPACK_IMPORTED_MODULE_4__["gradient"],
      unit: 'm',
      countField: 'count',
      showText: true,
      showTextZoomLevel: 16,
      // 是否没屏都开启颜色计算，如果是，则没屏都会有一个最深颜色
      useLocalExtrema: true
    }, options);
    _this = _super.call(this, map, data, options); // 记录当前在可是区域内的网格数

    _this.inViewPortCount = 0;

    _this.init(options);

    _this._zoom = map.getZoom();
    _this.options.showText = _this._zoom > _this.options.showTextZoomLevel;
    _this.canvasLayer = new _CanvasLayer__WEBPACK_IMPORTED_MODULE_1__["default"](map, {
      context: _this.context,
      paneName: options.paneName,
      zIndex: options.zIndex,
      update: function update() {
        return _this._canvasUpdate();
      }
    });
    qq.maps.event.addListener(_this.map, 'zoom_changed', function () {
      var zoom = _this.map.getZoom();

      var showTextZoomLevel = options.showTextZoomLevel;
      _this.options.showText = zoom > showTextZoomLevel;
    });
    return _this;
  }

  _createClass(GridHeatmap, [{
    key: "clickEvent",
    value: function clickEvent(e) {
      var pixel = e.pixel;

      _get(_getPrototypeOf(GridHeatmap.prototype), "clickEvent", this).call(this, pixel, e);
    }
  }, {
    key: "mousemoveEvent",
    value: function mousemoveEvent(e) {
      var pixel = e.pixel;

      _get(_getPrototypeOf(GridHeatmap.prototype), "mousemoveEvent", this).call(this, pixel, e);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent(e) {
      this.unbindEvent();

      if (this.options.methods) {
        if (this.options.methods.click) {
          this.clickMapHandler = qq.maps.event.addListener(this.map, 'click', this.clickEvent);
        }

        if (this.options.methods.mousemove) {
          this.mouseMoveMapHandler = qq.maps.event.addListener(this.map, 'mousemove', this.mousemoveEvent);
        }
      }
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent(e) {
      if (this.options.methods) {
        if (this.options.methods.click) {
          qq.maps.event.removeListener(this.clickMapHandler);
        }

        if (this.options.methods.mousemove) {
          qq.maps.event.removeListener(this.mouseMoveMapHandler);
        }
      }
    }
  }, {
    key: "setData",
    value: function setData(data) {
      var _this2 = this;

      var _dataSet;

      if (!(_dataSet instanceof _data_DataSet__WEBPACK_IMPORTED_MODULE_2__["default"])) {
        _dataSet = data.map(function (point, i) {
          return {
            geometry: {
              type: 'Point',
              coordinates: [point.lng, point.lat]
            },
            count: data[i][_this2.options.countField]
          };
        });
      }

      this.dataSet.set(_dataSet);
      if (this.canvasLayer) this.canvasLayer.draw();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      console.log(opts);
      this.options = extend__WEBPACK_IMPORTED_MODULE_5___default()(true, this.options, opts);
      console.log(this.options);
    }
  }, {
    key: "getContext",
    value: function getContext() {
      if (!this.canvasLayer.canvas) return null;
      return this.canvasLayer.canvas.getContext(this.context);
    }
  }, {
    key: "_canvasUpdate",
    value: function _canvasUpdate() {
      var map = this.map;
      var projection = map.getProjection();

      if (!this.canvasLayer || !projection) {
        return;
      }

      var bounds = map.getBounds();
      var topLeft = new qq.maps.LatLng(bounds.getNorthEast().getLat(), bounds.getSouthWest().getLng());
      var zoom = map.getZoom();
      var context = this.getContext();
      var zoomUnit = Math.pow(2, 17 - zoom);
      var layerProjection = this.canvasLayer.getProjection();
      var layerOffset = layerProjection.fromLatLngToDivPixel(topLeft);
      var dataGetOptions = {
        fromColumn: 'coordinates',
        filter: function filter(item) {
          var coordinates = item.geometry.coordinates;
          var point = new qq.maps.LatLng(coordinates[1], coordinates[0]);
          return bounds.contains(point);
        },
        transferCoordinate: function transferCoordinate(coordinate) {
          var pixel = layerProjection.fromLatLngToDivPixel(new qq.maps.LatLng(coordinate[1], coordinate[0]));
          var point = {
            x: pixel.x - layerOffset.x,
            y: pixel.y - layerOffset.y
          };
          return [point.x, point.y];
        }
      };
      var data = this.dataSet.get(dataGetOptions);
      if (!data.length) return;

      if (this.context === '2d') {
        // 配置全局 canvas 上下文参数
        for (var key in this.options) {
          context[key] = this.options[key];
        }
      } else {
        context.clear(context.COLOR_BUFFER_BIT);
      } // 计算缩放级别


      if (this.options.minZoom && map.getZoom() < this.options.minZoom || this.options.maxZoom && map.getZoom() > this.options.maxZoom) {
        return;
      } // get data from data set


      if (this.options.unit === 'm') {
        if (this.options.size) {
          this.options._size = this.options.size / zoomUnit;
          this.options._height = this.options.height / zoomUnit;
          this.options._width = this.options.width / zoomUnit;
        }
      } else {
        this.options._size = this.options.size;
        this.options._height = this.options.height;
        this.options._width = this.options.width;
      }

      this.options.zoom = zoom;
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["clear"])(context);
      this.drawContext(context, data, this.options, {
        x: layerOffset.x,
        y: layerOffset.y
      });
    }
  }, {
    key: "init",
    value: function init(options) {
      this.options = options; // 调用父类方法，得到颜色分割区间

      this.initDataRange(options); // 颜色配置区间

      this.options.choropleth = this.choropleth;
      this.options.category = this.category;
      this.options.intensity = this.intensity; // 设置 canvas 绘制上下文

      this.context = this.options.context || '2d';

      if (this.options.zIndex) {
        this.canvasLayer && this.canvasLayer.setZIndex(this.options.zIndex);
      }

      if (this.options.max) {
        this.intensity.setMax(this.options.max);
      }

      if (this.options.min) {
        this.intensity.setMin(this.options.min);
      }

      this.bindEvent();
    }
  }, {
    key: "addAnimatorEvent",
    value: function addAnimatorEvent() {
      qq.maps.event.addListener(this.map, 'movestart', this.animatorMovestartEvent.bind(this));
      qq.maps.event.addListener(this.map, 'moveend', this.animatorMoveendEvent.bind(this));
    }
  }]);

  return GridHeatmap;
}(_BaseLayer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GridHeatmap);

/***/ }),

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/*! exports provided: GridHeatmap, Ruler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gird_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gird-heatmap */ "./src/plugins/gird-heatmap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeatmap", function() { return _gird_heatmap__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ruler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruler */ "./src/plugins/ruler/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ruler", function() { return _ruler__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/plugins/ruler/index.js":
/*!************************************!*\
  !*** ./src/plugins/ruler/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ruler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CanvasLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CanvasLayer */ "./src/plugins/CanvasLayer.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Circle */ "./src/Circle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global qq */


 // import Overlay from '../../Overlay'

var Ruler = /*#__PURE__*/function (_React$Component) {
  _inherits(Ruler, _React$Component);

  var _super = _createSuper(Ruler);

  function Ruler(props) {
    var _this;

    _classCallCheck(this, Ruler);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      var map = _this.props.map;
      if (!map) return;
      _this.canvasLayer = new _CanvasLayer__WEBPACK_IMPORTED_MODULE_1__["default"](map, {
        update: _this.handleUpdate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindEvent", function () {
      var map = _this.props.map;
      qq.maps.event.addListener(map, 'bounds_changed', _this.proxyEvent(_this.handleBoundsChanged));
      qq.maps.event.addListener(map, 'click', _this.proxyEvent(_this.handleClick));
      qq.maps.event.addListener(map, 'dblclick', _this.proxyEvent(_this.handleDoubleClick));
      qq.maps.event.addListener(map, 'mousemove', _this.proxyEvent(_this.handleMouseMove));
      qq.maps.event.addListener(map, 'rightclick', _this.proxyEvent(_this.handleDoubleClick));
    });

    _defineProperty(_assertThisInitialized(_this), "proxyEvent", function (fn) {
      return function () {
        var editable = _this.props.editable;
        if (editable) fn();
        return false;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleBoundsChanged", function () {
      var onBoundsChanged = _this.props.onBoundsChanged;
      onBoundsChanged && onBoundsChanged();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var onClick = _this.props.onClick;
      onClick && onClick();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function () {
      var onCompleted = _this.props.onCompleted;
      onCompleted && onCompleted();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function () {
      var onMouseMove = _this.props.onMouseMove;
      onMouseMove && onMouseMove();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      var onClear = _this.props.onClear;
      onClear && onClear();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function () {
      var onDelete = _this.props.onDelete;
      onDelete && onDelete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdate", function () {// 绘制核心逻辑
    });

    _this.state = {
      results: []
    };
    return _this;
  }

  _createClass(Ruler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var results = this.state.results;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ruler-container"
      }, results.map(function (path, i) {
        // 绘制定点 dots
        var dots = path.dots;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dots.map(function (dot, i) {
          var lat = dot.lat,
              lng = dot.lng;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
            center: {
              lat: lat,
              lng: lng
            }
          }, _this2.circleOptions)));
        }));
      }));
    }
  }, {
    key: "circleOptions",
    get: function get() {
      var _this$props = this.props,
          strokeColor = _this$props.dotStrokeColor,
          strokeDashStyle = _this$props.dotStrokeDashStyle,
          strokeWeight = _this$props.dotStrokeWeight,
          radius = _this$props.dotRadius;
      return {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        radius: radius,
        strokeDashStyle: strokeDashStyle
      };
    }
  }, {
    key: "overlayOptions",
    get: function get() {
      var offset = this.props.tipsOffset;
      return {
        offset: offset,
        style: {
          border: '1px solid #000',
          boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)'
        }
      };
    }
  }]);

  return Ruler;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Ruler, "defaultProps", {
  editable: false,
  // 提示弹层相对测距点中心偏移
  tipsOffset: {
    x: 30,
    y: 0
  },
  // 原点背景色颜色
  dotStrokeColor: 'red',
  dotRadius: 10,
  // 原点描边类型 solid || dash
  dotStrokeDashStyle: 'solid',
  // 测距线宽度
  dotStrokeWeight: '1',
  // 原点背景色颜色
  dotFillColor: '#fff',
  lineStrokeColor: 'red',
  lineStrokeDashStyle: 'solid',
  lineStrokeWeight: '1',
  // 点击新增测距点
  onClick: function onClick() {},
  // 双击完成测距
  onCompleted: function onCompleted() {},
  // 删除测距点
  onDelete: function onDelete() {},
  // 清空测距点
  onClear: function onClear() {},
  onBoundsChanged: function onBoundsChanged() {},
  // 鼠标移动事件
  onMouseMove: function onMouseMove() {}
});



/***/ }),

/***/ "./src/utils/Canvas.js":
/*!*****************************!*\
  !*** ./src/utils/Canvas.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function Canvas(width, height) {
  _classCallCheck(this, Canvas);

  var canvas = document.createElement('canvas');

  if (width) {
    canvas.width = width;
  }

  if (height) {
    canvas.height = height;
  }

  return canvas;
};



/***/ }),

/***/ "./src/utils/Event.js":
/*!****************************!*\
  !*** ./src/utils/Event.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Event() {
  this._subscribers = {};
}

Event.prototype.on = function (event, callback) {
  var subscribers = this._subscribers[event];

  if (!subscribers) {
    subscribers = [];
    this._subscribers[event] = subscribers;
  }

  subscribers.push({
    callback: callback
  });
};
/**
 * Unsubscribe from an event, remove an event listener
 * @param {String} event
 * @param {function} callback
 */


Event.prototype.off = function (event, callback) {
  var subscribers = this._subscribers[event];

  if (subscribers) {
    // this._subscribers[event] = subscribers.filter(listener => listener.callback != callback)
    for (var i = 0; i < subscribers.length; i++) {
      if (subscribers[i].callback === callback) {
        subscribers.splice(i, 1);
        i--;
      }
    }
  }
};
/**
 * Trigger an event
 * @param {String} event
 * @param {Object | null} params
 * @param {String} [senderId]       Optional id of the sender.
 * @private
 */


Event.prototype._trigger = function (event, params, senderId) {
  if (event === '*') {
    throw new Error('Cannot trigger event *');
  }

  var subscribers = [];

  if (event in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers[event]);
  }

  if ('*' in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers['*']);
  }

  for (var i = 0, len = subscribers.length; i < len; i++) {
    var subscriber = subscribers[i];

    if (subscriber.callback) {
      subscriber.callback(event, params, senderId || null);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/utils/Tween.js":
/*!****************************!*\
  !*** ./src/utils/Tween.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var TWEEN = TWEEN || function () {
  var _tweens = [];
  return {
    getAll: function getAll() {
      return _tweens;
    },
    removeAll: function removeAll() {
      _tweens = [];
    },
    add: function add(tween) {
      _tweens.push(tween);
    },
    remove: function remove(tween) {
      var i = _tweens.indexOf(tween);

      if (i !== -1) {
        _tweens.splice(i, 1);
      }
    },
    update: function update(time, preserve) {
      if (_tweens.length === 0) {
        return false;
      }

      var i = 0;
      time = time !== undefined ? time : TWEEN.now();

      while (i < _tweens.length) {
        if (_tweens[i].update(time) || preserve) {
          i++;
        } else {
          _tweens.splice(i, 1);
        }
      }

      return true;
    }
  };
}(); // Include a performance.now polyfill.
// In node.js, use process.hrtime.


if (typeof window === 'undefined' && typeof process !== 'undefined') {
  TWEEN.now = function () {
    var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

    return time[0] * 1000 + time[1] / 1000000;
  };
} // In a browser, use window.performance.now if it is available.
else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    TWEEN.now = window.performance.now.bind(window.performance);
  } // Use Date.now if it is available.
  else if (Date.now !== undefined) {
      TWEEN.now = Date.now;
    } // Otherwise, use 'new Date().getTime()'.
    else {
        TWEEN.now = function () {
          return new Date().getTime();
        };
      }

TWEEN.Tween = function (object) {
  var _object = object;
  var _valuesStart = {};
  var _valuesEnd = {};
  var _valuesStartRepeat = {};
  var _duration = 1000;
  var _repeat = 0;

  var _repeatDelayTime;

  var _yoyo = false;
  var _isPlaying = false;
  var _reversed = false;
  var _delayTime = 0;
  var _startTime = null;
  var _easingFunction = TWEEN.Easing.Linear.None;
  var _interpolationFunction = TWEEN.Interpolation.Linear;
  var _chainedTweens = [];
  var _onStartCallback = null;
  var _onStartCallbackFired = false;
  var _onUpdateCallback = null;
  var _onCompleteCallback = null;
  var _onStopCallback = null;

  this.to = function (properties, duration) {
    _valuesEnd = properties;

    if (duration !== undefined) {
      _duration = duration;
    }

    return this;
  };

  this.start = function (time) {
    TWEEN.add(this);
    _isPlaying = true;
    _onStartCallbackFired = false;
    _startTime = time !== undefined ? time : TWEEN.now();
    _startTime += _delayTime;

    for (var property in _valuesEnd) {
      // Check if an Array was provided as property value
      if (_valuesEnd[property] instanceof Array) {
        if (_valuesEnd[property].length === 0) {
          continue;
        } // Create a local copy of the Array with the start value at the front


        _valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
      } // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object


      if (_object[property] === undefined) {
        continue;
      } // Save the starting value.


      _valuesStart[property] = _object[property];

      if (_valuesStart[property] instanceof Array === false) {
        _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      _valuesStartRepeat[property] = _valuesStart[property] || 0;
    }

    return this;
  };

  this.stop = function () {
    if (!_isPlaying) {
      return this;
    }

    TWEEN.remove(this);
    _isPlaying = false;

    if (_onStopCallback !== null) {
      _onStopCallback.call(_object, _object);
    }

    this.stopChainedTweens();
    return this;
  };

  this.end = function () {
    this.update(_startTime + _duration);
    return this;
  };

  this.stopChainedTweens = function () {
    for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
      _chainedTweens[i].stop();
    }
  };

  this.delay = function (amount) {
    _delayTime = amount;
    return this;
  };

  this.repeat = function (times) {
    _repeat = times;
    return this;
  };

  this.repeatDelay = function (amount) {
    _repeatDelayTime = amount;
    return this;
  };

  this.yoyo = function (yoyo) {
    _yoyo = yoyo;
    return this;
  };

  this.easing = function (easing) {
    _easingFunction = easing;
    return this;
  };

  this.interpolation = function (interpolation) {
    _interpolationFunction = interpolation;
    return this;
  };

  this.chain = function () {
    _chainedTweens = arguments;
    return this;
  };

  this.onStart = function (callback) {
    _onStartCallback = callback;
    return this;
  };

  this.onUpdate = function (callback) {
    _onUpdateCallback = callback;
    return this;
  };

  this.onComplete = function (callback) {
    _onCompleteCallback = callback;
    return this;
  };

  this.onStop = function (callback) {
    _onStopCallback = callback;
    return this;
  };

  this.update = function (time) {
    var property;
    var elapsed;
    var value;

    if (time < _startTime) {
      return true;
    }

    if (_onStartCallbackFired === false) {
      if (_onStartCallback !== null) {
        _onStartCallback.call(_object, _object);
      }

      _onStartCallbackFired = true;
    }

    elapsed = (time - _startTime) / _duration;
    elapsed = elapsed > 1 ? 1 : elapsed;
    value = _easingFunction(elapsed);

    for (property in _valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (_valuesStart[property] === undefined) {
        continue;
      }

      var start = _valuesStart[property] || 0;
      var end = _valuesEnd[property];

      if (end instanceof Array) {
        _object[property] = _interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        } // Protect against non numeric properties.


        if (typeof end === 'number') {
          _object[property] = start + (end - start) * value;
        }
      }
    }

    if (_onUpdateCallback !== null) {
      _onUpdateCallback.call(_object, value);
    }

    if (elapsed === 1) {
      if (_repeat > 0) {
        if (isFinite(_repeat)) {
          _repeat--;
        } // Reassign starting values, restart by making startTime = now


        for (property in _valuesStartRepeat) {
          if (typeof _valuesEnd[property] === 'string') {
            _valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
          }

          if (_yoyo) {
            var tmp = _valuesStartRepeat[property];
            _valuesStartRepeat[property] = _valuesEnd[property];
            _valuesEnd[property] = tmp;
          }

          _valuesStart[property] = _valuesStartRepeat[property];
        }

        if (_yoyo) {
          _reversed = !_reversed;
        }

        if (_repeatDelayTime !== undefined) {
          _startTime = time + _repeatDelayTime;
        } else {
          _startTime = time + _delayTime;
        }

        return true;
      } else {
        if (_onCompleteCallback !== null) {
          _onCompleteCallback.call(_object, _object);
        }

        for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          _chainedTweens[i].start(_startTime + _duration);
        }

        return false;
      }
    }

    return true;
  };
};

TWEEN.Easing = {
  Linear: {
    None: function None(k) {
      return k;
    }
  },
  Quadratic: {
    In: function In(k) {
      return k * k;
    },
    Out: function Out(k) {
      return k * (2 - k);
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }

      return -0.5 * (--k * (k - 2) - 1);
    }
  },
  Cubic: {
    In: function In(k) {
      return k * k * k;
    },
    Out: function Out(k) {
      return --k * k * k + 1;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    }
  },
  Quartic: {
    In: function In(k) {
      return k * k * k * k;
    },
    Out: function Out(k) {
      return 1 - --k * k * k * k;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }

      return -0.5 * ((k -= 2) * k * k * k - 2);
    }
  },
  Quintic: {
    In: function In(k) {
      return k * k * k * k * k;
    },
    Out: function Out(k) {
      return --k * k * k * k * k + 1;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
  },
  Sinusoidal: {
    In: function In(k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },
    Out: function Out(k) {
      return Math.sin(k * Math.PI / 2);
    },
    InOut: function InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  },
  Exponential: {
    In: function In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    Out: function Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }
  },
  Circular: {
    In: function In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    Out: function Out(k) {
      return Math.sqrt(1 - --k * k);
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }
  },
  Elastic: {
    In: function In(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    },
    Out: function Out(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      k *= 2;

      if (k < 1) {
        return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In: function In(k) {
      var s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    Out: function Out(k) {
      var s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    InOut: function InOut(k) {
      var s = 1.70158 * 1.525;

      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }

      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
  },
  Bounce: {
    In: function In(k) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - k);
    },
    Out: function Out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    InOut: function InOut(k) {
      if (k < 0.5) {
        return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
      }

      return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }
  }
};
TWEEN.Interpolation = {
  Linear: function Linear(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },
  Bezier: function Bezier(v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = TWEEN.Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },
  CatmullRom: function CatmullRom(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  Utils: {
    Linear: function Linear(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein: function Bernstein(n, i) {
      var fc = TWEEN.Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: function () {
      var a = [1];
      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),
    CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TWEEN);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/data-range/Category.js":
/*!******************************************!*\
  !*** ./src/utils/data-range/Category.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */

/**
 * @author kyle / http://nikai.us/
 */

/**
 * Category
 * @param {Object} splitList:
 *   { 
 *       other: 1,
 *       1: 2,
 *       2: 3,
 *       3: 4,
 *       4: 5,
 *       5: 6,
 *       6: 7
 *   }
 */
function Category(splitList) {
  this.splitList = splitList || {
    other: 1
  };
}

Category.prototype.get = function (count) {
  var splitList = this.splitList;
  var value = splitList['other'];

  for (var i in splitList) {
    if (count == i) {
      value = splitList[i];
      break;
    }
  }

  return value;
};
/**
 * 根据 DataSet 自动生成对应的 splitList
 */


Category.prototype.generateByDataSet = function (dataSet, color) {
  var colors = color || ['rgba(255, 255, 0, 0.8)', 'rgba(253, 98, 104, 0.8)', 'rgba(255, 146, 149, 0.8)', 'rgba(255, 241, 193, 0.8)', 'rgba(110, 176, 253, 0.8)', 'rgba(52, 139, 251, 0.8)', 'rgba(17, 102, 252, 0.8)'];
  var data = dataSet.get();
  this.splitList = {};
  var count = 0;

  for (var i = 0; i < data.length; i++) {
    if (this.splitList[data[i].count] === undefined) {
      this.splitList[data[i].count] = colors[count];
      count++;
    }

    if (count >= colors.length - 1) {
      break;
    }
  }

  this.splitList['other'] = colors[colors.length - 1];
};

Category.prototype.getLegend = function (options) {
  var splitList = this.splitList;
  var container = document.createElement('div');
  container.style.cssText = "background:#fff; padding: 5px; border: 1px solid #ccc;";
  var html = '';

  for (var key in splitList) {
    html += '<div style="line-height: 19px;" value="' + key + '"><span style="vertical-align: -2px; display: inline-block; width: 30px;height: 19px;background:' + splitList[key] + ';"></span><span style="margin-left: 3px;">' + key + '<span></div>';
  }

  container.innerHTML = html;
  return container;
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/utils/data-range/Choropleth.js":
/*!********************************************!*\
  !*** ./src/utils/data-range/Choropleth.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* eslint-disable */

/**
 * @author kyle / http://nikai.us/
 */

/**
 * Choropleth
 * @param {Object} splitList:
 *       [
 *           {
 *               start: 0,
 *               end: 2,
 *               value: randomColor()
 *           },{
 *               start: 2,
 *               end: 4,
 *               value: randomColor()
 *           },{
 *               start: 4,
 *               value: randomColor()
 *           }
 *       ]
 *
 */

function Choropleth(splitList) {
  this.splitList = splitList || [{
    start: 0,
    value: 'red'
  }];
}

Choropleth.prototype.get = function (count) {
  var splitList = this.splitList;
  var value = false;

  for (var i = 0; i < splitList.length; i++) {
    if ((splitList[i].start === undefined || splitList[i].start !== undefined && count >= splitList[i].start) && (splitList[i].end === undefined || splitList[i].end !== undefined && count < splitList[i].end)) {
      value = splitList[i].value;
      break;
    }
  }

  return value;
};
/**
 * 根据DataSet自动生成对应的splitList
 */


Choropleth.prototype.generateByDataSet = function (dataSet, gradient) {
  var min = dataSet.getMin('count');
  var max = dataSet.getMax('count');
  this.generateByMinMax(min, max, gradient);
};
/**
 * 根据渐变规则
 * 自动生成对应的 splitList
 */


Choropleth.prototype.generateByMinMax = function (min, max, gradient) {
  var colors = gradient || _config__WEBPACK_IMPORTED_MODULE_0__["gradient"];
  var splitNum = Number(Math.ceil((max - min) / colors.length));
  max = Number(max);
  var index = Number(min);
  this.splitList = [];
  var count = 0;

  while (index < max) {
    this.splitList.push({
      start: index,
      end: index + splitNum,
      value: colors[count]
    });
    count++;
    index += splitNum;
  }
};

Choropleth.prototype.getLegend = function (options) {
  return this.splitList;
};

/* harmony default export */ __webpack_exports__["default"] = (Choropleth);

/***/ }),

/***/ "./src/utils/data-range/Intensity.js":
/*!*******************************************!*\
  !*** ./src/utils/data-range/Intensity.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ "./src/utils/Canvas.js");
/**
 * @author kyle / http://nikai.us/
 */

/**
 * Category
 * @param {Object} [options]   Available options:
 *                             {Object} gradient: { 0.25: 'rgb(0,0,255)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)'}
 */

function Intensity(options) {
  options = options || {};
  this.gradient = options.gradient;
  this.maxSize = options.maxSize || 35;
  this.minSize = options.minSize || 0;
  this.max = options.max || 100;
  this.min = options.min || 0;
  this.initPalette();
}

Intensity.prototype.setMax = function (value) {
  this.max = value || 100;
};

Intensity.prototype.setMin = function (value) {
  this.min = value || 0;
};

Intensity.prototype.setMaxSize = function (maxSize) {
  this.maxSize = maxSize || 35;
};

Intensity.prototype.setMinSize = function (minSize) {
  this.minSize = minSize || 0;
};

Intensity.prototype.initPalette = function () {
  var gradient = this.gradient;
  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"](256, 1);
  var paletteCtx = this.paletteCtx = canvas.getContext('2d');
  var lineGradient = paletteCtx.createLinearGradient(0, 0, 256, 1);
  gradient.forEach(function (item) {
    var stopColor = item.color;

    if (Object.prototype.toString.call(stopColor) === '[object Array]') {
      stopColor = stopColor[0];
    }

    lineGradient.addColorStop(parseFloat(item.key), stopColor);
  });
  paletteCtx.fillStyle = lineGradient;
  paletteCtx.fillRect(0, 0, 256, 1);
};

Intensity.prototype.getColor = function (value) {
  var imageData = this.getImageData(value);
  return 'rgba(' + imageData[0] + ', ' + imageData[1] + ', ' + imageData[2] + ', ' + imageData[3] / 256 + ')';
};

Intensity.prototype.getImageData = function (value) {
  var imageData = this.paletteCtx.getImageData(0, 0, 256, 1).data;

  if (value === undefined) {
    return imageData;
  }

  var max = this.max;
  var min = this.min;

  if (value > max) {
    value = max;
  }

  if (value < min) {
    value = min;
  } // Math.floor((value - min) / (max - min) * (256 - 1)) 获取当前值占比整个 canvas 长度的比例
  // 1 像素 = 4 个数组元素 r,g,b,a 组成，所以这里乘以 4


  var index = Math.floor((value - min) / (max - min) * (256 - 1)) * 4;
  return [imageData[index], imageData[index + 1], imageData[index + 2], imageData[index + 3]];
};
/**
 * @param Number value
 * @param Number max of value
 * @param Number max of size
 * @param Object other options
 */


Intensity.prototype.getSize = function (value) {
  var size = 0;
  var max = this.max;
  var min = this.min;
  var maxSize = this.maxSize;
  var minSize = this.minSize;

  if (value > max) {
    value = max;
  }

  if (value < min) {
    value = min;
  }

  size = minSize + (value - min) / (max - min) * (maxSize - minSize);
  return size;
};

Intensity.prototype.getLegend = function (options) {
  var gradient = this.gradient;
  var width = options.width || 20;
  var height = options.height || 180;
  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"](width, height);
  var paletteCtx = canvas.getContext('2d');
  var lineGradient = paletteCtx.createLinearGradient(0, height, 0, 0);
  console.log(gradient);

  for (var key in gradient) {
    lineGradient.addColorStop(parseFloat(key), gradient[key]);
  }

  paletteCtx.fillStyle = lineGradient;
  paletteCtx.fillRect(0, 0, width, height);
  return canvas;
};

Intensity.prototype.getTextColor = function (splitList, count) {
  return splitList.find(function (split) {
    if (count >= split.start & count <= split.end) {
      return split.value;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Intensity);

/***/ }),

/***/ "./src/utils/grid.js":
/*!***************************!*\
  !*** ./src/utils/grid.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_range_Intensity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-range/Intensity */ "./src/utils/data-range/Intensity.js");
/* harmony import */ var _data_DataSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DataSet */ "./src/data/DataSet.js");



var getMaxAndMinCountByGrids = function getMaxAndMinCountByGrids(grids) {
  var max = 0;
  var min = 0;
  Object.keys(grids).forEach(function (key, i) {
    var count = grids[key];
    if (count > max) max = count;

    if (i > 0) {
      if (count < min) min = count;
    } else {
      min = grids[key];
    }
  });
  return {
    min: min,
    max: max
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function draw(context, dataSet, options) {
    context.save();
    var grids = {};
    var data = dataSet instanceof _data_DataSet__WEBPACK_IMPORTED_MODULE_1__["default"] ? dataSet.get() : dataSet;
    var size = options._size || options.size || 50;
    var choropleth = options.choropleth;
    var intensity = options.intensity;
    var useLocalExtrema = options.useLocalExtrema;
    var _width = options._width;
    var _height = options._height; // 如果有配置 width,height 项，则优先取 width,height

    var xScale = _width || size;
    var yScale = _height || size;
    var offset = options.offset || {
      x: 0,
      y: 0
    };
    if (options.unit === 'px') xScale = yScale = size;

    for (var i = 0; i < data.length; i++) {
      var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
      var coordX = (coordinates[0] - offset.x) / xScale;
      var coordY = (coordinates[1] - offset.y) / yScale;

      if (options.unit !== 'm') {
        coordX = Math.floor(coordX);
        coordY = Math.floor(coordY);
      }

      var gridKey = coordX + ',' + coordY;

      if (!grids[gridKey]) {
        grids[gridKey] = 0;
      }

      grids[gridKey] += ~~(data[i].count || 1);
    }

    var curMaxAndMin;

    if (useLocalExtrema) {
      curMaxAndMin = getMaxAndMinCountByGrids(grids);
      intensity = new _data_range_Intensity__WEBPACK_IMPORTED_MODULE_0__["default"]({
        max: curMaxAndMin.max,
        min: curMaxAndMin.min,
        gradient: options.gradient
      });
      choropleth.generateByMinMax(curMaxAndMin.min, curMaxAndMin.max, options.gradient);
    }

    for (var _gridKey in grids) {
      _gridKey = _gridKey.split(',');
      context.beginPath();
      context.rect(_gridKey[0] * xScale + offset.x - xScale / 2, _gridKey[1] * yScale + offset.y - yScale / 2, xScale, yScale);
      context.fillStyle = intensity.getColor(grids[_gridKey]);
      context.fill();

      if (options.strokeStyle && options.lineWidth) {
        context.stroke();
      }
    }

    if (options.label && options.label.show !== false) {
      context.fillStyle = options.label.fillStyle || 'white';

      if (options.label.font) {
        context.font = options.label.font;
      }

      if (options.label.shadowColor) {
        context.shadowColor = options.label.shadowColor;
      }

      if (options.label.shadowBlur) {
        context.shadowBlur = options.label.shadowBlur;
      }

      if (options.showText && choropleth.getLegend().length) {
        for (var _gridKey2 in grids) {
          _gridKey2 = _gridKey2.split(',');
          var text = grids[_gridKey2];

          var _intensity$getTextCol = intensity.getTextColor(choropleth.getLegend(), text),
              color = _intensity$getTextCol.value.color; // 根据当前 count 值所在区间，获取对应的 text color 值


          if (Object.prototype.toString.call(color) === '[object Array]' && color.length === 2) {
            context.fillStyle = color[1];
          }

          var textWidth = context.measureText(text).width;
          context.fillText(text, _gridKey2[0] * xScale + offset.x - textWidth / 2, _gridKey2[1] * yScale + offset.y + 5);
        }
      }
    }

    context.restore();
  }
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getPositionByAddress, getAddressByLatLng, convertorPointsToPath, getAddressByPosition, pointToLatLng, toPascal, hasNoneCrossingLinePolygonal, getCrossingPolygonal, isCrossingPolygonal, getPolygonAreaCenter, getMapSize, clear, toFixedNumber, fomatFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionByAddress", function() { return getPositionByAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressByLatLng", function() { return getAddressByLatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertorPointsToPath", function() { return convertorPointsToPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressByPosition", function() { return getAddressByPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToLatLng", function() { return pointToLatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPascal", function() { return toPascal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNoneCrossingLinePolygonal", function() { return hasNoneCrossingLinePolygonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCrossingPolygonal", function() { return getCrossingPolygonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCrossingPolygonal", function() { return isCrossingPolygonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPolygonAreaCenter", function() { return getPolygonAreaCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapSize", function() { return getMapSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixedNumber", function() { return toFixedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fomatFloat", function() { return fomatFloat; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global qq */
var getAddressByPosition = function getAddressByPosition(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return getAddressByLatLng(pointToLatLng({
    lat: lat,
    lng: lng
  }));
};

var getPositionByAddress = function getPositionByAddress(_ref2) {
  var address = _ref2.address;
  return getLatLngByAddress(address);
};

var getLatLngByAddress = function getLatLngByAddress(address) {
  return new Promise(function (resolve) {
    var geocoder = new qq.maps.Geocoder({
      complete: function complete(result) {
        return resolve(result);
      }
    });
    geocoder.getLocation(address);
  });
};

var getAddressByLatLng = function getAddressByLatLng(latLng) {
  return new Promise(function (resolve) {
    var geocoder = new qq.maps.Geocoder({
      complete: function complete(result) {
        return resolve(result);
      }
    });
    geocoder.getAddress(latLng);
  });
};

var convertorPointsToPath = function convertorPointsToPath(points) {
  return points.map(function (position) {
    return pointToLatLng(position);
  });
};

var pointToLatLng = function pointToLatLng(_ref3) {
  var lat = _ref3.lat,
      lng = _ref3.lng;
  return new qq.maps.LatLng(lat, lng);
}; // 简单的首字母大写


var toPascal = function toPascal(str) {
  if (!str || str.length === 0) return '';
  return "".concat(str[0].toUpperCase()).concat(str.substr(1));
}; // 计算直线是否相交


var crossMul = function crossMul(v1, v2) {
  return v1.x * v2.y - v1.y * v2.x;
};

var isCrossingLine = function isCrossingLine(_ref4, _ref5) {
  var _ref6 = _slicedToArray(_ref4, 2),
      p1 = _ref6[0],
      p2 = _ref6[1];

  var _ref7 = _slicedToArray(_ref5, 2),
      p3 = _ref7[0],
      p4 = _ref7[1];

  var v1 = {
    x: p1.x - p3.x,
    y: p1.y - p3.y
  };
  var v2 = {
    x: p2.x - p3.x,
    y: p2.y - p3.y
  };
  var v3 = {
    x: p4.x - p3.x,
    y: p4.y - p3.y
  };
  var v = crossMul(v1, v3) * crossMul(v2, v3);
  v1 = {
    x: p3.x - p1.x,
    y: p3.y - p1.y
  };
  v2 = {
    x: p4.x - p1.x,
    y: p4.y - p1.y
  };
  v3 = {
    x: p2.x - p1.x,
    y: p2.y - p1.y
  };
  return !!(v <= 0 && crossMul(v1, v3) * crossMul(v2, v3) <= 0);
}; // 是否是无交叉多边形


var hasNoneCrossingLinePolygonal = function hasNoneCrossingLinePolygonal(points) {
  var lines = getPointsLines(points);
  return !lines.some(function (line, i) {
    var targetLines = lines.filter(function (_, ti) {
      return Math.abs(ti - i) >= 2 && Math.abs(ti - i) < lines.length - 1;
    });
    return targetLines.some(function (targetLine) {
      return isCrossingLine(line, targetLine);
    });
  });
}; // 获取点阵组成的线


var getPointsLines = function getPointsLines(points) {
  var lines = [];

  if (points && points.length) {
    points.forEach(function (p, i) {
      lines.push([p, points[i + 1 === points.length ? 0 : i + 1]]);
    });
  }

  return lines;
}; // 判断两个多边形是否相交


var isCrossingPolygonal = function isCrossingPolygonal(_ref8) {
  var _ref9 = _slicedToArray(_ref8, 2),
      points1 = _ref9[0],
      points2 = _ref9[1];

  var lineList1 = getPointsLines(points1);
  var lineList2 = getPointsLines(points2);
  return lineList1.some(function (l1) {
    return lineList2.some(function (l2) {
      return isCrossingLine(l1, l2);
    });
  });
}; // 判断一组多边形是否有交叉，如果有交叉，返回交叉的index


var getCrossingPolygonal = function getCrossingPolygonal(list) {
  var groupList = [];
  var crossingList = [];

  if (list && Array.isArray(list) && list.length > 1) {
    for (var i = 0, len = list.length; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
        groupList.push({
          index: [i, j],
          polygonal: [list[i], list[j]]
        });
      }
    }

    groupList.forEach(function (_ref10) {
      var polygonal = _ref10.polygonal,
          index = _ref10.index;

      if (isCrossingPolygonal(polygonal)) {
        crossingList.push(index);
      }
    });
  }

  return crossingList;
}; // getPolygonAreaCenter 计算多边形质心


function Area(p0, p1, p2) {
  var area = 0.0;
  area = p0.x * p1.y + p1.x * p2.y + p2.x * p0.y - p1.x * p0.y - p2.x * p1.y - p0.x * p2.y;
  return area / 2;
}

var getPolygonAreaCenter = function getPolygonAreaCenter(points) {
  var sumX = 0;
  var sumY = 0;
  var sumArea = 0;
  var p1 = points[1];
  var p2, area;

  for (var i = 2; i < points.length; i++) {
    p2 = points[i];
    area = Area(points[0], p1, p2);
    sumArea += area;
    sumX += (points[0].x + p1.x + p2.x) * area;
    sumY += (points[0].y + p1.y + p2.y) * area;
    p1 = p2;
  }

  var x = sumX / sumArea / 3;
  var y = sumY / sumArea / 3;
  return {
    x: x,
    y: y
  };
};

var getMapSize = function getMapSize(map) {
  var mapContainer = map.container;
  return {
    width: mapContainer.clientWidth,
    height: mapContainer.clientHeight
  };
};

var clear = function clear(context) {
  context && context.clearRect && context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

var toFixedNumber = function toFixedNumber(number, count) {
  var unit = Math.pow(10, count);
  return Math.round(number * unit / unit);
};

var fomatFloat = function fomatFloat(value, n) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var calc = flag ? Math.round : Math.floor;
  var f = calc(value * Math.pow(10, n)) / Math.pow(10, n);
  var s = f.toString();
  var rs = s.indexOf('.');

  if (rs < 0) {
    s += '.';
  }

  for (var i = s.length - s.indexOf('.'); i <= n; i++) {
    s += '0';
  }

  return s;
};



/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-tmap.js.map