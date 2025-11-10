"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "models_Product_js";
exports.ids = ["models_Product_js"];
exports.modules = {

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        index: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    description: {\n        type: String\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    mrp: Number,\n    stock: {\n        type: Number,\n        default: 0\n    },\n    images: [\n        String\n    ],\n    categories: [\n        String\n    ],\n    attributes: Object,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Create text index for search\nProductSchema.index({\n    title: \"text\",\n    description: \"text\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDeENHLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxPQUFPO0lBQUs7SUFDbkRDLE1BQU07UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtRQUFNRyxRQUFRO0lBQUs7SUFDbkRDLGFBQWE7UUFBRU4sTUFBTUM7SUFBTztJQUM1Qk0sT0FBTztRQUFFUCxNQUFNUTtRQUFRTixVQUFVO0lBQUs7SUFDdENPLEtBQUtEO0lBQ0xFLE9BQU87UUFBRVYsTUFBTVE7UUFBUUcsU0FBUztJQUFFO0lBQ2xDQyxRQUFRO1FBQUNYO0tBQU87SUFDaEJZLFlBQVk7UUFBQ1o7S0FBTztJQUNwQmEsWUFBWUM7SUFDWkMsV0FBVztRQUFFaEIsTUFBTWlCO1FBQU1OLFNBQVNNLEtBQUtDLEdBQUc7SUFBQztBQUM3QztBQUVBLCtCQUErQjtBQUMvQnJCLGNBQWNNLEtBQUssQ0FBQztJQUFFSixPQUFPO0lBQVFPLGFBQWE7QUFBTztBQUV6RCxpRUFBZVYsd0RBQWUsQ0FBQ3dCLE9BQU8sSUFBSXhCLHFEQUFjLENBQUMsV0FBV0MsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vbW9kZWxzL1Byb2R1Y3QuanM/MDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIGluZGV4OiB0cnVlIH0sXG4gIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG1ycDogTnVtYmVyLFxuICBzdG9jazogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgaW1hZ2VzOiBbU3RyaW5nXSxcbiAgY2F0ZWdvcmllczogW1N0cmluZ10sXG4gIGF0dHJpYnV0ZXM6IE9iamVjdCxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH1cbn0pO1xuXG4vLyBDcmVhdGUgdGV4dCBpbmRleCBmb3Igc2VhcmNoXG5Qcm9kdWN0U2NoZW1hLmluZGV4KHsgdGl0bGU6ICd0ZXh0JywgZGVzY3JpcHRpb246ICd0ZXh0JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBQcm9kdWN0U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImluZGV4Iiwic2x1ZyIsInVuaXF1ZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJtcnAiLCJzdG9jayIsImRlZmF1bHQiLCJpbWFnZXMiLCJjYXRlZ29yaWVzIiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Product.js\n");

/***/ })

};
;