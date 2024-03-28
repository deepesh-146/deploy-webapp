(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_warehouse_components_packages_packages_module_ts"], {
    /***/
    54752:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/packages/components/add-package/add-package.component.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddPackageComponent": function AddPackageComponent() {
          return (
            /* binding */
            _AddPackageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/langTranslation/language_translation */
      21283);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      34361);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/warehouse.service */
      78381);
      /* harmony import */


      var src_app_core_services_sale_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/sale-order.service */
      322);
      /* harmony import */


      var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/party.service */
      42109);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function AddPackageComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", name_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", name_r9, " ");
        }
      }

      function AddPackageComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r10.invoiceNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r10.invoiceNo, " ");
        }
      }

      function AddPackageComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Sale Order is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function AddPackageComponent_div_33_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " mobile is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "disabled": true
        };
      };

      function AddPackageComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddPackageComponent_div_33_mat_error_6_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Invoice Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r5.submitted || ctx_r5.f.mobile.touched) && (ctx_r5.f.mobile.errors == null ? null : ctx_r5.f.mobile.errors.required));
        }
      }

      function AddPackageComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "ewayBillNo");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "totalBillAmount");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function AddPackageComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Billing Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Shipping Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function AddPackageComponent_div_36_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddPackageComponent_div_36_ng_container_29_Template_input_ngModelChange_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);

            var item_r13 = restoredCtx.$implicit;
            return item_r13.checked = $event;
          })("change", function AddPackageComponent_div_36_ng_container_29_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r17.updateSelectAllState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r13.checked)("disabled", item_r13.isPacked);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.barcode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 11, item_r13.itemName));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.unit, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.quantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 13, item_r13.pricePerUnit, "1.2-2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 16, item_r13.subTotal, "1.2-2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.gst, "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](27, 19, item_r13.gstAmount, "1.2-2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](31, 22, item_r13.finalAmount, "1.2-2"), " ");
        }
      }

      function AddPackageComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddPackageComponent_div_36_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r18.selectAll = $event;
          })("change", function AddPackageComponent_div_36_Template_input_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r20.toggleSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " SKU");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " SKU Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "tbody", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, AddPackageComponent_div_36_ng_container_29_Template, 32, 25, "ng-container", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r8.selectAll)("disabled", ctx_r8.isAllProductsPacked());

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.lang.Base_Price_In_Rs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.lang.GST, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.lang.Total_In_Rs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.sales_products);
        }
      }

      var _AddPackageComponent = /*#__PURE__*/function () {
        function _AddPackageComponent(formBuilder, router, commonService, toastService, dialog, titleCasePipe, data, dialogRef, warehouseService, saleOrderService, partyService, saleInvoiceService) {
          _classCallCheck(this, _AddPackageComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.commonService = commonService;
          this.toastService = toastService;
          this.dialog = dialog;
          this.titleCasePipe = titleCasePipe;
          this.data = data;
          this.dialogRef = dialogRef;
          this.warehouseService = warehouseService;
          this.saleOrderService = saleOrderService;
          this.partyService = partyService;
          this.saleInvoiceService = saleInvoiceService;
          this.lang = src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__["default"].UAE;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.saleOrderOptions = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          this.allPartyList = [];
          this.selectAll = false;
          this.isSaleInvocie = false;
          this.today = new Date();
          this.packageData = this.data.packageData;
          this.invoiceId = this.data.invoiceId;
        }

        _createClass(_AddPackageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      this.packageForm = this.formBuilder.group({
                        name: [null],
                        saleInvoice: [null],
                        customerName: [{
                          value: null,
                          disabled: true
                        }],
                        billingAddress: [{
                          value: null,
                          disabled: true
                        }],
                        shippingAddress: [{
                          value: null,
                          disabled: true
                        }],
                        ewayBillNo: [{
                          value: null,
                          disabled: true
                        }],
                        mobile: [{
                          value: null,
                          disabled: true
                        }],
                        invoiceNo: [{
                          value: null,
                          disabled: true
                        }],
                        invoiceDate: [{
                          value: null,
                          disabled: true
                        }],
                        totalBillAmount: [{
                          value: null,
                          disabled: true
                        }],
                        billGstAmount: [null],
                        warehouseName: [{
                          value: null,
                          disabled: true
                        }],
                        subcheckbox: this.formBuilder.array([])
                      });

                      if (!this.packageData) {
                        _context2.next = 7;
                        break;
                      }

                      this.isPacked = true;
                      this.packageForm.patchValue({
                        name: (_a = this.packageData) === null || _a === void 0 ? void 0 : _a.customerName,
                        saleInvoice: (_b = this.packageData) === null || _b === void 0 ? void 0 : _b.invoiceNo
                      });
                      _context2.next = 7;
                      return this.getReceiptById(this.invoiceId);

                    case 7:
                      _context2.next = 9;
                      return this.packageForm.controls.name.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(function (name) {
                        return _this.getContactName(name);
                      }));

                    case 9:
                      this.customerNames = _context2.sent;
                      this.saleOrderOptions = this.packageForm.controls.saleInvoice.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(function (saleInvoice) {
                        var selectedCustomerName = _this.packageForm.value.name;

                        if (selectedCustomerName) {
                          return _this.getSaleOrderOptions(saleInvoice, selectedCustomerName);
                        } else {
                          return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]); // Empty array when no customer name is selected
                        }
                      }));
                      this.packageForm.controls.saleInvoice.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (selectedSaleInvoice) {
                        return !!selectedSaleInvoice;
                      }) // Only proceed if saleInvoice has a value
                      ).subscribe(function (selectedSaleInvoice) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var selectedCustomerName, receiptId;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  selectedCustomerName = this.packageForm.value.name;
                                  _context.next = 3;
                                  return new Promise(function (resolve) {
                                    _this2.saleOrderOptions.subscribe(function (items) {
                                      var selectedInvoice = items.find(function (invoice) {
                                        return invoice.invoiceNo === selectedSaleInvoice;
                                      });
                                      receiptId = selectedInvoice ? selectedInvoice.id : null;
                                      resolve();
                                    });
                                  });

                                case 3:
                                  if (!selectedCustomerName) {
                                    _context.next = 6;
                                    break;
                                  }

                                  _context.next = 6;
                                  return this.getReceiptById(receiptId);

                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                      this.getSaleInvoiceNumber();
                      _context2.next = 18;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](0);
                      this.toastService.toastMsg({
                        title: 'Error',
                        content: _context2.t0
                      });

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 15]]);
            }));
          }
        }, {
          key: "receiptId",
          value: function receiptId(_receiptId) {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "getContactName",
          value: function getContactName(name) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.from)(this.partyService.getAllPartiesDetailsSearch({}, this.currentUser.parentId ? this.currentUser.parentId : this.currentUser.id, 500, 1, name.toLowerCase())).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (res) {
              if (res.success) {
                return res.data.pageData.map(function (item) {
                  return item.partyName;
                });
              } else {
                return [];
              }
            }));
          }
        }, {
          key: "formArr",
          get: function get() {
            return this.packageForm.get("subcheckbox");
          }
        }, {
          key: "addDetailsButtonClick",
          value: function addDetailsButtonClick(i) {
            var content = this.packageForm.get("subcheckbox");
            content.push(this.addRolesPermission(i));
          }
        }, {
          key: "addRolesPermission",
          value: function addRolesPermission(id) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
              read: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(false)
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.packageForm.controls;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "isAllProductsPacked",
          value: function isAllProductsPacked() {
            return this.sales_products.every(function (item) {
              return item.isPacked;
            });
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            var _this3 = this;

            // this.selectAll = !this.selectAll;
            this.sales_products.forEach(function (item) {
              return item.checked = _this3.selectAll;
            });
          }
        }, {
          key: "updateSelectAllState",
          value: function updateSelectAllState() {
            this.selectAll = this.sales_products.every(function (item) {
              return item.checked;
            });
          }
        }, {
          key: "getSaleOrderOptions",
          value: function getSaleOrderOptions(saleInvoice, name) {
            var _this4 = this;

            // Implement the logic to fetch sale order options based on the selected customer and sale invoice
            try {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.from)(this.saleOrderService.getSaleOrderList({}, this.currentUser.id, 'SALEORDER', 500, 1, undefined, name)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (res) {
                return res.data.pageData.map(function (item) {
                  return {
                    invoiceNo: item.invoiceNo,
                    id: item.id
                  };
                });
              }, function (err) {
                if (err.error.expose) {
                  _this4.toastService.toastMsg({
                    title: "Error",
                    content: _this4.titleCasePipe.transform(err.error.error_message)
                  });

                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]); // Return an empty array in case of an error
                } else {
                  _this4.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });

                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]); // Return an empty array in case of an error
                }
              }));
            } catch (error) {
              console.error('Error fetching sale order list:', error);
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]); // Return an empty array in case of an exception
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "numberDecimalOnly",
          value: function numberDecimalOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "getReceiptById",
          value: function getReceiptById(receiptId) {
            var _this5 = this;

            this.saleInvoiceService.getSaleInvoiceById({}, receiptId).then(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!res.success) {
                          _context3.next = 11;
                          break;
                        }

                        this.isSaleInvocie = true;
                        _context3.next = 4;
                        return (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.sales_products) === null || _b === void 0 ? void 0 : _b.map(function (product) {
                          return Object.assign(Object.assign({}, product), {
                            checked: product.isPacked === true // Set checked based on isPacked value

                          });
                        });

                      case 4:
                        _context3.t0 = _context3.sent;

                        if (_context3.t0) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.t0 = [];

                      case 7:
                        this.sales_products = _context3.t0;
                        this.updateSelectAllState();
                        this.partyId = res.data.partyId;
                        this.packageForm.patchValue({
                          customerName: (_c = res.data) === null || _c === void 0 ? void 0 : _c.customerName,
                          billingAddress: (_d = res.data) === null || _d === void 0 ? void 0 : _d.billingAddress,
                          shippingAddress: (_e = res.data) === null || _e === void 0 ? void 0 : _e.shippingAddress,
                          ewayBillNo: (_f = res.data) === null || _f === void 0 ? void 0 : _f.ewayBillNo,
                          mobile: (_g = res.data) === null || _g === void 0 ? void 0 : _g.mobile,
                          invoiceNo: (_h = res.data) === null || _h === void 0 ? void 0 : _h.invoiceNo,
                          invoiceDate: ((_j = res.data) === null || _j === void 0 ? void 0 : _j.invoiceDate) ? moment__WEBPACK_IMPORTED_MODULE_1__((_k = res.data) === null || _k === void 0 ? void 0 : _k.invoiceDate).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_1__(this.maxDate).format("DD-MMM-YYYY"),
                          totalBillAmount: (_l = res.data) === null || _l === void 0 ? void 0 : _l.totalBillAmount,
                          billGstAmount: (_m = res.data) === null || _m === void 0 ? void 0 : _m.billGstAmount,
                          warehouseName: (_p = (_o = res.data) === null || _o === void 0 ? void 0 : _o.warehouse) === null || _p === void 0 ? void 0 : _p.name
                        }); // this.isPacked = res.data.sales_products?.isPacked

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "getSaleInvoiceNumber",
          value: function getSaleInvoiceNumber() {
            var _this6 = this;

            this.saleInvoiceService.getSaleInvoiceNumber({}, this.currentUser.id).then(function (res) {
              _this6.invoiceNo = String(res.data.prefix).concat(String(res.data.suffix)), _this6.lastInvoiceNumber = res.data.suffix;
            });
          }
        }, {
          key: "saveSelectedProducts",
          value: function saveSelectedProducts() {
            var _this7 = this;

            // Filter the selected products and Filter out the already packed products
            this.selectedProducts = this.sales_products.filter(function (product) {
              return !product.isPacked && product.checked;
            }); // Check if any product is selected

            if (this.selectedProducts.length === 0) {
              // Handle the case when no product is selected
              this.toastService.toastMsg({
                title: 'Error',
                content: 'No products selected.'
              });
            } else {
              // Prepare the payload for the API call
              var payload = {
                invoiceDetails: {
                  "saleOrderId": this.invoiceId,
                  "cashSale": false,
                  "userId": this.currentUser.id,
                  "partyId": this.partyId,
                  "invoiceNo": this.invoiceNo,
                  "lastInvoiceNumber": this.lastInvoiceNumber,
                  "partialPack": this.selectAll ? false : true,
                  "ewayBillNo": "1212"
                },
                products: this.selectedProducts.map(function (product) {
                  return {
                    quantity: product.quantity,
                    barcode: product.barcode,
                    saleProductId: product.id
                  };
                })
              };
              this.warehouseService.packProducts(payload).then(function (res) {
                if (res.success) {
                  _this7.dialogRef.close();

                  _this7.toastService.toastMsg({
                    title: 'Success',
                    content: 'Products sent to packaging successfully'
                  });

                  _this7.commonService.notifyDataAdded();
                }
              }, function (error) {
                _this7.toastService.toastMsg({
                  title: 'Error',
                  content: 'Error sending products to packaging:' + "".concat(error)
                });
              });
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this8 = this;

            this.submitted = true;

            if (this.packageForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              var data = {
                // "id": "4", //optional
                "userId": this.currentUser.id,
                "name": this.packageForm.value.name,
                "saleInvoice": this.packageForm.value.saleInvoice
              };
              this.warehouseService.postWarehouse(data).then(function (res) {
                if (res.success) {
                  _this8.dialogRef.close();

                  _this8.commonService.notifyDataAdded();

                  _this8.toastService.toastMsg({
                    title: "Success",
                    content: "Shipping Data Addedd Successfully!!!"
                  });
                }
              });
            }
          }
        }]);

        return _AddPackageComponent;
      }();

      _AddPackageComponent.ɵfac = function AddPackageComponent_Factory(t) {
        return new (t || _AddPackageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_sale_order_service__WEBPACK_IMPORTED_MODULE_5__.SaleOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_6__.PartyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_7__.SaleInvoiceService));
      };

      _AddPackageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _AddPackageComponent,
        selectors: [["app-add-package"]],
        decls: 37,
        vars: 14,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "5px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-save", "ms-2", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", 2, "font-size", "12px"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Customer Name", "formControlName", "name", 3, "matAutocomplete"], ["customerAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error-asterisk"], ["matInput", "", "placeholder", "Sale Order", "formControlName", "saleInvoice", 3, "matAutocomplete"], ["saleOrderAuto", "matAutocomplete"], ["class", "text-danger", 4, "ngIf"], ["class", "row mb-3", 3, "ngClass", 4, "ngIf"], ["class", "table-responsive my-custom-scrollbar mb-3", 4, "ngIf"], [3, "value"], [2, "font-size", "12px"], [1, "text-danger"], [1, "row", "mb-3", 3, "ngClass"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4", 2, "font-size", "12px"], ["matInput", "", "placeholder", "mobile", "maxlength", "50", "formControlName", "mobile", "readonly", ""], ["matInput", "", "placeholder", "invoiceDate", "maxlength", "50", "formControlName", "invoiceDate", "readonly", ""], ["matInput", "", "placeholder", "ewayBillNo", "maxlength", "50", "formControlName", "ewayBillNo", "readonly", ""], ["matInput", "", "placeholder", "totalBillAmount", "maxlength", "50", "formControlName", "totalBillAmount", "readonly", ""], ["matInput", "", "placeholder", "Billing Address", "formControlName", "billingAddress", "readonly", ""], ["matInput", "", "placeholder", "Shipping Address", "formControlName", "shippingAddress", "readonly", ""], [1, "table-responsive", "my-custom-scrollbar", "mb-3"], [1, "table", "bg-white", "table-bordered", "table-stripped"], [1, "table", "inner-model-table-heading"], [1, "font_size", "font-weight-bold"], ["scope", "col", 2, "width", "7%"], ["type", "checkbox", 3, "ngModel", "disabled", "ngModelChange", "change"], ["scope", "col", 2, "width", "10%"], ["scope", "col", 1, "text-nowrap"], ["scope", "col", "colspan", "2", 1, "text-nowrap"], ["scope", "col", "colspan", "2", 1, "text-center", 2, "width", "14%"], [1, "mod"], [4, "ngFor", "ngForOf"], [2, "vertical-align", "middle"], [1, "text-center"], [2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["colspan", "1"], [1, ""], ["colspan", "1", 2, "max-width", "150px"], [1, "", 2, "max-width", "150px"]],
        template: function AddPackageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Add Package");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddPackageComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddPackageComponent_Template_button_click_6_listener() {
              return ctx.saveSelectedProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Packed");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-autocomplete", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, AddPackageComponent_mat_option_18_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "#Sale Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-autocomplete", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, AddPackageComponent_mat_option_30_Template, 3, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, AddPackageComponent_mat_error_32_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AddPackageComponent_div_33_Template, 12, 3, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddPackageComponent_div_34_Template, 11, 2, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, AddPackageComponent_div_35_Template, 11, 2, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, AddPackageComponent_div_36_Template, 30, 6, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.packageForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 10, ctx.customerNames));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 12, ctx.saleOrderOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.saleInvoice.touched) && (ctx.f.saleInvoice.errors == null ? null : ctx.f.saleInvoice.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSaleInvocie);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSaleInvocie);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSaleInvocie);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSaleInvocie);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DecimalPipe],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.matSuffix[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: medium;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  \n  pointer-events: none;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFDSjs7RUFFRTtJQUNFLGdCQUFBO0VBQ0o7QUFDRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQWMsaUNBQUE7RUFDZCxvQkFBQTtFQUFzQix5QkFBQTtFQUN0QixvREFBQTtBQUVKIiwiZmlsZSI6ImFkZC1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDg4JTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRTdWZmaXgge1xyXG4gICAgcGFkZGluZyA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7IC8qIEFkanVzdCB0aGUgc3R5bGluZyBhcyBuZWVkZWQgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBQcmV2ZW50IGludGVyYWN0aW9ucyAqL1xyXG4gICAgLyogQWRkaXRpb25hbCBzdHlsaW5nIHRvIGluZGljYXRlIGEgZGlzYWJsZWQgc3RhdGUgKi9cclxuICB9XHJcbiAgIl19 */"]
      });
      /***/
    },

    /***/
    53092:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/packages/components/package-list/package-list.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PackageListComponent": function PackageListComponent() {
          return (
            /* binding */
            _PackageListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _add_package_add_package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-package/add-package.component */
      54752);
      /* harmony import */


      var _shipping_components_edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shipping/components/edit-shipping/edit-shipping.component */
      43772);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/warehouse.service */
      78381);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_sale_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/sale-order.service */
      322);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);

      var _c0 = ["dropdown"];

      function PackageListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function PackageListComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PackageListComponent_ng_container_26_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var item_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.packageModal(item_r5.id, item_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.receiptType.toUpperCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.party == null ? null : item_r5.party.partyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("AED ", item_r5 == null ? null : item_r5.totalBillAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Invoice No: ", item_r5 == null ? null : item_r5.invoiceNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 7, item_r5 == null ? null : item_r5.invoiceDate, "dd MMM YYYY")));
        }
      }

      function PackageListComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PackageListComponent_ng_container_28_Template_img_click_23_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var package_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.editShippingListModal(package_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var package_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r8.packStatus.toUpperCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r8 == null ? null : package_r8.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("AED ", package_r8 == null ? null : package_r8.totalAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 7, package_r8 == null ? null : package_r8.createdAt, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PKG - ", package_r8 == null ? null : package_r8.id, "");
        }
      }

      function PackageListComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PackageListComponent_ng_container_30_Template_img_click_23_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);

            var package_r11 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.editShippingListModal(package_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var package_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r11.packStatus.toUpperCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r11 == null ? null : package_r11.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("AED ", package_r11 == null ? null : package_r11.totalAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 7, package_r11 == null ? null : package_r11.createdAt, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PKG - ", package_r11 == null ? null : package_r11.id, "");
        }
      }

      function PackageListComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PackageListComponent_ng_container_32_Template_img_click_23_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

            var package_r14 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r15.editShippingListModal(package_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var package_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r14.packStatus.toUpperCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](package_r14 == null ? null : package_r14.customerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("AED ", package_r14 == null ? null : package_r14.totalAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](17, 7, package_r14 == null ? null : package_r14.createdAt, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PKG - ", package_r14 == null ? null : package_r14.id, "");
        }
      }

      var _PackageListComponent = /*#__PURE__*/function () {
        function _PackageListComponent(router, dialog, commonService, route, warehouseService, toastService, saleorderservice, titleCasePipe) {
          _classCallCheck(this, _PackageListComponent);

          this.router = router;
          this.dialog = dialog;
          this.commonService = commonService;
          this.route = route;
          this.warehouseService = warehouseService;
          this.toastService = toastService;
          this.saleorderservice = saleorderservice;
          this.titleCasePipe = titleCasePipe;
          this.dummyDate = '2024-02-16T10:27:00.000Z';
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.warehouseList = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.pagesize = 1;
          this.count = 0;
          this.warehouseIdList = [];
          this.selectedIdList = [];
          this.archiveIconfalse = false;
          this.checkSingleArray = [];
          this.isChecked = false;
          this.upiCheckedId = [];
          this.upiCheckedId1 = [];
          this.allSelect = false;
          this.checkSelect = false;
          this.checkSelectsingle = false;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingletrue = false;
          this.selectedTypeFilter = null;
          this.notShippedPackages = [];
          this.shippedPackages = [];
          this.deliveredPackages = [];
        }

        _createClass(_PackageListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.getSaleOrder();
            this.getAllPackagesByUser();
            this.commonService.rowAdded$.subscribe(function () {
              // Fetch the updated list of users
              _this9.getSaleOrder();

              _this9.getAllPackagesByUser();
            });
            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function () {
              _this9.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this9.searchKey = searchKey;

                _this9.searchWarehouse(searchKey.trim());
              } else if (searchKey === '') {
                _this9.isLoading = false; // Hide the loader if the search key is less than the threshold

                _this9.getSaleOrder();
              } else {
                _this9.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getSaleOrder",
          value: function getSaleOrder() {
            var _this10 = this;

            this.saleorderservice.getSaleOrderList({}, this.currentUser.id, "SALEORDER", this.partyPageSize, this.currentPageNo + 1, 'NOTPACKED', null, 'STOCKTRANSFER', 'PARTIALPACKED').then(function (res) {
              if (res.success) {
                _this10.saleOrderList = res.data.pageData;
              }
            }, function (err) {
              console.log("In the Error", err);
            });
          }
        }, {
          key: "getAllPackagesByUser",
          value: function getAllPackagesByUser() {
            var _this11 = this;

            this.warehouseService.getAllPackagesByUser({}, this.currentUser.id).then(function (res) {
              if (res.success) {
                var packages = res.data; // Filter packages based on packStatus

                _this11.notShippedPackages = packages.filter(function (item) {
                  return item.packStatus === 'PACKED';
                });
                _this11.shippedPackages = packages.filter(function (item) {
                  return item.packStatus === 'SHIPPED';
                });
                _this11.deliveredPackages = packages.filter(function (item) {
                  return item.packStatus === 'DELIVERED';
                });
              }
            }, function (err) {});
          }
        }, {
          key: "archhiveWarehouse",
          value: function archhiveWarehouse(warehouseId, isdeleted) {
            this.warehouseId = warehouseId;
            this.isdeletedParty = isdeleted;
            this.selectedIdList.push(warehouseId);
          }
        }, {
          key: "archiveSignleWarehouse",
          value: function archiveSignleWarehouse() {// if (this.isdeletedParty) {
            //   this.warehouseService.unArchiveMultiplewarehouses({data: { unArchivewarehouses: this.selectedIdList }, userId: this.currentUser.id}).then((res: any) => {
            //     if (res.success) {
            //       this.toastService.toastMsg({
            //         title: 'Success',
            //         content: "warehouse Unarchived Successfully!!!"
            //       });
            //       this.getAllWarehouse();
            //     }
            //   })
            // }
            // else {
            //   this.warehouseService.deleteMultiplewarehouses({data: { archivewarehouses: this.selectedIdList }, userId: this.currentUser.id}).then((res: any) => {
            //     if (res.success) {
            //       this.toastService.toastMsg({
            //         title: 'Success',
            //         content: "warehouse Archived Successfully!!!"
            //       });
            //       this.getAllWarehouse();
            //     }
            //   })
            // }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, partyId) {
            var _this12 = this;

            if (e.target.checked) {
              this.warehouseIdList.push(partyId);
              this.checkSingleArray.push(e.target.value);
            } else {
              var index = this.warehouseIdList.indexOf(partyId);

              if (index !== -1) {
                this.warehouseIdList.splice(index, 1);
                this.checkSingleArray.splice(index, 1);
              }
            } // Clear the archived and unarchived party IDs


            this.archivedPartyIds = [];
            this.unarchivedPartyIds = []; // Update the archived and unarchived party IDs based on the selected parties

            this.warehouseIdList.forEach(function (partyId) {
              var party = _this12.warehouseList.find(function (item) {
                return item.id === partyId;
              });

              if (party) {
                if (party.isDeleted) {
                  _this12.archivedPartyIds.push(partyId);
                } else {
                  _this12.unarchivedPartyIds.push(partyId);
                }
              }
            }); // Check if all the selected parties are archived

            var allArchived = this.warehouseIdList.every(function (partyId) {
              var party = _this12.warehouseList.find(function (item) {
                return item.id === partyId;
              });

              return party && party.isDeleted;
            }); // Check if all the selected parties are unarchived

            var allUnarchived = this.warehouseIdList.every(function (partyId) {
              var party = _this12.warehouseList.find(function (item) {
                return item.id === partyId;
              });

              return party && !party.isDeleted;
            }); // if (allArchived && allUnarchived) {

            if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
              // Show an alert error message to the user
              alert("Please select either archived or unarchived Warehouses."); // Uncheck all the selected parties and header checkbox

              this.warehouseIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false; // Uncheck all the checkboxes in the template

              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              });
            } else if (allArchived) {
              // Show unarchive button
              this.showUnarchiveButton = true;
              this.showDeleteButton = false;
            } else if (allUnarchived) {
              // Show archive button
              this.showDeleteButton = true;
              this.showUnarchiveButton = false;
            } else {
              // Show error message or handle the case when there are both archived and unarchived parties selected
              alert("Please select either archived or unarchived Warehouses."); // Uncheck all the selected parties and header checkbox

              this.warehouseIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false;
              this.showDeleteButton = false;
              this.showUnarchiveButton = false; // Uncheck all the checkboxes in the template

              var _checkboxes = document.querySelectorAll('input[type="checkbox"]');

              _checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              });
            }
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(warehouseId) {
            this.warehouseId = warehouseId;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this13 = this;

            var isChecked = $event.target.checked;

            if (isChecked) {
              this.warehouseIdList = this.warehouseList.map(function (item) {
                return item.id;
              });
            } else {
              this.warehouseIdList = [];
              this.showDeleteButton = false;
              this.showUnarchiveButton = false;
            }

            this.checkSelect = isChecked; // Update the checkbox state in the header

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.warehouseList.map(function (item) {
              if (id === -1) {
                if (_this13.isChecked == true) {
                  _this13.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this13.checkSelectsingle = false;
                  _this13.upiCheckedId = [];
                }
              }
            }); // Clear the archived and unarchived party IDs

            this.archivedPartyIds = [];
            this.unarchivedPartyIds = []; // Update the archived and unarchived party IDs based on the selected parties

            this.warehouseIdList.forEach(function (partyId) {
              var party = _this13.warehouseList.find(function (item) {
                return item.id === partyId;
              });

              if (party) {
                if (party.isDeleted) {
                  _this13.archivedPartyIds.push(partyId);
                } else {
                  _this13.unarchivedPartyIds.push(partyId);
                }
              } // Check if all the selected parties are archived


              var allArchived = _this13.warehouseIdList.every(function (partyId) {
                var party = _this13.warehouseList.find(function (item) {
                  return item.id === partyId;
                });

                return party && party.isDeleted;
              }); // Check if all the selected parties are unarchived


              var allUnarchived = _this13.warehouseIdList.every(function (partyId) {
                var party = _this13.warehouseList.find(function (item) {
                  return item.id === partyId;
                });

                return party && !party.isDeleted;
              });

              if (allArchived) {
                // Show unarchive button
                _this13.showUnarchiveButton = true;
                _this13.showDeleteButton = false;
              } else if (allUnarchived) {
                // Show archive button
                _this13.showDeleteButton = true;
                _this13.showUnarchiveButton = false;
              } else {// Show error message or handle the case when there are both archived and unarchived parties selected
              }
            });

            if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
              alert("Please select either archived or unarchived Warehouses"); // Uncheck all the selected parties and header checkbox

              this.warehouseIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false; // Uncheck all the checkboxes in the template

              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              }); // Throw an error to prevent further processing

              this.toastService.toastMsg({
                title: 'Warning',
                content: 'Please select either archived or unarchived Warehouses'
              });
              throw new Error("Please select either archived or unarchived Warehouses");
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(warehouseId) {
            this.warehouseId = warehouseId;
          }
        }, {
          key: "archiveMultipleWarehouse",
          value: function archiveMultipleWarehouse() {
            if (this.currentPageNo === 1) {
              this.currentPageNo = this.currentPageNo;
            } else {
              if (this.totalPages > this.currentPageNo) {
                this.currentPageNo = this.currentPageNo - 1;
              }
            }

            var requestBody = {
              archiveWarehouses: this.warehouseIdList
            }; // this.warehouseService.deleteMultiplewarehouses({ data: requestBody, userId: this.currentUser.id }).then((result: any) => {
            //   if (result.success) {
            //     this.getAllWarehouse();
            //     this.toastService.toastMsg({
            //       title: 'Success',
            //       content: "warehouse Archived Successfully!!!"
            //     });
            //     this.showDeleteButton = false;
            //     this.showUnarchiveButton = false
            //     this.warehouseIdList = []; // Clear the selected party IDs after deletion
            //     this.checkSelect = false // Reset the checkbox state in the header
            //   }
            // }, (err) => {
            //   if (err.error.expose) {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: this.titleCasePipe.transform(err.error.error_message)
            //     });
            //   } else {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: "Something Went Wrong."
            //     });
            //   }
            // });
          }
        }, {
          key: "showDeleteButtonFunc",
          value: function showDeleteButtonFunc() {
            return this.unarchivedPartyIds.length > 0;
          }
        }, {
          key: "unArchiveMultipleWarehouse",
          value: function unArchiveMultipleWarehouse() {
            var requestBody = {
              unArchiveWarehouses: this.warehouseIdList
            }; // this.warehouseService.unArchiveMultiplewarehouses({data: requestBody, userId: this.currentUser.id}).then((result: any) => {
            //   if (result.success) {
            //     this.getAllWarehouse();
            //     this.toastService.toastMsg({
            //       title: 'Success',
            //       content: "warehouse Unarchived Successfully!!!"
            //     });
            //     this.showDeleteButton = false;
            //     this.showUnarchiveButton = false
            //     this.warehouseIdList = []; // Clear the selected party IDs after unarchiving
            //     this.checkSelect = false; // Reset the checkbox state in the header
            //   }
            // }, (err) => {
            //   if (err.error.expose) {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: this.titleCasePipe.transform(err.error.error_message)
            //     });
            //   } else {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: "Something Went Wrong."
            //     });
            //   }
            // });
          }
        }, {
          key: "searchWarehouse",
          value: function searchWarehouse(searchKey) {
            var _this14 = this;

            setTimeout(function () {
              if (searchKey.trim() === '') {
                _this14.getSaleOrder();

                _this14.isLoading = false;
              } else {
                _this14.isLoading = false; // this.getSaleOrder(searchKey)

                if (_this14.warehouseList.length === 0) {
                  _this14.isLoading = false;

                  _this14.toastService.toastMsg({
                    title: "Error",
                    content: searchKey + " Is Not Found"
                  });
                }
              }

              _this14.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            // Emit the search key to the searchSubject
            this.searchSubject.next(searchKey.trim());
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            this.excelFileUpload = e.target.files[0];
            var pattern = /\.(xlsx|xls)$/i; // Pattern to match ".xlsx" or ".xls" extension

            if (!pattern.test(this.excelFileUpload.name)) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Invalid Format. Please Select An Excel File."
              });
              return;
            }

            if (this.excelFileUpload) {
              var formdata = new FormData();
              formdata.set("file", this.excelFileUpload); // this.truckOwnerService.postBulkowner(formdata, this.currentUser.id).then((res) => {
              //   this.toastService.toastMsg({
              //     title: "Success",
              //     content: "Excel Uploaded Successfully",
              //   });
              //   this.getAllWarehouse();
              // }, (err) => {
              //   if (err.error.expose) {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: this.titleCasePipe.transform(err.error.error_message),
              //     });
              //   }
              //   else if (err.error.status == "409" && err.error.expose == false) {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: "List Of Consignments Already Exists",
              //     });
              //   }
              //   else {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: "Something Went Wrong.",
              //     });
              //   }
              // });
            }
          }
        }, {
          key: "startUpload",
          value: function startUpload() {
            var uploadInput = document.getElementById('uploadFile');

            if (uploadInput) {
              var event = new MouseEvent('click', {
                view: window,
                bubbles: false,
                cancelable: true
              });
              uploadInput.dispatchEvent(event);
            } else {
              this.toastService.toastMsg({
                title: 'Error',
                content: "Upload element not found"
              });
            }
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.warehouseList.length > 0) {
              if (this.searchKey !== '') {
                this.partyPageSize = e.pageSize;
                this.searchWarehouse(this.searchKey);
              } else {
                this.partyPageSize = e.pageSize;
                this.getSaleOrder();
              }
            }
          }
        }, {
          key: "packageModal",
          value: function packageModal(invoiceId, packageData) {
            var dialogRef = this.dialog.open(_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_0__.AddPackageComponent, {
              width: '900px',
              height: "100vh",
              // minWidth: '700px',
              data: {
                invoiceId: invoiceId,
                packageData: packageData
              },
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "editShippingListModal",
          value: function editShippingListModal(packageData) {
            var dialogRef = this.dialog.open(_shipping_components_edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_1__.EditShippingComponent, {
              width: '700px',
              height: '100vh',
              data: {
                packageData: packageData
              },
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          } // isActive(warehouseId, isActive) {
          //   const newStatus = !isActive; // Toggle between '1' and '0'
          //   const payload = {
          //     warehouseId: warehouseId,        
          //   };
          //   this.warehouseService.warehouseToggle({ data: payload, userId: this.currentUser.id })
          //     .then((res) => {
          //       if (res.success) {
          //             if (newStatus) {
          //               this.toastService.toastMsg({
          //                 title: "Success",
          //                 content: "Status Has Changed To Active",
          //               });
          //               this.getAllWarehouse()
          //             } else {
          //               this.toastService.toastMsg({
          //                 title: "Success",
          //                 content: "Status Has Changed To Inactive",
          //               });
          //               this.getAllWarehouse()
          //             }
          //           }
          //     })
          //     .catch((error) => {
          //       this.toastService.toastMsg({
          //         title: 'Error',
          //         content: this.titleCasePipe.transform(error.error.error_message)
          //       })
          //     });
          // }
          // Add a method to update the filter value

        }, {
          key: "updateTypeFilter",
          value: function updateTypeFilter(filterValue) {
            if (filterValue === 'ALL') {
              this.selectedTypeFilter = null;
            } else {
              this.selectedTypeFilter = filterValue;
            }
          }
        }, {
          key: "toggleFilter",
          value: function toggleFilter() {
            this.isFilterVisible = !this.isFilterVisible;
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            this.isFilterVisible = false;
          }
        }, {
          key: "onStatusChange",
          value: function onStatusChange(cart) {
            var _this15 = this;

            // API call to update the status
            this.warehouseService.changeStatusOfPackage({
              packageId: cart.id,
              packStatus: cart.status.toUpperCase()
            }).then(function (result) {
              if (result.success) {
                _this15.toastService.toastMsg({
                  title: 'Success',
                  content: 'Package shipped successfully'
                });

                _this15.commonService.notifyDataAdded();
              }
            }, function (error) {
              // Handle the error if needed
              console.error('Error updating status:', error);
            });
          }
        }]);

        return _PackageListComponent;
      }();

      _PackageListComponent.ɵfac = function PackageListComponent_Factory(t) {
        return new (t || _PackageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sale_order_service__WEBPACK_IMPORTED_MODULE_5__.SaleOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe));
      };

      _PackageListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PackageListComponent,
        selectors: [["app-package-list"]],
        viewQuery: function PackageListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
          }
        },
        decls: 33,
        vars: 5,
        consts: [["class", "loader-container", 4, "ngIf"], [1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Search...", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["id", "saleButtonPrint1", "type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-3", "column-header"], [1, "status-box", "ready-to-package"], [1, "status-box", "not-shipped"], [1, "status-box", "shipped"], [1, "status-box", "delivered"], [1, "row"], [1, "col-3"], [4, "ngFor", "ngForOf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "package-card", "pb-0", "mb-3", 3, "click"], [1, "receipt-container", 2, "display", "flex", "align-items", "center", "width", "100%"], [1, "receipt-indicator", 2, "background-color", "#34eb73"], [1, "card-header", "d-flex", 2, "align-items", "center"], [2, "margin-left", "auto"], [1, "mr-2"], [1, "sale-order-body", "card-body", "d-flex", "py-0"], [1, "package-card", "pb-0", "mb-3"], [1, "status-container", 2, "display", "flex", "align-items", "center", "width", "100%"], [1, "status-indicator", 2, "background-color", "#ffcc00"], [1, "card-header", "d-flex", "py-0", "pt-1", 2, "align-items", "center"], [2, "margin-left", "auto", "display", "flex", "align-items", "center"], [1, "card-body", "py-2"], [1, "invoice-package-row", "pt-2"], [1, "package-id", "mb-2", "me-2"], [1, "capsule", "greenish-background"], [1, "mb-2", "me-2"], ["src", "assets/icons/edit-pencil.svg", "alt", "Edit", "width", "20", "height", "20", "matTooltip", "Edit", "data-bs-toggle", "tooltip", "data-bs-placement", "top", 2, "cursor", "pointer", 3, "click"], [1, "status-indicator", 2, "background-color", "#3385ff"], [1, "card-body", "py-2", "pt-1"], [1, "package-id", "me-2"], [1, "", 2, "width", "100%", "padding", "0px"], [1, "status-indicator", 2, "background-color", "#4caf50"]],
        template: function PackageListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PackageListComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function PackageListComponent_Template_input_input_4_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PackageListComponent_Template_button_click_6_listener() {
              return ctx.packageModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add Packages\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Ready To Package \u25BC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Not Shipped Package \u25BC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Shipped Package \u25BC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Delivered Package \u25BC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, PackageListComponent_ng_container_26_Template, 19, 10, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PackageListComponent_ng_container_28_Template, 24, 10, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, PackageListComponent_ng_container_30_Template, 24, 10, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, PackageListComponent_ng_container_32_Template, 24, 10, "ng-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.saleOrderList);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.notShippedPackages);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.shippedPackages);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.deliveredPackages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
        styles: [".containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f8f8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  color: #848e99;\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  min-width: 80%;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 320px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 210px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  border-color: black;\n  \n}\n\n.custom-checkbox.deleted[_ngcontent-%COMP%] {\n  border-color: white;\n  \n}\n\n.package-card[_ngcontent-%COMP%] {\n  border: 1px #848e99;\n  border-radius: 5px;\n  width: 300px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-basis: 210px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  \n}\n\n.package-table[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sale-order-body[_ngcontent-%COMP%] {\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-basis: 300px;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.status-box[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin-right: 5px;\n  border-radius: 2px;\n}\n\n.ready-to-package[_ngcontent-%COMP%] {\n  background-color: #34eb73;\n  \n}\n\n.not-shipped[_ngcontent-%COMP%] {\n  background-color: #ffcc00;\n  \n}\n\n.shipped[_ngcontent-%COMP%] {\n  background-color: #3385ff;\n  \n}\n\n.delivered[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  \n}\n\n.package-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.capsule[_ngcontent-%COMP%] {\n  padding: 3px 8px 3px 8px;\n  border-radius: 15px;\n  color: white;\n  font-size: 11px;\n}\n\n.violet-background[_ngcontent-%COMP%] {\n  background-color: violet;\n}\n\n.greenish-background[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  \n}\n\n.cross-sticker[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background-color: #ff0000;\n  \n  transform: rotate(-45deg);\n  margin-right: 5px;\n}\n\n.status-indicator[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 50%;\n  padding: 2px 2px 2px 10px;\n  -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 0%, 50% 100%, 100% 0%);\n          clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 0%, 50% 100%, 100% 0%);\n  font-weight: bold;\n}\n\n.receipt-indicator[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 64%;\n  padding: 2px 2px 2px 10px;\n  -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 0%, 50% 100%, 100% 0%);\n          clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 0%, 50% 100%, 100% 0%);\n  font-weight: bold;\n}\n\n.invoice-package-row[_ngcontent-%COMP%] {\n  display: flex;\n  \n  justify-content: space-between;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFGRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQXFCLCtDQUFBO0FBRXpCOztBQUNFO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTs7RUFFRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7OztFQUdFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFFRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLRTtFQUNFO0lBQ0UsdUJBQUE7RUFGSjtBQUNGOztBQUtFO0VBQ0UsbUJBQUE7RUFBcUIseUJBQUE7QUFGekI7O0FBS0U7RUFDRSxtQkFBQTtFQUFxQiw0Q0FBQTtBQUR6Qjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUEwQyxvQ0FBQTtBQUE5Qzs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQTJCLHFDQUFBO0FBQTdCOztBQUdBO0VBQ0UseUJBQUE7RUFBMkIseUNBQUE7QUFDN0I7O0FBRUE7RUFDRSx5QkFBQTtFQUEyQixtQ0FBQTtBQUU3Qjs7QUFDQTtFQUNFLHlCQUFBO0VBQTJCLDhDQUFBO0FBRzdCOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFHRjs7QUFBQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0Usd0JBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQTJCLG1CQUFBO0FBSTdCOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUEyQiwrQkFBQTtFQUMzQix5QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFHRSxXQUFBO0VBQ0EsVUFBQTtFQUdBLHlCQUFBO0VBQ0EsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFDZiw4QkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtBQU5GIiwiZmlsZSI6InBhY2thZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJTZWFyY2hCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdk9wdGlvbnMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWRkZW4taW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBpY29uJ3Mgd2lkdGggKi9cclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGJvZHkgdHIsXHJcbiAgdGQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gO1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aCxcclxuICB0ZCxcclxuICB0ciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlIHtcclxuICAgIGNvbG9yOiAjODQ4ZTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgbWluLXdpZHRoOiA4MCU7IC8vIGNoYW5nZXMgb25seSBmb3IgdGFibGUgaW4gdGhlIHBhY2thZ2VcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWJvZHktdHIge1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRib2R5IHRkIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICAvLyBmbGV4LWJhc2lzOiAyNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2hCYXIge1xyXG4gICAgZmxleC1iYXNpczogMzIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtQnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1iYXNpczogMjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1lZGlhIHF1ZXJ5IGZvciBidXR0b25zIGFuZCBzZWFyY2ggYmFyLlxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNoZWNrYm94IHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IC8qIERlZmF1bHQgYm9yZGVyIGNvbG9yICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tY2hlY2tib3guZGVsZXRlZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlOyAvKiBSZWQgYm9yZGVyIGNvbG9yIHdoZW4gaXNEZWxldGVkIGlzIHRydWUgKi9cclxuICB9XHJcbiAgXHJcbiAgLnBhY2thZ2UtY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCAjODQ4ZTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1iYXNpczogMjEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBCb3ggc2hhZG93IHdpdGggYSBzdWJ0bGUgZWZmZWN0ICovXHJcbiAgfVxyXG5cclxuLnBhY2thZ2UtdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zYWxlLW9yZGVyLWJvZHkge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4uY29sdW1uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMtYm94IHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ucmVhZHktdG8tcGFja2FnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ZWI3MzsgLyogR3JlZW4gY29sb3IgZm9yIFJlYWR5IFRvIFBhY2thZ2UgKi9cclxufVxyXG5cclxuLm5vdC1zaGlwcGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwOyAvKiBZZWxsb3cgY29sb3IgZm9yIE5vdCBTaGlwcGVkIFBhY2thZ2UgKi9cclxufVxyXG5cclxuLnNoaXBwZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzg1ZmY7IC8qIEJsdWUgY29sb3IgZm9yIFNoaXBwZWQgUGFja2FnZSAqL1xyXG59XHJcblxyXG4uZGVsaXZlcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBBbm90aGVyIGdyZWVuIGNvbG9yIGZvciBEZWxpdmVyZWQgUGFja2FnZSAqL1xyXG59XHJcblxyXG4ucGFja2FnZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2Fwc3VsZSB7XHJcbiAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnZpb2xldC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XHJcbn1cclxuXHJcbi5ncmVlbmlzaC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBHcmVlbmlzaCBjb2xvciAqL1xyXG59XHJcblxyXG4vLyAuc3RhdHVzLWluZGljYXRvciB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMTBweDtcclxuLy8gICBsZWZ0OiAxMHB4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLmNyb3NzLXN0aWNrZXIge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOyAvKiBBZGp1c3QgdGhlIGNvbG9yIGFzIG5lZWRlZCAqL1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtaW5kaWNhdG9yIHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmNTc1NztcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogNTAlO1xyXG4gIC8vIHBhZGRpbmc6IDJweCAzMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDNweCAzMHB4IDJweCA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDJweCAycHggMTBweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDAlIDEwMCUsIDEwMCUgMTAwJSwgNTAlIDAlLCA1MCUgMTAwJSwgMTAwJSAwJSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWluZGljYXRvciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDY0JTtcclxuICBwYWRkaW5nOiAycHggMnB4IDJweCAxMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlLCA1MCUgMCUsIDUwJSAxMDAlLCAxMDAlIDAlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmludm9pY2UtcGFja2FnZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    81157:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/packages/packages-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PackagesRoutingModule": function PackagesRoutingModule() {
          return (
            /* binding */
            _PackagesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _packages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./packages.component */
      90967);
      /* harmony import */


      var _components_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/package-list/package-list.component */
      53092);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _packages_component__WEBPACK_IMPORTED_MODULE_0__.PackagesComponent,
        children: [{
          path: '',
          redirectTo: 'package-list',
          pathMatch: 'full'
        }, {
          path: 'package-list',
          component: _components_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_1__.PackageListComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _PackagesRoutingModule = /*#__PURE__*/_createClass(function _PackagesRoutingModule() {
        _classCallCheck(this, _PackagesRoutingModule);
      });

      _PackagesRoutingModule.ɵfac = function PackagesRoutingModule_Factory(t) {
        return new (t || _PackagesRoutingModule)();
      };

      _PackagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _PackagesRoutingModule
      });
      _PackagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_PackagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    90967:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/packages/packages.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PackagesComponent": function PackagesComponent() {
          return (
            /* binding */
            _PackagesComponent
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

      var _PackagesComponent = /*#__PURE__*/function () {
        function _PackagesComponent() {
          _classCallCheck(this, _PackagesComponent);
        }

        _createClass(_PackagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PackagesComponent;
      }();

      _PackagesComponent.ɵfac = function PackagesComponent_Factory(t) {
        return new (t || _PackagesComponent)();
      };

      _PackagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PackagesComponent,
        selectors: [["app-packages"]],
        decls: 11,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "bg-white", "p-4"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "page-nav-link", "mt-3"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./package-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function PackagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All Packages");

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNrYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    84077:
    /*!************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/packages/packages.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PackagesModule": function PackagesModule() {
          return (
            /* binding */
            _PackagesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _packages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./packages-routing.module */
      81157);
      /* harmony import */


      var _packages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./packages.component */
      90967);
      /* harmony import */


      var _components_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/package-list/package-list.component */
      53092);
      /* harmony import */


      var _components_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-package/add-package.component */
      54752);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PackagesModule = /*#__PURE__*/_createClass(function _PackagesModule() {
        _classCallCheck(this, _PackagesModule);
      });

      _PackagesModule.ɵfac = function PackagesModule_Factory(t) {
        return new (t || _PackagesModule)();
      };

      _PackagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _PackagesModule
      });
      _PackagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _packages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackagesRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_PackagesModule, {
          declarations: [_packages_component__WEBPACK_IMPORTED_MODULE_1__.PackagesComponent, _components_package_list_package_list_component__WEBPACK_IMPORTED_MODULE_2__.PackageListComponent, _components_add_package_add_package_component__WEBPACK_IMPORTED_MODULE_3__.AddPackageComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _packages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackagesRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_warehouse_components_packages_packages_module_ts-es5.js.map