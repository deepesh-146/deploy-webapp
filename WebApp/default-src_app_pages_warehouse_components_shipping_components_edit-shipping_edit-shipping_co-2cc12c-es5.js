(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["default-src_app_pages_warehouse_components_shipping_components_edit-shipping_edit-shipping_co-2cc12c"], {
    /***/
    43772:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/warehouse/components/shipping/components/edit-shipping/edit-shipping.component.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditShippingComponent": function EditShippingComponent() {
          return (
            /* binding */
            _EditShippingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/warehouse.service */
      78381);
      /* harmony import */


      var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/party.service */
      42109);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function EditShippingComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tracking Details is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EditShippingComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Shipment Id is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EditShippingComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Carrier is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          "disabled": true
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "disabled": a0
        };
      };

      var _EditShippingComponent = /*#__PURE__*/function () {
        function _EditShippingComponent(formBuilder, router, commonService, toastService, dialog, titleCasePipe, data, dialogRef, warehouseService, partyService) {
          _classCallCheck(this, _EditShippingComponent);

          var _a;

          this.formBuilder = formBuilder;
          this.router = router;
          this.commonService = commonService;
          this.toastService = toastService;
          this.dialog = dialog;
          this.titleCasePipe = titleCasePipe;
          this.data = data;
          this.dialogRef = dialogRef;
          this.warehouseService = warehouseService;
          this.partyService = partyService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.today = new Date();
          this.packageData = this.data.packageData;
          this.packStatus = (_a = this.data.packageData) === null || _a === void 0 ? void 0 : _a.packStatus;
        }

        _createClass(_EditShippingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      this.shippingForm = this.formBuilder.group({
                        name: [{
                          value: null,
                          disabled: true
                        }, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                        saleInvoice: [{
                          value: null,
                          disabled: true
                        }, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                        trackingDetails: [null],
                        shipmentId: [null],
                        carrier: [null],
                        packStatus: [null]
                      });
                      _context.next = 4;
                      return this.getPackageData();

                    case 4:
                      _context.next = 9;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](0);
                      this.toastService.toastMsg({
                        title: 'Error',
                        content: _context.t0
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 6]]);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.shippingForm.controls;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "getPackageData",
          value: function getPackageData() {
            var _a, _b;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.packageData) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 3;
                      return this.shippingForm.patchValue({
                        name: this.packageData.customerName,
                        saleInvoice: this.packageData.invoiceNo,
                        trackingDetails: this.packageData.trackingDetails,
                        shipmentId: this.packageData.shipmentId,
                        carrier: this.packageData.carrier,
                        packStatus: this.packageData.packStatus
                      });

                    case 3:
                      this.subTotal = (_a = this.packageData) === null || _a === void 0 ? void 0 : _a.totalAmount;
                      this.shippingCharge = (_b = this.packageData) === null || _b === void 0 ? void 0 : _b.shippingCharge;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
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
          key: "onSave",
          value: function onSave() {
            var _this = this;

            var _a, _b, _c;

            this.submitted = true;

            if (this.shippingForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              var data = {
                userId: this.currentUser.id,
                updateData: {
                  name: "package",
                  customerName: (_a = this.packageData) === null || _a === void 0 ? void 0 : _a.customerName,
                  mobile: (_b = this.packageData) === null || _b === void 0 ? void 0 : _b.mobile,
                  address: (_c = this.packageData) === null || _c === void 0 ? void 0 : _c.address,
                  trackingDetails: this.shippingForm.value.trackingDetails,
                  shipmentId: this.shippingForm.value.shipmentId,
                  carrier: this.shippingForm.value.carrier,
                  packStatus: this.packStatus === 'PACKED' ? 'SHIPPED' : this.packStatus === 'SHIPPED' ? 'DELIVERED' : this.packStatus
                }
              };
              this.warehouseService.updatePackage(data, this.packageData.id).then(function (res) {
                if (res.success) {
                  _this.dialogRef.close();

                  _this.commonService.notifyDataAdded();

                  _this.toastService.toastMsg({
                    title: "Success",
                    content: "Shipping Data Updated Successfully!!!"
                  });
                }
              });
            }
          }
        }]);

        return _EditShippingComponent;
      }();

      _EditShippingComponent.ɵfac = function EditShippingComponent_Factory(t) {
        return new (t || _EditShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__.PartyService));
      };

      _EditShippingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EditShippingComponent,
        selectors: [["app-edit-shipping"]],
        decls: 63,
        vars: 32,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "5px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-save", "ms-2", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", 2, "font-size", "12px", 3, "ngClass"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Name", "maxlength", "50", "formControlName", "name", 3, "disabled"], ["matInput", "", "placeholder", "Sale Invocie", "maxlength", "50", "formControlName", "saleInvoice", 3, "disabled"], ["matInput", "", "placeholder", "Tracking Details", "maxlength", "50", "formControlName", "trackingDetails", "required", ""], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "placeholder", "Shipment Id", "maxlength", "50", "formControlName", "shipmentId", "required", ""], ["matInput", "", "placeholder", "Carrier", "maxlength", "50", "formControlName", "carrier", "required", ""], [1, "row"], [1, "col-sm-12", "col-md-6", "col-lg-6", "table-bordered", "my-custom-scrollbar"], [1, "table", "table-bordered", "p-5", "my-custom-scrollbar"], [1, "thWidth", "p-2", 2, "text-align", "left"], [1, "p-2", 2, "text-align", "right"], [1, "text-danger"]],
        template: function EditShippingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Shipping Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditShippingComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditShippingComponent_Template_button_click_6_listener() {
              return ctx.onSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Sale Invocie");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Tracking Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, EditShippingComponent_mat_error_27_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Shipment Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, EditShippingComponent_mat_error_33_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Carrier");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, EditShippingComponent_mat_error_40_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "shippingCharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.packStatus === "PACKED" ? "SHIPPED" : ctx.packStatus === "SHIPPED" ? "DELIVERED" : "SAVE", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.shippingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c1, ctx.packStatus !== "PACKED"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.trackingDetails.touched) && (ctx.f.trackingDetails.errors == null ? null : ctx.f.trackingDetails.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c1, ctx.packStatus !== "PACKED"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.shipmentId.touched) && (ctx.f.shipmentId.errors == null ? null : ctx.f.shipmentId.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c1, ctx.packStatus !== "PACKED"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.carrier.touched) && (ctx.f.carrier.errors == null ? null : ctx.f.carrier.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](50, 15, ctx.subTotal || 0, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](56, 18, ctx.shippingCharge || 0, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" AED\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](62, 21, (ctx.shippingCharge || 0) + (ctx.subTotal || 0), "1.2-2"), " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.matSuffix[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: medium;\n}\n\n  .cdk-overlay-pane {\n  min-width: 200px !important;\n  transform: translateX(-18px) !important;\n}\n\n.mat-select-panel[_ngcontent-%COMP%] {\n  max-width: 30%;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  \n  pointer-events: none;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2hpcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUNGOztFQUVBO0lBQ0UsZ0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFBYyxpQ0FBQTtFQUNkLG9CQUFBO0VBQXNCLHlCQUFBO0VBQ3RCLG9EQUFBO0FBQUYiLCJmaWxlIjoiZWRpdC1zaGlwcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgaGVpZ2h0OiA4OCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1hdFN1ZmZpeCB7XHJcbiAgcGFkZGluZyA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi8vIHJlbGF0ZWQgdG8gZHJvcGRvd24gb2YgdGhlIGNvdW50cnknc1xyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4gIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIHJlbGF0ZWQgdG8gZHJvcGRvd24gb2YgdGhlIGNvdW50cnknc1xyXG4ubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41OyAvKiBBZGp1c3QgdGhlIHN0eWxpbmcgYXMgbmVlZGVkICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIFByZXZlbnQgaW50ZXJhY3Rpb25zICovXHJcbiAgLyogQWRkaXRpb25hbCBzdHlsaW5nIHRvIGluZGljYXRlIGEgZGlzYWJsZWQgc3RhdGUgKi9cclxufVxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_warehouse_components_shipping_components_edit-shipping_edit-shipping_co-2cc12c-es5.js.map