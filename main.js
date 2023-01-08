/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! emerson-vieira-_aR4l6fj6wQ-unsplash.jpg */ "./src/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Seymour+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font-family: 'Quicksand', sans-serif; */\n/* font-family: 'Seymour One', sans-serif; */\n\n\nhtml, body {\n    margin: 0;\n    height: auto;\n}\n\nbody {\n    content: \"\";\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    z-index: -99;\n}\n\n.nav-container {\n    height: 80px;\n    display: flex;\n    background-color: #FBFEF9;\n    font-family: 'Seymour One', sans-serif;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 50px;\n}\n\n.nav-logo-image {\n    width: 50px;\n    height: 50px;\n    margin-right: 20px;\n}\n\n.nav-logo-name {\n    font-size: 25px;\n}\n\n.tab-container {\n    height: calc(100vh - 80px);\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #191923;\n}\n\n.tab-container .tab-btn {\n    flex: 1;\n    width: 100px;\n    border: none;\n    color: #ffffff;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.tab-container .tab-btn:nth-child(1) {\n    background-color: #0E79B2;\n}\n\n.tab-container .tab-btn:nth-child(2) {\n    background-color: #BF1363;\n}\n\n.tab-container .tab-btn:nth-child(3) {\n    background-color: #F39237;\n}\n\n.tab-container .tab-btn:hover {\n    background-color: #ffffff00;\n}\n\n\n\n\n/* HOME SECTION DESIGN */\n.home-section-con {\n    padding: 50px;\n    margin-left: 100px;\n}\n\n.headline, .sub-headline {\n    color: #ffffff;\n    font-family: 'Quicksand', sans-serif;\n}\n\n.headline {\n    font-size: 80px;\n    font-weight: 700;\n    margin-bottom: 0px;\n    margin-top: 180px;\n}\n\n.sub-headline {\n    font-size: 30px;\n}\n\n\n\n/* MENU SECTION DESIGN */\n\n.menu-container {\n    color: #ffffff;\n    font-family: 'Quicksand', sans-serif;\n    font-weight: 700;\n    background-color: #ffffff00;    \n}\n\n.menu-header {\n    text-align: center;\n    font-size: 50px;\n}\n\n.menu-container > div {\n    display: flex;\n    justify-content: center;\n    column-gap: 20px;\n}\n\n.menu-item {\n    background-color: #191923;\n    padding: 10px;\n    width: 300px;\n    border-radius: 10px;\n}\n\n.food-item-list,\n.drinks-item-list {\n    width: 660px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.drinks-container h2 {\n    text-align: right;\n}\n\n.menu-item-img {\n    height: 200px;\n    width: 100%;\n}\n\n.menu-item_heading {\n    font-size: 23px;\n}\n\n.menu-item_details {\n    font-size: 15px;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\n\n\n/* CONTACT US SECTION DESIGN */\n.contact-container {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n    background-color:#191923b0;\n    height: calc(100vh - 80px);\n}\n\n.contact-content {\n    color: #ffffff;     \n    font-family: 'Quicksand', sans-serif;\n    text-align: right;\n    width: 40vw;\n    padding: 10px;\n}\n\n.contact-illustration > img {\n    height: 400px;\n    width: 400px;\n    margin-right: 40px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,0CAA0C;AAC1C,4CAA4C;;;AAG5C;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,yDAAgE;IAChE,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,sCAAsC;IACtC,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;;;;AAKA,wBAAwB;AACxB;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;;;AAIA,wBAAwB;;AAExB;IACI,cAAc;IACd,oCAAoC;IACpC,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;;;AAIA,8BAA8B;AAC9B;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,iBAAiB;IACjB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Seymour+One&display=swap');\n\n/* font-family: 'Quicksand', sans-serif; */\n/* font-family: 'Seymour One', sans-serif; */\n\n\nhtml, body {\n    margin: 0;\n    height: auto;\n}\n\nbody {\n    content: \"\";\n    background-image: url(\"emerson-vieira-_aR4l6fj6wQ-unsplash.jpg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    z-index: -99;\n}\n\n.nav-container {\n    height: 80px;\n    display: flex;\n    background-color: #FBFEF9;\n    font-family: 'Seymour One', sans-serif;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 50px;\n}\n\n.nav-logo-image {\n    width: 50px;\n    height: 50px;\n    margin-right: 20px;\n}\n\n.nav-logo-name {\n    font-size: 25px;\n}\n\n.tab-container {\n    height: calc(100vh - 80px);\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #191923;\n}\n\n.tab-container .tab-btn {\n    flex: 1;\n    width: 100px;\n    border: none;\n    color: #ffffff;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.tab-container .tab-btn:nth-child(1) {\n    background-color: #0E79B2;\n}\n\n.tab-container .tab-btn:nth-child(2) {\n    background-color: #BF1363;\n}\n\n.tab-container .tab-btn:nth-child(3) {\n    background-color: #F39237;\n}\n\n.tab-container .tab-btn:hover {\n    background-color: #ffffff00;\n}\n\n\n\n\n/* HOME SECTION DESIGN */\n.home-section-con {\n    padding: 50px;\n    margin-left: 100px;\n}\n\n.headline, .sub-headline {\n    color: #ffffff;\n    font-family: 'Quicksand', sans-serif;\n}\n\n.headline {\n    font-size: 80px;\n    font-weight: 700;\n    margin-bottom: 0px;\n    margin-top: 180px;\n}\n\n.sub-headline {\n    font-size: 30px;\n}\n\n\n\n/* MENU SECTION DESIGN */\n\n.menu-container {\n    color: #ffffff;\n    font-family: 'Quicksand', sans-serif;\n    font-weight: 700;\n    background-color: #ffffff00;    \n}\n\n.menu-header {\n    text-align: center;\n    font-size: 50px;\n}\n\n.menu-container > div {\n    display: flex;\n    justify-content: center;\n    column-gap: 20px;\n}\n\n.menu-item {\n    background-color: #191923;\n    padding: 10px;\n    width: 300px;\n    border-radius: 10px;\n}\n\n.food-item-list,\n.drinks-item-list {\n    width: 660px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.drinks-container h2 {\n    text-align: right;\n}\n\n.menu-item-img {\n    height: 200px;\n    width: 100%;\n}\n\n.menu-item_heading {\n    font-size: 23px;\n}\n\n.menu-item_details {\n    font-size: 15px;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\n\n\n/* CONTACT US SECTION DESIGN */\n.contact-container {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n    background-color:#191923b0;\n    height: calc(100vh - 80px);\n}\n\n.contact-content {\n    color: #ffffff;     \n    font-family: 'Quicksand', sans-serif;\n    text-align: right;\n    width: 40vw;\n    padding: 10px;\n}\n\n.contact-illustration > img {\n    height: 400px;\n    width: 400px;\n    margin-right: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "createHeadertag": () => (/* binding */ createHeadertag),
/* harmony export */   "createLogo": () => (/* binding */ createLogo),
/* harmony export */   "createThreePageTabs": () => (/* binding */ createThreePageTabs),
/* harmony export */   "setupNav": () => (/* binding */ setupNav)
/* harmony export */ });
const createNav = () => {
   return document.createElement('nav');
}

