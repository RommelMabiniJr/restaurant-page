/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "initializePageStructure": () => (/* binding */ initializePageStructure),
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
    tabContainer.append(homeElem, menuElem, contactElem);
    return tabContainer
}

const initializePageStructure = () => {
    const nav = createNav();
    return nav;
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

    ulElement.append(ulHeader, mon_thu, fri_sat, sunday);
    contactWrapper.append(contactHeader, subHeadline, location, phone, email, ulElement, endingText);

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
    const header = document.createElement('header');
    const headline = document.createElement('h1');
    const subHeadline = document.createElement('h2')

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

function createMenuSection() {
    const menuWrapper = document.createElement('div');
    const headline = document.createElement('h1');
    const FoodHeadline = document.createElement('h2');
    const DrinksHeadline = document.createElement('h2');
    const foodContainer = document.createElement('ul');
    const drinksContainer = document.createElement('ul');


    const myMenuItem = menuItem()
    FoodHeadline.innerText = "FOODS";
    const PorkBBQ = myMenuItem.create("Pork Barbecue", "a dish composed of marinated pork slices that are skewered and grilled", "₱13.00");
    const ChickenBBQ = myMenuItem.create("Chicken Barbecue", "consists of chicken parts or entire chickens[1] that are barbecued, grilled or smoked", "₱35.00");
    const PorkLiver = myMenuItem.create("Pork Liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const ChickenLiver = myMenuItem.create("Chicken liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const BBQedIntestine = myMenuItem.create("Barbecued Intestine", "a dish composed of marinated pork slices that are skewered and grilled", "₱05.00");

    DrinksHeadline.innerText = "DRINKS";
    const coke = myMenuItem.create("Coca-Cola", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const sprite = myMenuItem.create("Sprite", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const iced_tea = myMenuItem.create("Iced Tea", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const water = myMenuItem.create("Water", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");


    const foodList = document.createElement('ul');
    const drinksList = document.createElement('ul');
    foodList.append(PorkBBQ, ChickenBBQ, PorkLiver, ChickenLiver, BBQedIntestine);
    drinksList.append(coke, sprite, iced_tea, water);

    foodContainer.append(FoodHeadline, foodList);
    drinksContainer.append(DrinksHeadline, drinksList);


    headline.innerText = "MENU";
    menuWrapper.append(headline, foodContainer,drinksContainer);

    return menuWrapper;
}

const menuItem = () => {
    const create = (title, description, price) => {
        // Create a list item with other inner elements & assign their values from arguments
        const listElement = document.createElement('li');
        const itemHeader = document.createElement('h3');
        const itemDetails = document.createElement('p');
        const itemPrice = document.createElement('span');

        itemHeader.innerText = title;
        itemDetails.innerText = description;
        itemPrice.innerText = price;

        // Class Names for styling
        listElement.classList.add('menu-item');
        itemHeader.classList.add('menu-item_heading');
        itemDetails.classList.add('menu-item_details');
        itemPrice.classList.add('menu-item_price');

        // Append all within li element and return it
        listElement.appendChild(itemHeader);
        listElement.appendChild(itemDetails);
        listElement.appendChild(itemPrice);

        return listElement;
    };

    return {create};
}

/***/ }),

/***/ "./src/icons8-restaurant-96.png":
/*!**************************************!*\
  !*** ./src/icons8-restaurant-96.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9425a41311e02bca1480.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons8_restaurant_96_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons8-restaurant-96.png */ "./src/icons8-restaurant-96.png");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementCreator.js */ "./src/elementCreator.js");






// console.log("Hi! I am called from index.js!");




const mainContainer = document.querySelector('#content');

// Create the NAV portion
const logo = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createLogo)(_icons8_restaurant_96_png__WEBPACK_IMPORTED_MODULE_0__);
const restaurantName = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createHeadertag)('h3', "Edang's Barbecue House")
const nav = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.setupNav)(logo, restaurantName);

// Create the Tab buttons for each section with a div container parent
let homeBtn, contactBtn, menuBtn;
homeBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createBtn)('tab-btn', 'HOME');
contactBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createBtn)('tab-btn', 'CONTACT');
menuBtn = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createBtn)('tab-btn', 'MENU');
const pageTabsPortion = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_4__.createThreePageTabs)(homeBtn, menuBtn, contactBtn);

