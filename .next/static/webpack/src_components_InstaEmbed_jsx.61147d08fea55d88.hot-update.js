"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_InstaEmbed_jsx",{

/***/ "./src/components/InstaEmbed.jsx":
/*!***************************************!*\
  !*** ./src/components/InstaEmbed.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst InstaEmbed = (param)=>{\n    let { url } = param;\n    _s();\n    const embedContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (window.instgrm) {\n            window.instgrm.Embeds.process();\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const script = document.createElement(\"script\");\n        script.async = true;\n        script.defer = true;\n        script.src = \"https://www.instagram.com/embed.js\";\n        embedContainer.current.appendChild(script);\n    }, [\n        url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: embedContainer,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: \"instagram-media\",\n            \"data-instgrm-permalink\": url,\n            \"data-instgrm-version\": \"14\",\n            style: {\n                background: \"#FFF\",\n                boxShadow: \"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)\",\n                width: \"326px\",\n                width: \"99.375%\",\n                width: \"-webkit-calc(100% - 2px)\",\n                width: \"calc(100% - 2px)\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ludwig/shitcoindev/kozue/src/components/InstaEmbed.jsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ludwig/shitcoindev/kozue/src/components/InstaEmbed.jsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(InstaEmbed, \"e+lMmdlYR9xsq6VEtwMm0s4Tdvw=\");\n_c = InstaEmbed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstaEmbed);\nvar _c;\n$RefreshReg$(_c, \"InstaEmbed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnN0YUVtYmVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxHQUFHLEVBQUU7O0lBQzFCLE1BQU1DLGlCQUFpQkgsNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ1QsSUFBSUssT0FBT0MsT0FBTyxFQUFFO1lBQ25CRCxPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTztRQUM5QjtJQUNELEdBQUcsRUFBRTtJQUVMUixnREFBU0EsQ0FBQztRQUNULE1BQU1TLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csS0FBSyxHQUFHO1FBQ2ZILE9BQU9JLEtBQUssR0FBRztRQUNmSixPQUFPSyxHQUFHLEdBQUc7UUFDYlYsZUFBZVcsT0FBTyxDQUFDQyxXQUFXLENBQUNQO0lBQ3BDLEdBQUc7UUFBQ047S0FBSTtJQUVSLHFCQUNDLDhEQUFDYztRQUFJQyxLQUFLZDtrQkFDVCw0RUFBQ2U7WUFDQUMsV0FBVTtZQUNWQywwQkFBd0JsQjtZQUN4Qm1CLHdCQUFxQjtZQUNyQkMsT0FBTztnQkFDTkMsWUFBWTtnQkFDWkMsV0FBVztnQkFDWEMsT0FBTztnQkFDUEEsT0FBTztnQkFDUEEsT0FBTztnQkFDUEEsT0FBTztZQUNSOzs7Ozs7Ozs7OztBQUlKO0dBbENNeEI7S0FBQUE7QUFvQ04sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5zdGFFbWJlZC5qc3g/MzRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbnN0YUVtYmVkID0gKHsgdXJsIH0pID0+IHtcblx0Y29uc3QgZW1iZWRDb250YWluZXIgPSB1c2VSZWYobnVsbClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cuaW5zdGdybSkge1xuXHRcdFx0d2luZG93Lmluc3Rncm0uRW1iZWRzLnByb2Nlc3MoKVxuXHRcdH1cblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXHRcdHNjcmlwdC5hc3luYyA9IHRydWVcblx0XHRzY3JpcHQuZGVmZXIgPSB0cnVlXG5cdFx0c2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VtYmVkLmpzJ1xuXHRcdGVtYmVkQ29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHR9LCBbdXJsXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgcmVmPXtlbWJlZENvbnRhaW5lcn0+XG5cdFx0XHQ8YmxvY2txdW90ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnN0YWdyYW0tbWVkaWFcIlxuXHRcdFx0XHRkYXRhLWluc3Rncm0tcGVybWFsaW5rPXt1cmx9XG5cdFx0XHRcdGRhdGEtaW5zdGdybS12ZXJzaW9uPVwiMTRcIlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGJyxcblx0XHRcdFx0XHRib3hTaGFkb3c6ICcwIDAgMXB4IDAgcmdiYSgwLDAsMCwwLjUpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTUpJyxcblx0XHRcdFx0XHR3aWR0aDogJzMyNnB4Jyxcblx0XHRcdFx0XHR3aWR0aDogJzk5LjM3NSUnLFxuXHRcdFx0XHRcdHdpZHRoOiAnLXdlYmtpdC1jYWxjKDEwMCUgLSAycHgpJyxcblx0XHRcdFx0XHR3aWR0aDogJ2NhbGMoMTAwJSAtIDJweCknLFxuXHRcdFx0XHR9fVxuXHRcdFx0PjwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YUVtYmVkXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiSW5zdGFFbWJlZCIsInVybCIsImVtYmVkQ29udGFpbmVyIiwid2luZG93IiwiaW5zdGdybSIsIkVtYmVkcyIsInByb2Nlc3MiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImRlZmVyIiwic3JjIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZGl2IiwicmVmIiwiYmxvY2txdW90ZSIsImNsYXNzTmFtZSIsImRhdGEtaW5zdGdybS1wZXJtYWxpbmsiLCJkYXRhLWluc3Rncm0tdmVyc2lvbiIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/InstaEmbed.jsx\n"));

/***/ })

});