const createContainer = () => {
    return document.createElement('div');
}

const createHeadertag = (type, textContent = '') => {
    let headerElement;
    switch (type) {
        case 'h1':
            headerElement = document.createElement('h1')
            break;
        case 'h2':
            headerElement = document.createElement('h2')
            break;
        case 'h3':
            headerElement = document.createElement('h3')
            break;
        case 'h4':
            headerElement = document.createElement('h4')
            break;
        case 'h5':
            headerElement = document.createElement('h5')
            break;
        default:
            break;
    }

    headerElement.innerText = textContent;
    return headerElement;
}

const createLogo = (iconSource) => {
    const Logo = new Image();
    Logo.src = iconSource;
    return Logo
}

const setupNav = (logo, companyName) => {
    const nav = createNav();

    //add class names for css design
    nav.classList.add("nav-container");
    logo.classList.add('nav-logo-image');
    companyName.classList.add('nav-logo-name');

    //append child elements
    nav.appendChild(logo);
    nav.appendChild(companyName);

    return nav;
}

const createBtn = (className, textContent) => {
    const button = document.createElement('button');
    button.classList.add(className);
    button.innerText = textContent;

    return button;
}
const createThreePageTabs = (homeElem, menuElem, contactElem) => {
    const tabContainer = createContainer();

    // added class names
    tabContainer.classList.add('tab-container');
    tabContainer.append(homeElem, menuElem, contactElem);
    return tabContainer
}

// export const initializePageStructure = () => {
//     const nav = createNav();
//     return nav;
// }

/***/ }),

/***/ "./src/initialpageloader.js":
/*!**********************************!*\
  !*** ./src/initialpageloader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadInitialPage": () => (/* binding */ loadInitialPage)
/* harmony export */ });
/* harmony import */ var _output_onlinepngtools_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output-onlinepngtools.png */ "./src/output-onlinepngtools.png");
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");



const loadInitialPage = (mainContainer) => {
    // Create the NAV portion
    const logo = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createLogo)(_output_onlinepngtools_png__WEBPACK_IMPORTED_MODULE_0__);
    const restaurantName = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createHeadertag)('h3', "Edang's Barbecue House")
    const nav = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.setupNav)(logo, restaurantName);

    // Create the Tab buttons for each section with a div container parent
    let homeBtn, contactBtn, menuBtn;
    homeBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)('tab-btn', 'HOME');
    contactBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)('tab-btn', 'CONTACT');
    menuBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)('tab-btn', 'MENU');
    const pageTabsPortion = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_1__.createThreePageTabs)(homeBtn, menuBtn, contactBtn);

    mainContainer.append(nav, pageTabsPortion);
}



/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactSection": () => (/* binding */ createContactSection)
/* harmony export */ });
/* harmony import */ var _undraw_barbecue_3x93_svg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../undraw_barbecue_3x93-svg.png */ "./src/undraw_barbecue_3x93-svg.png");


// Contact Us

// Thank you for visiting our restaurant's website! If you have any questions or comments, we'd love to hear from you.

// Location: 123 Main Street, Anytown, USA

// Phone: (123) 456-7890

// Email: info@restaurant.com

// Hours:

// Monday-Thursday: 11:00am-10:00pm
// Friday-Saturday: 11:00am-11:00pm
// Sunday: 12:00pm-9:00pm
// We look forward to serving you!

const createContactSection = () => {
    const contactWrapper = document.createElement('div');
    const contactContent = document.createElement('div');
    const contactIllustration = document.createElement('div');
    const illustration = new Image();


    const contactHeader = document.createElement('h1'); 
    const subHeadline = document.createElement('h2');

    const location = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    const ulElement = document.createElement('ul');
    const ulHeader = document.createElement('h2')
    const mon_thu = document.createElement('li');
    const fri_sat = document.createElement('li');
    const sunday = document.createElement('li');

    const endingText = document.createElement('p')

    // Add headline and sub-headline to header content
    
    contactHeader.innerText = "Contact Us";
    subHeadline.innerText = "Thank you for visiting our restaurant's website! If you have any questions or comments, we'd love to hear from you.";
    location.innerText = "Location: 123 Main Street, Anytown, USA";
    phone.innerText = "Phone: (123) 456-7890";
    email.innerText = "Email: info@restaurant.com";

    ulHeader.innerText = "Hours: ";
    mon_thu.innerText = 'Monday-Thursday: 11:00am-10:00pm';
    fri_sat.innerText = "Friday-Saturday: 11:00am-11:00pm";
    sunday.innerText = "Sunday: 12:00pm-9:00pm";
    endingText.innerText = "We look forward to serving you!";

    illustration.src = _undraw_barbecue_3x93_svg_png__WEBPACK_IMPORTED_MODULE_0__;

    ulElement.append(ulHeader, mon_thu, fri_sat, sunday);
    contactContent.append(contactHeader, subHeadline, location, phone, email, ulElement, endingText);
    contactIllustration.appendChild(illustration)
    contactWrapper.append(contactContent, contactIllustration);


    contactWrapper.classList.add('contact-container');
    contactContent.classList.add('contact-content');
    contactIllustration.classList.add("contact-illustration");
    contactHeader.classList.add('contact-heading');
    subHeadline.classList.add('contact-subheadline');
    location.classList.add("contact-location");
    phone.classList.add("contact-phone");
    email.classList.add("contact-email");



    return contactWrapper;
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeSection": () => (/* binding */ createHomeSection)
/* harmony export */ });

