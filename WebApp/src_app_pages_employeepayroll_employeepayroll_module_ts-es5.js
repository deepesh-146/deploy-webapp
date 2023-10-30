(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_employeepayroll_employeepayroll_module_ts"], {
    /***/
    55633:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/employeepayroll/bank-account/addbankemployee/addbankemployee.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddbankemployeeComponent": function AddbankemployeeComponent() {
          return (
            /* binding */
            _AddbankemployeeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/confirmed.validators */
      93483);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/bank-service.service */
      91068);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function AddbankemployeeComponent_mat_error_26_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IFSC Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_26_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IFSC required MAHB0001115 format! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddbankemployeeComponent_mat_error_26_mat_error_1_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddbankemployeeComponent_mat_error_26_mat_error_2_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.IFSC.errors == null ? null : ctx_r0.f.IFSC.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.IFSC.errors == null ? null : ctx_r0.f.IFSC.errors.pattern);
        }
      }

      function AddbankemployeeComponent_mat_error_37_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_37_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number Required Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_37_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number Required Min Length 9 ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_37_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number Required Max Length 19! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddbankemployeeComponent_mat_error_37_mat_error_1_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddbankemployeeComponent_mat_error_37_mat_error_2_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddbankemployeeComponent_mat_error_37_mat_error_3_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddbankemployeeComponent_mat_error_37_mat_error_4_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.AccountNumber.errors == null ? null : ctx_r1.f.AccountNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.AccountNumber.errors == null ? null : ctx_r1.f.AccountNumber.errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.AccountNumber.errors == null ? null : ctx_r1.f.AccountNumber.errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.AccountNumber.errors == null ? null : ctx_r1.f.AccountNumber.errors.maxLength);
        }
      }

      function AddbankemployeeComponent_mat_error_45_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirm Account Number Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_45_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirm Account Number Required Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_45_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirm Account Number Required Min Length 9 ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_45_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Confirm Account Number Required Max Length 19! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddbankemployeeComponent_mat_error_45_mat_error_1_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddbankemployeeComponent_mat_error_45_mat_error_2_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddbankemployeeComponent_mat_error_45_mat_error_3_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddbankemployeeComponent_mat_error_45_mat_error_4_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.ConfirmAccountNumber.errors == null ? null : ctx_r2.f.ConfirmAccountNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.ConfirmAccountNumber.errors == null ? null : ctx_r2.f.ConfirmAccountNumber.errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.ConfirmAccountNumber.errors == null ? null : ctx_r2.f.ConfirmAccountNumber.errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.ConfirmAccountNumber.errors == null ? null : ctx_r2.f.ConfirmAccountNumber.errors.maxLength);
        }
      }

      function AddbankemployeeComponent_mat_option_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r17.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r17.bankName, " ");
        }
      }

      function AddbankemployeeComponent_mat_error_58_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " BankName Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddbankemployeeComponent_mat_error_58_mat_error_1_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.BankName.errors == null ? null : ctx_r5.f.BankName.errors.required);
        }
      }

      function AddbankemployeeComponent_mat_error_66_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Branch Name Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddbankemployeeComponent_mat_error_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddbankemployeeComponent_mat_error_66_mat_error_1_Template, 2, 0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.Branch.errors == null ? null : ctx_r6.f.Branch.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddbankemployeeComponent = /*#__PURE__*/function () {
        function _AddbankemployeeComponent(formBuilder, router, toastService, bankService, http, titleCasePipe, dialog, dialogRef) {
          _classCallCheck(this, _AddbankemployeeComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.bankService = bankService;
          this.http = http;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.hide = true;
        }

        _createClass(_AddbankemployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bankForm = this.formBuilder.group({
              IFSC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[A-Za-z]{4}0[0-9]{6}$')]],
              AccountHolderName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              BankName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              AccountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(19)]],
              ConfirmAccountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(19)]],
              Branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            }, {
              validator: (0, src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__.ConfirmedValidators)('AccountNumber', 'ConfirmAccountNumber')
            });
          }
        }, {
          key: "BankDatasave",
          value: function BankDatasave() {// this.submitted = true;
            // this.isEdit = false;
            // if (this.bankForm.invalid) {
            //   this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            //   return false;
            // }
            // else {
            //   let body = {
            //     "bankDetails": {
            //       "bankName": this.bankForm.controls.BankName.value,
            //       "branchCode": this.bankForm.controls.Branch.value,
            //       "accountNumber": this.bankForm.controls.AccountNumber.value,
            //       "ifscCode": this.bankForm.controls.IFSC.value.toUpperCase(),
            //       "accountHolderName":this.bankForm.controls.AccountHolderName.value
            //     }
            //   }
            //   if (this.bankForm.valid) {
            //     this.bankService.postBankDetails(body, this.currentUser.id).then((res) => {
            //       if (res) {
            //         this.toastService.openSnackBar("Bank Record Added Successfully!!!");
            //         this.router.navigate(["/pages/Bank-page"]);
            //         this.bankService.notifyPartyAdded();   
            //         this.dialogRef.close();
            //       }
            //     }, (err) => {
            //       this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message))
            //     });
            //   }
            // }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            //this.bankForm.reset();
            this.submitted = false;
            this.dialogRef.close();
          }
        }, {
          key: "f",
          get: function get() {
            return this.bankForm.controls;
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
          key: "getIFSCCode",
          value: function getIFSCCode(ifscCode) {
            var _this = this;

            console.log("ifscCode", ifscCode);

            if (ifscCode) {
              var body = {
                "bankDetails": {
                  "ifscCode": this.bankForm.controls.IFSC.value
                }
              };
              this.bankService.getBankDetailsByIFSC(body, this.currentUser.id).then(function (res) {
                _this.bankForm.patchValue({
                  'BankName': res.data.bankName,
                  'Branch': _this.titleCasePipe.transform(res.data.branchCode)
                });

                _this.toastService.openSnackBar("IFSC Code Validated Successfully!!!");
              }, function (err) {
                _this.toastService.openErrorSnackBar(_this.titleCasePipe.transform(err.error.error_message));
              });
            }
          }
        }]);

        return _AddbankemployeeComponent;
      }();

      _AddbankemployeeComponent.ɵfac = function AddbankemployeeComponent_Factory(t) {
        return new (t || _AddbankemployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
      };

      _AddbankemployeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddbankemployeeComponent,
        selectors: [["app-addbankemployee"]],
        decls: 67,
        vars: 27,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row", "mb-3", "mt-2"], [1, "col-sm-12", "col-md-6", "col-lg-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matInput", "", "placeholder", "Account Holder Name", "autocomplete", "off", "formControlName", "AccountHolderName", 1, "text-uppercase"], ["matInput", "", "placeholder", "IFSC", "formControlName", "IFSC", "autocomplete", "new-password", "value", "", 1, "text-uppercase", 3, "ngClass", "change"], ["class", "text-danger", 4, "ngIf"], [1, "row", "mb-3"], ["matInput", "", "placeholder", "Account Number", "formControlName", "AccountNumber", "minlength", "9", "autocomplete", "new-password", "maxlength", "19", "value", "", "autocomplete", "off", 3, "type", "ngClass", "keypress"], ["matSuffix", "", 3, "click"], ["matInput", "", "type", "text", "placeholder", "Re Enter Account Number", "formControlName", "ConfirmAccountNumber", "minlength", "9", "maxlength", "19", "autocomplete", "new-password", "value", "", 3, "ngClass"], ["type", "text", "placeholder", "Bank Name", "formControlName", "BankName", "aria-label", "Select Party Name", "matInput", "", "autocomplete", "new-password", "readonly", "", 3, "matAutocomplete", "ngClass"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "placeholder", "Branch", "formControlName", "Branch", "value", "", "readonly", "", 1, "text-capitalize", 3, "ngClass"], [1, "text-danger"], [4, "ngIf"], [3, "value"]],
        template: function AddbankemployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Bank");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddbankemployeeComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddbankemployeeComponent_Template_button_click_6_listener() {
              return ctx.BankDatasave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Account Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "IFSC");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddbankemployeeComponent_Template_input_change_25_listener($event) {
              return ctx.getIFSCCode($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddbankemployeeComponent_mat_error_26_Template, 3, 2, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AddbankemployeeComponent_Template_input_keypress_34_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddbankemployeeComponent_Template_mat_icon_click_35_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AddbankemployeeComponent_mat_error_37_Template, 5, 4, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Re-Enter Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AddbankemployeeComponent_mat_error_45_Template, 5, 4, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Bank Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-autocomplete", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AddbankemployeeComponent_mat_option_56_Template, 2, 2, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AddbankemployeeComponent_mat_error_58_Template, 2, 1, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Branch Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, AddbankemployeeComponent_mat_error_66_Template, 2, 1, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.bankForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx.f.IFSC.invalid && ctx.f.IFSC.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.IFSC.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx.f.AccountNumber.invalid && ctx.f.AccountNumber.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.hide ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.AccountNumber.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, ctx.f.ConfirmAccountNumber.invalid && ctx.f.ConfirmAccountNumber.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.ConfirmAccountNumber.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, ctx.f.BankName.invalid && ctx.f.BankName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 15, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.BankName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, ctx.f.Branch.invalid && ctx.f.Branch.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.Branch.touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
        styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -22px !important;\n}\n\n.mat-error[_ngcontent-%COMP%] {\n  margin: -0.5rem 0.5rem 2px !important;\n  padding: 4px !important;\n  font-size: 0.8rem !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGJhbmtlbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFkZGJhbmtlbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uY2FsZW5kZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWVycm9yIHtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAwLjVyZW0gMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    44255:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/employeepayroll/bank-account/bank-account.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BankAccountComponent": function BankAccountComponent() {
          return (
            /* binding */
            _BankAccountComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _addbankemployee_addbankemployee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addbankemployee/addbankemployee.component */
      55633);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _BankAccountComponent = /*#__PURE__*/function () {
        function _BankAccountComponent(dialog) {
          _classCallCheck(this, _BankAccountComponent);

          this.dialog = dialog;
          this.bankDetails = {
            "accountholdername": "ashleah",
            "accountnumber": "12345678910",
            "bankname": "Bank of India",
            "city": "Nagpur",
            "ifsccode": "IFSC1234"
          };
          this.addressDetails = {
            "address": "pune",
            "country": "India",
            "State": "Maharashtra",
            "city": "Pune",
            "pincode": "411036"
          };
        }

        _createClass(_BankAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openADDBANK",
          value: function openADDBANK() {
            var dialogRef = this.dialog.open(_addbankemployee_addbankemployee_component__WEBPACK_IMPORTED_MODULE_0__.AddbankemployeeComponent, {
              width: '700px',
              height: 'auto',
              data: {},
              panelClass: 'custom-dialog-account-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _BankAccountComponent;
      }();

      _BankAccountComponent.ɵfac = function BankAccountComponent_Factory(t) {
        return new (t || _BankAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
      };

      _BankAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BankAccountComponent,
        selectors: [["app-bank-account"]],
        decls: 55,
        vars: 5,
        consts: [[1, "modal-body"], [1, "row"], [1, "mb-3", "col-lg-1", "col-md-1", "col-xl-1", "col-sm-12"], [1, "mt-3", "col-lg-8", "col-md-8", "col-xl-8", "col-sm-12"], [1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "card-body"], [1, "delete-button", "p-3", 3, "click"], [1, "fas", "fa-plus", 2, "color", "rgba(252, 118, 67, 1)"], [1, "text-black", 2, "margin-left", "10px"], [1, "mb-3", "col-lg-3", "col-md-3", "col-xl-3", "col-sm-12"], [1, "row", "mt-3"], [1, "card", "bg-white"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "row", "mb-3"], [1, "col-md-4", "col-xl-4", "col-lg-4", "col-sm-12"], [1, "pHeading"]],
        template: function BankAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ACCOUNT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankAccountComponent_Template_button_click_11_listener() {
              return ctx.openADDBANK();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ADD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Bank Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Account holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Bank Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "IFSC Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankDetails.accountholdername);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankDetails.accountnumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankDetails.bankname);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankDetails.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankDetails.ifsccode);
          }
        },
        styles: ["input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  border: 2px solid #fc7643;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  float: left !important;\n  padding: 3px;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fc7643;\n}\n\n  .custom-dialog-account-class {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBRUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDRCxZQUFBO0FBRUg7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBRUoiLCJmaWxlIjoiYmFuay1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucEhlYWRpbmd7XHJcbkZvbnQ6UG9wcGlucztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTRweDtcclxubGluZS1oZWlnaHQ6MTZweDtcclxubGV0dGVyLXNwYWNpbmc6MC41IHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjUyLCAxMTgsIDY3LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICAgcGFkZGluZzozcHhcclxuICB9XHJcbiAgXHJcbiAgLmRlbGV0ZS1idXR0b24gaSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTIsIDExOCwgNjcsIDEpOztcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1hY2NvdW50LWNsYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50OyAgXHJcblxyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    25137:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/employeepayroll/employeepayroll-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeepayrollRoutingModule": function EmployeepayrollRoutingModule() {
          return (
            /* binding */
            _EmployeepayrollRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _pay_slip_pay_slip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pay-slip/pay-slip.component */
      3062);
      /* harmony import */


      var _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./salary-structure/salary-structure.component */
      97238);
      /* harmony import */


      var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bank-account/bank-account.component */
      44255);
      /* harmony import */


      var _main_payroll_main_payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-payroll/main-payroll.component */
      36237);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _main_payroll_main_payroll_component__WEBPACK_IMPORTED_MODULE_3__.MainPayrollComponent,
        children: [{
          path: '',
          redirectTo: 'emp-payslip',
          pathMatch: 'full'
        }, {
          path: 'emp-payslip',
          component: _pay_slip_pay_slip_component__WEBPACK_IMPORTED_MODULE_0__.PaySlipComponent
        }, {
          path: 'emp-salary',
          component: _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_1__.SalaryStructureComponent
        }, {
          path: 'emp-account',
          component: _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_2__.BankAccountComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _EmployeepayrollRoutingModule = /*#__PURE__*/_createClass(function _EmployeepayrollRoutingModule() {
        _classCallCheck(this, _EmployeepayrollRoutingModule);
      });

      _EmployeepayrollRoutingModule.ɵfac = function EmployeepayrollRoutingModule_Factory(t) {
        return new (t || _EmployeepayrollRoutingModule)();
      };

      _EmployeepayrollRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _EmployeepayrollRoutingModule
      });
      _EmployeepayrollRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_EmployeepayrollRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55994:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/employeepayroll/employeepayroll.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeepayrollModule": function EmployeepayrollModule() {
          return (
            /* binding */
            _EmployeepayrollModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _employeepayroll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./employeepayroll-routing.module */
      25137);
      /* harmony import */


      var _pay_slip_pay_slip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pay-slip/pay-slip.component */
      3062);
      /* harmony import */


      var _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./salary-structure/salary-structure.component */
      97238);
      /* harmony import */


      var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bank-account/bank-account.component */
      44255);
      /* harmony import */


      var _main_payroll_main_payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main-payroll/main-payroll.component */
      36237);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _bank_account_addbankemployee_addbankemployee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bank-account/addbankemployee/addbankemployee.component */
      55633);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EmployeepayrollModule = /*#__PURE__*/_createClass(function _EmployeepayrollModule() {
        _classCallCheck(this, _EmployeepayrollModule);
      });

      _EmployeepayrollModule.ɵfac = function EmployeepayrollModule_Factory(t) {
        return new (t || _EmployeepayrollModule)();
      };

      _EmployeepayrollModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _EmployeepayrollModule
      });
      _EmployeepayrollModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _employeepayroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeepayrollRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_EmployeepayrollModule, {
          declarations: [_pay_slip_pay_slip_component__WEBPACK_IMPORTED_MODULE_1__.PaySlipComponent, _salary_structure_salary_structure_component__WEBPACK_IMPORTED_MODULE_2__.SalaryStructureComponent, _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_3__.BankAccountComponent, _main_payroll_main_payroll_component__WEBPACK_IMPORTED_MODULE_4__.MainPayrollComponent, _bank_account_addbankemployee_addbankemployee_component__WEBPACK_IMPORTED_MODULE_6__.AddbankemployeeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _employeepayroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeepayrollRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    36237:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/employeepayroll/main-payroll/main-payroll.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPayrollComponent": function MainPayrollComponent() {
          return (
            /* binding */
            _MainPayrollComponent
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

      var _MainPayrollComponent = /*#__PURE__*/function () {
        function _MainPayrollComponent() {
          _classCallCheck(this, _MainPayrollComponent);
        }

        _createClass(_MainPayrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainPayrollComponent;
      }();

      _MainPayrollComponent.ɵfac = function MainPayrollComponent_Factory(t) {
        return new (t || _MainPayrollComponent)();
      };

      _MainPayrollComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainPayrollComponent,
        selectors: [["app-main-payroll"]],
        decls: 17,
        vars: 0,
        consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./emp-payslip", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./emp-salary", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["routerLink", "./emp-account", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-3", "col-sm-0", "col-xs-0"], [1, "mt-1"]],
        template: function MainPayrollComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pay Slip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Salary Structure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bank Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBheXJvbGwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    3062:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/employeepayroll/pay-slip/pay-slip.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaySlipComponent": function PaySlipComponent() {
          return (
            /* binding */
            _PaySlipComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      var _PaySlipComponent = /*#__PURE__*/function () {
        function _PaySlipComponent(cdr, formBuilder, toastService, titleCasePipe) {
          _classCallCheck(this, _PaySlipComponent);

          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
        }

        _createClass(_PaySlipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createpayslipForm();
          }
        }, {
          key: "createpayslipForm",
          value: function createpayslipForm() {
            this.addpayslipForm = this.formBuilder.group({
              year: [""],
              month: [""]
            });
          }
        }]);

        return _PaySlipComponent;
      }();

      _PaySlipComponent.ɵfac = function PaySlipComponent_Factory(t) {
        return new (t || _PaySlipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe));
      };

      _PaySlipComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PaySlipComponent,
        selectors: [["app-pay-slip"]],
        decls: 44,
        vars: 1,
        consts: [[1, "modal-body"], [1, "row", "mt-3"], [1, "mb-3", "col-lg-1", "col-md-1", "col-xl-1", "col-sm-12"], [1, "mt-3", "col-lg-8", "col-md-8", "col-xl-8", "col-sm-12"], [1, "row"], [1, "card", "bg-white"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "card-body"], [3, "formGroup"], [1, "col-lg-4", "col-md-4", "col-xl-4", "col-sm-4"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Year", "formControlName", "year"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Type", "formControlName", "month"], [1, "row", "mt-3", "flex", "d-flex", "flex-row", 2, "justify-content", "flex-end", "align-items", "end"], ["type", "button", 1, "btn", "btn-save", 2, "width", "100px"], [1, "mb-3", "col-lg-3", "col-md-3", "col-xl-3", "col-sm-12"]],
        template: function PaySlipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PAY SLIP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addpayslipForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption],
        styles: [".pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS1zbGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJwYXktc2xpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wSGVhZGluZ3tcclxuICAgIEZvbnQ6UG9wcGlucztcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOjAuNSBweDtcclxuICAgIH0iXX0= */"]
      });
      /***/
    },

    /***/
    97238:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/employeepayroll/salary-structure/salary-structure.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SalaryStructureComponent": function SalaryStructureComponent() {
          return (
            /* binding */
            _SalaryStructureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SalaryStructureComponent = /*#__PURE__*/function () {
        function _SalaryStructureComponent() {
          _classCallCheck(this, _SalaryStructureComponent);

          this.salary1 = {
            "Components": "CTC",
            "Monthly": 66667,
            "Annual": 800000
          };
          this.salary2 = [{
            "Components": "Basic",
            "Monthly": 33333,
            "Annual": 400000
          }, {
            "Components": "HRA",
            "Monthly": 16666,
            "Annual": 200000
          }, {
            "Components": "Special Allowance",
            "Monthly": 17335,
            "Annual": 160000
          }, {
            "Components": "Total",
            "Monthly": 66667,
            "Annual": 800000
          }, {
            "Components": "Provident Fund (PF) Deduction",
            "Monthly": -3600,
            "Annual": -43200
          }, {
            "Components": "Professional Tax",
            "Monthly": -200,
            "Annual": -2400
          }, {
            "Components": "Total",
            "Monthly": 62867,
            "Annual": 754400
          }];
        }

        _createClass(_SalaryStructureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SalaryStructureComponent;
      }();

      _SalaryStructureComponent.ɵfac = function SalaryStructureComponent_Factory(t) {
        return new (t || _SalaryStructureComponent)();
      };

      _SalaryStructureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SalaryStructureComponent,
        selectors: [["app-salary-structure"]],
        decls: 94,
        vars: 3,
        consts: [[1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "card-body"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0", "m-3"], [1, "text-600", 2, "background-color", "rgba(248, 248, 248, 1)"], [1, "col-5"], [1, "text-center"], [2, "background-color", "rgba(248, 248, 248, 1)"], [1, "fw-bold"]],
        template: function SalaryStructureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Salary structure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Annual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Annual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "33333");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "400000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "HRA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "16666");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "200000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Special Allowance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "17335");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "160000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Adjustment Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "66667");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "800000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Provident Fund (PF) Deduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "-3600");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "43200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Professional Tax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "-200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "-2400");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Adjustment Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "62867");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " 754400");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.salary1.Components);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.salary1.Monthly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.salary1.Annual);
          }
        },
        styles: ["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeS1zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUFtQixrREFBQTtBQUN2Qjs7QUFFQSw4Q0FBQSIsImZpbGUiOiJzYWxhcnktc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdGQge1xyXG4gIC8vICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7IC8qIEFkanVzdCB0aGUgcGFkZGluZyBmb3IgbGVmdCBhbmQgcmlnaHQgc3BhY2luZyAqL1xyXG59XHJcblxyXG4vKiBSaWdodC1hbGlnbiB0aGUgdGV4dCBpbiB0aGUgc2Vjb25kIGNvbHVtbiAqL1xyXG4vLyB0YWJsZSB0ZDpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIH0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_employeepayroll_employeepayroll_module_ts-es5.js.map