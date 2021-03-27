webpackHotUpdate_N_E("pages/Order/[meal]",{

/***/ "./pages/Order/[meal].js":
/*!*******************************!*\
  !*** ./pages/Order/[meal].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
})); // export async function getStaticPaths(){
//     return {
//         paths: meals.map(m => {
//             return {
//                 params: {
//                     meal: m.name.split('/')[1]
//                 }
//             }
//         })
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvT3JkZXIvW21lYWxdLmpzIl0sIm5hbWVzIjpbIm1lYWxzIiwibmFtZSIsImxpbmsiLCJpbWciLCJjb25zb2xlIiwibG9nIiwibWFwIiwibSIsInNwbGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibWVhbCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJpbmdyZWRpZW50cyIsImJ1cnJpdG8iLCJzZXRCdXJyaXRvIiwiaW5kZXgiLCJtZXNzYWdlIiwiZXJyb3JtZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwib3BlcmF0aW9ucyIsInAiLCJpIiwiYWRkSW5ncmVkaWVudCIsInBvciIsImNhdGVnb3J5IiwicHJpY2UiLCJjYWxzIiwicmljZSIsImJlYW5zIiwidHRmIiwib3B0aW9ucyIsInNpZGUiLCJkcmlua3MiLCJmb3VuZCIsImZpbmQiLCJlIiwiYWRkIiwiZmlsdGVyIiwidmVnZ2llU2VsZWN0ZWQiLCJzb21lIiwiZWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWQiLCJPYmplY3QiLCJrZXlzIiwiaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1Y7QUFBQ0MsTUFBSSxFQUFFLFNBQVA7QUFBa0JDLE1BQUksRUFBRSxVQUF4QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBRFUsRUFFVjtBQUFDRixNQUFJLEVBQUUsY0FBUDtBQUF1QkMsTUFBSSxFQUFFLE9BQTdCO0FBQXNDQyxLQUFHLEVBQUU7QUFBM0MsQ0FGVSxFQUdWO0FBQUNGLE1BQUksRUFBRSxnQkFBUDtBQUF5QkMsTUFBSSxFQUFFLFlBQS9CO0FBQTZDQyxLQUFHLEVBQUU7QUFBbEQsQ0FIVSxFQUlWO0FBQUNGLE1BQUksRUFBRSxZQUFQO0FBQXFCQyxNQUFJLEVBQUUsYUFBM0I7QUFBMENDLEtBQUcsRUFBRTtBQUEvQyxDQUpVLEVB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O0FBQUsseUJBQVMsRUFBQyxxR0FBZjtBQUFBLDBCQUMvQ0osWUFBWSxDQUFDRDtBQURrQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVh4RCxlQWNJO0FBQUsseUJBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGtCO0FBQUEsV0FBckI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJzQztBQUFBLHNCQUFMO0FBQUEsS0FBaEMsQ0E5QkwsZUE0REc7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFLQztBQUFRLG1CQUFTLEVBQUMsaUZBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1REg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3RUgsQ0FuTkQ7QUFBQSxVQUVtQlIscURBRm5CO0FBQUEsSSxDQXFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL09yZGVyL1ttZWFsXS4wZGRiNGFjMWMzOTFkNzIxNDA1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IG1lYWxzID0gW1xyXG4gICAge25hbWU6IFwiQlVSUklUT1wiLCBsaW5rOiAnL0J1cnJpdG8nLCBpbWc6IFwiL2J1cnJpdG8ucG5nXCJ9LFxyXG4gICAge25hbWU6IFwiQlVSUklUTyBCT1dMXCIsIGxpbms6ICcvQm93bCcsIGltZzogXCIvYm93bC5qcGdcIn0sXHJcbiAgICB7bmFtZTogXCJMSUZFU1RZTEUgQk9XTFwiLCBsaW5rOiAnL0xpZmVzdHlsZScsIGltZzogXCIvbGlmZXN0eWxlLnBuZ1wifSxcclxuICAgIHtuYW1lOiBcIlFVRVNBRElMTEFcIiwgbGluazogJy9RdWVzYWRpbGxhJywgaW1nOiBcIi9vcmRlci5qcGdcIn0sXHJcbiAgICB7bmFtZTogXCJTQUxBRFwiLCBsaW5rOiAnL1NhbGFkJywgaW1nOiBcIi9zYWxhZC5qcGdcIn0sXHJcbiAgICB7bmFtZTogXCJUQUNPU1wiLCBsaW5rOiAnL1RhY29zJywgaW1nOiBcIi90YWNvcy5qcGdcIn0sXHJcbiAgICB7bmFtZTogXCJTSURFUyAmIERSSU5LU1wiLCBsaW5rOiAnL1NpZGVzJywgaW1nOiBcIi9jaGlwcy1xdWFjLmpwZ1wifSxcclxuICBdXHJcblxyXG5leHBvcnQgZGVmYXVsdCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1lYWxzLm1hcChtID0+IG0ubGluay5zcGxpdCgnLycpWzFdKSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IG1lYWwgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgWyBidXJyaXRvLCBzZXRCdXJyaXRvIF0gPSB1c2VTdGF0ZSh7IG5hbWU6ICdidXJyaXRvJywgaW5ncmVkaWVudHM6IFtdfSk7XHJcbiAgICBjb25zdCBbIGVycm9ybWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlIF0gPSB1c2VTdGF0ZSh7aW5kZXg6IG51bGwsIG1lc3NhZ2U6IG51bGx9KVxyXG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IHtcclxuICAgICAgICBcIlBST1RFSU4gT1IgVkVHR0lFXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiUklDRVwiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIkJFQU5TXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiVE9QIFRISU5HUyBPRkZcIjogKHAsIGkpID0+IGFkZEluZ3JlZGllbnQocCwgaSksXHJcbiAgICAgICAgXCJPUFRJT05TXCI6IChwLCBpKSA9PiBhZGRJbmdyZWRpZW50KHAsIGkpLFxyXG4gICAgICAgIFwiU0lERVwiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICBcIkRSSU5LU1wiOiAocCwgaSkgPT4gYWRkSW5ncmVkaWVudChwLCBpKSxcclxuICAgICAgICB9XHJcbiAgICBjb25zdCBpbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVhbClcclxuICAgICAgICBpZihtZWFsID09ICdCdXJyaXRvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL2J1cnJpdG8ucG5nJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZWFsID09ICdCb3dsJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL2Jvd2wuanBnJ1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYobWVhbCA9PSAnTGlmZXN0eWxlJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL2xpZmVzdHlsZS5wbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ1F1ZXNhZGlsbGEnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvb3JkZXIuanBnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtZWFsID09ICdTYWxhZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJy9zYWxhZC5qcGcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1lYWwgPT0gJ1RhY29zJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnL3RhY29zLmpwZydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWVhbCA9PSAnU2lkZXMnKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvY2hpcHMtcXVhYy5qcGcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwb3IgPSBbXHJcbiAgICAgICAge25hbWU6ICdDSElDS0VOJywgY2F0ZWdvcnk6IFwiXCIsIHByaWNlOiA3LjM1LCBjYWxzOiAxODAsIGltZzogJy9jaGlja2VuLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnU1RFQUsnLCBjYXRlZ29yeTogXCJcIiwgcHJpY2U6IDguMzUsIGNhbHM6IDE1MCwgaW1nOiAnL3N0ZWFrLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnQkFSQkFDT0EnLCBjYXRlZ29yeTogXCJcIiwgcHJpY2U6IDguMzUsIGNhbHM6IDE3MCwgaW1nOiBcIi9iYXJiYWNvYS5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6ICdDQVJOSVRBUycsIGNhdGVnb3J5OiBcIlwiLCBwcmljZTogNy44NSwgY2FsczogMjEwLCBpbWc6IFwiL2Nhcm5pdGFzLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTogJ1NPRlJJVEFTJywgY2F0ZWdvcnk6IFwiUGxhbnQtQmFzZWQgUHJvdGVpblwiLCBwcmljZTogNy4zNSwgY2FsczogMTUwLCBpbWc6IFwiL3NvZnJpdGFzLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTogJ1ZFR0dJRScsIGNhdGVnb3J5OiBcIlBsYW50LUJhc2VkIFByb3RlaW5cIiwgcHJpY2U6IDcuMzUsIGNhbHM6IDIwLCBpbWc6IFwiL3ZlZ2dpZS5wbmdcIn0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgcmljZSA9IFtcclxuICAgICAgICB7bmFtZTogJ1dISVRFIFJJQ0UnLCBwcmljZTogMCwgY2FsczogMjEwLCBpbWc6ICcvd3JpY2UucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdCUk9XTiBSSUNFJywgcHJpY2U6IDAsIGNhbHM6IDIxMCwgaW1nOiAnL2JyaWNlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnQ0FVTElGT1dFUiBSSUNFJywgcHJpY2U6IDIsIGNhbHM6IDQwLCBpbWc6ICcvY3JpY2UucG5nJ30sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgYmVhbnMgPSBbXHJcbiAgICAgICAge25hbWU6ICdCTEFDSyBCRUFOUycsIHByaWNlOiAwLCBjYWxzOiAxMzAsIGltZzogJy9iYmVhbnMucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdQSU5UTyBCRUFOUycsIHByaWNlOiAwLCBjYWxzOiAxMzAsIGltZzogJy9wYmVhbnMucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdOTyBCRUFOUycsIHByaWNlOiAwLCBjYWxzOiAwLCBpbWc6ICcnfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCB0dGYgPSBbXHJcbiAgICAgICAge25hbWU6ICdHVUFDQU1PTEUnLCBwcmljZTogMCwgY2FsczogMjMwLCBpbWc6ICcvZ3VhY2Ftb2xlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnRlJFU0ggVE9NQVRPIFNBTFNBJywgcHJpY2U6IDAsIGNhbHM6IDI1LCBpbWc6ICcvZnJlc2h0b21hdG9zYWxzYS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1JPQVNURUQgQ0hJTEktQ09STiBTQUxTQScsIHByaWNlOiAwLCBjYWxzOiA4MCwgaW1nOiAnL3JvYXN0ZWRjaGlsaWNvcm5zYWxzYS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1RPTUFUSUxMTy1HUkVFTiBDSElMSSBTQUxTQScsIHByaWNlOiAwLCBjYWxzOiAxNSwgaW1nOiAnL3RvbWF0aWxsb2dyZWVuY2hpbGlzYWxzYS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1RPTUFUSUxMTy1SRUQgQ0hJTEkgU0FMU0EnLCBwcmljZTogMCwgY2FsczogMzAsIGltZzogJy90b21hdGlsbG9yZWRjaGlsaXNhbHNhLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnU09VUiBDUkVBTScsIHByaWNlOiAwLCBjYWxzOiAxMTAsIGltZzogJy9zb3VyY3JlYW0ucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdGQUpJVEEgVkVHR0lFUycsIHByaWNlOiAwLCBjYWxzOiAxMTAsIGltZzogJy9mYWppdGF2ZWdnaWVzLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnUk9NQUlORSBMRVRUVUNFJywgcHJpY2U6IDAsIGNhbHM6IDUsIGltZzogJy9yb21haW5lbGV0dHVjZS5wbmcnfSxcclxuICAgICAgICB7bmFtZTogJ1FVRVNPIEJMQU5DTycsIHByaWNlOiAwLCBjYWxzOiAxMjAsIGltZzogJy9xdWVzb2JsYW5jby5wbmcnfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgIHtuYW1lOiAnRE9VQkxFIFdSQVAgV0lUSCBUT1JUSUxMQScsIHByaWNlOiAuMjUsIGNhbHM6IDMyMCwgaW1nOiAnL2RvdWJsZXdyYXAuanBnJ31cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBzaWRlID0gW1xyXG4gICAgICAgIHtuYW1lOiAnQ0hJUFMnLCBwcmljZTogMS41MCwgY2FsczogNTQwLCBpbWc6ICcvY2hpcHMucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdDSElQUyAmIEdVQUNBTU9MRScsIHByaWNlOiAzLjc1LCBjYWxzOiA3NzAsIGltZzogJy9jaGlwc2d1YWNhbW9sZS5wbmcnfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBkcmlua3MgPSBbXHJcbiAgICAgICAge25hbWU6ICdPUkdBTklDIExFTU9OQURFJywgcHJpY2U6IDIuNDAsIGNhbHM6IDExMCwgaW1nOiAnL2xlbW9uYWRlLnBuZyd9LFxyXG4gICAgICAgIHtuYW1lOiAnT1JHQU5JQyBISUJJU0NVUyBMRU1PTkFERScsIHByaWNlOiAyLjQwLCBjYWxzOiAxMTAsIGltZzogJy9obGVtb25hZGUucG5nJ30sXHJcbiAgICAgICAge25hbWU6ICdPUkdBTklDIE1BTkRBUklOIEFHVUEgRlJFU0NBJywgcHJpY2U6IDIuNDAsIGNhbHM6IDExMCwgaW1nOiAnL2FndWFmcmVzY2EucG5nJ30sXHJcbiAgICBdXHJcbiAgICBjb25zdCBpbmdyZWRpZW50cyA9IHtcclxuICAgICAgICBcIlBST1RFSU4gT1IgVkVHR0lFXCI6IHBvcixcclxuICAgICAgICBcIlJJQ0VcIjogcmljZSxcclxuICAgICAgICBcIkJFQU5TXCI6IGJlYW5zLFxyXG4gICAgICAgIFwiVE9QIFRISU5HUyBPRkZcIjogdHRmLFxyXG4gICAgICAgIFwiT1BUSU9OU1wiOiBvcHRpb25zLFxyXG4gICAgICAgIFwiU0lERVwiOiBzaWRlLFxyXG4gICAgICAgICdEUklOS1MnOiBkcmlua3NcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJbmdyZWRpZW50ID0gKHAsIGkpID0+IHtcclxuICAgICAgICBsZXQgZm91bmQgPSBidXJyaXRvLmluZ3JlZGllbnRzLmZpbmQoZSA9PiBlLm5hbWUgPT0gcC5uYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCcsIGZvdW5kKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgbGV0IGFkZCA9ICgpID0+IGZvdW5kXHJcbiAgICAgICAgPyBzZXRCdXJyaXRvKHsgLi4uYnVycml0bywgaW5ncmVkaWVudHM6IGJ1cnJpdG8uaW5ncmVkaWVudHMuZmlsdGVyKGkgPT4gaS5uYW1lICE9IHAubmFtZSkgfSlcclxuICAgICAgICA6IHNldEJ1cnJpdG8oeyAuLi5idXJyaXRvLCBpbmdyZWRpZW50czogYnVycml0by5pbmdyZWRpZW50cyA9IFsuLi5idXJyaXRvLmluZ3JlZGllbnRzLCBwXX0pXHJcbiAgICAgICAgbGV0IHZlZ2dpZVNlbGVjdGVkID0gYnVycml0by5pbmdyZWRpZW50cy5zb21lKGVsID0+IGVsLm5hbWUgPT0gJ1ZFR0dJRScpXHJcblxyXG4gICAgICAgIGlmKHAubmFtZSA9PSBcIlZFR0dJRVwiKXtcclxuICAgICAgICAgICAgaWYodmVnZ2llU2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgYWRkKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJ1cnJpdG8uaW5ncmVkaWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FudCBtaXggd2l0aCB2ZWdnaWVzJylcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSh7aW5kZXg6IGksIG1lc3NhZ2U6IFwiWW91IGNhbid0IG1peCB2ZWdnaWVzXCJ9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvck1lc3NhZ2UoXCJcIiksIDEwMDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGQoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZih2ZWdnaWVTZWxlY3RlZCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnQgbWl4IHdpdGggdmVnZ2llc1wiKVxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHtpbmRleDogaSwgbWVzc2FnZTpcIllvdSBjYW4ndCBtaXggdmVnZ2llc1wifSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RXJyb3JNZXNzYWdlKFwiXCIpLCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnVycml0bylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IChwKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYnVycml0by5pbmdyZWRpZW50cy5pbmRleE9mKHApKVxyXG4gICAgICAgIHJldHVybiBidXJyaXRvLmluZ3JlZGllbnRzLmZpbmQoZSA9PiBlLm5hbWUgPT0gcC5uYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCBiZy13aGl0ZSB3LWZ1bGwgei0xMCBoLTE2IGxnOmgtMjQgcHgtMiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1iLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xNFwiIHNyYz1cIi9sb2dvLnN2Z1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNzAwIHB4LTQgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1yLTJcIj48TGluayBocmVmPVwiL3NpZ25pblwiPlNJR04gSU48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy03MDAgcHgtNCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSRVRVUk4gVE8gTUVOVVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz1cIi9iYWcuc3ZnXCI+PC9pbWc+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBweC04IGxnOmJvcmRlci1iLTIgbGc6dy00LzYgbXgtYXV0byBwdC00MCBwYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBteC1hdXRvIGxnOm14LTBcIj48aW1nIHNyYz17aW1nKCl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTkwMCB0ZXh0LW1kIHVwcGVyY2FzZSBmb250LWJvbGRcIj5CdWlsZCBZb3VyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy05MDAgcGItMiBmb250LWJvbGQgdGV4dC00eGxcIj57bWVhbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTkwMFwiPllvdXIgY2hvaWNlIG9mIGZyZXNobHkgZ3JpbGxlZCBtZWF0IG9yIHNvZnJpdGFzIHdyYXBwZWQgaW4gYSB3YXJtIGZsb3VyIHRvcmlsbGEgd2l0aCByaWNlLCBiZWFucywgb3IgZmFqaXRhIHZlZ2dpZXMsIGFuZCB0b3BwZWQgd2l0aCBndWFjLCBzYWxzYSwgcXVlc28gYmxhbmNvLCBzb3VyIGNyZWFtIG9yIGNoZWVzZS48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhpbmdyZWRpZW50cykubWFwKGluZyA9PiAoPD4gICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MCBib3JkZXItdC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMjAwIGxnOmJnLXRyYW5zcGFyZW50IGxnOnctNC82IGxnOm14LWF1dG8gbGc6Ym9yZGVyLW5vbmUgcHktNSBmb250LWJvbGQgdGV4dC15ZWxsb3ctOTAwIHRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgIHtpbmd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IHRleHQteWVsbG93LTcwMCBteC1hdXRvIHB4LTUgc206aGlkZGVuIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgQ2hvb3NlIHVwIHRvIHR3b1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSBsZzpnYXAtNSBsZzp3LTQvNiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHtpbmdyZWRpZW50c1tpbmddLm1hcCgocCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvcGVyYXRpb25zW2luZ10ocCxpKX0gY2xhc3NOYW1lPXtgJHtzZWxlY3RlZChwKSAmJiBgYmcteWVsbG93LTgwMCB0ZXh0LXdoaXRlIHNjYWxlLTk1YH0gb3ZlcmZsb3ctaGlkZGVuIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCAxcyByZWxhdGl2ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHB5LThgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMTBcIj48aW1nIGNsYXNzTmFtZT1cImgtMjhcIiBzcmM9e3AuaW1nfT48L2ltZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTE2IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkKHApID8gJ3RleHQtd2hpdGUnIDogJ3RleHQteWVsbG93LTkwMCd9IGZvbnQtYm9sZGB9PntwLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC15ZWxsb3ctODAwYH0+e3AuY2F0ZWdvcnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBnYXAtNSB0ZXh0LXllbGxvdy02MDAgZm9udC1ib2xkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7cC5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3AuY2Fsc30gY2FsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcm1lc3NhZ2UubWVzc2FnZSAmJiBlcnJvcm1lc3NhZ2UuaW5kZXggPT0gaSAmJiA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy04MDAgcC0yIHRleHQtd2hpdGUgdy00NCB0ZXh0LWNlbnRlciBsZzphYnNvbHV0ZSBsZzpsZWZ0LTEvMiBsZzotdHJhbnNsYXRlLXgtMi80IHRyYW5zZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JtZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNmb3JtIHJvdGF0ZS05MCB0ZXh0LTR4bCB0ZXh0LWdyYXktNTAwIGgtNVwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfSBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC8+KSl9XHJcblxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdy1mdWxsIGJvdHRvbS0wIGJnLWdyYXktMTAwIGxnOnB5LTVcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBtLWF1dG8gZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1ib2xkXCI+WW91ciBtZWFsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWxlY3QgYSBwcm90ZWluIG9yIHZlZ2dpZSB0byBnZXQgc3RhcnRlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNtOnctZnVsbCBzbTpweS01IGJnLXllbGxvdy04MDAgbGc6dy0xLzMgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyB1cHBlcmNhc2VcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwYXRoczogbWVhbHMubWFwKG0gPT4ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWVhbDogbS5uYW1lLnNwbGl0KCcvJylbMV1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9