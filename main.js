/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n    const homebtn = document.querySelector(\"#home\")\n    const menubtn = document.querySelector(\"#menu\")\n    const aboutbtn = document.querySelector(\"#about\")\n    const logo = document.querySelector('.logo')\n\n    const container = document.querySelector('.container')\n    const content  = document.createElement('div')\n\n    const phone = document.createElement('p')\n    const address = document.createElement('p')\n    const map = document.createElement('p')\n\n    phone.textContent = \"Call us: ☎️ 123-456-7890\"\n    phone.style.fontWeight = \"bold\"\n    phone.style.alignSelf = \"left\"\n    \n    address.style.fontWeight = \"bold\"\n    address.style.alignSelf = \"left\"\n    address.textContent = \"Visit us: 28 Liberty St 60th floor, New York, NY 10005, United States\"\n    map.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.82044437798!2d-74.02639120817183!3d40.70799669400136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc797d635a1%3A0x60b055910436a0a4!2sManhatta!5e0!3m2!1sen!2sma!4v1732787564517!5m2!1sen!2sma\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'\n\n    content.style.display = \"flex\"\n    content.style.flexDirection = \"column\"\n    content.style.justifyContent = \"center\"\n    content.style.alignItems = \"center\"\n    content.style.border = \"1px solid black\"\n    content.style.padding = \"20px\"\n    content.style.gap = \"5px\"\n\n\n\n    content.append(phone)\n    content.append(address)\n    content.append(map)\n    \n    container.append(content)\n\n    homebtn.addEventListener('click', () => {\n        if (content) {\n            container.removeChild(content)\n        }\n    })\n\n    menubtn.addEventListener('click', () => {\n        if (content) {\n            container.removeChild(content)\n        }\n    })\n\n    aboutbtn.addEventListener('click', () => {\n        if (content) {\n            container.removeChild(content)\n        }\n    })\n\n    logo.addEventListener('click', () => {\n        if (content) {\n            container.removeChild(content)\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   removeHome: () => (/* binding */ removeHome)\n/* harmony export */ });\nconst home = () => {\n    const container = document.querySelector('.container')\n\n    const content = document.createElement('div')\n    const leftContent = document.createElement(\"div\")\n    const homeImg = document.createElement('img')\n    const rightContent = document.createElement(\"div\")\n    const header = document.createElement('h3')\n    const description = document.createElement('p')\n    const quote = document.createElement('p')\n\n    content.classList.add('contentHome')\n\n    homeImg.src = \"https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n    homeImg.style.width = \"433.65px\"\n    homeImg.style.height = \"558.75px\"\n    homeImg.style.boxShadow = \"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px\"\n\n    leftContent.append(homeImg)\n\n    rightContent.style.display = \"flex\"\n    rightContent.style.flexDirection = \"column\"\n    rightContent.style.justifyContent = \"center\"\n    rightContent.style.marginRight = \"200px\"\n    rightContent.style.marginLeft = \"20px\"\n\n    header.textContent = \"Welcome to Restau\"\n    header.style.marginBottom = \"5px\"\n    description.textContent = \"An Unforgettable Experience At Restau, we invite you to embark on a culinary journey that transcends the ordinary. Nestled in the heart of NYC, our Michelin-starred restaurant celebrates the art of fine dining with an exquisite fusion of seasonal ingredients, masterful techniques, and inspired creativity. Each dish tells a story—a harmonious blend of flavors, textures, and aromas that reflect our dedication to innovation and tradition. Our passionate team, led by Ian Ait, is committed to crafting a dining experience that captivates your senses and leaves a lasting impression. From the first sip to the final bite, every detail is thoughtfully designed to delight. Whether celebrating a special occasion or savoring a quiet moment, Restau offers an elegant, inviting space where memories are made. Indulge in the Extraordinary. Reserve your table today and join us for an evening of culinary artistry. Discover the essence of fine dining. Discover Restau.\"\n    quote.style.fontWeight = \"700\"\n    quote.textContent = \"\\\"The way we eat determines the world we live in.\\\"\"\n    rightContent.append(header)\n    rightContent.append(description)\n    rightContent.append(quote)\n    content.append(leftContent)\n    content.append(rightContent)\n\n    container.append(content)\n}\n\nfunction removeHome(){\n    const container = document.querySelector('.container')\n    const content = document.querySelector('.contentHome')\n    if (content){\n        container.removeChild(content)\n    }\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nconst homebtn = document.querySelector(\"#home\")\nconst menubtn = document.querySelector(\"#menu\")\nconst aboutbtn = document.querySelector(\"#about\")\n\nconst logo = document.querySelector('.logo')\n\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)()\n\nhomebtn.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n})\n\nmenubtn.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\naboutbtn.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\nlogo.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const homebtn = document.querySelector(\"#home\")\n    const menubtn = document.querySelector(\"#menu\")\n    const aboutbtn = document.querySelector(\"#about\")\n    const logo = document.querySelector('.logo')\n\n    const container = document.querySelector('.container')\n    const content  = document.createElement('div')\n    const dish_1 = document.createElement('div')\n    const dish_2 = document.createElement('div')\n    const dish_3 = document.createElement('div')\n    const dish_4 = document.createElement('div')\n    const dish_5 = document.createElement('div')\n\n    dish_1.classList.add('dish')\n    dish_2.classList.add('dish')\n    dish_3.classList.add('dish')\n    dish_4.classList.add('dish')\n    dish_5.classList.add('dish')\n\n    const img_1 = document.createElement('img')\n    img_1.src = \"/Users/mhamed/TOP/repos/Restaurant-Page/img/Behind-Guinea Fowl.jpeg\"\n    const img_2 = document.createElement('img')\n    img_2.src = \"/Users/mhamed/TOP/repos/Restaurant-Page/img/Benares - Baked Malabar Scallop.jpg\"\n    const img_3 = document.createElement('img')\n    img_3.src = \"/Users/mhamed/TOP/repos/Restaurant-Page/img/Cail Bruich - West coast crab, raw Orkney scallop, Exmoor caviar .jpg\"\n    const img_4 = document.createElement('img')\n    img_4.src = \"/Users/mhamed/TOP/repos/Restaurant-Page/img/Cornerstone - Hake Kiev.jpg\"\n    const img_5 = document.createElement('img')\n    img_5.src = \"/Users/mhamed/TOP/repos/Restaurant-Page/img/Davies and Brook - Venison.jpg\"\n\n    const title_1 = document.createElement('p')\n    title_1.textContent = \"Behind - Guinea Fowl\"\n    const title_2 = document.createElement('p')\n    title_2.textContent = \"Benares - Baked Malabar scallop\" \n    const title_3 = document.createElement('p')\n    title_3.textContent = \"Cail Bruich - West coast crab, raw Orkney scallop, Exmoor caviar\"\n    const title_4 = document.createElement('p')\n    title_4.textContent = \"Cornerstone - Hake Kiev\"\n    const title_5 = document.createElement('p')\n    title_5.textContent = \"Davies and Brook - Venison\"\n\n    const desc_1 = document.createElement('p')\n    desc_1.textContent = \"Seafood may be the primary focus at Behind but the kitchen shows it handles meat dishes with equal aplomb. The guinea fowl had been aged and rolled with a farce; it was just so flavoursome and succulent. The pumpkin was the perfect companion and enriched the meat with its creaminess. As a contrast, the confit of leg served on the side provided a deeper, more intense flavour.\"\n    const desc_2 = document.createElement('p')\n    desc_2.textContent = \"The three hand-dived Scottish scallops were perfectly cooked and came with a rich, creamy coconut curry sauce that was sweet but well balanced, with the spices expertly judged. The paratha on the side was really special; it was a soft as a whisper but dotted with crispiness and was the perfect vessel for soaking up the delicious curry in the shell.\"\n    const desc_3 = document.createElement('p')\n    desc_3.textContent = \"The fine quality white crab meat was topped with thin slices of scallop. But it was the accompanying elements that really brought this dish alive and added considerable depth: celeriac purée, a little grapefruit and a homemade dashi adding a wonderful umami element to the dish. Stunning ingredients and long, lingering flavours.\"\n    const desc_4 = document.createElement('p')\n    desc_4.textContent = \"A clever re-working of an old classic. The Kiev was enticingly golden and super crisp on the outside while the exceptional piece of hake inside was flawlessly cooked; it was moist and assured in flavour and the mushroom butter ran out in a gratifyingly tantalising way. A very moreish dish that provided wonderfully contrasting textures.\"\n    const desc_5 = document.createElement('p') \n    desc_5.textContent = \"A dish of elegance and refinement that showed an innate understanding of balance and control. The roasted venison loin was caramelised on the outside while the centre was pink and tender yet robust in flavour. The rich, deep and glossy juniper reduction sauce and the fondant of sweet potato and caramelised onion were the perfect partners for the stunning piece of meat.\"\n\n\n    dish_1.append(img_1)\n    dish_1.append(title_1)\n    dish_1.append(desc_1)\n    \n    dish_2.append(img_2)\n    dish_2.append(title_2)\n    dish_2.append(desc_2)\n\n    dish_3.append(img_3)\n    dish_3.append(title_3)\n    dish_3.append(desc_3)\n\n    dish_4.append(img_4)\n    dish_4.append(title_4)\n    dish_4.append(desc_4)\n\n    dish_5.append(img_5)\n    dish_5.append(title_5)\n    dish_5.append(desc_5)\n\n    content.append(dish_1)\n    content.append(dish_2)\n    content.append(dish_3)\n    content.append(dish_4)\n    content.append(dish_5)\n    container.append(content)\n\n    homebtn.addEventListener('click', () => {\n        if (content){\n            container.removeChild(content)\n        }\n    })\n\n    menubtn.addEventListener('click', () => {\n        if (content){\n            container.removeChild(content)\n        }\n    })\n\n    aboutbtn.addEventListener('click', () => {\n        if (content){\n            container.removeChild(content)\n        }\n    })\n\n    logo.addEventListener('click', () => {\n        if (content){\n            container.removeChild(content)\n        }\n    })\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;