"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_InstaEmbed_jsx";
exports.ids = ["src_components_InstaEmbed_jsx"];
exports.modules = {

/***/ "./src/components/InstaEmbed.jsx":
/*!***************************************!*\
  !*** ./src/components/InstaEmbed.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst InstaEmbed = ({ url })=>{\n    const embedContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (window.instgrm) {\n            window.instgrm.Embeds.process();\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const script = document.createElement(\"script\");\n        script.async = true;\n        script.defer = true;\n        script.src = \"https://www.instagram.com/embed.js\";\n        embedContainer.current.appendChild(script);\n    }, [\n        url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: embedContainer,\n        className: \"my-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: \"instagram-media\",\n            \"data-instgrm-permalink\": url,\n            \"data-instgrm-version\": \"14\",\n            style: {\n                background: \"#FFF\",\n                boxShadow: \"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)\",\n                margin: \"1px\",\n                maxWidth: \"540px\",\n                minWidth: \"326px\",\n                padding: \"0\",\n                width: \"99.375%\",\n                width: \"-webkit-calc(100% - 2px)\",\n                width: \"calc(100% - 2px)\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ludwig/shitcoindev/kozue/src/components/InstaEmbed.jsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ludwig/shitcoindev/kozue/src/components/InstaEmbed.jsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstaEmbed);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnN0YUVtYmVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUUsYUFBYSxDQUFDLEVBQUVDLEdBQUcsRUFBRTtJQUMxQixNQUFNQyxpQkFBaUJILDZDQUFNQSxDQUFDO0lBRTlCRCxnREFBU0EsQ0FBQztRQUNULElBQUlLLE9BQU9DLE9BQU8sRUFBRTtZQUNuQkQsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNDLE9BQU87UUFDOUI7SUFDRCxHQUFHLEVBQUU7SUFFTFIsZ0RBQVNBLENBQUM7UUFDVCxNQUFNUyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdENGLE9BQU9HLEtBQUssR0FBRztRQUNmSCxPQUFPSSxLQUFLLEdBQUc7UUFDZkosT0FBT0ssR0FBRyxHQUFHO1FBQ2JWLGVBQWVXLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDUDtJQUNwQyxHQUFHO1FBQUNOO0tBQUk7SUFFUixxQkFDQyw4REFBQ2M7UUFBSUMsS0FBS2Q7UUFBZ0JlLFdBQVU7a0JBQ25DLDRFQUFDQztZQUNBRCxXQUFVO1lBQ1ZFLDBCQUF3QmxCO1lBQ3hCbUIsd0JBQXFCO1lBQ3JCQyxPQUFPO2dCQUNOQyxZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxRQUFRO2dCQUNSQyxVQUFVO2dCQUNWQyxVQUFVO2dCQUNWQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQSxPQUFPO2dCQUNQQSxPQUFPO1lBQ1I7Ozs7Ozs7Ozs7O0FBSUo7QUFFQSxpRUFBZTVCLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3p1ZS8uL3NyYy9jb21wb25lbnRzL0luc3RhRW1iZWQuanN4PzM0YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSW5zdGFFbWJlZCA9ICh7IHVybCB9KSA9PiB7XG5cdGNvbnN0IGVtYmVkQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAod2luZG93Lmluc3Rncm0pIHtcblx0XHRcdHdpbmRvdy5pbnN0Z3JtLkVtYmVkcy5wcm9jZXNzKClcblx0XHR9XG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcblx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlXG5cdFx0c2NyaXB0LmRlZmVyID0gdHJ1ZVxuXHRcdHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbWJlZC5qcydcblx0XHRlbWJlZENvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHNjcmlwdClcblx0fSwgW3VybF0pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHJlZj17ZW1iZWRDb250YWluZXJ9IGNsYXNzTmFtZT1cIm15LTRcIj5cblx0XHRcdDxibG9ja3F1b3RlXG5cdFx0XHRcdGNsYXNzTmFtZT1cImluc3RhZ3JhbS1tZWRpYVwiXG5cdFx0XHRcdGRhdGEtaW5zdGdybS1wZXJtYWxpbms9e3VybH1cblx0XHRcdFx0ZGF0YS1pbnN0Z3JtLXZlcnNpb249XCIxNFwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNGRkYnLFxuXHRcdFx0XHRcdGJveFNoYWRvdzogJzAgMCAxcHggMCByZ2JhKDAsMCwwLDAuNSksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsMC4xNSknLFxuXHRcdFx0XHRcdG1hcmdpbjogJzFweCcsXG5cdFx0XHRcdFx0bWF4V2lkdGg6ICc1NDBweCcsXG5cdFx0XHRcdFx0bWluV2lkdGg6ICczMjZweCcsXG5cdFx0XHRcdFx0cGFkZGluZzogJzAnLFxuXHRcdFx0XHRcdHdpZHRoOiAnOTkuMzc1JScsXG5cdFx0XHRcdFx0d2lkdGg6ICctd2Via2l0LWNhbGMoMTAwJSAtIDJweCknLFxuXHRcdFx0XHRcdHdpZHRoOiAnY2FsYygxMDAlIC0gMnB4KScsXG5cdFx0XHRcdH19XG5cdFx0XHQ+PC9ibG9ja3F1b3RlPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhRW1iZWRcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbnN0YUVtYmVkIiwidXJsIiwiZW1iZWRDb250YWluZXIiLCJ3aW5kb3ciLCJpbnN0Z3JtIiwiRW1iZWRzIiwicHJvY2VzcyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwiZGVmZXIiLCJzcmMiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJibG9ja3F1b3RlIiwiZGF0YS1pbnN0Z3JtLXBlcm1hbGluayIsImRhdGEtaW5zdGdybS12ZXJzaW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwibWFyZ2luIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsInBhZGRpbmciLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/InstaEmbed.jsx\n");

/***/ })

};
;