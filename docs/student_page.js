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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
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

/***/ 23:
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

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(357);

var _sidebar = __webpack_require__(22);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _notification = __webpack_require__(23);

var _notification2 = _interopRequireDefault(_notification);

var _filter = __webpack_require__(358);

var _filter2 = _interopRequireDefault(_filter);

var _nxtLesson = __webpack_require__(359);

var _nxtLesson2 = _interopRequireDefault(_nxtLesson);

var _balance = __webpack_require__(360);

var _balance2 = _interopRequireDefault(_balance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sidebar2.default)();

var notificationBtn = document.querySelector('.header__notification');
(0, _notification2.default)(notificationBtn);

var filter = document.querySelector('.prev-lesson__dropdown-filter');
(0, _filter2.default)(filter);

var nxtLessonItems = document.querySelectorAll('.nxt-lesson__item');
for (var i = 0; i < nxtLessonItems.length; i++) {
    (0, _nxtLesson2.default)(nxtLessonItems[i]);
}

var balanceChart = document.querySelectorAll('.balance__chart');
for (var _i = 0; _i < balanceChart.length; _i++) {
    (0, _balance2.default)(balanceChart[_i]);
}

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = filterMenu;
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
        event.target.classList.toggle('selected-item_opened');
    });

    document.addEventListener('click', closeSelectItems);
    document.addEventListener('touchstart', closeSelectItems);

    function closeSelectItems() {
        toggle.classList.remove('selected-item_opened');
        items.classList.add('items_hidden');
    }
}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = nxtLesson;
function nxtLesson(nxtLessonItem) {
    var toggle = nxtLessonItem.querySelector('.toggle');
    toggle.addEventListener('click', function () {
        nxtLessonItem.classList.toggle('nxt-lesson__item_opened');
    });
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = balance;
function balance(balanceChart) {
    var progressValue = balanceChart.querySelector('.st1');

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

/***/ })

/******/ });