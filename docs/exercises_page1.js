/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
/******/ })
/************************************************************************/
/******/ ({

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(362);


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(363);

var _notification = __webpack_require__(43);

var _notification2 = _interopRequireDefault(_notification);

var _sidebar = __webpack_require__(42);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _category = __webpack_require__(364);

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationBtn = document.querySelector('.header__notification');
(0, _notification2.default)(notificationBtn);

(0, _sidebar2.default)();

var categoriesBlocks = document.querySelectorAll('.main__category-block');
(0, _category2.default)(categoriesBlocks);

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = categoryMenu;
function categoryMenu(categories) {
    for (var i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', function () {
            event.target.parentNode.classList.toggle('main__category-block_opened');
        });
    }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sidebar;
function sidebar() {
    var sidebarToggle = document.querySelector('.sidebar__toggle');
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content-container');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar_opened');
        content.classList.toggle('content-container_hidden');
    });

    document.addEventListener('click', closeSidebar);
    document.addEventListener('touchstart', closeSidebar);

    function closeSidebar() {
        if (event.target.classList.contains('wrapper')) {
            sidebar.classList.remove('sidebar_opened');
            content.classList.remove('content-container_hidden');
        }
    }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = notification;
function notification(notificationBtn) {
    var notification = notificationBtn.querySelector('.notification__container');
    notificationBtn.addEventListener('click', function () {
        notification.classList.toggle('notification__container_opened');
    });
}

/***/ })

/******/ });