function createHomeSection() {
    // Create all necessary DOM elements
    const wrapper = document.createElement('div')
    const header = document.createElement('div');
    const headline = document.createElement('h1');
    const subHeadline = document.createElement('h2')

    wrapper.classList.add("home-section-con");
    headline.classList.add("headline");
    subHeadline.classList.add("sub-headline");

    // Add headline and sub-headline to header content
    headline.innerText = "Smoke, Sauce, & Suds";
    subHeadline.innerText = "Serving quality foods and beverages since 1995. Make your way to our smoked house located in Abuyog, Leyte."
    header.appendChild(headline);
    header.appendChild(subHeadline);

    // Wrap all of the cutomized content
    wrapper.appendChild(header);

    return wrapper;
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuSection": () => (/* binding */ createMenuSection)
/* harmony export */ });
/* harmony import */ var _porkbbq_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../porkbbq.jpg */ "./src/porkbbq.jpg");
/* harmony import */ var _chicken_bbq_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chicken-bbq.jpg */ "./src/chicken-bbq.jpg");
/* harmony import */ var _pork_liver_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pork-liver.jpg */ "./src/pork-liver.jpg");
/* harmony import */ var _chicken_liver_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chicken-liver.jpg */ "./src/chicken-liver.jpg");
/* harmony import */ var _isaw_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isaw.jpg */ "./src/isaw.jpg");
/* harmony import */ var _coke_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../coke.jpg */ "./src/coke.jpg");
/* harmony import */ var _sprite_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sprite.jpeg */ "./src/sprite.jpeg");
/* harmony import */ var _lemon_Iced_Tea_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lemon-Iced-Tea.jpg */ "./src/lemon-Iced-Tea.jpg");
/* harmony import */ var _water_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../water.jpg */ "./src/water.jpg");












function createMenuSection() {
    const menuWrapper = document.createElement('div');
    const menuSelectionContainer = document.createElement("div");
    const headline = document.createElement('h1');
    const FoodHeadline = document.createElement('h2');
    const DrinksHeadline = document.createElement('h2');
    const foodContainer = document.createElement('ul');
    const drinksContainer = document.createElement('ul');


    const myMenuItem = menuItem()
    FoodHeadline.innerText = "🍽️ FOODS 🍽️ ";
    const PorkBBQ = myMenuItem.create(_porkbbq_jpg__WEBPACK_IMPORTED_MODULE_0__, "Pork Barbecue", "a dish composed of marinated pork slices that are skewered and grilled", "₱13.00");
    const ChickenBBQ = myMenuItem.create(_chicken_bbq_jpg__WEBPACK_IMPORTED_MODULE_1__, "Chicken Barbecue", "consists of chicken parts or entire chickens that are barbecued, grilled or smoked", "₱35.00");
    const PorkLiver = myMenuItem.create(_pork_liver_jpg__WEBPACK_IMPORTED_MODULE_2__, "Pork Liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const ChickenLiver = myMenuItem.create(_chicken_liver_jpg__WEBPACK_IMPORTED_MODULE_3__, "Chicken liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const BBQedIntestine = myMenuItem.create(_isaw_jpg__WEBPACK_IMPORTED_MODULE_4__, "Barbecued Intestine", "a dish composed of marinated pork slices that are skewered and grilled", "₱05.00");

    DrinksHeadline.innerText = "🥛 DRINKS 🥛";
    const coke = myMenuItem.create(_coke_jpg__WEBPACK_IMPORTED_MODULE_5__, "Coca-Cola", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const sprite = myMenuItem.create(_sprite_jpeg__WEBPACK_IMPORTED_MODULE_6__, "Sprite", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const iced_tea = myMenuItem.create(_lemon_Iced_Tea_jpg__WEBPACK_IMPORTED_MODULE_7__, "Iced Tea", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const water = myMenuItem.create(_water_jpg__WEBPACK_IMPORTED_MODULE_8__, "Water", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");


    const foodList = document.createElement('ul');
    const drinksList = document.createElement('ul');
    foodList.classList.add("food-item-list");
    drinksList.classList.add("drinks-item-list");

    foodList.append(PorkBBQ, ChickenBBQ, PorkLiver, ChickenLiver, BBQedIntestine);
    drinksList.append(coke, sprite, iced_tea, water);

    foodContainer.append(FoodHeadline, foodList);
    drinksContainer.append(DrinksHeadline, drinksList);


    headline.innerText = "MENU";
    headline.classList.add('menu-header');
    foodContainer.classList.add('food-container');
    drinksContainer.classList.add("drinks-container");

    menuSelectionContainer.append(foodContainer, drinksContainer);
    menuWrapper.append(headline, menuSelectionContainer);
    menuWrapper.classList.add('menu-container');

    return menuWrapper;
}

const menuItem = () => {
    const create = (imageURL, title, description, price) => {
        // Create a list item with other inner elements & assign their values from arguments
        const listElement = document.createElement('li');
        const itemHeader = document.createElement('h3');
        const itemDetails = document.createElement('p');
        const itemPrice = document.createElement('span');
        const itemImage = new Image();

        itemImage.src = imageURL;
        itemHeader.innerText = title;
        itemDetails.innerText = description;
        itemPrice.innerText = price;

        // Class Names for styling
        itemImage.classList.add('menu-item-img');
        listElement.classList.add('menu-item');
        itemHeader.classList.add('menu-item_heading');
        itemDetails.classList.add('menu-item_details');
        itemPrice.classList.add('menu-item_price');

        // Append all within li element and return it
        listElement.appendChild(itemImage);
        listElement.appendChild(itemHeader);
        listElement.appendChild(itemDetails);
        listElement.appendChild(itemPrice);

        return listElement;
    };

    return {create};
}

/***/ }),

/***/ "./src/chicken-bbq.jpg":
/*!*****************************!*\
  !*** ./src/chicken-bbq.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d1d22846d07273acc45.jpg";

/***/ }),

/***/ "./src/chicken-liver.jpg":
/*!*******************************!*\
  !*** ./src/chicken-liver.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01231f8026e50172458e.jpg";

/***/ }),

