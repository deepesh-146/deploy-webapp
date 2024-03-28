(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_shop-module_components_shop-settings_shop-settings_module_ts"], {
    /***/
    32836:
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-settings/components/shop-profile-settings/shop-profile-settings.component.ts ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopProfileSettingsComponent": function ShopProfileSettingsComponent() {
          return (
            /* binding */
            _ShopProfileSettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/langTranslation/language_translation */
      21283);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      90084);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_pages_Profile_profile_settings_edit_business_partner_modal_edit_business_partner_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/Profile/profile-settings/edit-business-partner-modal/edit-business-partner-modal.component */
      98749);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/profile.service */
      44687);
      /* harmony import */


      var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/party.service */
      42109);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);

      var _c0 = ["categoryInput"];
      var _c1 = ["auto"];
      var _c2 = ["autocompleteTrigger"];

      function ShopProfileSettingsComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r30.deleteProfilePic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " First Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Only Characters Allowed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email must be a valid email address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile Number is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile Number must be 9-digits only ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile Number must be 9-digits only ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_spinner_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 63);
        }
      }

      var _c3 = function _c3(a1) {
        return {
          "gst-status-icon": true,
          "active": a1
        };
      };

      function ShopProfileSettingsComponent_div_58_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, !ctx_r34.isDisabledGST));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", !ctx_r34.isDisabledGST ? "\u2713" : "\u2717", " ");
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r35.lang.GSTIN, " is Required! ");
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Please enter the valid ", ctx_r36.lang.GSTIN, " number ");
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r37.lang.GSTIN, " must be of 15-digits ");
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r38.lang.GSTIN, " must be of 15-digits ");
        }
      }

      function ShopProfileSettingsComponent_div_58_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r39.lang.GSTIN, " must be valid number ");
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "is-invalid": a0
        };
      };

      function ShopProfileSettingsComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 59, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function ShopProfileSettingsComponent_div_58_Template_input_keypress_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r40.numberOnly($event);
          })("keyup", function ShopProfileSettingsComponent_div_58_Template_input_keyup_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r42.validateTRN($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShopProfileSettingsComponent_div_58_mat_spinner_9_Template, 1, 0, "mat-spinner", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ShopProfileSettingsComponent_div_58_mat_icon_10_Template, 2, 4, "mat-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ShopProfileSettingsComponent_div_58_mat_error_11_Template, 2, 1, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ShopProfileSettingsComponent_div_58_mat_error_12_Template, 2, 1, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ShopProfileSettingsComponent_div_58_mat_error_13_Template, 2, 1, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ShopProfileSettingsComponent_div_58_mat_error_14_Template, 2, 1, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ShopProfileSettingsComponent_div_58_mat_error_15_Template, 2, 1, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.lang.GSTIN);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx_r8.lang.GSTIN);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c4, ctx_r8.f.gstinNo.invalid && ctx_r8.f.gstinNo.touched && ctx_r8.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.ProfileForm.controls.gstinNo.valid && !ctx_r8.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.submitted && (ctx_r8.f.gstinNo.errors == null ? null : ctx_r8.f.gstinNo.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.f.gstinNo.invalid && ctx_r8.f.gstinNo.dirty && ctx_r8.f.gstinNo.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.f.gstinNo.errors == null ? null : ctx_r8.f.gstinNo.errors.maxlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.f.gstinNo.errors == null ? null : ctx_r8.f.gstinNo.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.f.gstinNo.errors == null ? null : ctx_r8.f.gstinNo.errors.pattern);
        }
      }

      function ShopProfileSettingsComponent_div_59_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " CIN is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_59_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter the valid CIN number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_59_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " CIN pattern is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "CIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 65, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ShopProfileSettingsComponent_div_59_Template_input_keyup_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r47.validatecinNumber($event.target.value);
          })("input", function ShopProfileSettingsComponent_div_59_Template_input_input_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);

            var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);

            return _r43.value = $event.target.value.toUpperCase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ShopProfileSettingsComponent_div_59_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShopProfileSettingsComponent_div_59_mat_error_9_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ShopProfileSettingsComponent_div_59_mat_error_10_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c4, ctx_r9.f.cinNumber.invalid && ctx_r9.f.cinNumber.touched && ctx_r9.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.f.cinNumber.errors == null ? null : ctx_r9.f.cinNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.f.gstinNo.invalid && ctx_r9.f.cinNumber.dirty && ctx_r9.f.cinNumber.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r9.submitted || ctx_r9.f.cinNumber.touched) && (ctx_r9.f.cinNumber.errors == null ? null : ctx_r9.f.cinNumber.errors.pattern));
        }
      }

      function ShopProfileSettingsComponent_div_61_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Legal name must be in Alphabets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_61_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Legal Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Legal Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ShopProfileSettingsComponent_div_61_mat_error_7_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ShopProfileSettingsComponent_div_61_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c4, ctx_r10.f.legalName.invalid && ctx_r10.f.legalName.touched && ctx_r10.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r10.submitted || ctx_r10.f.legalName.touched) && ctx_r10.f.legalName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r10.submitted || ctx_r10.f.legalName.touched) && (ctx_r10.f.legalName.errors == null ? null : ctx_r10.f.legalName.errors.required));
        }
      }

      function ShopProfileSettingsComponent_div_62_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " financialYearFrom is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c5 = function _c5() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      function ShopProfileSettingsComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Financial Year Start From");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_62_Template_input_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r53.openDatePicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "date_range");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ShopProfileSettingsComponent_div_62_mat_error_10_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxDate", ctx_r11.today)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c4, ctx_r11.f.financialYearFrom.invalid && ctx_r11.f.financialYearFrom.touched && ctx_r11.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r11.submitted || ctx_r11.f.financialYearFrom.touched) && (ctx_r11.f.financialYearFrom.errors == null ? null : ctx_r11.f.financialYearFrom.errors.required));
        }
      }

      function ShopProfileSettingsComponent_mat_error_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Billing Address is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_option_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", state_r55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](state_r55);
        }
      }

      function ShopProfileSettingsComponent_mat_error_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " State is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " District is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_mat_error_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Trade Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_110_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r58);
        }
      }

      function ShopProfileSettingsComponent_div_110_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Constitution of Business is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Constitution of Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ShopProfileSettingsComponent_div_110_mat_option_7_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ShopProfileSettingsComponent_div_110_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c4, ctx_r17.f.businessType.invalid && ctx_r17.f.businessType.touched && ctx_r17.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.uaeCosntBusiness);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r17.submitted || ctx_r17.f.businessType.touched) && (ctx_r17.f.businessType.errors == null ? null : ctx_r17.f.businessType.errors.required));
        }
      }

      function ShopProfileSettingsComponent_mat_error_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Account Method is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_124_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r61.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", type_r61.businessType, " ");
        }
      }

      function ShopProfileSettingsComponent_div_124_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Business Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Business Type(Select multiple, if applicable)");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ShopProfileSettingsComponent_div_124_mat_option_7_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ShopProfileSettingsComponent_div_124_mat_error_8_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c4, ctx_r19.f.businessNature.invalid && ctx_r19.f.businessNature.touched && ctx_r19.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r19.typeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r19.submitted || ctx_r19.f.businessNature.touched) && (ctx_r19.f.businessNature.errors == null ? null : ctx_r19.f.businessNature.errors.required));
        }
      }

      function ShopProfileSettingsComponent_div_125_mat_chip_8_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_125_mat_chip_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("removed", function ShopProfileSettingsComponent_div_125_mat_chip_8_Template_mat_chip_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);

            var category_r69 = restoredCtx.$implicit;

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r71.remove(category_r69);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ShopProfileSettingsComponent_div_125_mat_chip_8_mat_icon_2_Template, 2, 0, "mat-icon", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r69 = ctx.$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectable", category_r69 == "Education")("removable", ctx_r63.removable);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", category_r69, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r63.removable);
        }
      }

      function ShopProfileSettingsComponent_div_125_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelectionChange", function ShopProfileSettingsComponent_div_125_mat_option_14_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75);

            var item_r73 = restoredCtx.$implicit;

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r74.getCategoryId(item_r73);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-checkbox", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r73 = ctx.$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r73.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r67.categoryName.indexOf(item_r73.category) >= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r73.category, " ");
        }
      }

      function ShopProfileSettingsComponent_div_125_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Category is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_125_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Business Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-chip-list", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ShopProfileSettingsComponent_div_125_mat_chip_8_Template, 3, 4, "mat-chip", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 77, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_125_Template_input_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);

            var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r76.openAuto(_r65);
          })("matChipInputTokenEnd", function ShopProfileSettingsComponent_div_125_Template_input_matChipInputTokenEnd_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r78.add($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-autocomplete", 79, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionSelected", function ShopProfileSettingsComponent_div_125_Template_mat_autocomplete_optionSelected_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r79.selected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ShopProfileSettingsComponent_div_125_mat_option_14_Template, 3, 3, "mat-option", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_125_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);

            var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r80.openAuto(_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-icon", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ShopProfileSettingsComponent_div_125_mat_error_19_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);

          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.categoryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r20.categoryCtrl)("matAutocomplete", _r66)("matChipInputFor", _r62)("matChipInputSeparatorKeyCodes", ctx_r20.separatorKeysCodes)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c4, ctx_r20.categoryCtrl.invalid && ctx_r20.categoryCtrl.touched && ctx_r20.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 9, ctx_r20.filteredCategory));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r20.submitted || ctx_r20.categoryCtrl.touched) && (ctx_r20.categoryCtrl.errors == null ? null : ctx_r20.categoryCtrl.errors.required));
        }
      }

      function ShopProfileSettingsComponent_div_127_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_127_tr_18_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85);

            var i_r83 = restoredCtx.index;
            var partner_r82 = restoredCtx.$implicit;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r84.openEditModal(i_r83, partner_r82);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_127_tr_18_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85);

            var partner_r82 = restoredCtx.$implicit;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r86.deletePartner(partner_r82.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partner_r82 = ctx.$implicit;
          var i_r83 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r83 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r82.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r82.nameOfPartner);
        }
      }

      function ShopProfileSettingsComponent_div_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Partner Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Name of Partner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_127_tr_18_Template, 14, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Managing Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-option", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function ShopProfileSettingsComponent_div_127_Template_input_keydown_enter_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r87.addPartner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r21.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.partnerDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Managing Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        }
      }

      function ShopProfileSettingsComponent_div_128_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_128_tr_18_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93);

            var i_r91 = restoredCtx.index;
            var partner_r90 = restoredCtx.$implicit;

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r92.openEditModal(i_r91, partner_r90);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_128_tr_18_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93);

            var partner_r90 = restoredCtx.$implicit;

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r94.deletePartner(partner_r90.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partner_r90 = ctx.$implicit;
          var i_r91 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r91 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r90.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r90.nameOfPartner);
        }
      }

      function ShopProfileSettingsComponent_div_128_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " LLP Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Name of Partner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_128_tr_18_Template, 14, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Managing Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-option", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function ShopProfileSettingsComponent_div_128_Template_input_keydown_enter_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r95.addPartner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r22.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r22.partnerDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Managing Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Partner");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        }
      }

      function ShopProfileSettingsComponent_div_129_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_129_tr_18_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101);

            var i_r99 = restoredCtx.index;
            var partner_r98 = restoredCtx.$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r100.openEditModal(i_r99, partner_r98);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_129_tr_18_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101);

            var partner_r98 = restoredCtx.$implicit;

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r102.deletePartner(partner_r98.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partner_r98 = ctx.$implicit;
          var i_r99 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r99 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r98.nameOfPartner);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r98.position);
        }
      }

      function ShopProfileSettingsComponent_div_129_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Private Limited Company Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Name of Director ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_129_tr_18_Template, 14, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function ShopProfileSettingsComponent_div_129_Template_input_keydown_enter_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r103.addPartner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r23.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.partnerDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        }
      }

      function ShopProfileSettingsComponent_div_130_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_130_tr_18_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109);

            var i_r107 = restoredCtx.index;
            var partner_r106 = restoredCtx.$implicit;

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r108.openEditModal(i_r107, partner_r106);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_130_tr_18_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109);

            var partner_r106 = restoredCtx.$implicit;

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r110.deletePartner(partner_r106.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partner_r106 = ctx.$implicit;
          var i_r107 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r107 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r106.nameOfPartner);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r106.position);
        }
      }

      function ShopProfileSettingsComponent_div_130_Template(rf, ctx) {
        if (rf & 1) {
          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Public Limited Company Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Name of Director ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_130_tr_18_Template, 14, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function ShopProfileSettingsComponent_div_130_Template_input_keydown_enter_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r112);

            var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r111.addPartner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r24.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r24.partnerDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        }
      }

      function ShopProfileSettingsComponent_div_131_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_131_tr_18_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117);

            var i_r115 = restoredCtx.index;
            var partner_r114 = restoredCtx.$implicit;

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r116.openEditModal(i_r115, partner_r114);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_131_tr_18_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117);

            var partner_r114 = restoredCtx.$implicit;

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r118.deletePartner(partner_r114.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partner_r114 = ctx.$implicit;
          var i_r115 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r115 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r114.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](partner_r114.nameOfPartner);
        }
      }

      function ShopProfileSettingsComponent_div_131_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " HUF Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_131_tr_18_Template, 14, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Karta");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function ShopProfileSettingsComponent_div_131_Template_input_keydown_enter_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r119.addPartner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r25.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r25.partnerDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Karta");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Karta");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        }
      }

      function ShopProfileSettingsComponent_label_134_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "b", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Show Additional Fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_label_135_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Show Additional Fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_136_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r122 = ctx.$implicit;
          var i_r123 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r123 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r122.licenceAndCertificate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r122.documentNumber);
        }
      }

      function ShopProfileSettingsComponent_div_136_Template(rf, ctx) {
        if (rf & 1) {
          var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Additional Fields ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "table", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "thead", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " License/Certificate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Document Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Print in Sale Invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_136_tr_18_Template, 12, 3, "tr", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ShopProfileSettingsComponent_div_136_Template_input_keyup_enter_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r125);

            var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r124.addDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r28.businessForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r28.additionaDetailsData);
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Pincode is Required ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Pincode should be only digits. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " State is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " District is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Country is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Town/City is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " House No is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Area, Street, Sector, Village is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_mat_error_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Landmark is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_div_70_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_138_div_5_div_70_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r144);

            var item_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r142.updateMultipleAddress(item_r128);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6() {
        return ["modify"];
      };

      function ShopProfileSettingsComponent_div_138_div_5_div_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ShopProfileSettingsComponent_div_138_div_5_div_70_button_1_Template, 2, 0, "button", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c6))("appHasPermissionName", "profile");
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_button_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_138_div_5_button_72_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r147);

            var i_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r145.deleteAddressForm(i_r129);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ShopProfileSettingsComponent_div_138_div_5_Template_input_input_8_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r149);

            var i_r129 = restoredCtx.index;

            var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r148.getPincodeDetailsForAdditionalAddress($event.target.value, i_r129);
          })("keypress", function ShopProfileSettingsComponent_div_138_div_5_Template_input_keypress_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r149);

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r150.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShopProfileSettingsComponent_div_138_div_5_mat_error_9_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ShopProfileSettingsComponent_div_138_div_5_mat_error_10_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ShopProfileSettingsComponent_div_138_div_5_mat_error_18_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "District");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ShopProfileSettingsComponent_div_138_div_5_mat_error_26_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ShopProfileSettingsComponent_div_138_div_5_mat_error_34_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Town/City");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ShopProfileSettingsComponent_div_138_div_5_mat_error_42_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "House No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "input", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ShopProfileSettingsComponent_div_138_div_5_mat_error_50_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Area, Street, Sector, Village");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "input", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ShopProfileSettingsComponent_div_138_div_5_mat_error_58_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Landmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "input", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ShopProfileSettingsComponent_div_138_div_5_mat_error_66_Template, 2, 0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ShopProfileSettingsComponent_div_138_div_5_div_70_Template, 2, 3, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, ShopProfileSettingsComponent_div_138_div_5_button_72_Template, 2, 0, "button", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r128 = ctx.$implicit;
          var i_r129 = ctx.index;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r129);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c4, ctx_r126.f.pincode.invalid && ctx_r126.f.pincode.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.pincode.touched) && (ctx_r126.f.pincode.errors == null ? null : ctx_r126.f.pincode.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.pincode.touched) && (ctx_r126.f.pincode.errors == null ? null : ctx_r126.f.pincode.errors.pattern));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c4, ctx_r126.f.state.invalid && ctx_r126.f.state.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.state.touched) && (ctx_r126.f.state.errors == null ? null : ctx_r126.f.state.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](24, _c4, ctx_r126.f.district.invalid && ctx_r126.f.district.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.district.touched) && (ctx_r126.f.district.errors == null ? null : ctx_r126.f.district.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c4, ctx_r126.f.country.invalid && ctx_r126.f.country.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.country.touched) && (ctx_r126.f.country.errors == null ? null : ctx_r126.f.country.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](28, _c4, ctx_r126.f.city.invalid && ctx_r126.f.city.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.city.touched) && (ctx_r126.f.city.errors == null ? null : ctx_r126.f.city.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c4, ctx_r126.f.homeno.invalid && ctx_r126.f.homeno.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.homeno.touched) && (ctx_r126.f.homeno.errors == null ? null : ctx_r126.f.homeno.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](32, _c4, ctx_r126.f.address.invalid && ctx_r126.f.address.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.address.touched) && (ctx_r126.f.address.errors == null ? null : ctx_r126.f.address.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c4, ctx_r126.f.landmark.invalid && ctx_r126.f.country.touched && ctx_r126.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r126.submitted || ctx_r126.f.landmark.touched) && (ctx_r126.f.landmark.errors == null ? null : ctx_r126.f.landmark.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r128.value.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r128.value.id);
        }
      }

      function ShopProfileSettingsComponent_div_138_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_138_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r152);

            var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r151.addMultipleAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ShopProfileSettingsComponent_div_138_Template(rf, ctx) {
        if (rf & 1) {
          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Add multiple Business Addresses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ShopProfileSettingsComponent_div_138_div_5_Template, 74, 36, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_div_138_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r154);

            var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r153.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShopProfileSettingsComponent_div_138_button_9_Template, 2, 0, "button", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r29.addressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r29.addressControls.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c6))("appHasPermissionName", "profile");
        }
      }

      var _c7 = function _c7() {
        return ["read"];
      };

      var _ShopProfileSettingsComponent = /*#__PURE__*/function () {
        function _ShopProfileSettingsComponent(profileService, partyService, fb, cdr, router, commonService, toastService, titleCasePipe, dialog) {
          _classCallCheck(this, _ShopProfileSettingsComponent);

          this.profileService = profileService;
          this.partyService = partyService;
          this.fb = fb;
          this.cdr = cdr;
          this.router = router;
          this.commonService = commonService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.lang = src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__["default"].UAE;
          this.dragging = false;
          this.loaded = false;
          this.imageLoaded = false;
          this.activeColor = 'green';
          this.baseColor = '#ccc';
          this.signImg = '';
          this.profilePic = '';
          this.overlayColor = 'rgba(255,255,255,0.5)';
          this.partners = [];
          this.states = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'];
          this.ranges = [{
            value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
            label: "Last 7 Days"
          }, {
            value: [new Date(new Date().setDate(new Date().getMonth() - 1)), new Date()],
            label: "Last Month"
          }];
          this.typeList = [];
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.updated = false;
          this.date = new Date();
          this.addressId = "";
          this.businessNature = [];
          this.compositeType = false;
          this.isShown = true;
          this.visible = true;
          this.selectable = true;
          this.removable = true;
          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.COMMA];
          this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl();
          this.categoryBusiness = [];
          this.categoryName = [];
          this.categoryId = [];
          this.opened = false;
          this.isDisabledGST = true;
          this.addressArray = [];
          this.partenerAray = [];
          this.legTrad = false;
          this.cinFlag = false;
          this.partnerSubmitted = false;
          this.partnerDetails = [];
          this.additionaDetailsData = [];
          this.cosntBusiness = ["Proprietorship", "Partnership", "Private Limited Company", "Public Limited Company", "Limited Liability Partnership", "Hindu Undivided Family"];
          this.uaeCosntBusiness = ["Sole proprietorship", "Civil Company", "Limited Liability Company (LLC)", "Partnership", "Private Share Holding Company", "Public Share Holding Company", "Branch of Foreign Companies/Representative Office", "Branch of GCC companies", "Branch of Free zone company", "Branch of Dubai based companies", "Branch of UAE based companies"];
          this.ischecked = false;
          this.showUploadInput = false;
          this.imageSrc = "";
          this.showAdditionalFields = false;
          this.editedRowIndex = -1; //to store the index of the currently edited row

          this.additionaList = [];
          this.isFirstChange = true;
          this.isLoading = false;
          this.businesscategory = [];
          this.array = [];
          this.today = new Date();
          this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
        }

        _createClass(_ShopProfileSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //form for profile data
                      try {
                        this.TradeForm = this.fb.group({});
                        this.ProfileForm = this.fb.group({
                          firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z ]*$")]],
                          legalName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z ]*$")]],
                          businessType: [""],
                          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
                          mobile: [""],
                          gstType: [null],
                          gstStatus: [null],
                          gstinNo: [null],
                          state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                          city: [{
                            value: 'UAE',
                            disabled: true
                          }],
                          pincode: [null],
                          district: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                          landmark: [""],
                          country: ['United Arab Emirates (UAE) (Former Trucial Oman, Trucial States)'],
                          homeno: [""],
                          address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                          accountMethod: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                          compositeType: [""],
                          businessNature: [""],
                          panNumber: [null],
                          tradeName: [null],
                          financialYearFrom: [""],
                          bookBeginningFrom: [null],
                          cinNumber: [null],
                          profileImage: [null],
                          signatureImage: [null]
                        });
                        this.getType();
                        this.getBusinessCategory(); //calling get data api for profile

                        this.getProfileData(); //form for multiple address

                        this.addressForm = this.fb.group({
                          addresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray([])
                        }); // For Additional place of Business

                        this.businessPlaceAdd = this.fb.group({
                          pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          country: ['United Arab Emirates (UAE) (Former Trucial Oman, Trucial States)', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          homeno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          address: ['adress'],
                          areaStreet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                          landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
                        }); //for partner Form

                        this.businessForm = this.fb.group({
                          position: [""],
                          nameOfPartner: [""],
                          licenceAndCertificate: [""],
                          documentNumber: [""]
                        });
                      } catch (error) {}

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.cdr.detectChanges();
            });
          }
        }, {
          key: "getallPartnerList",
          value: function getallPartnerList() {
            var _this2 = this;

            this.profileService.getBusinessPartners({}, this.currentUser.id).then(function (res) {
              _this2.partnerDetails = res.data.filter(function (data) {
                return !(data.position === null) && !(data.nameOfPartner === null);
              });
            });
          }
        }, {
          key: "getAdditionaDetails",
          value: function getAdditionaDetails() {
            var _this3 = this;

            this.additionaDetailsData = [];
            this.profileService.getAdditionaDetails({}, this.currentUser.id).then(function (res) {
              _this3.additionaDetailsData = res.data.filter(function (data) {
                return !(data.documentNumber === null) && !(data.licenceAndCertificate === null);
              });
            });

            if (this.additionaDetailsData.length > 0) {
              this.showAdditionalFields = true;
            }
          }
        }, {
          key: "toggleAdditionalFields",
          value: function toggleAdditionalFields() {
            this.showAdditionalFields = !this.showAdditionalFields;
          }
        }, {
          key: "validatecinNumber",
          value: function validatecinNumber(cin) {
            var cinNo = cin.toUpperCase();
            var regex = /^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/;

            if (regex.test(cinNo)) {} else {
              this.ProfileForm.controls.cinNumber.setErrors({
                incorrect: true
              });
            }
          }
        }, {
          key: "validatepanNumber",
          value: function validatepanNumber(pan) {
            var panNo = pan.toUpperCase();
            var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;

            if (regex.test(panNo)) {} else {
              this.ProfileForm.controls.panNumber.setErrors({
                incorrect: true
              });
            }
          }
        }, {
          key: "validateTRN",
          value: function validateTRN(TRN) {
            if (TRN.length === 15) {
              this.isDisabledGST = false;
            } else {
              this.isDisabledGST = true;
              this.ProfileForm.controls.gstinNo.setErrors({
                incorrect: true
              });
            }
          }
          /**
           * get gst type
           * @param gstType
           */

          /**
           * Get Controls of FormArray
           */

        }, {
          key: "addressControls",
          get: function get() {
            return this.addressForm.get("addresses");
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            try {
              var data = this.addressForm.get("addresses");
              this.cdr.detectChanges();

              if (data) {
                data.push(this.createAddress());
                this.cdr.detectChanges();
              }
            } catch (_a) {}
          }
          /**
           * Delete array index from FormArray
           * @param index
           */

        }, {
          key: "deleteAddressForm",
          value: function deleteAddressForm(index) {
            var data = this.addressForm.get("addresses");
            data.removeAt(index);
          }
          /**
           * Add index to FormArray
           * @returns
           */

        }, {
          key: "createAddress",
          value: function createAddress() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
              homeno: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              district: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
              landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
            });
          }
          /**
           * Remove index from FormArray
           * @param i
           */

        }, {
          key: "removeAddress",
          value: function removeAddress(i) {
            this.addressForm.get("addresses").removeAt(i);
          }
          /**
           * Get Formcontrol of FormGroup
           */

        }, {
          key: "f",
          get: function get() {
            return this.ProfileForm.controls;
          }
        }, {
          key: "fpart",
          get: function get() {
            return this.businessForm.controls;
          }
        }, {
          key: "toggleShow",
          value: function toggleShow(checked) {
            this.isShown = checked;

            if (!this.isShown) {
              this.ProfileForm.get("gstinNo").clearValidators();
              this.ProfileForm.get("gstinNo").updateValueAndValidity();
            } else {
              this.ProfileForm.get("gstinNo").setValidators([]);
              this.ProfileForm.get("gstinNo").updateValueAndValidity();
            }
          }
        }, {
          key: "getCategoryNamesFromIds",
          value: function getCategoryNamesFromIds(ids) {
            var _this4 = this;

            return ids.map(function (id) {
              var category = _this4.categoryBusiness.find(function (item) {
                return item.id === id;
              });

              return category ? category.category : '';
            });
          }
          /**
           * Get user profile data
           */

        }, {
          key: "getProfileData",
          value: function getProfileData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.profileService.getUserProfile({}, this.currentUser.id).then(function (res) {
                        var _a;

                        _this5.data = res.data;
                        _this5.shopId = (_a = res.data.basicdetails) === null || _a === void 0 ? void 0 : _a.id;
                        _this5.profilePic = res.data.basicdetails.profileImage;
                        _this5.constitutionBusinessType = res.data.additional.businessType;
                        _this5.signImg = res.data.basicdetails.addSignature;
                        var otherAddresses = res.data.otherAddresses;

                        if (res.data.additional.gstType == "Composite") {
                          _this5.compositeType = true;
                        }

                        if (otherAddresses.length > 0) {
                          for (var i = 0; i < otherAddresses.length; i++) {
                            _this5.addressId = otherAddresses[i].id;

                            _this5.addressControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
                              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].address),
                              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].city),
                              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].country),
                              homeno: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].homeno),
                              pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].pincode),
                              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].state),
                              landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].landmark),
                              district: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].district),
                              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(otherAddresses[i].id)
                            }));
                          }
                        }

                        if (res.data.additional.isRegistered != null) {
                          _this5.toggleShow(res.data.additional.isRegistered);
                        }

                        if (res.data.additional.gstinNo != null) {}

                        var businessNatureData = res.data.businessTypes.map(function (item) {
                          return item.id;
                        });
                        _this5.businesscategory = res.data.businessCategory.map(function (item) {
                          return item.id;
                        });
                        _this5.categoryName = _this5.getCategoryNamesFromIds(_this5.businesscategory); //sending data from get api to form by patching

                        //sending data from get api to form by patching
                        _this5.ProfileForm.patchValue({
                          email: res.data.basicdetails.email,
                          businessType: res.data.additional.businessType,
                          firstName: res.data.basicdetails.firstName,
                          totalPlaces: res.data.additional.totalPlaces,
                          legalName: res.data.additional.legalName,
                          gstType: res.data.additional.gstType,
                          gstStatus: res.data.additional.status,
                          gstinNo: res.data.additional.gstinNo ? res.data.additional.gstinNo : null,
                          compositeType: res.data.additional.compositeType,
                          fullName: res.data.basicdetails.firstName,
                          mobile: res.data.basicdetails.mobile,
                          tradeName: res.data.additional.tradeName,
                          accountMethod: res.data.additional.accountMethod,
                          pincode: res.data.primaryAddress.pincode ? res.data.primaryAddress.pincode : null,
                          state: res.data.primaryAddress.state ? res.data.primaryAddress.state : null,
                          city: res.data.primaryAddress.city ? res.data.primaryAddress.city : null,
                          country: res.data.primaryAddress.country ? res.data.primaryAddress.country : 'UAE',
                          address: res.data.primaryAddress.address ? res.data.primaryAddress.address : null,
                          landmark: res.data.primaryAddress.landmark ? res.data.primaryAddress.landmark : null,
                          district: res.data.primaryAddress.district ? res.data.primaryAddress.district : null,
                          homeno: res.data.primaryAddress.homeno ? res.data.primaryAddress.homeno : null,
                          panNumber: res.data.additional.panNumber ? res.data.additional.panNumber : null,
                          financialYearFrom: res.data.additional.financialYearFrom ? moment__WEBPACK_IMPORTED_MODULE_1__(res.data.additional.financialYearFrom).format("DD-MMM-YYYY") : "",
                          bookBeginningFrom: res.data.additional.bookBeginningFrom ? moment__WEBPACK_IMPORTED_MODULE_1__(res.data.additional.bookBeginningFrom).format("DD-MMM-YYYY") : "",
                          cinNumber: res.data.additional.cinNumber,
                          businessNature: businessNatureData,
                          categoryCtrl: _this5.businesscategory
                        });
                      });

                    case 2:
                      if (this.ProfileForm.value.gstinNo !== null) {
                        this.isLoading = true;
                        this.isShown = true;
                        this.isDisabledGST = false;
                        this.isLoading = false;
                      }

                      this.getallPartnerList();
                      this.getAdditionaDetails();

                      if (!this.ProfileForm.valid) {
                        console.log("Profile form validity check---", this.ProfileForm);
                        this.toastService.toastMsg({
                          title: "Warning",
                          content: "profile data is not filled"
                        });
                      } else {}

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //get pincode api

        }, {
          key: "getPincodeDetails",
          value: function getPincodeDetails(pin) {
            var _this6 = this;

            this.profileService.getUserPincode({}, pin).then(function (res) {
              _this6.pinDetails = res;

              _this6.ProfileForm.patchValue({
                district: res.data.districtName,
                state: res.data.stateName
              });
            });
          }
        }, {
          key: "getPincodeDetailsForAdditionalAddress",
          value: function getPincodeDetailsForAdditionalAddress(pin, index) {
            var _this7 = this;

            if (pin.length == 6) {
              this.profileService.getUserPincode({}, pin).then(function (res) {
                _this7.pinDetails = res.data;

                _this7.addressControls.controls[index].patchValue({
                  pincode: _this7.pinDetails.pincode,
                  state: _this7.pinDetails.stateName,
                  district: _this7.pinDetails.districtName
                });

                _this7.addressControls.at(index).patchValue(res.data.stateName, res.data.districtName);
              });
            }
          }
          /**
           * get nature of business list
           */

        }, {
          key: "getType",
          value: function getType() {
            var _this8 = this;

            this.profileService.getTypes({}).then(function (response) {
              _this8.typeList = response.data;
            });
          }
          /**
           * Update user profile
           * @returns
           */

        }, {
          key: "updateUserProfile",
          value: function updateUserProfile() {
            var _this9 = this;

            console.log(this.ProfileForm);
            this.submitted = true;
            var registerdProfileData;
            registerdProfileData = {
              basicdetails: {
                firstName: this.ProfileForm.controls.firstName.value // addSignature: this.signImg,
                // profileImage: this.profileImage,

              },
              additional: {
                isRegistered: this.isShown,
                legalName: this.ProfileForm.controls.legalName.value ? this.ProfileForm.controls.legalName.value : null,
                businessType: this.ProfileForm.controls.businessType.value ? this.ProfileForm.controls.businessType.value : null,
                gstType: this.ProfileForm.controls.gstType.value,
                gstStatus: this.ProfileForm.controls.gstStatus.value,
                // ...(this.ProfileForm.controls.compositeType.value == "Composite") && ({ "compositeType": this.ProfileForm.controls.compositeType.value }),
                compositeType: this.ProfileForm.controls.compositeType.value ? this.ProfileForm.controls.compositeType.value : "Trader",
                gstinNo: this.ProfileForm.controls.gstinNo.value ? this.ProfileForm.controls.gstinNo.value.toUpperCase() : null,
                accountMethod: this.ProfileForm.controls.accountMethod.value,
                state: this.ProfileForm.controls.state.value,
                //   "legalName": this.ProfileForm.controls.legalName.value,
                totalPlaces: 0,
                category: [].concat(_toConsumableArray(this.categoryId), _toConsumableArray(this.businesscategory)),
                tradeName: this.ProfileForm.controls.tradeName.value,
                panNumber: this.ProfileForm.controls.panNumber.value,
                financialYearFrom: this.ProfileForm.controls.financialYearFrom.value,
                bookBeginningFrom: this.ProfileForm.controls.bookBeginningFrom.value,
                cinNumber: this.ProfileForm.controls.cinNumber.value ? this.ProfileForm.controls.cinNumber.value : null
              },
              address: {
                state: this.ProfileForm.controls.state.value,
                pincode: this.ProfileForm.controls.pincode.value,
                city: this.ProfileForm.controls.district.value ? this.ProfileForm.controls.district.value : "",
                district: this.ProfileForm.controls.district.value,
                // landmark: this.ProfileForm.controls.landmark.value ? this.ProfileForm.controls.landmark.value : "landmark",
                country: this.ProfileForm.controls.country.value,
                // homeno: "homeno",
                address: this.ProfileForm.controls.address.value
              },
              businesses: this.ProfileForm.controls.businessNature.value,
              categoryBusiness: [].concat(_toConsumableArray(this.categoryId), _toConsumableArray(this.businesscategory)) // businessCategory: this.ProfileForm.controls.categoryCtrl.value,

            };
            var finalObject;

            if (!this.isShown) {
              finalObject = registerdProfileData;
            } else {
              finalObject = registerdProfileData; // finalObject = profileData;
            }

            if (this.ProfileForm.valid) {
              this.profileService.updateUserprofile(finalObject, this.currentUser.id).then(function (res) {
                if (res.success) {
                  _this9.addBusinessPartners();

                  _this9.addDetailsAPI();

                  _this9.router.navigate(["/pages/warehouse-landing/warehouse-profile"]);
                }
              }, function (err) {
                if (err.error.ststus == 500) {
                  _this9.toastService.toastMsg({
                    title: "Error",
                    content: "err.error.error_message"
                  });
                }
              });
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "Please Fill Up Mandatory Details First Before Submit"
              });
            }
          }
          /**
           * Add multiple address
           */

        }, {
          key: "addMultipleAddress",
          value: function addMultipleAddress() {
            var _this10 = this;

            var newAddress = this.addressForm.get('addresses').value[this.addressControls.length - 1]; // Check if the new address is not null and contains valid data

            if (newAddress && newAddress.address && newAddress.city && newAddress.country && newAddress.district && newAddress.homeno && newAddress.landmark && newAddress.pincode && newAddress.state) {
              var addressData = {
                id: newAddress.id || "",
                address: newAddress.address,
                city: newAddress.city,
                country: newAddress.country,
                district: newAddress.district,
                homeno: newAddress.homeno,
                landmark: newAddress.landmark,
                pincode: newAddress.pincode.toString(),
                state: newAddress.state
              };
              this.profileService.postMultipleAddress({
                addresses: [addressData]
              }, this.currentUser.id).then(function (res) {
                if (res.success) {
                  _this10.toastService.toastMsg({
                    title: "Success",
                    content: "Address Added Successfully!!!"
                  });

                  _this10.addressArray = [];
                }
              }, function (err) {
                if (err.error.status === 400) {
                  _this10.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Additional Address Details."
                  });
                }
              });
            } else if (newAddress && newAddress.address && newAddress.city && newAddress.country && newAddress.district && newAddress.homeno && newAddress.landmark && newAddress.state) {
              var addressData = {
                id: newAddress.id || "",
                address: newAddress.address,
                city: newAddress.city,
                country: newAddress.country,
                district: newAddress.district,
                homeno: newAddress.homeno,
                landmark: newAddress.landmark,
                pincode: newAddress.pincode.toString(),
                state: newAddress.state
              };
              this.profileService.postMultipleAddress({
                addresses: [addressData]
              }, this.currentUser.id).then(function (res) {
                if (res.success) {
                  _this10.toastService.toastMsg({
                    title: "Success",
                    content: "Address Added Successfully!!!"
                  });

                  _this10.addressArray = [];
                }
              }, function (err) {
                if (err.error.status === 400) {
                  _this10.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Additional Address Details."
                  });
                }
              });
            }
          }
        }, {
          key: "addDetails",
          value: function addDetails() {
            var _a, _b;

            this.partnerSubmitted = true;

            if (this.businessForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              var partner = {
                "documentNumber": (_a = this.businessForm.value) === null || _a === void 0 ? void 0 : _a.documentNumber,
                "licenceAndCertificate": (_b = this.businessForm.value) === null || _b === void 0 ? void 0 : _b.licenceAndCertificate
              };
              this.additionaDetailsData.push(partner);
              this.additionaList.push(partner);
              this.businessForm.reset();
            }
          }
        }, {
          key: "addDetailsAPI",
          value: function addDetailsAPI() {
            var _this11 = this;

            var _a, _b, _c, _d, _e, _f;

            if (this.businessForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else if (!(((_a = this.businessForm.value) === null || _a === void 0 ? void 0 : _a.documentNumber) === "" || ((_b = this.businessForm.value) === null || _b === void 0 ? void 0 : _b.documentNumber) === null) && !(((_c = this.businessForm.value) === null || _c === void 0 ? void 0 : _c.licenceAndCertificate) === "" || ((_d = this.businessForm.value) === null || _d === void 0 ? void 0 : _d.licenceAndCertificate) === null)) {
              var partner = {
                "documentNumber": (_e = this.businessForm.value) === null || _e === void 0 ? void 0 : _e.documentNumber,
                "licenceAndCertificate": (_f = this.businessForm.value) === null || _f === void 0 ? void 0 : _f.licenceAndCertificate
              };
              this.additionaList.push(partner);
              this.profileService.addLicDocument(this.additionaList, this.currentUser.id).then(function (res) {
                if (res.success) {
                  _this11.businessForm.reset();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this11.toastService.toastMsg({
                    title: "Error",
                    content: _this11.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this11.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "addPartner",
          value: function addPartner(event) {
            var _a, _b;

            if (event) {
              event.preventDefault(); // Prevent the default behavior of the Enter key
            }

            this.partnerSubmitted = true;

            if (this.businessForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Requirted Fields."
              });
            } else {
              var partner = {
                "position": (_a = this.businessForm.value) === null || _a === void 0 ? void 0 : _a.position,
                "nameOfPartner": (_b = this.businessForm.value) === null || _b === void 0 ? void 0 : _b.nameOfPartner
              };
              this.partnerDetails.push(partner);
              this.partners.push(partner);
              this.businessForm.reset();
            }
          }
        }, {
          key: "openEditModal",
          value: function openEditModal(i, partner) {
            var _this12 = this;

            var _a;

            var dialogRef = this.dialog.open(src_app_pages_Profile_profile_settings_edit_business_partner_modal_edit_business_partner_modal_component__WEBPACK_IMPORTED_MODULE_2__.EditBusinessPartnerModalComponent, {
              width: '400px',
              data: {
                position: partner.position,
                nameOfPartner: partner.nameOfPartner,
                businessType: (_a = this.ProfileForm.value) === null || _a === void 0 ? void 0 : _a.businessType,
                partnerId: partner.id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this12.getallPartnerList(); // Update the edited partner in the partnerForms array


                var _partner = _this12.businessForm[i].patchValue({
                  position: result.position,
                  nameOfPartner: result.nameOfPartner
                });

                _this12.partnerDetails.push(_partner);
              }
            });
          }
        }, {
          key: "addBusinessPartners",
          value: function addBusinessPartners() {
            var _this13 = this;

            var _a, _b;

            if (this.businessForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Requirted Fields."
              });
              return false;
            } else if (!(this.businessForm.value.position === "" || this.businessForm.value.position === null) && !(this.businessForm.value.nameOfPartner === "" || this.businessForm.value.nameOfPartner === null)) {
              var partner = {
                "position": (_a = this.businessForm.value) === null || _a === void 0 ? void 0 : _a.position,
                "nameOfPartner": (_b = this.businessForm.value) === null || _b === void 0 ? void 0 : _b.nameOfPartner
              };
              this.partners.push(partner);
            }

            this.profileService.addBusinessPartners(this.partners, this.currentUser.id).then(function (res) {
              if (res.success) {
                _this13.partners = [];

                _this13.addDetailsAPI();

                _this13.businessForm.reset();

                _this13.updated = true;
              }
            }, function (err) {
              if (err.error.expose) {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: _this13.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "deletePartner",
          value: function deletePartner(partnerId) {
            var _this14 = this;

            this.profileService.deletePartner({}, this.currentUser.id, partnerId).then(function (res) {
              _this14.getallPartnerList();

              _this14.toastService.toastMsg({
                title: "Success",
                content: "Partner Deleted Successfully!!!"
              });
            }, function (err) {
              if (err.error.expose) {
                _this14.toastService.toastMsg({
                  title: "Error",
                  content: _this14.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this14.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "isInvalidDate",
          value: function isInvalidDate(event) {
            var test = event.target.value;

            if (test == "Invalid date") {
              event.target.value = (0, _angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(new Date(), "DD/MM/", "en"); // Change it here
            }
          }
          /**
           * update multiple address by addressId
           * @param item
           */

        }, {
          key: "updateMultipleAddress",
          value: function updateMultipleAddress(item) {
            var _this15 = this;

            var data = {
              homeno: item.value.homeno ? item.value.homeno : "",
              landmark: item.value.landmark ? item.value.landmark : "",
              district: item.value.district ? item.value.district : "",
              pincode: item.value.pincode ? item.value.pincode : "",
              address: item.value.address ? item.value.address : "",
              city: item.value.city ? item.value.city : "",
              state: item.value.state ? item.value.state : "",
              country: item.value.country ? item.value.country : ""
            };
            this.profileService.updateMultipleAddress(data, item.value.id).then(function (res) {
              if (res) {
                _this15.toastService.toastMsg({
                  title: "Success",
                  content: "Address Updated Successfully!!!"
                });
              }
            }, function (err) {
              if (err.error.expose) {
                _this15.toastService.toastMsg({
                  title: "Error",
                  content: _this15.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this15.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
          /**
           * Delete Addresses by addressId
           * @param item
           */

        }, {
          key: "deleteAddress",
          value: function deleteAddress(item) {
            var _this16 = this;

            this.profileService.deleteAddressById({}, item.value.id).then(function (res) {
              if (res) {
                _this16.toastService.toastMsg({
                  title: "Success",
                  content: "Address Deleted Successfully!!!"
                });

                window.location.reload();
              }
            });
          } // Additional Place Of Business

        }, {
          key: "addPlaceOfBusiness",
          value: function addPlaceOfBusiness() {
            var _this17 = this;

            if (this.businessPlaceAdd.valid) {
              var addressData = this.businessPlaceAdd.value;
              this.profileService.postMultipleAddress({
                addresses: [addressData]
              }, this.shopId).then(function (res) {
                if (res.success) {
                  _this17.toastService.toastMsg({
                    title: "Success",
                    content: "Address Added Successfully!!!"
                  });

                  _this17.businessPlaceAdd.reset();
                }
              }, function (err) {
                if (err.error.status == 400) {
                  _this17.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Additional Address Details."
                  });
                } else {
                  _this17.toastService.toastMsg({
                    title: "Error",
                    content: "Something went wrong"
                  });
                }
              });
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
            }
          }
          /**
           * Update Mobile
           */

        }, {
          key: "updateMobile",
          value: function updateMobile() {
            var _this18 = this;

            var data = {
              mobile: this.ProfileForm.controls.mobile.value
            };
            this.profileService.updateClientMobileOTP(data, this.currentUser.id).then(function (res) {
              _this18.toastService.toastMsg({
                title: "Success",
                content: "OTP Sent Successfully!!!"
              });
            });
          }
        }, {
          key: "updateMobileNumber",
          value: function updateMobileNumber() {
            var _this19 = this;

            var data = {
              email: this.ProfileForm.controls.email.value,
              mobile: this.ProfileForm.controls.mobile.value,
              mobileotp: this.mobileOtp
            };
            this.profileService.updateClientMobile(data).then(function (res) {
              _this19.toastService.toastMsg({
                title: "Success",
                content: "Mobile Number Verified Successfully!!!"
              });
            });
          }
          /**
           * add category name in categortNames array
           * @param event
           */

        }, {
          key: "add",
          value: function add(event) {
            var input = event.input;
            var value = event.value; // Add our category

            if ((value || "").trim()) {
              this.typeList.push(value.trim());
            } // Reset the input value


            if (input) {
              input.value = "";
            }

            this.categoryCtrl.setValue(value);
          }
          /**
           * remove/delete selected category
           * @param category
           */

        }, {
          key: "remove",
          value: function remove(category) {
            var index = this.categoryName.indexOf(category);

            if (index >= 0) {
              this.categoryName.splice(index, 1);
              this.categoryId.splice(index, 1);
            }
          }
          /**
           * called when category selected from dropdown
           * @param event
           */

        }, {
          key: "selected",
          value: function selected(event) {
            var _this20 = this;

            var newValue = event.option.viewValue;

            if (this.categoryName.includes(newValue)) {
              this.categoryName = _toConsumableArray(this.categoryName.filter(function (category) {
                return category !== newValue;
              }));
            } else {
              this.categoryName.push(event.option.viewValue);
            }

            this.categoryInput.nativeElement.value = ""; // keep the autocomplete opened after each item is picked.

            requestAnimationFrame(function () {
              _this20.openAuto(_this20.matACTrigger);
            });
          }
          /**
           * open category dropdown panel
           * @param trigger
           */

        }, {
          key: "openAuto",
          value: function openAuto(trigger) {
            trigger.openPanel();
            this.categoryInput.nativeElement.focus();
          }
        }, {
          key: "searchCategoryByCategory",
          value: function searchCategoryByCategory(categoryInput) {
            var _this21 = this;

            this.profileService.getCategoryBySearch({}, categoryInput).then(function (res) {
              _this21.serachByCategory = res.data;
            });
          }
          /**
           * Get all categories
           */

        }, {
          key: "getBusinessCategory",
          value: function getBusinessCategory() {
            var _this22 = this;

            this.profileService.getBuisnessCategoryAll({}).then(function (res) {
              _this22.categoryBusiness = res.data.rows;
              _this22.filteredCategory = _this22.categoryCtrl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(""), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function (name) {
                return name ? _this22.filterNames(name) : _this22.categoryBusiness.slice();
              }));
            });
          }
          /**
           * filter search category names
           * @param name
           * @returns
           */

        }, {
          key: "filterNames",
          value: function filterNames(name) {
            return this.categoryBusiness.filter(function (list) {
              list.category.toLowerCase().indexOf(name) === 0;
            });
          }
        }, {
          key: "getCategoryId",
          value: function getCategoryId(list) {
            this.array.push(list.id);
            this.categoryId = this.array.filter(function (item, index, self) {
              return self.indexOf(item) === index;
            });
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
          key: "signatureLoad",
          value: function signatureLoad() {
            this.imageLoaded = true;
          }
        }, {
          key: "signatureDrop",
          value: function signatureDrop(e) {
            e.preventDefault();
            this.dragging = false;
          }
        }, {
          key: "signatureChange",
          value: function signatureChange(e) {
            var _this23 = this;

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
                _this23.signImg = reader.result;
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
                  _this23.toastService.toastMsg({
                    title: "Success",
                    content: "Image Uploaded Successfully!!!"
                  });
                }, function (err) {});
                this.loaded = true;
              }
            }
          }
        }, {
          key: "handleDragEnter",
          value: function handleDragEnter() {
            this.dragging = true;
          }
        }, {
          key: "handleDragLeave",
          value: function handleDragLeave() {
            this.dragging = false;
          }
        }, {
          key: "handleDrop",
          value: function handleDrop(e) {
            e.preventDefault();
            this.dragging = false;
            this.handleInputChange(e);
          }
        }, {
          key: "handleImageLoad",
          value: function handleImageLoad() {
            this.imageLoaded = true;
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            var _this24 = this;

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
                _this24.profilePic = reader.result;
              };

              if (file == null) {
                this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Select Image To Upload."
                });
              } else {
                formdata.set("upload", file);
                e.srcElement.value = "";
                this.profileService.postProfileImage(formdata, this.currentUser.id).then(function (res) {
                  _this24.toastService.toastMsg({
                    title: "Success",
                    content: "Image Uploaded Successfully!!!"
                  });

                  _this24.partyService.notifyPartyAdded();
                });
                this.loaded = true;
              }
            }
          } // }

        }, {
          key: "deleteProfilePic",
          value: function deleteProfilePic() {
            var _this25 = this;

            // Clear the profilePic value
            this.profilePic = '';
            var formdata = new FormData();
            formdata.set("upload", null); // Sending an empty file or null to indicate deletion

            this.profileService.deleteProfileImg(formdata, this.currentUser.id).then(function (res) {
              _this25.toastService.toastMsg({
                title: "Success",
                content: "Image Deleted Successfully!!!"
              });

              _this25.partyService.notifyPartyAdded();

              _this25.profilePic = null; // Clear the profilePic value

              _this25.loaded = true;
            })["catch"](function (error) {});
          }
        }, {
          key: "deleteSignature",
          value: function deleteSignature() {
            var _this26 = this;

            // Clear the profilePic value
            this.signImg = '';
            var formdata = new FormData();
            formdata.set("uploadSignature", null);
            this.profileService.deleteSignature(formdata, this.currentUser.id).then(function (res) {
              _this26.toastService.toastMsg({
                title: "Success",
                content: "Image Deleted Successfully!!!"
              });

              _this26.signImg = null;
              _this26.loaded = true;
            }, function (err) {});
          }
        }, {
          key: "openDatePicker",
          value: function openDatePicker() {
            var selectedDate = this.ProfileForm.get('bookBeginningFrom').value; // Check if selectedDate is a Date object

            if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
              // If it's a valid Date, continue with your logic
              console.log('Selected Date:', selectedDate);
            } else {
              // If selectedDate is not a valid Date, set a default date or any valid date here
              this.ProfileForm.get('bookBeginningFrom').setValue(new Date());
            }
          }
        }, {
          key: "openDatepicker1",
          value: function openDatepicker1() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.ProfileForm.get('financialYearFrom').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.ProfileForm.get('financialYearFrom').setValue(new Date());
            }
          }
        }]);

        return _ShopProfileSettingsComponent;
      }();

      _ShopProfileSettingsComponent.ɵfac = function ShopProfileSettingsComponent_Factory(t) {
        return new (t || _ShopProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_4__.PartyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
      };

      _ShopProfileSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ShopProfileSettingsComponent,
        selectors: [["app-shop-profile-settings"]],
        viewQuery: function ShopProfileSettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.categoryInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.matACTrigger = _t.first);
          }
        },
        decls: 139,
        vars: 67,
        consts: [[1, "container-fluid", "pt-3"], [1, "fixed-nav-panel", "row"], [1, "nav-panel-header", "col-lg-3"], [1, "form-label", "mb-3", 2, "font-size", "20px", "font-weight", "500"], [1, "nav-panel-actions", "headerButtons", "col-lg-9"], [1, "nav-panel-btns"], ["mat-stroked-button", "", 1, "text-nowrap", 2, "background", "rgb(64, 156, 193, 0.3)", "color", "rgb(29, 145, 174)"], [1, "fas", "fa-comment"], ["mat-raised-button", "", "routerLink", "/pages/shop-landing/shop-profile-setting/shop-profile", 1, "text-nowrap", 2, "border", "1px solid #000"], ["mat-raised-button", "", "type", "submit", 1, "text-nowrap", "text-light", 2, "background", "#a0a0a0", 3, "click"], [2, "background-color", "black", "font-weight", "bold"], ["autocomplete", "off", 3, "formGroup"], [1, "profile-options", "row"], [1, "profile-details", "col-sm-12", "col-md-6", "col-lg-6", "pe-4"], [1, "row", "mb-5"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "image-wrapper"], ["ondragover", "return false;", 1, "profile-pic", 3, "dragenter", "dragleave", "drop"], [1, "shadow-sm", 3, "src", "load"], ["type", "file", "name", "file", "accept", "image/*", 3, "change"], ["class", "delete-button", "type", "button", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "form-label"], [1, "col-lg-2"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "form-label", "ms-2"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "required", "", "formControlName", "firstName", "maxLength", "50", "placeholder", "First Name", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "row", "mb-3"], ["type", "email", "readonly", "", "matInput", "", "required", "", "formControlName", "email", "placeholder", "Email", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "mobile", "minlength", "9", "maxlength", "9", "placeholder", "Mobile Number", 3, "ngClass", "keypress"], ["class", "col-lg-6 col-md-12 col-sm-12", 4, "ngIf"], [1, "col-sm-12"], ["for", "billingAddress", 1, "form-label", "ms-2"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "address", "row", "2", "placeholder", "Billing Address", "required", "", 3, "ngClass"], ["required", "", "formControlName", "state", "name", "pintxt", "id", "pintxt", "placeholder", "State", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "district", "placeholder", "City", "required", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "value", "UAE", "placeholder", "Country", 3, "ngClass"], [1, "profile-details", "col-sm-12", "col-md-6", "col-lg-6", "ps-4"], [1, "row"], ["matNativeControl", "", "matInput", "", "formControlName", "tradeName", "placeholder", "Trade Name", "maxlength", "100", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "required", "", "formControlName", "accountMethod", "placeholder", "Account Method", "required", "", 3, "ngClass"], ["value", "Accounts"], ["value", "Accounts With Stock Management"], ["class", "col-xl-6 col-lg-12 col-md-12 col-sm-12", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "form-check", "form-switch", "mb-3", 2, "padding-left", "3.7rem"], ["type", "checkbox", "id", "toggleAdditionalFields", 1, "form-check-input", 3, "change"], ["class", "form-check-label", "for", "toggleAdditionalFields", 4, "ngIf"], ["class", "form-check-label", "for", "toggleAdditionalFields", "style", "font-size: 14px;", 4, "ngIf"], ["class", "mb-3 pb-1", 4, "ngIf"], [1, "my-3"], ["class", "mb-3", 4, "appHasPermission", "appHasPermissionName"], ["type", "button", 1, "delete-button", 3, "click"], [1, "bi", "bi-x", "bi-sm"], [1, "text-danger"], ["appearance", "outline", 1, "example-full-width", 2, "width", "85%"], ["type", "text", "matInput", "", "formControlName", "gstinNo", "maxlength", "15", "required", "", 3, "placeholder", "ngClass", "keypress", "keyup"], ["input1", ""], ["diameter", "30", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["diameter", "30"], [3, "ngClass"], ["matNativeControl", "", "matInput", "", "type", "text", "formControlName", "cinNumber", "placeholder", "CIN", "required", "", 3, "ngClass", "keyup", "input"], ["matNativeControl", "", "matInput", "", "type", "text", "formControlName", "legalName", "placeholder", "Legal Name", "requied", "", 3, "ngClass"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matInput", "", "bsDatepicker", "", "placeholder", "Financial Year From", "formControlName", "financialYearFrom", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "maxDate", "bsConfig", "ngClass", "click"], [1, "iconcalender"], [3, "value"], ["formControlName", "businessType", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Constitution of Business", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "formControlName", "businessNature", "placeholder", "Business Type", "multiple", "", "required", "", 3, "ngClass"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], ["aria-label", "category selection", 3, "multiple"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Business Category", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "ngClass", "click", "matChipInputTokenEnd"], ["categoryInput", "", "autocompleteTrigger", "matAutocompleteTrigger"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 2, "width", "34px", "height", "34px", 3, "click"], [2, "width", "34px"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value", "onSelectionChange"], ["color", "primary", 2, "padding", "0 12px", 3, "checked"], [1, "mb-3"], [1, "pb-3", "form-label", 2, "font-size", "16px", "font-weight", "500"], [1, ""], [3, "formGroup"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "bg-white"], [1, "inner-model-table-heading"], [1, "btn-reveal-trigger"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle"], [4, "ngFor", "ngForOf"], ["placeholder", "Position", "formControlName", "position", 3, "value"], ["selected", "", 3, "value"], ["matInput", "", "type", "text", "placeholder", "Name Of Partner", "formControlName", "nameOfPartner", 3, "keydown.enter"], [1, "btn", "btnp", 3, "disabled"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "fs-1"], ["text-center", "", 1, "m-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "fs-1"], [1, "btn", "btnp", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", "btnp", 2, "color", "red", 3, "click"], ["matInput", "", "type", "text", "placeholder", "Name Of Director", "formControlName", "nameOfPartner"], ["matInput", "", "type", "text", "placeholder", "Position", "formControlName", "position", 3, "keydown.enter"], ["matInput", "", "type", "text", "placeholder", "Name of Member", "formControlName", "nameOfPartner", 3, "keydown.enter"], ["for", "toggleAdditionalFields", 1, "form-check-label"], [2, "font-size", "14px", "font-weight", "500"], ["for", "toggleAdditionalFields", 1, "form-check-label", 2, "font-size", "14px"], [1, "mb-3", "pb-1"], ["matInput", "", "type", "text", "placeholder", "License/Certificate", "formControlName", "licenceAndCertificate"], ["matInput", "", "type", "text", "placeholder", "Document Number", "formControlName", "documentNumber", 3, "keyup.enter"], [1, "flex", "d-flex", "flex-row", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "form-check", "form-switch", "mb-0"], ["id", "customSwitch1", "type", "checkbox", 1, "form-check-input", "text-center"], ["formArrayName", "addresses", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12", "col-lg-12", "d-flex", "justify-content-end", "pb-4"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px", 3, "click"], ["class", "btn btn-save", "type", "button", 3, "click", 4, "appHasPermission", "appHasPermissionName"], ["formArrayName", "addresses"], [1, "row", 3, "formGroupName"], [1, "col-sm-12", "col-md-4", "col-lg-4"], ["type", "text", "matInput", "", "required", "", "maxlength", "6", "minlength", "6", "formControlName", "pincode", "placeholder", "Pincode", "value", "", 3, "ngClass", "input", "keypress"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "required", "", "type", "text", "ngxOnlyString", "", "formControlName", "state", "name", "pintxt", "id", "pintxt", "placeholder", "State", "value", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "district", "placeholder", "District", "required", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "country", "placeholder", "Country", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "city", "placeholder", "Town/City", "required", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "homeno", "placeholder", "House No,Apartment,Building,Company", "required", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "address", "placeholder", "Area", "required", "", 3, "ngClass"], ["matNativeControl", "", "matInput", "", "required", "", "type", "text", "formControlName", "landmark", "placeholder", "Landmark", "required", "", 3, "ngClass"], [1, "d-flex", "justify-content-center"], [4, "ngIf"], ["type", "button", "class", "btn btn-cancel", 3, "click", 4, "ngIf"], ["class", "btn btn-save mb-1", "type", "button", "style", "margin-right: 10px;", 3, "click", 4, "appHasPermission", "appHasPermissionName"], ["type", "button", 1, "btn", "btn-save", "mb-1", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"]],
        template: function ShopProfileSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Business Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Chat Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopProfileSettingsComponent_Template_button_click_12_listener() {
              return ctx.updateUserProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Save Changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "hr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragenter", function ShopProfileSettingsComponent_Template_label_dragenter_21_listener() {
              return ctx.handleDragEnter();
            })("dragleave", function ShopProfileSettingsComponent_Template_label_dragleave_21_listener() {
              return ctx.handleDragLeave();
            })("drop", function ShopProfileSettingsComponent_Template_label_drop_21_listener($event) {
              return ctx.handleDrop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function ShopProfileSettingsComponent_Template_img_load_22_listener() {
              return ctx.handleImageLoad();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ShopProfileSettingsComponent_Template_input_change_23_listener($event) {
              return ctx.handleInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ShopProfileSettingsComponent_button_24_Template, 2, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Add Profile Pic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Admin Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ShopProfileSettingsComponent_mat_error_35_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ShopProfileSettingsComponent_mat_error_36_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ShopProfileSettingsComponent_mat_error_45_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, ShopProfileSettingsComponent_mat_error_46_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function ShopProfileSettingsComponent_Template_input_keypress_53_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ShopProfileSettingsComponent_mat_error_54_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ShopProfileSettingsComponent_mat_error_55_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ShopProfileSettingsComponent_mat_error_56_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ShopProfileSettingsComponent_div_58_Template, 16, 12, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ShopProfileSettingsComponent_div_59_Template, 11, 6, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ShopProfileSettingsComponent_div_61_Template, 9, 5, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ShopProfileSettingsComponent_div_62_Template, 11, 7, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Billing Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "textarea", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ShopProfileSettingsComponent_mat_error_71_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, ShopProfileSettingsComponent_mat_option_80_Template, 2, 2, "mat-option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, ShopProfileSettingsComponent_mat_error_81_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, ShopProfileSettingsComponent_mat_error_90_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](97, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](99, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Trade Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](107, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, ShopProfileSettingsComponent_mat_error_108_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, ShopProfileSettingsComponent_div_110_Template, 9, 5, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Account Method");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "mat-select", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "mat-option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Only Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "mat-option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "Accounts With Stock Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, ShopProfileSettingsComponent_mat_error_122_Template, 2, 0, "mat-error", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](124, ShopProfileSettingsComponent_div_124_Template, 9, 5, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, ShopProfileSettingsComponent_div_125_Template, 20, 13, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, ShopProfileSettingsComponent_div_127_Template, 36, 7, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, ShopProfileSettingsComponent_div_128_Template, 36, 7, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](129, ShopProfileSettingsComponent_div_129_Template, 32, 4, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, ShopProfileSettingsComponent_div_130_Template, 32, 4, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](131, ShopProfileSettingsComponent_div_131_Template, 36, 7, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ShopProfileSettingsComponent_Template_input_change_133_listener() {
              return ctx.toggleAdditionalFields();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](134, ShopProfileSettingsComponent_label_134_Template, 3, 0, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](135, ShopProfileSettingsComponent_label_135_Template, 2, 0, "label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](136, ShopProfileSettingsComponent_div_136_Template, 30, 2, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "hr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](138, ShopProfileSettingsComponent_div_138_Template, 10, 5, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.ProfileForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("outline-color", ctx.dragging ? ctx.activeColor : ctx.baseColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("loaded", ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("loaded", ctx.imageLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.profilePic ? ctx.profilePic : "/assets/images/default-profile-pic.JPG", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.profilePic);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](48, _c4, ctx.f.firstName.invalid && ctx.f.firstName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.firstName.touched) && (ctx.f.firstName.errors == null ? null : ctx.f.firstName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.firstName.touched) && (ctx.f.firstName.errors == null ? null : ctx.f.firstName.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](50, _c4, ctx.f.email.invalid && ctx.f.email.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.email.touched) && (ctx.f.email.errors == null ? null : ctx.f.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.email.touched) && (ctx.f.email.errors == null ? null : ctx.f.email.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](52, _c4, ctx.f.mobile.invalid && ctx.f.mobile.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.minlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.maxlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.ProfileForm.get("businessType").value == "Private Limited Company" || ctx.ProfileForm.get("businessType").value == "Public Limited Company") && ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Proprietorship" || ctx.ProfileForm.get("businessType").value == "Hindu Undivided Family" && ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](54, _c4, ctx.f.address.invalid && ctx.f.address.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.address.touched) && (ctx.f.address.errors == null ? null : ctx.f.address.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](56, _c4, ctx.f.state.invalid && ctx.f.state.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.state.touched) && (ctx.f.state.errors == null ? null : ctx.f.state.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](58, _c4, ctx.f.district.invalid && ctx.f.district.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.district.touched) && (ctx.f.district.errors == null ? null : ctx.f.district.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](60, _c4, ctx.f.country.invalid && ctx.f.country.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](62, _c4, ctx.f.tradeName.invalid && ctx.f.tradeName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.tradeName.touched) && (ctx.f.tradeName.errors == null ? null : ctx.f.tradeName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](64, _c4, ctx.f.accountMethod.invalid && ctx.f.accountMethod.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.accountMethod.touched) && (ctx.f.accountMethod.errors == null ? null : ctx.f.accountMethod.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Partnership");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Limited Liability Partnership");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Private Limited Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Public Limited Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ProfileForm.get("businessType").value == "Hindu Undivided Family");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAdditionalFields);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showAdditionalFields);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAdditionalFields);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c7))("appHasPermissionName", "profile");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__.BsDatepickerDirective, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipList, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteTrigger, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocomplete, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipRemove, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
        styles: [".container-fluid[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.mobVerify[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin-left: 2px;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.toggle-margin[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n}\n\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -20px !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.nav-panel-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  padding: 0 30px 0 30px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Poppins;\n}\n\n.signature-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  border: 2px solid blue;\n  margin-bottom: 20px;\n}\n\n.signature-pad[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.canvas-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  border-bottom: 1px dashed #ccc;\n}\n\n.add-signature-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.signature-upload[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.signature-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: 220px;\n  height: 120px;\n  border: 2px dashed #0f91c5;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.signature-img[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.signature-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  font-size: 2rem;\n  color: #0f91c5;\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.signature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.signature-img[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: 175px;\n  height: 175px;\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profile-pic[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #000;\n  border-radius: 10px;\n  pointer-events: none;\n}\n\n.profile-pic.loaded[_ngcontent-%COMP%] {\n  border-color: #ff8800;\n}\n\n.profile-pic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 2rem;\n  color: #333;\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-pic[_ngcontent-%COMP%]   .dummy-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-pic[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.gst-status-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n  \n  color: #ff0000;\n  \n  padding-left: 15px;\n}\n\n.gst-status-icon.active[_ngcontent-%COMP%] {\n  color: #00ff00;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtcHJvZmlsZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBVUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFQTjs7QUFXRTtFQUNJLG9CQUFBO0FBUk47O0FBV0U7RUFDSSw0QkFBQTtBQVJOOztBQVdFO0VBQ0ksY0FBQTtBQVJOOztBQVdFO0VBQ0kseUJBQUE7QUFSTjs7QUFXRTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUFSTjs7QUFXRTtFQUNJLHNCQUFBO0FBUk47O0FBV0U7RUFDSSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFSTjs7QUFXRTtFQUNJLG9CQUFBO0FBUk47O0FBV0U7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJOOztBQVdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFSTjs7QUFXSTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFSTjs7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVJOOztBQVdJO0VBQ0UsYUFBQTtBQVJOOztBQVdFO0VBQ0ksYUFBQTtBQVJOOztBQVdFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFUTjs7QUFZRTtFQUNJLFVBQUE7QUFUTjs7QUFZSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFUTjs7QUFZSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQVROOztBQVlJO0VBQ0UsYUFBQTtBQVROOztBQWNFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVhOOztBQWNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVhOOztBQWNJO0VBQ0UscUJBQUE7QUFYTjs7QUFjSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWE47O0FBY0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFYTjs7QUFjSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQVhOOztBQWNJO0VBQ0UsYUFBQTtBQVhOOztBQWNFO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQVhOOztBQWNFO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQVhOOztBQWNFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWE47O0FBY0U7RUFDSSxVQUFBO0FBWE47O0FBY0U7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLGNBQUE7RUFBZ0Isa0NBQUE7RUFDaEIsa0JBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7RUFBZ0Isa0NBQUE7QUFScEIiLCJmaWxlIjoic2hvcC1wcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAvLyAuZm9ybUJ1dHRvbnMge1xyXG4gIC8vICAgZGlzcGxheTpmbGV4O1xyXG4gIC8vICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIC8vICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAvLyAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyAgIGZsZXgtYmFzaXM6IDQwMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAubW9iVmVyaWZ5IHtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRvZ2dsZS1tYXJnaW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICAgIGNvbG9yOiAjMmM3YmU1O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgICAgIGNvbG9yOiAjMmM3YmU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uY2FsZW5kZXIge1xyXG4gICAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtcGFuZWwtYnRucyBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jaGVja2JveHtcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWduYXR1cmUtY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2lnbmF0dXJlLXBhZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FudmFzLXdyYXBwZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFkZC1zaWduYXR1cmUtYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxuICBcclxuICAgIC5zaWduYXR1cmUtdXBsb2FkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAuc2lnbmF0dXJlLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWduYXR1cmUtaW1nIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYigxNSwgMTQ1LCAxOTcpO1xyXG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAuc2lnbmF0dXJlLWltZyBpbWcubG9hZGVkIHtcclxuICAgICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgICAuc2lnbmF0dXJlLWltZyBpIHtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGNvbG9yOiByZ2IoMTUsIDE0NSwgMTk3KTtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2lnbmF0dXJlLWltZyBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5zaWduYXR1cmUtaW1nIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAvLyB1cGxvYWQgcHJvZmlsZSBpbWFnZVxyXG4gIFxyXG4gIC5wcm9maWxlLXBpYyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGUtcGljOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZmlsZS1waWMubG9hZGVkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmY4ODAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGUtcGljIGkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGUtcGljIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGUtcGljIC5kdW1teS1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2ZpbGUtcGljIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAucHJvZmlsZS1waWMge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZGVsZXRlLWJ1dHRvbiBpIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmdzdC1zdGF0dXMtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7IC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xyXG4gICAgY29sb3I6ICNmZjAwMDA7IC8qIFJlZCBjb2xvciBmb3IgaW5hY3RpdmUgc3RhdHVzICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5nc3Qtc3RhdHVzLWljb24uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDBmZjAwOyAvKiBHcmVlbiBjb2xvciBmb3IgYWN0aXZlIHN0YXR1cyAqL1xyXG4gIH1cclxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    29179:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-settings/components/shop-profile/shop-profile.component.ts ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopProfileComponent": function ShopProfileComponent() {
          return (
            /* binding */
            _ShopProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShopProfileComponent = /*#__PURE__*/function () {
        function _ShopProfileComponent() {
          _classCallCheck(this, _ShopProfileComponent);
        }

        _createClass(_ShopProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ShopProfileComponent;
      }();

      _ShopProfileComponent.ɵfac = function ShopProfileComponent_Factory(t) {
        return new (t || _ShopProfileComponent)();
      };

      _ShopProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShopProfileComponent,
        selectors: [["app-shop-profile"]],
        decls: 2,
        vars: 0,
        template: function ShopProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shop-profile works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    49358:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-settings/shop-settings-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopSettingsRoutingModule": function ShopSettingsRoutingModule() {
          return (
            /* binding */
            _ShopSettingsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_shop_profile_settings_shop_profile_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/shop-profile-settings/shop-profile-settings.component */
      32836);
      /* harmony import */


      var _components_shop_profile_shop_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/shop-profile/shop-profile.component */
      29179);
      /* harmony import */


      var _shop_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shop-settings.component */
      76478);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _shop_settings_component__WEBPACK_IMPORTED_MODULE_2__.ShopSettingsComponent,
        children: [{
          path: '',
          redirectTo: 'shop-profile-settings',
          pathMatch: 'full'
        }, {
          path: 'shop-profile-settings',
          component: _components_shop_profile_settings_shop_profile_settings_component__WEBPACK_IMPORTED_MODULE_0__.ShopProfileSettingsComponent
        }, {
          path: 'shop-profile',
          component: _components_shop_profile_shop_profile_component__WEBPACK_IMPORTED_MODULE_1__.ShopProfileComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _ShopSettingsRoutingModule = /*#__PURE__*/_createClass(function _ShopSettingsRoutingModule() {
        _classCallCheck(this, _ShopSettingsRoutingModule);
      });

      _ShopSettingsRoutingModule.ɵfac = function ShopSettingsRoutingModule_Factory(t) {
        return new (t || _ShopSettingsRoutingModule)();
      };

      _ShopSettingsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ShopSettingsRoutingModule
      });
      _ShopSettingsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ShopSettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    76478:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-settings/shop-settings.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopSettingsComponent": function ShopSettingsComponent() {
          return (
            /* binding */
            _ShopSettingsComponent
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

      var _ShopSettingsComponent = /*#__PURE__*/function () {
        function _ShopSettingsComponent() {
          _classCallCheck(this, _ShopSettingsComponent);
        }

        _createClass(_ShopSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ShopSettingsComponent;
      }();

      _ShopSettingsComponent.ɵfac = function ShopSettingsComponent_Factory(t) {
        return new (t || _ShopSettingsComponent)();
      };

      _ShopSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShopSettingsComponent,
        selectors: [["app-shop-settings"]],
        decls: 1,
        vars: 0,
        template: function ShopSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6795:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-settings/shop-settings.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopSettingsModule": function ShopSettingsModule() {
          return (
            /* binding */
            _ShopSettingsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shop_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shop-settings-routing.module */
      49358);
      /* harmony import */


      var _shop_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shop-settings.component */
      76478);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _components_shop_profile_shop_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/shop-profile/shop-profile.component */
      29179);
      /* harmony import */


      var _components_shop_profile_settings_shop_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/shop-profile-settings/shop-profile-settings.component */
      32836);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShopSettingsModule = /*#__PURE__*/_createClass(function _ShopSettingsModule() {
        _classCallCheck(this, _ShopSettingsModule);
      });

      _ShopSettingsModule.ɵfac = function ShopSettingsModule_Factory(t) {
        return new (t || _ShopSettingsModule)();
      };

      _ShopSettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ShopSettingsModule
      });
      _ShopSettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shop_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopSettingsRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, // SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ShopSettingsModule, {
          declarations: [_shop_settings_component__WEBPACK_IMPORTED_MODULE_1__.ShopSettingsComponent, _components_shop_profile_shop_profile_component__WEBPACK_IMPORTED_MODULE_3__.ShopProfileComponent, _components_shop_profile_settings_shop_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__.ShopProfileSettingsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shop_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopSettingsRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, // SharedModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_shop-module_components_shop-settings_shop-settings_module_ts-es5.js.map