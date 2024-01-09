(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_setting-module_setting-module_module_ts"], {
    /***/
    80506:
    /*!**************************************************************!*\
      !*** ./src/app/core/services/email-setup-service.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailSetupServiceService": function EmailSetupServiceService() {
          return (
            /* binding */
            _EmailSetupServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/url-constants */
      16393);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      72229);

      var _EmailSetupServiceService = /*#__PURE__*/function () {
        function _EmailSetupServiceService(httpClient) {
          _classCallCheck(this, _EmailSetupServiceService);

          this.httpClient = httpClient;
        }

        _createClass(_EmailSetupServiceService, [{
          key: "postEmailSetup",
          value: function postEmailSetup(data) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.postEmailSetup, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }]);

        return _EmailSetupServiceService;
      }();

      _EmailSetupServiceService.ɵfac = function EmailSetupServiceService_Factory(t) {
        return new (t || _EmailSetupServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
      };

      _EmailSetupServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _EmailSetupServiceService,
        factory: _EmailSetupServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    66200:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/setting-module/invoice-number/invoice-number.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceNumberComponent": function InvoiceNumberComponent() {
          return (
            /* binding */
            _InvoiceNumberComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InvoiceNumberComponent = /*#__PURE__*/function () {
        function _InvoiceNumberComponent() {
          _classCallCheck(this, _InvoiceNumberComponent);
        }

        _createClass(_InvoiceNumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InvoiceNumberComponent;
      }();

      _InvoiceNumberComponent.ɵfac = function InvoiceNumberComponent_Factory(t) {
        return new (t || _InvoiceNumberComponent)();
      };

      _InvoiceNumberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InvoiceNumberComponent,
        selectors: [["app-invoice-number"]],
        decls: 2,
        vars: 0,
        template: function InvoiceNumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invoice-number works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    87358:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/setting-module/invoice-receipt-ui/invoice-receipt-ui.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceReceiptUIComponent": function InvoiceReceiptUIComponent() {
          return (
            /* binding */
            _InvoiceReceiptUIComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_email_setup_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/email-setup-service.service */
      80506);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      var _c0 = ["dynamicText"];

      function InvoiceReceiptUIComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r60.saveData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r62.updateData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_17_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66);

            var color_r64 = restoredCtx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r65.selectColor(color_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", color_r64);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_76_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Company Name Text Size is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InvoiceReceiptUIComponent_mat_error_76_mat_error_1_Template, 2, 0, "mat-error", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.companytextsize.errors == null ? null : ctx_r3.f.companytextsize.errors.required);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_90_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Print Text Size is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InvoiceReceiptUIComponent_mat_error_90_mat_error_1_Template, 2, 0, "mat-error", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.printextsize.errors == null ? null : ctx_r4.f.printextsize.errors.required);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Terms And Conditions is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_209_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Year (YYYY)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_209_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r69.yearformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_209_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r71.getYearFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_209_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r72.calenderYearformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-option", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "YYYY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r7.isShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.yearformat)("ngModel", ctx_r7.calenderYearformat);
        }
      }

      function InvoiceReceiptUIComponent_div_210_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Month (MM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_210_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r73.monthformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_210_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r75.getMonthFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_210_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r76.calenderMonthformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-option", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "MM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r8.isShownm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.monthformat)("ngModel", ctx_r8.calenderMonthformat);
        }
      }

      function InvoiceReceiptUIComponent_div_211_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Year (YYYY-YYYY)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_211_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r77.yearformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_211_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r79.getYearFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_211_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r80.calenderYearformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-option", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "YY-YY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-option", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "YYYY-YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r9.isShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.yearformat)("ngModel", ctx_r9.calenderYearformat);
        }
      }

      function InvoiceReceiptUIComponent_div_212_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Month (MMM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_212_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r81.monthformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_212_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r83.getMonthFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_212_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r84.calenderMonthformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-option", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "MMM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r10.isShownm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.monthformat)("ngModel", ctx_r10.calenderMonthformat);
        }
      }

      function InvoiceReceiptUIComponent_div_243_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_243_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r85.postInvoiceNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_244_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_244_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r87.updateInvoiceNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_263_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mail Password required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_271_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mail Service required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_280_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mail Host required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_288_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mail Port required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_p_299_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_p_300_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", null, 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Trade Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r18.selectedColor)("font-size", ctx_r18.getTextSize(ctx_r18.selectedTextSize), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_301_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", null, 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Gokhalenagar, Pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx_r19.getTextSizeprint(ctx_r19.TextSizeprint), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_302_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", null, 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Email:\xA0 abc@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx_r20.getTextSizeprint(ctx_r20.TextSizeprint), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_303_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", null, 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Mobile:\xA0 8975632410");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx_r21.getTextSizeprint(ctx_r21.TextSizeprint), "px");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "collapsed": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "show": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _InvoiceReceiptUIComponent = /*#__PURE__*/function () {
        function _InvoiceReceiptUIComponent(cdr, formBuilder, saleInvoiceService, route, toastService, emailService, titleCasePipe) {
          _classCallCheck(this, _InvoiceReceiptUIComponent);

          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.saleInvoiceService = saleInvoiceService;
          this.route = route;
          this.toastService = toastService;
          this.emailService = emailService;
          this.titleCasePipe = titleCasePipe;
          this.colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan', 'magenta', 'teal', 'indigo', 'lime', 'maroon', 'navy', 'olive', 'silver', 'black', 'white', 'gray'];
          this.selectedColor = null;
          this.isCalendar = false;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.eamilSetupForm = this.formBuilder.group({
            mailPassword: [""],
            mailService: [""],
            mailHost: [""],
            mailPort: [] //"userId" : "{{userId}}"

          });
          this.isDisabled = false;
          this.isShown = true;
          this.isShownm = true;
          this.showbutton = false;
          this.checked = false;
          this.indeterminate = false;
          this.labelPosition = 'after';
          this.disabled = true;
          this.isShowButton = false;
          this.isShowButtonsetting = false;
          this.openPreview = false;
          this.isActiveCompanyName = false;
          this.isActiveCompanyLogo = false;
          this.isActiveCompanyAddress = false;
          this.isActiveCompanyEmail = false;
          this.isActiveCompanyNumber = false;
          this.submitted = false;
          this.isDropdownOpen = true;
          this.selectedTextSize = 'Medium';
          this.TextSizeprint = 'Medium'; // Default text size

          this.today = new Date();
          this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);

          if (this.today.getMonth() + 1 <= 3) {
            this.financialYear = this.today.getFullYear() - 1 + "-" + this.today.getFullYear();
          } else {
            this.financialYear = this.today.getFullYear() + "-" + (this.today.getFullYear() + 1);
          }

          this.monthShortName = this.today.toLocaleString('en-US', {
            month: 'short'
          });
          this.monthNumber = this.today.getMonth() + 1;
          this.currentYear = this.today.getFullYear();
          this.twoDigitFinancialYear = parseInt(this.today.toLocaleDateString('en', {
            year: '2-digit'
          }));
        }

        _createClass(_InvoiceReceiptUIComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInvoiceNumber();
            this.getInvoicesetting();
            this.invoiceReciptform();
            this.invoiceSettingform();
          }
        }, {
          key: "getTextSize",
          value: function getTextSize(selectedTextSize) {
            switch (selectedTextSize) {
              case 'Large':
                return 22;

              case 'Medium':
                return 20;

              case 'Small':
                return 18;

              default:
                return 20;
              // Default to 'Medium' size if an invalid option is selected
            }
          }
        }, {
          key: "getTextSizeprint",
          value: function getTextSizeprint(TextSizeprint) {
            switch (TextSizeprint) {
              case 'Large':
                return 16;

              case 'Medium':
                return 14;

              case 'Small':
                return 12;

              default:
                return 14;
              // Default to 'Medium' size if an invalid option is selected
            }
          }
        }, {
          key: "toggleCheckboxCompanyName",
          value: function toggleCheckboxCompanyName(value) {
            this.isActiveCompanyName = value;
            console.log("this.isActiveCompanyName", this.isActiveCompanyName);
          }
        }, {
          key: "toggleCheckboxCompanyLogo",
          value: function toggleCheckboxCompanyLogo(value) {
            this.isActiveCompanyLogo = value;
            console.log("this.isActiveCompanyLogo", this.isActiveCompanyLogo);
          }
        }, {
          key: "toggleCheckboxCompanyAddress",
          value: function toggleCheckboxCompanyAddress(value) {
            this.isActiveCompanyAddress = value;
            console.log("this.isActiveCompanyAddress", this.isActiveCompanyAddress);
          }
        }, {
          key: "toggleCheckboxCompanyEmail",
          value: function toggleCheckboxCompanyEmail(value) {
            this.isActiveCompanyEmail = value;
            console.log("this.isActiveCompanyEmail", this.isActiveCompanyEmail);
          }
        }, {
          key: "toggleCheckboxCompanyNumber",
          value: function toggleCheckboxCompanyNumber(value) {
            this.isActiveCompanyNumber = value;
            console.log("this.isActiveCompanyNumber", this.isActiveCompanyNumber);
          }
        }, {
          key: "invoiceReciptform",
          value: function invoiceReciptform() {
            this.reciptform = this.formBuilder.group({
              termsandcondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              companytextsize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              printextsize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.reciptform.controls;
          }
        }, {
          key: "m",
          get: function get() {
            return this.eamilSetupForm.controls;
          }
        }, {
          key: "invoiceSettingform",
          value: function invoiceSettingform() {
            this.NumberForm = this.formBuilder.group({
              calendarType: [""],
              prefixOne: [""],
              prefixTwo: [""],
              seprator1: [""],
              year: [false],
              month: [false],
              yearformat: [],
              monthformat: [],
              seprator2: [""],
              numberOfZeros: [""],
              lastDigit: ["1"],
              invoiceNo: [""]
            });
          }
        }, {
          key: "selectColor",
          value: function selectColor(color) {
            this.selectedColor = color;
            console.log("selected color", this.selectedColor);
          }
        }, {
          key: "saveData",
          value: function saveData() {
            var _this2 = this;

            this.submitted = true;
            console.log(this.reciptform.controls.companytextsize.value, "", this.reciptform.controls.printextsize.value, "", this.reciptform.controls.termsandcondition.value, "", this.selectedColor);

            if (this.reciptform.invalid) {
              console.log(this.reciptform); // this.toastService.openErrorSnackBar("Please fill mandatory fields!!!");

              return false;
            } else {
              var body = {
                companyName: this.isActiveCompanyName,
                companyLogo: this.isActiveCompanyLogo,
                address: this.isActiveCompanyAddress,
                email: this.isActiveCompanyEmail,
                phoneNumber: this.isActiveCompanyNumber,
                companyNameTextSize: this.reciptform.controls.companytextsize.value,
                printTextSize: this.reciptform.controls.printextsize.value,
                termsAndConditions: this.reciptform.controls.termsandcondition.value,
                color: this.selectedColor,
                userId: this.currentUser.id
              };
              this.saleInvoiceService.postreciptprofiledata(body).then(function (res) {
                console.log("res", res);

                if (res) {
                  _this2.toastService.toastMsg({
                    title: "Success",
                    content: "Invoice Profile Data Added Successfully!!!"
                  }); // this.toastService.openSnackBar("Invoice Profile data Added Successfully");


                  _this2.getInvoicesetting();
                }
              }, function (err) {
                _this2.toastService.toastMsg({
                  title: "Error",
                  content: "Please Try Again Later!!!"
                }); // this.toastService.openErrorSnackBar("Please Try Again Later!!!")

              });
            }
          }
        }, {
          key: "updateData",
          value: function updateData() {
            var _this3 = this;

            console.log(this.reciptform.controls.companytextsize.value, "", this.reciptform.controls.printextsize.value, "", this.reciptform.controls.termsandcondition.value, "", this.selectedColor);

            if (this.reciptform.invalid) {
              console.log(this.reciptform);
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              }); // this.toastService.openErrorSnackBar("Please fill mandatory fields!!!");

              return false;
            } else {
              var updatebody = {
                companyName: this.isActiveCompanyName,
                companyLogo: this.isActiveCompanyLogo,
                address: this.isActiveCompanyAddress,
                email: this.isActiveCompanyEmail,
                phoneNumber: this.isActiveCompanyNumber,
                companyNameTextSize: this.reciptform.controls.companytextsize.value,
                printTextSize: this.reciptform.controls.printextsize.value,
                termsAndConditions: this.reciptform.controls.termsandcondition.value,
                color: this.selectedColor,
                userId: this.currentUser.id
              };
              this.saleInvoiceService.updateInvoicesetting(updatebody, this.currentUser.id).then(function (res) {
                console.log("res", res);

                if (res) {
                  _this3.toastService.toastMsg({
                    title: "Success",
                    content: "Invoice Profile Data Updated Successfully!!!"
                  }); // this.toastService.openSnackBar("Invoice Profile data Updated Successfully");


                  _this3.getInvoicesetting();
                }
              }, function (err) {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: "Please Try Again Later!!!"
                }); // this.toastService.openErrorSnackBar("Please Try Again Later!!!")

              });
            }
          }
        }, {
          key: "onPrint",
          value: function onPrint() {
            var printContents = document.getElementById('panel').innerHTML;
            var originalContents = document.body.innerHTML;
            console.log("originalContents", originalContents);
            this.removeScrollbar();
            window.print();
            this.restoreScrollbar();
          }
        }, {
          key: "removeScrollbar",
          value: function removeScrollbar() {
            document.body.style.overflow = 'hidden';
          }
        }, {
          key: "restoreScrollbar",
          value: function restoreScrollbar() {
            document.body.style.overflow = 'auto';
          }
        }, {
          key: "openSalesPreview",
          value: function openSalesPreview() {
            this.openPreview = !this.openPreview;
          }
        }, {
          key: "toggleDisplay",
          value: function toggleDisplay() {
            this.isShown = !this.isShown; // console.log(this.isShown);
            // console.log(this.yearformat);
            // if (this.isShown && this.yearformat == undefined) {
            // 	console.log("inside");
            // 	this.yearformat = " ";
            // 	console.log(this.yearformat);
            // } else if (this.isShown && this.yearformat != undefined) {
            // 	console.log("inside 2nd");
            // 	// if(this.calenderYearformat == this.twoDigitFinancialYear + "-" + (this.twoDigitFinancialYear + 1) 
            // 	// || this.calenderYearformat == this.currentYear 
            // 	// || this.calenderYearformat == this.financialYear)
            // 	// {
            // 		console.log("inside 2nd");
            // 	//this.calenderYearformat = " ";
            // 	this.yearformat = " ";
            // 	console.log(this.yearformat);
            // 	// }
            // }
          }
        }, {
          key: "toggleDisplaym",
          value: function toggleDisplaym() {
            this.isShownm = !this.isShownm; // console.log(this.isShown);
            // if (this.isShown && this.yearformat == undefined) {
            // 	console.log("inside");
            // 	this.monthformat = "";
            // }
          }
          /**
           * Save Invoice Number
           */

        }, {
          key: "postInvoiceNumber",
          value: function postInvoiceNumber() {
            var _this4 = this;

            var data = {
              "userId": this.currentUser.id,
              "calendarType": this.NumberForm.controls.calendarType.value,
              "prefixOne": this.NumberForm.controls.prefixOne.value,
              "prefixTwo": this.NumberForm.controls.prefixTwo.value,
              "seprator1": this.NumberForm.controls.seprator1.value,
              "year": this.NumberForm.controls.year.value,
              "month": this.NumberForm.controls.month.value,
              "yearformat": this.NumberForm.controls.yearformat.value,
              "monthformat": this.NumberForm.controls.monthformat.value,
              "seprator2": this.NumberForm.controls.seprator2.value,
              "numberOfZeros": this.NumberForm.controls.numberOfZeros.value,
              "lastDigit": 1
            };
            this.saleInvoiceService.postInvoiceNumber(data).then(function (res) {
              if (res) {
                _this4.toastService.toastMsg({
                  title: "Success",
                  content: "Invoice Number Added Successfully!!!"
                }); // this.toastService.openSnackBar("Invoice Number Added Successfully")


                _this4.getInvoiceNumber();
              }
            }, function (err) {
              _this4.toastService.toastMsg({
                title: "Error",
                content: "Please Try Again Later!!!"
              }); // this.toastService.openErrorSnackBar("Please Try Again Later!!!")

            });
          }
          /**
           * Update Invoice Number Method
          */

        }, {
          key: "updateInvoiceNumber",
          value: function updateInvoiceNumber() {
            var _this5 = this;

            //this.cdr.detectChanges(); 
            var data = {
              "userId": this.currentUser.id,
              "calendarType": this.NumberForm.controls.calendarType.value,
              "prefixOne": this.NumberForm.controls.prefixOne.value,
              "prefixTwo": this.NumberForm.controls.prefixTwo.value,
              "seprator1": this.NumberForm.controls.seprator1.value,
              "year": this.NumberForm.controls.year.value,
              "month": this.NumberForm.controls.month.value,
              "yearformat": this.NumberForm.controls.yearformat.value,
              "monthformat": this.NumberForm.controls.monthformat.value,
              "seprator2": this.NumberForm.controls.seprator2.value,
              "numberOfZeros": this.NumberForm.controls.numberOfZeros.value,
              "lastDigit": 1
            };
            this.saleInvoiceService.updateInvoiceNumber(data, this.FormatId).then(function (res) {
              if (res) {
                _this5.toastService.toastMsg({
                  title: "Success",
                  content: "Invoice Number Updated Successfully!!!"
                }); // this.toastService.openSnackBar("Invoice Number Updated Succesfully")


                _this5.getInvoiceNumber();
              }
            }, function (err) {
              _this5.toastService.toastMsg({
                title: "Error",
                content: "Please Try Again Later!!!"
              }); // this.toastService.openErrorSnackBar("Please Try Again Later!!!")

            });
          }
          /**
           * get calendar type
           * @param value
           */

        }, {
          key: "calendarType",
          value: function calendarType(value) {
            this.cdr.detectChanges();
            this.calenderMonthformat = "";
            this.calenderYearformat = "";
            this.yearformat = "";
            this.monthformat = "";

            if (value == 'CALENDAR') {
              this.isCalendar = true;
            } else {
              this.isCalendar = false;
            }
          }
          /**
           * get Invoice number
           */

        }, {
          key: "getInvoiceNumber",
          value: function getInvoiceNumber() {
            var _this6 = this;

            this.saleInvoiceService.getInvoiceNumber({}, this.currentUser.id).then(function (res) {
              if (res) {
                _this6.isShowButton = true;
              }

              _this6.FormatId = res.data.id;

              if (res.data.calendarType == 'CALENDAR') {
                _this6.isCalendar = true;
              } else {
                _this6.isCalendar = false;
              }

              if (res.data.year == 'true') {
                _this6.isShown = true;
              } else {
                _this6.isShown = false;
              }

              if (res.data.month == 'true') {
                _this6.isShownm = true;
              } else {
                _this6.isShownm = false;
              }

              _this6.NumberForm.patchValue({
                invoiceNo: res.data.invoiceNo,
                calendarType: res.data.calendarType,
                prefixOne: res.data.prefixOne,
                prefixTwo: res.data.prefixTwo,
                seprator1: res.data.seprator1,
                year: res.data.year,
                month: res.data.month,
                yearformat: res.data.yearformat,
                monthformat: res.data.monthformat,
                seprator2: res.data.seprator2,
                numberOfZeros: res.data.numberOfZeros,
                lastDigit: res.data.lastDigit
              });

              _this6.lastDigit = res.data.lastDigit;
              _this6.calenderYearformat = res.data.yearformat;

              if (_this6.calenderYearformat == "YYYY-YYYY") {
                _this6.yearformat = _this6.financialYear;
              } else if (_this6.calenderYearformat == "YYYY") {
                _this6.yearformat = _this6.currentYear;
              } else if (_this6.calenderYearformat = "YY-YY") {
                _this6.yearformat = _this6.twoDigitFinancialYear + "-" + (_this6.twoDigitFinancialYear + 1);
              }

              _this6.calenderMonthformat = res.data.monthformat;

              if (_this6.calenderMonthformat == "MMM") {
                _this6.monthformat = _this6.monthShortName;
              } else if (_this6.calenderMonthformat == "MM") {
                _this6.monthformat = _this6.monthNumber;
              }
            }, function (error) {
              if (error.error.status == 404) {
                _this6.isShowButton = false;
              }
            }); //this.cdr.detectChanges(); 
          }
          /**
           * get Invoice setting
           */

        }, {
          key: "getInvoicesetting",
          value: function getInvoicesetting() {
            var _this7 = this;

            this.saleInvoiceService.getInvoicesetting({}, this.currentUser.id).then(function (res) {
              if (res) {
                _this7.listdata = res.data;

                if (_this7.listdata.length > 0) {
                  _this7.isShowButtonsetting = true;
                  console.log("patch value kar be");

                  _this7.reciptform.patchValue({
                    companytextsize: res.data[0].companyNameTextSize,
                    printextsize: res.data[0].printTextSize,
                    termsandcondition: res.data[0].termsAndConditions
                  });

                  _this7.isActiveCompanyName = res.data[0].companyName;
                  _this7.isActiveCompanyLogo = res.data[0].companyLogo;
                  _this7.isActiveCompanyAddress = res.data[0].address;
                  _this7.isActiveCompanyEmail = res.data[0].email;
                  _this7.isActiveCompanyNumber = res.data[0].phoneNumber;
                  _this7.selectedColor = res.data[0].color;
                } else {
                  console.log("data not save");
                  _this7.isShowButtonsetting = false;
                }
              }
            }, function (error) {
              if (error.error.status == 404) {
                _this7.isShowButtonsetting = false;
              }
            }); //this.cdr.detectChanges(); 
          }
          /**
           * get & set no of zeroes
           * @param event
           */

        }, {
          key: "getNoOfZeros",
          value: function getNoOfZeros(event) {
            if (event == 1) {
              this.numberOfZeros = "0";
            } else if (event == 2) {
              this.numberOfZeros = "00";
            } else if (event == 3) {
              this.numberOfZeros = "000";
            } else if (event == 4) {
              this.numberOfZeros = "0000";
            } else if (event == 5) {
              this.numberOfZeros = "00000";
            } else if (event == 6) {
              this.numberOfZeros = "000000";
            } else if (event == 7) {
              this.numberOfZeros = "0000000";
            } else if (event == 8) {
              this.numberOfZeros = "00000000";
            }

            this.cdr.detectChanges();
            console.log("Number of zeroes", this.numberOfZeros);
          }
        }, {
          key: "getMonthFormat",
          value: function getMonthFormat(monthType) {
            if (monthType == "MMM") {
              this.monthformat = this.monthShortName;
            } else if (monthType == "MM") {
              this.monthformat = this.monthNumber;
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "getYearFormat",
          value: function getYearFormat(yearType) {
            if (yearType == "YYYY-YYYY") {
              this.yearformat = this.financialYear;
            } else if (yearType == "YYYY") {
              this.yearformat = this.currentYear;
            } else if (yearType = "YY-YY") {
              this.yearformat = this.twoDigitFinancialYear + "-" + (this.twoDigitFinancialYear + 1);
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "postMailSetipdata",
          value: function postMailSetipdata() {
            var _this8 = this;

            this.submitted = true;

            if (this.eamilSetupForm.invalid) {
              console.log(this.reciptform);
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              }); // this.toastService.openErrorSnackBar("Please fill mandatory fields!!!");

              return false;
            } else {
              var body = {
                "mailPassword": this.eamilSetupForm.controls.mailPassword.value,
                "mailService": this.eamilSetupForm.controls.mailService.value,
                "mailHost": this.eamilSetupForm.controls.mailHost.value,
                "mailPort": this.eamilSetupForm.controls.mailPort.value,
                "userId": this.currentUser.id
              };
              this.emailService.postEmailSetup(body).then(function (res) {
                _this8.toastService.toastMsg({
                  title: "Success",
                  content: "Email Setup Added Successfully!!!"
                }); // this.toastService.openSnackBar("Eamil Setup Added Successfully")

              }, function (err) {
                if (err.error.expose) {
                  _this8.toastService.toastMsg({
                    title: "Error",
                    content: _this8.titleCasePipe.transform(err.error.error_message)
                  }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

                } else {
                  _this8.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went To Wrong"
                  }); // this.toastService.openErrorSnackBar("Something Went To Wrong");

                }
              });
            }
          }
        }, {
          key: "updateMailSetipdata",
          value: function updateMailSetipdata() {}
        }]);

        return _InvoiceReceiptUIComponent;
      }();

      _InvoiceReceiptUIComponent.ɵfac = function InvoiceReceiptUIComponent_Factory(t) {
        return new (t || _InvoiceReceiptUIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_0__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_email_setup_service_service__WEBPACK_IMPORTED_MODULE_2__.EmailSetupServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe));
      };

      _InvoiceReceiptUIComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InvoiceReceiptUIComponent,
        selectors: [["app-invoice-receipt-ui"]],
        viewQuery: function InvoiceReceiptUIComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dynamicText = _t.first);
          }
        },
        decls: 498,
        vars: 162,
        consts: [[1, "bg-white"], ["id", "headingPrintHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "formButtons", "mx-0"], ["style", "float: right !important;", "type", "submit", "class", "btn btn-save", 3, "click", 4, "ngIf"], [1, "row"], ["id", "headingPrintHide", 1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], ["id", "accordionPanelsStayOpenExample", 1, "accordion", "m-1"], [1, "accordion-item", "m-1"], ["id", "panelsStayOpen-headingOne", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseOne", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseOne", 1, "accordion-button", "text-black", 3, "ngClass"], [1, "dropdownLabel"], ["id", "panelsStayOpen-collapseOne", "aria-labelledby", "panelsStayOpen-headingOne", "data-bs-parent", "#accordionPanelsStayOpenExample", 1, "accordion-collapse", "collapse", 3, "ngClass"], [1, "accordion-body"], [1, "color-circle-container", "m-3"], ["class", "color-circle m-1", 3, "background", "click", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["id", "accordionPanelsStayOpenTWOExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingTwo", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseTwo", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseTwo", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseTwo", "aria-labelledby", "panelsStayOpen-headingTwo", "data-bs-parent", "#accordionPanelsStayOpenTWOExample", 1, "accordion-collapse", "collapse"], [1, "card-body", "companyData"], [1, "row", "mb-2"], [1, "col-6"], [1, "companyInfo"], [1, "form-check", "form-switch", "mb-0", 2, "float", "right !important"], ["id", "customSwitch1", "type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "row", "companyFormLabel", "mb-2"], [1, "flex-item", "companyInfo"], [1, "flex-item", "options"], ["appearance", "outline", 1, "example-full-width", 2, "margin-bottom", "-13px", "font-size", "14px"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "companytextsize", 3, "ngModel", "ngClass", "ngModelChange"], ["value", "Large"], ["value", "Medium"], ["value", "Small"], [1, "pt-4"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "printextsize", 3, "ngModel", "ngClass", "ngModelChange"], ["id", "accordionPanelsStayOpenThreeExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingThree", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseThree", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseThree", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseThree", "aria-labelledby", "panelsStayOpen-headingThree", "data-bs-parent", "#accordionPanelsStayOpenThreeExample", 1, "accordion-collapse", "collapse"], [1, "row", "mb-5"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], ["appearance", "outline", 1, "example-full-width", 2, "margin-bottom", "-13px", "font-size", "11px"], ["matInput", "", "rows", "3", "placeholder", "Terms And Conditions", "formControlName", "termsandcondition", "autocomplete", "off", 3, "ngClass"], ["class", "text-dange", 4, "ngIf"], ["id", "accordionPanelsStayOpenFourExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingFour", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseFour", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseFour", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseFour", "aria-labelledby", "panelsStayOpen-headingFour", "data-bs-parent", "#accordionPanelsStayOpenFourExample", 1, "accordion-collapse", "collapse"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12", "companyData", "p-3"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12", "companyData", "p-5", 2, "border", "2px dashed rgb(15, 145, 197) !important"], [1, ""], [1, "bi", "bi-plus-lg", "fs--1"], ["type", "file", "name", "file", "accept", "image/*", "hidden", ""], ["fileInput", ""], ["id", "accordionPanelsStayOpenFiveExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingFive", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseFive", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseFive", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseFive", "aria-labelledby", "panelsStayOpen-headingFive", "data-bs-parent", "#accordionPanelsStayOpenFiveExample", 1, "accordion-collapse", "collapse"], ["id", "accordionPanelsStayOpenSixExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingSix", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseSix", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseSix", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseSix", "aria-labelledby", "panelsStayOpen-headingSix", "data-bs-parent", "#accordionPanelsStayOpenSixExample", 1, "accordion-collapse", "collapse"], [1, "card-body", "fs--1"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-3", "mt-2", "mb-3"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matNativeControl", "", "autocomplete", "off", "formControlName", "prefixOne", "required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "seprator1", "required", "", 3, "ngModel", "ngModelChange"], ["value", "."], ["value", "/"], ["value", "-"], ["value", " "], ["matNativeControl", "", "autocomplete", "off", "formControlName", "prefixTwo", "required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "seprator2", "required", "", 3, "ngModel", "ngModelChange"], [2, "font-size", "14px", "font-family", "Poppins", "font-weight", "500", "margin-left", "5px"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-6", "mb-3"], [1, "form-label", "text-nowrap"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "formControlName", "calendarType", 3, "ngModel", "ngModelChange", "change"], ["value", "FINANCIAL"], ["value", "CALENDAR"], [1, "d-flex", "justify-content-start", "ms-2"], [1, "text-nowrap"], [1, "form-check", "form-switch"], ["formControlName", "year", "id", "inlineCheckbox1", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "click"], ["for", "inlineCheckbox1", 1, "form-check-label", 2, "margin-top", "-18px"], ["formControlName", "month", "id", "inlineCheckbox1", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "click"], ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3", 3, "hidden", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "mb-3"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "numberOfZeros", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], [1, "row", "col-md-6"], [1, "card-footer"], ["class", "col-12 d-flex p-2 justify-content-end", 4, "ngIf"], ["id", "accordionPanelsStayOpenSevenExample", 1, "accordion", "m-1", "mb-3"], ["id", "panelsStayOpen-headingSeven", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseSeven", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseSeven", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseSeven", "aria-labelledby", "panelsStayOpen-headingSeven", "data-bs-parent", "#accordionPanelsStayOpenSevenExample", 1, "accordion-collapse", "collapse"], [1, "col-lg-12", "col-xl-6"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Password", "formControlName", "mailPassword", "autocomplete", "off", 3, "ngClass"], ["class", "text-danger mb-1", 4, "ngIf"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Service", "formControlName", "mailService", "autocomplete", "off", 3, "ngClass"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Hoat", "formControlName", "mailHost", "autocomplete", "off", 3, "ngClass"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Port", "formControlName", "mailPort", "autocomplete", "off", 3, "ngClass"], [1, "col-12", "d-flex", "p-3", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", 2, "margin-left", "10px", 3, "click"], [1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], [1, "container", "m-3"], [1, "card"], ["id", "panel", 1, "row", "my-2"], [4, "ngIf"], [3, "color", "fontSize", 4, "ngIf"], [3, "fontSize", 4, "ngIf"], [1, "row", "headerAlignment"], [1, "col-6", 2, "font-weight", "600"], ["id", "printPageButton", "type", "button", 1, "btn", "btn-falcon-default", "btn-sm", "mb-sm-0", 2, "float", "right", "font-size", "14px !important", "padding-right", "0px !important", 3, "click"], [1, "fas", "fa-print", "me-1"], ["dynamicText", ""], [2, "float", "right"], [1, "col-6", 2, "text-align", "end"], [1, "row", "mt-2", "mb-4"], [2, "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], [1, "inner-model-table-heading", "p-2", "my-2", 2, "width", "100px", "font-weight", "600"], [2, "font-weight", "600"], [1, "row", "table-responsive", "scrollbar", "fs--1", 2, "padding", "0px 10px"], [1, "table", "tablePrint", 2, "font-size", "11px!important"], [1, "inner-model-table-heading", "printHead"], [1, "text-white"], [1, "borderedTopNone", 2, "text-align", "left"], [1, "borderedTopNone", 2, "text-align", "left", "width", "20rem"], [1, "borderedTopNone", 2, "text-align", "right"], [1, "printBody", 2, "max-height", "200px"], [1, "bordered", 2, "text-align", "left"], [1, "bordered", 2, "text-align", "right"], [1, "bordered", 2, "text-align", "right", "white-space", "nowrap"], [2, "font-size", "10px"], [1, "inner-model-table-heading", "printFoot"], [1, "bordered"], [1, "bordered", 2, "text-align", "right", "font-weight", "600"], [1, "row", "my-2"], [1, "col-6", 2, "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], [1, "mb-1", "mt-2", 2, "visibility", "hidden", "font-weight", "600"], [2, "visibility", "hidden"], [1, "mb-1", "mt-5", 2, "font-weight", "600"], [1, "row", "headerAlignment", "mt-2"], [1, "row", "headerAlignment", "mt-1"], [1, "col-6", 2, "text-align", "end", "font-weight", "600"], [1, "row", "headerAlignment", "mt-3"], [2, "text-align", "end"], [1, "mb-0"], ["type", "submit", 1, "btn", "btn-save", 2, "float", "right !important", 3, "click"], [1, "color-circle", "m-1", 3, "click"], [1, "text-danger"], [1, "text-dange"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "mb-3", 3, "hidden"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "yearformat", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "YYYY"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "monthformat", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "MM"], ["value", "YY-YY"], ["value", "YYYY-YYYY"], ["value", "MMM"], [1, "col-12", "d-flex", "p-2", "justify-content-end"], ["type", "submit", 1, "btn", "btn-outline-primary", 2, "margin-left", "10px", 3, "click"], [1, "text-danger", "mb-1"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt-blue.png", "alt", "", "width", "42", 1, "me-2"]],
        template: function InvoiceReceiptUIComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InvoiceReceiptUIComponent_button_3_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, InvoiceReceiptUIComponent_button_4_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Select Colours");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, InvoiceReceiptUIComponent_div_17_Template, 1, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Company Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Company Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_34_listener($event) {
              return ctx.toggleCheckboxCompanyName($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Company Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_41_listener($event) {
              return ctx.toggleCheckboxCompanyLogo($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_48_listener($event) {
              return ctx.toggleCheckboxCompanyAddress($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_55_listener($event) {
              return ctx.toggleCheckboxCompanyEmail($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_62_listener($event) {
              return ctx.toggleCheckboxCompanyNumber($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Company Name Text Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_68_listener($event) {
              return ctx.selectedTextSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, InvoiceReceiptUIComponent_mat_error_76_Template, 2, 1, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Print Text Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_82_listener($event) {
              return ctx.TextSizeprint = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, InvoiceReceiptUIComponent_mat_error_90_Template, 2, 1, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Terms And Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "mat-form-field", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "textarea", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, InvoiceReceiptUIComponent_mat_error_104_Template, 2, 0, "mat-error", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h4", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Upload Signature from Desktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Add Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "input", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "h4", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Printer Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "h4", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Invoice Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Prefix 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_149_listener($event) {
              return ctx.prefixOne = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Seprator 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "mat-select", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_154_listener($event) {
              return ctx.seprator1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "mat-option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "mat-option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "mat-option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Prefix 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "input", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_166_listener($event) {
              return ctx.prefixTwo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Seprator 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "mat-select", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_171_listener($event) {
              return ctx.seprator2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "mat-option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "mat-option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "mat-option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "h5", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Select Type of Calender");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "label", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Calendar Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "mat-select", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_186_listener($event) {
              return ctx.calendarTypeTxt = $event;
            })("change", function InvoiceReceiptUIComponent_Template_mat_select_change_186_listener($event) {
              return ctx.calendarType($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "mat-option", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Financial");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "mat-option", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Calender");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Add Year: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_197_listener($event) {
              return ctx.year = $event;
            })("click", function InvoiceReceiptUIComponent_Template_input_click_197_listener() {
              return ctx.toggleDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "p", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Add Month: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "input", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_205_listener($event) {
              return ctx.month = $event;
            })("click", function InvoiceReceiptUIComponent_Template_input_click_205_listener() {
              return ctx.toggleDisplaym();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](209, InvoiceReceiptUIComponent_div_209_Template, 7, 3, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](210, InvoiceReceiptUIComponent_div_210_Template, 7, 3, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](211, InvoiceReceiptUIComponent_div_211_Template, 9, 3, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](212, InvoiceReceiptUIComponent_div_212_Template, 7, 3, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "h5", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Serial Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "label", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "Number Of Zeros");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "mat-form-field", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "mat-select", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_220_listener($event) {
              return ctx.numberOfZeros = $event;
            })("change", function InvoiceReceiptUIComponent_Template_mat_select_change_220_listener($event) {
              return ctx.getNoOfZeros($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "mat-option", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "mat-option", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "mat-option", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "mat-option", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "mat-option", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "mat-option", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "mat-option", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "mat-option", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "b", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](243, InvoiceReceiptUIComponent_div_243_Template, 3, 0, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](244, InvoiceReceiptUIComponent_div_244_Template, 3, 0, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "h4", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "button", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Mail Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Mail Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "mat-form-field", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "input", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](263, InvoiceReceiptUIComponent_mat_error_263_Template, 2, 0, "mat-error", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Mail Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "mat-form-field", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](270, "input", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](271, InvoiceReceiptUIComponent_mat_error_271_Template, 2, 0, "mat-error", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Mail Host");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "mat-form-field", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](279, "input", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](280, InvoiceReceiptUIComponent_mat_error_280_Template, 2, 0, "mat-error", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Mail Port");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "mat-form-field", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](287, "input", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](288, InvoiceReceiptUIComponent_mat_error_288_Template, 2, 0, "mat-error", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "button", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_Template_button_click_291_listener() {
              return ctx.postMailSetipdata();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](299, InvoiceReceiptUIComponent_p_299_Template, 2, 0, "p", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](300, InvoiceReceiptUIComponent_p_300_Template, 3, 4, "p", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](301, InvoiceReceiptUIComponent_p_301_Template, 3, 2, "p", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](302, InvoiceReceiptUIComponent_p_302_Template, 3, 2, "p", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](303, InvoiceReceiptUIComponent_p_303_Template, 3, 2, "p", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, " TAX INVOICE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "button", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_Template_button_click_309_listener() {
              return ctx.onPrint();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "span", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "Print ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, " Invoice No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "span", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, " ss/23-24Jul/23 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, " Invoice Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "span", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, " 6 Sept 2023 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, " Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "span", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, " NA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "div", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "BILL TO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "span", 135, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "Customer Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "Customer Billing Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "Mobile: \xA0xxxxxxxx52 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "GSTIN: \xA016AABCU9603R1ZQ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, "State: \xA0 Maharastra ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "SHIP TO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "span", 135, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](365, "Customer Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, "Customer Shipping Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "table", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "thead", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "tr", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "th", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "th", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "ITEMS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "th", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](378, "HSN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "th", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "QTY.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "th", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "RATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "th", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "TAX");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "th", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](386, "AMOUNT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "tbody", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "td", 144, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "td", 144, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, " MOBILE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "td", 145, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "155125");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "td", 146, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](400, "1 (BOX) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "td", 145, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](403, " \u20B9\xA04958.18 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "td", 145, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, " \u20B9\xA0495.82 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "span", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408, "(10%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "td", 145, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "tfoot", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](414, "td", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "th", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "SUBTOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](417, "td", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](418, "td", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](419, "td", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](420, "td", 150, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](422, " \u20B9\xA0495.82 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "td", 150, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "div", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "span", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, "NOTES");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "span", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](431, "Sample Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "span", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](433, "TERMS AND CONDITIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, "1. Goods once sold will not be taken back or exchanged.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](439, "2. All disputes are subject to your respective city jurisdiction only.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](440, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](444, " TAXABLE AMOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, " \u20B9\xA04958.18 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "div", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, " CGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "div", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](458, " SGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](461, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "div", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "div", 22, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](465, " IGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, " \u20B9\xA0495.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](469, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, " TOTAL AMOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](473, "div", 158, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](476, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "div", 157, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, " Received Amount ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](483, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](484, "div", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "div", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](486, " Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](487, "div", 131, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](489, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "div", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "div", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "p", 161, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Total Amounts (in words)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "span", null, 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](497, "Five Thousand Four Hundred Fifty Four Rupees Only");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](144, _c1, !ctx.isDropdownOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](146, _c2, ctx.isDropdownOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reciptform);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isActiveCompanyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isActiveCompanyLogo);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isActiveCompanyAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isActiveCompanyEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isActiveCompanyNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedTextSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](148, _c3, ctx.f.companytextsize.invalid && ctx.f.companytextsize.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.companytextsize.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.TextSizeprint)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](150, _c3, ctx.f.printextsize.invalid && ctx.f.printextsize.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.printextsize.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](152, _c3, ctx.f.termsandcondition.invalid && ctx.f.termsandcondition.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.termsandcondition.touched) && (ctx.f.termsandcondition.errors == null ? null : ctx.f.termsandcondition.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.NumberForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.prefixOne);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.seprator1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.prefixTwo);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.seprator2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.calendarTypeTxt);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.month);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.numberOfZeros);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate8"](" Preview - ", ctx.prefixOne, " ", ctx.prefixTwo, " ", ctx.seprator1, " ", ctx.yearformat, " ", ctx.monthformat, " ", ctx.seprator2, " ", ctx.numberOfZeros, " ", ctx.lastDigit, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isShowButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eamilSetupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](154, _c3, ctx.m.mailPassword.invalid && ctx.m.mailPassword.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailPassword.touched) && (ctx.m.mailPassword.errors == null ? null : ctx.m.mailPassword.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](156, _c3, ctx.m.mailService.invalid && ctx.m.mailService.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailService.touched) && (ctx.m.mailService.errors == null ? null : ctx.m.mailService.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](158, _c3, ctx.m.mailHost.invalid && ctx.m.mailHost.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailHost.touched) && (ctx.m.mailHost.errors == null ? null : ctx.m.mailHost.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](160, _c3, ctx.m.mailPort.invalid && ctx.m.mailPort.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailPort.touched) && (ctx.m.mailPort.errors == null ? null : ctx.m.mailPort.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyLogo == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyName == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyAddress == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyEmail == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyNumber == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: ["body[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.color-circle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.color-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin: 5px;\n  cursor: pointer;\n}\n\n.companyData[_ngcontent-%COMP%] {\n  border: 1px solid #c1c2b8;\n}\n\n.add-signature-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.signature-upload[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: 220px;\n  height: 120px;\n  border: 2px dashed #0f91c5;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.signature-img[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.signature-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  color: #0f91c5;\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.signature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.signature-img[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n#originalForReceiptPrint[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.headerAlignment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.printHead[_ngcontent-%COMP%], .printBody[_ngcontent-%COMP%], .printFoot[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  font-size: 14px !important;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.dropdownLabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.companyInfo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-basis: 200px;\n  white-space: nowrap;\n}\n\n.options[_ngcontent-%COMP%] {\n  flex-basis: 200px;\n}\n\n.companyFormLabel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UtcmVjZWlwdC11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlFO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7QUFGSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFPQTtFQUNFO0lBQ0UsdUJBQUE7RUFKRjtBQUNGOztBQVNBO0VBQ0UsZUFBQTtBQVBGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFURiIsImZpbGUiOiJpbnZvaWNlLXJlY2VpcHQtdWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY29sb3ItY2lyY2xlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sb3ItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jb21wYW55RGF0YXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICByZ2JhKDE5MywgMTk0LCAxODQsIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIHNpZ25hdHVyZVxyXG4gIC5hZGQtc2lnbmF0dXJlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25hdHVyZS11cGxvYWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4uc2lnbmF0dXJlLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lnbmF0dXJlLWltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigxNSwgMTQ1LCAxOTcpO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbi5zaWduYXR1cmUtaW1nIGltZy5sb2FkZWQge1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuICAuc2lnbmF0dXJlLWltZyBpIHtcclxuICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IHJnYigxNSwgMTQ1LCAxOTcpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25hdHVyZS1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuc2lnbmF0dXJlLWltZyBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIGkge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi8vIE5ldyBEZXNpZ24gZm9yIHRhYmxlIHByaW50XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jb3JpZ2luYWxGb3JSZWNlaXB0UHJpbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJBbGlnbm1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpbnRIZWFkLCAucHJpbnRCb2R5LCAucHJpbnRGb290IHtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IGZvciBidXR0b25zIGFuZCBzZWFyY2ggYmFyLlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5oZWFkZXJCdXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGVmdCBTaWRlIG9mIHBhZ2UuXHJcblxyXG4uZHJvcGRvd25MYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vLyBDb21wYW55IEluZm9cclxuXHJcbi5jb21wYW55SW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsZXgtYmFzaXM6IDIwMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBmbGV4LWJhc2lzOiAyMDBweDtcclxufVxyXG5cclxuLmNvbXBhbnlGb3JtTGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    87994:
    /*!*************************************************************!*\
      !*** ./src/app/pages/setting-module/main/main.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _MainComponent = /*#__PURE__*/function () {
        function _MainComponent() {
          _classCallCheck(this, _MainComponent);
        }

        _createClass(_MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainComponent;
      }();

      _MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)();
      };

      _MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainComponent,
        selectors: [["app-main"]],
        decls: 11,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "px-3", "pt-3"], ["id", "navPanel", "id", "headingPrintHide", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./invoice_generate", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Invoice Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [".navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 40px !important;\n}\n\n#download[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.component-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.navOptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  font-size: 1.1em;\n  font-weight: bold !important;\n  transition-duration: 0.5s;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #FC7643;\n  border: 2px solid #FC7643;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  z-index: 1;\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n  }\n}\n\n@media (max-width: 992px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 18%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 28%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n    margin-top: -16%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 35%;\n    margin-top: -16%;\n  }\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUg1Qzs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFHRTtFQUNFLFdBQUE7QUFKSjs7QUF3QkE7RUFDSSxzQkFBQTtBQXJCSjs7QUE0QkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtBQTFCSjs7QUE2QkE7RUFFSSxZQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEzQko7O0FBNENBO0VBQ0k7SUFDSSxnQkFBQTtFQXpDTjtBQUNGOztBQTRDQTtFQUNJO0lBQ0ksZ0JBQUE7RUExQ047QUFDRjs7QUE2Q0U7RUFDRTtJQUNJLGdCQUFBO0VBM0NOO0FBQ0Y7O0FBOENBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBNUNOO0FBQ0Y7O0FBK0NBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBN0NOO0FBQ0Y7O0FBZ0RBO0VBQ0ksYUFBQTtBQTlDSjs7QUFpREE7RUFDSSxtQkFBQTtFQUFxQiwrQ0FBQTtBQTdDekI7O0FBZ0RBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTlDSjs7QUFpREE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUE5Q0oiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZPcHRpb24tYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Rvd25sb2Fke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuIHtcclxuICAvLyAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgd2lkdGg6IDQwcHg7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogODElO1xyXG4gIC8vICAgbWFyZ2luLXRvcDogLTE0JTtcclxuICAvLyAgIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgb3BhY2l0eTogMC43O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuOmhvdmVyIHtcclxuICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgLy8gfVxyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbi8vIC5uYXZPcHRpb25zIHAge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbi8vIH1cclxuXHJcbi5uYXZPcHRpb25zIHA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBkZWxheSAwLjMgc2Vjb25kcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXNcclxufVxyXG5cclxuLm5hdk9wdGlvbnMge1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyAuYnRue1xyXG4gICAgY29sb3I6ICNGQzc2NDM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM3NjQzO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIC5hY3RpdmUtbGlua3tcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZDNzY0MztcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6OmFmdGVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY3VzdG9tLWRpYWxvZy1QYXJ0eS1jbGFzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgaWNvbidzIHdpZHRoICovXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2T3B0aW9uLWJ0bnMgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    24261:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/setting-module/setting-module-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingModuleRoutingModule": function SettingModuleRoutingModule() {
          return (
            /* binding */
            _SettingModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      87994);
      /* harmony import */


      var _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice-receipt-ui/invoice-receipt-ui.component */
      87358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [{
          path: '',
          redirectTo: 'invoice_generate',
          pathMatch: 'full'
        }, {
          path: "invoice_generate",
          component: _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceReceiptUIComponent
        }]
      }];

      var _SettingModuleRoutingModule = /*#__PURE__*/_createClass(function _SettingModuleRoutingModule() {
        _classCallCheck(this, _SettingModuleRoutingModule);
      });

      _SettingModuleRoutingModule.ɵfac = function SettingModuleRoutingModule_Factory(t) {
        return new (t || _SettingModuleRoutingModule)();
      };

      _SettingModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _SettingModuleRoutingModule
      });
      _SettingModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_SettingModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    96575:
    /*!***************************************************************!*\
      !*** ./src/app/pages/setting-module/setting-module.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingModuleModule": function SettingModuleModule() {
          return (
            /* binding */
            _SettingModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./setting-module-routing.module */
      24261);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      87994);
      /* harmony import */


      var _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice-receipt-ui/invoice-receipt-ui.component */
      87358);
      /* harmony import */


      var _invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice-number/invoice-number.component */
      66200);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SettingModuleModule = /*#__PURE__*/_createClass(function _SettingModuleModule() {
        _classCallCheck(this, _SettingModuleModule);
      });

      _SettingModuleModule.ɵfac = function SettingModuleModule_Factory(t) {
        return new (t || _SettingModuleModule)();
      };

      _SettingModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _SettingModuleModule
      });
      _SettingModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingModuleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_SettingModuleModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceReceiptUIComponent, _invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_3__.InvoiceNumberComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingModuleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_setting-module_setting-module_module_ts-es5.js.map