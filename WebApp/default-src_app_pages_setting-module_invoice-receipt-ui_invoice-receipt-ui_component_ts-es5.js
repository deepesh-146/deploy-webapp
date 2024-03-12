(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["default-src_app_pages_setting-module_invoice-receipt-ui_invoice-receipt-ui_component_ts"], {
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


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/profile.service */
      44687);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_email_setup_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/email-setup-service.service */
      80506);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      var _c0 = ["dynamicText"];

      function InvoiceReceiptUIComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r62.saveData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r64.updateData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_17_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);

            var color_r66 = restoredCtx.$implicit;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r67.selectColor(color_r66);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", color_r66);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_76_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Company Name Text Size is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InvoiceReceiptUIComponent_mat_error_76_mat_error_1_Template, 2, 0, "mat-error", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.companytextsize.errors == null ? null : ctx_r3.f.companytextsize.errors.required);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_90_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Print Text Size is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InvoiceReceiptUIComponent_mat_error_90_mat_error_1_Template, 2, 0, "mat-error", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.printextsize.errors == null ? null : ctx_r4.f.printextsize.errors.required);
        }
      }

      function InvoiceReceiptUIComponent_mat_error_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Terms And Conditions is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_img_124_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function InvoiceReceiptUIComponent_img_124_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r71.signatureLoad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("loaded", ctx_r6.imageLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r6.signImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function InvoiceReceiptUIComponent_button_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_button_127_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r73.deleteSignature();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_211_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter Year (YYYY)");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_211_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r75.yearformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_211_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r77.getYearFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_211_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r78.calenderYearformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "YYYY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r9.isShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r9.yearformat)("ngModel", ctx_r9.calenderYearformat);
        }
      }

      function InvoiceReceiptUIComponent_div_212_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter Month (MM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_212_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r79.monthformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_212_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r81.getMonthFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_212_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r82.calenderMonthformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "MM");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r10.isShownm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.monthformat)("ngModel", ctx_r10.calenderMonthformat);
        }
      }

      function InvoiceReceiptUIComponent_div_213_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter Year (YYYY-YYYY)");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_213_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r83.yearformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_213_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r85.getYearFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_213_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r86.calenderYearformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "YY-YY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-option", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "YYYY-YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r11.isShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.yearformat)("ngModel", ctx_r11.calenderYearformat);
        }
      }

      function InvoiceReceiptUIComponent_div_214_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter Month (MMM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_div_214_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r87.monthformat = $event;
          })("change", function InvoiceReceiptUIComponent_div_214_Template_mat_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r89.getMonthFormat($event.target.value);
          })("ngModelChange", function InvoiceReceiptUIComponent_div_214_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r90.calenderMonthformat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "MMM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r12.isShownm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r12.monthformat)("ngModel", ctx_r12.calenderMonthformat);
        }
      }

      function InvoiceReceiptUIComponent_div_245_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_245_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r92);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r91.postInvoiceNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_div_246_Template(rf, ctx) {
        if (rf & 1) {
          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_div_246_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r93.updateInvoiceNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_265_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mail Password required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_273_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mail Service required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_282_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mail Host required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_mat_error_290_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Mail Port required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_p_301_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoiceReceiptUIComponent_p_302_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", null, 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Trade Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r20.selectedColor)("font-size", ctx_r20.getTextSize(ctx_r20.selectedTextSize), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_303_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", null, 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Gokhalenagar, Pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx_r21.getTextSizeprint(ctx_r21.TextSizeprint), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_304_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", null, 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Email:\xA0 abc@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx_r22.getTextSizeprint(ctx_r22.TextSizeprint), "px");
        }
      }

      function InvoiceReceiptUIComponent_p_305_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", null, 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Mobile:\xA0 8975632410");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx_r23.getTextSizeprint(ctx_r23.TextSizeprint), "px");
        }
      }

      function InvoiceReceiptUIComponent_img_498_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 187);
        }

        if (rf & 2) {
          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r61.signImg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
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
        function _InvoiceReceiptUIComponent(cdr, formBuilder, profileService, saleInvoiceService, commonService, route, toastService, emailService, titleCasePipe) {
          _classCallCheck(this, _InvoiceReceiptUIComponent);

          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.profileService = profileService;
          this.saleInvoiceService = saleInvoiceService;
          this.commonService = commonService;
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
          this.isShown = false;
          this.isShownm = false;
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
          this.signImg = '';
          this.loaded = false;
          this.imageLoaded = false;
          this.dragging = false;
          this.isProfilePicSelects = false;
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
            var _this2 = this;

            this.invoiceTermsCon = localStorage.getItem('termsAndConditions');
            this.commonService.rowAdded$.subscribe(function () {
              _this2.getProfileData();
            });
            this.getProfileData();
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
              termsandcondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              companytextsize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              printextsize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
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
            var _this3 = this;

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
                userId: this.currentUser.id,
                addSignature: this.signImg
              };
              this.saleInvoiceService.postreciptprofiledata(body).then(function (res) {
                console.log("res", res);

                if (res) {
                  _this3.toastService.toastMsg({
                    title: "Success",
                    content: "Invoice Profile Data Added Successfully!!!"
                  }); // this.toastService.openSnackBar("Invoice Profile data Added Successfully");


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
          key: "updateData",
          value: function updateData() {
            var _this4 = this;

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

              if (this.isProfilePicSelects) {
                updatebody["addSignature"] = this.signImg;
              }

              this.saleInvoiceService.updateInvoicesetting(updatebody, this.currentUser.id).then(function (res) {
                console.log("res", res);

                if (res) {
                  _this4.toastService.toastMsg({
                    title: "Success",
                    content: "Invoice Profile Data Updated Successfully!!!"
                  }); // this.toastService.openSnackBar("Invoice Profile data Updated Successfully");


                  _this4.getInvoicesetting();
                }
              }, function (err) {
                _this4.toastService.toastMsg({
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
            this.isShown = !this.NumberForm.value.year;
          }
        }, {
          key: "toggleDisplaym",
          value: function toggleDisplaym() {
            this.isShownm = !this.NumberForm.value.month;
          }
          /**s
           * Save Invoice Number
           */

        }, {
          key: "postInvoiceNumber",
          value: function postInvoiceNumber() {
            var _this5 = this;

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
                _this5.toastService.toastMsg({
                  title: "Success",
                  content: "Invoice Number Added Successfully!!!"
                }); // this.toastService.openSnackBar("Invoice Number Added Successfully")


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
           * Update Invoice Number Method
          */

        }, {
          key: "updateInvoiceNumber",
          value: function updateInvoiceNumber() {
            var _this6 = this;

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
                _this6.toastService.toastMsg({
                  title: "Success",
                  content: "Invoice Number Updated Successfully!!!"
                }); // this.toastService.openSnackBar("Invoice Number Updated Succesfully")


                _this6.getInvoiceNumber();
              }
            }, function (err) {
              _this6.toastService.toastMsg({
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
            var _this7 = this;

            this.saleInvoiceService.getInvoiceNumber({}, this.currentUser.id).then(function (res) {
              if (res) {
                _this7.isShowButton = true;
              }

              _this7.FormatId = res.data.id;

              if (res.data.calendarType == 'CALENDAR') {
                _this7.isCalendar = true;
              } else {
                _this7.isCalendar = false;
              }

              if (res.data.year == true) {
                _this7.isShown = true;
              } else {
                _this7.isShown = false;
              }

              if (res.data.month == true) {
                _this7.isShownm = true;
              } else {
                _this7.isShownm = false;
              }

              _this7.NumberForm.patchValue({
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

              _this7.termsAndConditions = res.data[0].termsAndConditions;
              _this7.invoiceTermsCon = localStorage.getItem('termsAndConditions');
              _this7.lastDigit = res.data.lastDigit;
              _this7.calenderYearformat = res.data.yearformat;

              if (_this7.calenderYearformat == "YYYY-YYYY") {
                _this7.yearformat = _this7.financialYear;
              } else if (_this7.calenderYearformat == "YYYY") {
                _this7.yearformat = _this7.currentYear;
              } else if (_this7.calenderYearformat = "YY-YY") {
                _this7.yearformat = _this7.twoDigitFinancialYear + "-" + (_this7.twoDigitFinancialYear + 1);
              }

              _this7.calenderMonthformat = res.data.monthformat;

              if (_this7.calenderMonthformat == "MMM") {
                _this7.monthformat = _this7.monthShortName;
              } else if (_this7.calenderMonthformat == "MM") {
                _this7.monthformat = _this7.monthNumber;
              }
            }, function (error) {
              if (error.error.status == 404) {
                _this7.isShowButton = false;
              }
            }); //this.cdr.detectChanges(); 
          }
          /**
           * get Invoice setting
           */

        }, {
          key: "getInvoicesetting",
          value: function getInvoicesetting() {
            var _this8 = this;

            this.saleInvoiceService.getInvoicesetting({}, this.currentUser.id).then(function (res) {
              if (res) {
                _this8.listdata = res.data;

                if (_this8.listdata.length > 0) {
                  _this8.isShowButtonsetting = true;
                  console.log("patch value kar be");

                  _this8.reciptform.patchValue({
                    companytextsize: res.data[0].companyNameTextSize,
                    printextsize: res.data[0].printTextSize,
                    termsandcondition: res.data[0].termsAndConditions
                  });

                  _this8.isActiveCompanyName = res.data[0].companyName;
                  _this8.isActiveCompanyLogo = res.data[0].companyLogo;
                  _this8.isActiveCompanyAddress = res.data[0].address;
                  _this8.isActiveCompanyEmail = res.data[0].email;
                  _this8.isActiveCompanyNumber = res.data[0].phoneNumber;
                  _this8.selectedColor = res.data[0].color;
                  _this8.termsAndConditions = res.data[0].termsAndConditions; // Replace unwanted characters before storing in localStorage

                  var sanitizedTerms = _this8.termsAndConditions.replace(/["\n]/g, '');

                  localStorage.setItem('termsAndConditions', sanitizedTerms);
                  ;
                  _this8.invoiceTermsCon = localStorage.getItem('termsAndConditions');
                } else {
                  console.log("data not save");
                  _this8.isShowButtonsetting = false;
                }
              }
            }, function (error) {
              if (error.error.status == 404) {
                _this8.isShowButtonsetting = false;
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
            var _this9 = this;

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
                _this9.toastService.toastMsg({
                  title: "Success",
                  content: "Email Setup Added Successfully!!!"
                }); // this.toastService.openSnackBar("Eamil Setup Added Successfully")

              }, function (err) {
                if (err.error.expose) {
                  _this9.toastService.toastMsg({
                    title: "Error",
                    content: _this9.titleCasePipe.transform(err.error.error_message)
                  }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

                } else {
                  _this9.toastService.toastMsg({
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
        }, {
          key: "signatureDragEnter",
          value: function signatureDragEnter() {
            this.dragging = true;
          }
        }, {
          key: "signatureDragLeave",
          value: function signatureDragLeave() {
            this.dragging = false;
          }
        }, {
          key: "signatureDrop",
          value: function signatureDrop(e) {
            e.preventDefault();
            this.dragging = false;
          }
        }, {
          key: "signatureLoad",
          value: function signatureLoad() {
            this.imageLoaded = true;
          }
        }, {
          key: "signatureChange",
          value: function signatureChange(e) {
            var _this10 = this;

            var pattern = /image-*/;
            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];
            var fileSizeLimit = 1 * 1024 * 1024; // 6 MB

            if (!file.type.match(pattern)) {
              alert("invalid format");
              return;
            }

            if (file.size > fileSizeLimit) {
              alert("File size exceeds the limit. Please select a smaller image (up to 1 MB).");
              return;
            }

            this.loaded = false;

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this10.signImg = reader.result;
              };

              if (file === null) {
                this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Select Image To Upload."
                });
              } else {
                formdata.set("uploadSignature", file);
                e.srcElement.value = "";
                this.profileService.signatureImgAPI(formdata, this.currentUser.id).then(function (res) {
                  _this10.isProfilePicSelects = true;

                  _this10.toastService.toastMsg({
                    title: "Success",
                    content: "Image Uploaded Successfully!!!"
                  });
                }, function (err) {});
                this.loaded = true;
              }
            }
          }
        }, {
          key: "deleteSignature",
          value: function deleteSignature() {
            var _this11 = this;

            // Clear the profilePic value
            this.signImg = '';
            var formdata = new FormData();
            formdata.set("uploadSignature", null);
            this.profileService.deleteSignature(formdata, this.currentUser.id).then(function (res) {
              _this11.toastService.toastMsg({
                title: "Success",
                content: "Image Deleted Successfully!!!"
              });

              _this11.signImg = null;
              _this11.loaded = true;
            }, function (err) {});
          }
        }, {
          key: "getProfileData",
          value: function getProfileData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.profileService.getUserProfile({}, this.currentUser.id).then(function (res) {
                        _this12.signImg = res.data.basicdetails.addSignature;
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _InvoiceReceiptUIComponent;
      }();

      _InvoiceReceiptUIComponent.ɵfac = function InvoiceReceiptUIComponent_Factory(t) {
        return new (t || _InvoiceReceiptUIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_email_setup_service_service__WEBPACK_IMPORTED_MODULE_4__.EmailSetupServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe));
      };

      _InvoiceReceiptUIComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _InvoiceReceiptUIComponent,
        selectors: [["app-invoice-receipt-ui"]],
        viewQuery: function InvoiceReceiptUIComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dynamicText = _t.first);
          }
        },
        decls: 499,
        vars: 166,
        consts: [[1, "bg-white"], ["id", "headingPrintHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "formButtons", "mx-0"], ["style", "float: right !important;", "type", "submit", "class", "btn btn-save", 3, "click", 4, "ngIf"], [1, "row"], ["id", "headingPrintHide", 1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], ["id", "accordionPanelsStayOpenExample", 1, "accordion", "m-1"], [1, "accordion-item", "m-1"], ["id", "panelsStayOpen-headingOne", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseOne", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseOne", 1, "accordion-button", "text-black", 3, "ngClass"], [1, "dropdownLabel"], ["id", "panelsStayOpen-collapseOne", "aria-labelledby", "panelsStayOpen-headingOne", "data-bs-parent", "#accordionPanelsStayOpenExample", 1, "accordion-collapse", "collapse", 3, "ngClass"], [1, "accordion-body"], [1, "color-circle-container", "m-3"], ["class", "color-circle m-1", 3, "background", "click", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["id", "accordionPanelsStayOpenTWOExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingTwo", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseTwo", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseTwo", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseTwo", "aria-labelledby", "panelsStayOpen-headingTwo", "data-bs-parent", "#accordionPanelsStayOpenTWOExample", 1, "accordion-collapse", "collapse"], [1, "card-body", "companyData"], [1, "row", "mb-2"], [1, "col-6"], [1, "companyInfo"], [1, "form-check", "form-switch", "mb-0", 2, "float", "right !important"], ["id", "customSwitch1", "type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "row", "companyFormLabel", "mb-2"], [1, "flex-item", "companyInfo"], [1, "flex-item", "options"], ["appearance", "outline", 1, "example-full-width", 2, "margin-bottom", "-13px", "font-size", "14px"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "companytextsize", 3, "ngModel", "ngClass", "ngModelChange"], ["value", "Large"], ["value", "Medium"], ["value", "Small"], [1, "pt-4"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "printextsize", 3, "ngModel", "ngClass", "ngModelChange"], ["id", "accordionPanelsStayOpenThreeExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingThree", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseThree", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseThree", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseThree", "aria-labelledby", "panelsStayOpen-headingThree", "data-bs-parent", "#accordionPanelsStayOpenThreeExample", 1, "accordion-collapse", "collapse"], [1, "row", "mb-5"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], ["appearance", "outline", 1, "example-full-width", 2, "margin-bottom", "-13px", "font-size", "11px"], ["matInput", "", "rows", "3", "placeholder", "Terms And Conditions", "formControlName", "termsandcondition", "autocomplete", "off", 3, "ngClass"], ["class", "text-dange", 4, "ngIf"], ["id", "accordionPanelsStayOpenFourExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingFour", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseFour", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseFour", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseFour", "aria-labelledby", "panelsStayOpen-headingFour", "data-bs-parent", "#accordionPanelsStayOpenFourExample", 1, "accordion-collapse", "collapse"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-12", "col-sm-12", "col-lg-12", "col-xl-12", "companyData", "p-3"], [1, "col-md-12", "col-lg-12", "col-sm-12"], [1, "image-wrapper"], ["ondragover", "return false;", 1, "signature-img", 3, "dragenter", "dragleave", "drop"], [1, "bi", "bi-plus-lg", "fs--1"], [3, "src", "loaded", "load", 4, "ngIf"], ["type", "file", "name", "file", "accept", "image/*", "hidden", "", 3, "change"], ["fileInput", ""], ["class", "delete-button", 3, "click", 4, "ngIf"], ["id", "accordionPanelsStayOpenFiveExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingFive", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseFive", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseFive", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseFive", "aria-labelledby", "panelsStayOpen-headingFive", "data-bs-parent", "#accordionPanelsStayOpenFiveExample", 1, "accordion-collapse", "collapse"], ["id", "accordionPanelsStayOpenSixExample", 1, "accordion", "m-1"], ["id", "panelsStayOpen-headingSix", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseSix", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseSix", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseSix", "aria-labelledby", "panelsStayOpen-headingSix", "data-bs-parent", "#accordionPanelsStayOpenSixExample", 1, "accordion-collapse", "collapse"], [1, "card-body", "fs--1"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-3", "mt-2", "mb-3"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matNativeControl", "", "autocomplete", "off", "formControlName", "prefixOne", "required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "seprator1", "required", "", 3, "ngModel", "ngModelChange"], ["value", "."], ["value", "/"], ["value", "-"], ["value", " "], ["matNativeControl", "", "autocomplete", "off", "formControlName", "prefixTwo", "required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "seprator2", "required", "", 3, "ngModel", "ngModelChange"], [2, "font-size", "14px", "font-family", "Poppins", "font-weight", "500", "margin-left", "5px"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-6", "mb-3"], [1, "form-label", "text-nowrap"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "formControlName", "calendarType", 3, "ngModel", "ngModelChange", "change"], ["value", "FINANCIAL"], ["value", "CALENDAR"], [1, "d-flex", "justify-content-start", "ms-2"], [1, "text-nowrap"], [1, "form-check", "form-switch"], ["formControlName", "year", "id", "inlineCheckboxYear", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "inlineCheckboxYear", 1, "form-check-label", 2, "margin-top", "-18px"], ["formControlName", "month", "id", "inlineCheckboxMonth", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "inlineCheckboxMonth", 1, "form-check-label", 2, "margin-top", "-18px"], ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3", 3, "hidden", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "mb-3"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "numberOfZeros", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], [1, "row", "col-md-6"], [1, "card-footer"], ["class", "col-12 d-flex p-2 justify-content-end", 4, "ngIf"], ["id", "accordionPanelsStayOpenSevenExample", 1, "accordion", "m-1", "mb-3"], ["id", "panelsStayOpen-headingSeven", 1, "accordion-header", 2, "margin", "0px!important"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseSeven", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseSeven", 1, "accordion-button", "text-black"], ["id", "panelsStayOpen-collapseSeven", "aria-labelledby", "panelsStayOpen-headingSeven", "data-bs-parent", "#accordionPanelsStayOpenSevenExample", 1, "accordion-collapse", "collapse"], [1, "col-lg-12", "col-xl-6"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Password", "formControlName", "mailPassword", "autocomplete", "off", 3, "ngClass"], ["class", "text-danger mb-1", 4, "ngIf"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Service", "formControlName", "mailService", "autocomplete", "off", 3, "ngClass"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Hoat", "formControlName", "mailHost", "autocomplete", "off", 3, "ngClass"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Mail Port", "formControlName", "mailPort", "autocomplete", "off", 3, "ngClass"], [1, "col-12", "d-flex", "p-3", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", 2, "margin-left", "10px", 3, "click"], [1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], [1, "container", "m-3"], [1, "card"], ["id", "panel", 1, "row", "my-2"], [4, "ngIf"], [3, "color", "fontSize", 4, "ngIf"], [3, "fontSize", 4, "ngIf"], [1, "row", "headerAlignment"], [1, "col-6", 2, "font-weight", "600"], ["id", "printPageButton", "type", "button", 1, "btn", "btn-falcon-default", "btn-sm", "mb-sm-0", 2, "float", "right", "font-size", "14px !important", "padding-right", "0px !important", 3, "click"], [1, "fas", "fa-print", "me-1"], ["dynamicText", ""], [2, "float", "right"], [1, "col-6", 2, "text-align", "end"], [1, "row", "mt-2", "mb-4"], [2, "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], [1, "inner-model-table-heading", "p-2", "my-2", 2, "width", "100px", "font-weight", "600"], [2, "font-weight", "600"], [1, "row", "table-responsive", "scrollbar", "fs--1", 2, "padding", "0px 10px"], [1, "table", "tablePrint", 2, "font-size", "11px!important"], [1, "inner-model-table-heading", "printHead"], [1, "text-white"], [1, "borderedTopNone", 2, "text-align", "left"], [1, "borderedTopNone", 2, "text-align", "left", "width", "20rem"], [1, "borderedTopNone", 2, "text-align", "right"], [1, "printBody", 2, "max-height", "200px"], [1, "bordered", 2, "text-align", "left"], [1, "bordered", 2, "text-align", "right"], [1, "bordered", 2, "text-align", "right", "white-space", "nowrap"], [2, "font-size", "10px"], [1, "inner-model-table-heading", "printFoot"], [1, "bordered"], [1, "bordered", 2, "text-align", "right", "font-weight", "600"], [1, "row", "my-2"], [1, "col-6", 2, "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], [1, "row", "headerAlignment", "mt-2"], [1, "row", "headerAlignment", "mt-1"], [1, "col-6", 2, "text-align", "end", "font-weight", "600"], [1, "row", "headerAlignment", "mt-3"], [2, "text-align", "end"], [1, "mb-0"], [1, "mb-1", "mt-5", 2, "font-weight", "600"], [2, "margin-bottom", "4px"], [1, "col-md-6", "col-lg-6", "col-sm-12", 2, "display", "flex", "flex-direction", "column", "justify-content", "flex-end"], ["ondragover", "return false;", 1, "signature-img"], [3, "src", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-save", 2, "float", "right !important", 3, "click"], [1, "color-circle", "m-1", 3, "click"], [1, "text-danger"], [1, "text-dange"], [3, "src", "load"], [1, "delete-button", 3, "click"], [1, "bi", "bi-x", "bi-sm"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "mb-3", 3, "hidden"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "yearformat", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "YYYY"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "monthformat", "required", "", 3, "ngModel", "ngModelChange", "change"], ["value", "MM"], ["value", "YY-YY"], ["value", "YYYY-YYYY"], ["value", "MMM"], [1, "col-12", "d-flex", "p-2", "justify-content-end"], ["type", "submit", 1, "btn", "btn-outline-primary", 2, "margin-left", "10px", 3, "click"], [1, "text-danger", "mb-1"], ["src", "assets/img/icons/spot-illustrations/new-logo-iceipt-blue.png", "alt", "", "width", "42", 1, "me-2"], [3, "src"]],
        template: function InvoiceReceiptUIComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InvoiceReceiptUIComponent_button_3_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, InvoiceReceiptUIComponent_button_4_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Select Colours");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, InvoiceReceiptUIComponent_div_17_Template, 1, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Company Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Company Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_34_listener($event) {
              return ctx.toggleCheckboxCompanyName($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Company Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_41_listener($event) {
              return ctx.toggleCheckboxCompanyLogo($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_48_listener($event) {
              return ctx.toggleCheckboxCompanyAddress($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_55_listener($event) {
              return ctx.toggleCheckboxCompanyEmail($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Phone #");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_62_listener($event) {
              return ctx.toggleCheckboxCompanyNumber($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Company Name Text Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_68_listener($event) {
              return ctx.selectedTextSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, InvoiceReceiptUIComponent_mat_error_76_Template, 2, 1, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Print Text Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_82_listener($event) {
              return ctx.TextSizeprint = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, InvoiceReceiptUIComponent_mat_error_90_Template, 2, 1, "mat-error", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "h4", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Terms And Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "mat-form-field", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "textarea", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, InvoiceReceiptUIComponent_mat_error_104_Template, 2, 0, "mat-error", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "h4", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Upload Signature from Desktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dragenter", function InvoiceReceiptUIComponent_Template_label_dragenter_121_listener() {
              return ctx.signatureDragEnter();
            })("dragleave", function InvoiceReceiptUIComponent_Template_label_dragleave_121_listener() {
              return ctx.signatureDragLeave();
            })("drop", function InvoiceReceiptUIComponent_Template_label_drop_121_listener($event) {
              return ctx.signatureDrop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Add Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, InvoiceReceiptUIComponent_img_124_Template, 1, 3, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "input", 58, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InvoiceReceiptUIComponent_Template_input_change_125_listener($event) {
              return ctx.signatureChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, InvoiceReceiptUIComponent_button_127_Template, 2, 0, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "h4", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Printer Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "h4", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Invoice Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "Prefix 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_151_listener($event) {
              return ctx.prefixOne = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Seprator 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "mat-select", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_156_listener($event) {
              return ctx.seprator1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "mat-option", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "mat-option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](163, "mat-option", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Prefix 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_168_listener($event) {
              return ctx.prefixTwo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Seprator 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "mat-select", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_173_listener($event) {
              return ctx.seprator2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "mat-option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "mat-option", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "mat-option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "mat-option", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "h5", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, "Select Type of Calender");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, "Calendar Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "mat-select", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_188_listener($event) {
              return ctx.calendarTypeTxt = $event;
            })("change", function InvoiceReceiptUIComponent_Template_mat_select_change_188_listener($event) {
              return ctx.calendarType($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "mat-option", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "Financial");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "mat-option", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](192, "Calender");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "p", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Add Year: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "input", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_199_listener($event) {
              return ctx.year = $event;
            })("change", function InvoiceReceiptUIComponent_Template_input_change_199_listener() {
              return ctx.toggleDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "label", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "p", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "Add Month: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "input", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_input_ngModelChange_207_listener($event) {
              return ctx.month = $event;
            })("change", function InvoiceReceiptUIComponent_Template_input_change_207_listener() {
              return ctx.toggleDisplaym();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "label", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](211, InvoiceReceiptUIComponent_div_211_Template, 7, 3, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](212, InvoiceReceiptUIComponent_div_212_Template, 7, 3, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](213, InvoiceReceiptUIComponent_div_213_Template, 9, 3, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](214, InvoiceReceiptUIComponent_div_214_Template, 7, 3, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](215, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "h5", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "Serial #");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, "Number Of Zeros");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "mat-form-field", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "mat-select", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoiceReceiptUIComponent_Template_mat_select_ngModelChange_222_listener($event) {
              return ctx.numberOfZeros = $event;
            })("change", function InvoiceReceiptUIComponent_Template_mat_select_change_222_listener($event) {
              return ctx.getNoOfZeros($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "mat-option", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](224, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "mat-option", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](226, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "mat-option", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "mat-option", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "mat-option", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "mat-option", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](234, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "mat-option", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "mat-option", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](239, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](241, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "b", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](245, InvoiceReceiptUIComponent_div_245_Template, 3, 0, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](246, InvoiceReceiptUIComponent_div_246_Template, 3, 0, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](249, "h4", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "Mail Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](255, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](260, "Mail Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](261, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](262, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "mat-form-field", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](264, "input", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](265, InvoiceReceiptUIComponent_mat_error_265_Template, 2, 0, "mat-error", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](266, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](268, "Mail Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](269, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](270, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "mat-form-field", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](272, "input", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](273, InvoiceReceiptUIComponent_mat_error_273_Template, 2, 0, "mat-error", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](274, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](277, "Mail Host");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "mat-form-field", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](281, "input", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](282, InvoiceReceiptUIComponent_mat_error_282_Template, 2, 0, "mat-error", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](285, "Mail Port");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](286, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "mat-form-field", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](289, "input", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](290, InvoiceReceiptUIComponent_mat_error_290_Template, 2, 0, "mat-error", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](292, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](293, "button", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_Template_button_click_293_listener() {
              return ctx.postMailSetipdata();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](294, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](295, "div", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](297, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](299, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](300, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](301, InvoiceReceiptUIComponent_p_301_Template, 2, 0, "p", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](302, InvoiceReceiptUIComponent_p_302_Template, 3, 4, "p", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](303, InvoiceReceiptUIComponent_p_303_Template, 3, 2, "p", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](304, InvoiceReceiptUIComponent_p_304_Template, 3, 2, "p", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](305, InvoiceReceiptUIComponent_p_305_Template, 3, 2, "p", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](306, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](309, " TAX INVOICE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](310, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "button", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoiceReceiptUIComponent_Template_button_click_311_listener() {
              return ctx.onPrint();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](312, "span", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](313, "Print ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](314, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](317, " Invoice #");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](319, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](320, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](322, " ss/23-24Jul/23 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](326, " Invoice Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](331, " 6 Sept 2023 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](332, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](333, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](335, " Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "span", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](337, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](338, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](340, " NA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "div", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "div", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](344, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](345, "BILL TO");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](346, "span", 139, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](348, "Customer Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](351, "Customer Billing Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](352, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](354, "Mobile: \xA0xxxxxxxx52 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](355, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](357, "GSTIN: \xA016AABCU9603R1ZQ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](358, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](360, "State: \xA0 Maharastra ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](361, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "div", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](364, "SHIP TO");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](365, "span", 139, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](367, "Customer Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](370, "Customer Shipping Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](371, "div", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](372, "table", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "thead", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](374, "tr", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](375, "th", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](376, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](377, "th", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](378, "ITEMS");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](379, "th", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](380, "HSN");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](381, "th", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](382, "QTY.");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](383, "th", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](384, "RATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](385, "th", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](386, "TAX");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "th", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](388, "AMOUNT");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](389, "tbody", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](390, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](391, "td", 148, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](393, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "td", 148, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](396, " MOBILE");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](397, "td", 149, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](399, "155125");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "td", 150, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](402, "1 (BOX) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](403, "td", 149, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](405, " \u20B9\xA04958.18 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](406, "td", 149, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](408, " \u20B9\xA0495.82 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](409, "span", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](410, "(10%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "td", 149, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](413, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](414, "tfoot", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](416, "td", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](417, "th", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](418, "SUBTOTAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](419, "td", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](420, "td", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](421, "td", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](422, "td", 154, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](424, " \u20B9\xA0495.82 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](425, "td", 154, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](427, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](428, "div", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](429, "div", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](430, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](431, "div", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](434, " TAXABLE AMOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](435, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](437, " \u20B9\xA04958.18 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](438, "div", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](441, " CGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](442, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](444, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](445, "div", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](446, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](448, " SGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](449, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](451, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](452, "div", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](453, "div", 22, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](455, " IGST ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](456, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](458, " \u20B9\xA0495.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](459, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](460, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](461, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](462, " TOTAL AMOUNT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](463, "div", 159, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](465, " \u20B9\xA05454.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](466, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](467, "div", 158, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](469, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](470, " Received Amount ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](471, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](473, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](474, "div", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](475, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](476, " Balance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](477, "div", 135, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](479, " \u20B9\xA00.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](480, "div", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](481, "div", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](482, "p", 162, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](484, "Total Amounts (in words)");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](485, "span", null, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](487, "Five Thousand Four Hundred Fifty Four Rupees Only");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](488, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](489, "div", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](490, "span", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](491, "TERMS AND CONDITIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](492, "span", 164, 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](494);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](495, "div", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](497, "label", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](498, InvoiceReceiptUIComponent_img_498_Template, 1, 1, "img", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](148, _c1, !ctx.isDropdownOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](150, _c2, ctx.isDropdownOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.reciptform);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isActiveCompanyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isActiveCompanyLogo);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isActiveCompanyAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isActiveCompanyEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isActiveCompanyNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedTextSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](152, _c3, ctx.f.companytextsize.invalid && ctx.f.companytextsize.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.companytextsize.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.TextSizeprint)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](154, _c3, ctx.f.printextsize.invalid && ctx.f.printextsize.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.printextsize.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](156, _c3, ctx.f.termsandcondition.invalid && ctx.f.termsandcondition.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.termsandcondition.touched) && (ctx.f.termsandcondition.errors == null ? null : ctx.f.termsandcondition.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("loaded", ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signImg);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signImg);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.NumberForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.prefixOne);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.seprator1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.prefixTwo);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.seprator2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.calendarTypeTxt);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.month);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCalendar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.numberOfZeros);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate8"](" Preview - ", ctx.prefixOne, " ", ctx.prefixTwo, " ", ctx.seprator1, " ", ctx.yearformat, " ", ctx.monthformat, " ", ctx.seprator2, " ", "0".repeat(ctx.numberOfZeros), " ", ctx.lastDigit, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isShowButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.eamilSetupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](158, _c3, ctx.m.mailPassword.invalid && ctx.m.mailPassword.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailPassword.touched) && (ctx.m.mailPassword.errors == null ? null : ctx.m.mailPassword.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](160, _c3, ctx.m.mailService.invalid && ctx.m.mailService.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailService.touched) && (ctx.m.mailService.errors == null ? null : ctx.m.mailService.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](162, _c3, ctx.m.mailHost.invalid && ctx.m.mailHost.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailHost.touched) && (ctx.m.mailHost.errors == null ? null : ctx.m.mailHost.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](164, _c3, ctx.m.mailPort.invalid && ctx.m.mailPort.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.m.mailPort.touched) && (ctx.m.mailPort.errors == null ? null : ctx.m.mailPort.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyLogo == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyName == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyAddress == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyEmail == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isActiveCompanyNumber == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-size", ctx.getTextSizeprint(ctx.TextSizeprint), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.invoiceTermsCon ? ctx.invoiceTermsCon : "NA");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signImg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError],
        styles: ["body[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.color-circle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.color-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin: 5px;\n  cursor: pointer;\n}\n\n.companyData[_ngcontent-%COMP%] {\n  border: 1px solid #c1c2b8;\n}\n\n.add-signature-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.signature-upload[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: 220px;\n  height: 120px;\n  border: 2px dashed #0f91c5;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.signature-img[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.signature-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  color: #0f91c5;\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.signature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.signature-img[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n#originalForReceiptPrint[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.headerAlignment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.printHead[_ngcontent-%COMP%], .printBody[_ngcontent-%COMP%], .printFoot[_ngcontent-%COMP%] {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  font-size: 14px !important;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.dropdownLabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.companyInfo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-basis: 200px;\n  white-space: nowrap;\n}\n\n.options[_ngcontent-%COMP%] {\n  flex-basis: 200px;\n}\n\n.companyFormLabel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UtcmVjZWlwdC11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlFO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7QUFGSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7QUFIRjs7QUFPQTtFQUNFO0lBQ0UsdUJBQUE7RUFKRjtBQUNGOztBQVNBO0VBQ0UsZUFBQTtBQVBGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFURiIsImZpbGUiOiJpbnZvaWNlLXJlY2VpcHQtdWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY29sb3ItY2lyY2xlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29sb3ItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jb21wYW55RGF0YXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICByZ2JhKDE5MywgMTk0LCAxODQsIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIHNpZ25hdHVyZVxyXG4gIC5hZGQtc2lnbmF0dXJlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25hdHVyZS11cGxvYWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4uc2lnbmF0dXJlLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lnbmF0dXJlLWltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigxNSwgMTQ1LCAxOTcpO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbi5zaWduYXR1cmUtaW1nIGltZy5sb2FkZWQge1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuICAuc2lnbmF0dXJlLWltZyBpIHtcclxuICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IHJnYigxNSwgMTQ1LCAxOTcpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25hdHVyZS1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuc2lnbmF0dXJlLWltZyBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIGkge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi8vIE5ldyBEZXNpZ24gZm9yIHRhYmxlIHByaW50XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jb3JpZ2luYWxGb3JSZWNlaXB0UHJpbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJBbGlnbm1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpbnRIZWFkLCAucHJpbnRCb2R5LCAucHJpbnRGb290IHtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IGZvciBidXR0b25zIGFuZCBzZWFyY2ggYmFyLlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5oZWFkZXJCdXR0b25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGVmdCBTaWRlIG9mIHBhZ2UuXHJcblxyXG4uZHJvcGRvd25MYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vLyBDb21wYW55IEluZm9cclxuXHJcbi5jb21wYW55SW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsZXgtYmFzaXM6IDIwMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBmbGV4LWJhc2lzOiAyMDBweDtcclxufVxyXG5cclxuLmNvbXBhbnlGb3JtTGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_setting-module_invoice-receipt-ui_invoice-receipt-ui_component_ts-es5.js.map