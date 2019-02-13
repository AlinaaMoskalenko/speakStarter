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
/******/ 	return __webpack_require__(__webpack_require__.s = 393);
/******/ })
/************************************************************************/
/******/ ({

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(395);

var answerButtons = document.querySelector('.btn-block');
var buttons = answerButtons.querySelectorAll('.btn-answer');

var inputs = document.querySelectorAll('.input');
var counter = 0;

var nextExercise = document.querySelector('.next-btn');

if (answerButtons.classList.contains('two')) {
    for (var i = 0; i < 2; i++) {
        buttons[i].classList.remove('hidden');
    }
} else {
    for (var _i = 2; _i < buttons.length; _i++) {
        buttons[_i].classList.remove('hidden');
    }
}

var _loop = function _loop(_i2) {
    buttons[_i2].addEventListener('click', function () {
        if (counter === 0) {
            inputs[counter].value = buttons[_i2].textContent;
            inputs[counter].style.width = buttons[_i2].offsetWidth - 20 + 'px'; //padding 20px (padding: 0 20px)
            inputs[counter].style.minWidth = '70px';

            inputs[counter].classList.remove('input_active');
            inputs[counter].autofocus = false;

            inputs[counter + 1].classList.add('input_active');
            inputs[counter + 1].focus();

            if (answerButtons.classList.contains('two')) {
                for (var _i3 = 0; _i3 < 2; _i3++) {
                    buttons[_i3].classList.add('hidden');
                }
                for (var _i4 = 2; _i4 < buttons.length; _i4++) {
                    buttons[_i4].classList.remove('hidden');
                }
            } else {
                for (var _i5 = 2; _i5 < buttons.length; _i5++) {
                    buttons[_i5].classList.add('hidden');
                }
                for (var _i6 = 0; _i6 < 2; _i6++) {
                    buttons[_i6].classList.remove('hidden');
                }
            }
        } else {
            inputs[counter].value = buttons[_i2].textContent;
            inputs[counter].style.width = buttons[_i2].offsetWidth - 20 + 'px'; //padding 20px (padding: 0 20px)
            inputs[counter].style.minWidth = '70px';

            inputs[counter].classList.remove('input_active');
            for (var _i7 = 0; _i7 < buttons.length; _i7++) {
                buttons[_i7].classList.add('hidden');
                nextExercise.classList.add('next-btn_show');
                inputs[0].style.borderBottomColor = '#8dcddd';
                inputs[1].style.borderBottomColor = '#8dcddd';
            }
        }

        counter++;
    });
};

for (var _i2 = 0; _i2 < buttons.length; _i2++) {
    _loop(_i2);
}

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });