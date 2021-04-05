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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const contain = document.createElement('div');\n  contain.classList = 'container p-5';\n\n  const title = document.createElement('h1');\n  title.classList = 'container text-center main-headline';\n  title.innerText = 'About';\n\n  const paragraph = document.createElement('p');\n  paragraph.classList = 'container text-center about-text py-5';\n  paragraph.innerText = 'This restaurant is amazingly simple and still able to satisfy everybody with familiar taste and caring service.';\n\n  contain.appendChild(title);\n  contain.appendChild(paragraph);\n\n  return contain;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n  const contain = document.createElement('div');\n  contain.classList = 'container p-5';\n\n  const title = document.createElement('h1');\n  title.classList = 'container text-center main-headline';\n  title.textContent = 'Contact';\n  \n  const paragraph = document.createElement('p');\n  paragraph.classList = 'container text-center about-text py-5';\n  paragraph.innerText = 'Twitter: @Restaurant-Page\\n\\nFacebook: Restaurant Page';\n\n  contain.appendChild(title);\n  contain.appendChild(paragraph);\n\n  return contain;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst navbar = (0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst info = (0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst menu_pics = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\nmenu_pics.classList.add('d-none');\nconst contact_info = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\ncontact_info.classList.add('d-none');\n\nconst headline = document.createElement('h1');\nheadline.classList = 'container text-center p-4 main-headline';\n\n\nconst homeP = () => {\n  content.appendChild(headline);\n  content.appendChild(navbar);\n  content.appendChild(info);\n  content.appendChild(menu_pics);\n  content.appendChild(contact_info);\n\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const contact = document.getElementById('contact');\n\n  home.addEventListener('click', () => {\n    info.classList.remove('d-none');\n    menu_pics.classList.remove('d-block');\n    contact_info.classList.remove('d-block');\n\n    info.classList.add('d-block');\n    menu_pics.classList.add('d-none');\n    contact_info.classList.add('d-none');\n  });\n  \n  menu.addEventListener('click', () => {\n    info.classList.remove('d-block');\n    menu_pics.classList.remove('d-hide');\n    contact_info.classList.remove('d-block');\n\n    info.classList.add('d-none');\n    menu_pics.classList.add('d-block');\n    contact_info.classList.add('d-none');\n  });\n\n  contact.addEventListener('click', () => {\n    info.classList.remove('d-block');\n    menu_pics.classList.remove('d-block');\n    contact_info.classList.remove('d-hide');\n\n    info.classList.add('d-none');\n    menu_pics.classList.add('d-none');\n    contact_info.classList.add('d-block');\n  });\n  \n  headline.innerText = 'Restaurant-Page';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeP);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const contain = document.createElement('div');\n  contain.classList = 'container p-5';\n\n  const title = document.createElement('h1');\n  title.classList = 'container text-center main-headline';\n  title.innerText = 'Menu';\n\n  const pic1 = document.createElement('img');\n  pic1.src = '../assets/images/howcuttingdo.jpg';\n  pic1.alt = 'food';\n  pic1.classList = 'my-5 pic';\n\n  const pic2 = document.createElement('img');\n  pic2.src = '../assets/images/food1.jpg';\n  pic2.alt = 'food';\n  pic2.classList = 'my-5 pic';\n\n  const pic3 = document.createElement('img');\n  pic3.src = '../assets/images/food2.jpg';\n  pic3.alt = 'food';\n  pic3.classList = 'my-5 pic';\n\n  contain.appendChild(title);\n  contain.appendChild(pic1);\n  contain.appendChild(pic2);\n  contain.appendChild(pic3);\n\n  return contain;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nav = () => {\n  const navbar = document.createElement('nav');\n  navbar.classList = 'd-flex justify-content-between';\n  const home = document.createElement('a');\n  home.innerText = 'Home';\n  home.setAttribute(\"id\", \"home\");\n  home.classList = 'nav-obj';\n  const menu = document.createElement('a');\n  menu.innerText = 'Menu';\n  menu.setAttribute(\"id\", \"menu\");\n  menu.classList = 'nav-obj';\n  const contact = document.createElement('a');\n  contact.innerText = 'Contact';\n  contact.setAttribute(\"id\", \"contact\");\n  contact.classList = 'nav-obj';\n  navbar.appendChild(home);\n  navbar.appendChild(menu);\n  navbar.appendChild(contact);\n\n  return navbar;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

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