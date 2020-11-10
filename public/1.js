(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../vue-temp/vue-editor-bridge'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "category",
  data: function data() {
    return {
      categoryData: {
        name: "",
        image: ""
      },
      errors: {}
    };
  },
  methods: {
    attachImage: function attachImage() {
      this.categoryData.image = this.$refs.newCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.categoryData.image);
    },
    hideNewCategoryModal: function hideNewCategoryModal() {
      this.$refs.newCategoryModal.hide();
    },
    showNewCategoryModal: function showNewCategoryModal() {
      this.$$refs.newCategoryModal.show();
    },
    createCategory: function () {
      var _createCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.categoryData.name);
                formData.append("image", this.categoryData.image);
                _context.prev = 3;
                _context.next = 6;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_2__["createCategory"](formData);

              case 6:
                response = _context.sent;
                _context.next = 18;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 14 : 16;
                break;

              case 14:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 18);

              case 16:
                alert("some error has occurred");
                return _context.abrupt("break", 18);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function createCategory() {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/home" } }, [_vm._v("Dashboard")])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Categories")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewCategoryModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v(" Create New\n      ")
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newCategoryModal",
          attrs: { "hide-footer": "", title: "Add New Category" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createCategory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.categoryData.name,
                        expression: "categoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter category name"
                    },
                    domProps: { value: _vm.categoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.categoryData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.errors.name[0]) +
                            "\n          "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Choose an image")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newCategoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.errors.name[0]) +
                            "\n          "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewCategoryModal }
                    },
                    [_vm._v("\n            Cancel\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n        Categories Management\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("table", { staticClass: "table" }, [
        _c("thead", [
          _c("tr", [
            _c("td", [_vm._v("#")]),
            _vm._v(" "),
            _c("td", [_vm._v("Name")]),
            _vm._v(" "),
            _c("td", [_vm._v("Image")]),
            _vm._v(" "),
            _c("td", [_vm._v("Action")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("Shirt")]),
            _vm._v(" "),
            _c("td", [_vm._v("Image")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                _c("span", { staticClass: "fa fa-edit" })
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-danger btn-sm" }, [
                _c("span", { staticClass: "fa fa-trash" })
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_http_service__WEBPACK_IMPORTED_MODULE_0__);

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data);
}

/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/lucas/Projetos/shop-web/resources/js/services/http_service.js: 'import' and 'export' may only appear at the top level (10:4)\n\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m    \u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m httpFile(){\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m        \u001b[36mreturn\u001b[39m axios\u001b[33m.\u001b[39mcreate({\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m            baseURL\u001b[33m:\u001b[39m store\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mapiURL\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m            headers\u001b[33m:\u001b[39m {\u001b[0m\n    at Parser._raise (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:790:17)\n    at Parser.raiseWithData (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:783:17)\n    at Parser.raise (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:777:17)\n    at Parser.parseStatementContent (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11732:18)\n    at Parser.parseStatement (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11639:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12221:25)\n    at Parser.parseBlockBody (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12207:10)\n    at Parser.parseBlock (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12191:10)\n    at Parser.parseFunctionBody (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11184:24)\n    at Parser.parseFunctionBodyAndFinish (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11168:10)\n    at /home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12357:12\n    at Parser.withTopicForbiddingContext (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11479:14)\n    at Parser.parseFunction (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12356:10)\n    at Parser.parseFunctionStatement (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11987:17)\n    at Parser.parseStatementContent (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11677:21)\n    at Parser.parseStatement (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11639:17)\n    at Parser.parseExportDeclaration (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12858:17)\n    at Parser.maybeParseExportDeclaration (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12814:31)\n    at Parser.parseExport (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12752:29)\n    at Parser.parseStatementContent (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11745:27)\n    at Parser.parseStatement (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11639:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12221:25)\n    at Parser.parseBlockBody (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:12207:10)\n    at Parser.parseTopLevel (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:11570:10)\n    at Parser.parse (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:13381:10)\n    at parse (/home/lucas/Projetos/shop-web/node_modules/@babel/parser/lib/index.js:13434:38)\n    at parser (/home/lucas/Projetos/shop-web/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/lucas/Projetos/shop-web/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/lucas/Projetos/shop-web/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/lucas/Projetos/shop-web/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/lucas/Projetos/shop-web/node_modules/gensync/index.js:261:32)\n    at /home/lucas/Projetos/shop-web/node_modules/gensync/index.js:273:13");

/***/ }),

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);