const displayContent = document.createElement('div');

mainContainer.append(nav, pageTabsPortion, displayContent);





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25ETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjhDO0FBQ0s7QUFDQTtBQUNNO0FBQzRFOztBQUVySTs7Ozs7QUFLQTs7QUFFQTtBQUNBLGFBQWEsOERBQVUsQ0FBQyxzREFBSTtBQUM1Qix1QkFBdUIsbUVBQWU7QUFDdEMsWUFBWSw0REFBUTs7QUFFcEI7QUFDQTtBQUNBLFVBQVUsNkRBQVM7QUFDbkIsYUFBYSw2REFBUztBQUN0QixVQUFVLDZEQUFTO0FBQ25CLHdCQUF3Qix1RUFBbUI7O0FBRTNDOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0VBQWlCOztBQUVwRCxNQUFNO0FBQ047QUFDQSxtQ0FBbUMsZ0VBQWlCOztBQUVwRCxNQUFNO0FBQ047QUFDQSxtQ0FBbUMsc0VBQW9CO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXJ0YWcgPSAodHlwZSwgdGV4dENvbnRlbnQgPSAnJykgPT4ge1xuICAgIGxldCBoZWFkZXJFbGVtZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdoMSc6XG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2gyJzpcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaDMnOlxuICAgICAgICAgICAgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoNCc6XG4gICAgICAgICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2g1JzpcbiAgICAgICAgICAgIGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGhlYWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVMb2dvID0gKGljb25Tb3VyY2UpID0+IHtcbiAgICBjb25zdCBMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgTG9nby5zcmMgPSBpY29uU291cmNlO1xuICAgIHJldHVybiBMb2dvXG59XG5cbmV4cG9ydCBjb25zdCBzZXR1cE5hdiA9IChsb2dvLCBjb21wYW55TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdigpO1xuXG4gICAgLy9hcHBlbmQgY2hpbGQgZWxlbWVudHNcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbXBhbnlOYW1lKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdG4gPSAoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHRDb250ZW50O1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVUaHJlZVBhZ2VUYWJzID0gKGhvbWVFbGVtLCBtZW51RWxlbSwgY29udGFjdEVsZW0pID0+IHtcbiAgICBjb25zdCB0YWJDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kKGhvbWVFbGVtLCBtZW51RWxlbSwgY29udGFjdEVsZW0pO1xuICAgIHJldHVybiB0YWJDb250YWluZXJcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVQYWdlU3RydWN0dXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdigpO1xuICAgIHJldHVybiBuYXY7XG59IiwiLy8gQ29udGFjdCBVc1xuXG4vLyBUaGFuayB5b3UgZm9yIHZpc2l0aW5nIG91ciByZXN0YXVyYW50J3Mgd2Vic2l0ZSEgSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBjb21tZW50cywgd2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuXG5cbi8vIExvY2F0aW9uOiAxMjMgTWFpbiBTdHJlZXQsIEFueXRvd24sIFVTQVxuXG4vLyBQaG9uZTogKDEyMykgNDU2LTc4OTBcblxuLy8gRW1haWw6IGluZm9AcmVzdGF1cmFudC5jb21cblxuLy8gSG91cnM6XG5cbi8vIE1vbmRheS1UaHVyc2RheTogMTE6MDBhbS0xMDowMHBtXG4vLyBGcmlkYXktU2F0dXJkYXk6IDExOjAwYW0tMTE6MDBwbVxuLy8gU3VuZGF5OiAxMjowMHBtLTk6MDBwbVxuLy8gV2UgbG9vayBmb3J3YXJkIHRvIHNlcnZpbmcgeW91IVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzdWJIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgbW9uX3RodSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZnJpX3NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IGVuZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIC8vIEFkZCBoZWFkbGluZSBhbmQgc3ViLWhlYWRsaW5lIHRvIGhlYWRlciBjb250ZW50XG4gICAgXG4gICAgY29udGFjdEhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBzdWJIZWFkbGluZS5pbm5lclRleHQgPSBcIlRoYW5rIHlvdSBmb3IgdmlzaXRpbmcgb3VyIHJlc3RhdXJhbnQncyB3ZWJzaXRlISBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIGNvbW1lbnRzLCB3ZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS5cIjtcbiAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBcIkxvY2F0aW9uOiAxMjMgTWFpbiBTdHJlZXQsIEFueXRvd24sIFVTQVwiO1xuICAgIHBob25lLmlubmVyVGV4dCA9IFwiUGhvbmU6ICgxMjMpIDQ1Ni03ODkwXCI7XG4gICAgZW1haWwuaW5uZXJUZXh0ID0gXCJFbWFpbDogaW5mb0ByZXN0YXVyYW50LmNvbVwiO1xuXG4gICAgdWxIZWFkZXIuaW5uZXJUZXh0ID0gXCJIb3VyczogXCI7XG4gICAgbW9uX3RodS5pbm5lclRleHQgPSAnTW9uZGF5LVRodXJzZGF5OiAxMTowMGFtLTEwOjAwcG0nO1xuICAgIGZyaV9zYXQuaW5uZXJUZXh0ID0gXCJGcmlkYXktU2F0dXJkYXk6IDExOjAwYW0tMTE6MDBwbVwiO1xuICAgIHN1bmRheS5pbm5lclRleHQgPSBcIlN1bmRheTogMTI6MDBwbS05OjAwcG1cIjtcbiAgICBlbmRpbmdUZXh0LmlubmVyVGV4dCA9IFwiV2UgbG9vayBmb3J3YXJkIHRvIHNlcnZpbmcgeW91IVwiO1xuXG4gICAgdWxFbGVtZW50LmFwcGVuZCh1bEhlYWRlciwgbW9uX3RodSwgZnJpX3NhdCwgc3VuZGF5KTtcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmQoY29udGFjdEhlYWRlciwgc3ViSGVhZGxpbmUsIGxvY2F0aW9uLCBwaG9uZSwgZW1haWwsIHVsRWxlbWVudCwgZW5kaW5nVGV4dCk7XG5cbiAgICByZXR1cm4gY29udGFjdFdyYXBwZXI7XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGFsbCBuZWNlc3NhcnkgRE9NIGVsZW1lbnRzXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHN1YkhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuXG4gICAgLy8gQWRkIGhlYWRsaW5lIGFuZCBzdWItaGVhZGxpbmUgdG8gaGVhZGVyIGNvbnRlbnRcbiAgICBoZWFkbGluZS5pbm5lclRleHQgPSBcIlNtb2tlLCBTYXVjZSwgJiBTdWRzXCI7XG4gICAgc3ViSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJTZXJ2aW5nIHF1YWxpdHkgZm9vZHMgYW5kIGJldmVyYWdlcyBzaW5jZSAxOTk1LiBNYWtlIHlvdXIgd2F5IHRvIG91ciBzbW9rZWQgaG91c2UgbG9jYXRlZCBpbiBBYnV5b2csIExleXRlLlwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3ViSGVhZGxpbmUpO1xuXG4gICAgLy8gV3JhcCBhbGwgb2YgdGhlIGN1dG9taXplZCBjb250ZW50XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgRm9vZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBEcmlua3NIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG4gICAgY29uc3QgbXlNZW51SXRlbSA9IG1lbnVJdGVtKClcbiAgICBGb29kSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJGT09EU1wiO1xuICAgIGNvbnN0IFBvcmtCQlEgPSBteU1lbnVJdGVtLmNyZWF0ZShcIlBvcmsgQmFyYmVjdWVcIiwgXCJhIGRpc2ggY29tcG9zZWQgb2YgbWFyaW5hdGVkIHBvcmsgc2xpY2VzIHRoYXQgYXJlIHNrZXdlcmVkIGFuZCBncmlsbGVkXCIsIFwi4oKxMTMuMDBcIik7XG4gICAgY29uc3QgQ2hpY2tlbkJCUSA9IG15TWVudUl0ZW0uY3JlYXRlKFwiQ2hpY2tlbiBCYXJiZWN1ZVwiLCBcImNvbnNpc3RzIG9mIGNoaWNrZW4gcGFydHMgb3IgZW50aXJlIGNoaWNrZW5zWzFdIHRoYXQgYXJlIGJhcmJlY3VlZCwgZ3JpbGxlZCBvciBzbW9rZWRcIiwgXCLigrEzNS4wMFwiKTtcbiAgICBjb25zdCBQb3JrTGl2ZXIgPSBteU1lbnVJdGVtLmNyZWF0ZShcIlBvcmsgTGl2ZXJcIiwgXCJhIGRpc2ggY29tcG9zZWQgb2YgbWFyaW5hdGVkIHBvcmsgc2xpY2VzIHRoYXQgYXJlIHNrZXdlcmVkIGFuZCBncmlsbGVkXCIsIFwi4oKxMzUuMDBcIik7XG4gICAgY29uc3QgQ2hpY2tlbkxpdmVyID0gbXlNZW51SXRlbS5jcmVhdGUoXCJDaGlja2VuIGxpdmVyXCIsIFwiYSBkaXNoIGNvbXBvc2VkIG9mIG1hcmluYXRlZCBwb3JrIHNsaWNlcyB0aGF0IGFyZSBza2V3ZXJlZCBhbmQgZ3JpbGxlZFwiLCBcIuKCsTM1LjAwXCIpO1xuICAgIGNvbnN0IEJCUWVkSW50ZXN0aW5lID0gbXlNZW51SXRlbS5jcmVhdGUoXCJCYXJiZWN1ZWQgSW50ZXN0aW5lXCIsIFwiYSBkaXNoIGNvbXBvc2VkIG9mIG1hcmluYXRlZCBwb3JrIHNsaWNlcyB0aGF0IGFyZSBza2V3ZXJlZCBhbmQgZ3JpbGxlZFwiLCBcIuKCsTA1LjAwXCIpO1xuXG4gICAgRHJpbmtzSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJEUklOS1NcIjtcbiAgICBjb25zdCBjb2tlID0gbXlNZW51SXRlbS5jcmVhdGUoXCJDb2NhLUNvbGFcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC5cIiwgXCLigrEyNS4wMFwiKTtcbiAgICBjb25zdCBzcHJpdGUgPSBteU1lbnVJdGVtLmNyZWF0ZShcIlNwcml0ZVwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LlwiLCBcIuKCsTI1LjAwXCIpO1xuICAgIGNvbnN0IGljZWRfdGVhID0gbXlNZW51SXRlbS5jcmVhdGUoXCJJY2VkIFRlYVwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LlwiLCBcIuKCsTI1LjAwXCIpO1xuICAgIGNvbnN0IHdhdGVyID0gbXlNZW51SXRlbS5jcmVhdGUoXCJXYXRlclwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LlwiLCBcIuKCsTI1LjAwXCIpO1xuXG5cbiAgICBjb25zdCBmb29kTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZHJpbmtzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZm9vZExpc3QuYXBwZW5kKFBvcmtCQlEsIENoaWNrZW5CQlEsIFBvcmtMaXZlciwgQ2hpY2tlbkxpdmVyLCBCQlFlZEludGVzdGluZSk7XG4gICAgZHJpbmtzTGlzdC5hcHBlbmQoY29rZSwgc3ByaXRlLCBpY2VkX3RlYSwgd2F0ZXIpO1xuXG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmQoRm9vZEhlYWRsaW5lLCBmb29kTGlzdCk7XG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZChEcmlua3NIZWFkbGluZSwgZHJpbmtzTGlzdCk7XG5cblxuICAgIGhlYWRsaW5lLmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZChoZWFkbGluZSwgZm9vZENvbnRhaW5lcixkcmlua3NDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1lbnVXcmFwcGVyO1xufVxuXG5jb25zdCBtZW51SXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSkgPT4ge1xuICAgICAgICAvLyBDcmVhdGUgYSBsaXN0IGl0ZW0gd2l0aCBvdGhlciBpbm5lciBlbGVtZW50cyAmIGFzc2lnbiB0aGVpciB2YWx1ZXMgZnJvbSBhcmd1bWVudHNcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgaXRlbURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBpdGVtSGVhZGVyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBpdGVtRGV0YWlscy5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuXG4gICAgICAgIC8vIENsYXNzIE5hbWVzIGZvciBzdHlsaW5nXG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBpdGVtSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbV9oZWFkaW5nJyk7XG4gICAgICAgIGl0ZW1EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbV9kZXRhaWxzJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1fcHJpY2UnKTtcblxuICAgICAgICAvLyBBcHBlbmQgYWxsIHdpdGhpbiBsaSBlbGVtZW50IGFuZCByZXR1cm4gaXRcbiAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUhlYWRlcik7XG4gICAgICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1EZXRhaWxzKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgICAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7Y3JlYXRlfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaWNvbiBmcm9tICcuL2ljb25zOC1yZXN0YXVyYW50LTk2LnBuZyc7XG5pbXBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9IGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVNlY3Rpb24gfSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9jb250YWN0JztcbmltcG9ydCB7IGNyZWF0ZUJ0biwgY3JlYXRlTG9nbywgY3JlYXRlVGhyZWVQYWdlVGFicywgY3JlYXRlSGVhZGVydGFnLCBpbml0aWFsaXplUGFnZVN0cnVjdHVyZSwgc2V0dXBOYXYgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvci5qc1wiO1xuXG4vLyBjb25zb2xlLmxvZyhcIkhpISBJIGFtIGNhbGxlZCBmcm9tIGluZGV4LmpzIVwiKTtcblxuXG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIENyZWF0ZSB0aGUgTkFWIHBvcnRpb25cbmNvbnN0IGxvZ28gPSBjcmVhdGVMb2dvKGljb24pO1xuY29uc3QgcmVzdGF1cmFudE5hbWUgPSBjcmVhdGVIZWFkZXJ0YWcoJ2gzJywgXCJFZGFuZydzIEJhcmJlY3VlIEhvdXNlXCIpXG5jb25zdCBuYXYgPSBzZXR1cE5hdihsb2dvLCByZXN0YXVyYW50TmFtZSk7XG5cbi8vIENyZWF0ZSB0aGUgVGFiIGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbiB3aXRoIGEgZGl2IGNvbnRhaW5lciBwYXJlbnRcbmxldCBob21lQnRuLCBjb250YWN0QnRuLCBtZW51QnRuO1xuaG9tZUJ0biA9IGNyZWF0ZUJ0bigndGFiLWJ0bicsICdIT01FJyk7XG5jb250YWN0QnRuID0gY3JlYXRlQnRuKCd0YWItYnRuJywgJ0NPTlRBQ1QnKTtcbm1lbnVCdG4gPSBjcmVhdGVCdG4oJ3RhYi1idG4nLCAnTUVOVScpO1xuY29uc3QgcGFnZVRhYnNQb3J0aW9uID0gY3JlYXRlVGhyZWVQYWdlVGFicyhob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcblxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxubWFpbkNvbnRhaW5lci5hcHBlbmQobmF2LCBwYWdlVGFic1BvcnRpb24sIGRpc3BsYXlDb250ZW50KTtcblxuXG5cblxuXG4vLyBTVEFSVCBPRiBFVkVOVCBMSVNURU5FUiBMT0dJQ1xuY29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWJ0blwiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lckhhc0NoaWxkID0gKCkgPT4gbWFpbkNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCk7XG5jb25zdCBjbGVhck1haW5Db250YWluZXIgPSAoKSA9PiB7XG4gICAgaWYgKG1haW5Db250YWluZXJIYXNDaGlsZCgpKSB7XG4gICAgICAgIC8vZW1wdGllcyB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG59XG5cblxuY29uc3QgbG9hZENvbXBvbmVudCA9IChlKSA9PiB7XG5cbiAgICAvLyBVU0UgVEhFIEJVVFRPTlMgVEVYVCBDT05URU5UIFRPIE1BVENIIFdIQVQgVFlQRSBPRiBNT0RVTEUgVE8gQkUgTE9BREVEXG4gICAgY29uc3QgdGFiQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuXG4gICAgaWYgKHRhYkNsaWNrZWQgPT0gXCJIT01FXCIpIHtcbiAgICAgICAgY2xlYXJNYWluQ29udGFpbmVyKCk7XG4gICAgICAgIGRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVTZWN0aW9uKCkpO1xuXG4gICAgfSBlbHNlIGlmICh0YWJDbGlja2VkID09IFwiTUVOVVwiKSB7XG4gICAgICAgIGNsZWFyTWFpbkNvbnRhaW5lcigpO1xuICAgICAgICBkaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcblxuICAgIH0gZWxzZSBpZiAodGFiQ2xpY2tlZCA9PSBcIkNPTlRBQ1RcIikge1xuICAgICAgICBjbGVhck1haW5Db250YWluZXIoKTtcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSlcbiAgICB9XG59XG5cbnRhYkJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb21wb25lbnQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=