webpackHotUpdate_N_E("pages/Order/[meal]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvT3JkZXIvW21lYWxdLmpzIl0sIm5hbWVzIjpbIm1lYWxzIiwibmFtZSIsImxpbmsiLCJpbWciLCJjb25zb2xlIiwibG9nIiwibWFwIiwibSIsInNwbGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibWVhbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJpbmdyZWRpZW50cyIsImJ1cnJpdG8iLCJzZXRCdXJyaXRvIiwiaW5kZXgiLCJtZXNzYWdlIiwiZXJyb3JtZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwib3BlcmF0aW9ucyIsInAiLCJpIiwiYWRkSW5ncmVkaWVudCIsInBvciIsImNhdGVnb3J5IiwicHJpY2UiLCJjYWxzIiwicmljZSIsImJlYW5zIiwidHRmIiwib3B0aW9ucyIsInNpZGUiLCJkcmlua3MiLCJmb3VuZCIsImZpbmQiLCJlIiwiYWRkIiwiZmlsdGVyIiwidmVnZ2llU2VsZWN0ZWQiLCJzb21lIiwiZWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWQiLCJPYmplY3QiLCJrZXlzIiwiaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWO0FBQUNDLE1BQUksRUFBRSxTQUFQO0FBQWtCQyxNQUFJLEVBQUUsVUFBeEI7QUFBb0NDLEtBQUcsRUFBRTtBQUF6QyxDQURVLEVBRVY7QUFBQ0YsTUFBSSxFQUFFLGNBQVA7QUFBdUJDLE1BQUksRUFBRSxPQUE3QjtBQUFzQ0MsS0FBRyxFQUFFO0FBQTNDLENBRlUsRUFHVjtBQUFDRixNQUFJLEVBQUUsZ0JBQVA7QUFBeUJDLE1BQUksRUFBRSxZQUEvQjtBQUE2Q0MsS0FBRyxFQUFFO0FBQWxELENBSFUsRUFJVjtBQUFDRixNQUFJLEVBQUUsWUFBUDtBQUFxQkMsTUFBSSxFQUFFLGFBQTNCO0FBQTBDQyxLQUFHLEVBQUU7QUFBL0MsQ0FKVSxF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bUQ7QUFBSyx5QkFBUyxFQUFDLHFHQUFmO0FBQUEsMEJBQy9DSixZQUFZLENBQUNEO0FBRGtDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWHhELGVBY0k7QUFBSyx5QkFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEa0I7QUFBQSxXQUFyQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUnNDO0FBQUEsc0JBQUw7QUFBQSxLQUFoQyxDQTlCTCxlQTRERztBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUtDO0FBQVEsbUJBQVMsRUFBQyxpRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdFSCxDQW5ORDtBQUFBLFVBRW1CUixxREFGbkI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9PcmRlci9bbWVhbF0uZTkwN2NiN2NhODIwNjIxNjQxMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBtZWFscyA9IFtcclxuICAgIHtuYW1lOiBcIkJVUlJJVE9cIiwgbGluazogJy9CdXJyaXRvJywgaW1nOiBcIi9idXJyaXRvLnBuZ1wifSxcclxuICAgIHtuYW1lOiBcIkJVUlJJVE8gQk9XTFwiLCBsaW5rOiAnL0Jvd2wnLCBpbWc6IFwiL2Jvd2wuanBnXCJ9LFxyXG4gICAge25hbWU6IFwiTElGRVNUWUxFIEJPV0xcIiwgbGluazogJy9MaWZlc3R5bGUnLCBpbWc6IFwiL2xpZmVzdHlsZS5wbmdcIn0sXHJcbiAgICB7bmFtZTogXCJRVUVTQURJTExBXCIsIGxpbms6ICcvUXVlc2FkaWxsYScsIGltZzogXCIvb3JkZXIuanBnXCJ9LFxyXG4gICAge25hbWU6IFwiU0FMQURcIiwgbGluazogJy9TYWxhZCcsIGltZzogXCIvc2FsYWQuanBnXCJ9LFxyXG4gICAge25hbWU6IFwiVEFDT1NcIiwgbGluazogJy9UYWNvcycsIGltZzogXCIvdGFjb3MuanBnXCJ9LFxyXG4gICAge25hbWU6IFwiU0lERVMgJiBEUklOS1NcIiwgbGluazogJy9TaWRlcycsIGltZzogXCIvY2hpcHMtcXVhYy5qcGdcIn0sXHJcbiAgXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZWFscy5tYXAobSA9PiBtLmxpbmsuc3BsaXQoJy8nKVsxXSkpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBtZWFsIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFsgYnVycml0bywgc2V0QnVycml0byBdID0gdXNlU3RhdGUoeyBuYW1lOiAnYnVycml0bycsIGluZ3JlZGllbnRzOiBbXX0pO1xyXG4gICAgY29uc3QgWyBlcnJvcm1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZSBdID0gdXNlU3RhdGUoe2luZGV4OiBudWxsLCBtZXNzYWdlOiBudWxsfSlcclxuICAgIGNvbnN0IG9wZXJhdGlvbnMgPSB7XHJcbiAgICAgICAgXCJQUk9URUlOIE9SIFZFR0dJRVwiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIlJJQ0VcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJCRUFOU1wiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIlRPUCBUSElOR1MgT0ZGXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiT1BUSU9OU1wiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIlNJREVcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJEUklOS1NcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgfVxyXG4gICAgY29uc3QgaW1nID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lYWwpXHJcbiAgICAgICAgaWYobWVhbCA9PSAnQnVycml0bycpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9idXJyaXRvLnBuZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVhbCA9PSAnQm93bCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9ib3dsLmpwZydcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ0xpZmVzdHlsZScpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9saWZlc3R5bGUucG5nJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZWFsID09ICdRdWVzYWRpbGxhJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL29yZGVyLmpwZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVhbCA9PSAnU2FsYWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvc2FsYWQuanBnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZWFsID09ICdUYWNvcycpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy90YWNvcy5qcGcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ1NpZGVzJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL2NoaXBzLXF1YWMuanBnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcG9yID0gW1xyXG4gICAgICAgIHtuYW1lOiAnQ0hJQ0tFTicsIGNhdGVnb3J5OiBcIlwiLCBwcmljZTogNy4zNSwgY2FsczogMTgwLCBpbWc6ICcvY2hpY2tlbi5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1NURUFLJywgY2F0ZWdvcnk6IFwiXCIsIHByaWNlOiA4LjM1LCBjYWxzOiAxNTAsIGltZzogJy9zdGVhay5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0JBUkJBQ09BJywgY2F0ZWdvcnk6IFwiXCIsIHByaWNlOiA4LjM1LCBjYWxzOiAxNzAsIGltZzogXCIvYmFyYmFjb2EucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOiAnQ0FSTklUQVMnLCBjYXRlZ29yeTogXCJcIiwgcHJpY2U6IDcuODUsIGNhbHM6IDIxMCwgaW1nOiBcIi9jYXJuaXRhcy5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6ICdTT0ZSSVRBUycsIGNhdGVnb3J5OiBcIlBsYW50LUJhc2VkIFByb3RlaW5cIiwgcHJpY2U6IDcuMzUsIGNhbHM6IDE1MCwgaW1nOiBcIi9zb2ZyaXRhcy5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6ICdWRUdHSUUnLCBjYXRlZ29yeTogXCJQbGFudC1CYXNlZCBQcm90ZWluXCIsIHByaWNlOiA3LjM1LCBjYWxzOiAyMCwgaW1nOiBcIi92ZWdnaWUucG5nXCJ9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHJpY2UgPSBbXHJcbiAgICAgICAge25hbWU6ICdXSElURSBSSUNFJywgcHJpY2U6IDAsIGNhbHM6IDIxMCwgaW1nOiAnL3dyaWNlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnQlJPV04gUklDRScsIHByaWNlOiAwLCBjYWxzOiAyMTAsIGltZzogJy9icmljZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0NBVUxJRk9XRVIgUklDRScsIHByaWNlOiAyLCBjYWxzOiA0MCwgaW1nOiAnL2NyaWNlLnBuZyd9LFxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGJlYW5zID0gW1xyXG4gICAgICAgIHtuYW1lOiAnQkxBQ0sgQkVBTlMnLCBwcmljZTogMCwgY2FsczogMTMwLCBpbWc6ICcvYmJlYW5zLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnUElOVE8gQkVBTlMnLCBwcmljZTogMCwgY2FsczogMTMwLCBpbWc6ICcvcGJlYW5zLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnTk8gQkVBTlMnLCBwcmljZTogMCwgY2FsczogMCwgaW1nOiAnJ30sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgdHRmID0gW1xyXG4gICAgICAgIHtuYW1lOiAnR1VBQ0FNT0xFJywgcHJpY2U6IDAsIGNhbHM6IDIzMCwgaW1nOiAnL2d1YWNhbW9sZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ0ZSRVNIIFRPTUFUTyBTQUxTQScsIHByaWNlOiAwLCBjYWxzOiAyNSwgaW1nOiAnL2ZyZXNodG9tYXRvc2Fsc2EucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdST0FTVEVEIENISUxJLUNPUk4gU0FMU0EnLCBwcmljZTogMCwgY2FsczogODAsIGltZzogJy9yb2FzdGVkY2hpbGljb3Juc2Fsc2EucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdUT01BVElMTE8tR1JFRU4gQ0hJTEkgU0FMU0EnLCBwcmljZTogMCwgY2FsczogMTUsIGltZzogJy90b21hdGlsbG9ncmVlbmNoaWxpc2Fsc2EucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdUT01BVElMTE8tUkVEIENISUxJIFNBTFNBJywgcHJpY2U6IDAsIGNhbHM6IDMwLCBpbWc6ICcvdG9tYXRpbGxvcmVkY2hpbGlzYWxzYS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1NPVVIgQ1JFQU0nLCBwcmljZTogMCwgY2FsczogMTEwLCBpbWc6ICcvc291cmNyZWFtLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnRkFKSVRBIFZFR0dJRVMnLCBwcmljZTogMCwgY2FsczogMTEwLCBpbWc6ICcvZmFqaXRhdmVnZ2llcy5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1JPTUFJTkUgTEVUVFVDRScsIHByaWNlOiAwLCBjYWxzOiA1LCBpbWc6ICcvcm9tYWluZWxldHR1Y2UucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdRVUVTTyBCTEFOQ08nLCBwcmljZTogMCwgY2FsczogMTIwLCBpbWc6ICcvcXVlc29ibGFuY28ucG5nJ30sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgICAgICB7bmFtZTogJ0RPVUJMRSBXUkFQIFdJVEggVE9SVElMTEEnLCBwcmljZTogLjI1LCBjYWxzOiAzMjAsIGltZzogJy9kb3VibGV3cmFwLmpwZyd9XHJcbiAgICBdXHJcblxyXG4gICAgY29uc3Qgc2lkZSA9IFtcclxuICAgICAgICB7bmFtZTogJ0NISVBTJywgcHJpY2U6IDEuNTAsIGNhbHM6IDU0MCwgaW1nOiAnL2NoaXBzLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnQ0hJUFMgJiBHVUFDQU1PTEUnLCBwcmljZTogMy43NSwgY2FsczogNzcwLCBpbWc6ICcvY2hpcHNndWFjYW1vbGUucG5nJ30sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgZHJpbmtzID0gW1xyXG4gICAgICAgIHtuYW1lOiAnT1JHQU5JQyBMRU1PTkFERScsIHByaWNlOiAyLjQwLCBjYWxzOiAxMTAsIGltZzogJy9sZW1vbmFkZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ09SR0FOSUMgSElCSVNDVVMgTEVNT05BREUnLCBwcmljZTogMi40MCwgY2FsczogMTEwLCBpbWc6ICcvaGxlbW9uYWRlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnT1JHQU5JQyBNQU5EQVJJTiBBR1VBIEZSRVNDQScsIHByaWNlOiAyLjQwLCBjYWxzOiAxMTAsIGltZzogJy9hZ3VhZnJlc2NhLnBuZyd9LFxyXG4gICAgXVxyXG4gICAgY29uc3QgaW5ncmVkaWVudHMgPSB7XHJcbiAgICAgICAgXCJQUk9URUlOIE9SIFZFR0dJRVwiOiBwb3IsXHJcbiAgICAgICAgXCJSSUNFXCI6IHJpY2UsXHJcbiAgICAgICAgXCJCRUFOU1wiOiBiZWFucyxcclxuICAgICAgICBcIlRPUCBUSElOR1MgT0ZGXCI6IHR0ZixcclxuICAgICAgICBcIk9QVElPTlNcIjogb3B0aW9ucyxcclxuICAgICAgICBcIlNJREVcIjogc2lkZSxcclxuICAgICAgICAnRFJJTktTJzogZHJpbmtzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSW5ncmVkaWVudCA9IChwLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gYnVycml0by5pbmdyZWRpZW50cy5maW5kKGUgPT4gZS5uYW1lID09IHAubmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnZm91bmQnLCBmb3VuZClcclxuICAgICAgICBjb25zb2xlLmxvZyhwKVxyXG4gICAgICAgIGxldCBhZGQgPSAoKSA9PiBmb3VuZFxyXG4gICAgICAgID8gc2V0QnVycml0byh7IC4uLmJ1cnJpdG8sIGluZ3JlZGllbnRzOiBidXJyaXRvLmluZ3JlZGllbnRzLmZpbHRlcihpID0+IGkubmFtZSAhPSBwLm5hbWUpIH0pXHJcbiAgICAgICAgOiBzZXRCdXJyaXRvKHsgLi4uYnVycml0bywgaW5ncmVkaWVudHM6IGJ1cnJpdG8uaW5ncmVkaWVudHMgPSBbLi4uYnVycml0by5pbmdyZWRpZW50cywgcF19KVxyXG4gICAgICAgIGxldCB2ZWdnaWVTZWxlY3RlZCA9IGJ1cnJpdG8uaW5ncmVkaWVudHMuc29tZShlbCA9PiBlbC5uYW1lID09ICdWRUdHSUUnKVxyXG5cclxuICAgICAgICBpZihwLm5hbWUgPT0gXCJWRUdHSUVcIil7XHJcbiAgICAgICAgICAgIGlmKHZlZ2dpZVNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgIGFkZCgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihidXJyaXRvLmluZ3JlZGllbnRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbnQgbWl4IHdpdGggdmVnZ2llcycpXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2Uoe2luZGV4OiBpLCBtZXNzYWdlOiBcIllvdSBjYW4ndCBtaXggdmVnZ2llc1wifSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYodmVnZ2llU2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW50IG1peCB3aXRoIHZlZ2dpZXNcIilcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSh7aW5kZXg6IGksIG1lc3NhZ2U6XCJZb3UgY2FuJ3QgbWl4IHZlZ2dpZXNcIn0pXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTWVzc2FnZShcIlwiKSwgMTAwMClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1cnJpdG8pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJ1cnJpdG8uaW5ncmVkaWVudHMuaW5kZXhPZihwKSlcclxuICAgICAgICByZXR1cm4gYnVycml0by5pbmdyZWRpZW50cy5maW5kKGUgPT4gZS5uYW1lID09IHAubmFtZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgYmctd2hpdGUgdy1mdWxsIHotMTAgaC0xNiBsZzpoLTI0IHB4LTIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1ncmF5LTMwMCBib3JkZXItYi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTRcIiBzcmM9XCIvbG9nby5zdmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTcwMCBweC00IGJvcmRlci1ncmF5LTMwMCBib3JkZXItci0yXCI+PExpbmsgaHJlZj1cIi9zaWduaW5cIj5TSUdOIElOPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNzAwIHB4LTQgaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUkVUVVJOIFRPIE1FTlVcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCIvYmFnLnN2Z1wiPjwvaW1nPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgcHgtOCBsZzpib3JkZXItYi0yIGxnOnctNC82IG14LWF1dG8gcHQtNDAgcGItMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgbXgtYXV0byBsZzpteC0wXCI+PGltZyBzcmM9e2ltZygpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy05MDAgdGV4dC1tZCB1cHBlcmNhc2UgZm9udC1ib2xkXCI+QnVpbGQgWW91cjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctOTAwIHBiLTIgZm9udC1ib2xkIHRleHQtNHhsXCI+e21lYWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy05MDBcIj5Zb3VyIGNob2ljZSBvZiBmcmVzaGx5IGdyaWxsZWQgbWVhdCBvciBzb2ZyaXRhcyB3cmFwcGVkIGluIGEgd2FybSBmbG91ciB0b3JpbGxhIHdpdGggcmljZSwgYmVhbnMsIG9yIGZhaml0YSB2ZWdnaWVzLCBhbmQgdG9wcGVkIHdpdGggZ3VhYywgc2Fsc2EsIHF1ZXNvIGJsYW5jbywgc291ciBjcmVhbSBvciBjaGVlc2UuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoaW5ncmVkaWVudHMpLm1hcChpbmcgPT4gKDw+ICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAgYm9yZGVyLXQtMiBib3JkZXItYi0yIGJvcmRlci1ncmF5LTIwMCBsZzpiZy10cmFuc3BhcmVudCBsZzp3LTQvNiBsZzpteC1hdXRvIGxnOmJvcmRlci1ub25lIHB5LTUgZm9udC1ib2xkIHRleHQteWVsbG93LTkwMCB0ZXh0LXhsXCI+XHJcbiAgICAgICAgICAgICAgICB7aW5nfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiB0ZXh0LXllbGxvdy03MDAgbXgtYXV0byBweC01IHNtOmhpZGRlbiBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIENob29zZSB1cCB0byB0d29cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ3JpZC1jb2xzLTEgbGc6Z2FwLTUgbGc6dy00LzYgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7aW5ncmVkaWVudHNbaW5nXS5tYXAoKHAsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb3BlcmF0aW9uc1tpbmddKHAsaSl9IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQocCkgJiYgYGJnLXllbGxvdy04MDAgdGV4dC13aGl0ZSBzY2FsZS05NWB9IG92ZXJmbG93LWhpZGRlbiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgMXMgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCBweS04YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEwXCI+PGltZyBjbGFzc05hbWU9XCJoLTI4XCIgc3JjPXtwLmltZ30+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZChwKSA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LXllbGxvdy05MDAnfSBmb250LWJvbGRgfT57cC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQteWVsbG93LTgwMGB9PntwLmNhdGVnb3J5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZ2FwLTUgdGV4dC15ZWxsb3ctNjAwIGZvbnQtYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke3AucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntwLmNhbHN9IGNhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JtZXNzYWdlLm1lc3NhZ2UgJiYgZXJyb3JtZXNzYWdlLmluZGV4ID09IGkgJiYgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctODAwIHAtMiB0ZXh0LXdoaXRlIHctNDQgdGV4dC1jZW50ZXIgbGc6YWJzb2x1dGUgbGc6bGVmdC0xLzIgbGc6LXRyYW5zbGF0ZS14LTIvNCB0cmFuc2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ybWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZm9ybSByb3RhdGUtOTAgdGV4dC00eGwgdGV4dC1ncmF5LTUwMCBoLTVcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX0gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvPikpfVxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBib3R0b20tMCBiZy1ncmF5LTEwMCBsZzpweS01XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgbS1hdXRvIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGZvbnQtYm9sZFwiPllvdXIgbWVhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+U2VsZWN0IGEgcHJvdGVpbiBvciB2ZWdnaWUgdG8gZ2V0IHN0YXJ0ZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbTp3LWZ1bGwgc206cHktNSBiZy15ZWxsb3ctODAwIGxnOnctMS8zIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGcgdXBwZXJjYXNlXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IG1lYWxzLm1hcChtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lYWw6IG0ubGluay5zcGxpdCgnLycpWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==