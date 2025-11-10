"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "lib_db_js";
exports.ids = ["lib_db_js"];
exports.modules = {

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// lib/db.js\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function connectDB() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose.connect(MONGODB_URI, opts).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\nmodule.exports = connectDB;\nmodule.exports[\"default\"] = connectDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixJQUFJQyxTQUFTQyxPQUFPSCxRQUFRO0FBQzVCLElBQUksQ0FBQ0UsUUFBUUEsU0FBU0MsT0FBT0gsUUFBUSxHQUFHO0lBQUVJLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRXBFLGVBQWVDO0lBQ2IsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0lBQzNDLElBQUksQ0FBQ0EsYUFBYSxNQUFNLElBQUlHLE1BQU07SUFDbEMsSUFBSVIsT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFDbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTU0sT0FBTztZQUFFQyxnQkFBZ0I7UUFBTTtRQUNyQ1YsT0FBT0csT0FBTyxHQUFHTCxTQUFTYSxPQUFPLENBQUNOLGFBQWFJLE1BQU1HLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0E7SUFDakU7SUFDQWIsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBWSxPQUFPQyxPQUFPLEdBQUdYO0FBQ2pCVSx5QkFBc0IsR0FBR1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9kYi5qc1xuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuaWYgKCFjYWNoZWQpIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XG4gIGNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4gIGlmICghTU9OR09EQl9VUkkpIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0geyBidWZmZXJDb21tYW5kczogZmFsc2UgfTtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4obSA9PiBtKTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdERCO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJtIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ })

};
;