/***/ "./src/coke.jpg":
/*!**********************!*\
  !*** ./src/coke.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8420d7f775e193acf67.jpg";

/***/ }),

/***/ "./src/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./src/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dea9af9fe8b3c3ea438c.jpg";

/***/ }),

/***/ "./src/isaw.jpg":
/*!**********************!*\
  !*** ./src/isaw.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77e69084583ee0b60707.jpg";

/***/ }),

/***/ "./src/lemon-Iced-Tea.jpg":
/*!********************************!*\
  !*** ./src/lemon-Iced-Tea.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab4e1862a53f251afb68.jpg";

/***/ }),

/***/ "./src/output-onlinepngtools.png":
/*!***************************************!*\
  !*** ./src/output-onlinepngtools.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1a9c621bc480492c87c.png";

/***/ }),

/***/ "./src/pork-liver.jpg":
/*!****************************!*\
  !*** ./src/pork-liver.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2faab7212b769f7b4ceb.jpg";

/***/ }),

/***/ "./src/porkbbq.jpg":
/*!*************************!*\
  !*** ./src/porkbbq.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d0794145bf76f598d87.jpg";

/***/ }),

/***/ "./src/sprite.jpeg":
/*!*************************!*\
  !*** ./src/sprite.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4da94d2a86edf10bd841.jpeg";

/***/ }),

/***/ "./src/undraw_barbecue_3x93-svg.png":
/*!******************************************!*\
  !*** ./src/undraw_barbecue_3x93-svg.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "670ab75a455021708244.png";

/***/ }),

/***/ "./src/water.jpg":
/*!***********************!*\
  !*** ./src/water.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baf2b7da7a5e8bd5ea9b.jpg";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _initialpageloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialpageloader */ "./src/initialpageloader.js");
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");








// this initializes the page structure
const mainContainer = document.querySelector('#content');
const displayContent = document.createElement('div');
displayContent.classList.add('display-area')


// Create background div


;(0,_initialpageloader__WEBPACK_IMPORTED_MODULE_4__.loadInitialPage)(mainContainer);


mainContainer.appendChild(displayContent);

// INITIALIZE LANDING SECTION WHICH IS HOME
displayContent.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHomeSection)());



// START OF EVENT LISTENER LOGIC
const tabButtons = document.querySelectorAll(".tab-btn");

const mainContainerHasChild = () => mainContainer.hasChildNodes();
const clearMainContainer = () => {
    if (mainContainerHasChild()) {
        //empties the main container
        displayContent.innerHTML = "";
    }
}


