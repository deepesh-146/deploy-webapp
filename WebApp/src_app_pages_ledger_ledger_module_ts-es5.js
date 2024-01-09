(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_ledger_ledger_module_ts"], {
    /***/
    96336:
    /*!****************************************************************!*\
      !*** ./src/app/core/services/default-page-resolver.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultPageResolverService": function DefaultPageResolverService() {
          return (
            /* binding */
            _DefaultPageResolverService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      34361);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ledger_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ledger-service.service */
      75301);

      var _DefaultPageResolverService = /*#__PURE__*/function () {
        function _DefaultPageResolverService(ledgerService) {
          _classCallCheck(this, _DefaultPageResolverService);

          this.ledgerService = ledgerService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_DefaultPageResolverService, [{
          key: "resolve",
          value: function resolve() {
            // Call your API to get the masterLedgerTrueFalse value
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.ledgerService.masterLedgerTrueFalse({}, currentUser.id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              var masterLedgerTrueFalse = res.data.result; // Assuming 'result' contains the boolean value

              return masterLedgerTrueFalse ? 'master-ledger' : 'create-ledger';
            }));
          }
        }]);

        return _DefaultPageResolverService;
      }();

      _DefaultPageResolverService.ɵfac = function DefaultPageResolverService_Factory(t) {
        return new (t || _DefaultPageResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__.LedgerServiceService));
      };

      _DefaultPageResolverService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _DefaultPageResolverService,
        factory: _DefaultPageResolverService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89252:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/ledger/create-ledger/create-ledger.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateLedgerComponent": function CreateLedgerComponent() {
          return (
            /* binding */
            _CreateLedgerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _preview_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../preview/preview.component */
      72449);
      /* harmony import */


      var _my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../my-ledger/add-ledger/add-ledger.component */
      96764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function CreateLedgerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function CreateLedgerComponent_li_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          category: a0
        };
      };

      function CreateLedgerComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateLedgerComponent_li_9_ng_container_1_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rootCategory_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, rootCategory_r5.entry));
        }
      }

      function CreateLedgerComponent_ng_template_10_li_5_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
        }
      }

      function CreateLedgerComponent_ng_template_10_li_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateLedgerComponent_ng_template_10_li_5_div_1_ng_container_1_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, childCategory_r9));
        }
      }

      function CreateLedgerComponent_ng_template_10_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateLedgerComponent_ng_template_10_li_5_div_1_Template, 2, 4, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childCategory_r9.children.length > 0);
        }
      }

      function CreateLedgerComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateLedgerComponent_ng_template_10_Template_input_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var category_r7 = restoredCtx.category;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.toggleNode(category_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateLedgerComponent_ng_template_10_li_5_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r7 = ctx.category;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", category_r7.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", category_r7.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r7.glName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", category_r7.children);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      function CreateLedgerComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateLedgerComponent_tr_30_Template_input_ngModelChange_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var child_r15 = restoredCtx.$implicit;
            return child_r15.selected = $event;
          })("change", function CreateLedgerComponent_tr_30_Template_input_change_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var child_r15 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.handleCheckboxChange(child_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, i_r16 % 2 === 0 ? "#ffffff" : "#f2f2f2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", child_r15.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", child_r15.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](child_r15.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](child_r15.glName);
        }
      }

      var _CreateLedgerComponent = /*#__PURE__*/function () {
        function _CreateLedgerComponent(dialog, ledgerService, toastService, titleCasePipe) {
          _classCallCheck(this, _CreateLedgerComponent);

          this.dialog = dialog;
          this.ledgerService = ledgerService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.isLoading = false;
          this.searchTerm = '';
          this.ledgerList = [];
          this.selectedItems = []; // Array to store selected items

          this.selectAllChecked = false; // Initialize with false

          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.categories = [];
          this.sideTreeData = [];
        }

        _createClass(_CreateLedgerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getAllGlnames().then(function () {
              // console.log(this.sideTreeData)
              _this.ledgerService.setLedgerData(_this.sideTreeData);
            });
          } // recursive function to get all the childrens and their childrens dynamically

        }, {
          key: "filterEntriesWithChildren",
          value: function filterEntriesWithChildren(entries) {
            var _this2 = this;

            return entries.map(function (entry) {
              _this2.categories.push(entry); // adding all the entries one by one into the category array


              var children = entry.children.length > 0 ? _this2.filterEntriesWithChildren(entry.children) : []; //calling the same function n times and passing their children as a argument

              return Object.assign(Object.assign({
                entry: entry
              }, entry.children), {
                children: children
              }); // getting the parent entry and children of that entry and grand children as well
            });
          }
        }, {
          key: "allCategories",
          value: function allCategories() {
            this.sideTreeData = this.categories;
          } // get all the ledger entries structures from backend

        }, {
          key: "getAllGlnames",
          value: function getAllGlnames() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var res, rawData, categories;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.prev = 1;
                      _context.next = 4;
                      return this.ledgerService.getAllGlnames({}, this.currentUser.id);

                    case 4:
                      res = _context.sent;

                      if (res.success) {
                        rawData = res.data;
                        console.log(rawData); // this.filterChildrenWithEmptyGrandchildren(rawData)

                        this.sideTreeData = this.categories; // Filter out entries with no children recursively

                        categories = this.filterEntriesWithChildren(rawData);
                        console.log(categories);
                        this.sideTree = categories; // const categories = this.filterEntriesWithChildren(rawData);
                        // this.sideTreeData = categories;
                        // let flattenedData = this.flattenCategory(categories);
                        // console.log(flattenedData);
                        // this.sideTreeData = flattenedData;
                        // this.sideTree = this.extractChildren(rawData);
                        // rawData.forEach((entry) => {
                        //   console.log(entry)
                        //   this.sideTree.push(...this.extractChildren(entry));
                        // });
                        // console.log(this.sideTree)
                      }

                      _context.next = 11;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](1);
                      // if (err.error.status == 404) {
                      //   this.toastService.openErrorSnackBar(err.error.message);
                      // } else {
                      this.toastService.toastMsg({
                        title: "Error",
                        content: _context.t0
                      }); // this.toastService.openErrorSnackBar(err);
                      // }

                    case 11:
                      _context.prev = 11;
                      this.isLoading = false;
                      return _context.finish(11);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 8, 11, 14]]);
            }));
          } /// Recursive function to flatten the hierarchical structure

        }, {
          key: "flattenCategory",
          value: function flattenCategory(category) {
            var result = []; // Add the current category

            result.push(category); // Recursively add children

            if (category.children && category.children.length > 0) {
              var _iterator = _createForOfIteratorHelper(category.children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;
                  var childData = this.flattenCategory(child);
                  result.push.apply(result, _toConsumableArray(childData));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return result;
          }
        }, {
          key: "toggleNode",
          value: function toggleNode(category) {
            var _this3 = this;

            this.isLoading = true;
            setTimeout(function () {
              var existingCategory = _this3.categories.find(function (c) {
                return c.glNumber === category.glNumber;
              }); // if (existingCategory) {
              //   const filteredData = this.filterChildrenWithEmptyGrandchildren(existingCategory.children);
              //   this.sideTreeData = filteredData;
              // } else {
              //   this.sideTreeData = this.categories;
              // }


              if (existingCategory) {
                var flattenedData = _this3.flattenCategory(existingCategory);

                console.log(flattenedData);
                _this3.sideTreeData = flattenedData;
              } else {
                _this3.sideTreeData = _this3.categories;
              } // Update selectedItems and selectAllChecked based on existing selections


              _this3.updateSelectedItemsAndSelectAll();

              _this3.isLoading = false;
            }, 1000);
          }
        }, {
          key: "filterChildrenWithEmptyGrandchildren",
          value: function filterChildrenWithEmptyGrandchildren(children) {
            var _this4 = this;

            var filteredChildren = children.filter(function (child) {
              return child.children.length === 0 || _this4.hasEmptyGrandchildren(child.children);
            });
            var nextLevelChildren = [];

            var _iterator2 = _createForOfIteratorHelper(filteredChildren),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var child = _step2.value;
                nextLevelChildren.push.apply(nextLevelChildren, _toConsumableArray(child.children));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (nextLevelChildren.length > 0) {
              return this.filterChildrenWithEmptyGrandchildren(nextLevelChildren);
            }

            return filteredChildren;
          }
        }, {
          key: "hasEmptyGrandchildren",
          value: function hasEmptyGrandchildren(children) {
            return children.some(function (grandchild) {
              return grandchild.children.length === 0;
            });
          } // Add this function to update selectedItems and selectAllChecked

        }, {
          key: "updateSelectedItemsAndSelectAll",
          value: function updateSelectedItemsAndSelectAll() {
            var allSelected = this.sideTreeData.every(function (item) {
              return item.selected;
            });
            var someSelected = this.sideTreeData.some(function (item) {
              return item.selected;
            });

            if (allSelected) {
              this.selectAllChecked = true;
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else if (someSelected) {
              this.selectAllChecked = false;
              this.selectedItems = this.sideTreeData.filter(function (item) {
                return item.selected;
              });
            } else {
              this.selectAllChecked = false;
              this.selectedItems = [];
            }
          }
        }, {
          key: "displayCategory",
          value: function displayCategory(category) {
            if (category.children.length === 0) {
              console.log(category.glNumber, category.glName); // Display only if no children
            } else {
              console.log(category.glNumber, category.glName); // Display parent

              var _iterator3 = _createForOfIteratorHelper(category.children),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var child = _step3.value;
                  this.displayCategory(child); // Recursively display children
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }, {
          key: "handleCheckboxChange",
          value: function handleCheckboxChange(item) {
            if (item.selected) {
              this.selectedItems.push(item);
            } else {
              var index = this.selectedItems.indexOf(item);

              if (index !== -1) {
                this.selectedItems.splice(index, 1);
              }
            }

            this.updateSelectAllCheckedState(); // Call updateSelectedItemsAndSelectAll to sync with selectAllChecked

            this.updateSelectedItemsAndSelectAll();
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            // this.selectAllChecked = !this.selectAllChecked;
            var _iterator4 = _createForOfIteratorHelper(this.sideTreeData),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                item.selected = this.selectAllChecked;
              } // Update the selected items list as well

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (this.selectAllChecked) {
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else {
              this.selectedItems = [];
            }
          }
        }, {
          key: "updateSelectAllCheckedState",
          value: function updateSelectAllCheckedState() {
            this.selectAllChecked = this.sideTreeData.length > 0 && this.sideTreeData.every(function (item) {
              return item.selected;
            });
          }
        }, {
          key: "openPreviewDialog",
          value: function openPreviewDialog() {
            if (this.selectedItems && this.selectedItems.length > 0) {
              var dialogRef = this.dialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_0__.PreviewComponent, {
                width: '800px',
                height: '100vh',
                data: {
                  selectedItems: this.selectedItems,
                  allGlData: this.categories
                },
                panelClass: 'custom-dialog-class',
                disableClose: true,
                position: {
                  right: '0'
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: ".concat(result));
              });
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "There Is Not Selected Any Ledger. Please Select A Ledger."
              }); // this.toastService.openErrorSnackBar("There is not selected any ledger. Please select a ledger.")
            }
          }
        }, {
          key: "openAddLedgerModal",
          value: function openAddLedgerModal(glNumber, glName) {
            var dialogRef = this.dialog.open(_my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_1__.AddLedgerComponent, {
              width: '400px',
              data: {
                glNumber: glNumber,
                glName: glName
              } // Pass data to the modal

            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {// Process the newLedger data, update your sideTreeData, etc.
              }
            });
          }
        }, {
          key: "openCreateLedgerModal",
          value: function openCreateLedgerModal() {
            var createLedger = true;
            var dialogRef = this.dialog.open(_my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_1__.AddLedgerComponent, {
              width: '400px',
              data: {
                createLedger: createLedger
              } // Pass data to the modal

            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {// Process the newLedger data, update your sideTreeData, etc.
              }
            });
          }
        }, {
          key: "filterData",
          value: function filterData() {
            var searchTerm = this.searchTerm.toLowerCase().trim();

            if (searchTerm === '') {
              // If the search term is empty, show all data
              this.sideTreeData = this.categories;
            } else {
              // Filter data based on the search term
              this.sideTreeData = this.categories.filter(function (item) {
                // Modify the condition as needed for your search criteria
                return item.glNumber.toLowerCase().includes(searchTerm) || item.glName.toLowerCase().includes(searchTerm);
              });
            }
          }
        }]);

        return _CreateLedgerComponent;
      }();

      _CreateLedgerComponent.ɵfac = function CreateLedgerComponent_Factory(t) {
        return new (t || _CreateLedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_2__.LedgerServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe));
      };

      _CreateLedgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CreateLedgerComponent,
        selectors: [["app-create-ledger"]],
        decls: 31,
        vars: 5,
        consts: [["class", "loader-container", 4, "ngIf"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-2", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "ps-0", 2, "margin-top", "4.25%", "border-top", "1px solid #ccc"], [1, "tree"], ["type", "checkbox", "id", "c1", 3, "click"], ["for", "c1", 1, "tree_label"], [4, "ngFor", "ngForOf"], ["displayCategoryTemplate", ""], [1, "col-xxl-10", "col-xl-10", "col-lg-9", "col-md-8", "col-sm-6", "ps-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Search By", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "px-3", 3, "click"], [2, "border-left", "2px solid #ccc", "overflow-x", "auto"], [1, "table", "table-responsive", "mb-0"], [1, "text-600"], [1, "text-nowrap", "col-1", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", "mt-2", 3, "ngModel", "ngModelChange", "change"], [1, "text-nowrap", 2, "vertical-align", "middle"], ["class", "btn-reveal-trigger text-left", "style", "color: #676398!important;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "checkbox", 3, "id", "click"], [1, "tree_label", 3, "for"], [4, "ngIf"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important", 3, "ngStyle"], ["scope", "row", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "id", "ngModelChange", "change"], [2, "vertical-align", "middle"], ["for", "child.glNumber", 2, "vertical-align", "middle"]],
        template: function CreateLedgerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CreateLedgerComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateLedgerComponent_Template_input_click_5_listener() {
              return ctx.allCategories();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateLedgerComponent_li_9_Template, 2, 4, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CreateLedgerComponent_ng_template_10_Template, 6, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateLedgerComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.searchTerm = $event;
            })("ngModelChange", function CreateLedgerComponent_Template_input_ngModelChange_15_listener() {
              return ctx.filterData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateLedgerComponent_Template_button_click_17_listener() {
              return ctx.openPreviewDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Preview ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "thead", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateLedgerComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.selectAllChecked = $event;
            })("change", function CreateLedgerComponent_Template_input_change_24_listener() {
              return ctx.toggleSelectAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CreateLedgerComponent_tr_30_Template, 7, 7, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sideTree);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectAllChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sideTreeData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle],
        styles: ["@charset \"UTF-8\";\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n.tree[_ngcontent-%COMP%] {\n  margin: 1em;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    ~ ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  position: relative;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.tree_label[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #fff;\n  list-style: none;\n  \n  font-size: 14px;\n  color: #000;\n  margin-bottom: 0px;\n}\nlabel.tree_label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nlabel.tree_label[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\nlabel.tree_label[_ngcontent-%COMP%]:before {\n  background: #000;\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  float: left;\n  margin: 0 1em 0 -2em;\n  width: 1em;\n  height: 1em;\n  border-radius: 4em;\n  content: \"+\";\n  text-align: center;\n  line-height: 0.9em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:before {\n  content: \"\u2013\";\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: -1.2rem;\n  bottom: 0;\n  left: -1.5em;\n  display: block;\n  width: 0;\n  border-left: 1px solid #777;\n  content: \"\";\n}\n.tree_label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: -1.5em;\n  display: block;\n  height: 0.5em;\n  width: 1em;\n  border-bottom: 1px solid #777;\n  border-left: 1px solid #777;\n  border-radius: 0 0 0 0.3em;\n  content: \"\";\n}\nlabel.tree_label[_ngcontent-%COMP%]:after {\n  border-bottom: 0 !important;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:after {\n  border-radius: 0 0.3em 0 0;\n  border-top: 1px solid #777;\n  border-right: 1px solid #777;\n  border-bottom: 0;\n  border-left: 0;\n  bottom: 0;\n  top: 0.5em;\n  height: auto;\n  margin-left: 1px;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  height: 1em;\n  bottom: auto;\n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child:before {\n  display: none;\n}\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 120px;\n}\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sZWRnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFHNUM7QUFDQTs7Q0FBQTtBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHVDQUFBO0FBR3BCO0FBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBR0Y7QUFBQTtFQUFtQixhQUFBO0FBSW5CO0FBRkE7RUFBMkIsY0FBQTtFQUN6QixlQUFBO0FBTUY7QUFKQTs7Q0FBQTtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQWtCLHVDQUFBO0FBT3BCO0FBRkE7RUFBd0IsaUJBQUE7QUFNeEI7QUFKQTs7Q0FBQTtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsdUNBQUE7RUFDbEIsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVFGO0FBTEE7RUFBbUIsZUFBQTtBQVNuQjtBQVBBO0VBQXlCLFdBQUE7QUFXekI7QUFUQTs7Q0FBQTtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVRBO0VBQXFDLFlBQUE7QUFhckM7QUFYQTs7Q0FBQTtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWNGO0FBWEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQWNGO0FBWEE7RUFBeUIsMkJBQUE7QUFlekI7QUFiQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZ0JGO0FBYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjtBQWJBO0VBQStCLGFBQUE7QUFpQi9CO0FBWkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWVGO0FBWkE7RUFFRSxVQUFBO0FBY0Y7QUFaQTtFQUNFLGlCQUFBO0FBZUY7QUFaQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBZUY7QUFYQTtFQUNFO0lBQ0UsdUJBQUE7RUFjRjtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1sZWRnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZm9ybS1jb250cm9sIHtcbiAgY29sb3I6ICM1NTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMCAwIDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA3cHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7XG4gIC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXG59XG5cbi8qIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAk1xuICBUcmVlIGNvcmUgc3R5bGVzXG4qL1xuLnRyZWUge1xuICBtYXJnaW46IDFlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxpc3Qtc3R5bGUgZG90cyAqL1xufVxuXG4udHJlZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbn1cblxuLnRyZWUgaW5wdXQgfiB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlIGlucHV0OmNoZWNrZWQgfiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi8qIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAk1xuICBUcmVlIHJvd3NcbiovXG4udHJlZSBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxpc3Qtc3R5bGUgZG90cyAqL1xufVxuXG4udHJlZSA+IGxpOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG4gIFRyZWUgbGFiZWxzXG4qL1xuLnRyZWVfbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxpc3Qtc3R5bGUgZG90cyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmxhYmVsLnRyZWVfbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLnRyZWVfbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG4gIFRyZWUgZXhwYW5kZWQgaWNvblxuKi9cbmxhYmVsLnRyZWVfbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxZW0gMCAtMmVtO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xuICBjb250ZW50OiBcIitcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMC45ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG46Y2hlY2tlZCB+IGxhYmVsLnRyZWVfbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLigJNcIjtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG4gIFRyZWUgYnJhbmNoZXNcbiovXG4udHJlZSBsaTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEuMnJlbTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtMS41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzc3O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4udHJlZV9sYWJlbDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMS41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwLjNlbTtcbiAgY29udGVudDogXCJcIjtcbn1cblxubGFiZWwudHJlZV9sYWJlbDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuOmNoZWNrZWQgfiBsYWJlbC50cmVlX2xhYmVsOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjNlbSAwIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDAuNWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi50cmVlIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvdHRvbTogYXV0bztcbn1cblxuLnRyZWUgPiBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYXJjaEJhciB7XG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xufVxuXG4uZm9ybUJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWJhc2lzOiAxMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlckJ1dHRvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    13435:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/ledger/customize-ledger/customize-ledger.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomizeLedgerComponent": function CustomizeLedgerComponent() {
          return (
            /* binding */
            _CustomizeLedgerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../my-ledger/add-ledger/add-ledger.component */
      96764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _c0 = ["myButtonCustomize"];

      function CustomizeLedgerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CustomizeLedgerComponent_li_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          category: a0
        };
      };

      function CustomizeLedgerComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomizeLedgerComponent_li_10_ng_container_1_Template, 1, 0, "ng-container", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rootCategory_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, rootCategory_r6.entry));
        }
      }

      function CustomizeLedgerComponent_ng_template_11_li_5_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function CustomizeLedgerComponent_ng_template_11_li_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomizeLedgerComponent_ng_template_11_li_5_div_1_ng_container_1_Template, 1, 0, "ng-container", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, childCategory_r10));
        }
      }

      function CustomizeLedgerComponent_ng_template_11_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomizeLedgerComponent_ng_template_11_li_5_div_1_Template, 2, 4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childCategory_r10.children.length > 0);
        }
      }

      function CustomizeLedgerComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomizeLedgerComponent_ng_template_11_Template_input_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);

            var category_r8 = restoredCtx.category;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.toggleNode(category_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CustomizeLedgerComponent_ng_template_11_li_5_Template, 2, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r8 = ctx.category;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", category_r8.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", category_r8.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r8.glName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r8.children);
        }
      }

      function CustomizeLedgerComponent_tr_34_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CustomizeLedgerComponent_tr_34_td_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            return child_r16.selected = $event;
          })("change", function CustomizeLedgerComponent_tr_34_td_1_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r25.handleCheckboxChange(child_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", child_r16.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", child_r16.selected)("checked", child_r16.gl_flag)("disabled", child_r16.gl_flag);
        }
      }

      function CustomizeLedgerComponent_tr_34_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](child_r16.glNumber);
        }
      }

      function CustomizeLedgerComponent_tr_34_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](child_r16.glName);
        }
      }

      function CustomizeLedgerComponent_tr_34_td_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomizeLedgerComponent_tr_34_td_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var child_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r30.openAddLedgerModal(child_r16.glNumber, child_r16.glName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "background-color": a0
        };
      };

      function CustomizeLedgerComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomizeLedgerComponent_tr_34_td_1_Template, 2, 4, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomizeLedgerComponent_tr_34_td_2_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CustomizeLedgerComponent_tr_34_td_3_Template, 2, 1, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CustomizeLedgerComponent_tr_34_td_4_Template, 3, 0, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r16 = ctx.$implicit;
          var i_r17 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, i_r17 % 2 === 0 ? "#ffffff" : "#f2f2f2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", child_r16.children.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", child_r16.children.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", child_r16.children.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", child_r16.children.length === 0);
        }
      }

      var _CustomizeLedgerComponent = /*#__PURE__*/function () {
        function _CustomizeLedgerComponent(dialog, router, cdr, ledgerService, toastService, titleCasePipe, ngZone, renderer) {
          _classCallCheck(this, _CustomizeLedgerComponent);

          this.dialog = dialog;
          this.router = router;
          this.cdr = cdr;
          this.ledgerService = ledgerService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.ngZone = ngZone;
          this.renderer = renderer;
          this.searchTerm = '';
          this.isLoading = false;
          this.isDisabled = false;
          this.ledgerList = [];
          this.selectedItems = []; // Array to store selected items

          this.selectAllChecked = false; // Initialize with false

          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.categories = [];
          this.sideTreeData = [];
          this.masterLedger = [];
          this.preSelectedEntries = []; // Initialize with the entries you want to pre-select
        }

        _createClass(_CustomizeLedgerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllGlnames();
          } // recursive function to get all the childrens and their childrens dynamically

        }, {
          key: "filterEntriesWithChildren",
          value: function filterEntriesWithChildren(entries) {
            var _this5 = this;

            return entries.map(function (entry) {
              _this5.categories.push(entry); // adding all the entries one by one into the category array


              var children = entry.children.length > 0 ? _this5.filterEntriesWithChildren(entry.children) : []; //calling the same function n times and passing their children as a argument

              return Object.assign(Object.assign({
                entry: entry
              }, entry.children), {
                children: children
              }); // getting the parent entry and children of that entry and grand children as well
            });
          }
        }, {
          key: "allCategories",
          value: function allCategories() {
            console.log('allCategories');
            this.sideTreeData = this.categories;
            this.sideTreeData.forEach(function (item) {
              if (item.gl_flag === true) {
                item.selected = true;
              }
            });
          } // get all the ledger entries structures from backend

        }, {
          key: "getAllGlnames",
          value: function getAllGlnames() {
            var _this6 = this;

            try {
              this.isLoading = true;
              this.ledgerService.getAllGlnames({}, this.currentUser.id).then(function (res) {
                if (res.success) {
                  var rawData = res.data; // Pre-select entries with gl_flag === true

                  rawData.forEach(function (entry) {
                    if (entry.gl_flag) {
                      entry.selected = true;
                    }
                  });

                  var categories = _this6.filterEntriesWithChildren(rawData);

                  _this6.sideTree = categories;
                  console.log(_this6.sideTree);
                  _this6.isLoading = false;

                  _this6.cdr.markForCheck();

                  _this6.renderer.selectRootElement(_this6.myButton.nativeElement).click();
                }
              })["catch"](function (err) {
                _this6.ngZone.run(function () {
                  _this6.isLoading = false;

                  _this6.cdr.markForCheck();

                  _this6.toastService.toastMsg({
                    title: "Error",
                    content: "An Error Occurred"
                  }); // this.toastService.openErrorSnackBar("An error occurred");

                });
              })["finally"](function () {
                _this6.isLoading = false;

                _this6.cdr.markForCheck();
              });
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          } /// Recursive function to flatten the hierarchical structure

        }, {
          key: "flattenCategory",
          value: function flattenCategory(category) {
            var result = []; // Add the current category

            result.push(category); // Recursively add children

            if (category.children && category.children.length > 0) {
              var _iterator5 = _createForOfIteratorHelper(category.children),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var child = _step5.value;
                  var childData = this.flattenCategory(child);
                  result.push.apply(result, _toConsumableArray(childData));
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            return result;
          }
        }, {
          key: "toggleNode",
          value: function toggleNode(category) {
            this.isLoading = true; // console.log(category)

            var existingCategory = this.categories.find(function (c) {
              return c.glNumber === category.glNumber;
            });

            if (existingCategory) {
              var flattenedData = this.flattenCategory(existingCategory);
              console.log(flattenedData);
              this.sideTreeData = flattenedData;
            } else {
              this.sideTreeData = this.categories;
            }

            this.sideTreeData.forEach(function (item) {
              if (item.gl_flag === true) {
                item.selected = true;
              }
            }); // Update selectedItems and selectAllChecked based on existing selections

            this.updateSelectedItemsAndSelectAll();
            this.isLoading = false;
            this.cdr.markForCheck();
          } // filterChildrenWithEmptyGrandchildren(children): any[] {
          //   const filteredChildren = children.filter(child => {
          //     return child.children.length === 0 || this.hasEmptyGrandchildren(child.children);
          //   });
          //   const nextLevelChildren = [];
          //   for (const child of filteredChildren) {
          //     nextLevelChildren.push(...child.children);
          //   }
          //   if (nextLevelChildren.length > 0) {
          //     return this.filterChildrenWithEmptyGrandchildren(nextLevelChildren);
          //   }
          //   return filteredChildren;
          // }

        }, {
          key: "hasEmptyGrandchildren",
          value: function hasEmptyGrandchildren(children) {
            return children.some(function (grandchild) {
              return grandchild.children.length === 0;
            });
          } // Add this function to update selectedItems and selectAllChecked

        }, {
          key: "updateSelectedItemsAndSelectAll",
          value: function updateSelectedItemsAndSelectAll() {
            var allSelected = this.sideTreeData.every(function (item) {
              return item.selected;
            });
            var someSelected = this.sideTreeData.some(function (item) {
              return item.selected;
            });

            if (allSelected) {
              this.selectAllChecked = true;
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else if (someSelected) {
              this.selectAllChecked = false;
              this.selectedItems = this.sideTreeData.filter(function (item) {
                return item.selected;
              });
            } else {
              this.selectAllChecked = false;
              this.selectedItems = [];
            }
          }
        }, {
          key: "displayCategory",
          value: function displayCategory(category) {
            if (category.children.length === 0) {
              console.log(category.glNumber, category.glName); // Display only if no children
            } else {
              console.log(category.glNumber, category.glName); // Display parent

              var _iterator6 = _createForOfIteratorHelper(category.children),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var child = _step6.value;
                  this.displayCategory(child); // Recursively display children
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        }, {
          key: "handleCheckboxChange",
          value: function handleCheckboxChange(item) {
            if (item.selected) {
              this.selectedItems.push(item);
            } else {
              var index = this.selectedItems.indexOf(item);

              if (index !== -1) {
                this.selectedItems.splice(index, 1);
              }
            }

            this.updateSelectAllCheckedState(); // Call updateSelectedItemsAndSelectAll to sync with selectAllChecked

            this.updateSelectedItemsAndSelectAll();
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            // this.selectAllChecked = !this.selectAllChecked;
            var _iterator7 = _createForOfIteratorHelper(this.sideTreeData),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var item = _step7.value;
                item.selected = this.selectAllChecked;
              } // Update the selected items list as well

            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            if (this.selectAllChecked) {
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else {
              this.selectedItems = [];
            }
          }
        }, {
          key: "updateSelectAllCheckedState",
          value: function updateSelectAllCheckedState() {
            this.selectAllChecked = this.sideTreeData.length > 0 && this.sideTreeData.every(function (item) {
              return item.selected;
            });
          }
        }, {
          key: "openAddLedgerModal",
          value: function openAddLedgerModal(glNumber, glName) {
            var dialogRef = this.dialog.open(_my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_0__.AddLedgerComponent, {
              width: '400px',
              data: {
                glNumber: glNumber,
                glName: glName
              } // Pass data to the modal

            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {// Process the newLedger data, update your sideTreeData, etc.
              }
            });
          }
        }, {
          key: "openCreateLedgerModal",
          value: function openCreateLedgerModal() {
            var createLedger = true;
            var dialogRef = this.dialog.open(_my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_0__.AddLedgerComponent, {
              width: '400px',
              data: {
                createLedger: createLedger
              } // Pass data to the modal

            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {// Process the newLedger data, update your sideTreeData, etc.
              }
            });
          }
        }, {
          key: "filterData",
          value: function filterData() {
            var searchTerm = this.searchTerm.toLowerCase().trim();

            if (searchTerm === '') {
              // If the search term is empty, show all data
              this.sideTreeData = this.categories;
            } else {
              // Filter data based on the search term
              this.sideTreeData = this.categories.filter(function (item) {
                // Modify the condition as needed for your search criteria
                return item.glNumber.toLowerCase().includes(searchTerm) || item.glName.toLowerCase().includes(searchTerm);
              });
            }
          }
        }]);

        return _CustomizeLedgerComponent;
      }();

      _CustomizeLedgerComponent.ɵfac = function CustomizeLedgerComponent_Factory(t) {
        return new (t || _CustomizeLedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_1__.LedgerServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
      };

      _CustomizeLedgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _CustomizeLedgerComponent,
        selectors: [["app-customize-ledger"]],
        viewQuery: function CustomizeLedgerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myButton = _t.first);
          }
        },
        decls: 35,
        vars: 5,
        consts: [["class", "loader-container", 4, "ngIf"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-2", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "ps-0", 2, "margin-top", "4.25%", "border-top", "1px solid #ccc"], [1, "tree"], ["type", "checkbox", "id", "c1", 3, "click"], ["myButtonCustomize", ""], ["for", "c1", 1, "tree_label"], [4, "ngFor", "ngForOf"], ["displayCategoryTemplate", ""], [1, "col-xxl-10", "col-xl-10", "col-lg-9", "col-md-8", "col-sm-6", "ps-0"], [1, "row", "d-flex", "flex-center", "mb-3"], [1, "col-md-1", "col-lg-5", "col-xl-6"], [1, "col-sm-4", "col-md-3", "col-lg-3", "col-xl-3", "mt-2"], ["type", "search", "id", "searchInput", "placeholder", "Search By", 1, "form-control", "pe-5", 3, "ngModel", "ngModelChange"], [1, "navOption-btns", "col-sm-8", "col-md-8", "col-lg-4", "col-xl-3", "mt-2", 2, "display", "flex", "justify-content", "space-around !important", "align-items", "center"], ["type", "button", 1, "btn", "text-nowrap", 3, "click"], [1, "fas", "fa-plus", "me-2"], [2, "border-left", "2px solid #ccc", "overflow-x", "auto"], [1, "table", "table-responsive", "mb-0"], [1, "text-600"], [1, "text-nowrap", "col-1", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", "mt-2", 3, "ngModel", "ngModelChange", "change"], [1, "text-nowrap", 2, "vertical-align", "middle"], ["class", "btn-reveal-trigger text-left", "style", "color: #676398!important;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "checkbox", 3, "id", "click"], [1, "tree_label", 3, "for"], [4, "ngIf"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important", 3, "ngStyle"], ["scope", "row", "style", "vertical-align: middle;", 4, "ngIf"], ["style", "vertical-align:middle;", 4, "ngIf"], ["style", "vertical-align:middle;", "for", "child.glNumber", 4, "ngIf"], ["scope", "row", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "id", "checked", "disabled", "ngModelChange", "change"], [2, "vertical-align", "middle"], ["for", "child.glNumber", 2, "vertical-align", "middle"], [1, "btn", 2, "color", "#FC7643", 3, "click"], [1, "fas", "fa-plus"]],
        template: function CustomizeLedgerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CustomizeLedgerComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomizeLedgerComponent_Template_input_click_5_listener() {
              return ctx.allCategories();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CustomizeLedgerComponent_li_10_Template, 2, 4, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CustomizeLedgerComponent_ng_template_11_Template, 6, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CustomizeLedgerComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.searchTerm = $event;
            })("ngModelChange", function CustomizeLedgerComponent_Template_input_ngModelChange_17_listener() {
              return ctx.filterData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomizeLedgerComponent_Template_button_click_19_listener() {
              return ctx.openCreateLedgerModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Add New Ledger ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "thead", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CustomizeLedgerComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.selectAllChecked = $event;
            })("change", function CustomizeLedgerComponent_Template_input_change_27_listener() {
              return ctx.toggleSelectAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CustomizeLedgerComponent_tr_34_Template, 5, 7, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sideTree);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectAllChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sideTreeData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
        styles: ["@charset \"UTF-8\";\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n.tree[_ngcontent-%COMP%] {\n  margin: 1em;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    ~ ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  position: relative;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.tree_label[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #fff;\n  list-style: none;\n  \n  font-size: 14px;\n  color: #000;\n  margin-bottom: 0px;\n}\nlabel.tree_label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nlabel.tree_label[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\nlabel.tree_label[_ngcontent-%COMP%]:before {\n  background: #000;\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  float: left;\n  margin: 0 1em 0 -2em;\n  width: 1em;\n  height: 1em;\n  border-radius: 4em;\n  content: \"+\";\n  text-align: center;\n  line-height: 0.9em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:before {\n  content: \"\u2013\";\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: -1.2rem;\n  bottom: 0;\n  left: -1.5em;\n  display: block;\n  width: 0;\n  border-left: 1px solid #777;\n  content: \"\";\n}\n.tree_label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: -1.5em;\n  display: block;\n  height: 0.5em;\n  width: 1em;\n  border-bottom: 1px solid #777;\n  border-left: 1px solid #777;\n  border-radius: 0 0 0 0.3em;\n  content: \"\";\n}\nlabel.tree_label[_ngcontent-%COMP%]:after {\n  border-bottom: 0 !important;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:after {\n  border-radius: 0 0.3em 0 0;\n  border-top: 1px solid #777;\n  border-right: 1px solid #777;\n  border-bottom: 0;\n  border-left: 0;\n  bottom: 0;\n  top: 0.5em;\n  height: auto;\n  margin-left: 1px;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  height: 1em;\n  bottom: auto;\n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child:before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZS1sZWRnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFHNUM7QUFDRTs7Q0FBQTtBQUdBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHVDQUFBO0FBR3BCO0FBQUU7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBR0Y7QUFBRTtFQUFtQixhQUFBO0FBSXJCO0FBRkU7RUFBMkIsY0FBQTtFQUMzQixlQUFBO0FBTUY7QUFKRTs7Q0FBQTtBQUdBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQWtCLHVDQUFBO0FBT3BCO0FBRkU7RUFBd0IsaUJBQUE7QUFNMUI7QUFKRTs7Q0FBQTtBQUdBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsdUNBQUE7RUFDbEIsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVFGO0FBTEU7RUFBbUIsZUFBQTtBQVNyQjtBQVBFO0VBQXlCLFdBQUE7QUFXM0I7QUFURTs7Q0FBQTtBQUdBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVRFO0VBQXFDLFlBQUE7QUFhdkM7QUFYRTs7Q0FBQTtBQUdBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWNGO0FBWEU7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQWNGO0FBWEU7RUFBeUIsMkJBQUE7QUFlM0I7QUFiRTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZ0JGO0FBYkU7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjtBQWJFO0VBQStCLGFBQUE7QUFpQmpDIiwiZmlsZSI6ImN1c3RvbWl6ZS1sZWRnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZm9ybS1jb250cm9sIHtcbiAgY29sb3I6ICM1NTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMCAwIDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA3cHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7XG4gIC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXG59XG5cbi8qIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAk1xuVHJlZSBjb3JlIHN0eWxlc1xuKi9cbi50cmVlIHtcbiAgbWFyZ2luOiAxZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8qIFJlbW92ZSB0aGUgZGVmYXVsdCBsaXN0LXN0eWxlIGRvdHMgKi9cbn1cblxuLnRyZWUgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG59XG5cbi50cmVlIGlucHV0IH4gdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZSBpbnB1dDpjaGVja2VkIH4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4vKiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJNcblRyZWUgcm93c1xuKi9cbi50cmVlIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICAvKiBSZW1vdmUgdGhlIGRlZmF1bHQgbGlzdC1zdHlsZSBkb3RzICovXG59XG5cbi50cmVlID4gbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4vKiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJNcblRyZWUgbGFiZWxzXG4qL1xuLnRyZWVfbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxpc3Qtc3R5bGUgZG90cyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmxhYmVsLnRyZWVfbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLnRyZWVfbGFiZWw6aG92ZXIge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG5UcmVlIGV4cGFuZGVkIGljb25cbiovXG5sYWJlbC50cmVlX2xhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMWVtIDAgLTJlbTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcbiAgY29udGVudDogXCIrXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOmNoZWNrZWQgfiBsYWJlbC50cmVlX2xhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCTXCI7XG59XG5cbi8qIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAk1xuVHJlZSBicmFuY2hlc1xuKi9cbi50cmVlIGxpOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMS4ycmVtO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3Nzc7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi50cmVlX2xhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMC41ZW07XG4gIHdpZHRoOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3Nzc7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDAuM2VtO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5sYWJlbC50cmVlX2xhYmVsOmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG46Y2hlY2tlZCB+IGxhYmVsLnRyZWVfbGFiZWw6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAuM2VtIDAgMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3Nzc7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMC41ZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuLnRyZWUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBoZWlnaHQ6IDFlbTtcbiAgYm90dG9tOiBhdXRvO1xufVxuXG4udHJlZSA+IGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    11109:
    /*!*******************************************************!*\
      !*** ./src/app/pages/ledger/ledger-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LedgerRoutingModule": function LedgerRoutingModule() {
          return (
            /* binding */
            _LedgerRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ledger/ledger.component */
      68628);
      /* harmony import */


      var _create_ledger_create_ledger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-ledger/create-ledger.component */
      89252);
      /* harmony import */


      var _my_ledger_my_ledger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-ledger/my-ledger.component */
      59563);
      /* harmony import */


      var _ledger_setting_ledger_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ledger-setting/ledger-setting.component */
      48390);
      /* harmony import */


      var src_app_core_services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/default-page-resolver.service */
      96336);
      /* harmony import */


      var _customize_ledger_customize_ledger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customize-ledger/customize-ledger.component */
      13435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_0__.LedgerComponent,
        resolve: {
          defaultPage: src_app_core_services_default_page_resolver_service__WEBPACK_IMPORTED_MODULE_4__.DefaultPageResolverService // Use the resolver here

        },
        children: [{
          path: '',
          redirectTo: 'master-ledger',
          pathMatch: 'full'
        }, {
          path: 'create-ledger',
          component: _create_ledger_create_ledger_component__WEBPACK_IMPORTED_MODULE_1__.CreateLedgerComponent
        }, {
          path: 'master-ledger',
          component: _my_ledger_my_ledger_component__WEBPACK_IMPORTED_MODULE_2__.MyLedgerComponent
        }, {
          path: 'ledger-setting',
          component: _ledger_setting_ledger_setting_component__WEBPACK_IMPORTED_MODULE_3__.LedgerSettingComponent
        }, {
          path: 'customize-ledger',
          component: _customize_ledger_customize_ledger_component__WEBPACK_IMPORTED_MODULE_5__.CustomizeLedgerComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _LedgerRoutingModule = /*#__PURE__*/_createClass(function _LedgerRoutingModule() {
        _classCallCheck(this, _LedgerRoutingModule);
      });

      _LedgerRoutingModule.ɵfac = function LedgerRoutingModule_Factory(t) {
        return new (t || _LedgerRoutingModule)();
      };

      _LedgerRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _LedgerRoutingModule
      });
      _LedgerRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_LedgerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    48390:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/ledger/ledger-setting/ledger-setting.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LedgerSettingComponent": function LedgerSettingComponent() {
          return (
            /* binding */
            _LedgerSettingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function LedgerSettingComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LedgerSettingComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LedgerSettingComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.saveAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function LedgerSettingComponent_tr_19_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var entry_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", entry_r10.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", entry_r10.glNumber, " ");
        }
      }

      function LedgerSettingComponent_tr_19_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var entry_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", entry_r11.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", entry_r11.glNumber, " ");
        }
      }

      function LedgerSettingComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedgerSettingComponent_tr_19_Template_mat_select_ngModelChange_7_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var i_r7 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.selectedValues[i_r7].debit_gl = $event;
          })("ngModelChange", function LedgerSettingComponent_tr_19_Template_mat_select_ngModelChange_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var i_r7 = restoredCtx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.saveRow(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LedgerSettingComponent_tr_19_mat_option_8_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedgerSettingComponent_tr_19_Template_mat_select_ngModelChange_11_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var i_r7 = restoredCtx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.selectedValues[i_r7].credit_gl = $event;
          })("ngModelChange", function LedgerSettingComponent_tr_19_Template_mat_select_ngModelChange_11_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var i_r7 = restoredCtx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.saveRow(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LedgerSettingComponent_tr_19_mat_option_12_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.usecaseId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.usecase);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.selectedValues[i_r7].debit_gl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredLedgerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.selectedValues[i_r7].credit_gl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredLedgerData);
        }
      }

      function LedgerSettingComponent_tbody_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _LedgerSettingComponent = /*#__PURE__*/function () {
        function _LedgerSettingComponent(ledgerService, toastService, titleCasePipe, cdr) {
          _classCallCheck(this, _LedgerSettingComponent);

          this.ledgerService = ledgerService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.cdr = cdr;
          this.searchTerm = '';
          this.ledgerSettingDisplayList = [];
          this.updatedLedgerData = [];
          this.isLoading = false;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.ledgerSettingList = [];
          this.filteredLedgerData = []; // Property to store the filtered ledger data

          this.selectedValues = [];
        }

        _createClass(_LedgerSettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLedgerData();
          }
        }, {
          key: "getLedgerData",
          value: function getLedgerData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$Promise$all, _yield$Promise$all2, userData, childLedgerData;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      this.isLoading = true;
                      _context2.next = 4;
                      return Promise.all([this.ledgerService.getUserUsecaseData({}, this.currentUser.id), this.ledgerService.getUserChildLedger({}, this.currentUser.id)]);

                    case 4:
                      _yield$Promise$all = _context2.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                      userData = _yield$Promise$all2[0];
                      childLedgerData = _yield$Promise$all2[1];
                      this.ledgerSettingDisplayList = userData.data;
                      this.filteredLedgerData = childLedgerData.data; // Initialize selectedValues based on ledgerSettingDisplayList

                      this.selectedValues = this.ledgerSettingDisplayList.map(function (item) {
                        return {
                          debit_gl: item.usercaseData.debit_gl,
                          credit_gl: item.usercaseData.credit_gl
                        };
                      }); // Filter the filteredLedgerData array to exclude selected values
                      // this.glList = this.filteredLedgerData.filter(entry => {
                      //   const isDebitSelected = this.selectedValues.some(selected => selected.debit_gl === entry.glNumber);
                      //   const isCreditSelected = this.selectedValues.some(selected => selected.credit_gl === entry.glNumber);
                      //   // Exclude entries that are selected as debit or credit
                      //   return !isDebitSelected && !isCreditSelected;
                      // });
                      // Create a set to store the selected GLs (both debit and credit)
                      //   const selectedGLs = new Set<string>();
                      //   this.selectedValues.forEach((value) => {
                      //     if (value.debit_gl) {
                      //       selectedGLs.add(value.debit_gl);
                      //     }
                      //     if (value.credit_gl) {
                      //       selectedGLs.add(value.credit_gl);
                      //     }
                      //   });
                      // // Filter the glList to exclude selected values
                      // this.glList = this.filteredLedgerData.filter((entry) => !selectedGLs.has(entry.glNumber));
                      // console.log(this.glList)

                      this.isLoading = false;
                      this.cdr.markForCheck();
                      _context2.next = 18;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](0);
                      console.error('Error fetching data:', _context2.t0);

                    case 18:
                      _context2.prev = 18;
                      this.isLoading = false;
                      this.cdr.markForCheck();
                      return _context2.finish(18);

                    case 22:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 15, 18, 22]]);
            }));
          } // Function to update selected values when a user makes a selection
          // async updateSelectedValues(index: number): Promise<void> {
          //   try {
          //     this.selectedEntry = this.ledgerSettingDisplayList[index];
          //     // Create a new object with the updated usercaseData
          //     const updatedUsercaseData = {
          //       credit_gl: this.selectedValues[index].credit_gl,
          //       debit_gl: this.selectedValues[index].debit_gl,
          //       userCaseId: this.selectedEntry.usercaseData.userCaseId,
          //       _id: this.selectedEntry.usercaseData._id,
          //     };
          //     // Call the API with the updated values
          //     const updatedData = {
          //       userId : this.currentUser.id,
          //       usecaseId: this.selectedEntry.usecaseId,
          //       usecase: this.selectedEntry.usecase,
          //       usercaseData: updatedUsercaseData,
          //       // usercaseData: this.selectedValues[index],
          //     };
          //     console.log(updatedData)
          //     const res = await this.ledgerService.assignLedgersv2(updatedData, this.currentUser.id);
          //     console.log('API response:', res.data);
          //   } catch (error) {
          //     console.error('API error:', error);
          //   }
          // }

        }, {
          key: "filterData",
          value: function filterData() {
            var searchTerm = this.searchTerm.toLowerCase().trim();

            if (searchTerm === '') {
              // If the search term is empty, show all data
              this.getLedgerData();
            } else {
              // Filter data based on the search term
              this.ledgerSettingDisplayList = this.ledgerSettingDisplayList.filter(function (item) {
                return item.usecase.toLowerCase().includes(searchTerm);
              });
            }
          }
        }, {
          key: "saveRow",
          value: function saveRow(index) {
            var selectedEntry = this.ledgerSettingDisplayList[index];
            var updatedUsercaseData = {
              credit_gl: this.selectedValues[index].credit_gl,
              debit_gl: this.selectedValues[index].debit_gl,
              userCaseId: selectedEntry.usercaseData.userCaseId,
              _id: selectedEntry.usercaseData._id
            }; // Check if the data is already in updatedLedgerData array, if not, add it

            var existingDataIndex = this.updatedLedgerData.findIndex(function (data) {
              return data.userCaseId === updatedUsercaseData.userCaseId;
            });

            if (existingDataIndex === -1) {
              this.updatedLedgerData.push(updatedUsercaseData);
            } else {
              // If the data already exists, update it
              this.updatedLedgerData[existingDataIndex] = updatedUsercaseData;
            }
          }
        }, {
          key: "saveAll",
          value: function saveAll() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var finalPayload, res;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      // Create the final payload with all updated data
                      finalPayload = {
                        userId: this.currentUser.id,
                        data: this.updatedLedgerData
                      };
                      console.log(finalPayload); // Call the API with the final payload

                      _context3.next = 5;
                      return this.ledgerService.assignLedgersv2(finalPayload, this.currentUser.id).then(function (res) {
                        if (res.success) {
                          console.log('API response:', res.data);
                          _this7.updatedLedgerData = []; // make sure to empty the array after updating the ledger data
                        }
                      });

                    case 5:
                      res = _context3.sent;
                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](0);
                      console.error('API error:', _context3.t0);

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 8]]);
            }));
          }
        }]);

        return _LedgerSettingComponent;
      }();

      _LedgerSettingComponent.ɵfac = function LedgerSettingComponent_Factory(t) {
        return new (t || _LedgerSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__.LedgerServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _LedgerSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LedgerSettingComponent,
        selectors: [["app-ledger-setting"]],
        decls: 21,
        vars: 5,
        consts: [["class", "loader-container", 4, "ngIf"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar", "me-4"], ["type", "search", "id", "searchInput", "placeholder", "Search By", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "100px"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "auto"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "10%", "text-align", "center"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "200px", "text-align", "center"], ["class", "btn-save", 3, "click", 4, "ngIf"], ["class", "btn-reveal-trigger text-left", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "btn-save", 3, "click"], [1, "btn-reveal-trigger", "text-left"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle"], [2, "vertical-align", "middle", "text-align", "center"], ["appearance", "outline", 2, "width", "80%"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]],
        template: function LedgerSettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LedgerSettingComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedgerSettingComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.searchTerm = $event;
            })("ngModelChange", function LedgerSettingComponent_Template_input_ngModelChange_3_listener() {
              return ctx.filterData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "thead", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "SR.NO.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Ledger Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Debit GL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Credit GL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LedgerSettingComponent_button_17_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LedgerSettingComponent_tr_19_Template, 14, 6, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LedgerSettingComponent_tbody_20_Template, 4, 0, "tbody", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.updatedLedgerData.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ledgerSettingDisplayList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ledgerSettingDisplayList.length <= 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: [".containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #F8F8F8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZGdlci1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNGLDRCQUFBO0VBQ0EscVhBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQTBDLCtCQUFBO0FBRTVDOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUZFO0VBQ0UsV0FBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7RUFBcUIsK0NBQUE7QUFDekI7O0FBRUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLDZCQUFBO0FBQUo7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFPQTtFQUNFO0lBQ0UsdUJBQUE7RUFKRjtBQUNGIiwiZmlsZSI6ImxlZGdlci1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclNlYXJjaEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm5hdk9wdGlvbnMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaEJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBpY29uJ3Mgd2lkdGggKi9cclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRib2R5IHRyLCB0ZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGgsIHRkLCB0ciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlc3BvbnNpdmUgQnV0dG9uc1xyXG5cclxuLmhlYWRlckJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoQmFye1xyXG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    11102:
    /*!***********************************************!*\
      !*** ./src/app/pages/ledger/ledger.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LedgerModule": function LedgerModule() {
          return (
            /* binding */
            _LedgerModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ledger_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ledger-routing.module */
      11109);
      /* harmony import */


      var _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ledger/ledger.component */
      68628);
      /* harmony import */


      var _create_ledger_create_ledger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-ledger/create-ledger.component */
      89252);
      /* harmony import */


      var _my_ledger_my_ledger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-ledger/my-ledger.component */
      59563);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tree */
      75473);
      /* harmony import */


      var _preview_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./preview/preview.component */
      72449);
      /* harmony import */


      var _my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-ledger/add-ledger/add-ledger.component */
      96764);
      /* harmony import */


      var _ledger_setting_ledger_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ledger-setting/ledger-setting.component */
      48390);
      /* harmony import */


      var _customize_ledger_customize_ledger_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./customize-ledger/customize-ledger.component */
      13435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LedgerModule = /*#__PURE__*/_createClass(function _LedgerModule() {
        _classCallCheck(this, _LedgerModule);
      });

      _LedgerModule.ɵfac = function LedgerModule_Factory(t) {
        return new (t || _LedgerModule)();
      };

      _LedgerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _LedgerModule
      });
      _LedgerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ledger_routing_module__WEBPACK_IMPORTED_MODULE_0__.LedgerRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_16__.MatTreeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_LedgerModule, {
          declarations: [_ledger_ledger_component__WEBPACK_IMPORTED_MODULE_1__.LedgerComponent, _create_ledger_create_ledger_component__WEBPACK_IMPORTED_MODULE_2__.CreateLedgerComponent, _my_ledger_my_ledger_component__WEBPACK_IMPORTED_MODULE_3__.MyLedgerComponent, _preview_preview_component__WEBPACK_IMPORTED_MODULE_5__.PreviewComponent, _my_ledger_add_ledger_add_ledger_component__WEBPACK_IMPORTED_MODULE_6__.AddLedgerComponent, _ledger_setting_ledger_setting_component__WEBPACK_IMPORTED_MODULE_7__.LedgerSettingComponent, _customize_ledger_customize_ledger_component__WEBPACK_IMPORTED_MODULE_8__.CustomizeLedgerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ledger_routing_module__WEBPACK_IMPORTED_MODULE_0__.LedgerRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_16__.MatTreeModule]
        });
      })();
      /***/

    },

    /***/
    68628:
    /*!*********************************************************!*\
      !*** ./src/app/pages/ledger/ledger/ledger.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LedgerComponent": function LedgerComponent() {
          return (
            /* binding */
            _LedgerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);

      var _LedgerComponent = /*#__PURE__*/function () {
        function _LedgerComponent(route, router, ledgerService) {
          _classCallCheck(this, _LedgerComponent);

          this.route = route;
          this.router = router;
          this.ledgerService = ledgerService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_LedgerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /// Access the resolved data
            var defaultPage = this.route.snapshot.data.defaultPage; // this.router.navigate([defaultPage], { relativeTo: this.route });
            // Use the resolved defaultPage to navigate
            // Use a condition to navigate to the appropriate default page

            if (defaultPage === 'create-ledger') {
              this.router.navigate(['create-ledger'], {
                relativeTo: this.route
              });
              this.defaultLedgerFlag = false;
            } else {
              this.defaultLedgerFlag = true;
              this.router.navigate(['master-ledger'], {
                relativeTo: this.route
              });
            }
          }
        }]);

        return _LedgerComponent;
      }();

      _LedgerComponent.ɵfac = function LedgerComponent_Factory(t) {
        return new (t || _LedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__.LedgerServiceService));
      };

      _LedgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LedgerComponent,
        selectors: [["app-ledger"]],
        decls: 17,
        vars: 2,
        consts: [[1, "component-container", "container-fluid", "p-4", "bg-white"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "page-nav-link", "mt-3"], [1, "col-xxl-2", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-7", "links", 3, "hidden"], ["routerLink", "./create-ledger", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-5", "links", 3, "hidden"], ["routerLink", "./master-ledger", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-5", "links"], ["routerLink", "./ledger-setting", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-lg-3"], [1, "mt-1"], [1, "component-container", "container-fluid"]],
        template: function LedgerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Your Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Master Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ledger Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.defaultLedgerFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.defaultLedgerFlag);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: green;\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n}\n\n.mat-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.mat-tree-node[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZGdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkE7RUFDSSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQXpCSjs7QUE0QkU7RUFDRSx1QkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxZQUFBO0FBekJKIiwiZmlsZSI6ImxlZGdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jYXRlZ29yeS1saXN0IHtcclxuLy8gICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMDtcclxuLy8gfVxyXG5cclxuLy8gLm5vZGUge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5ub2RlIGEge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAuY29ubmVjdC1saW5lIHtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zdWJjYXRlZ29yeS1saXN0IHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbi8vIH1cclxuXHJcblxyXG5oMSwgaDMge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICAgXHJcbiAgLm1hdC10cmVlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAgIFxyXG4gIC5tYXQtdHJlZS1ub2RlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    96764:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/ledger/my-ledger/add-ledger/add-ledger.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddLedgerComponent": function AddLedgerComponent() {
          return (
            /* binding */
            _AddLedgerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function AddLedgerComponent_div_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddLedgerComponent_div_1_ng_container_8_Template_input_ngModelChange_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var entry_r3 = restoredCtx.$implicit;
            var i_r4 = restoredCtx.index;
            return entry_r3.newLedgerNames[i_r4] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var entry_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", entry_r3.newLedgerNames[i_r4]);
        }
      }

      function AddLedgerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Ledgers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Ledger under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddLedgerComponent_div_1_ng_container_8_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddLedgerComponent_div_1_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.newLedgerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLedgerComponent_div_1_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLedgerComponent_div_1_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.addLedger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add Ledgers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.glName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ledgerNameArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.newLedgerName);
        }
      }

      function AddLedgerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add New Ledger");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddLedgerComponent_div_2_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.parentLedgerNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddLedgerComponent_div_2_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.newLedgerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLedgerComponent_div_2_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLedgerComponent_div_2_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.addLedger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add Ledgers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.parentLedgerNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.newLedgerName);
        }
      }

      var _AddLedgerComponent = /*#__PURE__*/function () {
        function _AddLedgerComponent(dialogRef, data, ledgerService) {
          _classCallCheck(this, _AddLedgerComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.ledgerService = ledgerService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.newLedgerName = '';
          this.parentLedgerNumber = '';
          this.ledgerNameArr = [];
        }

        _createClass(_AddLedgerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.glNumber) {
              this.parentGlNumber = this.data.glNumber;
            }

            if (this.data.createLedger) {
              this.createLedgerFlag = true;
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "addNewInput",
          value: function addNewInput(newLedgerName) {
            var parentAccount = this.parentGlNumber;

            if (newLedgerName.trim() !== '') {
              this.ledgerNameArr.push({
                glName: newLedgerName,
                parentAccount: parentAccount
              });
            }

            console.log(this.ledgerNameArr);
          }
        }, {
          key: "addLedger",
          value: function addLedger() {
            var requestData = {};

            if (this.createLedgerFlag) {
              requestData = {
                data: [{
                  glName: this.newLedgerName,
                  parentAccount: this.parentLedgerNumber
                }]
              };
            } else {
              requestData = {
                data: [{
                  glName: this.newLedgerName,
                  parentAccount: this.parentGlNumber
                }]
              }; // data: this.ledgerNameArr,
            }

            console.log(requestData);
            this.ledgerService.addCustomLedger(requestData, this.currentUser.id).then(function (res) {
              if (res.success) {
                console.log(res.message);
              }
            });
            this.dialogRef.close({
              glNumber: this.parentGlNumber,
              newLedgerName: this.newLedgerName
            });
          }
        }]);

        return _AddLedgerComponent;
      }();

      _AddLedgerComponent.ɵfac = function AddLedgerComponent_Factory(t) {
        return new (t || _AddLedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__.LedgerServiceService));
      };

      _AddLedgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AddLedgerComponent,
        selectors: [["app-add-ledger"]],
        decls: 3,
        vars: 2,
        consts: [[1, "container"], ["class", "", 4, "ngIf"], [1, ""], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "New Ledger", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], [1, "btn-cancel", 3, "click"], [1, "btn-save", "ms-2", 3, "click"], ["matInput", "", "placeholder", "Parent Ledger Number", 3, "ngModel", "ngModelChange"]],
        template: function AddLedgerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLedgerComponent_div_1_Template, 16, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddLedgerComponent_div_2_Template, 13, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.createLedgerFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.createLedgerFlag);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbGVkZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    59563:
    /*!***************************************************************!*\
      !*** ./src/app/pages/ledger/my-ledger/my-ledger.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyLedgerComponent": function MyLedgerComponent() {
          return (
            /* binding */
            _MyLedgerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _preview_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../preview/preview.component */
      72449);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/ledger-service.service */
      75301);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function MyLedgerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MyLedgerComponent_li_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          category: a0
        };
      };

      function MyLedgerComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MyLedgerComponent_li_9_ng_container_1_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rootCategory_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, rootCategory_r5.entry));
        }
      }

      function MyLedgerComponent_ng_template_10_li_5_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function MyLedgerComponent_ng_template_10_li_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MyLedgerComponent_ng_template_10_li_5_div_1_ng_container_1_Template, 1, 0, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, childCategory_r9));
        }
      }

      function MyLedgerComponent_ng_template_10_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MyLedgerComponent_ng_template_10_li_5_div_1_Template, 2, 4, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childCategory_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", childCategory_r9.children.length > 0);
        }
      }

      function MyLedgerComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyLedgerComponent_ng_template_10_Template_input_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var category_r7 = restoredCtx.category;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.toggleNode(category_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MyLedgerComponent_ng_template_10_li_5_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r7 = ctx.category;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", category_r7.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", category_r7.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r7.glName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r7.children);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      function MyLedgerComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, i_r16 % 2 === 0 ? "#ffffff" : "#f2f2f2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](child_r15.glNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](child_r15.glName);
        }
      }

      var _MyLedgerComponent = /*#__PURE__*/function () {
        function _MyLedgerComponent(dialog, router, ledgerService, toastService, titleCasePipe) {
          _classCallCheck(this, _MyLedgerComponent);

          this.dialog = dialog;
          this.router = router;
          this.ledgerService = ledgerService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.isLoading = false;
          this.searchTerm = '';
          this.ledgerList = [];
          this.selectedItems = []; // Array to store selected items

          this.selectAllChecked = false; // Initialize with false

          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.categories = [];
          this.sideTreeData = [];
          this.masterLedger = [];
        }

        _createClass(_MyLedgerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.getUserLedger2().then(function () {
              // console.log(this.sideTreeData)
              _this8.ledgerService.setLedgerData(_this8.sideTreeData);
            });
          } // recursive function to get all the childrens and their childrens dynamically

        }, {
          key: "filterEntriesWithChildren",
          value: function filterEntriesWithChildren(entries) {
            var _this9 = this;

            return entries.map(function (entry) {
              _this9.categories.push(entry); // adding all the entries one by one into the category array


              var children = entry.children.length > 0 ? _this9.filterEntriesWithChildren(entry.children) : []; //calling the same function n times and passing their children as a argument

              return Object.assign(Object.assign({
                entry: entry
              }, entry.children), {
                children: children
              }); // getting the parent entry and children of that entry and grand children as well
            });
          }
        }, {
          key: "allCategories",
          value: function allCategories() {
            this.sideTreeData = this.categories;
          }
        }, {
          key: "getUserLedger2",
          value: function getUserLedger2() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var res, rawData, categories;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.isLoading = true;
                      _context4.prev = 1;
                      _context4.next = 4;
                      return this.ledgerService.getUserLedger2({}, this.currentUser.id);

                    case 4:
                      res = _context4.sent;

                      if (res.success) {
                        rawData = res.data;
                        console.log(rawData); // this.filterChildrenWithEmptyGrandchildren(rawData)

                        this.sideTreeData = this.categories; // Filter out entries with no children recursively

                        categories = this.filterEntriesWithChildren(rawData);
                        console.log(categories);
                        this.sideTree = categories;
                      }

                      _context4.next = 11;
                      break;

                    case 8:
                      _context4.prev = 8;
                      _context4.t0 = _context4["catch"](1);

                      if (_context4.t0.error.status == 404) {
                        this.toastService.toastMsg({
                          title: "Error",
                          content: "err.error.message"
                        }); // this.toastService.openErrorSnackBar(err.error.message);
                      } else {
                        this.toastService.toastMsg({
                          title: "Error",
                          content: "err.error.message"
                        }); // this.toastService.openErrorSnackBar(err.error.message);
                      }

                    case 11:
                      _context4.prev = 11;
                      this.isLoading = false;
                      return _context4.finish(11);

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 8, 11, 14]]);
            }));
          } /// Recursive function to flatten the hierarchical structure

        }, {
          key: "flattenCategory",
          value: function flattenCategory(category) {
            var result = []; // Add the current category

            result.push(category); // Recursively add children

            if (category.children && category.children.length > 0) {
              var _iterator8 = _createForOfIteratorHelper(category.children),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var child = _step8.value;
                  var childData = this.flattenCategory(child);
                  result.push.apply(result, _toConsumableArray(childData));
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            return result;
          }
        }, {
          key: "toggleNode",
          value: function toggleNode(category) {
            var _this10 = this;

            this.isLoading = true;
            setTimeout(function () {
              var existingCategory = _this10.categories.find(function (c) {
                return c.glNumber === category.glNumber;
              }); // if (existingCategory) {
              //   const filteredData = this.filterEntriesWithChildren(existingCategory.children);
              //   // const filteredData = this.filterChildrenWithEmptyGrandchildren(existingCategory.children);
              //   // this.buildSideTreeData(filteredData);
              //   console.log(filteredData);
              //   this.sideTreeData = filteredData;
              // } else {
              //   this.sideTreeData = this.categories;
              // }


              if (existingCategory) {
                var flattenedData = _this10.flattenCategory(existingCategory);

                console.log(flattenedData);
                _this10.sideTreeData = flattenedData;
              } else {
                _this10.sideTreeData = _this10.categories;
              } // Update selectedItems and selectAllChecked based on existing selections


              _this10.updateSelectedItemsAndSelectAll();

              _this10.isLoading = false;
            }, 1000);
          }
        }, {
          key: "filterChildrenWithEmptyGrandchildren",
          value: function filterChildrenWithEmptyGrandchildren(children) {
            var _this11 = this;

            var filteredChildren = children.filter(function (child) {
              return child.children.length === 0 || _this11.hasEmptyGrandchildren(child.children);
            });
            var nextLevelChildren = [];

            var _iterator9 = _createForOfIteratorHelper(filteredChildren),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var child = _step9.value;
                nextLevelChildren.push.apply(nextLevelChildren, _toConsumableArray(child.children));
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            if (nextLevelChildren.length > 0) {
              return this.filterChildrenWithEmptyGrandchildren(nextLevelChildren);
            }

            return filteredChildren;
          }
        }, {
          key: "hasEmptyGrandchildren",
          value: function hasEmptyGrandchildren(children) {
            return children.some(function (grandchild) {
              return grandchild.children.length === 0;
            });
          } // Add this function to update selectedItems and selectAllChecked

        }, {
          key: "updateSelectedItemsAndSelectAll",
          value: function updateSelectedItemsAndSelectAll() {
            var allSelected = this.sideTreeData.every(function (item) {
              return item.selected;
            });
            var someSelected = this.sideTreeData.some(function (item) {
              return item.selected;
            });

            if (allSelected) {
              this.selectAllChecked = true;
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else if (someSelected) {
              this.selectAllChecked = false;
              this.selectedItems = this.sideTreeData.filter(function (item) {
                return item.selected;
              });
            } else {
              this.selectAllChecked = false;
              this.selectedItems = [];
            }
          }
        }, {
          key: "displayCategory",
          value: function displayCategory(category) {
            if (category.children.length === 0) {
              console.log(category.glNumber, category.glName); // Display only if no children
            } else {
              console.log(category.glNumber, category.glName); // Display parent

              var _iterator10 = _createForOfIteratorHelper(category.children),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var child = _step10.value;
                  this.displayCategory(child); // Recursively display children
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        }, {
          key: "handleCheckboxChange",
          value: function handleCheckboxChange(item) {
            if (item.selected) {
              this.selectedItems.push(item);
            } else {
              var index = this.selectedItems.indexOf(item);

              if (index !== -1) {
                this.selectedItems.splice(index, 1);
              }
            }

            this.updateSelectAllCheckedState(); // Call updateSelectedItemsAndSelectAll to sync with selectAllChecked

            this.updateSelectedItemsAndSelectAll();
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            // this.selectAllChecked = !this.selectAllChecked;
            var _iterator11 = _createForOfIteratorHelper(this.sideTreeData),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var item = _step11.value;
                item.selected = this.selectAllChecked;
              } // Update the selected items list as well

            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            if (this.selectAllChecked) {
              this.selectedItems = _toConsumableArray(this.sideTreeData);
            } else {
              this.selectedItems = [];
            }
          }
        }, {
          key: "updateSelectAllCheckedState",
          value: function updateSelectAllCheckedState() {
            this.selectAllChecked = this.sideTreeData.length > 0 && this.sideTreeData.every(function (item) {
              return item.selected;
            });
          }
        }, {
          key: "openPreviewDialog",
          value: function openPreviewDialog() {
            if (this.selectedItems && this.selectedItems.length > 0) {
              var dialogRef = this.dialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_0__.PreviewComponent, {
                width: '800px',
                height: '100vh',
                data: {
                  selectedItems: this.selectedItems,
                  allGlData: this.categories
                },
                panelClass: 'custom-dialog-class',
                disableClose: true,
                position: {
                  right: '0'
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: ".concat(result));
              });
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "There Is Not Selected Any Ledger. Please Select A Ledger."
              }); // this.toastService.openErrorSnackBar("There is not selected any ledger. Please select a ledger.")
            }
          }
        }, {
          key: "filterData",
          value: function filterData() {
            var searchTerm = this.searchTerm.toLowerCase().trim();

            if (searchTerm === '') {
              // If the search term is empty, show all data
              this.sideTreeData = this.categories;
            } else {
              // Filter data based on the search term
              this.sideTreeData = this.categories.filter(function (item) {
                // Modify the condition as needed for your search criteria
                return item.glNumber.toLowerCase().includes(searchTerm) || item.glName.toLowerCase().includes(searchTerm);
              });
            }
          }
        }, {
          key: "openCutomizeLedger",
          value: function openCutomizeLedger() {
            // this.ledgerService.sharedArray = this.categories; // Set the array in the service
            this.router.navigate(['pages/ledger-page/customize-ledger']);
          }
        }]);

        return _MyLedgerComponent;
      }();

      _MyLedgerComponent.ɵfac = function MyLedgerComponent_Factory(t) {
        return new (t || _MyLedgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_1__.LedgerServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe));
      };

      _MyLedgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MyLedgerComponent,
        selectors: [["app-my-ledger"]],
        decls: 31,
        vars: 4,
        consts: [["class", "loader-container", 4, "ngIf"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-2", "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "ps-0", 2, "margin-top", "4.25%", "border-top", "1px solid #ccc"], [1, "tree"], ["type", "checkbox", "id", "c1", 3, "click"], ["for", "c1", 1, "tree_label"], [4, "ngFor", "ngForOf"], ["displayCategoryTemplate", ""], [1, "col-xxl-10", "col-xl-10", "col-lg-9", "col-md-8", "col-sm-6", "ps-0"], [1, "row", "d-flex", "flex-center", "mb-3"], [1, "col-md-1", "col-lg-5", "col-xl-6"], [1, "col-sm-4", "col-md-3", "col-lg-3", "col-xl-3", "mt-2"], ["type", "search", "id", "searchInput", "placeholder", "Search By", 1, "form-control", "pe-5", 3, "ngModel", "ngModelChange"], [1, "navOption-btns", "col-sm-8", "col-md-8", "col-lg-4", "col-xl-3", "mt-2", 2, "display", "flex", "justify-content", "space-around !important", "align-items", "center"], ["type", "button", 1, "btn", "text-nowrap", 3, "click"], [1, "fas", "fa-plus", "me-2"], [2, "border-left", "2px solid #ccc", "overflow-x", "auto"], [1, "table", "table-responsive", "mb-0"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle"], ["class", "btn-reveal-trigger text-left", "style", "color: #676398!important;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "checkbox", 3, "id", "click"], [1, "tree_label", 3, "for"], [4, "ngIf"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important", 3, "ngStyle"], [2, "vertical-align", "middle"], ["for", "child.glNumber", 2, "vertical-align", "middle"]],
        template: function MyLedgerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MyLedgerComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyLedgerComponent_Template_input_click_5_listener() {
              return ctx.allCategories();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MyLedgerComponent_li_9_Template, 2, 4, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MyLedgerComponent_ng_template_10_Template, 6, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MyLedgerComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.searchTerm = $event;
            })("ngModelChange", function MyLedgerComponent_Template_input_ngModelChange_16_listener() {
              return ctx.filterData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyLedgerComponent_Template_button_click_18_listener() {
              return ctx.openCutomizeLedger();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Customize Your Ledger ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "thead", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, MyLedgerComponent_tr_30_Template, 5, 5, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sideTree);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sideTreeData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle],
        styles: ["@charset \"UTF-8\";\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n.tree[_ngcontent-%COMP%] {\n  margin: 1em;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    ~ ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  display: block;\n  padding-left: 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  position: relative;\n  list-style: none;\n  \n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.tree_label[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #fff;\n  list-style: none;\n  \n  font-size: 14px;\n  color: #000;\n  margin-bottom: 0px;\n}\nlabel.tree_label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nlabel.tree_label[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\nlabel.tree_label[_ngcontent-%COMP%]:before {\n  background: #000;\n  color: #fff;\n  position: relative;\n  z-index: 1;\n  float: left;\n  margin: 0 1em 0 -2em;\n  width: 1em;\n  height: 1em;\n  border-radius: 4em;\n  content: \"+\";\n  text-align: center;\n  line-height: 0.9em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:before {\n  content: \"\u2013\";\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: -1.2rem;\n  bottom: 0;\n  left: -1.5em;\n  display: block;\n  width: 0;\n  border-left: 1px solid #777;\n  content: \"\";\n}\n.tree_label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: -1.5em;\n  display: block;\n  height: 0.5em;\n  width: 1em;\n  border-bottom: 1px solid #777;\n  border-left: 1px solid #777;\n  border-radius: 0 0 0 0.3em;\n  content: \"\";\n}\nlabel.tree_label[_ngcontent-%COMP%]:after {\n  border-bottom: 0 !important;\n}\n[_ngcontent-%COMP%]:checked    ~ label.tree_label[_ngcontent-%COMP%]:after {\n  border-radius: 0 0.3em 0 0;\n  border-top: 1px solid #777;\n  border-right: 1px solid #777;\n  border-bottom: 0;\n  border-left: 0;\n  bottom: 0;\n  top: 0.5em;\n  height: auto;\n  margin-left: 1px;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  height: 1em;\n  bottom: auto;\n}\n.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child:before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWxlZGdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUcxQztBQUNBOztDQUFBO0FBR0E7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsdUNBQUE7QUFHbEI7QUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFHQTtBQUFBO0VBQW1CLGFBQUE7QUFJbkI7QUFGQTtFQUEyQixjQUFBO0VBQzNCLGVBQUE7QUFNQTtBQUpBOztDQUFBO0FBR0E7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFBa0IsdUNBQUE7QUFPbEI7QUFGQTtFQUF3QixpQkFBQTtBQU14QjtBQUpBOztDQUFBO0FBR0E7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUFrQix1Q0FBQTtFQUNsQixlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUUE7QUFMQTtFQUFtQixlQUFBO0FBU25CO0FBUEE7RUFBeUIsV0FBQTtBQVd6QjtBQVRBOztDQUFBO0FBR0E7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVlBO0FBVEE7RUFBcUMsWUFBQTtBQWFyQztBQVhBOztDQUFBO0FBR0E7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBY0E7QUFYQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBY0E7QUFYQTtFQUF5QiwyQkFBQTtBQWV6QjtBQWJBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFnQkE7QUFiQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZ0JBO0FBYkE7RUFBK0IsYUFBQTtBQWlCL0IiLCJmaWxlIjoibXktbGVkZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm0tY29udHJvbCB7XG4gIGNvbG9yOiAjNTU1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgMCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogN3B4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDk1JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xufVxuXG4vKiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJNcblRyZWUgY29yZSBzdHlsZXNcbiovXG4udHJlZSB7XG4gIG1hcmdpbjogMWVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICAvKiBSZW1vdmUgdGhlIGRlZmF1bHQgbGlzdC1zdHlsZSBkb3RzICovXG59XG5cbi50cmVlIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xufVxuXG4udHJlZSBpbnB1dCB+IHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRyZWUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG5UcmVlIHJvd3NcbiovXG4udHJlZSBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxpc3Qtc3R5bGUgZG90cyAqL1xufVxuXG4udHJlZSA+IGxpOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLyog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCTXG5UcmVlIGxhYmVsc1xuKi9cbi50cmVlX2xhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8qIFJlbW92ZSB0aGUgZGVmYXVsdCBsaXN0LXN0eWxlIGRvdHMgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5sYWJlbC50cmVlX2xhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbC50cmVlX2xhYmVsOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi8qIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAk1xuVHJlZSBleHBhbmRlZCBpY29uXG4qL1xubGFiZWwudHJlZV9sYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDFlbSAwIC0yZW07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0ZW07XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbjpjaGVja2VkIH4gbGFiZWwudHJlZV9sYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAk1wiO1xufVxuXG4vKiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJNcblRyZWUgYnJhbmNoZXNcbiovXG4udHJlZSBsaTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEuMnJlbTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtMS41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzc3O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4udHJlZV9sYWJlbDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMS41ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwLjNlbTtcbiAgY29udGVudDogXCJcIjtcbn1cblxubGFiZWwudHJlZV9sYWJlbDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuOmNoZWNrZWQgfiBsYWJlbC50cmVlX2xhYmVsOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjNlbSAwIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDAuNWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi50cmVlIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvdHRvbTogYXV0bztcbn1cblxuLnRyZWUgPiBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ledger_ledger_module_ts-es5.js.map