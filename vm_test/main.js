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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/menu */ \"./src/js/menu.js\")\n__webpack_require__(/*! ./src/js/info */ \"./src/js/info.js\")\n__webpack_require__(/*! ./src/js/js */ \"./src/js/js.js\")\n__webpack_require__(/*! ./src/js/experience */ \"./src/js/experience.js\")\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./src/js/experience.js":
/*!******************************!*\
  !*** ./src/js/experience.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const labelAll = document.querySelectorAll('.checkbox-content');\nlabelAll.forEach(label => {\n    label.addEventListener('click', ()=> {\n        let id = label.getAttribute('data-id');\n        document.getElementById(id).toggleAttribute('checked')\n    })\n});\n\n//# sourceURL=webpack:///./src/js/experience.js?");

/***/ }),

/***/ "./src/js/info.js":
/*!************************!*\
  !*** ./src/js/info.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// добавление даты рождения в html и поведение открытия списка\n\nconst selectYearOpen = document.querySelector('.info-date-div--open');\n\nlet arrDate= [];\nfor(let i = 2002; i >= 1900; i--) {\n   arrDate.push(i)\n}\n\narrDate.forEach((year)=>{\n    let option = document.createElement('span');\n    option.innerHTML = year;\n    selectYearOpen.append(option);\n});\n\nconst selectYear= document.querySelector('.info-date-div');\nconst selectYearText = selectYear.querySelector('span');\nconst arrow = document.querySelector('.arrow');\nconst dateInput = document.getElementById('date');\nconst year = selectYearOpen.querySelectorAll('span');\nconst firstItemYear = document.getElementById('firstItemYear');\n\n// открытие списка годов\n\nconst toggleMenuYear = () => {\n    selectYearOpen.classList.toggle('year-opened');\n    arrow.classList.toggle('arrow-opened');\n};\n\n// выбор года рождения\n\nconst toggleYearStyle = () => {\n    if(dateInput.value == '') {\n        firstItemYear.style.display = 'none';\n    } else firstItemYear.style.display = 'block';\n    if (selectYearText.textContent.length == 4) {\n        selectYearText.style.color = '#333333'\n    } else selectYearText.style.color = '#c8c8c8'\n};\n\nselectYear.addEventListener('click', () => {\n    toggleMenuYear();\n    toggleYearStyle();\n});\n\nyear.forEach(item => {\n    item.addEventListener(\"click\", ()=>{\n        if (item.textContent.length == 4) {\n            dateInput.value = item.textContent;\n        } else dateInput.value = '';\n        selectYearText.innerText = item.textContent;\n    });\n});\n\n\n// поведение инпутов\n\nconst blockInfo = document.querySelector('.info');\nconst inputArr = blockInfo.querySelectorAll('input');\nconst toggleInputStyle = (item) => {\n    if (item.value) {\n        item.parentNode.querySelector('label').classList.add('input-not-empty')\n    } else item.parentNode.querySelector('label').classList.remove('input-not-empty')\n};\n\ninputArr.forEach(item => {\n    item.addEventListener('change', ()=> {\n        toggleInputStyle(item);\n    })\n});\n\ndocument.addEventListener('click', function(e) {\n    const target = e.target;\n    const its_menu = target == selectYear || selectYear.contains(target);\n    const menu_is_active = selectYearOpen.classList.contains('year-opened');\n\n    if (!its_menu && menu_is_active) {\n        toggleMenuYear();\n    }\n});\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n    inputArr.forEach(item => {\n        toggleInputStyle(item);\n        selectYearText.innerText = dateInput.value;\n        toggleYearStyle();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/js/info.js?");

/***/ }),

/***/ "./src/js/js.js":
/*!**********************!*\
  !*** ./src/js/js.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const bar = document.querySelector('.bar');\nconst width = bar.offsetWidth;\nconst barHidden = document.querySelector('.bar-hidden');\nconst range = document.getElementById('myRange');\n\nconst rangeMask = () => {\n    if(0 <= range.value && range.value <= 12 ) {\n        range.value = 0;\n        barHidden.style.left = `0px`\n    }\n    else if(13 <= range.value && range.value <= 25) {\n        range.value = 25;\n        barHidden.style.left = `${Math.ceil((width/4 * 1))}px`\n    }\n    else if(26 <= range.value && range.value <= 38 ) {\n        range.value = 25;\n        barHidden.style.left = `${Math.ceil((width/4 * 1))}px`\n    }\n    else if(39 <= range.value && range.value <= 50) {\n        range.value = 50;\n        barHidden.style.left = `${Math.ceil((width/4 * 2))}px`\n    }\n    else if(51 <= range.value && range.value <= 75) {\n        range.value = 50;\n        barHidden.style.left = `${Math.ceil((width/4 * 2))}px`\n    }\n    else if(76 <= range.value && range.value <= 100) {\n        range.value = 100;\n        barHidden.style.left = `${Math.ceil(width)}px`\n    }\n\n};\n\nrange.addEventListener('change', ()=> {\n    rangeMask();\n});\n\ndocument.addEventListener('DOMContentLoaded', () =>{\n    rangeMask();\n});\n\n//# sourceURL=webpack:///./src/js/js.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burgerMenuBtn = document.querySelector('.burger-menu');\nconst burgerMenu = document.querySelector('.menu>ul');\n\nburgerMenuBtn.addEventListener('click', () => {\n   burgerMenu.classList.toggle('menuHidden')\n\n});\n\nconst menuLinkAll = document.querySelectorAll('.menu>ul>li>a');\n\nmenuLinkAll.forEach(item => {\n   item.addEventListener('click', ()=>{\n      burgerMenu.classList.remove('menuHidden')\n      document.querySelector('.ham3').classList.remove('active');\n   })\n});\n\n// собираем все якоря; устанавливаем время анимации и количество кадров\nconst anchors = [].slice.call(document.querySelectorAll('a[href*=\"#\"]')),\n    animationTime = 300,\n    framesCount = 20;\n\nanchors.forEach(function(item) {\n   // каждому якорю присваиваем обработчик события\n   item.addEventListener('click', function(e) {\n      // убираем стандартное поведение\n      e.preventDefault();\n\n      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y\n      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;\n\n      // запускаем интервал, в котором\n      let scroller = setInterval(function() {\n         // считаем на сколько скроллить за 1 такт\n         let scrollBy = coordY / framesCount;\n\n         // если к-во пикселей для скролла за 1 такт больше расстояния до элемента\n         // и дно страницы не достигнуто\n         if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {\n            // то скроллим на к-во пикселей, которое соответствует одному такту\n            window.scrollBy(0, scrollBy);\n         } else {\n            // иначе добираемся до элемента и выходим из интервала\n            window.scrollTo(0, coordY);\n            clearInterval(scroller);\n         }\n         // время интервала равняется частному от времени анимации и к-ва кадров\n      }, animationTime / framesCount);\n   });\n});\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ })

/******/ });