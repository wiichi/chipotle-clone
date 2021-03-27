webpackHotUpdate_N_E("pages/Order/[meal]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/Order/[meal].js":
/*!*******************************!*\
  !*** ./pages/Order/[meal].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projects_node_chipotle_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Projects_node_chipotle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Projects\\node\\chipotle\\pages\\Order\\[meal].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Projects_node_chipotle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var meals = [{
  name: "BURRITO",
  link: '/Burrito',
  img: "/burrito.png"
}, {
  name: "BURRITO BOWL",
  link: '/Bowl',
  img: "/bowl.jpg"
}, {
  name: "LIFESTYLE BOWL",
  link: '/Lifestyle',
  img: "/lifestyle.png"
}, {
  name: "QUESADILLA",
  link: '/Quesadilla',
  img: "/order.jpg"
}, {
  name: "SALAD",
  link: '/Salad',
  img: "/salad.jpg"
}, {
  name: "TACOS",
  link: '/Tacos',
  img: "/tacos.jpg"
}, {
  name: "SIDES & DRINKS",
  link: '/Sides',
  img: "/chips-quac.jpg"
}];
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  console.log(meals.map(function (m) {
    return m.link.split('/')[1];
  }));
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var meal = router.query.meal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    name: 'burrito',
    ingredients: []
  }),
      burrito = _useState[0],
      setBurrito = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    index: null,
    message: null
  }),
      errormessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var operations = {
    "PROTEIN OR VEGGIE": function PROTEINORVEGGIE(p, i) {
      return addIngredient(p, i);
    },
    "RICE": function RICE(p, i) {
      return addIngredient(p, i);
    },
    "BEANS": function BEANS(p, i) {
      return addIngredient(p, i);
    },
    "TOP THINGS OFF": function TOPTHINGSOFF(p, i) {
      return addIngredient(p, i);
    },
    "OPTIONS": function OPTIONS(p, i) {
      return addIngredient(p, i);
    },
    "SIDE": function SIDE(p, i) {
      return addIngredient(p, i);
    },
    "DRINKS": function DRINKS(p, i) {
      return addIngredient(p, i);
    }
  };

  var img = function img() {
    console.log(meal);

    if (meal == 'Burrito') {
      return '/burrito.png';
    }

    if (meal == 'Bowl') {
      return '/bowl.jpg';
    }

    if (meal == 'Lifestyle') {
      return '/lifestyle.png';
    }

    if (meal == 'Quesadilla') {
      return '/order.jpg';
    }

    if (meal == 'Salad') {
      return '/salad.jpg';
    }

    if (meal == 'Tacos') {
      return '/tacos.jpg';
    }

    if (meal == 'Sides') {
      return '/chips-quac.jpg';
    }
  };

  var por = [{
    name: 'CHICKEN',
    category: "",
    price: 7.35,
    cals: 180,
    img: '/chicken.png'
  }, {
    name: 'STEAK',
    category: "",
    price: 8.35,
    cals: 150,
    img: '/steak.png'
  }, {
    name: 'BARBACOA',
    category: "",
    price: 8.35,
    cals: 170,
    img: "/barbacoa.png"
  }, {
    name: 'CARNITAS',
    category: "",
    price: 7.85,
    cals: 210,
    img: "/carnitas.png"
  }, {
    name: 'SOFRITAS',
    category: "Plant-Based Protein",
    price: 7.35,
    cals: 150,
    img: "/sofritas.png"
  }, {
    name: 'VEGGIE',
    category: "Plant-Based Protein",
    price: 7.35,
    cals: 20,
    img: "/veggie.png"
  }];
  var rice = [{
    name: 'WHITE RICE',
    price: 0,
    cals: 210,
    img: '/wrice.png'
  }, {
    name: 'BROWN RICE',
    price: 0,
    cals: 210,
    img: '/brice.png'
  }, {
    name: 'CAULIFOWER RICE',
    price: 2,
    cals: 40,
    img: '/crice.png'
  }];
  var beans = [{
    name: 'BLACK BEANS',
    price: 0,
    cals: 130,
    img: '/bbeans.png'
  }, {
    name: 'PINTO BEANS',
    price: 0,
    cals: 130,
    img: '/pbeans.png'
  }, {
    name: 'NO BEANS',
    price: 0,
    cals: 0,
    img: ''
  }];
  var ttf = [{
    name: 'GUACAMOLE',
    price: 0,
    cals: 230,
    img: '/guacamole.png'
  }, {
    name: 'FRESH TOMATO SALSA',
    price: 0,
    cals: 25,
    img: '/freshtomatosalsa.png'
  }, {
    name: 'ROASTED CHILI-CORN SALSA',
    price: 0,
    cals: 80,
    img: '/roastedchilicornsalsa.png'
  }, {
    name: 'TOMATILLO-GREEN CHILI SALSA',
    price: 0,
    cals: 15,
    img: '/tomatillogreenchilisalsa.png'
  }, {
    name: 'TOMATILLO-RED CHILI SALSA',
    price: 0,
    cals: 30,
    img: '/tomatilloredchilisalsa.png'
  }, {
    name: 'SOUR CREAM',
    price: 0,
    cals: 110,
    img: '/sourcream.png'
  }, {
    name: 'FAJITA VEGGIES',
    price: 0,
    cals: 110,
    img: '/fajitaveggies.png'
  }, {
    name: 'ROMAINE LETTUCE',
    price: 0,
    cals: 5,
    img: '/romainelettuce.png'
  }, {
    name: 'QUESO BLANCO',
    price: 0,
    cals: 120,
    img: '/quesoblanco.png'
  }];
  var options = [{
    name: 'DOUBLE WRAP WITH TORTILLA',
    price: .25,
    cals: 320,
    img: '/doublewrap.jpg'
  }];
  var side = [{
    name: 'CHIPS',
    price: 1.50,
    cals: 540,
    img: '/chips.png'
  }, {
    name: 'CHIPS & GUACAMOLE',
    price: 3.75,
    cals: 770,
    img: '/chipsguacamole.png'
  }];
  var drinks = [{
    name: 'ORGANIC LEMONADE',
    price: 2.40,
    cals: 110,
    img: '/lemonade.png'
  }, {
    name: 'ORGANIC HIBISCUS LEMONADE',
    price: 2.40,
    cals: 110,
    img: '/hlemonade.png'
  }, {
    name: 'ORGANIC MANDARIN AGUA FRESCA',
    price: 2.40,
    cals: 110,
    img: '/aguafresca.png'
  }];
  var ingredients = {
    "PROTEIN OR VEGGIE": por,
    "RICE": rice,
    "BEANS": beans,
    "TOP THINGS OFF": ttf,
    "OPTIONS": options,
    "SIDE": side,
    'DRINKS': drinks
  };

  var addIngredient = function addIngredient(p, i) {
    var found = burrito.ingredients.find(function (e) {
      return e.name == p.name;
    });
    console.log('found', found);
    console.log(p);

    var add = function add() {
      return found ? setBurrito(_objectSpread(_objectSpread({}, burrito), {}, {
        ingredients: burrito.ingredients.filter(function (i) {
          return i.name != p.name;
        })
      })) : setBurrito(_objectSpread(_objectSpread({}, burrito), {}, {
        ingredients: burrito.ingredients = [].concat(Object(C_Projects_node_chipotle_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(burrito.ingredients), [p])
      }));
    };

    var veggieSelected = burrito.ingredients.some(function (el) {
      return el.name == 'VEGGIE';
    });

    if (p.name == "VEGGIE") {
      if (veggieSelected) {
        add();
        return;
      }

      if (burrito.ingredients.length > 0) {
        console.log('cant mix with veggies');
        setErrorMessage({
          index: i,
          message: "You can't mix veggies"
        });
        setTimeout(function () {
          return setErrorMessage("");
        }, 1000);
        return;
      }

      add();
      return;
    } else {
      if (veggieSelected) {
        console.log("Cant mix with veggies");
        setErrorMessage({
          index: i,
          message: "You can't mix veggies"
        });
        setTimeout(function () {
          return setErrorMessage("");
        }, 1000);
        return;
      }

      add();
      console.log(burrito);
      return;
    }
  };

  var selected = function selected(p) {
    // console.log(burrito.ingredients.indexOf(p))
    return burrito.ingredients.find(function (e) {
      return e.name == p.name;
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "fixed bg-white w-full z-10 h-16 lg:h-24 px-2 flex justify-between items-center border-gray-300 border-b-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-grow items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "h-14",
              src: "/logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 23
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-yellow-700 px-4 border-gray-300 border-r-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/signin",
            children: "SIGN IN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 82
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "font-bold text-yellow-700 px-4 hover:underline",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: "RETURN TO MENU"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex-grow-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "",
            src: "/bag.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col lg:flex-row px-8 lg:border-b-2 lg:w-4/6 mx-auto pt-40 pb-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-2/3 mx-auto lg:mx-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: img()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 56
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-yellow-900 text-md uppercase font-bold",
          children: "Build Your"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-yellow-900 pb-2 font-bold text-4xl",
          children: meal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-yellow-900",
          children: "Your choice of freshly grilled meat or sofritas wrapped in a warm flour torilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, _this), Object.keys(ingredients).map(function (ing) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-yellow-50 border-t-2 border-b-2 border-gray-200 lg:bg-transparent lg:w-4/6 lg:mx-auto lg:border-none py-5 font-bold text-yellow-900 text-xl",
          children: ing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:w-5/6 text-yellow-700 mx-auto px-5 sm:hidden md:hidden",
          children: "Choose up to two"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid lg:grid-cols-2 grid-cols-1 lg:gap-5 lg:w-4/6 mx-auto",
          children: ingredients[ing].map(function (p, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return operations[ing](p, i);
              },
              className: "".concat(selected(p) && "bg-yellow-800 text-white scale-95", " overflow-hidden transform transition-all 1s relative flex justify-between items-center border-2 border-gray-200 py-8"),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "absolute transform -translate-x-10",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "h-28",
                  src: p.img
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 73
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-16 flex flex-col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "".concat(selected(p) ? 'text-white' : 'text-yellow-900', " font-bold"),
                  children: p.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "text-yellow-800",
                  children: p.category
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex gap-5 text-yellow-600 font-bold",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: ["$", p.price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [p.cals, " cal"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 21
              }, _this), errormessage.message && errormessage.index == i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "bg-yellow-800 p-2 text-white w-44 text-center lg:absolute lg:left-1/2 lg:-translate-x-2/4 transform",
                children: errormessage.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 73
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "transform rotate-90 text-4xl text-gray-500 h-5",
                children: "..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }, _this)]
      }, void 0, true);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed w-full bottom-0 bg-gray-100 lg:py-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:w-5/6 m-auto flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hidden lg:block flex-grow",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "uppercase font-bold",
            children: "Your meal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Select a protein or veggie to get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "sm:w-full sm:py-5 bg-yellow-800 lg:w-1/3 text-white font-bold text-lg uppercase",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 9
  }, _this);
}, "0Zgnf5FBihC15M179rXn4oPhxdI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvT3JkZXIvW21lYWxdLmpzIl0sIm5hbWVzIjpbIm1lYWxzIiwibmFtZSIsImxpbmsiLCJpbWciLCJjb25zb2xlIiwibG9nIiwibWFwIiwibSIsInNwbGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibWVhbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJpbmdyZWRpZW50cyIsImJ1cnJpdG8iLCJzZXRCdXJyaXRvIiwiaW5kZXgiLCJtZXNzYWdlIiwiZXJyb3JtZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwib3BlcmF0aW9ucyIsInAiLCJpIiwiYWRkSW5ncmVkaWVudCIsInBvciIsImNhdGVnb3J5IiwicHJpY2UiLCJjYWxzIiwicmljZSIsImJlYW5zIiwidHRmIiwib3B0aW9ucyIsInNpZGUiLCJkcmlua3MiLCJmb3VuZCIsImZpbmQiLCJlIiwiYWRkIiwiZmlsdGVyIiwidmVnZ2llU2VsZWN0ZWQiLCJzb21lIiwiZWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWQiLCJPYmplY3QiLCJrZXlzIiwiaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmLGlDQUFpQywyRkFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RTtBQUNKO0FBQ3NCO0FBQ2xCO0FBQzlEO0FBQ2YsU0FBUyw0RkFBaUIsU0FBUywwRkFBZSxTQUFTLHFHQUEwQixTQUFTLDRGQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBMkU7QUFDNUQ7QUFDZjtBQUNBLG9DQUFvQywyRkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDJGQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1Y7QUFBQ0MsTUFBSSxFQUFFLFNBQVA7QUFBa0JDLE1BQUksRUFBRSxVQUF4QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBRFUsRUFFVjtBQUFDRixNQUFJLEVBQUUsY0FBUDtBQUF1QkMsTUFBSSxFQUFFLE9BQTdCO0FBQXNDQyxLQUFHLEVBQUU7QUFBM0MsQ0FGVSxFQUdWO0FBQUNGLE1BQUksRUFBRSxnQkFBUDtBQUF5QkMsTUFBSSxFQUFFLFlBQS9CO0FBQTZDQyxLQUFHLEVBQUU7QUFBbEQsQ0FIVSxFQUlWO0FBQUNGLE1BQUksRUFBRSxZQUFQO0FBQXFCQyxNQUFJLEVBQUUs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QyxZQUFZLENBQUNGLEtBQWIsSUFBc0JNLENBQTlDLGlCQUFtRDtBQUFLLHlCQUFTLEVBQUMscUdBQWY7QUFBQSwwQkFDL0NKLFlBQVksQ0FBQ0Q7QUFEa0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYeEQsZUFjSTtBQUFLLHlCQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLFdBQXJCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSc0M7QUFBQSxzQkFBTDtBQUFBLEtBQWhDLENBOUJMLGVBNERHO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLDJCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBS0M7QUFBUSxtQkFBUyxFQUFDLGlGQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0VILENBbk5EO0FBQUEsVUFFbUJSLHFEQUZuQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL09yZGVyL1ttZWFsXS42M2ExOWIyZWFhYmQwMWE4ZTAzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgbWVhbHMgPSBbXHJcbiAgICB7bmFtZTogXCJCVVJSSVRPXCIsIGxpbms6ICcvQnVycml0bycsIGltZzogXCIvYnVycml0by5wbmdcIn0sXHJcbiAgICB7bmFtZTogXCJCVVJSSVRPIEJPV0xcIiwgbGluazogJy9Cb3dsJywgaW1nOiBcIi9ib3dsLmpwZ1wifSxcclxuICAgIHtuYW1lOiBcIkxJRkVTVFlMRSBCT1dMXCIsIGxpbms6ICcvTGlmZXN0eWxlJywgaW1nOiBcIi9saWZlc3R5bGUucG5nXCJ9LFxyXG4gICAge25hbWU6IFwiUVVFU0FESUxMQVwiLCBsaW5rOiAnL1F1ZXNhZGlsbGEnLCBpbWc6IFwiL29yZGVyLmpwZ1wifSxcclxuICAgIHtuYW1lOiBcIlNBTEFEXCIsIGxpbms6ICcvU2FsYWQnLCBpbWc6IFwiL3NhbGFkLmpwZ1wifSxcclxuICAgIHtuYW1lOiBcIlRBQ09TXCIsIGxpbms6ICcvVGFjb3MnLCBpbWc6IFwiL3RhY29zLmpwZ1wifSxcclxuICAgIHtuYW1lOiBcIlNJREVTICYgRFJJTktTXCIsIGxpbms6ICcvU2lkZXMnLCBpbWc6IFwiL2NoaXBzLXF1YWMuanBnXCJ9LFxyXG4gIF1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWVhbHMubWFwKG0gPT4gbS5saW5rLnNwbGl0KCcvJylbMV0pKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgbWVhbCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbIGJ1cnJpdG8sIHNldEJ1cnJpdG8gXSA9IHVzZVN0YXRlKHsgbmFtZTogJ2J1cnJpdG8nLCBpbmdyZWRpZW50czogW119KTtcclxuICAgIGNvbnN0IFsgZXJyb3JtZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2UgXSA9IHVzZVN0YXRlKHtpbmRleDogbnVsbCwgbWVzc2FnZTogbnVsbH0pXHJcbiAgICBjb25zdCBvcGVyYXRpb25zID0ge1xyXG4gICAgICAgIFwiUFJPVEVJTiBPUiBWRUdHSUVcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJSSUNFXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiQkVBTlNcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJUT1AgVEhJTkdTIE9GRlwiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIk9QVElPTlNcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJTSURFXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiRFJJTktTXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIH1cclxuICAgIGNvbnN0IGltZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZWFsKVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ0J1cnJpdG8nKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvYnVycml0by5wbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ0Jvd2wnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvYm93bC5qcGcnXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZihtZWFsID09ICdMaWZlc3R5bGUnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvbGlmZXN0eWxlLnBuZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVhbCA9PSAnUXVlc2FkaWxsYScpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9vcmRlci5qcGcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ1NhbGFkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL3NhbGFkLmpwZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVhbCA9PSAnVGFjb3MnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvdGFjb3MuanBnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZWFsID09ICdTaWRlcycpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9jaGlwcy1xdWFjLmpwZydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHBvciA9IFtcclxuICAgICAgICB7bmFtZTogJ0NISUNLRU4nLCBjYXRlZ29yeTogXCJcIiwgcHJpY2U6IDcuMzUsIGNhbHM6IDE4MCwgaW1nOiAnL2NoaWNrZW4ucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdTVEVBSycsIGNhdGVnb3J5OiBcIlwiLCBwcmljZTogOC4zNSwgY2FsczogMTUwLCBpbWc6ICcvc3RlYWsucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdCQVJCQUNPQScsIGNhdGVnb3J5OiBcIlwiLCBwcmljZTogOC4zNSwgY2FsczogMTcwLCBpbWc6IFwiL2JhcmJhY29hLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTogJ0NBUk5JVEFTJywgY2F0ZWdvcnk6IFwiXCIsIHByaWNlOiA3Ljg1LCBjYWxzOiAyMTAsIGltZzogXCIvY2Fybml0YXMucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOiAnU09GUklUQVMnLCBjYXRlZ29yeTogXCJQbGFudC1CYXNlZCBQcm90ZWluXCIsIHByaWNlOiA3LjM1LCBjYWxzOiAxNTAsIGltZzogXCIvc29mcml0YXMucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOiAnVkVHR0lFJywgY2F0ZWdvcnk6IFwiUGxhbnQtQmFzZWQgUHJvdGVpblwiLCBwcmljZTogNy4zNSwgY2FsczogMjAsIGltZzogXCIvdmVnZ2llLnBuZ1wifSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCByaWNlID0gW1xyXG4gICAgICAgIHtuYW1lOiAnV0hJVEUgUklDRScsIHByaWNlOiAwLCBjYWxzOiAyMTAsIGltZzogJy93cmljZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0JST1dOIFJJQ0UnLCBwcmljZTogMCwgY2FsczogMjEwLCBpbWc6ICcvYnJpY2UucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdDQVVMSUZPV0VSIFJJQ0UnLCBwcmljZTogMiwgY2FsczogNDAsIGltZzogJy9jcmljZS5wbmcnfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBiZWFucyA9IFtcclxuICAgICAgICB7bmFtZTogJ0JMQUNLIEJFQU5TJywgcHJpY2U6IDAsIGNhbHM6IDEzMCwgaW1nOiAnL2JiZWFucy5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1BJTlRPIEJFQU5TJywgcHJpY2U6IDAsIGNhbHM6IDEzMCwgaW1nOiAnL3BiZWFucy5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ05PIEJFQU5TJywgcHJpY2U6IDAsIGNhbHM6IDAsIGltZzogJyd9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHR0ZiA9IFtcclxuICAgICAgICB7bmFtZTogJ0dVQUNBTU9MRScsIHByaWNlOiAwLCBjYWxzOiAyMzAsIGltZzogJy9ndWFjYW1vbGUucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdGUkVTSCBUT01BVE8gU0FMU0EnLCBwcmljZTogMCwgY2FsczogMjUsIGltZzogJy9mcmVzaHRvbWF0b3NhbHNhLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnUk9BU1RFRCBDSElMSS1DT1JOIFNBTFNBJywgcHJpY2U6IDAsIGNhbHM6IDgwLCBpbWc6ICcvcm9hc3RlZGNoaWxpY29ybnNhbHNhLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnVE9NQVRJTExPLUdSRUVOIENISUxJIFNBTFNBJywgcHJpY2U6IDAsIGNhbHM6IDE1LCBpbWc6ICcvdG9tYXRpbGxvZ3JlZW5jaGlsaXNhbHNhLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnVE9NQVRJTExPLVJFRCBDSElMSSBTQUxTQScsIHByaWNlOiAwLCBjYWxzOiAzMCwgaW1nOiAnL3RvbWF0aWxsb3JlZGNoaWxpc2Fsc2EucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdTT1VSIENSRUFNJywgcHJpY2U6IDAsIGNhbHM6IDExMCwgaW1nOiAnL3NvdXJjcmVhbS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0ZBSklUQSBWRUdHSUVTJywgcHJpY2U6IDAsIGNhbHM6IDExMCwgaW1nOiAnL2Zhaml0YXZlZ2dpZXMucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdST01BSU5FIExFVFRVQ0UnLCBwcmljZTogMCwgY2FsczogNSwgaW1nOiAnL3JvbWFpbmVsZXR0dWNlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnUVVFU08gQkxBTkNPJywgcHJpY2U6IDAsIGNhbHM6IDEyMCwgaW1nOiAnL3F1ZXNvYmxhbmNvLnBuZyd9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICAgICAge25hbWU6ICdET1VCTEUgV1JBUCBXSVRIIFRPUlRJTExBJywgcHJpY2U6IC4yNSwgY2FsczogMzIwLCBpbWc6ICcvZG91Ymxld3JhcC5qcGcnfVxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHNpZGUgPSBbXHJcbiAgICAgICAge25hbWU6ICdDSElQUycsIHByaWNlOiAxLjUwLCBjYWxzOiA1NDAsIGltZzogJy9jaGlwcy5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0NISVBTICYgR1VBQ0FNT0xFJywgcHJpY2U6IDMuNzUsIGNhbHM6IDc3MCwgaW1nOiAnL2NoaXBzZ3VhY2Ftb2xlLnBuZyd9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGRyaW5rcyA9IFtcclxuICAgICAgICB7bmFtZTogJ09SR0FOSUMgTEVNT05BREUnLCBwcmljZTogMi40MCwgY2FsczogMTEwLCBpbWc6ICcvbGVtb25hZGUucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdPUkdBTklDIEhJQklTQ1VTIExFTU9OQURFJywgcHJpY2U6IDIuNDAsIGNhbHM6IDExMCwgaW1nOiAnL2hsZW1vbmFkZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ09SR0FOSUMgTUFOREFSSU4gQUdVQSBGUkVTQ0EnLCBwcmljZTogMi40MCwgY2FsczogMTEwLCBpbWc6ICcvYWd1YWZyZXNjYS5wbmcnfSxcclxuICAgIF1cclxuICAgIGNvbnN0IGluZ3JlZGllbnRzID0ge1xyXG4gICAgICAgIFwiUFJPVEVJTiBPUiBWRUdHSUVcIjogcG9yLFxyXG4gICAgICAgIFwiUklDRVwiOiByaWNlLFxyXG4gICAgICAgIFwiQkVBTlNcIjogYmVhbnMsXHJcbiAgICAgICAgXCJUT1AgVEhJTkdTIE9GRlwiOiB0dGYsXHJcbiAgICAgICAgXCJPUFRJT05TXCI6IG9wdGlvbnMsXHJcbiAgICAgICAgXCJTSURFXCI6IHNpZGUsXHJcbiAgICAgICAgJ0RSSU5LUyc6IGRyaW5rc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEluZ3JlZGllbnQgPSAocCwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IGJ1cnJpdG8uaW5ncmVkaWVudHMuZmluZChlID0+IGUubmFtZSA9PSBwLm5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kJywgZm91bmQpXHJcbiAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICBsZXQgYWRkID0gKCkgPT4gZm91bmRcclxuICAgICAgICA/IHNldEJ1cnJpdG8oeyAuLi5idXJyaXRvLCBpbmdyZWRpZW50czogYnVycml0by5pbmdyZWRpZW50cy5maWx0ZXIoaSA9PiBpLm5hbWUgIT0gcC5uYW1lKSB9KVxyXG4gICAgICAgIDogc2V0QnVycml0byh7IC4uLmJ1cnJpdG8sIGluZ3JlZGllbnRzOiBidXJyaXRvLmluZ3JlZGllbnRzID0gWy4uLmJ1cnJpdG8uaW5ncmVkaWVudHMsIHBdfSlcclxuICAgICAgICBsZXQgdmVnZ2llU2VsZWN0ZWQgPSBidXJyaXRvLmluZ3JlZGllbnRzLnNvbWUoZWwgPT4gZWwubmFtZSA9PSAnVkVHR0lFJylcclxuXHJcbiAgICAgICAgaWYocC5uYW1lID09IFwiVkVHR0lFXCIpe1xyXG4gICAgICAgICAgICBpZih2ZWdnaWVTZWxlY3RlZCl7XHJcbiAgICAgICAgICAgICAgICBhZGQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYnVycml0by5pbmdyZWRpZW50cy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW50IG1peCB3aXRoIHZlZ2dpZXMnKVxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHtpbmRleDogaSwgbWVzc2FnZTogXCJZb3UgY2FuJ3QgbWl4IHZlZ2dpZXNcIn0pXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTWVzc2FnZShcIlwiKSwgMTAwMClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHZlZ2dpZVNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBtaXggd2l0aCB2ZWdnaWVzXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2Uoe2luZGV4OiBpLCBtZXNzYWdlOlwiWW91IGNhbid0IG1peCB2ZWdnaWVzXCJ9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvck1lc3NhZ2UoXCJcIiksIDEwMDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGQoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidXJyaXRvKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkID0gKHApID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhidXJyaXRvLmluZ3JlZGllbnRzLmluZGV4T2YocCkpXHJcbiAgICAgICAgcmV0dXJuIGJ1cnJpdG8uaW5ncmVkaWVudHMuZmluZChlID0+IGUubmFtZSA9PSBwLm5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIGJnLXdoaXRlIHctZnVsbCB6LTEwIGgtMTYgbGc6aC0yNCBweC0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTE0XCIgc3JjPVwiL2xvZ28uc3ZnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy03MDAgcHgtNCBib3JkZXItZ3JheS0zMDAgYm9yZGVyLXItMlwiPjxMaW5rIGhyZWY9XCIvc2lnbmluXCI+U0lHTiBJTjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteWVsbG93LTcwMCBweC00IGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFVFVSTiBUTyBNRU5VXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0wXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPVwiL2JhZy5zdmdcIj48L2ltZz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHB4LTggbGc6Ym9yZGVyLWItMiBsZzp3LTQvNiBteC1hdXRvIHB0LTQwIHBiLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIG14LWF1dG8gbGc6bXgtMFwiPjxpbWcgc3JjPXtpbWcoKX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctOTAwIHRleHQtbWQgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPkJ1aWxkIFlvdXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTkwMCBwYi0yIGZvbnQtYm9sZCB0ZXh0LTR4bFwiPnttZWFsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctOTAwXCI+WW91ciBjaG9pY2Ugb2YgZnJlc2hseSBncmlsbGVkIG1lYXQgb3Igc29mcml0YXMgd3JhcHBlZCBpbiBhIHdhcm0gZmxvdXIgdG9yaWxsYSB3aXRoIHJpY2UsIGJlYW5zLCBvciBmYWppdGEgdmVnZ2llcywgYW5kIHRvcHBlZCB3aXRoIGd1YWMsIHNhbHNhLCBxdWVzbyBibGFuY28sIHNvdXIgY3JlYW0gb3IgY2hlZXNlLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge09iamVjdC5rZXlzKGluZ3JlZGllbnRzKS5tYXAoaW5nID0+ICg8PiAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwIGJvcmRlci10LTIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgbGc6YmctdHJhbnNwYXJlbnQgbGc6dy00LzYgbGc6bXgtYXV0byBsZzpib3JkZXItbm9uZSBweS01IGZvbnQtYm9sZCB0ZXh0LXllbGxvdy05MDAgdGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgICAge2luZ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgdGV4dC15ZWxsb3ctNzAwIG14LWF1dG8gcHgtNSBzbTpoaWRkZW4gbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICBDaG9vc2UgdXAgdG8gdHdvXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdyaWQtY29scy0xIGxnOmdhcC01IGxnOnctNC82IG14LWF1dG9cIj5cclxuICAgICAgICAgICAge2luZ3JlZGllbnRzW2luZ10ubWFwKChwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9wZXJhdGlvbnNbaW5nXShwLGkpfSBjbGFzc05hbWU9e2Ake3NlbGVjdGVkKHApICYmIGBiZy15ZWxsb3ctODAwIHRleHQtd2hpdGUgc2NhbGUtOTVgfSBvdmVyZmxvdy1oaWRkZW4gdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIDFzIHJlbGF0aXZlIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcHktOGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xMFwiPjxpbWcgY2xhc3NOYW1lPVwiaC0yOFwiIHNyYz17cC5pbWd9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQocCkgPyAndGV4dC13aGl0ZScgOiAndGV4dC15ZWxsb3ctOTAwJ30gZm9udC1ib2xkYH0+e3AubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LXllbGxvdy04MDBgfT57cC5jYXRlZ29yeX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGdhcC01IHRleHQteWVsbG93LTYwMCBmb250LWJvbGRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtwLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cC5jYWxzfSBjYWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ybWVzc2FnZS5tZXNzYWdlICYmIGVycm9ybWVzc2FnZS5pbmRleCA9PSBpICYmIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTgwMCBwLTIgdGV4dC13aGl0ZSB3LTQ0IHRleHQtY2VudGVyIGxnOmFic29sdXRlIGxnOmxlZnQtMS8yIGxnOi10cmFuc2xhdGUteC0yLzQgdHJhbnNmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcm1lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gcm90YXRlLTkwIHRleHQtNHhsIHRleHQtZ3JheS01MDAgaC01XCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8Lz4pKX1cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB3LWZ1bGwgYm90dG9tLTAgYmctZ3JheS0xMDAgbGc6cHktNVwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IG0tYXV0byBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LWJvbGRcIj5Zb3VyIG1lYWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlbGVjdCBhIHByb3RlaW4gb3IgdmVnZ2llIHRvIGdldCBzdGFydGVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic206dy1mdWxsIHNtOnB5LTUgYmcteWVsbG93LTgwMCBsZzp3LTEvMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHVwcGVyY2FzZVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBtZWFscy5tYXAobSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgbWVhbDogbS5saW5rLnNwbGl0KCcvJylbMV0gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=