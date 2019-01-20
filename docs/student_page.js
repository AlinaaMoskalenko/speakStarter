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
/******/ 	return __webpack_require__(__webpack_require__.s = 356);
/******/ })
/************************************************************************/
/******/ ({

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(357);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(358);

__webpack_require__(359);

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _notificationMenu = __webpack_require__(360);

var _filterMenu = __webpack_require__(361);

var _balanceMenu = __webpack_require__(362);

var _sidebarMenu = __webpack_require__(363);

(0, _sidebarMenu.sidebarMenu)();

var notificationBtn = document.querySelector('.header__notification');
(0, _notificationMenu.notificationMenu)(notificationBtn);

var fitlerAllScreen = document.querySelector('.previous-lesson__filter');
var fitlerXsScreen = document.querySelector('.previous-lesson__filter_xs');
(0, _filterMenu.filterMenu)(fitlerAllScreen);
(0, _filterMenu.filterMenu)(fitlerXsScreen);

var balanceDiagram = document.querySelectorAll('.balance__diagram');
for (var i = 0; i < balanceDiagram.length; i++) {
    (0, _balanceMenu.balanceMenu)(balanceDiagram[i]);
}

//next lesson open options
var lessonOption = document.querySelectorAll('.scheduled-lesson__options');
var lessonAction = document.querySelectorAll('.next-lesson__action');

var _loop = function _loop(_i) {
    lessonOption[_i].addEventListener('click', function (event) {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[_i].classList.toggle('next-lesson__action_opened');
    });
};

for (var _i = 0; _i < lessonOption.length; _i++) {
    _loop(_i);
}

var sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened')) sidebarElement.style.transition = 'none';
});

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notificationMenu = notificationMenu;
function notificationMenu(notificationBtn) {
    var notification = notificationBtn.querySelector('.notification__conteiner');
    notificationBtn.addEventListener('click', function () {
        notification.classList.toggle('notification__conteiner_opened');
    });
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterMenu = filterMenu;
function filterMenu(targetFilter) {
    var toggle = targetFilter.querySelector('.selected-item');
    var items = targetFilter.querySelector('.items');

    for (var i = 0; i < items.children.length; i++) {
        items.children[i].addEventListener('click', function (event) {
            toggle.textContent = event.target.textContent;
            closeSelectItems();
        });
        items.children[i].addEventListener('touchstart', function (event) {
            toggle.textContent = event.target.textContent;
            closeSelectItems();
        });
    }

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        items.classList.toggle('items_hidden');
        event.target.classList.toggle('select-arrow-active');
    });

    document.addEventListener('click', closeSelectItems);
    document.addEventListener('touchstart', closeSelectItems);

    function closeSelectItems() {
        toggle.classList.remove('select-arrow-active');
        items.classList.add('items_hidden');
    }
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.balanceMenu = balanceMenu;
function balanceMenu(balanceDiagram) {
    var progressValue = balanceDiagram.querySelector('.progress-bar__value');

    var RADIUS = 60;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    function progress(value) {
        var progress = value / 100;
        var dashoffset = CIRCUMFERENCE * (1 - progress);
        console.log('progress:', value + '%');
        progressValue.style.strokeDashoffset = dashoffset;
    }
    progressValue.style.strokeDasharray = CIRCUMFERENCE;
    progress(60);
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sidebarMenu = sidebarMenu;
function sidebarMenu() {
    var sidebarToggle = document.querySelector('.sidebar__toggle');
    var sidebar = document.querySelector('.wrapper-sidebar');
    var content = document.querySelector('.wrapper__content');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('wrapper-sidebar_opened');
        content.classList.toggle('wrapper__content_hidden');
    });

    document.addEventListener('click', closeSidebar);
    document.addEventListener('touchstart', closeSidebar);

    function closeSidebar() {
        if (event.target.classList.contains('wrapper-sidebar_opened')) {
            sidebar.classList.remove('wrapper-sidebar_opened');
            content.classList.remove('wrapper__content_hidden');
        }
    }
}

/***/ })

/******/ });