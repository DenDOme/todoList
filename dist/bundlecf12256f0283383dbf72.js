/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/classes/project.js":
/*!***********************************!*\
  !*** ./src/js/classes/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/classes/todo.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Project = /*#__PURE__*/function () {
  function Project(title, desc) {
    _classCallCheck(this, Project);
    this.title = title;
    this.desc = desc;
    this.firstColumn = [];
    this.secondColumn = [];
    this.thirdColumn = [];
    this.fourthColumn = [];
  }
  _createClass(Project, [{
    key: "createTodo",
    value: function createTodo(name, desc, dueDate, priority) {
      // let newTodo = new Todo(name,desc,dueDate,priority);
      // this.todoArray.push(newTodo);
    }
  }]);
  return Project;
}();


/***/ }),

/***/ "./src/js/classes/todo.js":
/*!********************************!*\
  !*** ./src/js/classes/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Todo = /*#__PURE__*/_createClass(function Todo(name, desc, dueDate, priority) {
  _classCallCheck(this, Todo);
  this.name = name, this.desc = desc, this.dueDate = dueDate, this.priority = priority;
});


/***/ }),

/***/ "./src/js/pages/catalogPage.js":
/*!*************************************!*\
  !*** ./src/js/pages/catalogPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalogPage = function catalogPage() {
  var neweel = document.createElement('div');
  neweel.textContent = 'aaaaaaaaaaaaaaaaaaaaa';
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/classes/project */ "./src/js/classes/project.js");
/* harmony import */ var _js_pages_catalogPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pages/catalogPage */ "./src/js/pages/catalogPage.js");


var storageKey = 'notes-app';
var storageData = localStorage.getItem(storageKey);
var initialData = storageData ? JSON.parse(storageData) : {
  projectArray: []
};
window.onload = function () {
  if (initialData.projectArray.length == 0) {
    console.log('new');
    var getDisplay = document.getElementById('content');
    initialData.projectArray.push(new _js_classes_project__WEBPACK_IMPORTED_MODULE_0__["default"]('default', 'default'));
    saveData();
    getDisplay.appendChild(_js_pages_catalogPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
  } else {
    // load catalog page
  }
};
function loadProjects() {
  clearDisplay();
  var getDisplay = document.getElementById('bottom__section');
  console.log(initialData);
  for (var i = 0; i < initialData.projectArray.length; i++) {
    var createNewProjectTitle = document.createElement('div');
    var createNewProjectDesc = document.createElement('div');
    var createNewGroup = document.createElement('div');
    createNewProjectTitle.textContent = initialData.projectArray[i].title;
    createNewProjectDesc.textContent = initialData.projectArray[i].desc;
    createNewProjectTitle.classList.add('project-title');
    createNewProjectDesc.classList.add('project-desc');
    createNewGroup.classList.add('project');
    createNewGroup.dataset.projectName = initialData.projectArray[i].title;
    createNewGroup.appendChild(createNewProjectTitle);
    createNewGroup.appendChild(createNewProjectDesc);
    getDisplay.appendChild(createNewGroup);
  }
}
function clearDisplay() {
  var getAllProjects = document.getElementById('bottom__section');
  while (getAllProjects.firstChild) {
    getAllProjects.removeChild(getAllProjects.lastChild);
  }
}
function saveData() {
  var projectArray = initialData.projectArray;
  var data = {
    projectArray: projectArray
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
}
function addProject() {
  var getbutton = document.getElementById('add-button');
  getbutton.addEventListener('click', function () {
    var getTitle = document.getElementById('title').value;
    var getDesc = document.getElementById('desc').value;
    if (getTitle && getDesc) {
      var newProject = new _js_classes_project__WEBPACK_IMPORTED_MODULE_0__["default"](getTitle, getDesc);
      console.log(newProject);
      initialData.projectArray.push(newProject);
      saveData();
    }
    getTitle = null;
    getDesc = null;
    loadProjects();
  });
}

// function initProjectBtn(){
//     const getAllProjects = document.querySelectorAll('.project')
//     getAllProjects.forEach(element => {
//         element.addEventListener('click', () => {
//             // let findEl = projectArray.find(item => item.title == element.dataset.projectName);
//             // findEl.createTodo(element.dataset.projectName)
//             // let findEl = projectArray.findIndex(item => item.title == element.dataset.projectName);
//             // projectArray.splice(findEl,1);
//             // loadProjects()
//         })
//     })
// }
// loadProjects()
addProject();
})();

/******/ })()
;
//# sourceMappingURL=bundlecf12256f0283383dbf72.js.map