const loadComponent = (e) => {

    // USE THE BUTTONS TEXT CONTENT TO MATCH WHAT TYPE OF MODULE TO BE LOADED
    const tabClicked = e.target.textContent;

    if (tabClicked == "HOME") {
        clearMainContainer();
        displayContent.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHomeSection)());

    } else if (tabClicked == "MENU") {
        clearMainContainer();
        displayContent.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuSection)());

    } else if (tabClicked == "CONTACT") {
        clearMainContainer();
        displayContent.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createContactSection)())
    }
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', loadComponent);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhCO0FBQ0E7QUFDTTtBQUNIO0FBQ3NEOzs7QUFHNUc7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxvRUFBZTs7O0FBR2Y7O0FBRUE7QUFDQSwyQkFBMkIsZ0VBQWlCOzs7O0FBSTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxnRUFBaUI7O0FBRXBELE1BQU07QUFDTjtBQUNBLG1DQUFtQyxnRUFBaUI7O0FBRXBELE1BQU07QUFDTjtBQUNBLG1DQUFtQyxzRUFBb0I7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbHBhZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImVtZXJzb24tdmllaXJhLV9hUjRsNmZqNndRLXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NzAwJmZhbWlseT1TZXltb3VyK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmOyAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnU2V5bW91ciBPbmUnLCBzYW5zLXNlcmlmOyAqL1xcblxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtOTk7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGRUY5O1xcbiAgICBmb250LWZhbWlseTogJ1NleW1vdXIgT25lJywgc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5uYXYtbG9nby1pbWFnZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm5hdi1sb2dvLW5hbWUge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi50YWItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MjM7XFxufVxcblxcbi50YWItY29udGFpbmVyIC50YWItYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YWItY29udGFpbmVyIC50YWItYnRuOm50aC1jaGlsZCgxKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc5QjI7XFxufVxcblxcbi50YWItY29udGFpbmVyIC50YWItYnRuOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRjEzNjM7XFxufVxcblxcbi50YWItY29udGFpbmVyIC50YWItYnRuOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzkyMzc7XFxufVxcblxcbi50YWItY29udGFpbmVyIC50YWItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBIT01FIFNFQ1RJT04gREVTSUdOICovXFxuLmhvbWUtc2VjdGlvbi1jb24ge1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxufVxcblxcbi5oZWFkbGluZSwgLnN1Yi1oZWFkbGluZSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcXG59XFxuXFxuLnN1Yi1oZWFkbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxuXFxuLyogTUVOVSBTRUNUSU9OIERFU0lHTiAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDsgICAgXFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MjM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvb2QtaXRlbS1saXN0LFxcbi5kcmlua3MtaXRlbS1saXN0IHtcXG4gICAgd2lkdGg6IDY2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmRyaW5rcy1jb250YWluZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbWcge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUtaXRlbV9oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4ubWVudS1pdGVtX2RldGFpbHMge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuXFxuLyogQ09OVEFDVCBVUyBTRUNUSU9OIERFU0lHTiAqL1xcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzE5MTkyM2IwO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGVudCB7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyAgICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbGx1c3RyYXRpb24gPiBpbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSwwQ0FBMEM7QUFDMUMsNENBQTRDOzs7QUFHNUM7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5REFBZ0U7SUFDaEUsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7OztBQUtBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUlBLHdCQUF3Qjs7QUFFeEI7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7Ozs7QUFJQSw4QkFBOEI7QUFDOUI7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NzAwJmZhbWlseT1TZXltb3VyK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7ICovXFxuLyogZm9udC1mYW1pbHk6ICdTZXltb3VyIE9uZScsIHNhbnMtc2VyaWY7ICovXFxuXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZW1lcnNvbi12aWVpcmEtX2FSNGw2Zmo2d1EtdW5zcGxhc2guanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC05OTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZFRjk7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2V5bW91ciBPbmUnLCBzYW5zLXNlcmlmO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuLm5hdi1sb2dvLWltYWdlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubmF2LWxvZ28tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkyMztcXG59XFxuXFxuLnRhYi1jb250YWluZXIgLnRhYi1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRhYi1jb250YWluZXIgLnRhYi1idG46bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFNzlCMjtcXG59XFxuXFxuLnRhYi1jb250YWluZXIgLnRhYi1idG46bnRoLWNoaWxkKDIpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JGMTM2MztcXG59XFxuXFxuLnRhYi1jb250YWluZXIgLnRhYi1idG46bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOTIzNztcXG59XFxuXFxuLnRhYi1jb250YWluZXIgLnRhYi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxufVxcblxcblxcblxcblxcbi8qIEhPTUUgU0VDVElPTiBERVNJR04gKi9cXG4uaG9tZS1zZWN0aW9uLWNvbiB7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuXFxuLmhlYWRsaW5lLCAuc3ViLWhlYWRsaW5lIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE4MHB4O1xcbn1cXG5cXG4uc3ViLWhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG4vKiBNRU5VIFNFQ1RJT04gREVTSUdOICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwOyAgICBcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkyMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9vZC1pdGVtLWxpc3QsXFxuLmRyaW5rcy1pdGVtLWxpc3Qge1xcbiAgICB3aWR0aDogNjYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZHJpbmtzLWNvbnRhaW5lciBoMiB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubWVudS1pdGVtLWltZyB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1pdGVtX2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxufVxcblxcbi5tZW51LWl0ZW1fZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG5cXG4vKiBDT05UQUNUIFVTIFNFQ1RJT04gREVTSUdOICovXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkxOTIzYjA7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gICAgY29sb3I6ICNmZmZmZmY7ICAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWlsbHVzdHJhdGlvbiA+IGltZyB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlSGVhZGVydGFnID0gKHR5cGUsIHRleHRDb250ZW50ID0gJycpID0+IHtcbiAgICBsZXQgaGVhZGVyRWxlbWVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnaDEnOlxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoMic6XG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2gzJzpcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaDQnOlxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoNSc6XG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBoZWFkZXJFbGVtZW50LmlubmVyVGV4dCA9IHRleHRDb250ZW50O1xuICAgIHJldHVybiBoZWFkZXJFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTG9nbyA9IChpY29uU291cmNlKSA9PiB7XG4gICAgY29uc3QgTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIExvZ28uc3JjID0gaWNvblNvdXJjZTtcbiAgICByZXR1cm4gTG9nb1xufVxuXG5leHBvcnQgY29uc3Qgc2V0dXBOYXYgPSAobG9nbywgY29tcGFueU5hbWUpID0+IHtcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcblxuICAgIC8vYWRkIGNsYXNzIG5hbWVzIGZvciBjc3MgZGVzaWduXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbmF2LWxvZ28taW1hZ2UnKTtcbiAgICBjb21wYW55TmFtZS5jbGFzc0xpc3QuYWRkKCduYXYtbG9nby1uYW1lJyk7XG5cbiAgICAvL2FwcGVuZCBjaGlsZCBlbGVtZW50c1xuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29tcGFueU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ0biA9IChjbGFzc05hbWUsIHRleHRDb250ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dENvbnRlbnQ7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRocmVlUGFnZVRhYnMgPSAoaG9tZUVsZW0sIG1lbnVFbGVtLCBjb250YWN0RWxlbSkgPT4ge1xuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcigpO1xuXG4gICAgLy8gYWRkZWQgY2xhc3MgbmFtZXNcbiAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmQoaG9tZUVsZW0sIG1lbnVFbGVtLCBjb250YWN0RWxlbSk7XG4gICAgcmV0dXJuIHRhYkNvbnRhaW5lclxufVxuXG4vLyBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZVBhZ2VTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2KCk7XG4vLyAgICAgcmV0dXJuIG5hdjtcbi8vIH0iLCJpbXBvcnQgaWNvbiBmcm9tICcuL291dHB1dC1vbmxpbmVwbmd0b29scy5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlQnRuLCBjcmVhdGVMb2dvLCBjcmVhdGVUaHJlZVBhZ2VUYWJzLCBjcmVhdGVIZWFkZXJ0YWcsIHNldHVwTmF2IH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3IuanNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRJbml0aWFsUGFnZSA9IChtYWluQ29udGFpbmVyKSA9PiB7XG4gICAgLy8gQ3JlYXRlIHRoZSBOQVYgcG9ydGlvblxuICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVMb2dvKGljb24pO1xuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gY3JlYXRlSGVhZGVydGFnKCdoMycsIFwiRWRhbmcncyBCYXJiZWN1ZSBIb3VzZVwiKVxuICAgIGNvbnN0IG5hdiA9IHNldHVwTmF2KGxvZ28sIHJlc3RhdXJhbnROYW1lKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgVGFiIGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbiB3aXRoIGEgZGl2IGNvbnRhaW5lciBwYXJlbnRcbiAgICBsZXQgaG9tZUJ0biwgY29udGFjdEJ0biwgbWVudUJ0bjtcbiAgICBob21lQnRuID0gY3JlYXRlQnRuKCd0YWItYnRuJywgJ0hPTUUnKTtcbiAgICBjb250YWN0QnRuID0gY3JlYXRlQnRuKCd0YWItYnRuJywgJ0NPTlRBQ1QnKTtcbiAgICBtZW51QnRuID0gY3JlYXRlQnRuKCd0YWItYnRuJywgJ01FTlUnKTtcbiAgICBjb25zdCBwYWdlVGFic1BvcnRpb24gPSBjcmVhdGVUaHJlZVBhZ2VUYWJzKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobmF2LCBwYWdlVGFic1BvcnRpb24pO1xufVxuXG4iLCJpbXBvcnQgcGVyc29uYmJxIGZyb20gJy4uL3VuZHJhd19iYXJiZWN1ZV8zeDkzLXN2Zy5wbmcnO1xuXG4vLyBDb250YWN0IFVzXG5cbi8vIFRoYW5rIHlvdSBmb3IgdmlzaXRpbmcgb3VyIHJlc3RhdXJhbnQncyB3ZWJzaXRlISBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIGNvbW1lbnRzLCB3ZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS5cblxuLy8gTG9jYXRpb246IDEyMyBNYWluIFN0cmVldCwgQW55dG93biwgVVNBXG5cbi8vIFBob25lOiAoMTIzKSA0NTYtNzg5MFxuXG4vLyBFbWFpbDogaW5mb0ByZXN0YXVyYW50LmNvbVxuXG4vLyBIb3VyczpcblxuLy8gTW9uZGF5LVRodXJzZGF5OiAxMTowMGFtLTEwOjAwcG1cbi8vIEZyaWRheS1TYXR1cmRheTogMTE6MDBhbS0xMTowMHBtXG4vLyBTdW5kYXk6IDEyOjAwcG0tOTowMHBtXG4vLyBXZSBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UhXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0U2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFjdElsbHVzdHJhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlsbHVzdHJhdGlvbiA9IG5ldyBJbWFnZSgpO1xuXG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgXG4gICAgY29uc3Qgc3ViSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IG1vbl90aHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGZyaV9zYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBlbmRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICAvLyBBZGQgaGVhZGxpbmUgYW5kIHN1Yi1oZWFkbGluZSB0byBoZWFkZXIgY29udGVudFxuICAgIFxuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgc3ViSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUaGFuayB5b3UgZm9yIHZpc2l0aW5nIG91ciByZXN0YXVyYW50J3Mgd2Vic2l0ZSEgSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBjb21tZW50cywgd2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuXCI7XG4gICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gXCJMb2NhdGlvbjogMTIzIE1haW4gU3RyZWV0LCBBbnl0b3duLCBVU0FcIjtcbiAgICBwaG9uZS5pbm5lclRleHQgPSBcIlBob25lOiAoMTIzKSA0NTYtNzg5MFwiO1xuICAgIGVtYWlsLmlubmVyVGV4dCA9IFwiRW1haWw6IGluZm9AcmVzdGF1cmFudC5jb21cIjtcblxuICAgIHVsSGVhZGVyLmlubmVyVGV4dCA9IFwiSG91cnM6IFwiO1xuICAgIG1vbl90aHUuaW5uZXJUZXh0ID0gJ01vbmRheS1UaHVyc2RheTogMTE6MDBhbS0xMDowMHBtJztcbiAgICBmcmlfc2F0LmlubmVyVGV4dCA9IFwiRnJpZGF5LVNhdHVyZGF5OiAxMTowMGFtLTExOjAwcG1cIjtcbiAgICBzdW5kYXkuaW5uZXJUZXh0ID0gXCJTdW5kYXk6IDEyOjAwcG0tOTowMHBtXCI7XG4gICAgZW5kaW5nVGV4dC5pbm5lclRleHQgPSBcIldlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdSFcIjtcblxuICAgIGlsbHVzdHJhdGlvbi5zcmMgPSBwZXJzb25iYnE7XG5cbiAgICB1bEVsZW1lbnQuYXBwZW5kKHVsSGVhZGVyLCBtb25fdGh1LCBmcmlfc2F0LCBzdW5kYXkpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZChjb250YWN0SGVhZGVyLCBzdWJIZWFkbGluZSwgbG9jYXRpb24sIHBob25lLCBlbWFpbCwgdWxFbGVtZW50LCBlbmRpbmdUZXh0KTtcbiAgICBjb250YWN0SWxsdXN0cmF0aW9uLmFwcGVuZENoaWxkKGlsbHVzdHJhdGlvbilcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmQoY29udGFjdENvbnRlbnQsIGNvbnRhY3RJbGx1c3RyYXRpb24pO1xuXG5cbiAgICBjb250YWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGVudCcpO1xuICAgIGNvbnRhY3RJbGx1c3RyYXRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaWxsdXN0cmF0aW9uXCIpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkaW5nJyk7XG4gICAgc3ViSGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1zdWJoZWFkbGluZScpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWxvY2F0aW9uXCIpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXBob25lXCIpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWVtYWlsXCIpO1xuXG5cblxuICAgIHJldHVybiBjb250YWN0V3JhcHBlcjtcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lU2VjdGlvbigpIHtcbiAgICAvLyBDcmVhdGUgYWxsIG5lY2Vzc2FyeSBET00gZWxlbWVudHNcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgc3ViSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5cbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb24tY29uXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZVwiKTtcbiAgICBzdWJIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwic3ViLWhlYWRsaW5lXCIpO1xuXG4gICAgLy8gQWRkIGhlYWRsaW5lIGFuZCBzdWItaGVhZGxpbmUgdG8gaGVhZGVyIGNvbnRlbnRcbiAgICBoZWFkbGluZS5pbm5lclRleHQgPSBcIlNtb2tlLCBTYXVjZSwgJiBTdWRzXCI7XG4gICAgc3ViSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJTZXJ2aW5nIHF1YWxpdHkgZm9vZHMgYW5kIGJldmVyYWdlcyBzaW5jZSAxOTk1LiBNYWtlIHlvdXIgd2F5IHRvIG91ciBzbW9rZWQgaG91c2UgbG9jYXRlZCBpbiBBYnV5b2csIExleXRlLlwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3ViSGVhZGxpbmUpO1xuXG4gICAgLy8gV3JhcCBhbGwgb2YgdGhlIGN1dG9taXplZCBjb250ZW50XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59IiwiaW1wb3J0IHBvcmtiYnEgZnJvbSAnLi4vcG9ya2JicS5qcGcnO1xuaW1wb3J0IGNoaWNrZW5iYnEgZnJvbSAnLi4vY2hpY2tlbi1iYnEuanBnJztcbmltcG9ydCBwb3JrbGl2ZXIgZnJvbSAnLi4vcG9yay1saXZlci5qcGcnO1xuaW1wb3J0IGNoaWNrZW5saXZlciBmcm9tICcuLi9jaGlja2VuLWxpdmVyLmpwZyc7XG5pbXBvcnQgaXNhdyBmcm9tICcuLi9pc2F3LmpwZyc7XG5pbXBvcnQgY29rZWltZyBmcm9tICcuLi9jb2tlLmpwZyc7XG5pbXBvcnQgc3ByaXRlaW1nIGZyb20gJy4uL3Nwcml0ZS5qcGVnJztcbmltcG9ydCBpY2VkdGVhaW1nIGZyb20gJy4uL2xlbW9uLUljZWQtVGVhLmpwZyc7XG5pbXBvcnQgbWluZXJhbHdhdGVyaW1nIGZyb20gJy4uL3dhdGVyLmpwZyc7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51U2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgRm9vZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBEcmlua3NIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG4gICAgY29uc3QgbXlNZW51SXRlbSA9IG1lbnVJdGVtKClcbiAgICBGb29kSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCLwn42977iPIEZPT0RTIPCfjb3vuI8gXCI7XG4gICAgY29uc3QgUG9ya0JCUSA9IG15TWVudUl0ZW0uY3JlYXRlKHBvcmtiYnEsIFwiUG9yayBCYXJiZWN1ZVwiLCBcImEgZGlzaCBjb21wb3NlZCBvZiBtYXJpbmF0ZWQgcG9yayBzbGljZXMgdGhhdCBhcmUgc2tld2VyZWQgYW5kIGdyaWxsZWRcIiwgXCLigrExMy4wMFwiKTtcbiAgICBjb25zdCBDaGlja2VuQkJRID0gbXlNZW51SXRlbS5jcmVhdGUoY2hpY2tlbmJicSwgXCJDaGlja2VuIEJhcmJlY3VlXCIsIFwiY29uc2lzdHMgb2YgY2hpY2tlbiBwYXJ0cyBvciBlbnRpcmUgY2hpY2tlbnMgdGhhdCBhcmUgYmFyYmVjdWVkLCBncmlsbGVkIG9yIHNtb2tlZFwiLCBcIuKCsTM1LjAwXCIpO1xuICAgIGNvbnN0IFBvcmtMaXZlciA9IG15TWVudUl0ZW0uY3JlYXRlKHBvcmtsaXZlciwgXCJQb3JrIExpdmVyXCIsIFwiYSBkaXNoIGNvbXBvc2VkIG9mIG1hcmluYXRlZCBwb3JrIHNsaWNlcyB0aGF0IGFyZSBza2V3ZXJlZCBhbmQgZ3JpbGxlZFwiLCBcIuKCsTM1LjAwXCIpO1xuICAgIGNvbnN0IENoaWNrZW5MaXZlciA9IG15TWVudUl0ZW0uY3JlYXRlKGNoaWNrZW5saXZlciwgXCJDaGlja2VuIGxpdmVyXCIsIFwiYSBkaXNoIGNvbXBvc2VkIG9mIG1hcmluYXRlZCBwb3JrIHNsaWNlcyB0aGF0IGFyZSBza2V3ZXJlZCBhbmQgZ3JpbGxlZFwiLCBcIuKCsTM1LjAwXCIpO1xuICAgIGNvbnN0IEJCUWVkSW50ZXN0aW5lID0gbXlNZW51SXRlbS5jcmVhdGUoaXNhdywgXCJCYXJiZWN1ZWQgSW50ZXN0aW5lXCIsIFwiYSBkaXNoIGNvbXBvc2VkIG9mIG1hcmluYXRlZCBwb3JrIHNsaWNlcyB0aGF0IGFyZSBza2V3ZXJlZCBhbmQgZ3JpbGxlZFwiLCBcIuKCsTA1LjAwXCIpO1xuXG4gICAgRHJpbmtzSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCLwn6WbIERSSU5LUyDwn6WbXCI7XG4gICAgY29uc3QgY29rZSA9IG15TWVudUl0ZW0uY3JlYXRlKGNva2VpbWcsIFwiQ29jYS1Db2xhXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXCIsIFwi4oKxMjUuMDBcIik7XG4gICAgY29uc3Qgc3ByaXRlID0gbXlNZW51SXRlbS5jcmVhdGUoc3ByaXRlaW1nLCBcIlNwcml0ZVwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LlwiLCBcIuKCsTI1LjAwXCIpO1xuICAgIGNvbnN0IGljZWRfdGVhID0gbXlNZW51SXRlbS5jcmVhdGUoaWNlZHRlYWltZywgXCJJY2VkIFRlYVwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LlwiLCBcIuKCsTI1LjAwXCIpO1xuICAgIGNvbnN0IHdhdGVyID0gbXlNZW51SXRlbS5jcmVhdGUobWluZXJhbHdhdGVyaW1nLCBcIldhdGVyXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXCIsIFwi4oKxMjUuMDBcIik7XG5cblxuICAgIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBkcmlua3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBmb29kTGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pdGVtLWxpc3RcIik7XG4gICAgZHJpbmtzTGlzdC5jbGFzc0xpc3QuYWRkKFwiZHJpbmtzLWl0ZW0tbGlzdFwiKTtcblxuICAgIGZvb2RMaXN0LmFwcGVuZChQb3JrQkJRLCBDaGlja2VuQkJRLCBQb3JrTGl2ZXIsIENoaWNrZW5MaXZlciwgQkJRZWRJbnRlc3RpbmUpO1xuICAgIGRyaW5rc0xpc3QuYXBwZW5kKGNva2UsIHNwcml0ZSwgaWNlZF90ZWEsIHdhdGVyKTtcblxuICAgIGZvb2RDb250YWluZXIuYXBwZW5kKEZvb2RIZWFkbGluZSwgZm9vZExpc3QpO1xuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmQoRHJpbmtzSGVhZGxpbmUsIGRyaW5rc0xpc3QpO1xuXG5cbiAgICBoZWFkbGluZS5pbm5lclRleHQgPSBcIk1FTlVcIjtcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIGZvb2RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1jb250YWluZXInKTtcbiAgICBkcmlua3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyaW5rcy1jb250YWluZXJcIik7XG5cbiAgICBtZW51U2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZChmb29kQ29udGFpbmVyLCBkcmlua3NDb250YWluZXIpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZChoZWFkbGluZSwgbWVudVNlbGVjdGlvbkNvbnRhaW5lcik7XG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICAgIHJldHVybiBtZW51V3JhcHBlcjtcbn1cblxuY29uc3QgbWVudUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gKGltYWdlVVJMLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhIGxpc3QgaXRlbSB3aXRoIG90aGVyIGlubmVyIGVsZW1lbnRzICYgYXNzaWduIHRoZWlyIHZhbHVlcyBmcm9tIGFyZ3VtZW50c1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBpdGVtRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaW1hZ2VVUkw7XG4gICAgICAgIGl0ZW1IZWFkZXIuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGl0ZW1EZXRhaWxzLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XG5cbiAgICAgICAgLy8gQ2xhc3MgTmFtZXMgZm9yIHN0eWxpbmdcbiAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1pbWcnKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIGl0ZW1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtX2hlYWRpbmcnKTtcbiAgICAgICAgaXRlbURldGFpbHMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtX2RldGFpbHMnKTtcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbV9wcmljZScpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBhbGwgd2l0aGluIGxpIGVsZW1lbnQgYW5kIHJldHVybiBpdFxuICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChpdGVtSGVhZGVyKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbURldGFpbHMpO1xuICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgICAgIHJldHVybiBsaXN0RWxlbWVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtjcmVhdGV9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVTZWN0aW9uIH0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuaW1wb3J0IHsgbG9hZEluaXRpYWxQYWdlIH0gZnJvbSAnLi9pbml0aWFscGFnZWxvYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVCdG4sIGNyZWF0ZUxvZ28sIGNyZWF0ZVRocmVlUGFnZVRhYnMsIGNyZWF0ZUhlYWRlcnRhZywgc2V0dXBOYXYgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvci5qc1wiO1xuXG5cbi8vIHRoaXMgaW5pdGlhbGl6ZXMgdGhlIHBhZ2Ugc3RydWN0dXJlXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWFyZWEnKVxuXG5cbi8vIENyZWF0ZSBiYWNrZ3JvdW5kIGRpdlxuXG5cbmxvYWRJbml0aWFsUGFnZShtYWluQ29udGFpbmVyKTtcblxuXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50KTtcblxuLy8gSU5JVElBTElaRSBMQU5ESU5HIFNFQ1RJT04gV0hJQ0ggSVMgSE9NRVxuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVNlY3Rpb24oKSk7XG5cblxuXG4vLyBTVEFSVCBPRiBFVkVOVCBMSVNURU5FUiBMT0dJQ1xuY29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWJ0blwiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lckhhc0NoaWxkID0gKCkgPT4gbWFpbkNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCk7XG5jb25zdCBjbGVhck1haW5Db250YWluZXIgPSAoKSA9PiB7XG4gICAgaWYgKG1haW5Db250YWluZXJIYXNDaGlsZCgpKSB7XG4gICAgICAgIC8vZW1wdGllcyB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG59XG5cblxuY29uc3QgbG9hZENvbXBvbmVudCA9IChlKSA9PiB7XG5cbiAgICAvLyBVU0UgVEhFIEJVVFRPTlMgVEVYVCBDT05URU5UIFRPIE1BVENIIFdIQVQgVFlQRSBPRiBNT0RVTEUgVE8gQkUgTE9BREVEXG4gICAgY29uc3QgdGFiQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgaWYgKHRhYkNsaWNrZWQgPT0gXCJIT01FXCIpIHtcbiAgICAgICAgY2xlYXJNYWluQ29udGFpbmVyKCk7XG4gICAgICAgIGRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVTZWN0aW9uKCkpO1xuXG4gICAgfSBlbHNlIGlmICh0YWJDbGlja2VkID09IFwiTUVOVVwiKSB7XG4gICAgICAgIGNsZWFyTWFpbkNvbnRhaW5lcigpO1xuICAgICAgICBkaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcblxuICAgIH0gZWxzZSBpZiAodGFiQ2xpY2tlZCA9PSBcIkNPTlRBQ1RcIikge1xuICAgICAgICBjbGVhck1haW5Db250YWluZXIoKTtcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSlcbiAgICB9XG59XG5cbnRhYkJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb21wb25lbnQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=