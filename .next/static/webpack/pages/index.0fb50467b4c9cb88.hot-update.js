"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Yo = ()=>{\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        results: []\n    });\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://tutorial.math.lamar.edu/Classes/DE/Vibrations.aspx\");\n    const getStuff = async ()=>{\n        try {\n            console.log(\"hi\");\n            let response = await fetch(\"http://localhost:3000/api/secret_place\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    query: value\n                }),\n                headers: {\n                    Accept: \"application/json, text/plain, */*\",\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            response = await response.json();\n            console.log(response);\n            setResults(response);\n        } catch (errorMessage) {\n            setResults(errorMessage);\n        }\n    };\n    const onChange = (e)=>{\n        setValue(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getStuff();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: onChange,\n                value: value,\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n            }, void 0, false, {\n                fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().urls),\n                children: results.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: results.error\n                }, void 0, false, {\n                    fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 54\n                }, undefined) : results.results.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: c.url,\n                            children: c.url\n                        }, void 0, false, {\n                            fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 110\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 106\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/smog/programfiles/mit/metaphor/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, undefined);\n};\n_s(Yo, \"AKw15TDFE38H6D2eV9KJzUNrUGE=\");\n_c = Yo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Yo);\nvar _c;\n$RefreshReg$(_c, \"Yo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUV2QyxNQUFNRyxLQUFLOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDSSxTQUFTLEVBQUU7SUFBQTtJQUNuRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVEsV0FBVztRQUNiLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSUMsV0FBVyxNQUFNQyxNQUFNLDBDQUEwQztnQkFDakVDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJDLE9BQU9YO2dCQUNYO2dCQUNBWSxTQUFTO29CQUNMQyxRQUFRO29CQUNSLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUNBUixXQUFXLE1BQU1BLFNBQVNTLElBQUk7WUFDOUJYLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWk4sV0FBV007UUFDZixFQUFFLE9BQU9VLGNBQWM7WUFDbkJoQixXQUFXZ0I7UUFDZjtJQUNKO0lBRUEsTUFBTUMsV0FBVyxDQUFDQztRQUNkaEIsU0FBU2dCLEVBQUVDLE1BQU0sQ0FBQ2xCLEtBQUs7SUFDM0I7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTk87SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ2lCO1FBQUlDLFdBQVd4QixrRUFBYzs7MEJBQ2pDLDhEQUFDMEI7Z0JBQU1OLFVBQVVBO2dCQUFVaEIsT0FBT0E7Z0JBQU9vQixXQUFXeEIsZ0VBQVk7Ozs7OzswQkFDaEUsOERBQUMyQjtnQkFBR0gsV0FBV3hCLCtEQUFXOzBCQUFHRSxRQUFRMkIsS0FBSyxpQkFBRyw4REFBQ0M7OEJBQUk1QixRQUFRMkIsS0FBSzs7Ozs7Z0NBQVMzQixRQUFRQSxPQUFPLENBQUM2QixHQUFHLENBQUNDLENBQUFBLGtCQUFLLDhEQUFDRjtrQ0FBRyw0RUFBQ0c7NEJBQUVDLE1BQU1GLEVBQUVHLEdBQUc7c0NBQUdILEVBQUVHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkk7R0FwQ01sQztLQUFBQTtBQXNDTiwrREFBZUEsRUFBRUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFlvID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHtyZXN1bHRzOiBbXX0pXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcImh0dHBzOi8vdHV0b3JpYWwubWF0aC5sYW1hci5lZHUvQ2xhc3Nlcy9ERS9WaWJyYXRpb25zLmFzcHhcIilcbiAgICBjb25zdCBnZXRTdHVmZiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VjcmV0X3BsYWNlXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXNwb25zZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHRzKGVycm9yTWVzc2FnZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0U3R1ZmYoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgIDxvbCBjbGFzc05hbWU9e3N0eWxlcy51cmxzfT57cmVzdWx0cy5lcnJvciA/IDxsaT57cmVzdWx0cy5lcnJvcn08L2xpPiA6IHJlc3VsdHMucmVzdWx0cy5tYXAoYyA9PiA8bGk+PGEgaHJlZj17Yy51cmx9PntjLnVybH08L2E+PC9saT4pfTwvb2w+XG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFlvIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiWW8iLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJnZXRTdHVmZiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJqc29uIiwiZXJyb3JNZXNzYWdlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImlucHV0Iiwib2wiLCJ1cmxzIiwiZXJyb3IiLCJsaSIsIm1hcCIsImMiLCJhIiwiaHJlZiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});